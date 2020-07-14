import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { DateService } from '../../services/date.service';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';

import { EventModel } from './event-model.interface';
import { ResourceModel } from './resource-model.interface';

export interface SchedulerDragContext {
  async: boolean;
  endDate: Date;
  resourceRecord: ResourceModel;
  startDate: Date;
  finalize: Function;
}

export interface SchedulerDropContext {
  async: boolean;
  endDate: Date;
  finalize: Function;
  newResource: ResourceModel;
  record: SchedulerEventRecord<EventModel>;
  startDate: Date;
  targetEventRecord: SchedulerEventRecord<EventModel> | undefined;
}

export interface SchedulerEventRecord<T extends EventModel> {
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  private static readonly EVENT_DATE_FORMAT: string = 'YYYY-MM-DD HH:mm';

  public constructor(private readonly dateService: DateService) {}

  public formatEventDate(date: Date): Date {
    return moment(moment(date).format(SchedulerService.EVENT_DATE_FORMAT)).toDate();
  }

  public formatEventTimestamp(date: number): Date {
    return moment(moment(date).format(SchedulerService.EVENT_DATE_FORMAT)).toDate();
  }

  public getFirstEventStartDate(eventList: EventModel[]): Date | undefined {
    const sortedEventList = this.dateService.sort(eventList.map((event) => moment(event.startDate)));

    return ListUtils.isEmpty(sortedEventList) ? undefined : sortedEventList[0].toDate();
  }

  public getLastEventEndDate(eventList: EventModel[]): Date | undefined {
    const sortedEventList = this.dateService.sort(
      eventList
        .map((event) => event.endDate)
        .filter((date) => ObjectUtils.isDefined(date))
        .map((date) => {
          return moment(date);
        })
    );

    return ListUtils.isEmpty(sortedEventList) ? undefined : sortedEventList[sortedEventList.length - 1].toDate();
  }
}
