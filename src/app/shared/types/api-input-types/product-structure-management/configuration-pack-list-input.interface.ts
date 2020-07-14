import { BireItemVersionDTO } from '../../api-types/bire-item-version-dto.interface';

export interface ConfigurationPackListInput {
  bireItemVersionDTO?: BireItemVersionDTO;
  configurationCode?: string;
}
