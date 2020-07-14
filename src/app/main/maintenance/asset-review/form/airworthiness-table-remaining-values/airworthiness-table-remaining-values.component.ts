import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { AssetReviewFormService } from '../asset-review-form.service';

@Component({
  selector: 'aw-airworthiness-table-remaining-values',
  templateUrl: './airworthiness-table-remaining-values.component.html'
})
export class AirworthinessTableRemainingValuesComponent extends GenericComponent implements OnInit {
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  @Input()
  // tslint:disable-next-line:no-any
  public remainingTable: any;

  @Input()
  public remainingTableCols: TableColumn[];

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
  public tableCols: TableColumn[];
  public remainingTableLoading: boolean;

  // tslint:disable-next-line:no-any
  private _row: any;

  public constructor(private readonly assetReviewFormService: AssetReviewFormService) {
    super(ComponentOpenMode.Write);

    this.controlConfigConstants = ControlConfigConstants;

    this.registerPotentialUnitObservable();

    this.init();
  }

  public getComponentName(): string {
    return 'AssetReviewTableRemainingValuesComponent';
  }

  public ngOnInit(): void {
    this.setRemainingTableColumnList();
  }
  private init(): void {
    this.remainingTableLoading = true;
  }

  private load(): void {
    this.table = this.remainingTable;

    this.remainingTableLoading = false;
  }

  private registerPotentialUnitObservable(): void {
    this.assetReviewFormService.potentialUnit$.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.load();
    });
  }

  private setRemainingTableColumnList(): void {
    this.tableCols = this.remainingTableCols;
  }
}
