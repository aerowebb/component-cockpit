import { FleetDTOCopyOptions } from '../../api-input-types/fleet-management/fleet-dto-copy-options.interface';

export interface AssetFleetDataCopyInputDTO {
  sourceAssetCode?: string;
  targetAssetCodeList?: string[];
  fleetDTOCopyOptions?: FleetDTOCopyOptions;
}
