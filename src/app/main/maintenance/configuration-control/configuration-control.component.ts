import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, takeUntil } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidmAttributeConstants } from '../../../shared/constants/bidm-attribute-constants';
import { BidtStockMvtConstants } from '../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { ControlConfigurationInput } from '../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { AssetInstalledInput } from '../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { AssetRemovedInput } from '../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { ControlConfigurationOutput } from '../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { ADComplianceOutput } from '../../../shared/types/api-output-types/product-structure-business/ad-compliance-output.interface';
import { BidmProjectAttributeDTO } from '../../../shared/types/api-types/bidm-project-attribute-dto.interface';
import { BidmProjectDTOId } from '../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmProjectReportDtoId } from '../../../shared/types/api-types/bidm-project-report-dto-id.interface';
import { BidmWorkOrderDTOId } from '../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTOId } from '../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { WorkOrderManagementInputDTO } from '../../../shared/types/api-types/work-order-management-input-dto.interface';
import { AppliedConfigurationManagementInput } from '../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { BireItemUtils } from '../../../shared/utils/bire-item-utils';
import { BooleanUtils } from '../../../shared/utils/boolean-utils';
import { FileUtils } from '../../../shared/utils/file-utils';
import { ListUtils } from '../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../airworthiness-control/types/schedule-maintenance-form-component-input.interface';

import { ConfigurationControlService } from './configuration-control.service';

enum SearchStockMvtStatus {
  ALL = 1,
  INSTALLATIONS,
  REMOVALS
}

interface ControlRow {
  category: string;
  causeIdList: string;
  causeList: string[];
  control: string;
  _id: number;
  _expand: boolean;
}

interface LLPRow {
  control?: string;
  counterCode?: string;
  cumulatedCounterValue?: string;
  remainingValue?: string;
  referenceValue?: string;
  _obj?: FindBidoCounterReferencesByEquipmentCodeOutput;
}

