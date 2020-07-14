import { WorkscopeTreeData } from '../../api-output-types/workscope-component/workscope-tree-data-output';

export interface SaveWorkscopeInput {
  projectNumber?: number;
  workscopeTreeDataList?: WorkscopeTreeData[];
  workscopeTreeDataListToRemove?: WorkscopeTreeData[];
  workscopeTreeDataListToAdd?: WorkscopeTreeData[];
}
