import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { BidtStockTypeStatusDTO } from '../../../../../../../../shared/types/api-types/bidt-stock-type-status-dto.interface';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../../../shared/utils/label-value-utils';
import { StockTypeService } from '../../stock-type.service';

@Component({
  selector: 'aw-status-form-popup',
  templateUrl: './status-form-popup.component.html'
})
export class StatusFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public statusForm: BidtStockTypeStatusDTO;

  @Output()
  public onCreate: EventEmitter<BidtStockTypeStatusDTO>;

  public readonly componentId: string;
  public statusField: LabelValue<string>[];
  public displayValue: boolean;

  public constructor(private readonly stockTypeService: StockTypeService) {
    super(ComponentOpenMode.Write, 'StatusFormPopupComponent');

    this.onCreate = new EventEmitter<BidtStockTypeStatusDTO>();
    this.statusDropDown();
  }

  public ngOnInit() {
    if (!this.statusForm) {
      this.statusForm = {};
    }
  }

  public associate(): void {
    if (!!this.statusForm) {
      LabelValueUtils.stringValueToLabel<BidtStockTypeStatusDTO>(
        this.statusForm,
        'stockTypeStatusName',
        this.statusField
      );
      this.onCreate.emit(this.statusForm);
      this.display = false;
    } else {
      super.throwUnboundLocalError('associate', 'this.statusForm');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.statusForm &&
      !!this.statusForm.stockTypeStatusName &&
      this.statusForm.stockTypeStatusName.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  public statusDropDown() {
    this.stockTypeService.getStatusMapping().subscribe((results) => {
      this.statusField = results;
    });
  }
}
