import { Component, Input } from '@angular/core';
import * as moment from 'moment';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { BidtProcurementRequestDTO } from '../../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { CandidateAssetDTO } from '../../../../../../shared/types/api-types/candidate-asset-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';

@Component({
  selector: 'aw-dialog-satisfaction-rate',
  styleUrls: ['./dialog-satisfaction-rate.component.scss', '../../../shared/style.scss'],
  templateUrl: './dialog-satisfaction-rate.component.html'
})
export class DialogSatisfactionRateComponent extends DialogComponent {
  @Input()
  public candidateAsset: CandidateAssetDTO;

  @Input()
  public procurementRequest: BidtProcurementRequestDTO;

  public sameSite: boolean;
  public availableAtDate: boolean;
  public potential: boolean;
  public calendarPotential: boolean;
  public bookingStatus: boolean;
  public noUnconfirmedFailure: boolean;

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogSatisfactionRateComponent');

    this.candidateAsset = {};
    this.procurementRequest = {};
  }

  public isAvailableAtDate(): boolean {
    return !ObjectUtils.isDefined(this.candidateAsset.plannedAvailabilityDate);
  }

  public calculateSatisfactionRate(): number {
    const rates: number[] = [];
    const rate = (value: boolean) => {
      rates.push(value ? 1 : 0);
    };

    // Availability at date
    this.availableAtDate = this.isAvailableAtDate();
    rate(this.availableAtDate);

    // Not booked by another procurement request
    this.bookingStatus =
      !ObjectUtils.isDefined(this.candidateAsset.bookingProcurementRequest) ||
      (this.candidateAsset.bookingProcurementRequest as BidtProcurementRequestDTO).id === this.procurementRequest.id;
    rate(this.bookingStatus);

    // Potential
    this.potential =
      !this.procurementRequest.requestedPotential ||
      (!!this.candidateAsset.potentialValue &&
        NumberUtils.fromString(this.candidateAsset.potentialValue) >=
          NumberUtils.fromString(this.procurementRequest.requestedPotential));
    rate(this.potential);

    // Same site
    this.sameSite =
      !!this.candidateAsset.siteReceipt &&
      !!this.procurementRequest.bidtSiteReceipt &&
      this.candidateAsset.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId;
    rate(this.sameSite);

    // No Unconfirmed Failure
    this.noUnconfirmedFailure = !ObjectUtils.isDefined(this.candidateAsset.unconfirmedFailure);
    rate(this.noUnconfirmedFailure);

    // Calendar potential
    if (!this.candidateAsset.calendarPotential) {
      this.calendarPotential = true;
    } else {
      this.calendarPotential = moment(this.candidateAsset.calendarPotential).isAfter(
        moment(this.procurementRequest.calendarPotential || this.procurementRequest.requestedDate)
      );
    }
    rate(this.calendarPotential);

    // tslint:disable-next-line:no-magic-numbers
    return NumberUtils.roundNumber((rates.filter((value) => value === 1).length / rates.length) * 100, 0);
  }
}
