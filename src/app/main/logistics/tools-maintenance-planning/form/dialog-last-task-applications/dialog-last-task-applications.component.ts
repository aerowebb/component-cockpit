import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { GetTaskApplicationHistoryInput } from '../../../../../shared/types/api-input-types/airworthiness-management/get-task-application-history-input.interface';
import { SaveTaskApplicationInput } from '../../../../../shared/types/api-input-types/airworthiness-management/save-task-application-input.interface';
import { BidoNotificationDTOId } from '../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { TaskApplicationDTO } from '../../../../../shared/types/api-types/task-application-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { MaintenancePlanRow } from '../../types/maintenance-plan-row.interface';
import { ToolsMaintenancePlanningFormService } from '../tools-maintenance-planning-form.service';

interface TaskApplicationHistoryRow {
  applicationDate: string;
  comment: string;
  notificationCode?: string;
  _obj: TaskApplicationDTO;
}

@Component({
  selector: 'aw-dialog-last-task-applications',
  templateUrl: './dialog-last-task-applications.component.html'
})
export class DialogLastTaskApplicationsComponent extends DialogComponent implements OnDestroy, OnInit {
  @Input()
  public selectedRow: MaintenancePlanRow;

  @Input()
  public topEquipmentCode: string;

  @Output()
  public onClose: EventEmitter<boolean>;

  public taskApplication: TaskApplicationDTO;
  public taskApplicationHistoryTable: TaskApplicationHistoryRow[];
  public taskApplicationHistoryTableLoading: boolean;
  public taskApplicationHistoryTableColList: TableColumn[];
  public taskApplicationHistoryTableSelected: TaskApplicationHistoryRow | undefined;

  private updated: boolean;

  public constructor(
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    public toolsMaintenancePlanningFormService: ToolsMaintenancePlanningFormService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogLastTaskApplicationsComponent');

    this.onClose = new EventEmitter<boolean>();

    this.init();
    this.initTaskApplicationHistoryTableColList();
  }

  public ngOnDestroy(): void {
    this.onClose.emit(this.updated);
  }

  public ngOnInit(): void {
    this.load();
  }

  public isFirstRowSelected(): boolean {
    return (
      !!this.taskApplicationHistoryTableSelected &&
      this.taskApplicationHistoryTable.indexOf(this.taskApplicationHistoryTableSelected) === 0
    );
  }

  public isTaskApplicationValid(): boolean {
    return (
      ObjectUtils.isDefined(this.taskApplication.applicationDate) &&
      !StringUtils.isNullOrEmpty(this.taskApplication.comment)
    );
  }

