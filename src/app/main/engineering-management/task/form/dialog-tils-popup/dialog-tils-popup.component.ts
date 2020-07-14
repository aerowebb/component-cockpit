import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BireTilDTO } from '../../../../../shared/types/api-types/bire-til-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-tils-popup',
  templateUrl: './dialog-tils-popup.component.html'
})
export class DialogTilsPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public tilInput: BireTilDTO | null;

  public til: BireTilDTO;

  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAdded: EventEmitter<BireTilDTO>;

  public readonly componentId: string;

  public technicalLevels: LabelValue<number>[];

  public tilNames: LabelValue<string>[];

  public descriptions: LabelValue<number>[];

  public displayValue: boolean;

  public constructor(private readonly taskFormService: TaskFormService) {
    super(ComponentOpenMode.Write, 'DialogTilsPopupComponent');

    this.onAdded = new EventEmitter<BireTilDTO>();

    this.descriptions = [];

    this.technicalLevels = [];

    this.tilNames = [];
    this.til = {};
    this.loadTechnicalLevels();
  }

  public ngOnInit() {
    if (this.tilInput === null) {
      this.tilInput = {};
    }
    if (!this.til) {
      this.til = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public add(): void {
    this.onAdded.emit(this.til);
    this.display = false;
  }

  private loadTechnicalLevels(): void {
    this.taskFormService.findAllBireTils().subscribe((results) => {
      results.forEach((result) => {
        if (result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
          const tempName: LabelValue<number> = {
            value: result.technicalLevel,
            label: result.tilName
          };

          this.technicalLevels.push(tempName);
        } else {
          super.throwUnboundLocalError('loadTechnicalLevels', 'result.technicalLevel && result.tilName');
        }

        if (result.technicalLevel !== null && result.technicalLevel !== undefined) {
        const tempDescription: LabelValue<number> = {
          value: result.technicalLevel,
          label: result.tilDescription || ''
        };

        this.descriptions.push(tempDescription);
        } else {
          super.throwUnboundLocalError('loadTechnicalLevels', 'result.technicalLevel');
        }
      });

      if (!!this.tilInput) {
        this.til = this.tilInput;
      }
    });
  }

  public onTilSelected(event: LabelValue<number>) {
    if (event.value === null) {
      this.til.tilName = undefined;
      this.til.tilDescription = undefined;
    } else {
      this.til.tilName = this.technicalLevels.filter((name) => name.value === event.value)[0].label;
      this.til.tilDescription = this.descriptions.filter((description) => description.value === event.value)[0].label;
    }
  }
}
