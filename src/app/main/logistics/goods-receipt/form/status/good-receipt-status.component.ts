import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { OverlayRef } from '../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-procurement-request-status',
  styleUrls: ['./good-receipt-status.component.scss'],
  templateUrl: './good-receipt-status.component.html'
})
export class GoodReceiptStatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public steps: StepItem[];
  public deliveryFolder: BidtDeliveryFolderDTO;

  public constructor(
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _translateService: TranslateService,
    public sessionService: SessionService,
    public readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;

    this.deliveryFolder = this._overlayRef.data as BidtDeliveryFolderDTO;

    this.currentStatus = this.deliveryFolder.dfStatus as string;

    this.steps = this.buildSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: !!this.deliveryFolder.statusDate
            ? this._translateService.instant('statusByOn', {
                author: this.deliveryFolder.statusUser,
                date: this.dateService.dateToString(this.deliveryFolder.statusDate)
              })
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.deliveryFolder.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'GoodReceiptStatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    this._overlayRef.close(newStatus);
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildSteps(): StepItem[] {
    return this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_CANCELED ? this.stepsTwo() : this.stepsOne();
  }

  private stepsOne(): StepItem[] {
    return [
      {
        label: 'draft',
        status: this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_DRAFT ? 'current' : 'previous'
      },
      {
        label: 'planned',
        status:
          this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_PLANNED
            ? 'current'
            : this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_DRAFT
            ? 'next'
            : 'previous'
      },
      {
        label: 'ongoing',
        status:
          this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_ON_GOING
            ? 'current'
            : this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_DRAFT ||
              this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_PLANNED
            ? 'next'
            : 'previous'
      },
      {
        label: 'performed',
        status: this.currentStatus === Constants.RECEIPT_FOLDER_STATUS_PERFORMED ? 'current' : 'next'
      }
    ];
  }

  private stepsTwo(): StepItem[] {
    return [
      {
        label: 'canceled',
        status: 'current'
      }
    ];
  }

  public isUserCanAddHaveRightOnDeliveryFolder(): boolean {
    return this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_MM_RECEIVING,
      BidoFunctionTypeConstants.DEGREE_MANAGE
    );
  }

  public enablePassToOngoingFromPlanned(): boolean {
    const items = ListUtils.orEmpty(this.deliveryFolder.bidtDfItems);

    return (
      items.length > 0 &&
      items.every((item) => item.dfiStatus === Constants.RECEIPT_FOLDER_STATUS_PLANNED) &&
      items.map((item) => item.bidtPackage).filter((bidtPackage) => ObjectUtils.isDefined(bidtPackage)).length === 0
    );
  }
}
