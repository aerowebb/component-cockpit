import { Component, Input, OnInit } from '@angular/core';

import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';

@Component({
  selector: 'aw-asset-remaining-table-values',
  templateUrl: './asset-remaining-table-values.component.html',
  styleUrls: ['./asset-remaining-table-values.component.scss']
})
export class AssetRemainingTableValuesComponent extends GenericComponent implements OnInit {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  // tslint:disable-next-line:no-any
  public remainingTable: any;

  @Input()
  public remainingTableCols1: TableColumn[];

  @Input()
  public remainingTableCols2: TableColumn[];

  @Input()
  public singleRow : boolean;

  @Input()
  // tslint:disable-next-line:no-any
  public get row(): any {
    return this._row;
  }
  // tslint:disable-next-line:no-any
  public set row(value: any) {
    this._row = value;

    this.remainingTableLoading = true;

    if (!!this._row) {
      this.load();
    }
  }

  // tslint:disable-next-line:no-any
  public table: any;
  public tableCols1: TableColumn[];
  public tableCols2: TableColumn[];
  public remainingTableLoading: boolean;

  // tslint:disable-next-line:no-any
  private _row: any;

  public constructor() {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;


    this.init();
  }


  public ngOnInit() {
    this.setRemainingTableColumnList();
  }


  private init(): void {
    this.remainingTableLoading = true;
  }
  public getComponentName(): string {
    return 'AssetRemainingTableValuesComponent';
  }

  private load(): void {
    this.table = this.remainingTable;

    this.remainingTableLoading = false;
  }

  private setRemainingTableColumnList(): void {
    this.tableCols1 = this.remainingTableCols1;
    this.tableCols2 = this.remainingTableCols2;
  }

}
