import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtStockMvtDTO } from '../../api-types/bidt-stock-mvt-dto.interface';

export interface FindStockMvtFormByCriteriaInput {
  stockMvtList: BidtStockMvtDTO[];
  shipmentFolder?: BidtDeliveryFolderDTO;
  receiptFolder?: BidtDeliveryFolderDTO;
  workOrderLinkToAssetId?: string;
  assetWithOT?: boolean;
}
