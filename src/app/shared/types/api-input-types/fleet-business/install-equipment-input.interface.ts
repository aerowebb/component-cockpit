import { EventInformationsDTO } from '../../api-types/event-informations-dto.interface';

export interface InstallEquipmentInput {
  equipmentCode?: string;
  assetPn?: string;
  equipmentCodeFather?: string;
  newOperationalStatus?: string;
  isSNEnabled?: boolean;
  equipmentToInstallFunction?: string;
  assetOperationalStatus?: string;
  assetFunLocCode?: string;
  familyVariant?: string;
  newPosition?: string;
  flCode?: string;
  itemKey?: string;
  date?: Date;
  fixStatusFromAsset?: string;
  informationsDTO: EventInformationsDTO;
}
