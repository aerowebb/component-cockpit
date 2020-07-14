import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Observable, forkJoin } from 'rxjs';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveBidoCustomerInput } from '../../../../shared/types/api-input-types/fleet-management/save-bido-customer-input.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoAttributeValueDTO } from '../../../../shared/types/api-types/bido-attribute-value-dto.interface';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoCusCustomerDTO } from '../../../../shared/types/api-types/bido-cus-customer-dto.interface';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoCustomerEvolutionDTO } from '../../../../shared/types/api-types/bido-customer-evolution-dto.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { BusinessPartnerFormService } from './business-partner-form.service';

interface CusCustomerRow {
  customerCode: string;
  customerLink: string;
  customerName: string;
  _obj: BidoCusCustomerDTO;
}

interface CustomerEvolutionRow {
  customerCode: string;
  customizedCompliance: string;
  evolutionNumber: string;
  evolutionRevisionNumber: string;
  evolutionType: string;
  _obj: BidoCustomerEvolutionDTO;
}

interface DocumentRow {
  docEndOfValidityDate: string;
  docExtension: string;
  docName: string;
  docPublicationDate: string;
  docSize: string;
  docCategory: string;
  _obj: BidoDocumentationDTO;
}

@Component({
  selector: 'aw-business-partner-form',
  templateUrl: './business-partner-form.component.html'
})
export class BusinessPartnerFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly CONTACT_TABLE_ANCHOR_ID: string = 'contactTableAnchor';
  public static readonly CUSTOMER_EVOLUTION_ANCHOR_ID: string = 'customerEvolutionTableAnchor';
  public static readonly CUSTOMER_TABLE_ANCHOR_ID: string = 'cusCustomerTableAnchor';
  public static readonly DOCUMENT_TABLE_ANCHOR_ID: string = 'documentTableAnchor';
  public static readonly MAIN_DATA_ANCHOR_ID: string = 'mainDataAnchor';
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';

  public readonly component: typeof BusinessPartnerFormComponent;
  public readonly tabAttributesId: string;
  public readonly tabDocumentsId: string;
  public readonly tabGeneralId: string;

  public businessPartner: BidoCustomerDTO;
  public contactTableDataSource: TableDataSource<BidoContactDTO>;
  public countries: SelectItem[];
  public currentTabId: string;
  public customerTableDataSource: TableDataSource<CusCustomerRow>;
  public customerEvolutionTableDataSource: TableDataSource<CustomerEvolutionRow>;
  public customerTypes: SelectItem[];
  public documentTableDataSource: TableDataSource<DocumentRow>;
  public documentTypes: SelectItem[];
  public dynamicAttributes: DynamicAttributes[];
  public icaoCodes: SelectItem[];
  public zones: SelectItem[];

  private cusCustomers: BidoCusCustomerDTO[];
  private customerEvolutions: BidoCustomerEvolutionDTO[];
  private documents: BidoDocumentationDTO[];

  public currentCusCustomer: BidoCusCustomerDTO | undefined;
  public cusCustomerDialogOpenMode: ComponentOpenMode;
  public showCusCustomerDialog: boolean;
  private currentCusCustomerIndex: number;

  public currentCustomerEvolution: BidoCustomerEvolutionDTO | undefined;
  public customerEvolutionDialogOpenMode: ComponentOpenMode;
  public showCustomerEvolutionDialog: boolean;
  private currentCustomerEvolutionIndex: number;

  public currentDocument: BidoDocumentationDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;
  private currentDocumentIndex: number;

  private customerEvolutionsAdded: BidoCustomerEvolutionDTO[];
  private customerEvolutionsRemoved: BidoCustomerEvolutionDTO[];
  private customerEvolutionsUpdated: BidoCustomerEvolutionDTO[];
  private customerLinks: LabelValue<string>[];
  private customizedCompliances: LabelValue<string>[];
  private documentsAdded: BidoDocumentationDTO[];
  private documentsRemoved: BidoDocumentationDTO[];
  private documentsUpdated: BidoDocumentationDTO[];
  public showStatusUpdatesPopup: boolean;

  // Table of content ***********************************************************

  @ViewChild(BusinessPartnerFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(BusinessPartnerFormComponent.MAIN_DATA_ANCHOR_ID)
  public mainDataEltRef: ElementRef;

  @ViewChild(BusinessPartnerFormComponent.CUSTOMER_TABLE_ANCHOR_ID)
  public customerTableEltRef: ElementRef;

  @ViewChild(BusinessPartnerFormComponent.CONTACT_TABLE_ANCHOR_ID)
  public contactTableEltRef: ElementRef;

  @ViewChild(BusinessPartnerFormComponent.CUSTOMER_EVOLUTION_ANCHOR_ID)
  public customerEvolutionEltRef: ElementRef;

  @ViewChild(BusinessPartnerFormComponent.DOCUMENT_TABLE_ANCHOR_ID)
  public documentTableEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly businessPartnerFormService: BusinessPartnerFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly propertiesService: PropertiesService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = BusinessPartnerFormComponent;
    this.tabAttributesId = 'attributes';
    this.tabDocumentsId = 'documents';
    this.tabGeneralId = 'general';

    super.registerPageTocEntryObservable();

    this.openGeneralTab();
    this.initContactTableDataSource();
    this.initCustomerTableDataSource();
    this.initCustomerEvolutionTableDataSource();
    this.initDocumentTableDataSource();

    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_BUSINESS_PARTNER_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    this.setTableOfContent();

    const context = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId).customerCode
      : 'tab.createMode';
    this.displayComponentContext(context, this.isCreateOpenMode);

    this.loadBusinessPartner();
    this.loadUserWorkflow(undefined);
  }

  public cancelBusinessPartner(): void {
    this.updateOpenMode(ComponentOpenMode.Read);

    this.reloadBusinessPartner();
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
    });
  }

  public editBusinessPartner(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadBusinessPartner(): void {
    this.init();
    this.loadBusinessPartner();
  }

  public saveBusinessPartner(): void {
    if (StringUtils.isNullOrEmpty(this.businessPartner.customerCode)) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      // Contacts
      this.contactTableDataSource.setData(
        this.contactTableDataSource.dataSrc.map((contact) => this.fillContact(contact, this.businessPartner))
      );

      // CusCustomers
      this.cusCustomers = this.cusCustomers.map((cusCustomer) =>
        this.fillCusCustomer(cusCustomer, this.businessPartner)
      );

      // Customer evolutions
      this.customerEvolutionsAdded = this.customerEvolutionsAdded.map((customerEvolution) => {
        return this.fillCustomerEvolution(customerEvolution, this.businessPartner);
      });
      this.customerEvolutionsRemoved = this.customerEvolutionsRemoved.map((customerEvolution) => {
        return this.fillCustomerEvolution(customerEvolution, this.businessPartner);
      });
      this.customerEvolutionsUpdated = this.customerEvolutionsUpdated.map((customerEvolution) => {
        return this.fillCustomerEvolution(customerEvolution, this.businessPartner);
      });

      // Documents
      this.documentsAdded = this.documentsAdded.map((document) => this.fillDocument(document, this.businessPartner));
      this.documentsRemoved = this.documentsRemoved.map((document) =>
        this.fillDocument(document, this.businessPartner)
      );
      this.documentsUpdated = this.documentsUpdated.map((document) =>
        this.fillDocument(document, this.businessPartner)
      );

      // Dynamic attributes
      if (!!this.businessPartner.customerCode) {
        this.businessPartner.bidoCustomerAttributeDatas = this.dynamicAttributesService.toBidoCustomerAttribute(
          this.businessPartner.customerCode,
          this.dynamicAttributes
        );
      }

      const saveBidoCustomerInput: SaveBidoCustomerInput = {
        bidoCustomer: this.businessPartner,
        bidoContactList: this.contactTableDataSource.dataSrc,
        bidoCusCustomerList: this.cusCustomers,
        bidoCustomerEvolutionAddedList: this.customerEvolutionsAdded,
        bidoCustomerEvolutionRemovedList: this.customerEvolutionsRemoved,
        bidoCustomerEvolutionUpdatedList: this.customerEvolutionsUpdated,
        bidoDocumentationAddedList: this.documentsAdded,
        bidoDocumentationRemovedList: this.documentsRemoved,
        bidoDocumentationUpdatedList: this.documentsUpdated
      };

      if (this.isCreateOpenMode) {
        this.createBusinessPartner(saveBidoCustomerInput);
      } else {
        this.updateBusinessPartner(saveBidoCustomerInput);
      }
    }
  }

  public updateCountries(): void {
    this.businessPartner.country = undefined;

    this.propertiesService.getCountriesInZone(this.businessPartner.zone).subscribe((results) => {
      this.countries = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private areSameDocument(obj1: BidoDocumentationDTO | undefined, obj2: BidoDocumentationDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
    }
  }

  private createBusinessPartner(saveBidoCustomerInput: SaveBidoCustomerInput): void {
    this.showSaveSpinner = true;
    this.businessPartnerFormService.createBidoCustomer(saveBidoCustomerInput).subscribe(
      () => {
        if (!!this.businessPartner.customerCode) {
          const businessPartnerFormId: BidoCustomerDTOId = {
            customerCode: this.businessPartner.customerCode
          };
          this.componentData.objectId = this.serializationService.serialize(businessPartnerFormId);
          this.updateOpenMode(ComponentOpenMode.Write);
          this.displayComponentContext(this.businessPartner.customerCode, this.isCreateOpenMode);

          this.onSavedBusinessPartner();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateBusinessPartner'));
        }
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  private createCusCustomerRow(cusCustomer: BidoCusCustomerDTO): CusCustomerRow {
    const cusCustomerRow: CusCustomerRow = {
      customerCode: cusCustomer.customerCode as string,
      customerLink: this.formatCustomerLink(cusCustomer),
      customerName: StringUtils.orEmpty(cusCustomer.customerName),
      _obj: cusCustomer
    };

    return cusCustomerRow;
  }

  private createCustomerEvolutionRow(customerEvolution: BidoCustomerEvolutionDTO): CustomerEvolutionRow {
    const customerEvolutionRow: CustomerEvolutionRow = {
      customerCode: customerEvolution.customerCode as string,
      customizedCompliance: this.formatCustomizedCompliance(customerEvolution),
      evolutionNumber: customerEvolution.evolutionNumber as string,
      evolutionRevisionNumber: customerEvolution.evolutionRevisionNumber as string,
      evolutionType: customerEvolution.evolutionType as string,
      _obj: customerEvolution
    };

    return customerEvolutionRow;
  }

  private createDocumentRow(document: BidoDocumentationDTO): DocumentRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!document.docCategory && (documentType.value as string) === document.docCategory
    );

    const documentRow: DocumentRow = {
      docEndOfValidityDate: this.dateService.dateToString(document.docEndOfValidityDate),
      docExtension: this.formatDocExtension(document),
      docName: document.docName as string,
      docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
      docSize: this.formatDocSize(document),
      docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      _obj: document
    };

    return documentRow;
  }

  private fillContact(contact: BidoContactDTO, businessPartner: BidoCustomerDTO): BidoContactDTO {
    contact.customerCode = businessPartner.customerCode;

    return contact;
  }

  private fillCusCustomer(cusCustomer: BidoCusCustomerDTO, businessPartner: BidoCustomerDTO): BidoCusCustomerDTO {
    cusCustomer.bidCustomerCode = businessPartner.customerCode;
    cusCustomer.bidCustomerName = businessPartner.customerName;

    return cusCustomer;
  }

  private fillCustomerEvolution(
    customerEvolution: BidoCustomerEvolutionDTO,
    businessPartner: BidoCustomerDTO
  ): BidoCustomerEvolutionDTO {
    customerEvolution.customerCode = businessPartner.customerCode;

    return customerEvolution;
  }

  private fillDocument(document: BidoDocumentationDTO, businessPartner: BidoCustomerDTO): BidoDocumentationDTO {
    document.customerCode = businessPartner.customerCode;

    return document;
  }

  private formatCustomerLink(cusCustomer: BidoCusCustomerDTO): string {
    if (!!cusCustomer.customerLink) {
      const selectedCustomerLink = this.customerLinks.find((customerLink) => {
        return customerLink.value === cusCustomer.customerLink;
      });

      return !!selectedCustomerLink ? selectedCustomerLink.label : cusCustomer.customerLink;
    } else {
      return '';
    }
  }

  private formatCustomizedCompliance(customerEvolution: BidoCustomerEvolutionDTO): string {
    if (!!customerEvolution.customizedCompliance) {
      const selectedCustomizedCompliance = this.customizedCompliances.find((customizedCompliance) => {
        return customizedCompliance.value === customerEvolution.customizedCompliance;
      });

      return !!selectedCustomizedCompliance
        ? selectedCustomizedCompliance.label
        : customerEvolution.customizedCompliance;
    } else {
      return '';
    }
  }

  private formatDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  private formatDocSize(document: BidoDocumentationDTO): string {
    return !!document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return this.businessPartnerFormService.findBidoAttributesByAttributeCategory(attributeCategory);
  }

  private init(): void {
    this.businessPartner = {};

    this.countries = [];
    this.cusCustomers = [];
    this.customerEvolutions = [];
    this.customerEvolutionsAdded = [];
    this.customerEvolutionsRemoved = [];
    this.customerEvolutionsUpdated = [];
    this.customerLinks = [];
    this.customerTypes = [];
    this.customizedCompliances = [];
    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.documents = [];
    this.documentTypes = [];
    this.dynamicAttributes = [];
    this.icaoCodes = [];
    this.zones = [];

    this.customerTableDataSource.dataSelection = [];
    this.customerEvolutionTableDataSource.dataSelection = [];
    this.documentTableDataSource.dataSelection = [];

    this.currentCusCustomer = undefined;
    this.currentCusCustomerIndex = -1;
    this.cusCustomerDialogOpenMode = ComponentOpenMode.Read;
    this.showCusCustomerDialog = false;

    this.currentCustomerEvolution = undefined;
    this.currentCustomerEvolutionIndex = -1;
    this.customerEvolutionDialogOpenMode = ComponentOpenMode.Read;
    this.showCustomerEvolutionDialog = false;

    this.currentDocument = undefined;
    this.currentDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.showDocumentDialog = false;

    this.loadCustomerLinks();
    this.loadCustomerTypes();
    this.loadCustomizedCompliances();
    this.loadDocumentTypes();
    this.loadIcaoCodes();
    this.loadZones();
  }

  private loadBusinessPartner(): void {
    // Load dynamic attributes
    const observables: Observable<BidoAttributeDTO[]>[] = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_CUSTOMER_KEY)
    ];

    forkJoin(observables).subscribe(([allAttribute, customerAttribute]) => {
      let attributes: BidoAttributeDTO[] = [];
      attributes = !!allAttribute ? [...attributes, ...allAttribute] : attributes;
      attributes = !!customerAttribute ? [...attributes, ...customerAttribute] : attributes;
      this.dynamicAttributes = this.dynamicAttributesService.from(attributes);

      if (!!this.componentData.objectId) {
        // Load business partner object
        const businessPartnerId: BidoCustomerDTOId = this.serializationService.deserialize(this.componentData.objectId);

        this.businessPartnerFormService.findBidoCustomer(businessPartnerId).subscribe((result) => {
          if (!!result) {
            this.businessPartner = result;

            if (!!this.businessPartner && !!this.businessPartner.customerCode) {
              const customerCode = this.businessPartner.customerCode;

              this.loadContacts(customerCode);
              this.loadCusCustomers(customerCode);
              this.loadCustomerEvolutions(customerCode);
              this.loadDocuments(customerCode);

              if (!!this.businessPartner.bidoCustomerAttributeDatas) {
                this.dynamicAttributesService.setValues(
                  this.dynamicAttributes,
                  this.businessPartner.bidoCustomerAttributeDatas
                );
              }
            }
          }
        });
      }
    });
  }

  private loadContacts(customerCode: string): void {
    this.businessPartnerFormService.findBidoContactsByCustomerCode(customerCode).subscribe((results) => {
      this.contactTableDataSource.setData(ListUtils.orEmpty(results));
    });
  }

  private loadCusCustomers(customerCode: string): void {
    this.businessPartnerFormService.findBidoCusCustomersByCustomerCode(customerCode).subscribe((results) => {
      this.cusCustomers = ListUtils.orEmpty(results).filter((cusCustomer) => !!cusCustomer.customerCode);
      this.customerTableDataSource.setData(
        this.cusCustomers.map((cusCustomer) => this.createCusCustomerRow(cusCustomer))
      );
    });
  }

  private loadCustomerEvolutions(customerCode: string): void {
    this.businessPartnerFormService.findBidoCustomerEvolutionsByCustomerCode(customerCode).subscribe((results) => {
      this.customerEvolutions = ListUtils.orEmpty(results).filter((customerEvolution) => {
        return (
          !!customerEvolution.customerCode &&
          !!customerEvolution.evolutionNumber &&
          !!customerEvolution.evolutionRevisionNumber &&
          !!customerEvolution.evolutionType
        );
      });
      this.customerEvolutionTableDataSource.setData(
        this.customerEvolutions.map((customerEvolution) => this.createCustomerEvolutionRow(customerEvolution))
      );
    });
  }

  private loadCustomerTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.CUSTOMER_TYPE_MAP).subscribe((results) => {
      this.customerTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadDocuments(customerCode: string): void {
    this.businessPartnerFormService.findBidoDocumentationsByCustomerCode(customerCode).subscribe((results) => {
      this.documents = ListUtils.orEmpty(results).filter((document) => !!document.docName);
      this.documentTableDataSource.setData(this.documents.map((document) => this.createDocumentRow(document)));
    });
  }

  private loadIcaoCodes(): void {
    const attributeId: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.ICAO_CODE.toString()
    };

    this.businessPartnerFormService.findBidoAttribute(attributeId).subscribe((result) => {
      if (!!result && !!result.bidoAttributeValueDatas) {
        this.icaoCodes = result.bidoAttributeValueDatas.map((attributeValueData: BidoAttributeValueDTO) => {
          const label =
            this.translateService.currentLang === LangConstants.FRENCH_CODE
              ? attributeValueData.textFr
              : attributeValueData.textEn;
          const icaoCode: SelectItem = {
            label,
            value: attributeValueData.attributeValue
          };

          return icaoCode;
        });
      }
    });
  }

  private loadZones(): void {
    this.propertiesService.getZones().subscribe((results) => {
      this.zones = !!results ? SelectItemUtils.fromLabelValues(results) : [];

      this.updateCountries();
    });
  }

  private onSavedBusinessPartner(): void {
    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.customerEvolutionsAdded = [];
    this.customerEvolutionsRemoved = [];
  }

  private initContactTableDataSource(): void {
    this.contactTableDataSource = new TableDataSource({
      enableSelection: false,
      allowMultiSelect: true,
      columns: [
        {
          field: 'contactName',
          translateKey: this.getTranslateKey('contactName'),
          alignment: ColumnAlignment.LEFT,
          width: '70%'
        },
        {
          field: 'primaryContact',
          translateKey: this.getTranslateKey('primaryContact'),
          alignment: ColumnAlignment.CENTER,
          width: '30%'
        }
      ],
      data: []
    });
  }

  private initCustomerTableDataSource(): void {
    this.customerTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'customerCode',
          translateKey: this.getTranslateKey('customerCode'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'customerName',
          translateKey: this.getTranslateKey('customerName'),
          alignment: ColumnAlignment.LEFT,
          width: '40%'
        },
        {
          field: 'customerLink',
          translateKey: this.getTranslateKey('customerLink'),
          alignment: ColumnAlignment.LEFT,
          width: '40%'
        }
      ],
      data: []
    });
  }

  private initCustomerEvolutionTableDataSource(): void {
    this.customerEvolutionTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber'),
          alignment: ColumnAlignment.RIGHT,
          width: '20%'
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          alignment: ColumnAlignment.RIGHT,
          width: '40%'
        },
        {
          field: 'customizedCompliance',
          translateKey: this.getTranslateKey('customizedCompliance'),
          alignment: ColumnAlignment.LEFT,
          width: '40%'
        }
      ],
      data: []
    });
  }

  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName'),
          alignment: ColumnAlignment.LEFT,
          width: '60%'
        },
        {
          field: 'docCategory',
          translateKey: this.getTranslateKey('docType'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        }
      ],
      data: []
    });
  }

  private updateBusinessPartner(saveBidoCustomerInput: SaveBidoCustomerInput): void {
    this.showSaveSpinner = true;
    this.businessPartnerFormService.updateBidoCustomer(saveBidoCustomerInput).subscribe(
      () => {
        this.onSavedBusinessPartner();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateBusinessPartner'));
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  /**************************************************************************
   * Attributes tab
   *************************************************************************/

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  /**************************************************************************
   * Documents tab
   *************************************************************************/

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentTableDataSource.dataSelection.forEach((selectedDocumentRow) => {
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

        this.documents = this.documents.filter((document) => {
          return !this.documentTableDataSource.dataSelection.some((selectedDocumentRow) =>
            this.areSameDocument(document, selectedDocumentRow._obj)
          );
        });

        this.documentTableDataSource.setData(
          this.documentTableDataSource.dataSrc.filter((documentRow) => {
            return !this.documentTableDataSource.dataSelection.some((selectedDocumentRow) => {
              return this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
            });
          })
        );
        this.documentTableDataSource.dataSelection = [];
      }
    });
  }

  public editDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documents.findIndex((document) =>
        this.areSameDocument(document, this.documentTableDataSource.dataSelection[0]._obj)
      );

      this.currentDocument = { ...this.documentTableDataSource.dataSelection[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.documentTableDataSource.dataSelection.length === 1) {
      this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
      this.currentDocumentIndex = -1;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showDocumentDialog = true;
    }
  }

  public openDocumentsTab(): void {
    this.currentTabId = this.tabDocumentsId;
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documents.some((document) => document.docName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const document: BidoDocumentationDTO = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };

            this.documents = [...this.documents, document];
            this.documentsAdded = [...this.documentsAdded, document];
            this.documentTableDataSource.addData([this.createDocumentRow(document)]);
          }
        });
      }

      fileUploader.clear();
    }
  }

  /**************************************************************************
   * General tab
   *************************************************************************/

  public createCusCustomer(): void {
    this.currentCusCustomer = undefined;
    this.cusCustomerDialogOpenMode = ComponentOpenMode.Create;
    this.showCusCustomerDialog = true;
  }

  public createCustomerEvolution(): void {
    this.currentCustomerEvolution = undefined;
    this.customerEvolutionDialogOpenMode = ComponentOpenMode.Create;
    this.showCustomerEvolutionDialog = true;
  }

  public deleteCusCustomers(): void {
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedCusCustomers'
        : 'confirmDeleteSelectedCusCustomer';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.cusCustomers = this.cusCustomers.filter((cusCustomer) => {
          return !this.customerTableDataSource.dataSelection.some((selectedCusCustomerRow) => {
            return (
              !!cusCustomer.customerCode &&
              !!selectedCusCustomerRow.customerCode &&
              cusCustomer.customerCode === selectedCusCustomerRow.customerCode
            );
          });
        });
        this.customerTableDataSource.setData(
          this.customerTableDataSource.dataSrc.filter((cusCustomerRow) => {
            return !this.customerTableDataSource.dataSelection.some((selectedCusCustomerRow) => {
              return cusCustomerRow.customerCode === selectedCusCustomerRow.customerCode;
            });
          })
        );

        this.customerTableDataSource.dataSelection = [];
      }
    });
  }

  public deleteCustomerEvolutions(): void {
    const partialMessageKey =
      this.customerEvolutionTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedCustomerEvolutions'
        : 'confirmDeleteSelectedCustomerEvolution';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.customerEvolutionTableDataSource.dataSelection.forEach((selectedCustomerEvolutionRow) => {
          const customerEvolutionsAddedWithoutSelection = this.customerEvolutionsAdded.filter((customerEvolution) =>
            DTOUtils.equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj)
          );
          // list of added objects contains the selection
          if (this.customerEvolutionsAdded.length !== customerEvolutionsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.customerEvolutionsAdded = customerEvolutionsAddedWithoutSelection;
          } else {
            const customerEvolutionsUpdatedWithoutSelection = this.customerEvolutionsUpdated.filter(
              (customerEvolution) =>
                DTOUtils.equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj)
            );
            // list of updated objects contains the selection
            if (this.customerEvolutionsUpdated.length !== customerEvolutionsUpdatedWithoutSelection.length) {
              // Remove selection from added objects
              this.customerEvolutionsUpdated = customerEvolutionsUpdatedWithoutSelection;
            }

            this.customerEvolutionsRemoved = [...this.customerEvolutionsRemoved, selectedCustomerEvolutionRow._obj];
          }
        });

        this.customerEvolutions = this.customerEvolutions.filter((customerEvolution) => {
          return !this.customerEvolutionTableDataSource.dataSelection.some((selectedCustomerEvolutionRow) => {
            return DTOUtils.equalsBidoCustomerEvolutionDTO(customerEvolution, selectedCustomerEvolutionRow._obj);
          });
        });

        this.customerEvolutionTableDataSource.setData(
          this.customerEvolutionTableDataSource.dataSrc.filter((customerEvolutionRow) => {
            return !this.customerEvolutionTableDataSource.dataSelection.some((selectedCustomerEvolutionRow) => {
              return DTOUtils.equalsBidoCustomerEvolutionDTO(
                customerEvolutionRow._obj,
                selectedCustomerEvolutionRow._obj
              );
            });
          })
        );
        this.customerEvolutionTableDataSource.dataSelection = [];
      }
    });
  }

  public editCusCustomer(): void {
    if (this.customerTableDataSource.dataSelectionCount === 1) {
      this.currentCusCustomerIndex = this.cusCustomers.findIndex((cusCustomer) => {
        return (
          !!cusCustomer.customerCode &&
          !!this.customerTableDataSource.dataSelection[0]._obj.customerCode &&
          cusCustomer.customerCode === this.customerTableDataSource.dataSelection[0]._obj.customerCode
        );
      });

      this.currentCusCustomer = { ...this.customerTableDataSource.dataSelection[0]._obj };
      this.cusCustomerDialogOpenMode = ComponentOpenMode.Write;
      this.showCusCustomerDialog = true;
    }
  }

  public editCustomerEvolution(): void {
    if (this.customerEvolutionTableDataSource.dataSelectionCount === 1) {
      this.currentCustomerEvolutionIndex = this.customerEvolutions.findIndex((customerEvolution) => {
        return DTOUtils.equalsBidoCustomerEvolutionDTO(
          customerEvolution,
          this.customerEvolutionTableDataSource.dataSelection[0]._obj
        );
      });

      this.currentCustomerEvolution = { ...this.customerEvolutionTableDataSource.dataSelection[0]._obj };
      this.customerEvolutionDialogOpenMode = ComponentOpenMode.Write;
      this.showCustomerEvolutionDialog = true;
    }
  }

  public openCusCustomer(): void {
    if (this.customerTableDataSource.dataSelectionCount === 1) {
      this.currentCusCustomer = this.customerTableDataSource.dataSelection[0]._obj;
      this.currentCusCustomerIndex = -1;
      this.cusCustomerDialogOpenMode = ComponentOpenMode.Read;
      this.showCusCustomerDialog = true;
    }
  }

  public openCustomerEvolution(): void {
    if (this.customerEvolutionTableDataSource.dataSelectionCount === 1) {
      this.currentCustomerEvolution = this.customerEvolutionTableDataSource.dataSelection[0]._obj;
      this.currentCustomerEvolutionIndex = -1;
      this.customerEvolutionDialogOpenMode = ComponentOpenMode.Read;
      this.showCustomerEvolutionDialog = true;
    }
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  private loadCustomerLinks(): void {
    this.propertiesService.getValue(GenericPropertyConstants.CUSTOMER_LINK_MAP).subscribe((results) => {
      this.customerLinks = ListUtils.orEmpty(results);
    });
  }

  private loadCustomizedCompliances(): void {
    this.propertiesService.getValue(GenericPropertyConstants.COMPLIANCE_MAP).subscribe((results) => {
      this.customizedCompliances = ListUtils.orEmpty(results);
    });
  }

  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  /**************************************************************************
   * Cus Customer Dialog
   *************************************************************************/

  public onAddCusCustomer(cusCustomer: BidoCusCustomerDTO): void {
    if (!!cusCustomer) {
      if (this.currentCusCustomerIndex !== -1) {
        this.cusCustomers[this.currentCusCustomerIndex] = cusCustomer;
        this.customerTableDataSource.replaceData(
          this.customerTableDataSource.dataSelection[0],
          this.createCusCustomerRow(cusCustomer)
        );
      } else {
        this.cusCustomers = [...this.cusCustomers, cusCustomer];
        this.customerTableDataSource.addData([this.createCusCustomerRow(cusCustomer)]);
      }
    }

    this.customerTableDataSource.dataSelection = [];
  }

  /**************************************************************************
   * Customer Evolution Dialog
   *************************************************************************/

  public onAddCustomerEvolution(customerEvolution: BidoCustomerEvolutionDTO): void {
    if (!!customerEvolution) {
      customerEvolution.evolutionType = BidoEvolutionConstants.CODE_EVOLUTION;

      if (this.currentCustomerEvolutionIndex !== -1) {
        this.customerEvolutions[this.currentCustomerEvolutionIndex] = customerEvolution;
        this.customerEvolutionTableDataSource.replaceData(
          this.customerEvolutionTableDataSource.dataSelection[0],
          this.createCustomerEvolutionRow(customerEvolution)
        );

        const updatedCustomerEvolutionIndex = this.customerEvolutionsUpdated.findIndex((customerEvolutionUpdated) =>
          DTOUtils.equalsBidoCustomerEvolutionDTO(customerEvolutionUpdated, customerEvolution)
        );
        if (updatedCustomerEvolutionIndex !== -1) {
          this.customerEvolutionsUpdated[updatedCustomerEvolutionIndex] = customerEvolution;
        } else {
          this.customerEvolutionsUpdated = [...this.customerEvolutionsUpdated, customerEvolution];
        }
      } else {
        const isAdded = this.customerEvolutionsAdded.some((customerEvolutionAdded) =>
          DTOUtils.equalsBidoCustomerEvolutionDTO(customerEvolutionAdded, customerEvolution)
        );
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnCustomerEvolutionExists'));
        } else {
          this.customerEvolutions = [...this.customerEvolutions, customerEvolution];
          this.customerEvolutionsAdded = [...this.customerEvolutionsAdded, customerEvolution];
          this.customerEvolutionTableDataSource.addData([this.createCustomerEvolutionRow(customerEvolution)]);
        }
      }
    }

    this.customerEvolutionTableDataSource.dataSelection = [];
  }

  /**************************************************************************
   * Document Dialog
   *************************************************************************/

  public onAddDocument(document: BidoDocumentationDTO): void {
    if (!!document) {
      if (this.currentDocumentIndex !== -1) {
        const isAdded = this.documentsAdded.some((documentAdded) => this.areSameDocument(documentAdded, document));
        if (isAdded) {
          const indexInAddedList = this.documentsAdded.findIndex((doc) => this.areSameDocument(doc, document));
          this.documentsAdded[indexInAddedList] = document;
        } else if (!isAdded) {
          this.documentsUpdated = [...this.documentsUpdated, document];
        }
        this.documentTableDataSource.replaceData(
          this.documentTableDataSource.dataSelection[0],
          this.createDocumentRow(document)
        );
      }
    }

    this.documentTableDataSource.dataSelection = [];
  }

  /**************************************************************************
   * Table Of Content
   *************************************************************************/

  private setTableOfContent(): void {
    const mainDataKey = 'page.mainData';
    const generalKey = 'global.general';
    const associatedBusinessPartnerKey = this.getTranslateKey('associatedBusinessPartner');
    const listContactsKey = this.getTranslateKey('listContacts');
    const customizedEvolutionsComplianceKey = this.getTranslateKey('customizedEvolutionsCompliance');
    const documentsKey = 'global.documents';
    this.translateService
      .get([
        mainDataKey,
        generalKey,
        associatedBusinessPartnerKey,
        listContactsKey,
        customizedEvolutionsComplianceKey,
        documentsKey
      ])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const generalLabel = !!results ? results[generalKey] : 'General';
        const associatedBusinessPartnerLabel = !!results
          ? results[associatedBusinessPartnerKey]
          : 'Associated Business Partner';
        const listContactsLabel = !!results ? results[listContactsKey] : 'List of Contacts';
        const customizedEvolutionsComplianceLabel = !!results
          ? results[customizedEvolutionsComplianceKey]
          : 'Customized Evolutions Compliance';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainDataLabel
          },
          {
            id: 'mainDataAnchor',
            anchor: this.mainDataEltRef,
            label: generalLabel
          },
          {
            id: 'cusCustomerTableAnchor',
            anchor: this.customerTableEltRef,
            label: associatedBusinessPartnerLabel
          },
          {
            id: 'contactTableAnchor',
            anchor: this.contactTableEltRef,
            label: listContactsLabel
          },
          {
            id: 'customerEvolutionTableAnchor',
            anchor: this.customerEvolutionEltRef,
            label: customizedEvolutionsComplianceLabel
          },
          {
            id: 'documentTableAnchor',
            anchor: this.documentTableEltRef,
            label: documentsLabel
          }
        ];

        super.selectPageTocEntry(this.component.MAIN_INFORMATION_ANCHOR_ID);
      });
  }
  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }
}
