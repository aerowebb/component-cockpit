import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface SubAssemblySiblingOutput {
  bireItemDTO: BireItemDTO;
  quantity?: string;
  expectedQuantity: string;
  realQuantity: string;
  bireDocumentDTO: BireDocumentDTO;
}
