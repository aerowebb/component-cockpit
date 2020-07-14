import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStorageBinTypeConstant } from '../../../../shared/constants/bidt-storage-bin-type-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { StockMvtParameters } from '../../stock-movements/stock-movement-parameters.interface';
import { StockViewFormService } from '../form/stock-view-form.service';

interface DropDownObject extends LabelValue<number> {
  number: number;
  _zone: BidtStorageBinDTO;
}

@Component({
  selector: 'aw-dialog-select-location',
  templateUrl: './dialog-select-location-stock.component.html',
  styleUrls: ['./dialog-select-location-stock.component.scss']
})
export class DialogSelectLocationStockComponent extends DialogComponent implements OnInit {
  @Input()
  public rows: StockInformationDTO[];

  @Input() public withAlternatives: boolean;

  @Input() public equipmentStatuses: LabelValue<string>[];

  @Output()
  public onChangeLocation: EventEmitter<StockMvtParameters>;

  public storageZoneList: DropDownObject[];
  public selectedZone: number;

  public storageBinList: DropDownObject[];
  public selectedBin: number;

  public isZoneHaveBins: boolean;

  public constructor(private readonly stockViewFormService: StockViewFormService) {
    super(ComponentOpenMode.Write, 'DialogSelectLocationStockComponent');
    this.onChangeLocation = new EventEmitter<StockMvtParameters>();
    this.init();
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
    if (this.rows[0].warehouseId) {
      this.stockViewFormService.findBidtWarehouseById(Number(this.rows[0].warehouseId)).subscribe((warehouse) => {
        if (warehouse.bidtStorageBinDTOs) {
          warehouse.bidtStorageBinDTOs
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
      });
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
    const stockMvtDTOList: BidtStockMvtDTO[] = [];
    this.rows.forEach((stockInformation) => {
      const stockMvtDTO: BidtStockMvtDTO = {
        birePnPnCode: stockInformation.pn,
        stockMvtSn: stockInformation.stockSn,
        stockMvtBatchNumber: stockInformation.stockBatchNumber,
        stockMvtQuantity: stockInformation.stockQuantity,
        bidtSiteByBidtSiteIssueId: Number(stockInformation.siteId),
        bidtWarehouseByBidtWarehouseIssueId: Number(stockInformation.warehouseId),
        bidtStorageBinByBidtSbZoneIssueId: stockInformation.areaId ? Number(stockInformation.areaId) : undefined,
        bidtStorageBinByBidtSbBinIssueId: stockInformation.storageBinId
          ? Number(stockInformation.storageBinId)
          : undefined,
        bidtSiteByBidtSiteReceiptId: Number(stockInformation.siteId),
        bidtWarehouseByBidtWarehouseReceiptId: Number(stockInformation.warehouseId),
        bidtStorageBinByBidtSbZoneReceiptId: this.selectedZone,
        bidtStorageBinByBidtSbBinReceiptId: this.selectedBin
      };
      stockMvtDTOList.push(stockMvtDTO);
    });
    this.stockViewFormService.mmfCreateStockMvtLocationChange(stockMvtDTOList).subscribe((updateList) => {
      const mvtStatus: string[] = [];
      let mvtStatusExcluded: string[] = [];

      mvtStatusExcluded = [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ];

      const searchCriteria: FindStockMvtsByCriteriaInput = {
        mvtStatus,
        mvtStatusExcluded,
        untilPlannedDate: new Date(),
        stockMvt: {
          bidtSiteByBidtSiteIssueId: updateList[0].bidtSiteByBidtSiteIssueId,
          bidtSiteByBidtSiteReceiptId: updateList[0].bidtSiteByBidtSiteReceiptId,
          bidtWarehouseByBidtWarehouseIssueId: updateList[0].bidtWarehouseByBidtWarehouseIssueId,
          bidtWarehouseByBidtWarehouseReceiptId: updateList[0].bidtWarehouseByBidtWarehouseReceiptId,
          bidtStockMvtTypeId: updateList[0].bidtStockMvtTypeId,
          stockMvtSn: updateList[0].stockMvtSn,
          stockMvtBatchNumber: updateList[0].stockMvtBatchNumber
        },
        pnCode: updateList[0].birePnPnCode,
        withAlternatives: false,
        dfShipmentSearch: false
      };

      const params: StockMvtParameters = {
        searchParameters: searchCriteria,
        bidtStockList: updateList
      };

      this.onChangeLocation.emit(params);
      this.closeDialog();
    });
  }
}
