import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as XLSX from 'xlsx';

import { LangConstants } from '../../shared/constants/lang-constants';

@Injectable()
export class ExportService {
  public constructor(private readonly translateService: TranslateService) {}

  public toExcel<T>(
    data: T[],
    fileName: string,
    translateKeyPrefix: string | undefined,
    opts?: XLSX.JSON2SheetOpts
  ): void {
    // generate worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, opts);

    // update header
    if (!!translateKeyPrefix) {
      const sheetRange = ws['!ref'];
      if (!!sheetRange) {
        const formattedTranslateKeyPrefix = translateKeyPrefix.endsWith('.')
          ? translateKeyPrefix
          : translateKeyPrefix + '.';

        const range = XLSX.utils.decode_range(sheetRange);
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const address = `${XLSX.utils.encode_col(C)}1`;
          if (!ws[address]) {
            continue;
          }
          ws[address].v = this.translateService.instant(`${formattedTranslateKeyPrefix}${ws[address].v}`);
        }
      }
    }

    // generate workbook and add the worksheet
    const sheetName = this.translateService.currentLang === LangConstants.FRENCH_CODE ? 'Feuille1' : 'Sheet1';
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    // save to file
    XLSX.writeFile(wb, fileName + '.xlsx');
  }

  // TODO: refactor
  public toExcel2<T>(
    fileName: string,
    data: T[],
    translateKeyPrefix: string,
    headerList: string[],
    rawHeaderList: string[]
  ): void {
    // generate worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, { header: headerList });

    // update header
    if (!!translateKeyPrefix) {
      const sheetRange = ws['!ref'];
      if (!!sheetRange) {
        const formattedTranslateKeyPrefix = translateKeyPrefix.endsWith('.')
          ? translateKeyPrefix
          : translateKeyPrefix + '.';

        const range = XLSX.utils.decode_range(sheetRange);
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const address = `${XLSX.utils.encode_col(C)}1`;
          if (!ws[address]) {
            continue;
          }
          if (!rawHeaderList.includes(ws[address].v)) {
            ws[address].v = this.translateService.instant(`${formattedTranslateKeyPrefix}${ws[address].v}`);
          }
        }
      }
    }

    // generate workbook and add the worksheet
    const sheetName = this.translateService.currentLang === LangConstants.FRENCH_CODE ? 'Feuille1' : 'Sheet1';
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    // save to file
    XLSX.writeFile(wb, fileName + '.xlsx');
  }
}
