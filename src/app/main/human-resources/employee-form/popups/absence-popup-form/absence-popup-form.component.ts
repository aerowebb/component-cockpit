import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtAbsenceDTO } from '../../../../../shared/types/api-types/bidt-absence-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-absence-popup-form',
  styleUrls: ['../../employee-form.component.scss'],
  templateUrl: './absence-popup-form.component.html'
})
export class AbsencePopupFormComponent extends DialogComponent implements OnInit {
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
  public onValidated: EventEmitter<BidtAbsenceDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtAbsenceDTO>;

  public displayValue: boolean;

  public absenceDTO: BidtAbsenceDTO;
  public isEditable: boolean;
  public absenceTypes: LabelValue<string>[];
  public selectedFrom: Date;
  public selectedTo: Date;
  public selectedFromAM: string;
  public selectedToAM: string;

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'AbsencePopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtAbsenceDTO>();
    this.absenceDTO = {};
    this.loadAbsenceType();
    this.selectedFromAM = 'AM';
    this.selectedToAM = 'PM';
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.absenceDTO = this.componentData.object || {};
      const hourValue = 12;
      if (this.absenceDTO.absenceStartDate) {
        this.selectedFrom = new Date(this.absenceDTO.absenceStartDate);
        const fromHour = this.selectedFrom.getHours();
        this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
      }

      if (this.absenceDTO.absenceEndDate) {
        this.selectedTo = new Date(this.absenceDTO.absenceEndDate);
        const toHour = this.selectedTo.getHours();
        this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
      }
    }
  }

  public getTypeName(): string {
    return 'AbsencePopupFormComponent';
  }

  public validate(): void {
    if (this.selectedFrom && this.selectedTo && this.absenceDTO.absenceType) {
      // the service count the total day only if selectedFrom's value is strictly before 14h/02pm and selectedTo's value is strictly after 14h/02pm
      const addedMilliSeconds = 43200000; // 12h
      const addedMilliSecondsFromMidnightToThreeAM = 10800000; // 3h

      const hourFromMidnightToThreeAMValue = 3;
      const hourHalfdayValue = 12;
      const hourValueForAfternoon = 14;

      if (this.selectedFromAM === 'PM') {
        let timestamp = this.selectedFrom.getTime();
        if (this.selectedFrom.getHours() < hourHalfdayValue) {
          timestamp = timestamp + addedMilliSeconds;
          if (this.selectedFrom.getHours() < hourFromMidnightToThreeAMValue) {
            timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          }
          this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
        } else if (this.selectedFrom.getHours() <= hourValueForAfternoon) {
          timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
        } else {
          this.absenceDTO.absenceStartDate = new Date(this.selectedFrom).toISOString();
        }
      } else if (this.selectedFromAM === 'AM') {
        if (this.selectedFrom.getHours() >= hourHalfdayValue) {
          let timestamp = this.selectedFrom.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.absenceDTO.absenceStartDate = new Date(timestamp).toISOString();
        } else {
          this.absenceDTO.absenceStartDate = new Date(this.selectedFrom).toISOString();
        }
      }

      if (this.selectedToAM === 'PM') {
        let timestamp = this.selectedTo.getTime();
        if (this.selectedTo.getHours() < hourHalfdayValue) {
          timestamp = timestamp + addedMilliSeconds;
          if (this.selectedTo.getHours() < hourFromMidnightToThreeAMValue) {
            timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          }
          this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
        } else if (this.selectedTo.getHours() <= hourValueForAfternoon) {
          timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
        } else {
          this.absenceDTO.absenceEndDate = new Date(this.selectedTo).toISOString();
        }
      } else if (this.selectedToAM === 'AM') {
        if (this.selectedTo.getHours() >= hourHalfdayValue) {
          let timestamp = this.selectedTo.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.absenceDTO.absenceEndDate = new Date(timestamp).toISOString();
        } else {
          this.absenceDTO.absenceEndDate = new Date(this.selectedTo).toISOString();
        }
      }

      if (
        this.absenceDTO.absenceEndDate &&
        this.absenceDTO.absenceStartDate &&
        new Date(this.absenceDTO.absenceEndDate) < new Date(this.absenceDTO.absenceStartDate)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));

        return;
      }

      this.onValidated.emit(this.absenceDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public loadAbsenceType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_ABSENCE_TYPE_MAP).subscribe((results) => {
      this.absenceTypes = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
      this.absenceTypes = this.absenceTypes.filter((element) => {
        return element.value !== AWPropertiesConstants.HR_ABSENCE_TYPE_HOLIDAY;
      });
      this.absenceTypes.map((absence) => {
        return (absence.value = absence.label);
      });
    });
  }
}
