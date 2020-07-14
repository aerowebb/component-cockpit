import { AssetFlightTableDTO } from '../../../../../shared/types/api-output-types/airworthiness-management/asset-flight-table-dto.interface';

export interface FlightsDTO {
  rowId?: number;
  chronoNumber?: string;
  missionCode?: string;
  missionType?: string;
  startDateText?: string;
  endDateText?: string;
  duration?: string;
  cycleNumber?: string;
  statusStateText?: string;
  control?: string;
  missionDepartureLocation?: string;
  missionArrivalLocation?: string;
  pilot?: string;
  copilot?: string;
  ifrDuration?: string;
  fuelUsed?: string;
  engineStartDateText?: string;
  engineStopDateText?: string;
  flightValidationVisibility?: boolean;
  _obj?: AssetFlightTableDTO;
  _expand?: boolean | false;
}
