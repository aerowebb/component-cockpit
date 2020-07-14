import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ProcurementRequestsTableService } from '../procurement-requests-table.service';

export interface MaterialAvailabilityIndicators {
  nbProcReqItemsOk: number;
  nbProcReqItemsNOk: number;
  nbProcReqItemsWarning: number;
}

@Component({
  selector: 'aw-material-availability-indicators',
  styleUrls: ['./material-availability-indicators.component.scss'],
  templateUrl: './material-availability-indicators.component.html'
})
export class MaterialAvailabilityIndicatorsComponent extends GenericComponent {
  public bidmWorkOrder: BidmWorkOrderDTO;
  public workPackageDTOIdsTab: BidmProjectDTOId[];
  public materialAvailabilityIndicators: MaterialAvailabilityIndicators;
  public procurementRequestsTab: ProcurementRequestAndIndicatorsOutputDTO[];
  public isLoadingProcurementRequestData: boolean;

  @Input()
  public set workOrder(workOrderDTO: BidmWorkOrderDTO) {
    if (!!workOrderDTO) {
      this.bidmWorkOrder = workOrderDTO;
      this.loadProcurementRequestAndQuantity();
    }
  }

  @Input()
  public set workPackages(workPackagesDTO: BidmProjectDTO[]) {
    if (!ListUtils.isNullOrEmpty(workPackagesDTO)) {
      this.workPackageDTOIdsTab = workPackagesDTO.map((workPackageDTO: BidmProjectDTO) => {
        return {
          projectId: workPackageDTO.projectId as string
        };
      });
      this.loadProcurementRequestAndQuantity();
    }
  }

  @Input()
  public set workPackageIds(workPackagesId: string[]) {
    if (!ListUtils.isNullOrEmpty(workPackagesId)) {
      this.workPackageDTOIdsTab = workPackagesId.map((workPackageId: string) => {
        return {
          projectId: workPackageId as string
        };
      });
      this.loadProcurementRequestAndQuantity();
    }
  }

  @Input()
  public set procurementRequests(procurementRequests: ProcurementRequestAndIndicatorsOutputDTO[]) {
    if (!ListUtils.isNullOrEmpty(procurementRequests)) {
      this.procurementRequestsTab = procurementRequests;
      this.loadProcurementRequestAndQuantity();
    }
  }

  public constructor(private readonly procurementRequestsTableService: ProcurementRequestsTableService) {
    super(ComponentOpenMode.Read);
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MATERIAL_AVAILABILITY_INDICATORS;
  }

  public init(): void {
    this.isLoadingProcurementRequestData = false;
    this.materialAvailabilityIndicators = {
      nbProcReqItemsOk: 0,
      nbProcReqItemsNOk: 0,
      nbProcReqItemsWarning: 0
    };
  }

  public loadProcurementRequestAndQuantity(): void {
    if (!ListUtils.isNullOrEmpty(this.procurementRequestsTab)) {
      this.computeMaterialAvailabilityIndicators(this.procurementRequestsTab);
    } else {
      this.isLoadingProcurementRequestData = true;
      this.procurementRequestsTableService
        .findProcReqItemsAndStockQuantityIndicators(this.bidmWorkOrder, this.workPackageDTOIdsTab)
        .pipe(finalize(() => (this.isLoadingProcurementRequestData = false)))
        .subscribe((results: ProcurementRequestAndIndicatorsOutputDTO[]) => {
          this.computeMaterialAvailabilityIndicators(results);
        });
    }
  }

  private computeMaterialAvailabilityIndicators(results: ProcurementRequestAndIndicatorsOutputDTO[]) {
    let nbProcReqItemsOk = 0;
    let nbProcReqItemsNOk = 0;
    let nbProcReqItemsWarning = 0;
    results.forEach((procReq: ProcurementRequestAndIndicatorsOutputDTO) => {
      if (!!procReq.procReqItemsAndQtyIndicatorsDTO) {
        procReq.procReqItemsAndQtyIndicatorsDTO.forEach((item) => {
          if (item.ok) {
            nbProcReqItemsOk++;
          } else if (item.nok) {
            nbProcReqItemsNOk++;
          } else if (item.warning) {
            nbProcReqItemsWarning++;
          }
        });
      }
    });
    this.materialAvailabilityIndicators = {
      nbProcReqItemsOk,
      nbProcReqItemsNOk,
      nbProcReqItemsWarning
    };
  }

  public isConfStockOk(): boolean {
    return (
      this.materialAvailabilityIndicators.nbProcReqItemsNOk === 0 &&
      this.materialAvailabilityIndicators.nbProcReqItemsWarning === 0 &&
      this.materialAvailabilityIndicators.nbProcReqItemsOk > 0
    );
  }

  public isConStockfWarning(): boolean {
    return (
      this.materialAvailabilityIndicators.nbProcReqItemsNOk === 0 &&
      this.materialAvailabilityIndicators.nbProcReqItemsWarning > 0
    );
  }

  public isConfStockNok(): boolean {
    return this.materialAvailabilityIndicators.nbProcReqItemsNOk > 0;
  }
}
