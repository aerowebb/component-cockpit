export interface BirePnMeasureTmpDTO {
  pnCode?: string;
  counterCode?: string;
  familyCode?: string;
  structureType?: string;
  ratingCode?: string;
  pnPotentialReferenceValue?: string;
  pnPotentialLimitDate?: Date;
  limitIsUpdatable?: boolean;
  limitDescription?: string;
  interventionOptions?: string;
  valueResettable?: boolean;
  tolerance?: number;
  sb?: string;
}
