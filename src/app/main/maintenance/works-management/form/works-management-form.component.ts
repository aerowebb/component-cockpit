import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants as gpc } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PageService } from '../../../../shared/services/page.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { WorkOrderStatusDetailDTO } from '../../../../shared/types/api-types/work-order-status-detail-dto.interface';
import { WorksManagementDTO } from '../../../../shared/types/api-types/works-management-dto-interface';
import { WorksManagementInformationDTO } from '../../../../shared/types/api-types/works-management-information-dto-interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { MyJobsCardsTableCriteria } from '../types/my-jobs-cards-table-criteria.interface';

import { WorksManagementFormService } from './works-management-form.service';

interface WorksManagementRow {
  workOrderDTO: BidmWorkOrderDTO;
  bidmWorkOrderDataDTO: BidmWorkOrderDataDTO;
  workOrderStatusDetailDTO: WorkOrderStatusDetailDTO;
  worksManagementDTO: WorksManagementDTO;
  worksManagementInformationDTO: WorksManagementInformationDTO;
  originText?: string;
  evolutionType?: string;
  projectDTO: BidmProjectDTO;
  wpEquipementDTO?: BidoEquipmentDTO;
  woEquipementDTO?: BidoEquipmentDTO;
  progressStatus?: string;
  assignedTo?: string;
  asset?: BidoEquipmentDTO;
  assetRepresentation?: string;
  woCodeNumber: number;
  wpProgressPercent?: number;
  wpProgressStatus?: string;
}

