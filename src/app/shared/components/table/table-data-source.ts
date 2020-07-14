import { BehaviorSubject, Observable } from 'rxjs';

import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';
import { StringUtils } from '../../utils/string-utils';

export enum ColumnAlignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right'
}

export interface Column {
  field: string;
  alignment?: ColumnAlignment;
  referenceData?: LabelValue<unknown>[];
  translateKey?: string;
  width?: string;
}

export interface ColumnWithFilter {
  _selectedReferenceData?: unknown[];
}

export interface ColumnWithSort {
  _sorted?: number;
}

export interface DataWithCheck {
  _checked: boolean;
}

export interface DataWithId {
  _id: string;
}

export class TableDataSource<T extends Object> {
  private static readonly DEFAULT_ITEMS_PER_PAGE: number = 20;

  public readonly allowMultiSelect: boolean;
  public readonly allowResizableColumns: boolean;
  public readonly columns: (Column & ColumnWithFilter & ColumnWithSort)[];
  public readonly enablePaginator: boolean;
  public readonly enableSelection: boolean;
  public readonly itemsPerPage: number;
  public readonly customGlobalFilter?: (currentData: T, globalSearchText: string | undefined) => boolean;
  public readonly customSort?: (data1: T, data2: T, field: string) => number;

  public readonly data$: Observable<T[]>;

  public isLoading: boolean;

  private readonly dataSubject: BehaviorSubject<T[]>;

  private counter: number;
  private _data: (T & DataWithCheck & DataWithId)[];
  private _dataSelection: (T & DataWithCheck & DataWithId)[];
  private _dataSrc: (T & DataWithCheck & DataWithId)[];

  public constructor({
    columns,
    allowMultiSelect,
    allowResizableColumns,
    data,
    enablePaginator,
    enableSelection,
    itemsPerPage,
    customGlobalFilter,
    customSort
  }: {
    columns: (Column & ColumnWithFilter & ColumnWithSort)[];
    allowMultiSelect?: boolean;
    allowResizableColumns?: boolean;
    data?: T[];
    enablePaginator?: boolean;
    enableSelection?: boolean;
    itemsPerPage?: number;
    customGlobalFilter?: (currentData: T, globalSearchText: string | undefined) => boolean;
    customSort?: (data1: T, data2: T, field: string) => number;
  }) {
    this.allowMultiSelect = ObjectUtils.isDefined(allowMultiSelect) ? (allowMultiSelect as boolean) : true;
    this.allowResizableColumns = ObjectUtils.isDefined(allowResizableColumns)
      ? (allowResizableColumns as boolean)
      : true;
    this.columns = columns;
    this.enablePaginator = ObjectUtils.isDefined(enablePaginator) ? (enablePaginator as boolean) : true;
    this.enableSelection = ObjectUtils.isDefined(enableSelection) ? (enableSelection as boolean) : true;
    this.itemsPerPage = itemsPerPage || TableDataSource.DEFAULT_ITEMS_PER_PAGE;
    this.customGlobalFilter = customGlobalFilter;
    this.customSort = customSort;

    this.isLoading = false;

    this.counter = 0;
    this._dataSelection = [];

    this._setData(data ? data.map((rawData) => this.createData(rawData)) : []);

    this.dataSubject = new BehaviorSubject<T[]>(this._data);
    this.data$ = this.dataSubject.asObservable();

    this.update();
  }

  // //////////////////////////////////////////////////////////////////////////

  public get data(): (T & DataWithCheck & DataWithId)[] {
    return this._data;
  }

  public get dataCount(): number {
    return this._dataSrc.length;
  }

  public get dataSelection(): (T & DataWithCheck & DataWithId)[] {
    return this._dataSelection;
  }

  public set dataSelection(dataSelection: (T & DataWithCheck & DataWithId)[]) {
    // FIXME: remove type assertion (1) when primeng dependency is removed
    // this._dataSelection = this.allowMultiSelect
    //   ? dataSelection
    //   : dataSelection && !ListUtils.isEmpty(dataSelection)
    //   ? [dataSelection[0]]
    //   : [];
    this._dataSelection = this.allowMultiSelect
      ? dataSelection
      : dataSelection
      ? [(dataSelection as unknown) as T & DataWithCheck & DataWithId] // 1
      : [];
  }

  public get dataSelectionCount(): number {
    return this.dataSelection.length;
  }

  public get dataSrc(): (T & DataWithCheck & DataWithId)[] {
    return this._dataSrc;
  }

  public get hasData(): boolean {
    return this._dataSrc.length > 0;
  }

