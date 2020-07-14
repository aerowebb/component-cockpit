export interface ExportReferentialFileInput {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  mark?: string;
  withFamilyVariant?: boolean;
  withUnitMeasure?: boolean;
  withMeasureReference?: boolean;
  withPn?: boolean;
  withEvolution?: boolean;
  withSb?: boolean;
  withModification?: boolean;
  lastPublicationDate?: string; // send as date.toISOString()
}
