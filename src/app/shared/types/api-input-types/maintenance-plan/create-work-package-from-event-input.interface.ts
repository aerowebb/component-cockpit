import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoNotificationAttributeDTO } from '../../api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';

export interface CreateWorkPackageFromEventInput {
  bidoEquipmentDTO: BidoEquipmentDTO;
  bidoNotificationDTO: BidoNotificationDTO;
  bidmProjectDTO: BidmProjectDTO;
  bidoNotificationAttributeDTOList: BidoNotificationAttributeDTO[];
}
