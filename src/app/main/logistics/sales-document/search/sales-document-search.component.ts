import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
import { SalesDocumentListInput } from '../../../../shared/types/api-input-types/bidt-sales-request/sales-document-list-input.interface';
import { SalesDocumentListOutput } from '../../../../shared/types/api-output-types/bidt-sales-request/sales-document-list-output.interface';
import { BidtSalesRequestDTO } from '../../../../shared/types/api-types/bidt-sales-request-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';

import { SalesDocumentSearchService } from './sales-document-search.service';

interface SalesDocumentExport {
  srCode?: string;
  srName?: string;
  srDescription?: string;
  bidoCustomerCustomerCode?: string;
  srStatus?: string;
  srCreationDate?: string;
  srDeliveryDate?: string;
}

@Component({
  selector: 'aw-sales-document-search',
  templateUrl: './sales-document-search.component.html',
  styleUrls: ['./sales-document-search.component.scss']
})
export class SalesDocumentSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public componentOpenMode: typeof ComponentOpenMode;

  // search objects
  public bidtSalesDTO: BidtSalesRequestDTO;
  public searchObject: SalesDocumentListInput;

  // dropdowns
  public salesDocumentStatus: LabelValue<string>[];
  public salesDocumentCustomers: LabelValue<string>[];

  // ovs popup
  public showQuickSearchMaterialPopup: boolean;

  // results
  public isLoading: boolean;
  public showAdvancedCriteria: boolean;
  public resultTable: SalesDocumentListOutput[];
  public results: BidtSalesRequestDTO[];
  public resultTableCols: TableColumn[];
  public selectedResults: BidtSalesRequestDTO[];

  // save search criteria
  public criteriaToSave: SalesDocumentListInput;
  public hasBeenCalculated: boolean;
  public criteriaName: string | undefined;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.SALES_DOCUMENT_SEARCH_CRITERIA_ID;

  // data for export
  private exportData: SalesDocumentExport[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly salesDocumentSearchService: SalesDocumentSearchService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentOpenMode = ComponentOpenMode;
    this.init();
    this.setTableCols();

    this.loadDropdowns();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_SALES_DOCUMENT_SEARCH;
  }

  private init(): void {
    // search objects
    this.bidtSalesDTO = {};
    this.searchObject = {};

    // dropdowns
    this.salesDocumentStatus = [];
    this.salesDocumentCustomers = [];

    // ovs popup
    this.showQuickSearchMaterialPopup = false;

    // results
    this.isLoading = false;
    this.showAdvancedCriteria = false;
    this.resultTableCols = [];
    this.resultTableInit();
  }

  private resultTableInit(): void {
    this.resultTable = [];
    this.results = [];
    this.selectedResults = [];

    // data for export
    this.exportData = [];
  }

  private setTableCols(): void {
    this.resultTableCols = [
      { field: 'srCode', alignment: 'left' },
      { field: 'srName', alignment: 'left' },
      { field: 'srDescription', alignment: 'left' },
      { field: 'bidoCustomerCustomerCode', alignment: 'left' },
      { field: 'srStatus', alignment: 'left' },
      { field: 'creationDate', alignment: 'left' },
      { field: 'deliveryDate', alignment: 'left' }
    ];
  }

  /***********
   * Dropdowns
   **********/

  private loadDropdowns(): void {
    this.loadSalesDocumentStatus();
    this.loadSalesDocumentCustomers();
  }

  private loadSalesDocumentStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PURCHASE_STATUS_MAP).subscribe((results) => {
      this.salesDocumentStatus = results || [];
    });
  }

  private loadSalesDocumentCustomers(): void {
    this.salesDocumentSearchService.fetchSupplierDropDownData().subscribe((result) => {
      this.salesDocumentCustomers = result;
    });
  }

  /***********
   * Ovs popup
   **********/

  public searchMaterialCode() {
    this.showQuickSearchMaterialPopup = true;
  }

  public setSelectedMaterial(selectedObject: BirePnDTO) {
    if (selectedObject) {
      this.searchObject.pn = selectedObject.pnCode;
    }
    this.showQuickSearchMaterialPopup = false;
  }

  /********************
   * Search by criteria
   *******************/

  public search(): void {
    this.resultTableInit();

    if (this.searchObject.sn === '') {
      this.searchObject.sn = undefined;
    }
    if (this.searchObject.batchNumber === '') {
      this.searchObject.batchNumber = undefined;
    }

    const input: SalesDocumentListInput = this.searchObject;
    input.bidtSalesDTO = this.bidtSalesDTO;

    this.isLoading = true;

    this.salesDocumentSearchService.findByCriteria(input).subscribe((result) => {
      this.isLoading = false;
      result.forEach((res) => {
        if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srCreationDate) {
          res.bidtSalesRequestDTO.creationDate = this.dateService.timestampToString(
            res.bidtSalesRequestDTO.srCreationDate
          );
        }
        if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srDeliveryDate) {
          res.bidtSalesRequestDTO.creationDate = this.dateService.timestampToString(
            res.bidtSalesRequestDTO.srDeliveryDate
          );
        }
        if (!!res.bidtSalesRequestDTO && res.bidtSalesRequestDTO.srStatus) {
          LabelValueUtils.stringValueToLabel(res.bidtSalesRequestDTO, 'srStatus', this.salesDocumentStatus);
        }
        if (!!res.bidtSalesRequestDTO) {
          this.results.push(res.bidtSalesRequestDTO);
        }
      });

      this.results.forEach((res) => {
        const data: SalesDocumentExport = {
          srCode: res.srCode,
          srName: res.srName,
          srDescription: res.srDescription,
          bidoCustomerCustomerCode: res.bidoCustomerCustomerCode,
          srStatus: res.srStatus,
          srCreationDate: res.creationDate,
          srDeliveryDate: res.deliveryDate
        };
        this.exportData.push(data);
      });

      this.resultTable = result;
    });
  }

  /**************************
   * GOTO Sales Document Form
   *************************/

  public openNewSalesDocument(): void {
    this.openSalesDocument(undefined, ComponentOpenMode.Create);
  }

  public openSalesDocument(object: BidtSalesRequestDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_SALES_DOCUMENT_FORM,
      openMode
    };
    if (!!object) {
      data.objectId = this.serializationService.serialize(object);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************
   * Save search criteria
   *********************/

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: SalesDocumentListInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
      this.bidtSalesDTO = criteria.bidtSalesDTO || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    this.searchObject.bidtSalesDTO = this.bidtSalesDTO;
    const criteriaToSave: SalesDocumentListInput = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  private resetSearchCriteria(): void {
    this.bidtSalesDTO = {};
    this.searchObject = {
      bidtSalesDTO: this.bidtSalesDTO
    };
    this.criteriaName = undefined;
  }

  /**********************
   * Result table actions
   *********************/

  public openSelectedResults(): void {
    this.selectedResults.forEach((res) => {
      if (!!res) {
        this.openSalesDocument(res, ComponentOpenMode.Read);
      }
    });
  }

  public exportTable(): void {
    const name = `${this.getComponentName()}.salesDocListExport`;
    this.translateService.get(name).subscribe((res) => {
      this.exportService.toExcel(this.exportData, res, this.componentData.componentId);
    });
  }

  public deleteResults(): void {
    const confirmMessageKey = this.selectedResults.length > 1 ? 'confirmDeleteSelectedSDs' : 'confirmDeleteSelectedSD';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const input: number[] = [];
        this.selectedResults.forEach((res) => {
          if (!!res.id) {
            input.push(res.id);
          }
        });
        this.salesDocumentSearchService.deleteSalesDoc(input).subscribe(() => {
          this.search();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteSD'));
        });

        this.selectedResults = [];
      }
    });
  }
}
