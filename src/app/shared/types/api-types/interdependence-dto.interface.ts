import { BireEvolutionDTO } from './bire-evolution-dto.interface';

export interface InterdependenceDTO {
  bireEvolutionData1: BireEvolutionDTO;
  bireEvolutionData2: BireEvolutionDTO;
  evolutionNumber1: string;
  evolutionNumber2: string;
  dependences: string;
  issueMessage: string;
}
