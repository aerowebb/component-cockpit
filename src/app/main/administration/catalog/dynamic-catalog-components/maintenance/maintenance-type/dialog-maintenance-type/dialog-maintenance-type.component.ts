import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireMaintenanceEnvironmentDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/bire-maintenance-environment-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-maintenance-type',
  templateUrl: './dialog-maintenance-type.component.html'
})
export class DialogMaintenanceTypeComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public maintenanceList: BireMaintenanceEnvironmentDTO[];

  @Input()
  public data: BireMaintenanceEnvironmentDTO;

  @Output()
  public onValidated: EventEmitter<BireMaintenanceEnvironmentDTO>;

  @Output()
  public onUpdate: EventEmitter<BireMaintenanceEnvironmentDTO>;

  public bireMaintenanceEnvironmentDTO: BireMaintenanceEnvironmentDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogMaintenanceTypeComponent');
    this.onValidated = new EventEmitter<BireMaintenanceEnvironmentDTO>();
    this.onUpdate = new EventEmitter<BireMaintenanceEnvironmentDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
      this.bireMaintenanceEnvironmentDTO = {};
    } else {
      this.bireMaintenanceEnvironmentDTO = { ...this.data };
    }
  }

  /**
   * validate screen and emit data
   */
  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireMaintenanceEnvironmentDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        // CHeck if entry already added in table
        let isFound = false;
        this.maintenanceList.forEach((res) => {
          if (res.environmentCode === this.bireMaintenanceEnvironmentDTO.environmentCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireMaintenanceEnvironmentDTO };
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
   * Is fields filled
   */
  private isScreenValidated() {
    if (
      !this.bireMaintenanceEnvironmentDTO.environmentCode ||
      this.bireMaintenanceEnvironmentDTO.environmentCode.trim().length === 0
    ) {
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
