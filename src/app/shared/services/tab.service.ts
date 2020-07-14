import { ComponentRef, Injectable } from '@angular/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { Observable, Subject } from 'rxjs';

import { PageComponent } from '../../shared/types/page-component';
import { PageComponentData } from '../../shared/types/page-component-data.interface';
import { BidoFunctionTypeConstants } from '../constants/bido-function-type-constants';
import { ComponentConstants } from '../constants/component-constants';
import { MenuConstants } from '../constants/menu-constants';
import { ComponentOpenMode } from '../enums/component-open-mode.enum';
import { FormPageComponent } from '../types/form-page-component';
import { Tab } from '../types/tab.interface';
import { ListUtils } from '../utils/list-utils';
import { ObjectUtils } from '../utils/object-utils';

import { ConfirmationService } from './confirmation.service';
import { MessageService } from './message.service';
import { SessionService } from './session.service';

@Injectable()
export class TabService {
  private static tabCounter = 0;

  private readonly _componentRefMap: Map<number, ComponentRef<PageComponent<PageComponentData>>>;
  private readonly _currentTabToClose$: Observable<void>;
  private readonly _currentTabToCloseSource: Subject<void>;
  private readonly _tabContexts$: Observable<{ id: number; context: string; translate: boolean }>;
  private readonly _tabContextsSource: Subject<{ id: number; context: string; translate: boolean }>;
  private readonly _tabHomeSource: Subject<Tab>;
  private readonly _tabHome$: Observable<Tab>;
  private readonly _tabs$: Observable<{ tab: Tab; shouldReuse: boolean }>;
  private readonly _tabsSource: Subject<{ tab: Tab; shouldReuse: boolean }>;
  private readonly _tabToHide$: Observable<Tab>;
  private readonly _tabToHideSource: Subject<Tab>;
  private readonly _tabToShow$: Observable<Tab>;
  private readonly _tabToShowSource: Subject<Tab>;

  public breadcrumbs: Tab[];
  public currentTabLoaded: boolean;

  private readonly breadcrumbsMap: Map<string, Tab[]>;

  public currentTab: Tab | undefined;

  private homeTab: Tab | undefined;

