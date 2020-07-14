import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
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
import { StockConsultInput } from '../../../../shared/types/api-input-types/bidt-stock-consult/stock-consult-input.interface';
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { SSGraphOutput } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-graph-output.interface';
import { SSTreeNode } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-tree-node.interface';
import { StockStatusOutputDto } from '../../../../shared/types/api-output-types/logistics-stock-status/stock-status-output-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { StockTypeService } from '../../../administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service';
import { MaterialFormService } from '../../material/form/material-form.service';

import { StockStatusSearchService } from './stock-status-search.service';

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
  selector: 'aw-stock-status-search',
  templateUrl: './stock-status-search.component.html',
  styleUrls: ['./stock-status-search.component.scss']
})
export class StockStatusSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: StockStatusInput;
  public criteriaToSave: StockStatusInput;
  public criteriaName: string | undefined;

  public warehouses: LabelValue<number>[] | undefined;

  public showQuickSearchMaterialPopup: boolean;

  public currLang: string;

  public sites: SelectItem[];

  public wareHouseId: string | undefined;

  public ownerName: LabelValue<string>[];

  // table
  public isLoadingStructureTable: boolean;
  public ssTreeTable: SSTreeNode[];
  public ssTreeTableCols: TableColumn[];
  public selectedSD: StockStatusOutputDto | undefined;
  public selectedNode: SSTreeNode;

  // chart
  public chartType: string;
  public chartContentReady: boolean;
  public stockStatusVariationData: ChartType;
  // tslint:disable-next-line:no-any
  public quantityChartOptions: any;

  public hasBeenCalculated: boolean;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.STOCK_STATUS_SEARCH_CRITERIA_ID;

  // Criteria classes
  public isPnCodeRequired: boolean;
  public isSiteRequired: boolean;
  public isWarehouseRequired: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly translateService: TranslateService,
    public materialFormService: MaterialFormService,
    private readonly stockTypeService: StockTypeService,
    private readonly stockStatusSearchService: StockStatusSearchService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public ngOnInit() {
    super.ngOnInit();
    this.initData();
    this.initTables();
    this.initChart();
    this.init();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      if (!!this.componentData.objectId) {
        this.searchObject = this.serializationService.deserialize(this.componentData.objectId);
        this.searchObject.startDate = new Date(
          this.serializationService.deserialize(this.componentData.objectId).startDate
        );
        this.searchObject.endDate = new Date(
          this.serializationService.deserialize(this.componentData.objectId).endDate
        );
        this.onClickCalculate();
      }
    }

    // this.displayComponentContext('global.search', true);
  }

  // init screen
  public init(): void {
    this.getSiteList();
    this.getOwnerList();
  }

  // init data
  private initData(): void {
    if (!this.searchObject) {
      this.searchObject = {
        startDate: new Date(),
        endDate: new Date()
      };
    }

    this.ssTreeTable = [];
    this.selectedSD = {};
    this.showQuickSearchMaterialPopup = false;
    this.hasBeenCalculated = false;
    this.chartContentReady = true;
    this.isLoadingStructureTable = false;
    this.warehouses = [];
    this.isPnCodeRequired = true;
    this.isSiteRequired = true;
    this.isWarehouseRequired = true;

    this.currLang = this.translateService.currentLang;
  }

  // init tables
  private initTables(): void {
    this.ssTreeTableCols = [
      { field: 'stockTitle', alignment: 'left', width: '40%' },
      { field: 'quOpen', alignment: 'left' },
      { field: 'quBlocked', alignment: 'left' },
      { field: 'quControlled', alignment: 'left' },
      { field: 'quTotal', alignment: 'left' },
      { field: 'lowThreshold', alignment: 'left' },
      { field: 'highThreshold', alignment: 'left' }
    ];
  }

  // init chart
  private initChart(): void {
    this.chartType = 'line';
    this.stockStatusVariationData = {
      datasets: [
        {
          data: [],
          label: 'Lower Threshold',
          borderColor: '#0D3FC2',
          backgroundColor: '#0D3FC2',
          hoverBackgroundColor: '#0D3FC2',
          fill: false
        },
        {
          data: [],
          label: 'Higher Threshold',
          borderColor: '#FF00FF',
          backgroundColor: '#FF00FF',
          hoverBackgroundColor: '#FF00FF',
          fill: false
        },
        {
          data: [],
          label: !!this.searchObject.stockOwnerCode
            ? !!this.getStockLabel(this.searchObject.stockOwnerCode as string)
              ? this.getStockLabel(this.searchObject.stockOwnerCode as string)
              : 'NA (No Stock Owner)'
            : 'NA (No Stock Owner)',
          borderColor: '#8B4513',
          backgroundColor: '#8B4513',
          hoverBackgroundColor: '#8B4513',
          fill: false
        },
        {
          data: [],
          label: 'Receipt',
          borderColor: '#00FF00',
          backgroundColor: '#00FF00',
          hoverBackgroundColor: '#00FF00',
          fill: false
        },
        {
          data: [],
          label: 'Issue',
          borderColor: '#FF4500',
          backgroundColor: '#FF4500',
          hoverBackgroundColor: '#FF4500',
          fill: false
        },
        {
          data: [],
          label: 'Quantity',
          borderColor: '#6A5ACD',
          backgroundColor: '#6A5ACD',
          hoverBackgroundColor: '#6A5ACD',
          fill: false
        }
      ],
      labels: []
    };
    this.setStockStatusChartOptions();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_STATUS_SEARCH;
  }

  public onClickCalculate(): void {
    if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
      if (this.searchObject.startDate <= this.searchObject.endDate) {
        if (!!this.searchObject.pnCode || (!!this.searchObject.siteId && !!this.searchObject.warehouseId)) {
          if (!!this.searchObject.pnCode) {
            this.initChart();
            this.ssTreeTable = [];

            this.hasBeenCalculated = true;
            this.loadSSTreeTable();
            if (!this.showTable()) {
              this.calculateGraph();
            }
          }
          if (!!this.searchObject.siteId && !!this.searchObject.warehouseId) {
            this.ssTreeTable = [];
            this.hasBeenCalculated = true;
            this.loadSSTreeTable();
          }
        } else {
          this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
        }
      } else {
        this.messageService.showWarningMessage('TrainingPopupFormComponent.fromDateGreaterThanToDateError');
      }
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  // get data from server
  private calculateGraph(): void {
    this.chartContentReady = false;
    this.stockStatusSearchService.getStockStatusGraph(this.searchObject).subscribe((result) => {
      this.setChartData(result);
    });
  }

  private setChartData(statusGraphs: SSGraphOutput[]): void {
    if (!!statusGraphs) {
      statusGraphs.forEach((st) => {
        this.stockStatusVariationData.labels.push(this.dateService.dateToString(st.graphicDate));
        this.stockStatusVariationData.datasets[0].data.push(st.graphicLowThreshold);
        this.stockStatusVariationData.datasets[1].data.push(st.graphicHighThreshold);
        // tslint:disable-next-line:no-magic-numbers
        this.stockStatusVariationData.datasets[2].data.push(st.graphicOwner);
        // tslint:disable-next-line:no-magic-numbers
        this.stockStatusVariationData.datasets[3].data.push(st.graphicReceipt);
        // tslint:disable-next-line:no-magic-numbers
        this.stockStatusVariationData.datasets[4].data.push(st.graphicIssue);
        // tslint:disable-next-line:no-magic-numbers
        this.stockStatusVariationData.datasets[5].data.push(st.graphicValue);
      });
    }
    this.chartContentReady = true;
  }

  public setStockStatusChartOptions(): void {
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
              stepSize: 10
            }
          }
        ]
      },
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  public consultStock() {
    this.newCalculation(this.searchObject);
  }

  private newCalculation(input: StockConsultInput): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_CONSULT_SEARCH,
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(input)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // get data from server
  public loadSSTreeTable(): void {
    this.isLoadingStructureTable = true;
    this.searchObject.withAlternatives = this.searchObject.withAlternatives || false;
    this.stockStatusSearchService.stockStatusSearch(this.searchObject).subscribe((result) => {
      this.isLoadingStructureTable = false;
      this.ssTreeTable = result || [];
    });
  }

  // from modal
  public setSelectedMaterial(event: BirePnDTO): void {
    this.showQuickSearchMaterialPopup = false;
    this.searchObject.pnCode = event.pnCode;
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {
      startDate: new Date(),
      endDate: new Date()
    };
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: StockStatusInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
  }

  private getStockLabel(stockOwner): string {
    return this.ownerName.filter((row) => row.value === stockOwner)[0].label;
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: StockStatusInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  // get data from server
  private getSiteList(): void {
    this.materialFormService.findAllStockStatusSites().subscribe((result) => {
      const labelValue: LabelValue<number>[] = [];
      result.forEach((res) => {
        if (!!res) {
          labelValue.push({
            label: res.label,
            value: Number(res.value)
          });
        }
      });
      this.sites = labelValue || [];
      this.getWarehouseList();
    });
  }

  public updateMandatoryFieldsClass(): void {
    if (!!this.searchObject.pnCode || !!this.searchObject.siteId) {
      if (!!this.searchObject.pnCode) {
        this.isSiteRequired = false;
        this.isWarehouseRequired = false;
      }
      if (!!this.searchObject.siteId) {
        this.isPnCodeRequired = false;
      }
    } else {
      this.isPnCodeRequired = true;
      this.isSiteRequired = true;
      this.isWarehouseRequired = true;
    }
  }

  public clearPnCodeClass(): void {
    this.searchObject.pnCode = undefined;
    if (!!this.searchObject.siteId && !!this.searchObject.warehouseId) {
      this.isSiteRequired = true;
      this.isWarehouseRequired = true;
      this.isPnCodeRequired = false;
    } else {
      this.isSiteRequired = true;
      this.isWarehouseRequired = true;
      this.isPnCodeRequired = true;
    }
  }

  // get data from server
  public getWarehouseList(): void {
    if (!!this.searchObject.siteId) {
      const siteId = this.searchObject.siteId.toString();
      this.materialFormService.findWarehouseBySite(siteId).subscribe((result) => {
        const labelValue: LabelValue<number>[] = [];
        if (!!result && result.length > 0) {
          result.forEach((res: BidtWarehouseDTO) => {
            if (!!res && !!res.wareHouseId) {
              labelValue.push({
                label: `${res.whCode}-${res.whName}`,
                value: res.wareHouseId
              });
            }
          });
          this.warehouses = labelValue;
        } else {
          this.warehouses = [];
          this.searchObject.warehouseId = undefined;
        }
      });
    } else if (this.searchObject.siteId === null) {
      this.warehouses = [];
      this.searchObject.warehouseId = undefined;
    }
  }

  // event
  public onClickSearchMaterial(): void {
    if (this.hasBeenCalculated) {
      return;
    }
    this.showQuickSearchMaterialPopup = true;
  }

  // get data from server
  public getOwnerList() {
    this.stockTypeService.getOwnerNameMap().subscribe((results) => {
      this.ownerName = results;
    });
  }

  // event
  public onRowSelected(node: SSTreeNode): void {
    if (!!node.data) {
      this.selectedSD = node.data;
      this.selectedNode = node;
    } else {
      super.throwUnboundLocalError('onRowSelected', 'node.data');
    }
  }

  // event
  public togglerEvent(): void {
    this.selectedSD = {};
    this.selectedNode = {};
  }

  // event
  public onClickNewCalculation(): void {
    this.hasBeenCalculated = false;
  }

  // visibility
  public showTable(): boolean {
    return (
      this.searchObject.startDate !== undefined &&
      this.searchObject.endDate !== undefined &&
      this.searchObject.startDate.getFullYear() === this.searchObject.endDate.getFullYear() &&
      this.searchObject.startDate.getMonth() === this.searchObject.endDate.getMonth() &&
      this.searchObject.startDate.getDay() === this.searchObject.endDate.getDay()
    );
  }

  public materialIsNotEmpty(): boolean {
    return !!this.searchObject.pnCode && !StringUtils.isEmpty(this.searchObject.pnCode);
  }
}
