import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { WorkOrderObjectDTO } from './work-order-object-dto.interface';

export interface WorkOrderEvolutionDTO extends WorkOrderObjectDTO {
  evolutionType: string;
  evolutionNumber: string;
  evolutionRevisionNumber: string;
  evolutionDesignation?: string;
  newPnCodeSelected?: string;
  woRelatedAsset?: BidoEquipmentDTO;
}
