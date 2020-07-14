import { BidtPurchaseContractSliceDTO } from '../bidt-purchase-contract-slice-dto.interface';
import { TreeModificationsDTO } from '../tree-modifications-dtos';

import { SavePurchaseContractItemInput } from './save-purchase-contract-item-input.interface';

export interface SavePurchaseContractSliceInput {
  bidtPurchaseContractSliceDTO: BidtPurchaseContractSliceDTO;
  itemsTreeModifications?: TreeModificationsDTO<SavePurchaseContractItemInput>;
}
