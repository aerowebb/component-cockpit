export interface GenerateFlightLogbookPdfInput {
  equipmentCode?: string;
  missionCode?: string;
  flightType?: string;
  missionNumber?: string;
  flightDateFrom?: Date;
  flightDateTo?: Date;
  departureLocation?: string;
  arrivalLocation?: string;
  pilot?: string;
  copilot?: string;
  missionInstanceCode?: string;
  statusState?: string;
  onlyNotAffectedFlights?: boolean;
  registration?: string;
  hrModuleActivated?: boolean;
}
