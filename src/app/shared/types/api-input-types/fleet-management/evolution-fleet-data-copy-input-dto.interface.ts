import { BidoEvolutionDTO } from '../../api-types/bido-evolution-dto.interface';

export interface EvolutionFleetDataCopyInputDTO {
  familyVariantCode?: string;
  bidoEvolutionDTO?: BidoEvolutionDTO;
  dateApply?: Date;
  isPartiallyApplied?: boolean;
  equipmentCodeList?: string[];
  description?: string;
}
