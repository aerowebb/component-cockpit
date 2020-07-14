import { BidtProcReqItemDTO } from '../../api-types/bidt-proc-req-item-dto.interface';
import { CandidateAssetDTO } from '../../api-types/candidate-asset-dto.interface';

export interface BookCandidateAssetInput {
  bidtProcReqItem: BidtProcReqItemDTO;
  candidateAsset: CandidateAssetDTO;
  quantity: string;
}
