import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isEqual as _isEqual } from 'lodash-es';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { GenericPropertyConstants } from '../../../../../..//shared/constants/generic-property-constants';
import { PropertiesService } from '../../../../../..//shared/services/properties.service';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { AssetWorkOrderOriginInput } from '../../../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { FindRelatedAssetsInput } from '../../../../../../shared/types/api-input-types/task-management/find-related-assets.interface';
import { UsersForWorkOrderInput } from '../../../../../../shared/types/api-input-types/user-profile-management/users-for-work-order.interface';
import { CalculateWorkOrderImput } from '../../../../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { CreateBidmWorkOrderInput } from '../../../../../../shared/types/api-input-types/work-order/create-bidm-work-order-input';
import { ProcReqItemAndQtyIndicatorsDTO } from '../../../../../../shared/types/api-output-types/product-structure-management/proc-req-item-and-qty-indicators-dto';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmOperationDTO } from '../../../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmProjectDTO } from '../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoUserDTO } from '../../../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtSiteDTO } from '../../../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireEvolutionDTO } from '../../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireOperationDTO } from '../../../../../../shared/types/api-types/bire-operation-dto.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTOId } from '../../../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../../../shared/types/api-types/bire-task-dto.interface';
import { DeferredDefectEventDTO } from '../../../../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { WoProcurementRequestInputDTO } from '../../../../../../shared/types/api-types/wo-procurement-request-input-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { EmployeeFormService } from '../../../../../human-resources/employee-form/employee-form.service';
import { LogisticsService } from '../../../../../logistics/logistics.service';
import { ProcurementRequestsTableService } from '../../../../procurement-request/procurement-requests-table.service';
import { WorkOrderFormService } from '../../../../work-order/form/work-order-form.service';
import { WorkOrderRow, WorkPackageFormService } from '../../work-package-form.service';

import { DialogWorkOrderEditService } from './dialog-work-order-edition.service';

interface OperationRow {
  code?: string;
  version?: string;
  rangeCode?: string;
  qualification?: string;
  designation?: string;
  bidmOperation: BidmOperationDTO;
}

export interface WoProcurementRequestInputRow {
  procurementRequestId?: number;
  id?: number;
  procurementRequest?: string;
  procurementRequestDescription?: string;
  recepient?: string;
  recepientDesc?: string;
  materials?: string;
  materialsDesc?: string;
  requestedQuantity?: number;
  status?: string;
  statusDesc?: Date;
  expectedOn?: Date;
  criticality?: string;
  unit?: string;
  units?: LabelValue<string>[];
  potentialUnit?: string;
  requestedPotential?: number;
  calendarPotential?: Date;
}

@Component({
  selector: 'aw-dialog-work-order-edition',
  styleUrls: ['./dialog-work-order-edition.component.scss'],
  templateUrl: './dialog-work-order-edition.component.html'
})
export class DialogWorkOrderEditComponent extends DialogComponent implements OnInit {
  @Input()
  public get workPackage(): BidmProjectDTO {
    return this._workPackage;
  }

  public set workPackage(workPackage: BidmProjectDTO) {
    this._workPackage = workPackage;
    this.equipmentCode = this.workPackage.assetCode;

    this.dialogWorkOrderEditService.loadWarehouseList(workPackage.bireRepairCenterCode).subscribe((result) => {
      this.warehouseList = result.map((warehouse) => {
        return {
          label: warehouse.label,
          value: Number(warehouse.value)
        };
      });
    });

    this.logisticsService.findAllBireSite().subscribe((sites) => {
      const selectedSites = sites.filter((site) => site.siteCode === workPackage.bireRepairCenterCode);
      this.bidtSiteDTO = selectedSites && selectedSites.length === 1 ? selectedSites[0] : undefined;
      if (this.bidtSiteDTO && this.bidtSiteDTO.siteId) {
        this.logisticsService.getWarehousesBySiteId(this.bidtSiteDTO.siteId).subscribe((warehouses) => {
          this.bidtWarehouseDTOs = warehouses;
        });
      }
    });
  }

  @Input()
  public get isFromMaintenancePlanning(): boolean {
    return this._isFromMaintenancePlanning;
  }