  public onRowSelect(): void {
    if (this.isReadOpenMode || this.isWriteOpenMode) {
      this.clearTaskApplication();
    }
    if (this.isWriteOpenMode) {
      super.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public onRowUnselect(): void {
    if (this.isReadOpenMode || this.isWriteOpenMode) {
      this.clearTaskApplication();
    }
    if (this.isWriteOpenMode) {
      super.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public toggleCreateOpenMode(): void {
    super.updateOpenMode(this.isCreateOpenMode ? ComponentOpenMode.Read : ComponentOpenMode.Create);
    this.toggleOpenMode();
  }

  public toggleWriteOpenMode(): void {
    super.updateOpenMode(this.isWriteOpenMode ? ComponentOpenMode.Read : ComponentOpenMode.Write);
    this.toggleOpenMode();
  }

  public saveTaskApplication(): void {
    if (this.checkApplicationDate(this.taskApplication.applicationDate as Date)) {
      this.taskApplication.applicationDateUpdated = this.taskApplication.applicationDate;
      this.taskApplication.maintenancePlanTaskApplication = this.taskApplicationHistoryTableSelected
        ? this.taskApplicationHistoryTableSelected._obj.maintenancePlanTaskApplication
        : undefined;

      const input: SaveTaskApplicationInput = {
        topEquipmentCode: this.topEquipmentCode,
        selectedRowId: this.selectedRow._id,
        taskApplication: this.taskApplication
      };
      if (this.taskApplicationHistoryTableSelected) {
        this.toolsMaintenancePlanningFormService.updateTask(input).subscribe((_) => {
          this.endTaskApplicationSave();
        });
      } else {
        this.toolsMaintenancePlanningFormService.applyTask(input).subscribe((_) => {
          this.endTaskApplicationSave();
        });
      }
    }
  }

  private clearTaskApplication(): void {
    this.taskApplication = {};
  }

  private checkApplicationDate(dateToCheck: Date): boolean {
    let isDateValid = true;

    const momentToCheck = moment(dateToCheck);

    // Check given date is not in the future
    if (momentToCheck.isAfter(moment())) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateInTheFuture'));
      isDateValid = false;
    }

    // Check given date is the most recent
    const isMostRecentDate = this.taskApplicationHistoryTable
      .map((row) => moment(new Date(row.applicationDate)))
      .every((date) => date.isBefore(momentToCheck));
    if (!isMostRecentDate) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnDateNotTheMostRecent'));
      isDateValid = false;
    }

    return isDateValid;
  }

  private createTaskApplicationHistoryRow(element: TaskApplicationDTO): TaskApplicationHistoryRow {
    const row: TaskApplicationHistoryRow = {
      applicationDate: this.dateService.dateToString(element.applicationDate),
      comment: StringUtils.orEmpty(element.comment),
      notificationCode: StringUtils.orEmpty(element.notificationCode),
      _obj: element
    };

    return row;
  }

  private endTaskApplicationSave(): void {
    this.init();
    this.load();

    super.updateOpenMode(ComponentOpenMode.Read);
    this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTaskApplication'));
    this.updated = true;
  }

  private init(): void {
    this.taskApplicationHistoryTable = [];
    this.taskApplicationHistoryTableLoading = false;
    this.taskApplicationHistoryTableSelected = undefined;
    this.updated = false;

    this.clearTaskApplication();
  }

  private initTaskApplicationHistoryTableColList(): void {
    this.taskApplicationHistoryTableColList = [
      { field: 'applicationDate', alignment: 'left', width: '20%' },
      { field: 'comment', alignment: 'left', width: '55%' },
      { field: 'notificationCode', alignment: 'left', width: '25%' }
    ];
  }

  private load(): void {
    this.taskApplicationHistoryTableLoading = true;

    const input: GetTaskApplicationHistoryInput = {
      topEquipmentCode: this.topEquipmentCode,
      selectedRowId: this.selectedRow._id
    };
    this.toolsMaintenancePlanningFormService.getTaskApplicationHistory(input).subscribe((result) => {
      this.taskApplicationHistoryTableLoading = false;

      this.taskApplicationHistoryTable = ListUtils.orEmpty(result)
        .map((element) => this.createTaskApplicationHistoryRow(element))
        .sort(this.sortTaskApplicationList);
    });
  }

  private sortTaskApplicationList(elt1: TaskApplicationHistoryRow, elt2: TaskApplicationHistoryRow): number {
    const moment1 = moment(new Date(elt1.applicationDate));
    const moment2 = moment(new Date(elt2.applicationDate));
    if (moment1.isBefore(moment2)) {
      return 1;
    } else if (moment1.isAfter(moment2)) {
      return -1;
    } else {
      return 0;
    }
  }

  private toggleOpenMode(): void {
    if (this.isCreateOpenMode || this.isWriteOpenMode) {
      this.clearTaskApplication();
    }
    if (this.taskApplicationHistoryTableSelected) {
      this.taskApplication = {
        applicationDate: new Date(this.taskApplicationHistoryTableSelected.applicationDate),
        comment: this.taskApplicationHistoryTableSelected.comment
      };
    }
  }

  public openEventUC(event: TaskApplicationHistoryRow) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode: ComponentOpenMode.Read
    };
    if (!!event) {
      const eventId: BidoNotificationDTOId = {
        notificationCode: event.notificationCode as string
      };
      data.objectId = this.serializationService.serialize(eventId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));

    this.closeDialog();
  }
}
