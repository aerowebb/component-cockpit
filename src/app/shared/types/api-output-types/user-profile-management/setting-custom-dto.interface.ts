import { BsdeAwCustomDTO } from '../../api-types/bsde-aw-custom-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface SettingCustomDTO {
  bsdeAwCustomDTO: BsdeAwCustomDTO;
  name: string;
  customize: boolean;
  customValueList: LabelValue<string>[];
}
