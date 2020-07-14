import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem, SelectItem, TreeNode } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';

import { BrasidasCrmFormService } from '../../../../../brasidas/brasidas-crm.service';
import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { WPType } from '../../../../../shared/components/dialog-work-package/dialog-work-package.component';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../shared/services/date.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { ApplyTaskForFlightInput } from '../../../../../shared/types/api-input-types/airworthiness-management/apply-task-for-flight-input.interface';
import { ValidateActionsOnModificationsOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-modifications-of-flight-input.interface';
import { ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-ome-and-role-equipments-of-flight-input.interface';
import { ValidateActionsOnTasksOfFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/validate-actions-on-tasks-of-flight-input.interface';
import { GetOperationalConfigurationSetupInputDTO } from '../../../../../shared/types/api-input-types/operational-configuration-setup/get-operational-configuration-setup-input-dto.interface';
import { LineMaintenanceModificationDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-modification-dto.interface';
import { LineMaintenanceOperationDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-operation-dto.interface';
import { LineMaintenanceRoleEquipmentOmeDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-role-equipment-ome-dto.interface';
import { LineMaintenanceWorkPackageDTO } from '../../../../../shared/types/api-output-types/fleet-business/line-maintenance-work-package-dto.interface';
import { CountOperationalConfigurationSetupOutputDTO } from '../../../../../shared/types/api-output-types/operational-configuration-setup/count-operational-configuration-setup-output-dto.interface';
import { BidmProjectDTOId } from '../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BireEvolutionDTOId } from '../../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireModificationDTOId } from '../../../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../../../shared/types/api-types/bire-modification-dto.interface';
import { BireSbDTOId } from '../../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../../../shared/types/api-types/bire-sb-dto.interface';
import { BireTaskDTOId } from '../../../../../shared/types/api-types/bire-task-dto-id.interface';
import { AppliedConfigurationManagementInput } from '../../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BireSbUtils } from '../../../../../shared/utils/bire-sb-utils';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../../../../maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';
import { FlightInputData } from '../../types/flight-input-data.interface';

import { EngineOilReplenishmentComponent } from './engine-oil-replenishment/engine-oil-replenishment.component';
import { LineMaintenanceFormService } from './line-maintenance-form.service';
import { OperationalConfigurationSetupService } from './operational-configuration-settling/operational-configuration-setup.service';
import { ReplenishmentsComponent } from './replenishments/replenishments.component';

interface ModificationRow {
  asset: string;
  complianceStatus: string;
  complianceStatusDate: string;
  control: string;
  evolutionNumber: string;
  isDeclared: boolean;
  isEmbodied: boolean;
  isMandatory: boolean;
  isRequested: boolean;
  wpNumber: string;
  relatedEvolution?: BireEvolutionDTO;
  relatedSb?: BireSbDTO;
  relatedModification?: BireModificationDTO;
}

interface RoleEquipmentAndOmeRow {
  control: string;
  fl: string;
  flFunction: string;
  isRequested: boolean;
  relatedEquipment: string;
  suggestedReceipt: string;
  wpNumber: string;
  _obj: LineMaintenanceRoleEquipmentOmeDTO;
}

enum TabCategory {
  Home = 0,
  MaintenanceStatus = 1,
  RoleEquipmentAndOme = 2,
  Replenishments = 3
}

interface TaskRow {
  alert: ControlConfigConstants;
  comment: string;
  dmc: string;
  isDoneByUser: boolean;
  operation: string;
  operationDesignation: string;
  operationFrequency: string;
  operationKind: string;
  operationValidity: string;
  nextTerm: string;
  status: string;
  wpNumber: string;
  _obj: LineMaintenanceOperationDTO;
  _id: string;
  _expand: boolean;
  _lastExecutionDate: Date | undefined;
}

interface WorkPackageRow {
  assetBreakdownCheck: string | undefined;
  assignedTo: string;
  checkResult: string;
  checkResultTooltip: string;
  closedBy: string;
  customer: string;
  dueDate: string;
  endDate: string;
  logbookCheck: string | undefined;
  mroCenter: string;
  name: string;
  number: string;
  startDate: string;
  status: string;
  _id: string;
  _expand: boolean;
}

@Component({
  selector: 'aw-line-maintenance-form',
  styleUrls: ['./line-maintenance-form.component.scss'],
  templateUrl: './line-maintenance-form.component.html'
})
export class LineMaintenanceFormComponent extends FormPageComponent<PageComponentData> implements OnDestroy, OnInit {
  public static readonly AIRCRAFT_ANCHOR_ID: string = 'aircraftAnchor';
  public static readonly CHECKS_SUMMARY_ANCHOR_ID: string = 'checksSummaryAnchor';
  public static readonly DEFECTS_AND_TASKS_CHECK_ANCHOR_ID: string = 'defectsAndTasksCheckAnchor';
  public static readonly ENGINE_OIL_REPLENISHMENT_ANCHOR_ID: string = 'engineOilReplenishmentAnchor';
  public static readonly FLIGHT_ANCHOR_ID: string = 'flightAnchor';
  public static readonly MODIFICATIONS_CHECK_ANCHOR_ID: string = 'modificationsCheckAnchor';
  public static readonly REPLENISHMENTS_ANCHOR_ID: string = 'replenishmentsAnchor';
  public static readonly ROLE_EQUIPMENTS_AND_OME_CHECK_ANCHOR_ID: string = 'roleEquipmentsAndOmeCheckAnchor';
  public static readonly WORK_PACKAGES_CHECK_ANCHOR_ID: string = 'workPackagesCheckAnchor';

  public static readonly SUMMARY_TABLE_DEFECTS_LABEL: string = 'defectsCheck';
  public static readonly SUMMARY_TABLE_GLOBAL_LABEL: string = 'globalCheck';
  public static readonly SUMMARY_TABLE_MODIFICATIONS_LABEL: string = 'modificationsCheck';
  public static readonly SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_LABEL: string = 'roleEquipmentsAndOmeCheck';
  public static readonly SUMMARY_TABLE_TASKS_LABEL: string = 'tasksCheck';
  public static readonly SUMMARY_TABLE_WORK_PACKAGES_LABEL: string = 'workPackagesCheck';

  private static SUMMARY_TABLE_DEFECTS_INDEX: number;
  private static SUMMARY_TABLE_GLOBAL_INDEX: number;
  private static SUMMARY_TABLE_MODIFICATIONS_INDEX: number;
  private static SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_INDEX: number;
  private static SUMMARY_TABLE_TASKS_INDEX: number;
  private static SUMMARY_TABLE_WORK_PACKAGES_INDEX: number;

  private static readonly TOC_ROLE_EQUIPMENTS_OME_INDEX: number = 4;

  @Output() public onValidate: EventEmitter<Event>;

  @ViewChild(EngineOilReplenishmentComponent)
  public engineOilReplenishmentComponent: EngineOilReplenishmentComponent;

  @ViewChild(ReplenishmentsComponent)
  public replenishmentsComponent: ReplenishmentsComponent;

  public readonly component: typeof LineMaintenanceFormComponent;
  public readonly controlConfigConstants: typeof ControlConfigConstants;
  public readonly wpType: typeof WPType;

  public componentContext: string;

  public equipment: BidoEquipmentDTO;
  public equipmentCsn: string;
  public equipmentStatus: string;
  public equipmentTsn: string;
  public labelCsn: string;
  public labelTsn: string;
  public lastExecutionDateOfPreviousFlight: Date | undefined;
  public missionEquipment: BidoMissionEquipmentDTO;
  public missionEquipmentId: BidoMissionEquipmentDTOId;
  public missionEquipmentCustomer: string;
  public missionEquipmentDuration: string;
  public missionEquipmentStartDate: string;
  public missionEquipmentStatus: string;
  public missionEquipmentType: string;
  public modificationTable: ModificationRow[];
  public modificationTableColList: TableColumn[];
  public modificationTableLoading: boolean;
  public modificationTableSelectedList: ModificationRow[];
  public modificationTableWorkPackageCreationVisible: boolean;
  public replenishmentValidationStatus: ControlConfigConstants | undefined;
  public roleEquipmentAndOmeTable: TreeNode[];
  public roleEquipmentAndOmeTableColList: TableColumn[];
  public roleEquipmentAndOmeTableLoading: boolean;
  public roleEquipmentAndOmeTableSelectedList: TreeNode[];
  public roleEquipmentAndOmeTableWorkPackageCreationVisible: boolean;
  public countOperationalConfigurationSetupOutputDTO?: CountOperationalConfigurationSetupOutputDTO;
  public canSetupOperationalConfiguration: boolean;
  public summaryTable: SummaryRow[];
  public summaryTableColList: TableColumn[];
  public summaryTableVisible: boolean;
  public taskTable: TaskRow[];
  public taskTableColList: TableColumn[];
  public taskTableLoading: boolean;
  public taskTableSelectedList: TaskRow[];
  public taskTableWorkPackageCreationVisible: boolean;
  public updateTaskAppliactionVisible: boolean;
  public workPackageList: BidmProjectDTO[];
  public workPackageListToAddVisible: boolean;
  public workPackageStatusList: LabelValue<string>[];
  public workPackageTable: WorkPackageRow[];
  public workPackageTableColList: TableColumn[];
  public workPackageTableLoading: boolean;
  public workPackageTableSelectedList: WorkPackageRow[];
  public wpList: SelectItem[];
  public selectedWpForOme: BidmProjectDTO | undefined;

  private atLeastOneOmeOrREElementSelected: boolean;
  private flightCustomerList: BidoCustomerDTO[];
  private flightStatusList: LabelValue<string>[];
  private flightTypeList: LabelValue<string>[];
  private operationalStatusList: LabelValue<string>[];
  private relatedEquipment: BidoEquipmentDTO | undefined;
  private roleEquipmentAndOmeList: LineMaintenanceRoleEquipmentOmeDTO[];

  public navigationLinkList: MenuItem[];
  public tabIndexValue: number;

  // Table of content ***********************************************************

  @ViewChild(LineMaintenanceFormComponent.AIRCRAFT_ANCHOR_ID)
  public aircraftEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.CHECKS_SUMMARY_ANCHOR_ID)
  public checksSummaryEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.DEFECTS_AND_TASKS_CHECK_ANCHOR_ID)
  public defectsAndTasksCheckEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.ENGINE_OIL_REPLENISHMENT_ANCHOR_ID)
  public engineOilReplenishmentEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.FLIGHT_ANCHOR_ID)
  public flightEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.MODIFICATIONS_CHECK_ANCHOR_ID)
  public modificationsCheckEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.ROLE_EQUIPMENTS_AND_OME_CHECK_ANCHOR_ID)
  public roleEquipmentsAndOmeCheckEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.REPLENISHMENTS_ANCHOR_ID)
  public replenishmentsEltRef: ElementRef;

  @ViewChild(LineMaintenanceFormComponent.WORK_PACKAGES_CHECK_ANCHOR_ID)
  public workPackagesCheckEltRef: ElementRef;

  public toc: PageTocEntry[];

  public showGenerateSpinner: boolean;

  // ****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly brasidasCrmFormService: BrasidasCrmFormService,
    private readonly lineMaintenanceFormService: LineMaintenanceFormService,
    private readonly operationalConfigurationSetupService: OperationalConfigurationSetupService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.onValidate = new EventEmitter<Event>();

    this.component = LineMaintenanceFormComponent;
    this.controlConfigConstants = ControlConfigConstants;
    this.wpType = WPType;

    super.registerPageTocEntryObservable();

    this.init();

    this.loadLabelCsn();
    this.loadLabelTsn();

    this.setModificationTableColList();
    this.setRoleEquipmentAndOmeTableColList();
    this.setSummaryTableColList();
    this.setTaskTableColList();
    this.setWorkPackageTableColList();
    this.setNavigationLinkList();
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_LINE_MAINTENANCE_FORM;
  }

  public ngOnDestroy(): void {
    this.lineMaintenanceFormService.clearLineMaintenanceCache(this.missionEquipmentId).subscribe();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      this.setTableOfContent();
      this.setSummaryTableIndex();
      this.initSummaryTable();

      const componentInputData = this.serializationService.deserialize(this.componentData.objectId) as FlightInputData;
      if (componentInputData.equipmentCode && componentInputData.missionCode && componentInputData.occurrence) {
        this.missionEquipmentId = {
          equipmentCode: componentInputData.equipmentCode,
          missionCode: componentInputData.missionCode,
          occurrence: componentInputData.occurrence
        };

        forkJoin([
          this.loadFlightCustomerList(),
          this.loadFlightStatusList(),
          this.loadFlightTypeList(),
          this.loadOperationalStatusList(),
          this.loadWorkPackageStatusList()
        ]).subscribe(
          ([flightCustomerList, flightStatusList, flightTypeList, operationalStatusList, workPackageStatusList]) => {
            this.flightCustomerList = ListUtils.orEmpty(flightCustomerList);
            this.flightStatusList = ListUtils.orEmpty(flightStatusList);
            this.flightTypeList = ListUtils.orEmpty(flightTypeList);
            this.operationalStatusList = ListUtils.orEmpty(operationalStatusList);
            this.workPackageStatusList = ListUtils.orEmpty(workPackageStatusList);

            this.loadEquipmentAndMissionEquipment();
            this.loadLineMaintenance();
          }
        );
      }
    }
  }

  public generateCrm() {
    if (this.sessionService.isSpecificBRASIDAS) {
      const onSuccess = (result) => {
        if (!!result.fileContent && result.fileName) {
          this.downLoadFiles(result.fileContent, result.fileName);
        }
      };

      const onError = (err) => {
        this.showGenerateSpinner = false;
        this.onValidate.emit();
        if (!!err && !!err.errorDetail) {
          this.messageService.showErrorMessage(err.errorDetail);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGeneratingDoc'));
        }
      };

      this.showGenerateSpinner = true;

      this.brasidasCrmFormService.generateCrm(this.missionEquipmentId).subscribe(onSuccess, onError);
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
    this.showGenerateSpinner = false;
    this.onValidate.emit();
  }

  public addToWorkPackageForModificationsCheck(workPackage: BidmProjectDTO): void {
    if (!!this.relatedEquipment) {
      const input: ValidateActionsOnModificationsOfFlightInput = {
        bidoMissionEquipmentDTOId: this.missionEquipmentId,
        relatedEquipment: this.relatedEquipment,
        relatedProject: workPackage,
        evolutionNumberList: this.modificationTableSelectedList.map((task) => task.evolutionNumber)
      };
      this.lineMaintenanceFormService.validateActionsOnModificationsOfFlight(input).subscribe((_) => {
        // Update selected modifications
        this.loadLineMaintenanceWorkPackageList();

        this.modificationTableSelectedList = [];
      });
    }
  }

  public addToWorkPackageForRoleEquipmentsAndOmeCheck(workPackage: BidmProjectDTO): void {
    if (!!this.relatedEquipment) {
      const input: ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput = {
        bidoMissionEquipmentDTOId: this.missionEquipmentId,
        relatedEquipment: this.relatedEquipment,
        relatedProject: workPackage,
        roleEquipmentAndOmeList: this.roleEquipmentAndOmeList
      };
      this.lineMaintenanceFormService.validateActionsOnOmeAndRoleEquipmentsOfFlight(input).subscribe((_) => {
        // Update selected role equipments and OME
        this.loadLineMaintenanceRoleEquipmentAndOmeList();

        // Update work packages
        this.loadLineMaintenanceWorkPackageList();

        this.roleEquipmentAndOmeTableSelectedList = [];
      });
    }
  }

  public addToWorkPackageForTasksCheck(workPackage: BidmProjectDTO): void {
    if (!!this.relatedEquipment) {
      const input: ValidateActionsOnTasksOfFlightInput = {
        bidoMissionEquipmentDTOId: this.missionEquipmentId,
        relatedEquipment: this.relatedEquipment,
        relatedProject: workPackage,
        operationCodeList: this.taskTableSelectedList.map((task) => task.operation)
      };
      this.lineMaintenanceFormService.validateActionsOnTasksOfFlight(input).subscribe((wp) => {
        // Update selected tasks
        this.loadLineMaintenanceTaskList();

        this.taskTableSelectedList = [];
      });
    }
  }

  public addToWorkPackageForModificationsCheckButtonVisible(): boolean {
    return (
      this.workPackageList.length > 0 &&
      this.modificationTableSelectedList.length > 0 &&
      this.modificationTableSelectedList.every((elt) => elt.wpNumber.length === 0)
    );
  }

  public addToSelectedWorkPackageForRoleEquipmentsAndOmeCheck(row): void {
    if (!!row && !!this.selectedWpForOme && !!this.relatedEquipment) {
      if (!row._obj.currentPnCode) {
        if (!!row._obj.pnCandidateList && row._obj.pnCandidateList.length > 0) {
          row._obj.currentPnCode = row._obj.pnCandidateList[0].pnCode;
        }
      } else {
        row._obj.currentPnCode = row._obj.currentPnCode.pnCode;
      }
      const input: ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput = {
        bidoMissionEquipmentDTOId: this.missionEquipmentId,
        relatedEquipment: this.relatedEquipment,
        relatedProject: this.selectedWpForOme,
        roleEquipmentAndOmeList: JSON.parse(JSON.stringify(this.roleEquipmentAndOmeList)),
        flCode: row._obj.flCode,
        pnCode: row._obj.currentPnCode,
        wpNumber: this.selectedWpForOme ? this.selectedWpForOme.projectNumber : undefined,
        projectId: this.selectedWpForOme ? this.selectedWpForOme.projectId : undefined
      };
      this.prepareDataForOme(input.roleEquipmentAndOmeList);
      this.lineMaintenanceFormService.validateActionsOnOmeAndRoleEquipmentsOfFlight(input).subscribe((_) => {
        this.reload();
      });
    }
  }

  private prepareDataForOme(list: LineMaintenanceRoleEquipmentOmeDTO[]): void {
    list.forEach((element: LineMaintenanceRoleEquipmentOmeDTO) => {
      element.pnCandidateList = [];
      element.currentPnCode = '';
      if (!!element.subFlList) {
        this.prepareDataForOme(element.subFlList);
      }
    });
  }

  public addToWorkPackageForRoleEquipmentsAndOmeCheckButtonVisible(): boolean {
    return (
      this.workPackageList.length > 0 &&
      this.roleEquipmentAndOmeTableSelectedList.length > 0 &&
      this.roleEquipmentAndOmeTableSelectedList.every((elt) => elt.data.wpNumber.length === 0)
    );
  }

  public addToWorkPackageForTasksCheckButtonVisible(): boolean {
    return (
      this.workPackageList.length > 0 &&
      this.taskTableSelectedList.length > 0 &&
      this.taskTableSelectedList.every((elt) => elt.wpNumber.length === 0)
    );
  }

  public createWorkPackageForModificationsCheck(): void {
    this.modificationTableWorkPackageCreationVisible = true;
  }

  public createWorkPackageForModificationsCheckButtonVisible(): boolean {
    return (
      this.modificationTableSelectedList.length > 0 &&
      this.modificationTableSelectedList.every((elt) => elt.wpNumber.length === 0)
    );
  }

  public createWorkPackageForRoleEquipmentsAndOmeCheck(): void {
    this.roleEquipmentAndOmeTableWorkPackageCreationVisible = true;
  }

  public createWorkPackageForRoleEquipmentsAndOmeCheckButtonVisible(): boolean {
    return true;
  }

  public createWorkPackageForTasksCheck(): void {
    this.taskTableWorkPackageCreationVisible = true;
  }

  public createWorkPackageForTasksCheckButtonVisible(): boolean {
    return (
      this.taskTableSelectedList.length > 0 && this.taskTableSelectedList.every((elt) => elt.wpNumber.length === 0)
    );
  }

  public isOmeRoleEquipmentSuggestedPnReadOnly(element: RoleEquipmentAndOmeRow): boolean {
    return !StringUtils.isNullOrEmpty(element.wpNumber) || ListUtils.isNullOrEmpty(element._obj.pnCandidateList);
  }

  public isUpdateTaskApplicationButtonVisible(): boolean {
    return this.taskTableSelectedList.every(
      (row) => !StringUtils.isNullOrEmpty(row._obj.taskCode) && !row.isDoneByUser
    );
  }

  public modificationRowSelectVisible(row: ModificationRow): boolean {
    return !row.isDeclared && !row.isEmbodied && row.wpNumber.length === 0;
  }

  public modificationTableSelectAllVisible(): boolean {
    return (
      this.modificationTable.length === 0 ||
      this.modificationTable.some((row) => this.modificationRowSelectVisible(row))
    );
  }

  public onCreateWorkPackageForModificationsCheck(data: { workPackage: BidmProjectDTO; workcenter: string }): void {
    if (!!this.relatedEquipment) {
      data.workPackage.assetCode = this.relatedEquipment.equipmentCode;

      this.lineMaintenanceFormService.createBidmProject(data.workPackage).subscribe({
        next: () => {
          const input: ValidateActionsOnModificationsOfFlightInput = {
            bidoMissionEquipmentDTOId: this.missionEquipmentId,
            relatedEquipment: this.relatedEquipment as BidoEquipmentDTO,
            relatedProject: data.workPackage,
            evolutionNumberList: this.modificationTableSelectedList.map((task) => task.evolutionNumber)
          };
          this.lineMaintenanceFormService.validateActionsOnModificationsOfFlight(input).subscribe((_) => {
            this.reload();
          });
        }
      });
    }
  }

  public onCreateWorkPackageForRoleEquipmentsAndOmeCheck(data: {
    workPackage: BidmProjectDTO;
    workcenter: string;
  }): void {
    if (!!this.relatedEquipment) {
      data.workPackage.assetCode = this.relatedEquipment.equipmentCode;
      data.workPackage.projectType = AWPropertiesConstants.WP_TYPE_GONOGO;
      data.workPackage.statusState = AWPropertiesConstants.AIRM_PROJECT_STATUS_RELEASED;

      this.lineMaintenanceFormService.createBidmProject(data.workPackage).subscribe({
        next: () => {
          this.atLeastOneOmeOrREElementSelected = false;
          let everySelectedElementOK = this.roleEquipmentAndOmeTable.length > 0;

          for (const element of this.roleEquipmentAndOmeTable) {
            if (!this.checkOmeRoleEquipmentElementForUpdate(element.data._obj)) {
              everySelectedElementOK = false;
            }
          }

          if (this.atLeastOneOmeOrREElementSelected && everySelectedElementOK) {
            this.addToWorkPackageForRoleEquipmentsAndOmeCheck(data.workPackage);
          }

          this.reload();
        }
      });
    }
  }

  public onCreateWorkPackageForTasksCheck(data: { workPackage: BidmProjectDTO; workcenter: string }): void {
    if (!!this.relatedEquipment) {
      data.workPackage.assetCode = this.relatedEquipment.equipmentCode;

      this.lineMaintenanceFormService.createBidmProject(data.workPackage).subscribe({
        next: () => {
          const input: ValidateActionsOnTasksOfFlightInput = {
            bidoMissionEquipmentDTOId: this.missionEquipmentId,
            relatedEquipment: this.relatedEquipment as BidoEquipmentDTO,
            relatedProject: data.workPackage,
            operationCodeList: this.taskTableSelectedList.map((task) => task.operation)
          };
          this.lineMaintenanceFormService.validateActionsOnTasksOfFlight(input).subscribe((_) => {
            this.reload();
          });
        }
      });
    }
  }

  public onSelectOmeRoleEquipmentRow(node: TreeNode): void {
    node.data.isSelected = true;
  }

  public onUnselectOmeRoleEquipmentRow(node: TreeNode): void {
    node.data.isSelected = false;
  }

  public onUpdateTaskApplication(data: { comment: string; date: Date }): void {
    this.taskTableSelectedList.forEach((selection) => {
      const input: ApplyTaskForFlightInput = {
        taskId: {
          taskCode: selection._obj.taskCode as string,
          taskVersion: selection._obj.taskVersion as string
        },
        chronoNumber: this.missionEquipment.missionInstanceCode as string,
        comment: data.comment,
        equipmentCode: this.equipment.equipmentCode as string,
        dateTime: data.date
      };
      this.lineMaintenanceFormService.applyTaskForFlight(input).subscribe(() => {
        const selectedRow = this.taskTable.find((row) => row._id === selection._id);
        if (selectedRow) {
          selectedRow.comment = data.comment;
          selectedRow.isDoneByUser = true;
        }
      });
    });

    this.taskTableSelectedList = [];
  }

  public openAsset(): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode: this.equipment.equipmentCode
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

  public openEquipment(objectId: string | undefined): void {
    // TODO
  }

  public openFunctionalLocation(row: RoleEquipmentAndOmeRow): void {
    if (!!row._obj) {
      const objectId: BidoFlDTO = {
        flCode: row._obj.flCode
      };
      const openMode = ComponentOpenMode.Read;
      if (row._obj.flIsOpeConf) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.ENG_OPERATIONAL_CONFIGURATION_FORM,
          objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
          openMode
        };
        const labelKey = 'transaction.OperationalConfigurationFormComponent';
        this.tabService.open(this.tabService.create(data, labelKey, true));
      } else {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: 'FunctionalLocationFormComponent',
          objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
          openMode
        };
        const labelKey = 'transaction.FunctionalLocationFormComponent';
        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public openModification(object: ModificationRow): void {
    if (!!object) {
      if (!!object.relatedEvolution) {
        if (object.relatedEvolution.evolutionNumber && object.relatedEvolution.evolutionRevisionNumber) {
          const bireEvolutionId: BireEvolutionDTOId = {
            evolutionNumber: object.relatedEvolution.evolutionNumber,
            evolutionRevisionNumber: object.relatedEvolution.evolutionRevisionNumber
          };
          const labelKey = 'transaction.EvolutionFormComponent';
          const data: PageComponentData = {
            id: this.tabService.generateId(),
            componentId: ComponentConstants.ENG_EVOLUTION_FORM,
            objectId: this.serializationService.serialize(bireEvolutionId),
            openMode: ComponentOpenMode.Read
          };
          this.tabService.open(this.tabService.create(data, labelKey, true));
        }
      } else if (!!object.relatedSb) {
        if (object.relatedSb.sbNumber && object.relatedSb.sbRevisionNumber) {
          const bireSbId: BireSbDTOId = {
            sbNumber: object.relatedSb.sbNumber,
            sbRevisionNumber: object.relatedSb.sbRevisionNumber
          };
          if (BireSbUtils.isAD(object.relatedSb)) {
            const labelKey = 'transaction.AirworthinessDirectiveFormComponent';
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM,
              objectId: this.serializationService.serialize(bireSbId),
              openMode: ComponentOpenMode.Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          } else {
            const labelKey = 'transaction.SbadFormComponent';
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.ENG_SBAD_FORM,
              objectId: this.serializationService.serialize(bireSbId),
              openMode: ComponentOpenMode.Read
            };
            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        }
      } else if (!!object.relatedModification) {
        const bireModificationDTO: BireModificationDTO = object.relatedModification;
        const labelKey = 'transaction.ModificationFormComponent';
        const bireModificationDTOId: BireModificationDTOId = {
          modificationNumber: bireModificationDTO.modificationNumber,
          modificationRevisionNumber: bireModificationDTO.modificationRevisionNumber,
          modificationType: bireModificationDTO.modificationType,
          familyCode: bireModificationDTO.familyCode,
          structureType: bireModificationDTO.structureType
        };
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.ENG_MODIFICATION_FORM,
          objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
          openMode: ComponentOpenMode.Read
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public openOperationRow(row: TaskRow): void {
    if (!StringUtils.isNullOrEmpty(row._obj.taskCode) && !StringUtils.isNullOrEmpty(row._obj.taskVersion)) {
      const taskId: BireTaskDTOId = {
        taskCode: row._obj.taskCode as string,
        taskVersion: row._obj.taskVersion as string
      };
      if (row._obj.taskKind === AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_TASK_KEY) {
        this.openTask(taskId);
      } else {
        this.openVisit(taskId);
      }
    } else if (!StringUtils.isNullOrEmpty(row._obj.notificationCode)) {
      this.openDefect(row._obj.notificationCode as string);
    }
  }

  public openWorkPackage(wp: WorkPackageRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize({ wpId: wp._id })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public reload(): void {
    this.lineMaintenanceFormService.clearLineMaintenanceCache(this.missionEquipmentId).subscribe((_) => {
      this.atLeastOneOmeOrREElementSelected = false;
      this.equipment = {};
      this.equipmentCsn = '';
      this.equipmentStatus = '';
      this.equipmentTsn = '';
      this.missionEquipment = {};
      this.missionEquipmentCustomer = '';
      this.missionEquipmentDuration = '';
      this.missionEquipmentStartDate = '';
      this.missionEquipmentStatus = '';
      this.missionEquipmentType = '';
      this.modificationTable = [];
      this.modificationTableLoading = false;
      this.modificationTableSelectedList = [];
      this.modificationTableWorkPackageCreationVisible = false;
      this.relatedEquipment = undefined;
      this.roleEquipmentAndOmeList = [];
      this.roleEquipmentAndOmeTable = [];
      this.roleEquipmentAndOmeTableLoading = false;
      this.roleEquipmentAndOmeTableSelectedList = [];
      this.roleEquipmentAndOmeTableWorkPackageCreationVisible = false;
      this.taskTable = [];
      this.taskTableLoading = false;
      this.taskTableSelectedList = [];
      this.taskTableWorkPackageCreationVisible = false;
      this.workPackageList = [];
      this.workPackageListToAddVisible = false;
      this.workPackageTable = [];
      this.workPackageTableLoading = false;
      this.workPackageTableSelectedList = [];

      this.initSummaryTable();

      this.loadEquipmentAndMissionEquipment();
      this.loadLineMaintenance();

      this.engineOilReplenishmentComponent.reload();
      this.replenishmentsComponent.reload();
    });
  }

  public removeWorkPackage(): void {
    const partialKey =
      this.workPackageTableSelectedList.length === 1
        ? 'confirmRemoveElementFromWorkPackage'
        : 'confirmRemoveElementsFromWorkPackage';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialKey),
      accept: () => {
        this.workPackageTableSelectedList.forEach((workPackageSelected) => {
          const input: BidmProjectDTOId = {
            projectId: workPackageSelected._id
          };
          this.lineMaintenanceFormService.removeBidmProject(input).subscribe(() => {
            this.workPackageTable = this.workPackageTable.filter(
              (workPackage) => workPackage._id !== workPackageSelected._id
            );

            this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveFromWP'));
          });
        });
      }
    });
  }

  public roleEquipmentAndOmeRowSelectVisible(row: TreeNode): boolean {
    const rowData = row.data as RoleEquipmentAndOmeRow;

    if (!rowData) {
      return false;
    } else {
      return rowData._obj.correctiveActionCode === ControlConfigConstants.OME_CHECK_CORRECTIVE_ACTION_SUGGESTED;
    }
  }

  public roleEquipmentAndOmeTableSelectAllVisible(): boolean {
    return (
      this.roleEquipmentAndOmeTable.length === 0 ||
      this.roleEquipmentAndOmeTable.some((row) => this.roleEquipmentAndOmeRowSelectVisible(row))
    );
  }

  public taskRowSelectVisible(row: TaskRow): boolean {
    return (
      !row._obj.isFromPreviousFlight &&
      row.wpNumber.length === 0 &&
      StringUtils.isNullOrEmpty(row._obj.lastExecutionUser)
    );
  }

  public taskTableSelectAllVisible(): boolean {
    return this.taskTable.length === 0 || this.taskTable.some((row) => this.taskRowSelectVisible(row));
  }

  public toggleTaskTableRowDetailsVisibility(row: TaskRow): void {
    row._expand = !row._expand;
  }

  public toggleWorkPackageTableRowDetailsVisibility(row: WorkPackageRow): void {
    row._expand = !row._expand;
  }

  public updateAssetBreakdown(row: WorkPackageRow): void {
    this.lineMaintenanceFormService.findBidmProject(row._id).subscribe({
      next: (workPackage) => {
        const objectId: AppliedConfigurationManagementInput = {
          equipmentCodeList: StringUtils.isNullOrEmpty(workPackage.assetCode) ? [] : [workPackage.assetCode as string],
          workPackage: workPackage.projectId
        };

        const data: PageComponentData = {
          id: this.tabService.generateId(),
          openMode: ComponentOpenMode.Read,
          componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
          objectId: this.serializationService.serialize(objectId)
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    });
  }

  public updateLogbook(row: WorkPackageRow): void {
    this.lineMaintenanceFormService.findBidmProject(row._id).subscribe({
      next: (workPackage) => {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.MAI_UPDATE_LOGBOOK_FORM,
          openMode: ComponentOpenMode.Write,
          objectId: this.serializationService.serialize({
            wpId: row._id,
            assetCode: workPackage.assetCode
          })
        };
        const labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    });
  }

  public updateTaskApplication(): void {
    this.updateTaskAppliactionVisible = true;
  }

  private checkOmeRoleEquipmentElementForUpdate(element: LineMaintenanceRoleEquipmentOmeDTO): boolean {
    if (element.isSelected) {
      this.atLeastOneOmeOrREElementSelected = true;

      if (element.correctiveActionCode === ControlConfigConstants.OME_CHECK_EQUIPMENT_MISSING) {
        if (!ObjectUtils.isDefined(element.pnCandidateList) || StringUtils.isNullOrEmpty(element.currentPnCode)) {
          return false;
        }
      }
    }

    if (!ListUtils.isNullOrEmpty(element.subFlList)) {
      for (const childElement of element.subFlList as LineMaintenanceRoleEquipmentOmeDTO[]) {
        if (!this.checkOmeRoleEquipmentElementForUpdate(childElement)) {
          return false;
        }
      }
    }

    return true;
  }

  public openFlight(missionEquipment: BidoMissionEquipmentDTO): void {
    const missionEquipmentId: FlightInputData = {
      equipmentCode: missionEquipment.equipmentCode,
      missionCode: missionEquipment.missionCode,
      occurrence: missionEquipment.occurrence,
      chronoNumber: missionEquipment.missionInstanceCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      objectId: this.serializationService.serialize(missionEquipmentId),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private createBidmProject(workPackage: LineMaintenanceWorkPackageDTO): BidmProjectDTO {
    const bidmProject: BidmProjectDTO = {
      projectId: workPackage.id,
      projectNumber: workPackage.number,
      projectName: workPackage.name,
      projectStartDate: workPackage.startDate,
      projectEndDate: workPackage.endDate,
      projectDueDate: workPackage.dueDate,
      bidoCustomerCode: workPackage.customer,
      bireRepairCenterCode: workPackage.mroCenter,
      statusState: workPackage.status
    };

    return bidmProject;
  }

  private createModificationRow(modification: LineMaintenanceModificationDTO): ModificationRow {
    const modificationRow: ModificationRow = {
      asset: StringUtils.orEmpty(modification.asset),
      complianceStatus: StringUtils.orEmpty(modification.complianceStatus),
      complianceStatusDate: StringUtils.orEmpty(modification.complianceStatusDate),
      control: StringUtils.orEmpty(modification.control),
      evolutionNumber: StringUtils.orEmpty(modification.evolutionNumber),
      isDeclared: ObjectUtils.isDefined(modification.isDeclared) ? (modification.isDeclared as boolean) : false,
      isEmbodied: ObjectUtils.isDefined(modification.isEmbodied) ? (modification.isEmbodied as boolean) : false,
      isMandatory: ObjectUtils.isDefined(modification.isMandatory) ? (modification.isMandatory as boolean) : false,
      isRequested: ObjectUtils.isDefined(modification.isRequested) ? (modification.isRequested as boolean) : false,
      wpNumber: this.formatWorkPackageNumber(modification.wpNumber),
      relatedEvolution: modification.relatedEvolution,
      relatedSb: modification.relatedSb,
      relatedModification: modification.relatedModification
    };

    return modificationRow;
  }

  private createRoleEquipmentAndOmeTreeNode(baseElement: LineMaintenanceRoleEquipmentOmeDTO): TreeNode {
    const node: TreeNode = {
      data: this.createRoleEquipmentAndOmeRow(baseElement),
      expanded: true,
      leaf: !baseElement.subFlList || baseElement.subFlList.length === 0,
      children: ListUtils.orEmpty(baseElement.subFlList).map((childElement) =>
        this.createRoleEquipmentAndOmeTreeNode(childElement)
      )
    };
    node.expanded = node.children && node.children.filter((x) => !x.leaf).length > 0;

    return node;
  }

  private createRoleEquipmentAndOmeRow(
    roleEquipmentAndOme: LineMaintenanceRoleEquipmentOmeDTO
  ): RoleEquipmentAndOmeRow {
    const isRequested = ObjectUtils.isDefined(roleEquipmentAndOme.isRequested)
      ? (roleEquipmentAndOme.isRequested as boolean)
      : false;

    const roleEquipmentAndOmeRow: RoleEquipmentAndOmeRow = {
      isRequested,
      control: StringUtils.orEmpty(roleEquipmentAndOme.controlResult),
      fl: StringUtils.orEmpty(roleEquipmentAndOme.flText),
      flFunction: StringUtils.orEmpty(roleEquipmentAndOme.flFunction),
      relatedEquipment: StringUtils.orEmpty(roleEquipmentAndOme.relatedEquipmentText),
      suggestedReceipt: StringUtils.orEmpty(roleEquipmentAndOme.suggestedReceiptText),
      wpNumber: roleEquipmentAndOme.wpNumber ? this.formatWorkPackageNumber(roleEquipmentAndOme.wpNumber) : '',
      _obj: roleEquipmentAndOme
    };

    return roleEquipmentAndOmeRow;
  }

  public clickWorkPackageLink(row: TaskRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize({ wpId: row._obj.projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private createTaskRow(task: LineMaintenanceOperationDTO, id: number): TaskRow {
    const taskRow: TaskRow = {
      alert: StringUtils.orEmpty(task.controlResult),
      comment: StringUtils.orEmpty(task.comment),
      dmc: StringUtils.orEmpty(task.dmc),
      isDoneByUser: ObjectUtils.isDefined(task.isDoneByUser) && (task.isDoneByUser as boolean),
      operation: StringUtils.orEmpty(task.operation),
      operationDesignation: StringUtils.orEmpty(task.operationDesignation),
      operationFrequency: StringUtils.orEmpty(task.operationFrequency),
      operationKind: StringUtils.orEmpty(task.operationKind),
      operationValidity: this.dateService.dateToString(task.operationValidity),
      nextTerm: StringUtils.orEmpty(task.nextTerm),
      status: StringUtils.orEmpty(task.operationStatus),
      wpNumber: !!task.wpNumber ? this.formatWorkPackageNumber(task.wpNumber) : '',
      _obj: task,
      _id: id.toString(),
      _expand: false,
      _lastExecutionDate: task.lastExecutionDate
    };

    return taskRow;
  }

  private createWorkPackageRow(workPackage: LineMaintenanceWorkPackageDTO): WorkPackageRow {
    const workPackageRow: WorkPackageRow = {
      assetBreakdownCheck: workPackage.assetBreakdownCheck,
      assignedTo: StringUtils.orEmpty(workPackage.assignedTo),
      checkResult: StringUtils.orEmpty(workPackage.checkResult),
      checkResultTooltip: StringUtils.orEmpty(workPackage.checkResultTooltip),
      closedBy: StringUtils.orEmpty(workPackage.closedBy),
      customer: StringUtils.orEmpty(workPackage.customer),
      dueDate: this.dateService.dateToString(workPackage.dueDate),
      endDate: this.dateService.dateToString(workPackage.endDate),
      logbookCheck: workPackage.logbookCheck,
      mroCenter: StringUtils.orEmpty(workPackage.mroCenter),
      name: StringUtils.orEmpty(workPackage.name),
      number: NumberUtils.toString(workPackage.number),
      startDate: this.dateService.dateToString(workPackage.startDate),
      status: StringUtils.orEmpty(workPackage.status),
      _id: workPackage.id,
      _expand: false
    };

    return workPackageRow;
  }

  private formatWorkPackageNumber(wpNumber: number | undefined): string {
    return ObjectUtils.isDefined(wpNumber) && !StringUtils.isNullOrEmpty((wpNumber as number).toString())
      ? `WP n°${wpNumber}`
      : '';
  }

  private init(): void {
    this.componentContext = '';

    this.atLeastOneOmeOrREElementSelected = false;
    this.equipment = {};
    this.equipmentCsn = '';
    this.equipmentStatus = '';
    this.equipmentTsn = '';
    this.flightCustomerList = [];
    this.flightStatusList = [];
    this.flightTypeList = [];
    this.labelCsn = '';
    this.labelTsn = '';
    this.lastExecutionDateOfPreviousFlight = undefined;
    this.missionEquipment = {};
    this.missionEquipmentCustomer = '';
    this.missionEquipmentDuration = '';
    this.missionEquipmentStartDate = '';
    this.missionEquipmentStatus = '';
    this.missionEquipmentType = '';
    this.modificationTable = [];
    this.modificationTableLoading = false;
    this.modificationTableSelectedList = [];
    this.modificationTableWorkPackageCreationVisible = false;
    this.operationalStatusList = [];
    this.relatedEquipment = undefined;
    this.roleEquipmentAndOmeList = [];
    this.roleEquipmentAndOmeTable = [];
    this.roleEquipmentAndOmeTableLoading = false;
    this.roleEquipmentAndOmeTableSelectedList = [];
    this.roleEquipmentAndOmeTableWorkPackageCreationVisible = false;
    this.taskTable = [];
    this.taskTableLoading = false;
    this.taskTableSelectedList = [];
    this.taskTableWorkPackageCreationVisible = false;
    this.workPackageList = [];
    this.workPackageListToAddVisible = false;
    this.workPackageStatusList = [];
    this.workPackageTable = [];
    this.workPackageTableLoading = false;
    this.workPackageTableSelectedList = [];
    this.canSetupOperationalConfiguration = false;
  }

  private initSummaryTable(): void {
    this.summaryTableVisible = false;
    this.summaryTable = [
      {
        category: LineMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: LineMaintenanceFormComponent.SUMMARY_TABLE_TASKS_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: LineMaintenanceFormComponent.SUMMARY_TABLE_DEFECTS_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: LineMaintenanceFormComponent.SUMMARY_TABLE_MODIFICATIONS_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: LineMaintenanceFormComponent.SUMMARY_TABLE_WORK_PACKAGES_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      }
    ];

    const roleEquipmentsAndOmeCheckSummaryRow = {
      category: LineMaintenanceFormComponent.SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_LABEL,
      nok: 0,
      ok: 0,
      warning: 0
    };
    this.summaryTable.splice(
      LineMaintenanceFormComponent.SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_INDEX,
      0,
      roleEquipmentsAndOmeCheckSummaryRow
    );
  }

  private loadEquipmentAndMissionEquipment(): void {
    const equipmentInput: BidoEquipmentDTOId = {
      equipmentCode: this.missionEquipmentId.equipmentCode
    };
    const missionEquipmentInput: BidoMissionEquipmentDTOId = {
      equipmentCode: this.missionEquipmentId.equipmentCode,
      missionCode: this.missionEquipmentId.missionCode,
      occurrence: this.missionEquipmentId.occurrence
    };
    const observables: Observable<BidoEquipmentDTO | BidoMissionEquipmentDTOId>[] = [
      this.lineMaintenanceFormService.getEquipment(equipmentInput),
      this.lineMaintenanceFormService.getBidoMissionEquipment(missionEquipmentInput)
    ];
    forkJoin(observables).subscribe(([equipment, missionEquipment]) => {
      this.equipment = equipment;
      this.missionEquipment = missionEquipment;
      const flightCustomer = this.flightCustomerList.find(
        (elt) => elt.customerCode === this.missionEquipment.customerCode
      );
      const flightStatus = this.flightStatusList.find((elt) => elt.value === this.missionEquipment.statusState);
      const flightType = this.flightTypeList.find((elt) => elt.value === this.missionEquipment.flightType);
      const operationalStatus = this.operationalStatusList.find(
        (elt) => elt.value === this.equipment.operationalStatus
      );
      this.equipmentStatus = operationalStatus ? operationalStatus.label : '';
      this.missionEquipmentCustomer = flightCustomer ? StringUtils.orEmpty(flightCustomer.customerName) : '';
      this.missionEquipmentDuration = StringUtils.isNullOrEmpty(this.missionEquipment.missionDuration)
        ? ''
        : NumberUtils.roundNumber(Number(this.missionEquipment.missionDuration), 0).toString();
      this.missionEquipmentStartDate = this.dateService.timestampToString(this.missionEquipment.startDate);
      this.missionEquipmentStatus = flightStatus ? flightStatus.label : '';
      this.missionEquipmentType = flightType ? flightType.label : '';
      this.computeCanSetupOperationalConfiguration();
      this.setComponentContext();
    });
  }

  private loadFlightCustomerList(): Observable<BidoCustomerDTO[]> {
    const input: BidoCustomerDTO = {
      customerType: AWPropertiesConstants.CUSTOMER_TYPE_CUS_KEY
    };

    return this.lineMaintenanceFormService.findAllBidoCustomerBySearchCriteria(input);
  }

  private loadFlightStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_STATUS_MAP);
  }

  private loadFlightTypeList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP);
  }

  private loadLabelCsn(): void {
    this.lineMaintenanceFormService.getStandardCycleCounterLabel().subscribe((result) => {
      this.labelCsn = StringUtils.orEmpty(result);
    });
  }

  private loadLabelTsn(): void {
    this.lineMaintenanceFormService.getStandardTimeCounterLabel().subscribe((result) => {
      this.labelTsn = StringUtils.orEmpty(result);
    });
  }

  private loadLineMaintenance(): void {
    this.modificationTableLoading = true;
    this.taskTableLoading = true;
    this.workPackageTableLoading = true;
    this.summaryTableVisible = true;
    this.roleEquipmentAndOmeTableLoading = true;

    if (!!this.componentData.objectId) {
      this.lineMaintenanceFormService.initializeLineMaintenance(this.missionEquipmentId).subscribe((_) => {
        this.lineMaintenanceFormService.loadLineMaintenance(this.missionEquipmentId).subscribe((lineMaintenance) => {
          this.equipmentCsn = lineMaintenance.assetCSN;
          this.equipmentTsn = lineMaintenance.assetTSN;
          this.relatedEquipment = lineMaintenance.equipmentDTO;
        });

        this.loadLineMaintenanceModificationList();
        this.loadLineMaintenanceTaskList();
        this.loadLineMaintenanceWorkPackageList();
        this.loadLineMaintenanceRoleEquipmentAndOmeList();
        this.countOperationalConfigurationSetup();
      });
    }
  }

  private loadLineMaintenanceModificationList(): void {
    this.lineMaintenanceFormService
      .loadLineMaintenanceModificationList(this.missionEquipmentId)
      .subscribe((lineMaintenanceModificationDTOList) => {
        this.modificationTable = ListUtils.orEmpty(lineMaintenanceModificationDTOList).map((modification) =>
          this.createModificationRow(modification)
        );

        this.updateSummaryTableModificationList();
        this.updateSummaryTable();

        this.modificationTableLoading = false;
      });
  }

  private loadLineMaintenanceRoleEquipmentAndOmeList(): void {
    this.lineMaintenanceFormService
      .loadLineMaintenanceRoleEquipmentOmeList(this.missionEquipmentId)
      .subscribe((lineMaintenanceRoleEquipmentAndOmeDTOList) => {
        this.roleEquipmentAndOmeList = ListUtils.orEmpty(lineMaintenanceRoleEquipmentAndOmeDTOList).filter((elt) =>
          ObjectUtils.isDefined(elt)
        );
        this.roleEquipmentAndOmeTable = this.roleEquipmentAndOmeList.map((roleEquipmentAndOme) =>
          this.createRoleEquipmentAndOmeTreeNode(roleEquipmentAndOme)
        );

        this.updateSummaryTableRoleEquipmentAndOmeList();
        this.updateSummaryTable();

        this.roleEquipmentAndOmeTableLoading = false;
      });
  }

  private loadLineMaintenanceTaskList(): void {
    this.lineMaintenanceFormService
      .loadLineMaintenanceOperationList(this.missionEquipmentId)
      .subscribe((lineMaintenanceOperationDTOList) => {
        this.taskTable = ListUtils.orEmpty(lineMaintenanceOperationDTOList).map((task, i) =>
          this.createTaskRow(task, i)
        );

        this.setLastExecutionDateOfPreviousFlight();
        this.updateSummaryTableDefectList();
        this.updateSummaryTableTaskList();
        this.updateSummaryTable();

        this.taskTableLoading = false;
      });
  }

  private loadLineMaintenanceWorkPackageList(): void {
    this.lineMaintenanceFormService
      .loadLineMaintenanceWorkPackageList(this.missionEquipmentId)
      .subscribe((lineMaintenanceWorkPackageDTOList) => {
        const list = ListUtils.orEmpty(lineMaintenanceWorkPackageDTOList);
        this.workPackageList = list.map((workPackage) => this.createBidmProject(workPackage));
        this.workPackageTable = list.map((workPackage) => this.createWorkPackageRow(workPackage));

        this.updateSummaryTableWorkPackageList();
        this.updateSummaryTable();

        this.workPackageTableLoading = false;
        this.wpList = [];
        this.selectedWpForOme = undefined;
        list.forEach((elem: LineMaintenanceWorkPackageDTO) => {
          this.wpList.push({
            label: this.buildWpNameForRoleEquipmentAndOme(elem),
            value: this.createBidmProject(elem)
          });
        });
        if (list.length > 0) {
          this.selectedWpForOme = this.wpList[0].value;
        }
      });
  }

  private buildWpNameForRoleEquipmentAndOme(wp: LineMaintenanceWorkPackageDTO): string {
    let toReturn = `WP n° ${wp.number} `;
    if (!!wp.status) {
      toReturn += '(' + wp.status;
      toReturn += !!wp.startDate ? `, ${this.dateService.dateWithHourToStringWithoutHour(wp.startDate)})` : `)`;
    }

    return toReturn;
  }

  private loadOperationalStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
  }

  private loadWorkPackageStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP);
  }

  private openDefect(notificationCode: string): void {
    const defectId: BidoNotificationDTOId = {
      notificationCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_DEFECT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(defectId)
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openTask(taskId: BireTaskDTOId): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_TASK_FORM,
      objectId: this.serializationService.serialize(taskId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openVisit(taskId: BireTaskDTOId): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_VISIT_FORM,
      objectId: this.serializationService.serialize(taskId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private resetSummaryTableRow(index: number): void {
    this.summaryTable[index].nok = 0;
    this.summaryTable[index].ok = 0;
    this.summaryTable[index].warning = 0;
  }

  private setComponentContext(): void {
    const aircraftKey = this.getTranslateKey('aircraft');
    const flightKey = this.getTranslateKey('flight');
    this.translateService.get([aircraftKey, flightKey]).subscribe(([aircraftLabel, flightLabel]) => {
      const equipmentRegistration = StringUtils.orEmpty(this.equipment.registration);
      const missionEquipmentCode = StringUtils.orEmpty(this.missionEquipment.missionInstanceCode);
      this.componentContext =
        ((flightLabel as string) || 'Flight') +
        ' ' +
        missionEquipmentCode +
        ' / ' +
        ((aircraftLabel as string) || 'Aircraft') +
        ' ' +
        equipmentRegistration;

      this.displayComponentContext(missionEquipmentCode + ' / ' + equipmentRegistration, false);
    });
  }

  private setLastExecutionDateOfPreviousFlight(): void {
    this.lastExecutionDateOfPreviousFlight = undefined;
    this.taskTable.forEach((row) => {
      if (ObjectUtils.isDefined(row._lastExecutionDate)) {
        if (
          !ObjectUtils.isDefined(this.lastExecutionDateOfPreviousFlight) ||
          moment(row._lastExecutionDate).isAfter(moment(this.lastExecutionDateOfPreviousFlight))
        ) {
          this.lastExecutionDateOfPreviousFlight = row._lastExecutionDate;
        }
      }
    });
  }

  private setTableOfContent(): void {
    const aircraftKey = this.getTranslateKey('aircraft');
    const checksSummaryKey = this.getTranslateKey('checksSummary');
    const defectsAndTasksCheckKey = this.getTranslateKey('defectsAndTasksCheck');
    const engineOilReplenishmentKey = this.getTranslateKey('engineOilReplenishment');
    const flightKey = this.getTranslateKey('flight');
    const modificationsCheckKey = this.getTranslateKey('modificationsCheck');
    const replenishmentsKey = this.getTranslateKey('replenishments');
    const roleEquipmentsAndOmeCheckKey = this.getTranslateKey('roleEquipmentsAndOmeCheck');
    const workPackagesCheckKey = this.getTranslateKey('workPackagesCheck');
    this.translateService
      .get([
        aircraftKey,
        checksSummaryKey,
        defectsAndTasksCheckKey,
        engineOilReplenishmentKey,
        flightKey,
        modificationsCheckKey,
        replenishmentsKey,
        roleEquipmentsAndOmeCheckKey,
        workPackagesCheckKey
      ])
      .subscribe((results: string[]) => {
        const aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
        const checksSummaryLabel = !!results ? results[checksSummaryKey] : 'Summary';
        const defectsAndTasksCheckLabel = !!results ? results[defectsAndTasksCheckKey] : 'Defects & Tasks';
        const engineOilReplenishmentLabel = !!results ? results[engineOilReplenishmentKey] : 'Engine Oil Replenishment';
        const flightLabel = !!results ? results[flightKey] : 'Flight';
        const modificationsCheckLabel = !!results ? results[modificationsCheckKey] : 'Modifications';
        const replenishmentsLabel = !!results ? results[replenishmentsKey] : 'Replenishments';
        const workPackagesCheckLabel = !!results ? results[workPackagesCheckKey] : 'Work Packages';

        this.toc = [
          {
            id: 'flightAnchor',
            anchor: this.flightEltRef,
            label: flightLabel
          },
          {
            id: 'aircraftAnchor',
            anchor: this.aircraftEltRef,
            label: aircraftLabel
          },
          {
            id: 'checksSummaryAnchor',
            anchor: this.checksSummaryEltRef,
            label: checksSummaryLabel
          },
          {
            id: 'defectsAndTasksCheckAnchor',
            anchor: this.defectsAndTasksCheckEltRef,
            label: defectsAndTasksCheckLabel
          },
          {
            id: 'modificationsCheckAnchor',
            anchor: this.modificationsCheckEltRef,
            label: modificationsCheckLabel
          },
          {
            id: 'workPackagesCheckAnchor',
            anchor: this.workPackagesCheckEltRef,
            label: workPackagesCheckLabel
          },
          {
            id: 'replenishmentsAnchor',
            anchor: this.replenishmentsEltRef,
            label: replenishmentsLabel
          },
          {
            id: 'engineOilReplenishmentAnchor',
            anchor: this.engineOilReplenishmentEltRef,
            label: engineOilReplenishmentLabel
          }
        ];

        super.selectPageTocEntry(this.component.FLIGHT_ANCHOR_ID);

        const roleEquipmentsAndOmeCheckLabel = !!results
          ? results[roleEquipmentsAndOmeCheckKey]
          : 'Role Equipments & OME';
        const roleEquipmentsAndOmeCheckTocEntry = {
          id: 'roleEquipmentsAndOmeCheckAnchor',
          anchor: this.roleEquipmentsAndOmeCheckEltRef,
          label: roleEquipmentsAndOmeCheckLabel
        };
        this.toc.splice(
          LineMaintenanceFormComponent.TOC_ROLE_EQUIPMENTS_OME_INDEX,
          0,
          roleEquipmentsAndOmeCheckTocEntry
        );
      });
  }

  private setModificationTableColList(): void {
    this.modificationTableColList = [
      { field: 'evolutionNumber', alignment: 'left', width: '9%' },
      { field: 'asset', alignment: 'left', width: '21.5%' },
      { field: 'complianceStatus', alignment: 'left', width: '12%' },
      { field: 'complianceStatusDate', alignment: 'left', width: '13%' },
      { field: 'isDeclared', alignment: 'center', width: '7%' },
      { field: 'isEmbodied', alignment: 'center', width: '7%' },
      { field: 'isRequested', alignment: 'center', width: '7%' },
      { field: 'isMandatory', alignment: 'center', width: '7%' },
      { field: 'control', alignment: 'center', width: '7.5%' },
      { field: 'wpNumber', alignment: 'left', width: '9%' }
    ];
  }

  private setRoleEquipmentAndOmeTableColList(): void {
    this.roleEquipmentAndOmeTableColList = [
      { field: 'fl', alignment: 'left', width: '10%' },
      { field: 'flFunction', alignment: 'center', width: '10%' },
      { field: 'relatedEquipment', alignment: 'center', width: '22.5%' },
      { field: 'isRequested', alignment: 'center', width: '10%' },
      { field: 'control', alignment: 'left', width: '7.5%' },
      { field: 'suggestedReceipt', alignment: 'center', width: '5%' },
      { field: 'pnCode', alignment: 'center', width: '25%' },
      { field: 'wpNumber', alignment: 'center', width: '10%' }
    ];
  }

  private setSummaryTableColList(): void {
    this.summaryTableColList = [
      { field: 'category', alignment: 'left', width: '40%' },
      { field: 'ok', alignment: 'center', width: '20%' },
      { field: 'warning', alignment: 'center', width: '20%' },
      { field: 'nok', alignment: 'center', width: '20%' }
    ];
  }

  private setSummaryTableIndex(): void {
    const defectsIndex = 2;
    const globalIndex = 0;
    const modificationsIndex = 4;
    const roleEquipmentsOmeIndex = 3;
    const tasksIndex = 1;
    const workPackagesIndex = 5;
    LineMaintenanceFormComponent.SUMMARY_TABLE_DEFECTS_INDEX = defectsIndex;
    LineMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_INDEX = globalIndex;
    LineMaintenanceFormComponent.SUMMARY_TABLE_MODIFICATIONS_INDEX = modificationsIndex;
    LineMaintenanceFormComponent.SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_INDEX = roleEquipmentsOmeIndex;
    LineMaintenanceFormComponent.SUMMARY_TABLE_TASKS_INDEX = tasksIndex;
    LineMaintenanceFormComponent.SUMMARY_TABLE_WORK_PACKAGES_INDEX = workPackagesIndex;
  }

  private setTaskTableColList(): void {
    this.taskTableColList = [
      { field: 'operation', alignment: 'left', width: '21%' },
      { field: 'operationDesignation', alignment: 'left', width: '31.5%' },
      { field: 'alert', alignment: 'center', width: '7.5%' },
      { field: 'status', alignment: 'left', width: '12.5%' },
      { field: 'nextTerm', alignment: 'left', width: '12.5%' },
      { field: 'wpNumber', alignment: 'left', width: '9%' },
      { field: 'isDoneByUser', alignment: 'center', width: '6%' }
    ];
  }

  private setWorkPackageTableColList(): void {
    this.workPackageTableColList = [
      { field: 'number', alignment: 'left', width: '10%' },
      { field: 'name', alignment: 'left', width: '30%' },
      { field: 'startDate', alignment: 'left', width: '10%' },
      { field: 'endDate', alignment: 'left', width: '10%' },
      { field: 'status', alignment: 'left', width: '10%' },
      { field: 'checkResult', alignment: 'center', width: '10%' },
      { field: 'assetBreakdownCheck', alignment: 'center', width: '10%' },
      { field: 'logbookCheck', alignment: 'center', width: '10%' }
    ];
  }

  private updateSummaryTable(): void {
    this.summaryTable = [...this.summaryTable];
  }

  private updateSummaryTableDefectList(): void {
    const index = LineMaintenanceFormComponent.SUMMARY_TABLE_DEFECTS_INDEX;
    const defectList = this.taskTable.filter((task) => StringUtils.isNullOrEmpty(task.operationFrequency));

    // Reset old values
    this.resetSummaryTableRow(index);

    // Fill with new values
    this.summaryTable[index].nok = defectList.filter(
      (defect) => defect.alert === ControlConfigConstants.ICON_RED
    ).length;
    this.summaryTable[index].ok = defectList.filter(
      (defect) => defect.alert === ControlConfigConstants.ICON_GREEN
    ).length;
    this.summaryTable[index].warning = defectList.filter(
      (defect) => defect.alert === ControlConfigConstants.ICON_YELLOW
    ).length;

    // Update global row
    this.updateSummaryTableGlobal();
  }

  private updateSummaryTableModificationList(): void {
    const index = LineMaintenanceFormComponent.SUMMARY_TABLE_MODIFICATIONS_INDEX;

    // Reset old values
    this.resetSummaryTableRow(index);

    // Fill with new values
    this.summaryTable[index].nok = this.modificationTable.filter(
      (wp) => wp.control === ControlConfigConstants.ICON_RED
    ).length;
    this.summaryTable[index].ok = this.modificationTable.filter(
      (wp) => wp.control === ControlConfigConstants.ICON_GREEN
    ).length;
    this.summaryTable[index].warning = this.modificationTable.filter(
      (wp) => wp.control === ControlConfigConstants.ICON_YELLOW
    ).length;

    // Update global row
    this.updateSummaryTableGlobal();
  }

  private updateSummaryTableGlobal(): void {
    const index = LineMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_INDEX;

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

  private updateSummaryTableRoleEquipmentAndOmeList(): void {
    // TODO
  }

  private updateSummaryTableTaskList(): void {
    const index = LineMaintenanceFormComponent.SUMMARY_TABLE_TASKS_INDEX;
    const taskList = this.taskTable.filter((task) => !StringUtils.isNullOrEmpty(task.operationFrequency));

    // Reset old values
    this.resetSummaryTableRow(index);

    // Fill with new values
    this.summaryTable[index].nok = taskList.filter((defect) => defect.alert === ControlConfigConstants.ICON_RED).length;
    this.summaryTable[index].ok = taskList.filter(
      (defect) => defect.alert === ControlConfigConstants.ICON_GREEN
    ).length;
    this.summaryTable[index].warning = taskList.filter(
      (defect) => defect.alert === ControlConfigConstants.ICON_YELLOW
    ).length;

    // Update global row
    this.updateSummaryTableGlobal();
  }

  private updateSummaryTableWorkPackageList(): void {
    const index = LineMaintenanceFormComponent.SUMMARY_TABLE_WORK_PACKAGES_INDEX;

    // Reset old values
    this.resetSummaryTableRow(index);

    // Fill with new values
    this.summaryTable[index].nok = this.workPackageTable.filter(
      (wp) => wp.checkResult === ControlConfigConstants.ICON_RED
    ).length;
    this.summaryTable[index].ok = this.workPackageTable.filter(
      (wp) => wp.checkResult === ControlConfigConstants.ICON_GREEN
    ).length;
    this.summaryTable[index].warning = this.workPackageTable.filter(
      (wp) => wp.checkResult === ControlConfigConstants.ICON_YELLOW
    ).length;

    // Update global row
    this.updateSummaryTableGlobal();
  }

  private setNavigationLinkList(): void {
    const airworthinessControlKey = this.getTranslateKey('airworthinessStatus');
    const appliedConfigurationControlKey = this.getTranslateKey('appliedConfigurationControl');
    const assetMaintenancePlanKey = this.getTranslateKey('assetMaintenancePlan');
    const assetReviewKey = this.getTranslateKey('assetReview');
    this.translateService
      .get([airworthinessControlKey, appliedConfigurationControlKey, assetMaintenancePlanKey, assetReviewKey])
      .subscribe((results) => {
        const airworthinessControlLabel = results ? results[airworthinessControlKey] : 'Airworthiness Status';
        const appliedConfigurationControlLabel = results
          ? results[appliedConfigurationControlKey]
          : 'Applied Configuration Control';
        const assetMaintenancePlanLabel = results ? results[assetMaintenancePlanKey] : 'Asset Maintenance Plan';
        const assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';

        this.navigationLinkList = [
          {
            label: airworthinessControlLabel,
            command: () => {
              this.openAirworthinessControl();
            }
          },
          {
            label: appliedConfigurationControlLabel,
            command: () => {
              this.openAppliedConfigurationControl();
            }
          },
          {
            label: assetMaintenancePlanLabel,
            command: () => {
              this.openAssetMaintenancePlan();
            }
          },
          {
            label: assetReviewLabel,
            command: () => {
              this.openAssetReview();
            }
          }
        ];
      });
  }

  private openAirworthinessControl(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.missionEquipmentId.equipmentCode as string]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAppliedConfigurationControl(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.missionEquipmentId.equipmentCode as string]
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetMaintenancePlan(): void {
    const objectId: BidoEquipmentDTOId = {
      equipmentCode: this.missionEquipmentId.equipmentCode
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: 'AssetMaintenancePlanComponent', // TODO
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetReview(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.missionEquipmentId.equipmentCode as string]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public initAndOpenOperationalConfigurationSettling(objectId: string | undefined, openMode: ComponentOpenMode): void {
    this.operationalConfigurationSetupService
      .initOperationalConfigurationSetup(this.missionEquipmentId)
      .subscribe((bidmProjectDTOId) => {
        const getOperationConfigurationSetup: GetOperationalConfigurationSetupInputDTO = {
          bidmProjectDTOId,
          opConfCode: this.missionEquipment.requestedOpeConfigCode || ''
        };
        this.openOperationalConfigurationSettling(getOperationConfigurationSetup, ComponentOpenMode.Write);
      });
  }

  public openOperationalConfigurationSettling(
    objectId: GetOperationalConfigurationSetupInputDTO,
    openMode: ComponentOpenMode
  ): void {
    const labelKey = 'transaction.' + ComponentConstants.FLI_OPERATIONAL_CONFIGURATION_SETTLING;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_OPERATIONAL_CONFIGURATION_SETTLING,
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private countOperationalConfigurationSetup(): void {
    this.operationalConfigurationSetupService
      .countOperationalConfigurationSetup(this.missionEquipmentId)
      .subscribe((result) => {
        this.countOperationalConfigurationSetupOutputDTO = result;
        this.computeCanSetupOperationalConfiguration();
      });
  }

  public computeCanSetupOperationalConfiguration(): void {
    this.canSetupOperationalConfiguration =
      !StringUtils.isNullOrEmpty(this.missionEquipment.requestedOpeConfigCode) &&
      !!this.countOperationalConfigurationSetupOutputDTO &&
      (!!this.countOperationalConfigurationSetupOutputDTO.nbRequiredInstalls ||
        !!this.countOperationalConfigurationSetupOutputDTO.nbRequiredRemovals);
  }

  public goToRespectivePanel(panelName: string): void {
    if (
      panelName === LineMaintenanceFormComponent.SUMMARY_TABLE_TASKS_LABEL ||
      panelName === LineMaintenanceFormComponent.SUMMARY_TABLE_DEFECTS_LABEL ||
      panelName === LineMaintenanceFormComponent.SUMMARY_TABLE_MODIFICATIONS_LABEL ||
      panelName === LineMaintenanceFormComponent.SUMMARY_TABLE_WORK_PACKAGES_LABEL
    ) {
      this.tabIndexValue = TabCategory.MaintenanceStatus;
    } else if (panelName === LineMaintenanceFormComponent.SUMMARY_TABLE_ROLE_EQUIPMENTS_OME_LABEL) {
      this.tabIndexValue = TabCategory.RoleEquipmentAndOme;
    }
  }
}
