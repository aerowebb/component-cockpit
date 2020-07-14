import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';

export interface AssetWorkPackageStatusTableDTO {
  number?: string;
  name?: string;
  mroCenter?: string;
  customer?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  closedBy?: string;
  mpIcon?: string;
  assetStructureIcon?: string;
  acrsEventCode?: string;
  checkResultIcon?: string;
  checkResultTooltip?: string;
  logbookCheckResultIcon?: string;
  logbookCheckResultTooltip?: string;
  configurationCheckResultIcon?: string;
  configurationCheckResultTooltip?: string;
  logbookCheckResult?: number;
  wpId?: number;
  isForACRSManagementTab?: boolean;
  dueDate?: string;
  bidmProjectDTO: BidmProjectDTO;
  assignedTo?: string;
}
