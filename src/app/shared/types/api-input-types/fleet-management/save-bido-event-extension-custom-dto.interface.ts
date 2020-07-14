import { BidoEventExtensionDTO } from '../../api-types/bido-event-extension-dto.interface';

export interface SaveBidoEventExtensionCustomDTO {
  notificationCode?: string;
  extensionType?: string;
  bidoEventExtensionDTO?: BidoEventExtensionDTO;
  bidoEventExtensionDTOList?: BidoEventExtensionDTO[];
}
