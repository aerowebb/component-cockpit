import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { MaterialRequestInput } from '../shared/material-request-input.interface';
import { MaterialRequestTableRow } from '../shared/material-request-table-row.interface';

import { MaterialRequestManagementSearchService } from './material-request-management-search.service';

interface SearchFilterInput {
  criticity?: string[];
  progress?: string[];
  status?: string[];
  origin?: string[];
  desiredOption?: string;
  desiredDate?: Date;
}

@Component({
  selector: 'aw-material-request-management-search',
  styleUrls: ['../shared/style.scss'],
  templateUrl: './material-request-management-search.component.html'
})
export class MaterialRequestManagementSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public subtitle: string;
  public searchObject: MaterialRequestInput;
  public searchFilterObject: SearchFilterInput;
  public criteriaName: string | undefined;
  public criteriaToSave: MaterialRequestInput;

  public readonly componentOpenMode: typeof ComponentOpenMode;
  public materialRequestSites: SelectItem[];
  public materialRequestWorkCenters: SelectItem[];
  public materialRequestPartners: SelectItem[];
  public materialRequestSelectItemList: SelectItem[];
  public materialRequestTableCols: TableColumn[];
  public materialRequestTable: MaterialRequestTableRow[];
  public selectedMaterialRequests: MaterialRequestTableRow[];
  public filterCriticityList: SelectItem[];
  public filterOriginList: SelectItem[];
  public filterStatusList: SelectItem[];
  public filterProgressList: SelectItem[];
  public filterDesiredDateOptions: SelectItem[];

  public isLoading: boolean;
  public hasBeenCalculated: boolean;
  public filtersVisible: boolean;
  public showSearchPanel: boolean;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.GOODS_MOVEMENT_SEARCH_CRITERIA_ID;
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
    public translateService: TranslateService,
    private readonly materialRequestManagementSearchService: MaterialRequestManagementSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentOpenMode = ComponentOpenMode;
    this.init();
    this.initSearchTableCols();
    this.loadSites();
    this.loadWarehouses();
    this.loadPartners();
    this.loadCriticityList();
    this.loadFilterLists();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private init() {
    this.clearResultTable();
    this.resetSearchCriteria();

    this.materialRequestSites = [];
    this.materialRequestWorkCenters = [];
    this.materialRequestPartners = [];
    this.materialRequestSelectItemList = [];
    this.materialRequestTableCols = [];
    this.showSearchPanel = true;
  }

  private initSearchTableCols(): void {
    this.materialRequestTableCols = [
      { field: 'references', alignment: 'left', width: '20%' },
      { field: 'item', alignment: 'left', width: '20%' },
      { field: 'recepient', alignment: 'left', width: '20%' },
      { field: 'situation', alignment: 'left', width: '20%' },
      { field: 'illustration', alignment: 'left', width: '20%' }
    ];
  }

  private clearResultTable(): void {
    this.materialRequestTable = [];
    this.selectedMaterialRequests = [];
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = { criticity: 'all' };
    this.searchFilterObject = {
      criticity: [],
      origin: [],
      progress: [],
      status: []
    };
  }

  public loadSites() {
    this.materialRequestSites = [];
    this.materialRequestManagementSearchService.findAllSiteList().subscribe({
      next: (siteList) => {
        this.materialRequestSites = ListUtils.orEmpty(siteList)
          .filter((site) => ObjectUtils.isDefined(site.siteId))
          .map((site) => {
            return {
              label: StringUtils.isNullOrEmpty(site.siteName) ? site.siteCode : `${site.siteCode} - ${site.siteName}`,
              value: site.siteId
            };
          });
      }
    });
  }

  public loadWarehouses() {
    this.materialRequestWorkCenters = [];
    if (this.searchObject && this.searchObject.siteId) {
      this.materialRequestManagementSearchService.findWarehouseListBySite(this.searchObject.siteId).subscribe({
        next: (results) => {
          this.populateWarehouseList(results);
        }
      });
    } else {
      this.materialRequestManagementSearchService.findAllWarehouseList().subscribe({
        next: (results) => {
          this.populateWarehouseList(results);
        }
      });
    }
  }

  public loadPartners() {
    this.materialRequestPartners = [];
  }

  public loadCriticityList() {
    this.materialRequestSelectItemList = [
      { label: `${this.translateService.instant(this.getTranslateKey('all'))}`, value: 'all' },
      { label: `${this.translateService.instant(this.getTranslateKey('routine'))}`, value: 'routine' },
      { label: `${this.translateService.instant(this.getTranslateKey('urgent'))}`, value: 'urgent' },
      { label: `${this.translateService.instant(this.getTranslateKey('immediate'))}`, value: 'immediate' }
    ];
  }

  public loadFilterLists() {
    this.filterCriticityList = [
      { label: `${this.translateService.instant(this.getTranslateKey('routine'))}`, value: 'routine' },
      { label: `${this.translateService.instant(this.getTranslateKey('urgent'))}`, value: 'urgent' },
      { label: `${this.translateService.instant(this.getTranslateKey('immediate'))}`, value: 'immediate' }
    ];
    this.filterStatusList = [
      { label: `${this.translateService.instant(this.getTranslateKey('routine'))}`, value: 'routine' },
      { label: `${this.translateService.instant(this.getTranslateKey('urgent'))}`, value: 'urgent' },
      { label: `${this.translateService.instant(this.getTranslateKey('immediate'))}`, value: 'immediate' }
    ];
    this.filterOriginList = [
      { label: `${this.translateService.instant(this.getTranslateKey('routine'))}`, value: 'routine' },
      { label: `${this.translateService.instant(this.getTranslateKey('urgent'))}`, value: 'urgent' },
      { label: `${this.translateService.instant(this.getTranslateKey('immediate'))}`, value: 'immediate' }
    ];
    this.filterProgressList = [
      { label: `${this.translateService.instant(this.getTranslateKey('routine'))}`, value: 'routine' },
      { label: `${this.translateService.instant(this.getTranslateKey('urgent'))}`, value: 'urgent' },
      { label: `${this.translateService.instant(this.getTranslateKey('immediate'))}`, value: 'immediate' }
    ];
    this.filterDesiredDateOptions = [];
  }

  public search() {
    this.materialRequestTable = [];
    this.materialRequestManagementSearchService.findMaterialsRequested(this.searchObject).subscribe((result) => {
      if (result) {
        this.materialRequestTable = result.list;
        this.showSearchPanel = false;
      }
    });
  }

  public manageMaterialRequest(rowData: MaterialRequestTableRow) {
    const openMode: ComponentOpenMode = ComponentOpenMode.Write;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
      openMode
    };
    if (!!rowData) {
      data.objectId = this.serializationService.serialize(rowData);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openNewMaterialRequestSearch() {
    const openMode: ComponentOpenMode = ComponentOpenMode.Write;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
      openMode
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private populateWarehouseList(warehouseList: BidtWarehouseDTO[]): void {
    this.materialRequestWorkCenters = ListUtils.orEmpty(warehouseList)
      .filter((warehouse) => ObjectUtils.isDefined(warehouse.whCode))
      .map((warehouse) => {
        return {
          label: StringUtils.isNullOrEmpty(warehouse.whName)
            ? warehouse.whCode
            : `${warehouse.whCode} - ${warehouse.whName}`,
          value: warehouse.wareHouseId
        };
      });
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: MaterialRequestInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria = event.criteria as MaterialRequestInput;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from another page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public resetFilters() {
    //
  }

  public filterSearchResult() {
    //
  }
}
