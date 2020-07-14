import { BidtDfItemDTO } from '../../api-types/bidt-df-item-dto.interface';

export interface UpdateBidtDfItemInput {
  bidtDfItemDTO: BidtDfItemDTO;
  newStatus: String;
}
