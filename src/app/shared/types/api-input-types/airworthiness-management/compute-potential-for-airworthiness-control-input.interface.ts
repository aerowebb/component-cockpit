export interface ComputePotentialForAirworthinessControlInput {
  equipmentCodeList: string[];
  simulation: boolean;
  simulationCyclesValue: number | undefined;
  simulationDateValue: Date | undefined;
  simulationHoursValue: number | undefined;
  unitMeasure: string;
}
