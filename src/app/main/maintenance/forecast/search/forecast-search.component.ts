import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { forkJoin, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllBsdeProjectByCriteriaInput } from '../../../../shared/types/api-input-types/project-management/find-all-bsde-project-by-criteria-input.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { BsdeAttributeDTO } from '../../../../shared/types/api-types/bsde-attribute-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { BsdeSiteDTO } from '../../../../shared/types/api-types/bsde-site-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { ForecastFormService } from '../form/forecast-form.service';

import { ForecastCategory, ForecastCreateCategory, ForecastSearchService } from './forecast-search.service';

interface ForecastRow {
  assetPn: string;
  assetSn: string;
  fleetName: string;
  forecastMroCenter: string;
  forecastWorkCenter: string;
  forecastName: string;
  forecastNumber: string;
  forecastEndDate: string;
  forecastStartDate: string;
  forecastStatus: string;
  _id: string;
}

interface SearchData {
  searchObject?: BidoEquipmentDTO;
  selectedLastUpdateDateCriteria?: string;
  selectedStartDateCriteria?: string;
  selectedEndDateCriteria?: string;
  selectedForecastCategory?: ForecastCategory;
  selectedAsset?: BidoEquipmentDTO;
  selectedFleet?: BidoFleetDTO;
  selectedAttribute?: BsdeAttributeDTO;
  selectedAttributeValue?: string;
  showAdvancedCriteria?: boolean;
}

