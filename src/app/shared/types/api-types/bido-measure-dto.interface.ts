export interface BidoMeasureDTO {
  measureId?: string;
  equipmentCode?: string;
  familyCode?: string;
  ratingCode?: string;
  counterCode?: string;
  readingDate?: Date;
  source?: string;
  isDiff?: boolean;
  value?: string;
  delta?: string;
  bidMeasureId?: string;
  status?: string;
  coefficient?: string;
  measureDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
