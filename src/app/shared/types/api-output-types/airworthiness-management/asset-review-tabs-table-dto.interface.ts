import { UpcomingEventDTO } from '../upcoming-event-dto.interface';

import { ADSBModRowDTO } from './adsb-mod-row-dto.interface';
import { AssetFlightTableDTO } from './asset-flight-table-dto.interface';
import { AssetWorkPackageStatusTableDTO } from './asset-work-package-status-table-dto.interface';
import { ReportPostponementElementDTO } from './report-postponement-element-dto.interface';

export interface AssetReviewTabsTableDTO {
  assetWorkPackageList: AssetWorkPackageStatusTableDTO[];
  assetFlightList: AssetFlightTableDTO[];
  assetPostponedWorkOrderList: ReportPostponementElementDTO[];
  assetUpcomingEventList: UpcomingEventDTO[];
  assetAirworthinessDocumentList: ADSBModRowDTO[];
}
