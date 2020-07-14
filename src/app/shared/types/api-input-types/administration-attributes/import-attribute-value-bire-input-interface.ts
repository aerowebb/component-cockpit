
import { BireAttributeDTO } from '../../api-types/bire-attribute-dto.interface';

export interface ImportAttributeValuesBireInput extends BireAttributeDTO {
  fileName: string;
  excelSource : Uint8Array;
  bireAttributeDTO : BireAttributeDTO;
}
