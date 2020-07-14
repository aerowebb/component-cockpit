import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { QualificationListTableOutputDTO } from '../../../../../../../shared/types/api-output-types/catalog/qualification-list-table-output-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'aw-qualification-form-popup',
  templateUrl: './qualification-form-popup.component.html'
})
export class QualificationFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public qualification: QualificationListTableOutputDTO;

  @Input()
  public isNewQualification: boolean;

  @Input()
  public viewMode: boolean;

  @Input()
  public editModeIsStandard: boolean;

  @Output()
  public onCreate: EventEmitter<QualificationListTableOutputDTO>;

  @Output()
  public onUpdate: EventEmitter<QualificationListTableOutputDTO>;

  public readonly componentId: string;

  public qualificationTypes: LabelValue<string>[];

  public currentCurrency: string;

  public displayValue: boolean;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService,
    private readonly qualificationService: QualificationService
  ) {
    super(ComponentOpenMode.Write, 'QualificationFormPopupComponent');

    this.onCreate = new EventEmitter<QualificationListTableOutputDTO>();

    this.onUpdate = new EventEmitter<QualificationListTableOutputDTO>();

    this.loadTypeDropdown();

    this.loadCurrency();
  }

  public ngOnInit() {
    if (!this.qualification) {
      this.qualification = {
        bidtQualificationDTO: {}
      };
    }
  }

  public loadTypeDropdown(): void {
    this.propertiesService.getValue('getHrQualificationTypeMap').subscribe(
      (results) => {
        this.qualificationTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetTypes'));
      }
    );
  }

  public associate(): void {
    const a = 100;
    const b = 2;
    if (this.qualification) {
      this.qualification.averageHourlyRateValue =
        !!this.qualification.bidtQualificationDTO && this.qualification.bidtQualificationDTO.averageHourRate
          ? `${parseFloat(
              (Math.round(this.qualification.bidtQualificationDTO.averageHourRate * a) / a).toString()
            ).toFixed(b)} ${this.currentCurrency}`
          : '';

      if (!!this.qualification.bidtQualificationDTO && !!this.qualification.bidtQualificationDTO.averageHourRate) {
        const pre = this.qualification.bidtQualificationDTO.averageHourRate.toString().split('.')[0];
        const post = this.qualification.bidtQualificationDTO.averageHourRate.toString().split('.')[1];
        const max = 10;
        const min = 5;
        if (pre.length > max || (post && post.length > min)) {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLimitExceed'));

          return;
        }
      }
      if (this.isNewQualification) {
        this.onCreate.emit(this.qualification);
        this.display = false;
      } else {
        this.onUpdate.emit(this.qualification);
        this.display = false;
      }
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.qualification &&
      !!this.qualification.bidtQualificationDTO &&
      !!this.qualification.bidtQualificationDTO.qualificationCode &&
      this.qualification.bidtQualificationDTO.qualificationCode.trim().length !== 0 &&
      !!this.qualification.bidtQualificationDTO.qualificationTitle &&
      this.qualification.bidtQualificationDTO.qualificationTitle.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  private loadCurrency(): void {
    this.qualificationService.getLocalCurrency().subscribe((result) => {
      this.currentCurrency = result;
    });
  }
}
