import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { EventInformationsDTO } from '../../api-types/event-informations-dto.interface';

export interface FleetDataTransferInput {
  bidoEquipmentDTOList: BidoEquipmentDTO[];
  eventInformationsDTO: EventInformationsDTO;
  forcePropagation?: boolean;
  transferType?: string;
  runBackground?: boolean;
}
