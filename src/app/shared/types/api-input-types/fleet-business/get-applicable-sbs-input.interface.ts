export interface GetApplicableSbsInput {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  optionalSbTypes?: string[];
  optionalSbTypesToExclude?: string[];
  optionalSerialNumber?: string;
}
