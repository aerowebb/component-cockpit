import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireLocalisationCodeDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/bire-localisation-code-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-localisation',
  templateUrl: './dialog-localisation.component.html'
})
export class DialogLocalisationComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidated: EventEmitter<BireLocalisationCodeDTO>;

  @Input()
  public localisationList: BireLocalisationCodeDTO[];

  @Input()
  public openMode: ComponentOpenMode;

  public bireLocalisationCodeDTO: BireLocalisationCodeDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogLocalisationComponent');
    this.onValidated = new EventEmitter<BireLocalisationCodeDTO>();
  }

  public ngOnInit() {
    this.bireLocalisationCodeDTO = {};
    this.updateOpenMode(this.openMode);
  }

  public validate() {
    if (this.isScreenValidated()) {
      let isFound = false;
      this.localisationList.forEach((res) => {
        if (res.localisationCode === this.bireLocalisationCodeDTO.localisationCode) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
      } else {
        this.onValidated.emit(this.bireLocalisationCodeDTO);
        this.closeDialog();
      }
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private isScreenValidated() {
    if (
      !this.bireLocalisationCodeDTO.localisationCode ||
      this.bireLocalisationCodeDTO.localisationCode.trim().length === 0
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
