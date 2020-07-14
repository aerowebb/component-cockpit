export interface MissionTableDTO {
  missionCode?: string;
  missionType?: string;
  missionNumber? : string;
  missionDepartureLocation?: string;
  missionArrivalLocation?: string;
  periodicityTypeValue?: string;
  PeriodicityEndDateToString?: string;
  duration?: number;
  iFRDuration?: number;
  cycleNumber?: number;
  startDateText?: string;
  endDateText?: string;
  engineStartDateText?: string;
  engineStopDateText?: string;
  fuelUsed?: string;
  passengerNumber?: string;
  shipmentNumber?: string;
  commander?: string;
  copilot?: string;
  dayMission?: boolean;
  nightMission?: boolean;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
