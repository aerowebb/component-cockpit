import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface GenerateConfigInput {
  bireItemData: BireItemDTO;
  bireEvolutionDataList: BireEvolutionDTO[];
  bireEvolutionDataAppliedList: BireEvolutionDTO[] | undefined;
  atLeastOneInventory: boolean;
  onlyUnknownInventory: boolean;
  pnUnknownMode: boolean;
}
