import { IntervalDTO } from '../interval-dto.interface';

export interface FindBidtPurchaseContractsByCriteriaInput {
  pcNumber?: string;
  pcLabel?: string;
  statusState?: string;
  pcLegalCommitment?: string;
  pcCreationDateInterval: IntervalDTO<Date>;
  pnCode?: string;
}
