import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BireQualificationDTO } from '../../../../../shared/types/api-types/bire-qualification-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ApplicableConfigurationFormService } from '../applicable-configuration-form.service';

@Component({
  selector: 'aw-dialog-associated-qualification',
  templateUrl: './dialog-associated-qualification.component.html'
})
export class DialogAssociatedQualificationComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public qualification: BireQualificationDTO[] | null;

  @Output()
  public onValidated: EventEmitter<BireQualificationDTO>;

  public showQuickSearchQualificationPopup: boolean;
  public bireQualificationDTO: BireQualificationDTO;

  public constructor(
    private readonly messageService: MessageService,
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService
  ) {
    super(ComponentOpenMode.Read, 'DialogAssociatedQualificationComponent');
    this.onValidated = new EventEmitter<BireQualificationDTO>();
    this.showQuickSearchQualificationPopup = false;
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.bireQualificationDTO = {};

    if (!!this.qualification && this.qualification.length !== 0) {
      this.bireQualificationDTO = this.qualification[0];
    }
  }

  public quickSearchQualification(): void {
    if (!this.isReadOpenMode) {
      this.showQuickSearchQualificationPopup = true;
    }
  }

  public setSelectedQualification(event: BireQualificationDTO): void {
    this.bireQualificationDTO = event;
  }

  public validate(): void {
    if (!this.bireQualificationDTO.qualificationCode) {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');

      return;
    }

    if (!this.bireQualificationDTO.qualificationName) {
      let qualificationName = '';

      // Checking if qualification code typed is valid or not
      this.isQualificationCodeValid((cb) => {
        qualificationName = cb;
        if (qualificationName === '') {
          this.messageService.showErrorMessage(this.getTranslateKey('invalidQualificationCode'));

          return;
        } else {
          this.bireQualificationDTO.qualificationCode = cb.qualificationCode;
          this.bireQualificationDTO.qualificationName = cb.qualificationName;
        }

        this.onValidated.emit(this.bireQualificationDTO);
        this.display = false;
      });
    } else {
      this.onValidated.emit(this.bireQualificationDTO);
      this.display = false;
    }
  }

  private isQualificationCodeValid(callback) {
    const searchObject: BireQualificationDTO = {
      qualificationCode: this.bireQualificationDTO.qualificationCode
    };

    this.applicableConfigurationFormService.findQualification(searchObject).subscribe((res) => {
      if (res.list.length === 0) {
        callback('');
      }
      res.list.map((result) => {
        if (
          !!searchObject.qualificationCode &&
          !!result.qualificationCode &&
          searchObject.qualificationCode.toLowerCase() === result.qualificationCode.toLowerCase()
        ) {
          callback(result);
        } else {
          super.throwUnboundLocalError('isQualificationCodeValid', 'searchObject && result');
        }
      });
    });
  }

  public cancel(): void {
    this.display = false;
  }
}
