export interface GetObjectStatusListInput {
  isObjectTypeOfBireSbDTO: boolean;
  isObjectTypeOfBireEvolutionDTO: boolean;
  isObjectTypeOfBireMaintenancePlanDTO: boolean;
  objectStatus: string | undefined;
  isSapSession: boolean;
}
