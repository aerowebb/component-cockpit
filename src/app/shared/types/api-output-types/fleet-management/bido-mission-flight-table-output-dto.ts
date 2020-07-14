import { LabelValue } from '../../label-value.interface';

export interface MissionEquipmentTableOutputDTO {
  familyVariantCode?: string;
  asset?: LabelValue<string>[];
  chronoNumber?: string;
  flightStatus?: string;
  startDate?: Date;
  endDate?: Date;
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
  requestedOpeConfigCode?: string;
}
