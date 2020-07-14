import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';
import { BireOperationAttributeDTO } from '../../api-types/bire-operation-attribute-dto.interface';
import { BireOperationDTO } from '../../api-types/bire-operation-dto.interface';
import { BireOperationPnDTO } from '../../api-types/bire-operation-pn-dto.interface';

export interface SaveBireOperationInput {
  bireOperation?: BireOperationDTO;
  bireOperationPnAddedList?: BireOperationPnDTO[];
  bireOperationPnRemovedList?: BireOperationPnDTO[];
  bireOperationPnUpdatedList?: BireOperationPnDTO[];
  bireDocumentAddedList?: BireDocumentDTO[];
  bireDocumentRemovedList?: BireDocumentDTO[];
  bireDocumentUpdatedList?: BireDocumentDTO[];
  bireOperationAttributes?: BireOperationAttributeDTO[];
}
