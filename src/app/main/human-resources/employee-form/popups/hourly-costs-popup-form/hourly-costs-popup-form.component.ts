import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtHourlyCostsOutputDTO } from '../../../../../shared/types/api-output-types/bidt-employee/bidt-hourly-costs-output-dto.interface';
import { BidtHourlyCostDTO } from '../../../../../shared/types/api-types/bidt-hourly-cost-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { EmployeeFormService } from '../../employee-form.service';

@Component({
  selector: 'aw-hourly-costs-popup-form',
  templateUrl: './hourly-costs-popup-form.component.html'
})
export class HourlyCostsPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  public onValidated: EventEmitter<BidtHourlyCostsOutputDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtHourlyCostsOutputDTO>;

  public displayValue: boolean;

  public hourlyCostsDTO: BidtHourlyCostDTO;
  public isEditable: boolean;
  public hourlyCostTypes: LabelValue<string>[];
  public hourlyCostsOutputDTO: BidtHourlyCostsOutputDTO;
  public currencyLebel: string;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public employeeFormService: EmployeeFormService
  ) {
    super(ComponentOpenMode.Read, 'HourlyCostsPopupFormComponent');

    this.currencyLebel = '';
    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtHourlyCostsOutputDTO>();
    this.hourlyCostsDTO = {};
    this.hourlyCostsOutputDTO = {};
    this.loadHourlyCostType();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.hourlyCostsOutputDTO = this.componentData.object || {};
      if (!this.hourlyCostsOutputDTO.bitHourlyCostDTO) {
        this.hourlyCostsOutputDTO.bitHourlyCostDTO = {};
      }
      this.hourlyCostsDTO = this.hourlyCostsOutputDTO.bitHourlyCostDTO;
      this.hourlyCostsDTO.hcCost = this.hourlyCostsDTO.hcCost || 0;
    }

    this.employeeFormService.getLocalCurrency().subscribe((result) => {
      this.currencyLebel = result;
    });
  }

  public getTypeName(): string {
    return 'HourlyCostsPopupFormComponent';
  }

  public validate(): void {
    if (this.hourlyCostsDTO.hcDayType && Number(this.hourlyCostsDTO.hcCost) >= 0) {
      const costType = this.hourlyCostTypes.filter((costObj) => {
        return costObj.value === this.hourlyCostsDTO.hcDayType;
      })[0];
      const decimalPrecision = 2;
      const decimalFactor = 100;
      this.hourlyCostsOutputDTO.costType = costType.label;
      if (this.hourlyCostsOutputDTO.bitHourlyCostDTO) {
        this.hourlyCostsOutputDTO.bitHourlyCostDTO.hcCost = this.hourlyCostsDTO.hcCost;
      }

      const costText = parseFloat(
        (Math.round(Number(this.hourlyCostsDTO.hcCost) * decimalFactor) / decimalFactor).toString()
      ).toFixed(decimalPrecision);
      this.hourlyCostsOutputDTO.costText = `${costText} ${this.currencyLebel}`;

      this.onValidated.emit(this.hourlyCostsOutputDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadHourlyCostType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_HC_DAY_TYPE_MAP).subscribe((results) => {
      this.hourlyCostTypes = results;
    });
  }
}
