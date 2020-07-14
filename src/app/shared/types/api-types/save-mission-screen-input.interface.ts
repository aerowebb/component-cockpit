import { MissionEquipmentTableOutputDTO } from '../api-output-types/fleet-management/bido-mission-flight-table-output-dto';

import { CreateBidoMissionEquipmentFromExistingMissionInputDTO } from './bido-flights-dialog-dto.interface';

export interface SaveMissionScreenInput {
  bidoMissionDTO: {};
  addedFlights?: CreateBidoMissionEquipmentFromExistingMissionInputDTO[];
  removedFlights?: MissionEquipmentTableOutputDTO[];
  updatedFlights?: MissionEquipmentTableOutputDTO[];
  isForUpdate: boolean;
  selectedTimeZone?: string;
}
