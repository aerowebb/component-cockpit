import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { SessionService } from '../../services/session.service';
import { CreateStockMovementInput } from '../../types/api-input-types/bidt-stock-mvt/create-stock-movement-input.interface';
import { BidoEquipmentDTO } from '../../types/api-types/bido-equipment-dto.interface';
import { BidtStockTypeDTO } from '../../types/api-types/bidt-stock-type-dto.interface';
import { BidtStorageBinDTO } from '../../types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../types/api-types/bidt-warehouse-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogCreateStockReceiptService } from './dialog-create-stock-receipt.service';

enum MVT_TYPE {
  RECEIPT = 1,
  ISSUE = 2,
  TRANSFERT = 3
}
@Component({
  selector: 'aw-dialog-create-stock-receipt',
  templateUrl: 'dialog-create-stock-receipt.component.html',
  styleUrls: ['./dialog-create-stock-receipt.component.scss']
})
export class DialogCreateStockReceiptComponent extends DialogComponent implements OnInit {
  @Input() public equipment: BidoEquipmentDTO;

  @Output()
  public onValidated = new EventEmitter<void>();

  public bidtWarehouseDTOs: BidtWarehouseDTO[];

  public movementTypeList: SelectItem[];
  public movementType: number;
  public warehouses: SelectItem[];
  public storageBinsIn: SelectItem[];
  public storageBinsOut: SelectItem[];
  public stockTypes: SelectItem[];
  public movementDate: Date;

  public warehouseIdIn: number | undefined;
  public storageBinIdIn: number | undefined;
  public stockTypeIdIn: number | undefined;

  public warehouseIdOut: number | undefined;
  public storageBinIdOut: number | undefined;
  public stockTypeIdOut: number | undefined;

