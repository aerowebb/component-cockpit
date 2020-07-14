export interface MissionEquipmentRow {
  equipmentCode: string;
  missionCode: string;
  occurrence: number;
  asset: string;
  chronoNumber: string;
  copilot: string;
  customer: string;
  cycleNumber: string;
  duration: string;
  endDate: string;
  engineStartDate: string;
  engineStopDate: string;
  flightType: string;
  fuelUsed: string;
  ifrDuration: string;
  missionArrivalLocation: string;
  missionDepartureLocation: string;
  missionNumber: string;
  pilot: string;
  startDate: string;
  statusState: string;
  resetOilState?: string;
  resetOilEngine?: string;
}
