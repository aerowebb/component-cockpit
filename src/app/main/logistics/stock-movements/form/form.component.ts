import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/primeng';
import { forkJoin } from 'rxjs';

import { BidoCustomerDTO } from '../../../../../../generated_files/api-types/bido-customer-dto.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AddShipmentAssetInput } from '../../../../shared/types/api-input-types/logistic/add-shipment-asset-input.interface';
import { AddShipmentPackageInput } from '../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { FindStockMvtFormByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvt-form-by-criteria-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { UpdateStockMvtStatusInput } from '../../../../shared/types/api-input-types/logistic/update-stock-mvt-status-input.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { StockMvtFormOutput } from '../../../../shared/types/api-output-types/stock-movements/stock-mvt-form-output.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtPackageDTO } from '../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BidtStockMvtTypeDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';
import { SearchService } from '../search/search.service';
import { StockMvtParameters } from '../stock-movement-parameters.interface';

import { ValidateAndExecOutput } from './dialog-select-location/dialog-select-location.component';
import { FormService } from './form.service';

export interface StockMovementTableInterface {
  additionalRemarks?: string;
  articleDesignation?: string;
  batchNumber?: string;
  bidtStockMvtOperations?: BidtStockMvtOperationDTO[];
  bidoCustomerName?: string;
  container?: boolean;
  criticity?: string;
  date?: string;
  diameter?: string;
  documentNum?: string;
  documentDescription?: string;
  id?: number;
  finalRecipient?: string;
  finalRecipientWarehouse?: string;
  height?: string;
  mvtStockCode?: string;
  manufacturingBatch?: ReferenceBatchDTO;
  needDislocate: boolean;
  operationalStatus?: string;
  pn?: string;
  pnCode?: string;
  pnType?: string;
  qty?: string;
  sbNumber?: string;
  bidtStorageBinBinIssue?: BidtStorageBinDTO;
  bidtStorageBinBinReceipt?: BidtStorageBinDTO;
  bidtStorageBinZoneIssue?: BidtStorageBinDTO;
  bidtStorageBinZoneReceipt?: BidtStorageBinDTO;
  sbOutputNumber?: String;
  site?: string;
  smoStatus?: SelectItem;
  sn?: string;
  statusDate?: Date;
  stockMvtCode?: string;
  unit?: string;
  volume?: string;
  warehouse?: string;
  weight?: string;
  width?: string;
  whCategory?: string;
  _bidoEquipment?: BidoEquipmentDTO;
  _birePnDTO?: BirePnDTO;
  _procurementRequest?: BidtProcurementRequestDTO;
  _transferOrder?: BidtTransferOrderDTO;
  _deliveryFolder?: BidtDeliveryFolderDTO;
  _finalSite?: BidtSiteDTO;
  _finalWarehouse?: BidtWarehouseDTO;
  _stockMvt?: BidtStockMvtDTO;
  _bidoCustomerDto?: BidoCustomerDTO;
  _procReqWorkOrderDTO?: BidmWorkOrderDTO;
}

interface StockMovementCriteriaInterface {
  site: string;
  warehouse: string;
  inboundLocalisation?: string;
  outboundLocalisation?: string;
  status?: string;
  date?: Date;
  movementType?: LabelValue<BidtStockMvtTypeDTO>;
  _site: BidtSiteDTO;
  _warehouse: BidtWarehouseDTO;
}

export enum ComponentContext {
  PICKING,
  STOCK_MOVEMENT,
  STOCK_PILLING
}

interface SubAssemblyInterface {
  batchNumber?: string;
  quantity?: number;
  creationDate?: Date;
  batchOriginQty?: number;
  operationalStatus?: string;
  location?: string;
  emp?: string;
  warehouseDes?: string;
  empCode?: string;
  statusUser?: string;
  equipmentCode?: string;
}

