import { BireEvolutionEvolutionDTO } from './bire-evolution-evolution-dto.interface';

export interface EvolutionInterdependencesListDTO {
  bireEvolutionEvolutionDTO: BireEvolutionEvolutionDTO;
  adInitialText?: string;
  adDependentText?: string;
  sbInitialText?: string;
  sbDependentText?: string;
  modInitialText?: string;
  modDependentText?: string;
}
