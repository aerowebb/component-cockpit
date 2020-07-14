import { BidoPropertiesValueDTO } from '../../api-types/bido-properties-value-dto.interface';
import { BsdeAwCustomDTO } from '../../api-types/bsde-aw-custom-dto.interface';

export interface SaveSettingInput {
  bidoPropertiesValueDTO: BidoPropertiesValueDTO[];
  bsdeAwCustomDTO: BsdeAwCustomDTO[];
}
