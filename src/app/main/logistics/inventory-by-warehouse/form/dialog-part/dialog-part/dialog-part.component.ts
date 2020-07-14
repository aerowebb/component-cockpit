import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BirePnDTOId } from '../../../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';

import { DialogPartService } from './dialog-part.service';

@Component({
  selector: 'aw-dialog-part',
  templateUrl: './dialog-part.component.html'
})
export class DialogPartComponent extends DialogComponent implements OnInit {
  @Input()
  public pnData: string;
  @Output()
  public onSelected = new EventEmitter<BirePnDTO>();
  public resultsTableCols: TableColumn[];
  public resultsTable: BirePnDTO[];
  public selectedObject: BirePnDTOId;
  public isLoading: boolean;
  public constructor(
    public sessionService: SessionService,
    public messageService: MessageService,
    private readonly dialogPartService: DialogPartService
  ) {
    super(ComponentOpenMode.Write, 'DialogPartComponent');
    this.resultsTableCols = [
      { field: 'pnCode', alignment: 'left', width: '15%' },
      { field: 'articleDesignation', alignment: 'left', width: '40%' },
      { field: 'manufacturerOtanCode', alignment: 'left', width: '15%' },
      { field: 'otanPnReference', alignment: 'left', width: '10%' },
      { field: 'quantityUnit', alignment: 'left', width: '10%' }
    ];
    this.resultsTable = [];
    this.isLoading = false;
    this.selectedObject = {
      pnCode: ''
    };
  }

  public ngOnInit() {
    this.getPartMaterialList();
  }
  public onRowUnselect(): void {
    this.selectedObject = {
      pnCode: ''
    };
  }

  public getPartMaterialList() {
    this.isLoading = true;
    this.dialogPartService.findMaterialBySearch(this.pnData).subscribe((results) => {
      this.isLoading = true;
      if (results) {
        this.resultsTable = results;
      }
    });
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.pnCode;
  }

  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.display = false;
  }

  public onCancel(): void {
    this.selectedObject = {
      pnCode: ''
    };
    this.resultsTable = [];
    this.display = false;
  }
}
