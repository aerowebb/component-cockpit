import { BidmOperationDTO } from '../../api-types/bidm-operation-dto.interface';
import { BireOperationDTO } from '../../api-types/bire-operation-dto.interface';

export interface ProgressFromOperationStatusInput {
  bireOperationDto: BireOperationDTO;
  bidmOperationDto: BidmOperationDTO;
}
