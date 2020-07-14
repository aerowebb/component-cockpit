import { LineMaintenanceRoleEquipmentOmeDTO } from '../../api-output-types/fleet-business/line-maintenance-role-equipment-ome-dto.interface';
import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface ValidateActionsOnOmeAndRoleEquipmentsOfFlightInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  relatedEquipment: BidoEquipmentDTO;
  relatedProject: BidmProjectDTO;
  roleEquipmentAndOmeList: LineMaintenanceRoleEquipmentOmeDTO[];
  flCode?: string;
  pnCode?: string;
  wpNumber?: number;
  projectId?: string;
}
