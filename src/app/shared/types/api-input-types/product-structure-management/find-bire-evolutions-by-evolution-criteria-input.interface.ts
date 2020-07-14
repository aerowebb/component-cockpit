import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';

export interface FindBireEvolutionsByEvolutionCriteriaInput {
  bireEvolutionDTO: BireEvolutionDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
}
