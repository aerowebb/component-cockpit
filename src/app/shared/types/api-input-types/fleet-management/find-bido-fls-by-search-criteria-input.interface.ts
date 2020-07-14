import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../api-types/bido-fl-dto.interface';

export interface FindBidoFlsBySearchCriteriaInput {
  bidoFlDTOCriteria: BidoFlDTO;
  familyVariantCode?: string[];
  modelCode?: string;
  bidoEquipmentDTO?: BidoEquipmentDTO;
  applicationDate?: Date;
}
