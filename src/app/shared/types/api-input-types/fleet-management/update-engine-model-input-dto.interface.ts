import { BidoEvolutionDTO } from '../../api-types/bido-evolution-dto.interface';

export interface UpdateEngineModelInput {
  equipmentCode?: string;
  modelCode?: string;
  pnCode?: string;
  sbIntroucingModel?: BidoEvolutionDTO;
  sbIntroducingLastModel?: BidoEvolutionDTO;
  changeDate ?: Date;
}