@Component({
  selector: 'aw-configuration-control',
  templateUrl: './configuration-control.component.html',
  styleUrls: ['./configuration-control.component.scss', './share.scss']
})
export class ConfigurationControlComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL: string =
    'checkAirworthinessDocumentCompliance';
  public static readonly SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL: string =
    'checkAppliableConfigurationCompliance';
  public static readonly SUMMARY_TABLE_GLOBAL_LABEL: string = 'checkGlobal';
  public static readonly SUMMARY_TABLE_LLP_POTENTIAL_LABEL: string = 'checkLlpPotential';

  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  private static readonly SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_INDEX: number = 2;
  private static readonly SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_INDEX: number = 1;
  private static readonly SUMMARY_TABLE_GLOBAL_INDEX: number = 0;
  private static readonly SUMMARY_TABLE_LLP_POTENTIAL_INDEX: number = 3;

  private static readonly CONTROLS_TABLE_CHECK_LOGBOOK_ID = 1;
  private static readonly CONTROLS_TABLE_CHECK_OTHER_ID = 3;
  private static readonly CONTROLS_TABLE_CHECK_POTENTIAL_ID = 2;

  public static readonly CONFIGURATION_CONTROL_ANCHOR_ID: string = 'configurationControlAnchor';

  public readonly component: typeof ConfigurationControlComponent;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public componentContext: string;

  public navigationLinkList: MenuItem[];

  public aircraftStatusList: SelectItem[];
  public asset: BidoEquipmentDTO;
  public assetStructure: TreeNode[];
  public assetStructureFilterInstallationVisible: boolean;
  public assetStructureFilterRemovalVisible: boolean;
  public assetStructureFiltersVisible: boolean;
  public assetStructureLoading: boolean;
  public assetStructureSelection: TreeNode | undefined;
  public controlTable: ControlRow[];
  public controlTableColList: TableColumn[];
  public currentWorkOrder: BidmWorkOrderDTO | undefined;
  public currentWorkOrderCode: string | undefined;
  public currentWorkOrderDescription: string | undefined;
  public globalStatus: string;
  public searchAssetStructureGlobalFilter: string;
  public searchAssetStructureGlobalFilterChanged: Subject<string>;
  public searchControlList: SelectItem[];
  public searchStockMvtStatusList: SelectItem[];
  public selectedControlList: string[];
  public selectedStockMvtStatusList: number[];
  public summaryTable: SummaryRow[];
  public summaryTableColList: TableColumn[];
  public workPackageCode: string | undefined;
  public workPackageConfirmedInstallations: number;
  public workPackageConfirmedRemovals: number;
  public workPackageInstallations: number;
  public workPackageMovementsUpdated: boolean;
  public workPackageMovementsVisible: boolean;
  public workPackageRemovals: number;

  public dialogSearchAssetVisible: boolean;

  private assetStructureSrc: TreeNode[];
  private equipmentCode: string;
  private workPackage: BidmProjectDTO;
  private workPackageAttributeList: BidmProjectAttributeDTO[];

  public showAirworthinessDocumentSection: boolean;
  public airworthinessDocumentsTable: ADComplianceOutput[];
  public airworthinessDocumentsTableCols: TableColumn[];
  public airworthinessDocumentsTableLoading: boolean;

  public showLLPPotentialSection: boolean;
  public llpPotentialTable: LLPRow[];
  public llpPotentialTableCols: TableColumn[];
  public llpTableLoading: boolean;

  public showHelpDialog: boolean;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public isGroundEquipment: boolean;

  public showLoaderGenerateFormEASA1: boolean;
  public showLoaderGenerateFormFAA8130: boolean;

  public displayWithKardex: boolean;

  public showInstallByWorkPackageDialog: boolean;
  public mvtWay: string;
  public woPn: string | undefined;
  public woSn: string | undefined;
  public woFunctionCode: string | undefined;
  public woItemPk: BireItemDTOId | undefined;
  public topAssetDTOId: BidoEquipmentDTOId | undefined;
  public woAssetDesignation: string | undefined;
  public woAssetFunction: string | undefined;
  public removeItems: MenuItem[];
  public installItems: MenuItem[];

  @ViewChild(ConfigurationControlComponent.CONFIGURATION_CONTROL_ANCHOR_ID)
  public configurationControlEltRef: ElementRef;

  // *****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly configurationControlService: ConfigurationControlService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = ConfigurationControlComponent;
    this.controlConfigConstants = ControlConfigConstants;
    this.awPropertiesConstants = AWPropertiesConstants;

    this.init();
    this.setTableCols();
    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_CONFIGURATION_CONTROL;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      const inputData = this.serializationService.deserialize(
        this.componentData.objectId as string
      ) as AppliedConfigurationManagementInput;
      this.equipmentCode = inputData.equipmentCodeList[0];
      this.workPackageCode = inputData.workPackage;

      this.onLoad();
    }
  }

  private setNavigationLinkList(): void {
    const airworthinessStatusKey = this.getTranslateKey('airworthinessStatus');
    const assetAtDateKey = this.getTranslateKey('assetAtDate');
    const assetReviewKey = this.getTranslateKey('assetReview');
    const maintenancePlanningKey = !this.isGroundEquipment
      ? this.getTranslateKey('maintenancePlanning')
      : this.getTranslateKey('groundMaintenancePlanning');

    this.translateService
      .get([airworthinessStatusKey, assetAtDateKey, assetReviewKey, maintenancePlanningKey])
      .subscribe((results) => {
        const airworthinessStatusLabel = results ? results[airworthinessStatusKey] : 'Airworthiness Status';
        const assetAtDateLabel = results ? results[assetAtDateKey] : 'Asset at Date';
        const assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
        const maintenancePlanningLabel = results ? results[maintenancePlanningKey] : 'Maintenance Planning';

        if (!this.isGroundEquipment) {
          this.navigationLinkList = [
            {
              label: airworthinessStatusLabel,
              command: () => {
                this.openAirworthinessStatus();
              }
            },
            {
              label: maintenancePlanningLabel,
              command: () => {
                this.openMaintenancePlanning();
              }
            },
            {
              label: assetReviewLabel,
              command: () => {
                this.openAssetReview();
              }
            },
            {
              label: assetAtDateLabel,
              command: () => {
                this.openAssetAtDate();
              }
            }
          ];
        } else {
          this.navigationLinkList = [
            {
              label: maintenancePlanningLabel,
              command: () => {
                this.openGroundMaintenancePlanning();
              }
            }
          ];
        }
      });
  }

  // ****************************************************************************

  private init(): void {
    this.showAirworthinessDocumentSection = false;
    this.airworthinessDocumentsTable = [];
    this.airworthinessDocumentsTableCols = [];
    this.airworthinessDocumentsTableLoading = false;

    this.showLLPPotentialSection = false;
    this.llpPotentialTable = [];
    this.llpPotentialTableCols = [];
    this.llpTableLoading = false;
  }

  public onBeforeLoad(): void {
    this.aircraftStatusList = [];
    this.assetStructure = [];
    this.assetStructureFilterInstallationVisible = false;
    this.assetStructureFilterRemovalVisible = false;
    this.assetStructureFiltersVisible = false;
    this.assetStructureLoading = false;
    this.assetStructureSelection = undefined;
    this.assetStructureSrc = [];
    this.componentContext = '';
    this.controlTable = [];
    this.currentWorkOrder = undefined;
    this.currentWorkOrderCode = undefined;
    this.currentWorkOrderDescription = undefined;
    this.globalStatus = ControlConfigConstants.ICON_RED;
    this.workPackageAttributeList = [];
    this.workPackageConfirmedInstallations = 0;
    this.workPackageConfirmedRemovals = 0;
    this.workPackageInstallations = 0;
    this.workPackageMovementsUpdated = false;
    this.workPackageMovementsVisible = false;
    this.workPackageRemovals = 0;

    this.dialogSearchAssetVisible = false;

    this.showLoaderGenerateFormEASA1 = false;
    this.showLoaderGenerateFormFAA8130 = false;

    this.initAssetStructureGlobalFilter();
    this.loadAircraftStatusList();
  }

  public onLoad(): void {
    this.loadAsset();
    this.initDisplayWithKardex();
    this.loadWorkPackage();
    this.setDefaultSearchControlList();
    this.setDefaultSearchStockMvtStatusList();
  }

  public onReload(): void {
    this.onBeforeLoad();
    this.onLoad();
  }

  private onBeforeLoadOnce(): void {
    this.setAssetStructureGlobalFilter();
    this.setControlTableColList();
    this.setSearchControlList();
    this.setSearchStockMvtStatusList();
    this.setSummaryTableColList();
  }

  // ****************************************************************************

  public get isTopAssetAircraft(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
    );
  }

  public get isTopAssetEngine(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    );
  }

  public get isTopAssetEquipment(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      !this.isTopAssetAircraft &&
      !this.isTopAssetEngine &&
      !this.isGroundEquipment
    );
  }

  public cancelAllWorkPackageMovement(): void {
    const attributeToRemove = this.getAssetStructureUpdatedAttribute();
    if (attributeToRemove && attributeToRemove.id) {
      this.configurationControlService.removeBidmProjectAttribute(attributeToRemove.id).subscribe(() => {
        this.workPackageAttributeList = (this.workPackageAttributeList as BidmProjectAttributeDTO[]).filter(
          (attribute) => attribute.id !== attributeToRemove.id
        );

        this.workPackageMovementsUpdated = false;
      });
    }
  }

  public confirmAllWorkPackageMovement(): void {
    const input: BidmProjectAttributeDTO = {
      projectId: this.workPackage.projectId,
      attributeName: BidmAttributeConstants.IS_ASSET_STRUCTURE_UPDATED,
      attributeValue: 'true'
    };
    this.configurationControlService.createBidmProjectAttribute(input).subscribe((result) => {
      this.workPackageAttributeList = this.workPackageAttributeList || [];
      this.workPackageAttributeList.push(result);

      this.workPackageMovementsUpdated = true;
    });
  }

  public filterAssetStrucreWithCriteria(): void {
    this.filterAssetStructure();
  }

  public filterAssetStructureWithGlobalFilter(searchTextValue: string): void {
    this.searchAssetStructureGlobalFilterChanged.next(searchTextValue);
  }

  // TODO: replace 'RemoveAssetComponent' by a constant
  public installEquipment(): void {
    const asset = (this.assetStructureSelection as TreeNode).data as ControlConfigurationOutput;
    if (asset.bidoEquipment && asset.bidoEquipment.equipmentCode) {
      this.openInstallEquipmentPage(asset.bidoEquipment.equipmentCode);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
    }
  }

  public openInstallEquipmentPage(equipmentCode: string): void {
    const objectId: AssetInstalledInput = {
      superiorAssetCode: equipmentCode,
      date: new Date()
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      componentId: 'InstallAssetComponent',
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public installEquipmentFromWP(): void {
    this.woPn = undefined;
    this.woSn = undefined;
    this.woAssetDesignation = undefined;
    this.woAssetFunction = undefined;
    this.mvtWay = BidtStockMvtConstants.MVT_WAY_DEBIT;
    this.installRemoveFromWP();
  }

  public removeEquipmentFromWP(): void {
    this.woPn = undefined;
    this.woSn = undefined;
    this.woAssetDesignation = undefined;
    this.woAssetFunction = undefined;
    this.mvtWay = BidtStockMvtConstants.MVT_WAY_CREDIT;
    this.installRemoveFromWP();
  }

  public removeEquipmentFromRegularization(): void {
    if (this.assetStructureSelection && this.assetStructureSelection.data) {
      const data = this.assetStructureSelection.data as ControlConfigurationOutput;
      if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
        this.openRemoveEquipmentPage(data.uniqueBidoEquipmentChild.equipmentCode);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
    }
  }

  public installEquipmentFromRegularization(): void {
    if (this.assetStructureSelection && this.assetStructureSelection.data) {
      const data = this.assetStructureSelection.data as ControlConfigurationOutput;
      if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
        this.openInstallEquipmentPage(data.uniqueBidoEquipmentChild.equipmentCode);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
    }
  }

  public installRemoveFromWP(): void {
    if (this.assetStructureSelection) {
      const data = this.assetStructureSelection.data as ControlConfigurationOutput;
      this.showInstallByWorkPackageDialog = true;
      if (data.uniqueBidoEquipmentChild && this.mvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT) {
        this.woPn = data.uniqueBidoEquipmentChild.pnCode;
        this.woSn = data.uniqueBidoEquipmentChild.sn;
        this.woAssetFunction = data.uniqueBidoEquipmentChild.equipmentFunction;
        this.woAssetDesignation = data.uniqueBidoEquipmentChild.equipmentDesignation;
      }
      this.topAssetDTOId = { equipmentCode: this.asset.equipmentCode };
      if (data.bireItem) {
        this.woItemPk = {
          familyCode: data.bireItem.familyCode,
          chapter: data.bireItem.chapter as string,
          subject: data.bireItem.subject as string,
          variantCode: data.bireItem.variantCode as string,
          section: data.bireItem.section as string,
          sheet: data.bireItem.sheet as string,
          marks: data.bireItem.marks as string,
          structureType: data.bireItem.structureType as string
        };
      } else if (data.functionCode) {
        this.woFunctionCode = data.functionCode;
      }
    }
  }

  public isAssetAircraft(asset: BidoEquipmentDTO): boolean {
    return !!asset.equipmentFunction && asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isAssetEngine(asset: BidoEquipmentDTO): boolean {
    return !!asset.equipmentFunction && asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  public isAssetEquipment(asset: BidoEquipmentDTO): boolean {
    return !this.isAssetAircraft(asset) && !this.isAssetEngine(asset) && !this.isGroundEquipment;
  }

  public isAssetGroundEquipment(asset: BidoEquipmentDTO): boolean {
    return (
      asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
      asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
      asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY
    );
  }

  public isFlAircraft(fl: BidoFlDTO): boolean {
    return !!fl.flFunction && fl.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isFlEngine(fl: BidoFlDTO): boolean {
    return !!fl.flFunction && fl.flFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  public isItemAircraft(item: BireItemDTO): boolean {
    return !!item.itemFamilyCode && item.itemFamilyCode === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
  }

  public isItemEngine(item: BireItemDTO): boolean {
    return !!item.itemFamilyCode && item.itemFamilyCode === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;
  }

  public openAsset(): void {
    const equipment = ((this.assetStructureSelection as TreeNode).data as ControlConfigurationOutput).bidoEquipment;
    this.openSelectedAsset(equipment);
  }

  public getItemKey(item: BireItemDTO): string {
    return BireItemUtils.createItemKey(item);
  }

  public openSelectedAsset(equipment: BidoEquipmentDTO | undefined): void {
    if (equipment && equipment.equipmentCode) {
      if (this.isAssetAircraft(equipment)) {
        this.openAircraft(equipment.equipmentCode);
      } else if (this.isAssetEngine(equipment)) {
        this.openEngine(equipment.equipmentCode);
      } else if (this.isAssetEquipment(equipment)) {
        this.openEquipment(equipment.equipmentCode);
      } else if (this.isAssetGroundEquipment(equipment)) {
        this.openGroundEquipment(equipment.equipmentCode);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenAsset'));
    }
  }

  private openAirworthinessStatus(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.equipmentCode]
    };

    const data: PageComponentData = {
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // TODO: change the way parameters are passed to AssetAtDate
  private openAssetAtDate(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ASSET_AT_DATE_FORM,
      objectId: `structure-----${this.serializationService.serialize({
        equipmentCode: this.equipmentCode,
        function:
          this.asset.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
            ? 'Aircraft'
            : this.asset.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
            ? 'Engine'
            : 'Equipment',
        registration: this.asset.registration,
        snCode: this.asset.sn,
        pnCode: this.asset.pnCode,
        designation: this.asset.equipmentDesignation,
        familyVariant: this.asset.familyVariantCode
      })}`
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetReview(): void {
    const objectId = {
      equipmentCodeList: [this.equipmentCode]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openMaintenancePlanning(): void {
    if (!!this.equipmentCode) {
      const objectId: ScheduleMaintenanceFormComponentInput = {
        equipmentCode: this.equipmentCode
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private openGroundMaintenancePlanning(): void {
    const objectId: ScheduleMaintenanceFormComponentInput = {
      equipmentCode: this.equipmentCode as string
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openFl(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'FunctionalLocationFormComponent',
      objectId: this.serializationService.serialize(
        ((this.assetStructureSelection as TreeNode).data as ControlConfigurationOutput).bidoFl
      ),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // TODO: replace 'RemoveAssetComponent' by a constant
  public removeEquipment(): void {
    const asset = (this.assetStructureSelection as TreeNode).data as ControlConfigurationOutput;
    if (asset.bidoEquipment && asset.bidoEquipment.equipmentCode) {
      this.openRemoveEquipmentPage(asset.bidoEquipment.equipmentCode);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
    }
  }

  public openRemoveEquipmentPage(equipmentCode: string): void {
    if (equipmentCode) {
      const objectId: AssetRemovedInput = {
        assetCode: [equipmentCode],
        date: new Date(),
        superiorAssetCode: equipmentCode
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Read,
        componentId: 'RemoveAssetComponent',
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('erroOnOpenRemoval'));
    }
  }

  public resetAssetStructureCriteria(): void {
    this.setDefaultSearchControlList();
    this.setDefaultSearchStockMvtStatusList();
  }

  public selectAssetStructureNode(): void {
    this.showAirworthinessDocumentSection = false;
    this.showLLPPotentialSection = false;
    if (this.assetStructureSelection) {
      this.setControlTable();
      this.setRemoveItems();
      this.setInstallItems();

      const data = this.assetStructureSelection.data as ControlConfigurationOutput;

      if (this.workPackageCode && data.workOrderId) {
        const input: BidmWorkOrderDTOId = {
          projectId: this.workPackageCode,
          woId: data.workOrderId
        };
        this.configurationControlService.findWorkOrder(input).subscribe((result) => {
          this.currentWorkOrder = result;
          this.currentWorkOrderCode = result.woCode;
          this.currentWorkOrderDescription = result.woDescription;
        });
      }
    }
  }

  private addControlTableRow(
    id: number,
    causeIdList: (string | undefined)[],
    causeList: (string | undefined)[],
    controlList: (string | undefined)[],
    category: string
  ): void {
    const hasRedFlag = controlList
      .filter(ObjectUtils.isDefined)
      .some((control) => control === ControlConfigConstants.ICON_RED);
    const hasYellowFlag = controlList
      .filter(ObjectUtils.isDefined)
      .some((control) => control === ControlConfigConstants.ICON_YELLOW);
    const controlRow: ControlRow = {
      category,
      causeIdList: causeIdList.filter(ObjectUtils.isDefined).join(', '),
      causeList: causeList.filter((elt) => !StringUtils.isNullOrEmpty(elt)) as string[],
      control: hasRedFlag
        ? ControlConfigConstants.ICON_RED
        : hasYellowFlag
        ? ControlConfigConstants.ICON_YELLOW
        : ControlConfigConstants.ICON_GREEN,
      _id: id,
      _expand: false
    };
    this.controlTable = [...this.controlTable, controlRow];
  }

  private calculateCheckGlobalResultForAssetStructureNode(asset: ControlConfigurationOutput): string {
    const checkList = [
      asset.checkCoreResult,
      asset.checkConfigurationResult,
      asset.checkStructureResult,
      asset.checkPotentialResult,
      asset.checkReferentialResult,
      asset.checkMelResult,
      asset.checkLogbookResult,
      asset.checkFlResult
    ].filter((check) => ObjectUtils.isDefined(check));

    return checkList.some((check) => check === ControlConfigConstants.ICON_RED)
      ? ControlConfigConstants.ICON_RED
      : checkList.some((check) => check === ControlConfigConstants.ICON_YELLOW)
      ? ControlConfigConstants.ICON_YELLOW
      : ControlConfigConstants.ICON_GREEN;
  }

  private calculateWorkPackageMovements(assetStructure: TreeNode[]): void {
    assetStructure.forEach((node) => {
      const nodeData = node.data as ControlConfigurationOutput;

      if (nodeData.removedStockMvtData) {
        if (nodeData.removedStockMvtData.bidoNotificationNotificationCode) {
          this.workPackageConfirmedRemovals++;
        }
        this.workPackageRemovals++;
      }
      if (nodeData.installedStockMvtData) {
        if (nodeData.installedStockMvtData.bidoNotificationNotificationCode) {
          this.workPackageConfirmedInstallations++;
        }
        this.workPackageInstallations++;
      }

      if (!ListUtils.isNullOrEmpty(node.children)) {
        this.calculateWorkPackageMovements(node.children as TreeNode[]);
      }
    });
  }

  private createAssetStructureTreeNode(asset: ControlConfigurationOutput): TreeNode {
    asset.checkGlobalResult = this.calculateCheckGlobalResultForAssetStructureNode(asset);
    const node: TreeNode = {
      data: asset,
      expanded: false,
      children: ListUtils.orEmpty(asset.children).map((childAsset) => this.createAssetStructureTreeNode(childAsset))
    };

    return node;
  }

  private filterAssetStructure(searchTextValue?: string): void {
    this.assetStructureSelection = undefined;

    this.assetStructure = _cloneDeep(this.assetStructureSrc);
    this.assetStructure = this.assetStructure.filter((elt) =>
      this.matchAssetStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined)
    );

    this.showFirstAssetStructureNode();
    this.updateSummaryTable();
  }

  private initAssetStructureGlobalFilter(): void {
    this.searchAssetStructureGlobalFilter = '';
  }

  private initSummaryTable(): void {
    this.summaryTable = [
      {
        category: ConfigurationControlComponent.SUMMARY_TABLE_GLOBAL_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ConfigurationControlComponent.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ConfigurationControlComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ConfigurationControlComponent.SUMMARY_TABLE_LLP_POTENTIAL_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      }
    ];
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.equipmentCode
    };
    this.configurationControlService.findBidoEquipment(input).subscribe((asset) => {
      this.asset = asset;

      // Set component context
      this.componentContext = StringUtils.isEmpty(this.componentContext) ? '' : `${this.componentContext} / `;
      if (this.isTopAssetAircraft) {
        this.translateService.get(this.getTranslateKey('aircraft')).subscribe((translation) => {
          const aircraftLabel = translation || 'Aircraft';
          this.componentContext += `${aircraftLabel} ${this.asset.registration}`;
        });
      } else {
        if (!!this.asset.equipmentDesignation) {
          this.componentContext += `${this.asset.equipmentDesignation} / ${this.asset.sn}`;
        } else {
          this.componentContext += `${this.asset.sn}`;
        }
      }

      if (
        asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_GROUND_SUPPORT_EQUIPMENT_KEY ||
        asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY ||
        asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_PILOT_EQUIPMENT_KEY
      ) {
        this.isGroundEquipment = true;
      }

      super.displayComponentContext(this.componentContext, false);

      this.setNavigationLinkList();
    });
  }

  private loadAssetStructure(): void {
    this.assetStructureLoading = true;

    const input: ControlConfigurationInput = {
      checkConfiguration: true,
      checkFl: true,
      checkLogbook: true,
      checkMel: true,
      checkPotential: true,
      checkReferential: true,
      checkStructure: true,
      equipmentCode: this.equipmentCode,
      projectId: this.workPackageCode,
      withAllCounters: true,
      withFunctionalLocations: true,
      withMelFlag: true,
      withItemStructure: this.displayWithKardex
    };
    this.configurationControlService.controlConfiguration(input).subscribe((result) => {
      if (result) {
        this.assetStructureSrc = [this.createAssetStructureTreeNode(result)];

        this.assetStructure = _cloneDeep(this.assetStructureSrc);
        this.showFirstAssetStructureNode();
        this.updateSummaryTable();
        this.updateGlobalStatus();
        this.calculateWorkPackageMovements(this.assetStructureSrc);
      }

      this.assetStructureLoading = false;
    });
  }

  private matchAssetStructureNode(node: TreeNode, searchText: string | undefined): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.matchAssetStructureNode(child, searchText));
    }

    const nodeData = node.data as ControlConfigurationOutput;

    // Asset
    const asset = StringUtils.orEmpty(nodeData.asset).toLowerCase();
    const assetMatch = StringUtils.isNullOrEmpty(searchText) || asset.includes(searchText as string);

    // Control
    let controlMatch = true;
    if (!ListUtils.isNullOrEmpty(this.selectedControlList)) {
      const nodeControl = nodeData.checkGlobalResult;
      controlMatch = ObjectUtils.isDefined(nodeControl) && this.selectedControlList.includes(nodeControl as string);
    }

    // Stock status
    const stockStatusMatch = this.selectedStockMvtStatusList
      .map((status) => {
        if (status === SearchStockMvtStatus.ALL) {
          return true;
        } else if (status === SearchStockMvtStatus.INSTALLATIONS) {
          return ObjectUtils.isDefined(nodeData.installedStockMvtData);
        } else if (status === SearchStockMvtStatus.REMOVALS) {
          return ObjectUtils.isDefined(nodeData.removedStockMvtData);
        } else {
          return true;
        }
      })
      .some((match) => match);

    // Structure
    const name = StringUtils.orEmpty(nodeData.structure).toLowerCase();
    const nameMatch = StringUtils.isNullOrEmpty(searchText) || name.includes(searchText as string);

    return (
      ListUtils.orEmpty(node.children).length > 0 || ((assetMatch || nameMatch) && controlMatch && stockStatusMatch)
    );
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

  private openGroundEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.LOG_TOOL_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setAssetStructureGlobalFilter(): void {
    this.searchAssetStructureGlobalFilterChanged = new Subject<string>();
    this.searchAssetStructureGlobalFilterChanged
      .pipe(
        debounceTime(ConfigurationControlComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.filterAssetStructure(searchTextValue);
      });
  }

  private setControlTable(): void {
    this.controlTable = [];

    const asset = (this.assetStructureSelection as TreeNode).data as ControlConfigurationOutput;
    if (
      asset.checkConfigurationResult ||
      asset.checkCoreResult ||
      asset.checkFlResult ||
      asset.checkMelResult ||
      asset.checkCoreResult ||
      asset.checkStructureResult
    ) {
      this.addControlTableRow(
        ConfigurationControlComponent.CONTROLS_TABLE_CHECK_OTHER_ID,
        [
          asset.checkConfigurationCause,
          asset.checkCoreCause,
          asset.checkFlCause,
          asset.checkMelCause,
          asset.checkReferentialCause,
          asset.checkStructureCause
        ],
        [
          asset.checkConfigurationCauseAlt,
          asset.checkCoreCauseAlt,
          asset.checkFlCauseAlt,
          asset.checkMelCauseAlt,
          asset.checkReferentialCauseAlt,
          asset.checkStructureCauseAlt
        ],
        [
          asset.checkConfigurationResult,
          asset.checkCoreResult,
          asset.checkFlResult,
          asset.checkMelResult,
          asset.checkReferentialResult,
          asset.checkStructureResult
        ],
        ConfigurationControlComponent.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_LABEL
      );
    }
    if (asset.checkLogbookResult) {
      this.addControlTableRow(
        ConfigurationControlComponent.CONTROLS_TABLE_CHECK_LOGBOOK_ID,
        [asset.checkLogbookCause],
        [asset.checkLogbookCauseAlt],
        [asset.checkLogbookResult],
        ConfigurationControlComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_LABEL
      );
    }
    if (asset.checkPotentialResult) {
      this.addControlTableRow(
        ConfigurationControlComponent.CONTROLS_TABLE_CHECK_POTENTIAL_ID,
        [asset.checkPotentialCause],
        [asset.checkPotentialCauseAlt],
        [asset.checkPotentialResult],
        ConfigurationControlComponent.SUMMARY_TABLE_LLP_POTENTIAL_LABEL
      );
    }
  }

  private setControlTableColList(): void {
    this.controlTableColList = [
      { field: 'control', alignment: 'center', width: '12.5%' },
      { field: 'category', alignment: 'left', width: '40%' },
      { field: 'causeIdList', alignment: 'left', width: '47.5%' }
    ];
  }

  private setDefaultSearchControlList(): void {
    this.selectedControlList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  private setDefaultSearchStockMvtStatusList(): void {
    this.selectedStockMvtStatusList = [
      SearchStockMvtStatus.ALL,
      SearchStockMvtStatus.REMOVALS,
      SearchStockMvtStatus.INSTALLATIONS
    ];
  }

  private setSearchControlList(): void {
    const alertNokKey = this.getTranslateKey('nok');
    const alertOkKey = this.getTranslateKey('ok');
    const alertWarningKey = this.getTranslateKey('warning');
    this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe((results) => {
      const alertNokLabel = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel = results ? results[alertOkKey] : 'OK';
      const alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';

      this.searchControlList = [
        {
          label: alertOkLabel,
          value: ControlConfigConstants.ICON_GREEN
        },
        {
          label: alertWarningLabel,
          value: ControlConfigConstants.ICON_YELLOW
        },
        {
          label: alertNokLabel,
          value: ControlConfigConstants.ICON_RED
        }
      ];
    });
  }

  private setSearchStockMvtStatusList(): void {
    const allKey = this.getTranslateKey('all');
    const installationsKey = this.getTranslateKey('installations');
    const removalsKey = this.getTranslateKey('removals');
    this.translateService.get([allKey, installationsKey, removalsKey]).subscribe((results) => {
      const allLabel = results ? results[allKey] : 'All';
      const installationsLabel = results ? results[installationsKey] : 'Installations';
      const removalsLabel = results ? results[removalsKey] : 'Removals';

      this.searchStockMvtStatusList = [
        {
          label: allLabel,
          value: SearchStockMvtStatus.ALL
        },
        {
          label: removalsLabel,
          value: SearchStockMvtStatus.REMOVALS
        },
        {
          label: installationsLabel,
          value: SearchStockMvtStatus.INSTALLATIONS
        }
      ];
    });
  }

  private setSummaryTableColList(): void {
    this.summaryTableColList = [
      { field: 'category', alignment: 'left', width: '47.5%' },
      { field: 'ok', alignment: 'center', width: '17.5%' },
      { field: 'warning', alignment: 'center', width: '17.5%' },
      { field: 'nok', alignment: 'center', width: '17.5%' }
    ];
  }

  private showFirstAssetStructureNode(): void {
    if (!ListUtils.isEmpty(this.assetStructure)) {
      this.assetStructure[0].expanded = true;
      this.assetStructureSelection = this.assetStructure[0];
      this.selectAssetStructureNode();
      this.updateSummaryTable();
    }
  }

  private updateSummaryTable(): void {
    this.initSummaryTable();
    this.assetStructure.forEach((asset) => this.updateSummaryTableWithAssetStructureTreeNode(asset));
    this.updateSummaryTableRowGlobal();
  }

  private updateSummaryTableRow(rowIndex: number, checkResult: string | undefined): void {
    this.summaryTable[rowIndex].nok += checkResult === ControlConfigConstants.ICON_RED ? 1 : 0;
    this.summaryTable[rowIndex].ok += checkResult === ControlConfigConstants.ICON_GREEN ? 1 : 0;
    this.summaryTable[rowIndex].warning += checkResult === ControlConfigConstants.ICON_YELLOW ? 1 : 0;
  }

  private updateSummaryTableRowGlobal(): void {
    const index = ConfigurationControlComponent.SUMMARY_TABLE_GLOBAL_INDEX;

    this.summaryTable[index].nok = this.summaryTable
      .slice(1)
      .map((row) => row.nok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].ok = this.summaryTable
      .slice(1)
      .map((row) => row.ok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].warning = this.summaryTable
      .slice(1)
      .map((row) => row.warning)
      .reduce((a, b) => a + b, 0);
  }

  private updateGlobalStatus(): void {
    const index = ConfigurationControlComponent.SUMMARY_TABLE_GLOBAL_INDEX;

    this.globalStatus =
      this.summaryTable[index].nok > 0
        ? ControlConfigConstants.ICON_RED
        : this.summaryTable[index].warning > 0
        ? ControlConfigConstants.ICON_YELLOW
        : ControlConfigConstants.ICON_GREEN;
  }

  private updateSummaryTableWithAssetStructureTreeNode(node: TreeNode): void {
    const asset = node.data as ControlConfigurationOutput;

    // Applicable configuration compliance
    const applicableConfigurationComplianceIndex =
      ConfigurationControlComponent.SUMMARY_TABLE_APPLICABLE_CONFIGURATION_COMPLIANCE_INDEX;
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkConfigurationResult);
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkCoreResult);
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkFlResult);
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkMelResult);
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkReferentialResult);
    this.updateSummaryTableRow(applicableConfigurationComplianceIndex, asset.checkStructureResult);

    // Airworthiness document compliance
    this.updateSummaryTableRow(
      ConfigurationControlComponent.SUMMARY_TABLE_AIRWORTHINESS_DOCUMENT_COMPLIANCE_INDEX,
      asset.checkLogbookResult
    );

    // LLP potential
    this.updateSummaryTableRow(
      ConfigurationControlComponent.SUMMARY_TABLE_LLP_POTENTIAL_INDEX,
      asset.checkPotentialResult
    );

    // Children
    if (node.children) {
      node.children.forEach((childAsset) => this.updateSummaryTableWithAssetStructureTreeNode(childAsset));
    }
  }

  private initDisplayWithKardex(): void {
    if (!!this.workPackageCode) {
      this.displayWithKardex = false;
      this.loadAssetStructure();
    } else {
      this.propertiesService
        .getConfigurationValue(AWPropertiesConstants.FM_APPLIED_CONF_DISPLAYED_WITH_KARDEX)
        .subscribe((result) => {
          this.displayWithKardex = BooleanUtils.isTrue(result);
          this.loadAssetStructure();
        });
    }
  }

  private loadAircraftStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRCRAFT_STATUS_MAP).subscribe((results) => {
      this.aircraftStatusList = ListUtils.orEmpty(results);
    });
  }

  public searchAsset(): void {
    this.dialogSearchAssetVisible = true;
  }

  private loadWorkPackage(): void {
    if (this.workPackageCode) {
      this.configurationControlService.findBidmProject(this.workPackageCode).subscribe((result) => {
        this.workPackage = result;
        this.workPackageMovementsVisible = true;

        this.loadWorkPackageAttributeList();

        // Set component context
        const componentContext = `WP n°${this.workPackage.projectNumber}`;
        this.componentContext = StringUtils.isEmpty(this.componentContext)
          ? componentContext
          : `${componentContext} / ${this.componentContext}`;

        super.displayComponentContext(this.componentContext, false);
      });
    }
  }

  private loadWorkPackageAttributeList(): void {
    if (this.workPackage.projectId) {
      const input: BidmProjectDTOId = {
        projectId: this.workPackage.projectId
      };
      this.configurationControlService.findBidmProjectAttributesByWorkOrder(input).subscribe((result) => {
        this.workPackageAttributeList = ListUtils.orEmpty(result);

        this.checkIfWorkPackageHasAssetStructureUpdatedAttribute();
      });
    }
  }

  public toggleControlsTableRowDetailsVisibility(row: ControlRow): void {
    row._expand = !row._expand;
  }

  private getAssetStructureUpdatedAttribute(): BidmProjectAttributeDTO | undefined {
    return this.workPackageAttributeList.find((attribute) => {
      return (
        attribute.attributeName === BidmAttributeConstants.IS_ASSET_STRUCTURE_UPDATED &&
        !StringUtils.isNullOrEmpty(attribute.attributeValue) &&
        ((attribute.attributeValue as string).toUpperCase() === 'X' ||
          (attribute.attributeValue as string).toUpperCase() === 'TRUE' ||
          attribute.attributeValue === '1')
      );
    });
  }

  private checkIfWorkPackageHasAssetStructureUpdatedAttribute(): void {
    this.workPackageMovementsUpdated = ObjectUtils.isDefined(this.getAssetStructureUpdatedAttribute());
  }

  // Airworthiness Documents' section

  public openAirworthinessDocumentComplianceTable(): void {
    if (!this.showAirworthinessDocumentSection) {
      this.airworthinessDocumentsTable = [];
      this.showAirworthinessDocumentSection = true;
      this.showLLPPotentialSection = false;

      this.airworthinessDocumentsTableLoading = true;
      const bidoEquipment: BidoEquipmentDTO = !!this.assetStructureSelection
        ? this.assetStructureSelection.data.bidoEquipment
        : undefined;

      if (!!bidoEquipment) {
        this.airworthinessDocumentsTableLoading = true;
        this.configurationControlService.getADCompliance(bidoEquipment).subscribe((results) => {
          results.forEach((res) => {
            res._id = Math.random();
            if (res.control === 'NEGATIVE') {
              res.expanded = false;
            }
          });
          this.airworthinessDocumentsTable = results || [];
          this.airworthinessDocumentsTableLoading = false;
        });
      }
    }
  }

  public openEvolution(row: ADComplianceOutput): void {
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: row.evolutionNumber,
      evolutionRevisionNumber: row.evolutionRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_EVOLUTION_FORM,
      objectId: this.serializationService.serialize(evolutionId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public toggleADTableRowDetailsVisibility(row: ADComplianceOutput): void {
    row.expanded = !row.expanded;
  }

  public getTranslatedText(input: string): string {
    let response = '';
    const key = `${this.getComponentName()}.${input}`;
    this.translateService.get(key).subscribe((value) => {
      response = value as string;
    });

    return response;
  }

  // LLP Potential section

  private setTableCols(): void {
    this.airworthinessDocumentsTableCols = [
      { field: 'control', alignment: 'center', width: '12.5%' },
      { field: 'document', alignment: 'left' },
      { field: 'type', alignment: 'left' },
      { field: 'familyVariant', alignment: 'left' },
      { field: 'compliance', alignment: 'left' }
    ];

    this.llpPotentialTableCols = [
      { field: 'control', alignment: 'center', width: '12.5%' },
      { field: 'counterCode', alignment: 'left' },
      { field: 'cumulatedCounterValue', alignment: 'left' },
      { field: 'remainingValue', alignment: 'left' },
      { field: 'referenceValue', alignment: 'left' }
    ];
  }

  public openLLPPotentialTable(): void {
    if (!this.showLLPPotentialSection) {
      this.llpPotentialTable = [];
      this.showLLPPotentialSection = true;
      this.showAirworthinessDocumentSection = false;

      const equipmentCode: string = !!this.assetStructureSelection
        ? this.assetStructureSelection.data.bidoEquipment.equipmentCode
        : undefined;
      if (!!equipmentCode) {
        this.llpTableLoading = true;
        this.configurationControlService.getLLPPotential(equipmentCode).subscribe((result) => {
          result.forEach((res) => {
            this.llpPotentialTable.push(this.getLLPRow(res));
          });
          this.llpTableLoading = false;
        });
      }
    }
  }

  private getLLPRow(row: FindBidoCounterReferencesByEquipmentCodeOutput): LLPRow {
    const llpRow: LLPRow = {
      control: this.getAlertIcon(row),
      counterCode: row.counterCode,
      cumulatedCounterValue: row.cumulatedCounterValue,
      remainingValue: row.remainingValue,
      referenceValue: row.referenceValue,
      _obj: row
    };

    return llpRow;
  }

  public getAlertIcon(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (
      row &&
      row.aPotentialAlertData &&
      row.aPotentialAlertData.potentialAlertLevel !== null &&
      row.aPotentialAlertData.potentialAlertLevel !== undefined
    ) {
      return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevel);
    }

    return 'nok';
  }

  public getColorByIconCode(iconCode: string): string {
    switch (iconCode) {
      case ControlConfigConstants.ICON_GREEN_LIGHT_CODE:
        return 'ok';
      case ControlConfigConstants.ICON_YELLOW_LIGHT_CODE:
        return 'warning';
      case ControlConfigConstants.ICON_RED_LIGHT_CODE:
        return 'nok';
      case ControlConfigConstants.ICON_NONE_LIGHT_CODE:
        return 'ok';
      case ControlConfigConstants.ICON_GREEN_LED_CODE:
        return 'ok';
      case ControlConfigConstants.ICON_YELLOW_LED_CODE:
        return 'warning';
      case ControlConfigConstants.ICON_RED_LED_CODE:
        return 'nok';
      case ControlConfigConstants.ICON_NONE_LED_CODE:
        return 'ok';
      default:
        return 'nok';
    }
  }

  public openHelpDialog() {
    this.showHelpDialog = true;
  }

  public openFunctionalLocationAssignment(asset: BidoEquipmentDTO): void {
    this.configurationControlService.openFunctionalLocationAssignment(asset);
  }

  public generateFormEASA1(asset: BidoEquipmentDTO): void {
    this.showLoaderGenerateFormEASA1 = true;

    const input: BidmProjectReportDtoId = {
      equipmentCode: asset.equipmentCode || '',
      isSpecific: this.sessionService.isSpecificDassault,
      projectId: this.workPackage.projectId || ''
    };
    this.configurationControlService
      .generateEASACertificate(input)
      .pipe(
        finalize(() => {
          this.showLoaderGenerateFormEASA1 = false;
        })
      )
      .subscribe({
        next: (fileContent) => {
          FileUtils.downloadFile(fileContent.fileContent, fileContent.fileName);
        }
      });
  }

  public generateFormFAA8130(asset: BidoEquipmentDTO): void {
    this.showLoaderGenerateFormFAA8130 = true;

    const input: BidmProjectReportDtoId = {
      equipmentCode: asset.equipmentCode || '',
      isSpecific: this.sessionService.isSpecificDassault,
      projectId: this.workPackage.projectId || ''
    };
    this.configurationControlService
      .generateFAACertificate(input)
      .pipe(
        finalize(() => {
          this.showLoaderGenerateFormFAA8130 = false;
        })
      )
      .subscribe({
        next: (fileContent) => {
          FileUtils.downloadFile(fileContent.fileContent, fileContent.fileName);
        }
      });
  }

  public showInstallations(): void {
    this.assetStructureFilterInstallationVisible = !this.assetStructureFilterInstallationVisible;
    this.assetStructureSelection = undefined;
    this.assetStructure = _cloneDeep(this.assetStructureSrc);

    if (this.assetStructureFilterInstallationVisible) {
      if (this.assetStructureFilterRemovalVisible) {
        this.assetStructure = this.assetStructure.filter((node) =>
          this.matchAssetStructureNodeByInstallationAndRemoval(node)
        );
      } else {
        this.assetStructure = this.assetStructure.filter((node) => this.matchAssetStructureNodeByInstallation(node));
      }

      this.expandAssetStructure(this.assetStructure);
    } else if (this.assetStructureFilterRemovalVisible) {
      this.assetStructure = this.assetStructure.filter((node) => this.matchAssetStructureNodeByRemoval(node));

      this.expandAssetStructure(this.assetStructure);
    }

    if (!this.assetStructureFilterInstallationVisible && !this.assetStructureFilterRemovalVisible) {
      this.showFirstAssetStructureNode();
    }

    this.updateSummaryTable();
  }

  public showRemovals(): void {
    this.assetStructureFilterRemovalVisible = !this.assetStructureFilterRemovalVisible;
    this.assetStructureSelection = undefined;
    this.assetStructure = _cloneDeep(this.assetStructureSrc);

    if (this.assetStructureFilterRemovalVisible) {
      if (this.assetStructureFilterInstallationVisible) {
        this.assetStructure = this.assetStructure.filter((node) =>
          this.matchAssetStructureNodeByInstallationAndRemoval(node)
        );
      } else {
        this.assetStructure = this.assetStructure.filter((node) => this.matchAssetStructureNodeByRemoval(node));
      }

      this.expandAssetStructure(this.assetStructure);
    } else if (this.assetStructureFilterInstallationVisible) {
      this.assetStructure = this.assetStructure.filter((node) => this.matchAssetStructureNodeByInstallation(node));

      this.expandAssetStructure(this.assetStructure);
    }

    if (!this.assetStructureFilterInstallationVisible && !this.assetStructureFilterRemovalVisible) {
      this.showFirstAssetStructureNode();
    }

    this.updateSummaryTable();
  }

  private matchAssetStructureNodeByInstallation(node: TreeNode): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((nodeChild) =>
        this.matchAssetStructureNodeByInstallation(nodeChild)
      );
    }

    const nodeData = node.data as ControlConfigurationOutput;

    return ListUtils.orEmpty(node.children).length > 0 || ObjectUtils.isDefined(nodeData.installedStockMvtData);
  }

  private matchAssetStructureNodeByInstallationAndRemoval(node: TreeNode): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((nodeChild) =>
        this.matchAssetStructureNodeByInstallationAndRemoval(nodeChild)
      );
    }

    const nodeData = node.data as ControlConfigurationOutput;

    return (
      ListUtils.orEmpty(node.children).length > 0 ||
      ObjectUtils.isDefined(nodeData.installedStockMvtData) ||
      ObjectUtils.isDefined(nodeData.removedStockMvtData)
    );
  }

  private matchAssetStructureNodeByRemoval(node: TreeNode): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((nodeChild) =>
        this.matchAssetStructureNodeByRemoval(nodeChild)
      );
    }

    const nodeData = node.data as ControlConfigurationOutput;

    return ListUtils.orEmpty(node.children).length > 0 || ObjectUtils.isDefined(nodeData.removedStockMvtData);
  }

  private expandAssetStructure(nodes: TreeNode[]): void {
    nodes.forEach((node) => {
      node.expanded = true;
      if (!ListUtils.isNullOrEmpty(node.children)) {
        this.expandAssetStructure(node.children as TreeNode[]);
      }
    });
  }

  public onCreateWorkPackage(data: { woManagementInputDTO: WorkOrderManagementInputDTO }): void {
    this.configurationControlService.createWorkPackage(data.woManagementInputDTO).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnWOCreation'));
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnWOCreation'));
      }
    );
  }

  private setRemoveItems(): void {
    const removeByWo = this.getTranslateKey('removeByWo');
    const removeByRegul = this.getTranslateKey('removeByRegul');
    this.translateService.get([removeByWo, removeByRegul]).subscribe({
      next: (results) => {
        this.removeItems = [
          {
            label: results[removeByWo],
            command: () => {
              this.removeEquipmentFromWP();
            }
          },
          {
            label: results[removeByRegul],
            command: () => {
              this.removeEquipmentFromRegularization();
            }
          }
        ];
      }
    });
  }

  private setInstallItems(): void {
    const installByWo = this.getTranslateKey('installByWo');
    const installByRegul = this.getTranslateKey('installByRegul');
    this.translateService.get([installByWo, installByRegul]).subscribe({
      next: (results) => {
        this.installItems = [
          {
            label: results[installByWo],
            command: () => {
              this.installEquipmentFromWP();
            }
          }
        ];
        if (this.assetStructureSelection && this.assetStructureSelection.data) {
          const data = this.assetStructureSelection.data as ControlConfigurationOutput;
          if (data.uniqueBidoEquipmentChild && data.uniqueBidoEquipmentChild.equipmentCode) {
            this.installItems = [
              {
                label: results[installByWo],
                command: () => {
                  this.installEquipmentFromWP();
                }
              },
              {
                label: results[installByRegul],
                command: () => {
                  this.installEquipmentFromRegularization();
                }
              }
            ];
          }
        }
      }
    });
  }
}
