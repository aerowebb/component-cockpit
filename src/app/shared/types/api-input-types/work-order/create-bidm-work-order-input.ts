import { BidmOperationDTO } from '../../api-types/bidm-operation-dto.interface';
import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../api-types/bidm-work-order-dto.interface';
import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';
import { WoProcurementRequestInputDTO } from '../../api-types/wo-procurement-request-input-dto.interface';

export interface CreateBidmWorkOrderInput {
  bidmProjectDTO: BidmProjectDTO;
  bidmWorkOrderDTO: BidmWorkOrderDTO;
  relatedItem?: String;
  relatedAsset?: String;
  evolution: BireEvolutionDTO;
  task: BireTaskDTO;
  eventCode: String;
  operations: BidmOperationDTO[];
  woProcurementRequestInputDTOs: WoProcurementRequestInputDTO[];
  generateWoProcurementRequestFromOperation?: boolean;
}
