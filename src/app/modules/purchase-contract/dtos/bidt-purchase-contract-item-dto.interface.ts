export interface BidtPurchaseContractItemDTO {
  id?: string;
  mandant?: string;
  // Parent id
  bidtPurchaseContractItemId?: string;
  bidtPurchaseContractSliceId?: string;
  pciLabel?: string;
  pciCode?: number;
  pciType?: string;
  pciCommitmentAuthorization?: string;
  pciLegalCommitment?: string;
  pciPriceRevision?: boolean;
  pciPenalties?: boolean;
  pciFlagPackage?: boolean;
  pciPackagePrice?: number;
  pciCurrency?: string;
  pciPaymentConditions?: string;
  pciImplementationConditions?: string;
  statusState?: string;
  pciStartDate?: Date;
  pciEndDate?: Date;
  pciCommittedAmount?: number;
  pciFlagPartialReceipt?: boolean;
}
