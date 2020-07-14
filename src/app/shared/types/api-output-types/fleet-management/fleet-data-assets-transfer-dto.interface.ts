import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
export interface FleetDataAssetsTransferDTO {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  ownerAtDate?: string;
}
