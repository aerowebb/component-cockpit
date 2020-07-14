import { BirePnDTOId } from '../../api-types/bire-pn-dto-id.interface';

export interface GetPotentialListInput {
  birePnDTOId?: BirePnDTOId;
  mvtDate?: Date;
  mvtId?: number;
  siteId?: number;
  stockStatusCode?: string;
  stockTypeId?: number;
  stockValuationId?: number;
  storageBinId?: number;
  warehouseId?: number;
  withPnAlternatives?: boolean;
}
