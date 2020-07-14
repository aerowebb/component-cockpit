import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { MaterialAndServicesOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/material-and-services-output.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { OrderDocumentFormService } from '../form/order-document-form.service';

@Component({
  selector: 'aw-dialog-material-and-services',
  templateUrl: './dialog-material-and-services.component.html'
})
export class DialogMaterialAndServicesComponent extends DialogComponent implements OnInit {
  @Input()
  public category: string;

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

  public byQuotation: boolean | undefined;
  public showQuickSearchMaterialPopup: boolean;

  public warehouses: LabelValue<string>[];

  public pnCode: string | undefined;

  public snVisibility: boolean;
  public bnVisibility: boolean;

  public localCurrency?: string;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly orderDocumentFormService: OrderDocumentFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogMaterialAndServicesComponent');

    this.init();
    this.getLocalCurrency();
  }

  public ngOnInit() {
    if (!this.obj) {
      this.obj = {
        price: 0,
        quantity: 0,
        productionLeadTime: 0,
        discountPercent: 0,
        bidtStockMvtDTO: {}
      };
      this.pnCode = undefined;
    } else {
      this.pnCode = !!this.obj.bidtStockMvtDTO ? this.obj.bidtStockMvtDTO.birePnPnCode : undefined;
      if (!!this.pnCode) {
        this.setSnBnVisibility(this.pnCode);
        this.loadWarehouses();
      }
    }
  }

  private init(): void {
    this.byQuotation = undefined;
    this.showQuickSearchMaterialPopup = false;
    this.warehouses = [];
    this.onCreate = new EventEmitter<MaterialAndServicesOutput>();
    this.onUpdate = new EventEmitter<MaterialAndServicesOutput>();
    this.snVisibility = false;
    this.bnVisibility = false;
    this.localCurrency = undefined;
  }

  public openMaterialDialog() {
    if (this.newObj) {
      this.showQuickSearchMaterialPopup = true;
    }
  }

  public setSelectedMaterial(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.obj.pnText = selectedObject.pnCode;
      this.obj.materialName = selectedObject.articleDesignation;
      this.pnCode = selectedObject.pnCode;
      if (!!this.obj.bidtStockMvtDTO) {
        this.obj.bidtStockMvtDTO.birePnPnCode = selectedObject.pnCode;
      }
      if (!!this.pnCode) {
        this.setSnBnVisibility(this.pnCode);
      }
      this.loadWarehouses();
    }
    this.showQuickSearchMaterialPopup = false;
  }

  private loadWarehouses(): void {
    if (!!this.pnCode) {
      this.orderDocumentFormService.displayWarehouse(this.pnCode).subscribe((results) => {
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
    this.orderDocumentFormService.findBirePn(input).subscribe((result) => {
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
        numberOfDays: this.obj.productionLeadTime === 0 ? undefined : this.obj.productionLeadTime,
        id: this.obj.id
      };
      if (!!this.obj.quantity) {
        this.obj.bidtStockMvtDTO.stockMvtQuantity = `${this.obj.quantity}`;
      }
      if (!!this.obj.price) {
        this.obj.bidtStockMvtDTO.priceValue = `${this.obj.price}`;
      }
      if (!!this.obj.warehouse) {
        const radix = 10;
        this.obj.bidtStockMvtDTO.bidtWarehouseId = Number.parseInt(this.obj.warehouse, radix);
        this.obj.warehouse = this.warehouses.filter((ware) => ware.value === this.obj.warehouse)[0].label;
      }
      if (!!this.obj.discountPercent) {
        this.obj.bidtStockMvtDTO.discountPercentValue = `${this.obj.discountPercent}`;
      }
      if (!!this.obj.byQuotation) {
        this.obj.bidtStockMvtDTO.byQuotation = this.obj.byQuotation ? 1 : 0;
      }
      if (this.obj.bidtStockMvtDTO.id === null || this.obj.bidtStockMvtDTO.id === undefined) {
        this.obj.bidtStockMvtDTO.id = Math.random();
      }
      this.obj.currency = this.localCurrency;
      this.obj.totalPrice = 0;
      this.obj.discountValue = 0;
      this.obj.priceAfterDiscount = 0;
      this.obj.productionLeadTime = this.obj.productionLeadTime === 0 ? undefined : this.obj.productionLeadTime;
    }
  }

  private getLocalCurrency(): void {
    this.orderDocumentFormService.getLocalCurrency().subscribe((res) => {
      this.localCurrency = res;
    });
  }
}
