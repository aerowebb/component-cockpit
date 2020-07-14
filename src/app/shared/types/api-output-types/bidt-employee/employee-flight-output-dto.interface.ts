export interface EmployeeFlightOutputDTO {
  missionCode?: string;
  missionType?: string;
  duration?: string;
  cycleNumber?: string;
  startDateText?: Date;
  endDateText?: Date;
  pilot?: string;
  copilot?: string;
  dayMission?: boolean;
  engineStartDateText?: Date;
  engineStopDateText?: Date;
  fuelUsed?: string;
  ifrDuration?: string;
  nightMission?: boolean;
  passengerNumber?: string;
  shipmentNumber?: string;
  missionNumber?: string;
  missionDepartureLocation?: string;
  missionArrivalLocation?: string;
  equipmentCode?: string;
  occurrence?: number;
  assetText?: string;
  chronoNumber?: string;
  flightType?: string;
  flightStatus?: string;
}
