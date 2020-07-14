export interface AssetMaintenancePlanOutput {
  mmModuleActivated?: Boolean;
  hrModuleActivated?: Boolean;
  customisationStatus?: boolean;
  customisationStatusIcon?: string;
  ampName?: string;
  ampRevision?: string;
  ampCode?: string;
  assetText?: string;
  assetTSN?: string;
  assetCSN?: string;
  assetRegistration?: string;
  assetEisDate?: Date;
  assetManufacturingDate?: Date;
  standardTimeCounterLabel?: string;
  standardCycleCounterLabel?: string;
  isPlanApproved?: boolean;
}
