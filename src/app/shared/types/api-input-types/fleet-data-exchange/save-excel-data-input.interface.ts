export interface SaveExcelDataInput {
  fileName?: string;
  excelSource?: Uint8Array;
  removingChoice?: boolean;
  familyCodeSelected?: string;
  variantCodeSelected?: string;
  isSimulated?: boolean;
  data?: string;
}
