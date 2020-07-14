import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../api-types/bido-notification-dto-id.interface';
import { BireEvolutionDTOId } from '../../api-types/bire-evolution-dto-id.interface';
import { BireModificationDTOId } from '../../api-types/bire-modification-dto-id.interface';
import { BireSbDTOId } from '../../api-types/bire-sb-dto-id.interface';
import { BireTaskDTOId } from '../../api-types/bire-task-dto-id.interface';

export interface AssetWorkOrderOriginDataOutput {
  bireTaskDTOId?: BireTaskDTOId;
  bireEvolutionDTOId?: BireEvolutionDTOId;
  bireSbDTOId?: BireSbDTOId;
  bireModificationDTOId?: BireModificationDTOId;
  bidoNotificationDTOId?: BidoNotificationDTOId;
  notNotificationCode?: string;
  bidoEquipmentDTO?: BidoEquipmentDTO;
}
