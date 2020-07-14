import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface FindAllAircraftByCriteriaInput {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  functionalLocationCode?: string;
  attributes?: object;
  withCounters?: boolean;
}
