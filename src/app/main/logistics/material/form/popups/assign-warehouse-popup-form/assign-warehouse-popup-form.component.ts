import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { WareHouseTableDTO } from '../../../../../../shared/types/api-input-types/logistics-material/warehouse-table-dto.interface';
import { BidtSiteDTO } from '../../../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStorageBinDTO } from '../../../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { MaterialFormService } from '../../material-form.service';

interface StorageBinChk {
  label: string;
  bidtStorageBinDTO: BidtStorageBinDTO;
  value: boolean;
}

@Component({
  selector: 'aw-assign-warehouse-popup-form',
  templateUrl: './assign-warehouse-popup-form.component.html',
  styleUrls: ['../popup-form.component.scss']
})
export class AssignWarehousePopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public warehouseDetail: WareHouseTableDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Output()
  public onValidated: EventEmitter<WareHouseTableDTO>;
  public isEditable: boolean;
  public sites: SelectItem[];
  public warehouse: SelectItem[];
  public thersholdLower: Number | undefined;
  public siteId: string | undefined;
  public wareHouseId: string | undefined;
  public storageBinForWarehouse: StorageBinChk[];

  public constructor(
    public inputValidationService: InputValidationService,
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    public materialFormService: MaterialFormService
  ) {
    super(ComponentOpenMode.Read, 'AssignWarehousePopupFormComponent');
    this.onValidated = new EventEmitter<WareHouseTableDTO>();
    this.displayChange = new EventEmitter<boolean>();

    this.storageBinForWarehouse = [];
    this.loadSites();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    if (!this.warehouseDetail) {
      this.warehouseDetail = {};
    } else {
      this.siteId = this.warehouseDetail.bidtSiteId ? this.warehouseDetail.bidtSiteId.toString() : undefined;
      this.wareHouseId = this.warehouseDetail.wareHouseId ? this.warehouseDetail.wareHouseId.toString() : undefined;
    }
  }

  public getTypeName(): string {
    return 'AssignWarehousePopupFormComponent';
  }

  public validate(): void {
    if (this.warehouseDetail) {
      this.sites.forEach((res) => {
        if (!!this.warehouseDetail && this.siteId === res.value) {
          this.warehouseDetail.siteName = res.label;
        }
      });
      this.warehouse.forEach((res) => {
        if (!!this.warehouseDetail && this.wareHouseId === res.value) {
          this.warehouseDetail.wHName = res.label;
        }
      });
      this.warehouseDetail.bidtSiteId = this.siteId ? parseInt(this.siteId, 10) : undefined;
      this.warehouseDetail.wareHouseId = this.wareHouseId ? parseInt(this.wareHouseId, 10) : undefined;
      const lowThreshold = this.warehouseDetail.whPrLowThreshold;
      const highThreshold = this.warehouseDetail.whPrHighThreshold;
      if (lowThreshold && highThreshold && Number(lowThreshold) > Number(highThreshold)) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnThresholdValues'));
      } else {
        const bins: BidtStorageBinDTO[] = [];
        this.storageBinForWarehouse.forEach((res) => {
          if (res.value) {
            bins.push(res.bidtStorageBinDTO);
          }
        });
        this.warehouseDetail.bidtStorageBinDTOList = bins;
        this.onValidated.emit(this.warehouseDetail);
      }
    }
    this.cancel();
  }

  public cancel(): void {
    this.display = false;
  }

  public loadSites(): void {
    this.materialFormService.findAllSites().subscribe((result) => {
      const labelValue: LabelValue<String>[] = [];
      result.forEach((res: BidtSiteDTO) => {
        if (!!res && !!res.siteId) {
          labelValue.push({
            label: `${res.siteCode}-${res.siteName}`,
            value: res.siteId.toString()
          });
        }
      });
      this.sites = labelValue;
      this.loadWarehouse();
    });
  }

  public loadWarehouse(): void {
    if (!!this.warehouseDetail && !!this.siteId) {
      const siteId = this.siteId;
      this.materialFormService.findWarehouseBySite(siteId).subscribe((result) => {
        const labelValue: LabelValue<String>[] = [];
        result.forEach((res: BidtWarehouseDTO) => {
          if (!!res && !!res.wareHouseId) {
            labelValue.push({
              label: `${res.whCode}-${res.whName}`,
              value: res.wareHouseId.toString()
            });
          }
        });
        this.warehouse = labelValue;
        this.loadStorageBins();
      });
    } else if (!!this.warehouseDetail && this.siteId === null) {
      this.warehouse = [];
      this.wareHouseId = undefined;
    }
  }

  public isScreenValid() {
    if (this.warehouseDetail && this.siteId && this.wareHouseId) {
      return true;
    }

    return false;
  }

  public loadStorageBins() {
    if (!!this.wareHouseId) {
      this.storageBinForWarehouse = [];
      this.materialFormService.findByWarehouseId(parseInt(this.wareHouseId, 10)).subscribe((result) => {
        if (!!result && !!result.list && result.list.length > 0) {
          result.list.forEach((res) => {
            if (!!res.sbNumber) {
              this.storageBinForWarehouse.push({
                label: res.sbNumber,
                bidtStorageBinDTO: res,
                value: false
              });
            }
          });
        }

        if (this.openMode === ComponentOpenMode.Write) {
          if (!!this.warehouseDetail.bidtStorageBinDTOList && this.warehouseDetail.bidtStorageBinDTOList.length > 0) {
            this.renderBin(this.warehouseDetail);
          }
        }
      });
    } else {
      this.storageBinForWarehouse = [];
    }
  }

  private renderBin(warehouse: WareHouseTableDTO) {
    (warehouse.bidtStorageBinDTOList as BidtStorageBinDTO[]).forEach((res) => {
      if (!!res.sbNumber) {
        this.storageBinForWarehouse.forEach((r) => {
          if (r.bidtStorageBinDTO.id === res.id) {
            r.value = true;
          }
        });
      }
    });
  }
}
