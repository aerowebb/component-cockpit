import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface AssetAssignmentMPTableDTO {
  bidoEquipmentDTO?: BidoEquipmentDTO;
  isAssigned?: boolean;
  assetText?: string;
  planCode?: string;
}
