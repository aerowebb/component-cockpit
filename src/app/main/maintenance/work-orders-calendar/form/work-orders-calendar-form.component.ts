import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventHelper, ProjectModel } from 'bryntum-gantt';
import * as moment from 'moment';
import { Observable, Subject, forkJoin } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { ColumnsModelObject } from '../../../../shared/components/gantt/columns-model-object.interface';
import { DependenciesModel } from '../../../../shared/components/gantt/dependencies-data-model.interface';
import { GanttConfig } from '../../../../shared/components/gantt/gantt-config.interface';
import { GanttComponent } from '../../../../shared/components/gantt/gantt.component';
import {
  GanttDropContext,
  GanttEditContext,
  GanttResizeContext,
  GanttService,
  TaskModelObjectGantt
} from '../../../../shared/components/gantt/gantt.service';
import { ProjectModelObject } from '../../../../shared/components/gantt/project-model.interface';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { DurationTotalByWorkOrderOutput } from '../../../../shared/types/api-input-types/work-order/duration-total-by-work-order-output';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkPackageFormService } from '../../work-package/form/work-package-form.service';

import { ContextMenuItem, WorkOrdersCalendarFormService } from './work-orders-calendar-form.service';

interface AnteriorOrPosterior {
  parentCode: string;
  data: BidmWorkOrderDataDTO;
}

interface WorkOrderRowData {
  code: string;
  woId: string;
}

