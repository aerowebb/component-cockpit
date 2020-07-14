import { ProjectModel } from 'bryntum-gantt';

import { ColumnsModelObject } from './columns-model-object.interface';

interface Labels {
  field: string;
  editor: { type: string };
}

interface GanttLabels {
  left: Labels;
}

interface ProjectLines {
  enableResizing: boolean;
}

interface ItemsTaskContext {
  add: boolean;
  deleteTask: false;
}

interface TaskContextMenu {
  items: ItemsTaskContext;
  processItems: Function;
}

export interface GanttConfig {
  columns: ColumnsModelObject[];
  project: ProjectModel;
  labels?: GanttLabels;
  projectLines?: ProjectLines;
  taskContextMenu?: TaskContextMenu;
}
