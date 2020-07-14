import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

export interface OperationTabData extends PageComponentData {
  isNewOperation?: boolean;
  opeCode?: string;
  opeVersion?: string;
  rangeCode?: string;
}
