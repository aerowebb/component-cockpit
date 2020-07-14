import { BidmWorkOrderDTO } from './bidm-work-order-dto.interface';

export interface WorkOrderObjectDTO {
  // EquipmentCode is used to designate the equipment associated with the completion of a WorkOrderTask
  equipmentCode: string;
  // Recorded event type
  eventType?: string;
  // Recorded event code
  eventCode?: string;
  // Description of the related Work Order
  woCode: string;
  woLinkType?: string;
  woDescription?: string;
  // End Date
  endDate?: Date;
  // Description of the Task/Evolution
  workDesignation?: string;
  // Asset candidates to track the task/evolution completion
  trackingAssets?: Map<string, string>;

  bidmWorkOrderDTO?: BidmWorkOrderDTO;
}
