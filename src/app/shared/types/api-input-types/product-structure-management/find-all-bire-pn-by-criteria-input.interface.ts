import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface FindAllBirePnByCriteriaInput {
  birePnDTO?: BirePnDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  mark?: string;
  flocTypeExcluded?: string;
}
