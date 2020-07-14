import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { DismantleEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/dismantle-equipment-input.interface';
import { AssetRemovedInput } from '../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { CounterMeasureInputDTO } from '../../../shared/types/api-input-types/install-asset/counter-measure-input-dto.interface';
import { EvolutionLinkedToAssetInputDTO } from '../../../shared/types/api-input-types/install-asset/evolution-linked-to-asset-input-dto.interface';
import { RemovalAssetOutputDTO } from '../../../shared/types/api-output-types/fleet-business/removal-asset-output-dto.interface';
import { AssetsToBeRemovedOutputDTO } from '../../../shared/types/api-output-types/fleet-history/assets-to-be-removed-output-dto.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { MeasureProgressUIDTO } from '../../../shared/types/api-output-types/install-asset/measure-progress-ui-dto.interface';
import { EventOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionDTO } from '../../../shared/types/api-types/bido-equipment-evolution-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../shared/utils/select-item-utils';

import { RemoveAssetService } from './remove-asset.service';

interface AssetsTableRow {
  report?: boolean;
  pnCode?: string;
  sn?: string;
  statusAtDate?: string;
  designation?: string;
  pnCodeSuperior?: string;
  snSuperior?: string;
  designationSuperior?: string;
  alerts?: boolean;
  equipmentCode?: string;
  assestFatherCode?: string;
  alertMessage?: string;
  reportMessage?: string;
  assetFamilyVariant?: string;
  assetsDTO?: RemovalAssetOutputDTO;
  _obj: AssetsToBeRemovedOutputDTO;
}

interface EvolutionTableRow {
  evoType?: string;
  evoNumber?: string;
  evoRevisionNumber?: string;
  equipmentCode?: string;
  applicationDate?: string;
  dateRemove?: string;
  isPartiallyApplied?: boolean;
  isNotApplicable?: boolean;
  _obj: BidoEquipmentEvolutionDTO;
}

interface MeasureTableRow {
  asset: string;
  counterCode: string;
  readingDate: string;
  valueBefore: string;
  valueAfter: string;
  _obj: MeasureProgressUIDTO;
}
@Component({
  selector: 'aw-remove-asset',
  styleUrls: ['./remove-asset.component.scss'],
  templateUrl: './remove-asset.component.html'
})
export class RemoveAssetComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly ADDITIONAL_INFORMATION_ANCHOR_ID: string = 'additionalInformationAnchor';
  public static readonly ASSETS_TO_BE_REMOVED_ANCHOR_ID: string = 'assetsToBeRemovedAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';

  public readonly componentRef: typeof RemoveAssetComponent;

  @ViewChild(RemoveAssetComponent.ADDITIONAL_INFORMATION_ANCHOR_ID)
  public additionalInformationAnchor: ElementRef;

  @ViewChild(RemoveAssetComponent.ASSETS_TO_BE_REMOVED_ANCHOR_ID)
  public assetToRemoveAnchor: ElementRef;

  @ViewChild(RemoveAssetComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInfoAnchor: ElementRef;

  public filteredRowsNb: number;
  public resultsTable: AssetsTableRow[];
  public resultsTableCols: TableColumn[];
  public selectedAnchor: string | undefined;
  public toc: PageTocEntry[];

  public propertyOperationalStatus: LabelValue<string>[];
  public propertyRemovalReason: LabelValue<string>[];
  public propertyNewAircraftStatus: LabelValue<string>[];
  public shopNames: LabelValue<string>[];
  public shopTechnicalLevels: LabelValue<string>[];

  public isReadOnlyForm: boolean;
  public date: Date;
  public newOperationalStatus: string;
  public superiorAssetCode: string;
  public superiorAssetDesignation: string;
  public superiorAtaCode: string;
  public superiorAssetName: string;
  public isSaveAllowed: boolean;
  public showEngineOnlyFields: boolean;
  public showReportPopup: boolean;
  public reportText: string;

  public assetsToRemove: AssetRemovedInput;
  public equipmentInput: DismantleEquipmentInput;
  public assetsToBeRemoved: AssetsToBeRemovedOutputDTO[];
  public asstesAfterDismantling: RemovalAssetOutputDTO[];
  public operationalStatusMap: Map<string, string>;
  public isLoading: boolean = false;

  public warehouseList: SelectItem[];
  public selectedWarehouse: BidtWarehouseDTO | undefined;
  public showSaveSpinner: boolean;
  public showQuickSearchEventPopup: boolean;
  public eventType: string | undefined;
  public eventSubject: string | undefined;

  public evolutionsLinked: EvolutionTableRow[];
  public newEvolutionsLinked: EvolutionTableRow[];
  public canceledMeasureProgress: MeasureTableRow[];
  public evolutionsTableCols: TableColumn[];
  public counterTableCols: TableColumn[];
  public updateEvolutions: boolean;
  public resetCounters: boolean;
  public eventTypeMap: Map<string, string>;
  public showAdvancedCriteria: boolean;
  public reportHeading: string;
  public fatherBidoEquipmentDto: BidoEquipmentDTO;
  public isGroundEquipment: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly removeAssetService: RemoveAssetService,
    private readonly translateService: TranslateService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    public dateService: DateService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.componentRef = RemoveAssetComponent;
    super.registerPageTocEntryObservable();
    this.isLoading = false;
    this.filteredRowsNb = 0;
    this.resultsTable = [];
    this.isReadOnlyForm = false;
    this.isSaveAllowed = false;
    this.showEngineOnlyFields = false;
    this.operationalStatusMap = new Map<string, string>();
    this.eventTypeMap = new Map<string, string>();
    this.showReportPopup = false;
    this.reportText = '';
    this.reportHeading = '';

    this.warehouseList = [];
    this.selectedWarehouse = undefined;

    this.propertyOperationalStatus = [];
    this.propertyNewAircraftStatus = [];
    this.propertyRemovalReason = [];
    this.assetsToBeRemoved = [];
    this.shopNames = [];
    this.shopTechnicalLevels = [];
    this.showQuickSearchEventPopup = false;
    this.updateEvolutions = false;
    this.resetCounters = false;
    this.showAdvancedCriteria = false;

    this.resultsTableCols = [
      { field: 'pnCode', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'designation', alignment: 'left' },
      { field: 'statusAtDate', alignment: 'left' },
      { field: 'pnCodeSuperior', alignment: 'left' },
      { field: 'snSuperior', alignment: 'left' },
      { field: 'designationSuperior', alignment: 'left' },
      { field: 'alerts', alignment: 'left' }
    ];

    this.evolutionsTableCols = [
      { field: 'equipmentCode', alignment: 'left', width: '10rem' },
      { field: 'evoType', alignment: 'left', width: '10rem' },
      { field: 'evoNumber', alignment: 'left', width: '10rem' },
      { field: 'evoRevisionNumber', alignment: 'left', width: '10rem' },
      { field: 'applicationDate', alignment: 'left', width: '10rem' },
      { field: 'isPartiallyApplied', alignment: 'left', width: '5rem' },
      { field: 'dateRemove', alignment: 'left', width: '10rem' },
      { field: 'isNotApplicable', alignment: 'left', width: '5rem' }
    ];

    this.counterTableCols = [
      { field: 'asset', alignment: 'left' },
      { field: 'counterCode', alignment: 'left' },
      { field: 'readingDate', alignment: 'left' },
      { field: 'valueBefore', alignment: 'left' },
      { field: 'valueAfter', alignment: 'left' }
    ];

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  private loadWarehouseList(pnCode: string): void {
    this.removeAssetService.findAllWarehouseForRemovalWithData(pnCode).subscribe((results) => {
      this.warehouseList = SelectItemUtils.fromLabelValues(results);
    });
  }

  public getComponentName(): string {
    return 'RemoveAssetComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('', true);

    if (this.componentData && this.componentData.objectId) {
      this.assetsToRemove = this.serializationService.deserialize(this.componentData.objectId);
      if (this.assetsToRemove) {
        if (!ListUtils.isNullOrEmpty(this.assetsToRemove.assetCode)) {
          this.loadFatherEquipment();
          this.loadAssets();
        }
      }
    } else {
      this.loadDropDownLists();
    }

    this.toc = [
      {
        id: 'mainInformationAnchor',
        anchor: this.mainInfoAnchor,
        label: 'Main Information'
      },
      {
        id: 'assetsToBeRemovedAnchor',
        anchor: this.assetToRemoveAnchor,
        label: 'Assets to be Removed'
      },
      {
        id: 'additionalInformationAnchor',
        anchor: this.additionalInformationAnchor,
        label: 'Additional Information'
      }
    ];
  }

  public openAsset(row: AssetsTableRow): void {
    const equipment = row._obj.equipment;

    if (equipment && equipment.equipmentCode) {
      if (this.isAssetAircraft(equipment)) {
        this.openAircraft(equipment.equipmentCode);
      } else if (this.isAssetEngine(equipment)) {
        this.openEngine(equipment.equipmentCode);
      } else if (this.isAssetEquipment(equipment)) {
        this.openEquipment(equipment.equipmentCode);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenAsset'));
    }
  }

  public isAssetAircraft(asset: BidoEquipmentDTO): boolean {
    return !!asset.equipmentFunction && asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isAssetEngine(asset: BidoEquipmentDTO): boolean {
    return !!asset.equipmentFunction && asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  public isAssetEquipment(asset: BidoEquipmentDTO): boolean {
    return !!asset.equipmentFunction && !this.isAssetAircraft(asset) && !this.isAssetEngine(asset);
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadFatherEquipment() {
    const dtoId: BidoEquipmentDTOId = {
      equipmentCode: this.assetsToRemove.superiorAssetCode
    };
    this.removeAssetService.findBidoEquipment(dtoId).subscribe((fatherData) => {
      this.fatherBidoEquipmentDto = fatherData;

      if (
        fatherData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
        fatherData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
        fatherData.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY
      ) {
        this.isGroundEquipment = true;
      }

      this.loadDropDownLists();
    });
  }

  public loadAssets() {
    this.equipmentInput = {
      informationsDTO: {}
    };
    // Initialize Date
    this.isLoading = true;
    const date = new Date();
    if (!!this.equipmentInput.informationsDTO) {
      this.equipmentInput.informationsDTO.eventDate = date;
      this.equipmentInput.informationsDTO.generateEvent = true;
    }
    this.assetsToRemove.date = date;

    this.removeAssetService.findAssetsRemovedList(this.assetsToRemove).subscribe((assetsToRemoved) => {
      if (!!this.equipmentInput.informationsDTO) {
        this.equipmentInput.informationsDTO.subject = assetsToRemoved.subject;
      }
      this.assetsToBeRemoved = [...assetsToRemoved.assetList];
      this.resultsTable = this.convertIntoRowType(assetsToRemoved.assetList);
      this.isLoading = false;

      assetsToRemoved.assetList.forEach((elt) => {
        this.loadWarehouseList(elt.assetPn as string);
      });
      this.bindEvolutionsTables();
      this.getCounterMeasureList();
    });
  }

  public reloadAssets() {
    if (!!this.equipmentInput.informationsDTO && !!this.equipmentInput.informationsDTO.eventDate) {
      this.assetsToRemove.date = this.equipmentInput.informationsDTO.eventDate;

      this.removeAssetService.findAssetsRemovedList(this.assetsToRemove).subscribe((assetsToRemoved) => {
        if (!!this.equipmentInput.informationsDTO) {
          this.equipmentInput.informationsDTO.subject = assetsToRemoved.subject;
        }
        this.assetsToBeRemoved = [...assetsToRemoved.assetList];
        this.resultsTable = this.convertIntoRowType(assetsToRemoved.assetList);
        this.isLoading = false;
      });
    }
  }

  private convertIntoRowType(assets: AssetsToBeRemovedOutputDTO[]): AssetsTableRow[] {
    const assetsTable: AssetsTableRow[] = [];
    let checkRowAlert = 0;
    assets.forEach((asset) => {
      const assetRow: AssetsTableRow = {
        _obj: asset,
        pnCode: asset.assetPn,
        sn: asset.assetSn,
        designation: asset.assetDesignation,
        statusAtDate: asset.assetStatusAtDate && this.operationalStatusMap.get(asset.assetStatusAtDate),
        designationSuperior: asset.superiorEquipment ? BidoEquipmentUtils.createAssetName(asset.superiorEquipment) : '',
        pnCodeSuperior: asset.superiorPn,
        snSuperior: asset.superiorSN,
        alerts: asset.alert,
        equipmentCode: asset.assetCode,
        assestFatherCode: asset.assestFatherCode,
        assetFamilyVariant: asset.assetFamilyVariant,
        alertMessage:
          asset.exceptionMessage &&
          asset.exceptionMessage.replace('com.twomoro.aerowebb.exception.AeroWebbException:', '')
      };
      assetsTable.push(assetRow);
      checkRowAlert = asset.alert ? checkRowAlert + 1 : checkRowAlert;
      if (asset.isEngine && !this.showEngineOnlyFields) {
        this.showEngineOnlyFields = true;
      }
    });

    if (checkRowAlert === assets.length) {
      this.isSaveAllowed = true;
    }

    return assetsTable;
  }

  private validateRemoval(): boolean {
    let eventDate;
    if (!!this.equipmentInput.informationsDTO && !!this.equipmentInput.informationsDTO.eventDate) {
      eventDate = moment(this.equipmentInput.informationsDTO.eventDate);
    }

    if (eventDate && eventDate.isAfter(moment())) {
      this.messageService.showErrorMessage(this.getTranslateKey('dateError'));

      return false;
    }

    if (
      this.showEngineOnlyFields &&
      ((this.equipmentInput.newAircraftStatus &&
        AWPropertiesConstants.AIRCRAFT_STATUS_IN_OPERATION_KEY === this.equipmentInput.newAircraftStatus) ||
        (AWPropertiesConstants.AIRCRAFT_STATUS_IN_OPERATION_KEY === this.fatherBidoEquipmentDto.operationalStatus &&
          !this.equipmentInput.newAircraftStatus))
    ) {
      this.messageService.showErrorMessage(this.getTranslateKey('invalidOperationalStatusAircraft'));

      return false;
    }

    return true;
  }

  public saveAsset(): void {
    if (this.validateRemoval()) {
      const newEvolList: BidoEquipmentEvolutionDTO[] = [];
      const updatedEvolList: BidoEquipmentEvolutionDTO[] = [];
      const measureList: MeasureProgressUIDTO[] = [];

      if (this.evolutionsLinked && this.evolutionsLinked.length > 0) {
        this.evolutionsLinked.map((obj) => {
          obj._obj.isPartiallyApplied = obj.isPartiallyApplied;
          obj._obj.isNotApplicable = obj.isNotApplicable;
          obj._obj.dateRemove = obj.dateRemove ? new Date(obj.dateRemove) : undefined;
          updatedEvolList.push(obj._obj);
        });
      }
      if (this.newEvolutionsLinked && this.newEvolutionsLinked.length > 0) {
        this.newEvolutionsLinked.map((obj) => {
          obj._obj.isPartiallyApplied = obj.isPartiallyApplied;
          obj._obj.isNotApplicable = obj.isNotApplicable;
          obj._obj.dateApplied = obj.applicationDate ? new Date(obj.applicationDate) : undefined;
          obj._obj.dateRemove = obj.dateRemove ? new Date(obj.dateRemove) : undefined;
          newEvolList.push(obj._obj);
        });
      }
      if (this.canceledMeasureProgress && this.canceledMeasureProgress.length > 0) {
        this.canceledMeasureProgress.map((obj) => {
          measureList.push(obj._obj);
        });
      }

      if (
        this.equipmentInput.informationsDTO &&
        this.equipmentInput.informationsDTO.eventDate &&
        this.equipmentInput.informationsDTO.reason &&
        this.equipmentInput.newOperationalStatus
      ) {
        this.equipmentInput.informationsDTO.warehouseId = this.selectedWarehouse
          ? this.selectedWarehouse.wareHouseId
          : undefined;
        const equipment: DismantleEquipmentInput = {
          informationsDTO: this.equipmentInput.informationsDTO,
          newAircraftStatus: this.equipmentInput.newAircraftStatus,
          newOperationalStatus: this.equipmentInput.newOperationalStatus,
          cancelMeasuresSinceEventDate: undefined,
          engineRemoval: !!this.showEngineOnlyFields,
          specificSNEnabled: !!this.sessionService.isSpecificSAE,
          updateEvolutions: this.updateEvolutions,
          resetCounters: this.resetCounters,
          newBidoEquipmentEvolutionDTOList: newEvolList,
          updateBidoEquipmentEvolutionDTOList: updatedEvolList,
          measuresToCancel: measureList
        };

        let fatherCode = '';
        this.assetsToBeRemoved.forEach((asset) => {
          if (!fatherCode) {
            fatherCode = asset.assestFatherCode || '';
          }
          if (!equipment.equipmentCode) {
            equipment.equipmentCode = [];
          }
          if (equipment.equipmentCode && asset.assetCode) {
            equipment.equipmentCode.push(asset.assetCode);
          }
        });

        equipment.equipmentCodeFather = fatherCode;

        this.showSaveSpinner = true;
        this.removeAssetService.dismantleEquipment(equipment).subscribe(
          (result) => {
            this.asstesAfterDismantling = [...result.removalAssetOutputList];
            this.bindReportData(this.asstesAfterDismantling);
            this.reportText = result.report || '';
            this.isReadOnlyForm = true;
            this.messageService.showSuccessMessage(this.getTranslateKey('messageOnSave'));
            this.showSaveSpinner = false;
            this.isSaveAllowed = false;
          },
          (error) => {
            this.showSaveSpinner = false;
          }
        );
      } else {
        this.messageService.showErrorMessage('global.missingFields');
      }
    }
  }

  private bindReportData(assets: RemovalAssetOutputDTO[]): void {
    this.reportHeading = '';
    assets.forEach((asset) => {
      const tableRow = this.resultsTable.find((row) => {
        return row.equipmentCode === asset.equipmentCode;
      });
      if (!!tableRow) {
        tableRow.report = asset.isRemoved;
        tableRow.reportMessage =
          asset.removalMessageException &&
          asset.removalMessageException.replace('com.twomoro.aerowebb.exception.AeroWebbException:', '');
        tableRow.assetsDTO = asset;
        if (asset.reportDTO && asset.reportDTO.eventCode && !this.reportHeading) {
          this.reportHeading = asset.reportDTO.eventCode;
        } else if (asset.reportDTO && asset.reportDTO.eventCode && this.reportHeading) {
          this.reportHeading = `${this.reportHeading};${asset.reportDTO.eventCode}`;
        }
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  private loadDropDownLists(): void {
    const operationalStatusObservable = this.isGroundEquipment
      ? this.propertiesService.getValue(GenericPropertyConstants.GROUND_EQUIPMENT_STATUS_MAP)
      : this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);

    operationalStatusObservable.subscribe((results) => {
      this.propertyOperationalStatus = results;
      results.forEach((obj, index) => {
        if (!this.isGroundEquipment) {
          if (obj.value === AWPropertiesConstants.OPERATIONAL_STATUS_IN_OPERATION_KEY) {
            results.splice(index, 1);

            return;
          }
        }

        if (
          !this.sessionService.isSpecificSAE &&
          obj.value === AWPropertiesConstants.OPERATIONAL_STATUS_EDS_UNDER_PROGRESS_KEY
        ) {
          results.splice(index, 1);

          return;
        }
        this.operationalStatusMap.set(obj.value, obj.label);
      });
    });

    this.propertiesService.getValue(GenericPropertyConstants.REMOVAL_REASON_MAP).subscribe((results) => {
      this.propertyRemovalReason = results;
    });

    this.propertiesService.getValue(GenericPropertyConstants.AIRCRAFT_STATUS_MAP).subscribe((results) => {
      this.propertyNewAircraftStatus = results;
    });

    this.removeAssetService.getEventTypesValues().subscribe((results) => {
      results.forEach((obj) => {
        this.eventTypeMap.set(obj.value, obj.label);
      });
    });
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public report(): void {
    if (!!this.reportText) {
      this.showReportPopup = true;
    }
  }

  public onActionCheckWarehouseAndOperationalStatus(): void {
    if (this.equipmentInput.newOperationalStatus && this.selectedWarehouse) {
      let operationalStatusFromReceipt = '';
      if (!this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
      } else if (AWPropertiesConstants.MM_WAREHOUSE_TYPE_REPAIR_KEY === this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_MAINTENANCE_KEY;
      } else if (AWPropertiesConstants.MM_WAREHOUSE_TYPE_UNSERVICEABLE_KEY === this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_IN_STOCK_KEY;
      } else if (AWPropertiesConstants.MM_WAREHOUSE_TYPE_SCRAP_KEY === this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_SCRAPPED_KEY;
      } else if (AWPropertiesConstants.MM_WAREHOUSE_TYPE_USED_KEY === this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
      } else if (AWPropertiesConstants.MM_WAREHOUSE_TYPE_NEW_KEY === this.selectedWarehouse.whType) {
        operationalStatusFromReceipt = AWPropertiesConstants.OPERATIONAL_STATUS_SPARE_KEY;
      }

      if (this.equipmentInput.newOperationalStatus !== operationalStatusFromReceipt) {
        // Report Warning
        this.messageService.showWarningMessage(this.getTranslateKey('warningOperationStatus'));
      }
    }
  }

  public searchEventCode() {
    if (this.isSaveAllowed) {
      this.showQuickSearchEventPopup = true;
    }
  }

  public resetEventField(ev: Event) {
    if (this.isSaveAllowed) {
      this.equipmentInput.informationsDTO.linkedEventCode = undefined;
      this.eventType = undefined;
      this.eventSubject = undefined;
      ev.stopPropagation();
    }
  }

  /**
   * Set event information in additional tab
   */
  public setSelectedEvent(event: EventOVSOutputDTO) {
    if (!!event) {
      if (event.eventStatus === AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY) {
        this.messageService.showWarningMessage(this.getTranslateKey('canNotSelectClosedEvent'));

        return;
      }
      if (!!this.equipmentInput && !!this.equipmentInput.informationsDTO) {
        this.equipmentInput.informationsDTO.linkedEventCode = event.eventCode;
      }
      if (event.eventType) {
        this.eventType = this.eventTypeMap.get(event.eventType);
      }
      this.eventSubject = event.eventSubject;
    }
  }

  /**
   * Bind Evolution Tables
   */
  public bindEvolutionsTables(): void {
    const assetInput: EvolutionLinkedToAssetInputDTO[] = [];
    this.resultsTable.forEach((res) => {
      if (
        !!res &&
        !!res.equipmentCode &&
        !!res.assetFamilyVariant &&
        !!res.pnCode &&
        !!this.equipmentInput &&
        !!this.equipmentInput.informationsDTO &&
        !!this.equipmentInput.informationsDTO.eventDate
      ) {
        const evolutionLinked: EvolutionLinkedToAssetInputDTO = {
          assetCode: res.equipmentCode,
          familyVariantCode: res.assetFamilyVariant,
          pnCode: res.pnCode,
          eventDate: this.equipmentInput.informationsDTO.eventDate
        };
        assetInput.push(evolutionLinked);
      }
    });

    this.removeAssetService.getEvolutionsLinkedToAsset(assetInput).subscribe((results) => {
      const proposedEvolution: EvolutionTableRow[] = [];
      const evolutionLinked: EvolutionTableRow[] = [];
      results.forEach((res) => {
        res.proposedBidoEquipmentEvolutionList.forEach((row) => {
          if (!!row) {
            proposedEvolution.push(this.parseToCustomEvolutionType(row));
          }
        });
        res.bidoEquipmentEvolutionList.forEach((row) => {
          if (!!row) {
            evolutionLinked.push(this.parseToCustomEvolutionType(row));
          }
        });
      });
      this.newEvolutionsLinked = [...proposedEvolution];
      this.evolutionsLinked = [...evolutionLinked];
    });
  }

  private parseToCustomEvolutionType(obj: BidoEquipmentEvolutionDTO): EvolutionTableRow {
    const evolutionTableRow: EvolutionTableRow = {
      _obj: obj,
      applicationDate: obj.dateApplied ? this.dateService.dateToString(obj.dateApplied) : '',
      dateRemove: obj.dateRemove ? this.dateService.dateToString(obj.dateRemove) : '',
      equipmentCode: obj.equipmentCode,
      evoNumber: obj.evolutionNumber,
      evoRevisionNumber: obj.evolutionRevisionNumber,
      evoType: obj.evolutionType,
      isNotApplicable: obj.isNotApplicable,
      isPartiallyApplied: obj.isPartiallyApplied
    };

    return evolutionTableRow;
  }

  private parseToCustomMeasureType(obj: MeasureProgressUIDTO): MeasureTableRow {
    const tableRow: MeasureTableRow = {
      _obj: obj,
      readingDate: obj.date ? this.dateService.dateToString(obj.date) : '',
      asset: obj.asset,
      counterCode: obj.counterCode,
      valueAfter: obj.valueAfter,
      valueBefore: obj.valueBefore
    };

    return tableRow;
  }

  private getCounterMeasureList(event?: BidoEquipmentOVSOutputDTO) {
    const counterMeasureInput: CounterMeasureInputDTO[] = [];
    this.resultsTable.forEach((res) => {
      if (
        !!event &&
        !!event.equipmentCode &&
        !!res &&
        !!res.equipmentCode &&
        !!this.equipmentInput &&
        !!this.equipmentInput.informationsDTO &&
        !!this.equipmentInput.informationsDTO.eventDate
      ) {
        const counterMesureInput: CounterMeasureInputDTO = {
          equipmentCode: res.equipmentCode,
          equipmentCodeFather: event.equipmentCode,
          date: this.equipmentInput.informationsDTO.eventDate
        };
        counterMeasureInput.push(counterMesureInput);
      } else if (res.pnCodeSuperior) {
        if (
          !!res &&
          !!res.equipmentCode &&
          !!res.assestFatherCode &&
          !!this.equipmentInput &&
          !!this.equipmentInput.informationsDTO &&
          !!this.equipmentInput.informationsDTO.eventDate
        ) {
          const counterMesureInput: CounterMeasureInputDTO = {
            equipmentCode: res.equipmentCode,
            equipmentCodeFather: res.assestFatherCode,
            date: this.equipmentInput.informationsDTO.eventDate
          };
          counterMeasureInput.push(counterMesureInput);
        }
      }
    });

    this.removeAssetService.getCounterMeasureList(counterMeasureInput).subscribe((results) => {
      if (!!results) {
        const cancelMeasure: MeasureTableRow[] = [];
        results.forEach((resp) => {
          if (resp && resp.measureToCancel) {
            resp.measureToCancel.forEach((row) => {
              cancelMeasure.push(this.parseToCustomMeasureType(row));
            });
          }
        });
        this.canceledMeasureProgress = [...cancelMeasure];
      }
    });
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  public onMoreDetailsClick(): void {
    this.showAdvancedCriteria = !this.showAdvancedCriteria;
    this.updateEvolutions = false;
    this.resetCounters = false;
  }
}
