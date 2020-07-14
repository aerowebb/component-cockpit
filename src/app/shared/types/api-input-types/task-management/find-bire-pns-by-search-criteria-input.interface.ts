import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface FindBirePnsBySearchCriteriaTMInput {
  birePnDTOCriteria?: BirePnDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  section?: string;
  sheet?: string;
  mark?: string;
  subject?: string;
  flocTypeExcluded?: string;
}
