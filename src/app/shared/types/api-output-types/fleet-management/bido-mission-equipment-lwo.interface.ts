export interface BidoMissionEquipmentLWO {
  missionCode?: string;
  equipmentCode?: string;
  occurrence?: number;
  asset?: string;
  chronoNumber?: string;
  copilot?: string;
  customer?: string;
  cycleNumber?: string;
  duration?: string;
  endDate?: Date;
  engineStartDate?: Date;
  engineStopDate?: Date;
  flightType?: string;
  fuelUsed?: string;
  ifrDuration?: string;
  missionArrivalLocation?: string;
  missionDepartureLocation?: string;
  missionNumber?: string;
  pilot?: string;
  startDate?: Date;
  statusState?: string;
  requestedOpeConfigCode?: string;
  customerOperatorCode?: string;
}
