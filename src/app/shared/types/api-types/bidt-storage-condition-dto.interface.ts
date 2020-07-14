export interface BidtStorageConditionDTO {
  id?: number;
  scName?: string;
  scContainerType?: string;
  scNumberInContainer?: number;
  scDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  dataKey?: number; // Only for unique selection in table row
}
