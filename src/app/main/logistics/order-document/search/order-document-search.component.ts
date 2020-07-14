import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { DisplayOrderDocumentInput } from '../../../../shared/types/api-input-types/bidt-purchase-request/display-order-document-input.interface';
import { BidtPurchaseRequestDTO } from '../../../../shared/types/api-types/bidt-purchase-request-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { OrderDocumentRow } from '../shared/order-document-row.interface';

import { OrderDocumentSearchService } from './order-document-search.service';

@Component({
  selector: 'aw-order-document-search',
  styleUrls: ['./order-document-search.component.scss'],
  templateUrl: './order-document-search.component.html'
})
export class OrderDocumentSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly ORDER_DOCUMENT_TABLE_EXPORT_NAME: string = 'order-document-list';

  public criteriaToSave: DisplayOrderDocumentInput;
  public hasBeenCalculated: boolean;
  public criteriaName: string | undefined;

  public readonly componentOpenMode: typeof ComponentOpenMode;

  public orderDocumentTable: SearchResultsDTO<OrderDocumentRow>;
  public orderDocumentTableCols: TableColumn[];
  public searchObject: DisplayOrderDocumentInput;
  public selectedOrderDocuments: OrderDocumentRow[];

  public orderDocumentTypes: SelectItem[];
  public orderDocumentCategories: SelectItem[];
  public orderDocumentStatus: SelectItem[];
  public orderDocumentSuppliers: SelectItem[];

  public isLoading: boolean;
  public showAdvancedCriteria: boolean;
  public receptionDateVisibility: boolean;
  public startDateVisibility: boolean;
  public endDateVisibility: boolean;
  public showQuickSearchMaterialPopup: boolean;
  public showQuickSearchPurchaseRequestPopup: boolean;
  public bidtPurchaseDTO: BidtPurchaseRequestDTO;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.ORDER_DOCUMENT_SEARCH_CRITERIA_ID;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public dateService: DateService,
    private readonly orderDocumentSearchService: OrderDocumentSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentOpenMode = ComponentOpenMode;
    this.init();
    this.initOrderDocumentTableCols();
    this.loadOrderDocumentCategories();
    this.loadOrderDocumentStatus();
    this.loadOrderDocumentSupplierCodes();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_ORDER_DOCUMENT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public deleteOrderDocuments(): void {
    const confirmMessageKey =
      this.selectedOrderDocuments.length > 1
        ? 'confirmDeleteSelectedOrderDocuments'
        : 'confirmDeleteSelectedOrderDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const ids: number[] = [];
        this.selectedOrderDocuments.forEach((orderDocument) => {
          if (!!orderDocument && !!orderDocument._obj.id) {
            ids.push(orderDocument._obj.id);
          }
        });

        this.orderDocumentSearchService.remove(ids).subscribe(() => {
          this.search();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteOrderDocument'));
        });

        this.selectedOrderDocuments = [];
      }
    });
  }

  public exportTable(): void {
    this.exportService.toExcel(
      this.orderDocumentTable.list,
      OrderDocumentSearchComponent.ORDER_DOCUMENT_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public openNewOrderDocument(): void {
    this.openOrderDocument(undefined, ComponentOpenMode.Create);
  }

  public openSelectedOrderDocuments(): void {
    this.selectedOrderDocuments.forEach((orderDocument) => {
      if (!!orderDocument) {
        if (orderDocument._obj.id === null || orderDocument._obj.id === undefined) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingOrderDocumentCode'));
        } else {
          this.openOrderDocument(orderDocument, ComponentOpenMode.Read);
        }
      }
    });
  }

  public resetSearchCriteria(): void {
    this.bidtPurchaseDTO = {};
    this.searchObject = {
      bidtPurchaseDTO: this.bidtPurchaseDTO
    };
    this.criteriaName = undefined;
  }

  public search(): void {
    this.isLoading = true;
    this.clearResultTable();
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.searchObject.bidtPurchaseDTO = this.bidtPurchaseDTO;

    this.orderDocumentSearchService.findByCriteria(this.searchObject).subscribe((result) => {
      this.isLoading = false;

      this.setOrderDocumentTable(result);

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: DisplayOrderDocumentInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
      this.bidtPurchaseDTO = criteria.bidtPurchaseDTO || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    this.searchObject.bidtPurchaseDTO = this.bidtPurchaseDTO;
    const criteriaToSave: DisplayOrderDocumentInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  private clearResultTable(): void {
    this.orderDocumentTable = { list: [], moreResults: false };
    this.selectedOrderDocuments = [];
  }

  private init(): void {
    this.clearResultTable();
    this.resetSearchCriteria();

    this.orderDocumentCategories = [];
    this.orderDocumentStatus = [];
    this.orderDocumentSuppliers = [];
    this.orderDocumentTypes = [];
    this.isLoading = false;
    this.showAdvancedCriteria = false;
    this.receptionDateVisibility = false;
    this.startDateVisibility = false;
    this.endDateVisibility = false;
    this.showQuickSearchMaterialPopup = false;
    this.showQuickSearchPurchaseRequestPopup = false;
  }

  private initOrderDocumentTableCols(): void {
    this.orderDocumentTableCols = [
      { field: 'code', alignment: 'left' },
      { field: 'name', alignment: 'left' },
      { field: 'category', alignment: 'left' },
      { field: 'type', alignment: 'left' },
      { field: 'supplier', alignment: 'left' },
      { field: 'supplierDocumentNumber', alignment: 'left' },
      { field: 'status', alignment: 'left' },
      { field: 'creationDate', alignment: 'left' },
      { field: 'receptionDate', alignment: 'left' },
      { field: 'startDate', alignment: 'left' },
      { field: 'endDate', alignment: 'left' },
      { field: 'superiorDocument', alignment: 'left' }
    ];
  }

  private formatDate(date: number | undefined): string {
    if (!!date) {
      return this.dateService.dateToString(new Date(date));
    } else {
      return '';
    }
  }

  private loadOrderDocumentCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PURCHASE_CATEGORY_MAP).subscribe((results) => {
      this.orderDocumentCategories = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadOrderDocumentStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PURCHASE_STATUS_MAP).subscribe((results) => {
      this.orderDocumentStatus = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public loadOrderDocumentTypes(): void {
    this.bidtPurchaseDTO.prType = undefined;
    const category = this.searchObject.bidtPurchaseDTO && this.searchObject.bidtPurchaseDTO.prCategory;
    if (category !== null && category !== undefined) {
      this.orderDocumentSearchService.findTypeBasedOnCategory(category).subscribe((results) => {
        this.orderDocumentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
      });
    } else {
      this.orderDocumentTypes = [];
    }
  }

  private loadOrderDocumentSupplierCodes(): void {
    this.orderDocumentSearchService.findBidoCustomerBySearchCriteriaOrder().subscribe((results) => {
      this.orderDocumentSuppliers = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public openOrderDocument(object: OrderDocumentRow | undefined, openMode: ComponentOpenMode): void {
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

  public openSuperiorOrderDocument(object: OrderDocumentRow | undefined): void {
    if (!!object) {
      const superiorRow = this.orderDocumentTable.list.filter((doc) => doc.code === object.superiorDocument)[0];
      this.openOrderDocument(superiorRow, ComponentOpenMode.Read);
    }
    // const data: PageComponentData = {
    //   id: this.tabService.generateId(),
    //   componentId: ComponentConstants.LOG_ORDER_DOCUMENT_FORM,
    //   openMode
    // };
    // if (!!object) {
    //   data.objectId = this.serializationService.serialize(object);
    // }
    // const labelKey = 'transaction.' + data.componentId;
    // this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setOrderDocumentTable(result: SearchResultsDTO<BidtPurchaseRequestDTO>): void {
    if (!!result) {
      this.orderDocumentTable.moreResults = result.moreResults;
      this.orderDocumentTable.list = result.list.map((orderDocument) => {
        const orderDocumentRow: OrderDocumentRow = {
          code: orderDocument.prCode,
          name: orderDocument.prName,
          status: orderDocument.prStatus,
          creationDate: this.formatDate(orderDocument.prCreationDate),
          receptionDate: this.formatDate(orderDocument.prReceptionDate),
          category: orderDocument.prCategory,
          type: orderDocument.prType,
          startDate: this.formatDate(orderDocument.prStartDate),
          endDate: this.formatDate(orderDocument.prEndDate),
          supplierDocumentNumber: orderDocument.supplierDocumentNumber,
          supplier: orderDocument.supplier,
          superiorDocument: orderDocument.superiorDocument,
          _obj: orderDocument
        };

        return orderDocumentRow;
      });
    }

    this.selectedOrderDocuments = [];
  }

  public searchMaterialCode() {
    this.showQuickSearchMaterialPopup = true;
  }

  public searchSuperiorDocument() {
    this.showQuickSearchPurchaseRequestPopup = true;
  }

  public setSelectedMaterial(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.searchObject.material = selectedObject.pnCode;
    }
    this.showQuickSearchMaterialPopup = false;
  }

  public setSelectedPurchaseRequest(selectedObject: BidtPurchaseRequestDTO) {
    if (selectedObject) {
      this.searchObject.purchaseRequestSupCode = selectedObject.prCode;
    }
    this.showQuickSearchPurchaseRequestPopup = false;
  }
}
