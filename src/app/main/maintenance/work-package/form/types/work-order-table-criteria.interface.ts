export interface WorkOrderTableCriteria {
  statusList: string[];
  woTypeList: string[];
  assignedTo: string;
  qualification: string;
  asset: string;
  zone: string;
}
