import { TreeNode } from 'primeng/api';

import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

import { BireItemForWorkscopeTreeDTO } from './bire-item-for-workscope-tree-dto.interface';

export interface WorkscopeTreeData extends TreeNode {
  data?: BireItemForWorkscopeTreeDTO;
  children?: WorkscopeTreeData[];
  bireItemDTO?: BireItemDTO;
}
