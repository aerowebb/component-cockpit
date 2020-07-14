import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StepItem } from '../../../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants as Constants } from '../../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../../../shared/services/date.service';
import { SerializationService } from '../../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../../shared/services/tab.service';
import { BidmProjectDTO } from '../../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { GenericComponent } from '../../../../../../../shared/types/generic-component';
import { OverlayRef } from '../../../../../../overlay/overlay-ref';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-flight-status',
  styleUrls: ['./flight-status.component.scss'],
  templateUrl: './flight-status.component.html'
})
export class FlightStatusComponent extends GenericComponent {
  public readonly constants: typeof Constants;

  public currentStatus: string;
  public draftToValidatedSteps: StepItem[];
  public delayedAndCanceledSteps: StepItem[];
  public flight: BidmProjectDTO;
  public missionEquipment: BidoMissionEquipmentDTO;

  public constructor(
    public tabService: TabService,
    public serializationService: SerializationService,
    private readonly _overlayRef: OverlayRef<string | undefined>,
    private readonly _dateService: DateService,
    private readonly _translateService: TranslateService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write);

    this.constants = Constants;

    this.flight = this._overlayRef.data as BidmProjectDTO;
    this.missionEquipment = this._overlayRef.data as BidoMissionEquipmentDTO;

    this.currentStatus = this.flight.statusState as string;

    this.draftToValidatedSteps = this.buildDraftToValidatedSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.flight.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.flight.statusUser,
                  date: this._dateService.dateToString(this.flight.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.flight.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });

    this.delayedAndCanceledSteps = this.buildDelayedAndCanceledSteps().map((step) => {
      if (step.status === 'current') {
        return {
          ...step,
          tooltip: this.flight.statusDate
            ? this._translateService.instant(
                'statusByOn',

                {
                  author: this.flight.statusUser,
                  date: this._dateService.dateToString(this.flight.statusDate)
                }
              )
            : this._translateService.instant(
                'statusBy',

                {
                  author: this.flight.statusUser
                }
              )
        };
      } else {
        return step;
      }
    });
  }

  public getComponentName(): string {
    return 'FlightStatusComponent';
  }

  // //////////////////////////////////////////////////////////////////////////

  public updateStatus(newStatus: string): void {
    this._overlayRef.close(newStatus);
  }

  // //////////////////////////////////////////////////////////////////////////

  private buildDraftToValidatedSteps(): StepItem[] {
    return [
      {
        label: 'draft',
        status: this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ? 'current' : 'previous'
      },
      {
        label: 'scheduled',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      },
      {
        label: 'go validated',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      },
      {
        label: 'arrived',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_ARRIVED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_DELAYED ||
              this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      },
      {
        label: 'completed',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_COMPLETED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_DELAYED ||
              this.currentStatus === Constants.FLIGHT_STATUS_ARRIVED ||
              this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      },
      {
        label: 'validated',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_VALIDATED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_DELAYED ||
              this.currentStatus === Constants.FLIGHT_STATUS_ARRIVED ||
              this.currentStatus === Constants.FLIGHT_STATUS_COMPLETED ||
              this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      }
    ];
  }

  private buildDelayedAndCanceledSteps(): StepItem[] {
    return [
      {
        label: 'delayed',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_DELAYED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_DELAYED ||
              this.currentStatus === Constants.FLIGHT_STATUS_ARRIVED ||
              this.currentStatus === Constants.FLIGHT_STATUS_COMPLETED ||
              this.currentStatus === Constants.FLIGHT_STATUS_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'next'
            : 'previous'
      },
      {
        label: 'canceled',
        status:
          this.currentStatus === Constants.FLIGHT_STATUS_CANCELED
            ? 'current'
            : this.currentStatus === Constants.FLIGHT_STATUS_DRAFT ||
              this.currentStatus === Constants.FLIGHT_STATUS_SCHEDULED ||
              this.currentStatus === Constants.FLIGHT_STATUS_DELAYED ||
              this.currentStatus === Constants.FLIGHT_STATUS_ARRIVED ||
              this.currentStatus === Constants.FLIGHT_STATUS_COMPLETED ||
              this.currentStatus === Constants.FLIGHT_STATUS_VALIDATED ||
              this.currentStatus === Constants.FLIGHT_STATUS_GO_VALIDATED
            ? 'next'
            : 'previous'
      }
    ];
  }

  public isComingFromGonogo(): boolean {
    if (!!this.missionEquipment.bidoFlightAttributeDTOList) {
      if (this.missionEquipment.bidoFlightAttributeDTOList.length > 0) {
        if (!!this.missionEquipment.bidoFlightAttributeDTOList[0].attributeValue) {
          return true;
        }
      }
    }

    return false;
  }

  public isCompletedStatusButtonClickable(): boolean {
    if (
      !!this.missionEquipment.missionDuration &&
      !!this.missionEquipment.cycleNumber &&
      !!this.missionEquipment.startDate &&
      !!this.missionEquipment.endDate &&
      this.isEngineAsset1Completed() &&
      this.isEngineAsset2Completed() &&
      this.isEngineAsset3Completed() &&
      this.isEngineAsset4Completed()
    ) {
      return true;
    }

    return false;
  }

  public isEngineAsset1Completed(): boolean {
    if (!!this.missionEquipment.engine1AssetCode) {
      if (!!this.missionEquipment.engineStartDate && !!this.missionEquipment.engineStopDate) {
        if (!!this.missionEquipment.engine1CycleNumber && !!this.missionEquipment.engine1HourNumber) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  public isEngineAsset2Completed(): boolean {
    if (!!this.missionEquipment.engine2AssetCode) {
      if (!!this.missionEquipment.engineStartDate && !!this.missionEquipment.engineStopDate) {
        if (!!this.missionEquipment.engine2CycleNumber && !!this.missionEquipment.engine2HourNumber) {
          if (this.isEngineAsset1Completed()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  public isEngineAsset3Completed(): boolean {
    if (!!this.missionEquipment.engine3AssetCode) {
      if (!!this.missionEquipment.engineStartDate && !!this.missionEquipment.engineStopDate) {
        if (!!this.missionEquipment.engine3CycleNumber && !!this.missionEquipment.engine3HourNumber) {
          if (this.isEngineAsset1Completed() && this.isEngineAsset2Completed()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  public isEngineAsset4Completed(): boolean {
    if (!!this.missionEquipment.engine4AssetCode) {
      if (!!this.missionEquipment.engineStartDate && !!this.missionEquipment.engineStopDate) {
        if (!!this.missionEquipment.engine4CycleNumber && !!this.missionEquipment.engine4HourNumber) {
          if (this.isEngineAsset1Completed() && this.isEngineAsset2Completed() && this.isEngineAsset3Completed()) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  public isArrivedStatusButtonClickable(): boolean {
    if (!!this.missionEquipment.startDate && !!this.missionEquipment.endDate) {
      return true;
    }

    return false;
  }

  public confirmCanceledStatus(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('warningOnCanceledUpdate'),
      accept: () => {
        this.updateStatus(this.constants.FLIGHT_STATUS_CANCELED);
      }
    });
  }
}
