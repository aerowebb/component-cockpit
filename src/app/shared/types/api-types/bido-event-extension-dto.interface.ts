import { BidoEventParameterDTO } from './bido-event-parameter-dto.interface';

export interface BidoEventExtensionDTO {
  extensionCode?: string;
  notificationCode?: string;
  contextMissionType?: string;
  extensionComment?: string;
  bidoEventParameterDTOList?: BidoEventParameterDTO[];
}
