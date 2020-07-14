import { Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, first, takeUntil } from 'rxjs/operators';

import { PageTocService } from '../components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../components/component-sidebar/types/page-toc-entry.interface';
import { AppConstants } from '../constants/app-constants';
import { BidoFunctionTypeConstants } from '../constants/bido-function-type-constants';
import { ComponentConstants } from '../constants/component-constants';
import { ComponentOpenMode } from '../enums/component-open-mode.enum';
import { SidebarVisibility } from '../enums/sidebar-visibility.enum';
import { FavoriteService } from '../services/favorite.service';
import { LoaderService } from '../services/loader.service';
import { MessageService } from '../services/message.service';
import { SerializationService } from '../services/serialization.service';
import { TabService } from '../services/tab.service';
import { ListUtils } from '../utils/list-utils';
import { ObjectUtils } from '../utils/object-utils';
import { StringUtils } from '../utils/string-utils';

import { ControlByIdentifierDTO } from './api-output-types/session/control-by-identifier-dto.interface';
import { FavoriteEntry } from './favorite-entry.interface';
import { GenericComponent } from './generic-component';
import { PageComponentData } from './page-component-data.interface';

export abstract class PageComponent<T extends PageComponentData> extends GenericComponent implements OnInit {
  @Input()
  public componentData: T;

  public rightSidebarVisibility: SidebarVisibility;

  private _componentContext: string;
  private _hasManageAccessRight: boolean;
  private _hasUpdateAccessRight: boolean;
  private _isFavoriteEntry: boolean;
  private _pageTocEntrySelected: string | undefined;

  protected constructor(
    openMode: ComponentOpenMode,
    private readonly _favoriteService: FavoriteService,
    private readonly _loaderService: LoaderService,
    private readonly _messageService: MessageService,
    private readonly _serializationService: SerializationService,
    private readonly _tabService: TabService,
    private readonly _pageTocService?: PageTocService
  ) {
    super(openMode);

    this.initPageComponent();

    this.tabService.currentTabLoaded = true;
  }

  public ngOnInit(): void {
    this._loaderService.hideModuleLoadingBar();

    this.calculateAccessLevels();
    this.setupFavoriteService();
  }

  public get hasManageAccessRight(): boolean {
    return this._hasManageAccessRight;
  }

  public get hasUpdateAccessRight(): boolean {
    return this._hasUpdateAccessRight;
  }

  public get isFavoriteEntry(): boolean {
    return this._isFavoriteEntry;
  }

  public get rightSidebarCollapsed(): boolean {
    return this.rightSidebarVisibility === SidebarVisibility.Collapsed;
  }

  public get rightSidebarExpanded(): boolean {
    return this.rightSidebarVisibility === SidebarVisibility.Expanded;
  }

  public get serializationService(): SerializationService {
    return this._serializationService;
  }

  public get pageTocEntrySelected(): string | undefined {
    return this._pageTocEntrySelected;
  }

  public set pageTocEntrySelected(pageTocEntry: string | undefined) {
    if (!!pageTocEntry) {
      this.pageTocService.setAnchorSelected(pageTocEntry);

      this._pageTocEntrySelected = pageTocEntry;
    }
  }

  public closeComponent(): void {
    this.tabService.closeCurrentTab();
  }

  protected doSyncCall<U>(observable: Observable<U>, buttonClicked: { disabled: boolean }): Observable<U> {
    // Handle disabled property of this button
    const disableddPreviousValue = buttonClicked.disabled;
    buttonClicked.disabled = true;

    return observable.pipe(
      finalize(() => {
        // Restore value of property 'disabled' of this button
        buttonClicked.disabled = disableddPreviousValue;
      }),
      first()
    );
  }

  public isPageTocEntrySelected(anchor: string): boolean {
    return anchor === this.pageTocEntrySelected;
  }

  public selectPageTocEntry(pageTocEntry: string): void {
    this.pageTocEntrySelected = pageTocEntry;
  }

