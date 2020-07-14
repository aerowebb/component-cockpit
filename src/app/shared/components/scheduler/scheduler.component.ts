/* tslint:disable */
/*

Bryntum Scheduler 2.2.1
Copyright(c) 2019 Bryntum AB
https://bryntum.com/contact
https://bryntum.com/license

*/
/**
 * @author Saki
 * @date 2019-04-26 12:02:38
 * @Last Modified by: Saki
 * @Last Modified time: 2019-06-17 10:50:32
 *
 * Taken from the original example and adjusted
 */

/* <remove-on-release> */
/* cSpell: ignore eventselectionchange */
/* </remove-on-release */

import {
  Component,
  OnInit,
  OnChanges,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
// UMD bundle is used to support IE11 browser. If you don't need it just use import from 'bryntum-scheduler' instead
import { Scheduler, AssignmentModel, AssignmentStore, EventModel } from 'bryntum-scheduler';
// import { Scheduler } from 'bryntum-scheduler';

@Component({
  selector: 'bry-scheduler',
  template: ''
})
export class SchedulerComponent implements OnInit, OnChanges, OnDestroy {
  private elementRef: ElementRef;
  public schedulerEngine: Scheduler;

  private featureRe: RegExp = /Feature$/;

  /* #region features */
  private features: string[] = [
    'cellEditFeature',
    'cellTooltipFeature',
    'columnDragToolbarFeature',
    'columnLinesFeature',
    'columnPickerFeature',
    'columnReorderFeature',
    'columnResizeFeature',
    'contextMenuFeature',
    'dependenciesFeature',
    'dependencyEditFeature',
    'eventContextMenuFeature',
    'eventDragCreateFeature',
    'eventDragFeature',
    'eventEditFeature',
    'eventFilterFeature',
    'eventResizeFeature',
    'eventTooltipFeature',
    'filterBarFeature',
    'filterFeature',
    'groupFeature',
    'groupSummaryFeature',
    'headerContextMenuFeature',
    'labelsFeature',
    'nonWorkingTimeFeature',
    'panFeature',
    'quickFindFeature',
    'regionResizeFeature',
    'resourceTimeRangesFeature',
    'rowReorderFeature',
    'scheduleContextMenuFeature',
    'scheduleTooltipFeature',
    'searchFeature',
    'sortFeature',
    'stripeFeature',
    'summaryFeature',
    'timeRangesFeature',
    'treeFeature'
  ];
  /* #endregion */

  /* #region configs */
  private configs: string[] = [
    'assignments',
    'assignmentStore',
    'autoHeight',
    'barMargin',
    'columns',
    'crudManager',
    'dependencyStore',
    'displayDateFormat',
    'emptyText',
    'endDate',
    'eventBodyTemplate',
    'eventColor',
    'eventLayout',
    'eventRenderer',
    'events',
    'eventEdit',
    'eventStore',
    'eventStyle',
    'fillTicks',
    'height',
    'maxHeight',
    'maxWidth',
    'maxZoomLevel',
    'milestoneAlign',
    'minHeight',
    'minWidth',
    'minZoomLevel',
    'mode',
    'partner',
    'readOnly',
    'resourceColumns',
    'resourceMargin',
    'resources',
    'resourceStore',
    'resourceTimeRanges',
    'responsiveLevels',
    'rowHeight',
    'scrollLeft',
    'scrollTop',
    'selectedEvents',
    'snap',
    'startDate',
    'tickWidth',
    'tickSize',
    'timeRanges',
    'timeResolution',
    'viewportCenterDate',
    'viewPreset',
    'width',
    'zoomKeepsOriginalTimespan',
    'zoomLevel',
    'zoomOnMouseWheel',
    'zoomOnTimeAxisDoubleClick',

    // schedulerId maps to id of the underlying scheduler
    'schedulerId',

    // only for examples, delete if you don't need them
    'transitionDuration',
    'useInitialAnimation',
    'zoomLevels'
  ];
  /* #endregion */

  /* #region Configs */
  // schedulerId translates to id for the scheduler enging
  @Input() schedulerId: string;

  @Input() assignments: AssignmentModel[] | object[];
  @Input() assignmentStore: AssignmentStore | object;
  @Input() autoHeight: boolean = false;
  @Input() barMargin: number = 5;
  @Input() columns: object[];
  @Input() crudManager: object;
  @Input() dependencyStore: object;
  @Input() displayDateFormat: string;
  @Input() emptyText: string;
  @Input() endDate: any;
  @Input() eventBodyTemplate: any;
  @Input() eventColor: string;
  @Input() eventLayout: string;
  @Input() eventRenderer: any;
  @Input() events: object[];
  @Input() eventEdit: object | boolean;
  @Input() eventStore: object;
  @Input() eventStyle: string;
  @Input() fillTicks: boolean;
  @Input() height: number | string;
  @Input() maxHeight: number | string;
  @Input() maxWidth: number | string;
  @Input() maxZoomLevel: number;
  @Input() milestoneAlign: string;
  @Input() minHeight: number | string;
  @Input() minWidth: number | string;
  @Input() minZoomLevel: number;
  @Input() mode: string = 'horizontal';
  @Input() partner: any;
  @Input() readOnly: boolean = false;
  @Input() resourceColumns: any;
  @Input() resourceMargin: number;
  @Input() resources: object[];
  @Input() resourceStore: object;
  @Input() resourceTimeRanges: object;
  @Input() responsiveLevels: any;
  @Input() rowHeight: number = 50;
  @Input() scrollLeft: number;
  @Input() scrollTop: number;
  @Input() selectedEvents: EventModel[];
  @Input() snap: boolean;
  @Input() startDate: any;
  @Input() tickWidth: number;
  @Input() tickSize: number;
  @Input() timeRanges: object | boolean;
  @Input() timeResolution: object;
  @Input() viewportCenterDate: any;
  @Input() viewPreset: string = 'hourAndDay';
  @Input() width: number | string;
  @Input() zoomKeepsOriginalTimespan: boolean = false;
  @Input() zoomLevel: number;
  @Input() zoomOnMouseWheel: boolean;
  @Input() zoomOnTimeAxisDoubleClick: boolean;
  @Input() zoomLevels: object[];
  /* #endregion */

  /* #region Features, only used for initialization */
  @Input() cellEditFeature: boolean | object = true;
  @Input() cellTooltipFeature: boolean | object = true;
  @Input() columnDragToolbarFeature: boolean | object = true;
  @Input() columnLinesFeature: boolean | object = true;
  @Input() columnPickerFeature: boolean = true;
  @Input() columnReorderFeature: boolean = true;
  @Input() columnResizeFeature: boolean = true;
  @Input() contextMenuFeature: boolean | object;
  @Input() dependenciesFeature: boolean | object = false;
  @Input() dependencyEditFeature: boolean | object = false;
  @Input() eventContextMenuFeature: boolean | object = true;
  @Input() eventDragCreateFeature: boolean | object = true;
  @Input() eventDragFeature: boolean | object = true;
  @Input() eventEditFeature: boolean | object = true;
  @Input() eventFilterFeature: boolean | object = true;
  @Input() eventResizeFeature: boolean | object = true;
  @Input() eventTooltipFeature: boolean | object = true;
  @Input() filterBarFeature: boolean | object;
  @Input() filterFeature: boolean | object;
  @Input() groupFeature: boolean | object | string = true;
  @Input() groupSummaryFeature: boolean | object;
  @Input() headerContextMenuFeature: boolean | object;
  @Input() labelsFeature: boolean | object;
  @Input() nonWorkingTimeFeature: boolean;
  @Input() panFeature: boolean | object;
  @Input() quickFindFeature: boolean | object;
  @Input() regionResizeFeature: boolean;
  @Input() resourceTimeRangesFeature: boolean;
  @Input() rowReorderFeature: boolean;
  @Input() scheduleContextMenuFeature: boolean | object = true;
  @Input() scheduleTooltipFeature: boolean | object = true;
  @Input() searchFeature: boolean;
  @Input() sortFeature: boolean | object | string = true;
  @Input() stripeFeature: boolean;
  @Input() summaryFeature: boolean | object;
  @Input() timeRangesFeature: boolean | object[] = true;
  @Input() treeFeature: boolean;
  /* #endregion */

  // for examples only, delete
  @Input() transitionDuration: number;
  @Input() useInitialAnimation: string;
  @Output() selectedEvent: string = '';

  @Output() onSchedulerEvents = new EventEmitter<object>();

  constructor(element: ElementRef) {
    // Needed later, used as target when rendering Bryntum Scheduler
    this.elementRef = element;
  }

  ngOnInit() {
    const config = {
      // Render scheduler to components element
      appendTo: this.elementRef.nativeElement,

      // Listeners, will relay events
      listeners: {
        catchAll(event) {
          if (event.type === 'eventselectionchange') {
            this.selectedEvent = event.selected.length ? event.selected[0].name : '';
          }
          this.onSchedulerEvents.emit(event);
        },

        thisObj: this
      },

      features: {}
    };

    // relay properties with names matching this.featureRe to features
    this.features.forEach((featureName) => {
      if (featureName in this) {
        config.features[featureName.replace(this.featureRe, '')] = this[featureName];
      }
    });

    // Pass configs on to scheduler
    this.configs.forEach((configName) => {
      if (configName in this) {
        // application may want to pass id for the engine is schedulerId
        if ('schedulerId' === configName && this[configName]) {
          config['id'] = this[configName];
        } else {
          config[configName] = this[configName];
        }
      }
    });

    // The application may have passed string id of the partner so
    // we attempt to find the real instance of the scheduler with that id
    if (config['partner'] && 'string' === typeof config['partner']) {
      const bryntum = window['bryntum'],
        partner = bryntum && bryntum.get && bryntum.get(config['partner']);
      config['partner'] = partner || undefined;
    }

    const engine = (this.schedulerEngine = new Scheduler(config));

    // Relay events from eventStore and resourceStore, making them a bit easier to catch in your app.
    // The events are prefixed with 'events' and 'resources', turning and 'add' event into either 'eventsAdd' or
    // 'resourcesAdd'
    engine.eventStore.relayAll(engine, 'events');
    engine.resourceStore.relayAll(engine, 'resources');
  } // eo function ngOnInit

  ngOnChanges(changes: SimpleChanges) {
    const me = this;

    if (me.schedulerEngine) {
      // Iterate over all changes
      //@ts-ignore
      Object.entries(changes).forEach(([name, { currentValue }]) => {
        // Apply changes that match configs to grid
        if (me.configs.includes(name)) {
          me.schedulerEngine[name] = currentValue;
        }

        if (me.features.includes(name)) {
          me.schedulerEngine[name.replace(this.featureRe, '')] = currentValue;
        }
      });
    }
  } // eo function ngOnChanges

  removeEvent() {
    const scheduler = this.schedulerEngine;
    scheduler.eventStore.remove(scheduler.selectedEvents);
    this.selectedEvent = '';
  } // eo function removeEvent

  addEvent() {
    const scheduler = this.schedulerEngine;

    const event = new scheduler.eventStore.modelClass({
      resourceId: scheduler.resourceStore.first.id,
      startDate: scheduler.startDate,
      duration: 1,
      durationUnit: 'h',
      name: 'New task',
      eventType: 'Meeting'
    });

    // editEvent is dynamically assigned to Scheduler from the EditEvent feature, and is thus not part of typings
    //@ts-ignore
    scheduler.editEvent(event);
  } // eo function addEvent

  ngOnDestroy(): void {
    if (this.schedulerEngine) {
      this.schedulerEngine.destroy();
    }
  } // eo function ngOnDestroy
}

// eof
