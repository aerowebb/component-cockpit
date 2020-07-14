import { BidoMissionEquipmentDTOId } from '../../api-types/bido-mission-equipment-dto-id.interface';

export interface BidoRunwaySchedulingFlightInputDTO {
  bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId;
  allocableEquipmentCode?: string;
  requestedOpeConfigCode?: string;
  flightTime?: number;
  flightTimeUnit?: string;
}
