import { TableColumnFilterMode } from '../enums/table-column-filter-mode.enum';

export interface TableColumn {
  field: string;
  alignment?: string;
  width?: string;
  filterMode?: TableColumnFilterMode;
  isDate?: boolean;
  isDateWithHour?: boolean;
}
