import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { TechnicalReceiptSearchService } from './technical-receipt-search.service';

interface TechnicalTableResultInterface {
  partNumber?: string;
  itemNumber?: string;
  documentNumber?: number;
  designation?: string;
  sn?: string;
  lot?: string;
  snLot?: string;
  location?: string;
  providerSite?: string;
  receptionFile?: string;
  fileName?: string;
  expectedDate?: string;
  criticality?: string;
  siteId?: number;
  warehouse?: string;
}

@Component({
  selector: 'aw-technical-receipt-search',
  styleUrls: ['./technical-receipt-search.component.scss'],
  templateUrl: './technical-receipt-search.component.html'
})
export class TechnicalReceiptSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ALL = 'ALL';
  public readonly SEARCH_CRITERIA_ID: string; // TODO: Add a search ID
  public awPropertiesConstants: typeof AWPropertiesConstants;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public readonly immediate: string = 'Immediate';
  public readonly urgent: string = 'Urgent';
  public readonly routine: string = 'Routine';

  // Table
  public resultTableCols: TableColumn[];
  public resultsTable: TechnicalTableResultInterface[];
  public selectedResults: unknown[];

  // Dropdowns
  public siteList: SelectItem[];
  private completeSiteList: BidtWarehouseDTO[];

  public shopWorkshopList: SelectItem[];
  public shopWorkshopItemList: SelectItem[];
  public stausList: LabelValue<string>[];
  public criticalityList: SelectItem[];
  public selectedCriticality: string[];

  public selectedShopWorkshop: string;

  public searchCriteriaCalculated: boolean;
  public searchCriteriaToSave: TechnicalTableResultInterface;

  public showQuickSearchMaterialPopup: boolean;

  public searchCriteria: TechnicalTableResultInterface;
  public isLoading: boolean;
  public statusList: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly technicalReceiptSearchService: TechnicalReceiptSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.isLoading = false;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TECHNICAL_RECEIPT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.awPropertiesConstants = AWPropertiesConstants;
    this.displayComponentContext('global.search', true);

    this.searchCriteria = {};
    this.resultsTable = [];
    this.selectedResults = [];
    this.completeSiteList = [];
    this.showQuickSearchMaterialPopup = false;
    this.getSiteList();
    this.loadTableCols();
    this.getWarehouseList();
    this.statusList = [];
  }

  /************************************
   * Load Tech Receipt Table Columns
   ************************************/
  private loadTableCols() {
    this.resultTableCols = [
      { field: 'partNumber', alignment: 'left' },
      { field: 'snLot', alignment: 'left' },
      { field: 'location', alignment: 'left' },
      { field: 'receptionFile', alignment: 'left' },
      { field: 'expectedDate', alignment: 'left' },
      { field: 'criticality', alignment: 'center' }
    ];

    this.loadDropdowns();
  }

  /************************************
   * Fetch Dropdown Data
   ************************************/
  private loadDropdowns(): void {
    this.criticalityList = [];
    this.technicalReceiptSearchService.loadCriticalityList().subscribe((res) => {
      res.forEach((criticity) => {
        this.criticalityList.push({
          label: criticity.label,
          value: criticity.value
        });
      });
      this.criticalityList.unshift({
        label: this.translateService.instant(this.getTranslateKey('all')),
        value: TechnicalReceiptSearchComponent.ALL
      });
      this.selectedCriticality = [this.criticalityList[0].value];
    });
  }

  /************************************
   * Load Tech Receipt
   ************************************/
  public search() {
    this.isLoading = true;
    this.resultsTable = this.technicalReceiptSearchService.loadTechincalReceipt();
    this.isLoading = false;
  }

  /************************************
   * Open Selected Tech Receipt
   ************************************/
  public openSelectedReceipt() {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_TECHNICAL_RECEIPT_FORM,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * Search Criteria
   **********************************/
  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria = event.criteria as TechnicalTableResultInterface | undefined;
    if (criteria) {
      if (!this.componentData.objectId) {
        this.searchCriteria = criteria;
      } else {
        this.componentData.objectId = undefined;
      }

      this.search();
    } else {
      this.clearSearchCriteria();
    }
  }

  private clearSearchCriteria(): void {
    this.searchCriteria = {};
  }

  public saveSearchCriteriaAsked(): void {
    this.searchCriteriaToSave = this.searchCriteria;
  }

  /************************************
   * Load Warehouse List on change
   ************************************/
  public loadWareHouseList(): void {
    this.shopWorkshopList = [];
    if (!!this.searchCriteria.siteId) {
      this.technicalReceiptSearchService
        .getWarehousesBySiteId(this.searchCriteria.siteId)
        .subscribe((res: BidtWarehouseDTO[]) => {
          if (res && res.length) {
            this.completeSiteList = res;
            this.getSelectedWareHouseList();
          }
        });
    }
  }

  public getSelectedWareHouseList(): void {
    if (this.completeSiteList && this.completeSiteList.length) {
      this.completeSiteList.forEach((siteObj) => {
        if (siteObj && siteObj.whCategory === this.selectedShopWorkshop) {
          this.shopWorkshopList.push({
            label: siteObj.whName,
            value: siteObj.whCode
          });
        }
      });
    }
  }

  private getSiteList(): void {
    this.technicalReceiptSearchService.findAllStockStatusSites().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      result.forEach((res) => {
        if (!!res) {
          labelValue.push({
            label: res.label,
            value: Number(res.value)
          });
        }
      });
      this.siteList = labelValue || [];
    });
  }

  private getWarehouseList(): void {
    this.shopWorkshopItemList = [];
    this.technicalReceiptSearchService.loadWarehousesSelectItem().subscribe((res) => {
      if (res && res.length) {
        this.shopWorkshopItemList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.selectedShopWorkshop =
          this.shopWorkshopItemList && this.shopWorkshopItemList.length ? this.shopWorkshopItemList[0].value : '';
      }
    });
  }

  public onClickSearchMaterial(): void {
    this.showQuickSearchMaterialPopup = true;
  }

  public setSelectedMaterial(event: BirePnDTO): void {
    this.showQuickSearchMaterialPopup = false;
    this.searchCriteria.partNumber = event.pnCode;
  }

  public clearPnCodeClass(): void {
    this.searchCriteria.partNumber = undefined;
  }

  public changeCriticality() {
    if (!!this.searchCriteria) {
      const isAllSelected = this.selectedCriticality.indexOf(TechnicalReceiptSearchComponent.ALL) !== -1 ? true : false;

      if (isAllSelected) {
        if (this.selectedCriticality.length === 1) {
          this.selectedCriticality = [];
          this.selectedCriticality = [TechnicalReceiptSearchComponent.ALL];
        } else if (this.selectedCriticality.length === this.criticalityList.length - 1) {
          this.selectedCriticality = [];
          this.selectedCriticality = [TechnicalReceiptSearchComponent.ALL];
        } else if (
          this.selectedCriticality.length > 1 &&
          this.selectedCriticality.length < this.criticalityList.length
        ) {
          if (this.selectedCriticality[this.selectedCriticality.length - 1] !== TechnicalReceiptSearchComponent.ALL) {
            this.selectedCriticality.splice(this.selectedCriticality.indexOf(TechnicalReceiptSearchComponent.ALL), 1);
          } else {
            this.selectedCriticality = [];
            this.selectedCriticality = [TechnicalReceiptSearchComponent.ALL];
          }
        }
      } else if (!isAllSelected && this.selectedCriticality.length === this.criticalityList.length - 1) {
        this.selectedCriticality = [];
        this.selectedCriticality = [TechnicalReceiptSearchComponent.ALL];
      }
    }
  }
}
