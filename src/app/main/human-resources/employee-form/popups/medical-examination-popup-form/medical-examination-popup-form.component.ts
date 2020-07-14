import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtMedicalVisitDTO } from '../../../../../shared/types/api-types/bidt-medical-visit-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-medical-examination-popup-form',
  templateUrl: './medical-examination-popup-form.component.html'
})
export class MedicalExaminationPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  public onValidated: EventEmitter<BidtMedicalVisitDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtMedicalVisitDTO>;

  public displayValue: boolean;

  public medicalExaminationObj: BidtMedicalVisitDTO;
  public isEditable: boolean;
  public visitDate: Date;
  public visitExpiration: Date;

  public constructor(private readonly messageService: MessageService, public sessionService: SessionService) {
    super(ComponentOpenMode.Read, 'MedicalExaminationPopupFormComponent');
    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtMedicalVisitDTO>();
    this.medicalExaminationObj = {};
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.medicalExaminationObj = this.componentData.object || {};
      if (this.medicalExaminationObj && !!this.medicalExaminationObj.visitDate) {
        this.visitDate = new Date(this.medicalExaminationObj.visitDate);
      }
      if (this.medicalExaminationObj && !!this.medicalExaminationObj.visitExpiration) {
        this.visitExpiration = new Date(this.medicalExaminationObj.visitExpiration);
      }
    }
  }

  public getTypeName(): string {
    return 'MedicalExaminationPopupFormComponent';
  }

  public validate(): void {
    if (this.visitDate) {
      this.medicalExaminationObj.visitDate = this.visitDate.toISOString();
      this.medicalExaminationObj.visitExpiration = this.visitExpiration && this.visitExpiration.toISOString();
      this.onValidated.emit(this.medicalExaminationObj);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }
}
