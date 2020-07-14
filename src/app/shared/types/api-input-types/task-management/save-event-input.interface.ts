import { BidoDocumentationDTOId } from '../../api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../api-types/bido-documentation-dto.interface';
import { BidoNotificationAttributeDTO } from '../../api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';
import { BidoNotificationEvolutionDTO } from '../../api-types/bido-notification-evolution-dto.interface';
import { SaveBidoEventExtensionCustomDTO } from '../fleet-management/save-bido-event-extension-custom-dto.interface';
import { UpdateFieldsOfBidoDocumentationInput } from '../fleet-management/update-fields-of-bido-documentation-input.interface';

export interface SaveEventInput {
  bidoNotificationDTO: BidoNotificationDTO;
  bireNotificationAttributes?: BidoNotificationAttributeDTO[];
  saveBidoNotificationEvolution?: BidoNotificationEvolutionDTO;
  bidoDocumentAddedList?: BidoDocumentationDTO[];
  bidoDocumentRemovedList?: BidoDocumentationDTOId[];
  bidoDocumentUpdatedList?: UpdateFieldsOfBidoDocumentationInput[];
  saveBidoEventExtensionCustomDTO?: SaveBidoEventExtensionCustomDTO;
  deletedCorrectiveActionComponent?: number[];
}
