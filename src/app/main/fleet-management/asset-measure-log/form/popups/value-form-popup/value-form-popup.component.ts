import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-value-form-popup',
  templateUrl: './value-form-popup.component.html',
  styleUrls: ['./value-form-popup.component.scss']
})
export class MeasureValueFormPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public measures: FindBidoMeasuresByEquipmentAndCounterCodesOutput;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onAdded: EventEmitter<FindBidoMeasuresByEquipmentAndCounterCodesOutput>;

  @Input()
  public measureDetail: FindBidoMeasuresByEquipmentAndCounterCodesOutput;
  public readonly componentId: string;

  public constructor(public inputValidationService: InputValidationService) {
    super(ComponentOpenMode.Write, 'MeasureValueFormPopupComponent');

    this.onAdded = new EventEmitter<FindBidoMeasuresByEquipmentAndCounterCodesOutput>();
  }

  public ngOnInit() {
    if (!this.measureDetail) {
      this.measureDetail = {};
    }
  }

  public add(): void {
    this.onAdded.emit(this.measureDetail);
    this.display = false;
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (!!this.measureDetail && !!this.measureDetail.value && this.measureDetail.value.trim().length !== 0) {
      return true;
    } else {
      return false;
    }
  }
}
