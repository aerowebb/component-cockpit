import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { RecordReportOutput } from '../../../../shared/types/api-output-types/fleet-management/record-report-output.interface';
import { WorkOrderStructureOutput } from '../../../../shared/types/api-output-types/work-order-structure-output.interface';
import { BidmProjectAttributeDTO } from '../../../../shared/types/api-types/bidm-project-attribute-dto.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { ReportMessage } from '../../../../shared/types/api-types/report-message.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class UpdateLogbookFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly propertiesService: PropertiesService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidmProjectWithAttributesId(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProjectWithAttributesId, projectId);
  }

  public loadWorkPackageStatusList(): Observable<SelectItem[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).pipe(
      map((results) => {
        const statusList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return statusList.filter(
          (status) =>
            status.value !== AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED &&
            status.value !== AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
        );
      })
    );
  }

  public loadWorkOrderStatusList(): Observable<SelectItem[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_OPERATION_STATUS_MAP).pipe(
      map((results) => {
        const statusList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return statusList.filter(
          (status) =>
            status.value !== AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED &&
            status.value !== AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
        );
      })
    );
  }

  public getBidmWorkOrdersStructureByProject(projectId: string): Observable<BidmWorkOrderDataDTO[]> {
    const projectIdDto: BidmProjectDTOId = { projectId };

    return super.post<BidmProjectDTOId, BidmWorkOrderDataDTO[]>(
      this.aircraftMaintenanceApi.getBidmWorkOrdersStructureByProject,
      projectIdDto
    );
  }

  public getWorkOrdersForLogbookUpdate(projectId: string): Observable<WorkOrderStructureOutput[]> {
    const projectIdDto: BidmProjectDTOId = { projectId };

    return super.post<BidmProjectDTOId, WorkOrderStructureOutput[]>(
      this.aircraftMaintenanceApi.getWorkOrdersForLogbookUpdate,
      projectIdDto
    );
  }

  public findBidoEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public updateMaintenancePlanFromWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTO): Observable<ReportMessage[]> {
    return super.post<BidmWorkOrderDTO, ReportMessage[]>(
      this.aircraftMaintenanceApi.updateMaintenancePlanFromWorkOrder,
      bidmWorkOrderDTOId
    );
  }

  public loadMROCenterList(): Observable<SelectItem[]> {
    return this.findAuthorizedBireSite().pipe(
      map((results) => {
        const mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return mroCenterList.map((mro) => {
          mro.label = mro.label ? `${mro.label} (${mro.value})` : mro.value;

          return mro;
        });
      })
    );
  }

  private findAuthorizedBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAuthorizedBireSite);
  }

  public loadUserList(): Observable<SelectItem[]> {
    return this.findUsersWithUseCase().pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.firstname} ${user.lastname}`,
                  value: user.userId
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  public recordAllEvents(bidmWorkOrderDTO: BidmWorkOrderDTO[]): Observable<RecordReportOutput[]> {
    return super.post<BidmWorkOrderDTO[], RecordReportOutput[]>(
      this.aircraftMaintenanceApi.recordAllEvents,
      bidmWorkOrderDTO
    );
  }

  public createBidmProjectAttribute(input: BidmProjectAttributeDTO): Observable<BidmProjectAttributeDTO> {
    return super.post<BidmProjectAttributeDTO, BidmProjectAttributeDTO>(
      this.amProjectManagementApi.createBidmProjectAttribute,
      input
    );
  }

  public removeBidmProjectAttribute(input: string): Observable<void> {
    return super.post<string, void>(this.amProjectManagementApi.removeBidmProjectAttribute, input);
  }
}
