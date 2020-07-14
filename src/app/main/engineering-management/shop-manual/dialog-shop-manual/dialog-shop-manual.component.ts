import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { SessionService } from '../../../../shared/services/session.service';
import { BireShopManualDTO } from '../../../../shared/types/api-output-types/administration-catalog/bire-shop-manual-dto.interface';
import { BireShopManualDTOId } from '../../../../shared/types/api-types/bire-shop-manual-dto-id.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { ShopManualService } from '../shop-manual.service';

@Component({
  selector: 'aw-dialog-shop-manual',
  templateUrl: './dialog-shop-manual.component.html'
})
export class DialogShopManualComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public shopManualList: BireShopManualDTO[];

  @Input()
  public data: BireShopManualDTO;

  @Output()
  public onValidated: EventEmitter<BireShopManualDTO>;

  @Output()
  public onUpdate: EventEmitter<BireShopManualDTO>;

  public bireShopManualDTO: BireShopManualDTO;
  public shopManualTableDataSource: TableDataSource<BireShopManualDTO>;
  public shopManualItemTableLoading: boolean;
  public filteredRowsNb: number;

  public constructor(
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService,
    private readonly shopManualService: ShopManualService
  ) {
    super(ComponentOpenMode.Read, 'DialogShopManualComponent');
    this.onValidated = new EventEmitter<BireShopManualDTO>();
    this.onUpdate = new EventEmitter<BireShopManualDTO>();

    this.shopManualItemTableLoading = false;
    this.filteredRowsNb = 0;

    // Table column
    this.initShopManualTableDataSource();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bireShopManualDTO = { ...this.data };
    }

    this.renderShopManualItemTable();
  }

  private initShopManualTableDataSource(): void {
    this.shopManualTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '55%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          alignment: ColumnAlignment.RIGHT,
          width: '15%'
        },
        {
          field: 'smVersionStart',
          translateKey: this.getTranslateKey('smVersionStart'),
          alignment: ColumnAlignment.RIGHT,
          width: '15%'
        },
        {
          field: 'smVersionEnd',
          translateKey: this.getTranslateKey('smVersionEnd'),
          alignment: ColumnAlignment.RIGHT,
          width: '15%'
        }
      ],
      data: []
    });
  }

  /**
   * Render shop manual table
   */
  private renderShopManualItemTable() {
    if (!!this.data.smCode) {
      this.shopManualItemTableLoading = true;

      const bireShopManualDTOId: BireShopManualDTOId = {
        smCode: this.data.smCode
      };

      this.shopManualService.findBireSmTasksByShopManual(bireShopManualDTOId).subscribe((results) => {
        this.shopManualTableDataSource.setData(results.list);
        this.filteredRowsNb = this.shopManualTableDataSource.dataCount;

        this.shopManualItemTableLoading = false;
      });
    }
  }

  /**
   * Validate and emit data
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireShopManualDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        // Check if entry already exist in table
        let isFound = false;
        this.shopManualList.forEach((res) => {
          if (res.smCode === this.bireShopManualDTO.smCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireShopManualDTO };
          this.onValidated.emit(this.data);
          this.closeDialog();
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
        }
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  /**
   * Is screen valid
   */
  private isScreenValidated() {
    if (!this.bireShopManualDTO.smCode || this.bireShopManualDTO.smCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * CLose dialog
   */
  public closeDialog() {
    this.display = false;
  }
}
