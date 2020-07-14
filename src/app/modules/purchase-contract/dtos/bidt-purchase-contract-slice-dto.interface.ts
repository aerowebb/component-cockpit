export interface BidtPurchaseContractSliceDTO {
  id?: string;
  bidtPurchaseContractId?: string;
  pcsOrder?: number;
  pcsDescription?: string;
  pcsType?: string;
  pcsConsolidationDate?: Date;
  pcsDuration?: number;
  pcsDurationUnit?: string;
  pcsStartDate?: Date;
  pcsEndDate?: Date;
  pcsMinimumAmount?: number;
  pcsCommitedAmount?: number;
  pcsMaximumAmount?: number;
  pcsCurrency?: string;
  statusState?: string;
  statusDate?: Date;
  statusUser?: string;
}
