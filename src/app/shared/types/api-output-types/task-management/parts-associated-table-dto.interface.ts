import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface PartsAssociatedTableDTO {
  birePnDTO?: BirePnDTO;
  consumableTypeKey?: string;
  consumableTypeValue?: string;
  consumableName?: string;
  consumableCode?: string;
}
