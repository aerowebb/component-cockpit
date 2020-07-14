import { TreeNode } from 'primeng/api';

import { ActionEnum } from './action.enum';

export interface TreeNodeAction extends TreeNode {
  action?: ActionEnum;
}
