export interface BirePnMeasureDTO {
  pnCode?: string;
  counterCode?: string;
  familyCode?: string;
  structureType?: string;
  ratingCode?: string;
  sb?: string;
  pnPotentialReferenceValue?: string;
  pnPotentialLimitDate?: Date;
  limitIsUpdatable?: boolean;
  limitDescription?: string;
  interventionOptions?: string;
  valueResettable?: boolean;
  tolerance?: number;
}
