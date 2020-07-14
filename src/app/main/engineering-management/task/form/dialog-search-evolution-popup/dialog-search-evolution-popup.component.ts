import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-search-evolution-popup',
  templateUrl: 'dialog-search-evolution-popup.component.html'
})
export class DialogSearchEvolutionPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public evolutionNumber: string | undefined;

  @Input()
  public evolutionRevisionNumber: string | undefined;

  @Output()
  public onSelected: EventEmitter<BireEvolutionDTO>;

  public evolutionTableLoading: boolean;
  public searchCriteria: BireEvolutionDTO;
  public evolutionTableDataSource: TableDataSource<BireEvolutionDTO>;

  public constructor(private readonly taskFormService: TaskFormService) {
    super(ComponentOpenMode.Write, 'DialogSearchEvolutionPopupComponent');
    this.init();
    this.initEvolutionTableDataSource();
  }

  public ngOnInit(): void {
    if (!!this.evolutionNumber) {
      this.searchCriteria.evolutionNumber = this.evolutionNumber;
    }
    if (!!this.evolutionRevisionNumber) {
      this.searchCriteria.evolutionRevisionNumber = this.evolutionRevisionNumber;
    }
  }

  public cancel(): void {
    super.closeDialog();
  }

  public search(): void {
    this.clearTable();

    this.evolutionTableLoading = true;
    this.taskFormService.findBireEvolutionsByEvolutionCriteria(this.searchCriteria).subscribe((result) => {
      this.evolutionTableDataSource.addData(result.list);
      this.evolutionTableLoading = false;
    });
  }

  public validate(): void {
    this.onSelected.emit(this.evolutionTableDataSource.dataSelection[0]);
    super.closeDialog();
  }

  private clearTable(): void {
    this.evolutionTableLoading = false;
  }

  private init(): void {
    this.searchCriteria = {};
    this.onSelected = new EventEmitter<BireEvolutionDTO>();
    this.clearTable();
  }

  private initEvolutionTableDataSource(): void {
    this.evolutionTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber'),
          width: '12.5%'
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          width: '12.5%'
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('statusState'),
          width: '15%'
        },
        {
          field: 'evolutionSummary',
          translateKey: this.getTranslateKey('evolutionSummary'),
          width: '70%'
        }
      ],
      data: []
    });
  }
}
