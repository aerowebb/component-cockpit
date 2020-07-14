import { ComponentOpenMode } from '../../shared/enums/component-open-mode.enum';

export interface PopupEntry<T> {
  componentId: string;
  selectedRow: T[] | undefined;
  object: T | undefined;
  openMode: ComponentOpenMode;
}
