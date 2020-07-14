import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireRangeDTO } from '../../../../../../../shared/types/api-types/bire-range-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-range',
  templateUrl: './dialog-range.component.html'
})
export class DialogRangeComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public rangeList: BireRangeDTO[];

  @Input()
  public data: BireRangeDTO;

  @Output()
  public onValidated: EventEmitter<BireRangeDTO>;

  @Output()
  public onUpdate: EventEmitter<BireRangeDTO>;

  public bireRangeDTO: BireRangeDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogRangeComponent');
    this.onValidated = new EventEmitter<BireRangeDTO>();
    this.onUpdate = new EventEmitter<BireRangeDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bireRangeDTO = { ...this.data };
    }
  }

  /**
   * Valdidate and emit data
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireRangeDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        // If element already exist in table
        let isFound = false;
        this.rangeList.forEach((res) => {
          if (res.rangeCode === this.bireRangeDTO.rangeCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireRangeDTO };
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

  /**
   * Is screen valid
   */
  private isScreenValidated() {
    if (!this.bireRangeDTO.rangeCode || this.bireRangeDTO.rangeCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Close dialog event
   */
  public closeDialog() {
    this.display = false;
  }
}
