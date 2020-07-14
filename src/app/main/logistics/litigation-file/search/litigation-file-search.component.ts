import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { CatalogPropertiesTableDTO } from '../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { LitigationFileSearchRow } from '../shared/litigation-file-row.interface';
import { LitigationFileSearchInput } from '../shared/litigation-file-search-input.interface';

import { LitigationFileSearchService } from './litigation-file-search.service';

@Component({
  selector: 'aw-litigation-file-search',
  styleUrls: ['./litigation-file-search.component.scss'],
  templateUrl: './litigation-file-search.component.html'
})
export class LitigationFileSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ALL = 'ALL';
  private static readonly litigationTypeObject = {
    blocking: 'Blocking',
    nonBlocking: 'Non Blocking',
    all: 'All'
  };

  public criteriaToSave: LitigationFileSearchInput;
  public hasBeenCalculated: boolean;
  public criteriaName: string | undefined;

  public readonly componentOpenMode: typeof ComponentOpenMode;

  public litigationFileTable: SearchResultsDTO<LitigationFileSearchRow>;
  public litigationFileTableCols: TableColumn[];
  public searchObject: LitigationFileSearchInput;
  public selectedLitigationFiles: LitigationFileSearchRow[];

  public litigationTypeList: SelectItem[];
  public litigationList: SelectItem[];

  public documentTypeList: SelectItem[];
  public criticityList: SelectItem[];
  public disputedElementDocTypeList: SelectItem[];
  public siteList: SelectItem[];
  public warehouseList: SelectItem[];

  public isLoading: boolean;
  public showAdvancedCriteria: boolean;
  public receptionDateVisibility: boolean;
  public startDateVisibility: boolean;
  public endDateVisibility: boolean;
  public showQuickSearchMaterialPopup: boolean;
  public showQuickSearchPurchaseRequestPopup: boolean;
  public bidtPurchaseDTO: BidtPurchaseRequestDTO;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.ORDER_DOCUMENT_SEARCH_CRITERIA_ID;

  public userList: SelectItem[];
  public awPropertiesConstants: typeof AWPropertiesConstants;
  public shopList: SelectItem[];

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public dateService: DateService,
    private readonly litigationFileSearchService: LitigationFileSearchService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentOpenMode = ComponentOpenMode;
    this.init();
    this.initTableCols();
    this.loadLitigationList();
    this.loadLitigationTypeList();
    this.loadDocumentTypeList();
    this.loadCriticityList();
    this.loadDisputedElementDocTypeList();
    this.loadSiteList();
    this.loadWarehouseList();

    this.loadUserList();
    this.getCriticilityList();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_LITIGATION_FILE_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.awPropertiesConstants = AWPropertiesConstants;
    this.displayComponentContext('global.search', true);
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.searchObject.criticity = [];
    this.criteriaName = undefined;
  }

  public search(): void {
    this.isLoading = true;
    this.clearResultTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    this.litigationFileSearchService.findByCriteria().subscribe((result) => {
      this.isLoading = false;
      this.litigationFileTable = result;
      this.litigationFileTable.list.map((obj) => {
        if (obj.foundOn) {
          obj.createdOn = this.dateService.dateToString(obj.foundOn);
        }

        return obj;
      });

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: LitigationFileSearchInput | undefined = event.criteria as LitigationFileSearchInput;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  private clearResultTable(): void {
    this.litigationFileTable = { list: [], moreResults: false };
    this.selectedLitigationFiles = [];
  }

  private init(): void {
    this.clearResultTable();
    this.resetSearchCriteria();

    this.litigationList = [];
    this.criticityList = [];
    this.disputedElementDocTypeList = [];
    this.siteList = [];
    this.documentTypeList = [];
    this.litigationTypeList = [];

    this.isLoading = false;
    this.showAdvancedCriteria = false;
    this.receptionDateVisibility = false;
    this.startDateVisibility = false;
    this.endDateVisibility = false;
    this.showQuickSearchMaterialPopup = false;
    this.showQuickSearchPurchaseRequestPopup = false;
  }

  private initTableCols(): void {
    this.litigationFileTableCols = [
      { field: 'litigationFile', alignment: 'left' },
      { field: 'litigationType', alignment: 'left' },
      { field: 'typeOfElement', alignment: 'left' },
      { field: 'isBlocking', alignment: 'left' },
      { field: 'originDocument', alignment: 'left' },
      { field: 'status', alignment: 'left' },
      { field: 'creation', alignment: 'left' }
    ];
  }

  public loadLitigationList() {
    this.litigationList = [
      { label: `${this.translateService.instant(this.getTranslateKey('all'))}`, value: 'All' },
      { label: `${this.translateService.instant(this.getTranslateKey('blocking'))}`, value: 'Blocking' },
      { label: `${this.translateService.instant(this.getTranslateKey('nonBlocking'))}`, value: 'Non Blocking' }
    ];
  }

  public loadLitigationTypeList() {
    const LITIGATION_ID = 140;
    this.litigationTypeList = [];
    this.litigationFileSearchService
      .fetchPropertyValuesTableData(LITIGATION_ID)
      .subscribe((res: CatalogPropertiesTableDTO[]) => {
        res.forEach((dto) => {
          this.litigationTypeList.push({
            label:
              this.translateService.currentLang === LangConstants.ENGLISH_CODE
                ? dto.enPropertiesValue
                : dto.frPropertiesValue,
            value: dto.propertiesKey
          });
        });
      });
  }

  private loadUserList() {
    this.userList = [];
    this.litigationFileSearchService.loadUserList().subscribe((result) => (this.userList = result));
  }

  public loadDocumentTypeList() {
    this.documentTypeList = [];
  }

  public loadCriticityList() {
    this.criticityList = [];
  }

  public loadDisputedElementDocTypeList() {
    this.disputedElementDocTypeList = [];
    const LITIGATION_ID = 141;
    this.litigationFileSearchService
      .fetchPropertyValuesTableData(LITIGATION_ID)
      .subscribe((res: CatalogPropertiesTableDTO[]) => {
        res.forEach((dto) => {
          this.disputedElementDocTypeList.push({
            label:
              this.translateService.currentLang === LangConstants.ENGLISH_CODE
                ? dto.enPropertiesValue
                : dto.frPropertiesValue,
            value: dto.propertiesKey
          });
        });
      });
  }

  public loadSiteList() {
    this.siteList = [];
    this.litigationFileSearchService.findAllStockStatusSites().subscribe((result) => {
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

  public loadWarehouseList() {
    this.warehouseList = [];
    this.litigationFileSearchService.loadWarehousesSelectItem().subscribe((res) => {
      if (res && res.length > 0) {
        this.warehouseList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.searchObject.warehouseType = res[0].value;
        this.loadShopList();
      }
    });
  }

  public openLitigationFile(
    object: LitigationFileSearchRow | undefined,
    openMode: ComponentOpenMode | undefined
  ): void {
    let componentOpenMode: ComponentOpenMode = ComponentOpenMode.Create;
    if (openMode) {
      componentOpenMode = openMode;
    }
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_LITIGATION_FILE_FORM,
      openMode: componentOpenMode
    };
    if (!!object) {
      data.objectId = this.serializationService.serialize(object);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public exportTable() {
    return;
  }

  public deleteLitigationFiles() {
    return;
  }

  public openSelectedLitigationFiles() {
    this.selectedLitigationFiles.forEach((obj) => {
      this.openLitigationFile(obj, ComponentOpenMode.Read);
    });
  }

  public loadShopList(): void {
    this.shopList = [];
    if (this.searchObject) {
      this.litigationFileSearchService
        .getWarehousesBySiteId(this.searchObject.siteId)
        .subscribe((results: BidtWarehouseDTO[]) => {
          if (!!results) {
            this.shopList = results
              .filter(
                (wh) =>
                  !!wh.wareHouseId &&
                  !!wh.whName &&
                  !!wh.whCategory &&
                  this.searchObject.warehouseType === wh.whCategory
              )
              .map((shop) => {
                return {
                  label: shop.whName as string,
                  value: shop.wareHouseId as number
                };
              })
              .sort((s1, s2) => s1.label.localeCompare(s2.label));
          }
        });
    }
  }

  private getCriticilityList(): void {
    this.criticityList = [];
    this.litigationFileSearchService.loadCriticalityList().subscribe((res) => {
      res.forEach((criticity) => {
        this.criticityList.push({
          label: criticity.label,
          value: criticity.value
        });
      });
      this.criticityList.unshift({
        label: this.translateService.instant(this.getTranslateKey('all')),
        value: LitigationFileSearchComponent.ALL
      });

      this.searchObject.criticity = [this.criticityList[0].value];
    });
  }

  public changeCriticality() {
    if (this.searchObject && this.searchObject.criticity) {
      const isAllSelected =
        this.searchObject.criticity.indexOf(LitigationFileSearchComponent.ALL) !== -1 ? true : false;

      if (isAllSelected) {
        if (this.searchObject.criticity.length === 1) {
          this.searchObject.criticity = [];
          this.searchObject.criticity = [LitigationFileSearchComponent.ALL];
        } else if (this.searchObject.criticity.length === this.criticityList.length - 1) {
          this.searchObject.criticity = [];
          this.searchObject.criticity = [LitigationFileSearchComponent.ALL];
        } else if (
          this.searchObject.criticity.length > 1 &&
          this.searchObject.criticity.length < this.criticityList.length
        ) {
          if (
            this.searchObject.criticity[this.searchObject.criticity.length - 1] !== LitigationFileSearchComponent.ALL
          ) {
            this.searchObject.criticity.splice(
              this.searchObject.criticity.indexOf(LitigationFileSearchComponent.ALL),
              1
            );
          } else {
            this.searchObject.criticity = [];
            this.searchObject.criticity = [LitigationFileSearchComponent.ALL];
          }
        }
      } else if (!isAllSelected && this.searchObject.criticity.length === this.criticityList.length - 1) {
        this.searchObject.criticity = [];
        this.searchObject.criticity = [LitigationFileSearchComponent.ALL];
      }
    }
  }

  public litigationChange(event: string): void {
    if (
      (this.searchObject.litigationId === LitigationFileSearchComponent.litigationTypeObject.blocking &&
        event === LitigationFileSearchComponent.litigationTypeObject.nonBlocking) ||
      (this.searchObject.litigationId === LitigationFileSearchComponent.litigationTypeObject.nonBlocking &&
        event === LitigationFileSearchComponent.litigationTypeObject.blocking)
    ) {
      this.searchObject.litigationId = LitigationFileSearchComponent.litigationTypeObject.all;
    } else {
      this.searchObject.litigationId = event;
    }
  }
}
