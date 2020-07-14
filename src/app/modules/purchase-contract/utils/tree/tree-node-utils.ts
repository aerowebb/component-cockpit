import { TreeNode } from 'primeng/api';

export class TreeNodeUtils {
  /**
   * @param <T> Type of parameter tree nodes
   * @param <ID> Type of result tree nodes
   */
  public static mapTreeNode<T, R>(treeNode: TreeNode[] | undefined, mapFunction: (node: T) => R): TreeNode[] {
    return treeNode
      ? treeNode.map((node) => ({
          data: mapFunction(node.data),
          children: TreeNodeUtils.mapTreeNode(node.children, mapFunction)
        }))
      : [];
  }

  /**
   * @param <T> Type of parameter tree nodes
   * @param <ID> Type of result tree nodes
   */
  public static setExpanded(treeNode: TreeNode[] | undefined, expanded = true, recursively = true): void {
    if (treeNode) {
      treeNode.forEach((node) => {
        node.expanded = expanded;
        if (recursively) {
          TreeNodeUtils.setExpanded(node.children, expanded, recursively);
        }
      });
    }
  }
}
