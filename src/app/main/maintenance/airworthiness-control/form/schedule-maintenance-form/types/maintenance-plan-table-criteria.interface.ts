import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { MaintenancePlanTableTaskCriteria } from '../enums/maintenance-plan-table-task-criteria.interface';
import { MaintenancePlanTableTypeCriteria } from '../enums/maintenance-plan-table-type-criteria.interface';

export interface MaintenancePlanTableCriteria {
  asset?: string;
  controlList: ControlConfigConstants[];
  counterUnit?: string;
  counterValue?: string;
  cycles?: string;
  date?: Date;
  hours?: string;
  taskGroup?: string;
  taskList: MaintenancePlanTableTaskCriteria[];
  typeList: MaintenancePlanTableTypeCriteria[];
  workPackage?: string;
}
