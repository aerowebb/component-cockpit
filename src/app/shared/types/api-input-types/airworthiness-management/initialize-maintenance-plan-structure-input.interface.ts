export interface InitializeMaintenancePlanStructureInput {
  topEquipmentCode: string;

  areDeletedTasksHidden?: boolean;
  counterCodeSelected?: string;
  filterActivated?: boolean;
  modeScheduleWPVisibility?: boolean;
  onlyTaskOnCondition?: boolean;
  showActiveTasksChecked?: boolean;
  showInactiveTasksChecked?: boolean;
  targetCounterValue?: string;
  targetCycles?: string;
  targetDate?: Date;
  targetEvent?: string;
  targetHours?: string;
  taskGroupCodeSelected?: string;
  timeInterval?: string;
  unitCodeEquivalentSelected?: string;
}
