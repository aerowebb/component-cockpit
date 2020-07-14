import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ISearchCriteria } from '../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindAllAssetForAirworthinessControlInput } from '../../../shared/types/api-input-types/airworthiness-management/find-all-asset-for-airworthiness-control-input.interface';
import { BidoEquipmentForAirworthinessControlCustomDTO } from '../../../shared/types/api-output-types/airworthiness-management/bido-equipment-for-airworthiness-control-custom-dto.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { LabelValueUtils } from '../../../shared/utils/label-value-utils';

import { ToolMaintenanceSearchService } from './tools-maintenance-search.service';

@Component({
  selector: 'aw-tools-maintenance-search',
  templateUrl: './tools-maintenance-search.component.html',
  styleUrls: ['./tools-maintenance-search.component.scss']
})
export class ToolsMaintenanceSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly TOOLS_TABLE_EXPORT_NAME: string = 'Ground_Equipment_List';
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.TOOLS_MAINTENANCE_SEARCH_CRITERIA_ID;

  @Output()
  public onValidated: EventEmitter<BidoEquipmentForAirworthinessControlCustomDTO[]>;

  public groundEquipmentTypes: LabelValue<string>[];
  public propertyVariant: LabelValue<string>[];
  public warehouseTypes: LabelValue<string>[];

  public searchObject: FindAllAssetForAirworthinessControlInput;
  public toolSearchCols: TableColumn[];
  public toolsList: SearchResultsDTO<BidoEquipmentForAirworthinessControlCustomDTO>;
  public selectedTools: BidoEquipmentForAirworthinessControlCustomDTO[];

  public operationalStatusList: LabelValue<string>[];
  public showResultLoading: boolean;

  // Search Criteria
  public criteriaToSave: FindAllAssetForAirworthinessControlInput;
  public criteriaName: string | undefined;
  public hasBeenCalculated: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly service: ToolMaintenanceSearchService,
    private readonly exportService: ExportService,
    private readonly dateService: DateService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.onValidated = new EventEmitter<BidoEquipmentForAirworthinessControlCustomDTO[]>();
  }

  public ngOnInit(): void {
    this.displayComponentContext('global.search', true);

    this.toolsList = {
      list: [],
      moreResults: false
    };

    this.searchObject = {
      equipmentTypeSelected: false,
      aircraftTypeSelected: false,
      allAssetTypeSelected: false,
      engineTypeSelected: false
    };

    this.selectedTools = [];
    this.initTableCols();
    this.loadDropdown();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TOOLS_MAINTENANCE_STATUS_SEARCH;
  }

  /*********************************
   * Init Table Cols
   *********************************/
  private initTableCols(): void {
    this.toolSearchCols = [
      { field: 'pnCode', alignment: 'left', width: '10%' },
      { field: 'designation', alignment: 'left', width: '30%' },
      { field: 'snCode', alignment: 'left', width: '10%' },
      { field: 'location', alignment: 'left', width: '13%' },
      { field: 'status', alignment: 'left', width: '10%' },
      { field: 'equipmentCode', alignment: 'left', width: '12%' },
      { field: 'function', alignment: 'left', width: '15%' }
    ];
  }

  /*********************************
   * load Dropdown
   *********************************/
  private loadDropdown() {
    this.service.fetchGroundEquipmentFunctionList().subscribe(
      (results) => {
        this.groundEquipmentTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
      }
    );

    const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_GROUND_EQUIPMENT_KEY;
    this.service.getFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        this.propertyVariant = results;
      },
      () => {
        this.messageService.showSuccessMessage('global.errorOnGetResults');
      }
    );

    this.service.findAll().subscribe(
      (results) => {
        this.warehouseTypes = [];
        if (!!results) {
          results.forEach((res) => {
            this.warehouseTypes.push({
              label: `${res.whCode} - ${res.whName}`,
              value: !!res.wareHouseId ? res.wareHouseId.toString() : ''
            });
          });
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetWarehouseList'));
      }
    );

    this.loadOperationalStatusList();
  }

  /*********************************
   * Search functionality
   *********************************/
  public search() {
    this.showResultLoading = true;
    this.service.findAllAssetForTools(this.searchObject).subscribe(
      (result) => {
        result.list.forEach((element) => {
          if (!!element.location) {
            LabelValueUtils.stringValueToLabel<BidoEquipmentDTO>(element, 'location', this.warehouseTypes);
          }
        });
        this.toolsList = result;
        this.showResultLoading = false;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveUsers'));
        this.showResultLoading = false;
      }
    );
  }

  /*********************************
   * Load operational status dropdown
   *********************************/
  private loadOperationalStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP).subscribe(
      (result) => {
        this.operationalStatusList = result;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGettingStatusList'));
      }
    );
  }

  /*********************************
   * Action performed on Open
   *********************************/
  public openForm() {
    const assetCodes: BidoEquipmentForAirworthinessControlCustomDTO[] = [];

    this.selectedTools.forEach((row) => {
      if (!!row && !!row.equipmentCode) {
        assetCodes.push(row);
      }
    });

    this.onValidated.emit(assetCodes);
  }

  /*********************************
   * Reset Search Criteria
   *********************************/
  public resetSearchCriteria() {
    this.searchObject = {
      equipmentTypeSelected: false,
      aircraftTypeSelected: false,
      allAssetTypeSelected: false,
      engineTypeSelected: false
    };
  }

  public exportTable(): void {
    const table: BidoEquipmentForAirworthinessControlCustomDTO[] = this.toolsList.list.map((event) => {
      return {
        pnCode: event.pnCode,
        designation: event.designation,
        snCode: event.snCode,
        location: event.location,
        status: event.status,
        equipmentCode: event.equipmentCode,
        function: event.function
      };
    });

    this.exportService.toExcel(
      table,
      `${ToolsMaintenanceSearchComponent.TOOLS_TABLE_EXPORT_NAME}-${this.dateService.dateToString(new Date())}`,
      'ToolsMaintenanceSearchComponent'
    );
  }

  /*********************************
   * Manage Search Criteria
   *********************************/
  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: FindAllAssetForAirworthinessControlInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    } else {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: FindAllAssetForAirworthinessControlInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }
}
