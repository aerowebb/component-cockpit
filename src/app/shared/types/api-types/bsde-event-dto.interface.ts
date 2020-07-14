export interface BsdeEventDTO {
  eventId?: string;
  eventType?: string;
  familyCode?: string;
  variantCode?: string;
  pn?: string;
  sn?: string;
  newPn?: string;
  newSn?: string;
  evolutionType?: string;
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  taskCode?: string;
  taskVersion?: string;
  plannedDate?: Date;
}
