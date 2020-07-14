import { TreeNode } from 'primeng/api';

import { StockInformationDTO } from '../../api-types/stock-information-dto-interface';

export interface StockConsultElementOutput extends TreeNode {
  localisation?: string;
  quantity?: number;
  stockInformationDTOs?: StockInformationDTO[];
  children?: StockConsultElementOutput[];
}
