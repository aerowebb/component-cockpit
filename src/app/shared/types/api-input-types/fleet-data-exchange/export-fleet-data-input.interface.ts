export interface ExportFleetDataInput {
  equipmentCode: string[];
  date?: Date;
  lockAsset?: boolean;
  exportEngineeringData?: boolean;
}
