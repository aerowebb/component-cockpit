import { BireEvolutionDTO } from './bire-evolution-dto.interface';

export interface EvolutionDetailDTO {
  bireEvolutionData?: BireEvolutionDTO;
  customizedEvolutionCompliance?: string;
  sbs?: string;
  ads?: string;
  mods?: string;
  sbs_Tooltip?: string;
  ads_Tooltip?: string;
  mods_Tooltip?: string;
  mods_Applicability?: string;
}
