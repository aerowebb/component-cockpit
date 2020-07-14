import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireTaskEvolutionDTO } from '../../../../../shared/types/api-types/bire-task-evolution-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-evolutions-popup',
  templateUrl: './dialog-evolutions-popup.component.html'
})
export class DialogEvolutionsPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public evolution: BireTaskEvolutionDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAdded: EventEmitter<BireTaskEvolutionDTO>;

  public linkTypes: LabelValue<string>[];

  public showEvolutionTableDialog: boolean;

  public evolutionTypes: LabelValue<string>[];

  public evolutionLevels: LabelValue<string>[];

  public constructor(
    public propertiesService: PropertiesService,
    public messageService: MessageService,
    public taskFormService: TaskFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogEvolutionsPopupComponent');

    this.onAdded = new EventEmitter<BireTaskEvolutionDTO>();

    this.showEvolutionTableDialog = false;

    this.linkTypes = [];
    this.loadLinkTypes();
  }

  public ngOnInit() {
    if (!this.evolution) {
      this.evolution = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public openEvolutionDialog(): void {
    this.showEvolutionTableDialog = true;
  }

  public add(): void {
    if (!!this.evolution) {
      this.onAdded.emit(this.evolution);
      this.display = false;
    }
  }

  public isValidEvolution(): boolean {
    if (
      !!this.evolution &&
      this.evolution.evolutionNumber &&
      this.evolution.evolutionRevisionNumber &&
      this.evolution.taskEvolutionTypeCode &&
      this.evolution.evolutionNumber.trim().length !== 0 &&
      this.evolution.evolutionRevisionNumber.trim().length !== 0 &&
      this.evolution.taskEvolutionTypeCode.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  private loadLinkTypes(): void {
    this.propertiesService.getValue('getTaskEvolutionTypeMap').subscribe(
      (results) => {
        this.linkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetEvolutionLinkTypes');
      }
    );
  }

  /**************************************************************************
   * Evolution Dialog
   *************************************************************************/

  public onSelectedEvolution(bireEvolutionDTO: BireEvolutionDTO): void {
    if (!!this.evolution && bireEvolutionDTO) {
      this.evolution.evolutionNumber = bireEvolutionDTO.evolutionNumber;
      this.evolution.evolutionRevisionNumber = bireEvolutionDTO.evolutionRevisionNumber;
    }
  }
}
