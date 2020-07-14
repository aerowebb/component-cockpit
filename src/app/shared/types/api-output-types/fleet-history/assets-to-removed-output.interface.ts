import { AssetsToBeRemovedOutputDTO } from './assets-to-be-removed-output-dto.interface';

export interface AssetsToRemoveOutput {
  subject: string;
  assetList: AssetsToBeRemovedOutputDTO[];
}
