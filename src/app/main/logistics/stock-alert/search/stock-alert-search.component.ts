import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

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
import { GetBidtStockMvtAlertInputDTO } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-input-dto.interface';
import { StockStatusInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/stock-status-input.interface';
import { GetBidtStockMvtAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-stock-mvt/get-bidt-stock-mvt-alert-output-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { CreateOrderDocumentFromStockAlert } from '../../shared/create-order-document-from-stock-alert.interface';

import { StockAlertSearchService } from './stock-alert-search.service';

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

@Component({
  selector: 'aw-stock-alert-search',
  templateUrl: './stock-alert-search.component.html',
  styleUrls: ['./stock-alert-search.component.scss']
})
export class StockAlertSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: GetBidtStockMvtAlertInputDTO;
  public criteriaToSave: GetBidtStockMvtAlertInputDTO;
  public criteriaName: string | undefined;

  public warehouses: LabelValue<string>[];

  public showQuickSearchMaterialPopup: boolean;

  public stockConsult: StockConsultInput;
  public stockStatus: StockStatusInput;
  public navigateList: MenuItem[];

  public alertsListTable: AlertListRowDTO[];
  public selectedAlerts: AlertListRowDTO[];
  public alertsListTableForDisplay: AlertListRowDTO[];
  public alertsListTableCols: TableColumn[];

  public isLoading: boolean | false;

  public lowThresholdTooltipText: string;
  public highThresholdTooltipText: string;

  public hasBeenCalculated: boolean;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.STOCK_ALERT_SEARCH_CRITERIA_ID;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly stockAlertSearchService: StockAlertSearchService,
    private readonly translateService: TranslateService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.warehouses = [];

    this.initData();
    this.initTables();
    this.init();
    this.loadWarehouses();

    this.showQuickSearchMaterialPopup = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    // this.displayComponentContext('global.search', true);
  }

  public init(): void {
    this.getTooltipTranslation();
    this.getNavigateList();

    const week = 7;

    this.searchObject = {
      startDate: new Date(),
      endDate: new Date()
    };

    this.searchObject.startDate = new Date();
    this.searchObject.endDate.setDate(this.searchObject.startDate.getDate() + week);
  }

  private initData(): void {
    this.isLoading = false;

    this.lowThresholdTooltipText = '';
    this.highThresholdTooltipText = '';

    this.alertsListTable = [];
    this.alertsListTableForDisplay = [];
    this.selectedAlerts = [];

    this.navigateList = [];

    this.hasBeenCalculated = false;
  }

  private initTables(): void {
    this.alertsListTableCols = [
      { field: 'control', alignment: 'center', width: '5%' },
      { field: 'alertType', alignment: 'left', width: '10%' },
      { field: 'alertDate', alignment: 'left', width: '10%' },
      { field: 'materialCode', alignment: 'left', width: '10%' },
      { field: 'alertSNBN', alignment: 'left', width: '5%' },
      { field: 'alertDescription', alignment: 'left', width: '20%' },
      { field: 'warehouse', alignment: 'left', width: '15%' },
      { field: 'alertEndDateText', alignment: 'left', width: '7%' }
    ];
  }

  private getTooltipTranslation(): void {
    const high = `${this.getComponentName()}.highThreshold`;
    const low = `${this.getComponentName()}.lowThreshold`;
    this.translateService.get([high, low]).subscribe((results) => {
      this.highThresholdTooltipText = results[high];
      this.lowThresholdTooltipText = results[low];
    });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_ALERT_SEARCH;
  }

  // opens material popup in search criteria
  public quickSearchMaterial(): void {
    if (this.hasBeenCalculated) {
      return;
    }
    this.showQuickSearchMaterialPopup = true;
  }

  // loads warehouse dropdown
  public loadWarehouses(): void {
    this.stockAlertSearchService.findAllWarehouseByUserRights().subscribe((results) => {
      this.warehouses = results;
    });
  }

  // calculates stocks on the basis of search criteria
  public calculate(): void {
    // Check for date.
    if (!!this.searchObject.startDate && !!this.searchObject.endDate) {
      // check for third property
      if (!!this.searchObject.productCode || !!this.searchObject.warehouseId) {
        this.hasBeenCalculated = true;
        this.getStockAlertList();
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('enterSearchCriteria'));
    }
  }

  public getNavigateList(): void {
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
            const alert: AlertListRowDTO = this.selectedAlerts[0];
            this.stockConsult = {
              pn: alert.materialCode,
              withItsAlternatives: false,
              siteId: alert.siteId,
              warehouseId: alert.warehouseId
            };
            const data: PageComponentData = {
              id: this.tabService.generateId(),
              componentId: ComponentConstants.LOG_STOCK_CONSULT_SEARCH,
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

  private getStockAlertList(): void {
    this.isLoading = true;
    this.alertsListTableForDisplay = [];
    this.alertsListTable = [];
    this.stockAlertSearchService.calculate(this.searchObject).subscribe((results) => {
      results.forEach((res) => {
        const alertRow: AlertListRowDTO = {};
        alertRow.alertDate = this.dateService.dateToString(res.alertDate);
        const endDate = res.alertEndDateText && new Date(res.alertEndDateText);
        if (!!endDate) {
          alertRow.alertEndDateText = this.dateService.dateToString(endDate);
        }

        alertRow.materialCode = res.alertMaterial;
        if (!!res.alertSN) {
          alertRow.alertSNBN = res.alertSN;
        } else if (!!res.alertBN) {
          alertRow.alertSNBN = res.alertBN;
        }
        alertRow.alertDescription = res.alertDescription;
        if (!!res.alertWarehouseData && !!res.alertWarehouseData.whCode && !!res.alertWarehouseData.whName) {
          alertRow.warehouse = `${res.alertWarehouseData.whCode} - ${res.alertWarehouseData.whName}`;
          alertRow.warehouseId = res.alertWarehouseData.wareHouseId;
          alertRow.siteId = res.alertWarehouseData.bidtSiteId;
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

  public onClickCreateOrder(): void {
    const selectedAlert: AlertListRowDTO = this.selectedAlerts[0];
    this.stockAlertSearchService.getCreateOrderNameFormStockAlert().subscribe((data: string) => {
      const orderDocumentRow: CreateOrderDocumentFromStockAlert = {
        pnCode: selectedAlert.materialCode,
        materialName: selectedAlert.alertDescription,
        warehouseId: selectedAlert.warehouseId,
        warehouse: selectedAlert.warehouse,
        orderName: `${data} ${selectedAlert.materialCode}`
      };
      this.openOrderDocument(orderDocumentRow, ComponentOpenMode.Create);
    });
  }

  public openOrderDocument(object: CreateOrderDocumentFromStockAlert | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_ORDER_DOCUMENT_FORM,
      openMode
    };
    if (!!object) {
      data.objectId = this.serializationService.serialize(object);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public setSelectedMaterial(event: BirePnDTO) {
    this.showQuickSearchMaterialPopup = false;
    this.searchObject.productCode = event.pnCode;
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {
      startDate: new Date(),
      endDate: new Date()
    };
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: GetBidtStockMvtAlertInputDTO | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    this.criteriaName = event.name;
    this.searchObject = criteria || {};
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: GetBidtStockMvtAlertInputDTO = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  public onClickNewCalculation(): void {
    this.hasBeenCalculated = false;
  }

  public isWarning(alertDesign: string): boolean {
    return (
      alertDesign === 'CALENDAR_YELLOW' || alertDesign === 'CRITICALVALUE_DARK' || alertDesign === 'CRITICALVALUE_LIGHT'
    );
  }

  public isNok(alertDesign: string): boolean {
    return alertDesign === 'BADVALUE_DARK';
  }

  public openMaterialUC(rowData: AlertListRowDTO) {
    const materialFormId: BirePnDTO = {
      pnCode: rowData.materialCode
    };
    const labelKey = 'transaction.MaterialFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MaterialFormComponent',
      objectId: this.serializationService.serialize(materialFormId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
