import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SessionService } from '../../../../shared/services/session.service';
import { BidoEquipmentOVSOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { WorkOrderManagementInputDTO } from '../../../../shared/types/api-types/work-order-management-input-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { BireItemUtils } from '../../../../shared/utils/bire-item-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { DialogWorkOrderCreationService } from './dialog-work-order.service';

export enum WPType {
  ACRS = 1,
  GO_NO_GO = 2
}

@Component({
  selector: 'aw-dialog-work-order-creation',
  styleUrls: ['./dialog-work-order.component.scss'],
  templateUrl: './dialog-work-order.component.html'
})
export class DialogWorkOrderCreationComponent extends DialogComponent implements OnInit {
  @Input()
  public displayAssignedTo: boolean;

  @Input()
  public displayDescription: boolean;

  @Input()
  public displayDueDate: boolean;

  @Input()
  public displayMroCenter: boolean;

  @Input()
  public displayName: boolean;

  @Input()
  public displayOperation: boolean;

  @Input()
  public displayStartDate: boolean;

  @Input()
  public displayStatus: boolean;

  @Input()
  public displayWorkCenter: boolean;

  @Input()
  public startDate: Date | undefined;

  @Input()
  public warningMessageList: string[];

  @Input()
  public wpType: WPType = WPType.ACRS;

  @Input()
  public mvtWay: string;

  @Input()
  public woPn: string | undefined;

  @Input()
  public woSn: string | undefined;

  @Input()
  public woAssetFunction: string | undefined;

  @Input()
  public woAssetDesignation: string | undefined;

  @Input()
  public woFunctionCode: string | undefined;

  @Input()
  public woItemPk: BireItemDTOId | undefined;

  @Input()
  public topAssetDTOId: BidoEquipmentDTOId;

  @Output()
  public onValidated: EventEmitter<{ woManagementInputDTO: WorkOrderManagementInputDTO }>;

  public mroCenterList: SelectItem[];
  public operationList: SelectItem[];
  public selectedWorkCenter: string | undefined;
  public typeList: SelectItem[];
  public statusList: SelectItem[];
  public userList: SelectItem[];
  public warehouseList: SelectItem[];
  public projectList: SelectItem[];
  public workPackageStatusList: LabelValue<string>[];

  public bidtWarehouseDTOs: BidtWarehouseDTO[];
  public bidmProjectDtos: BidmProjectDTO[];

  public woAssetCode: string;
  public dialogAddAssetVisible: boolean;
  public displayTaskDialog: boolean;
  public woManagementInputDTO: WorkOrderManagementInputDTO;
  public woTaskDesignation: string | undefined;
  public displayWoItem: string;
  public assetRepresentation: string;
  public workPackageListToAddVisible: boolean;

  public bidtStockMvtConstants: typeof BidtStockMvtConstants;

  public constructor(
    public sessionService: SessionService,
    private readonly dialogWorkPackageService: DialogWorkOrderCreationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'DialogWorkOrderCreationComponent');
    this.bidtStockMvtConstants = BidtStockMvtConstants;

    this.init();
    this.loadMroCenterList();
    this.loadOperationList();
    this.loadStatusList();
    this.loadTypeList();
    this.loadUserList();
    this.loadWorkPackageStatusList();
  }

  public ngOnInit(): void {
    this.fetchDefaultType();
    this.woManagementInputDTO.projectStartDate = this.startDate;
    this.getProjectList();
    if (this.woItemPk) {
      this.displayWoItem = BireItemUtils.createItemKey(this.woItemPk);
    }
    if (this.mvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT) {
      this.getWarehouseList();
    }
    this.initAssetRepresentation();
  }

  public isValid(): boolean {
    return (
      !StringUtils.isNullOrEmpty(this.woManagementInputDTO.projectName) &&
      !!this.woManagementInputDTO.projectStartDate &&
      !!this.woManagementInputDTO.projectType &&
      !StringUtils.isNullOrEmpty(this.woManagementInputDTO.projectMroCenterCode)
    );
  }

  public validate(): void {
    if (
      this.woManagementInputDTO.projectStartDate &&
      this.woManagementInputDTO.projectDueDate &&
      moment(this.woManagementInputDTO.projectStartDate).isAfter(moment(this.woManagementInputDTO.projectDueDate))
    ) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDates');
    } else {
      this.woManagementInputDTO.movementWay = this.mvtWay;
      this.woManagementInputDTO.topAssetDtoId = this.topAssetDTOId;
      this.woManagementInputDTO.woItemDTOId = this.woItemPk;
      this.woManagementInputDTO.woFunctionCode = this.woFunctionCode;
      this.woManagementInputDTO.movementPnCode = this.woPn;
      this.woManagementInputDTO.movementSn = this.woSn;
      this.woManagementInputDTO.woPn = this.woPn;
      this.woManagementInputDTO.woSn = this.woSn;
      this.woManagementInputDTO.woFunctionCode = this.woFunctionCode;
      this.onValidated.emit({ woManagementInputDTO: this.woManagementInputDTO });
      this.closeDialog();
    }
  }

  private init(): void {
    this.displayAssignedTo = true;
    this.displayDescription = true;
    this.displayDueDate = true;
    this.displayMroCenter = true;
    this.displayName = true;
    this.displayOperation = true;
    this.displayStartDate = true;
    this.displayStatus = true;
    this.displayWorkCenter = true;
    this.startDate = new Date();

    this.mroCenterList = [];
    this.operationList = [];
    this.selectedWorkCenter = undefined;
    this.typeList = [];
    this.statusList = [];
    this.userList = [];
    this.bidmProjectDtos = [];
    this.bidtWarehouseDTOs = [];

    this.woManagementInputDTO = {
      movementWay: this.mvtWay,
      topAssetDtoId: this.topAssetDTOId,
      woType:
        this.mvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT
          ? AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_MANUAL
          : AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE
    };

    this.onValidated = new EventEmitter<{ woManagementInputDTO: WorkOrderManagementInputDTO }>();
  }

  private loadMroCenterList(): void {
    /* this.dialogWorkPackageService.findAllMroCenter().subscribe((results) => {
      this.mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });*/
    this.dialogWorkPackageService.findAuthorizedBireSite().subscribe((results: LabelValue<string>[]) => {
      if (!!results) {
        results.forEach((elt) => {
          if (!!elt.label) {
            elt.label = `${elt.value}-${elt.label}`;
          }
        });
      }
      this.mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadOperationList(): void {
    this.dialogWorkPackageService.findAllBidoOperation().subscribe((results) => {
      this.operationList = SelectItemUtils.fromLabelValues(results);
    });
  }

  private loadStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((results) => {
      this.statusList = ListUtils.orEmpty(results);
    });
  }

  private loadWorkPackageStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((results) => {
      this.workPackageStatusList = ListUtils.orEmpty(results);
    });
  }

  private loadTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP).subscribe((results) => {
      this.typeList = ListUtils.orEmpty(results);
    });
  }
  private fetchDefaultType() {
    if (this.wpType) {
      this.woManagementInputDTO.projectType = `${this.wpType}`;
    }
  }

  private loadUserList(): void {
    this.dialogWorkPackageService
      .findBidoUsersWithUseCase(BidoFunctionTypeConstants.UC_AIRM_RECEPTION)
      .subscribe((results) => {
        const resultUserList = ListUtils.orEmpty(results).map((result) => {
          const userName = `${StringUtils.orEmpty(result.lastname)} ${StringUtils.orEmpty(result.firstname)}`;

          return {
            label: userName.trim(),
            value: result.userId
          };
        });
        this.userList = resultUserList.sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0));
      });
  }

  // get data from server
  private getWarehouseList(): void {
    if (this.woPn) {
      this.dialogWorkPackageService.findAllWarehouseByProduct(this.woPn).subscribe((results) => {
        this.bidtWarehouseDTOs = results;
        this.warehouseList = ListUtils.orEmpty(results)
          .filter((warehouse) => !!warehouse.whCode)
          .map((warehouse: BidtWarehouseDTO) => {
            return {
              label: StringUtils.isNullOrEmpty(warehouse.whName)
                ? warehouse.whCode
                : `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId
            };
          });
      });
    }
  }

  public getProjectList(): void {
    if (this.topAssetDTOId && this.topAssetDTOId.equipmentCode) {
      this.dialogWorkPackageService
        .findUnfinishedProjectByEquipmentCode(this.topAssetDTOId.equipmentCode)
        .subscribe((results) => {
          this.bidmProjectDtos = results.filter(
            (project) => project.statusState !== AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE
          );
          this.projectList = ListUtils.orEmpty(this.bidmProjectDtos).map((project: BidmProjectDTO) => {
            return {
              label: StringUtils.isNullOrEmpty(project.projectName)
                ? `${project.projectNumber}`
                : `${project.projectNumber} - ${project.projectName}`,
              value: project.projectId
            };
          });
        });
    }
  }

  public addAsset(): void {
    this.dialogAddAssetVisible = true;
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    this.woAssetCode = event.equipmentCode as string;
    this.woPn = event.pnCode;
    this.woSn = event.sn;
    this.woAssetDesignation = event.equipmentDesignation;
    this.initAssetRepresentation();
  }

  public openTaskDialog() {
    this.displayTaskDialog = true;
  }

  public onSelectedTask(task: BireTaskDTO) {
    this.woTaskDesignation = task.taskDesignation;
    this.woManagementInputDTO.woTaskCode = task.taskCode;
    this.woManagementInputDTO.woTaskVersion = task.taskVersion;
    this.woManagementInputDTO.woDescription = task.taskDescription;
    this.woManagementInputDTO.woType = AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK;
  }

  public addToWorkPackage(workPackage: BidmProjectDTO): void {
    this.woManagementInputDTO.projectId = workPackage.projectId;
    this.woManagementInputDTO.projectName = workPackage.projectName;
    this.woManagementInputDTO.projectMroCenterCode = workPackage.bireRepairCenterCode;
    this.woManagementInputDTO.projectAssignedTo = workPackage.receivingAssignedTo;
    this.woManagementInputDTO.projectType = workPackage.projectType;
    this.woManagementInputDTO.projectOperationCode = workPackage.bidoOperationCode;
    this.woManagementInputDTO.projectStartDate = workPackage.projectStartDate;
    this.woManagementInputDTO.projectDueDate = workPackage.projectDueDate;
    this.woManagementInputDTO.projectDescription = workPackage.projectDescription;
  }

  public resetWP(): void {
    this.woManagementInputDTO.projectId = undefined;
    this.woManagementInputDTO.projectName = undefined;
    this.woManagementInputDTO.projectMroCenterCode = undefined;
    this.woManagementInputDTO.projectAssignedTo = undefined;
    this.woManagementInputDTO.projectType = undefined;
    this.woManagementInputDTO.projectOperationCode = undefined;
    this.woManagementInputDTO.projectStartDate = undefined;
    this.woManagementInputDTO.projectDueDate = undefined;
    this.woManagementInputDTO.projectDescription = undefined;
  }

  public initAssetRepresentation() {
    if (this.woSn) {
      const pnDataKey = 'global.pn';
      const snDataKey =
        this.woAssetFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY ? 'global.esn' : 'global.sn';
      this.translateService.get([pnDataKey, snDataKey]).subscribe((results: string[]) => {
        const pnLabel: string = !!results ? (results[pnDataKey] as string) : 'P/N';
        const snLabel: string = !!results ? (results[snDataKey] as string) : 'S/N';
        this.assetRepresentation = '';
        if (this.woPn) {
          this.assetRepresentation += `${pnLabel} ${this.woPn} `;
        }
        this.assetRepresentation += `${snLabel} ${this.woSn}`;
      });
    }
  }
}
