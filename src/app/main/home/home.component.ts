import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';

import { MenuConstants } from '../../shared/constants/menu-constants';
import { ComponentOpenMode } from '../../shared/enums/component-open-mode.enum';
import { AppVersionService } from '../../shared/services/app-version.service';
import { DateService } from '../../shared/services/date.service';
import { FavoriteService } from '../../shared/services/favorite.service';
import { LoaderService } from '../../shared/services/loader.service';
import { SessionService } from '../../shared/services/session.service';
import { TabService } from '../../shared/services/tab.service';
import { FavoriteEntry } from '../../shared/types/favorite-entry.interface';
import { GenericComponent } from '../../shared/types/generic-component';
import { PageComponentData } from '../../shared/types/page-component-data.interface';
import { StringUtils } from '../../shared/utils/string-utils';
import { MenuService } from '../menu/menu.service';
import { MenuEntry } from '../menu/types/menu-entry.interface';

@Component({
  animations: [
    trigger('imgState', [
      state(
        'hidden',
        style({
          display: 'none',
          opacity: '0'
        })
      ),
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      transition('hidden => visible', [style({ display: 'block' }), animate('1000ms ease-in')])
    ]),
    trigger('mainContainerState', [
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      transition('hidden => visible', [animate('1000ms')])
    ])
  ],
  selector: 'aw-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent extends GenericComponent implements OnInit {
  private static readonly IMG_STATE_TIMEOUT: number = 500;
  private static readonly MAIN_CONTAINER_STATE_TIMEOUT: number = 250;

  private static readonly administrationLogoUri = 'assets/img/menu-administration.svg';
  private static readonly collaborativeCockpitLogoUri = 'assets/img/menu-collaborative-cockpit.svg';
  private static readonly engineeringDataLogoUri = 'assets/img/menu-engineering-data.svg';
  private static readonly fleetManagementLogoUri = 'assets/img/menu-fleet-management.svg';
  private static readonly flightOperationLogoUri = 'assets/img/menu-flight-operations.svg';
  private static readonly humanResourcesLogoUri = 'assets/img/menu-human-resources.svg';
  private static readonly logisticsLogoUri = 'assets/img/menu-logistics.svg';
  private static readonly maintenanceLogoUri = 'assets/img/menu-maintenance.svg';

  public favorites: FavoriteEntry[];
  public favoriteToOpen: FavoriteEntry | undefined;
  public selectedMenuEntry: MenuEntry | undefined;
  public selectedSubmenuEntry: MenuEntry | undefined;

  // Animations
  public imgState: string;
  public mainContainerState: string;

  public constructor(
    public appVersionService: AppVersionService,
    public dateService: DateService,
    public menuService: MenuService,
    public sessionService: SessionService,
    public tabService: TabService,
    private readonly favoriteService: FavoriteService,
    private readonly loaderService: LoaderService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.favorites = [];
    this.favoriteToOpen = undefined;
    this.selectedMenuEntry = undefined;
    this.selectedSubmenuEntry = undefined;

    this.loadFavorites();
    this.setupObservables();

    // Animations
    this.imgState = 'hidden';
    this.mainContainerState = 'hidden';
    this.setupAnimations();
  }

  public getComponentName(): string {
    return 'HomeComponent';
  }

  public ngOnInit(): void {
    this.loaderService.hideModuleLoadingBar();
  }

  public isFavoriteToOpen(favorite: FavoriteEntry): boolean {
    if (this.favoriteToOpen) {
      if (this.favoriteToOpen.objectId) {
        return (
          favorite.componentId === this.favoriteToOpen.componentId && favorite.objectId === this.favoriteToOpen.objectId
        );
      } else {
        return favorite.componentId === this.favoriteToOpen.componentId;
      }
    } else {
      return false;
    }
  }

  public onClickMenuEntry(menuEntry: MenuEntry): void {
    if (!!this.selectedMenuEntry && menuEntry.key === this.selectedMenuEntry.key) {
      this.hideMenuOverlay();
    } else {
      this.displayMenuOverlay(menuEntry);
    }
  }

  public onHoverMenuEntry(menuEntry: MenuEntry): void {
    if (!!this.selectedMenuEntry && menuEntry.key !== this.selectedMenuEntry.key) {
      this.displayMenuOverlay(menuEntry);
    }
  }

  public openFavorite(favorite: FavoriteEntry): void {
    const componentId = favorite.componentId;
    const labelKey = 'transaction.' + componentId;

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId,
      objectId: favorite.objectId,
      openMode: !!favorite.objectId ? ComponentOpenMode.Read : ComponentOpenMode.Write
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public removeFavorite(favorite: FavoriteEntry): void {
    this.favoriteService.updateFavoriteState(true, favorite.componentId, favorite.objectId, favorite.context);
  }

  public toggleDefaultFavorite(selectedFavorite: FavoriteEntry): void {
    this.favorites.forEach((favorite) => (favorite.shouldOpenAtStartup = false));

    if (
      !!this.favoriteToOpen &&
      this.favoriteToOpen.componentId === selectedFavorite.componentId &&
      this.favoriteToOpen.objectId === selectedFavorite.objectId
    ) {
      this.removeDefaultFavorite(selectedFavorite);
    } else {
      this.setDefaultFavorite(selectedFavorite);
    }
  }

  private displayMenuOverlay(menuEntry: MenuEntry): void {
    this.selectedMenuEntry = menuEntry;

    this.imgState = 'hidden';
  }

  private formatFavoriteContext(favoriteEntry: FavoriteEntry): void {
    if (!!favoriteEntry.context) {
      this.translateService.get(favoriteEntry.context).subscribe((translatedValue: string) => {
        favoriteEntry.formattedContext = StringUtils.isNullOrEmpty(translatedValue)
          ? favoriteEntry.context
          : translatedValue;
      });
    }
  }

  private getLogoUri(favoriteEntry: FavoriteEntry): string | undefined {
    const mainMenu = MenuConstants.COMPONENTS_ROOT[favoriteEntry.componentId];

    switch (mainMenu) {
      case MenuConstants.MENU_ADMINISTRATION:
        return HomeComponent.administrationLogoUri;

      case MenuConstants.MENU_COLLABORATIVE_COCKPIT:
        return HomeComponent.collaborativeCockpitLogoUri;

      case MenuConstants.MENU_ENGINEERING_DATA:
        return HomeComponent.engineeringDataLogoUri;

      case MenuConstants.MENU_FLEET_MANAGEMENT:
        return HomeComponent.fleetManagementLogoUri;

      case MenuConstants.MENU_FLIGHT_OPERATIONS:
        return HomeComponent.flightOperationLogoUri;

      case MenuConstants.MENU_HUMAN_RESOURCES:
        return HomeComponent.humanResourcesLogoUri;

      case MenuConstants.MENU_LOGISTICS:
        return HomeComponent.logisticsLogoUri;

      case MenuConstants.MENU_MAINTENANCE:
        return HomeComponent.maintenanceLogoUri;

      default:
        return undefined;
    }
  }

  private hideMenuOverlay(): void {
    this.selectedMenuEntry = undefined;

    this.imgState = 'visible';
  }

  private loadFavorites(): void {
    this.favoriteService.favorites().subscribe((results: FavoriteEntry[]) => {
      this.favorites = !!results ? results : [];
      this.favorites = this.favorites.map((favorite) => {
        this.formatFavoriteContext(favorite);
        favorite.img = this.getLogoUri(favorite);

        return favorite;
      });

      this.selectFavoriteToOpen();
    });
  }

  private removeDefaultFavorite(favorite: FavoriteEntry): void {
    this.favoriteService.removeDefaultFavorite().subscribe(() => {
      favorite.shouldOpenAtStartup = false;
      this.favoriteToOpen = undefined;
    });
  }

  private selectFavoriteToOpen(): void {
    this.favoriteService.getDefaultFavorite().subscribe((result: FavoriteEntry | undefined) => {
      if (!!result) {
        const selectedDefaultFavorite = this.favorites.find((favorite) => {
          return favorite.componentId === result.componentId && favorite.objectId === result.objectId;
        });
        if (!!selectedDefaultFavorite) {
          selectedDefaultFavorite.shouldOpenAtStartup = true;
          this.favoriteToOpen = selectedDefaultFavorite;

          this.openFavorite(this.favoriteToOpen);
        }
      }
    });
  }

  private setDefaultFavorite(favorite: FavoriteEntry): void {
    this.favoriteService.setDefaultFavorite(favorite).subscribe(() => {
      favorite.shouldOpenAtStartup = true;
      this.favoriteToOpen = favorite;
    });
  }

  private setupAnimations(): void {
    setTimeout(() => {
      this.imgState = 'visible';
    }, HomeComponent.IMG_STATE_TIMEOUT);

    setTimeout(() => {
      this.mainContainerState = 'visible';
    }, HomeComponent.MAIN_CONTAINER_STATE_TIMEOUT);
  }

  private setupObservables(): void {
    this.favoriteService.favoriteAdded$.pipe(takeUntil(this.unsubscribe)).subscribe(
      (result: FavoriteEntry) => {
        this.formatFavoriteContext(result);
        result.img = this.getLogoUri(result);
        this.favorites = [...this.favorites, result];

        this.favoriteService.confirmFavoriteUpdate(this.favoriteService.toString(result));
      },
      (result: FavoriteEntry) => {
        this.favoriteService.reportFavoriteErrorUpdate(this.favoriteService.toString(result));
      }
    );

    this.favoriteService.favoriteRemoved$.pipe(takeUntil(this.unsubscribe)).subscribe(
      (result: FavoriteEntry) => {
        this.favorites = this.favorites.filter((favorite) => {
          return !(
            favorite.componentId === result.componentId &&
            ((StringUtils.isNullOrEmpty(favorite.objectId) && StringUtils.isNullOrEmpty(result.objectId)) ||
              favorite.objectId === result.objectId)
          );
        });

        if (
          !!this.favoriteToOpen &&
          this.favoriteToOpen.componentId === result.componentId &&
          ((StringUtils.isNullOrEmpty(this.favoriteToOpen.objectId) && StringUtils.isNullOrEmpty(result.objectId)) ||
            this.favoriteToOpen.objectId === result.objectId)
        ) {
          this.removeDefaultFavorite(result);
        }

        this.favoriteService.confirmFavoriteUpdate(this.favoriteService.toString(result));
      },
      (result: FavoriteEntry) => {
        this.favoriteService.reportFavoriteErrorUpdate(this.favoriteService.toString(result));
      }
    );
  }
}
