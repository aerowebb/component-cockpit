import * as FileSaver from 'file-saver';

import { NumberUtils } from './number-utils';

export class FileUtils {
  public static readonly KIBIOCTET: number = 1024;
  public static readonly KILOOCTET: number = 1000;

  public static downloadFile(file: Uint8Array | undefined, fileName: string | undefined): void {
    if (!!file && !!fileName) {
      const byteCharacters = atob(file.toString());
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      FileSaver.saveAs(new Blob([new Uint8Array(byteNumbers)]), fileName);
    }
  }

  public static getExtension(fileName: string | undefined): string {
    return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
  }

  public static getFileContentAsBase64(file: File | undefined, callback: (fileContent: Uint8Array) => void): void {
    if (!!file) {
      const reader: FileReader = new FileReader();
      reader.onloadend = () => {
        let fileContent: any = reader.result; // tslint:disable-line:no-any
        fileContent = fileContent.substring((fileContent.indexOf(',') as number) + 1); // Remove data:*/*;base64,
        callback(fileContent);
      };
      reader.readAsDataURL(file);
    }
  }

  public static getFormattedSize(size: number | undefined): string {
    if (!!size) {
      return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
        ? `${NumberUtils.roundNumber(size / FileUtils.KILOOCTET)} Ko`
        : `${NumberUtils.roundNumber(size / FileUtils.KILOOCTET / FileUtils.KILOOCTET)} Mo`;
    } else {
      return '';
    }
  }
}
