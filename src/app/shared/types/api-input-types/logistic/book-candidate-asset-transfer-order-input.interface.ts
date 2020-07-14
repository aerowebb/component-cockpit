import { BidtTorItemDTO } from '../../api-types/bidt-tor-item-dto.interface';
import { CandidateAssetDTO } from '../../api-types/candidate-asset-dto.interface';

export interface BookCandidateAssetTransferOrderInput {
  bidtTorItem: BidtTorItemDTO;
  candidateAsset: CandidateAssetDTO;
  quantity: string;
}
