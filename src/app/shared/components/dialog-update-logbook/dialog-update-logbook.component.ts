import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { SessionService } from '../../services/session.service';
import { UpdateLogbookFromWorkOrderInput } from '../../types/api-types/update-logbook-from-work-order-input.interface';
import { WorkOrderEvolutionInput } from '../../types/api-types/work-order-eveolution-input.interface';
import { DialogComponent } from '../../types/dialog-component';
import { TableColumn } from '../../types/table-column.interface';
import { BidoEquipmentUtils } from '../../utils/bido-equipment-utils';
import { ColumnAlignment } from '../table/table-data-source';

interface LogBookEvolutionTableRow extends WorkOrderEvolutionInput {
  evolution: string;
  asset: string;
  availablePnList: SelectItem[];
}

@Component({
  selector: 'aw-dialog-update-logbook',
  templateUrl: './dialog-update-logbook.html'
})
export class DialogUpdateLogbookComponent extends DialogComponent implements OnInit {
  @Input()
  public updateLogbookFromWorkOrderInput: UpdateLogbookFromWorkOrderInput;

  @Output()
  public onValidated: EventEmitter<UpdateLogbookFromWorkOrderInput>;

  public logbookEvolutionTableRows: LogBookEvolutionTableRow[];

  public woCode: string | undefined;
  public evolutionColumns: TableColumn[];

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogUpdateLogbookComponent');
    this.init();
  }

  public isValid(): boolean {
    return true;
  }

  public ngOnInit(): void {
    this.initializeLogBookEvolutionTableRows();
  }

  public validate(): void {
    this.onValidated.emit(this.updateLogbookFromWorkOrderInput);
    this.closeDialog();
  }

  private initializeLogBookEvolutionTableRows(): void {
    if (this.updateLogbookFromWorkOrderInput) {
      this.woCode = this.updateLogbookFromWorkOrderInput.bidmWorkOrderDTO.woCode;
      if (this.updateLogbookFromWorkOrderInput.woEvolutionInputList) {
        this.updateLogbookFromWorkOrderInput.woEvolutionInputList.forEach((input) => {
          const row: LogBookEvolutionTableRow = {
            ...input,
            asset: BidoEquipmentUtils.toString(input.workOrderEvolutionDTO.woRelatedAsset),
            availablePnList: input.potentialNewPnList.map((newPn: string) => {
              return { label: newPn, value: newPn };
            }),
            evolution:
              input.workOrderEvolutionDTO.evolutionNumber + '-' + input.workOrderEvolutionDTO.evolutionRevisionNumber
          };
          if (row.potentialNewPnList && row.potentialNewPnList.length === 1) {
            row.workOrderEvolutionDTO.newPnCodeSelected = row.potentialNewPnList[0];
          }
          this.logbookEvolutionTableRows.push(row);
        });
      }
    }
  }

  private init(): void {
    this.woCode = undefined;
    this.onValidated = new EventEmitter<UpdateLogbookFromWorkOrderInput>();
    this.logbookEvolutionTableRows = [];
    this.evolutionColumns = [
      { field: 'evolution', alignment: ColumnAlignment.LEFT, width: '33%' },
      { field: 'asset', alignment: ColumnAlignment.LEFT, width: '33%' },
      { field: 'availablePnList', alignment: ColumnAlignment.LEFT, width: '33%' }
    ];
  }
}
