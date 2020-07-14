import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { MenuItem, SelectItem } from '../../../../../../node_modules/primeng/api';
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
import { GetBidtStockMvtAlertInputDTO } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-input-dto.interface';
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { GetBidtStockMvtAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-output-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StockAlertSearchService } from '../search/stock-alert-search.service';

import { StockAlertFormService } from './stock-alert-form.service';

interface AlertListRowDTO {
  date?: Date;
  alertDate?: string;
  materialCode?: string;
  alertSNBN?: string;
  alertDescription?: string;
  warehouse?: string;
  alertType?: string;
  description?: string;
  alertThresholdLow?: string;
  alertThresholdHigh?: string;
  alertEndDateText?: string;
  alertDesign?: string;
  alertListRow?: GetBidtStockMvtAlertOutputDTO;
  showTooltip?: string;
  tooltip?: string;
  siteId?: number;
  warehouseId?: number;
}

enum FilterAlert {
  Empty = 'MSG_TXT_EMPTY_STOCK',
  Low = 'MSG_TXT_LOW_THRESHOLD_REACHED',
  High = 'MSG_TXT_HIGH_THRESHOLD_REACHED',
  Expiration = 'MSG_TXT_EXPIRATION',
  Reset = 'Reset'
}

@Component({
  selector: 'aw-stock-alert-form',
  templateUrl: './stock-alert-form.component.html',
  styleUrls: ['./stock-alert-form.component.scss']
})
export class StockAlertFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly filterAlert: typeof FilterAlert;

  public searchObject: GetBidtStockMvtAlertInputDTO;
  public stockConsult: StockConsultInput;
  public stockStatus: StockStatusInput;
  public navigateList: MenuItem[];

  public warehouses: LabelValue<string>[];

  public warehouse: string;

  public filterAlertList: SelectItem[];
  public selectedFilterAlert: FilterAlert;

  public openDocumentList: MenuItem[];

  public alertsListTable: AlertListRowDTO[];
  public alertsListTableForDisplay: AlertListRowDTO[];
  public alertsListTableCols: TableColumn[];

  public selectedAlerts: AlertListRowDTO[];

  public highThresholdTooltipText: string;

  public lowThresholdTooltipText: string;

  public isLoading: boolean | false;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly stockAlertFormService: StockAlertFormService,
    private readonly dateService: DateService,
    private readonly stockAlertSearchService: StockAlertSearchService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.filterAlert = FilterAlert;

    this.init();
    this.setFilterAssetList();
    this.setOpenDocumentList();
    this.setNavigateList();
    this.loadWarehouses();
    this.getTooltipTranslation();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.searchObject =
      this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);

    this.searchObject.startDate = new Date(this.searchObject.startDate);
    this.searchObject.endDate = new Date(this.searchObject.endDate);

    this.calculate();
  }

  private init(): void {
    this.warehouses = [];

    this.warehouse = '';

    this.alertsListTable = [];
    this.alertsListTableForDisplay = [];
    this.selectedAlerts = [];

    this.highThresholdTooltipText = '';
    this.lowThresholdTooltipText = '';

    this.selectedFilterAlert = FilterAlert.Reset;

    this.setTableCols();
  }

  private setFilterAssetList(): void {
    const emptyKey = `${this.getComponentName()}.emptyStock`;
    const lowKey = `${this.getComponentName()}.alertsOnLowThresholds`;
    const highKey = `${this.getComponentName()}.alertsOnHighThresholds`;
    const expirationKey = `${this.getComponentName()}.alertsOnExpiration`;
    const resetKey = `${this.getComponentName()}.reset`;
    this.translateService.get([emptyKey, lowKey, highKey, expirationKey, resetKey]).subscribe((results) => {
      const emptyLabel = !!results ? results[emptyKey] : 'Empty Stock';
      const lowLabel = !!results ? results[lowKey] : 'Alerts on Low Thresholds';
      const highLabel = !!results ? results[highKey] : 'Alerts on High Thresholds';
      const expirationLabel = !!results ? results[expirationKey] : 'Alerts on Expiration';
      const resetLabel = !!results ? results[resetKey] : '';
      this.filterAlertList = [
        { label: emptyLabel, value: FilterAlert.Empty },
        { label: lowLabel, value: FilterAlert.Low },
        { label: highLabel, value: FilterAlert.High },
        { label: expirationLabel, value: FilterAlert.Expiration },
        { label: resetLabel, value: FilterAlert.Reset, icon: 'fa fa-fw fa-undo', title: 'Reset' }
      ];
    });
  }

  public setNavigateList(): void {
    const stockStatusKey: string = this.getTranslateKey('stockStatus');
    const stockConsultKey: string = this.getTranslateKey('stockConsult');
    this.translateService.get([stockStatusKey, stockConsultKey]).subscribe((results: string[]) => {
      const stockStatusLabel: string = results ? results[stockStatusKey] : 'Stock Status';
      const stockConsultLabel: string = results ? results[stockConsultKey] : 'Stock Consult';
      this.navigateList = [
        {
          label: stockStatusLabel,
          command: () => {
            const alert: AlertListRowDTO = this.selectedAlerts[0];
            // Values to replace with correct ones
            this.stockStatus = {
              pnCode: alert.materialCode, // ?
              stockOwnerCode: '',
              warehouseId: alert.warehouseId, // ?
              siteId: alert.siteId, // ?
              startDate: alert.date ? alert.date : new Date(),
              endDate: alert.date ? alert.date : new Date()
            };
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.LOG_STOCK_STATUS_SEARCH,
              openMode: ComponentOpenMode.Read,
              objectId: this.serializationService.serialize(this.stockStatus)
            };
            const labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        },
        {
          label: stockConsultLabel,
          command: () => {
            // Values to replace with correct ones
            this.stockConsult = {
              pn: '', // ?
              withItsAlternatives: false, // ?
              siteId: 0, // ?
              warehouseId: 0, // ?
              storageBinId: 0,
              warehouseTypeId: '', // ?
              stockTypeId: 0, // ?
              valuationGroupId: 0, // ?
              issuePeriod: '' // ?
            };
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.LOG_STOCK_CONSULT_FORM,
              openMode: ComponentOpenMode.Read,
              objectId: this.serializationService.serialize(this.stockConsult)
            };
            const labelKey = 'transaction.' + data.componentId;
            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        }
      ];
    });
  }

  public setOpenDocumentList(): void {
    const purchaseRequestKey = this.getTranslateKey('purchaseRequest');
    const requestForQuotationKey = this.getTranslateKey('quotationRequest');
    const purchaseOrderKey = this.getTranslateKey('purchaseOrder');
    this.translateService.get([purchaseRequestKey, requestForQuotationKey, purchaseOrderKey]).subscribe((results) => {
      const purchaseRequestLabel = results ? results[purchaseRequestKey] : 'Purchase Request';
      const requestForQuotationLabel = results ? results[requestForQuotationKey] : 'Request for Quotation';
      const purchaseOrderLabel = results ? results[purchaseOrderKey] : 'Purchase Order';
      this.openDocumentList = [
        {
          label: purchaseRequestLabel,
          command: () => {
            // todo
          }
        },
        {
          label: requestForQuotationLabel,
          command: () => {
            // todo
          }
        },
        {
          label: purchaseOrderLabel,
          command: () => {
            // todo
          }
        }
      ];
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_ALERT_FORM;
  }

  private setTableCols(): void {
    this.alertsListTableCols = [
      { field: 'alertDate', alignment: 'left', width: '7%' },
      { field: 'materialCode', alignment: 'left', width: '10%' },
      { field: 'alertSNBN', alignment: 'left', width: '5%' },
      { field: 'alertDescription', alignment: 'left', width: '20%' },
      { field: 'warehouse', alignment: 'left', width: '15%' }, // warehouseCode - warehouseName
      { field: 'alertType', alignment: 'left', width: '13%' },
      { field: 'description', alignment: 'left', width: '13%' }, // alertTextCode : alertText
      // { field: 'alertThresholdLow', alignment: 'left', width: '6%' },
      // { field: 'alertThresholdHigh', alignment: 'left', width: '6%' },
      { field: 'alertEndDateText', alignment: 'left', width: '7%' }
    ];
  }

  // loads warehouse dropdown
  public loadWarehouses(): void {
    this.stockAlertSearchService.findAll().subscribe((results) => {
      results.forEach((res) => {
        let warehouse: LabelValue<string> = { label: '', value: '' };

        warehouse = {
          label: `${res.whCode} - ${res.whName}`,
          value: `${res.wareHouseId}`
        };
        this.warehouses.push(warehouse);
      });
      const ware = this.warehouses.filter(
        (w) => this.searchObject.warehouseId && w.value === this.searchObject.warehouseId.toString()
      );

      this.warehouse = ware[0] && ware[0].label;
    });
  }

  private getTooltipTranslation(): void {
    const high = `${this.getComponentName()}.highThreshold`;
    const low = `${this.getComponentName()}.lowThreshold`;
    this.translateService.get([high, low]).subscribe((results) => {
      this.highThresholdTooltipText = results[high];
      this.lowThresholdTooltipText = results[low];
    });
  }

  // tslint:disable-next-line:no-any
  public onChangeFilterAlert(event: any): void {
    switch (event.value) {
      case 'Reset':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
        break;
      case 'MSG_TXT_EXPIRATION':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) =>
            alert.alertListRow &&
            (alert.alertListRow.alertType === 'MSG_TXT_EXPIRATION' ||
              alert.alertListRow.alertType === 'MSG_ERROR_EXPIRATION' ||
              alert.alertListRow.alertType === 'MSG_WARNING_EXPIRATION')
        );
        break;
      default:
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) => alert.alertListRow && alert.alertListRow.alertType === event.value
        );

        break;
    }
  }

  private calculate(): void {
    this.isLoading = true;
    this.stockAlertFormService.calculate(this.searchObject).subscribe((results) => {
      results.forEach((res) => {
        const alertRow: AlertListRowDTO = {};
        alertRow.alertDate = this.dateService.dateToString(res.alertDate);
        const endDate = res.alertEndDateText && new Date(res.alertEndDateText);
        if (!!endDate) {
          alertRow.alertEndDateText = this.dateService.dateToString(endDate);
        }

        alertRow.materialCode = res.materialCode;
        if (!!res.alertSN) {
          alertRow.alertSNBN = res.alertSN;
        } else if (!!res.alertBN) {
          alertRow.alertSNBN = res.alertBN;
        }
        alertRow.alertDescription = res.alertDescription;
        if (!!res.alertWarehouseData && !!res.alertWarehouseData.whCode && !!res.alertWarehouseData.whName) {
          alertRow.warehouse = `${res.alertWarehouseData.whCode} - ${res.alertWarehouseData.whName}`;
        }
        if (!!res.alertType) {
          const alertType = `${this.getComponentName()}.${res.alertType}`;
          this.translateService.get(alertType).subscribe((result) => {
            if (!!result) {
              alertRow.alertType = result;
            }
          });
        }
        if (!!res.alertTextCode) {
          const alertTextCode = `${this.getComponentName()}.${res.alertTextCode}`;
          this.translateService.get(alertTextCode).subscribe((result) => {
            if (!!result) {
              alertRow.description = `${result} : ${res.alertText}`;
            }
          });
        }

        if (res.alertThresholdLow !== null && res.alertThresholdLow !== undefined) {
          alertRow.alertThresholdLow = res.alertThresholdLow.toString();
        }
        if (res.alertThresholdHigh !== null && res.alertThresholdHigh !== undefined) {
          alertRow.alertThresholdHigh = res.alertThresholdHigh.toString();
        }
        if (
          !!res.alertType &&
          res.alertType === 'MSG_TXT_LOW_THRESHOLD_REACHED' &&
          res.alertThresholdLow !== null &&
          res.alertThresholdLow !== undefined
        ) {
          alertRow.showTooltip = 'yes';
          alertRow.tooltip = `${this.lowThresholdTooltipText} : ${res.alertThresholdLow}`;
        } else if (
          !!res.alertType &&
          res.alertType === 'MSG_TXT_HIGH_THRESHOLD_REACHED' &&
          res.alertThresholdHigh !== null &&
          res.alertThresholdHigh !== undefined
        ) {
          alertRow.showTooltip = 'yes';
          alertRow.tooltip = `${this.lowThresholdTooltipText} : ${res.alertThresholdLow}`;
        } else {
          alertRow.showTooltip = 'no';
        }
        alertRow.alertDesign = res.alertDesign;
        alertRow.alertListRow = res;
        this.alertsListTable.push(alertRow);
      });
      this.isLoading = false;
      this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
    });
  }

  public openStockOperation(): void {
    // todo
  }

  public newCalculation(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_ALERT_SEARCH,
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
