import { BidmProjectDTOId } from './bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from './bidm-work-order-dto-id.interface';
import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { BireItemDTO } from './bire-item-dto.interface';
import { WoAssetManagementDTO } from './wo-asset-management-dto.interface';

export interface WoAssetManagementInputDTO {
  decision?: string;
  selectedWarehouseId?: number;
  selectedBidoEquipmentDTO?: BidoEquipmentDTO;
  selectedSuperiorBidoEquipmentDTO?: BidoEquipmentDTO;
  selectedBireItemDTO?: BireItemDTO;
  selectedFunctionCode?: string;
  selectedPnCode?: string;
  woAssetManagementDTO?: WoAssetManagementDTO;
  woAssetManagementDTOs?: WoAssetManagementDTO[];
  bidmWorkOrderDTOId?: BidmWorkOrderDTOId;
  bidmProjectDTOId?: BidmProjectDTOId;
}
