import { Observable } from 'rxjs';

import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { TableSelectionMode } from '../../../enums/table-selection-mode.enum';

export interface DialogTableData<T> {
  componentId: string;
  tableCols: TableColumn[];
  tableRows: Observable<SearchResultsDTO<T>>;
  selectionMode: TableSelectionMode;
  exportExcel?: boolean;
  dataKey?: string;
  globalFilter?: boolean;
}
