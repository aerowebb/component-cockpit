import { BidmTimeTrackingDTO } from '../../api-types/bidm-time-tracking-dto.interface';

export interface BidmTimeTrackingByOperationOutputDTO {
  bidmTimeTrackingDTO?: BidmTimeTrackingDTO;
  operation?: string;
  performedBy?: string;
  duration?: number;
  durationText?: string;
  elapsed?: number;
  elapsedText?: string;
  clockIn?: Date;
  clockInText?: string;
  clockOut?: Date;
  clockOutText?: string;
  isInDB?: boolean;
  isDelete?: boolean;
  isEditable?: boolean;
}
