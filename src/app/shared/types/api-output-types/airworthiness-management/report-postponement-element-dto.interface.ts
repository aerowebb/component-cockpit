import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';
import { BidoNotificationDTO } from '../../api-types/bido-notification-dto.interface';

export interface ReportPostponementElementDTO {
  rowId?: number;
  checkResultIcon?: string;
  woType?: string;
  postponementDateText?: string;
  postponementDeadLineText?: string;
  postponementDescription?: string;
  postponementEventCode?: string;
  postponementRefusalReason?: string;
  postponementResult?: string;
  postponementStatus?: string;
  woLinkType?: string;
  workOrderCode?: string;
  workOrderDescription?: string;
  workOrderOrigin?: string;
  workOrderStatus?: string;
  workOrderType?: string;
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  bidoNotificationDTO: BidoNotificationDTO;
  evolutionType?: string; // external attribute
  control?: string;
  _expand?: boolean | false;
}
