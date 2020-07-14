import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { ObjectStatusDTO } from '../../../../../shared/types/api-types/object-status-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { OverlayRef } from '../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-work-order-status',
  styleUrls: ['./work-order-status.component.scss'],
  templateUrl: './work-order-status.component.html'
})
export class WorkOrderStatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public steps: StepItem[];
  public workOrder: ObjectStatusDTO;

  public constructor(
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _dateService: DateService,
    private readonly _translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;

    this.workOrder = this._overlayRef.data as ObjectStatusDTO;

    this.currentStatus = this.workOrder.statusState as string;

    this.steps = this.buildSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.workOrder.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.workOrder.statusUser,
                  date: this._dateService.dateToString(this.workOrder.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.workOrder.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'WorkOrderStatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    this._overlayRef.close(newStatus);
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildSteps(): StepItem[] {
    if (
      this.currentStatus === Constants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED ||
      this.currentStatus === Constants.AIRM_OPERATION_STATUS_POSTPONED
    ) {
      return [
        {
          label: 'postponementRequested',
          status: this.currentStatus === Constants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED ? 'current' : 'previous'
        },
        {
          label: 'postponed',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_POSTPONED
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED
              ? 'next'
              : 'previous'
        }
      ];
    } else {
      return [
        {
          label: 'simulated',
          status: this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED ? 'current' : 'previous'
        },
        {
          label: 'planned',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_PLANNED
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED
              ? 'next'
              : 'previous'
        },
        {
          label: 'released',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_RELEASED
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_PLANNED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED
              ? 'next'
              : 'previous'
        },
        {
          label: 'onGoing',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_ONGOING
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_RELEASED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_PLANNED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED
              ? 'next'
              : 'previous'
        },
        {
          label: 'toBeConfirmed',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_ONGOING ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_RELEASED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_PLANNED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED
              ? 'next'
              : 'previous'
        },
        {
          label: 'performed',
          status:
            this.currentStatus === Constants.AIRM_OPERATION_STATUS_PERFORMED
              ? 'current'
              : this.currentStatus === Constants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_ONGOING ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_RELEASED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_PLANNED ||
                this.currentStatus === Constants.AIRM_OPERATION_STATUS_SIMULATED
              ? 'next'
              : 'previous'
        },
        {
          label: 'closed',
          status: this.currentStatus === Constants.AIRM_OPERATION_STATUS_CLOSE ? 'current' : 'next'
        }
      ];
    }
  }
}
