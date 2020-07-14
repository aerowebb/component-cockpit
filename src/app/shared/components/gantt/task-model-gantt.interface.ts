export interface TaskModelObject {
  id: number;
  name?: string;
  description?: string;
  expanded?: boolean;
  draggable?: boolean;
  startDate?: Date;
  endDate?: Date;
  children?: TaskModelObject[];
  duration?: number;
}
