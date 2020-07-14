import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { concatMap } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidtProcReqItemDTO } from '../../../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtWarehouseDTO } from '../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { BidoFamilyVariantUtils } from '../../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { LogisticalUtils } from '../../../../../shared/utils/logistic-utils';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { LogisticsService } from '../../../logistics.service';

enum ComponentContext {
  DEFAULT,
  WORK_ORDER
}

@Component({
  selector: 'aw-procurement-request-popup',
  templateUrl: './procurement-request-popup.component.html'
})
export class ProcurementRequestPopupComponent extends DialogComponent implements OnInit {
  @Input('pn')
  public inputPn?: BirePnDTO;

  @Input('procurementRequest')
  public inputProcurementRequest?: BidtProcurementRequestDTO;

  @Input('bidtProcReqItem')
  public inputBidtProcReqItem?: BidtProcReqItemDTO;

  @Input('workOrder')
  public inputWorkOrder?: BidmWorkOrderDTO;

  @Input('workOrderStatus')
  public inputWorkOrderStatus?: string;

  @Input('workPackage')
  public inputWorkPackage?: BidmProjectDTO;

  @Output()
  public readonly onValidate: EventEmitter<BidtProcurementRequestDTO>;

  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  public criticalities: LabelValue<string>[];
  public procurementRequestStatuses: LabelValue<string>[];
  public procurementRequestTypes: SelectItem[];
  public sites: LabelValue<number>[];
  public units: LabelValue<string>[];
  public warehouses: LabelValue<number>[];

  public currentComponentContext: ComponentContext;
  public pn: BirePnDTO | undefined;
  public wo: BidmWorkOrderDTO | undefined;
  public procurementRequest: BidtProcurementRequestDTO;
  public requestedQuantity: string | undefined;

  public showPnDialog: boolean;
  public showWoDialog: boolean;

  public saving: boolean;

  private engineeringPnTypes: LabelValue<string>[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticsService: LogisticsService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    public readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'ProcurementRequestPopupComponent');

    this.awPropertiesConstants = AWPropertiesConstants;
    this.onValidate = new EventEmitter<BidtProcurementRequestDTO>();

    this.criticalities = [];
    this.procurementRequestStatuses = [];
    this.procurementRequestTypes = [];
    this.sites = [];
    this.units = [];
    this.warehouses = [];

    this.pn = undefined;
    this.wo = undefined;
    this.procurementRequest = {};
    this.requestedQuantity = undefined;

    this.showPnDialog = false;
    this.showWoDialog = false;

    this.loadCriticalities();
    this.loadSites();

