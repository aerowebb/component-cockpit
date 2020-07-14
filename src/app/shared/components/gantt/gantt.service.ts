import { Injectable } from '@angular/core';
import { Gantt } from 'bryntum-gantt';
import * as moment from 'moment';

import { DateService } from '../../services/date.service';
import { BidmWorkOrderDTO } from '../../types/api-types/bidm-work-order-dto.interface';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';

import { TaskModelObject as GenericTaskModelObject } from './task-model-gantt.interface';

export interface TaskModelObjectGantt extends GenericTaskModelObject {
  workOrder: BidmWorkOrderDTO;
  operationsDuration?: number;
  code?: string;
  successorTasks?: TaskModelObjectGantt[];
  predecessorTasks?: TaskModelObjectGantt[];
}

export interface GanttResizeContext {
  async: boolean;
  endDate: Date;
  finalize: Function;
  taskRecord: TaskModelObjectGantt;
  startDate: Date;
  source: Gantt;
}

export interface GanttDropContext {
  async: boolean;
  valid: boolean;
  originStart: Date;
  originEnd: Date;
  endDate: Date;
  source: Gantt;
  finalize: Function;
  record: TaskModelObjectGantt;
  startDate: Date;
}

export interface GanttEditContext {
  taskRecord: TaskModelObjectGantt;
}

@Injectable({
  providedIn: 'root'
})
export class GanttService {
  public constructor(private readonly dateService: DateService) {}

  public getFirstEventStartDate(eventList: TaskModelObjectGantt[]): Date | undefined {
    const sortedEventList = this.dateService.sort(eventList.map((event) => moment(event.startDate)));

    return ListUtils.isEmpty(sortedEventList) ? undefined : sortedEventList[0].toDate();
  }

  public getLastEventEndDate(eventList: TaskModelObjectGantt[]): Date | undefined {
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
