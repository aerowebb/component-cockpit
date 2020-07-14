export interface ExportMaintenanceFileInput {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  withTaskStructure?: boolean;
  withShopManual?: boolean;
  withRange?: boolean;
  withComponent?: boolean;
  withTechnicalLevel?: boolean;
  withQualification?: boolean;
  withMaintenancePlan?: boolean;
  withTaskGroup?: boolean;
  withDamage?: boolean;
  withLocalisation?: boolean;
  taskGroupCode?: string;
}
