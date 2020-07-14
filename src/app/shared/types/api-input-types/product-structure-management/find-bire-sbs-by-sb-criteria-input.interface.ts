import { BireSbDTO } from '../../api-types/bire-sb-dto.interface';

export interface FindBireSbsBySbCriteriaInput {
  bireSbDTO?: BireSbDTO;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  fCode?: string;
  publicationDateFrom?: Date;
  publicationDateTo?: Date;
  effectiveDateFrom?: Date;
  effectiveDateTo?: Date;
}
