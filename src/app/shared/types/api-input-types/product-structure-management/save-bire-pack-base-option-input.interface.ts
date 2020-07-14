import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { BirePackBaseOptionDTOId } from '../../api-types/bire-pack-base-option-dto-id.interface';
import { BirePackBaseOptionDTO } from '../../api-types/bire-pack-base-option-dto.interface';
import { BirePackEvolutionDTO } from '../../api-types/bire-pack-evolution-dto.interface';

export interface SaveBirePackBaseOptionInput {
  createBirePackBaseOptionList?: BirePackBaseOptionDTO[];
  updateBirePackBaseOptionList?: BirePackBaseOptionDTO[];
  removeBirePackBaseOptionList?: BirePackBaseOptionDTOId[];
  createBirePackEvolutionDTOList?: BirePackEvolutionDTO[];
  updateBirePackEvolutionDTOList?: BirePackEvolutionDTO[];
  bireItemDTO?: BireItemDTO;
  packBaseOptionCode?: string[];
}
