import { TaskModelObject } from './task-model-gantt.interface';

export interface ColumnsModelObject {
  enableCellContextMenu?: boolean;
  htmlEncode?: boolean;
  locked?: boolean;
  field?: string;
  editor?: boolean;
  text: string;
  type?: string;
  width: number;
  draggable?: boolean;
  renderer?: ({ record }: { record: { data: TaskModelObject } }) => string;
}
