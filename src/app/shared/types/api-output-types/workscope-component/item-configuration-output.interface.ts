import { SelectItem } from 'primeng/api';

import { BireItemDTO } from '../../api-types/bire-item-dto.interface';

export interface ItemConfigurationOutput {
  bireItemDTO?: BireItemDTO;
  bireItemText?: string;
  conf1?: string;
  conf2?: string;
  conf3?: string;
  iwbTargetConfigList1?: SelectItem[];
  iwbTargetConfigList2?: SelectItem[];
  iwbTargetConfigList3?: SelectItem[];
}
