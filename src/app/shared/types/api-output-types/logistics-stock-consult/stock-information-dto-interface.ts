// TODO: remove it; use instead api-types/StockInformationDTO
export interface StockInformaionDto {
  pn: string;
  designation: string;
  siteId: string;
  siteText: string;
  warehouseId: string;
  warehouseText: string;
  storageBinId: string;
  storageBinText: string;
  stockTypeId: string;
  stockTypeText: string;
  valuationGroupId: string;
  valuationGroupText: string;
  stockSn: string;
  stockBatchNumber: string;
  stockReceiptDate: Date;
  stockReceiptQuantity: number;
  stockIssueDate: Date;
  stockIssueQuantity: number;
  stockIssueWorkOrderWoId: string;
  stockIssueWorkOrderWoCode: string;
  stockIssueProjectId: string;
  stockReceiptWorkOrderWoId: string;
  stockReceiptWorkOrderWoCode: string;
  stockReceiptProjectId: string;
  stockQuantityDtos: StockInformaionDto[];
  stockIssueDtos: StockInformaionDto[];
  issueDateStr: string;
  quantityDateStr: string;
  _expand: boolean | false;
}
