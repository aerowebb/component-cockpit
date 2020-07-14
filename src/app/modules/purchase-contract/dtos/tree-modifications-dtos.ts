import { TreeNode } from 'primeng/api';

export interface TreeModificationsDTO<T> {
  addedNodesList: TreeNode[];
  updatedDataList: T[];
  deletedDataList: T[];
}
