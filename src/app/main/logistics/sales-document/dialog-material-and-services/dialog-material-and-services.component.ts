import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MaterialAndServicesOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/material-and-services-output.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SalesDocumentFormService } from '../form/sales-document-form.service';

@Component({
  selector: 'aw-dialog-material-and-services',
  templateUrl: './dialog-material-and-services.component.html'
})
export class DialogMaterialAndServicesComponent extends DialogComponent implements OnInit {
  @Input()
  public obj: MaterialAndServicesOutput;

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public isReadOnlyForm: boolean;

  @Input()
  public newObj: boolean;

  @Output()
  public onCreate: EventEmitter<MaterialAndServicesOutput>;

  @Output()
  public onUpdate: EventEmitter<MaterialAndServicesOutput>;

  public showQuickSearchMaterialPopup: boolean;

  public warehouses: LabelValue<string>[];

  public pnCode: string | undefined;

  public snVisibility: boolean;
  public bnVisibility: boolean;

  public constructor(private readonly salesDocumentFormService: SalesDocumentFormService) {
    super(ComponentOpenMode.Write, 'DialogMaterialsComponent');

    this.init();
  }

  public ngOnInit() {
    if (!this.obj) {
      this.obj = {
        price: 0,
        productionLeadTime: 0,
        bidtStockMvtDTO: {},
        quantity: 0
      };
      this.pnCode = undefined;
    } else {
      this.pnCode = !!this.obj.bidtStockMvtDTO ? this.obj.bidtStockMvtDTO.birePnPnCode : undefined;
      if (!!this.obj.quantityForTable) {
        const qty = this.obj.quantityForTable.split(',');
        let quantity = '';
        for (let i = 0; i < qty.length; i++) {
          quantity = `${quantity}${qty[i]}`;
        }
        this.obj.quantityForTable = quantity;
      }
      if (!!this.pnCode) {
        this.setSnBnVisibility(this.pnCode);
        this.loadWarehouses();
      }
    }
  }

  private init(): void {
    this.showQuickSearchMaterialPopup = false;
    this.warehouses = [];
    this.onCreate = new EventEmitter<MaterialAndServicesOutput>();
    this.onUpdate = new EventEmitter<MaterialAndServicesOutput>();
    this.snVisibility = false;
    this.bnVisibility = false;
  }

  public openMaterialDialog() {
    if (this.newObj) {
      this.showQuickSearchMaterialPopup = true;
    }
  }

  public setSelectedMaterial(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.obj.pnText = !!selectedObject.articleDesignation
        ? `${selectedObject.pnCode} / ${selectedObject.articleDesignation}`
        : selectedObject.pnCode;
      this.pnCode = selectedObject.pnCode;
      if (!!this.pnCode) {
        this.setSnBnVisibility(this.pnCode);
      }
      this.loadWarehouses();
    }
    this.showQuickSearchMaterialPopup = false;
  }

  private loadWarehouses(): void {
    if (!!this.pnCode) {
      this.salesDocumentFormService.displayWarehouse(this.pnCode).subscribe((results) => {
        this.warehouses = results || [];
        if (!this.newObj && !!this.obj.warehouse) {
          this.obj.warehouse = this.warehouses.filter((ware) => ware.label === this.obj.warehouse)[0].value;
        }
      });
    }
  }

  public associate(): void {
    this.updateBidtStockMvtDTO();
    if (this.newObj) {
      this.onCreate.emit(this.obj);
      this.display = false;
    } else {
      this.onUpdate.emit(this.obj);
      this.display = false;
    }
  }

  private setSnBnVisibility(pnCode: string): void {
    const input: BirePnDTOId = {
      pnCode
    };
    this.salesDocumentFormService.findBirePn(input).subscribe((result) => {
      if (
        !!result &&
        (AWPropertiesConstants.PN_TRACEABILITY_BY_SN === result.traceability ||
          AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN === result.traceability)
      ) {
        this.snVisibility = true;
      }

      if (
        !!result &&
        (AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH === result.traceability ||
          AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN === result.traceability)
      ) {
        this.bnVisibility = true;
      }
    });
  }

  private updateBidtStockMvtDTO(): void {
    if (!!this.obj.bidtStockMvtDTO) {
      this.obj.bidtStockMvtDTO = {
        birePnPnCode: this.pnCode,
        stockMvtSn: this.obj.serialNumber,
        stockMvtBatchNumber: this.obj.batchNumber,
        id: this.obj.id
      };
      if (!!this.obj.quantityForTable) {
        this.obj.bidtStockMvtDTO.stockMvtQuantity = this.obj.quantityForTable;
      }
      if (!!this.obj.warehouse) {
        const radix = 10;
        this.obj.bidtStockMvtDTO.bidtWarehouseId = Number.parseInt(this.obj.warehouse, radix);
        this.obj.warehouse = this.warehouses.filter((ware) => ware.value === this.obj.warehouse)[0].label;
      }
      if (this.obj.bidtStockMvtDTO.id === null || this.obj.bidtStockMvtDTO.id === undefined) {
        this.obj.bidtStockMvtDTO.id = Math.random();
      }
      if (!!this.obj.quantityForTable) {
        this.obj.quantityForTable = this.numberStringToStringWithCommas(this.obj.quantityForTable);
      }
    }
  }

  /***************
   * Helper method
   **************/

  public numberToStringWithCommas(n: number): string {
    const parts = n.toString().split('.');

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
  }

  public numberStringToStringWithCommas(n: string): string {
    const parts = n.split('.');

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
  }
}
