import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { FindEmployeeQualificationDTO } from '../../../../../shared/types/api-output-types/bidt-qualif-employee/find-employee-qualification-dto.interface';
import { QualificationTitleListDTO } from '../../../../../shared/types/api-output-types/bidt-qualification/qualification-title-list-dto.interface';
import { BidtQualifEmployeeDTO } from '../../../../../shared/types/api-types/bidt-qualif-employee-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

import { QualificationPopupFormService } from './qualification-popup-form.service';

@Component({
  selector: 'aw-qualification-popup-form',
  templateUrl: './qualification-popup-form.component.html'
})
export class QualificationPopupFormComponent extends DialogComponent implements OnInit {
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
  public onValidated: EventEmitter<FindEmployeeQualificationDTO>;

  @Input('component-data')
  public componentData: PopupEntry<FindEmployeeQualificationDTO>;

  public displayValue: boolean;

  public qualifEmployeeDTO: FindEmployeeQualificationDTO;
  public isEditable: boolean;
  public qualificationTypes: LabelValue<string>[];
  public qualificationTitles: LabelValue<string>[];

  public bidtQualifEmployeeDTO: BidtQualifEmployeeDTO;
  public qualifEmployeeStartDate: Date;
  public qualifEmployeeEndDate: Date;
  public selectedQualificationType: string;
  public selectedQualificationTitle: string;
  private qualificationTitlesCache: QualificationTitleListDTO[];

  public constructor(
    public qualificationPopupFormService: QualificationPopupFormService,
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'QualificationPopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<FindEmployeeQualificationDTO>();
    this.qualificationTitles = [];
    this.qualificationTypes = [];
    this.qualificationTitlesCache = [];
    this.qualifEmployeeDTO = {};
    this.bidtQualifEmployeeDTO = {};
    this.loadQualificationType();
  }

  public ngOnInit() {
    this.qualificationPopupFormService.findQualificationTitle().subscribe((results) => {
      this.qualificationTitlesCache = results;

      if (this.componentData && this.componentData.componentId) {
        this.qualifEmployeeDTO = this.componentData.object || {};

        if (!this.qualifEmployeeDTO.bidtQualifEmployeeDTO) {
          this.qualifEmployeeDTO.bidtQualifEmployeeDTO = {};
        }
        this.bidtQualifEmployeeDTO = this.qualifEmployeeDTO.bidtQualifEmployeeDTO;

        if (this.bidtQualifEmployeeDTO && !!this.bidtQualifEmployeeDTO.qualifEmployeeStartDate) {
          this.qualifEmployeeStartDate = new Date(this.bidtQualifEmployeeDTO.qualifEmployeeStartDate);
        }
        if (this.bidtQualifEmployeeDTO && !!this.bidtQualifEmployeeDTO.qualifEmployeeEndDate) {
          this.qualifEmployeeEndDate = new Date(this.bidtQualifEmployeeDTO.qualifEmployeeEndDate);
        }
        this.showQualificationType();
        this.loadTitles();
      }
    });
  }

  public getTypeName(): string {
    return 'QualificationPopupFormComponent';
  }

  public validate(): void {
    if (
      this.qualifEmployeeDTO.bidtQualifEmployeeDTO &&
      this.selectedQualificationTitle &&
      this.selectedQualificationType
    ) {
      this.qualifEmployeeDTO.bidtQualifEmployeeDTO.qualifEmployeeEndDate =
        this.qualifEmployeeEndDate && this.qualifEmployeeEndDate.toISOString();
      this.qualifEmployeeDTO.bidtQualifEmployeeDTO.qualifEmployeeStartDate =
        this.qualifEmployeeStartDate && this.qualifEmployeeStartDate.toISOString();

      this.qualifEmployeeDTO.qualificationType = this.qualificationTypes.filter((types) => {
        return types.value === this.selectedQualificationType;
      })[0].label;

      this.qualifEmployeeDTO.bidtQualifEmployeeDTO.bidtQualificationId = Number(this.selectedQualificationTitle);

      this.qualifEmployeeDTO.qualificationTitle = this.qualificationTitles.filter((title) => {
        return title.value === this.selectedQualificationTitle;
      })[0].label;

      this.onValidated.emit(this.qualifEmployeeDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private showQualificationType(): void {
    const temp = this.qualificationTypes.filter((qualifType) => {
      return qualifType.label === this.qualifEmployeeDTO.qualificationType;
    })[0];
    this.selectedQualificationType = temp && temp.value;
  }

  private loadQualificationType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_QUALIFICATION_TYPE_MAP).subscribe((results) => {
      this.qualificationTypes = results;
    });
  }

  public loadTitles(): void {
    this.qualificationTitles = [];
    if (this.selectedQualificationType) {
      const titlesTemp = this.qualificationTitlesCache.filter((title) => {
        return title.bidtQualificationData.qualificationType === this.selectedQualificationType;
      });
      titlesTemp.forEach((title) => {
        this.qualificationTitles.push({ label: title.labelValueList.label, value: title.labelValueList.value });
      });
      // show selected title
      const selectedTitleObj = this.qualificationTitles.filter((title) => {
        return title.label === this.qualifEmployeeDTO.qualificationTitle;
      })[0];

      this.selectedQualificationTitle = selectedTitleObj && selectedTitleObj.value;
    }
  }
}
