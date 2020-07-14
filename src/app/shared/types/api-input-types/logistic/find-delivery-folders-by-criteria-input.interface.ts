import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';

export interface FindDeliveryFoldersByCriteriaInput {
  deliveryFolder: BidtDeliveryFolderDTO;
  folderStatusExcluded: string[];
  assetPn?: string;
  itemPn?: string;
  sn?: string;
  batchNumber?: string;
  assetDesignation?: string;
  packageCode?: string;
  torCode?: string;
  shippingFolderCode?: string;
  folderCategorie?: string;
  transferType?: string[];
}
