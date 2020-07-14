export interface EquipmentDTO {
  assetCode?: string;
  pn?: string;
  sn?: string;
  registration?: string;
  assetText?: string;
  familyVariant?: string;
  ownerCustomerText?: string;
  operatorCustomerText?: string;
  equipmentDesignation?: string;
  equipmentFunction?: string;
  operationalStatus?: string;
  children?: EquipmentDTO[];
}
