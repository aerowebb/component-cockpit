import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BireMeasureReferenceConstants } from '../../../../shared/constants/bire-measure-reference-constants';
import { BireUnitMeasureConstants } from '../../../../shared/constants/bire-unit-measure-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SessionService } from '../../../../shared/services/session.service';
import { BaseMpRowInput } from '../../../../shared/types/api-input-types/maintenance-plan/base-mp-row-input.interface';
import { DeleteCounterMpInput } from '../../../../shared/types/api-input-types/maintenance-plan/delete-counter-mp-input.interface';
import { SaveBaseMpCounterInput } from '../../../../shared/types/api-input-types/maintenance-plan/save-base-mp-counter-input.interface';
import { TaskCounterDTO } from '../../../../shared/types/api-types/task-counter-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AssetMaintenancePlanService } from '../asset-maintenance-plan.service';

interface TaskCountersRow {
  nextTerm: string;
  periodicity: string;
  periodicityType: string;
  reference: string;
  unit: string;
  _obj: TaskCounterDTO;
  hasCounterCode: boolean;
}

@Component({
  selector: 'aw-asset-dialog-task-counters',
  styleUrls: ['../asset-maintenance-plan.component.scss'],
  templateUrl: './asset-dialog-task-counters.component.html'
})
export class AssetDialogTaskCountersComponent extends DialogComponent implements OnInit {
  @Input()
  public selectedRow: BaseMpRowInput;
  @Output()
  public onClose: EventEmitter<boolean>;

  public referencesList: LabelValue<string>[];
  public taskCounter: TaskCounterDTO;
  public taskCountersTable: TaskCountersRow[];
  public taskCountersTableLoading: boolean;
  public taskCountersTableColList: TableColumn[];
  public taskCountersTableSelectedList: TaskCountersRow[];
  public showPanel: boolean;
  public isCounterDisable: boolean;
  public isDeleteEnabled: boolean;

  public constructor(
    public assetMaintenancePlanService: AssetMaintenancePlanService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly messageService: MessageService,
    public inputValidationService: InputValidationService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, 'AssetDialogTaskCountersComponent');

