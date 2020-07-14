import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface FindAllAircraftUpcomingEventInput {
  equipmentList: BidoEquipmentDTO[];
  topEquipment: BidoEquipmentDTO;
}
