import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoNotificationAttributeDTO } from '../../api-types/bido-notification-attribute-dto.interface';
import { DeferredDefectEventDTO } from '../../api-types/deferred-defect-event-dto.interface';

export interface MaintenanceForecastingDefect {
  deferredDefectEvent: DeferredDefectEventDTO;
  attributeList: BidoNotificationAttributeDTO[];
  affectedWorkPackage?: BidmProjectDTO;
}