  public constructor(
    private readonly dialogCreateStockReceiptService: DialogCreateStockReceiptService,
    private readonly messageService: MessageService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, 'DialogCreateStockReceiptComponent');
  }

  public ngOnInit(): void {
    this.initData();
    this.init();
  }

  // init screen
  private init(): void {
    this.movementTypeList = [
      { value: MVT_TYPE.RECEIPT, label: 'Receipt' },
      { value: MVT_TYPE.ISSUE, label: 'Issue' },
      { value: MVT_TYPE.TRANSFERT, label: 'Transfer' }
    ];
    this.getWareHouseList();
    // this.getStorageBinList();
    this.getStockTypeList();
  }

  // init data
  private initData(): void {
    this.movementTypeList = [];
    this.movementType = MVT_TYPE.RECEIPT;
    this.warehouses = [];
    this.storageBinsIn = [];
    this.storageBinsOut = [];
    this.stockTypes = [];
    this.movementDate = new Date();

    this.warehouseIdIn = undefined;
    this.storageBinIdIn = undefined;
    this.stockTypeIdIn = undefined;
    this.warehouseIdOut = undefined;
    this.storageBinIdOut = undefined;
    this.stockTypeIdOut = undefined;
  }

  // get data from server
  private getStockTypeList(): void {
    this.dialogCreateStockReceiptService.findAllStockTypeList().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      result.forEach((res: BidtStockTypeDTO) => {
        if (!!res && !!res.id) {
          labelValue.push({
            label: `${res.stockTypeCode} - ${res.stockTypeDescription}`,
            value: res.id
          });
        }
      });
      this.stockTypes = labelValue;
    });
  }

  // get data from server
  private getWareHouseList(): void {
    if (this.equipment.pnCode) {
      this.dialogCreateStockReceiptService.findAllWarehouseByProduct(this.equipment.pnCode).subscribe((results) => {
        this.bidtWarehouseDTOs = results;
        this.warehouses = ListUtils.orEmpty(results)
          .filter((warehouse) => !!warehouse.whCode)
          .map((warehouse: BidtWarehouseDTO) => {
            return {
              label: StringUtils.isNullOrEmpty(warehouse.whName)
                ? warehouse.whCode
                : `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId
            };
          });
      });
    }
  }

  // load data on screen
  private loadStorageBinListIn(results: BidtStorageBinDTO[]): void {
    const labelValue: LabelValue<number>[] = [];
    if (results.length > 0) {
      results.forEach((res: BidtStorageBinDTO) => {
        if (!!res && !!res.id) {
          labelValue.push({
            label: `${res.sbNumber}`,
            value: res.id
          });
        }
      });
    }
    this.storageBinsIn = labelValue;
  }

  // load data on screen
  private loadStorageBinListOut(results: BidtStorageBinDTO[]): void {
    const labelValue: LabelValue<number>[] = [];
    if (results.length > 0) {
      results.forEach((res: BidtStorageBinDTO) => {
        if (!!res && !!res.id) {
          labelValue.push({
            label: `${res.sbNumber}`,
            value: res.id
          });
        }
      });
    }
    this.storageBinsOut = labelValue;
  }

  // util method
  public isReceipt(): boolean {
    return this.movementType === MVT_TYPE.RECEIPT;
  }

  // util method
  public isIssue(): boolean {
    return this.movementType === MVT_TYPE.ISSUE;
  }

  // util method
  public isTransfert(): boolean {
    return this.movementType === MVT_TYPE.TRANSFERT;
  }

  // success
  private success(): void {
    this.messageService.showSuccessMessage('DialogCreateStockReceiptComponent.saveOk');
    super.closeDialog();
    this.onValidated.emit();
  }

  // error
  private error(): void {
    this.messageService.showErrorMessage('DialogCreateStockReceiptComponent.saveKo');
  }

  // manage events

  public onChangeWarehouseIn(): void {
    if (this.warehouseIdIn) {
      this.dialogCreateStockReceiptService
        .findBinStorageByWarehouseId(this.warehouseIdIn)
        .subscribe((result: BidtStorageBinDTO[]) => {
          this.loadStorageBinListIn(result);
        });
    }
  }

  public onChangeWarehouseOut(): void {
    if (this.warehouseIdOut) {
      this.dialogCreateStockReceiptService
        .findBinStorageByWarehouseId(this.warehouseIdOut)
        .subscribe((result: BidtStorageBinDTO[]) => {
          this.loadStorageBinListOut(result);
        });
    }
  }

  public onClickValidate(): void {
    if (this.isReceipt()) {
      const param: CreateStockMovementInput = {
        warehouseId: this.warehouseIdIn,
        storageBinId: this.storageBinIdIn,
        stockTypeId: this.stockTypeIdIn,
        quantity: 1,
        assetPn: this.equipment.pnCode,
        assetSn: this.equipment.sn,
        mvtDate: this.movementDate
      };
      this.dialogCreateStockReceiptService.createStockReceipt(param).subscribe(
        () => {
          this.success();
        },
        () => {
          this.error();
        }
      );
    } else if (this.isIssue()) {
      const param: CreateStockMovementInput = {
        warehouseId: this.warehouseIdOut,
        storageBinId: this.storageBinIdOut,
        stockTypeId: this.stockTypeIdOut,
        quantity: 1,
        assetPn: this.equipment.pnCode,
        assetSn: this.equipment.sn,
        mvtDate: this.movementDate
      };
      this.dialogCreateStockReceiptService.createStockIssue(param).subscribe(
        () => {
          this.success();
        },
        () => {
          this.error();
        }
      );
    } else if (this.isTransfert()) {
      const paramIn: CreateStockMovementInput = {
        warehouseId: this.warehouseIdIn,
        storageBinId: this.storageBinIdIn,
        stockTypeId: this.stockTypeIdIn,
        quantity: 1,
        assetPn: this.equipment.pnCode,
        assetSn: this.equipment.sn,
        mvtDate: this.movementDate
      };
      const paramOut: CreateStockMovementInput = {
        warehouseId: this.warehouseIdOut,
        storageBinId: this.storageBinIdOut,
        stockTypeId: this.stockTypeIdOut,
        quantity: 1,
        assetPn: this.equipment.pnCode,
        assetSn: this.equipment.sn,
        mvtDate: this.movementDate
      };
      const param: CreateStockMovementInput[] = [paramOut, paramIn];
      this.dialogCreateStockReceiptService.createStockTransfert(param).subscribe(
        () => {
          this.success();
        },
        () => {
          this.error();
        }
      );
    }
  }

  public onClickCancel(): void {
    super.closeDialog();
  }

  // manage visibility

  public showReceipt(): boolean {
    return this.isReceipt() || this.isTransfert();
  }

  public showIssue(): boolean {
    return this.isIssue() || this.isTransfert();
  }

  public checkMandatory(): boolean {
    if (this.isIssue()) {
      return !(
        !!this.movementDate &&
        this.warehouseIdOut !== undefined &&
        this.warehouseIdOut !== null &&
        this.stockTypeIdOut !== undefined &&
        this.stockTypeIdOut !== null
      );
    } else if (this.isReceipt()) {
      return !(
        !!this.movementDate &&
        this.warehouseIdIn !== undefined &&
        this.warehouseIdIn !== null &&
        this.stockTypeIdIn !== undefined &&
        this.stockTypeIdIn !== null
      );
    } else {
      return !(
        !!this.movementDate &&
        this.warehouseIdOut !== undefined &&
        this.warehouseIdOut !== null &&
        this.stockTypeIdOut !== undefined &&
        this.stockTypeIdOut !== null &&
        this.warehouseIdIn !== undefined &&
        this.warehouseIdIn !== null &&
        this.stockTypeIdIn !== undefined &&
        this.stockTypeIdIn !== null
      );
    }

    return false;
  }
}
