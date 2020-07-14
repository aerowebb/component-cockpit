import { BidtDeliveryFolderDTO } from '../../api-types/bidt-delivery-folder-dto.interface';
import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';

export interface SaveDocumentDeliveryFolderInput {
  deliveryFolderDTO: BidtDeliveryFolderDTO;
  documentList: BidtDocumentDTO[];
}
