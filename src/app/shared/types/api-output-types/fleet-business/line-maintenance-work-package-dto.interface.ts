export interface LineMaintenanceWorkPackageDTO {
  id: string;
  assetBreakdownCheck?: string;
  assignedTo?: string;
  checkResult?: string;
  checkResultTooltip?: string;
  closedBy?: string;
  customer?: string;
  dueDate?: Date;
  endDate?: Date;
  logbookCheck?: string;
  mroCenter?: string;
  name?: string;
  number?: number;
  startDate?: Date;
  status?: string;
}
