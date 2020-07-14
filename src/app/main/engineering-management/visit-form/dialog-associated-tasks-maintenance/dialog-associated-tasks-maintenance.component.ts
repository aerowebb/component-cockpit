import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { TaskDecompositionTableAttributeDTO } from '../../../../shared/types/api-types/task-decomposition-table-attribute-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { VisitFormService } from '../visit-form.service';

@Component({
  selector: 'aw-dialog-associated-tasks-maintenance',
  templateUrl: './dialog-associated-tasks-maintenance.component.html',
  styleUrls: ['./dialog-associated-tasks-maintenance.component.scss']
})
export class DialogAssociatedTasksMaintenanceComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public decomposition: TaskDecompositionTableAttributeDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Input()
  public newDecomposition: boolean;

  @Output()
  public onCreate: EventEmitter<TaskDecompositionTableAttributeDTO>;
  @Output()
  public onUpdate: EventEmitter<TaskDecompositionTableAttributeDTO>;

  public readonly componentId: string;

  public taskGroups: LabelValue<string>[];
  public taskTypes: LabelValue<string>[];
  public periodicityTypes: LabelValue<string>[];
  public displayValue: boolean;

  public taskTableData: DialogTableData<BireTaskDTO>;
  public showTaskTableDialog: boolean;
  public resultsTable: BireTaskDTO[];

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    private readonly visitFormService: VisitFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogAssociatedTasksMaintenanceComponent');

    this.onCreate = new EventEmitter<TaskDecompositionTableAttributeDTO>();
    this.onUpdate = new EventEmitter<TaskDecompositionTableAttributeDTO>();

    this.showTaskTableDialog = false;
    this.initTaskTableData();
    this.taskGroups = [];
    this.resultsTable = [];
    this.loadTaskGroups();
    this.loadTaskTypes();
    this.loadPeriodicityTypes();

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set(
      'taskApplicabilityCode',
      this.propertiesService.getValue(GenericPropertyConstants.TASK_APPLICABILITY_CODE_MAP)
    );
    this.keyMap.set('taskTypeCode', this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP));
    this.keyMap.set('taskStatus', this.propertiesService.getValue('getFuncObjectStatusMap'));
  }

  public ngOnInit(): void {
    if (!this.decomposition) {
      this.decomposition = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public openTaskTableDialog(): void {
    this.showTaskTableDialog = true;
  }

  public associate(): void {
    if (this.decomposition !== null) {
      if (
        StringUtils.isNullOrEmpty(this.decomposition.taskCode) ||
        StringUtils.isNullOrEmpty(this.decomposition.taskVersion)
      ) {
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        if (this.newDecomposition) {
          this.onCreate.emit(this.decomposition);
          this.display = false;
        } else {
          this.onUpdate.emit(this.decomposition);
          this.display = false;
        }
      }
    }
  }

  public initTaskTableData(): void {
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
      { field: 'taskApplicabilityDate', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskApplicabilityCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'repairCenterCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'groupCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'taskTypeCode', alignment: 'center', filterMode: TableColumnFilterMode.Input },
      { field: 'overhaul', alignment: 'center', filterMode: TableColumnFilterMode.Input }
    ];

    const criteria = {
      bireTaskDTO: {
        taskCode: '',
        taskVersion: ''
      },
      familyCode: '',
      structureType: '',
      variantCode: '',
      taskTypeCodeExcluded: ''
    };

    this.taskTableData = {
      componentId: 'DialogTask',
      tableCols: taskTableCols,
      tableRows: this.visitFormService.findBireTasksByCriteria(criteria),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  private loadTaskGroups(): void {
    this.visitFormService.getTaskGroups().subscribe(
      (results) => {
        this.taskGroups = results.filter((taskGroup) => taskGroup.value != undefined) || [];
      },
      () => {
        this.messageService.showErrorMessage(this.componentId + 'errorOnGetTaskGroups');
      }
    );
  }

  private loadTaskTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe(
      (results) => {
        this.taskTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.componentId + '.errorOnGetTaskTypes');
      }
    );
  }

  private loadPeriodicityTypes(): void {
    this.propertiesService.getValue('getPeriodicityTypeMap').subscribe(
      (results) => {
        this.periodicityTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.componentId + '.errorOnGetPeriodicityTypes');
      }
    );
  }

  /**************************************************************************
   * Task Dialog
   *************************************************************************/

  public onSelectedTask(task: BireTaskDTO): void {
    if (this.decomposition !== null) {
      if (!!task) {
        this.decomposition.taskCode = task.taskCode;
        this.decomposition.taskVersion = task.taskVersion;
        this.decomposition.taskDesignation = task.taskDesignation;
        this.decomposition.taskGroup = task.groupCode;
        this.decomposition.taskType = task.taskTypeCode;
      }
    }
  }
}
