import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';

import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { AirworthinessTableVisibility } from '../enums/airworthiness-table-visibility.enum';
import { AirworthinessRow } from '../types/airworthiness-row.interface';

@Component({
  selector: 'aw-dialog-airworthiness-table-full-screen',
  styleUrls: ['../../share.scss'],
  templateUrl: './dialog-airworthiness-table-full-screen.component.html'
})
export class DialogAirworthinessTableFullScreenComponent extends DialogComponent {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input('table')
  public airworthinessTable: AirworthinessRow[];

  @Input('csnLabel')
  public airworthinessTableColCsnLabel: string;

  @Input('tsnLabel')
  public airworthinessTableColTsnLabel: string;

  @Input()
  public airworthinessTableDisplayedRowNb: number;

  @Input()
  public airworthinessTableVisibilityList: SelectItem[];

  @Input()
  public isAssetViewMode: boolean;

  @Input()
  public navigationLinkList: MenuItem[];

  @Input()
  public potentialUnitList: MenuItem[];

  @Input()
  public get airworthinessTableOnlyAlertsVisible(): boolean {
    return this._airworthinessTableOnlyAlertsVisible;
  }
  public set airworthinessTableOnlyAlertsVisible(value) {
    this._airworthinessTableOnlyAlertsVisible = value;
    this.airworthinessTableOnlyAlertsVisibleChange.emit(this._airworthinessTableOnlyAlertsVisible);
  }

  @Input()
  public get airworthinessTableVisibilitySelected(): AirworthinessTableVisibility {
    return this._airworthinessTableVisibilitySelected;
  }
  public set airworthinessTableVisibilitySelected(value) {
    this._airworthinessTableVisibilitySelected = value;
    this.airworthinessTableVisibilitySelectedChange.emit(this._airworthinessTableVisibilitySelected);
  }

  @Input()
  public get potentialUnitSelected(): string {
    return this._potentialUnitSelected;
  }
  public set potentialUnitSelected(value) {
    this._potentialUnitSelected = value;
    this.potentialUnitSelectedChange.emit(this._potentialUnitSelected);
  }

  @Output()
  public airworthinessTableOnlyAlertsVisibleChange: EventEmitter<boolean>;

  @Output()
  public airworthinessTableVisibilitySelectedChange: EventEmitter<AirworthinessTableVisibility>;

  @Output()
  public potentialUnitSelectedChange: EventEmitter<string>;

  public airworthinessTableCols: TableColumn[];
  public airworthinessTableSelection: AirworthinessRow[];

  private _airworthinessTableOnlyAlertsVisible: boolean;
  private _airworthinessTableVisibilitySelected: AirworthinessTableVisibility;
  private _potentialUnitSelected: string;

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogAirworthinessTableFullScreenComponent');

    this.controlConfigConstants = ControlConfigConstants;

    this.setAssetTableCols();

    this.init();
  }

  public onChangeAirworthinessTableVisibility(): void {
    this.airworthinessTableOnlyAlertsVisible =
      this.airworthinessTableVisibilitySelected === AirworthinessTableVisibility.OnlyAlerts;
  }

  private init(): void {
    this.airworthinessTableOnlyAlertsVisibleChange = new EventEmitter<boolean>();
    this.airworthinessTableVisibilitySelectedChange = new EventEmitter<AirworthinessTableVisibility>();
    this.potentialUnitSelectedChange = new EventEmitter<string>();

    this.airworthinessTableSelection = [];
  }

  private setAssetTableCols(): void {
    this.airworthinessTableCols = [
      { field: 'alert', alignment: 'center', width: '5rem' },
      { field: 'asset', alignment: 'left', width: '15rem' },
      { field: 'designation', alignment: 'left', width: '25rem' },
      { field: 'potential', alignment: 'left', width: '15rem' },
      { field: 'tsn', alignment: 'left', width: '10rem' },
      { field: 'csn', alignment: 'left', width: '10rem' },
      { field: 'status', alignment: 'left', width: '15rem' },
      { field: 'mp', alignment: 'left', width: '15rem' },
      { field: 'nextWorkPackage', alignment: 'left', width: '15rem' }
    ];
  }
}
