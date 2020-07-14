import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../api-types/bidt-package-dto.interface';

export interface AddShipmentPackageInput {
  bidtPackageDTO: BidtPackageDTO;
  isGenerated: boolean;
  bidtDeliveryFolderDTO?: BidtDeliveryFolderDTO;
  createWithPackage: boolean;
}
