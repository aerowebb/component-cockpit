import { Component, Input, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FlightRowDTO } from '../flight-row-dto.inerface';

@Component({
  selector: 'aw-mission-table-remaining-values',
  templateUrl: './mission-table-remaining-values.component.html'
})
export class MissionTableRemainingValuesComponent extends GenericComponent implements OnInit {
  @Input()
  public remainingTable: FlightRowDTO[];

  @Input()
  public remainingTableCols: TableColumn[];

  public table: FlightRowDTO[];
  public tableCols: TableColumn[];
  public remainingTableLoading: boolean;

  public constructor() {
    super(ComponentOpenMode.Write);
    this.remainingTableLoading = true;
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHTS_MISSION_FORM;
  }

  public ngOnInit(): void {
    this.setRemainingTableColumnList();
    this.load();
  }

  private load(): void {
    this.table = this.remainingTable;
    this.remainingTableLoading = false;
  }

  private setRemainingTableColumnList(): void {
    this.tableCols = this.remainingTableCols;
  }
}
