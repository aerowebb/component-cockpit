import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface AssetsToBeInstalledOutputDTO {
  report?: boolean | undefined;
  assetPn?: string;
  assetSn?: string;
  assetDesignation?: string;
  assetStatusValue?: string;
  assetStatusLabel?: string;
  assetFunctionType?: string;
  assetFamilyVariant?: string;
  superiorPn?: string;
  superiorSN?: string;
  superiorDesignation?: string;
  itemDataCode?: string;
  position?: string;
  funLocCode?: string;
  alert?: boolean;
  exceptionMessage?: string;
  assetCode?: string;
  assestFatherCode?: string;
  isAircraft?: boolean;
  fixNewStatus?: string;
  reportMessage?: string | undefined;
  equipment?: BidoEquipmentDTO;
  superiorEquipment?: BidoEquipmentDTO;
}
