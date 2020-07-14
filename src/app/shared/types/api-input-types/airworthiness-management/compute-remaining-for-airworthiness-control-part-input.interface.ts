export interface ComputeRemainingForAirworthinessControlPartInput {
  equipmentCodeList: string[];
  simulation: boolean;
  simulationCyclesValue: number | undefined;
  simulationDateValue: Date | undefined;
  simulationHoursValue: number | undefined;
  unitMeasure: string;
  equipmentCode: string;
  fatherEquipmentCode: string | undefined;
}
