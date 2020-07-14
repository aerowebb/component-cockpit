import { BireOperationDTO } from './bire-operation-dto.interface';

export interface BidmOperationDTO {
  projectId?: string;
  woId?: string;
  bireOpeCode?: string;
  bireOpeVersion?: string;
  opeOpeningDate?: Date;
  opeClosingDate?: Date;
  opePerformedLastBy?: string;
  opePerformedDuration?: number;
  opePerformedElapsed?: number;
  opeStatus?: string;
  bireTaskCode?: string;
  bireTaskVersion?: string;
  bireOpeRangeCode?: string;
  opePerformedBy?: string;
  opePerformedOn?: Date;
  opePerformedWithEsign?: boolean;
  opeCheckedBy?: string;
  opeCheckedOn?: Date;
  opeCheckedWithEsign?: boolean;
  purchaseRequestCode?: string;
  salesRequestCode?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;

  bireOperationDTO?: BireOperationDTO;
}
