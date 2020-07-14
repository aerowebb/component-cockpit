import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { EmployeeHolidaysTableDTO } from '../../../../../shared/types/api-output-types/bidt-employee/employee-holidays-table-dto.interface';
import { BidtEmployeeDTO } from '../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-holidays-popup-form',
  styleUrls: ['../../employee-form.component.scss'],
  templateUrl: './holidays-popup-form.component.html'
})
export class HolidaysPopupFormComponent extends DialogComponent implements OnInit {
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
  public onValidated: EventEmitter<EmployeeHolidaysTableDTO>;

  @Input('component-data')
  public componentData: PopupEntry<EmployeeHolidaysTableDTO>;

  public displayValue: boolean;

  public holidayDTO: EmployeeHolidaysTableDTO;
  public isEditable: boolean;
  public holidayStatusList: LabelValue<string>[];
  public showValidatorPopup: boolean;
  public selectedFromAM: string;
  public selectedToAM: string;
  public startDate: Date;
  public endDate: Date;

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'HolidaysPopupFormComponent');
    this.showValidatorPopup = false;
    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<EmployeeHolidaysTableDTO>();
    this.holidayDTO = {};
    this.selectedFromAM = 'AM';
    this.selectedToAM = 'PM';
    this.loadHolidayStatus();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.holidayDTO = this.componentData.object || {};
      const hourValue = 12;
      if (this.holidayDTO.holidayStartDate) {
        this.startDate = new Date(this.holidayDTO.holidayStartDate);
        const fromHour = new Date(this.holidayDTO.holidayStartDate).getHours();
        this.selectedFromAM = fromHour < hourValue ? 'AM' : 'PM';
      }

      if (this.holidayDTO.holidayEndDate) {
        this.endDate = new Date(this.holidayDTO.holidayEndDate);
        const toHour = new Date(this.holidayDTO.holidayEndDate).getHours();
        this.selectedToAM = toHour < hourValue ? 'AM' : 'PM';
      }
    }
  }

  public getTypeName(): string {
    return 'HolidaysPopupFormComponent';
  }

  public validate(): void {
    if (this.startDate && this.endDate) {
      // the service count the total day only if startDate's value is strictly before 14h/02pm and endDate's value is strictly after 14h/02pm
      const addedMilliSeconds = 43200000; // 12h
      const addedMilliSecondsFromMidnightToThreeAM = 10800000; // 3h

      const hourFromMidnightToThreeAMValue = 3;
      const hourHalfdayValue = 12;
      const hourValueForAfternoon = 14;

      if (this.selectedFromAM === 'PM') {
        let timestamp = this.startDate.getTime();
        if (this.startDate.getHours() < hourHalfdayValue) {
          timestamp = timestamp + addedMilliSeconds;
          if (this.startDate.getHours() < hourFromMidnightToThreeAMValue) {
            timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          }
          this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
        } else if (this.startDate.getHours() <= hourValueForAfternoon) {
          timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
        } else {
          this.holidayDTO.holidayStartDate = new Date(this.startDate).toISOString();
        }
      } else if (this.selectedFromAM === 'AM') {
        if (this.startDate.getHours() >= hourHalfdayValue) {
          let timestamp = this.startDate.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.holidayDTO.holidayStartDate = new Date(timestamp).toISOString();
        } else {
          this.holidayDTO.holidayStartDate = new Date(this.startDate).toISOString();
        }
      }

      if (this.selectedToAM === 'PM') {
        let timestamp = this.endDate.getTime();
        if (this.endDate.getHours() < hourHalfdayValue) {
          timestamp = timestamp + addedMilliSeconds;
          if (this.endDate.getHours() < hourFromMidnightToThreeAMValue) {
            timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          }
          this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
        } else if (this.endDate.getHours() <= hourValueForAfternoon) {
          timestamp = timestamp + addedMilliSecondsFromMidnightToThreeAM;
          this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
        } else {
          this.holidayDTO.holidayEndDate = new Date(this.endDate).toISOString();
        }
      } else if (this.selectedToAM === 'AM') {
        if (this.endDate.getHours() >= hourHalfdayValue) {
          let timestamp = this.endDate.getTime();
          timestamp = timestamp - addedMilliSeconds;
          this.holidayDTO.holidayEndDate = new Date(timestamp).toISOString();
        } else {
          this.holidayDTO.holidayEndDate = new Date(this.endDate).toISOString();
        }
      }

      if (
        this.holidayDTO.holidayEndDate &&
        this.holidayDTO.holidayStartDate &&
        new Date(this.holidayDTO.holidayEndDate) < new Date(this.holidayDTO.holidayStartDate)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('fromDateGreaterThanToDateError'));

        return;
      }

      this.onValidated.emit(this.holidayDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadHolidayStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_ABSENCE_STATUS_MAP).subscribe((results) => {
      this.holidayStatusList = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
      this.holidayStatusList.map((holiday) => {
        return (holiday.value = holiday.label);
      });
    });
  }

  public openValidatorPopup(): void {
    this.showValidatorPopup = true;
  }

  public setSelectedValidator(validator: Event): void {
    this.holidayDTO.holidayValidator = (validator as BidtEmployeeDTO).employeeLastName;
    this.holidayDTO.bidtEmployeeByBidtEmployeeId2Id = (validator as BidtEmployeeDTO).id;
  }
}
