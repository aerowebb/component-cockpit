import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireTaskGroupDTO } from '../../../../../../../shared/types/api-types/bire-task-group-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-task-group',
  templateUrl: './dialog-task-group.component.html'
})
export class DialogTaskGroupComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public taskList: BireTaskGroupDTO[];

  @Input()
  public data: BireTaskGroupDTO;

  @Output()
  public onValidated: EventEmitter<BireTaskGroupDTO>;

  @Output()
  public onUpdate: EventEmitter<BireTaskGroupDTO>;

  public bireTaskGroupDTO: BireTaskGroupDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogTaskGroupComponent');
    this.onValidated = new EventEmitter<BireTaskGroupDTO>();
    this.onUpdate = new EventEmitter<BireTaskGroupDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bireTaskGroupDTO = { ...this.data };
    }
  }

  /**
   * Valdidate and emit data
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireTaskGroupDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        // If element already exist in table
        let isFound = false;
        this.taskList.forEach((res) => {
          if (res.groupCode === this.bireTaskGroupDTO.groupCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireTaskGroupDTO };
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
    if (!this.bireTaskGroupDTO.groupCode || this.bireTaskGroupDTO.groupCode.trim().length === 0) {
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

