import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireUnitMeasureDTO } from '../../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-unit-of-measure',
  templateUrl: './dialog-unit-of-measure.component.html'
})
export class DialogUnitOfMeasureComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public unitOfMeasureList: BireUnitMeasureDTO[];

  @Input()
  public data: BireUnitMeasureDTO;

  @Output()
  public onValidated: EventEmitter<BireUnitMeasureDTO>;

  @Output()
  public onUpdate: EventEmitter<BireUnitMeasureDTO>;

  public bireUnitMeasureDTO: BireUnitMeasureDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogUnitOfMeasureComponent');
    this.onValidated = new EventEmitter<BireUnitMeasureDTO>();
    this.onUpdate = new EventEmitter<BireUnitMeasureDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bireUnitMeasureDTO = { ...this.data };
    }
  }

  /**
   * Validation checks
   */
  private isScreenValidated() {
    if (!this.bireUnitMeasureDTO.unitCode || this.bireUnitMeasureDTO.unitCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Validate data to emit
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireUnitMeasureDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.unitOfMeasureList.forEach((res) => {
          if (res.unitCode === this.bireUnitMeasureDTO.unitCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireUnitMeasureDTO };
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

  public closeDialog() {
    this.display = false;
  }
}
