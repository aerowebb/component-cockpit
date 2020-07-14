import { BidtPurchaseRequestDTO } from '../../api-types/bidt-purchase-request-dto.interface';

import { ConsecutiveDocumentOutput } from './consecutive-document-output.interface';
import { DocumentTabOutput } from './document-tab-output.interface';
import { MaterialAndServicesOutput } from './material-and-services-output.interface';

export interface OrderDocumentByIdOutput {
  bidtPurchaseRequestDTO: BidtPurchaseRequestDTO;
  materialAndServicesOutputList: MaterialAndServicesOutput[];
  consecutiveDocumentOutputList: ConsecutiveDocumentOutput[];
  documentTablist: DocumentTabOutput[];
}
