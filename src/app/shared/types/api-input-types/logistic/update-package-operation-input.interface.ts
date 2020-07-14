import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';

export interface UpdatePackageOperationInput {
  operationId: number;
  bidtDeliveryFolderDto: BidtDeliveryFolderDTO;
  newStatus: string;
}
