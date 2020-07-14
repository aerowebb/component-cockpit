import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { FleetFormService } from '../fleet-form.service';

@Component({
  selector: 'aw-multiple-assets-selection-popup',
  templateUrl: './multiple-assets-selection-popup.component.html'
})
export class MultipleAssetsSelectionPopupComponent extends DialogComponent implements OnInit {
  public equipment: BidoEquipmentDTO;

  @Output()
  public onAdded: EventEmitter<BidoEquipmentDTO>;

  public showQuickSearchOwnerBusinessPartnerPopup: boolean;
  public showQuickSearchOperatorBusinessPartnerPopup: boolean;

  public familyVariants: LabelValue<string>[];
  public functions: LabelValue<string>[];

  private id: number;

  public constructor(
    private readonly fleetFormService: FleetFormService,
    private readonly propertiesService: PropertiesService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'MultipleAssetsSelectionPopupComponent');

    this.onAdded = new EventEmitter<BidoEquipmentDTO>();
    this.showQuickSearchOwnerBusinessPartnerPopup = false;
    this.showQuickSearchOperatorBusinessPartnerPopup = false;

    this.familyVariants = [];
    this.functions = [];

    this.equipment = {};
  }

  public ngOnInit() {
    this.loadFamilyVariants();
    this.loadFunctions();
  }

  public add(): void {
    if (!this.enableAdd()) {
      this.messageService.showWarningMessage(this.getComponentName() + '.fillTwoCriteria');
    } else {
      if (!!this.equipment) {
        this.onAdded.emit(this.equipment);
        this.display = false;
      } else {
        super.throwUnboundLocalError('add', 'this.equipment');
      }
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public quickSearchOwnerBusinessPartner(): void {
    this.showQuickSearchOwnerBusinessPartnerPopup = true;
  }

  public quickSearchOperatorBusinessPartner(): void {
    this.showQuickSearchOperatorBusinessPartnerPopup = true;
  }

  private loadFamilyVariants(): void {
    this.fleetFormService.findBireVariantVersionsByFamilyFunctionAlternative().subscribe(
      (results) => {
        results.forEach((result) => {
          this.familyVariants.push(result.labelValue);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetFamilyVariants');
      }
    );
  }

  private loadFunctions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe(
      (results) => {
        this.functions = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetFunctions');
      }
    );
  }

  public setSelectedOwner(event: BidoCustomerDTO): void {
    if (!!this.equipment) {
      this.equipment.ownerCustomerCode = event.customerCode;
    } else {
      super.throwUnboundLocalError('setSelectedOwner', 'this.equipment');
    }
  }

  public setSelectedOperator(event: BidoCustomerDTO): void {
    if (!!this.equipment) {
      this.equipment.operatorCustomerCode = event.customerCode;
    } else {
      super.throwUnboundLocalError('setSelectedOperator', 'this.equipment');
    }
  }

  private isUndefinedAndNull(property: string | undefined): number {
    const value = !!property ? 1 : 0;

    return value;
  }

  public enableAdd(): boolean {
    let returnValue = false;
    if (!!this.equipment) {
      const pnCode = this.equipment.pnCode !== undefined && this.equipment.pnCode.trim() !== '' ? 1 : 0;

      this.id =
        this.isUndefinedAndNull(this.equipment.ownerCustomerCode) +
        this.isUndefinedAndNull(this.equipment.operatorCustomerCode) +
        this.isUndefinedAndNull(this.equipment.familyVariantCode) +
        this.isUndefinedAndNull(this.equipment.equipmentFunction) +
        pnCode;

      const limit = 2;

      if (this.id >= limit) {
        this.id = 0;

        returnValue = true;
      } else {
        this.id = 0;

        returnValue = false;
      }
    } else {
      super.throwUnboundLocalError('enableAdd', 'this.equipment');
    }

    return returnValue;
  }
}
