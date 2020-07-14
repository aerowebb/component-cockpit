import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface AddReceiptPackageInput {
  bidtDeliveryFolder: BidtDeliveryFolderDTO;
  packageCode: string;
  material: BirePnDTO;
  quantity: number;
  isGenerated: boolean;
  packageType: string;
}
