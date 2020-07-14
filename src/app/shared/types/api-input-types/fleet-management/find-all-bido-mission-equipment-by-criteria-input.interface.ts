export interface FindAllBidoMissionEquipmentByCriteriaInput {
  equipmentCode?: string;
  missionCode?: string;
  flightType?: string;
  missionNumber?: string;
  requestedOpeConfigCode?: string;
  flightDateFrom?: Date;
  flightDateTo?: Date;
  flightEndDateFrom?: Date;
  flightEndDateTo?: Date;
  departureLocation?: string;
  arrivalLocation?: string;
  pilot?: string;
  copilot?: string;
  missionInstanceCode?: string;
  statusState?: string;
  customerCode?: string;
  onlyNotAffectedFlights?: boolean;
  registration?: string;
  hrModuleActivated?: boolean;
  msn?: string;
  sourceSystemId?: string;
  sourceSystemReference?: string;
  customerOperatorCode?: string;
}
