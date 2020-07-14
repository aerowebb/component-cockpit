import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SearchInputStockValuation } from '../../../../shared/types/api-input-types/bidt-stock-mvt/search-input-stock-valuation.interface';
import { GlobalVariableValues } from '../../../../shared/types/api-output-types/bidt-stock-mvt/global-variable-values.interface';
import { StockSheetTable } from '../../../../shared/types/api-types/stock-sheet-table.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StockValuationSearchService } from '../search/stock-valuation-search.service';

import { StockValuationFormService } from './stock-valuation-form.service';

interface StockTableRow {
  date?: string;
  materialCode?: string;
  materialDesignation?: string;

  receiptQuantity?: string;
  receiptValue?: string;
  receiptAmount?: string;

  issueQuantity?: string;
  issueValue?: string;
  issueAmount?: string;

  stockQuantity?: string;
  stockValue?: string;
  stockAmount?: string;
}

interface ChartType {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

@Component({
  selector: 'aw-stock-valuation-form',
  templateUrl: './stock-valuation-form.component.html',
  styleUrls: ['./stock-valuation-form.component.scss']
})
export class StockValuationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public searchObject: SearchInputStockValuation;

  public stock: GlobalVariableValues;

  public averageValue: string;
  public receiptAmount: string;
  public issueAmount: string;
  public stockAmount: string;

  public stockSheetTableForDB: StockSheetTable[];
  public stockSheetTableForDisplay: StockTableRow[];

  public stockSheetTableCols: TableColumn[];
  public stockSheetTableCols2: TableColumn[];

  public stockQuantityVariationData: ChartType;
  public stockAmountVariationData: ChartType;

  // tslint:disable-next-line:no-any
  public amountChartOptions: any;
  // tslint:disable-next-line:no-any
  public quantityChartOptions: any;

  public chartType: string;

  public chartContentReady: boolean;

  public isStockSheetTableLoading: boolean;

  public warehouses: LabelValue<string>[];

  public displayFullScreen: boolean = false;

  public currency: string;

  public curr: string;

  public warehouse: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly stockValuationFormService: StockValuationFormService,
    private readonly dateService: DateService,
    private readonly stockValuationSearchService: StockValuationSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();
    this.initChart();
    // this.loadWarehouses();
    this.loadCurrency();

