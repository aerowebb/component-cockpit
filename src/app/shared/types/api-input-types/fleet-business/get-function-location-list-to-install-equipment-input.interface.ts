import { BireItemDTOId } from '../../api-types/bire-item-dto-id.interface';

export interface GetFunctionLocationListToInstallEquipmentInput {
  date?: Date;
  superiorAssetCode?: string;
  workOrderCode?: string;
  workPackageCode?: string;
  selectedItem?: BireItemDTOId;
}
