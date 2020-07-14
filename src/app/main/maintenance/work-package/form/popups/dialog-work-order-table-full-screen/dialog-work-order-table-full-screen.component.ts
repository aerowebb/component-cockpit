import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem, TreeNode } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { WorkOrderTableCriteria } from '../../types/work-order-table-criteria.interface';
import { WorkOrderRow } from '../../work-package-form.service';

interface WoTableColumn extends TableColumn {
  colspan?: number;
  isFreezed?: boolean;
}

@Component({
  selector: 'aw-dialog-work-order-table-full-screen',
  styleUrls: ['./dialog-work-order-table-full-screen.component.scss'],
  templateUrl: './dialog-work-order-table-full-screen.component.html'
})
export class DialogWorkOrderTableFullScreenComponent extends DialogComponent implements OnInit {
  @Input()
  public workOrderTable: TreeNode[];
  @Input()
  public tableDisplayTypeList: SelectItem[] = [];
  @Input()
  public searchCriteria: WorkOrderTableCriteria;
  @Input()
  public searchGlobalFilter: string;

  @Output()
  public onChangeWorkOrderTableCols: EventEmitter<string>;
  @Output()
  public onFilter: EventEmitter<void>;
  @Output()
  public onReset: EventEmitter<void>;
  @Output()
  public onSearchGlobalFilter: EventEmitter<string>;

  public tableColsHeader: WoTableColumn[][] = [];
  public tableCols: TableColumn[] = [];
  public frozenCols: TableColumn[] = [];
  public selectedWorkOrders: WorkOrderRow[];
  public filtersVisible: boolean = false;
  public tableDisplayTypeSelected: string[];

  private colsListFrozen: WoTableColumn[][];
  private readonly colListMap = new Map<string, WoTableColumn[][]>();

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogWorkOrderTableFullScreenComponent');

