import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { ReferentialContext } from '../../api-types/referential-context.interface';

export interface GetRecursivelyAssociatedBireEvolutionsToItemAndPnCodeInput {
  referentialContext?: ReferentialContext;
  bireItemDTO?: BireItemDTO;
  pnCode?: string;
  // TODO: These 2 list are binding with an object type that I dont know for the moment
  pnCodeProcessed?: Object[];
  bireEvolutionDataList?: Object[];
}
