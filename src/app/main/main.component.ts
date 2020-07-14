import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { AppConstants } from '../shared/constants/app-constants';
import { ComponentConstants } from '../shared/constants/component-constants';
import { LangConstants } from '../shared/constants/lang-constants';
import { MenuConstants } from '../shared/constants/menu-constants';
import { ComponentOpenMode } from '../shared/enums/component-open-mode.enum';
import { SidebarVisibility } from '../shared/enums/sidebar-visibility.enum';
import { ConfirmationService } from '../shared/services/confirmation.service';
import { DomHandler } from '../shared/services/dom-handler.service';
import { LoaderService } from '../shared/services/loader.service';
import { MessageService } from '../shared/services/message.service';
import { SerializationService } from '../shared/services/serialization.service';
import { SessionService } from '../shared/services/session.service';
import { TabService } from '../shared/services/tab.service';
import { GenericComponent } from '../shared/types/generic-component';
import { LabelValue } from '../shared/types/label-value.interface';
import { PageComponentData } from '../shared/types/page-component-data.interface';
import { Tab } from '../shared/types/tab.interface';
import { Base64Utils } from '../shared/utils/base64-utils';
import { DomUtils } from '../shared/utils/dom-utils';
import { StringUtils } from '../shared/utils/string-utils';
import { LocalStorage } from '../storage/local-storage';
import { LocalStorageKeys } from '../storage/local-storage-keys';

import { TodoListSearchService } from './administration/todo-list/search/todo-list-search.service';
import { GlobalSearchOverlayComponent } from './global-search-overlay/global-search-overlay.component';
import { HeaderDashboardsOverlayComponent } from './header-dashboards-overlay/header-dashboards-overlay.component';
import { HeaderUserOverlayComponent } from './header-user-overlay/header-user-overlay.component';
import { MenuService } from './menu/menu.service';
import { MenuEntry } from './menu/types/menu-entry.interface';
import { OverlayService } from './overlay/overlay.service';

