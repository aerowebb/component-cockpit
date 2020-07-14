import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidtProcReqItemDTO } from '../../../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { LogisticsService } from '../../../logistics.service';
import { WorkshopEntryRow } from '../procurement-request-form.component';

@Component({
  selector: 'aw-dialog-procurement-request-edit-quantity',
  templateUrl: './dialog-edit-quantity.component.html'
})
export class DialogEditQuantityComponent extends DialogComponent implements OnInit {
  @Input()
  public procurementRequest: BidtProcurementRequestDTO;

  @Input()
  public procReqItem: BidtProcReqItemDTO;

  @Input()
  public workshopEntries: WorkshopEntryRow[];

  public newQuantity: string | undefined;
  public oldQuantity: string | undefined;

  @Output()
  private readonly onValidate: EventEmitter<string>;

  public constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly logisticsService: LogisticsService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogEditQuantityComponent');

    this.onValidate = new EventEmitter<string>();

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    const quantity = this.procReqItem.requestedQuantity
      ? NumberUtils.toString(NumberUtils.roundNumber(NumberUtils.fromString(this.procReqItem.requestedQuantity)))
      : undefined;

    this.newQuantity = quantity;
    this.oldQuantity = quantity;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public validate() {
    const servedQty = this.workshopEntries
      .filter(
        (stockMvt) =>
          ObjectUtils.isDefined(stockMvt.obj.stockMvtSn) || ObjectUtils.isDefined(stockMvt.obj.stockMvtBatchNumber)
      )
      .map((stockMvt) => (stockMvt.obj.stockMvtQuantity ? Number(stockMvt.obj.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    const newQty = NumberUtils.fromString(this.newQuantity as string);

    if (newQty <= 0) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorQuantityLowerThanZero'));
    } else if (newQty < servedQty) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorWrongQuantity'));
    } else {
      this.logisticsService.checkQuantityConsistency(this.procurementRequest).subscribe({
        next: (consistent) => {
          if (consistent) {
            this.onValidate.emit(this.newQuantity as string);
            this.closeDialog();
          } else {
            this.confirmationService.confirm({
              messageKey: this.getTranslateKey('quantityNotConsistent'),
              contextKeys: [this.getTranslateKey('confirmContinue')],
              accept: () => {
                this.onValidate.emit(this.newQuantity as string);
                this.closeDialog();
              }
            });
          }
        }
      });
    }
  }

  // ////////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.newQuantity = undefined;
  }
}
