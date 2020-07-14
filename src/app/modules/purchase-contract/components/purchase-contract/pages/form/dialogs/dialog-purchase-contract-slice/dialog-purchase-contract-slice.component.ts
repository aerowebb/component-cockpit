import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentConstants } from '../../../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../../shared/types/label-value.interface';
import { StringUtils } from '../../../../../../../../shared/utils/string-utils';
import { PurchaseContractPropertyConstants } from '../../../../../../constants/properties/purchase-contract-property-constants';
import { PurchaseContractSliceStatusConstants } from '../../../../../../constants/properties/purchasecontract/purchase-contract-slice-status-constants';
import { PurchaseContractSliceTypeConstants } from '../../../../../../constants/properties/purchasecontract/purchase-contract-slice-type-constants';
import { BidtPurchaseContractSliceDTO } from '../../../../../../dtos/bidt-purchase-contract-slice-dto.interface';

@Component({
  selector: 'aw-dialog-purchase-contract-slice',
  templateUrl: './dialog-purchase-contract-slice.component.html'
})
export class DialogPurchaseContractSliceComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public newSlice: boolean;

  @Input()
  public data: BidtPurchaseContractSliceDTO;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onAddSlice: EventEmitter<BidtPurchaseContractSliceDTO>;

  @Output()
  public onUpdateSlice: EventEmitter<BidtPurchaseContractSliceDTO>;

  @Input()
  public sliceTypeListDisplay: LabelValue<string>[];

  @Input()
  public sliceStatusListDisplay: LabelValue<string>[];

  @Input()
  public sliceUnitList: LabelValue<string>[];

  @Input()
  public currency: string;

  public constructor(private readonly messageService: MessageService, public sessionService: SessionService) {
    super(ComponentOpenMode.Write, ComponentConstants.PCT_SLICES_DIALOG_FORM);
    this.onAddSlice = new EventEmitter<BidtPurchaseContractSliceDTO>();
    this.onUpdateSlice = new EventEmitter<BidtPurchaseContractSliceDTO>();
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_SLICES_DIALOG_FORM;
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode); // create
    if (!this.data) {
      this.data = {};
    }
    if (this.openMode === ComponentOpenMode.Write || this.openMode === ComponentOpenMode.Create) {
      // this.loadPcsEndDate();
    }
  }

  public onStartDateValueChange(event: Date): void {
    this.data.pcsStartDate = event;
    this.loadPcsEndDate();
  }

  public onDurationValueChange(event: number): void {
    this.data.pcsDuration = event;
    this.loadPcsEndDate();
  }

  public onDurationUnitValueChange(event: string): void {
    this.data.pcsDurationUnit = event;
    this.loadPcsEndDate();
  }

  public loadPcsEndDate(): void {
    if (!!this.data && !!this.data.pcsStartDate && !!this.data.pcsDurationUnit && !!this.data.pcsDuration) {
      const startDateSored = new Date(this.data.pcsStartDate);
      if (this.data.pcsDuration === 0) {
        this.data.pcsEndDate = startDateSored;
      } else {
        switch (this.data.pcsDurationUnit) {
          case PurchaseContractPropertyConstants.UNIT_DAY_VALUE: {
            this.data.pcsEndDate = new Date(
              startDateSored.setTime(
                startDateSored.getTime() + this.data.pcsDuration * PurchaseContractPropertyConstants.MILLI_SEC_IN_DAY
              )
            );
            break;
          }
          case PurchaseContractPropertyConstants.UNIT_WEEK_VALUE: {
            this.data.pcsEndDate = new Date(
              startDateSored.setTime(
                startDateSored.getTime() +
                  this.data.pcsDuration *
                    PurchaseContractPropertyConstants.MILLI_SEC_IN_DAY *
                    PurchaseContractPropertyConstants.DAY_IN_WEEK
              )
            );

            break;
          }
          case PurchaseContractPropertyConstants.UNIT_MONTH_VALUE: {
            this.data.pcsEndDate = new Date(startDateSored.setMonth(startDateSored.getMonth() + this.data.pcsDuration));
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.newSlice) {
        this.onAddSlice.emit(this.data);
      } else {
        this.onUpdateSlice.emit(this.data);
      }
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  public isValid(): boolean {
    return true;
  }

  private isScreenValidated() {
    return (
      this.data.pcsOrder &&
      !StringUtils.isNullOrEmpty(this.data.pcsDescription) &&
      this.data.pcsType &&
      // Mandatory data if consolidation date is present
      (!this.data.pcsConsolidationDate || (this.data.pcsEndDate && this.data.pcsStartDate && this.data.pcsDuration))
    );
  }

  public onSliceStatusChange(event): void {
    if (!this.data.pcsConsolidationDate && event.value === PurchaseContractSliceStatusConstants.FIRMED) {
      this.data.pcsConsolidationDate = new Date();
    }
  }

  public onSliceTypeChange(event) {
    if (!this.data.pcsConsolidationDate && event.value === PurchaseContractSliceTypeConstants.FIRM) {
      this.data.pcsConsolidationDate = new Date();
    }
  }

  public closeDialog(): void {
    this.display = false;
  }
}
