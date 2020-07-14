import { ObjectStatusDTO } from '../../api-types/object-status-dto.interface';

export interface BirePartUpdateGuidelineDTO extends ObjectStatusDTO {
  mandant?: string;
  pugId?: number;
  birMandant?: string;
  pnCode?: string;
  pugCode?: string;
  pugTitle?: string;
  requesterId?: number | undefined;
  requesterName?: string;
  creationDate?: Date;
  controllerId?: number;
  controllerName?: string;
  pugComments?: string | undefined;
  pugStatus?: string;
  senderSiteCode?: string | undefined;
  controlTransmissionDate?: Date | undefined;
  centralTransmissionDate?: Date | undefined;
  closureDate?: Date | undefined;
  pugType?: string;
  isUrgent?: boolean | undefined;
  requesterComments?: string | undefined;
  controllerComments?: string | undefined;
}
