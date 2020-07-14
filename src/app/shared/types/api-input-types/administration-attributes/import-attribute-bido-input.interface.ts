import { BidoAttributeDTO } from '../../api-types/bido-attribute-dto.interface';

export interface ImportAttributeInput extends BidoAttributeDTO {
  fileName: string;
  excelSource: Uint8Array;
  bidoAttributeDTO: BidoAttributeDTO;
}
