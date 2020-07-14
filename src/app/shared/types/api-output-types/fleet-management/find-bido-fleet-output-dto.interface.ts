import { BidoEquipmentTableDTO } from '../../api-types/bido-equipment-table-dto.interface';

import { BidoFleetOutputDTO } from './bido-fleet-output-dto.interface';

export interface FindBidoFleetOutputDTO {
  bidoFleetOutputDTO: BidoFleetOutputDTO;
  bidoEquipmentTableDTO: BidoEquipmentTableDTO[];
}
