import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface FindBidoEquipmentsDTOBySearchCriteriaOutput {
  fatherEquipment?: BidoEquipmentDTO;
  topEquipment?: BidoEquipmentDTO;
  equipmentCode?: string;
  familyVariantCode?: string;
  pnCode?: string;
  operatorCustomerCode?: string;
  sn?: string;
  equipmentFunction?: string;
  equipmentDesignation?: string;
  operationalStatus?: string;
  equEquipmentCode?: string;
  ownerCustomerCode?: string;
  functionCode?: string;
  eisDate?: Date;
  lifeRestriction?: boolean;
  itemNumber?: string;
  location?: string;
  standardTimeCounterCode?: string;
  standardCycleCounterCode?: string;
  functionalLocation?: string;
  registration?: string;
  warehouseId?: string;
  mpCode?: string;
  davEdmsError?: boolean;
  statusState?: string;
}
