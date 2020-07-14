import { BireItemPnEvolutionDTO } from '../../api-types/bire-item-pn-evolution-dto.interface';
import { BireVersionPnDTO } from '../../api-types/bire-version-pn-dto.interface';

export interface GeneratePNLinkSchemaOutput {
  rootPnList?: BireVersionPnDTO[];
  pnItemPnEvolutionMap: Map<string, BireItemPnEvolutionDTO[]>;
}
