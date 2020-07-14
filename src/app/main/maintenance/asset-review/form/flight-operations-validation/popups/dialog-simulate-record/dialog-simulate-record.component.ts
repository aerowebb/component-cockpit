import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { MessageService } from '../../../../../../..//shared/services/message.service';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';

interface PopupForm {
  readingDate?: Date;
  allowMeasureInsertionBeforeExistingValue?: boolean;
  allowMeasureReadingGreaterThanPreviousMonth?: boolean;
  forceReading?: boolean;
  allowMeasureReadingEqualsOrSmallerThanPrevious?: boolean;
}

@Component({
  selector: 'aw-dialog-simulate-record',
  templateUrl: './dialog-simulate-record.component.html',
  styleUrls: ['./dialog-simulate-record.component.scss']
})
export class DialogSimulateRecordComponent extends DialogComponent implements OnInit {
  private static readonly TIMEZONE_VALUE_REGEX: RegExp = /([+-]\d\d):\d\d/;
  @Input() public isRecord: boolean;
  @Input() public isSimulate: boolean;
  @Input() public endDate: Date;
  @Output()
  public onValidated: EventEmitter<PopupForm>;

  public statusDate: Date;
  public popupForm: PopupForm;

  public timeZoneList: SelectItem[];
  public currentTimeZone: string | undefined;
  private defaultTimezone: string | undefined;
  private previousTimezone: string | undefined;

  public constructor(
    private readonly propertiesService: PropertiesService,
    public messageService: MessageService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Read, 'DialogSimulateRecordComponent');
    this.currentTimeZone = undefined;
    this.defaultTimezone = undefined;
    this.previousTimezone = undefined;
    this.timeZoneList = [];
    this.popupForm = {
      allowMeasureInsertionBeforeExistingValue: false,
      allowMeasureReadingGreaterThanPreviousMonth: false,
      forceReading: false,
      allowMeasureReadingEqualsOrSmallerThanPrevious: false
    };
    this.onValidated = new EventEmitter<PopupForm>();
  }

  private loadTimeZoneList(): void {
    this.propertiesService.getTimeZones().subscribe((results) => {
      this.timeZoneList = results
        .map((result) => {
          const matches = DialogSimulateRecordComponent.TIMEZONE_VALUE_REGEX.exec(result.value);

          return {
            label: result.label,
            value: !!matches && matches.length > 0 ? Number(matches[1]).toString() : undefined
          };
        })
        .filter((timezone) => !!timezone.value);

      this.propertiesService.getDefaultTimeZoneCode().subscribe((result) => {
        const matches = DialogSimulateRecordComponent.TIMEZONE_VALUE_REGEX.exec(result);
        if (!!matches && matches.length > 0) {
          this.defaultTimezone = Number(matches[1]).toString();

          this.resetTimezone();
        }
      });
    });
  }

  private resetTimezone(): void {
    this.currentTimeZone = this.defaultTimezone;
    this.previousTimezone = this.currentTimeZone;
  }

  public loadDate() {
    this.popupForm.readingDate = this.endDate;
  }

  public ngOnInit() {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.loadTimeZoneList();
    this.loadDate();
  }

  public updateReadingDates(): void {
    const previousTimezoneValue = Number(this.previousTimezone);
    const currentTimeZoneValue = Number(this.currentTimeZone);

    if (currentTimeZoneValue !== previousTimezoneValue) {
      const gap =
        Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
          ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
          : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
      const isGapPositive = currentTimeZoneValue >= previousTimezoneValue;
      if (!!this.popupForm) {
        if (!!this.popupForm.readingDate) {
          const newDate = this.updateDate(gap, isGapPositive, String(this.popupForm.readingDate));
          this.popupForm.readingDate = new Date(newDate);
        }
      }
      this.previousTimezone = this.currentTimeZone;
    }
  }

  private updateDate(gap: number, isGapPositive: boolean, date: string): string {
    if (StringUtils.isNullOrEmpty(date)) {
      return '';
    } else {
      const dateValue = new Date(date);
      const updatedDate = isGapPositive
        ? moment(dateValue).add(gap, 'hours')
        : moment(dateValue).subtract(gap, 'hours');

      return updatedDate.format(this.sessionService.dateTimeFormatMomentJS);
    }
  }

  public showValidate(): boolean {
    const response = !this.popupForm.readingDate ? true : false;

    return response;
  }
  public onValidate() {
    this.onValidated.emit(this.popupForm);
    this.closeDialog();
  }
}
