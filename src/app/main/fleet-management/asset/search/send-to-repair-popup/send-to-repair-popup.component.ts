import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtProductCustomerDTO } from '../../../../../shared/types/api-types/bidt-product-customer-dto.interface';
import { BidtWarehouseDTO } from '../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { SendToRepairDTO } from '../../../../../shared/types/api-types/send-to-repair-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { AssetSearchService } from '../asset-search.service';

@Component({
  selector: 'aw-send-to-repair-popup',
  templateUrl: './send-to-repair-popup.component.html',
  styleUrls: ['./send-to-repair-popup.component.scss']
})
export class SendToRepairPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public siteList: SelectItem[];
  @Input()
  public partnerList: BidtProductCustomerDTO[];
  @Input()
  public pnCode: string;
  @Input()
  public sn: string;

  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public sendToRepairDTO: SendToRepairDTO = {};
  public supplierWarehouses: LabelValue<number>[];
  public supplierConditioningWarehouses: LabelValue<number>[];
  public shippingDate: Date;

  public repairingZoneList: SelectItem[];

  public selectedRepairingZone: string;
  public isInternDropdownsDisplaying: boolean;
  public isConditioningNeeded: boolean;

  public refinedPartnerList: SelectItem[];
  private partNumberTypeByPnCode: string;
  public proximityWarehouse: BidtWarehouseDTO;
  public availableWorkshops: BidtWarehouseDTO[];
  public warehouseFound: BidtWarehouseDTO;

  @Output()
  private readonly onValidate: EventEmitter<SendToRepairDTO>;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly assetSearchService: AssetSearchService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'SendToRepairPopupComponent');

    this.onValidate = new EventEmitter<SendToRepairDTO>();
    this.awPropertiesConstants = AWPropertiesConstants;

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return 'SendToRepairPopupComponent';
  }

  public displayDropdowns() {
    if (this.selectedRepairingZone === this.repairingZoneList[0].value) {
      this.isInternDropdownsDisplaying = true;
    } else {
      this.isInternDropdownsDisplaying = false;
    }
  }

  public validate() {
    this.sendToRepairDTO.shippingDate = this.shippingDate;
    this.sendToRepairDTO.pnCode = this.sendToRepairDTO.stockInformation
      ? this.sendToRepairDTO.stockInformation.pn
      : undefined;
    this.sendToRepairDTO.sn = this.sn;
    this.onValidate.emit(this.sendToRepairDTO as SendToRepairDTO);
    this.closeDialog();
  }

  // ////////////////////////////////////////////////////////////////////////////

  private init(): void {
    // TODO Interne/Externe Internal/External mapping
    this.repairingZoneList = [
      { value: 'Internal', label: `${this.translateService.instant('SendToRepairPopupComponent.internal')}` },
      { value: 'External', label: `${this.translateService.instant('SendToRepairPopupComponent.external')}` }
    ];

    this.refinedPartnerList = [];
    if (!!this.repairingZoneList[0].value) {
      this.selectedRepairingZone = this.repairingZoneList[0].value;
    }
    this.isInternDropdownsDisplaying = true;
    this.isConditioningNeeded = false;
  }

  public ngOnInit(): void {
    this.findWarehouse();
    this.assetSearchService.findCustomersByProduct(this.pnCode).subscribe((results) => {
      this.partnerList = results;
      this.partnerList.forEach((partner) => {
        if (
          !!partner.bidoCustomerCustomerCode &&
          partner.serviceType === AWPropertiesConstants.MM_SERVICE_TYPE_REPAIRER_KEY
        ) {
          this.refinedPartnerList.push({
            label: `${partner.bidoCustomerCustomerCode} - ${partner.bidoCustomerName}`,
            value: partner.bidoCustomerCustomerCode
          });
        }
      });
    });

    // TODO id=3 represent 'Return from TIL3' hardcoded for now
    const id = 53;
    const input: BirePnDTOId = {
      pnCode: this.pnCode
    };

    this.assetSearchService.findShipmentDfTypeById(id).subscribe((results) => {
      // We get pnTypes with the PnTypeMap

      this.assetSearchService.findBirePn(input).subscribe((result) => {
        if (results && results.bidtDfTypeOperations) {
          results.bidtDfTypeOperations.forEach((res) => {
            if (res.dftopeKey === AWPropertiesConstants.LOGISTICAL_OPERATION_BOX_PACKAGING) {
              if (result && !!result.pnType) {
                this.partNumberTypeByPnCode = result.pnType;
                this.sendToRepairDTO.taskTypeCode = res.taskTypeCode;
                // We compare the previous map with pnTypes in Operations to see if conditionning is needed
                if (!!res.pnTypes) {
                  res.pnTypes.forEach((pn) => {
                    if (pn === this.partNumberTypeByPnCode) {
                      this.isConditioningNeeded = true;
                    }
                  });
                } else {
                  this.isConditioningNeeded = true;
                }
              }
            }
          });
        }
      });
    });
    // Stock info
    const stockInfoByEquipmentDTO: BidoEquipmentDTO = {
      sn: this.sn,
      pnCode: this.pnCode
    };

    this.assetSearchService.getStockInformationByAsset(stockInfoByEquipmentDTO).subscribe((results) => {
      if (!!results && !!results.siteId) {
        this.sendToRepairDTO.stockInformation = results;
        this.sendToRepairDTO.siteSender = Number(results.siteId);
        this.sendToRepairDTO.siteReceiver = Number(results.siteId);
        this.loadSupplierConditioningWarehouses();
        this.loadSupplierWarehouses();
      }
    });
  }

  public loadSupplierWarehouses(): void {
    this.sendToRepairDTO.warehouseReceiver = undefined;
    this.supplierWarehouses = [];

    if (!!this.sendToRepairDTO.siteSender) {
      this.loadWareHouses(
        this.sendToRepairDTO.siteSender,
        this.awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
      ).subscribe({
        next: (warehouses) => {
          this.supplierWarehouses = warehouses;
        }
      });
    }
  }

  public loadSupplierConditioningWarehouses(): void {
    this.sendToRepairDTO.conditioningWorkshopId = undefined;
    this.supplierConditioningWarehouses = [];

    if (!!this.sendToRepairDTO.siteSender) {
      this.loadWareHouses(
        this.sendToRepairDTO.siteSender,
        this.awPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
      ).subscribe({
        next: (warehouses) => {
          this.supplierConditioningWarehouses = warehouses;
        }
      });
    }
  }

  private findWarehouse(): void {
    if (!!this.sendToRepairDTO.warehouseSender) {
      this.assetSearchService.findBidtWarehouseById(this.sendToRepairDTO.warehouseSender).subscribe((result) => {
        this.warehouseFound = result;
      });
    }
  }

  // TODO use availableWorkshops directly
  private loadWareHouses(siteId: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.assetSearchService.getWarehousesBySiteId(siteId).pipe(
      map((warehouses: BidtWarehouseDTO[]) => {
        this.availableWorkshops = warehouses.filter((warehouse) => warehouseCategory === warehouse.whCategory);
        this.setConditioningWorkshopValue(
          warehouses.filter(
            (warehouse) => this.awPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE === warehouse.whCategory
          )
        );

        return warehouses
          .filter((warehouse) => warehouseCategory === warehouse.whCategory)
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      })
    );
  }

  private setConditioningWorkshopValue(warehouseList: BidtWarehouseDTO[]): void {
    let count = 0;
    let wh;
    this.availableWorkshops.forEach((workshop) => {
      warehouseList.forEach((warehouse) => {
        if (workshop.bidtWarehouseId === warehouse.wareHouseId) {
          if (!!workshop.wareHouseId) {
            wh = workshop.wareHouseId;
          }
          count++;
        }
      });
    });
    if (count === 1) {
      this.sendToRepairDTO.conditioningWorkshopId = wh;
    }
  }

  public isValidateDisabled(): boolean {
    if (this.selectedRepairingZone === this.repairingZoneList[0].value) {
      return !this.shippingDate || !this.sendToRepairDTO.siteReceiver || !this.sendToRepairDTO.warehouseReceiver;
    } else {
      if (this.isConditioningNeeded) {
        return (
          !this.shippingDate ||
          !this.sendToRepairDTO.receiverCustomerCode ||
          !this.sendToRepairDTO.conditioningWorkshopId
        );
      } else {
        return !this.shippingDate || !this.sendToRepairDTO.receiverCustomerCode;
      }
    }
  }
}
