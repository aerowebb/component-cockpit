import { BireVariantVersionDTO } from '../../api-types/bire-variant-version-dto.interface';

export interface FindAllAssetForAirworthinessControlInput {
  aircraftTypeSelected: boolean;
  allAssetTypeSelected: boolean;
  engineTypeSelected: boolean;
  equipmentTypeSelected: boolean;
  aircraftStatusCode?: string;
  assetCode?: string;
  bireVariantVersion?: BireVariantVersionDTO;
  designation?: string;
  functionCode?: string;
  location?: string;
  modelCode?: string;
  mpName?: string;
  mpRevision?: string;
  operationalStatusCode?: string;
  operatorCustomerCode?: string;
  ownerCustomerCode?: string;
  pnCode?: string;
  registration?: string;
  snCode?: string;
  warehouseCode?: string;
  familyVariantCode?: string;
  equipmentFunction?: string;
}
