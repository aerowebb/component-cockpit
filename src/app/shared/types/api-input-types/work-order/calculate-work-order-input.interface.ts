import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';

export interface CalculateWorkOrderImput {
  workOrderData: BidmWorkOrderDTO;
  workPackageAssetCode?: string;
  fromLineMaintenance: boolean;
}
