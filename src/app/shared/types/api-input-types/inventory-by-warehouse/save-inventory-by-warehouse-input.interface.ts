import { BsdeStoreDTO } from '../../api-types/bsde-store-dto.interface';
import { BsdeStorePnDTOId } from '../../api-types/bsde-store-pn-dto-id.interface';
import { BsdeStorePnDTO } from '../../api-types/bsde-store-pn-dto.interface';

export interface SaveInventoryByWarehouseInput {
  bsdeStoreDTO:	BsdeStoreDTO;
  bsdeStorePnDTOList?: BsdeStorePnDTO[];
  bsdeStorePnDTORemoveIdList?: BsdeStorePnDTOId[];
  isUpdateBsdeStore: boolean;
}

