import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

interface UsageData {
  id?: string;
  isUpdateH?: boolean;
  isUpdateC?: boolean;
  monthCode?: string;
  usageValueH?: string;
  usageValueC?: string;
}

@Component({
  selector: 'aw-dialog-usage',
  templateUrl: './dialog-usage.component.html'
})
export class DialogUsageComponent extends DialogComponent implements OnChanges {
  @Input() public usageHistoryData: UsageData[];
  public usageHistoryTableDataSource: TableDataSource<UsageData>;
  public statusDialog: boolean;
  @Output()
  public onValidate: EventEmitter<UsageData[]>;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogUsageComponent');
    this.initUsageHistoryTableDataSource();
    this.onValidate = new EventEmitter<UsageData[]>();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.usageHistoryData) {
      this.usageHistoryTableDataSource.setData(this.usageHistoryData);
    }
  }

  private initUsageHistoryTableDataSource(): void {
    this.usageHistoryTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'monthCode',
          translateKey: this.getTranslateKey('monthCode')
        },
        {
          field: 'usageValueH',
          translateKey: this.getTranslateKey('usageValueH')
        },
        {
          field: 'usageValueC',
          translateKey: this.getTranslateKey('usageValueC')
        }
      ],
      data: []
    });
  }

  public validate() {
    this.onValidate.emit(this.usageHistoryTableDataSource.dataSrc);
    this.closeDialog();
  }
}
