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
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { SSGraphOutput } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-graph-output.interface';
import { SSTreeNode } from '../../../../shared/types/api-output-types/logistics-stock-status/s-s-tree-node.interface';
import { StockStatusOutputDto } from '../../../../shared/types/api-output-types/logistics-stock-status/stock-status-output-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StockTypeService } from '../../../administration/catalog/dynamic-catalog-components/logistics/stock-type/stock-type.service';
import { MaterialFormService } from '../../material/form/material-form.service';
import { StockStatusFormService } from '../../stock-status/form/stock-status-form.service';
import { StockValuationSearchService } from '../../stock-valuation/search/stock-valuation-search.service';

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
  selector: 'aw-stock-status-form',
  templateUrl: './stock-status-form.component.html',
  styleUrls: ['./stock-status-form.component.scss']
})
export class StockStatusFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public searchObject: StockStatusInput;

  // tslint:disable-next-line:no-any
  public quantityChartOptions: any;

  public chartType: string;

  public chartContentReady: boolean;

  public warehouses: LabelValue<string>[];

  public displayFullScreen: boolean = false;

  public warehouse: string | undefined;

  public stockOwner: string;

  public site: string | undefined;

  public ssTreeTable: SSTreeNode[];

  public ssTreeTableCols: TableColumn[];

  public selectedSD: StockStatusOutputDto | undefined;

  public selectedNode: SSTreeNode;

  public isLoadingStructureTable: boolean;

  public openDocumentList: LabelValue<string>[];

  public showDocumentDropdown: boolean;

  public stockStatusVariationData: ChartType;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly stockValuationSearchService: StockValuationSearchService,
    private readonly materialFormService: MaterialFormService,
    private readonly stockTypeService: StockTypeService,
    private readonly stockStatusFormService: StockStatusFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.init();
    this.initChart();
    this.setOpenDocumentList();
  }

  public ngOnInit() {
    super.ngOnInit();

    // this.searchObject = {};

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
      }
      this.loadSites();
      this.loadWarehouses();
      this.ownerDropDown();
    }

    this.calculate();
    this.loadSSTreeTable();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_STATUS_FORM;
  }

  private init(): void {
    this.selectedSD = {};

    this.warehouses = [];

    this.chartContentReady = false;

    this.warehouse = '';
    this.ssTreeTable = [];
    this.ssTreeTableCols = [
      { field: 'stockTitle', alignment: 'left' },
      { field: 'quOpen', alignment: 'left' },
      { field: 'quBlocked', alignment: 'left' },
      { field: 'quControlled', alignment: 'left' },
      { field: 'quTotal', alignment: 'left' },
      { field: 'lowThreshold', alignment: 'left' },
      { field: 'highThreshold', alignment: 'left' }
    ];

    this.isLoadingStructureTable = false;
    this.showDocumentDropdown = false;
  }

  public newCalculation(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_STATUS_SEARCH,
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // load warehouse
  public loadWarehouses(): void {
    this.stockValuationSearchService.findAll().subscribe((results) => {
      results.forEach((res) => {
        if (this.searchObject.warehouseId === res.wareHouseId) {
          this.warehouse = res.whName;
        }
      });
    });
  }

  // Load sites
  public loadSites(): void {
    this.materialFormService.findAllStockStatusSites().subscribe((result) => {
      result.forEach((res) => {
        if (this.searchObject.siteId === Number(res.value)) {
          this.site = res.label;
        }
      });
    });
  }

  // get Stock owner drop down
  public ownerDropDown() {
    this.stockTypeService.getOwnerNameMap().subscribe((results) => {
      results.forEach((res) => {
        if (res.value === this.searchObject.stockOwnerCode) {
          this.stockOwner = res.label;
        }
      });
    });
  }

  // display chart for evolution
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
          label: 'NA (No Stock Owner)',
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
          label: 'Qunatity',
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
          tension: 1
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

  private calculate(): void {
    this.stockStatusFormService.getStockStatusGraph(this.searchObject).subscribe((result) => {
      this.setChartData(result);
    });
  }

  public loadSSTreeTable(): void {
    this.isLoadingStructureTable = true;
    this.stockStatusFormService.stockStatusSearch(this.searchObject).subscribe((result) => {
      this.isLoadingStructureTable = false;
      this.ssTreeTable = result || [];
    });
  }

  public onRowSelected(node: SSTreeNode): void {
    if (!!node.data) {
      this.selectedSD = node.data;
      this.selectedNode = node;
      if (!!this.selectedSD.lowThreshold && !!this.selectedSD.quTotal) {
        // tslint:disable-next-line:prefer-conditional-expression
        if (this.selectedSD.lowThreshold > this.selectedSD.quTotal) {
          this.showDocumentDropdown = true;
        } else {
          this.showDocumentDropdown = false;
        }
      } else {
        this.showDocumentDropdown = false;
      }
    } else {
      super.throwUnboundLocalError('onRowSelected', 'node.data');
    }
  }

  public togglerEvent(): void {
    this.selectedSD = {};
    this.selectedNode = {};
  }

  public onRowUnSelected(node: SSTreeNode): void {
    this.showDocumentDropdown = false;
  }

  public openStockOperation(): void {
    // todo
  }

  public setOpenDocumentList(): void {
    this.stockStatusFormService.getPurchaseDocumentCategory().subscribe((result) => {
      this.openDocumentList = result || [];
    });
  }
}
