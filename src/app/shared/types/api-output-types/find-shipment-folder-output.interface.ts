import { BidtDeliveryFolderDTO } from '../api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../api-types/bidt-package-dto.interface';

export interface FindShipmentFolderOutput {
  bidtDeliveryFolderDTO: BidtDeliveryFolderDTO;
  packageList: BidtPackageDTO[];
}
