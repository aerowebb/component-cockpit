import { BireSbDTO } from '../../api-types/bire-sb-dto.interface';
import { HBireSbDTO } from '../../api-types/h-bire-sb-dto.interface';

export interface RemoveSbHistoryEntitiesInput {
  historyEntities: HBireSbDTO[];
  bireSb: BireSbDTO;
}
