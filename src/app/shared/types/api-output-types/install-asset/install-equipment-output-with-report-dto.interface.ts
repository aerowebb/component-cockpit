import { InstallAssetOutputDTO } from '../fleet-business/install-asset-output-dto.interface';

export interface InstallEquipmentOutputWithReportDTO {
  installAssetOutputDTO?: InstallAssetOutputDTO[];
  reportMsg?: string;
}