  public get hasDataSelection(): boolean {
    return this._dataSelection.length > 0;
  }

  public get sanitizedData(): T[] {
    return this._data.map((data) => {
      const sanitizedData = { ...data };
      delete sanitizedData._checked;
      delete sanitizedData._id;

      return sanitizedData;
    });
  }

  // //////////////////////////////////////////////////////////////////////////

  public addData(dataToAdd: T[]): void {
    this._setData(this._dataSrc.concat(dataToAdd.map((rawData) => this.createData(rawData))));

    this.update();
  }

  public addReferenceDataToColumn(field: string, referenceData: LabelValue<unknown>[]): void {
    (this.columns.find((column) => column.field === field) as Column).referenceData = referenceData;

    this.update();
  }

  public addContentFilterToColumn(field: string): void {
    let filterValues: string[] = this.dataSrc.map((data) => data[field] as string);
    // Removing duplicate
    filterValues = [...new Set(filterValues)].sort();

    const filter: LabelValue<string>[] = filterValues.map((value): LabelValue<string> => ({ value, label: value }));

    this.addReferenceDataToColumn(field, filter);
  }

  public deleteData(dataToDelete: (T & DataWithCheck & DataWithId)[]): void {
    const dataToDeleteIds = dataToDelete.map((data) => data._id);
    this._setData(this._dataSrc.filter((data) => !dataToDeleteIds.includes(data._id)));

    this.update();
  }

  public deleteDataSelection(): void {
    if (!ListUtils.isEmpty(this.dataSelection)) {
      const dataToDelete = [...this.dataSelection];
      this.dataSelection = [];

      this.deleteData(dataToDelete);
    }
  }

  public filterData(searchText?: string): void {
    // Global filter
    if (!searchText || StringUtils.isEmpty(searchText)) {
      this._data = [...this._dataSrc];
    } else if (this.customGlobalFilter) {
      this._data = this._dataSrc.filter((data) => {
        const customFilterMethod = this.customGlobalFilter as Function;

        return customFilterMethod(data, searchText);
      });
    } else {
      const capitalizedSearchText = searchText.toUpperCase();
      this._data = this._dataSrc.filter((data) =>
        this.columns.some(
          (column) =>
            typeof ((data as unknown) as { [key: string]: unknown })[column.field] === 'string' &&
            (((data as unknown) as { [key: string]: unknown })[column.field] as string)
              .toUpperCase()
              .includes(capitalizedSearchText)
        )
      );
    }

    // Columns reference data
    this._data = this._data.filter((data) => {
      const columnsWithReferenceData = this.columns.filter(
        (column) => column._selectedReferenceData && !ListUtils.isEmpty(column._selectedReferenceData)
      );

      return (
        ListUtils.isEmpty(columnsWithReferenceData) ||
        columnsWithReferenceData.every((column) =>
          (column._selectedReferenceData as unknown[])
            .map(
              (selectedReferenceData) =>
                ((column.referenceData as LabelValue<unknown>[]).find(
                  (columnReferenceData) => columnReferenceData.value === selectedReferenceData
                ) as LabelValue<unknown>).label
            )
            .includes(((data as unknown) as { [key: string]: unknown })[column.field] as string)
        )
      );
    });

    this.update();
  }

  public replaceData(dataToRemove: T & DataWithCheck & DataWithId, dataToAdd: T): void {
    const createdData = this.createData(dataToAdd);
    const aux = (list: (T & DataWithCheck & DataWithId)[]) => {
      const oldDataIndex = list.findIndex((data) => data._id === dataToRemove._id);
      if (oldDataIndex !== -1) {
        list.splice(oldDataIndex, 1, createdData);
      }
    };

    aux(this._dataSrc);
    aux(this._data);

    this.update();
  }

  public setData(newData: T[]): void {
    // Clear prior selection
    this.columns.forEach((column) => {
      column._selectedReferenceData = [];
    });
    this._dataSelection = [];

    this._setData(newData.map((rawData) => this.createData(rawData)));

    this.update();
  }

  public update(): void {
    this.dataSubject.next(this._data);
  }

  // //////////////////////////////////////////////////////////////////////////

  private createData(data: T): T & DataWithCheck & DataWithId {
    return { ...data, _checked: false, _id: this.generateId() };
  }

  private generateId(): string {
    return (this.counter++).toString();
  }

  private _setData(newData: (T & DataWithCheck & DataWithId)[]): void {
    this._dataSrc = newData;
    this._data = [...this._dataSrc];
  }
}
