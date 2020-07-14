import { FindStockMvtsByCriteriaInput } from '../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { BidtDeliveryFolderDTO } from '../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtPackageDTO } from '../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtStockMvtDTO } from '../../../shared/types/api-types/bidt-stock-mvt-dto.interface';

export interface StockMvtParameters {
  searchParameters: FindStockMvtsByCriteriaInput;
  bidtStockList: BidtStockMvtDTO[];
  bidtShipmentFolder?: BidtDeliveryFolderDTO;
  bidtReceiptFolder?: BidtDeliveryFolderDTO;
  bidtPackageDTO?: BidtPackageDTO;
  workOrderLinkToAssetId?: string;
  assetWithOT?: boolean;
  folderHaveAsset?: boolean;
}