  /**
   * Removes table of content entry hidden by workflow configuration
   * @param toc Initial table of content entries
   * @return Table of content entries authorized by workflow configuration
   */
  public applyWorkflowOnPageToc(toc: PageTocEntry[]): PageTocEntry[] {
    let workflowToc = toc;
    if (this.userWorkflow && this.userWorkflow.listControlByIdentifier && toc) {
      const USER_WORFLOW_TABLE_OF_CONTENT_TOKEN = 'toc.';
      const hiddenTocId: string[] = this.userWorkflow.listControlByIdentifier
        .filter((control: ControlByIdentifierDTO) => {
          return (
            !control.isVisible &&
            !!control.itemIdentifier &&
            control.itemIdentifier.startsWith(USER_WORFLOW_TABLE_OF_CONTENT_TOKEN)
          );
        })
        .map((control: ControlByIdentifierDTO): string => {
          let tocId = '';
          if (control.itemIdentifier) {
            tocId = control.itemIdentifier.substr(USER_WORFLOW_TABLE_OF_CONTENT_TOKEN.length);
          }

          return tocId;
        });

      workflowToc = toc.filter((item) => hiddenTocId.indexOf(item.id) === -1);
    }

    return workflowToc;
  }

  public updateFavoriteState(): void {
    this._favoriteService.updateFavoriteState(
      this._isFavoriteEntry,
      this.getComponentName(),
      this.componentData.objectId,
      this._componentContext
    );
  }

  protected get pageTocService(): PageTocService {
    return this._pageTocService as PageTocService;
  }

  protected get messageService(): MessageService {
    return this._messageService;
  }

  protected get tabService(): TabService {
    return this._tabService;
  }

  protected displayComponentContext(context: string, translate: boolean): void {
    this._componentContext = context;

    setTimeout(() => {
      if (!!this.componentData) {
        this._tabService.setTabContext(this.componentData.id, this._componentContext, translate);
      }
    });
  }

  protected registerPageTocEntryObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.pageTocEntrySelected = pageTocEntrySelected;
    });
  }

  private calculateAccessLevels(): void {
    const userRights = ComponentConstants.USER_RIGHTS[this.componentData.componentId];

    const calculateAccessLevel = (level: number) => {
      return (
        !ObjectUtils.isDefined(userRights) ||
        ListUtils.isNullOrEmpty(userRights.useCaseList) ||
        (userRights.useCaseList as string[]).some((useCase) =>
          this._sessionService.hasUserRightByUseCase(useCase, level)
        )
      );
    };

    this._hasManageAccessRight = calculateAccessLevel(BidoFunctionTypeConstants.DEGREE_MANAGE);
    this._hasUpdateAccessRight = calculateAccessLevel(BidoFunctionTypeConstants.DEGREE_UPDATE);
  }

  private initPageComponent(): void {
    this._componentContext = '';
    this._isFavoriteEntry = false;
    this.pageTocEntrySelected = undefined;

    this.rightSidebarVisibility =
      document.body.getBoundingClientRect().right >= AppConstants.PAGE_MAX_WIDTH
        ? SidebarVisibility.Expanded
        : SidebarVisibility.Collapsed;
  }

  private setupFavoriteService(): void {
    // Retrieve initial state
    this._favoriteService.isFavorite(this.getComponentName(), this.componentData.objectId).subscribe((result) => {
      this._isFavoriteEntry = result;
    });

    // Subscribe to observable handling favorite state update
    this._favoriteService.favoriteUpdateConfirmed$.pipe(takeUntil(this.unsubscribe)).subscribe(
      (key: string) => {
        const favorite: FavoriteEntry = this._favoriteService.fromString(key);
        if (
          favorite.componentId === this.getComponentName() &&
          ((StringUtils.isNullOrEmpty(favorite.objectId) && StringUtils.isNullOrEmpty(this.componentData.objectId)) ||
            (favorite.objectId as string) === (this.componentData.objectId as string))
        ) {
          this._isFavoriteEntry = !this._isFavoriteEntry;
        }
      },
      (key: string) => {
        const favorite: FavoriteEntry = this._favoriteService.fromString(key);
        if (favorite.componentId === this.getComponentName() && favorite.objectId === this.componentData.objectId) {
          if (this._isFavoriteEntry) {
            this.messageService.showErrorMessage('global.errorOnAddFavorite');
          } else {
            this.messageService.showErrorMessage('global.errorOnRemoveFavorite');
          }
        }
      }
    );
  }
}
