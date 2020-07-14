import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';

interface FLHistory {
  flCode?: string;
  flDescription?: string;
  flFunction?: string;
  attachementDate?: string;
  deAttachementDate?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}

@Component({
  selector: 'aw-dialog-fl-history',
  templateUrl: './dialog-fl-history.component.html'
})
export class DialogFlHistoryComponent extends DialogComponent implements OnInit, OnChanges {
  @Input() public flHistoryData: FLHistory[];
  public flHistoryTableDataSource: TableDataSource<FLHistory>;
  private statusList: LabelValue<string>[];
  public statusDialog: boolean;
  public equipmentStatus: FLHistory;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogFlHistoryComponent');
    this.initFlHistoryTableDataSource();
    this.statusDialog = false;
  }

  private initFlHistoryTableDataSource(): void {
    this.flHistoryTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'status',
          translateKey: this.getTranslateKey('status')
        },
        {
          field: 'flCode',
          translateKey: this.getTranslateKey('flCode')
        },
        {
          field: 'flDescription',
          translateKey: this.getTranslateKey('flDescription')
        },
        {
          field: 'flFunction',
          translateKey: this.getTranslateKey('flFunction')
        },
        {
          field: 'attachementDate',
          translateKey: this.getTranslateKey('attachementDate')
        },
        {
          field: 'deAttachementDate',
          translateKey: this.getTranslateKey('deAttachementDate')
        }
      ],
      data: []
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.flHistoryData) {
      this.flHistoryTableDataSource.setData(this.flHistoryData);
    }
  }

  public ngOnInit() {
    this.propertiesService.getObjectStatusList(false, false, false, '', false).subscribe((results) => {
      this.statusList = results;
      LabelValueUtils.stringValueToLabel<FLHistory[]>(
        this.flHistoryTableDataSource.dataSrc,
        'statusState',
        this.statusList
      );
    });
  }

  public openStatusInfo(rowData: FLHistory) {
    this.statusDialog = true;
    this.equipmentStatus = {
      statusState: rowData.statusState,
      statusUser: rowData.statusUser,
      statusDate: rowData.statusDate
    };
  }
}
