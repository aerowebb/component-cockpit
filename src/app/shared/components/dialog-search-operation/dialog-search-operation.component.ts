import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { BireOperationDTO } from '../../types/api-types/bire-operation-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchOperationService } from './dialog-search-operation.service';

interface OperationRow {
  opeCode: string;
  opeDesignation: string;
  opeVersion: string;
  rangeCode: string;
  _obj: BireOperationDTO;
}

@Component({
  selector: 'aw-dialog-search-operation',
  templateUrl: 'dialog-search-operation.component.html'
})
export class DialogSearchOperationComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: BireOperationDTO;

  @Output()
  public onValidated = new EventEmitter<BireOperationDTO>();

  public table: SearchResultsDTO<OperationRow>;
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: OperationRow | undefined;

  public constructor(
    private readonly dialogSearchOperationService: DialogSearchOperationService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchOperationComponent');

    this.init();

    this.setTableColList();
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
  }

  public search(): void {
    this.tableLoading = true;
    this.clearTableData();

    this.dialogSearchOperationService.findAllBireOperationByCriteria(this.searchObject).subscribe((result) => {
      this.table.moreResults = result.moreResults;
      this.table.list = ListUtils.orEmpty(result.list).map((elt) => this.createOperationRow(elt));

      this.tableLoading = false;
    });
  }

  public cancel(): void {
    super.closeDialog();
  }

  public validate(): void {
    if (!this.tableSelection) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.tableSelection._obj);
      super.closeDialog();
    }
  }

  private clearTableData(): void {
    this.table = { list: [], moreResults: false };
    this.tableSelection = undefined;
  }

  private createOperationRow(obj: BireOperationDTO): OperationRow {
    const operationRow: OperationRow = {
      opeCode: StringUtils.orEmpty(obj.opeCode),
      opeDesignation: StringUtils.orEmpty(obj.opeDesignation),
      opeVersion: StringUtils.orEmpty(obj.opeVersion),
      rangeCode: StringUtils.orEmpty(obj.rangeCode),
      _obj: obj
    };

    return operationRow;
  }

  private init(): void {
    this.clearTableData();

    this.tableLoading = false;
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'opeCode', alignment: 'left', width: '20%' },
      { field: 'opeVersion', alignment: 'right', width: '7.5%' },
      { field: 'opeDesignation', alignment: 'left', width: '60%' },
      { field: 'rangeCode', alignment: 'left', width: '12.5%' }
    ];
  }
}
