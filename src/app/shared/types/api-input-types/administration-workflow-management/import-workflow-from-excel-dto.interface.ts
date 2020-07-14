export interface ImportWorkflowFromExcelDTO {
  fileName?: string;
  excelSource?: Uint8Array;
  deletion?: boolean;
}
