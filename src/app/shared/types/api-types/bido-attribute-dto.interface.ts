import { AttributeDTO } from './attribute-dto.interface';
import { BidoAttributeValueDTO } from './bido-attribute-value-dto.interface';

export interface BidoAttributeDTO extends AttributeDTO {
  attributeDescriptionEn?: string;
  attributeDescriptionFr?: string;
  attributeCategory?: string;
  attributeType?: string;
  isStandard?: boolean;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bidoAttributeValueDatas?: BidoAttributeValueDTO[];
}
