import { BidtFuncObjectDTO } from '../../../../../../generated_files/api-types/bidt-func-object-dto.interface';
import { ObjectStatusDTO } from '../../../../../../generated_files/api-types/object-status-dto.interface';
import { BidoPnDTOId } from '../../../../../../generated_files/id/bido-pn-dto-id.interface';
import { BireSbDTOId } from '../../../../../../generated_files/id/bire-sb-dto-id.interface';
import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';
import { BidmWorkOrderDTOId } from '../../api-types/bidm-work-order-dto-id.interface';
import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';
import { BidoNotificationDTOId } from '../../api-types/bido-notification-dto-id.interface';
import { BirePartUpdateGuidelineDTOId } from '../product-structure-management/bire-part-update-guideline-dto-id.interface';

export type TodoObjectId =
  | BireSbDTOId
  | BidoPnDTOId
  | BidoNotificationDTOId
  | BidoMissionEquipmentDTOId
  | BidmProjectDTOId
  | BidmWorkOrderDTOId
  | BirePartUpdateGuidelineDTOId;

export interface TodoItemOutput extends ObjectStatusDTO {
  funcObject?: BidtFuncObjectDTO;
  id?: TodoObjectId;
  statusLabel?: string;
  isUrgent?: boolean;
  functionalIdentifier?: string;
}
