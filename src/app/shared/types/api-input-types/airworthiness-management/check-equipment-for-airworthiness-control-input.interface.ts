export interface CheckEquipmentForAirworthinessControlInput {
  equipmentCodeList: string[];
  simulation: boolean;
  simulationCyclesValue: number | undefined;
  simulationDateValue: Date | undefined;
  simulationHoursValue: number | undefined;
  equipmentToCheck: string;
}
