import { BireVariantVersionDTO } from '../../api-types/bire-variant-version-dto.interface';

export interface FindAllAssetForAirworthinessControlInput {
  assetCode?: string;
  assetTypeSelected: boolean;
  bireVariantVersion?: BireVariantVersionDTO;
  designation?: string;
  equipmentFunctionKey?: string;
  fleetId?: string;
  itemFamilyCodeKey?: string;
  location?: string;
  modelCode?: string;
  mpName?: string;
  mpRevision?: string;
  operationalStatusKey?: string;
  operatorCustomerCode?: string;
  ownerCustomerCode?: string;
  pnCode?: string;
  registration?: string;
  snCode?: string;
  warehouseId?: string;
  familyVariantCode?: string;
  equipmentFunction?: string;
}
