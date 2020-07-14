import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { OverlayRef } from '../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-work-package-status',
  styleUrls: ['./work-package-status.component.scss'],
  templateUrl: './work-package-status.component.html'
})
export class WorkPackageStatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public steps: StepItem[];
  public workPackage: BidmProjectDTO;

  public constructor(
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _dateService: DateService,
    private readonly _translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;

    this.workPackage = this._overlayRef.data as BidmProjectDTO;

    this.currentStatus = this.workPackage.statusState as string;

    this.steps = this.buildSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.workPackage.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.workPackage.statusUser,
                  date: this._dateService.dateToString(this.workPackage.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.workPackage.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'WorkPackageStatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    this._overlayRef.close(newStatus);
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildSteps(): StepItem[] {
    return [
      {
        label: 'simulated',
        status: this.currentStatus === Constants.AIRM_PROJECT_STATUS_SIMULATED ? 'current' : 'previous'
      },
      {
        label: 'scheduled',
        status:
          this.currentStatus === Constants.AIRM_PROJECT_STATUS_SCHEDULED
            ? 'current'
            : this.currentStatus === Constants.AIRM_PROJECT_STATUS_SIMULATED
            ? 'next'
            : 'previous'
      },
      {
        label: 'released',
        status:
          this.currentStatus === Constants.AIRM_PROJECT_STATUS_RELEASED
            ? 'current'
            : this.currentStatus === Constants.AIRM_PROJECT_STATUS_SIMULATED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_SCHEDULED
            ? 'next'
            : 'previous'
      },
      {
        label: 'ongoing',
        status:
          this.currentStatus === Constants.AIRM_PROJECT_STATUS_ONGOING
            ? 'current'
            : this.currentStatus === Constants.AIRM_PROJECT_STATUS_SIMULATED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_RELEASED
            ? 'next'
            : 'previous'
      },
      {
        label: 'performed',
        status:
          this.currentStatus === Constants.AIRM_PROJECT_STATUS_PERFORMED
            ? 'current'
            : this.currentStatus === Constants.AIRM_PROJECT_STATUS_SIMULATED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_RELEASED ||
              this.currentStatus === Constants.AIRM_PROJECT_STATUS_ONGOING
            ? 'next'
            : 'previous'
      },
      {
        label: 'closed',
        status: this.currentStatus === Constants.AIRM_PROJECT_STATUS_CLOSE ? 'current' : 'next'
      }
    ];
  }
}
