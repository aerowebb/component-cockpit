import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface ACTreeNode {
  data?: BireItemDTO;
  children?: ACTreeNode[];
}
