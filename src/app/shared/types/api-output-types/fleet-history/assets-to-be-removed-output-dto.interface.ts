import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface AssetsToBeRemovedOutputDTO {
  assetPn?: string;
  assetSn?: string;
  assetDesignation?: string;
  assetStatusAtDate?: string;
  superiorPn?: string;
  superiorSN?: string;
  superiorDesignation?: string;
  alert?: boolean;
  exceptionMessage?: string;
  assetCode?: string;
  assestFatherCode?: string;
  isAircraft?: boolean;
  isEngine?: boolean;
  equipment?: BidoEquipmentDTO;
  superiorEquipment?: BidoEquipmentDTO;
  assetFamilyVariant?: string;
}
