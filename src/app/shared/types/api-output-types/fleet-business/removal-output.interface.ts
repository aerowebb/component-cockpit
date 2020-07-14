import { RemovalAssetOutputDTO } from './removal-asset-output-dto.interface';

export interface RemovalOutput {
  removalAssetOutputList?: RemovalAssetOutputDTO[];
  report?: string;
}