@Component({
  selector: 'aw-works-management-form',
  styleUrls: ['./works-management-form.component.scss'],
  templateUrl: './works-management-form.component.html'
})
export class WorksManagementFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public worksManagementTableCols: TableColumn[];
  public userConnectedId: BidoUserDTOId;
  public worksManagementTable: WorksManagementRow[];
  public worksManagementTableResult: WorksManagementRow[];
  public selectedWorkOrders: WorksManagementRow[];
  public context: string;
  public showSaveSpinner: boolean;
  public isLoadingWorksManagementTable: boolean;
  public showControlWoBtn: boolean;
  public showCloseWoBtn: boolean;
  public showCloseWpBtn: boolean;

  // Filters
  public searchStatusList: SelectItem[];
  public criteriaStatusList: string[];
  public searchTypeList: SelectItem[];
  public criteriaTypeList: string[];
  public searchWOAssetList: SelectItem[];
  public searchWPAssetList: SelectItem[];
  public searchWOCodeList: SelectItem[];
  public searchUserList: SelectItem[];
  public userList: SelectItem[];
  public searchCriteria: MyJobsCardsTableCriteria;
  public filtersVisible: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly worksManagementFormService: WorksManagementFormService,
    private readonly sessionService: SessionService,
    private readonly pageService: PageService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.awPropertiesConstants = AWPropertiesConstants;
    this.init();
    this.initTablesHeader();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_COMPONENT_WORKS_MANAGEMENT;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.getWorkOrders();
  }

  private init(): void {
    this.worksManagementTable = [];
    this.worksManagementTableResult = [];
    this.selectedWorkOrders = [];
    this.searchStatusList = [];
    this.searchTypeList = [];
    this.searchWOAssetList = [];
    this.searchWPAssetList = [];
    this.searchWOCodeList = [];
    this.searchUserList = [];
    this.criteriaStatusList = [];
    this.criteriaTypeList = [];
    this.worksManagementFormService
      .loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP)
      .subscribe((result) => (this.searchTypeList = result));
    this.worksManagementFormService
      .loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP)
      .subscribe((result) => (this.searchStatusList = result));
    this.initializeFilters();
  }

  private getWorkOrders(): void {
    if (this.sessionService.loggedUser) {
      this.isLoadingWorksManagementTable = true;
      this.worksManagementFormService.findBidoUserByLogin(this.sessionService.loggedUser.login).subscribe((user) => {
        if (user.userId) {
          this.context = `${user.firstname} ${user.lastname}`;
          this.displayComponentContext(this.context, true);
          this.userConnectedId = {
            userId: user.userId
          };
          this.worksManagementFormService.loadUserList().subscribe((result) => {
            this.userList = result;
            this.worksManagementFormService.initializeWorksManagement().subscribe((workOrderList) => {
              this.isLoadingWorksManagementTable = false;
              this.setWorkOrdersRows(workOrderList);
            });
          });
        }
      });
    }
  }

  public initTablesHeader(): void {
    this.worksManagementTableCols = [
      { field: 'workPackage', alignment: 'left', width: '8%' },
      { field: 'workOrder', alignment: 'left', width: '8%' },
      { field: 'origin', alignment: 'left', width: '21.5%' },
      { field: 'scheduling', alignment: 'left', width: '23%' },
      { field: 'execution', alignment: 'left', width: '23%' },
      { field: 'asset', alignment: 'left', width: '16.5%' }
    ];
  }

  private setWorkOrdersRows(workOrderList: WorksManagementDTO[]): void {
    const cent = 100;
    this.worksManagementTable = [];
    workOrderList.forEach((worksManagement) => {
      worksManagement.worksManagementInformationDTOs.forEach((worksManagementInformation) => {
        const workOrder: BidmWorkOrderDTO = worksManagementInformation.bidmWorkOrderDTO;
        if (workOrder.woCode) {
          const jobCardRow: WorksManagementRow = {
            workOrderDTO: workOrder,
            projectDTO: worksManagement.bidmProjectDTO,
            workOrderStatusDetailDTO: worksManagementInformation.workOrderStatusDetailDTO,
            worksManagementDTO: worksManagement,
            worksManagementInformationDTO: worksManagementInformation,
            bidmWorkOrderDataDTO: worksManagementInformation.bidmWorkOrderDataDTO,
            woCodeNumber: Number(workOrder.woCode.slice(2))
          };
          jobCardRow.wpEquipementDTO = worksManagementInformation.wpEquipmentDTO;
          jobCardRow.woEquipementDTO = worksManagementInformation.woEquipmentDTO;
          jobCardRow.wpProgressPercent = (worksManagement.nbCloseWorkOrders / worksManagement.nbTotalWorkOrders) * cent;
          jobCardRow.wpProgressStatus = worksManagement.bidmProjectDTO.statusState
            ? worksManagement.bidmProjectDTO.statusState.slice(2)
            : undefined;
          jobCardRow.assetRepresentation = worksManagementInformation.woEquipmentDTO
            ? BidoEquipmentUtils.toString(worksManagementInformation.woEquipmentDTO, false)
            : BidoEquipmentUtils.toString(worksManagementInformation.wpEquipmentDTO, false);
          jobCardRow.asset = worksManagementInformation.woEquipmentDTO
            ? worksManagementInformation.woEquipmentDTO
            : worksManagementInformation.wpEquipmentDTO;
          jobCardRow.progressStatus = workOrder.calculatedStatus ? workOrder.calculatedStatus.slice(2) : undefined;
          jobCardRow.assignedTo = SelectItemUtils.formatSelectItem(jobCardRow.workOrderDTO.woAssignedTo, this.userList);
          jobCardRow.originText = worksManagementInformation.originText;
          jobCardRow.evolutionType = worksManagementInformation.evolutionType;
          this.worksManagementTableResult.push(jobCardRow);
          this.initializeSearchCriteria(jobCardRow);
          if (this.jobCardRowMatchFilters(jobCardRow)) {
            this.worksManagementTable.push(jobCardRow);
          }
          if (this.worksManagementTable.length > 1) {
            this.worksManagementTable.sort((a, b) => a.woCodeNumber - b.woCodeNumber);
          }
        }
      });
    });
  }

  public openSnLink(equipment: BidoEquipmentDTO): void {
    if (equipment && equipment.equipmentCode) {
      this.pageService.openAsset(equipment.equipmentCode, equipment.equipmentFunction);
    }
  }

  public openWorkPackageLink(wpId: string) {
    this.openWorkPackage(wpId, ComponentOpenMode.Read);
  }

  public openWorkPackage(id: string | undefined, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize({ wpId: id })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkOrderLink(workOrder: BidmWorkOrderDTO): void {
    if (workOrder.woId && workOrder.projectId) {
      const workOrderId: BidmWorkOrderDTOId = {
        woId: workOrder.woId,
        projectId: workOrder.projectId
      };
      this.openWorkOrder(workOrderId, ComponentOpenMode.Read);
    }
  }

  public openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public onReload(): void {
    this.init();
    this.getWorkOrders();
  }

  public consultWorkOrderOrigin(row: WorksManagementRow) {
    if (!!row.originText && row.wpEquipementDTO) {
      const bidmWorkOrderDTO = row.workOrderDTO;
      const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
        woType: bidmWorkOrderDTO.woType,
        woSource: bidmWorkOrderDTO.woSource,
        evolutionType: row.evolutionType,
        familyVariantCode: row.woEquipementDTO
          ? row.woEquipementDTO.familyVariantCode
          : row.wpEquipementDTO.familyVariantCode
      };
      this.worksManagementFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((result) => {
        if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderDTO.woType) {
          if (!!result.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTO = result.bireTaskDTOId as BireTaskDTO;
            this.pageService.openTask(bireTaskDTO);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderDTO.woType) {
          if (BidoEvolutionConstants.CODE_EVOLUTION === row.evolutionType) {
            if (!!result.bireEvolutionDTOId) {
              // open evolution form
              const bireEvolutionDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireEvolutionDTOId
              };
              this.pageService.openEvolution(bireEvolutionDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_AD === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Airworthiness Directive form
              const bireSBDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.pageService.openAD(bireSBDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_SB === row.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Service Bulletin form
              const bireSbDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.pageService.openSB(bireSbDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_MODIFICATION === row.evolutionType) {
            if (!!result.bireModificationDTOId) {
              // open modification form
              const bireModificationDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireModificationDTOId
              };
              this.pageService.openModification(bireModificationDTOId);
            }
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderDTO.woType) {
          if (!!result.bidoNotificationDTOId) {
            // open event form
            this.pageService.openEvent(result.bidoNotificationDTOId);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE === bidmWorkOrderDTO.woType) {
          if (!!result.bidoEquipmentDTO) {
            this.pageService.openAsset(
              result.bidoEquipmentDTO.equipmentCode,
              result.bidoEquipmentDTO.equipmentFunction
            );
          }
        }
      });
    }
  }

  public filterWithCriteria(): void {
    this.worksManagementTable = [];
    this.worksManagementTableResult.forEach((jobCardRow) => {
      if (this.jobCardRowMatchFilters(jobCardRow)) {
        this.worksManagementTable.push(jobCardRow);
      }
    });
  }

  private initializeSearchCriteria(jobCardRow: WorksManagementRow): void {
    if (
      jobCardRow.workOrderStatusDetailDTO &&
      jobCardRow.workOrderStatusDetailDTO.status &&
      !this.criteriaStatusList.includes(jobCardRow.workOrderStatusDetailDTO.status)
    ) {
      this.criteriaStatusList.push(jobCardRow.workOrderStatusDetailDTO.status);
    }

    if (jobCardRow.workOrderDTO.woType && !this.criteriaTypeList.includes(jobCardRow.workOrderDTO.woType)) {
      this.criteriaTypeList.push(jobCardRow.workOrderDTO.woType);
    }
    if (jobCardRow.wpEquipementDTO) {
      if (
        this.searchWPAssetList.filter(
          (item) => jobCardRow.wpEquipementDTO && item.value === jobCardRow.wpEquipementDTO.equipmentCode
        ).length === 0
      ) {
        this.searchWPAssetList.push({
          label: BidoEquipmentUtils.toString(jobCardRow.wpEquipementDTO),
          value: jobCardRow.wpEquipementDTO.equipmentCode
        });
      }
      this.searchWPAssetList.sort(SelectItemUtils.labelSorter);
    }
    if (jobCardRow.woEquipementDTO) {
      if (
        this.searchWOAssetList.filter(
          (item) => jobCardRow.woEquipementDTO && item.value === jobCardRow.woEquipementDTO.equipmentCode
        ).length === 0
      ) {
        this.searchWOAssetList.push({
          label: BidoEquipmentUtils.toString(jobCardRow.woEquipementDTO),
          value: jobCardRow.woEquipementDTO.equipmentCode
        });

        this.searchWOAssetList.sort(SelectItemUtils.labelSorter);
      }
    }
    if (
      this.searchWOCodeList.filter(
        (item) => jobCardRow.woEquipementDTO && item.value === jobCardRow.workOrderDTO.woCode
      ).length === 0
    ) {
      this.searchWOCodeList.push({
        label: jobCardRow.workOrderDTO.woCode,
        value: jobCardRow.workOrderDTO.woCode
      });

      this.searchWOCodeList.sort(SelectItemUtils.labelSorter);
    }
    if (
      jobCardRow.workOrderDTO.woAssignedTo &&
      this.searchUserList.filter(
        (item) => !!jobCardRow.workOrderDTO.woAssignedTo && item.value === jobCardRow.workOrderDTO.woAssignedTo
      ).length === 0
    ) {
      this.searchUserList.push({
        label: SelectItemUtils.formatSelectItem(jobCardRow.workOrderDTO.woAssignedTo, this.userList),
        value: jobCardRow.workOrderDTO.woAssignedTo
      });
      this.searchUserList.sort(SelectItemUtils.labelSorter);
    }
  }

  public jobCardRowMatchFilters(jobCardRow: WorksManagementRow): boolean {
    let statusMatch = true;
    let typeMatch = true;
    let wpAssetMatch = true;
    let woAssetMatch = true;
    let nextDayMatch = true;
    let assignedToMatch = true;
    let woCodeMatch = true;
    let scheduledStartDateMatch = true;
    let scheduledEndDateMatch = true;
    let executionStartDateMatch = true;
    let executionEndDateMatch = true;
    if (
      !ListUtils.isNullOrEmpty(this.searchCriteria.statusList) &&
      jobCardRow.workOrderStatusDetailDTO &&
      jobCardRow.workOrderStatusDetailDTO.status
    ) {
      statusMatch = this.searchCriteria.statusList.includes(jobCardRow.workOrderStatusDetailDTO.status);
    }
    if (!ListUtils.isNullOrEmpty(this.searchCriteria.typeList) && jobCardRow.workOrderDTO.woType) {
      typeMatch = this.searchCriteria.typeList.includes(jobCardRow.workOrderDTO.woType);
    }
    if (this.searchCriteria.woAsset) {
      if (jobCardRow.woEquipementDTO && jobCardRow.woEquipementDTO.equipmentCode === this.searchCriteria.woAsset) {
        woAssetMatch = true;
      } else {
        woAssetMatch = false;
      }
    }
    if (this.searchCriteria.wpAsset) {
      if (jobCardRow.wpEquipementDTO && jobCardRow.wpEquipementDTO.equipmentCode === this.searchCriteria.wpAsset) {
        wpAssetMatch = true;
      } else {
        wpAssetMatch = false;
      }
    }

    if (this.searchCriteria.nextDays) {
      if (
        jobCardRow.projectDTO &&
        jobCardRow.workOrderDTO.woScheduledStartDate &&
        moment(jobCardRow.workOrderDTO.woScheduledStartDate).isAfter(new Date()) &&
        moment(jobCardRow.workOrderDTO.woScheduledStartDate).isBefore(
          moment(new Date()).add(this.searchCriteria.nextDays, 'days')
        )
      ) {
        nextDayMatch = true;
      } else {
        nextDayMatch = false;
      }
    }

    if (this.searchCriteria.assignedTo && this.searchCriteria.assignedTo !== jobCardRow.workOrderDTO.woAssignedTo) {
      assignedToMatch = false;
    }

    if (this.searchCriteria.woCode && this.searchCriteria.woCode !== jobCardRow.workOrderDTO.woCode) {
      woCodeMatch = false;
    }

    if (
      this.searchCriteria.scheduledStartDate &&
      !moment(this.searchCriteria.scheduledStartDate).isSame(jobCardRow.workOrderDTO.woScheduledStartDate, 'day')
    ) {
      scheduledStartDateMatch = false;
    }

    if (
      this.searchCriteria.scheduledEndDate &&
      !moment(this.searchCriteria.scheduledEndDate).isSame(jobCardRow.workOrderDTO.woScheduledEndDate, 'day')
    ) {
      scheduledEndDateMatch = false;
    }

    if (
      this.searchCriteria.executionStartDate &&
      jobCardRow.workOrderStatusDetailDTO &&
      !moment(this.searchCriteria.executionStartDate).isSame(jobCardRow.workOrderStatusDetailDTO.startDate, 'day')
    ) {
      executionStartDateMatch = false;
    }

    if (
      this.searchCriteria.executionEndDate &&
      jobCardRow.workOrderStatusDetailDTO &&
      !moment(this.searchCriteria.executionEndDate).isSame(jobCardRow.workOrderStatusDetailDTO.endDate, 'day')
    ) {
      executionEndDateMatch = false;
    }

    return (
      statusMatch &&
      typeMatch &&
      wpAssetMatch &&
      woAssetMatch &&
      nextDayMatch &&
      assignedToMatch &&
      woCodeMatch &&
      executionEndDateMatch &&
      executionStartDateMatch &&
      scheduledStartDateMatch &&
      scheduledEndDateMatch
    );
  }

  public initializeFilters(): void {
    this.searchCriteria = {
      statusList: this.criteriaStatusList,
      typeList: this.criteriaTypeList,
      assignedTo: '',
      woAsset: '',
      wpAsset: '',
      woCode: ''
    };
  }

  public resetTableFilters(): void {
    this.initializeFilters();
    this.filterWithCriteria();
  }

  public manageButtonDisplay(): void {
    this.showCloseWoBtn = false;
    this.showCloseWpBtn = false;
    this.showControlWoBtn = false;
    if (this.selectedWorkOrders.length > 0) {
      this.showCloseWoBtn = true;
      this.showCloseWpBtn = true;
      this.showControlWoBtn = true;
      this.selectedWorkOrders.forEach((row) => {
        if (row.workOrderDTO.calculatedStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED) {
          if (row.workOrderStatusDetailDTO.isCritical && row.workOrderStatusDetailDTO.bidmOperationDataList) {
            if (
              row.workOrderStatusDetailDTO.bidmOperationDataList.filter(
                (ope) => ope.opeStatus !== AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED
              ).length > 0
            ) {
              this.showControlWoBtn = false;
            }
            if (
              row.workOrderStatusDetailDTO.bidmOperationDataList.filter(
                (ope) => ope.opeStatus !== AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
              ).length > 0
            ) {
              this.showCloseWoBtn = false;
            }
          } else {
            this.showControlWoBtn = false;
          }
        } else {
          this.showCloseWoBtn = false;
          this.showControlWoBtn = false;
        }
        if (row.projectDTO.statusState !== AWPropertiesConstants.AIRM_PROJECT_STATUS_PERFORMED) {
          this.showCloseWpBtn = false;
        }
      });
    }
  }
}
