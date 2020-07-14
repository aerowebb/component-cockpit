import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireKPourcentDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/bire-k-pourcent-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-k-percent',
  templateUrl: './dialog-k-percent.component.html'
})
export class DialogKPercentComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public kPercentList: BireKPourcentDTO[];

  @Input()
  public data: BireKPourcentDTO;

  @Output()
  public onValidated: EventEmitter<BireKPourcentDTO>;

  @Output()
  public onUpdate: EventEmitter<BireKPourcentDTO>;

  public bireKPourcentDTO: BireKPourcentDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogKPercentComponent');
    this.onValidated = new EventEmitter<BireKPourcentDTO>();
    this.onUpdate = new EventEmitter<BireKPourcentDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
      this.bireKPourcentDTO = {};
    } else {
      this.bireKPourcentDTO = { ...this.data };
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireKPourcentDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.kPercentList.forEach((res) => {
          if (
            !!res.kpourcentCode &&
            !!this.bireKPourcentDTO &&
            !!this.bireKPourcentDTO.kpourcentCode &&
            res.kpourcentCode.toString() === this.bireKPourcentDTO.kpourcentCode.toString()
          ) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireKPourcentDTO };
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

  private isScreenValidated() {
    if (
      !this.bireKPourcentDTO.kpourcentCode ||
      !this.bireKPourcentDTO.kpourcentType ||
      (this.bireKPourcentDTO.kpourcentCode.trim().length === 0 ||
        this.bireKPourcentDTO.kpourcentType.trim().length === 0)
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