@Component({
  selector: 'aw-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent extends GenericComponent implements OnDestroy, OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
  private static readonly SUBMENU_WIDTH: number = 304;
  private static readonly SUBMENU_NB_HIGH_THRESHOLD: number = 4;
  private static readonly SUBMENU_NB_LOW_THRESHOLD: number = 1;

  public readonly langConstant: typeof LangConstants;

  @ViewChild('menuContainer')
  public menuContainer: ElementRef;

  public currentMenuEntry: MenuEntry | undefined;
  public currentTab: Tab | undefined;
  public homeTab: Tab | undefined;
  public megaMenuOffsetLeft: string | undefined;
  public megaMenuWidth: string | undefined;
  public scrollToTopButtonVisible: boolean;
  public selectedMenuEntryKey: string | undefined;
  public showLoadingBar: boolean;
  public showMenuEntry: boolean;
  public sidebarOverlayVisible: boolean;
  public tabs: Tab[];
  public tabsHistory: Tab[];

  public searchMenuDialogVisible: boolean;

  private homeTabSubscription: Subscription;
  private sidebarVisibility: SidebarVisibility;

  public todoListLength: number;
  public overlayHeaderUserActive$: BehaviorSubject<boolean>;
  public overlayDashboardsActive$: BehaviorSubject<boolean>;
  public overlayGlobalSearchActive$: BehaviorSubject<boolean>;
  private readonly _searchTextChanged: Subject<string>;
  private readonly _menuEntries$: BehaviorSubject<LabelValue<string>[]>;
  public searchvalue: string;

  public constructor(
    public menuService: MenuService,
    public sessionService: SessionService,
    public tabService: TabService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly domHandler: DomHandler,
    private readonly loaderService: LoaderService,
    private readonly localStorage: LocalStorage,
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly todoListSearchService: TodoListSearchService,
    private readonly _overlayService: OverlayService
  ) {
    super(ComponentOpenMode.Write);

    this.langConstant = LangConstants;

    this.overlayHeaderUserActive$ = new BehaviorSubject<boolean>(false);
    this.overlayDashboardsActive$ = new BehaviorSubject<boolean>(false);
    this.overlayGlobalSearchActive$ = new BehaviorSubject<boolean>(false);
    this._searchTextChanged = new Subject<string>();
    this._menuEntries$ = new BehaviorSubject<LabelValue<string>[]>([]);
    this.searchvalue = '';

    this.currentTab = undefined;
    this.homeTab = undefined;
    this.megaMenuOffsetLeft = undefined;
    this.megaMenuWidth = undefined;
    this.scrollToTopButtonVisible = false;
    this.searchMenuDialogVisible = false;
    this.selectedMenuEntryKey = undefined;
    this.showLoadingBar = false;
    this.sidebarOverlayVisible = false;
    this.tabs = [];
    this.tabsHistory = [];

    this.sessionService.initSpecificClient();
    this.sessionService.open();

    this.initSidebarVisibility();

    this.menuService.load();
    this.menuService.loadDashboards();

    this.hideMenuEntry();

    this.registerHomeTabObservable();
    this.registerLoaderObservable();
    this.registerTabContextObservable();
    this.registerTabObservable();

    this.setSeachTextChanged();
  }

  public getComponentName(): string {
    return 'MainComponent';
  }

  public ngOnInit() {
    this.menuService.openHome();
    this.todoListSearchService.refreshWholeTodoList();
    TodoListSearchService.todoList$.subscribe((result) => {
      this.todoListLength = result ? result.length : 0;
    });
    this.handleRequestedUrl();
  }

  public get sidebarCollapsed(): boolean {
    return this.sidebarVisibility === SidebarVisibility.Collapsed;
  }

  public get sidebarExpanded(): boolean {
    return this.sidebarVisibility === SidebarVisibility.Expanded;
  }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    if (this.showMenuEntry && !!this.menuContainer && !this.menuContainer.nativeElement.contains(event.target)) {
      this.hideMenuEntry();
    }
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    this.scrollToTopButtonVisible = window.scrollY > AppConstants.TOP_BAR_HEIGHT;
  }

  public hideSidebarOverlay(): void {
    this.sidebarOverlayVisible = false;
  }

  public onClickMenuEntry(event: Event, menuEntry: MenuEntry): void {
    this.positionMegaMenu(event, menuEntry);

    this.showMenuEntry = !this.showMenuEntry;

    this.toggleMenuEntry(menuEntry);

    event.stopPropagation();
  }

  public onHoverMenuEntry(event: Event, menuEntry: MenuEntry): void {
    this.positionMegaMenu(event, menuEntry);

    this.toggleMenuEntry(menuEntry);
  }

  public openHelp(): void {
    this.messageService.showRawWarningMessage('An online help will be available soon.');
  }

  public openSearchMenuDialog(): void {
    this.searchMenuDialogVisible = true;
  }

  public scrollToTop(): void {
    DomUtils.scrollToPosition(0);
  }

  public showHomeTab(): void {
    if (!!this.homeTab) {
      this.tabService.open(this.homeTab, { shouldReuse: true });
    }
  }

  public showSidebarOverlay(): void {
    this.sidebarOverlayVisible = true;
  }

  public showTab(requestedTab: Tab): void {
    this.hideMenuEntry();
    this.hideSidebarOverlay();
    this.saveTabData(this.currentTab);

    this.currentTab = requestedTab;

    this.tabs.forEach((tab) => {
      this.tabService.hide(tab);
    });

    this.tabService.show(requestedTab);

    this.tabsHistory = [...this.tabsHistory, requestedTab];

    const menuEntryKey = MenuConstants.COMPONENTS_ROOT[requestedTab.data.componentId];
    this.selectedMenuEntryKey = !!menuEntryKey ? menuEntryKey : undefined;
  }

  public signOut(): void {
    this.confirmationService.confirm({
      messageKey: 'global.confirmSignOut',
      accept: () => {
        this.tabs.forEach((tab) => {
          this.tabService.delete(tab);
        });

        this.sessionService.close();
      }
    });
  }

  public toggleSidebarVisibility(): void {
    this.sidebarVisibility =
      this.sidebarVisibility === SidebarVisibility.Collapsed ? SidebarVisibility.Expanded : SidebarVisibility.Collapsed;
  }

  private computeMegaMenuWidth(menuEntry: MenuEntry): number {
    if (menuEntry.submenus.length >= MainComponent.SUBMENU_NB_HIGH_THRESHOLD) {
      return MainComponent.SUBMENU_WIDTH * MainComponent.SUBMENU_NB_HIGH_THRESHOLD;
    } else if (menuEntry.submenus.length <= MainComponent.SUBMENU_NB_LOW_THRESHOLD) {
      return MainComponent.SUBMENU_WIDTH * (MainComponent.SUBMENU_NB_LOW_THRESHOLD + 1);
    } else {
      return MainComponent.SUBMENU_WIDTH * menuEntry.submenus.length;
    }
  }

  private initSidebarVisibility(): void {
    this.sidebarVisibility =
      document.body.getBoundingClientRect().right >= AppConstants.PAGE_MAX_WIDTH
        ? SidebarVisibility.Expanded
        : SidebarVisibility.Collapsed;
  }

  private handleRequestedUrl(): void {
    // Check if a requested url exists in local storage
    const requestedUrl = this.localStorage.load<string>(LocalStorageKeys.REQUESTED_URL);
    if (!StringUtils.isNullOrEmpty(requestedUrl)) {
      const params: { id: string; object: string } = this.serializationService.deserialize(requestedUrl);
      this.openRequestedUrl(params);

      this.localStorage.remove(LocalStorageKeys.REQUESTED_URL);
    }
  }

  private hideMenuEntry(): void {
    this.showMenuEntry = false;
    this.currentMenuEntry = undefined;
  }

  private openMenuEntry(menuEntry: MenuEntry): void {
    this.currentMenuEntry = menuEntry;
    this.showMenuEntry = true;
  }

  private openRequestedUrl(params: { id: string; object: string }): void {
    const component = `${Base64Utils.decodeUrl(params.object)}Component`;
    const labelKey = `transaction.${component}`;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: component,
      objectId: Base64Utils.decodeUrl(params.id),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private positionMegaMenu(event: Event, menuEntry: MenuEntry): void {
    /*tslint:disable:no-magic-numbers*/

    const leftSidebarElements = document.getElementsByClassName('left-sidebar');
    const leftSidebarOffset =
      leftSidebarElements.length === 1 ? (leftSidebarElements[0] as HTMLElement).offsetWidth : 0;

    const eventTarget = (event.target as HTMLElement).parentElement as HTMLElement;
    const targetOffsetLeft = eventTarget.offsetLeft + leftSidebarOffset;
    const targetWidth = eventTarget.offsetWidth;

    const targetMidPosition = targetOffsetLeft + targetWidth / 2;
    const megaMenuWidth = this.computeMegaMenuWidth(menuEntry);
    const viewportWidth = this.domHandler.getViewport().width - this.domHandler.getScrollbarWidth();

    let offsetLeft: number;
    if (targetMidPosition + megaMenuWidth / 2 <= viewportWidth && targetMidPosition - megaMenuWidth / 2 >= 0) {
      offsetLeft = targetMidPosition - megaMenuWidth / 2;
    } else if (targetOffsetLeft + megaMenuWidth <= viewportWidth) {
      offsetLeft = targetOffsetLeft;
    } else if (targetOffsetLeft + targetWidth - megaMenuWidth >= 0) {
      offsetLeft = targetOffsetLeft + targetWidth - megaMenuWidth;
    } else {
      offsetLeft = (viewportWidth - megaMenuWidth) / 2;
    }

    this.megaMenuOffsetLeft = `${offsetLeft}px`;
    this.megaMenuWidth = `${megaMenuWidth}px`;

    /*tslint:enable:no-magic-numbers*/
  }

  private registerHomeTabObservable(): void {
    this.homeTabSubscription = this.tabService.tabHome$.subscribe((requestedTab: Tab) => {
      this.homeTab = requestedTab;
      this.tabs = [this.homeTab, ...this.tabs];

      this.showHomeTab();

      this.homeTabSubscription.unsubscribe();
    });
  }

  private registerLoaderObservable(): void {
    this.loaderService.moduleLoadingStatus$.pipe(takeUntil(this.unsubscribe)).subscribe((status: boolean) => {
      setTimeout(() => {
        this.showLoadingBar = status;
      });
    });
  }

  private registerTabContextObservable(): void {
    this.tabService.tabContexts$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((tabContextData: { id: number; context: string; translate: boolean }) => {
        const targetedTab = this.tabs.find((tab) => tab.data.id === tabContextData.id);
        if (!!targetedTab) {
          targetedTab.context = tabContextData.context;
          targetedTab.translatedContext = tabContextData.translate;
        }
      });
  }

  private registerTabObservable(): void {
    this.tabService.tabs$.pipe(takeUntil(this.unsubscribe)).subscribe(({ tab, shouldReuse }) => {
      if (shouldReuse) {
        const openedTab = this.tabs.find((existingTab) => existingTab.id === tab.id);
        if (openedTab) {
          this.showTab(openedTab as Tab);
        } else {
          // FIXME Workaround mantis 3102
          this.messageService.showErrorMessage('tab.errorOnShow');
        }
      } else {
        this.tabs = [tab, ...this.tabs];
        this.showTab(tab);
      }
    });
  }

  private saveTabData(tab: Tab | undefined): void {
    if (tab) {
      tab.scrollY = window.scrollY;
    }
  }

  private toggleMenuEntry(menuEntry: MenuEntry): void {
    if (this.showMenuEntry) {
      this.openMenuEntry(menuEntry);
    } else {
      this.hideMenuEntry();
    }
  }

  public openTodoList(): void {
    const component = ComponentConstants.ADM_TODO_LIST_SEARCH;
    const labelKey = `transaction.${component}`;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: component,
      objectId: undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**************************************************************************
   * Utils
   *************************************************************************/

  // Method used to prevent back button default behavior
  public canDeactivate(): Observable<boolean> | boolean {
    return false;
  }

  public showHeaderUserOverlay(origin: HTMLElement): void {
    this.overlayHeaderUserActive$.next(true);
    const overlayRef = this._overlayService.openWithPositionRelative({
      origin,
      content: HeaderUserOverlayComponent,
      positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
    });
    overlayRef.afterClosed$.subscribe({
      complete: () => {
        this.overlayHeaderUserActive$.next(false);
      }
    });
  }

  public showDashboards(origin: HTMLElement): void {
    if (this.menuService.dashboardEntries.length === 1) {
      this.menuService.openMenuEntry(this.menuService.dashboardEntries[0].key);
    } else {
      this.overlayDashboardsActive$.next(true);
      const overlayRef = this._overlayService.openWithPositionRelative({
        origin,
        content: HeaderDashboardsOverlayComponent,
        positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
      });
      overlayRef.afterClosed$.subscribe({
        complete: () => {
          this.overlayDashboardsActive$.next(false);
        }
      });
    }
  }

  public search(): void {
    this._searchTextChanged.next(this.searchvalue);
  }

  public showGlobalSearchOverlay(origin: HTMLElement): void {
    this.overlayGlobalSearchActive$.next(true);

    const overlayRef = this._overlayService.openWithPositionRelative({
      origin,
      content: GlobalSearchOverlayComponent,
      data: this._menuEntries$,
      positions: [{ originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }]
    });

    overlayRef.afterClosed$.subscribe({
      complete: () => {
        this.searchvalue = '';
        this.overlayGlobalSearchActive$.next(false);
      }
    });
  }

  private setSeachTextChanged(): void {
    this._searchTextChanged
      .pipe(debounceTime(MainComponent.SEARCH_TEXT_DEBOUNCE_TIME), distinctUntilChanged(), takeUntil(this.unsubscribe))
      .subscribe({
        next: (searchText) => {
          const formattedSearchText = searchText.toUpperCase();
          const regexSearchText = new RegExp(`(${searchText})`, 'gi');

          const matchingMenuEntries = this.menuService.menuEntries
            .map((menuEntry) => menuEntry.submenus)
            .reduce((acc, x) => acc.concat(x), [])
            .map((menuEntry) => menuEntry.submenus)
            .reduce((acc, x) => acc.concat(x), [])
            .map((menuEntry) => {
              return {
                label: this.translateService.instant(`transaction.${menuEntry.key}`) as string,
                value: menuEntry.key
              };
            })
            .filter((selectOption) => selectOption.label.toUpperCase().includes(formattedSearchText))
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((selectOption) => {
              const label = StringUtils.isEmpty(searchText)
                ? selectOption.label
                : selectOption.label.replace(regexSearchText, '<b>$1</b>');

              return { ...selectOption, label };
            });

          this._menuEntries$.next(matchingMenuEntries);
        }
      });
  }

  public openPreviousTab(): void {
    const tabToShow = this.tabService.breadcrumbs[this.tabService.breadcrumbs.length - 2];
    this.tabService.open(tabToShow, { shouldReuse: true });
  }
}
