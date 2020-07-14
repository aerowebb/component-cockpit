import { Component } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { StockViewSiteNodeDTO } from '../../../../shared/types/api-types/stock-view-site-node-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { StockViewSearchService } from './stock-view-search.service';

interface SearchCriteria {
  areaId?: number;
  date?: Date;
  pnCode?: string;
  siteId?: number;
  storageBinId?: number;
  warehouseId?: number;
  withAlternatives?: boolean;
}

@Component({
  selector: 'aw-stock-view-search',
  templateUrl: './stock-view-search.component.html'
})
export class StockViewSearchComponent extends PageComponent<PageComponentData> {
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  public searchCriteria: SearchCriteria;

  public areas: LabelValue<number>[];
  public sites: LabelValue<number>[];
  public storageBins: LabelValue<string>[];
  public warehouseCategories: LabelValue<string>[];
  public warehouses: LabelValue<number>[];

  public selectedWarehouseCategory: string | undefined;

  public itemPnDialogVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly stockViewSearchService: StockViewSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.awPropertiesConstants = AWPropertiesConstants;

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_VIEW_SEARCH;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public calculate(): void {
    if (
      this.searchCriteria.date &&
      (!StringUtils.isNullOrEmpty(this.searchCriteria.pnCode) ||
        (this.searchCriteria.siteId && this.searchCriteria.warehouseId && this.searchCriteria.areaId))
    ) {
      this.stockViewSearchService.loadStockView(this.searchCriteria).subscribe((stockView) => {
        if (ListUtils.isNullOrEmpty(stockView)) {
          this.messageService.showWarningMessage(this.getTranslateKey('noResult'));
        } else {
          this.openStockView(stockView);
        }
      });
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('missingCriteria'));
    }
  }

  public clearItemPn(): void {
    this.searchCriteria.pnCode = undefined;
  }

  public onChangeSiteOrWarehouseCategory(): void {
    this.unselectWarehouse();
    this.unselectArea();

    if (this.searchCriteria.siteId) {
      this.loadWareHouses(this.searchCriteria.siteId, this.selectedWarehouseCategory as string);
    }
  }

  public onChangeWarehouse(): void {
    this.unselectArea();

    if (this.searchCriteria.warehouseId) {
      this.loadAreas(this.searchCriteria.warehouseId);
    }
  }

  public onSelectItemPn(pn: BirePnDTO): void {
    this.searchCriteria.pnCode = pn.pnCode;
  }

  public openItemPnDialog(): void {
    this.itemPnDialogVisible = true;
  }

  // ////////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.searchCriteria = {
      date: new Date()
    };

    this.areas = [];
    this.sites = [];
    this.storageBins = [];
    this.warehouses = [];
    this.warehouseCategories = [];

    this.selectedWarehouseCategory = undefined;

    this.itemPnDialogVisible = false;

    this.loadSites();
    this.loadUserSiteId();
    this.loadWarehouseCategories();
  }

  private loadAreas(warehouseId: number): void {
    this.stockViewSearchService.findBidtWarehouseById(warehouseId).subscribe({
      next: (warehouse) => {
        this.areas = ListUtils.orEmpty(warehouse.bidtStorageBinDTOs)
          .map((area) => {
            return {
              label: StringUtils.orEmpty(area.sbNumber) + (area.sbDescription ? ` - ${area.sbDescription}` : ''),
              value: area.id as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private loadSites(): void {
    this.stockViewSearchService.findAllBireSite().subscribe({
      next: (sites) => {
        this.sites = sites
          .map((site) => {
            return {
              label: `${site.siteCode} - ${site.siteName}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private loadUserSiteId(): void {
    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        if (site && site.siteId) {
          this.searchCriteria.siteId = site.siteId;

          this.loadUserWarehouseId(site.siteId);
        }
      }
    });
  }

  private loadUserWarehouseId(siteId: number): void {
    this.sessionService.getUserWarehouseId().subscribe({
      next: (warehouse) => {
        if (warehouse && warehouse.wareHouseId && warehouse.whCategory) {
          this.searchCriteria.warehouseId = warehouse.wareHouseId;
          this.selectedWarehouseCategory = warehouse.whCategory;

          this.loadWareHouses(siteId, this.selectedWarehouseCategory);
          this.loadAreas(this.searchCriteria.warehouseId);
        }
      }
    });
  }

  private loadWarehouseCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe({
      next: (warehouseCategories) => {
        this.warehouseCategories = warehouseCategories.sort((s1, s2) => s1.value.localeCompare(s2.value));

        const warehouseCategory = this.warehouseCategories.length > 0 ? this.warehouseCategories[0].value : undefined;
        this.selectedWarehouseCategory = warehouseCategory;
      }
    });
  }

  private loadWareHouses(site: number, warehouseCategory: string): void {
    this.stockViewSearchService.getWarehousesBySiteId(site).subscribe({
      next: (warehouses) => {
        this.warehouses = warehouses
          .filter((warehouse) => warehouse.whCategory === warehouseCategory)
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private openStockView(stockView: StockViewSiteNodeDTO[]): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_VIEW_FORM,
      objectId: this.searchCriteria
        ? this.serializationService.serialize({
            data: stockView,
            date: this.searchCriteria.date,
            withAlternatives: !!this.searchCriteria.withAlternatives
          })
        : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private unselectArea(): void {
    this.areas = [];
    this.searchCriteria.areaId = undefined;
  }

  private unselectWarehouse(): void {
    this.warehouses = [];
    this.searchCriteria.warehouseId = undefined;
  }
}
