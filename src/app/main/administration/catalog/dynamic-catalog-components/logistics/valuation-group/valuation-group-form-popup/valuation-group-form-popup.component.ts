import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BidtValuationGroupDTO } from '../../../../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../../shared/utils/label-value-utils';
import { ValuationGroupService } from '../valuation-group.service';

@Component({
  selector: 'aw-valuation-group-form-popup',
  templateUrl: './valuation-group-form-popup.component.html'
})
export class ValuationGroupFormPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public valuationGroup: BidtValuationGroupDTO;

  @Input()
  public isNewValuationGroup: boolean;

  @Output()
  public onCreate: EventEmitter<BidtValuationGroupDTO>;

  @Output()
  public onUpdate: EventEmitter<BidtValuationGroupDTO>;

  public readonly componentId: string;
  public unitCodeSelected: string;

  public displayValue: boolean;
  public codeName: LabelValue<string>[];
  public unitCode: LabelValue<string>[];

  public constructor(
    public inputValidationService: InputValidationService,
    public valuationGroupService: ValuationGroupService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ValuationGroupFormPopupComponent');

    this.onCreate = new EventEmitter<BidtValuationGroupDTO>();
    this.onUpdate = new EventEmitter<BidtValuationGroupDTO>();
    this.unitCode = [];
  }

  public ngOnInit() {
    this.fillDropDown();
    if (!this.valuationGroup) {
      this.valuationGroup = {};

      this.valuationGroup.rangeValueMin = '0';
      this.valuationGroup.rangeValueMax = '0';
    }
  }

  public associate(): void {
    if (!!this.valuationGroup) {
      LabelValueUtils.stringValueToLabel<BidtValuationGroupDTO>(
        this.valuationGroup,
        'valuationGroupCode',
        this.codeName
      );
      if (this.isRangeValid()) {
        this.valuationGroup.unitCode = this.unitCodeSelected;
        if (this.isNewValuationGroup) {
          this.onCreate.emit(this.valuationGroup);
          this.display = false;
        } else {
          this.onUpdate.emit(this.valuationGroup);
          this.display = false;
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('rangeExceed'));
      }
    } else {
      super.throwUnboundLocalError('associate', 'this.valuationGroup');
    }
  }

  private isRangeValid(): boolean {
    const maxLength = 18;
    if (
      !!this.valuationGroup &&
      !!this.valuationGroup.rangeValueMin &&
      this.valuationGroup.rangeValueMin.toString().length > maxLength
    ) {
      return false;
    }
    if (
      !!this.valuationGroup &&
      !!this.valuationGroup.rangeValueMax &&
      this.valuationGroup.rangeValueMax.toString().length > maxLength
    ) {
      return false;
    }

    return true;
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.valuationGroup &&
      !!this.valuationGroup.valuationGroupCode &&
      this.valuationGroup.valuationGroupCode.trim().length !== 0 &&
      !!this.valuationGroup.valuationGroupName &&
      this.valuationGroup.valuationGroupName.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  public fillDropDown() {
    // if (this.isNewValuationGroup) {
    this.valuationGroupService.getValuationGroupCodeNameMap().subscribe((results) => {
      this.codeName = results;

      if (this.valuationGroup) {
        this.codeName.forEach((res) => {
          if (!!this.valuationGroup && this.valuationGroup.valuationGroupCode === res.label) {
            this.valuationGroup.valuationGroupCode = res.value;
          }
        });
      }
    });
    this.valuationGroupService.getValuationGroupUnitCodeMapping().subscribe((results) => {
      // this.unitCode = results;

      results.forEach((res) => {
        this.unitCode.push({
          label: `${res.label}-${res.value}`,
          value: res.value
        });
      });

      if (!!this.valuationGroup && !!this.valuationGroup.unitCode) {
        this.unitCodeSelected = this.valuationGroup.unitCode;
      }
    });
    // }
  }
}
