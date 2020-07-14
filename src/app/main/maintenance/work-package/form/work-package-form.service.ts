import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { SelectItem, TreeNode } from 'primeng/api';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { BidtStockMvtApi } from '../../../../shared/api/bidt-stock-mvt.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ControlStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/control-stock-input.interface';
import { GetQuantityInStockBySiteOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-quantity-in-stock-by-site-output.interface';
import { BidmDocumentDTOId } from '../../../../shared/types/api-types/bidm-document-dto-id.interface';
import { BidmDocumentDTO } from '../../../../shared/types/api-types/bidm-document-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';

import { AircraftMaintenanceApi } from './../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from './../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from './../../../../shared/api/am-project-management.api';
import { FleetBusinessApi } from './../../../../shared/api/fleet-business.api';
import { ProjectManagementApi } from './../../../../shared/api/project-management.api';
import { TaskManagementApi } from './../../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from './../../../../shared/api/user-profile-business.api';
import { GenericPropertyConstants as gpc } from './../../../../shared/constants/generic-property-constants';
import { DateService } from './../../../../shared/services/date.service';
import { ControlConfigurationInput } from './../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { CreateWorkbenchInspectionDTO } from './../../../../shared/types/api-input-types/maintenance-component-cockpit/create-workbench-inspection-dto.interface';
import { ControlConfigurationOutput } from './../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidmProjectDTOId } from './../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from './../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from './../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidoEquipmentDTO } from './../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireReturnReasonDTO } from './../../../../shared/types/api-types/bire-return-reason-dto.interface';
import { BsdeProjectDTO } from './../../../../shared/types/api-types/bsde-project-dto.interface';
import { ArrayUtils } from './../../../../shared/utils/array-utils';
import { NumberUtils } from './../../../../shared/utils/number-utils';
import { SelectItemUtils } from './../../../../shared/utils/select-item-utils';
import { StringUtils } from './../../../../shared/utils/string-utils';
import { WorkPackageService } from './../work-package.service';

export interface WorkOrderRow {
  woId?: string;
  projectId?: string;
  code: string;
  description: string;
  type: string;
  woType: string;
  origin?: string;
  asset?: string;
  status: string;
  statusPercent?: number;
  statusCrititicy?: string;
  progress?: string;
  startDate?: string;
  endDate?: string;
  assignedTo?: string;
  componentCockpit?: number;
  WTY?: boolean;
  openingDate?: string;
  closingDate?: string;
  checkedBy?: string;
  checkedOn?: string;
  comments?: string;
  relatedItem?: string;
  zone?: string;
  standardDuration?: string;
  standardCost?: string;
  qualification?: string;
  planWorkload?: string;
  planDuration?: string;
  planTotalCost?: string;
  planLaborCost?: string;
  planMaterialCost?: string;
  planSubcontractCost?: string;
  Workload?: string;
  Duration?: string;
  TotalCost?: string;
  LaborCost?: string;
  MaterialCost?: string;
  SubcontractingCost?: string;
  bidmWorkOrder: BidmWorkOrderDTO;
  familyVariantCode?: string;
  bidoEquipmentData?: BidoEquipmentDTO;
  materialIllustration?: SafeResourceUrl;
  componentCockpitText?: string;
}

@Injectable()
export class WorkPackageFormService extends AbstractAwHttpService {
  private readonly _woStatusList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woStatusList$ = this._woStatusList.asObservable();

  private readonly _woTypeList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woTypeList$ = this._woTypeList.asObservable();

