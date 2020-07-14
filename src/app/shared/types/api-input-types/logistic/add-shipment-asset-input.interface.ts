import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtDfItemDTO } from '../../api-types/bidt-df-item-dto.interface';
import { BidtPackageDTO } from '../../api-types/bidt-package-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';
import { BidtTransferOrderDTO } from '../../api-types/bidt-transfer-order-dto.interface';

export interface AddShipmentAssetInput {
  bidtStockMvtDTO: BidtStockMvtDTO;
  bidtDeliveryFolderDTO: BidtDeliveryFolderDTO;
  bidtPackageDTO: BidtPackageDTO;
  generated: boolean;
  createWithPackage: boolean;
  transferOrder: BidtTransferOrderDTO;
  bidtDfItemDTOList?: BidtDfItemDTO[];
}
