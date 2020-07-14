import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtTrainingDTO } from '../../../../../shared/types/api-types/bidt-training-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-training-popup-form',
  templateUrl: './training-popup-form.component.html'
})
export class TrainingPopupFormComponent extends DialogComponent implements OnInit {
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
  public onValidated: EventEmitter<BidtTrainingDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtTrainingDTO>;

  public displayValue: boolean;

  public trainingDTO: BidtTrainingDTO;
  public isEditable: boolean;
  public requestedByList: LabelValue<string>[];
  public selectedTrainingStartDate: Date;
  public selectedTrainingEndDate: Date;
  public selectedFromAM: string;
  public selectedToAM: string;

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'TrainingPopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtTrainingDTO>();
    this.trainingDTO = {};
    this.selectedFromAM = 'AM';
    this.selectedToAM = 'PM';
    this.loadRequestedbyList();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.trainingDTO = this.componentData.object || {};
      if (this.trainingDTO && this.trainingDTO.trainingStartDate) {
        this.selectedTrainingStartDate = new Date(this.trainingDTO.trainingStartDate);
      }
      if (this.trainingDTO && this.trainingDTO.trainingEndDate) {
        this.selectedTrainingEndDate = new Date(this.trainingDTO.trainingEndDate);
      }

      const hourValue = 12;
      if (this.trainingDTO.trainingStartDate) {
        const startTime = new Date(this.trainingDTO.trainingStartDate);
        const fromHour = startTime.getHours();
        this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
      }

      if (this.trainingDTO.trainingEndDate) {
        const endTime = new Date(this.trainingDTO.trainingEndDate);
        const toHour = endTime.getHours();
        this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
      }
    }
  }

  public getTypeName(): string {
    return 'TrainingPopupFormComponent';
  }

  public validate(): void {
    if (this.trainingDTO.trainingName && this.selectedTrainingStartDate && this.selectedTrainingEndDate) {
      const addedMilliSeconds = 43200000;
      const hourValue = 12;
      if (this.selectedFromAM === 'PM') {
        if (this.selectedTrainingStartDate.getHours() < hourValue) {
          let timestamp = this.selectedTrainingStartDate.getTime();
          timestamp = timestamp + addedMilliSeconds;
          this.trainingDTO.trainingStartDate = new Date(timestamp).toISOString();
        } else {
          this.trainingDTO.trainingStartDate =
            this.selectedTrainingStartDate && this.selectedTrainingStartDate.toISOString();
        }
      } else if (this.selectedFromAM === 'AM') {
        if (this.selectedTrainingStartDate.getHours() >= hourValue) {
          let timestamp = this.selectedTrainingStartDate.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.trainingDTO.trainingStartDate = new Date(timestamp).toISOString();
        } else {
          this.trainingDTO.trainingStartDate =
            this.selectedTrainingStartDate && this.selectedTrainingStartDate.toISOString();
        }
      }

      if (this.selectedToAM === 'PM') {
        if (this.selectedTrainingEndDate.getHours() < hourValue) {
          let timestamp = this.selectedTrainingEndDate.getTime();
          timestamp = timestamp + addedMilliSeconds;
          this.trainingDTO.trainingEndDate = new Date(timestamp).toISOString();
        } else {
          this.trainingDTO.trainingEndDate = this.selectedTrainingEndDate && this.selectedTrainingEndDate.toISOString();
        }
      } else if (this.selectedToAM === 'AM') {
        if (this.selectedTrainingEndDate.getHours() >= hourValue) {
          let timestamp = this.selectedTrainingEndDate.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.trainingDTO.trainingEndDate = new Date(timestamp).toISOString();
        } else {
          this.trainingDTO.trainingEndDate = this.selectedTrainingEndDate && this.selectedTrainingEndDate.toISOString();
        }
      }

      if (
        this.trainingDTO.trainingEndDate &&
        this.trainingDTO.trainingStartDate &&
        new Date(this.trainingDTO.trainingEndDate) < new Date(this.trainingDTO.trainingStartDate)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));

        return;
      }

      this.trainingDTO.trainingPerformed = this.trainingDTO.trainingPerformed ? 1 : 0;
      this.onValidated.emit(this.trainingDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadRequestedbyList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_TRAINING_ASKED_BY_MAP).subscribe((results) => {
      this.requestedByList = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
      this.requestedByList.map((requestedBy) => {
        return (requestedBy.value = requestedBy.label);
      });
    });
  }
}
