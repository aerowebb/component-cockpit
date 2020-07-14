import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireTaskDTO } from '../../../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskLinkPopupOutput } from '../../../../../shared/types/api-types/bire-task-link-popup-output.interface';
import { LinkedTaskDTO } from '../../../../../shared/types/api-types/linked-task-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-associated-tasks-popup',
  templateUrl: './dialog-associated-tasks-popup.component.html'
})
export class DialogAssociatedTasksPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public associatedTasks: LinkedTaskDTO;

  @Input()
  public linkTypes: LabelValue<string>[] | null;

  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAssociated: EventEmitter<BireTaskLinkPopupOutput>;

  @Input()
  public isDisplayLinkType: boolean | false;

  public taskGroups: LabelValue<string>[];
  public taskTypes: LabelValue<string>[];
  public selectedLinkType: string | undefined;
  public sequenceNumber: number;
  public displayValue: boolean;

  public taskTableData: DialogTableData<BireTaskDTO>;
  public showTaskTableDialog: boolean;
  public resultsTable: BireTaskDTO[];

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public showNewTask: boolean;
  @Input()
  public isNewForm: boolean;

  public constructor(
    private readonly taskFormService: TaskFormService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogAssociatedTasksPopupComponent');

    this.onAssociated = new EventEmitter<BireTaskLinkPopupOutput>();

    this.showTaskTableDialog = false;

    this.taskGroups = [];
    this.resultsTable = [];
    this.selectedLinkType = undefined;
    this.loadTaskGroups();
    this.loadTaskTypes();

    this.showNewTask = false;

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set(
      'taskApplicabilityCode',
      this.propertiesService.getValue(GenericPropertyConstants.TASK_APPLICABILITY_CODE_MAP)
    );
    this.keyMap.set('taskTypeCode', this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP));
    this.keyMap.set('taskStatus', this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP));
  }

  public ngOnInit(): void {
    if (!this.associatedTasks) {
      this.associatedTasks = {
        bireTaskDTO: {
          taskCode: undefined,
          taskVersion: undefined
        },
        linkType: undefined,
        sequenceNumber: undefined
      };
    }
  }

  public createNewTask(): void {
    this.showNewTask = true;
  }

  public onNewTaskHide(): void {
    this.showNewTask = false;
  }

  public cancel(): void {
    this.display = false;
  }

  public openTaskTableDialog(): void {
    this.showTaskTableDialog = true;
    this.initTaskTableData();
  }

  public associate(): void {
    if (!!this.linkTypes && !!this.associatedTasks && !!this.associatedTasks.bireTaskDTO) {
      const outputParam: BireTaskLinkPopupOutput = {
        task: this.associatedTasks.bireTaskDTO,
        taskTask: {
          taskCode: this.associatedTasks.bireTaskDTO.taskCode,
          taskVersion: this.associatedTasks.bireTaskDTO.taskVersion,
          sequenceNumber: this.associatedTasks.sequenceNumber,
          taskLinkCode: this.isDisplayLinkType ? this.associatedTasks.linkType : this.linkTypes[0].value,
          groupCode: this.associatedTasks.bireTaskDTO.groupCode
        }
      };

      this.onAssociated.emit(outputParam);
    } else {
      super.throwUnboundLocalError('associate', 'this.linkTypes');
    }
    this.display = false;
  }

  private initTaskTableData(): void {
    const taskTableCols: TableColumn[] = [
      { field: 'taskCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskVersion', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskDesignation', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskChapter', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskSection', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskSubject', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskTask', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskSubTask', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskStatus', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskApplicabilityDate', alignment: 'center', filterMode: TableColumnFilterMode.Input, isDate: true },
      { field: 'taskApplicabilityCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'repairCenterCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'groupCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskTypeCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'overhaul', alignment: 'center', filterMode: TableColumnFilterMode.Input }
    ];

    this.taskTableData = {
      componentId: 'DialogTask',
      tableCols: taskTableCols,
      tableRows: this.taskFormService.findBireTasksByCriteria(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private loadTaskGroups(): void {
    this.taskFormService.getTaskGroups().subscribe(
      (results) => {
        this.taskGroups = results.filter((taskGroup) => taskGroup.value != undefined) || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + 'errorOnGetTaskGroups');
      }
    );
  }

  private loadTaskTypes(): void {
    this.propertiesService.getValue('getTaskTypeMap').subscribe(
      (results) => {
        this.taskTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetTaskTypes');
      }
    );
  }

  public isValidAssociation(): boolean {
    if (!this.isDisplayLinkType) {
      if (
        !!this.associatedTasks &&
        !!this.associatedTasks.bireTaskDTO &&
        this.associatedTasks.bireTaskDTO.taskCode &&
        this.associatedTasks.bireTaskDTO.taskVersion
      ) {
        return true;
      }
    } else if (
      !!this.associatedTasks &&
      !!this.associatedTasks.bireTaskDTO &&
      this.associatedTasks.bireTaskDTO.taskCode &&
      this.associatedTasks.bireTaskDTO.taskVersion &&
      this.associatedTasks.linkType
    ) {
      return true;
    }

    return false;
  }

  /**************************************************************************
   * Task Dialog
   *************************************************************************/

  public onSelectedTask(task: BireTaskDTO): void {
    if (!!this.associatedTasks && !!this.associatedTasks.bireTaskDTO && task) {
      if (task.groupCode) {
        const taskGroup: LabelValue<string>[] = this.taskGroups.filter((group) => group.label === task.groupCode);
        if (taskGroup[0]) {
          task.groupCode = taskGroup[0].value;
        }
      }
      if (task.taskTypeCode) {
        const taskType: LabelValue<string>[] = this.taskTypes.filter((type) => type.label === task.taskTypeCode);
        if (taskType[0]) {
          task.taskTypeCode = taskType[0].value;
        }
      }
      this.associatedTasks.bireTaskDTO.taskCode = task.taskCode;
      this.associatedTasks.bireTaskDTO.taskVersion = task.taskVersion;
      this.associatedTasks.bireTaskDTO.taskDesignation = task.taskDesignation;
      this.associatedTasks.bireTaskDTO.groupCode = task.groupCode;
      this.associatedTasks.bireTaskDTO.taskTypeCode = task.taskTypeCode;
    } else {
      super.throwUnboundLocalError('onSelectedTask', 'this.associatedTasks');
    }
  }
}
