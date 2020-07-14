import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface MaintenanceForecastingWorkPackage {
  bidmProject: BidmProjectDTO;
  bidmWorkOrderList: BidmWorkOrderDTO[];
}
