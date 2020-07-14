export interface GenerateAirworthinessControlTableInput {
  equipmentCodeList: string[];
  simulation: boolean;
  simulationCyclesValue: number | undefined;
  simulationDateValue: Date | undefined;
  simulationHoursValue: number | undefined;
  unitEquivalent: string;
}
