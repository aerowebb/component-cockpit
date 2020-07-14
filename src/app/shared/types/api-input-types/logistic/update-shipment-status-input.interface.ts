import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';

export interface UpdateShipmentFolderInput {
  bidtDeliveryFolderDTO: BidtDeliveryFolderDTO;
  needCancel: boolean;
}
