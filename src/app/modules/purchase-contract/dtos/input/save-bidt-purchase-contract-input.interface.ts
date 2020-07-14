import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPurchaseContractDTO } from '../bidt-purchase-contract-dto.interface';
import { BidtPurchaseContractPartnerDTO } from '../bidt-purchase-contract-partner-dto.interface';
import { ListModificationsDTO } from '../list-modifications-dto.interface';

import { SavePurchaseContractSliceInput } from './save-purchase-contract-slice-input.interface';

export interface SaveBidtPurchaseContractInput {
  bidtPurchaseContractDTO: BidtPurchaseContractDTO;
  partnersModifications?: ListModificationsDTO<BidtPurchaseContractPartnerDTO>;
  slicesModifications?: ListModificationsDTO<SavePurchaseContractSliceInput>;
  documentsModifications?: ListModificationsDTO<BidtDocumentDTO>;
}
