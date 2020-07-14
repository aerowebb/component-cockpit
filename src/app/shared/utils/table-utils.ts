import { TableColumn } from '../../shared/types/table-column.interface';

import { StringUtils } from './string-utils';

export class TableUtils {
  public static removeEmptyRows<T>(rows: T[], columns: TableColumn[]): T[] {
    return rows.filter((row) => {
      return columns.some((col) => !StringUtils.isNullOrEmpty(row[col.field]));
    });
  }
}
