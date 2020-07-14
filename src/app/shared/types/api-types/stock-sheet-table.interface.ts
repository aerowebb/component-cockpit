export interface StockSheetTable {
  date: Date;
  materialCode: string;
  materialDesignation: string;

  receiptQuantity: number;
  receiptValue: number;
  receiptAmount: number;

  issueQuantity: number;
  issueValue: number;
  issueAmount: number;

  stockQuantity: number;
  stockValue: number;
  stockAmount: number;
}
