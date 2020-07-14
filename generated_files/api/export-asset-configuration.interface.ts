import { ExportCloumnDTO } from './export-cloumn.interface';

export interface ExportAssetConfiguration {
  columnFamilyVariantCode?: ExportCloumnDTO;
  columnCode?: ExportCloumnDTO;
  columnPn?: ExportCloumnDTO;
  columnSn?: ExportCloumnDTO;
  columnRegistration?: ExportCloumnDTO;
  columnDesignation?: ExportCloumnDTO;
  columnFunction?: ExportCloumnDTO;
  columnOperationalStatus?: ExportCloumnDTO;
  columnFunctionCode?: ExportCloumnDTO;
  columnEisDate?: ExportCloumnDTO;
  columnLifeRestriction?: ExportCloumnDTO;
  columnSuperiorAssetCode?: ExportCloumnDTO;
  columnOwnerCode?: ExportCloumnDTO;
  columnOperatorCode?: ExportCloumnDTO;
  columns?: ExportCloumnDTO[];
  fileExtension?: string;
  withTitles?: boolean;
  csvSeparator?: string;
}
