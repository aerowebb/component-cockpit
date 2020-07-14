export interface SaveFlightEquipmentInputDTO {
  missionCode: string;
  familyVariantCode: string;
  occurence: number;
  newEquipmentCode: string;
  previousEquipmentCode?: string;
}
