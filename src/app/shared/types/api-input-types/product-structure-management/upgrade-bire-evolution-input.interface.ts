import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';

export interface UpgradeBireEvolutionInput {
  bireEvolutionDTO: BireEvolutionDTO;
  targetRevisionNumber: string;
}
