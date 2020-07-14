import { TreeNode } from 'primeng/api';

import { AssetStructureDTO } from './asset-structure-dto.interface';

export interface GetEquipmentTreeTableDTO {
  assetStructure?: AssetStructureDTO;
  assetTreeNode?: TreeNode;
}
