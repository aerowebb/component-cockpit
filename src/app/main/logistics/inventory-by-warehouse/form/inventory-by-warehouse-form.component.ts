import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { InventoryByWarehouseStockListInput } from '../../../../shared/types/api-input-types/inventory-by-warehouse/inventory-by-warehouse-stock-list-input-dto.interface';
import { SaveInventoryByWarehouseInput } from '../../../../shared/types/api-input-types/inventory-by-warehouse/save-inventory-by-warehouse-input.interface';
import { InventoryByWarehouseStockListOutputDTO } from '../../../../shared/types/api-output-types/inventory-by-warehouse/inventory-by-warehouse-stock-list-output-dto.interface';
import { BsdeStoreDTOId } from '../../../../shared/types/api-types/bsde-store-dto-id.interface';
import { BsdeStorePnDTOId } from '../../../../shared/types/api-types/bsde-store-pn-dto-id.interface';
import { BsdeStorePnDTO } from '../../../../shared/types/api-types/bsde-store-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { InventoryByWareHouseFormService } from './inventory-by-warehouse-form.service';

interface PnStoreInput {
  storeCode?: string;
  pnCode?: string;
  pnCodeSelect?: string;
  stockType?: string;
  stockNumber?: number;
  cost?: string;
  availabilityDate?: Date;
  isPnFree?: boolean;
}

interface StockDataRow {
  stockType?: string;
  stockNumber?: string;
  newStocknumber?: string;
  averageValue?: string;
  totalValue?: string;
  availabilityDate?: string;
  cost?: string;
  _obj?: InventoryByWarehouseStockListOutputDTO;
}