    this.onClose = new EventEmitter<boolean>();
    this.init();
    this.clearTaskCounter();
    this.initTaskCountersTableColList();
  }

  public ngOnInit(): void {
    this.loadReferencesDropDown();
    this.load();
  }

  public loadReferencesDropDown() {
    this.assetMaintenancePlanService.findReferencesForPeriodicity().subscribe((results) => {
      this.referencesList = results;
    });
  }

  public isCalendarUnit(element: TaskCounterDTO): boolean {
    return (
      element.unit === BireUnitMeasureConstants.DAY ||
      element.unit === BireUnitMeasureConstants.WEEK ||
      element.unit === BireUnitMeasureConstants.MONTH ||
      element.unit === BireUnitMeasureConstants.YEAR
    );
  }

  public onRowSelect(): void {
    this.clearTaskCounter();
    super.updateOpenMode(ComponentOpenMode.Read);

    this.isDeleteEnabled = this.taskCountersTableSelectedList.every((selectedObj) => {
      if (!selectedObj.hasCounterCode) {
        return true;
      }

      return false;
    });
  }

  public toggleWriteOpenMode(): void {
    super.updateOpenMode(this.isWriteOpenMode ? ComponentOpenMode.Read : ComponentOpenMode.Write);
    this.toggleOpenMode();
  }

  public saveTaskCounter(): void {
    const element: TaskCounterDTO = { ...this.taskCounter };
    this.clearTaskCounter();
    if (this.taskCountersTableSelectedList.length === 1) {
      const input: SaveBaseMpCounterInput = {
        equipmentCode: this.selectedRow.equipmentCode,
        taskCode: this.selectedRow.taskCode,
        taskVersion: this.selectedRow.taskVersion,
        taskCounter: element,
        isNew: false
      };

      this.assetMaintenancePlanService.saveTaskCounterBaseMp(input).subscribe((_) => {
        this.init();
        this.load();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTaskCounter'));
      });
    } else {
      const checkDuplicateRef = this.taskCountersTable.filter((obj) => {
        return obj._obj.reference === element.reference;
      })[0];

      if (checkDuplicateRef) {
        this.messageService.showErrorMessage(this.getTranslateKey('duplicateCounter'));

        return;
      }
      if (element.reference) {
        const referenceObj = this.referencesList.filter((obj) => {
          return obj.value === element.reference;
        })[0];
        element.referenceText = referenceObj.label;

        const input: SaveBaseMpCounterInput = {
          equipmentCode: this.selectedRow.equipmentCode,
          taskCode: this.selectedRow.taskCode,
          taskVersion: this.selectedRow.taskVersion,
          taskCounter: element,
          isNew: true
        };

        this.assetMaintenancePlanService.saveTaskCounterBaseMp(input).subscribe((_) => {
          this.init();
          this.load();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveTaskCounter'));
        });
      }
    }
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
      _obj: element,
      hasCounterCode: element.hasCounterCode || false
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
    this.taskCountersTableSelectedList = [];
    this.showPanel = false;
    this.isCounterDisable = false;
    this.isDeleteEnabled = false;
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
    this.taskCountersTable = [];
    const input: BaseMpRowInput = this.selectedRow;
    this.assetMaintenancePlanService.getAllCountersBaseMp(input).subscribe((result) => {
      this.taskCountersTableLoading = false;

      this.taskCountersTable = ListUtils.orEmpty(result).map((element) => this.createTaskCountersRow(element));
    });
  }

  private toggleOpenMode(): void {
    this.showPanel = true;
    if (this.isWriteOpenMode) {
      this.clearTaskCounter();
      if (this.taskCountersTableSelectedList.length === 1) {
        const periodicity = ObjectUtils.isDefined(this.taskCountersTableSelectedList[0].periodicity)
          ? Number(this.taskCountersTableSelectedList[0].periodicity)
          : undefined;

        this.taskCounter = {
          periodicity,
          nextTermDate: this.taskCountersTableSelectedList[0]._obj.nextTermDate,
          nextTermDouble: this.taskCountersTableSelectedList[0]._obj.nextTermDouble,
          periodicityType: this.taskCountersTableSelectedList[0].periodicityType,
          reference: this.taskCountersTableSelectedList[0]._obj.reference,
          referenceText: this.taskCountersTableSelectedList[0].reference,
          unit: this.taskCountersTableSelectedList[0].unit
        };
      }
    }
  }

  public deleteCounter(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        const objList: DeleteCounterMpInput[] = [];
        this.taskCountersTableSelectedList.forEach((selectedObj) => {
          // Delete only if periodicity is null
          if (!selectedObj.hasCounterCode) {
            const referenceObj = this.referencesList.filter((obj) => {
              return obj.label === selectedObj.reference;
            })[0];

            const input: DeleteCounterMpInput = {
              counterCode: referenceObj && referenceObj.value,
              equipmentCode: this.selectedRow.equipmentCode,
              taskCode: this.selectedRow.taskCode,
              taskVersion: this.selectedRow.taskVersion
            };
            objList.push(input);
          }
        });
        if (objList.length > 0) {
          this.taskCountersTableLoading = true;
          this.taskCountersTable = [];
          this.taskCountersTableSelectedList = [];
          this.assetMaintenancePlanService.deleteTaskCounterBaseMp(objList).subscribe((result) => {
            this.taskCountersTableLoading = false;
            this.clearTaskCounter();
            this.load();
          });
        }
      }
    });
  }

  public setControlsVisibility() {
    this.isCounterDisable =
      BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_POST_FLIGHT === this.taskCounter.reference ||
      BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_PRE_FLIGHT === this.taskCounter.reference ||
      BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_DAILY === this.taskCounter.reference;
  }

  public closeDialog(): void {
    super.closeDialog();
    this.onClose.emit(true);
  }
}
