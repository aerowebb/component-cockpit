import { BireDocPugDTOId } from '../../api-output-types/product-structure-management/bire-doc-pug-dto-id.interface';
import { BireDocPugDTO } from '../../api-output-types/product-structure-management/bire-doc-pug-dto.interface';
export interface SaveBireDocPugsInput {
  addedList?: BireDocPugDTO[];
  updatedList?: BireDocPugDTO[];
  deletedList?: BireDocPugDTOId[];
}
