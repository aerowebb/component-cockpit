import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BireReturnReasonDTO } from '../../../../../../../shared/types/api-output-types/administration-catalog/bire-return-reason-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-return-reason',
  templateUrl: './dialog-return-reason.component.html'
})
export class DialogReturnReasonComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public removalList: BireReturnReasonDTO[];

  @Input()
  public data: BireReturnReasonDTO;

  @Output()
  public onValidated: EventEmitter<BireReturnReasonDTO>;

  @Output()
  public onUpdate: EventEmitter<BireReturnReasonDTO>;

  public causeTypeList: SelectItem[];
  public bireReturnReasonDTO: BireReturnReasonDTO;

  public constructor(private readonly messageService: MessageService, public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'DialogReturnReasonComponent');
    this.onValidated = new EventEmitter<BireReturnReasonDTO>();
    this.onUpdate = new EventEmitter<BireReturnReasonDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.data) {
      this.data = {};
    } else {
      this.bireReturnReasonDTO = { ...this.data };
    }

    this.fillDropDown();
  }

  private fillDropDown() {
    this.causeTypeList = [
      { label: '', value: undefined },
      { label: 'General', value: AWPropertiesConstants.CAUSE_TYPE_GENERAL_KEY },
      { label: 'Systematic ', value: AWPropertiesConstants.CAUSE_TYPE_SYSTEMATIC_KEY },
      { label: 'Temporary Directive', value: AWPropertiesConstants.CAUSE_TYPE_TEMPORARY_DIRECTIVE_KEY }
    ];
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Write) {
        // Update Mode
        this.data = { ...this.bireReturnReasonDTO };
        this.onUpdate.emit(this.data);
        this.closeDialog();
      } else if (this.openMode === ComponentOpenMode.Create) {
        let isFound = false;
        this.removalList.forEach((res) => {
          if (res.returnReasonCode === this.bireReturnReasonDTO.returnReasonCode) {
            isFound = true;
          }
        });

        if (!isFound) {
          // Create Mode
          this.data = { ...this.bireReturnReasonDTO };
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
    if (!this.bireReturnReasonDTO.returnReasonCode || this.bireReturnReasonDTO.returnReasonCode.trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }

  public closeDialog() {
    this.display = false;
  }
}
