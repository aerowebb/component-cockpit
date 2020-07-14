export interface BsdeScheduledEventDTO {
  projectId?: string;
  eventId?: string;
  taskCode?: string;
  taskVersion?: string;
  counterCode?: string;
  familyCode?: string;
  variantCode?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  marks?: string;
  pn?: string;
  sn?: string;
  origin?: string;
  counterRemaining?: number;
  counterValue?: number;
  topEqtTsn?: number;
  occurrence?: number;
  nteDate?: Date;
  plannedDate?: Date;
  eventBlocked?: boolean;
  periodicities?: string;
  alertOnThreshold?: boolean;
  taskThreshold?: number;
  taskTolerance?: number;
}
