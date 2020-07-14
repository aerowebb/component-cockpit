import { BidoContactDTO } from '../../api-types/bido-contact-dto.interface';
import { BidoSubscriptionDTO } from '../../api-types/bido-subscription-dto.interface';

export interface GetSubscriptionDataAndContactListByOutputDTO {
  bidoSubscriptionDTO?: BidoSubscriptionDTO;
  bidoContactDTO?: BidoContactDTO[];
}
