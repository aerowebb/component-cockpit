import { BireConcernedAssetDTO } from '../../api-types/bire-concerned-asset-dto.interface';
import { BireModificationAttributeDTO } from '../../api-types/bire-modification-attribute-dto.interface';
import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';

export interface SaveModificationInput {
  bireModificationDTO: BireModificationDTO;
  bireConcernedAssetDTOList: BireConcernedAssetDTO[];
  isForUpdate: boolean;
  bireModificationAttributeDTO: BireModificationAttributeDTO[];
}
