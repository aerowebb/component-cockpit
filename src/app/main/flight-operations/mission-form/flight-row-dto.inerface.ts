import { LabelValue } from '../../../shared/types/label-value.interface';

export interface FlightRowDTO {
  familyVariantCode?: string;
  asset?: LabelValue<string>[];
  chronoNumber?: string;
  flightStatus?: string;
  startDate?: string;
  endDate?: string;
  ifrDuration?: number;
  duration?: number;
  cycleNumber?: number;
  engineStartDate?: string;
  engineStopDate?: string;
  fuelUsed?: string;
  passengers?: number;
  shipment?: number;
  pilot?: string;
  copilot?: string;
  dayMission?: boolean;
  nightMission?: string;
  assetCodeText?: string;
  missionCode?: string;
  occurence?: number;
  equipmentCode?: string;
  dataKeyId?: string;
  _expand?: boolean | false;
}
