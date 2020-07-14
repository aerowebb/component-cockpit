import { StockStatusOutputDto } from './stock-status-output-dto.interface';

export interface SSTreeNode {
  data?: StockStatusOutputDto;
  parent?: SSTreeNode;
  isChildData?: boolean;
  children?: SSTreeNode[];
}
