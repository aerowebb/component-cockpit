import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface AssetAtDateOutput {
  bidoEquipment?: BidoEquipmentDTO;
  code?: string;
  structure?: string;
  pn?: string;
  sn?: string;
  asset?: string;
  familyVariant?: string;
  status?: string;
  owner?: string;
  ownerName?: string;
  operator?: string;
  operatorName?: string;
  itemNumber?: string;
  equipmentFunction?: string;
  children?: AssetAtDateOutput[];
  counterMap: Map<string, string>;
}
