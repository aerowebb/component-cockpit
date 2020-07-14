import { AssetWorkPackageStatusTableDTO } from '../../../../../shared/types/api-output-types/airworthiness-management/asset-work-package-status-table-dto.interface';

import { RemainingWorkPackageDTO } from './remaining-work-package-dto.interface';

export interface WorkPackageDTO extends RemainingWorkPackageDTO {
  number?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  acrsEventCode?: string;
  acrs?: string;
  logbookUpdate?: string;
  checkResultIcon?: string;
  checkResultTooltip?: string;
  logbookCheckResultIcon?: string;
  logbookCheckResultTooltip?: string;
  appliedConfiguration?: string;
  configurationCheckResultIcon?: string;
  configurationCheckResultTooltip?: string;
  assignedTo?: string;
  wpId?: number;
  acrsValidatedBy?: string;
  _id?: string;
  _obj?: AssetWorkPackageStatusTableDTO;
  _alertLoading?: boolean | false;
  _alertTooltip?: string;
  _expand?: boolean | false;
  _potentialLoading?: boolean | false;
}
