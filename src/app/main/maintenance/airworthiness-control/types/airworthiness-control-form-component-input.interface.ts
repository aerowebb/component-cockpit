import { SimulationCriteria } from './simulation-criteria.interface';

export interface AirworthinessControlFormComponentInput {
  equipmentCodeList: string[];
  familyVariantList?: string[];
  functionList?: string[];
  simulationCriteria?: SimulationCriteria;
  warehouse?: string;
  _parent?: AirworthinessControlFormComponentInput;
}
