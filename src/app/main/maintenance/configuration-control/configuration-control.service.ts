import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { WorkOrderManagementApi } from '../../..//shared/api/work-order-management.api';
import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../shared/api/am-project-management.api';
import { AssetManagementApi } from '../../../shared/api/asset-management.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureBusinessApi } from '../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindCsnAndTsnValuesInput } from '../../../shared/types/api-input-types/airworthiness-management/find-csn-and-tsn-values-input.interface';
import { ControlConfigurationInput } from '../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { DismantleOneEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/dismantle-one-equipment-input.interface';
import { GetFunctionLocationListToInstallEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/get-function-location-list-to-install-equipment-input.interface';
import { GetItemListToInstallEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/get-item-list-to-install-equipment-input.interface';
import { InstallOneEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/install-one-equipment-input.interface';
import { FindBidoEquipmentByEquipmentCodeFromDateInput } from '../../../shared/types/api-input-types/fleet-history/find-bido-equipment-by-equipment-code-from-date-input.interface';
import { FindBidoEquipmentSuperiorAssetInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-equipment-superior-asset-input';
import { FindBidoFlEquipmentByEquipmentCodeFromDateInput } from '../../../shared/types/api-input-types/fleet-management/find-bido-fl-equipment-by-equipment-code-from-date-input.interface';
import { FindCsnAndTsnValuesOutput } from '../../../shared/types/api-output-types/airworthiness-management/find-csn-and-tsn-values-output.interface';
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
import { BidoFlDTOId } from '../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoFlEquipmentDTO } from '../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtStockMvtDTO } from '../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { FileContentDTO } from '../../../shared/types/api-types/file-content-dto.interface';
import { WorkOrderManagementInputDTO } from '../../../shared/types/api-types/work-order-management-input-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { ObjectUtils } from '../../../shared/utils/object-utils';

@Injectable()
export class ConfigurationControlService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly serializationService: SerializationService,
    private readonly workOrderManagementApi: WorkOrderManagementApi,
    private readonly tabService: TabService
  ) {
    super(http, appConfigService);
  }

  public getAssetAtDate(equipmentCode: string, notificationCode: string): Observable<BidoEquipmentDTO | undefined> {
    return this.findBidoNotification({ notificationCode }).pipe(
      concatMap((notification) => {
        return ObjectUtils.isDefined(notification.reportingPeriodStartDate)
          ? this.findBidoEquipmentByEquipmentCodeFromDate({
              equipmentCode,
              notificationStartDate: notification.reportingPeriodStartDate as Date
            })
          : of(undefined);
      })
    );
  }

  public getFunctionLocationLabel(bidoNotificationDTO: BidoNotificationDTO): Observable<string> {
    return super.post<BidoNotificationDTO, string>(
      this.fleetManagementApi.getFunctionLocationLabel,
      bidoNotificationDTO
    );
  }

  public getFunctionLocationAtDate(equipmentCode: string, notificationCode: string): Observable<string | undefined> {
    return this.findBidoNotification({ notificationCode }).pipe(
      concatMap((notification) => {
        return ObjectUtils.isDefined(notification.reportingPeriodStartDate)
          ? this.getFunctionLocationLabel({
              reportingPeriodStartDate: notification.reportingPeriodStartDate as Date,
              equipmentCode,
              bidoNotificationTypeDTO: {}
            })
          : of(undefined);
      })
    );
  }

  public openEvent(notificationCode: string | undefined) {
    const objectId: BidoNotificationDTOId = {
      notificationCode: notificationCode as string
    };
    const data: PageComponentData = {
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      id: this.tabService.generateId(),
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openFunctionalLocationAssignment(equipment: BidoEquipmentDTO) {
    const data: PageComponentData = {
      componentId: 'FunctionalLocationAssignmentComponent',
      id: this.tabService.generateId(),
      objectId: this.serializationService.serialize(equipment),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkOrder(workOrder: BidmWorkOrderDTO | undefined): void {
    if (workOrder) {
      const objectId: BidmWorkOrderDTOId = {
        projectId: workOrder.projectId as string,
        woId: workOrder.woId as string
      };
      const data: PageComponentData = {
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        id: this.tabService.generateId(),
        objectId: this.serializationService.serialize(objectId),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findWorkOrder(input: BidmWorkOrderDTOId): Observable<BidmWorkOrderDTO> {
    return super.post<BidmWorkOrderDTOId, BidmWorkOrderDTO>(this.aircraftMaintenanceApi.findBidmWorkOrder, input);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findCsnAndTsnValues(input: FindCsnAndTsnValuesInput): Observable<FindCsnAndTsnValuesOutput> {
    return super.post<FindCsnAndTsnValuesInput, FindCsnAndTsnValuesOutput>(
      this.airworthinessManagementApi.findCsnAndTsnValues,
      input
    );
  }

  /**************************************************************************
   * Am project management api
   *************************************************************************/

  public createBidmProjectAttribute(input: BidmProjectAttributeDTO): Observable<BidmProjectAttributeDTO> {
    return super.post<BidmProjectAttributeDTO, BidmProjectAttributeDTO>(
      this.amProjectManagementApi.createBidmProjectAttribute,
      input
    );
  }

  public findBidmProject(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  public findBidmProjectAttributesByWorkOrder(input: BidmProjectDTOId): Observable<BidmProjectAttributeDTO[]> {
    return super.post<BidmProjectDTOId, BidmProjectAttributeDTO[]>(
      this.amProjectManagementApi.findBidmProjectAttributesByWorkOrder,
      input
    );
  }

  public generateEASACertificate(bidmProjectReportDTOId: BidmProjectReportDtoId): Observable<FileContentDTO> {
    return super.post<BidmProjectReportDtoId, FileContentDTO>(
      this.amProjectManagementApi.generateEASACertificate,
      bidmProjectReportDTOId
    );
  }

  public generateFAACertificate(bidmProjectReportDTOId: BidmProjectReportDtoId): Observable<FileContentDTO> {
    return super.post<BidmProjectReportDtoId, FileContentDTO>(
      this.amProjectManagementApi.generateFAACertificate,
      bidmProjectReportDTOId
    );
  }

  public removeBidmProjectAttribute(input: string): Observable<void> {
    return super.post<string, void>(this.amProjectManagementApi.removeBidmProjectAttribute, input);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public getById(input: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWarehouseDTO>(this.bidtWarehouseApi.getById, input);
  }

  public findAllWarehouseForRemoval(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(this.bidtWarehouseApi.findAllWarehouseForRemoval, input);
  }

  public findAllWarehouseForRemovalWithData(input: string): Observable<LabelValue<BidtWarehouseDTO>[]> {
    return super.post<string, LabelValue<BidtWarehouseDTO>[]>(
      this.bidtWarehouseApi.findAllWarehouseForRemovalWithData,
      input
    );
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public controlConfiguration(input: ControlConfigurationInput): Observable<ControlConfigurationOutput> {
    return super.post<ControlConfigurationInput, ControlConfigurationOutput>(
      this.fleetBusinessApi.controlConfiguration,
      input
    );
  }

  public dismantleEquipment(input: DismantleOneEquipmentInput): Observable<BidtStockMvtDTO> {
    return super.post<DismantleOneEquipmentInput, BidtStockMvtDTO>(this.fleetBusinessApi.dismantleOneEquipment, input);
  }

  public getItemListToInstallEquipment(
    input: GetItemListToInstallEquipmentInput
  ): Observable<LabelValue<BireItemDTO>[]> {
    return super.post<GetItemListToInstallEquipmentInput, LabelValue<BireItemDTO>[]>(
      this.fleetBusinessApi.getItemListToInstallEquipment,
      input
    );
  }

  public getFunctionLocationListToInstallEquipment(
    input: GetFunctionLocationListToInstallEquipmentInput
  ): Observable<LabelValue<BidoFlDTO>[]> {
    return super.post<GetFunctionLocationListToInstallEquipmentInput, LabelValue<BidoFlDTO>[]>(
      this.fleetBusinessApi.getFunctionLocationListToInstallEquipment,
      input
    );
  }

  public installEquipment(input: InstallOneEquipmentInput): Observable<BidtStockMvtDTO> {
    return super.post<InstallOneEquipmentInput, BidtStockMvtDTO>(this.fleetBusinessApi.installOneEquipment, input);
  }

  /**************************************************************************
   * Fleet history api
   *************************************************************************/

  public findBidoEquipmentByEquipmentCodeFromDate(
    input: FindBidoEquipmentByEquipmentCodeFromDateInput
  ): Observable<BidoEquipmentDTO> {
    return super.post<FindBidoEquipmentByEquipmentCodeFromDateInput, BidoEquipmentDTO>(
      this.fleetHistoryApi.findBidoEquipmentByEquipmentCodeFromDate,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findBidoEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public findBidoEquipmentLabelValue(input: BidoEquipmentDTOId): Observable<LabelValue<BidoEquipmentDTO>> {
    return super.post<BidoEquipmentDTOId, LabelValue<BidoEquipmentDTO>>(
      this.fleetManagementApi.findBidoEquipmentLabelValue,
      input
    );
  }

  public findBidoEquipmentSuperiorAsset(
    input: FindBidoEquipmentSuperiorAssetInput
  ): Observable<LabelValue<BidoEquipmentDTO>[]> {
    return super.post<FindBidoEquipmentSuperiorAssetInput, LabelValue<BidoEquipmentDTO>[]>(
      this.fleetManagementApi.findBidoEquipmentSuperiorAsset,
      input
    );
  }

  public findBidoFl(bidoNotificationDTOId: BidoFlDTOId): Observable<BidoFlDTO> {
    return super.post<BidoFlDTOId, BidoFlDTO>(this.fleetManagementApi.findBidoFl, bidoNotificationDTOId);
  }

  public findBidoFlEquipmentByEquipmentCodeFromDate(
    bidoNotificationDTOId: FindBidoFlEquipmentByEquipmentCodeFromDateInput
  ): Observable<BidoFlEquipmentDTO> {
    return super.post<FindBidoFlEquipmentByEquipmentCodeFromDateInput, BidoFlEquipmentDTO>(
      this.fleetManagementApi.findBidoFlEquipmentByEquipmentCodeFromDate,
      bidoNotificationDTOId
    );
  }

  public findBidoNotification(bidoNotificationDTOId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      bidoNotificationDTOId
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public getStandardCycleCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardCycleCounterLabel);
  }

  public getStandardTimeCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardTimeCounterLabel);
  }

  /**********************
   * Asset management api
   *********************/

  public getLLPPotential(equipmentCode: string): Observable<FindBidoCounterReferencesByEquipmentCodeOutput[]> {
    return super.post<string, FindBidoCounterReferencesByEquipmentCodeOutput[]>(
      this.assetManagementApi.getLLPPotential,
      equipmentCode
    );
  }

  /********************************
   * Product Structure Business API
   *******************************/

  public getADCompliance(input: BidoEquipmentDTO): Observable<ADComplianceOutput[]> {
    return super.post<BidoEquipmentDTO, ADComplianceOutput[]>(this.productStructureBusinessApi.getADCompliance, input);
  }

  public getStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }

  public createWorkPackage(input: WorkOrderManagementInputDTO): Observable<void> {
    return super.post<WorkOrderManagementInputDTO, void>(this.workOrderManagementApi.create, input);
  }
}
