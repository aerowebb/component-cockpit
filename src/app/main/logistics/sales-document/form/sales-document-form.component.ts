import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
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
import { SaveSalesDocumentDTO } from '../../../../shared/types/api-input-types/bidt-sales-request/save-sales-document-dto.interface';
import { MaterialAndServicesOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/material-and-services-output.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtSalesRequestDTO } from '../../../../shared/types/api-types/bidt-sales-request-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { SalesDocumentSearchService } from '../search/sales-document-search.service';

import { SalesDocumentFormService } from './sales-document-form.service';

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
  selector: 'aw-sales-document-form',
  templateUrl: './sales-document-form.component.html',
  styleUrls: ['./sales-document-form.component.scss']
})
export class SalesDocumentFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  // General
  public static readonly MAIN_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly MATERIALS_ANCHOR_ID: string = 'materialsAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentsAnchor';

  private readonly SET_TIME_OUT = 500;

  public pageId?: number;
  public pageSubtitle: string;

  public navigationLinkList: MenuItem[];

  public mainData: BidtSalesRequestDTO;

  public readonly component: typeof SalesDocumentFormComponent;

  public currDate: Date;

  // Materials Table
  public materialsTable: MaterialAndServicesOutput[];
  public databaseMaterials: MaterialAndServicesOutput[];
  public selectedMaterials: MaterialAndServicesOutput[];
  public materialsTableCols: TableColumn[];
  public isMaterialsTableLoading: boolean;
  public showDialogMaterialAndServices: boolean;
  public currentMaterialObject: MaterialAndServicesOutput | undefined;
  public isNewMaterialObject: boolean;
  public isReadOnlyPopup: boolean;
  public selectedMaterialIndex?: number;

  // Documents Table
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

  // Dropdowns
  public salesDocumentStatus: LabelValue<string>[];
  public salesDocumentCustomers: LabelValue<string>[];

  // Table of content

  @ViewChild(SalesDocumentFormComponent.MAIN_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(SalesDocumentFormComponent.MATERIALS_ANCHOR_ID)
  public materialsEltRef: ElementRef;

  @ViewChild(SalesDocumentFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentsEltRef: ElementRef;

  public toc: PageTocEntry[];
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public sessionService: SessionService,
    private readonly translateService: TranslateService,
    private readonly salesDocumentFormService: SalesDocumentFormService,
    private readonly salesDocumentSearchService: SalesDocumentSearchService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService,
    private readonly confirmationService: ConfirmationService
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

    this.component = SalesDocumentFormComponent;

    this.setNavigationLinkList();

    this.registerPageTocEntryObservable();

    this.currDate = new Date();

    this.init();
    this.setTableCols();
    this.loadDropdowns();
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      this.setTableOfContent();

      this.pageId = !!this.componentData.objectId
        ? (this.serializationService.deserialize(this.componentData.objectId).id as number)
        : undefined;

      if (this.pageId !== null && this.pageId !== undefined) {
        this.loadSalesDoc();
      } else {
        this.mainData.srCreationDate = (new Date() as unknown) as number;
        this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
      }
    }
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_SALES_DOCUMENT_FORM;
  }

  private init(): void {
    // general
    this.pageId = undefined;

    // dropdowns
    this.salesDocumentCustomers = [];
    this.salesDocumentStatus = [];

    // materials table
    this.materialsTableCols = [];

    // documents table
    this.showDocumentDialog = false;
    this.isLoadingDocumentTable = false;

    this.initAfterSave();
  }

  public initAfterSave(): void {
    // general
    this.pageSubtitle = '';
    this.mainData = {};

    // materials table
    this.materialsTable = [];
    this.databaseMaterials = [];
    this.selectedMaterials = [];
    this.isMaterialsTableLoading = false;
    this.showDialogMaterialAndServices = false;
    this.currentMaterialObject = undefined;
    this.isNewMaterialObject = false;
    this.isReadOnlyPopup = false;

    // documents table
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
    this.documentDataRemoveList = [];
  }

  private setTableCols(): void {
    this.materialsTableCols = [
      { field: 'pnText', alignment: 'left', width: '30%' },
      { field: 'serialNumber', alignment: 'left' },
      { field: 'batchNumber', alignment: 'left' },
      { field: 'quantityForTable', alignment: 'left' },
      { field: 'warehouse', alignment: 'left' },
      { field: 'partStatus', alignment: 'left' }
    ];

    this.documentTableCols = [
      { field: 'docName', alignment: 'left', width: '40%' },
      { field: 'docExtension', alignment: 'left', width: '20%' },
      { field: 'docSize', alignment: 'left', width: '20%' },
      { field: 'docAttachmentDate', alignment: 'left', width: '20%' }
    ];
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
            this.goToGoodsMovements();
          }
        }
      ];
    });
  }

  /*******************
   * Table Of Content
   ******************/

  private setTableOfContent(): void {
    const mainDataKey = 'page.mainData';
    const materialsKey = this.getTranslateKey('materials');
    const documentsKey = 'global.documents';
    this.translateService.get([mainDataKey, materialsKey, documentsKey]).subscribe((results: string[]) => {
      const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
      const materialsLabel = !!results ? results[materialsKey] : 'Materials';
      const documentsLabel = !!results ? results[documentsKey] : 'Documents';

      this.toc = [
        {
          id: 'mainInformationAnchor',
          anchor: this.mainInformationEltRef,
          label: mainDataLabel
        },
        {
          id: 'materialsAnchor',
          anchor: this.materialsEltRef,
          label: materialsLabel
        },
        {
          id: 'documentsAnchor',
          anchor: this.documentsEltRef,
          label: documentsLabel
        }
      ];

      setTimeout(() => {
        super.selectPageTocEntry(this.component.MAIN_ANCHOR_ID);
      }, this.SET_TIME_OUT);
    });
  }

  /**************
   * Page loading
   *************/

  private loadSalesDoc(): void {
    this.isMaterialsTableLoading = true;
    this.isLoadingDocumentTable = true;
    if (this.pageId !== null && this.pageId !== undefined) {
      this.salesDocumentFormService.getById(this.pageId).subscribe((result) => {
        // Main Information
        this.mainData = result.bidtSalesRequestDTO || {};
        // this.componentData.objectId = this.serializationService.serialize(this.mainData);
        this.setPageContext();

        // Materials Table
        this.materialsTable = result.materialAndServicesOutputList || [];
        this.databaseMaterials = _cloneDeep(this.materialsTable);

        // Documents Table
        ListUtils.orEmpty(result.documentTablist)
          .filter((document) => !!document.documentName)
          .forEach((doc) => {
            this.documents.push(doc.bidtDocumentDTO);
          });
        this.documentTable = this.documents.map((document) => this.createDocumentRow(document));
      });
      this.isMaterialsTableLoading = false;
      this.isLoadingDocumentTable = false;
    }
  }

  private setPageContext(): void {
    let context = 'tab.create';
    if (!!this.mainData.srCode) {
      context = this.mainData.srCode;
      context = !!this.mainData.srName ? `${context} | ${this.mainData.srName}` : context;
      context = !!this.mainData.bidoCustomerCustomerCode
        ? `${context} | ${this.mainData.bidoCustomerCustomerCode}`
        : context;
    }

    this.pageSubtitle = context;

    // if (!this.isCreateOpenMode) {
    //   this.updateOpenMode(ComponentOpenMode.Write);
    // }

    this.displayComponentContext(context, this.isCreateOpenMode);
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

  /**************
   * Page actions
   *************/

  public reloadSalesDoc(): void {
    this.initAfterSave();
    this.loadSalesDoc();
  }

  public editSalesDoc(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancelSalesDoc(): void {
    this.reloadSalesDoc();
    this.updateOpenMode(ComponentOpenMode.Read);
  }

  public saveSalesDoc(): void {
    if (!this.mainData.srCreationDate) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      const bidtStockMvtDTOList: BidtStockMvtDTO[] = [];
      this.materialsTable.forEach((material) => {
        const updating = this.databaseMaterials.some(
          (dm) =>
            !!material.bidtStockMvtDTO && !!dm.bidtStockMvtDTO && dm.bidtStockMvtDTO.id === material.bidtStockMvtDTO.id
        );
        if (!updating && !!material.bidtStockMvtDTO) {
          material.bidtStockMvtDTO.id = undefined;
        }
        if (!!material.bidtStockMvtDTO) {
          bidtStockMvtDTOList.push(material.bidtStockMvtDTO);
        }
      });
      const bidtDocumentList: BidtDocumentDTO[] = [];
      this.documentTable.forEach((doc) => {
        if (!!doc._obj.documentPublicationDate) {
          doc._obj.documentPublicationDate = new Date(doc._obj.documentPublicationDate);
        }
        doc._obj.bidtSalesRequestId = this.pageId;
        bidtDocumentList.push(doc._obj);
      });
      const input: SaveSalesDocumentDTO = {
        bidtSalesRequestDTO: this.mainData,
        bidtStockMvtDTOList,
        bidtDocumentList,
        documentDataRemoveList: this.documentDataRemoveList
      };
      this.save(input);
    }
  }

  private save(input: SaveSalesDocumentDTO): void {
    this.showSaveSpinner = true;
    this.salesDocumentFormService.saveSalesDocument(input).subscribe(
      (result) => {
        this.pageId = result;
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveSalesDocument'));
        this.updateOpenMode(ComponentOpenMode.Write);
        this.componentData.openMode = 1;
        this.initAfterSave();
        this.loadSalesDoc();
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );
  }

  /*****************
   * Materials Table
   ****************/

  public deleteMaterials(): void {
    this.selectedMaterials.forEach((material) => {
      this.materialsTable = this.materialsTable.filter(
        (m) => !!m.bidtStockMvtDTO && !!material.bidtStockMvtDTO && m.bidtStockMvtDTO.id !== material.bidtStockMvtDTO.id
      );
    });
    this.selectedMaterials = [];
  }

  public createMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMaterialObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = false;
    this.isNewMaterialObject = true;
    this.selectedMaterialIndex = undefined;
  }

  public editMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMaterialObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = false;
    this.isNewMaterialObject = false;
    this.selectedMaterialIndex = this.materialsTable.findIndex(
      (material) =>
        !!material.bidtStockMvtDTO &&
        !!this.selectedMaterials[0].bidtStockMvtDTO &&
        material.bidtStockMvtDTO.id === this.selectedMaterials[0].bidtStockMvtDTO.id
    );
    this.selectedMaterials = [];
  }

  public openMaterial(): void {
    this.showDialogMaterialAndServices = true;
    this.currentMaterialObject = _cloneDeep(this.selectedMaterials[0]);
    this.isReadOnlyPopup = true;
    this.isNewMaterialObject = false;
    this.selectedMaterials = [];
  }

  public goToStockMovements(): void {
    // todo
  }

  public goToGoodsMovements(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_GOODS_MOVEMENT_FORM,
      openMode: ComponentOpenMode.Read
    };
    const input: GoodsMovementInput = {
      purchaseRequestId: this.mainData.id
    };
    data.objectId = this.serializationService.serialize(input);
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public addNewMaterial(event: MaterialAndServicesOutput): void {
    if (!!event.bidtStockMvtDTO) {
      event.bidtStockMvtDTO.bidtSalesRequestId = this.pageId;
    }
    this.materialsTable.push(event);
  }

  public updateMaterial(event: MaterialAndServicesOutput): void {
    if (this.selectedMaterialIndex !== null && this.selectedMaterialIndex !== undefined) {
      this.materialsTable[this.selectedMaterialIndex] = event;
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
      this.salesDocumentFormService.findBirePn(input).subscribe((result) => {
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

  /*****************
   * Documents Table
   ****************/

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
          if (doc.id !== null && doc.id !== undefined) {
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
              bidtSalesRequestId: this.pageId
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

  public downloadFiles(): void {
    this.selectedDocuments.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.documentContent, documentRow._obj.documentName);
    });
  }

  /**********************************
   * Documents Table - helper methods
   *********************************/

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

  private areSameDocument(obj1: BidtDocumentDTO | undefined, obj2: BidtDocumentDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.documentName && !!obj2.documentName && obj1.documentName === obj2.documentName;
    }
  }
}
