import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Table } from 'primeng/table';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { ObjectUtils } from '../../utils/object-utils';

import { ColumnDefDirective } from './column-def.directive';
import { HeaderColumnDefDirective } from './header-column-def.directive';
import { RowExpansionDefDirective } from './row-expansion-def.directive';
import { TableActionsDefDirective } from './table-actions-def.directive';
import { Column, ColumnWithSort, DataWithCheck, DataWithId, TableDataSource as DataSource } from './table-data-source';

interface SortEvent<T> {
  data: T[];
  field: Column;
  order: number;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'a-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html'
})
export class TableComponent<T extends DataWithId & DataWithCheck> implements AfterContentInit, OnChanges {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 250;

  @ContentChild(TableActionsDefDirective)
  public actionsDef: TableActionsDefDirective;

  @ContentChildren(ColumnDefDirective)
  public columnsDef: QueryList<ColumnDefDirective>;

  @ContentChild(HeaderColumnDefDirective)
  public headerColumnDef: HeaderColumnDefDirective;

  @ContentChild(RowExpansionDefDirective)
  public rowExpansionDef: RowExpansionDefDirective;

  @Input()
  public dataSource: DataSource<T>;

  @Output()
  public onRowSelect: EventEmitter<{ event: Event; selectedData: T; index: number }>;

  @Output()
  public onRowUnselect: EventEmitter<{ event: Event; selectedData: T }>;

  @Output()
  public onRowTogglerClick: EventEmitter<{ event: Event; selectedData: T }>;

  @ViewChild(Table)
  public table: Table;

  public enableCustomSort: boolean;
  public showColumnFilter: boolean;
  public showColumnFilterToggle: boolean;

  public actionsTemplate: TemplateRef<unknown> | undefined;
  public bodyTemplates: { [column: string]: TemplateRef<unknown> };
  public headerTemplate: TemplateRef<unknown> | undefined;
  public rowExpansionTemplate: TemplateRef<unknown> | undefined;

  private readonly _unsubscribe: Subject<void>;
  private dataSubscription: Subscription;

  private searchTextChanged: Subject<string>;

  public constructor() {
    this._unsubscribe = new Subject<void>();

    this.init();
    this.registerSearchTextObservable();
  }

  public ngAfterContentInit(): void {
    this.initTemplates();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSource) {
      if (this.dataSubscription) {
        // Remove previous subscription
        this.dataSubscription.unsubscribe();
      }
      this.dataSubscription = this.dataSource.data$.pipe(takeUntil(this._unsubscribe)).subscribe((data) => {
        // Reset pagination if page is after last element
        if (data.length <= this.table.first) {
          this.table.first = 0;
        }
      });
    }
  }

  // //////////////////////////////////////////////////////////////////////////

  public get hasColumnsWithReferenceData(): boolean {
    return this.dataSource.columns.some((column) => ObjectUtils.isDefined(column.referenceData));
  }

  public onClickCheckbox(event: Event): void {
    event.preventDefault();
  }

  public onClickRowToggler(event: Event, selectedData: T): void {
    this.onRowTogglerClick.emit({ event, selectedData });
  }

  public onSelectColumnReferenceData(): void {
    this.dataSource.filterData();
  }

  public onSortTable(event: { field: { field: string }; order: number }): void {
    this.dataSource.columns.forEach((column) => {
      column._sorted = 0;
    });

    const sortedColumn = this.dataSource.columns.find((column) => column.field === event.field.field);
    (sortedColumn as ColumnWithSort)._sorted = event.order;
  }

  public onUpdateGlobalFilter(searchText: string): void {
    this.searchTextChanged.next(searchText);
  }

  public selectRow(event: { originalEvent: Event; data: T; index: number }): void {
    if (!this.dataSource.allowMultiSelect) {
      this.updateAllRowsCheckProperty(false);
    }

    event.data._checked = true;

    this.onRowSelect.emit({ event: event.originalEvent, selectedData: event.data, index: event.index });
  }

  public sort(event: SortEvent<T>) {
    const defaultSortMethod = (data1: T, data2: T, field: string) => {
      const value1 = data1[field];
      const value2 = data2[field];

      let result: number;

      if (!ObjectUtils.isDefined(value1) && ObjectUtils.isDefined(value2)) {
        result = -1;
      } else if (ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
        result = 1;
      } else if (!ObjectUtils.isDefined(value1) && !ObjectUtils.isDefined(value2)) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = JSON.stringify(value1).localeCompare(JSON.stringify(value2));
      }

      return result;
    };

    const sortMethod = this.dataSource.customSort || defaultSortMethod;

    event.data.sort((data1, data2) => event.order * sortMethod(data1, data2, event.field.field));
  }

  public toggleAllRows(event: Event): void {
    event.preventDefault();

    if (this.dataSource.dataSelectionCount > 0) {
      this.updateAllRowsCheckProperty(false);

      this.dataSource.dataSelection = [];
    } else {
      this.updateAllRowsCheckProperty(true);

      this.dataSource.dataSelection = this.dataSource.data;
    }
  }

  public toggleColumnFilterVisibility(): void {
    this.showColumnFilter = !this.showColumnFilter;
  }

  public unselectRow(event: { originalEvent: Event; data: T; index: number }): void {
    event.data._checked = false;

    this.onRowUnselect.emit({ event: event.originalEvent, selectedData: event.data });
  }

  // //////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.enableCustomSort = true;
    this.showColumnFilter = false;
    this.showColumnFilterToggle = false;

    this.actionsTemplate = undefined;
    this.bodyTemplates = {};
    this.headerTemplate = undefined;
    this.rowExpansionTemplate = undefined;

    this.onRowSelect = new EventEmitter<{ event: Event; selectedData: T; index: number }>();
    this.onRowUnselect = new EventEmitter<{ event: Event; selectedData: T }>();
    this.onRowTogglerClick = new EventEmitter<{ event: Event; selectedData: T }>();
  }

  private initTemplates(): void {
    this.actionsTemplate = ObjectUtils.isDefined(this.actionsDef) ? this.actionsDef.template : undefined;
    this.columnsDef.forEach((template) => {
      this.bodyTemplates[template.getName()] = template.template;
    });
    this.headerTemplate = ObjectUtils.isDefined(this.headerColumnDef) ? this.headerColumnDef.template : undefined;
    this.rowExpansionTemplate = ObjectUtils.isDefined(this.rowExpansionDef) ? this.rowExpansionDef.template : undefined;
  }

  private registerSearchTextObservable(): void {
    this.searchTextChanged = new Subject<string>();
    this.searchTextChanged
      .pipe(
        debounceTime(TableComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this._unsubscribe)
      )
      .subscribe((searchText) => {
        this.table.first = 0;

        this.dataSource.filterData(searchText);
      });
  }

  private updateAllRowsCheckProperty(newCheckedValue: boolean): void {
    this.dataSource.data.forEach((data) => {
      data._checked = newCheckedValue;
    });
  }
}
