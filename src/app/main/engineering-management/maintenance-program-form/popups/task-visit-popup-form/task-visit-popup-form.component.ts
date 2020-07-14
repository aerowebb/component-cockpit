import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BireMeasureReferenceConstants } from '../../../../../shared/constants/bire-measure-reference-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { PlanTaskCounterTableDTO } from '../../../../../shared/types/api-output-types/task-management/plan-task-counter-table-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireTaskDTO } from '../../../../../shared/types/api-types/bire-task-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { SettingsUtils } from '../../../../../shared/utils/settings-utils';
import { MaintenanceProgramFormService } from '../../maintenance-program-form.service';

@Component({
  selector: 'aw-task-visit-popup-form',
  templateUrl: './task-visit-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class TaskVisitPopupFormComponent extends DialogComponent implements OnInit {
  public static readonly PERCENTAGE_CONST = 100;
  public static readonly ONE_DECIMAL_ROUND = 10;

  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;
  @Input()
  public isCreateMode: boolean;
  @Input()
  public popUpType: string;
  @Output()
  public displayChange: EventEmitter<boolean>;
  @Output()
  public onAssociated: EventEmitter<PlanTaskCounterTableDTO[]>;
  @Input('component-data')
  public componentData: PopupEntry<PlanTaskCounterTableDTO>;

  public saveThreshold: number | undefined;
  public fhThreshold: number | undefined;
  public isUnitFh: boolean;
  public displayValue: boolean;
  public isEditable: boolean;
  public planTaskCounterTableDTO: PlanTaskCounterTableDTO;
  public taskTypes: LabelValue<string>[];
  public periodicityTypes: LabelValue<string>[];
  public taskGroups: LabelValue<string>[];
  public references: LabelValue<string>[];
  public unitCodeList: BireMeasureReferenceDTO[];
  // For itemTaskSearch section
  public currentItemTaskSearch: BireTaskDTO;
  public showItemTaskSearchPopup: boolean;
  public dialogTaskSearchTableData: DialogTableData<BireTaskDTO>;
  public taskKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  // For itemTaskSearch section
  public showItemVisitSearchPopup: boolean;
  public dialogVisitSearchTableData: DialogTableData<BireTaskDTO>;
  public visitKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public showPeriodicity: boolean;
  public unitCode: string | undefined;
  public labelUnitCode: string | undefined;
  public customComments: string;

  public constructor(
    public inputValidationService: InputValidationService,
    public sessionService: SessionService,
    private readonly messageService: MessageService,
    public propertiesService: PropertiesService,
    public maintenanceProgramFormService: MaintenanceProgramFormService
  ) {
    super(ComponentOpenMode.Read, 'TaskVisitPopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onAssociated = new EventEmitter<PlanTaskCounterTableDTO[]>();
    this.planTaskCounterTableDTO = {
      bireTaskDTO: {},
      birePlanTaskCounterDTO: {}
    };
    this.taskKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.references = [];
    this.taskGroups = [];
    this.taskTypes = [];
    this.periodicityTypes = [];
    this.unitCodeList = [];
    this.showPeriodicity = true;
    this.customComments = '';
    this.initMeasureUnit();
  }

  public ngOnInit() {
    if (!this.popUpType) {
      this.popUpType = '';
    }
    const observables: Observable<LabelValue<string>[]>[] = [
      this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP),
      this.propertiesService.getValue(GenericPropertyConstants.PERIODICITY_TYPE_MAP),
      this.maintenanceProgramFormService.findAllBireTaskGroups()
    ];

    forkJoin(observables).subscribe(([taskTypes, periodicityTypes, taskGroups]) => {
      this.maintenanceProgramFormService.findAllBireMeasureReferencesMaintenanceProgram().subscribe((results) => {
        this.taskTypes = taskTypes;
        this.periodicityTypes = periodicityTypes;
        this.taskGroups = taskGroups;
        this.unitCodeList = results;
        results.forEach((element) => {
          if (!!element.counterRemarks && !!element.counterCode) {
            const temp: LabelValue<string> = {
              label: `${element.counterRemarks} (${element.counterCode})`,
              value: element.counterCode
            };
            this.references.push(temp);
          }
        });

        if (this.componentData && this.componentData.componentId && !!this.componentData.object) {
          this.planTaskCounterTableDTO = this.componentData.object;

          if (this.isUnitFh && !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold) {
            this.saveThreshold = this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold;
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold = this.calculateFhValueFromPercentage(
              this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold,
              this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst,
              this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity
            );
          }

          // Set defaults to zero
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.tolerance =
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.tolerance || 0;
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst =
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst || 0;
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity =
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity || 0;
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold =
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold || 0;
          this.customComments = this.getDisplayComments(
            this.planTaskCounterTableDTO.birePlanTaskCounterDTO.comments || ''
          );

          this.setUnitCode();
        }
      });
    });
  }

  public getTypeName(): string {
    return 'TaskVisitPopupFormComponent';
  }

  public associate(): void {
    this.fhThreshold = this.getPercentageValueOfThreshold(
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst,
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity,
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold
    );
    // Set these to undefined, dont pass zero
    this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity =
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity || undefined;
    this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst =
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst || undefined;
    this.planTaskCounterTableDTO.birePlanTaskCounterDTO.tolerance =
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.tolerance || undefined;
    if (this.isUnitFh) {
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold = this.fhThreshold || undefined;
    } else {
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold =
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold || undefined;
    }
    if (
      !!this.planTaskCounterTableDTO.visitCode &&
      !!this.planTaskCounterTableDTO.visitVersion &&
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode
    ) {
      const bireTaskDTO: BireTaskDTO = {
        taskCode: this.planTaskCounterTableDTO.visitCode,
        taskVersion: this.planTaskCounterTableDTO.visitVersion,
        taskDesignation: this.planTaskCounterTableDTO.visitDesignation
      };
      this.maintenanceProgramFormService.findBireTaskTasksByVisit(bireTaskDTO).subscribe((results) => {
        const planTaskCounter: PlanTaskCounterTableDTO[] = [];
        if (results.length > 0) {
          results.forEach((task) => {
            const planTaskCounterObj: PlanTaskCounterTableDTO = {
              birePlanTaskCounterDTO: this.planTaskCounterTableDTO.birePlanTaskCounterDTO,
              bireTaskDTO: task,
              complianceDetail: this.planTaskCounterTableDTO.complianceDetail,
              complianceLight: this.planTaskCounterTableDTO.complianceLight,
              visitCode: this.planTaskCounterTableDTO.visitCode,
              visitVersion: this.planTaskCounterTableDTO.visitVersion,
              visitDesignation: this.planTaskCounterTableDTO.visitDesignation
            };
            planTaskCounter.push(planTaskCounterObj);
          });
        } else {
          planTaskCounter.push(this.planTaskCounterTableDTO);
        }
        this.onAssociated.emit(planTaskCounter);
        this.display = false;
      });
    } else if (
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskCode &&
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskVersion &&
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode
    ) {
      this.onAssociated.emit([this.planTaskCounterTableDTO]);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    if (this.isUnitFh) {
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold = this.getPercentageValueOfThreshold(
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst,
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity,
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold
      );
    }
    this.display = false;
  }

  public taskSearch(): void {
    this.showItemTaskSearchPopup = true;
  }
  public visitSearch(): void {
    this.showItemVisitSearchPopup = true;
  }

  public setSelectedTaskSearchCode(selectedObject: BireTaskDTO) {
    if (selectedObject) {
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO = this.planTaskCounterTableDTO.birePlanTaskCounterDTO || {};
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskCode = selectedObject.taskCode;
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskVersion = selectedObject.taskVersion;

      this.planTaskCounterTableDTO.bireTaskDTO = this.planTaskCounterTableDTO.bireTaskDTO || {};
      this.planTaskCounterTableDTO.bireTaskDTO.taskCode = selectedObject.taskCode;
      this.planTaskCounterTableDTO.bireTaskDTO.taskVersion = selectedObject.taskVersion;
      this.planTaskCounterTableDTO.bireTaskDTO.taskDesignation = selectedObject.taskDesignation;
      this.planTaskCounterTableDTO.bireTaskDTO.groupCode = selectedObject.groupCode;
      this.planTaskCounterTableDTO.bireTaskDTO.taskTypeCode = selectedObject.taskTypeCode;
    }
    this.showItemTaskSearchPopup = false;
  }

  public setSelectedVisitSearchCode(selectedObject: BireTaskDTO) {
    if (selectedObject) {
      this.planTaskCounterTableDTO.visitCode = selectedObject.taskCode;
      this.planTaskCounterTableDTO.visitVersion = selectedObject.taskVersion;
      this.planTaskCounterTableDTO.visitDesignation = selectedObject.taskDesignation;

      this.planTaskCounterTableDTO.birePlanTaskCounterDTO = this.planTaskCounterTableDTO.birePlanTaskCounterDTO || {};
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskCode = selectedObject.taskCode;
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.taskVersion = selectedObject.taskVersion;

      this.planTaskCounterTableDTO.bireTaskDTO = this.planTaskCounterTableDTO.bireTaskDTO || {};
      this.planTaskCounterTableDTO.bireTaskDTO.taskCode = selectedObject.taskCode;
      this.planTaskCounterTableDTO.bireTaskDTO.taskVersion = selectedObject.taskVersion;
      this.planTaskCounterTableDTO.bireTaskDTO.taskDesignation = selectedObject.taskDesignation;
    }
    this.showItemVisitSearchPopup = false;
  }

  public onSelectVisitReference(): void {
    if (
      !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
      this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode
    ) {
      this.setUnitCode();

      if (
        BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_PRE_FLIGHT ===
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode ||
        BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_POST_FLIGHT ===
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode ||
        BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_DAILY ===
          this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode
      ) {
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityFirst = 0;
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicity = 0;
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.periodicityType = undefined;
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.tolerance = 0;
        this.planTaskCounterTableDTO.birePlanTaskCounterDTO.threshold = 0;

        this.showPeriodicity = false;
      } else {
        this.showPeriodicity = true;
      }
    }
  }

  private setUnitCode() {
    const unitCodeObj = this.unitCodeList.filter((element) => {
      return (
        !!this.planTaskCounterTableDTO.birePlanTaskCounterDTO &&
        element.counterCode === this.planTaskCounterTableDTO.birePlanTaskCounterDTO.counterCode
      );
    })[0];
    this.unitCode = unitCodeObj && unitCodeObj.unitCode;
    if (!!this.unitCode && this.isUnitFh) {
      this.labelUnitCode = '(' + this.unitCode + ')';
    }
  }

  public getDisplayComments(comment: string): string {
    try {
      if (comment) {
        const commentObj = JSON.parse(comment);
        if (commentObj && commentObj.length === 1) {
          return commentObj[0].comment;
        } else if (commentObj && commentObj.length > 1) {
          return !!commentObj[0].comment ? commentObj[0].comment : comment;
        }
      }

      return '';
    } catch (e) {
      return comment;
    }
  }

  public initMeasureUnit(): void {
    this.isUnitFh = true;
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        if (
          SettingsUtils.isPropertyEnabled(
            awConfiguration,
            AWPropertiesConstants.REFERENTIAL_ALERT_THRESHOLD_IS_PERCENTAGE
          )
        ) {
          this.isUnitFh = false;
          this.labelUnitCode = '(%)';
        }
      });
  }

  private getPercentageValueOfThreshold(
    periodicityFirst: number | undefined,
    periodicity: number | undefined,
    threshold: number | undefined
  ): number | undefined {
    if (!!periodicity) {
      // If there is a value in Periodicity field, we use it
      return this.calculateFhPercentage(periodicity, threshold);
    }
    if (!!periodicityFirst) {
      // If there are values in FirstPeriodicity AND Periodicity fields, we use the Periodicity field
      return this.calculateFhPercentage(periodicityFirst, threshold);
    }

    return undefined;
  }

  private calculateFhPercentage(periodicity: number, threshold: number | undefined): number | undefined {
    if (!!threshold) {
      return (
        Math.round(
          (threshold / periodicity) *
            TaskVisitPopupFormComponent.PERCENTAGE_CONST *
            TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
        ) / TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
      );
    }
  }

  private calculateFhValueFromPercentage(
    percent: number,
    periodicityFirst: number | undefined,
    periodicity: number | undefined
  ): number {
    if (!!periodicity) {
      return (
        Math.round(
          ((percent * periodicity) / TaskVisitPopupFormComponent.PERCENTAGE_CONST) *
            TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
        ) / TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
      );
    }

    if (!!periodicityFirst) {
      return (
        Math.round(
          ((percent * periodicityFirst) / TaskVisitPopupFormComponent.PERCENTAGE_CONST) *
            TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
        ) / TaskVisitPopupFormComponent.ONE_DECIMAL_ROUND
      );
    }

    return 0;
  }
}
