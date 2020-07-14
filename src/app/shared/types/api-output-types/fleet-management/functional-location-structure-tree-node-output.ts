import { BidoFlDTO } from '../../api-types/bido-fl-dto.interface';

export interface FunctionalLocationStructureTreeNodeOutput {
  data?: BidoFlDTO;
  children?: FunctionalLocationStructureTreeNodeOutput[];
}
