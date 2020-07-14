import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { BireItemDTO } from '../../types/api-types/bire-item-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { DialogSearchItemService } from '../dialog-search-item/dialog-search-item.service';
import { TableDataSource } from '../table/table-data-source';

@Component({
  selector: 'aw-dialog-search-ata-code',
  templateUrl: 'dialog-search-ata-code.component.html'
})
export class DialogSearchAtaCodeComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: BireItemDTO;

  @Output()
  public onValidated = new EventEmitter<BireItemDTO>();

  public itemsTableDataSource: TableDataSource<BireItemDTO>;
  public moreResults: boolean;

  public constructor(
    private readonly dialogSearchItemService: DialogSearchItemService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchAtaCodeComponent');

    this.initItemsTableDataSource();
    this.init();
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
  }

  public search(): void {
    this.clearTableData();

    this.itemsTableDataSource.isLoading = true;

    this.dialogSearchItemService
      .findBireItemsBySearchCriteria(this.searchObject)
      .pipe(
        finalize(() => {
          this.itemsTableDataSource.isLoading = false;
        })
      )
      .subscribe((result) => {
        this.moreResults = result.moreResults;
        this.itemsTableDataSource.setData(result.list);
      });
  }

  public cancel(): void {
    super.closeDialog();
  }

  public validate(): void {
    if (!this.itemsTableDataSource.hasDataSelection) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.itemsTableDataSource.dataSelection[0]);
      super.closeDialog();
    }
  }

  private clearTableData(): void {
    this.itemsTableDataSource.setData([]);
    this.itemsTableDataSource.isLoading = false;
    this.moreResults = false;
  }

  private init(): void {
    this.clearTableData();
  }

  private initItemsTableDataSource(): void {
    this.itemsTableDataSource = new TableDataSource<BireItemDTO>({
      allowMultiSelect: false,
      columns: [
        { field: 'familyCode', translateKey: this.getTranslateKey('familyCode'), width: '10%' },
        { field: 'variantCode', translateKey: this.getTranslateKey('variantCode'), width: '10%' },
        { field: 'name', translateKey: this.getTranslateKey('name'), width: '10%' },
        { field: 'chapter', translateKey: this.getTranslateKey('chapter'), width: '10%' },
        { field: 'section', translateKey: this.getTranslateKey('section'), width: '10%' },
        { field: 'subject', translateKey: this.getTranslateKey('subject'), width: '10%' },
        { field: 'sheet', translateKey: this.getTranslateKey('sheet'), width: '10%' },
        { field: 'marks', translateKey: this.getTranslateKey('marks'), width: '10%' },
        { field: 'itemNumber', translateKey: this.getTranslateKey('itemNumber'), width: '10%' },
        { field: 'functionCode', translateKey: this.getTranslateKey('functionCode'), width: '10%' }
      ],
      data: []
    });
  }
}
