export interface BidtPurchaseContractDTO {
  id?: string;
  // Parent contract Id
  bidtPurchaseContractId?: string;
  bidtSiteId?: string;
  bidtEmployeeId?: number;
  pcNumber?: string;
  pcLabel?: string;
  pcBusinessCode?: string;
  // AE
  pcCommitmentAuthorization?: string;
  // EJ
  pcLegalCommitment?: string;
  pcValidityStartDate?: Date;
  pcValidityEndDate?: Date;
  pcCreationDate?: Date;
  pcUpdateDate?: Date;
  pcMinimumAmount?: number;
  pcMaximumAmount?: number;
  pcCurrency?: string;
  pcType?: string;
  statusState?: string;
  statusDate?: Date;
  statusUser?: string;
}