  public set isFromMaintenancePlanning(isFromMaintenancePlanning: boolean) {
    this._isFromMaintenancePlanning = isFromMaintenancePlanning;
  }

  public awPropertiesConstants: typeof AWPropertiesConstants;

  @Input()
  public get workOrderSelected(): BidmWorkOrderDTOId {
    return this._bidmWorkOrderDTOId;
  }

  public set workOrderSelected(bidmWorkOrderDTOId: BidmWorkOrderDTOId) {
    this._bidmWorkOrderDTOId = bidmWorkOrderDTOId;
  }

  @Input()
  public get addWorkOrder(): BidmWorkOrderDTOId {
    return this._addBidmWorkOrderDTOId;
  }

  public set addWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId) {
    this._addBidmWorkOrderDTOId = bidmWorkOrderDTOId;
  }

  @Input()
  public get workOrders(): WorkOrderRow[] {
    return this._workOrders;
  }

  public set workOrders(workOrders: WorkOrderRow[]) {
    this._workOrders = workOrders;
    this.topWoList = workOrders.map((wo) => {
      return { label: wo.code, value: wo.woId };
    });
  }

  @Input()
  public familyCode: string;
  @Input()
  public variantCode: string;

  @Output()
  public onValidated: EventEmitter<{ isCreated: boolean }>;

  private _bidmWorkOrderDTOId: BidmWorkOrderDTOId;
  private _addBidmWorkOrderDTOId: BidmWorkOrderDTOId;
  private _workPackage: BidmProjectDTO;
  private _workOrders: WorkOrderRow[];
  public _isFromMaintenancePlanning: boolean = false;

  public isUpdateMode: boolean;
  public isAddMode: boolean;
  public titleModeEdition: string;
  public workOrder: BidmWorkOrderDTO = {};
  public task: BireTaskDTO = {};
  public evolution: BireEvolutionDTO;
  public relatedItem: string | undefined;
  public relatedAsset: string | undefined;
  public topWo: string;
  public eventCode: string;
  public equipmentCode: string | undefined;
  public showQuickSearchBusinessPartnerPopup: boolean = false;
  public warrantyProviderName: string | undefined;

  public warehouseList: SelectItem[];
  public typeList: SelectItem[];
  public userList: SelectItem[];
  public employeeQualification: string = '';
  public relatedItemList: SelectItem[];
  public relatedAssetList: SelectItem[];
  public topWoList: SelectItem[];

  public opTable: OperationRow[] = [];
  public opTableCols: TableColumn[];
  public procurementRequestTableCols: TableColumn[];
  public selectedOperations: OperationRow[] = [];
  public selectedProcurementRequestRow: WoProcurementRequestInputRow;
  public isTableLoading: boolean;

  public showTaskSection: boolean;
  public showDefectSection: boolean;
  public showEvolutionSection: boolean;
  public showOperationSection: boolean;
  public showRelatedFields: boolean;
  public showSaveSpinner: boolean = false;
  public displayTaskDialog: boolean;
  public displayDefectDialog: boolean;
  public displayEvolDialog: boolean;
  public displayOperationDialog: boolean;

  // Procurement request
  public procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[];
  public procurementRequestRows: WoProcurementRequestInputRow[];
  public procurementRequestStatusList: LabelValue<string>[];
  public procurementRequestTypes: LabelValue<string>[];
  public procurementRequestCriticalityList: LabelValue<string>[];
  public searchPnDialogVisible: boolean;
  public bidtSiteDTO: BidtSiteDTO | undefined;
  public bidtWarehouseDTOs: BidtWarehouseDTO[];

  public taskCode: string;

  private oldWorkOrder: BidmWorkOrderDTO | undefined;

  public constructor(
    public sessionService: SessionService,
    private readonly logisticsService: LogisticsService,
    private readonly messageService: MessageService,
    private readonly wpFormService: WorkPackageFormService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService,
    private readonly employeeFormService: EmployeeFormService,
    private readonly workOrderFormService: WorkOrderFormService,
    private readonly procurementRequestsTableService: ProcurementRequestsTableService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'DialogWorkOrderEditComponent');
    this.init();
    this.initDropDowns();
    this.initOpTableCols();
    this.initProcurementRequestTableCols();
  }

  public initDropDowns(): void {
    // Load Status List
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe((res) => {
      this.procurementRequestStatusList = res;
    });

    this.procurementRequestTypes = [];
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe((res) => {
      this.procurementRequestTypes = res;
    });

    this.procurementRequestCriticalityList = [
      {
        label: this.translateService.instant(this.getTranslateKey('immediate')),
        value: AWPropertiesConstants.LOGISTICAL_CRITICALITY_IMMEDIATE
      },
      {
        label: this.translateService.instant(this.getTranslateKey('urgent')),
        value: AWPropertiesConstants.LOGISTICAL_CRITICALITY_URGENT
      },
      {
        label: this.translateService.instant(this.getTranslateKey('routine')),
        value: AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE
      }
    ];
  }

  public ngOnInit(): void {
    this.isUpdateMode = this._bidmWorkOrderDTOId !== undefined && this._bidmWorkOrderDTOId.woId.length > 0;

    if (this.isUpdateMode) {
      this.dialogWorkOrderEditService.findBidmWorkOrder(this._bidmWorkOrderDTOId).subscribe((wo) => {
        this.oldWorkOrder = wo;
        this.workOrder = wo.bidmWorkOrder;

        if (this.workOrder.bidWoId) {
          this.topWo = this.workOrder.bidWoId;
        }
        if (this.workOrder.warrantyProvider) {
          this.dialogWorkOrderEditService
            .findBidoCustomer({ customerCode: this.workOrder.warrantyProvider })
            .subscribe((customer) => (this.warrantyProviderName = customer.customerName));
        }

        this.dialogWorkOrderEditService
          .findBidmOperationsByWorkOrder(this._bidmWorkOrderDTOId)
          .subscribe((operationList) => {
            const calculateWorkOrderImput: CalculateWorkOrderImput = {
              workOrderData: this.workOrder,
              fromLineMaintenance: false
            };
            this.dialogWorkOrderEditService
              .calculateWorkOrderStatus(calculateWorkOrderImput)
              .subscribe((calculateWorkOrderOutput) => {
                if (
                  this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK &&
                  calculateWorkOrderOutput.originText
                ) {
                  const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
                    woType: this.workOrder.woType,
                    woSource: this.workOrder.woSource,
                    evolutionType: calculateWorkOrderOutput.evolutionType
                  };
                  this.dialogWorkOrderEditService
                    .findWorkOrderOriginDetails(assetWorkOrderOriginInput)
                    .subscribe((assetOutput) => {
                      if (!!assetOutput.bireTaskDTOId) {
                        // open task form
                        const bireTaskDTO: BireTaskDTOId = assetOutput.bireTaskDTOId;
                        this.getTask(bireTaskDTO);
                      }
                    });
                } else if (
                  this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK &&
                  operationList.length > 0 &&
                  operationList[0].bireTaskCode &&
                  operationList[0].bireTaskVersion
                ) {
                  // Load task
                  this.workOrderFormService
                    .findBireTask({
                      taskCode: operationList[0].bireTaskCode,
                      taskVersion: operationList[0].bireTaskVersion
                    })
                    .subscribe((linkedTask) => {
                      this.task = linkedTask;
                      this.onSelectedTask(this.task);
                      this.fillRelatedAssetsList();
                    });
                } else if (this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT) {
                  if (this.workOrder.woSource) {
                    this.eventCode = this.workOrder.woSource.split('#')[0];
                  }
                  this.fillRelatedAssetsList();
                } else if (this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION) {
                  if (this.workOrder.woSource) {
                    const woSource = this.workOrder.woSource.split('#');
                    this.evolution = {
                      evolutionNumber: woSource[1],
                      evolutionRevisionNumber: woSource[2],
                      evolutionType: woSource[0]
                    };
                    this.onSelectedEvol(this.evolution);
                    this.fillRelatedAssetsList();
                  }
                }
              });
            const operationRows: OperationRow[] = operationList.map((bidmOperation) => {
              if (bidmOperation.bireOperationDTO) {
                const operationRow: OperationRow = {
                  bidmOperation,
                  code: bidmOperation.bireOpeCode,
                  rangeCode: bidmOperation.bireOpeRangeCode,
                  version: bidmOperation.bireOpeVersion,
                  designation: bidmOperation.bireOperationDTO.opeDesignation,
                  qualification: bidmOperation.bireOperationDTO.opeQualification
                };

                return operationRow;
              }
              throw new Error('Bire not loaded on BIDM Operations');
            });
            this.insertOpTableIfNotExist(operationRows);

            this.procurementRequestsTableService
              .findProcReqItemsAndStockQuantityIndicators(this.workOrder, undefined)
              .subscribe((proqReqs: ProcurementRequestAndIndicatorsOutputDTO[]) => {
                this.procurementRequests = proqReqs;
                this.procurementRequests.forEach((proqReq) => {
                  this.procurementRequestRows.push(...this.createProcReqItemRow(proqReq));
                });
              });
          });

        if (this.workOrder.bireItemFamilyCode && this.workOrder.bireItemVariantCode) {
          this.relatedItem =
            this.workOrder.bireItemFamilyCode +
            '-' +
            this.workOrder.bireItemVariantCode +
            '/' +
            [
              this.workOrder.bireItemChapter,
              this.workOrder.bireItemSection,
              this.workOrder.bireItemSubject,
              this.workOrder.bireItemSheet,
              this.workOrder.bireItemMarks
            ].join('-');
        }
        this.relatedAsset = this.getRelatedAssetKey(this.workOrder.assetPn, this.workOrder.assetSn);
        this.updateType(true);
        this.onAssignedUserChange();
      });
    } else {
      if (this._addBidmWorkOrderDTOId) {
        this.dialogWorkOrderEditService.findWorkOrder(this._addBidmWorkOrderDTOId).subscribe((topWo) => {
          if (topWo.woId) {
            this.topWo = topWo.woId;
          }
        });
      }

      this.workOrder = {
        woScheduledStartDate: new Date()
      };
      this.updateType(false);
      this.fillRelatedAssetsList();
    }
    this.titleModeEdition = this.isCreateOpenMode
      ? this.getTranslateKey('titleCreation')
      : this.getTranslateKey('titleEdition');
    // this.wpFormService.userList$.subscribe((list) => (this.userList = list));
    this.getUsersList();

    this.wpFormService.woTypeList$.subscribe((list) => {
      this.typeList = this._isFromMaintenancePlanning
        ? list.filter((a) => a.value === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE)
        : list;
    });
    if (this._isFromMaintenancePlanning) {
      this.workOrder.woType = AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE;
    }
  }

  private getRelatedAssetKey(assetPn?: string, assetSn?: string): string | undefined {
    if (assetPn && assetSn) {
      return `${assetPn}/${assetSn}`;
    } else if (assetPn) {
      return `${assetPn}/ `;
    } else if (assetSn) {
      return ` /${assetSn}`;
    }

    return undefined;
  }

  public isValid(): boolean {
    return true;
  }

  private getTask(bireTaskId: BireTaskDTOId) {
    this.workOrderFormService.findBireTask(bireTaskId).subscribe((linkedTask) => {
      this.task = linkedTask;
      this.onSelectedTask(this.task);
      this.fillRelatedAssetsList();
    });
  }

  private getUsersList(): void {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    };
    if (!!this.task) {
      param.taskCode = this.task.taskCode;
      param.taskVersion = this.task.taskVersion;
      param.projectId = this._workPackage.projectId;
      param.startDate = this.workOrder.woScheduledStartDate;
    }
    this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe((data: BidoUserDTO[]) => {
      this.userList = data.map((user) => {
        return {
          label: `${user.lastname} ${user.firstname}`,
          value: user.userId
        };
      });
      if (!!this.workOrder.woAssignedTo) {
        const inList = this.userList.find((elem: SelectItem) => elem.value === this.workOrder.woAssignedTo);
        this.workOrder.woAssignedTo = !!inList ? inList.value : undefined;
      }
    });
  }

  public validate(): void {
    if (StringUtils.isNullOrEmpty(this.workOrder.woType)) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnWoType');
    } else if (
      this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK &&
      StringUtils.isNullOrEmpty(this.task.taskCode)
    ) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnWoTaskCode');
    } else if (moment(this.workOrder.woScheduledStartDate).isAfter(moment(this.workOrder.woScheduledEndDate))) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDates');
    } else if (this.showDefectSection && StringUtils.isNullOrEmpty(this.eventCode)) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDefect');
    } else if (this.showEvolutionSection && StringUtils.isNullOrEmpty(this.evolution.evolutionNumber)) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnEvolution');
    } else if (this.showOperationSection && !this.validateProcurementRequests()) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnProcurementRequests');
    } else {
      this.saveWorkOrder();
    }
  }

  private validateProcurementRequests(): boolean {
    if (this.procurementRequestRows && this.procurementRequestRows.length > 0) {
      this.procurementRequestRows.forEach((row) => {
        if (!row.materials || !row.requestedQuantity || row.requestedQuantity < 0) {
          return false;
        }
      });
    }

    return true;
  }

  private saveWorkOrder() {
    this.showSaveSpinner = true;
    this.workOrder.projectId = this.workPackage.projectId;

    // Top work order ?
    if (!!this.topWo) {
      this.workOrder.bidProjectId = this.workPackage.projectId;
      this.workOrder.bidWoId = this.topWo;
    }

    const bidmOperations: BidmOperationDTO[] = this.opTable.map((operationRow) => operationRow.bidmOperation);

    const woProcurementRequestInputDTOs: WoProcurementRequestInputDTO[] = this.procurementRequestRows
      .filter((row) => !row.procurementRequestId)
      .map((row) => {
        const input: WoProcurementRequestInputDTO = {
          pnCode: row.materials as string,
          quantity: Number(row.requestedQuantity),
          criticality: row.criticality as string,
          date: row.expectedOn,
          expirationDate: row.expectedOn,
          requestedPotential: row.requestedPotential,
          potentialUnit: row.potentialUnit,
          calendarPotential: row.calendarPotential
        };

        return input;
      });

    this.task = { ...this.task, taskCode: this.task.taskCode || undefined };

    const newWorkOrder: CreateBidmWorkOrderInput = {
      bidmProjectDTO: this.workPackage,
      bidmWorkOrderDTO: this.workOrder,
      relatedItem: this.relatedItem,
      relatedAsset: this.relatedAsset,
      evolution: this.evolution,
      task: this.task,
      eventCode: this.eventCode,
      operations: bidmOperations,
      woProcurementRequestInputDTOs
    };

    this.dialogWorkOrderEditService
      .createOrUpdateBidmWorkOrder(newWorkOrder)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe(
        (workOrder) => {
          if (this.oldWorkOrder && this.oldWorkOrder.bidtWarehouseId !== this.workOrder.bidtWarehouseId) {
            this.logisticsService.updateProcurementRequestReceiver(workOrder).subscribe();
          }

          this.messageService.showSuccessMessage(this.getTranslateKey('woCreated'));
          this.onValidated.emit({ isCreated: true });
          this.showSaveSpinner = false;
          this.closeDialog();
        },
        (err) => {
          this.messageService.showErrorMessage(
            err.error && err.error.errorDetail ? err.error.errorDetail : this.getTranslateKey('errorOnAddingWO')
          );
        }
      );
  }

  public updateType(keepValues: boolean) {
    this.showTaskSection = this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK;
    this.showDefectSection = this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT;
    this.showEvolutionSection = this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION;
    this.showOperationSection =
      this.workOrder.woType !== AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SUBCONTRACTING &&
      !StringUtils.isNullOrEmpty(this.workOrder.woType);
    this.showRelatedFields = this.showTaskSection || this.showDefectSection || this.showEvolutionSection;

    if (!keepValues) {
      this.clearTask();
      this.eventCode = '';
      this.evolution = {};
      this.relatedItem = undefined;
      this.workOrder.assetSn = undefined;
      this.relatedItemList = [];
    }
  }

  public openTaskDialog() {
    this.displayTaskDialog = true;
  }

  public openDefectDialog() {
    this.displayDefectDialog = true;
  }

  public openEvolDialog() {
    this.displayEvolDialog = true;
  }

  public openOperationDialog() {
    this.displayOperationDialog = true;
  }

  public clearTask(): void {
    this.task = {};
    this.clearOperations();
  }

  public clearOperations(): void {
    this.opTable = [];
    this.selectedOperations = [];
    if (!this.isUpdateMode) {
      this.procurementRequestRows = [];
    }
  }

  public onAssignedUserChange() {
    if (!!this.workOrder.woAssignedTo) {
      const employeeId: string = this.workOrder.woAssignedTo;
      this.employeeFormService.getEmployeeQualificationText(employeeId).subscribe((result) => {
        this.employeeQualification = result;
      });
    }
  }

  public onSelectedTask(task: BireTaskDTO) {
    this.task = {
      taskCode: task.taskCode,
      taskVersion: task.taskVersion,
      taskDesignation: task.taskDesignation
    };
    this.workOrder.woDescription = task.taskDescription;
    this.fillOperationListFromTask();
    this.fillRelatedItemsList();
    this.getUsersList();
  }

  public onSelectedOperation(popupOp: BireOperationDTO) {
    const op: OperationRow = {
      code: popupOp.opeCode,
      version: popupOp.opeVersion,
      rangeCode: popupOp.rangeCode,
      designation: popupOp.opeDesignation,
      qualification: popupOp.opeQualification,
      bidmOperation: {
        bireOperationDTO: popupOp
      }
    };
    this.insertOpTableIfNotExist([op], true);
  }

  private insertOpTableIfNotExist(
    operationList: OperationRow[],
    createProcurementRequest?: boolean,
    bireTaskDTO?: BireTaskDTO
  ) {
    for (const op of operationList) {
      if (!this.opTable.some((o) => _isEqual(o.code, op.code) && _isEqual(o.version, op.version))) {
        this.opTable.push(op);
      }
    }
    if (createProcurementRequest) {
      const bireOperationDTOs: BireOperationDTO[] = [];
      this.opTable.forEach((o) => {
        if (o.bidmOperation.bireOperationDTO) {
          bireOperationDTOs.push(o.bidmOperation.bireOperationDTO);
        }
      });
      this.dialogWorkOrderEditService
        .initalizeWoProcurementRequestInput({
          bireTaskDTO,
          bireOperationDTOs
        })
        .subscribe((results) => {
          results.forEach((input) => {
            const row = {
              materials: input.pnCode,
              requestedQuantity: input.quantity ? NumberUtils.roundNumber(input.quantity, 2) : 1,
              expectedOn: this.workOrder.woScheduledStartDate,
              criticality: AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE,
              recepient: !!this.bidtSiteDTO ? this.bidtSiteDTO.siteName : '',
              recepientDesc:
                !!this.bidtWarehouseDTOs && !!this.workOrder.bidtWarehouseId
                  ? this.bidtWarehouseDTOs.filter(
                      (warehouse) => warehouse.wareHouseId === this.workOrder.bidtWarehouseId
                    )[0].whName
                  : ''
            };
            this.loadUnits(row);
            this.procurementRequestRows.push(row);
          });
        });
    }
  }

  public onSelectedDefect(event: DeferredDefectEventDTO) {
    this.workOrder.woDescription = event.caDescription;
    this.eventCode = (event.bidoNotificationData && event.bidoNotificationData.notificationCode) || '';
  }

  public onSelectedEvol(evol: BireEvolutionDTO) {
    this.evolution = {
      evolutionNumber: evol.evolutionNumber,
      evolutionRevisionNumber: evol.evolutionRevisionNumber,
      evolutionType: evol.evolutionType
    };
    this.workOrder.woDescription = evol.evolutionSummary;
    this.fillOperationListFromEvol();
    this.fillRelatedItemsList();
  }

  public deleteOperation() {
    this.opTable = this.opTable.filter((op) => !this.selectedOperations.includes(op));
    this.selectedOperations = [];
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    this.workOrder.warrantyProvider = event.customerCode;
    if (event.customerName) {
      this.warrantyProviderName = event.customerName;
    }
  }

  public onWarrantyChange(): void {
    if (!this.workOrder.underWarranty) {
      this.warrantyProviderName = undefined;
      this.workOrder.warrantyProvider = undefined;
    }
  }

  private init(): void {
    this.warehouseList = [];
    this.typeList = [];
    this.userList = [];
    this.procurementRequests = [];
    this.procurementRequestRows = [];
    this.procurementRequestStatusList = [];
    this.procurementRequestTypes = [];
    this.awPropertiesConstants = AWPropertiesConstants;
    this.onValidated = new EventEmitter<{ isCreated: boolean }>();
  }

  private initOpTableCols(): void {
    this.opTableCols = [
      { field: 'code', alignment: 'left', width: '30%' },
      { field: 'version', alignment: 'left', width: '10%' },
      { field: 'rangeCode', alignment: 'left', width: '20%' },
      { field: 'qualification', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '25%' }
    ];
  }

  private fillOperationListFromTask() {
    const bireTaskDTOId: BireTaskDTOId = {
      taskCode: this.task.taskCode || '',
      taskVersion: this.task.taskVersion || ''
    };
    this.dialogWorkOrderEditService.findOperationsFromTaskAndRelatedTasks(bireTaskDTOId).subscribe((operationList) => {
      this.convertBireOperationsAndInsertIfNotExist(operationList, this.task);
    });
  }

  private convertBireOperationsAndInsertIfNotExist(operationList: BireOperationDTO[], bireTaskDTO?: BireTaskDTO) {
    const operationRows: OperationRow[] = operationList.map((bireOperation) => {
      const bidmOperationDTO: BidmOperationDTO = {
        bireOperationDTO: bireOperation
      };

      const operationRow: OperationRow = {
        bidmOperation: bidmOperationDTO,
        code: bireOperation.opeCode,
        rangeCode: bireOperation.rangeCode,
        version: bireOperation.opeVersion,
        designation: bireOperation.opeDesignation,
        qualification: bireOperation.opeQualification
      };

      return operationRow;
    });
    this.clearOperations();
    this.insertOpTableIfNotExist(operationRows, !this.isUpdateMode, bireTaskDTO);
  }

  private fillOperationListFromEvol() {
    this.dialogWorkOrderEditService.findOperationsFromEvolution(this.evolution).subscribe((operationList) => {
      this.convertBireOperationsAndInsertIfNotExist(operationList);
    });
  }

  private fillRelatedItemsList() {
    if (this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK) {
      const bireTaskDTOId: BireTaskDTOId = {
        taskCode: this.task.taskCode || '',
        taskVersion: this.task.taskVersion || ''
      };
      this.dialogWorkOrderEditService.findRelatedItemsFromTask(bireTaskDTOId).subscribe((relatedItemList) => {
        this.updateRelatedItemList(relatedItemList);
      });
    } else if (this.workOrder.woType === AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION) {
      this.dialogWorkOrderEditService.findRelatedItemsFromEvolution(this.evolution).subscribe((relatedItemList) => {
        this.updateRelatedItemList(relatedItemList);
      });
    }
  }

  private updateRelatedItemList(relatedItemList: SelectItem[]) {
    this.relatedItemList = relatedItemList;
    if (relatedItemList.length === 1) {
      this.relatedItem = relatedItemList[0].value;
      this.onRelatedItemChange();
    }
  }

  public onRelatedItemChange() {
    this.fillRelatedAssetsList();
  }

  private fillRelatedAssetsList() {
    if (this._workPackage.assetCode) {
      const findRelatedAssetsInput: FindRelatedAssetsInput = {
        assetCode: this._workPackage.assetCode,
        relatedItem: this.relatedItem
      };
      this.dialogWorkOrderEditService.findRelatedAssets(findRelatedAssetsInput).subscribe((relatedAssetList) => {
        this.relatedAssetList = relatedAssetList;
      });
    }
  }

  private initProcurementRequestTableCols(): void {
    this.procurementRequestTableCols = [
      { field: 'materials', alignment: 'left', width: '20%' },
      { field: 'requestedQuantity', alignment: 'left', width: '5%' },
      { field: 'unit', alignment: 'left', width: '5%' },
      { field: 'requestedPotential', alignment: 'left', width: '7%' },
      { field: 'potentialUnit', alignment: 'left', width: '7%' },
      { field: 'calendarPotential', alignment: 'left', width: '10%' },
      { field: 'expectedOn', alignment: 'left', width: '10%' },
      { field: 'criticality', alignment: 'left', width: '10%' },
      { field: 'recepient', alignment: 'left', width: '10%' },
      { field: 'action', alignment: 'center', width: '5%' }
    ];
  }

  public createProcReqItemRow(
    procurementRequest: ProcurementRequestAndIndicatorsOutputDTO
  ): WoProcurementRequestInputRow[] {
    return procurementRequest.procReqItemsAndQtyIndicatorsDTO.map(
      (procReqItemsAndQtyIndicatorsDTO: ProcReqItemAndQtyIndicatorsDTO) => {
        const row: WoProcurementRequestInputRow = {
          procurementRequestId: procurementRequest.id,
          id: procReqItemsAndQtyIndicatorsDTO.id,
          procurementRequest: procurementRequest.procCode,
          procurementRequestDescription: procurementRequest.procType,
          recepient: !!procurementRequest.bidtSiteReceipt ? procurementRequest.bidtSiteReceipt.siteName : '',
          recepientDesc: !!procurementRequest.bidtWarehouseReceipt
            ? procurementRequest.bidtWarehouseReceipt.whName
            : '',
          expectedOn: procurementRequest.requestedDate,
          criticality: procurementRequest.criticality,
          materials: procReqItemsAndQtyIndicatorsDTO.birePn ? procReqItemsAndQtyIndicatorsDTO.birePn.pnCode : undefined,
          materialsDesc: procReqItemsAndQtyIndicatorsDTO.birePn
            ? procReqItemsAndQtyIndicatorsDTO.birePn.articleDesignation
            : undefined,
          requestedQuantity: procReqItemsAndQtyIndicatorsDTO.requestedQuantity
            ? NumberUtils.roundNumber(NumberUtils.fromString(procReqItemsAndQtyIndicatorsDTO.requestedQuantity), 2)
            : 1,
          calendarPotential: procurementRequest.calendarPotential,
          potentialUnit: procurementRequest.potentialUnit,
          requestedPotential: procurementRequest.requestedPotential
            ? NumberUtils.roundNumber(NumberUtils.fromString(procurementRequest.requestedPotential), 2)
            : undefined
        };

        return row;
      }
    );
  }

  public addProcurementRequest(): void {
    this.procurementRequestRows.push({
      materials: undefined,
      materialsDesc: undefined,
      expectedOn: this.workOrder.woScheduledStartDate,
      requestedQuantity: 1,
      criticality: AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE,
      recepient: !!this.bidtSiteDTO ? this.bidtSiteDTO.siteName : '',
      recepientDesc:
        !!this.bidtWarehouseDTOs && !!this.workOrder.bidtWarehouseId
          ? this.bidtWarehouseDTOs.filter((warehouse) => warehouse.wareHouseId === this.workOrder.bidtWarehouseId)[0]
              .whName
          : ''
    });
  }

  public openPnSearchDialog(row: WoProcurementRequestInputRow): void {
    this.selectedProcurementRequestRow = row;
    this.searchPnDialogVisible = true;
  }

  public checkPn(pn: BirePnDTO | undefined) {
    if (pn) {
      this.selectedProcurementRequestRow.materials = pn.pnCode;
      this.selectedProcurementRequestRow.unit = pn.unitOfIssue;
      this.loadUnits(this.selectedProcurementRequestRow);
    }
  }

  public deleteProcurementRequest(row: WoProcurementRequestInputRow): void {
    this.procurementRequestRows = this.procurementRequestRows.filter((pr) => pr !== row);
  }

  private loadUnits(row: WoProcurementRequestInputRow) {
    this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode: row.materials as string }).subscribe({
      next: (counterReferences) => {
        row.units = counterReferences
          .map((counterReference) => {
            return {
              label: `${counterReference.unitCode} (${counterReference.counterCode})`,
              value: counterReference.counterCode as string
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }
}
