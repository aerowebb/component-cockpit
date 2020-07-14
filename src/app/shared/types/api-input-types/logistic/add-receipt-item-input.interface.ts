import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../api-types/bidt-package-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface AddReceiptItemInput {
  material: BirePnDTO;
  packageDto: BidtPackageDTO | undefined;
  createWithPackage: boolean;
  quantity: number;
  bidtDeliveryFolder: BidtDeliveryFolderDTO;
  isPackageCodeGenerated: boolean;
}
