import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BirePartUnitConversionDTO } from '../../../../../../shared/types/api-types/bire-part-unit-conversion-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { MaterialFormService } from '../../material-form.service';

@Component({
  selector: 'aw-assign-supply-conversion-popup-form',
  templateUrl: './assign-supply-conversion-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignSupplyConversionPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public pnCode: string;
  @Input()
  public supplyConversionDetail: BirePartUnitConversionDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public supplyUnit: number;
  @Input()
  public unitOfIssueOptions: LabelValue<string>[];
  @Output()
  public onValidated: EventEmitter<BirePartUnitConversionDTO>;

  public isEditable: boolean;
  public goodFormattedDate: string;

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService,
    public readonly _dateService: DateService
  ) {
    super(ComponentOpenMode.Read, 'AssignSupplyConversionPopupFormComponent');
    this.onValidated = new EventEmitter<BirePartUnitConversionDTO>();
    this.displayChange = new EventEmitter<boolean>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.supplyConversionDetail) {
      this.supplyConversionDetail = {};
    } else {
      this.unitOfIssueOptions.forEach((res) => {
        if (this.supplyConversionDetail.alternativeUnit === res.label) {
          this.supplyConversionDetail.alternativeUnit = res.value;
        }
      });
    }
    this.supplyConversionDetail.pnCode = this.pnCode;
  }

  public getTypeName(): string {
    return 'AssignSupplyConversionPopupFormComponent';
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!!this.supplyConversionDetail.pnCode) {
      this.supplyConversionDetail.unit = this.unitOfIssueOptions[this.supplyUnit - 1].label;
      this.unitOfIssueOptions.forEach((res) => {
        if (this.supplyConversionDetail.alternativeUnit === res.value) {
          this.supplyConversionDetail.alternativeUnit = res.label;
        }
      });
      this.onValidated.emit(this.supplyConversionDetail);
    }
    this.cancel();
  }

  public isScreenValid() {
    if (!!this.supplyConversionDetail.alternativeUnit && !!this.supplyConversionDetail.factor) {
      return true;
    }

    return false;
  }
}
