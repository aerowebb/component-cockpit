export interface FlightScheduleOutput {
  fleetId?: number;
  equipmentCode?: string;
  equipmentName?: string;
  equiFunction?: string;
  missionCode?: string;
  missionName?: string;
  chronoNumber?: string;
  // startDate?: Date;
  // endDate?: Date;
  engineStartDate?: Date;
  engineStopDate?: Date;
  flightType?: string;
  flightDetails?: string;
  flightStatus?: string;
  occurence?: number;
  date?: Object;
}
