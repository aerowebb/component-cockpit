import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface FindBirePnsBySearchCriteriaPSMInput {
  birePnDTOCriteria?: BirePnDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  itemFamilyCode?: string;
  chapter?: string;
  section?: string;
  sheet?: string;
  mark?: string;
  subject?: string;
  flocTypeExcluded?: string;
  familyFunction?: string;
  pnType?: string;
  toolSearch?: boolean;
  attributesMap?: Object;
  isSerialized?: boolean;
}
