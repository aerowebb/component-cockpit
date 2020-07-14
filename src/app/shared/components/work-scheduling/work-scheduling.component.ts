import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import * as moment from 'moment';
import { TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../shared/services/date.service';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { LangConstants } from '../../constants/lang-constants';
import { BidmProjectService } from '../../services/bidm-project.service';
import { PropertiesService } from '../../services/properties.service';
import { ResourceModel, WorkSchedulingService } from '../../services/work-scheduling.service';
import { StaffPlanningViewBySiteQualificationAvailabilityTableOutput } from '../../types/api-output-types/bidt-employee/staff-planning-view-by-site-qualification-availability-table-output.interface';
import { BidmProjectDTO } from '../../types/api-types/bidm-project-dto.interface';
import { WsTreeNode } from '../../types/api-types/ws-tree-node-dto.interface';
import { GenericComponent } from '../../types/generic-component';
import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';
import { EventModel as GenericEventModel } from '../scheduler/event-model.interface';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { SchedulerService } from '../scheduler/scheduler.service';

enum CellColor {
  Grey = 'gray',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow',
  Blue = 'blue'
}

@Component({
  selector: 'aw-work-scheduling',
  templateUrl: './work-scheduling.component.html',
  styleUrls: ['./work-scheduling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkSchedulingComponent extends GenericComponent implements OnInit, AfterViewInit {
  public static readonly dayAndWeek: string = 'dayAndWeek';
  public static readonly hourAndDay: string = 'hourAndDay';
  public static readonly day: string = 'day';
  public static readonly dateFormat: string = 'DD/MM/YYYY';
  public static readonly displayDateFormat: string = 'DD/MM/YYYY';
  public static readonly TIME_RESOLUTION_MAX_ZOOM: number = 10;
  public static readonly TIME_RESOLUTION_MIN_ZOOM: number = 0;
  public readonly component: typeof WorkSchedulingComponent;
  private readonly dateDiff = 86400000; // 1000 * 3600 * 24;
  private readonly noOfDays = 7;

  // Bryntum variables
  // Scheduler
  @ViewChild(SchedulerComponent)
  public scheduler: SchedulerComponent;
  public barMargin: number = 10;
  public schedulerConfig: object;
  public resourcesProjectNumber:  ResourceModel[];
  public nbResultsFiltered: number;
  private resourcesProjectNumberCounter: number = 0;
  private eventCounter: number = 0;
  public events: GenericEventModel[];
  public schedulerZoomLevel: number;
  private readonly schedulerTimeResolutionChanged: Subject<number>;

  public timeRanges: boolean = true;
  public qualificationList: LabelValue<StaffPlanningViewBySiteQualificationAvailabilityTableOutput>[];

  public selectedQualification: StaffPlanningViewBySiteQualificationAvailabilityTableOutput;

  @Output()
  public onRowClick: EventEmitter<BidmProjectDTO>;

  @Input()
  public firstColumnName: string | undefined;

  @Input()
  public workPackageStatusList: LabelValue<string>[];

  @Input()
  public isTableLoading: boolean | false;

  @Input()
  public set tableData(value: WsTreeNode[]) {
    if (!!value) {
      this.treeTable = value;
      this.treeTableTemp = _cloneDeep(this.treeTable);
      this.buildSchedulerProjectNumberList();
      this.buildSchedulerEventsList();
    }
  }

  public get tableData(): WsTreeNode[] {
    return this.treeTable;
  }
  public treeTable: WsTreeNode[];

  private treeTableTemp: WsTreeNode[];

  private mroCenterList: LabelValue<string>[];
  private typeList: LabelValue<string>[];

  private userList: LabelValue<string>[];
  public searchGlobalFilter: string;
  public searchGlobalFilterChanged: Subject<string>;

  public constructor(
    private readonly dateService: DateService,
    private readonly workSchedulingService: WorkSchedulingService,
    private readonly propertiesService: PropertiesService,
    private readonly bidmProjectService: BidmProjectService,
    private readonly schedulerService: SchedulerService,
    private readonly translateService: TranslateService,
  ) {
    super(ComponentOpenMode.Write);

    // For bryntum scheduler
    this.component = WorkSchedulingComponent;
    this.schedulerZoomLevel = WorkSchedulingComponent.TIME_RESOLUTION_MAX_ZOOM;
    this.schedulerTimeResolutionChanged = new Subject<number>();

    this.init();
    this.loadMroCenterList();
    this.loadTypeList();
    this.loadUserList();
    this.workSchedulingService.setRefreshButton(this.refresh.bind(this));
  }

  private refresh(): void {
    this.treeTable = [];
  }

  private init(): void {
    this.mroCenterList = [];
    this.typeList = [];
    this.userList = [];
    this.treeTable = [];
    this.treeTableTemp = [];
    this.onRowClick = new EventEmitter<BidmProjectDTO>();
  }

  public getComponentName(): string {
    return 'WorkSchedulingComponent';
  }

  public ngOnInit(): void {
    if (!this.firstColumnName) {
      super.throwUnboundLocalError('ngOnInit', 'firstColumnName');
    }
    this.setGlobalFilter();

    // Bryntum scheduler init
    this.setSchedulerConfig();
  }

  public showToday(): void {
    this.scheduler.schedulerEngine.zoomTo({
      centerDate: new Date(),
      preset: this.scheduler.schedulerEngine.viewPreset
    });
  }

  private registerSchedulerTimeResolutionObservable(): void {
    this.schedulerTimeResolutionChanged
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe({
        next: (value) => {
          this.scheduler.schedulerEngine.zoomTo(value);
        }
      });
  }

  public onChangeTimeResolution(event: { value: number }): void {
    this.schedulerTimeResolutionChanged.next(event.value);
  }

  private generateSchedulerColumnsProjectNumberId(): number {
    return this.resourcesProjectNumberCounter++;
  }

  private setSchedulerConfig(): void {
    this.schedulerConfig = {
      eventColor: 'transparent',

      readOnly: true,
      timeRanges: true,
      timeRangesFeature: {
        showCurrentTimeLine: true
      },
      zoomKeepsOriginalTimespan: true,
      zoomOnMouseWheel: false,
      zoomOnTimeAxisDoubleClick: false,
    };

    this.registerSchedulerTimeResolutionObservable();
    this.setSchedulerDate();
    this.setSchedulerWOColumn();
    this.setSchedulerViewPreset();
    this.setTooltipFeature();
    this.setContextMenuFeature();
  }

  private setContextMenuFeature(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      contextMenu: {
        items: {
          addEvent: false
        },
        processHeaderItems: () => false
      }
    };
  }

  private setTooltipFeature(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      eventTooltip : {
        template: (data) => {
          const foundData = this.treeTable
            .find((value) => value.data.projectId === data.eventRecord.data.resourceId);
          let returnValue = '';
          if (!!foundData) {
            returnValue = this.showTooltip(foundData.data);
          }

          return returnValue;
        },
        anchorToTarget : false
      }
    };
  }

  private buildSchedulerEventsList(): void {
    this.events = this.treeTable.map( (obj) => {
        const farEndDate = 2999;
        const farEndMonth = 1;

        return {id: this.generateSchedulerEventId(),
                resourceId: obj.data.projectId,
                startDate: obj.data.projectStartDate,
                endDate: obj.data.projectDueDate != undefined ? obj.data.projectDueDate
                                                              : new Date(farEndDate, farEndMonth),
                eventType: '',
                cls: obj.data.projectDueDate != undefined ? this.getCellColor(obj.data) : this.getCellColor(obj.data)
                                                                                        + ' undefinedDueDate',
                draggable: false,
                resizable: false
        };
      });
  }

  private buildSchedulerProjectNumberList(): void {
    this.resourcesProjectNumber = this.treeTable.map((obj) => (
       { id: obj.data.projectId,
         generatedId : this.generateSchedulerColumnsProjectNumberId(),
         projectNumber: '' +  ( obj.data.projectNumber as string )
                           +  ' (' + this.dateService.dateToString(obj.data.projectStartDate as Date) + ')',
         children: []
       }
    ));
 }

  private setSchedulerViewPreset(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      viewPreset: {
        name: WorkSchedulingComponent.dayAndWeek,
        displayDateFormat: WorkSchedulingComponent.displayDateFormat,
        timeResolution: {
          unit: WorkSchedulingComponent.day,
          increment: 1
        },
        headerConfig: {
          middle: {
            unit: WorkSchedulingComponent.day,
            dateFormat: WorkSchedulingComponent.dateFormat
          }
        }
      }
    };
  }

  private setSchedulerWOColumn(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      columns: [
        {
          text: this.translateService.instant(this.getTranslateKey('projectNumber')),
          field: 'projectNumber',
          width: 140,
          htmlEncode: false,
          sortable : true,
          editor: false,
          enableCellContextMenu: false,
          renderer: ({ record }: { record: { data: ResourceModel } }) => `
            <div class="info">
                    <a id="${record.data.generatedId}" class="project-number-select">${record.data.projectNumber}</a>
            </div>
          `
        }
      ]
    };
  }

  private setSchedulerDate(): void {
    this.schedulerConfig = {
      ...this.schedulerConfig,
      startDate: !! this.events ? this.schedulerService.getFirstEventStartDate(this.events)
                                         : moment().startOf('year').toDate(),
      endDate: !! this.events ? this.schedulerService.getLastEventEndDate(this.events)
                                        : moment().endOf('year').toDate()
    };
  }

  public onSchedulerEvents($event: object) : void {
    const action = 'action';
    const records = 'records';
    const type = 'type';
    const target = 'target';

    // Update number of results
    if (!!$event && !!$event[action] && $event[action] === 'filter' && !!$event[records]) {
      this.nbResultsFiltered = $event[records].length;
    }
    if ($event[type] === 'cellclick' && $event[target].matches('.project-number-select')) {
      const projectResource: ResourceModel | undefined = this.resourcesProjectNumber.find((resource) => {
        return resource.generatedId.toString() === $event[target].id;
      });
      if (!!projectResource) {
        const projectFromTreeTable : WsTreeNode | undefined = this.treeTable.find((resource) => {
          return resource.data.projectId === projectResource.id;
        });
        if (!!projectFromTreeTable) {
          this.openDetailsPage(projectFromTreeTable.data);
        }
      }
    }
  }

  private generateSchedulerEventId() {
    return this.eventCounter++;
  }

  public getCellColor(rowData: BidmProjectDTO): string {
    let returnColor = '';
    if (!!rowData.projectStartDate) {
      if (rowData.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SIMULATED
                                  || rowData.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_SCHEDULED) {
        returnColor = CellColor.Grey;
      } else if (rowData.statusState === AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE) {
        returnColor = CellColor.Green;
      } else if (!!rowData.projectDueDate && rowData.statusState !== AWPropertiesConstants.AIRM_PROJECT_STATUS_CLOSE) {
        if (new Date(rowData.projectDueDate.toDateString()).valueOf() < new Date().valueOf()) {
          returnColor = CellColor.Red;
        }
        const dateDiffernce = this.getDateDiffInDays(new Date(), rowData.projectDueDate);
        if (dateDiffernce > 0 && dateDiffernce < this.noOfDays) {
          returnColor = CellColor.Yellow;
        } else {
          returnColor = CellColor.Blue;
        }
      } else if (!rowData.projectDueDate) {
        returnColor = CellColor.Red;
      } else {
        returnColor = CellColor.Blue;
      }
    }

    return returnColor;
  }

  public showTooltip(rowData: BidmProjectDTO): string {
    return this.bidmProjectService.getRepresentationAsHtml(
      rowData,
      this.mroCenterList,
      this.workPackageStatusList,
      this.typeList,
      this.userList
    );
  }

  public openDetailsPage(rowData) {
    if (!!rowData) {
      this.onRowClick.emit(rowData);
    }
  }

  private setGlobalFilter(): void {
    this.searchGlobalFilterChanged = new Subject<string>();
    this.searchGlobalFilterChanged
      .pipe(
        // tslint:disable-next-line: no-magic-numbers
        debounceTime(500),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.filterWorkSchedulingStructure(searchTextValue);
      });
  }

  private filterWorkSchedulingStructure(searchTextValue?: string): void {
    this.treeTable = _cloneDeep(this.treeTableTemp);
    this.treeTable = this.treeTable.filter((elt) =>
      this.matchTreeStructureNode(elt, !!searchTextValue ? searchTextValue.toLowerCase() : undefined)
    );
  }

  private matchTreeStructureNode(node: WsTreeNode, searchText: string | undefined): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.matchTreeStructureNode(child, searchText));
    }

    const nodeData = node.data as BidmProjectDTO;

    // Work Package
    const workPackage = StringUtils.orEmpty((nodeData.projectNumber as number).toString()).toLowerCase();
    const workPackageMatch = StringUtils.isNullOrEmpty(searchText) || workPackage.includes(searchText as string);

    // Start Date
    const startDate = StringUtils.orEmpty(this.dateService.dateToString(nodeData.projectStartDate));
    const startDateMatch = StringUtils.isNullOrEmpty(searchText) || startDate.includes(searchText as string);

    return ListUtils.orEmpty(node.children).length > 0 || (workPackageMatch || startDateMatch);
  }

  private getDateDiffInDays(date1: Date, date2: Date): number {
    const timeDiff = date2.getTime() - date1.getTime();

    return timeDiff / this.dateDiff;
  }

  private loadMroCenterList(): void {
    this.workSchedulingService.findAllBireSite().subscribe((results) => {
      this.mroCenterList = ListUtils.orEmpty(results);
    });
  }

  private loadTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP).subscribe((results) => {
      this.typeList = ListUtils.orEmpty(results);
    });
  }

  private loadUserList(): void {
    this.workSchedulingService
      .findBidoUsersWithUseCase(BidoFunctionTypeConstants.UC_AIRM_RECEPTION)
      .subscribe((results) => {
        this.userList = ListUtils.orEmpty(results)
          .filter((elt) => !StringUtils.isNullOrEmpty(elt.userId))
          .map((result) => {
            const userName = `${StringUtils.orEmpty(result.firstname)} ${StringUtils.orEmpty(result.lastname)}`;

            return {
              label: userName.trim(),
              value: result.userId as string
            };
          });
      });
  }

  public ngAfterViewInit(): void {
    if (this.translateService.currentLang === LangConstants.FRENCH_CODE) {
      this.scheduler.schedulerEngine.localeManager.locale = 'Fr';
    } else {
      this.scheduler.schedulerEngine.localeManager.locale = 'En';
    }
    this.showToday();
  }
}
