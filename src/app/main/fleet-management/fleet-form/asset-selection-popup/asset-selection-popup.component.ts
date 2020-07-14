import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { BidoEquipmentOVSOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoEquipmentTableDTO } from '../../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';

@Component({
  selector: 'aw-asset-selection-popup',
  templateUrl: './asset-selection-popup.component.html'
})
export class AssetSelectionPopupComponent extends DialogComponent implements OnInit {
  public equipment: BidoEquipmentTableDTO;

  @Output() public onAdded: EventEmitter<BidoEquipmentTableDTO>;

  public readonly componentId: string;

  public name: string;

  public showQuickSearchEquipmentDialog: boolean;

  public constructor() {
    super(ComponentOpenMode.Write, 'AssetSelectionPopupComponent');

    this.onAdded = new EventEmitter<BidoEquipmentTableDTO>();
    this.showQuickSearchEquipmentDialog = false;
    this.equipment = {
      bidoEquipmentDTO: {},
      type: ''
    };
    this.name = '';
  }

  public ngOnInit() {
    this.equipment = {
      bidoEquipmentDTO: {},
      type: ''
    };
  }

  public add(): void {
    if (!!this.equipment) {
      this.onAdded.emit(this.equipment);
      this.display = false;
    } else {
      super.throwUnboundLocalError('add', 'this.equipment');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public quickSearchEquipment(): void {
    this.showQuickSearchEquipmentDialog = true;
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    if (!!this.equipment) {
      if (!!event.equipmentFunction) {
        this.equipment.bidoEquipmentDTO.equipmentCode = event.equipmentCode;
        this.equipment.bidoEquipmentDTO.pnCode = event.pnCode;
        this.equipment.bidoEquipmentDTO.sn = event.sn;

        this.name =
          this.equipment.bidoEquipmentDTO.pnCode && this.equipment.bidoEquipmentDTO.sn
            ? `P/N ${this.equipment.bidoEquipmentDTO.pnCode} | S/N ${this.equipment.bidoEquipmentDTO.sn}`
            : this.equipment.bidoEquipmentDTO.pnCode && !this.equipment.bidoEquipmentDTO.sn
            ? `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`
            : !this.equipment.bidoEquipmentDTO.pnCode && this.equipment.bidoEquipmentDTO.sn
            ? `S/N ${this.equipment.bidoEquipmentDTO.sn}`
            : '';

        this.equipment.bidoEquipmentDTO.equipmentDesignation = event.equipmentDesignation; // property "name" in assets table
        this.equipment.bidoEquipmentDTO.registration = event.registration;
        this.equipment.type = event.equipmentFunction;
        this.equipment.bidoEquipmentDTO.operatorCustomerCode = event.operatorCustomerCode;
        this.equipment.bidoEquipmentDTO.modelCode = event.modelCode;
        this.equipment.bidoEquipmentDTO.operationalStatus = event.operationalStatus;
        this.equipment.bidoEquipmentDTO.familyVariantCode = event.familyVariantCode;
      } else {
        this.equipment.bidoEquipmentDTO.equipmentCode = event.equipmentCode;
        this.equipment.bidoEquipmentDTO.pnCode = event.pnCode;
        this.equipment.bidoEquipmentDTO.sn = event.sn;

        this.name =
          this.equipment.bidoEquipmentDTO.pnCode && this.equipment.bidoEquipmentDTO.sn
            ? `P/N ${this.equipment.bidoEquipmentDTO.pnCode} | S/N ${this.equipment.bidoEquipmentDTO.sn}`
            : this.equipment.bidoEquipmentDTO.pnCode && !this.equipment.bidoEquipmentDTO.sn
            ? `P/N ${this.equipment.bidoEquipmentDTO.pnCode}`
            : !this.equipment.bidoEquipmentDTO.pnCode && this.equipment.bidoEquipmentDTO.sn
            ? `S/N ${this.equipment.bidoEquipmentDTO.sn}`
            : '';

        this.equipment.bidoEquipmentDTO.equipmentDesignation = event.equipmentDesignation; // property "name" in assets table
        this.equipment.bidoEquipmentDTO.registration = event.registration;
        this.equipment.bidoEquipmentDTO.operatorCustomerCode = event.operatorCustomerCode;
        this.equipment.bidoEquipmentDTO.modelCode = event.modelCode;
        this.equipment.bidoEquipmentDTO.operationalStatus = event.operationalStatus;
        this.equipment.bidoEquipmentDTO.familyVariantCode = event.familyVariantCode;
      }
    } else {
      super.throwUnboundLocalError('setSelected', 'equipment && event.equipmentFunction');
    }
  }
}
