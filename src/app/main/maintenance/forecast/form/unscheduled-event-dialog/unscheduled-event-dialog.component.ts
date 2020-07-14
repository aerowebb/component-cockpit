import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { MaintenanceForecastingUnscheduledEvent } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-unscheduled-event.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireEvolutionDTO } from '../../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireTaskDTO } from '../../../../../shared/types/api-types/bire-task-dto.interface';
import { BireVariantVersionDTO } from '../../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { BsdeEventDTO } from '../../../../../shared/types/api-types/bsde-event-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { BidoFamilyVariantUtils } from '../../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { EventModel, ForecastFormService } from '../forecast-form.service';

enum EventType {
  EVOLUTION,
  TASK
}

@Component({
  selector: 'aw-dialog-forecast-form-unscheduled-event',
  templateUrl: './unscheduled-event-dialog.component.html'
})
export class UnscheduledEventForecastFormDialogComponent extends DialogComponent implements OnInit {
  public readonly eventType: typeof EventType;

  @Input()
  public asset: BidoEquipmentDTO;

  @Input()
  public eventModel: EventModel<MaintenanceForecastingUnscheduledEvent> | undefined;

  public event: BsdeEventDTO;
  public eventTypeList: SelectItem[];
  public familyVariantList: LabelValue<BireVariantVersionDTO>[];

  public selectedEventType: EventType;
  public selectedFamilyVariant: BireVariantVersionDTO | undefined;

  public showEvolutionDialog: boolean;
  public showTaskDialog: boolean;

  public constructor(
    public sessionService: SessionService,
    private readonly forecastFormService: ForecastFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'UnscheduledEventForecastFormDialogComponent');

    this.eventType = EventType;

    this.init();

    this.setEventTypeList();
  }

  public ngOnInit(): void {
    this.forecastFormService.getAllFamilyVariantByUcMfoNonRoutineEvent().subscribe({
      next: (familyVariantList) => {
        this.familyVariantList = ListUtils.orEmpty(familyVariantList);

        if (this.eventModel) {
          this.event = this.eventModel._obj.bsdeEvent;

          const matchingFamilyVariant = this.familyVariantList.find(
            (familyVariant) =>
              familyVariant.value.familyCode ===
                BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(this.asset.familyVariantCode) &&
              familyVariant.value.variantCode ===
                BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(this.asset.familyVariantCode)
          );
          this.selectedFamilyVariant = matchingFamilyVariant ? matchingFamilyVariant.value : undefined;

          this.selectedEventType = this.event.taskCode ? EventType.TASK : EventType.EVOLUTION;
        }
      }
    });
  }

  public clearEvolution(): void {
    this.event.evolutionNumber = undefined;
    this.event.evolutionRevisionNumber = undefined;
  }

  public clearTask(): void {
    this.event.taskCode = undefined;
    this.event.taskVersion = undefined;
  }

  public onSelectedEvolution(evolution: BireEvolutionDTO): void {
    this.event.evolutionNumber = evolution.evolutionNumber;
    this.event.evolutionRevisionNumber = evolution.evolutionRevisionNumber;
    this.event.evolutionType = evolution.evolutionType;
  }

  public onSelectedTask(task: BireTaskDTO): void {
    this.event.taskCode = task.taskCode;
    this.event.taskVersion = task.taskVersion;
  }

  public openEvolutionDialog(): void {
    this.showEvolutionDialog = true;
  }

  public openTaskDialog(): void {
    this.showTaskDialog = true;
  }

  public save(): void {
    if (ObjectUtils.isDefined(this.asset)) {
      this.event.pn = this.asset.pnCode;
      this.event.sn = this.asset.sn;
    }
    if (ObjectUtils.isDefined(this.selectedFamilyVariant)) {
      const familyVariant = this.selectedFamilyVariant as BireVariantVersionDTO;
      this.event.familyCode = familyVariant.familyCode;
      this.event.variantCode = familyVariant.variantCode;
    }

    if (this.selectedEventType === EventType.EVOLUTION) {
      this.clearTask();
    } else {
      this.clearEvolution();
    }

    if (this.eventModel) {
      this.forecastFormService.updateUnscheduledEvent({ event: this.eventModel });
    } else {
      this.forecastFormService.createUnscheduledEvent({ event: this.event });
    }
  }

  private init(): void {
    this.event = {};
    this.eventTypeList = [];
    this.familyVariantList = [];

    this.selectedEventType = EventType.TASK;
    this.selectedFamilyVariant = undefined;

    this.showEvolutionDialog = false;
    this.showTaskDialog = false;
  }

  private setEventTypeList(): void {
    const evolutionKey = 'evolution';
    const taskKey = 'task';
    this.translateService.get([evolutionKey, taskKey]).subscribe((results) => {
      const evolutionLabel = !!results ? results[evolutionKey] : 'Evolution';
      const taskLabel = !!results ? results[taskKey] : 'Task';
      this.eventTypeList = [
        { label: taskLabel, value: EventType.TASK },
        { label: evolutionLabel, value: EventType.EVOLUTION }
      ];
    });
  }
}