  private readonly _userList = new BehaviorSubject<SelectItem[]>([]);
  public readonly userList$ = this._userList.asObservable();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtStockMvtApi: BidtStockMvtApi,
    private readonly dateService: DateService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly wpService: WorkPackageService,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly projectManagementApi: ProjectManagementApi
  ) {
    super(http, appConfigService);
  }

  public createBidmProject(bidmProjectDTO: BidmProjectDTO): Observable<BidmProjectDTOId> {
    return super
      .post<BidmProjectDTO, BidmProjectDTOId>(this.amProjectManagementApi.createBidmProject, bidmProjectDTO)
      .pipe(map((res) => res));
  }

  public updateBidmProject(bidmProjectDTO: BidmProjectDTO): Observable<string> {
    return super
      .post<BidmProjectDTO, string>(this.amProjectManagementApi.updateBidmProject, bidmProjectDTO)
      .pipe(map((res) => res));
  }

  public checkAcrsEventForBidmProject(bidmProjectDTO: BidmProjectDTO): Observable<boolean> {
    return super
      .post<BidmProjectDTO, boolean>(this.amProjectManagementApi.checkAcrsEventForBidmProject, bidmProjectDTO)
      .pipe(map((res) => res));
  }

  public updateBidmWorkOrders(bidmWorkOrderList: BidmWorkOrderDTO[]): Observable<void> {
    return super.post<BidmWorkOrderDTO[], void>(this.aircraftMaintenanceApi.updateBidmWorkOrders, bidmWorkOrderList);
  }

  public getLocalCurrency(): Observable<string> {
    return super
      .post<void, string>(this.taskManagementApi.getLocalCurrency)
      .pipe(map((res) => res.substr(res.indexOf('('))));
  }

  public findBidmProject(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  public findReturnReasons(): Observable<BireReturnReasonDTO[]> {
    return super.post<string, BireReturnReasonDTO[]>(this.taskManagementApi.findAllBireReturnReasons, undefined);
  }

  public getBidmWorkOrdersByProject(projectId: string): Observable<BidmWorkOrderDataDTO[]> {
    const projectIdDto: BidmProjectDTOId = { projectId };

    return super.post<BidmProjectDTOId, BidmWorkOrderDataDTO[]>(
      this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
      projectIdDto
    );
  }

  public findBidoEquipment(equipmentId: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, equipmentId);
  }

  public getBidmWorkOrdersStructureByProject(projectId: string): Observable<TreeNode[]> {
    const projectIdDto: BidmProjectDTOId = { projectId };

    return forkJoin({
      woTypeList: this.wpService.loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP),
      woStatusList: this.wpService.loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP),
      userList: this.wpService.loadUserList()
    }).pipe(
      mergeMap(({ woTypeList, woStatusList, userList }) => {
        return super
          .post<BidmProjectDTOId, BidmWorkOrderDataDTO[]>(
            this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
            projectIdDto
          )
          .pipe(
            map((woList) => {
              this._woStatusList.next(woStatusList);
              this._woTypeList.next(woTypeList);
              this._userList.next(userList);

              return this.getWo(woList, woTypeList, woStatusList, userList);
            })
          );
      })
    );
  }

  public getBidmWorkOrdersStructure(woListInput: BidmWorkOrderDTOId[]): Observable<TreeNode[]> {
    return forkJoin({
      woTypeList: this.wpService.loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP),
      woStatusList: this.wpService.loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP),
      userList: this.wpService.loadUserList()
    }).pipe(
      mergeMap(({ woTypeList, woStatusList, userList }) => {
        return super
          .post<BidmWorkOrderDTOId[], BidmWorkOrderDataDTO[]>(
            this.aircraftMaintenanceApi.getBidmWorkOrdersStructure,
            woListInput
          )
          .pipe(
            map((woList) => {
              this._woStatusList.next(woStatusList);
              this._woTypeList.next(woTypeList);
              this._userList.next(userList);

              return this.getWo(woList, woTypeList, woStatusList, userList);
            })
          );
      })
    );
  }

  private getWo(
    woList: BidmWorkOrderDataDTO[],
    woTypeList: SelectItem[],
    woStatusList: SelectItem[],
    userList: SelectItem[]
  ): TreeNode[] {
    return !!woList
      ? woList.map((wo: BidmWorkOrderDataDTO) => {
          const data: WorkOrderRow = {
            woId: wo.bidmWorkOrder.woId,
            projectId: wo.bidmWorkOrder.projectId,
            code: StringUtils.orEmpty(wo.bidmWorkOrder.woCode),
            description: StringUtils.isNullOrEmpty(wo.workOrderStatusDetail.taskDesignation)
              ? StringUtils.orEmpty(wo.bidmWorkOrder.woDescription)
              : StringUtils.orEmpty(wo.workOrderStatusDetail.taskDesignation),
            type: SelectItemUtils.formatSelectItem(wo.bidmWorkOrder.woType, woTypeList),
            woType: StringUtils.orEmpty(wo.bidmWorkOrder.woType),
            origin: wo.workOrderStatusDetail.taskType
              ? `${wo.bidmWorkOrder.woSourceText} (${wo.workOrderStatusDetail.taskType})`
              : wo.bidmWorkOrder.woSourceText,
            asset: wo.assetRepresentation,
            status: StringUtils.orEmpty(wo.workOrderStatusDetail.status),
            statusPercent: parseInt(wo.statusPercent, 10),
            statusCrititicy: wo.workOrderStatusDetail.status ? wo.workOrderStatusDetail.status.slice(2) : '',
            startDate: this.dateService.dateToString(wo.bidmWorkOrder.woScheduledStartDate),
            endDate: this.dateService.dateToString(wo.bidmWorkOrder.woScheduledEndDate),
            assignedTo: SelectItemUtils.formatSelectItem(wo.bidmWorkOrder.woAssignedTo, userList),
            componentCockpit: wo.bidmWorkOrder.bsdeProjectNumber,
            WTY: wo.bidmWorkOrder.underWarranty ? true : false,
            openingDate: this.dateService.dateToString(wo.workOrderStatusDetail.startDate),
            closingDate: this.dateService.dateToString(wo.workOrderStatusDetail.endDate),
            checkedBy: SelectItemUtils.formatSelectItem(wo.bidmWorkOrder.woCheckedBy, userList),
            checkedOn: this.dateService.dateToString(wo.bidmWorkOrder.woCheckedOn),
            comments: wo.bidmWorkOrder.woComments,
            relatedItem: wo.relatedItem,
            zone: wo.workOrderStatusDetail.taskZone,
            standardDuration: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalDuration),
            standardCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalOpeCosts),
            qualification: wo.qualificationNeeded,
            planWorkload: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalWorkload),
            planDuration: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalDuration),
            planTotalCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalTotalCost),
            planLaborCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.theoreticalLaborCost),
            planMaterialCost: this.roundNumberToString(
              wo.workOrderStatusDetail.costAndDuration.theoreticalMaterialCost
            ),
            planSubcontractCost: this.roundNumberToString(
              wo.workOrderStatusDetail.costAndDuration.theoreticalSubcontractingCost
            ),
            Workload: '', // '#TODO ABT: Column Workload not filled yet'
            Duration: '', // '#TODO ABT: Column Duration not filled yet'
            TotalCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.realTotalCost),
            LaborCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.laborCost),
            MaterialCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.materialCost),
            SubcontractingCost: this.roundNumberToString(wo.workOrderStatusDetail.costAndDuration.subcontractingCost),
            familyVariantCode: !!wo.workOrderStatusDetail.bidoEquipmentData
              ? wo.workOrderStatusDetail.bidoEquipmentData.familyVariantCode
              : '',
            bidmWorkOrder: wo.bidmWorkOrder,
            bidoEquipmentData: wo.workOrderStatusDetail.bidoEquipmentData,
            componentCockpitText: wo.componentCockpitText
          };
          const children = wo.bidmWorkOrderDataList
            ? this.getWo(wo.bidmWorkOrderDataList, woTypeList, woStatusList, userList)
            : [];

          return { data, children };
        })
      : [];
  }

  public loadReturnReasons(): Observable<SelectItem[]> {
    return this.findReturnReasons().pipe(
      map((results) => {
        return !!results
          ? results
              .map((reason) => {
                return {
                  label: `${reason.returnReasonCode} - ${reason.returnReasonName}`,
                  value: reason.returnReasonCode
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  private roundNumberToString(value: number | undefined): string {
    return value ? NumberUtils.toString(NumberUtils.roundNumber(value)) : '0';
  }

  public controlConfiguration(input: ControlConfigurationInput): Observable<ControlConfigurationOutput> {
    return super.post<ControlConfigurationInput, ControlConfigurationOutput>(
      this.fleetBusinessApi.controlConfiguration,
      input
    );
  }

  public controlStock(input: ControlStockInput): Observable<GetQuantityInStockBySiteOutput[]> {
    return super.post<ControlStockInput, GetQuantityInStockBySiteOutput[]>(this.bidtStockMvtApi.controlStock, input);
  }

  public findBidmProjectWithLinkedObjects(input: BidmProjectDTOId): Observable<BidmProjectDTO> {
    return super.post<BidmProjectDTOId, BidmProjectDTO>(
      this.amProjectManagementApi.findBidmProjectWithLinkedObjects,
      input
    );
  }

  public calculateBidmProjectStatus(input: BidmProjectDTO): Observable<string> {
    return super.post<BidmProjectDTO, string>(this.airworthinessManagementApi.calculateBidmProjectStatus, input);
  }

  public createBidmDocument(input: BidmDocumentDTO): Observable<BidmDocumentDTOId> {
    return super.post<BidmDocumentDTO, BidmDocumentDTOId>(this.aircraftMaintenanceApi.createBidmDocument, input);
  }

  public findBidmDocumentsByProject(input: BidmProjectDTOId): Observable<BidmDocumentDTO[]> {
    return super.post<BidmProjectDTOId, BidmDocumentDTO[]>(
      this.aircraftMaintenanceApi.findBidmDocumentsByProject,
      input
    );
  }

  public removeBidmDocument(input: BidmDocumentDTOId): Observable<void> {
    return super.post<BidmDocumentDTOId, void>(this.aircraftMaintenanceApi.removeBidmDocument, input);
  }

  public getBsdeProjectData(projectNumber: string): Observable<BsdeProjectDTO> {
    return super.post<string, BsdeProjectDTO>(this.amProjectManagementApi.getBsdeProjectData, projectNumber);
  }

  public createWorkbenchInspection(input: CreateWorkbenchInspectionDTO): Observable<BsdeProjectDTO> {
    return super.post<CreateWorkbenchInspectionDTO, BsdeProjectDTO>(
      this.amProjectManagementApi.createWorkbenchInspection,
      input
    );
  }

  public isBuildingBlockInstalled(buildingBlock: string): Observable<boolean> {
    return super.post<string, boolean>(this.userProfileBusinessApi.isBuildingBlockInstalled, buildingBlock);
  }

  public getBsdeProjectListByPnAndSn(input: BidoEquipmentDTO): Observable<BsdeProjectDTO[]> {
    return super.post<BidoEquipmentDTO, BsdeProjectDTO[]>(this.projectManagementApi.findBsdeProjectsByPnAndSn, input);
  }
}
