import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { BireOperationDTO } from '../../../../../shared/types/api-types/bire-operation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-operations-popup',
  templateUrl: './dialog-operations-popup.component.html'
})
export class DialogOperationsPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public operation: BireOperationDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAdded: EventEmitter<BireOperationDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public operationTableData: DialogTableData<BireOperationDTO>;
  public showOperationTableDialog: boolean;

  public constructor(private readonly taskFormService: TaskFormService) {
    super(ComponentOpenMode.Write, 'DialogOperationsPopupComponent');

    this.onAdded = new EventEmitter<BireOperationDTO>();

    this.showOperationTableDialog = false;

    this.initOperationTableData();
  }

  public ngOnInit() {
    if (!this.operation) {
      this.operation = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public openOperationTableDialog(): void {
    this.showOperationTableDialog = true;
  }

  public add(): void {
    if (!!this.operation) {
      this.onAdded.emit(this.operation);
      this.display = false;
    } else {
      super.throwUnboundLocalError('add', 'this.operation');
    }
  }

  private initOperationTableData(): void {
    const operationTableCols: TableColumn[] = [
      { field: 'opeCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'opeVersion', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'rangeCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'opeDesignation', alignment: 'left', filterMode: TableColumnFilterMode.Input }
    ];

    this.operationTableData = {
      componentId: 'DialogOperation',
      tableCols: operationTableCols,
      tableRows: this.taskFormService.findBireOperationsBySearchCriteria({}),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public isValidOperation(): boolean {
    if (!!this.operation && this.operation.opeCode && this.operation.opeVersion && this.operation.rangeCode) {
      return true;
    } else {
      return false;
    }
  }

  /**************************************************************************
   * Operation Dialog
   *************************************************************************/

  public onSelectedOperation(operation: BireOperationDTO): void {
    if (!!this.operation && operation) {
      this.operation.opeCode = operation.opeCode;
      this.operation.opeVersion = operation.opeVersion;
      this.operation.rangeCode = operation.rangeCode;
      this.operation.opeDesignation = operation.opeDesignation;
      this.operation.opeDurationTime = operation.opeDurationTime;
      this.operation.opeManHour = operation.opeManHour;
      this.operation.opeQualification = operation.opeQualification;
      this.operation.opeCost = operation.opeCost;
    } else {
      super.throwUnboundLocalError('onSelectedOperation', 'this.operation');
    }
  }
}
