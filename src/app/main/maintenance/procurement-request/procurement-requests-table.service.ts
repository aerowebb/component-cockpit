import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../shared/api/aircraft-maintenance.api';
import { AMProjectManagementApi } from '../../../shared/api/am-project-management.api';
import { BidtProcurementRequestApi } from '../../../shared/api/bidt-procurement-request.api';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindMaterialAvailabilityInput } from '../../../shared/types/api-input-types/logistic/find-proc-req-items-and-stock-quantity-input.interface';
import { CalculateWorkOrderImput } from '../../../shared/types/api-input-types/work-order/calculate-work-order-input.interface';
import { CalculateWorkOrderOutput } from '../../../shared/types/api-output-types/calculate-work-order-output.interface';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmProjectDTOId } from '../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../shared/types/api-types/bidm-work-order-dto.interface';

@Injectable()
export class ProcurementRequestsTableService extends AbstractAwHttpService {
  public readonly componentName = ComponentConstants.MAI_PROCUREMENT_REQUESTS_TABLE;
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly procurementRequestApi: BidtProcurementRequestApi,
    private readonly aMProjectManagementApi: AMProjectManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    protected readonly translateService: TranslateService
  ) {
    super(http, appConfigService);
  }

  public findProcReqItemsAndStockQuantityIndicators(
    bidmWorkOrder: BidmWorkOrderDTO | undefined,
    workPackageDTOIdsTab: BidmProjectDTOId[] | undefined
  ): Observable<ProcurementRequestAndIndicatorsOutputDTO[]> {
    let input: FindMaterialAvailabilityInput = {};
    if (!!bidmWorkOrder) {
      input = {
        workOrdersIds: [{ woId: bidmWorkOrder.woId as string, projectId: bidmWorkOrder.projectId as string }]
      };
    }
    if (!!workPackageDTOIdsTab && workPackageDTOIdsTab.length > 0) {
      input = { ...input, workPackagesIds: workPackageDTOIdsTab };
    }

    return super.post<FindMaterialAvailabilityInput, ProcurementRequestAndIndicatorsOutputDTO[]>(
      this.procurementRequestApi.findProcurementRequestStockQuantityIndicators,
      input
    );
  }

  public findBidmProject(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.aMProjectManagementApi.findBidmProject, projectId);
  }

  public calculateWorkOrderStatus(input: CalculateWorkOrderImput): Observable<CalculateWorkOrderOutput> {
    return super.post<CalculateWorkOrderImput, CalculateWorkOrderOutput>(
      this.aircraftMaintenanceApi.calculateWorkOrderStatus,
      input
    );
  }
}
