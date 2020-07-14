import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface FindBidoEquipmentsBySearchCriteriaInput {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  functionTypesExcluded?: string[];
  aircraftRegistration?: string;
  functionalLocationCode?: string;
  attributes?: object;
  withCounters?: boolean;
  assestFunction?: string;
  attributeStartDate?: Date;
  attributeEnddate?: Date;
  groundEquipment?: boolean;
  warehouse?: string;
  withMP?: boolean;
  withTopAsset?: boolean;
  topAssetCode?: string;
}
