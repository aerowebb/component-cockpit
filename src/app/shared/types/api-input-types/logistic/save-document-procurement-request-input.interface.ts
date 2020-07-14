import { BidtDocumentDTO } from '../../api-types/bidt-document-dto.interface';
import { BidtProcurementRequestDTO } from '../../api-types/bidt-procurement-request-dto.interface';

export interface SaveProcurementRequestInput {
  procurementRequestDTO: BidtProcurementRequestDTO;
  documentList: BidtDocumentDTO[];
}
