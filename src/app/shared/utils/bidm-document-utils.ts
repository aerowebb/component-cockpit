import { BidmDocumentDTO } from '../types/api-types/bidm-document-dto.interface';

import { FileUtils } from './file-utils';
export interface DocumentRow {
  docExtension: string;
  docName: string;
  docPublicationDate: string;
  docSize: string;
  docType: string;
  isChecked: boolean;
  _obj: BidmDocumentDTO;
}

export class BidmDocumentUtils {
  public static areSameDocument(obj1: BidmDocumentDTO | undefined, obj2: BidmDocumentDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
    }
  }

  public static formatDocExtension(document: BidmDocumentDTO): string {
    return FileUtils.getExtension(document.documentName).toUpperCase();
  }

  public static typeFile(fileName: string): string {
    return FileUtils.getExtension(fileName).toUpperCase();
  }

  public static formatDocSize(document: BidmDocumentDTO): string {
    return !!document.documentContent ? FileUtils.getFormattedSize(document.documentContent.length) : '';
  }
}
