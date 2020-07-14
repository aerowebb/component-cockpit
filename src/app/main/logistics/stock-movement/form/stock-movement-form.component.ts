import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { forkJoin } from 'rxjs';

import { ListUtils } from '../../../..//shared/utils/list-utils';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
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
import { TabService } from '../../../../shared/services/tab.service';
import { FindStockMvtFormByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvt-form-by-criteria-input.interface';
import { StockMvtFormOutput } from '../../../../shared/types/api-output-types/stock-movements/stock-mvt-form-output.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BidtStockMvtTypeDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { LogisticalUtils } from '../../../../shared/utils/logistic-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { LogisticsService } from '../../logistics.service';

interface MovementInterface {
  number?: string;
  toRealizeThe?: Date;
  status?: string;
  docNumber?: string;
  docType?: string;
  docControl?: string;
  site?: string;
  warehouse?: string;
  zone?: string;
  emplacement?: string;
  outZone?: string;
  outEmplacement?: string;
  article?: string;
  snOrLot?: string;
  qty?: number;
  materialType?: string;
  articleDesignation?: string;
  executionDate?: Date;
  bidtStockMvtType?: BidtStockMvtTypeDTO;
  bidtStockMvtName?: string;
  batchNumber?: string;
  criticality?: string;
}

interface DocumentInterface {
  documentNumber?: string;
  docComment?: string;
  docTye?: string;
  docExtension?: string;
  cut?: string;
  docDate?: Date;
}

interface OperationInterface {
  smoCode?: number;
  designation?: string;
  id?: string;
}

@Component({
  selector: 'aw-stock-movement',
  templateUrl: './stock-movement-form.component.html',
  styleUrls: ['./stock-movement-form.component.scss']
})
export class StockMovementFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public formInfo: MovementInterface;
  public documentsTableDataSource: TableDataSource<DocumentInterface>;
  public movementsStatusMap: SelectItem[];
  public readonly bidtStockMvtConstants: typeof BidtStockMvtConstants;
  public operationTableDataSource: TableDataSource<OperationInterface>;
  private pnTypeList: LabelValue<string>[];
  public procurementRequestCriticities: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    tabService: TabService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.bidtStockMvtConstants = BidtStockMvtConstants;
    this.aWPropertiesConstants = AWPropertiesConstants;
    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_MOVEMENT_FORM;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    const componentData: BidtStockMvtDTO = this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : {};

    const mvtStatusMap = this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP);

    const pnTypeMap = this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP);

    const criticities = this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);

    forkJoin({ pnTypeMap, mvtStatusMap, criticities }).subscribe({
      next: (results) => {
        this.pnTypeList = ListUtils.orEmpty(results.pnTypeMap);
        this.procurementRequestCriticities = ListUtils.orEmpty(results.criticities);
        this.procurementRequestCriticities = LogisticalUtils.sortCriticities(this.procurementRequestCriticities);
        this.movementsStatusMap =
          !!results && results.mvtStatusMap ? SelectItemUtils.fromLabelValues(results.mvtStatusMap) : [];
        this.setPageInfo(componentData);
        this.getDocumentData(componentData);
      }
    });
  }

  private init(): void {
    this.formInfo = {};
    this.initMovementTableDataSource();
    this.initOperationTableDataSource();
  }
  // /**********************************
  //  * TABLE init
  //  **********************************/
  private initMovementTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'documentNumber',
          translateKey: this.getTranslateKey('documentNumber')
        },
        {
          field: 'docComment',
          translateKey: this.getTranslateKey('docComment')
        },
        {
          field: 'docTye',
          translateKey: this.getTranslateKey('docTye')
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension')
        },
        {
          field: 'cut',
          translateKey: this.getTranslateKey('cut')
        },
        {
          field: 'docDate',
          translateKey: this.getTranslateKey('docDate')
        }
      ],
      data: []
    });
  }

  private initOperationTableDataSource(): void {
    this.operationTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'smoCode',
          translateKey: this.getTranslateKey('smoCode')
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation')
        }
      ],
      data: []
    });
  }

  private getDocumentData(inputData: BidtStockMvtDTO): void {
    if (inputData && inputData.id) {
      this.logisticsService.findDocumentByDeliveryFolderId(inputData.id).subscribe((response: BidtDocumentDTO[]) => {
        if (response && response.length) {
          response.forEach((element) => {
            const documentArray: DocumentInterface = {
              documentNumber: element.documentCode,
              docComment: element.documentDescription,
              docTye: element.documentType,
              docExtension: FileUtils.getExtension(element.documentName).toUpperCase(),
              docDate: element.statusDate,
              cut: element.documentCategory
            };
            this.documentsTableDataSource.addData([documentArray]);
          });
        }
      });
    }
  }

  private setPageInfo(inputData: BidtStockMvtDTO): void {
    const inputArray: FindStockMvtFormByCriteriaInput = {
      stockMvtList: [inputData]
    };
    this.logisticsService.findBidtStockMvtForm(inputArray).subscribe({
      next: (stockMovements) => {
        if (stockMovements && stockMovements.length) {
          const stockMovementObject: StockMvtFormOutput = stockMovements[0];
          this.formInfo = {
            number: stockMovementObject.stockMvt.stockMvtCode,
            docNumber: stockMovementObject.procurementRequest
              ? stockMovementObject.procurementRequest.procCode
              : stockMovementObject.transferOrder
              ? stockMovementObject.transferOrder.torCode
              : stockMovementObject.deliveryFolder
              ? stockMovementObject.deliveryFolder.dfCode
              : undefined,
            docType: stockMovementObject.procurementRequest
              ? stockMovementObject.procurementRequest.procType
              : undefined,
            status: stockMovementObject.stockMvt.mvtStatus
              ? this.getMvtStockStatus(stockMovementObject.stockMvt.mvtStatus as string).label
              : '',
            site: stockMovementObject.finalSite
              ? `${stockMovementObject.finalSite.siteCode} - ${stockMovementObject.finalSite.siteName}`
              : undefined,
            warehouse: stockMovementObject.finalWarehouse
              ? `${stockMovementObject.finalWarehouse.whCode} - ${stockMovementObject.finalWarehouse.whName}`
              : undefined,
            article: stockMovementObject.stockMvt.birePnPnCode
              ? stockMovementObject.stockMvt.birePnPnCode
              : stockMovementObject.equipment
              ? stockMovementObject.equipment.pnCode
              : undefined,
            snOrLot: stockMovementObject.stockMvt.stockMvtSn
              ? stockMovementObject.stockMvt.stockMvtSn
              : stockMovementObject.equipment
              ? stockMovementObject.equipment.sn
              : undefined,
            qty: stockMovementObject.stockMvt.stockMvtQuantity
              ? parseInt(stockMovementObject.stockMvt.stockMvtQuantity, 10)
              : stockMovementObject.equipment && stockMovementObject.equipment.quantity
              ? stockMovementObject.equipment.quantity
              : undefined,
            zone: stockMovementObject.stockMvt.bidtStorageBinZoneIssue
              ? stockMovementObject.stockMvt.bidtStorageBinZoneIssue.sbNumber
              : '',
            emplacement: stockMovementObject.stockMvt.bidtStorageBinBinReceipt
              ? stockMovementObject.stockMvt.bidtStorageBinBinReceipt.sbLocalisation
              : '',
            outZone: stockMovementObject.stockMvt.bidtStorageBinZoneReceipt
              ? stockMovementObject.stockMvt.bidtStorageBinZoneReceipt.sbNumber
              : '',
            outEmplacement: stockMovementObject.stockMvt.bidtStorageBinZoneReceipt
              ? stockMovementObject.stockMvt.bidtStorageBinZoneReceipt.sbLocalisation
              : '',
            toRealizeThe: stockMovementObject.stockMvt.stockMvtPlannedDate,
            executionDate: stockMovementObject.stockMvt.stockMvtDate,
            bidtStockMvtType: stockMovementObject.stockMvt.bidtStockMvtType,
            batchNumber: stockMovementObject.stockMvt.stockMvtBatchNumber,
            criticality: stockMovementObject.procurementRequest && stockMovementObject.procurementRequest.criticality,
            materialType:
              stockMovementObject.procurementRequest &&
              stockMovementObject.procurementRequest.bidtProcReqItems &&
              stockMovementObject.procurementRequest.bidtProcReqItems.length
                ? this.getPnType(stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn || {})
                : '',
            articleDesignation:
              stockMovementObject.procurementRequest &&
              stockMovementObject.procurementRequest.bidtProcReqItems &&
              stockMovementObject.procurementRequest.bidtProcReqItems.length &&
              stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn
                ? stockMovementObject.procurementRequest.bidtProcReqItems[0].birePn.articleDesignation
                : stockMovementObject.stockMvt.birePnArticleDesignation
                ? stockMovementObject.stockMvt.birePnArticleDesignation
                : '',
            bidtStockMvtName: stockMovementObject.stockMvt.bidtStockMvtType
              ? this.extractTranslationPipe.transform(stockMovementObject.stockMvt.bidtStockMvtType.smtName)
              : ''
          };

          if (
            stockMovementObject.stockMvt &&
            stockMovementObject.stockMvt.bidtStockMvtOperations &&
            stockMovementObject.stockMvt.bidtStockMvtOperations.length
          ) {
            this.setOperationDataTable(stockMovementObject.stockMvt.bidtStockMvtOperations);
          }
        }
      }
    });
  }

  private getPnType(obj: BirePnDTO): string {
    const birePnDTO: BirePnDTO = obj;
    let pnType = '';
    this.pnTypeList.forEach((element: LabelValue<string>) => {
      if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
        pnType = element.label;
      }
    });

    return pnType;
  }
  private setOperationDataTable(operationsTableData: BidtStockMvtOperationDTO[]): void {
    operationsTableData.forEach((element) => {
      const stockMvtOperationObject: OperationInterface = {
        smoCode: parseInt(element.smoCode || '0', 10),
        designation: element.smoDesignation
      };
      this.operationTableDataSource.addData([stockMvtOperationObject]);
    });
  }

  public getMvtStockStatus(key: string): SelectItem {
    return this.movementsStatusMap.filter((status) => status.value === key)[0];
  }
}
