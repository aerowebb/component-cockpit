import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

interface SubAssemblyInterface {
  batchNumber?: string;
  quantity: number;
  creationDate?: Date;
  batchOriginQty?: string;
  operationalStatus?: string;
  location?: string;
  emp?: string;
  warehouseDes?: string;
  empCode?: string;
  statusUser?: string;
}

@Component({
  selector: 'aw-dialog-add-update',
  templateUrl: './dialog-add-update.component.html',
  styleUrls: ['./dialog-add-update.component.scss']
})
export class DialogAddUpdateComponent extends DialogComponent implements OnInit {
  private static readonly TEN: number = 10;
  @Input() public subAssemblyObject: SubAssemblyInterface;
  @Input() public quantity: string;
  @Input() public operatonalStatus: string;
  @Input() public unit: string;
  @Input() public fromStockMovement: boolean;
  @Output() public onValidate: EventEmitter<SubAssemblyInterface>;
  public quantityMaxValue: number;
  public operationlStatusDisplayed: string;
  public statusList: LabelValue<string>[];

  public assemblyObject: SubAssemblyInterface;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogAddUpdateComponent');
    this.onValidate = new EventEmitter<SubAssemblyInterface>();
  }

  public ngOnInit() {
    this.assemblyObject = {
      quantity: 0
    };
    this.operationlStatusDisplayed = '';
    if (this.subAssemblyObject && this.subAssemblyObject.batchNumber) {
      const assemblyNumberArr = this.subAssemblyObject.batchNumber.split('-');
      const assemblyNumber = parseInt(assemblyNumberArr[1] || '0', 10) + 1;
      this.assemblyObject.batchNumber =
        assemblyNumber < DialogAddUpdateComponent.TEN
          ? assemblyNumberArr[0].concat('-0', assemblyNumber.toString())
          : assemblyNumberArr[0].concat('-', assemblyNumber.toString());
      this.assemblyObject.quantity = this.subAssemblyObject.quantity;
    }

    this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });
    this.assemblyObject.statusUser =
      this.subAssemblyObject.statusUser || this.sessionService.userFirstName + ' ' + this.sessionService.userLastName;
    this.assemblyObject.operationalStatus =
      this.operatonalStatus && this.statusList.filter((row) => row.value === this.operatonalStatus).length > 0
        ? this.operatonalStatus
        : AWPropertiesConstants.MM_BATCH_EQUIPMENT_STATUS_SERVICEABLE;
    this.assemblyObject.creationDate = new Date();
    this.quantityMaxValue = parseInt(this.quantity, 10);
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidate.emit(this.assemblyObject);
  }
}
