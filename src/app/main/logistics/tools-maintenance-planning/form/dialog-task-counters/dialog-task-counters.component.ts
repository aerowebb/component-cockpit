import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { BireUnitMeasureConstants } from '../../../../../shared/constants/bire-unit-measure-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { GetAllCounterFromMaintenancePlanInput } from '../../../../../shared/types/api-input-types/airworthiness-management/get-all-counter-from-maintenance-plan-input.interface';
import { SaveTaskCounterInput } from '../../../../../shared/types/api-input-types/airworthiness-management/save-task-counter-input.interface';
import { TaskCounterDTO } from '../../../../../shared/types/api-types/task-counter-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { MaintenancePlanRow } from '../../types/maintenance-plan-row.interface';
import { ToolsMaintenancePlanningFormService } from '../tools-maintenance-planning-form.service';

interface TaskCountersRow {
  nextTerm: string;
  periodicity: string;
  periodicityType: string;
  reference: string;
  unit: string;
  _obj: TaskCounterDTO;
}

@Component({
  selector: 'aw-dialog-task-counters',
  templateUrl: './dialog-task-counters.component.html'
})
export class DialogTaskCountersComponent extends DialogComponent implements OnDestroy, OnInit {
  @Input()
  public selectedRow: MaintenancePlanRow;

  @Input()
  public topEquipmentCode: string;

  @Output()
  public onClose: EventEmitter<boolean>;

  public taskCounter: TaskCounterDTO;
  public taskCountersTable: TaskCountersRow[];
  public taskCountersTableLoading: boolean;
  public taskCountersTableColList: TableColumn[];
  public taskCountersTableSelected: TaskCountersRow | undefined;

  private updated: boolean;

  public constructor(
    public toolsMaintenancePlanningFormService: ToolsMaintenancePlanningFormService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogTaskCountersComponent');

    this.init();
    this.initTaskCountersTableColList();
  }

  public ngOnDestroy(): void {
    this.onClose.emit(this.updated);
  }

  public ngOnInit(): void {
    this.load();
  }

  public isCalendarUnit(element: TaskCounterDTO): boolean {
    return (
      element.unit === BireUnitMeasureConstants.DAY ||
      element.unit === BireUnitMeasureConstants.WEEK ||
      element.unit === BireUnitMeasureConstants.MONTH ||
      element.unit === BireUnitMeasureConstants.YEAR
    );
  }

  public isTaskCounterValid(): boolean {
    return (
      (ObjectUtils.isDefined(this.taskCounter.nextTermDate) ||
        ObjectUtils.isDefined(this.taskCounter.nextTermDouble)) &&
      ObjectUtils.isDefined(this.taskCounter.periodicity)
    );
  }

  public onRowSelect(): void {
    this.clearTaskCounter();
    super.updateOpenMode(ComponentOpenMode.Read);
  }

  public onRowUnselect(): void {
    this.clearTaskCounter();
    super.updateOpenMode(ComponentOpenMode.Read);
  }

  public toggleWriteOpenMode(): void {
    super.updateOpenMode(this.isWriteOpenMode ? ComponentOpenMode.Read : ComponentOpenMode.Write);
    this.toggleOpenMode();
  }

  public saveTaskCounter(): void {
    const selectedTaskCounter = this.taskCountersTableSelected as TaskCountersRow;
    selectedTaskCounter._obj.nextTermDate = this.taskCounter.nextTermDate;
    selectedTaskCounter._obj.nextTermDouble = this.taskCounter.nextTermDouble;
    selectedTaskCounter._obj.periodicity = this.taskCounter.periodicity;

    selectedTaskCounter.nextTerm = this.formatNextTerm(selectedTaskCounter._obj);
    selectedTaskCounter.periodicity = this.formatPeriodicity(selectedTaskCounter._obj);

    const input: SaveTaskCounterInput = {
      topEquipmentCode: this.topEquipmentCode,
      selectedRowId: this.selectedRow._id,
      taskCounter: this.taskCounter,
      isNew: false
    };
    this.toolsMaintenancePlanningFormService.saveTaskCounter(input).subscribe((_) => {
      this.taskCountersTableSelected = undefined;

      this.clearTaskCounter();

      this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTaskCounter'));

      this.updated = true;
    });
  }

  private clearTaskCounter(): void {
    this.taskCounter = {};
  }

  private createTaskCountersRow(element: TaskCounterDTO): TaskCountersRow {
    const row: TaskCountersRow = {
      nextTerm: this.formatNextTerm(element),
      periodicity: this.formatPeriodicity(element),
      periodicityType: StringUtils.orEmpty(element.periodicityType),
      reference: StringUtils.orEmpty(element.referenceText),
      unit: StringUtils.orEmpty(element.unit),
      _obj: element
    };

    return row;
  }

  private formatNextTerm(element: TaskCounterDTO): string {
    let nextTerm = '';
    if (!!element.unit) {
      if (this.isCalendarUnit(element)) {
        nextTerm = this.dateService.dateToString(element.nextTermDate);
      } else if (ObjectUtils.isDefined(element.nextTermDouble)) {
        nextTerm = StringUtils.orEmpty((element.nextTermDouble as number).toString());
      }
    }

    return nextTerm;
  }

  private formatPeriodicity(element: TaskCounterDTO): string {
    return ObjectUtils.isDefined(element.periodicity) ? (element.periodicity as number).toString() : '';
  }

  private init(): void {
    this.taskCountersTable = [];
    this.taskCountersTableLoading = false;
    this.taskCountersTableSelected = undefined;
    this.updated = false;

    this.onClose = new EventEmitter<boolean>();

    this.clearTaskCounter();
  }

  private initTaskCountersTableColList(): void {
    this.taskCountersTableColList = [
      { field: 'reference', alignment: 'left', width: '40%' },
      { field: 'nextTerm', alignment: 'left', width: '15%' },
      { field: 'periodicity', alignment: 'left', width: '15%' },
      { field: 'unit', alignment: 'left', width: '10%' },
      { field: 'periodicityType', alignment: 'left', width: '20%' }
    ];
  }

  private load(): void {
    this.taskCountersTableLoading = true;

    const input: GetAllCounterFromMaintenancePlanInput = {
      topEquipmentCode: this.topEquipmentCode,
      selectedRowId: this.selectedRow._id
    };
    this.toolsMaintenancePlanningFormService.getAllCounterFromMaintenancePlan(input).subscribe((result) => {
      this.taskCountersTableLoading = false;

      this.taskCountersTable = ListUtils.orEmpty(result).map((element) => this.createTaskCountersRow(element));
    });
  }

  private toggleOpenMode(): void {
    if (this.isWriteOpenMode) {
      this.clearTaskCounter();
    }
    if (this.taskCountersTableSelected) {
      const periodicity = ObjectUtils.isDefined(this.taskCountersTableSelected.periodicity)
        ? Number(this.taskCountersTableSelected.periodicity)
        : undefined;

      this.taskCounter = {
        periodicity,
        nextTermDate: this.taskCountersTableSelected._obj.nextTermDate,
        nextTermDouble: this.taskCountersTableSelected._obj.nextTermDouble,
        periodicityType: this.taskCountersTableSelected.periodicityType,
        reference: this.taskCountersTableSelected._obj.reference,
        referenceText: this.taskCountersTableSelected.reference,
        unit: this.taskCountersTableSelected.unit
      };
    }
  }
}