@Component({
  selector: 'aw-forecast-search',
  styleUrls: ['./forecast-search.component.scss'],
  templateUrl: './forecast-search.component.html'
})
export class ForecastSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly forecastCategory: typeof ForecastCategory;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.MAINTENANCE_FORECAST_SEARCH_CRITERIA_ID;

  public attributeList: LabelValue<BsdeAttributeDTO>[];
  public currentStatusList: LabelValue<string>[];
  public customerList: LabelValue<string>[];
  public customerListForCreation: LabelValue<BidoCustomerDTO>[];
  public dateCriteriaList: SelectItem[];
  public forecastCategoryList: SelectItem[];
  public forecastTable: ForecastRow[];
  public forecastTableColList: TableColumn[];
  public forecastTableLoading: boolean;
  public forecastTableSelection: ForecastRow[];
  public searchData: SearchData;
  public searchObject: BsdeProjectDTO;
  public criteriaToSave: SearchData;
  public criteriaName: string | undefined;
  public siteList: LabelValue<string>[];
  public userList: LabelValue<string>[];

  public selectedAsset: BidoEquipmentDTO;
  public selectedAttribute: BsdeAttributeDTO | undefined;
  public selectedAttributeValue: string | undefined;
  public selectedEndDateCriteria: string | undefined;
  public selectedFleet: BidoFleetDTO;
  public selectedLastUpdateDateCriteria: string | undefined;
  public selectedForecastCategory: ForecastCategory;
  public selectedStartDateCriteria: string | undefined;

  public showAdvancedCriteria: boolean;
  public showSearchAssetDialog: boolean;
  public showSearchFleetDialog: boolean;
  public showForecastManagementBlock: boolean;
  /** Forecast Create Form */
  public forecastProject: BsdeProjectDTO;
  public forecastProjectAsset: BidoEquipmentDTO;
  public selectedRepairCenter: BsdeSiteDTO | undefined;
  public repairCenterList: LabelValue<BsdeSiteDTO>[];
  public workCenterList: SelectItem[];
  public allWorkCenterList: SelectItem[];
  public occurrenceList: LabelValue<number>[];
  public selectedCustomer: BidoCustomerDTO | undefined;
  public forecastProjectSrc: BsdeProjectDTO;
  public forecastProjectId: string | undefined;
  public forecastProjectLlpEventsGeneration: boolean;
  public forecastProjectOccurrenceNumber: number | undefined;
  public forecastCreateCategoryList: SelectItem[];
  public selectedForecastCreateCategory: ForecastCreateCategory;
  /** Forecast Create Form */

  @ViewChild('forecastTableContainerAnchor')
  public forecastTableContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly forecastSearchService: ForecastSearchService,
    public forecastFormService: ForecastFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.forecastCategory = ForecastCategory;
    this.searchData = {};
    this.onBeforeLoad();
    this.load();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_FORECAST_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('search', true);
  }

  public onBeforeLoad(): void {
    this.attributeList = [];
    this.currentStatusList = [];
    this.customerList = [];
    this.forecastTableLoading = false;
    this.searchObject = {};

    this.siteList = [];
    this.userList = [];
    this.allWorkCenterList = [];
    this.workCenterList = [];

    this.selectedAttribute = undefined;
    this.selectedAttributeValue = undefined;
    this.selectedForecastCategory = ForecastCategory.ALL;
    this.selectedEndDateCriteria = undefined;
    this.selectedLastUpdateDateCriteria = undefined;
    this.selectedStartDateCriteria = undefined;

    this.showAdvancedCriteria = false;
    this.showSearchAssetDialog = false;
    this.showSearchFleetDialog = false;
    this.showForecastManagementBlock = false;

    this.clearForecastTable();
    this.clearSelectedAsset();
    this.clearSelectedFleet();

    this.setDateCriteriaList();
    this.setForecastCategoryList();
    this.setForecastTableColList();
  }

  private setForecastFormFields(): void {
    this.forecastProjectId = undefined;
    this.forecastProject = {};
    this.forecastProjectAsset = {};
    this.selectedRepairCenter = undefined;
    this.repairCenterList = [];
    this.setOccurrenceList();
    this.selectedCustomer = undefined;
    this.forecastProjectSrc = {};
    this.forecastProjectLlpEventsGeneration = false;
    this.forecastProjectOccurrenceNumber = undefined;
    this.selectedForecastCreateCategory = ForecastCreateCategory.FLEET;
    this.setRepairCenterList();
    this.setCustomerListForCreation();
    this.setForecastCreateCategoryList();
  }
  public clearSelectedAsset(): void {
    this.selectedAsset = {};
  }

  public clearSelectedFleet(): void {
    this.selectedFleet = {};
  }
  private setOccurrenceList(): void {
    const OCCURRENCE_MAX_VALUE = 5; // TODO: get value from backend
    this.occurrenceList = Array.from(Array(OCCURRENCE_MAX_VALUE + 1).keys())
      .slice(1)
      .map((value) => {
        return {
          value,
          label: value.toString()
        };
      });
  }
  private setRepairCenterList(): void {
    this.forecastFormService.getAllForecastProjectSite().subscribe((result) => {
      this.repairCenterList = result;
    });
  }

  private setCustomerListForCreation(): void {
    this.forecastFormService.getAllForecastProjectCustomer().subscribe((result) => {
      this.customerListForCreation = result;
    });
  }

  public load(): void {
    forkJoin({
      attributeList: ListUtils.isEmpty(this.attributeList)
        ? this.forecastSearchService.getAllBsdeAttributesForForecast()
        : of(this.attributeList),
      currentStatusList: ListUtils.isEmpty(this.currentStatusList)
        ? this.forecastSearchService.getAllBidoFunctionTypeByModule(BidoFunctionTypeConstants.MODULE_MFO)
        : of(this.currentStatusList),
      customerList: ListUtils.isEmpty(this.customerList)
        ? this.forecastSearchService.getAllBidoCustomer()
        : of(this.customerList),
      siteList: ListUtils.isEmpty(this.siteList) ? this.forecastSearchService.getAllBidtSite() : of(this.siteList),
      allWorkCenterList: ListUtils.isEmpty(this.allWorkCenterList)
        ? this.forecastFormService.loadAllWorkCenterList()
        : of(this.workCenterList),
      userList: ListUtils.orEmpty(this.userList) ? this.forecastSearchService.getAllBidoUser() : of(this.userList)
    }).subscribe({
      next: (result) => {
        this.attributeList = result.attributeList;
        this.currentStatusList = result.currentStatusList;
        this.customerList = result.customerList;
        this.siteList = result.siteList;
        this.userList = result.userList;
        this.allWorkCenterList = result.allWorkCenterList;
        this.workCenterList = result.allWorkCenterList;
      }
    });
  }

  public onSelectedAsset(asset: {
    equipmentCode?: string;
    equipmentFunction?: string;
    pnCode?: string;
    registration?: string;
    sn?: string;
  }): void {
    this.selectedAsset.equipmentCode = asset.equipmentCode;
    this.selectedAsset.equipmentFunction = asset.equipmentFunction;
    this.selectedAsset.pnCode = asset.pnCode;
    this.selectedAsset.registration = asset.registration;
    this.selectedAsset.sn = asset.sn;
  }

  public onSelectedFleet(fleet: BidoFleetDTO): void {
    this.selectedFleet = fleet;
  }

  public openForecast(forecastRow: ForecastRow): void {
    this.forecastSearchService.openForecast(ComponentOpenMode.Write, forecastRow._id);
  }

  public openForecastTableSelection(): void {
    this.forecastTableSelection.forEach((forecast) => this.openForecast(forecast));
  }

  public openNewForecast(): void {
    this.setForecastFormFields();
    this.showForecastManagementBlock = true;
  }
  public reloadForecast(id?: string | undefined): void {
    if (!!id) {
      this.forecastProjectId = id;
      this.forecastSearchService.openForecast(ComponentOpenMode.Read, this.forecastProjectId);
    }
  }

  public openSearchAssetDialog(): void {
    this.showSearchAssetDialog = true;
  }

  public openSearchFleetDialog(): void {
    this.showSearchFleetDialog = true;
  }

  public removeForecastProjects(): void {
    this.forecastTableSelection
      .map((forecast) => forecast._id)
      .forEach((selectedForecastId) => {
        this.forecastSearchService.isForecastProjectLocked(selectedForecastId).subscribe({
          next: (isForecastProjectLocked) => {
            if (isForecastProjectLocked) {
              this.messageService.showWarningMessage(this.getTranslateKey('warningOnForecastLocked'));
            } else {
              this.forecastSearchService.removeBsdeProject({ projectId: selectedForecastId }).subscribe({
                next: () => {
                  this.forecastTable = this.forecastTable.filter((forecast) => forecast._id !== selectedForecastId);
                  this.forecastTableSelection = this.forecastTableSelection.filter(
                    (forecast) => forecast._id !== selectedForecastId
                  );

                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveForecast'));
                }
              });
            }
          }
        });
      });
  }

  public search(): void {
    this.forecastTableLoading = true;
    this.clearForecastTable();
    super.scrollToAnchor(this.forecastTableContainerAnchor);

    this.searchObject.projectPn =
      this.selectedForecastCategory === ForecastCategory.ASSET ? this.selectedAsset.pnCode : undefined;
    this.searchObject.projectSn =
      this.selectedForecastCategory === ForecastCategory.ASSET ? this.selectedAsset.sn : undefined;
    this.searchObject.projectFleetId =
      this.selectedForecastCategory === ForecastCategory.FLEET ? this.selectedFleet.fleetId : undefined;

    const attributeMap =
      ObjectUtils.isDefined(this.selectedAttribute) && !StringUtils.isNullOrEmpty(this.selectedAttributeValue)
        ? {
            [(this.selectedAttribute as BsdeAttributeDTO).attributeId as string]: this.selectedAttributeValue as string
          }
        : {};

    const fleetSearch = ObjectUtils.isDefined(this.searchObject.projectFleetId)
      ? true
      : ObjectUtils.isDefined(this.searchObject.projectPn) || ObjectUtils.isDefined(this.searchObject.projectSn)
      ? false
      : undefined;

    const input: FindAllBsdeProjectByCriteriaInput = {
      attributeMap,
      fleetSearch,
      bsdeProjectCriteria: this.searchObject,
      startDateCriteria: this.selectedStartDateCriteria,
      statusDateCriteria: this.selectedLastUpdateDateCriteria,
      endDateCriteria: this.selectedEndDateCriteria
    };
    this.forecastSearchService
      .getAllBsdeProjectByCriteria(input)
      .pipe(
        finalize(() => {
          this.forecastTableLoading = false;

          super.differ(() => {
            super.scrollToAnchor(this.forecastTableContainerAnchor);
          });
        })
      )
      .subscribe((forecastList) => {
        this.forecastTable = ListUtils.orEmpty(forecastList).map((forecast) => this.createForecastRow(forecast));
      });
  }

  private clearForecastTable(): void {
    this.forecastTable = [];
    this.forecastTableSelection = [];
  }

  private createForecastRow(forecast: BsdeProjectDTO): ForecastRow {
    const matchingMroCenter = this.siteList.find((elt) => elt.value === forecast.repairCenterCode);
    const matchingWorkCenter = this.workCenterList.find((elt) => parseInt(elt.value as string, 10) === forecast.whId);
    const forecastMroCenter = ObjectUtils.isDefined(matchingMroCenter)
      ? (matchingMroCenter as LabelValue<string>).label
      : '';

    const forecastWorkCenter = ObjectUtils.isDefined(matchingWorkCenter)
      ? (matchingWorkCenter as LabelValue<string>).label
      : '';

    const forecastRow: ForecastRow = {
      forecastMroCenter,
      forecastWorkCenter,
      assetPn: StringUtils.orEmpty(forecast.projectPn),
      assetSn: StringUtils.orEmpty(forecast.projectSn),
      fleetName: StringUtils.orEmpty(forecast.projectFleetName),
      forecastName: StringUtils.orEmpty(forecast.projectName),
      forecastNumber: NumberUtils.toString(forecast.projectNumber),
      forecastEndDate: this.dateService.dateWithHourToString(forecast.projectEndDate),
      forecastStartDate: this.dateService.dateWithHourToString(forecast.projectStartDate),
      forecastStatus: StringUtils.orEmpty(forecast.statusStateText),
      _id: forecast.projectId as string
    };

    return forecastRow;
  }

  private setDateCriteriaList(): void {
    this.forecastSearchService.loadDateCriteriaList().subscribe((result) => (this.dateCriteriaList = result));
  }

  private setForecastCategoryList(): void {
    const allKey = 'all';
    const assetKey = 'asset';
    const fleetKey = 'fleet';
    this.translateService.get([allKey, assetKey, fleetKey]).subscribe({
      next: (results: { [key: string]: string }) => {
        const allLabel = !!results ? results[allKey] : 'All';
        const assetLabel = !!results ? results[assetKey] : 'Asset';
        const fleetLabel = !!results ? results[fleetKey] : 'Fleet';
        this.forecastCategoryList = [
          { label: allLabel, value: ForecastCategory.ALL },
          { label: assetLabel, value: ForecastCategory.ASSET },
          { label: fleetLabel, value: ForecastCategory.FLEET }
        ];
      }
    });
  }

  private setForecastCreateCategoryList(): void {
    const assetKey = 'asset';
    const fleetKey = 'fleet';
    this.translateService.get([assetKey, fleetKey]).subscribe({
      next: (results: { [key: string]: string }) => {
        const assetLabel = !!results ? results[assetKey] : 'Asset';
        const fleetLabel = !!results ? results[fleetKey] : 'Fleet';
        this.forecastCreateCategoryList = [
          { label: assetLabel, value: ForecastCreateCategory.ASSET },
          { label: fleetLabel, value: ForecastCreateCategory.FLEET }
        ];
      }
    });
  }
  private setForecastTableColList(): void {
    this.forecastTableColList = [
      { field: 'forecastNumber', alignment: 'left', width: '2.5%' },
      { field: 'forecastName', alignment: 'left', width: '21.5%' },
      { field: 'fleetName', alignment: 'left', width: '12.5%' },
      { field: 'assetPn', alignment: 'left', width: '12%' },
      { field: 'assetSn', alignment: 'left', width: '7.5%' },
      { field: 'forecastStartDate', alignment: 'left', width: '8%' },
      { field: 'forecastEndDate', alignment: 'left', width: '8%' },
      { field: 'forecastMroCenter', alignment: 'left', width: '8%' },
      { field: 'forecastWorkCenter', alignment: 'left', width: '8%' },
      { field: 'forecastStatus', alignment: 'left', width: '12.5%' }
    ];
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: SearchData | undefined = event.criteria;

    if (!criteria) {
      this.resetSearchCriteria();
    }

    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchData = criteria || {};
      this.searchObject = this.searchData.searchObject || {};
      this.selectedLastUpdateDateCriteria = this.searchData.selectedLastUpdateDateCriteria;
      this.selectedStartDateCriteria = this.searchData.selectedStartDateCriteria;
      this.selectedEndDateCriteria = this.searchData.selectedEndDateCriteria;
      this.selectedForecastCategory = this.searchData.selectedForecastCategory || ForecastCategory.ALL;
      this.selectedFleet = this.searchData.selectedFleet || {};
      this.selectedAsset = this.searchData.selectedAsset || {};
      this.selectedAttribute = this.searchData.selectedAttribute;
      this.selectedAttributeValue = this.searchData.selectedAttributeValue;
      this.showAdvancedCriteria = this.searchData.showAdvancedCriteria || false;
      this.search();
    } else {
      this.componentData.objectId = undefined;
    }
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: SearchData = {
      searchObject: this.searchObject,
      selectedLastUpdateDateCriteria: this.selectedLastUpdateDateCriteria,
      selectedStartDateCriteria: this.selectedStartDateCriteria,
      selectedEndDateCriteria: this.selectedEndDateCriteria,
      selectedForecastCategory: this.selectedForecastCategory,
      selectedFleet: this.selectedFleet,
      selectedAsset: this.selectedAsset,
      selectedAttribute: this.selectedAttribute,
      selectedAttributeValue: this.selectedAttributeValue,
      showAdvancedCriteria: this.showAdvancedCriteria
    };
    this.criteriaToSave = criteriaToSave;
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {};
    this.selectedLastUpdateDateCriteria = undefined;
    this.selectedStartDateCriteria = undefined;
    this.selectedEndDateCriteria = undefined;
    this.selectedFleet = {};
    this.selectedAsset = {};
    this.selectedForecastCategory = ForecastCategory.ALL;
    this.selectedAttribute = undefined;
    this.selectedAttributeValue = undefined;
    this.showAdvancedCriteria = false;
  }

  public updateRepairCenterCode(): void {
    if (!!this.searchObject.repairCenterCode) {
      this.forecastFormService.loadWorkCenterListBySite(this.searchObject.repairCenterCode).subscribe((result) => {
        this.workCenterList = result;
      });
    } else {
      this.workCenterList = this.allWorkCenterList;
    }
  }
}
