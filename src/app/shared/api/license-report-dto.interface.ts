export interface LicenseReportDTO {
  buildingBlocks?: string[];
  mobileUsers?: string[];
  serviceUsers?: string[];
  buildingBlocksPerProfile?: Map<string, string>;
  numberOfAircraftAllowed?: number;
  numberOfAircraft?: number;
  numberOfMobileUsersAllowed?: number;
  numberOfMobileUsers?: number;
  numberOfServiceUsersAllowed?: number;
  numberOfServiceUsers?: number;
  expiryDate?: Date;
}
