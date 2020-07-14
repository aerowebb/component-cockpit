import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { DisplayOrderDocumentInput } from '../../../../shared/types/api-input-types/bidt-purchase-request/display-order-document-input.interface';
import { SaveOrderDocumentDTO } from '../../../../shared/types/api-input-types/bidt-purchase-request/save-order-document-dto.interface';
import { ConsecutiveDocumentOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/consecutive-document-output.interface';
import { MaterialAndServicesOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/material-and-services-output.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { CreateOrderDocumentFromStockAlert } from '../../shared/create-order-document-from-stock-alert.interface';
import { OrderDocumentSearchService } from '../search/order-document-search.service';
import { OrderDocumentRow } from '../shared/order-document-row.interface';

import { OrderDocumentFormService } from './order-document-form.service';

interface DocumentRow {
  docName: string;
  docExtension: string;
  docSize: string;
  docAttachmentDate: string;
  docType: string;
  id?: number;
  _obj: BidtDocumentDTO;
}

@Component({
  selector: 'aw-order-document-form',
  styleUrls: ['./order-document-form.component.scss'],
  templateUrl: './order-document-form.component.html'
})
export class OrderDocumentFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly ADDITIONAL_ANCHOR_ID: string = 'additionalInformationAnchor';
  public static readonly MS_ANCHOR_ID: string = 'msAnchor';
  public static readonly CONSECUTIVE_ANCHOR_ID: string = 'consecutiveAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentAnchor';

  public readonly component: typeof OrderDocumentFormComponent;

  public pageSubtitle: string;
  public pageId: number | undefined;

  public navigationLinkList: MenuItem[];

  public mainData: BidtPurchaseRequestDTO;
  public backupMainData: BidtPurchaseRequestDTO;
  public categoryOptions: LabelValue<string>[];
  public typeOptions: LabelValue<string>[];
  public consecutiveTypeOptions: LabelValue<string>[];
  public statusOptions: LabelValue<string>[];
  public codeOptions: LabelValue<string>[];

  public msTableCols1: TableColumn[];
  public msTableCols2: TableColumn[];
  public msTableCols: TableColumn[];
  public materialsAndServicesTable: MaterialAndServicesOutput[];
  public databaseMSTable: MaterialAndServicesOutput[];
  public selectedMaterials: MaterialAndServicesOutput[];
  public isMaterialAndServicesTableLoading: boolean;
  public showDialogMaterialAndServices: boolean;
  public currentMSObject: MaterialAndServicesOutput | undefined;
  public selectedMSIndex?: number;
  public isNewMSObject: boolean;
  private bidtStockMvtRemoveList: number[];

  public documentTable: DocumentRow[];
  public documentTableCols: TableColumn[];
  public documentTypes: SelectItem[];
  public selectedDocuments: DocumentRow[];
  public currentDocument: BidtDocumentDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;
  public isLoadingDocumentTable: boolean;

  private documents: BidtDocumentDTO[];
  private currentDocumentIndex: number;
  private documentsAdded: BidtDocumentDTO[];
  private documentsRemoved: BidtDocumentDTO[];
  private documentsUpdated: BidtDocumentDTO[];
  private documentDataRemoveList: number[];

  public showQuickSearchPurchaseRequestPopup: boolean;

  public consecutiveDocumentsTable: ConsecutiveDocumentOutput[];
  public consecutiveDocumentsTableCols: TableColumn[];
  public selectedConsecutiveDocuments: ConsecutiveDocumentOutput[];
  public isConsecutiveDocumentsLoading: boolean;

  public isReadOnlyPopup: boolean;

  public consecutiveCategory?: string;
  public consecutiveType?: string;

  public showUPrices: boolean;
  public hideUPrices: boolean;

  public superiorId?: number;

  public incomingPrice?: string;
  public disablePrice: boolean;

  public localCurrency?: string;

  public awPropertiesConstants: typeof AWPropertiesConstants;

  // Table of content ***********************************************************

  @ViewChild(OrderDocumentFormComponent.MAIN_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(OrderDocumentFormComponent.ADDITIONAL_ANCHOR_ID)
  public additionalInformationEltRef: ElementRef;

  @ViewChild(OrderDocumentFormComponent.MS_ANCHOR_ID)
  public msEltRef: ElementRef;

  @ViewChild(OrderDocumentFormComponent.CONSECUTIVE_ANCHOR_ID)
  public consecutiveEltRef: ElementRef;

  @ViewChild(OrderDocumentFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentTableEltRef: ElementRef;

  public toc: PageTocEntry[];
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    pageTocService: PageTocService,
    private readonly orderDocumentFormService: OrderDocumentFormService,
    private readonly propertiesService: PropertiesService,
    private readonly orderDocumentSearchService: OrderDocumentSearchService,
    private readonly dateService: DateService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = OrderDocumentFormComponent;
    this.awPropertiesConstants = AWPropertiesConstants;

    this.setNavigationLinkList();

    this.registerPageTocEntryObservable();

    this.init();
    this.loadCategoryOptions();
    this.loadStatusOptions();
    this.loadCodeOptions();
    this.setTableCols();
    this.getLocalCurrency();

    this.msTableCols = this.msTableCols1;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_ORDER_DOCUMENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      this.setTableOfContent();

      const pageContext = 'tab.createMode';

      let receivedDocument: OrderDocumentRow | undefined;
      let receivedStockAlert: CreateOrderDocumentFromStockAlert | undefined;
      if (!!this.componentData.objectId) {
        receivedDocument = this.serializationService.deserialize(this.componentData.objectId) as OrderDocumentRow;
        this.pageId = !!receivedDocument._obj ? (receivedDocument._obj.id as number) : undefined;
        if (!this.pageId) {
          receivedStockAlert = this.serializationService.deserialize(
            this.componentData.objectId
          ) as CreateOrderDocumentFromStockAlert;

          this.setPageContext(this.componentData.objectId);
          this.pageSubtitle = pageContext;
          this.displayComponentContext(pageContext, this.isCreateOpenMode);
        }
      }

      if (!!this.pageId) {
        this.loadOrderDoc();
      } else if (!!receivedStockAlert) {
        this.msTableCols = this.msTableCols1;
        this.mainData.prCategory = AWPropertiesConstants.PURCHASE_CATEGORY_REQUEST;
        this.mainData.prName = receivedStockAlert.orderName;
        this.mainData.prDescription = receivedStockAlert.orderName;
        this.mainData.prCreationDate = (new Date() as unknown) as number;
        this.mainData.prStatus = this.mainData.prStatus || AWPropertiesConstants.PURCHASE_STATUS_OPEN;
        this.loadTypeOptions();
        const event: MaterialAndServicesOutput = {
          pnText: receivedStockAlert.pnCode,
          materialName: receivedStockAlert.materialName,
          quantity: 1,
          warehouse: receivedStockAlert.warehouse,
          bidtStockMvtDTO: {
            birePnPnCode: receivedStockAlert.pnCode,
            bidtWarehouseId: receivedStockAlert.warehouseId
          }
        };
        this.addNewMS(event);
      } else {
        this.mainData.prCreationDate = (new Date() as unknown) as number;
        this.mainData.prPriceValue = '0';
        this.incomingPrice = '0';
      }
    }

    if (this.isCreateOpenMode) {
      this.orderDocumentFormService.getLocalCurrency().subscribe((result) => {
        this.mainData.prPriceUnit = result;
      });
    }
  }

  private setPageContext(objectId: string): string {
    let supplierInfo: string[] = [];

    supplierInfo =
      !!this.componentData.objectId && !!this.serializationService.deserialize(this.componentData.objectId).supplier
        ? this.serializationService.deserialize(this.componentData.objectId).supplier.split('-')
        : [];

    let context = '';

    if (!!this.componentData.objectId && !!this.serializationService.deserialize(objectId).code) {
      context = `${this.serializationService.deserialize(objectId).code}`;
    }

    if (!!objectId && !!this.serializationService.deserialize(objectId).category && context !== '') {
      context = `${context} | ${this.serializationService.deserialize(objectId).category}`;
    }

    if (!!objectId && !!this.serializationService.deserialize(objectId).type && context !== '') {
      context = `${context} | ${this.serializationService.deserialize(objectId).type}`;
    }

    if (supplierInfo.length !== 0 && context !== '') {
      context = `${context} | ${supplierInfo[0]}`;
    }

    return context;
  }

  private init(): void {
    this.pageSubtitle = '';
    this.categoryOptions = [];
    this.typeOptions = [];
    this.statusOptions = [];
    this.showQuickSearchPurchaseRequestPopup = false;
    // this.materialsAndServicesTableCols = [];
    // this.materialsAndServicesTableCols2 = [];
    // this.materialsAndServicesTableCols3 = [];
    // this.materialsAndServicesTableCols4 = [];
    // this.materialsAndServicesTableCols5 = [];
    this.msTableCols1 = [];
    this.msTableCols2 = [];
    this.msTableCols = [];
    this.isMaterialAndServicesTableLoading = false;
    this.showDocumentDialog = false;
    this.isLoadingDocumentTable = false;
    this.isConsecutiveDocumentsLoading = false;
    this.showDialogMaterialAndServices = false;
    this.isReadOnlyPopup = false;
    this.consecutiveDocumentsTableCols = [];
    this.localCurrency = undefined;
    this.initAfterSave();
  }

  private initAfterSave(): void {
    this.mainData = {};
    this.backupMainData = {};
    this.materialsAndServicesTable = [];
    this.databaseMSTable = [];
    this.selectedMaterials = [];
    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.documents = [];
    this.documentTable = [];
    this.documentTypes = [];
    this.selectedDocuments = [];
    this.currentDocument = undefined;
    this.currentDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.consecutiveDocumentsTable = [];
    this.selectedConsecutiveDocuments = [];
    this.currentMSObject = undefined;
    this.selectedMSIndex = undefined;
    this.isNewMSObject = false;
    this.bidtStockMvtRemoveList = [];
    this.documentDataRemoveList = [];
    this.consecutiveTypeOptions = [];
    this.showUPrices = true;
    this.hideUPrices = false;
    this.superiorId = undefined;
    this.incomingPrice = undefined;
    this.disablePrice = true;
    this.consecutiveCategory = undefined;
    this.consecutiveType = undefined;
  }

  private setNavigationLinkList(): void {
    const goodsMovementKey = this.getTranslateKey('goodsMovement');
    const stockMovementKey = this.getTranslateKey('stockMovement');
    this.translateService.get([goodsMovementKey, stockMovementKey]).subscribe((results) => {
      const goodsMovementLabel = results ? results[goodsMovementKey] : 'Goods Movements';

      this.navigationLinkList = [
        {
          label: goodsMovementLabel,
          command: () => {
            this.goToGoodsMovement();
          }
        }
      ];
    });
  }

  public goToGoodsMovement(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_PURCHASE_REQUEST_FORM,
      openMode: ComponentOpenMode.Read
    };
    const input: GoodsMovementInput = {
      purchaseRequestId: this.mainData.id
    };
    data.objectId = this.serializationService.serialize(input);
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadCategoryOptions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PURCHASE_CATEGORY_MAP).subscribe((results) => {
      this.categoryOptions = results || [];
    });
  }

  public loadTypeOptions(): void {
    this.mainData.prType = undefined;
    this.fetchTypeDropdownData();
  }

  private fetchTypeDropdownData(): void {
    if (!!this.mainData.prCategory) {
      this.orderDocumentSearchService.findTypeBasedOnCategory(this.mainData.prCategory).subscribe((results) => {
        this.typeOptions = results || [];
      });
    } else {
      this.typeOptions = [];
    }
  }

  public loadConsecutiveTypeOptions(): void {
    if (!!this.consecutiveCategory) {
      this.orderDocumentSearchService.findTypeBasedOnCategory(this.consecutiveCategory).subscribe((results) => {
        this.consecutiveTypeOptions = results || [];
      });
    } else {
      this.consecutiveTypeOptions = [];
    }
  }

  private loadStatusOptions(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PURCHASE_STATUS_MAP).subscribe((results) => {
      this.statusOptions = results || [];
    });
  }

  private loadCodeOptions(): void {
    this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe((results) => {
      this.codeOptions = results || [];
    });
  }

  private loadOrderDoc(): void {
    this.isMaterialAndServicesTableLoading = true;
    this.isConsecutiveDocumentsLoading = true;
    this.isLoadingDocumentTable = true;
    if (!!this.pageId) {
      this.orderDocumentFormService.getById(this.pageId).subscribe((result) => {
        this.mainData = result.bidtPurchaseRequestDTO;
        this.mainData.prStatus = this.mainData.prStatus || AWPropertiesConstants.PURCHASE_STATUS_OPEN;
        this.fetchTypeDropdownData();
        this.backupMainData = _cloneDeep(this.mainData);

        this.setMSTableCols(this.mainData);

        const componentData = this.serializationService.serialize(this.getOrderDocRow(result.bidtPurchaseRequestDTO));
        this.componentData.objectId = componentData;
        this.pageSubtitle = this.setPageContext(componentData);
        this.displayComponentContext(this.pageSubtitle, this.isCreateOpenMode);

        if (!!this.mainData.superiorId) {
          this.superiorId = this.mainData.superiorId;
        }

        this.incomingPrice = this.mainData.prPriceValue;

        // Material and services tab
        this.materialsAndServicesTable = result.materialAndServicesOutputList;
        this.materialsAndServicesTable.forEach((ms) => {
          if (!!ms.bidtStockMvtDTO && !!ms.bidtStockMvtDTO.byQuotation) {
            ms.byQuotation =
              ms.bidtStockMvtDTO.byQuotation === 1 ? true : ms.bidtStockMvtDTO.byQuotation === 0 ? false : undefined;
          }
          if (!!ms.pnText) {
            const material = ms.pnText.split(' / ');
            ms.pnText = material[0];
            ms.materialName = material[1];
          }
          ms._dataKey = Math.random();
          ms._expand = false;
          ms._obj = ms;
        });
        this.databaseMSTable = _cloneDeep(this.materialsAndServicesTable);
        this.materialsAndServicesTable.forEach((ms) => {
          if (ms.quantity === null || ms.quantity === undefined) {
            ms.quantity = 0;
          }
          if (ms.price === null || ms.price === undefined) {
            ms.price = 0;
          }
          if (ms.discountPercent === null || ms.discountPercent === undefined) {
            ms.discountPercent = 0;
          }
          if (ms.discountValue === null || ms.discountValue === undefined) {
            ms.discountValue = 0;
          }
          if (ms.totalPrice === null || ms.totalPrice === undefined) {
            ms.totalPrice = 0;
          }
          if (ms.currency === null || ms.currency === undefined) {
            ms.currency = this.localCurrency;
          }
          if (ms.priceAfterDiscount === null || ms.priceAfterDiscount === undefined) {
            ms.priceAfterDiscount = 0;
          }
        });
        this.isMaterialAndServicesTableLoading = false;

        // Consecutive documents tab
        this.consecutiveDocumentsTable = result.consecutiveDocumentOutputList;
        this.consecutiveDocumentsTable.forEach((cDoc) => {
          if (!!cDoc.creationDateText) {
            const dateTime = cDoc.creationDateText.split(' ');
            const date = dateTime[0].split('/');
            cDoc.creationDateText = `${date[2]}/${date[1]}/${date[0]} ${dateTime[1]}`;
          }
        });
        this.isConsecutiveDocumentsLoading = false;

        // Documents tab
        ListUtils.orEmpty(result.documentTablist)
          .filter((document) => !!document.documentName)
          .forEach((doc) => {
            this.documents.push(doc.bidtDocumentDTO);
          });
        this.documentTable = this.documents.map((document) => this.createDocumentRow(document));
      });
      this.isLoadingDocumentTable = false;
    }
  }

  private setMSTableCols(mainData: BidtPurchaseRequestDTO): void {
    switch (mainData.prCategory) {
      // case '4-ord':
      //   this.msTableCols = this.materialsAndServicesTableCols2;
      //   break;
      // case '5-oth':
      //   this.msTableCols = this.materialsAndServicesTableCols2;
      //   break;
      // case '1-con':
      //   this.msTableCols = this.materialsAndServicesTableCols4;
      //   break;
      // case '2-req':
      //   this.msTableCols = this.materialsAndServicesTableCols3;
      //   break;
      // case '3-quo':
      //   this.msTableCols = this.materialsAndServicesTableCols2;
      //   break;
      case '2-req':
        this.msTableCols = this.msTableCols2;
        break;
      default:
        this.msTableCols = this.msTableCols1;
        break;
    }
  }

  public goToDocument(id: number): void {
    if (!!id) {
      this.orderDocumentFormService.getById(id).subscribe((res) => {
        const input: OrderDocumentRow = {
          code: res.bidtPurchaseRequestDTO.prCode,
          category: res.bidtPurchaseRequestDTO.prCategory,
          type: res.bidtPurchaseRequestDTO.prType,
          supplier: res.bidtPurchaseRequestDTO.supplier,
          _obj: res.bidtPurchaseRequestDTO
        };
        LabelValueUtils.stringValueToLabel(input, 'category', this.categoryOptions);
        LabelValueUtils.stringValueToLabel(input, 'type', this.consecutiveTypeOptions);
        this.openOrderDocument(input, ComponentOpenMode.Read);
      });
    }
  }

  private openOrderDocument(object: OrderDocumentRow | undefined, openMode: ComponentOpenMode): void {
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

  public openConsecutiveDocument(row: MaterialAndServicesOutput): void {
    if (!!row.consecutiveDocument) {
      const input: DisplayOrderDocumentInput = {
        bidtPurchaseDTO: { prCode: row.consecutiveDocument.split(' ')[0] }
      };
      this.orderDocumentSearchService.findByCriteria(input).subscribe((orderDocument) => {
        const orderDocumentRow: OrderDocumentRow = {
          code: orderDocument.list[0].prCode,
          name: orderDocument.list[0].prName,
          status: orderDocument.list[0].prStatus,
          creationDate: this.formatDate(orderDocument.list[0].prCreationDate),
          receptionDate: this.formatDate(orderDocument.list[0].prReceptionDate),
          category: orderDocument.list[0].prCategory,
          type: orderDocument.list[0].prType,
          startDate: this.formatDate(orderDocument.list[0].prStartDate),
          endDate: this.formatDate(orderDocument.list[0].prEndDate),
          supplierDocumentNumber: orderDocument.list[0].supplierDocumentNumber,
          supplier: orderDocument.list[0].supplier,
          superiorDocument: orderDocument.list[0].superiorDocument,
          _obj: orderDocument.list[0]
        };

        this.openOrderDocument(orderDocumentRow, ComponentOpenMode.Read);
      });
    }
  }

  private formatDate(date: number | undefined): string {
    if (!!date) {
      return this.dateService.dateToString(new Date(date));
    } else {
      return '';
    }
  }

  public searchSuperiorDocument() {
    this.showQuickSearchPurchaseRequestPopup = true;
  }

  public setSelectedPurchaseRequest(selectedObject: BidtPurchaseRequestDTO) {
    if (selectedObject && selectedObject.prCode !== this.mainData.prCode) {
      this.mainData.superiorDocument = selectedObject.prCode;
      this.mainData.bidtPurchaseRequestId = selectedObject.id;
      this.superiorId = selectedObject.id;
    }
    this.showQuickSearchPurchaseRequestPopup = false;
  }

  public editOrderDoc(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancelOrderDoc(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadOrderDoc();
  }

  private setTableCols(): void {
    // this.materialsAndServicesTableCols = [
    //   { field: 'pnText', alignment: 'left' },
    //   { field: 'serialNumber', alignment: 'left' },
    //   { field: 'batchNumber', alignment: 'left' },
    //   { field: 'quantity', alignment: 'left', width: '6%' },
    //   { field: 'productionLeadTime', alignment: 'left' },
    //   { field: 'price', alignment: 'left', width: '5%' },
    //   { field: 'discountPercent', alignment: 'left', width: '6%' },
    //   { field: 'discountValue', alignment: 'left', width: '6%' },
    //   { field: 'priceAfterDiscount', alignment: 'left', width: '6.5%' },
    //   { field: 'totalPrice', alignment: 'left' },
    //   { field: 'currency', alignment: 'left' },
    //   { field: 'warehouse', alignment: 'left' },
    //   { field: 'partStatus', alignment: 'left' },
    //   { field: 'consecutiveDocument', alignment: 'left', width: '8%' }
    // ];

    // this.materialsAndServicesTableCols2 = [
    //   { field: 'pnText', alignment: 'left' },
    //   { field: 'serialNumber', alignment: 'left' },
    //   { field: 'batchNumber', alignment: 'left' },
    //   { field: 'quantity', alignment: 'left' },
    //   { field: 'productionLeadTime', alignment: 'left' },
    //   { field: 'totalPrice', alignment: 'left' },
    //   { field: 'currency', alignment: 'left' },
    //   { field: 'warehouse', alignment: 'left' },
    //   { field: 'partStatus', alignment: 'left' },
    //   { field: 'consecutiveDocument', alignment: 'left' }
    // ];

    // this.materialsAndServicesTableCols3 = [
    //   { field: 'pnText', alignment: 'left' },
    //   { field: 'serialNumber', alignment: 'left' },
    //   { field: 'batchNumber', alignment: 'left' },
    //   { field: 'quantity', alignment: 'left' },
    //   { field: 'warehouse', alignment: 'left' },
    //   { field: 'partStatus', alignment: 'left' },
    //   { field: 'consecutiveDocument', alignment: 'left' }
    // ];

    // this.materialsAndServicesTableCols4 = [
    //   { field: 'pnText', alignment: 'left' },
    //   { field: 'serialNumber', alignment: 'left' },
    //   { field: 'batchNumber', alignment: 'left' },
    //   { field: 'quantity', alignment: 'left' },
    //   { field: 'productionLeadTime', alignment: 'left' },
    //   { field: 'totalPrice', alignment: 'left' },
    //   { field: 'currency', alignment: 'left' }
    // ];

    // this.materialsAndServicesTableCols5 = [
    //   { field: 'pnText', alignment: 'left' },
    //   { field: 'serialNumber', alignment: 'left' },
    //   { field: 'batchNumber', alignment: 'left' },
    //   { field: 'quantity', alignment: 'left', width: '6%' },
    //   { field: 'productionLeadTime', alignment: 'left' },
    //   { field: 'price', alignment: 'left', width: '5%' },
    //   { field: 'discountPercent', alignment: 'left', width: '6%' },
    //   { field: 'discountValue', alignment: 'left', width: '6%' },
    //   { field: 'priceAfterDiscount', alignment: 'left', width: '6.5%' },
    //   { field: 'totalPrice', alignment: 'left' },
    //   { field: 'currency', alignment: 'left' }
    // ];

    this.msTableCols1 = [
      { field: 'pnText', alignment: 'left' },
      { field: 'materialName', alignment: 'left', width: '30%' },
      { field: 'serialNumber', alignment: 'left' },
      { field: 'batchNumber', alignment: 'left' },
      { field: 'quantity', alignment: 'left', width: '6%' },
      { field: 'productionLeadTime', alignment: 'left' },
      { field: 'totalPrice', alignment: 'left' },
      { field: 'currency', alignment: 'left' }
    ];

    this.msTableCols2 = [
      { field: 'pnText', alignment: 'left' },
      { field: 'materialName', alignment: 'left', width: '30%' },
      { field: 'serialNumber', alignment: 'left' },
      { field: 'batchNumber', alignment: 'left' },
      { field: 'quantity', alignment: 'left' }
    ];

    // this.msTableCols2 = [];

    // this.msTableCols = this.materialsAndServicesTableCols2;

    this.documentTableCols = [
      { field: 'docName', alignment: 'left', width: '40%' },
      { field: 'docExtension', alignment: 'left', width: '20%' },
      { field: 'docSize', alignment: 'left', width: '20%' },
      { field: 'docAttachmentDate', alignment: 'left', width: '20%' }
    ];

    this.consecutiveDocumentsTableCols = [
      { field: 'code', alignment: 'left' },
      { field: 'name', alignment: 'left' },
      { field: 'category', alignment: 'left' },
      { field: 'type', alignment: 'left' },
      { field: 'supplier', alignment: 'left' },
      { field: 'status', alignment: 'left' },
      { field: 'creationDateText', alignment: 'left' },
      { field: 'superiorDocumentCode', alignment: 'left' },
      { field: 'superiorDocumentCategory', alignment: 'left' }
    ];
  }

  public toggleMaterialAndServicesExpand(row): void {
    row._expand = !row._expand;
  }

  public downloadFiles(): void {
    this.selectedDocuments.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
    });
  }

  private createDocumentRow(document: BidtDocumentDTO): DocumentRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!document.documentType && (documentType.value as string) === document.documentType
    );

    const documentRow: DocumentRow = {
      docAttachmentDate: !!document.documentPublicationDate
        ? this.dateService.dateToString(new Date(document.documentPublicationDate))
        : '',
      docExtension: this.formatDocExtension(document),
      docName: document.documentName as string,
      docSize: this.formatDocSize(document),
      docType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      id: document.id,
      _obj: document
    };

    return documentRow;
  }

  private formatDocExtension(document: BidtDocumentDTO): string {
    return FileUtils.getExtension(document.documentName).toUpperCase();
  }

  private formatDocSize(document: BidtDocumentDTO): string {
    return !!document.documentContent ? FileUtils.getFormattedSize(document.documentContent.length) : '';
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedDocuments.forEach((selectedDocumentRow) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter(
            (document) => !this.areSameDocument(document, selectedDocumentRow._obj)
          );
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const documentsUpdatedWithoutSelection = this.documentsUpdated.filter(
              (document) => !this.areSameDocument(document, selectedDocumentRow._obj)
            );
            // list of updated objects contains the selection
            if (this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
              // Remove selection from added objects
              this.documentsUpdated = documentsUpdatedWithoutSelection;
            }

            this.documentsRemoved = [...this.documentsRemoved, selectedDocumentRow._obj];
          }
        });

        this.documentsRemoved.forEach((doc) => {
          if (!!doc.id) {
            this.documentDataRemoveList.push(doc.id);
          }
        });

        this.documents = this.documents.filter((document) => {
          return !this.selectedDocuments.some((selectedDocumentRow) =>
            this.areSameDocument(document, selectedDocumentRow._obj)
          );
        });

        this.documentTable = this.documentTable.filter((documentRow) => {
          return !this.selectedDocuments.some((selectedDocumentRow) => {
            return this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
          });
        });

        this.selectedDocuments = [];
      }
    });
  }

  public editDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.documents.findIndex((document) =>
        this.areSameDocument(document, this.selectedDocuments[0]._obj)
      );

      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocument = this.selectedDocuments[0]._obj;
      this.currentDocumentIndex = -1;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showDocumentDialog = true;
    }
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documents.some((document) => document.documentName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const document: BidtDocumentDTO = {
              documentContent: fileContent,
              documentName: file.name,
              documentPublicationDate: new Date(),
              bidtPurchaseRequestId: this.pageId
            };

            document.documentType = this.formatDocExtension(document);

            this.documents = [...this.documents, document];
            this.documentsAdded = [...this.documentsAdded, document];
            this.documentTable = [...this.documentTable, this.createDocumentRow(document)];
          }
        });
      }

      fileUploader.clear();
    }
  }

  private areSameDocument(obj1: BidtDocumentDTO | undefined, obj2: BidtDocumentDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
    }
  }

  public onAddDocument(document: BidtDocumentDTO): void {
    if (!!document) {
      if (this.currentDocumentIndex !== -1) {
        this.documents[this.currentDocumentIndex] = document;
        this.documentTable[this.currentDocumentIndex] = this.createDocumentRow(document);

        const updatedDocumentIndex = this.documentsUpdated.findIndex((documentUpdated) =>
          this.areSameDocument(documentUpdated, document)
        );
        if (updatedDocumentIndex !== -1) {
          this.documentsUpdated[updatedDocumentIndex] = document;
        } else {
          this.documentsUpdated = [...this.documentsUpdated, document];
        }
      } else {
        const isAdded = this.documentsAdded.some((documentAdded) => this.areSameDocument(documentAdded, document));
        if (isAdded) {
          this.messageService.showWarningMessage('global.warningOnDocumentExists');
        } else {
          this.documents = [...this.documents, document];
          this.documentsAdded = [...this.documentsAdded, document];
          this.documentTable = [...this.documentTable, this.createDocumentRow(document)];
        }
      }
    }

    this.selectedDocuments = [];
  }

  public createMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMSObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = false;
    this.isNewMSObject = true;
    this.selectedMSIndex = -1;
  }

  public editMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMSObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = false;
    this.isNewMSObject = false;
    this.selectedMSIndex = this.materialsAndServicesTable.findIndex(
      (ms) =>
        !!ms.bidtStockMvtDTO &&
        !!this.selectedMaterials[0].bidtStockMvtDTO &&
        ms.bidtStockMvtDTO.id === this.selectedMaterials[0].bidtStockMvtDTO.id
    );
    this.selectedMaterials = [];
  }

  public openMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMSObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = true;
    this.isNewMSObject = false;
    this.selectedMaterials = [];
  }

  public reloadConsecutiveDocuments(): void {
    if (!!this.pageId) {
      this.isConsecutiveDocumentsLoading = true;
      this.orderDocumentFormService.getById(this.pageId).subscribe((r) => {
        this.consecutiveDocumentsTable = r.consecutiveDocumentOutputList;
        this.isConsecutiveDocumentsLoading = false;
      });
    }
  }

  /**************************************************************************
   * Table Of Content
   *************************************************************************/

  private setTableOfContent(): void {
    const mainDataKey = 'page.mainData';
    const additionalKey = 'page.additionalData';
    const msKey = this.getTranslateKey('materialsAndServices');
    const consecutiveKey = this.getTranslateKey('consecutiveDocuments');
    const documentsKey = 'global.documents';
    this.translateService
      .get([mainDataKey, additionalKey, msKey, consecutiveKey, documentsKey])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const additionalLabel = !!results ? results[additionalKey] : 'Additional Information';
        const msLabel = !!results ? results[msKey] : 'Material and Services';
        const consecutiveLabel = !!results ? results[consecutiveKey] : 'Consecutive Documents';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainDataLabel
          },
          {
            id: 'additionalInformationAnchor',
            anchor: this.additionalInformationEltRef,
            label: additionalLabel
          },
          {
            id: 'msAnchor',
            anchor: this.msEltRef,
            label: msLabel
          },
          {
            id: 'consecutiveAnchor',
            anchor: this.consecutiveEltRef,
            label: consecutiveLabel
          },
          {
            id: 'documentAnchor',
            anchor: this.documentTableEltRef,
            label: documentsLabel
          }
        ];
        setTimeout(() => {
          super.selectPageTocEntry(this.component.MAIN_ANCHOR_ID);
        });
      });
  }

  // tslint:disable-next-line: no-any
  public navigateToSelectedSectionFromSummary(anchorId: string, elementRef: ElementRef, event: any): void {
    super.selectPageTocEntry(anchorId);
    super.scrollToAnchorAndStopPropagation(elementRef, event);
  }

  public saveOrderDoc(): void {
    if (!this.mainData.prCategory || !this.mainData.prType) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      const bidtStockMvtDTOList: BidtStockMvtDTO[] = [];
      this.materialsAndServicesTable.forEach((ms) => {
        if (!!ms.bidtStockMvtDTO) {
          const updating = this.databaseMSTable.some(
            (dms) => !!dms.bidtStockMvtDTO && !!ms.bidtStockMvtDTO && dms.bidtStockMvtDTO.id === ms.bidtStockMvtDTO.id
          );
          if (!updating && !!ms.bidtStockMvtDTO.id) {
            ms.bidtStockMvtDTO.id = undefined;
          }
          bidtStockMvtDTOList.push(ms.bidtStockMvtDTO);
        }
      });
      const bidtDocumentList: BidtDocumentDTO[] = [];
      this.documentTable.forEach((doc) => {
        if (!!doc._obj.documentPublicationDate) {
          doc._obj.documentPublicationDate = new Date(doc._obj.documentPublicationDate);
        }
        doc._obj.bidtPurchaseRequestId = this.pageId;
        bidtDocumentList.push(doc._obj);
      });
      const input: SaveOrderDocumentDTO = {
        bidtPurchaseRequestDTO: this.mainData,
        bidtStockMvtDTOList,
        bidtStockMvtRemoveList: this.bidtStockMvtRemoveList,
        bidtDocumentList,
        documentDataRemoveList: this.documentDataRemoveList
      };
      this.save(input);
    }
  }

  private save(input: SaveOrderDocumentDTO): void {
    this.showSaveSpinner = true;
    this.orderDocumentFormService.saveOrderDocument(input).subscribe(
      (result) => {
        this.afterSave(result);
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveOrderDocument'));
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  private afterSave(result: BidtPurchaseRequestDTO): void {
    this.pageId = result.id;

    const displayOrderDocumentInput: DisplayOrderDocumentInput = {
      bidtPurchaseDTO: {
        prCode: result.prCode
      }
    };
    this.orderDocumentSearchService.findByCriteria(displayOrderDocumentInput).subscribe((res) => {
      const componentData = this.serializationService.serialize(this.getOrderDocRow(res.list[0]));
      this.componentData.objectId = componentData;
      this.updateOpenMode(ComponentOpenMode.Write);
      this.componentData.openMode = 1;
      this.pageSubtitle = this.setPageContext(componentData);
      this.displayComponentContext(this.setPageContext(componentData), this.isCreateOpenMode);
      this.initAfterSave();
      this.loadOrderDoc();
    });
  }

  private getOrderDocRow(result: BidtPurchaseRequestDTO): OrderDocumentRow {
    const orderDocumentRow: OrderDocumentRow = {
      code: result.prCode,
      category: result.prCategory,
      type: result.prType,
      supplier: result.supplier,
      _obj: result
    };

    return orderDocumentRow;
  }

  public addNewMS(event: MaterialAndServicesOutput): void {
    event._dataKey = Math.random();
    event._expand = false;
    event._obj = event;
    if (!!event.bidtStockMvtDTO) {
      if (!!event && !!event.price) {
        if (!!event.discountPercent) {
          event.priceAfterDiscount = event.price !== 0 ? event.price - event.discountPercent : event.price;
        } else {
          event.priceAfterDiscount = event.price;
        }

        if (!!event.quantity) {
          event.totalPrice = event.priceAfterDiscount * event.quantity;
        } else {
          event.totalPrice = event.priceAfterDiscount * 0;
        }
      }
      event.bidtStockMvtDTO.bidtPurchaseRequestId = this.pageId;
    }
    this.materialsAndServicesTable.push(event);
  }

  public updateMS(event: MaterialAndServicesOutput): void {
    if (this.selectedMSIndex !== null && this.selectedMSIndex !== undefined) {
      this.materialsAndServicesTable[this.selectedMSIndex] = event;
    }
  }

  public enableDocumentCreation(): boolean {
    let response: boolean;
    response =
      AWPropertiesConstants.PURCHASE_STATUS_ACCEPTED === this.backupMainData.prStatus &&
      (AWPropertiesConstants.PURCHASE_CATEGORY_REQUEST === this.backupMainData.prCategory ||
        AWPropertiesConstants.PURCHASE_CATEGORY_QUOTATION === this.backupMainData.prCategory ||
        AWPropertiesConstants.PURCHASE_CATEGORY_ORDER === this.backupMainData.prCategory)
        ? true
        : false;

    return response;
  }

  public priceVisibility(): boolean {
    let response: boolean;
    response = AWPropertiesConstants.PURCHASE_CATEGORY_REQUEST === this.mainData.prCategory ? false : true;

    return response;
  }

  public logisticVisibility(): boolean {
    let response: boolean;
    response = AWPropertiesConstants.PURCHASE_CATEGORY_CONTRACT === this.mainData.prCategory ? false : true;

    return response;
  }

  public goodsMovementNameVisible(): boolean {
    let response = false;
    if (this.materialsAndServicesTable.length > 0) {
      const logic1 = 2;
      const logic2 = 4;
      response =
        this.materialsAndServicesTable[0].logicState === logic1 ||
        this.materialsAndServicesTable[0].logicState === logic2
          ? true
          : false;
    }

    return response;
  }

  public subcontractingMovementsVisible(): boolean {
    let response = false;
    if (this.materialsAndServicesTable.length > 0) {
      const logic = 3;
      response = this.materialsAndServicesTable[0].logicState === logic && !this.isReadOpenMode ? true : false;
    }

    return response;
  }

  public showUnitPrices(): void {
    // this.showUPrices = false;
    // this.hideUPrices = true;
    // if (this.mainData.prCategory === '1-con') {
    //   this.msTableCols = this.materialsAndServicesTableCols5;
    // } else {
    //   this.msTableCols = this.materialsAndServicesTableCols;
    // }
  }

  public hideUnitPrices(): void {
    this.showUPrices = true;
    this.hideUPrices = false;
    this.setMSTableCols(this.mainData);
  }

  public resetPrice(): void {
    this.disablePrice = true;
    this.mainData.prPriceValue = this.incomingPrice;
  }

  public deleteMaterials(): void {
    this.selectedMaterials.forEach((material) => {
      this.materialsAndServicesTable = this.materialsAndServicesTable.filter(
        (ms) =>
          !!ms.bidtStockMvtDTO && !!material.bidtStockMvtDTO && ms.bidtStockMvtDTO.id !== material.bidtStockMvtDTO.id
      );

      const databaseEntry = this.databaseMSTable.some(
        (ms) =>
          !!material.bidtStockMvtDTO && !!ms.bidtStockMvtDTO && ms.bidtStockMvtDTO.id === material.bidtStockMvtDTO.id
      );

      if (databaseEntry && !!material.bidtStockMvtDTO && !!material.bidtStockMvtDTO.id) {
        this.bidtStockMvtRemoveList.push(material.bidtStockMvtDTO.id);
      }
    });
    this.selectedMaterials = [];
  }

  public createConsecutiveDocuments(): void {
    if (!this.consecutiveCategory || !this.consecutiveType) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      const bidtPurchaseRequestDTO: BidtPurchaseRequestDTO = {
        id: this.pageId,
        prCategory: this.consecutiveCategory,
        prType: this.consecutiveType,
        prCreationDate: this.mainData.prCreationDate || ((new Date() as unknown) as number),
        bidoCustomerCustomerCode: this.mainData.bidoCustomerCustomerCode
      };
      const bidtStockMvtDTOList: BidtStockMvtDTO[] = [];
      this.materialsAndServicesTable.forEach((ms) => {
        if (!!ms.bidtStockMvtDTO) {
          bidtStockMvtDTOList.push(ms.bidtStockMvtDTO);
        }
      });

      const input: SaveOrderDocumentDTO = {
        bidtPurchaseRequestDTO,
        bidtStockMvtDTOList
      };

      const saveMainDataAndMaterialTable: SaveOrderDocumentDTO = {
        bidtPurchaseRequestDTO: this.backupMainData,
        bidtStockMvtDTOList
      };

      this.orderDocumentFormService.saveOrderDocument(saveMainDataAndMaterialTable).subscribe((output) => {
        this.afterSave(output);
        this.orderDocumentFormService.createConsecutiveDocument(input).subscribe((result) => {
          this.consecutiveCategory = undefined;
          this.consecutiveType = undefined;
          this.consecutiveTypeOptions = [];
          if (!!this.pageId) {
            this.isConsecutiveDocumentsLoading = true;
            this.orderDocumentFormService.getById(this.pageId).subscribe((r) => {
              this.consecutiveDocumentsTable = r.consecutiveDocumentOutputList;

              this.consecutiveDocumentsTable.forEach((cDoc) => {
                if (!!cDoc.creationDateText) {
                  const dateTime = cDoc.creationDateText.split(' ');
                  const date = dateTime[0].split('/');
                  cDoc.creationDateText = `${date[2]}/${date[1]}/${date[0]} ${dateTime[1]}`;
                }
              });
              this.isConsecutiveDocumentsLoading = false;

              this.orderDocumentFormService.getById(result).subscribe((res) => {
                const newPageInput: OrderDocumentRow = {
                  code: res.bidtPurchaseRequestDTO.prCode,
                  category: res.bidtPurchaseRequestDTO.prCategory,
                  type: res.bidtPurchaseRequestDTO.prType,
                  supplier: res.bidtPurchaseRequestDTO.supplier,
                  _obj: res.bidtPurchaseRequestDTO
                };
                LabelValueUtils.stringValueToLabel(newPageInput, 'category', this.categoryOptions);
                LabelValueUtils.stringValueToLabel(newPageInput, 'type', this.typeOptions);
              });
            });
          }
        });
      });
    }
  }

  public openSelectedDocuemnt(row: ConsecutiveDocumentOutput): void {
    if (!!row.bidtPurchaseRequestDTO && !!row.bidtPurchaseRequestDTO.id) {
      this.goToDocument(row.bidtPurchaseRequestDTO.id);
    }
  }

  public goToMaterial(row: MaterialAndServicesOutput): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode: ComponentOpenMode.Read
    };
    if (!!row.bidtStockMvtDTO && !!row.bidtStockMvtDTO.birePnPnCode) {
      const input: BirePnDTOId = {
        pnCode: row.bidtStockMvtDTO.birePnPnCode
      };
      this.orderDocumentFormService.findBirePn(input).subscribe((result) => {
        if (!!result) {
          const materialFormId: BirePnDTO = {
            pnCode: result.pnCode,
            pnType: result.pnType
          };
          data.objectId = this.serializationService.serialize(materialFormId);
        }
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      });
    }
  }

  public openEquipmentForm(row: MaterialAndServicesOutput): void {
    if (!!row.bidtStockMvtDTO) {
      const input: BidoEquipmentDTO = {
        pnCode: row.bidtStockMvtDTO.birePnPnCode,
        sn: row.serialNumber
      };
      this.orderDocumentFormService.getEuipmentBYpnAndSN(input).subscribe((result) => {
        if (!!result) {
          if (AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY === result[0].equipmentFunction) {
            this.goToAircraft(result[0].equipmentCode, ComponentOpenMode.Read);
          } else if (AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY === result[0].equipmentFunction) {
            this.goToEngine(result[0].equipmentCode, ComponentOpenMode.Read);
          } else if (AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY === result[0].equipmentFunction) {
            this.goToTools(result[0].equipmentCode, ComponentOpenMode.Read);
          } else {
            this.goToEquipment(result[0].equipmentCode, ComponentOpenMode.Read);
          }
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('assetNotFound'));
        }
      });
    }
  }

  private goToAircraft(aircraftCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
      openMode
    };
    if (!!aircraftCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: aircraftCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEngine(engineCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
      openMode
    };
    if (!!engineCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: engineCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToEquipment(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToTools(equipmentCode: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.ToolFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'ToolFormComponent',
      openMode
    };
    if (!!equipmentCode) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public reloadOrderDoc(): void {
    this.initAfterSave();
    this.loadOrderDoc();
  }

  private getLocalCurrency(): void {
    this.orderDocumentFormService.getLocalCurrency().subscribe((res) => {
      this.localCurrency = res;
    });
  }

  public updateConditions(): void {
    this.materialsAndServicesTable.forEach((row) => {
      if (!!row.bidtStockMvtDTO && !!row.bidtStockMvtDTO.birePnPnCode) {
        this.orderDocumentFormService
          .findBirePn({
            pnCode: row.bidtStockMvtDTO.birePnPnCode
          })
          .subscribe({
            next: (pn) => {
              if (pn && pn.pnCode) {
                this.orderDocumentFormService
                  .findByCustomerAndProduct({
                    customerCode: this.mainData.bidoCustomerCustomerCode as string,
                    pnCode: pn.pnCode
                  })
                  .subscribe({
                    next: (listPc) => {
                      for (let index = 0; index < listPc.length; index++) {
                        const pcData = listPc[index];

                        // Qty only for non serialized parts
                        if (
                          AWPropertiesConstants.PN_TRACEABILITY_BY_SN !== pn.traceability &&
                          pcData.productQuantity &&
                          NumberUtils.fromString(pcData.productQuantity) > 0
                        ) {
                          (row.bidtStockMvtDTO as BidtStockMvtDTO).stockMvtQuantity = pcData.productQuantity;
                          row.quantity = NumberUtils.fromString(pcData.productQuantity);
                        }
                        // price
                        if (pcData.priceValue && NumberUtils.fromString(pcData.priceValue) > 0) {
                          (row.bidtStockMvtDTO as BidtStockMvtDTO).priceValue = pcData.priceValue;
                          row.totalPrice = NumberUtils.fromString(pcData.priceValue);
                        }
                        // lead time
                        if (ObjectUtils.isDefined(pcData.numberOfDays) && (pcData.numberOfDays as number) > 0) {
                          (row.bidtStockMvtDTO as BidtStockMvtDTO).numberOfDays = pcData.numberOfDays;
                          row.productionLeadTime = pcData.numberOfDays;
                        }

                        // un seul fournisseur est renseigné dans la demande d'achat donc on sort
                        break;
                      }
                    }
                  });
              }
            }
          });
      }
    });
  }
}