    this.onFilter = new EventEmitter<void>();
    this.onReset = new EventEmitter<void>();
    this.onSearchGlobalFilter = new EventEmitter<string>();
    this.initCols();
    this.onChangeWorkOrderTableCols = new EventEmitter<string>();
  }

  public changeWorkOrderTableCols() {
    this.initTableCols();
    this.onChangeWorkOrderTableCols.emit();
  }

  public ngOnInit(): void {
    this.tableDisplayTypeSelected = this.tableDisplayTypeList.map((type) => type.value);
    this.initTableCols();
  }

  public filter(): void {
    this.onFilter.emit();
  }

  public reset(): void {
    this.onReset.emit();
  }

  public searchGlobalFilterChange(searchGlobalFilter: string): void {
    this.onSearchGlobalFilter.emit(searchGlobalFilter);
  }

  private initCols() {
    this.colsListFrozen = [
      [{ field: '_', alignment: 'center', colspan: 2, isFreezed: true }],
      [{ field: '_', alignment: 'center', colspan: 2, isFreezed: true }],
      [
        { field: 'code', alignment: 'left', width: '150px' },
        { field: 'description', alignment: 'left', width: '200px' }
      ]
    ];

    this.colListMap.set('Scheduling', [
      [{ field: 'scheduling', alignment: 'center', width: '50px', colspan: 6 }],
      [{ field: '_', alignment: 'center', width: '50px', colspan: 6 }],
      [
        { field: 'type', alignment: 'left', width: '100px' },
        { field: 'asset', alignment: 'left', width: '100px' },
        { field: 'assignedTo', alignment: 'left', width: '150px' },
        { field: 'componentCockpit', alignment: 'left', width: '150px' },
        { field: 'startDate', alignment: 'left', width: '100px' },
        { field: 'endDate', alignment: 'left', width: '150px' }
      ]
    ]);

    this.colListMap.set('Execution', [
      [{ field: 'execution', alignment: 'center', width: '50px', colspan: 8 }],
      [{ field: '_', alignment: 'center', width: '50px', colspan: 8 }],
      [
        { field: 'progress', alignment: 'center', width: '150px' },
        { field: 'WTY', alignment: 'center', width: '50px' },
        { field: 'openingDate', alignment: 'left', width: '150px' },
        { field: 'closingDate', alignment: 'left', width: '150px' },
        { field: 'componentCockpit', alignment: 'left', width: '150px' },
        { field: 'comments', alignment: 'left', width: '200px' },
        { field: 'checkedBy', alignment: 'left', width: '150px' },
        { field: 'checkedOn', alignment: 'left', width: '150px' }
      ]
    ]);

    this.colListMap.set('Engineering', [
      [{ field: 'engineering', alignment: 'center', width: '50px', colspan: 6 }],
      [{ field: '_', alignment: 'center', width: '50px', colspan: 6 }],
      [
        { field: 'origin', alignment: 'left', width: '250px' },
        { field: 'relatedItem', alignment: 'left', width: '250px' },
        { field: 'zone', alignment: 'left', width: '150px' },
        { field: 'standardDuration', alignment: 'left', width: '150px' },
        { field: 'standardCost', alignment: 'left', width: '150px' },
        { field: 'qualification', alignment: 'left', width: '150px' }
      ]
    ]);

    this.colListMap.set('Timeline', [
      [{ field: 'timeline', alignment: 'center', width: '50px', colspan: 4 }],
      [
        { field: 'workload', alignment: 'center', width: '50px', colspan: 2 },
        { field: 'duration', alignment: 'center', width: '50px', colspan: 2 }
      ],
      [
        { field: 'planWorkload', alignment: 'right', width: '100px' },
        { field: 'Workload', alignment: 'right', width: '100px' },
        { field: 'planDuration', alignment: 'right', width: '100px' },
        { field: 'Duration', alignment: 'right', width: '100px' }
      ]
    ]);

    this.colListMap.set('Costs', [
      [{ field: 'costs', alignment: 'center', width: '50px', colspan: 8 }],
      [
        { field: 'totalCost', alignment: 'center', width: '50px', colspan: 2 },
        { field: 'labourCost', alignment: 'center', width: '50px', colspan: 2 },
        { field: 'materialCost', alignment: 'center', width: '50px', colspan: 2 },
        { field: 'subcontractingCost', alignment: 'center', width: '50px', colspan: 2 }
      ],
      [
        { field: 'planTotalCost', alignment: 'right', width: '100px' },
        { field: 'TotalCost', alignment: 'right', width: '100px' },
        { field: 'planLaborCost', alignment: 'right', width: '100px' },
        { field: 'LaborCost', alignment: 'right', width: '100px' },
        { field: 'planMaterialCost', alignment: 'right', width: '100px' },
        { field: 'MaterialCost', alignment: 'right', width: '100px' },
        { field: 'planSubcontractCost', alignment: 'right', width: '100px' },
        { field: 'SubcontractingCost', alignment: 'right', width: '100px' }
      ]
    ]);
  }

  private initTableCols(): void {
    this.tableColsHeader = this.colsListFrozen;

    this.tableDisplayTypeSelected.forEach((typeSelected) => {
      this.tableColsHeader = this.tableColsHeader.map((colHeader, i) => [
        ...colHeader,
        ...this.addGroupCols(typeSelected, i)
      ]);
    });

    this.tableCols = this.tableColsHeader[2];
    this.frozenCols = [
      { field: 'code', alignment: 'left', width: '50px' },
      { field: 'description', alignment: 'left', width: '150px' }
    ];
  }

  private addGroupCols(groupColName: string, level: number): WoTableColumn[] {
    let groupCols: WoTableColumn[] = [];
    const groupAllCols = this.colListMap.get(groupColName);
    if (groupAllCols && groupAllCols[level]) {
      groupCols = groupAllCols[level];
    }

    return groupCols;
  }
}