@Component({
  selector: 'aw-work-orders-calendar-form',
  styleUrls: ['./work-orders-calendar-form.component.scss'],
  templateUrl: './work-orders-calendar-form.component.html'
})
export class WorkOrdersCalendarFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly WOCODE_NAME_CLS = 'wocode';

  private static readonly COLUMN_CODE_WIDTH: number = 200;
  private static readonly COLUMN_DESCRITPION_WIDTH: number = 300;
  public readonly TIME_RESOLUTION_MAX_ZOOM: number = 15;
  public readonly TIME_RESOLUTION_MIN_ZOOM: number = 5;

  public workPackageId: string;
  public workPackage: BidmProjectDTO;
  public workOrderDataList: BidmWorkOrderDataDTO[];

  // objects use to build gantt element
  public ganttConfig: GanttConfig;
  public project: ProjectModel;
  public columnList: ColumnsModelObject[];
  public dependencies: DependenciesModel[];
  public ganttLoading: boolean;
  public eventList: TaskModelObjectGantt[];
  public listAnteriorOrPosterior: AnteriorOrPosterior[];
  private numberEvent: number;

  private woMap: Map<string, BidmWorkOrderDTO>;
  private durationMap: Map<string, number>;
  public ganttZoomLevel: number;
  public startDate: Date | undefined;
  public endDate: Date | undefined;

  public workOrderListToUpdate: BidmWorkOrderDTO[];

  // edit event
  public showEditWorkOrder: boolean;
  public selectedEventModel: TaskModelObjectGantt;
  public selectedWorkOrder: BidmWorkOrderDTO;
  public workOrderList: WorkOrderRowData[];

  @ViewChild(GanttComponent)
  private readonly gantt: GanttComponent;

  private readonly ganttTimeResolutionChanged: Subject<number>;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly workOrdersCalendarFormService: WorkOrdersCalendarFormService,
    private readonly ganttService: GanttService,
    private readonly wpFormService: WorkPackageFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.ganttTimeResolutionChanged = new Subject<number>();
    this.onBeforeLoadOnce();
    this.wpFormService.getBidmWorkOrdersStructureByProject('').subscribe();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_ORDERS_CALENDAR_FORM;
  }

  private onBeforeLoadOnce(): void {
    this.setGanttColumnList();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData && this.componentData.objectId) {
      this.workPackage = this.serializationService.deserialize(this.componentData.objectId);
      if (this.workPackage && this.workPackage.projectId) {
        this.workPackageId = this.workPackage.projectId;
      }
    }

    this.init();
  }

  private init(): void {
    this.ganttLoading = false;
    this.eventList = [];
    this.listAnteriorOrPosterior = [];
    this.dependencies = [];
    this.numberEvent = 0;
    this.workOrderDataList = [];
    this.woMap = new Map<string, BidmWorkOrderDTO>();
    this.durationMap = new Map<string, number>();
    this.ganttZoomLevel = this.TIME_RESOLUTION_MIN_ZOOM;

    this.showEditWorkOrder = false;
    this.workOrderList = [];

    this.intiProject();
  }

  private initGanttEngine(): void {
    if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.gantt.ganttEngine.localeManager.locale = 'Fr';
    } else {
      this.gantt.ganttEngine.localeManager.locale = 'En';
    }

    this.registerGanttListeners();
    this.registerGanttTimeResolutionObservable();
    this.registerGanttUpdate();
    // task drop
    this.registerGanttBeforeTaskDropFinalize();
    this.registerGanttTaskAfterDrop();
    // task resize
    this.registerGanttBeforeTaskResizeFinalize();
    this.registerGanttAfterTaskResize();
    // task Edit
    this.registerGanttBeforeEdit();

    this.setGanttTimeSpan();
    this.setGanttEnginedefaultProperties();
  }

  private setGanttTimeSpan(): void {
    if (ObjectUtils.isDefined(this.startDate) && ObjectUtils.isDefined(this.endDate)) {
      this.gantt.ganttEngine.setTimeSpan(this.startDate as Date, this.endDate as Date);
    }
  }

  private setGanttEnginedefaultProperties(): void {
    this.gantt.ganttEngine.getSubGrid('locked').width = WorkOrdersCalendarFormComponent.COLUMN_DESCRITPION_WIDTH - 1;
    this.gantt.ganttEngine.features.rowReorder.disabled = true;
    this.gantt.ganttEngine.expandAll();
  }

  private intiProject(): void {
    this.ganttLoading = true;
    if (this.workPackageId) {
      this.workOrdersCalendarFormService
        .getBidmWorkOrdersByProject(this.workPackageId)
        .subscribe((workOrderDataList) => {
          this.getWorkOrderDataList(workOrderDataList);
          this.fillDurationMap(this.workOrderDataList, workOrderDataList);
        });
    }
  }

  private fillDurationMap(allDataList: BidmWorkOrderDataDTO[], dataList: BidmWorkOrderDataDTO[]): void {
    const observableListDuration: Observable<DurationTotalByWorkOrderOutput>[] = [];
    allDataList.forEach((workData) => {
      observableListDuration.push(
        this.workOrdersCalendarFormService.getOpreationDurationTotalWorkOrder(workData.bidmWorkOrder)
      );
    });
    forkJoin(observableListDuration).subscribe((durationList) => {
      durationList.forEach((duration) => {
        if (duration.duration > 0) {
          this.durationMap.set(duration.workOrder.woCode as string, duration.duration);
        }
      });
      this.buildWorkOrderMap(dataList);
      this.buildProjectModel(dataList);
      this.buildGanttConfig();
      this.updateGanttView();

      setTimeout(() => {
        this.gantt.ganttEngine.zoomToFit();

        this.ganttZoomLevel =
          this.gantt.ganttEngine.zoomLevel > this.TIME_RESOLUTION_MAX_ZOOM
            ? this.TIME_RESOLUTION_MAX_ZOOM
            : this.gantt.ganttEngine.zoomLevel < this.TIME_RESOLUTION_MIN_ZOOM
            ? this.TIME_RESOLUTION_MIN_ZOOM
            : this.gantt.ganttEngine.zoomLevel;

        this.ganttLoading = false;
      });
    });
  }

  private getWorkOrderDataList(workOrderDataList: BidmWorkOrderDataDTO[]): void {
    workOrderDataList.forEach((workOrderData) => {
      this.workOrderDataList.push(workOrderData);
      if (workOrderData.bidmWorkOrderDataList && workOrderData.bidmWorkOrderDataList.length > 0) {
        this.getWorkOrderDataList(workOrderData.bidmWorkOrderDataList);
      }
    });
  }

  private buildGanttConfig(): void {
    this.ganttConfig = {
      columns: this.columnList,
      project: this.project,
      labels: {
        left: {
          field: 'name',
          editor: {
            type: 'textfield'
          }
        }
      },
      projectLines: {
        enableResizing: true
      },
      taskContextMenu: {
        items: {
          add: false,
          deleteTask: false
        },
        processItems: ({ eventRecord, items }) => {
          this.setTaskContextMenu(eventRecord, items);
        }
      }
    };

    setTimeout(() => {
      this.initGanttEngine();
    });
  }

  private setTaskContextMenu(taskModelObjectGantt: GanttEditContext, items: { [key: string]: ContextMenuItem }): void {
    this.setEditContextMenu(taskModelObjectGantt, items);
  }

  private setEditContextMenu(taskModelObjectGantt: GanttEditContext, items: { [key: string]: ContextMenuItem }): void {
    items.editTask.text = this.translateService.instant(this.getTranslateKey('editWorkOrder')) as string;
    items.editTask.onItem = (eventRecord: GanttEditContext) => {
      this.selectedEventModel = eventRecord.taskRecord;
      this.selectedWorkOrder = eventRecord.taskRecord.workOrder;
      this.showEditWorkOrder = true;
    };
  }

  public onAddWorkOrder(isCreated: boolean): void {
    this.gantt.ganttEngine.refreshWithTransition();
  }

  private buildWorkOrderMap(elementList: BidmWorkOrderDataDTO[]): void {
    let count = 0;

    const aux = (list: BidmWorkOrderDataDTO[]) => {
      list.forEach((elt) => {
        const woRow: WorkOrderRowData = {
          code: elt.bidmWorkOrder.woCode as string,
          woId: elt.bidmWorkOrder.woId as string
        };
        this.workOrderList.push(woRow);
        this.woMap.set(count.toString(), elt.bidmWorkOrder);
        count++;
        if (elt.bidmWorkOrderDataList) {
          aux(elt.bidmWorkOrderDataList);
        }
      });
    };

    aux(elementList);
  }

  private buildProjectModel(elementList: BidmWorkOrderDataDTO[]): void {
    if (this.workPackage.projectStartDate) {
      const projectModelObject: ProjectModelObject = {
        eventsData: this.createEventList(elementList),
        dependenciesData: this.dependencies
      };
      this.project = new ProjectModel(projectModelObject);
    }
  }

  private createEventList(elementList: BidmWorkOrderDataDTO[]): TaskModelObjectGantt[] {
    const events: TaskModelObjectGantt[] = elementList.map((workOrderData) => {
      return this.createEvent(workOrderData);
    });

    const finalEventList: TaskModelObjectGantt[] = this.createAnteriorOrPosterior(events);

    finalEventList.sort((a, b) => {
      return a.id - b.id;
    });

    return finalEventList;
  }

  private createAnteriorOrPosterior(actualEvents: TaskModelObjectGantt[]): TaskModelObjectGantt[] {
    const newEvents: TaskModelObjectGantt[] = [...actualEvents];
    this.listAnteriorOrPosterior.forEach((row) => {
      const parent: TaskModelObjectGantt = {
        ...(actualEvents.find((event) => event.code === row.parentCode) as TaskModelObjectGantt)
      };
      switch (row.data.woLinkType) {
        case '1':
          this.addAnterior(newEvents, parent);
          newEvents.push(this.createAnterior(row.data, Number(parent.id), parent));
          this.addDependence(parent.id, parent.id + 1);
          break;

        case '2':
          this.addPosterior(newEvents, parent);
          newEvents.push(this.createPosterior(row.data, Number(parent.id) + 1, parent));
          this.addDependence(parent.id, parent.id + 1);
          break;

        default:
          break;
      }
    });

    return newEvents;
  }

  private addDependence(from: number, to: number): void {
    const dependence: DependenciesModel = {
      fromEvent: from,
      toEvent: to
    };
    this.dependencies.push(dependence);
  }

  private addAnterior(newEvents: TaskModelObjectGantt[], parent: TaskModelObjectGantt): void {
    newEvents.forEach((event) => {
      if (event.id >= parent.id) {
        event.id = event.id + 1;
        if (event.children) {
          event.children.forEach((child) => {
            if (child.id >= parent.id) {
              child.id = child.id + 1;
            }
          });
        }
      }
    });
  }

  private addPosterior(newEvents: TaskModelObjectGantt[], parent: TaskModelObjectGantt): void {
    newEvents.forEach((event) => {
      if (event.id > parent.id) {
        event.id = event.id + 1;
        if (event.children) {
          event.children.forEach((child) => {
            if (child.id > parent.id) {
              child.id = child.id + 1;
            }
          });
        }
      }
    });
  }

  private createAnterior(
    workOrderData: BidmWorkOrderDataDTO,
    givenId?: number,
    parent?: TaskModelObjectGantt
  ): TaskModelObjectGantt {
    this.numberEvent++;
    const event: TaskModelObjectGantt = {
      id: givenId ? givenId : this.numberEvent,
      name: workOrderData.bidmWorkOrder.woCode,
      code: workOrderData.bidmWorkOrder.woCode,
      draggable: workOrderData.bidmWorkOrderDataList ? this.isDraggable(workOrderData.bidmWorkOrderDataList) : false,
      description: workOrderData.bidmWorkOrder.woDescription,
      workOrder: workOrderData.bidmWorkOrder,
      startDate: workOrderData.bidmWorkOrder.woScheduledStartDate
        ? workOrderData.bidmWorkOrder.woScheduledStartDate
        : moment(parent ? parent.startDate : moment().toDate())
            .subtract(this.durationMap.get(workOrderData.bidmWorkOrder.woCode as string), 'h')
            .toDate(),
      endDate: workOrderData.bidmWorkOrder.woScheduledEndDate
        ? workOrderData.bidmWorkOrder.woScheduledEndDate
        : moment(parent ? parent.endDate : moment().toDate())
            .add(this.durationMap.get(workOrderData.bidmWorkOrder.woCode as string), 'h')
            .toDate(),
      children: workOrderData.bidmWorkOrderDataList
        ? this.checkIfChildren(workOrderData.bidmWorkOrderDataList, workOrderData)
        : undefined
    };
    this.eventList.push(event);

    return event;
  }

  private createPosterior(
    workOrderData: BidmWorkOrderDataDTO,
    givenId?: number,
    parent?: TaskModelObjectGantt
  ): TaskModelObjectGantt {
    this.numberEvent++;
    const event: TaskModelObjectGantt = {
      id: givenId ? givenId : this.numberEvent,
      name: workOrderData.bidmWorkOrder.woCode,
      code: workOrderData.bidmWorkOrder.woCode,
      draggable: workOrderData.bidmWorkOrderDataList ? this.isDraggable(workOrderData.bidmWorkOrderDataList) : false,
      description: workOrderData.bidmWorkOrder.woDescription,
      workOrder: workOrderData.bidmWorkOrder,
      startDate: workOrderData.bidmWorkOrder.woScheduledStartDate
        ? workOrderData.bidmWorkOrder.woScheduledStartDate
        : parent
        ? parent.endDate
        : moment().toDate(),
      endDate: workOrderData.bidmWorkOrder.woScheduledEndDate
        ? workOrderData.bidmWorkOrder.woScheduledEndDate
        : moment(parent ? parent.endDate : moment().toDate())
            .add(this.durationMap.get(workOrderData.bidmWorkOrder.woCode as string), 'h')
            .toDate(),
      children: workOrderData.bidmWorkOrderDataList
        ? this.checkIfChildren(workOrderData.bidmWorkOrderDataList, workOrderData)
        : undefined
    };
    this.eventList.push(event);

    return event;
  }

  private createEvent(
    workOrderData: BidmWorkOrderDataDTO,
    givenId?: number,
    parent?: BidmWorkOrderDataDTO
  ): TaskModelObjectGantt {
    this.numberEvent++;
    const event: TaskModelObjectGantt = {
      id: givenId ? givenId : this.numberEvent,
      name: workOrderData.bidmWorkOrder.woCode,
      code: workOrderData.bidmWorkOrder.woCode,
      draggable: workOrderData.bidmWorkOrderDataList ? this.isDraggable(workOrderData.bidmWorkOrderDataList) : false,
      description: workOrderData.bidmWorkOrder.woDescription,
      workOrder: workOrderData.bidmWorkOrder,
      startDate: workOrderData.bidmWorkOrder.woScheduledStartDate
        ? workOrderData.bidmWorkOrder.woScheduledStartDate
        : parent
        ? parent.bidmWorkOrder.woScheduledStartDate
        : moment().toDate(),
      endDate: workOrderData.bidmWorkOrder.woScheduledEndDate
        ? workOrderData.bidmWorkOrder.woScheduledEndDate
        : this.durationMap.get(workOrderData.bidmWorkOrder.woCode as string)
        ? moment(workOrderData.bidmWorkOrder.woScheduledStartDate)
            .add(this.durationMap.get(workOrderData.bidmWorkOrder.woCode as string), 'h')
            .toDate()
        : moment().toDate(),
      children: workOrderData.bidmWorkOrderDataList
        ? this.checkIfChildren(workOrderData.bidmWorkOrderDataList, workOrderData)
        : undefined
    };
    this.eventList.push(event);

    return event;
  }

  public isDraggable(bidmWorkOrderDataDTO: BidmWorkOrderDataDTO[]): boolean {
    const children: BidmWorkOrderDataDTO[] = bidmWorkOrderDataDTO.filter((wo) =>
      StringUtils.isNullOrEmpty(wo.woLinkType)
    );
    if (children.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  public checkIfChildren(
    bidmWorkOrderDataDTO: BidmWorkOrderDataDTO[],
    parent: BidmWorkOrderDataDTO
  ): TaskModelObjectGantt[] {
    const realChild: BidmWorkOrderDataDTO[] = bidmWorkOrderDataDTO.filter((wo) =>
      StringUtils.isNullOrEmpty(wo.woLinkType)
    );
    const notChild: AnteriorOrPosterior[] = bidmWorkOrderDataDTO
      .filter((wo) => !StringUtils.isNullOrEmpty(wo.woLinkType) && this.isWoLinkTypeIsImportant(wo.woLinkType))
      .map((wo) => {
        const anteriorOrPosterior: AnteriorOrPosterior = {
          parentCode: parent.bidmWorkOrder.woCode as string,
          data: wo
        };

        return anteriorOrPosterior;
      });

    this.listAnteriorOrPosterior = [...this.listAnteriorOrPosterior, ...notChild];

    return realChild.map((workOrderData) => {
      return this.createEvent(workOrderData);
    });
  }

  private isWoLinkTypeIsImportant(woLinkType: string): boolean {
    if (!StringUtils.isNullOrEmpty(woLinkType)) {
      if (woLinkType === '1' || woLinkType === '2') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  private setGanttColumnList(): void {
    this.columnList = [
      {
        enableCellContextMenu: false,
        htmlEncode: false,
        locked: true,
        editor: false,
        text: this.translateService.instant('code'),
        draggable: false,
        type: 'name',
        width: WorkOrdersCalendarFormComponent.COLUMN_CODE_WIDTH,
        renderer: ({ record }: { record: { data: TaskModelObjectGantt } }) => {
          let woId: string | undefined;
          this.woMap.forEach((value, key) => {
            if (value.woCode === record.data.name) {
              woId = key;
            }
          });
          const woCode = record.data.name;

          return `
            <div class="work-order">
              <div>
                <a
                  id="${woId}"
                  class="${WorkOrdersCalendarFormComponent.WOCODE_NAME_CLS}"
                  style="cursor: pointer; font-style: italic; font-weight: 600;"
                >
                  ${woCode}
                </a>
              </div>
            </div>
            `;
        }
      },
      {
        enableCellContextMenu: false,
        editor: false,
        draggable: false,
        field: 'description',
        text: this.translateService.instant(this.getTranslateKey('description')),
        width: WorkOrdersCalendarFormComponent.COLUMN_DESCRITPION_WIDTH
      }
    ];
  }

  public openWorkOrderLink(workOrder: BidmWorkOrderDTO): void {
    if (workOrder && workOrder.woId && workOrder.projectId) {
      const workOrderId: BidmWorkOrderDTOId = {
        woId: workOrder.woId,
        projectId: workOrder.projectId
      };
      this.openWorkOrder(workOrderId, ComponentOpenMode.Read);
    }
  }

  public openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private registerGanttListeners(): void {
    EventHelper.addListener(this.gantt.ganttEngine.element, {
      element: this.gantt.ganttEngine.element,
      click: (event: MouseEvent) => {
        const eventTarget = event.target as HTMLElement;
        if (
          eventTarget.classList.contains(WorkOrdersCalendarFormComponent.WOCODE_NAME_CLS) &&
          ObjectUtils.isDefined(this.woMap.get(eventTarget.id))
        ) {
          this.openWorkOrderLink(this.woMap.get(eventTarget.id) as BidmWorkOrderDTO);
        }
      }
    });
  }

  private registerGanttTimeResolutionObservable(): void {
    this.ganttTimeResolutionChanged.pipe(distinctUntilChanged(), takeUntil(this.unsubscribe)).subscribe({
      next: (value) => {
        this.gantt.ganttEngine.zoomTo(value);
      }
    });
  }

  private registerGanttUpdate(): void {
    this.gantt.ganttEngine.project.taskStore.on('update', (context: GanttDropContext) => {
      // console.log('t');
    });
  }

  /********** Task Edit Events **********/

  private registerGanttBeforeEdit(): void {
    this.gantt.ganttEngine.on('beforeTaskEdit', (context) => {
      // cancel edition of work order with double click
      return false;
    });
  }

  /********** Task Resize Events **********/

  private registerGanttBeforeTaskResizeFinalize(): void {
    this.gantt.ganttEngine.on('beforeTaskResizeFinalize', ({ context }: { context: GanttResizeContext }) => {
      context.async = true;

      const dropStatus = true;
      context.finalize(dropStatus);
    });
  }

  private registerGanttAfterTaskResize(): void {
    this.gantt.ganttEngine.on('taskResizeEnd', (context: GanttResizeContext) => {
      this.workOrderListToUpdate = [];

      this.saveTaskWorkOrder(context.source.data as TaskModelObjectGantt[]);
      this.workOrdersCalendarFormService.updateBidmWorkOrders(this.workOrderListToUpdate).subscribe();
    });
  }

  /********** Task Drag Events **********/

  private registerGanttTaskAfterDrop(): void {
    this.gantt.ganttEngine.on('afterTaskDrop', (context: GanttDropContext) => {
      this.workOrderListToUpdate = [];

      if (context.valid) {
        this.saveTaskWorkOrder(context.source.data as TaskModelObjectGantt[]);
        this.workOrdersCalendarFormService.updateBidmWorkOrders(this.workOrderListToUpdate).subscribe();
      }
    });
  }

  private registerGanttBeforeTaskDropFinalize(): void {
    this.gantt.ganttEngine.on('beforeTaskDropFinalize', ({ context }: { context: GanttDropContext }) => {
      context.async = true;

      let dropStatus = true;
      const startDate = context.startDate;
      const predecessorsList = context.record.predecessorTasks as TaskModelObjectGantt[];
      predecessorsList.forEach((predecessor) => {
        if (predecessor.workOrder.woScheduledEndDate && predecessor.workOrder.woScheduledEndDate > startDate) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnInvalidOperation'));
          dropStatus = false;
        }
      });
      context.finalize(dropStatus);
    });
  }

  private saveTaskWorkOrder(taskList: TaskModelObjectGantt[]): void {
    taskList.forEach((task) => {
      task.workOrder.woScheduledStartDate = moment(task.startDate).toDate();
      task.workOrder.woScheduledEndDate = moment(task.endDate).toDate();
      this.workOrderListToUpdate.push(task.workOrder);
      if (task.children && task.children.length > 0) {
        this.saveTaskWorkOrder(task.children as TaskModelObjectGantt[]);
      }
    });
  }

  public onChangeTimeResolution(event: { value: number }): void {
    this.ganttTimeResolutionChanged.next(event.value);
  }

  public showToday(): void {
    this.gantt.ganttEngine.zoomTo({
      centerDate: new Date(),
      preset: this.gantt.ganttEngine.viewPreset
    });
  }

  private updateGanttView(): void {
    this.getGanttStartDate();
    this.getGanttEndDate();
  }

  private getGanttEndDate(): void {
    this.endDate = this.ganttService.getLastEventEndDate(this.eventList) as Date;
  }

  private getGanttStartDate(): void {
    this.startDate = this.ganttService.getFirstEventStartDate(this.eventList) as Date;
  }
}
