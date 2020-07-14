import { MaintenancePlanStructureElementOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/maintenance-plan-structure-element-output.interface';

export interface MaintenancePlanRow {
  firstColumn: string;
  firstColumnTooltip: string;
  alert: string;
  alertTooltip: string;
  asset: string;
  counterAlert: string;
  counterAlertTooltip: string;
  description: string;
  nextTerm: string;
  nextWorkPackage: string;
  nextWorkPackageTooltip: string;
  period: string;
  postponement: string;
  remaining: string;
  remainingEquivalent: string;
  remainingEquivalentIcon: string;
  remainingEquivalentTooltip: string;
  status: string;
  tolerance: string;
  type: string;
  usageCounterExplanation: string;
  _id: number;
  _obj: MaintenancePlanStructureElementOutput;
  _isTypeEquipment?: boolean;
  _displayBtnADDWP?: boolean;
  _isActiveWorkPackageBtn?: boolean;
}
