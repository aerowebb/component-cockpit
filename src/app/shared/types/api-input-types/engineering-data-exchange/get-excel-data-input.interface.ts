export interface GetExcelDataInput {
  fileName: string;
  excelSource: Uint8Array;
  withOldDataRemoving: boolean;
  familyCodeSelected?: string;
  structureTypeSelected?: string;
  variantCodeSelected?: string;
  data: string;
}
