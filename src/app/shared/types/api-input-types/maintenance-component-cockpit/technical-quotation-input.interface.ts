import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface TechnicalQuotationInput {
  bireItemDTO?: BireItemDTO;
  projectNumber?: number;
  repairCenterCode?: string;
  taskTypeCode?: string;
}
