import { BidoMissionEquipmentDTO } from '../../api-types/bido-mission-equipment-dto.interface';

export interface AssetFlightTableDTO {
  equipmentCode?: string;
  assetText?: string;
  checkResultIcon?: string;
  checkResultAlt?: string;
  chronoNumber?: string;
  pilot?: string;
  copilot?: string;
  missionCode?: string;
  missionType?: string;
  MissionNumber?: string;
  missionDepartureLocation?: string;
  missionArrivalLocation?: string;
  occurrence?: number;
  duration?: string;
  ifrDuration?: string;
  cycleNumber?: string;
  startDateText?: number;
  endDateText?: number;
  engineStartDateText?: number;
  engineStopDateText?: number;
  fuelUsed?: number;
  passengerNumber?: string;
  shipmentNumber?: string;
  statusStateText?: string;
  dayMission?: boolean;
  nightMission?: boolean;
  manualFlightEntries?: boolean;
  humsStatus?: string;
  flightValidationVisibility?: boolean;
  bidoEquipmentDTO: BidoMissionEquipmentDTO;
}
