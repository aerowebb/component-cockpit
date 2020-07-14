import { Component, Input, OnInit } from '@angular/core';

import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { HBidoEquipmentDTO } from '../../../../../shared/types/api-output-types/fleet-management/h-bido-equipment-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';


@Component({
  selector: 'aw-asset-log-table-remaining-values',
  templateUrl: './asset-log-table-remaining-values.component.html'
})
export class AssetLogTableRemainingValuesComponent extends GenericComponent implements OnInit {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  public remainingTable: HBidoEquipmentDTO[];

  @Input()
  public remainingTableCols: TableColumn[];

  @Input()
  public secondTable: HBidoEquipmentDTO[];

  @Input()
  public secondTableCols: TableColumn[];

  @Input()
  // tslint:disable-next-line:no-any
  public get row(): any {
    return this._row;
  }
  // tslint:disable-next-line:no-any
  public set row(value: any) {
    this._row = value;

    this.remainingTableLoading = true;
    this.secondTableLoading = true;

    if (!!this._row) {
      this.load();
    }
  }

  public table: HBidoEquipmentDTO[];
  public tableCols: TableColumn[];
  public tableSecond: HBidoEquipmentDTO[];
  public tableSecondCols: TableColumn[];
  public remainingTableLoading: boolean;
  public secondTableLoading: boolean;
  private _row: HBidoEquipmentDTO;
  public constructor() {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;

    this.init();
  }

  public getComponentName(): string {
    return 'AssetLogTableRemainingValuesComponent';
  }

  public ngOnInit(): void {
    this.setRemainingTableColumnList();
  }
  private init(): void {
    this.remainingTableLoading = true;
    this.secondTableLoading = true;
  }

  private load(): void {
    this.table = this.remainingTable;
    this.tableSecond = this.secondTable;
    this.remainingTableLoading = false;
    this.secondTableLoading = false;
  }


  private setRemainingTableColumnList(): void {
    this.tableCols = this.remainingTableCols;
    this.tableSecondCols = this.secondTableCols;
  }
}
