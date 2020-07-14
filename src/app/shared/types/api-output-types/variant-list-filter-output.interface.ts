import { BireVariantVersionDTO } from '../api-types/bire-variant-version-dto.interface';

export interface VariantListFilterOutput  {
  filterPreferenceFormated?: string;
  bireVariantVersionDTO?: BireVariantVersionDTO;
  name?: string;

}
