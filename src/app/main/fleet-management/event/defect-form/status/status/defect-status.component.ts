import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BidoNotificationDTO } from '../../../../../../shared/types/api-types/bido-notification-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { OverlayRef } from '../../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-defect-status',
  styleUrls: ['./defect-status.component.scss'],
  templateUrl: './defect-status.component.html'
})
export class DefectStatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public draftToClosedSteps: StepItem[];
  public deferredStep: StepItem[];

  public defect: BidoNotificationDTO;

  public constructor(
    public tabService: TabService,
    public serializationService: SerializationService,
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _dateService: DateService,
    private readonly _translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;

    this.defect = this._overlayRef.data as BidoNotificationDTO;

    this.currentStatus = this.defect.status as string;

    this.draftToClosedSteps = this.buildDraftToClosedSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.defect.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.defect.statusUser,
                  date: this._dateService.dateToString(this.defect.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.defect.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });

    this.deferredStep = this.buildDeferredStep().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.defect.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.defect.statusUser,
                  date: this._dateService.dateToString(this.defect.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.defect.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'DefectStatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    this._overlayRef.close(newStatus);
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildDraftToClosedSteps(): StepItem[] {
    return [
      {
        label: 'draft',
        status: this.currentStatus === Constants.EVENT_STATUS_DRAFT_KEY ? 'current' : 'previous'
      },
      {
        label: 'open',
        status:
          this.currentStatus === Constants.EVENT_STATUS_OPENED_KEY
            ? 'current'
            : this.currentStatus === Constants.EVENT_STATUS_DRAFT_KEY
            ? 'next'
            : 'previous'
      },
      {
        label: 'under analysis',
        status:
          this.currentStatus === Constants.EVENT_STATUS_UNDER_ANALYSIS_KEY
            ? 'current'
            : this.currentStatus === Constants.EVENT_STATUS_DRAFT_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_OPENED_KEY
            ? 'next'
            : 'previous'
      },
      {
        label: 'under investigation',
        status:
          this.currentStatus === Constants.EVENT_STATUS_UNDER_INVESTIGATION_KEY
            ? 'current'
            : this.currentStatus === Constants.EVENT_STATUS_DRAFT_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_OPENED_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_UNDER_ANALYSIS_KEY
            ? 'next'
            : 'previous'
      },
      {
        label: 'closed',
        status:
          this.currentStatus === Constants.EVENT_STATUS_CLOSED_KEY
            ? 'current'
            : this.currentStatus === Constants.EVENT_STATUS_DRAFT_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_OPENED_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_UNDER_ANALYSIS_KEY ||
              this.currentStatus === Constants.EVENT_STATUS_UNDER_INVESTIGATION_KEY
            ? 'next'
            : 'previous'
      }
    ];
  }

  private buildDeferredStep(): StepItem[] {
    return [
      {
        label: 'deferred',
        status: this.currentStatus === Constants.EVENT_STATUS_DEFERRED_KEY ? 'current' : 'next'
      }
    ];
  }

  // public confirmCanceledStatus(): void {
  //   this.confirmationService.confirm({
  //     messageKey: this.getTranslateKey('warningOnCanceledUpdate'),
  //     accept: () => {
  //       this.updateStatus(this.constants.FLIGHT_STATUS_CANCELED);
  //     }
  //   });
  // }
}
