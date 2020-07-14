import { TreeModificationsDTO } from '../../dtos/tree-modifications-dtos';

import { ActionEnum } from './action.enum';
import { TreeNodeAction } from './tree-node-action';
import { TreeNodeUtils } from './tree-node-utils';
/**
 * Tree that keep track of modifications done
 */
export class TreeModifications<T, ID> {
  private _tree: TreeNodeAction[];
  private readonly idGetter: (data: T) => ID | undefined;
  private readonly parentIdSetter: (data: T, parentId?: ID) => void;
  private deletedNodes: TreeNodeAction[];
  private readonly addExpanded: boolean;

  public constructor(
    idGetter: (data: T) => ID | undefined,
    parentIdSetter: (data: T, parentId?: ID) => void,
    addExpanded = true
  ) {
    this.idGetter = idGetter;
    this.parentIdSetter = parentIdSetter;
    this._tree = [];
    this.deletedNodes = [];
    this.addExpanded = addExpanded;
  }

  public get tree(): TreeNodeAction[] {
    return this._tree;
  }

  public set tree(tree: TreeNodeAction[]) {
    this._tree = tree;
    this.deletedNodes = [];
  }

  private refresh(): void {
    // Top level array copy for tree table refresh
    this._tree = [...this._tree];
  }

  public addChildNode(childData: T, parentNode?: TreeNodeAction): void {
    if (childData) {
      const childNode: TreeNodeAction = { data: childData, action: ActionEnum.Add, expanded: this.addExpanded };
      if (parentNode) {
        // Affecting parent key
        this.parentIdSetter(childData, this.idGetter(parentNode.data));
        if (!parentNode.children) {
          parentNode.children = [];
        }
        parentNode.children.push(childNode);
      } else {
        // Adding parent less node
        this._tree.push(childNode);
      }
      this.refresh();
    }
  }

  public markAsUpdated(node: TreeNodeAction): void {
    this.updateNode(node.data, node);
  }

  public updateNode(data: T, node?: TreeNodeAction): void {
    if (node) {
      node.data = data;
      // Keeps existing action or set as update
      node.action = node.action || ActionEnum.Update;
    }
  }

  public deleteNode(node?: TreeNodeAction): void {
    if (node) {
      // Selecting the node list from which the node should be deleted
      let nodeList = this._tree;
      if (node.parent && node.parent.children) {
        nodeList = node.parent.children;
      }

      const nodeIndex = nodeList.indexOf(node);
      if (nodeIndex !== -1) {
        // Removing node from tree
        nodeList.splice(nodeIndex, 1);
        //  Refreshing the tree
        this.refresh();
        // Adding non added deleted node to modifications history
        if (node.action !== ActionEnum.Add) {
          node.action = ActionEnum.Delete;
          this.deletedNodes.push(node);
        }
      }
    }
  }

  public getTreeModifications(): TreeModificationsDTO<T> {
    const treeModificationsDTO: TreeModificationsDTO<T> = {
      addedNodesList: [],
      updatedDataList: [],
      deletedDataList: this.deletedNodes.map((node) => node.data)
    };
    this.getAddOrUpdateModifications(this._tree, treeModificationsDTO);

    return treeModificationsDTO;
  }
  /**
   * Returns tree modifications applying map function on data
   * @param mapFunction Function to map data into expected result
   */
  public mapTreeModifications<R>(mapFunction: (data: T) => R): TreeModificationsDTO<R> {
    const treeModifications = this.getTreeModifications();
    const mapTreeModifications: TreeModificationsDTO<R> = {
      addedNodesList: TreeNodeUtils.mapTreeNode(treeModifications.addedNodesList, mapFunction),
      updatedDataList: treeModifications.updatedDataList.map(mapFunction),
      deletedDataList: treeModifications.deletedDataList.map(mapFunction)
    };

    return mapTreeModifications;
  }

  private getAddOrUpdateModifications(
    nodes: TreeNodeAction[] | undefined,
    treeModificationsDTO: TreeModificationsDTO<T>
  ): void {
    if (nodes) {
      nodes.forEach((node) => {
        switch (node.action) {
          case ActionEnum.Add:
            treeModificationsDTO.addedNodesList.push(node);
            // No recursive call: only added nodes should be present under an added node
            break;
          case ActionEnum.Update:
            treeModificationsDTO.updatedDataList.push(node.data);
            this.getAddOrUpdateModifications(node.children, treeModificationsDTO);
            break;
          default:
            this.getAddOrUpdateModifications(node.children, treeModificationsDTO);
            break;
        }
      });
    }
  }
}
