import { BidtTransferOrderDTO } from '../../api-types/bidt-transfer-order-dto.interface';

export interface AddTransferOrderMaterialInput {
  bidtTransferOrder: BidtTransferOrderDTO;
  pnCode: string;
  quantity: string;
}
