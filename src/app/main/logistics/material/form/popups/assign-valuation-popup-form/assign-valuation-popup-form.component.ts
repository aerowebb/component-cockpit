import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BidtPriceDTO } from '../../../../../../shared/types/api-types/bidt-price-dto.interface';
import { BidtValuationGroupDTO } from '../../../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { MaterialFormService } from '../../material-form.service';

@Component({
  selector: 'aw-assign-valuation-popup-form',
  templateUrl: './assign-valuation-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignValuationPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public valuationDetail: BidtPriceDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<BidtPriceDTO>;
  public isEditable: boolean;
  public valuation: SelectItem[];
  public valuationGroupId : string | undefined;

  @Input()
  public priceCurrency: string;

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignValuationPopupFormComponent');
    this.onValidated = new EventEmitter<BidtPriceDTO>();
    this.displayChange = new EventEmitter<boolean>();
    this.loadValuation();
    this.priceCurrency = '';
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.valuationDetail) {
      this.valuationDetail = {};
    } else {
      this.valuationGroupId = this.valuationDetail.bidtValuationGroupId ?
      this.valuationDetail.bidtValuationGroupId.toString() : '';
    }
  }

  public getTypeName(): string {
    return 'AssignValuationPopupFormComponent';
  }

  public cancel(): void {
    this.display = false;
  }

  public loadValuation(): void {
    this.materialFormService.findAllValuation().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BidtValuationGroupDTO) => {
        if (!!res && !!res.id && !!res.valuationGroupName) {
          labelValue.push({
            label: res.valuationGroupName,
            value: res.id.toString()
          });
        }
      });

      this.valuation = labelValue;
    });
  }
  public validate(): void {
    if (!!this.valuationDetail) {
      this.valuation.forEach((res) => {
        if (!!this.valuationDetail && this.valuationGroupId === res.value) {
          this.valuationDetail.valuationName = res.label;
        }
      });
      this.valuationDetail.bidtValuationGroupId = this.valuationGroupId ?
      parseInt(this.valuationGroupId, 10) : undefined;
      this.valuationDetail.priceUnit = this.priceCurrency;
      this.onValidated.emit(this.valuationDetail);
    }
    this.cancel();
  }
  public isScreenValid() {
    if (this.valuationDetail && this.valuationGroupId && this.valuationDetail.priceValue) {
      return true;
    }

    return false;
  }
}