export abstract class FormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly PROGRESS_MAX: number = 100;
  public readonly appConstants: typeof AppConstants;
  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public readonly component: typeof FormComponent;
  public readonly componentContext: typeof ComponentContext;
  public readonly componentNamespace: string;
  public stockMovementTypes: BidtStockMvtTypeDTO[];

  public stockMovementTableDataSource: TableDataSource<StockMovementTableInterface>;

  public containerDialogVisible: boolean;

  ///

  public showCardView: boolean;
  public statusList: LabelValue<string>[];

  public showMovementInformation: boolean = false;
  public subtitle: string | undefined;

  // new implementation
  public advancement: number;
  public advancementChecked: number;
  public advancementPlanned: number;
  public advancementReleased: number;
  public advancementRequested: number;
  public advancementWaiting: number;

  public stockMovementList: StockMvtFormOutput[];
  public stockMovementsRows: StockMovementTableInterface[];
  private searchParam: FindStockMvtsByCriteriaInput;

  public opeartionalStatusMap: SelectItem[];
  public movementsStatusMap: SelectItem[];

  public formInfoCriteria: StockMovementCriteriaInterface;
  private movementTypes: LabelValue<BidtStockMvtTypeDTO>[];
  public shipementTypes: LabelValue<BidtDfTypeDTO>[];
  public procRequestTypes: LabelValue<string>[];
  public woTypes: LabelValue<string>[];

  public isDbInput: boolean;
  public isSbOutput: boolean;
  public isTreatPhase: boolean;
  public isOnGoingSelected: boolean;
  public selectedLocationDialogVisable: boolean;
  public displayAddPackaage: boolean;
  public displayDocumentDialog: boolean;

  public filtersVisible: boolean;
  public filterInLocList: LabelValue<number>[];
  public filterOutLocList: LabelValue<number>[];
  public filterFinalReceiptList: LabelValue<number>[];
  public filterInChoose?: number;
  public filterOutChoose?: number;
  public filterFinalReceiptChoose?: number;

  public stockMvtList: BidtStockMvtDTO[];
  public stockMvtListInit: BidtStockMvtDTO[];

  public bidtShipmentFolder?: BidtDeliveryFolderDTO;
  public bidtReceiptFolder?: BidtDeliveryFolderDTO;
  public shipmentPackageChoose?: BidtPackageDTO;
  public workOrderLinkToAssetId?: string;
  public assetWithOT?: boolean;
  public folderHaveAsset?: boolean;
  public firstLaunch: boolean;

  public stockMvtOperationSelected: BidtStockMvtOperationDTO[];

  public displayCreateShipmentFolder: boolean;
  public firstSelectedMvt: StockMovementTableInterface;
  public shipmentFolderCreated: boolean;
  public shipmentCreatedOutput?: AddShipmentPackageInput;
  public assetAddedToShipmentFolder: boolean;

  // AddUpdateDialog (for dislocating packaging batch)
  public openAddUpdatedialog: boolean;
  public subAssemblyPopupObject: SubAssemblyInterface;
  public addUpdateDialogQuantity: string;
  public addUpdateDialogEquipementStatus: string | undefined;
  public dislocatedEquipment: BidoEquipmentDTO | undefined;
  public dislocatedMvt: BidtStockMvtDTO | undefined;

  public packagingBatchUnit: string | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly sessionService: SessionService,
    public readonly translateService: TranslateService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly searchService: SearchService,
    private readonly formService: FormService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.appConstants = AppConstants;
    this.awPropertiesConstants = AWPropertiesConstants;
    this.component = FormComponent;
    this.componentContext = ComponentContext;
    this.componentNamespace = ComponentConstants.LOG_STOCK_MOVEMENTS_FORM;
    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public abstract get getCurrentComponentContext(): number;

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData.objectId) {
      const object = this.serializationService.deserialize(this.componentData.objectId) as StockMvtParameters;
      this.searchParam = object.searchParameters;
      this.stockMvtListInit = object.bidtStockList;
      this.bidtShipmentFolder = object.bidtShipmentFolder ? object.bidtShipmentFolder : undefined;
      this.bidtReceiptFolder = object.bidtReceiptFolder ? object.bidtReceiptFolder : undefined;
      this.shipmentPackageChoose = object.bidtPackageDTO ? object.bidtPackageDTO : undefined;
      this.workOrderLinkToAssetId = object.workOrderLinkToAssetId ? object.workOrderLinkToAssetId : undefined;
      this.assetWithOT = object.assetWithOT;
      this.folderHaveAsset = object.folderHaveAsset;
    }

    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe((results) => {
      this.movementsStatusMap = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      this.doSearch();
    });
  }

  // ////////////////////////////////////////////////////////////////////////////

  private doSearch(): void {
    const input: FindStockMvtFormByCriteriaInput = {
      stockMvtList: this.stockMvtListInit,
      shipmentFolder: this.bidtShipmentFolder ? this.bidtShipmentFolder : undefined,
      receiptFolder: this.bidtReceiptFolder ? this.bidtReceiptFolder : undefined,
      workOrderLinkToAssetId: this.workOrderLinkToAssetId,
      assetWithOT: this.assetWithOT
    };
    this.searchService.findBidtStockMvtForm(input).subscribe({
      next: (stockMovements) => {
        this.stockMovementList = stockMovements;
        this.loadCriteria();
        this.loadReferentialData();
      }
    });
  }

  public onSelectContainer(): void {
    // TODO
  }

  public reload(): void {
    this.isDbInput = false;
    this.isSbOutput = false;
    this.stockMovementsRows = [];
    this.initStockMovementTableDataSource();
    this.loadCriteria();
  }

  public selectContainter(): void {
    this.containerDialogVisible = true;
  }

  public withdrawAndShip(): void {
    // TODO
  }

  // ////////////////////////////////////////////////////////////////////////////

  protected init(): void {
    this.stockMovementTypes = [];
    this.stockMovementsRows = [];
    this.filterInLocList = [];
    this.filterOutLocList = [];
    this.filterFinalReceiptList = [];
    this.shipmentCreatedOutput = undefined;

    this.advancement = 0;
    this.advancementChecked = 0;
    this.advancementPlanned = 0;
    this.advancementReleased = 0;
    this.advancementRequested = 0;
    this.advancementWaiting = 0;

    this.firstLaunch = true;
    this.containerDialogVisible = false;
    this.isDbInput = false;
    this.isSbOutput = false;
    this.isTreatPhase = false;
    this.isOnGoingSelected = false;
    this.filtersVisible = false;
    this.selectedLocationDialogVisable = false;
    this.displayAddPackaage = false;
    this.displayDocumentDialog = false;
    this.displayCreateShipmentFolder = false;
    this.shipmentFolderCreated = false;
    this.assetAddedToShipmentFolder = false;

    this.initStockMovementTableDataSource();
    this.getOperationalStatusMap();

    //
    // this.showCardView = false;
    // this.showMovementInformation = false;
    // this.subtitle = undefined;
  }

  private getOperationalStatusMap(): void {
    const opeartionalStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
    const batchStatusMap$ = this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP);

    forkJoin([opeartionalStatusMap$, batchStatusMap$]).subscribe({
      next: ([opeartionalStatusMap, batchStatusMap]) => {
        this.opeartionalStatusMap = !!opeartionalStatusMap ? SelectItemUtils.fromLabelValues(opeartionalStatusMap) : [];
        this.opeartionalStatusMap = this.opeartionalStatusMap.concat(
          !!batchStatusMap ? SelectItemUtils.fromLabelValues(batchStatusMap) : []
        );
      }
    });
  }

  private initStockMovementTableDataSource(): void {
    this.stockMovementTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'mvtStockCode',
          translateKey: this.getTranslateKey('mvtStockCode', this.componentNamespace),
          width: '10%'
        },
        {
          field: 'article',
          translateKey: this.getTranslateKey('refeArticle', this.componentNamespace),
          width: '12.5%'
        },
        {
          field: 'batchNumber',
          translateKey: this.getTranslateKey('batchNumber', this.componentNamespace),
          width: '10%'
        },
        {
          field: 'sn',
          translateKey: this.getTranslateKey('sn', this.componentNamespace),
          width: '10%'
        },
        {
          field: 'qty',
          translateKey: this.getTranslateKey('qty', this.componentNamespace),
          width: '5%',
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'unit',
          translateKey: this.getTranslateKey('unit', this.componentNamespace),
          width: '3%',
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'status',
          translateKey: this.getTranslateKey('status', this.componentNamespace),
          width: '6%'
        },
        {
          field: 'docOfOrigin',
          translateKey: this.getTranslateKey('docOfOrigin', this.componentNamespace),
          width: '12.5%'
        },
        {
          field: 'finalRecipient',
          translateKey: this.getTranslateKey('finalRecipient', this.componentNamespace),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private changeColumns(movementType: LabelValue<BidtStockMvtTypeDTO>) {
    const place = 6;
    const numberDeletion = 0;
    switch (movementType.value.smtWay) {
      case BidtStockMvtConstants.MVT_WAY_CREDIT:
        this.isDbInput = true;
        const columnSbInput = {
          field: 'sbInput',
          translateKey: this.getTranslateKey('inboundLocalisation', this.componentNamespace),
          width: '7,5%',
          alignment: ColumnAlignment.LEFT
        };

        this.stockMovementTableDataSource.columns.splice(place, numberDeletion, columnSbInput);
        break;

      case BidtStockMvtConstants.MVT_WAY_DEBIT:
        this.isSbOutput = true;
        const columnSbOutput = {
          field: 'sbOutput',
          translateKey: this.getTranslateKey('outboundLocalisation', this.componentNamespace),
          width: '7,5%',
          alignment: ColumnAlignment.LEFT
        };

        this.stockMovementTableDataSource.columns.splice(place, numberDeletion, columnSbOutput);
        break;

      case BidtStockMvtConstants.MVT_WAY_TRANSFER:
        this.isDbInput = true;
        this.isSbOutput = true;
        const columnBothSb = [
          {
            field: 'sbInput',
            translateKey: this.getTranslateKey('inboundLocalisation', this.componentNamespace),
            width: '7.5%',
            alignment: ColumnAlignment.LEFT
          },
          {
            field: 'sbOutput',
            translateKey: this.getTranslateKey('outboundLocalisation', this.componentNamespace),
            width: '7.5%',
            alignment: ColumnAlignment.LEFT
          }
        ];
        columnBothSb.forEach((column) => {
          this.stockMovementTableDataSource.columns.splice(place, numberDeletion, column);
        });
        break;

      default:
        break;
    }
  }

  private updateAdvancement(stockMovements: BidtStockMvtDTO[]): void {
    const statuses = stockMovements.map((stockMovement) => stockMovement.mvtStatus);

    this.advancementChecked = statuses.filter(
      (status) => status === AWPropertiesConstants.MM_MVT_STATUS_CHECKED_KEY
    ).length;
    this.advancementPlanned = statuses.filter(
      (status) => status === AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY
    ).length;
    this.advancementReleased = statuses.filter(
      (status) => status === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    ).length;
    this.advancementRequested = statuses.filter(
      (status) => status === AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY
    ).length;

    if (this.isTreatPhase) {
      const percentage = 100;
      this.advancement = Math.floor((this.advancementReleased / statuses.length) * percentage);
    } else {
      this.advancement = 0;
    }
  }

  // ////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////

  public getOperationnalStatus(key: string): string {
    return this.opeartionalStatusMap.filter((status) => status.value === key)[0].label as string;
  }

  public getMvtStockStatus(key: string): SelectItem {
    return this.movementsStatusMap.filter((status) => status.value === key)[0];
  }

  private loadStockMovementTable(): void {
    this.changeColumns(this.formInfoCriteria.movementType as LabelValue<BidtStockMvtTypeDTO>);
    this.updateAdvancement(
      this.stockMovementList.map((row) => {
        return row.stockMvt;
      })
    );
    this.stockMovementList
      .filter(
        (movement) =>
          !ObjectUtils.isDefined(movement.procurementRequest) ||
          ObjectUtils.isDefined(movement.procurementRequest.procType)
      )
      .forEach((movement) => {
        const movementRow: StockMovementTableInterface = {
          articleDesignation: movement.stockMvt.birePnArticleDesignation,
          batchNumber: movement.stockMvt.stockMvtBatchNumber,
          bidoCustomerName: movement.bidoCustomerReceipt
            ? (movement.bidoCustomerReceipt.customerCode as string) +
              (movement.bidoCustomerReceipt.customerName ? ` - ${movement.bidoCustomerReceipt.customerName}` : '')
            : undefined,
          criticity: movement.procurementRequest
            ? movement.procurementRequest.criticality
            : movement.transferOrder
            ? movement.transferOrder.criticality
            : movement.deliveryFolder
            ? movement.deliveryFolder.criticality
            : undefined,
          documentNum: movement.procurementRequest
            ? movement.procReqWorkOrderDTO
              ? movement.procReqWorkOrderDTO.woCode
              : movement.procurementRequest.procCode
            : movement.transferOrder
            ? movement.transferOrder.torCode
            : movement.deliveryFolder
            ? movement.deliveryFolder.dfCode
            : movement.mvtWorkOrderDTO
            ? movement.mvtWorkOrderDTO.woCode
            : undefined,
          documentDescription: movement.procurementRequest
            ? movement.procReqWorkOrderDTO
              ? this.getWoType(movement.procReqWorkOrderDTO.woType as string)
              : this.getProcRequestTypes(movement.procurementRequest.procType as string)
            : movement.transferOrder
            ? this.extractTranslationPipe.transform(
                this.getShipementType(Number(movement.transferOrder.torType)).dftDesignation
              )
            : movement.deliveryFolder
            ? StringUtils.orEmpty(
                this.extractTranslationPipe.transform(
                  (movement.deliveryFolder.bidtDfType as BidtDfTypeDTO).dftDesignation
                )
              )
            : movement.mvtWorkOrderDTO
            ? this.getWoType(movement.mvtWorkOrderDTO.woType as string)
            : undefined,
          bidtStockMvtOperations: !ListUtils.isNullOrEmpty(movement.stockMvt.bidtStockMvtOperations)
            ? movement.stockMvt.bidtStockMvtOperations
            : undefined,
          needDislocate: this.getNeedDislocate(movement),
          id: movement.stockMvt.id,
          pnCode: movement.stockMvt.birePnPnCode,
          sn: movement.stockMvt.stockMvtSn,
          site: movement.finalSite
            ? (movement.finalSite.siteCode as string) +
              (movement.finalSite.siteName ? ` - ${movement.finalSite.siteName}` : '')
            : undefined,
          qty: movement.stockMvt.stockMvtQuantity,
          bidtStorageBinBinIssue: movement.stockMvt.bidtStorageBinBinIssue,
          bidtStorageBinBinReceipt: movement.stockMvt.bidtStorageBinBinReceipt,
          bidtStorageBinZoneIssue: movement.stockMvt.bidtStorageBinZoneIssue,
          bidtStorageBinZoneReceipt: movement.stockMvt.bidtStorageBinZoneReceipt,
          smoStatus: this.getMvtStockStatus(movement.stockMvt.mvtStatus as string),
          mvtStockCode: movement.stockMvt.stockMvtCode,
          unit: movement.birePnDTO ? movement.birePnDTO.quantityUnit : undefined,
          warehouse: movement.finalWarehouse
            ? (movement.finalWarehouse.whCode as string) +
              (movement.finalWarehouse.whName ? ` - ${movement.finalWarehouse.whName}` : '')
            : undefined,
          statusDate: movement.stockMvt.statusDate,
          _bidoEquipment: movement.equipment,
          manufacturingBatch: movement.manufacturingEquipment,
          operationalStatus: movement.equipment.operationalStatus
            ? this.getOperationnalStatus(movement.equipment.operationalStatus)
            : undefined,
          _procurementRequest: movement.procurementRequest ? movement.procurementRequest : undefined,
          _procReqWorkOrderDTO: movement.procReqWorkOrderDTO ? movement.procReqWorkOrderDTO : undefined,
          _transferOrder: movement.transferOrder ? movement.transferOrder : undefined,
          _deliveryFolder: movement.deliveryFolder ? movement.deliveryFolder : undefined,
          _finalSite: movement.finalSite,
          _finalWarehouse: movement.finalWarehouse,
          _stockMvt: movement.stockMvt,
          _birePnDTO: movement.birePnDTO
        };
        this.stockMovementsRows.push(movementRow);
        this.addFilterRow(movement);
      });
    this.sortStockMovementRows();
    this.sortFilterLists();
    this.stockMovementTableDataSource.setData([...this.stockMovementsRows]);

    if (this.bidtReceiptFolder && this.firstLaunch) {
      this.firstLaunch = false;
      this.stockMovementTableDataSource.dataSelection = this.stockMovementTableDataSource.data;
      this.treatMvts();
    }
  }

  public abstract sortStockMovementRows(): StockMovementTableInterface[];

  private getNeedDislocate(movement: StockMvtFormOutput): boolean {
    return (
      !!movement.equipment &&
      !!movement.equipment.quantity &&
      !!movement.stockMvt.stockMvtQuantity &&
      Number(movement.stockMvt.stockMvtQuantity) < movement.equipment.quantity
    );
  }

  private getShipementType(key: number): BidtDfTypeDTO {
    return this.shipementTypes.filter((shipement) => shipement.value.id === key)[0].value;
  }

  private getProcRequestTypes(key: string): string {
    return this.procRequestTypes.filter((procRequest) => procRequest.value === key)[0].label;
  }

  private getWoType(key: string): string {
    return this.woTypes.filter((woType) => woType.value === key)[0].label;
  }

  private addFilterRow(movement: StockMvtFormOutput): void {
    if (movement.stockMvt.bidtStorageBinZoneIssue) {
      const filter: LabelValue<number> = {
        label:
          (movement.stockMvt.bidtStorageBinZoneIssue.sbNumber as string) +
          (movement.stockMvt.bidtStorageBinZoneIssue.sbDescription
            ? ` - ${movement.stockMvt.bidtStorageBinZoneIssue.sbDescription}`
            : ''),
        value: movement.stockMvt.bidtStorageBinZoneIssue.id as number
      };
      this.filterOutLocList.push(filter);
    }

    if (movement.stockMvt.bidtStorageBinZoneReceipt) {
      const filter: LabelValue<number> = {
        label:
          (movement.stockMvt.bidtStorageBinZoneReceipt.sbNumber as string) +
          (movement.stockMvt.bidtStorageBinZoneReceipt.sbDescription
            ? ` - ${movement.stockMvt.bidtStorageBinZoneReceipt.sbDescription}`
            : ''),
        value: movement.stockMvt.bidtStorageBinZoneReceipt.id as number
      };
      this.filterInLocList.push(filter);
    }

    if (movement.finalWarehouse) {
      const filter: LabelValue<number> = {
        label: `${movement.finalWarehouse.whCode} - ${movement.finalWarehouse.whName}`,
        value: movement.finalWarehouse.wareHouseId as number
      };
      this.filterFinalReceiptList.push(filter);
    }
  }

  private sortFilterLists(): void {
    this.filterInLocList = this.filterInLocList.reduce(
      (unique: LabelValue<number>[], column: LabelValue<number>) =>
        unique.every((elt) => elt.label !== column.label) ? [...unique, column] : unique,
      []
    );
    this.filterInLocList.sort((a, b) => Number(a.label) - Number(b.label));

    this.filterOutLocList = this.filterOutLocList.reduce(
      (unique: LabelValue<number>[], column: LabelValue<number>) =>
        unique.every((elt) => elt.label !== column.label) ? [...unique, column] : unique,
      []
    );
    this.filterOutLocList.sort((a, b) => Number(a.label) - Number(b.label));

    this.filterFinalReceiptList = this.filterFinalReceiptList.reduce(
      (unique: LabelValue<number>[], column: LabelValue<number>) =>
        unique.every((elt) => elt.label !== column.label) ? [...unique, column] : unique,
      []
    );
    this.filterOutLocList.sort((a, b) => a.label.localeCompare(b.label));
  }

  private loadCriteria(): void {
    const site$ = this.formService.findSiteById(
      this.searchParam.stockMvt.bidtSiteByBidtSiteReceiptId
        ? this.searchParam.stockMvt.bidtSiteByBidtSiteReceiptId
        : (this.searchParam.stockMvt.bidtSiteByBidtSiteIssueId as number)
    );

    const warehouse$ = this.formService.findBidtWarehouseById(
      this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseReceiptId
        ? this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseReceiptId
        : (this.searchParam.stockMvt.bidtWarehouseByBidtWarehouseIssueId as number)
    );

    const movementsTypes$ = this.logisticsService.findStockMvtTypes();

    const shippmentTypes$ = this.formService.loadShipmentType();

    const procRequestTypes$ = this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP);

    const workOrderTypes$ = this.propertiesService.getValue(GenericPropertyConstants.AIRM_WORK_ORDER_TYPES_MAP);

    forkJoin([site$, warehouse$, movementsTypes$, shippmentTypes$, procRequestTypes$, workOrderTypes$]).subscribe({
      next: ([site, warehouse, movementsTypes, shippmentTypes, procRequestTypes, workOrderTypes]) => {
        this.shipementTypes = this.getCorrectShippementTypeList(shippmentTypes);
        this.movementTypes = this.getCorrectMvtTypeList(movementsTypes);
        this.procRequestTypes = procRequestTypes;
        this.woTypes = workOrderTypes;
        if (this.searchParam.stockMvt.bidtStockMvtTypeId) {
          this.formInfoCriteria = {
            movementType: this.getMvtTypeCriteria(this.movementTypes, this.searchParam.stockMvt.bidtStockMvtTypeId),
            status:
              this.searchParam.mvtStatus && this.searchParam.mvtStatus.length > 0
                ? this.getMvtStockStatus(this.searchParam.mvtStatus[0]).label
                : this.translateService.instant(this.getTranslateKey('noExcecuted', this.componentNamespace)),
            date: this.searchParam.untilRealDate ? this.searchParam.untilRealDate : this.searchParam.untilPlannedDate,
            site: (site.siteCode as string) + (site.siteName ? ` - ${site.siteName}` : ''),
            warehouse: (warehouse.whCode as string) + (warehouse.whName ? ` - ${warehouse.whName}` : ''),
            _site: site,
            _warehouse: warehouse
          };
        }
        this.loadStockMovementTable();
      }
    });
  }

  private getCorrectMvtTypeList(movementsTypes: BidtStockMvtTypeDTO[]): LabelValue<BidtStockMvtTypeDTO>[] {
    return ListUtils.orEmpty(movementsTypes)
      .map((movementType) => {
        return {
          label: this.extractTranslationPipe.transform(movementType.smtName),
          value: movementType
        };
      })
      .sort((s1, s2) => s1.label.localeCompare(s2.label));
  }

  private getCorrectShippementTypeList(shipementTypes: BidtDfTypeDTO[]): LabelValue<BidtDfTypeDTO>[] {
    return ListUtils.orEmpty(shipementTypes)
      .map((shipementType) => {
        return {
          label: this.extractTranslationPipe.transform(shipementType.dftDesignation),
          value: shipementType
        };
      })
      .sort((s1, s2) => s1.label.localeCompare(s2.label));
  }

  private getMvtTypeCriteria(
    movementsTypes: LabelValue<BidtStockMvtTypeDTO>[],
    typeid: number
  ): LabelValue<BidtStockMvtTypeDTO> {
    const typeMvt = movementsTypes.filter((type) => type.value.id === typeid);

    return typeMvt[0];
  }

  public openLinkEquipment(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMfgBatch(objectId: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openLink(equipment: BidoEquipmentDTO) {
    if (equipment.sn) {
      this.openEquipment(equipment.equipmentCode, ComponentOpenMode.Read);
    } else {
      this.openSelectedBatch(equipment.equipmentCode as string);
    }
  }

  public openSelectedBatch(code: string) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode: ComponentOpenMode.Read
    };

    data.objectId = code;

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public treatMvts(): void {
    this.isOnGoingSelected = false;
    const inputList: UpdateStockMvtStatusInput[] = [];
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      const input: UpdateStockMvtStatusInput = {
        stockMvtId: row.id as number,
        newStatus: AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY
      };
      inputList.push(input);
    });

    this.formService.updateMvtsStatus(inputList).subscribe((updated) => {
      this.isTreatPhase = true;
      this.stockMovementList = updated;
      this.reload();
    });
  }

  public executeMvts(): void {
    const inputList: UpdateStockMvtStatusInput[] = [];
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      const input: UpdateStockMvtStatusInput = {
        stockMvtId: row.id as number,
        newStatus: AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      };
      inputList.push(input);
    });

    this.formService.updateMvtsStatus(inputList).subscribe((updated) => {
      if (this.shipmentFolderCreated) {
        this.formService
          .findShipmentAssociatedMvt(
            updated.map((row) => {
              return row.stockMvt;
            })
          )
          .subscribe((shipmentMvt) => {
            if (this.shipmentCreatedOutput) {
              this.addToNewShipmentFolder(this.shipmentCreatedOutput, shipmentMvt);
            }
          });
      }
      updated.forEach((movement) => {
        const testNumber = this.stockMovementList.findIndex(
          (movementDto) => movementDto.stockMvt.id === movement.stockMvt.id
        );
        this.stockMovementList.splice(testNumber, 1, movement);
      });
      this.reload();
    });
  }

  public checkMvts(): void {
    const inputList: UpdateStockMvtStatusInput[] = [];
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      const input: UpdateStockMvtStatusInput = {
        stockMvtId: row.id as number,
        newStatus: AWPropertiesConstants.MM_MVT_STATUS_CHECKED_KEY
      };
      inputList.push(input);
    });

    this.formService.updateMvtsStatus(inputList).subscribe((updated) => {
      updated.forEach((movement) => {
        const testNumber = this.stockMovementList.findIndex(
          (movementDto) => movementDto.stockMvt.id === movement.stockMvt.id
        );
        this.stockMovementList.splice(testNumber, 1, movement);
      });
      this.reload();
    });
  }

  public restTreatPhase() {
    const inputList: UpdateStockMvtStatusInput[] = [];
    this.stockMovementTableDataSource.data.forEach((row) => {
      if ((row.smoStatus as SelectItem).value !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY) {
        const input: UpdateStockMvtStatusInput = {
          stockMvtId: row.id as number,
          newStatus: AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY
        };
        inputList.push(input);
      }
    });

    this.formService.updateMvtsStatus(inputList).subscribe((updated) => {
      const mvtList = updated.map((rowUpdate) => {
        return rowUpdate.stockMvt;
      });
      if (this.bidtReceiptFolder) {
        this.openReceiptFolder(this.bidtReceiptFolder as BidtDeliveryFolderDTO);
      } else if (this.shipmentFolderCreated && this.shipmentCreatedOutput) {
        this.openShipmentFolder(this.shipmentCreatedOutput.bidtDeliveryFolderDTO as BidtDeliveryFolderDTO);
      } else {
        this.stockMvtListInit = mvtList;
        this.isTreatPhase = false;
        this.isDbInput = false;
        this.isSbOutput = false;
        this.stockMovementsRows = [];
        this.initStockMovementTableDataSource();
        this.doSearch();
      }
    });
  }

  public checkIfOnGoingSelected() {
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      if ((row.smoStatus as SelectItem).value === AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
        this.isOnGoingSelected = true;
      }
    });
    if (!this.isOnGoingSelected) {
      this.treatMvts();
    }
  }

  public checkIfExecutedSelected(): boolean {
    let isExecutedSelected = false;
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      if ((row.smoStatus as SelectItem).value === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY) {
        isExecutedSelected = true;
      }
    });

    return isExecutedSelected;
  }

  private loadReferentialData(): void {
    this.statusList = [];
  }

  public openDocOrigine(movementRow: StockMovementTableInterface): void {
    if (movementRow._procReqWorkOrderDTO) {
      this.openWorkOrderLink(movementRow._procReqWorkOrderDTO);
    } else if (movementRow._procurementRequest) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
        objectId: this.serializationService.serialize({ id: movementRow._procurementRequest.id }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._transferOrder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
        objectId: this.serializationService.serialize(movementRow._transferOrder.id),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else if (movementRow._deliveryFolder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({ id: movementRow._deliveryFolder.id })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openStockMovement(rowData: StockMovementTableInterface): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_MOVEMENT_FORM,
      openMode: ComponentOpenMode.Read
    };
    const inputObject = {
      id: rowData.id,
      bidtProcReqItemId: rowData._stockMvt && rowData._stockMvt.bidtProcReqItemId
    };
    data.objectId = this.serializationService.serialize(inputObject);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openWorkOrderLink(workOrder: BidmWorkOrderDTO): void {
    if (workOrder && workOrder.woId && workOrder.projectId) {
      const workOrderId: BidmWorkOrderDTOId = {
        woId: workOrder.woId,
        projectId: workOrder.projectId
      };
      this.openWorkOrder(workOrderId, ComponentOpenMode.Read);
    }
  }

  private openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openPartNumberLink(pnCode: string | undefined): void {
    this.openPN(pnCode, ComponentOpenMode.Read);
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
      objectId,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public clearTableFilters(): void {
    this.filterInChoose = undefined;
    this.filterOutChoose = undefined;
    this.filterFinalReceiptChoose = undefined;
    this.stockMovementTableDataSource.setData([...this.stockMovementsRows]);
  }

  public filterTable(): void {
    let tableFilter: StockMovementTableInterface[] = [...this.stockMovementsRows];

    if (this.filterInChoose) {
      tableFilter = tableFilter.filter(
        (elt) => elt.bidtStorageBinZoneReceipt && elt.bidtStorageBinZoneReceipt.id === this.filterInChoose
      );
    }
    if (this.filterOutChoose) {
      tableFilter = tableFilter.filter(
        (elt) => elt.bidtStorageBinZoneIssue && elt.bidtStorageBinZoneIssue.id === this.filterOutChoose
      );
    }
    if (this.filterFinalReceiptChoose) {
      tableFilter = tableFilter.filter(
        (elt) => elt._finalWarehouse && elt._finalWarehouse.wareHouseId === this.filterFinalReceiptChoose
      );
    }
    this.stockMovementTableDataSource.setData([...tableFilter]);
  }

  public openSelectLocaationDialog(): void {
    this.stockMvtList = this.stockMovementTableDataSource.dataSelection.map((row) => {
      return row._stockMvt as BidtStockMvtDTO;
    });
    this.selectedLocationDialogVisable = true;
  }

  public onChangeLocation(changedLocation: BidtStorageBinDTO[]): void {
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      row.bidtStorageBinZoneReceipt = changedLocation[0];
      row.bidtStorageBinBinReceipt = changedLocation[1];
    });
  }

  public onChangeAndExecLocation(changedLocation: ValidateAndExecOutput): void {
    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      if (changedLocation.isBoth) {
        row.bidtStorageBinZoneReceipt = changedLocation.bidtStorageList[0];
        row.bidtStorageBinBinReceipt = changedLocation.bidtStorageList[1];
      } else {
        row.bidtStorageBinZoneReceipt = changedLocation.bidtStorageList[0];
      }
    });
    this.executeMvts();
  }

  public createShipmentAndPackage(): void {
    this.firstSelectedMvt = this.stockMovementTableDataSource.dataSelection[0];
    this.displayCreateShipmentFolder = true;
  }

  public createShipmentFolder(input: AddShipmentPackageInput): void {
    this.shipmentFolderCreated = true;
    this.shipmentCreatedOutput = input;
    this.treatMvts();
  }

  public checkAllSameFinalReceipt(inputList: StockMovementTableInterface[]) {
    if (!!inputList[0]._finalWarehouse) {
      return (
        inputList.filter(
          (movementRow) =>
            !!movementRow._finalWarehouse &&
            movementRow._finalWarehouse.wareHouseId === (inputList[0]._finalWarehouse as BidtWarehouseDTO).wareHouseId
        ).length === inputList.length
      );
    } else if (!!inputList[0]._bidoCustomerDto) {
      return (
        inputList.filter(
          (movementRow) =>
            !!movementRow._bidoCustomerDto &&
            movementRow._bidoCustomerDto.customerCode ===
              (inputList[0]._bidoCustomerDto as BidoCustomerDTO).customerCode
        ).length === inputList.length
      );
    }
  }

  public checkAllSameTransferOrderType(inputList: StockMovementTableInterface[]) {
    if (!!inputList[0]._transferOrder) {
      return (
        inputList.filter(
          (movementRow) =>
            !!movementRow._transferOrder &&
            movementRow._transferOrder.torType === (inputList[0]._transferOrder as BidtTransferOrderDTO).torType
        ).length === inputList.length
      );
    }
  }

  public checkDislocationNeeded(): boolean {
    let isDislocateNeeded = false;
    this.stockMovementTableDataSource.dataSelection.forEach((rowSelected) => {
      if (rowSelected.needDislocate) {
        isDislocateNeeded = true;

        return;
      }
    });

    return isDislocateNeeded;
  }

  public openAddPackageToShipment(): void {
    const mvtList = this.stockMovementTableDataSource.dataSelection
      .filter((row) => !!row._stockMvt)
      .map((row) => {
        return row._stockMvt as BidtStockMvtDTO;
      });
    this.formService.findWorkOrderByMvts(mvtList).subscribe((workOrders) => {
      if (
        workOrders &&
        workOrders.length > 0 &&
        this.bidtShipmentFolder &&
        this.bidtShipmentFolder.bidtWarehouseReceiver &&
        this.bidtShipmentFolder.bidtWarehouseReceiver.whCategory === AWPropertiesConstants.WAREHOUSE_CATEGORY_WORKSHOP
      ) {
        if (this.isAllHaveWorkOrder(workOrders) && mvtList.length === workOrders.length) {
          this.doChecks();
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('warnigWorkOrder', this.componentNamespace));
        }
      } else {
        this.doChecks();
      }
    });
  }

  private doChecks(): void {
    if (this.shipmentPackageChoose === undefined) {
      this.displayAddPackaage = true;
    } else {
      const inputWithPackage: AddShipmentPackageInput = {
        bidtPackageDTO: this.shipmentPackageChoose,
        isGenerated: false,
        createWithPackage: true
      };
      this.addToShipmentFolder(inputWithPackage);
    }
  }

  private isAllHaveWorkOrder(workOrders: BidmWorkOrderDTO[]): boolean {
    return workOrders.length === workOrders.filter((row) => !!row).length;
  }

  public addToShipmentFolder(input: AddShipmentPackageInput): void {
    const addToShipmentInput: AddShipmentAssetInput[] = [];

    this.stockMovementTableDataSource.dataSelection.forEach((row) => {
      const addToShipmentInputRow: AddShipmentAssetInput = {
        bidtStockMvtDTO: row._stockMvt as BidtStockMvtDTO,
        bidtDeliveryFolderDTO: this.bidtShipmentFolder as BidtDeliveryFolderDTO,
        bidtPackageDTO: input.bidtPackageDTO,
        generated: input.isGenerated,
        createWithPackage: input.createWithPackage,
        transferOrder: row._transferOrder as BidtTransferOrderDTO,
        bidtDfItemDTOList:
          input.bidtPackageDTO.id && this.bidtShipmentFolder && this.bidtShipmentFolder.bidtDfItems
            ? this.bidtShipmentFolder.bidtDfItems.filter(
                (item) => !!item.bidtPackage && item.bidtPackage.id === input.bidtPackageDTO.id
              )
            : this.bidtShipmentFolder && this.bidtShipmentFolder.bidtDfItems
            ? this.bidtShipmentFolder.bidtDfItems.filter((item) => !item.bidtPackage)
            : undefined
      };
      addToShipmentInput.push(addToShipmentInputRow);
    });
    this.formService.addAssetToShipmentFolder(addToShipmentInput).subscribe(() => {
      this.openShipmentFolder(this.bidtShipmentFolder as BidtDeliveryFolderDTO);
    });
  }

  public addToNewShipmentFolder(input: AddShipmentPackageInput, mvtList: StockMvtFormOutput[]) {
    const addToShipmentInput: AddShipmentAssetInput[] = [];

    mvtList.forEach((row) => {
      const addToShipmentInputRow: AddShipmentAssetInput = {
        bidtStockMvtDTO: row.stockMvt,
        bidtDeliveryFolderDTO: input.bidtDeliveryFolderDTO as BidtDeliveryFolderDTO,
        bidtPackageDTO: input.bidtPackageDTO,
        generated: input.isGenerated,
        createWithPackage: input.createWithPackage,
        transferOrder: row.transferOrder,
        bidtDfItemDTOList:
          input.bidtPackageDTO.id && this.bidtShipmentFolder && this.bidtShipmentFolder.bidtDfItems
            ? this.bidtShipmentFolder.bidtDfItems.filter(
                (item) => !!item.bidtPackage && item.bidtPackage.id === input.bidtPackageDTO.id
              )
            : this.bidtShipmentFolder && this.bidtShipmentFolder.bidtDfItems
            ? this.bidtShipmentFolder.bidtDfItems.filter((item) => !item.bidtPackage)
            : undefined
      };
      addToShipmentInput.push(addToShipmentInputRow);
    });
    this.formService.addAssetToShipmentFolder(addToShipmentInput).subscribe(() => {
      this.assetAddedToShipmentFolder = true;
    });
  }

  public openShipmentFolder(df: BidtDeliveryFolderDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_SHIPMENT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ id: df.id })
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openReceiptFolder(df: BidtDeliveryFolderDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_RECEIPT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ id: df.id })
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isChangeLocationVisible(): boolean {
    return this.stockMovementTableDataSource.dataSelection.every(
      (elt) => !elt.smoStatus || elt.smoStatus.value !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );
  }

  public isCheckMvtsVisible(): boolean {
    return this.stockMovementTableDataSource.dataSelection.every(
      (elt) => !elt.smoStatus || elt.smoStatus.value !== AWPropertiesConstants.MM_MVT_STATUS_CHECKED_KEY
    );
  }

  public openDocumentDialog(mvtOperations: BidtStockMvtOperationDTO[]) {
    this.stockMvtOperationSelected = mvtOperations;
    this.displayDocumentDialog = true;
  }

  public showAddUpdatePopup(stockMvtTableInterface: StockMovementTableInterface): void {
    this.subAssemblyPopupObject = {};
    this.subAssemblyPopupObject.batchNumber = stockMvtTableInterface.batchNumber;
    this.packagingBatchUnit = stockMvtTableInterface.unit;

    this.dislocatedEquipment = stockMvtTableInterface._bidoEquipment;
    this.dislocatedMvt = stockMvtTableInterface._stockMvt;
    if (
      !!this.dislocatedMvt &&
      !!this.dislocatedMvt.stockMvtQuantity &&
      !!this.dislocatedEquipment &&
      !!this.dislocatedEquipment.quantity
    ) {
      this.subAssemblyPopupObject.quantity = Number(this.dislocatedMvt.stockMvtQuantity);
      this.addUpdateDialogQuantity = this.dislocatedMvt.stockMvtQuantity.toString();
      this.addUpdateDialogEquipementStatus = this.dislocatedEquipment.operationalStatus;
      this.openAddUpdatedialog = true;
    }
  }

  public updateSubAssembly(subAssemblyObject: SubAssemblyInterface): void {
    if (!!this.dislocatedEquipment) {
      const bidoEquipmentObject: BidoEquipmentDTO = {
        ...this.dislocatedEquipment
      };
      bidoEquipmentObject.equEquipmentCode = bidoEquipmentObject.equipmentCode;
      bidoEquipmentObject.quantity = subAssemblyObject.quantity;
      bidoEquipmentObject.batchNumber = subAssemblyObject.batchNumber;
      bidoEquipmentObject.operationalStatus = subAssemblyObject.batchNumber;
      bidoEquipmentObject.operationalStatus = subAssemblyObject.operationalStatus;
      bidoEquipmentObject.manufacturingDate = subAssemblyObject.creationDate;
      bidoEquipmentObject.statusUser = subAssemblyObject.statusUser;
      bidoEquipmentObject.equipmentCode = undefined;

      this.formService.addOrUpdateBatch(bidoEquipmentObject).subscribe((equipmentCode) => {
        if (!!this.dislocatedMvt) {
          this.logisticsService.findStockMvtStoryFromFirstStockMvt(this.dislocatedMvt).subscribe((stocksMvt) => {
            stocksMvt.forEach((stock) => {
              stock.stockMvtBatchNumber = bidoEquipmentObject.batchNumber;
            });
            this.formService.addOrUpdateMvts(stocksMvt).subscribe(() => {
              if (!this.isTreatPhase) {
                this.openAddUpdatedialog = false;
                this.stockMovementsRows = [];
                this.dislocatedEquipment = undefined;
                this.dislocatedMvt = undefined;
                this.initStockMovementTableDataSource();
                this.doSearch();
              } else {
                this.stockMvtListInit = this.stockMovementList.map((row) => {
                  return row.stockMvt;
                });
                this.openAddUpdatedialog = false;
                this.stockMovementsRows = [];
                this.dislocatedEquipment = undefined;
                this.dislocatedMvt = undefined;
                this.initStockMovementTableDataSource();
                this.doSearch();
              }
            });
          });
        }
      });
    }
  }
}
