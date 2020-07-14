import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface ExportAssetDataInput {
  equipmentCriteria?: BidoEquipmentDTO;
  familyVariantCodeSelected?: boolean;
  codeSelected?: boolean;
  pnSelected?: boolean;
  snSelected?: boolean;
  designationSelected?: boolean;
  eisDateSelected?: boolean;
  functionCodeSelected?: boolean;
  functionSelected?: boolean;
  lifeRestrictionSelected?: boolean;
  operationalStatusSelected?: boolean;
  registrationSelected?: boolean;
  superiorAssetCodeSelected?: boolean;
  operatorCodeSelected?: boolean;
  ownerCodeSelected?: boolean;
}
