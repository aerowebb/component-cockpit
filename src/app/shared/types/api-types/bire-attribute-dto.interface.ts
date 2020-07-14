import { AttributeDTO } from './attribute-dto.interface';
import { BireAttributeValueDTO } from './bire-attribute-value-dto.interface';

export interface BireAttributeDTO extends AttributeDTO {
  attributeDescriptionEn?: string;
  attributeDescriptionFr?: string;
  attributeCategory?: string;
  attributeType?: string;
  isStandard?: boolean;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bireAttributeValueDatas?: BireAttributeValueDTO[];
}
