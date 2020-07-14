import { Component, Input } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { BidtTransferOrderDTO } from '../../../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { CandidateAssetDTO } from '../../../../../../shared/types/api-types/candidate-asset-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';

@Component({
  selector: 'aw-dialog-satisfaction-rate-transfer-order',
  styleUrls: ['./dialog-satisfaction-rate-transfer-order.component.scss', '../../../shared/style.scss'],
  templateUrl: './dialog-satisfaction-rate-transfer-order.component.html'
})
export class DialogSatisfactionRateTransferOrderComponent extends DialogComponent {
  @Input()
  public candidateAsset: CandidateAssetDTO;

  @Input()
  public transferOrder: BidtTransferOrderDTO;

  public sameSite: boolean;
  public availableAtDate: boolean;
  public bookingStatus: boolean;
  public noUnconfirmedFailure: boolean;

  public constructor() {
    super(ComponentOpenMode.Read, 'DialogSatisfactionRateTransferOrderComponent');

    this.candidateAsset = {};
    this.transferOrder = {};
  }

  public isAvailableAtDate(): boolean {
    return !ObjectUtils.isDefined(this.candidateAsset.plannedAvailabilityDate);
  }

  public calculateSatisfactionRate(): number {
    const rates: number[] = [];
    const rate = (value: boolean) => {
      rates.push(value ? 1 : 0);
    };

    this.availableAtDate = this.isAvailableAtDate();
    rate(this.availableAtDate);

    this.bookingStatus =
      !ObjectUtils.isDefined(this.candidateAsset.transferOrder) ||
      (this.candidateAsset.transferOrder as BidtTransferOrderDTO).id === this.transferOrder.id;
    rate(this.bookingStatus);

    this.sameSite =
      !!this.candidateAsset.siteReceipt &&
      !!this.transferOrder.bidtSiteIssue &&
      this.candidateAsset.siteReceipt.siteId === this.transferOrder.bidtSiteIssue.siteId;
    rate(this.sameSite);

    this.noUnconfirmedFailure = !ObjectUtils.isDefined(this.candidateAsset.unconfirmedFailure);
    rate(this.noUnconfirmedFailure);

    // tslint:disable-next-line:no-magic-numbers
    return NumberUtils.roundNumber((rates.filter((value) => value === 1).length / rates.length) * 100, 0);
  }
}
