export interface BidoMissionDTO {
  missionCode?: string;
  missionType?: string;
  environment?: string;
  missionDuration?: string;
  cycleNumber?: string;
  startDate?: Date;
  endDate?: Date;
  periodicityType?: string;
  periodicityLimitDate?: Date;
  departureLocation?: string;
  arrivalLocation?: string;
  missionNumber?: string;
  missionComment?: string;
  missionDescription?: string;
  missionDetails?: string;
  operationCode?: string;
  operationalMissionCode?: string;
  customerOperatorCode?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  _expand?: boolean;
}
