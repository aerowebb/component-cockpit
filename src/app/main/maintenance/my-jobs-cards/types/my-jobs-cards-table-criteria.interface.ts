export interface MyJobsCardsTableCriteria {
  assignedTo: string;
  statusList: string[];
  typeList: string[];
  woAsset: string;
  wpAsset: string;
  scheduledStartDate?: Date;
  scheduledEndDate?: Date;
  executionStartDate?: Date;
  executionEndDate?: Date;
  woCode: string;
  nextDays?: number;
}
