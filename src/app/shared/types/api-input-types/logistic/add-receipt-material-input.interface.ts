import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtDfItemDTO } from '../../api-types/bidt-df-item-dto.interface';
import { BidtPackageDTO } from '../../api-types/bidt-package-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface AddReceiptMaterialInput {
  birePnDTO: BirePnDTO | undefined;
  createWithPackage: boolean;
  isExistingItem: boolean;
  isPackageCodeGenerated: boolean;
  quantityItem: number;
  packageDTO: BidtPackageDTO | undefined;
  manufacturingBatchNumber?: string;

  bidtDeliveyFolder: BidtDeliveryFolderDTO;
  bidtDfItem: BidtDfItemDTO | undefined;
  bidtStockMvt: BidtStockMvtDTO;
  manufacturingDate?: Date;
  expirationDate?: Date;
}
