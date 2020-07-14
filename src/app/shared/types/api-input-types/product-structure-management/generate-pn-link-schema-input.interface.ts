import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface GeneratePNLinkSchemaInput {
  applicabilityDate: Date | undefined;
  familyCode: string;
  structureType: string;
  variantCode: string;
  bireItemDTO: BireItemDTO;
}