@Component({
  selector: 'aw-inventory-by-warehouse-form',
  templateUrl: './inventory-by-warehouse-form.component.html'
})
export class InventoryByWarehouseFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public materialList: LabelValue<string>[];
  public stockValuationlList: LabelValue<string>[];
  public saveInput: SaveInventoryByWarehouseInput;
  public resultsTableCols: TableColumn[];
  public showMateialPopup: boolean;
  public resultsTable: StockDataRow[];
  public selectedData: StockDataRow[];
  public showStockDataPopup: boolean;
  public pnStoreInput: PnStoreInput;
  public pnData: string | undefined;
  private currentIndex: number;
  public currentData: InventoryByWarehouseStockListOutputDTO | undefined;
  public dialogOpenMode: ComponentOpenMode;
  public stockListInput: InventoryByWarehouseStockListInput;
  public stockInputList: InventoryByWarehouseStockListOutputDTO[];
  public showStockList: boolean;
  public pnDTOIdInput: BsdeStorePnDTOId;
  public listData: BsdeStorePnDTO[];
  public showStockListinput: boolean;
  public priceCurrency: string;
  public resultDisplayedRowNb: number | undefined;
  public context: string;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly inventoryByWareHouseFormService: InventoryByWareHouseFormService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.resultsTableCols = [
      { field: 'stockType', alignment: 'left' },
      { field: 'stockNumber', alignment: 'left' },
      { field: 'averageValue', alignment: 'left' },
      { field: 'totalValue', alignment: 'left' },
      { field: 'availabilityDate', alignment: 'left' }
    ];
    this.currentIndex = -1;
    this.stockInputList = [];
    this.listData = [];
    this.priceCurrency = '';
  }
  public ngOnInit() {
    super.ngOnInit();
    this.updateOpenMode(this.componentData.openMode);

    this.context = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId).storeCode
      : 'tab.createMode';
    this.displayComponentContext(this.context, this.isCreateOpenMode);
    this.loadWareHouseStore();
    this.loadCurrency();
    this.loadMaterialList();
    this.materialList = [];
    this.resultsTable = [];
    this.selectedData = [];
    this.showMateialPopup = false;
    this.showStockDataPopup = false;
    this.showStockList = false;
    this.showStockListinput = false;
    this.pnStoreInput = {};
    this.pnData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Read;
    this.stockListInput = {};
    this.stockValuationlList = [];
    this.pnDTOIdInput = {
      stockType: '',
      pnCode: '',
      storeCode: ''
    };
    this.initObjects();
  }
  public getComponentName(): string {
    return ComponentConstants.LOG_INVENTORY_WAREHOUSE_FORM;
  }
  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public refresh(): void {
    this.ngOnInit();
  }
  public cancel(): void {
    if (this.isCreateOpenMode) {
      this.initObjects();
    } else {
      this.ngOnInit();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }
  public initObjects() {
    this.saveInput = {
      bsdeStoreDTO: {},
      bsdeStorePnDTOList: [],
      bsdeStorePnDTORemoveIdList: [],
      isUpdateBsdeStore: false
    };
  }

  public loadCurrency() {
    this.inventoryByWareHouseFormService.getLocalCurrency().subscribe((result) => {
      this.priceCurrency = result;
    });
  }

  public loadMaterialList() {
    if (!!this.componentData.objectId) {
      const warehouseStoreCode = this.serializationService.deserialize(this.componentData.objectId).storeCode;
      this.inventoryByWareHouseFormService.getMaterialList(warehouseStoreCode).subscribe((results) => {
        if (results) {
          this.materialList = results;
        }
      });
    }
  }

  public getStockValuationGroup() {
    this.inventoryByWareHouseFormService.getStockValuationList().subscribe((results: LabelValue<string>[]) => {
      if (results) {
        this.stockValuationlList = results;
      }
    });
  }

  public loadWareHouseStore() {
    if (!!this.componentData.objectId) {
      const storeCode = this.serializationService.deserialize(this.componentData.objectId).storeCode;
      this.inventoryByWareHouseFormService.findWareHousebyStore(storeCode).subscribe((results) => {
        this.saveInput.bsdeStoreDTO = results;
      });
    }
  }

  public openMaterialPopup() {
    if (StringUtils.isNullOrEmpty(this.pnStoreInput.pnCode)) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingPncode'));
    } else {
      this.pnData = this.pnStoreInput.pnCode;
      this.showMateialPopup = true;
    }
  }

  public setSelectedCode(data) {
    this.resultsTable = [];
    this.selectedData = [];
    this.showStockList = false;
    this.showStockListinput = false;
    this.pnStoreInput.pnCode = data.pnCode;
  }

  public openStockListInput(data) {
    this.listData = [];
    if (!this.showStockList) {
      if (StringUtils.isNullOrEmpty(data)) {
        this.resultsTable = [];
        this.selectedData = [];
        this.showStockList = false;
        this.showStockListinput = false;
      }
    }
  }

  public openStockList() {
    if (StringUtils.isNullOrEmpty(this.pnStoreInput.pnCode)) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingPncode'));
    } else {
      this.listData = [];
      this.stockInputList = [];
      this.showStockList = false;
      this.showStockListinput = true;
      this.stockListInput.pnCode = this.pnStoreInput.pnCode;
      this.stockListInput.storeCode = this.saveInput.bsdeStoreDTO.storeCode;
      this.openList(this.pnStoreInput.pnCode);
    }
  }

  public openStockListDropdown() {
    if (StringUtils.isNullOrEmpty(this.pnStoreInput.pnCodeSelect)) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingPncode'));
    } else {
      this.showStockListinput = false;
      this.showStockList = true;
      this.openList(this.pnStoreInput.pnCodeSelect);
    }
  }

  public openList(pnCode) {
    this.selectedData = [];
    this.listData = [];
    this.stockListInput.pnCode = pnCode;
    this.stockListInput.storeCode = this.saveInput.bsdeStoreDTO.storeCode;
    this.inventoryByWareHouseFormService.FindStockList(this.stockListInput).subscribe((results) => {
      if (results) {
        this.inventoryByWareHouseFormService.getStockValuationList().subscribe((result) => {
          if (results) {
            this.stockValuationlList = result || [];
            this.stockInputList = results;
            this.stockInputList.forEach((element) => {
              this.listData.push(element.bsdeStorePnDTO);
            });
            const tableList: StockDataRow[] = [];
            results.forEach((obj) => {
              const row: StockDataRow = {
                stockType: obj.bsdeStorePnDTO.stockType,
                stockNumber: String(obj.bsdeStorePnDTO.stockNumber),
                averageValue: obj.averageValue,
                totalValue: obj.totalValue,
                availabilityDate: this.dateService.dateToString(obj.bsdeStorePnDTO.availabilityDate),
                cost: obj.bsdeStorePnDTO.cost,
                _obj: obj
              };
              tableList.push(row);
            });
            this.resultsTable = tableList;
            this.resultsTable.forEach((data) => {
              LabelValueUtils.stringValueToLabel<StockDataRow>(data, 'stockType', this.stockValuationlList);
            });
          }
        });
      } else {
        this.resultsTable = [];
      }
    });
  }

  public createStocksList() {
    this.currentIndex = !this.resultsTable.length ? 0 : this.resultsTable.length;
    this.currentData = undefined;
    this.dialogOpenMode = ComponentOpenMode.Create;
    this.showStockDataPopup = true;
  }

  public openSelectedStockList(): void {
    if (this.selectedData.length === 1) {
      this.currentData = this.selectedData[0]._obj;
      this.currentIndex = -1;
      this.dialogOpenMode = ComponentOpenMode.Read;
      this.showStockDataPopup = true;
    }
  }

  public editStocksList() {
    if (this.selectedData.length === 1) {
      this.currentIndex = this.resultsTable.findIndex((list) => {
        return (
          !!list.stockType && !!this.selectedData[0].stockType && list.stockType === this.selectedData[0].stockType
        );
      });
      this.currentData = this.selectedData[0]._obj;
      this.dialogOpenMode = ComponentOpenMode.Write;
      this.showStockDataPopup = true;
    }
  }

  public onAddStock(data: InventoryByWarehouseStockListOutputDTO) {
    if (!this.currentData) {
      this.listData.forEach((element) => {
        if (element.stockType === data.bsdeStorePnDTO.stockType) {
          this.messageService.showWarningMessage(this.getTranslateKey('duplicatesValue'));
        }
      });
    }
    this.inventoryByWareHouseFormService.getStockValuationList().subscribe((result) => {
      const val = 0;
      this.stockValuationlList = result || [];
      if (data.bsdeStorePnDTO.stockNumber !== null && data.bsdeStorePnDTO.stockNumber !== undefined) {
        if (this.currentIndex !== -1) {
          this.stockInputList[this.currentIndex] = data;
          const newTotalValue = `${String(data.bsdeStorePnDTO.stockNumber * Number(data.averageValue))} ${
            this.priceCurrency
          }`;
          data.averageValue =
            data.averageValue !== '0' ? `${data.averageValue} ${this.priceCurrency}` : `${val} ${this.priceCurrency}`;
          this.resultsTable[this.currentIndex] = {
            stockType: data.bsdeStorePnDTO.stockType,
            stockNumber: String(data.bsdeStorePnDTO.stockNumber),
            averageValue: data.averageValue,
            cost: data.bsdeStorePnDTO.cost,
            totalValue: newTotalValue,
            availabilityDate: this.dateService.dateToString(data.bsdeStorePnDTO.availabilityDate),
            _obj: data
          };
          this.resultsTable.forEach((element) => {
            LabelValueUtils.stringValueToLabel<StockDataRow>(element, 'stockType', this.stockValuationlList);
          });
          this.stockInputList.forEach((element) => this.listData.push(element.bsdeStorePnDTO));
          this.listData = this.removeDups(this.listData, 'stockType');
          this.resultsTable = this.removeDups(this.resultsTable, 'stockType');
        } else {
          this.stockInputList[this.currentIndex] = data;
          this.resultsTable = [...this.resultsTable, this.addData(data)];
          this.resultsTable.forEach((element) => {
            LabelValueUtils.stringValueToLabel<StockDataRow>(element, 'stockType', this.stockValuationlList);
          });
        }
      }
      this.selectedData = [];
    });
  }

  public removeDups(arr, prop) {
    const obj = {};

    return Object.keys(
      arr.reduce((prev, next) => {
        if (!obj[next[prop]]) {
          obj[next[prop]] = next;
        }

        return obj;
      }, obj)
    ).map((i) => obj[i]);
  }

  public addData(data: InventoryByWarehouseStockListOutputDTO): StockDataRow {
    const val = 0;
    let row: StockDataRow = {};
    if (data.bsdeStorePnDTO.stockNumber !== null && data.bsdeStorePnDTO.stockNumber !== undefined) {
      const newTotalValue = `${String(data.bsdeStorePnDTO.stockNumber * Number(data.averageValue))} ${
        this.priceCurrency
      }`;
      data.averageValue =
        data.averageValue !== '0' ? `${data.averageValue} ${this.priceCurrency}` : `${val} ${this.priceCurrency}`;
      row = {
        stockType: data.bsdeStorePnDTO.stockType,
        stockNumber: String(data.bsdeStorePnDTO.stockNumber),
        averageValue: newTotalValue,
        totalValue: data.totalValue,
        availabilityDate: this.dateService.dateToString(data.bsdeStorePnDTO.availabilityDate),
        _obj: data
      };
    }

    return row;
  }

  public deleteStocksList() {
    const confirmMessageKey =
      this.selectedData.length > 1 ? 'confirmDeleteSelectedStocks' : 'confirmDeleteSelectedStock';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        this.resultsTable = this.resultsTable.filter((data) => {
          return !this.selectedData.some((row) => {
            return data.stockType === row.stockType;
          });
        });
        this.selectedData.forEach((element) => {
          LabelValueUtils.labelToStringValue<StockDataRow>(element, 'stockType', this.stockValuationlList);
        });
        this.selectedData.map((data) => {
          if (
            !!this.saveInput.bsdeStorePnDTORemoveIdList &&
            !!this.stockListInput.storeCode &&
            !!data.stockType &&
            !!this.stockListInput.pnCode
          ) {
            this.pnDTOIdInput = {
              storeCode: this.stockListInput.storeCode,
              pnCode: this.stockListInput.pnCode,
              stockType: data.stockType
            };
            this.saveInput.bsdeStorePnDTORemoveIdList.push(this.pnDTOIdInput);
          }
        });
        this.selectedData = [];
      }
    });
  }

  public validate() {
    if (StringUtils.isNullOrEmpty(this.saveInput.bsdeStoreDTO.storeCode)) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      if (this.saveInput.bsdeStoreDTO.storeCode) {
        this.saveInput.bsdeStoreDTO.storeCode = this.saveInput.bsdeStoreDTO.storeCode.trim();
      }
      this.saveInput.isUpdateBsdeStore = !!this.componentData.objectId ? true : false;
      if (this.saveInput && this.saveInput.bsdeStorePnDTOList) {
        const tableList: BsdeStorePnDTO[] = [];
        this.listData.map((data) => {
          const value: BsdeStorePnDTO = {
            storeCode: this.stockListInput.storeCode,
            pnCode: this.stockListInput.pnCode,
            stockType: data.stockType,
            stockNumber: data.stockNumber,
            cost: data.cost,
            availabilityDate: data.availabilityDate
          };
          tableList.push(value);
        });
        this.saveInput.bsdeStorePnDTOList = tableList;
      }

      this.showSaveSpinner = true;
      this.inventoryByWareHouseFormService.saveWareHouseForm(this.saveInput).subscribe(
        () => {
          this.listData = [];
          if (this.saveInput.bsdeStoreDTO.storeCode) {
            const warehouseFormId: BsdeStoreDTOId = {
              storeCode: this.saveInput.bsdeStoreDTO.storeCode
            };
            this.componentData.objectId = this.serializationService.serialize(warehouseFormId);
            this.updateOpenMode(ComponentOpenMode.Write);
            this.context = this.saveInput.bsdeStoreDTO.storeCode;
            this.displayComponentContext(this.saveInput.bsdeStoreDTO.storeCode, this.isCreateOpenMode);
          }
          this.messageService.showSuccessMessage(
            this.getTranslateKey(!!this.saveInput.isUpdateBsdeStore ? 'onUpdateSave' : 'onCreateSave')
          );
          this.showSaveSpinner = false;
        },
        (err) => {
          // FAILED
          this.messageService.showErrorMessage(err.error.errorDetail);
          this.showSaveSpinner = false;
        }
      );
    }
  }

  // tslint:disable-next-line:no-any
  public onResultsFilter(event: any): void {
    this.resultDisplayedRowNb =
      this.resultsTable && event.filteredValue.length && this.resultsTable.length === event.filteredValue.length
        ? undefined
        : event.filteredValue.length;
  }
}
