import { DependenciesModel } from './dependencies-data-model.interface';
import { TaskModelObject } from './task-model-gantt.interface';

export interface ProjectModelObject {
  eventsData: TaskModelObject[];
  dependenciesData?: DependenciesModel[];
}
