import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { InventoryByWarehouseStockListOutputDTO } from '../../../../../../shared/types/api-output-types/inventory-by-warehouse/inventory-by-warehouse-stock-list-output-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';
import { DialogStockDataService } from '../dialog-stock-data.service';

interface DataInput {
  value ?: number;
  type ? : string ;
}
@Component({
  selector: 'aw-dialog-stock-data',
  templateUrl: './dialog-stock-data.component.html'
})
export class DialogStockDataComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public stockData: InventoryByWarehouseStockListOutputDTO;
  @Output()
  public onValidated: EventEmitter<InventoryByWarehouseStockListOutputDTO>;
  public stockValuationlList: LabelValue<string>[];
  public dataInput : DataInput;
  public priceCurrency: string;
  public constructor(
    public sessionService: SessionService,
    public messageService: MessageService,
    private readonly dialogStockDataService: DialogStockDataService
  ) {
    super(ComponentOpenMode.Read, 'DialogStockDataComponent');
    this.priceCurrency = '';
    this.loadCurrency();
    this.stockValuationlList = [];
    this.dataInput = {
      value: 0
    };
    this.onValidated = new EventEmitter<InventoryByWarehouseStockListOutputDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.getStockValuationGroup();
    if (!this.stockData) {
      this.resetStockData();
    } else {
      if (!!this.stockData.averageValue) {
        this.dataInput.value = Number(this.stockData.bsdeStorePnDTO.cost);
     }
    }

  }
  public loadCurrency() {
    this.dialogStockDataService.getLocalCurrency().subscribe((result) => {
      this.priceCurrency = result;
    });
  }

  public resetStockData(): void {
    const date = new Date();
    this.stockData = {
      bsdeStorePnDTO: {
        stockNumber: 0,
        availabilityDate : date
      },
    };
  }

  public getStockValuationGroup() {
      this.dialogStockDataService.getStockValuationList().subscribe((results: LabelValue<string>[]) => {
        if (results) {
          this.stockValuationlList = results;
        }
      });
  }

  public checkDisable(): boolean {
    if (this.stockData.bsdeStorePnDTO.stockNumber === null  || !this.stockData.bsdeStorePnDTO.stockType ||
       !this.stockData.bsdeStorePnDTO.availabilityDate || this.dataInput.value === null ) {
        return true;
    } else {
      return false;
    }
  }

  public validate(): void {
    LabelValueUtils.labelToStringValue<DataInput>(this.dataInput, 'type', this.stockValuationlList);
    this.stockData.averageValue = String(this.dataInput.value);
    this.stockData.bsdeStorePnDTO.cost = String(this.dataInput.value);
    this.onValidated.emit(this.stockData);
    this.closeDialog();
  }
}
