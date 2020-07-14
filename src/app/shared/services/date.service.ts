import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { NumberUtils } from '../utils/number-utils';
import { ObjectUtils } from '../utils/object-utils';

import { SessionService } from './session.service';

@Injectable()
export class DateService {
  private static readonly TIMEZONE_VALUE_REGEX: RegExp = /([+-]\d\d):\d\d/;
  private static readonly NB_MILLIS_IN_HOUR: number = 3600000;

  public constructor(private readonly sessionService: SessionService) {}

  public getTimeZoneValue(str: string): string | undefined {
    const matches = str.match(DateService.TIMEZONE_VALUE_REGEX);

    return !!matches && matches.length > 0 ? Number(matches[1]).toString() : undefined;
  }

  public sort(list: moment.Moment[]): moment.Moment[] {
    return list.sort((d1, d2) => {
      if (d1.isBefore(d2)) {
        return -1;
      } else if (d1.isAfter(d2)) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  /**************************************************************************
   * Formatting
   *************************************************************************/

  public dateToString(date: Date | undefined): string {
    return this.handleDateToString(date, this.sessionService.dateFormatMomentJS);
  }

  public dateWitCustomFormatToString(date: Date | undefined, format: string): string {
    return this.handleDateToString(date, format);
  }

  public dateWithHourToString(date: Date | undefined): string {
    return this.handleDateToString(date, this.sessionService.dateTimeFormatMomentJS);
  }

  public dateWithHourToStringWithoutHour(date: Date | undefined): string {
    return this.handleDateToString(date, this.sessionService.dateFormatMomentJS);
  }

  public dateWithHourMinSecToString(date: Date | undefined): string {
    return this.handleDateToString(date, this.sessionService.dateTimeWithSecondFormatMomentJS);
  }

  public momentToString(date: moment.Moment | undefined): string {
    return this.handleMomentToString(date, this.sessionService.dateFormatMomentJS);
  }

  public momentWithHourToString(date: moment.Moment | undefined): string {
    return this.handleMomentToString(date, this.sessionService.dateTimeFormatMomentJS);
  }

  public momentWithHourMinSecToString(date: moment.Moment | undefined): string {
    return this.handleMomentToString(date, this.sessionService.dateTimeWithSecondFormatMomentJS);
  }

  public timestampToString(timestamp: number | undefined): string {
    return this.handleTimestampToString(timestamp, this.sessionService.dateFormatMomentJS);
  }

  public timestampWithHourToString(timestamp: number | undefined): string {
    return this.handleTimestampToString(timestamp, this.sessionService.dateTimeFormatMomentJS);
  }

  public timestampWithHourMinSecToString(timestamp: number | undefined): string {
    return this.handleTimestampToString(timestamp, this.sessionService.dateTimeWithSecondFormatMomentJS);
  }

  public timeWithSecToString(date: Date | undefined): string {
    return this.handleDateToString(date, this.sessionService.timeWithSecondFormatMomentJS);
  }

  private handleDateToString(date: Date | undefined, format: string): string {
    return ObjectUtils.isDefined(date) ? this.formatMoment(moment(date), format) : '';
  }

  private handleMomentToString(date: moment.Moment | undefined, format: string): string {
    return ObjectUtils.isDefined(date) ? this.formatMoment(moment(date), format) : '';
  }

  private handleTimestampToString(timestamp: number | undefined, format: string): string {
    return ObjectUtils.isDefined(timestamp) ? this.formatMoment(moment(timestamp), format) : '';
  }

  private formatMoment(date: moment.Moment, format: string): string {
    return date.format(format);
  }

  public getDurationBetweenDatesInHour(start: Date, end: Date): number {
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setSeconds(0);
    end.setMilliseconds(0);
    const nbMillis = (end.getTime() - start.getTime()) / DateService.NB_MILLIS_IN_HOUR;

    return NumberUtils.roundNumber(nbMillis, 2);
  }

  public addDurationToDate(date: Date, duration: number): Date {
    date.setSeconds(0);
    date.setMilliseconds(0);

    return new Date(date.getTime() + duration * DateService.NB_MILLIS_IN_HOUR);
  }
}
