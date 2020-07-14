export interface BidmTimeTrackingDTO {
  timeTrackingId?: string;
  projectId?: string;
  woId?: string;
  bireOpeCode?: string;
  bireOpeVersion?: string;
  ttPerformedBy?: string;
  ttPerformedDuration?: number;
  ttPerformedElapsed?: number;
  ttPerformedClockIn?: Date;
  ttPerformedClockOut?: Date;
}
