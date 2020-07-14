import { BidoEquipmentDTO } from './bido-equipment-dto.interface';

export interface BidoEquipmentTableDTO {
  bidoEquipmentDTO: BidoEquipmentDTO;
  type: string;
  familyVariantCode?: string;
  operatorCustomerCode?: string;
  ownerCustomerCode?: string;
  pnCode?: string;
  sn?: string;
  registration?: string;
  operationalStatus?: string;
  equipmentDesignation?: string;
  equipmentCode?: string;
}
