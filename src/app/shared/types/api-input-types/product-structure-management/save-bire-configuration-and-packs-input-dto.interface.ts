import { BireConfigurationDTOId } from '../../api-types/bire-configuration-dto-id.interface';
import { BireConfigurationDTO } from '../../api-types/bire-configuration-dto.interface';
import { BireConfigurationPackDTO } from '../../api-types/bire-configuration-pack-dto.interface';
import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface SaveBireConfigurationAndPacksInput {
  createBireConfigurationDTO?: BireConfigurationDTO[];
  updateBireConfigurationDTO?: BireConfigurationDTO[];
  removeBireConfigurationDTOId?: BireConfigurationDTOId[];
  createBireConfigurationPackDTOList?: BireConfigurationPackDTO[];
  bireItemDTO?: BireItemDTO;
  configurationCode?: string;
}
