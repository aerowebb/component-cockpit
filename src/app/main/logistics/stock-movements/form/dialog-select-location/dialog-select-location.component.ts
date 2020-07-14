import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BidtStorageBinTypeConstant } from '../../../../../shared/constants/bidt-storage-bin-type-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BidtStockMvtDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStorageBinDTO } from '../../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { FormService } from '../form.service';

interface DropDownObject extends LabelValue<number> {
  number: number;
  _zone: BidtStorageBinDTO;
}

export interface ValidateAndExecOutput {
  bidtStorageList: BidtStorageBinDTO[];
  isBoth: boolean;
}

@Component({
  selector: 'aw-dialog-select-location',
  templateUrl: './dialog-select-location.component.html',
  styleUrls: ['./dialog-select-location.component.scss']
})
export class DialogSelectLocationComponent extends DialogComponent implements OnInit {
  @Input()
  public warehouse: BidtWarehouseDTO;
  @Input()
  public rows: BidtStockMvtDTO[];
  @Output()
  public onChangeLocation: EventEmitter<BidtStorageBinDTO[]>;
  @Output()
  public onChangeAndExecLocation: EventEmitter<ValidateAndExecOutput>;

  public storageZoneList: DropDownObject[];
  public selectedZone: number;

  public storageBinList: DropDownObject[];
  public selectedBin: number;

  public isZoneHaveBins: boolean;

  public constructor(private readonly stockMovementsFormService: FormService) {
    super(ComponentOpenMode.Write, 'DialogSelectLocationComponent');
    this.onChangeLocation = new EventEmitter<BidtStorageBinDTO[]>();
    this.onChangeAndExecLocation = new EventEmitter<ValidateAndExecOutput>();
    this.init();
  }

  public getComponentName(): string {
    return 'DialogSelectLocationComponent';
  }

  private init(): void {
    this.storageZoneList = [];
    this.storageBinList = [];
    this.isZoneHaveBins = false;
  }

  public ngOnInit(): void {
    this.loadZoneDropDown();
  }

  private loadZoneDropDown(): void {
    if (this.warehouse.bidtStorageBinDTOs) {
      this.warehouse.bidtStorageBinDTOs
        .filter((storage) => storage.bidtStorageBinTypeId === BidtStorageBinTypeConstant.SERVICEABLE)
        .forEach((storageBin) => {
          const row: DropDownObject = {
            label: storageBin.sbDescription
              ? `${storageBin.sbNumber} - ${storageBin.sbDescription}`
              : `${storageBin.sbNumber}`,
            value: storageBin.id as number,
            number: Number(storageBin.sbNumber),
            _zone: storageBin
          };
          this.storageZoneList.push(row);
        });
      this.storageZoneList.sort((a, b) => a.number - b.number);
    }
  }

  public loadBinDropDown(): void {
    this.isZoneHaveBins = false;
    this.storageBinList = [];
    const storageZone = this.storageZoneList.filter((storage) => storage.value === this.selectedZone)[0]._zone;
    if (storageZone.bins) {
      storageZone.bins.forEach((storageBin) => {
        const row: DropDownObject = {
          label: storageBin.sbDescription
            ? `${storageBin.sbNumber} - ${storageBin.sbDescription}`
            : `${storageBin.sbNumber}`,
          value: storageBin.id as number,
          number: Number(storageBin.sbNumber),
          _zone: storageBin
        };
        this.storageBinList.push(row);
      });
      this.storageBinList.sort((a, b) => a.number - b.number);
      this.isZoneHaveBins = true;
    }
  }

  public validate() {
    this.rows.forEach((row) => {
      if (row) {
        row.bidtStorageBinByBidtSbZoneReceiptId = this.selectedZone;
        row.bidtStorageBinByBidtSbBinReceiptId = this.selectedBin;
      }
    });
    this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe((updateList) => {
      const changes: BidtStorageBinDTO[] = [
        this.storageZoneList.filter((storage) => storage.value === this.selectedZone)[0]._zone,
        this.storageBinList.filter((storage) => storage.value === this.selectedBin)[0]._zone
      ];
      this.onChangeLocation.emit(changes);
      this.closeDialog();
    });
  }

  public validateAndExec() {
    this.rows.forEach((row) => {
      if (row) {
        row.bidtStorageBinByBidtSbZoneReceiptId = this.selectedZone;
        if (this.selectedBin) {
          row.bidtStorageBinByBidtSbBinReceiptId = this.selectedBin;
        }
      }
    });
    if (this.selectedBin) {
      this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe((updateList) => {
        const changes: BidtStorageBinDTO[] = [
          this.storageZoneList.filter((storage) => storage.value === this.selectedZone)[0]._zone,
          this.storageBinList.filter((storage) => storage.value === this.selectedBin)[0]._zone
        ];
        const output: ValidateAndExecOutput = {
          bidtStorageList: changes,
          isBoth: true
        };
        this.onChangeAndExecLocation.emit(output);
        this.closeDialog();
      });
    } else {
      this.stockMovementsFormService.addOrUpdateMvts(this.rows).subscribe((updateList) => {
        const changes: BidtStorageBinDTO[] = [
          this.storageZoneList.filter((storage) => storage.value === this.selectedZone)[0]._zone
        ];
        const output: ValidateAndExecOutput = {
          bidtStorageList: changes,
          isBoth: false
        };
        this.onChangeAndExecLocation.emit(output);
        this.closeDialog();
      });
    }
  }
}
