export interface FindBireSbsByEquipmentInput {
  familyVariantCode?: string;
  equipmentCode?: string;
  applicationStatus?: number[];
  optionalSbTypes?: string[];
  optionalSbTypesToExclude?: string[];
  optionalEngineSerialNumber?: string;
}
