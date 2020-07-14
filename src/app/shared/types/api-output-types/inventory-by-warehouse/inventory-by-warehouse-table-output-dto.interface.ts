import { BsdeStoreDTO } from '../../api-types/bsde-store-dto.interface';

export interface InventoryByWarehouseTableOutputDTO {
  bsdeStoreDTO: BsdeStoreDTO;
  stockValue : string;
}
