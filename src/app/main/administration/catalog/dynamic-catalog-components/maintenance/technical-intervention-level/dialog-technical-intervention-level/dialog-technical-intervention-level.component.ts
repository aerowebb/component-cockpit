import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireTilDTO } from '../../../../../../../shared/types/api-types/bire-til-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-technical-intervention-level',
  templateUrl: './dialog-technical-intervention-level.component.html'
})
export class DialogTechnicalInterventionLevelComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public tilList: BireTilDTO[];

  @Input()
  public data: BireTilDTO;

  @Output()
  public onValidated: EventEmitter<BireTilDTO>;

  @Output()
  public onUpdate: EventEmitter<BireTilDTO>;

  public bireTilDTO: BireTilDTO;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Read, 'DialogTechnicalInterventionLevelComponent');
    this.onValidated = new EventEmitter<BireTilDTO>();
    this.onUpdate = new EventEmitter<BireTilDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
      this.bireTilDTO = {};
    } else {
      this.bireTilDTO = { ...this.data };
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (typeof this.bireTilDTO.technicalLevel !== 'number') {
        this.messageService.showErrorMessage(this.getTranslateKey('numericRequired'));

        return;
      }

      const min = -2147483648;
      const max = 2147483648;
      if (this.bireTilDTO.technicalLevel < min || this.bireTilDTO.technicalLevel > max) {
        this.messageService.showErrorMessage(this.getTranslateKey('percentRangeError'));

        return;
      }

      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireTilDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.tilList.forEach((res) => {
          if (res.technicalLevel === this.bireTilDTO.technicalLevel) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireTilDTO };
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

  public maxLengthCheck(event, percent) {
    const min = -21474836;
    const max = 214748364;
    if (percent < min || percent > max) {
      event.preventDefault();
    }
  }

  private isScreenValidated() {
    if (
      this.bireTilDTO.technicalLevel === null ||
      this.bireTilDTO.technicalLevel === undefined ||
      this.bireTilDTO.technicalLevel.toString().length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  public closeDialog() {
    this.display = false;
  }
}
