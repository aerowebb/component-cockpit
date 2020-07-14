import { BidtTransferOrderDTO } from '../../api-types/bidt-transfer-order-dto.interface';

export interface FindTransferOrdersByCriteriaInput {
  transferOrder: BidtTransferOrderDTO;
  transferOrderStatusExcluded: string[];
  torCode?: string;
  shippingFolderCode?: string;
}
