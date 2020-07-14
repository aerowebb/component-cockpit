import { ComponentOpenMode } from '../enums/component-open-mode.enum';

export interface PageComponentData {
  id: number;
  componentId: string;
  openMode: ComponentOpenMode;
  objectId?: string;
}
