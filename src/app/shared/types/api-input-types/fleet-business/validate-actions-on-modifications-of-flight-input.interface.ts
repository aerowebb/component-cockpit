import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface ValidateActionsOnModificationsOfFlightInput {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  relatedEquipment: BidoEquipmentDTO;
  relatedProject: BidmProjectDTO;
  evolutionNumberList: string[];
}
