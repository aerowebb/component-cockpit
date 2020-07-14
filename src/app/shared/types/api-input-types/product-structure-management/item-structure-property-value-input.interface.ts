import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface ItemStructurePropertyValueInput {
  bireItemDTO: BireItemDTO;
  propertyKey: string;
  isn?: string;
  applicability?: string;
}
