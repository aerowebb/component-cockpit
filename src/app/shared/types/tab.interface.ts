import { PageComponentData } from './page-component-data.interface';

export interface Tab {
  id: number;
  data: PageComponentData;
  isVisible: boolean;
  label: string;
  translatedLabel: boolean;
  context?: string;
  scrollY?: number;
  translatedContext?: boolean;
}
