import { BsdeSiteDTO } from '../api-types/bsde-site-dto.interface';

export interface SiteListFilterOutput {
  bsdeSiteDTO?: BsdeSiteDTO;
  name?: string;
  filterPreferenceFormated?: string;
}
