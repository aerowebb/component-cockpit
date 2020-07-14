import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidtProcurementRequestDTO } from '../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { OverlayRef } from '../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-procurement-request-status',
  styleUrls: ['./procurement-request-status.component.scss'],
  templateUrl: './procurement-request-status.component.html'
})
export class ProcurementRequesttatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public steps: StepItem[];
  public procurementRequest: BidtProcurementRequestDTO;
  public showClosedButton: boolean;

  public constructor(
    private readonly _messageService: MessageService,
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;
    const data = this._overlayRef.data as { procurementRequest: BidtProcurementRequestDTO; showClosedButton: boolean };
    this.procurementRequest = data.procurementRequest;
    this.currentStatus = this.procurementRequest.procStatus as string;
    this.showClosedButton = data.showClosedButton;

    this.steps = this.buildSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.procurementRequest.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.procurementRequest.statusUser,
                  date: this.procurementRequest.statusDate
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.procurementRequest.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'ProcurementRequesttatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    if (
      this.procurementRequest.procStatus === Constants.PROCUREMENT_REQUEST_STATUS_DRAFT &&
      (!this.procurementRequest.criticality || !this.procurementRequest.requestedDate)
    ) {
      this._messageService.showWarningMessage(this.getTranslateKey('fillMissingFieldsForDraft'));
    } else {
      this._overlayRef.close(newStatus);
    }
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildSteps(): StepItem[] {
    return this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||
      this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_PLANNED
      ? this.stepsOne()
      : this.stepsTwo();
  }

  private stepsOne(): StepItem[] {
    return [
      {
        label: 'simulated',
        status: this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_SIMULATED ? 'current' : 'previous'
      },
      {
        label: 'planned',
        status:
          this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_PLANNED
            ? 'current'
            : this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_SIMULATED
            ? 'next'
            : 'previous'
      },
      {
        label: 'releasedProcurementRequest',
        status:
          this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_RELEASED
            ? 'current'
            : this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||
              this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_PLANNED
            ? 'next'
            : 'previous'
      },
      {
        label: 'ongoing',
        status:
          this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_ONGOING
            ? 'current'
            : this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_SIMULATED ||
              this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_PLANNED ||
              this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_RELEASED
            ? 'next'
            : 'previous'
      },
      {
        label: 'closedProcurementRequest',
        status: this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_CLOSED ? 'current' : 'next'
      }
    ];
  }

  private stepsTwo(): StepItem[] {
    return [
      {
        label: 'draft',
        status: this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_DRAFT ? 'current' : 'previous'
      },
      {
        label: 'releasedProcurementRequest',
        status:
          this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_RELEASED
            ? 'current'
            : this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_DRAFT
            ? 'next'
            : 'previous'
      },
      {
        label: 'ongoing',
        status:
          this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_ONGOING
            ? 'current'
            : this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_DRAFT ||
              this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_RELEASED
            ? 'next'
            : 'previous'
      },
      {
        label: 'closedProcurementRequest',
        status: this.currentStatus === Constants.PROCUREMENT_REQUEST_STATUS_CLOSED ? 'current' : 'next'
      }
    ];
  }
}
