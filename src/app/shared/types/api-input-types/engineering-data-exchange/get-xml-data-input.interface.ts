export interface GetXMLDataInput {
  fileName: string;
  xmlSource: Uint8Array;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  withDeletion: boolean;
  simulate: boolean;
  data: string;
}
