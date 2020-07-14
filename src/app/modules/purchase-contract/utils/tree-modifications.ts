import { TreeNode } from 'primeng/api';

/**
 * Tree that keep track of modifications done
 */
export class TreeModifications<T> {
  private _tree: TreeNode[];

  public TreeNodeModifications() {
    this._tree = [];
  }

  public get tree(): TreeNode[] {
    return this._tree;
  }

  public set tree(tree: TreeNode[]) {
    this._tree = tree;
  }
}
