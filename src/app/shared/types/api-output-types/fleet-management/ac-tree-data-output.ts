import { TreeNode } from 'primeng/api';

import { BireItemDTO } from '../../api-types/bire-item-dto.interface';
import { SentenceAndDecisionListOutput } from '../maintenance-component-cockpit/sentence-and-decision-list-output.interface';

import { BireItemForTreeDTO } from './bire-item-for-tree-dto.interface';

export interface ACTreeData extends TreeNode {
  data?: BireItemForTreeDTO;
  children?: ACTreeData[];
  bireItemDTO?: BireItemDTO;
  sentenceAndDecisionList?: SentenceAndDecisionListOutput[];
}