  public constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly sessionService: SessionService
  ) {
    this._componentRefMap = new Map<number, ComponentRef<PageComponent<PageComponentData>>>();

    this._tabContextsSource = new Subject<{ id: number; context: string; translate: boolean }>();
    this._tabHomeSource = new Subject<Tab>();
    this._tabsSource = new Subject<{ tab: Tab; shouldReuse: boolean }>();
    this._currentTabToCloseSource = new Subject<void>();
    this._tabToHideSource = new Subject<Tab>();
    this._tabToShowSource = new Subject<Tab>();

    this._tabContexts$ = this._tabContextsSource.asObservable();
    this._tabHome$ = this._tabHomeSource.asObservable();
    this._tabs$ = this._tabsSource.asObservable();
    this._currentTabToClose$ = this._currentTabToCloseSource.asObservable();
    this._tabToHide$ = this._tabToHideSource.asObservable();
    this._tabToShow$ = this._tabToShowSource.asObservable();

    this.breadcrumbs = [];
    this.currentTabLoaded = false;
    this.breadcrumbsMap = new Map<string, Tab[]>();

    this.currentTab = undefined;
  }

  public get tabContexts$(): Observable<{ id: number; context: string; translate: boolean }> {
    return this._tabContexts$;
  }

  public get tabHome$(): Observable<Tab> {
    return this._tabHome$;
  }

  public get tabs$(): Observable<{ tab: Tab; shouldReuse: boolean }> {
    return this._tabs$;
  }

  public get currentTabToClose$(): Observable<void> {
    return this._currentTabToClose$;
  }

  public get tabToHide$(): Observable<Tab> {
    return this._tabToHide$;
  }

  public get tabToShow$(): Observable<Tab> {
    return this._tabToShow$;
  }

  public closeCurrentTab(): void {
    this._currentTabToCloseSource.next();
  }

  public delete(tab: Tab): void {
    const componentRef = this._componentRefMap.get(tab.id);
    if (!!componentRef) {
      componentRef.destroy();
    }
    this._componentRefMap.delete(tab.id);
  }

  public create(data: PageComponentData, label: string, translatedLabel: boolean): Tab {
    return {
      id: data.id,
      data,
      isVisible: false,
      label,
      translatedLabel
    };
  }

  public generateId(): number {
    return TabService.tabCounter++;
  }

  public hide(tab: Tab): void {
    tab.isVisible = false;

    setTimeout(() => {
      this._tabToHideSource.next(tab);
    });
  }

  public open(tab: Tab, { shouldReuse }: { shouldReuse: boolean } = { shouldReuse: false }): void {
    const _open = () => {
      let isAllowed = true;

      const componentAccessRight = ComponentConstants.USER_RIGHTS[tab.data.componentId];
      if (ObjectUtils.isDefined(componentAccessRight)) {
        if (
          !ListUtils.isNullOrEmpty(componentAccessRight.useCaseList) &&
          !ListUtils.isNullOrEmpty(componentAccessRight.profileList)
        ) {
          isAllowed = (componentAccessRight.profileList as string[]).some((profile) =>
            this.sessionService.hasUserRightByProfile(profile)
          );
          if (!isAllowed) {
            isAllowed = (componentAccessRight.useCaseList as string[]).some((useCase) =>
              this.sessionService.hasUserRightByUseCase(useCase, BidoFunctionTypeConstants.DEGREE_DISPLAY)
            );
          }
        } else if (!ListUtils.isNullOrEmpty(componentAccessRight.useCaseList)) {
          isAllowed = (componentAccessRight.useCaseList as string[]).some((useCase) =>
            this.sessionService.hasUserRightByUseCase(useCase, BidoFunctionTypeConstants.DEGREE_DISPLAY)
          );
        } else if (!ListUtils.isNullOrEmpty(componentAccessRight.profileList)) {
          isAllowed = (componentAccessRight.profileList as string[]).some((profile) =>
            this.sessionService.hasUserRightByProfile(profile)
          );
        }
      }

      if (isAllowed) {
        const key = this.createBreadcrumbsMapKey(tab);
        if (!this.breadcrumbsMap.has(key) || !shouldReuse) {
          const breadcrumbs = Object.values(MenuConstants.COMPONENTS).includes(tab.data.componentId)
            ? [tab]
            : [...this.breadcrumbs, tab];
          this.breadcrumbsMap.set(key, breadcrumbs);
        }

        this.breadcrumbs = this.breadcrumbsMap.get(key) as Tab[];
        this.currentTab = tab;

        this._tabsSource.next({ tab, shouldReuse });
      } else {
        this.messageService.showErrorMessage('tab.warningOnMissingUserRights');
      }
    };

    if (this.currentTab && this.shouldAskBeforeClosing(this.currentTab)) {
      this.confirmationService.confirm({
        messageKey: 'confirmationMessage.closePage',
        accept: () => {
          _open();
        }
      });
    } else {
      _open();
    }
  }

  public openPreviousTab(): void {
    const previousPage = this.breadcrumbs.length > 1 ? this.breadcrumbs[this.breadcrumbs.length - 2] : this.homeTab;
    if (previousPage) {
      this.open(previousPage, { shouldReuse: true });
    }
  }

  private createBreadcrumbsMapKey(tab: Tab): string {
    return tab.data.objectId ? tab.data.componentId + '@' + tab.data.objectId : tab.data.componentId;
  }

  public openHome(tab: Tab): void {
    this.homeTab = tab;

    this._tabHomeSource.next(tab);
  }

  public register(tab: Tab, componentRef: ComponentRef<PageComponent<PageComponentData>>): void {
    this._componentRefMap.set(tab.id, componentRef);
  }

  public setTabContext(id: number, context: string, translate: boolean): void {
    this._tabContextsSource.next({ id, context, translate });
  }

  public shouldAskBeforeClosing(tab: Tab): boolean {
    const componentRef = this._componentRefMap.get(tab.id);

    return (
      !!componentRef &&
      componentRef.instance instanceof FormPageComponent &&
      (componentRef.instance.openMode === ComponentOpenMode.Write ||
        componentRef.instance.openMode === ComponentOpenMode.Create)
    );
  }

  public show(tab: Tab, options?: { updateBreadcrumb?: boolean }): void {
    tab.isVisible = true;

    if (options && options.updateBreadcrumb) {
      const key = this.createBreadcrumbsMapKey(tab);
      this.breadcrumbs = this.breadcrumbsMap.has(key) ? (this.breadcrumbsMap.get(key) as Tab[]) : [];
    }

    setTimeout(() => {
      this._tabToShowSource.next(tab);
    });
  }
}
