import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { EvolutionDetailDTO } from '../../api-types/evolution-detail-dto.interface';

export interface IWBMinimalEvolution {
  evolutionData?: BireEvolutionDTO;
  category?: string;
  mandatory?: boolean;
  inMinConf?: boolean;
  inConf2?: boolean;
  inConf3?: boolean;
  configurableItemsImpactedList?: BireItemDTO[];
  configurableItemsImpactedText?: string;
  evolutionDetail?: EvolutionDetailDTO;
}
