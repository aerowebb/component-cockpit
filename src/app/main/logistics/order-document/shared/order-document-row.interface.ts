import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';

export interface OrderDocumentRow {
  code?: string;
  name?: string;
  category?: string;
  type?: string;
  supplier?: string;
  supplierDocumentNumber?: string;
  status?: string;
  creationDate?: string;
  receptionDate?: string;
  startDate?: string;
  endDate?: string;
  superiorDocument?: string;
  _obj: BidtPurchaseRequestDTO;
}