    this.setStockSheetTableCols();
    this.setStockSheetTableCols2();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.searchObject =
      this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);

    this.calculate();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_VALUATION_FORM;
  }

  private init(): void {
    this.stock = {};
    this.averageValue = '';
    this.receiptAmount = '';
    this.issueAmount = '0';
    this.stockAmount = '';
    this.stockSheetTableForDB = [];
    this.stockSheetTableForDisplay = [];

    this.warehouses = [];

    this.chartContentReady = false;

    this.currency = '';
    this.curr = '';
    this.warehouse = '';
  }

  private initChart(): void {
    this.chartType = 'line';
    this.stockQuantityVariationData = {
      datasets: [
        {
          data: [],
          label: 'Quantity',
          borderColor: '#0D3FC2',
          backgroundColor: '#0D3FC2',
          hoverBackgroundColor: '#0D3FC2',
          fill: false
        }
      ],
      labels: []
    };

    this.stockAmountVariationData = {
      datasets: [
        {
          data: [],
          label: 'Amount',
          borderColor: '#D3C632',
          backgroundColor: '#D3C632',
          hoverBackgroundColor: '#D3C632',
          fill: false
        }
      ],
      labels: []
    };

    this.setAmountChartOptions();
    this.setQuantityChartOptions();
  }

  // loads warehouse dropdown
  public loadWarehouses(): void {
    this.stockValuationSearchService.findAll().subscribe((results) => {
      results.forEach((res) => {
        let warehouse: LabelValue<string> = { label: '', value: '' };

        warehouse = {
          label: `${res.whCode} - ${res.whName}`,
          value: `${res.wareHouseId}`
        };
        this.warehouses.push(warehouse);
      });
      const wares = this.warehouses.filter(
        (ware) =>
          this.stock.searchInputStockValuation &&
          this.stock.searchInputStockValuation.warehouseId &&
          `${ware.value}` === `${this.stock.searchInputStockValuation.warehouseId}`
      );
      this.warehouse = wares[0] && wares[0].label;
    });
  }

  private setAmountChartOptions(): void {
    this.amountChartOptions = {
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  public setQuantityChartOptions(): void {
    this.quantityChartOptions = {
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private calculate(): void {
    this.isStockSheetTableLoading = true;
    this.stockValuationFormService.stockValuationSearch(this.searchObject).subscribe((result) => {
      this.loadWarehouses();
      this.setChartData(result);
      this.stock = result;

      if (this.stock.resultCumpStockValue !== null && this.stock.resultCumpStockValue !== undefined) {
        this.averageValue = this.numberWithCommas(this.stock.resultCumpStockValue);
      }
      if (this.stock.resultCumpReceiptAmount !== null && this.stock.resultCumpReceiptAmount !== undefined) {
        this.receiptAmount = this.numberWithCommas(this.stock.resultCumpReceiptAmount);
      }
      if (this.stock.resultCumpIssueAmount !== null && this.stock.resultCumpIssueAmount !== undefined) {
        this.issueAmount = this.numberWithCommas(this.stock.resultCumpIssueAmount);
      }
      if (this.stock.resultCumpStockAmount !== null && this.stock.resultCumpStockAmount !== undefined) {
        this.stockAmount = this.numberWithCommas(this.stock.resultCumpStockAmount);
      }
      this.concatenateStockTableRowsByMaterial(this.stock.stockSheetTableList);
    });
  }

  private concatenateStockTableRowsByMaterial(stockTable?: StockSheetTable[]): void {
    if (!!stockTable) {
      const stocks = stockTable;

      stocks.forEach((stock) => {
        if (stocks.length !== 0) {
          const inStockTableForDB = this.stockSheetTableForDB.filter(
            (st) => st.date.getTime() === stock.date.getTime()
          );
          if (inStockTableForDB.length !== 0) {
            // stock exists in this.stockSheetTableForDB
            const indexInStockTableForDB = this.stockSheetTableForDB.findIndex(
              (st) => st.date.getTime() === stock.date.getTime()
            );

            // Receipt
            if (
              this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== null &&
              this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity !== undefined &&
              stock.receiptQuantity !== null &&
              stock.receiptQuantity !== undefined
            ) {
              this.stockSheetTableForDB[indexInStockTableForDB].receiptQuantity += stock.receiptQuantity;
            }

            // Stock
            if (
              this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== null &&
              this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity !== undefined &&
              stock.stockQuantity !== null &&
              stock.stockQuantity !== undefined &&
              this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity < stock.stockQuantity
            ) {
              this.stockSheetTableForDB[indexInStockTableForDB].stockQuantity = stock.stockQuantity;
            }
            if (
              this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== null &&
              this.stockSheetTableForDB[indexInStockTableForDB].stockAmount !== undefined &&
              stock.stockAmount !== null &&
              stock.stockAmount !== undefined &&
              this.stockSheetTableForDB[indexInStockTableForDB].stockAmount < stock.stockAmount
            ) {
              this.stockSheetTableForDB[indexInStockTableForDB].stockAmount = stock.stockAmount;
            }
          } else {
            // new material code. push in this.stockSheetTableForDB
            this.stockSheetTableForDB.unshift(stock);
          }
        }
      });

      this.convertStockTableIntoRowDTOArray();
    }
  }

  public convertStockTableIntoRowDTOArray(): void {
    this.stockSheetTableForDB.forEach((stock) => {
      const stockTableRow: StockTableRow = {};

      stockTableRow.date = this.dateService.dateToString(stock.date);
      stockTableRow.materialCode = stock.materialCode;
      stockTableRow.materialDesignation = stock.materialDesignation;

      if (stock.receiptAmount !== null && stock.receiptAmount !== undefined) {
        stockTableRow.receiptAmount = this.numberWithCommas(stock.receiptAmount);
      }

      if (stock.receiptQuantity !== null && stock.receiptQuantity !== undefined) {
        stockTableRow.receiptQuantity = this.numberWithCommas(stock.receiptQuantity);
      }

      if (stock.receiptValue !== null && stock.receiptValue !== undefined) {
        stockTableRow.receiptValue = this.numberWithCommas(stock.receiptValue);
      }

      if (stock.issueAmount !== null && stock.issueAmount !== undefined) {
        stockTableRow.issueAmount = this.numberWithCommas(stock.issueAmount);
      }

      if (stock.issueQuantity !== null && stock.issueQuantity !== undefined) {
        stockTableRow.issueQuantity = this.numberWithCommas(stock.issueQuantity);
      }

      if (stock.issueValue !== null && stock.issueValue !== undefined) {
        stockTableRow.issueValue = this.numberWithCommas(stock.issueValue);
      }

      if (stock.stockAmount !== null && stock.stockAmount !== undefined) {
        stockTableRow.stockAmount = this.numberWithCommas(stock.stockAmount);
      }

      if (stock.stockQuantity !== null && stock.stockQuantity !== undefined) {
        stockTableRow.stockQuantity = this.numberWithCommas(stock.stockQuantity);
      }

      if (stock.stockValue !== null && stock.stockValue !== undefined) {
        stockTableRow.stockValue = this.numberWithCommas(stock.stockValue);
      }

      this.stockSheetTableForDisplay.push(stockTableRow);
    });

    this.isStockSheetTableLoading = false;
  }

  private setChartData(stock: GlobalVariableValues): void {
    const stocks = stock.stockSheetTableList;
    if (!!stocks) {
      stocks.forEach((st) => {
        this.stockQuantityVariationData.labels.push(this.dateService.dateToString(st.date));
        this.stockQuantityVariationData.datasets[0].data.push(st.stockQuantity);

        this.stockAmountVariationData.labels.push(this.dateService.dateToString(st.date));
        this.stockAmountVariationData.datasets[0].data.push(st.stockAmount);
      });
    }
    this.chartContentReady = true;
  }

  // Currency
  private loadCurrency(): void {
    this.stockValuationFormService.getLocalCurrency().subscribe((result) => {
      this.currency = result;
      const curr = this.currency.split(' ');
      this.curr = curr[1];
    });
  }

  private setStockSheetTableCols(): void {
    this.stockSheetTableCols = [
      { field: 'date', alignment: 'center' },
      { field: 'materialCode', alignment: 'center' },
      { field: 'materialDesignation', alignment: 'center' },
      { field: 'stockQuantity', alignment: 'center' },
      { field: 'stockValue', alignment: 'center' },
      { field: 'stockAmount', alignment: 'center' }
    ];
  }

  private setStockSheetTableCols2(): void {
    this.stockSheetTableCols2 = [
      { field: 'date', alignment: 'center' },
      { field: 'materialCode', alignment: 'center' },
      { field: 'materialDesignation', alignment: 'center' },
      { field: 'receiptQuantity', alignment: 'center' },
      { field: 'receiptValue', alignment: 'center' },
      { field: 'receiptAmount', alignment: 'center' },
      { field: 'issueQuantity', alignment: 'center' },
      { field: 'issueValue', alignment: 'center' },
      { field: 'issueAmount', alignment: 'center' },
      { field: 'stockQuantity', alignment: 'center' },
      { field: 'stockValue', alignment: 'center' },
      { field: 'stockAmount', alignment: 'center' }
    ];
  }

  public closeDialog(): void {
    this.displayFullScreen = false;
  }

  public numberWithCommas(n: number): string {
    const parts = n.toString().split('.');

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
  }

  public newCalculation(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_VALUATION_SEARCH,
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