    this.propertiesService.getValue(GenericPropertyConstants.ENGINEERING_PN_TYPES_MAP).subscribe({
      next: (pnTypes) => {
        this.engineeringPnTypes = ListUtils.orEmpty(pnTypes);
      }
    });
  }

  public ngOnInit(): void {
    this.initCurrentComponentContext();

    this.loadProcurementRequestTypes();
    this.loadProcurementRequestStatuses();

    if (this.inputProcurementRequest) {
      // Edit mode
      this.updateOpenMode(ComponentOpenMode.Read);
      this.initWithProcurementRequest();
      this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId as number);
      if (!!this.inputWorkOrder) {
        this.wo = this.inputWorkOrder;
      }
    } else {
      // Create mode
      this.updateOpenMode(ComponentOpenMode.Write);
      this.procurementRequest = {
        procStatus: AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED,
        requestedDate: new Date()
      };

      this.initWithPn(this.inputPn);
      this.initWithWorkOrder(this.inputWorkPackage, this.inputWorkOrder, this.inputWorkOrderStatus);

      if (!this.inputWorkOrder) {
        this.loadUserSite();
      }
    }
  }

  // ////////////////////////////////////////////////////////////////////////////

  public erasePn(): void {
    this.pn = undefined;
  }

  public eraseWo(): void {
    this.wo = undefined;
  }

  public onChangeProcurementRequestType(): void {
    if (!this.isWorkOrderContext) {
      this.updateWarehouses();
    }
  }

  public onSelectPn(pn: BirePnDTO): void {
    this.pn = pn;

    this.loadUnits(pn);

    if (this.isWorkOrderContext) {
      this.procurementRequest.procType =
        pn.sparePartClassCode === AWPropertiesConstants.SPC_REPAIRABLE_KEY
          ? AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES
          : AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE;
    }
  }

  public onSelectWo(workOrder: BidmWorkOrderDTO): void {
    this.wo = workOrder;
    this.procurementRequest.requestedDate = workOrder.woScheduledStartDate || this.procurementRequest.requestedDate;
    this.loadProcurementRequestStatuses();
    if (workOrder.bidtWarehouseId) {
      this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
        next: (warehouse: BidtWarehouseDTO) => {
          if (warehouse) {
            this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse.wareHouseId as number;
            this.procurementRequest.bidtSiteByBidtSiteReceiptId = warehouse.bidtSiteId as number;
            this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId);
          }
        }
      });
    }

    if (this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES) {
      this.logisticsService.findBirePn({ pnCode: workOrder.assetPn }).subscribe({
        next: (pn) => {
          if (pn) {
            this.onSelectPn(pn);
          }
        }
      });
    }
  }

  public openPnDialog(): void {
    if (!this.isReadOpenMode) {
      this.showPnDialog = true;
    }
  }

  public openWoDialog(): void {
    this.showWoDialog = true;
  }

  public updateWarehouses(): void {
    this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = undefined;
    this.warehouses = [];

    if (this.procurementRequest.bidtSiteByBidtSiteReceiptId) {
      this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId);
    }
  }

  public validate() {
    if (moment(this.procurementRequest.requestedDate).isBefore(moment(), 'day')) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnRequestDateInPast'));
    } else if (Number(this.requestedQuantity) <= 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNegativeQuantity'));
    } else {
      this.saving = true;

      // regression Here on edit, items has no more id !!
      this.addItemDataToProcurementRequest();
      this.addWorkOrderDataToProcurementRequest();

      this.logisticsService.checkQuantityConsistency(this.procurementRequest).subscribe({
        next: (consistent) => {
          if (consistent) {
            this.checkSimilarProcurementRequestThenUpdate();
          } else {
            this.confirmationService.confirm({
              messageKey: this.getTranslateKey('quantityNotConsistent'),
              contextKeys: [this.getTranslateKey('confirmContinue')],
              accept: () => {
                this.checkSimilarProcurementRequestThenUpdate();
              }
            });
          }
        }
      });
    }
  }

  private checkSimilarProcurementRequestThenUpdate(): void {
    const procurementRequestCriteria = {
      assetCode: this.isWorkOrderContext && this.inputWorkPackage ? this.inputWorkPackage.assetCode : undefined,
      procReqItemQuantity: this.requestedQuantity,
      procReqItemPnCode: this.pn ? this.pn.pnCode : undefined,
      withAlternatives: true,
      bidtProcurementRequest: {
        bidtSiteByBidtSiteReceiptId: this.procurementRequest.bidtSiteByBidtSiteReceiptId
      },
      procReqStatusExcluded: [
        AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED,
        AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED
      ]
    };
    this.logisticsService.findProcurementRequestsByCriteria(procurementRequestCriteria).subscribe({
      next: (existingProcurementRequests) => {
        if (ListUtils.isNullOrEmpty(existingProcurementRequests)) {
          this.checkPnIsInApplicableConfigurationThenUpdate();
        } else {
          const existingProcCode = existingProcurementRequests[0].procCode;

          this.confirmationService.confirm({
            interpolateParams: { procCode: existingProcCode },
            messageKey: this.getTranslateKey('similarProcurementRequest'),
            contextKeys: [this.getTranslateKey('confirmContinue')],
            accept: () => {
              this.checkPnIsInApplicableConfigurationThenUpdate();
            }
          });
        }
      }
    });
  }

  private isPnTypePresentInEngineeringPnTypes(pn: BirePnDTO): boolean {
    return this.engineeringPnTypes.some((pnType) => pnType.value === pn.pnType);
  }

  private checkPnIsInApplicableConfigurationThenUpdate(): void {
    if (!this.isWorkOrderContext || !this.isPnTypePresentInEngineeringPnTypes(this.pn as BirePnDTO)) {
      this.updateProcurementRequest();
    } else {
      if (this.inputWorkPackage && this.inputWorkPackage.assetCode) {
        this.logisticsService
          .findEquipment({ equipmentCode: this.inputWorkPackage.assetCode })
          .pipe(
            concatMap((equipment) => {
              const input = {
                familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(equipment.familyVariantCode),
                structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
                variantCode: BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(equipment.familyVariantCode),
                pnCode: (this.pn as BirePnDTO).pnCode
              };

              return this.logisticsService.findBireVersionPnsByFamilyAndVariantAndPnCode(input);
            })
          )
          .subscribe({
            next: (bireVersionPns) => {
              if (ListUtils.isNullOrEmpty(bireVersionPns)) {
                this.confirmationService.confirm({
                  messageKey: this.getTranslateKey('pnNotInApplicableConfiguration'),
                  contextKeys: [this.getTranslateKey('confirmContinue')],
                  accept: () => {
                    this.updateProcurementRequest();
                  }
                });
              } else {
                this.updateProcurementRequest();
              }
            }
          });
      } else {
        this.updateProcurementRequest();
      }
    }
  }

  // ////////////////////////////////////////////////////////////////////////////

  private get isDefaultContext(): boolean {
    return this.currentComponentContext === ComponentContext.DEFAULT;
  }

  private get isWorkOrderContext(): boolean {
    return this.currentComponentContext === ComponentContext.WORK_ORDER;
  }

  private addItemDataToProcurementRequest(): void {
    // correction regression by 'someone' on edit mode
    if (
      !!this.inputProcurementRequest &&
      !!this.procurementRequest.bidtProcReqItems &&
      !!this.procurementRequest.bidtProcReqItems[0]
    ) {
      this.procurementRequest.bidtProcReqItems[0] = {
        ...this.procurementRequest.bidtProcReqItems[0],
        birePn: this.pn,
        birePnPnCode: this.pn ? this.pn.pnCode : undefined,
        requestedQuantity: this.requestedQuantity
      };
    } else {
      this.procurementRequest.bidtProcReqItems = [
        {
          birePn: this.pn,
          birePnPnCode: this.pn ? this.pn.pnCode : undefined,
          requestedQuantity: this.requestedQuantity
        }
      ];
    }
  }

  private addWorkOrderDataToProcurementRequest(): void {
    if (this.wo) {
      const workOrder = this.wo as BidmWorkOrderDTO;
      this.procurementRequest.bidmWorkOrderProjectId = workOrder.projectId;
      this.procurementRequest.bidmWorkOrderWoId = workOrder.woId;
    }
  }

  private initCurrentComponentContext(): void {
    this.currentComponentContext = this.inputWorkOrder ? ComponentContext.WORK_ORDER : ComponentContext.DEFAULT;
  }

  private initWithPn(pn: BirePnDTO | undefined): void {
    this.pn = pn;
  }

  private initWithProcurementRequest(): void {
    this.procurementRequest = this.inputProcurementRequest as BidtProcurementRequestDTO;
    this.procurementRequest.bidtProcReqItems = [this.inputBidtProcReqItem as BidtProcReqItemDTO];
    this.pn =
      this.procurementRequest.bidtProcReqItems && this.procurementRequest.bidtProcReqItems.length === 1
        ? this.procurementRequest.bidtProcReqItems[0].birePn
        : undefined;

    this.requestedQuantity =
      this.procurementRequest.bidtProcReqItems &&
      this.procurementRequest.bidtProcReqItems.length === 1 &&
      this.procurementRequest.bidtProcReqItems[0].requestedQuantity
        ? NumberUtils.roundNumber(
            NumberUtils.fromString(this.procurementRequest.bidtProcReqItems[0].requestedQuantity),
            2
          ).toString()
        : undefined;

    if (this.pn) {
      this.loadUnits(this.pn);
    }
  }

  private initWithWorkOrder(
    workPackage: BidmProjectDTO | undefined,
    workOrder: BidmWorkOrderDTO | undefined,
    workOrderStatus: string | undefined
  ): void {
    if (workPackage && workOrder) {
      this.procurementRequest.procType = AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE;
      this.procurementRequest.requestedDate = workOrder.woScheduledStartDate || this.procurementRequest.requestedDate;
      this.wo = workOrder;

      this.logisticsService.findAllBireSite().subscribe({
        next: (sites) => {
          const matchingSite = sites.find((site) => site.siteCode === workPackage.bireRepairCenterCode);
          if (matchingSite) {
            this.procurementRequest.bidtSiteByBidtSiteReceiptId = matchingSite.siteId as number;

            if (workOrder.bidtWarehouseId) {
              this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
                next: (warehouse) => {
                  if (warehouse) {
                    this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse.wareHouseId as number;

                    this.loadWarehouses(this.procurementRequest.bidtSiteByBidtSiteReceiptId as number);
                  }
                }
              });
            }
          }
        }
      });

      if (
        workOrderStatus &&
        (workOrderStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
          workOrderStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED)
      ) {
        this.procurementRequest.procStatus =
          workOrderStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED
            ? AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED
            : AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED;
      }
    }
  }

  private loadCriticalities() {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP).subscribe({
      next: (criticalities) => {
        this.criticalities = LogisticalUtils.sortCriticities(criticalities);
      }
    });
  }

  private loadProcurementRequestStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe({
      next: (procurementRequestStatuses) => {
        const draftStatus = procurementRequestStatuses.find(
          (e) => e.value === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_DRAFT
        ) as LabelValue<string>;
        const plannedStatus = procurementRequestStatuses.find(
          (e) => e.value === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED
        ) as LabelValue<string>;
        const releasedStatus = procurementRequestStatuses.find(
          (e) => e.value === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED
        ) as LabelValue<string>;

        this.procurementRequestStatuses = [draftStatus];

        if ((this.isWorkOrderContext && this.inputWorkOrder) || !!this.wo) {
          if (
            this.inputWorkOrderStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED ||
            (!!this.wo && this.wo.calculatedStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED)
          ) {
            this.procurementRequestStatuses.push(plannedStatus);
          } else if (
            this.inputWorkOrderStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED ||
            (!!this.wo && this.wo.calculatedStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED)
          ) {
            this.procurementRequestStatuses.push(releasedStatus);
          }
        } else {
          this.procurementRequestStatuses.push(releasedStatus);
        }
      }
    });
  }

  private loadProcurementRequestTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe({
      next: (types) => {
        const allowedTypes = this.isWorkOrderContext
          ? [
              AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE,
              AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE,
              AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_ES
            ]
          : types.map((type) => type.value);

        this.procurementRequestTypes = types
          .filter((type) => allowedTypes.includes(type.value))
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private loadSites(): void {
    this.logisticsService.findAllBireSite().subscribe({
      next: (sites) => {
        this.sites = sites
          .map((res) => {
            return {
              label: `${res.siteCode} - ${res.siteName}`,
              value: res.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private loadUnits(pn: BirePnDTO) {
    this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode: pn.pnCode as string }).subscribe({
      next: (counterReferences) => {
        this.units = counterReferences
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

  private loadUserSite(): void {
    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        this.procurementRequest.bidtSiteByBidtSiteReceiptId = site ? site.siteId : undefined;

        if (this.procurementRequest.bidtSiteByBidtSiteReceiptId) {
          this.loadUserWarehouse(this.procurementRequest.bidtSiteByBidtSiteReceiptId);
        }
      }
    });
  }

  private loadUserWarehouse(siteId: number): void {
    this.sessionService.getUserWarehouseId().subscribe({
      next: (warehouse) => {
        if (warehouse && warehouse.wareHouseId) {
          this.loadWarehouses(siteId);

          this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouse ? warehouse.wareHouseId : undefined;
        }
      }
    });
  }

  private loadWarehouses(siteId: number): void {
    this.logisticsService.getWarehousesBySiteId(siteId).subscribe({
      next: (warehouses) => {
        const whCategory =
          this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE ||
          this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_MAINTENANCE_WITH_EXCHANCE
            ? AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
            : this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING ||
              this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH
            ? AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE
            : undefined;

        this.warehouses = warehouses
          .filter((warehouse) => !whCategory || warehouse.whCategory === whCategory)
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode}` + (warehouse.whName ? ` - ${warehouse.whName}` : ''),
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
  }

  private openProcurementRequest(procurementRequest: BidtProcurementRequestDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId: this.serializationService.serialize({ id: procurementRequest.id }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private updateProcurementRequest(): void {
    const service$ = this.inputProcurementRequest
      ? this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest)
      : this.isWorkOrderContext || this.wo
      ? this.logisticsService.createProcurementRequestFromWorkOrder(this.procurementRequest)
      : this.logisticsService.createProcurementRequest(this.procurementRequest);

    service$.subscribe({
      next: (procurementRequest) => {
        const message = this.inputProcurementRequest
          ? 'successOnUpdateProcurementRequest'
          : 'successOnCreateProcurementRequest';
        this.messageService.showSuccessMessage(this.getTranslateKey(message));

        this.onValidate.emit(procurementRequest);
        this.closeDialog();

        if (this.isDefaultContext) {
          this.openProcurementRequest(procurementRequest);
        }
      }
    });
  }

  public isExpectedSnVisible(): boolean {
    return (
      !!this.pn &&
      !!this.pn.traceability &&
      (this.pn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH ||
        this.pn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_SN ||
        this.pn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN)
    );
  }
}
