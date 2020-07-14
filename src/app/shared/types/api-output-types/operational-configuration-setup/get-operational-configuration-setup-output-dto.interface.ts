import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { WoAssetManagementDTO } from '../../api-types/wo-asset-management-dto.interface';

export interface GetOperationalConfigurationSetupOutputDTO {
  woAssetManagementDTOList?: WoAssetManagementDTO[];
  bidmProjectDTO?: BidmProjectDTO;
  projectAssetRepresentation?: string;
  repairCenterLabel?: string;
  employeeWarehouseId?: number;
  employeeWarehouseName?: string;
}
