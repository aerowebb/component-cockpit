import { BidtSalesRequestDTO } from '../../api-types/bidt-sales-request-dto.interface';
import { DocumentTabOutput } from '../bidt-purchase-request/document-tab-output.interface';
import { MaterialAndServicesOutput } from '../bidt-purchase-request/material-and-services-output.interface';

export interface SalesDocumentListOutput {
  bidtSalesRequestDTO?: BidtSalesRequestDTO;
  supplier?: string;
  materialAndServicesOutputList?: MaterialAndServicesOutput[];
  documentTablist?: DocumentTabOutput[];
}
