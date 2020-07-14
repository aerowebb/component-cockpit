import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../enums/table-selection-mode.enum';
import { DateService } from '../../services/date.service';
import { LoaderService } from '../../services/loader.service';
import { MessageService } from '../../services/message.service';
import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';

import { DialogTableData } from './types/dialog-table-data.interface';

@Component({
  selector: 'aw-dialog-table',
  templateUrl: './dialog-table.component.html'
})
export class DialogTableComponent<T> extends DialogComponent implements OnInit {
  @Input('data') public tableData: DialogTableData<T>;
  @Input('keyMap') public keyObservableMap: Map<string, Observable<LabelValue<string>[]>>;
  @Output() public onSelected: EventEmitter<T | T[]>;

  public readonly tableColumnFilterMode: typeof TableColumnFilterMode;
  public readonly tableSelectionMode: typeof TableSelectionMode;

  public colWidthUnit: string | undefined;
  public formattedTableRows: object[];
  public moreResults: boolean;
  public selection: object | object[] | undefined;
  public showColumnFilters: boolean;
  public tableWidth: string | undefined;

  private readonly objectMap: Map<object, T>;

  public constructor(
    public translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly loaderService: LoaderService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogTableComponent');

    this.displayChange = new EventEmitter<boolean>();

    this.onSelected = new EventEmitter<T | T[]>();

    this.tableColumnFilterMode = TableColumnFilterMode;
    this.tableSelectionMode = TableSelectionMode;

    this.colWidthUnit = undefined;
    this.formattedTableRows = [];
    this.moreResults = false;
    this.objectMap = new Map<object, T>();
    this.showColumnFilters = false;
    this.tableWidth = undefined;
  }

  public ngOnInit(): void {
    this.loaderService.hideLoadingBar();

    if (!!this.tableData) {
      this.init();
      this.computeTableWidth();

      this.selection = this.tableData.selectionMode === TableSelectionMode.Multiple ? [] : undefined;
      this.showColumnFilters = !this.tableData.tableCols.some((col: TableColumn) => {
        return !!col.filterMode && col.filterMode === TableColumnFilterMode.None;
      });
    }
  }

  public validate(): void {
    if (
      (this.selection instanceof Array && ListUtils.isEmpty(this.selection)) ||
      (!(this.selection instanceof Array) && !this.selection)
    ) {
      this.messageService.showWarningMessage('global.warningOnNoSelection');
    } else {
      if (this.selection instanceof Array) {
        this.onSelected.emit(this.selection.map((row) => this.objectMap.get(row)).filter((obj) => !!obj) as T[]);
      } else {
        this.onSelected.emit(this.objectMap.get(this.selection) as T);
      }

      this.closeDialog();
    }
  }

  private computeTableWidth(): void {
    const tableWidthData = this.tableData.tableCols.map((col) =>
      !!col.width ? /^(\d+(?:\.\d+)?)[ ]*([a-zA-Z]+)$/g.exec(col.width) : undefined
    );
    if (tableWidthData.every((regExpMatches) => !!regExpMatches)) {
      const widthIndex = 1;
      const unitIndex = 2;

      const colUnitList = tableWidthData
        .map((regExpMatches: RegExpExecArray) => regExpMatches[unitIndex])
        .map((unit) => unit.trim())
        .map((unit) => unit.toLowerCase());

      if (colUnitList.filter((v, i, a) => a.indexOf(v) === i).length === 1) {
        this.colWidthUnit = colUnitList[0];

        let tableWidth = tableWidthData
          .map((regExpMatches: RegExpExecArray) => regExpMatches[widthIndex])
          .map(Number)
          .reduce((acc, val) => acc + val, 0);
        if (this.colWidthUnit === 'rem') {
          const tableScrollbarWidthInRem = 2;
          tableWidth += tableScrollbarWidthInRem;
        } else if (this.colWidthUnit === 'px') {
          const tableScrollbarWidthInPx = 20;
          tableWidth += tableScrollbarWidthInPx;
        }
        this.tableWidth = tableWidth.toString();
      }
    }
  }

  private init(): void {
    if (!!this.keyObservableMap) {
      const columnsWithKey: string[] = Array.from(this.keyObservableMap.keys());
      const keyValueMap: { [key: string]: string } = {};

      forkJoin(Array.from(this.keyObservableMap.values())).subscribe((keyValueResults) => {
        keyValueResults.forEach((keyValueResult) => {
          keyValueResult.forEach((keyValue) => {
            keyValueMap[keyValue.value] = keyValue.label;
          });
        });

        this.loadAndFormatTableRows(columnsWithKey, keyValueMap);
      });
    } else {
      this.loadAndFormatTableRows([], {});
    }
  }

  private loadAndFormatTableRows(columnsWithKey: string[], keyValueMap: { [key: string]: string }): void {
    this.tableData.tableRows.subscribe((result) => {
      if (!!result) {
        this.moreResults = result.moreResults;

        this.formattedTableRows = result.list
          .map((obj) => {
            const formattedObj = {};
            this.tableData.tableCols.forEach((tableCol) => {
              if (Object.getOwnPropertyNames(obj).some((property) => property === tableCol.field)) {
                if (tableCol.isDate !== undefined && tableCol.isDate !== null && tableCol.isDate) {
                  if (obj[tableCol.field] instanceof Date) {
                    formattedObj[tableCol.field] = this.dateService.dateToString(obj[tableCol.field]);
                  } else if (typeof obj[tableCol.field] === 'number') {
                    formattedObj[tableCol.field] = this.dateService.timestampToString(obj[tableCol.field]);
                  }
                } else {
                  formattedObj[tableCol.field] =
                    columnsWithKey.includes(tableCol.field) &&
                    Object.getOwnPropertyNames(keyValueMap).some((property) => property === obj[tableCol.field])
                      ? keyValueMap[obj[tableCol.field]]
                      : !!obj[tableCol.field]
                      ? obj[tableCol.field].toString()
                      : '';
                }
              }
            });

            if (
              !!this.tableData.dataKey &&
              Object.getOwnPropertyNames(obj).some((property) => property === this.tableData.dataKey)
            ) {
              const idPropertyName = '_id';
              formattedObj[idPropertyName] = obj[this.tableData.dataKey];
            }

            this.objectMap.set(formattedObj, obj);

            return formattedObj;
          })
          .filter((obj) => !ListUtils.isEmpty(Object.getOwnPropertyNames(obj)));
      }
    });
  }
}
