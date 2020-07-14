export interface ControlConfigurationInput {
  checkConfiguration: boolean;
  checkFl: boolean;
  checkLogbook: boolean;
  checkMel: boolean;
  checkPotential: boolean;
  checkReferential: boolean;
  checkStructure: boolean;
  equipmentCode: string;
  projectId?: string;
  withAllCounters: boolean;
  withFunctionalLocations: boolean;
  withMelFlag: boolean;
  withItemStructure?: boolean;
}
