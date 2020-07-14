import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ConsecutiveDocumentOutput } from '../../../../shared/types/api-output-types/bidt-purchase-request/consecutive-document-output.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { ActionCounter } from '../shared/action-counter.interface';
import { ActionRow } from '../shared/action-row.interface';
import { ContributorRow } from '../shared/contributor-row.interface';
import { LitigationElementInput } from '../shared/litigation-element-input.interface';
import { LitigationFileSearchRow } from '../shared/litigation-file-row.interface';

import { LitigationFileFormService } from './litigation-file-form.service';

interface DocumentRow {
  docName: string;
  docExtension: string;
  docSize: string;
  docAttachmentDate: string;
  docType: string;
  id?: number;
  _obj: BidtDocumentDTO;
}

interface DefaultInputRow {
  type: string;
  category: string;
  comments: string;
}

@Component({
  selector: 'aw-litigation-file-form',
  styleUrls: ['./litigation-file-form.component.scss'],
  templateUrl: './litigation-file-form.component.html'
})
export class LitigationFileFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly DEFAULT_ANCHOR_ID: string = 'defaultAnchor';
  public static readonly ORIGIN_ANCHOR_ID: string = 'originAnchor';
  public static readonly CONTRIBUTOR_ANCHOR_ID: string = 'contributorAnchor';
  public static readonly LITIGATION_ELEMENTS_ANCHOR_ID: string = 'litigationElementsAnchor';
  public static readonly ACTION_ANCHOR_ID: string = 'actionAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentAnchor';

  public readonly component: typeof LitigationFileFormComponent;
  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;
  public pageSubtitle: string;

  public mainData: LitigationFileSearchRow;
  public actionCounterData: ActionCounter;
  public backupMainData: LitigationFileSearchRow;
  public litigationTypeList: LabelValue<string>[];
  public litigationElementList: LabelValue<string>[];

  public contributorTableCols: TableColumn[];
  public actionTableCols: TableColumn[];

  public contributorTable: ContributorRow[];
  public actionTable: ActionRow[];
  public litigationElementInput: LitigationElementInput;
  public selectedContributors: ContributorRow[];
  public selectedActions: ActionRow[];

  public isContributorTableLoading: boolean;
  public isLitigationMaterialsTableLoading: boolean;
  public isActionTableLoading: boolean;

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

  public actionDocumentsTable: ConsecutiveDocumentOutput[];
  public actionDocumentsTableCols: TableColumn[];
  public selectedConsecutiveDocuments: ConsecutiveDocumentOutput[];
  public isConsecutiveDocumentsLoading: boolean;

  public awPropertiesConstants: typeof AWPropertiesConstants;

  public defaultTableList: DefaultInputRow[];
  public defaultTableCols: TableColumn[];

  // Table of content ***********************************************************

  @ViewChild(LitigationFileFormComponent.MAIN_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.DEFAULT_ANCHOR_ID)
  public defaultEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.ORIGIN_ANCHOR_ID)
  public originEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.CONTRIBUTOR_ANCHOR_ID)
  public contributorEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.LITIGATION_ELEMENTS_ANCHOR_ID)
  public litigationElementsEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.ACTION_ANCHOR_ID)
  public actionEltRef: ElementRef;

  @ViewChild(LitigationFileFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentTableEltRef: ElementRef;

  public toc: PageTocEntry[];
  public showSaveSpinner: boolean;

  public contributorList: SelectItem[];
  public categoryList: SelectItem[];
  public objectTypeList: SelectItem[];
  public recipientList: SelectItem[];
  public carrierList: SelectItem[];
  public actionPlanList: SelectItem[];

  public showValidateActionDialog: boolean;
  public showEstablishActionDialog: boolean;
  public showTransferValidationDialog: boolean;
  public showActionNameDialog: boolean;

  public transferValidationData: object;
  public establishActionData: object;
  public validateActionData: object;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    pageTocService: PageTocService,
    private readonly litigationFileFormService: LitigationFileFormService,
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

    this.component = LitigationFileFormComponent;
    this.awPropertiesConstants = AWPropertiesConstants;

    this.registerPageTocEntryObservable();
    this.init();
    this.setTableCols();
    this.loadDropDowns();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_LITIGATION_FILE_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      this.setTableOfContent();

      let pageContext = 'tab.createMode';
      if (!!this.componentData.objectId) {
        this.mainData = this.serializationService.deserialize(this.componentData.objectId) as LitigationFileSearchRow;
        if (this.mainData.foundOn) {
          this.mainData.foundOn = new Date(this.mainData.foundOn);
        }
        pageContext = this.mainData.litigationFile || '';
        this.pageSubtitle = pageContext;
        this.loadTableData();
      }
      this.displayComponentContext(pageContext, this.isCreateOpenMode);
    }
  }

  private loadDropDowns() {
    this.loadActionPlanList();
    this.loadLitigationTypes();
    this.loadLitigationElementTypes();
    this.loadContributorList();
    this.loadRecipientList();
    this.loadObjectTypeList();
    this.loadCarrierList();
    this.loadCategoryList();
    this.loadContributorList();
  }

  private loadTableData() {
    this.findContributors();
    this.findLitigationElementsValue();
    this.findActions();
    this.getDefaultListData();
  }

  private init(): void {
    this.pageSubtitle = '';
    this.mainData = {};
    this.actionCounterData = {};
    this.contributorTableCols = [];
    this.actionTableCols = [];
    this.documentTableCols = [];
    this.contributorTable = [];
    this.actionTable = [];
    this.litigationElementInput = {};
    this.documentTable = [];
    this.selectedDocuments = [];
    this.isContributorTableLoading = false;
    this.isLoadingDocumentTable = false;
    this.litigationTypeList = [];
    this.litigationElementList = [];
    this.selectedDocuments = [];
    this.selectedActions = [];
    this.selectedContributors = [];
    this.contributorList = [];
    this.categoryList = [];
    this.objectTypeList = [];
    this.recipientList = [];
    this.carrierList = [];
    this.actionPlanList = [];
    this.defaultTableList = [];
  }

  public editLitigationFile(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancelLitigationFile(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
  }

  public reloadLitigationFile(): void {
    return;
  }

  public saveLitigationFile(): void {
    return;
  }

  private getDefaultListData(): void {
    this.defaultTableList = this.litigationFileFormService.getDefaultListData();
  }

  private setTableCols(): void {
    this.contributorTableCols = [
      { field: 'role', alignment: 'left' },
      { field: 'login', alignment: 'left' }
    ];

    this.actionTableCols = [
      { field: 'item', alignment: 'left', width: '5%' },
      { field: 'actionName', alignment: 'left' },
      { field: 'comment', alignment: 'left' },
      { field: 'action', alignment: 'left' },
      { field: 'contributor', alignment: 'left' },
      { field: 'status', alignment: 'left' }
    ];

    this.documentTableCols = [
      { field: 'docName', alignment: 'left' },
      { field: 'comments', alignment: 'left' },
      { field: 'type', alignment: 'left' },
      { field: 'docExtension', alignment: 'left' },
      { field: 'docSize', alignment: 'left' },
      { field: 'docAttachmentDate', alignment: 'left' }
    ];

    this.defaultTableCols = [
      { field: 'type', alignment: 'left' },
      { field: 'category', alignment: 'left' },
      { field: 'comments', alignment: 'left' }
    ];
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
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const documentsUpdatedWithoutSelection = this.documentsUpdated.filter(
              (document) => !this.areSameDocument(document, selectedDocumentRow._obj)
            );
            if (this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
              this.documentsUpdated = documentsUpdatedWithoutSelection;
            }

            this.documentsRemoved = [...this.documentsRemoved, selectedDocumentRow._obj];
          }
        });

        this.documentsRemoved.forEach((doc) => {
          if (!!doc.id) {
            // todo this.documentDataRemoveList.push(doc.id);
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
              bidtPurchaseRequestId: 0
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

  /**************************************************************************
   * Table Of Content
   *************************************************************************/

  private setTableOfContent(): void {
    const mainDataKey = 'page.mainData';
    const originKey = this.getTranslateKey('origin');
    const defaultKey = this.getTranslateKey('default');
    const contributorKey = this.getTranslateKey('contributors');
    const litigationElentsKey = this.getTranslateKey('litigationElements');
    const actionKey = this.getTranslateKey('actions');
    const documentsKey = 'global.documents';
    this.translateService
      .get([mainDataKey, originKey, defaultKey, contributorKey, litigationElentsKey, actionKey, documentsKey])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? (results[mainDataKey] as string) : 'Main Information';
        const defaultLabel = !!results ? (results[defaultKey] as string) : 'Default';
        const originLabel = !!results ? (results[originKey] as string) : 'Origin';
        const contributorLabel = !!results ? (results[contributorKey] as string) : 'Contributors';
        const litigationElementsLabel = !!results ? (results[litigationElentsKey] as string) : 'Elemnts';
        const actionLabel = !!results ? (results[actionKey] as string) : 'Actions';
        const documentsLabel = !!results ? (results[documentsKey] as string) : 'Documents';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainDataLabel
          },
          {
            id: 'defaultAnchor',
            anchor: this.defaultEltRef,
            label: defaultLabel
          },
          {
            id: 'litigationElementsAnchor',
            anchor: this.litigationElementsEltRef,
            label: litigationElementsLabel
          },
          {
            id: 'originAnchor',
            anchor: this.originEltRef,
            label: originLabel
          },
          {
            id: 'contributorAnchor',
            anchor: this.contributorEltRef,
            label: contributorLabel
          },
          {
            id: 'actionAnchor',
            anchor: this.actionEltRef,
            label: actionLabel
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

  private findContributors() {
    this.litigationFileFormService.findContributors().subscribe((result) => {
      this.contributorTable = result;
    });
  }

  private findLitigationElementsValue() {
    this.litigationFileFormService.findLitigationMaterials().subscribe((result) => {
      this.litigationElementInput = result;
    });
  }

  private findActions() {
    this.litigationFileFormService.findActions().subscribe((result) => {
      this.actionTable = result;
      this.countActions();
    });
  }

  private countActions() {
    const percent = 100;
    const releasedAction = this.actionTable.filter((obj) => {
      return obj.status === 'Realise';
    }).length;
    const data: ActionCounter = {
      actionPlan: '',
      plannedActions: this.actionTable.length,
      noOfReleasedActions: releasedAction,
      durationInProgress: '0 Jours',
      progress: (releasedAction / this.actionTable.length) * percent
    };

    this.actionCounterData = data;
  }

  private loadLitigationTypes() {
    this.litigationFileFormService.loadLitigationTypes().subscribe((result) => {
      this.litigationTypeList = result;
    });
  }

  private loadLitigationElementTypes() {
    this.litigationFileFormService.loadLitigationElementTypes().subscribe((result) => {
      this.litigationElementList = result;
    });
  }

  private loadContributorList() {
    this.litigationFileFormService.loadContributorList().subscribe((result) => {
      this.contributorList = result;
    });
  }

  private loadCategoryList() {
    this.litigationFileFormService.loadCategoryList().subscribe((result) => {
      this.categoryList = result;
    });
  }

  private loadObjectTypeList() {
    this.litigationFileFormService.loadObjectTypeList().subscribe((result) => {
      this.objectTypeList = result;
    });
  }

  private loadRecipientList() {
    this.litigationFileFormService.loadRecipientList().subscribe((result) => {
      this.recipientList = result;
    });
  }

  private loadCarrierList() {
    this.litigationFileFormService.loadCarrierList().subscribe((result) => {
      this.carrierList = result;
    });
  }

  private loadActionPlanList() {
    this.litigationFileFormService.loadActionPlanList().subscribe((result) => {
      this.actionPlanList = result;
    });
  }

  public onChangeAction(rowData: ActionRow) {
    if (rowData.action) {
      if (rowData.item === '01') {
        this.showTransferValidationDialog = true;
        this.transferValidationData = { ...rowData };
      } else if (rowData.item === '02') {
        this.showEstablishActionDialog = true;
        this.establishActionData = { ...rowData };
      } else if (rowData.item === '03') {
        this.showValidateActionDialog = true;
        this.validateActionData = { ...rowData };
      }
    }
  }

  public onValidateAction(data: ActionRow) {
    this.actionTable[2].comment = data.comment;
    this.actionTable[2].action = data.action;
    this.actionTable[2].status = 'Realise';
    this.actionTable[2].since = '1 jours';
    this.actionTable[2].stockType = 'Ordre de transfert';
    this.countActions();
  }

  public onEstablishActionPlan(data: ActionRow) {
    this.actionTable[1].comment = data.comment;
    this.actionTable[1].actionName = data.actionName;
    this.actionTable[1].action = data.action;
    this.actionTable[1].status = 'Realise';
    this.actionTable[1].since = '0 jours';
    this.litigationFileFormService.loadMoreActions().subscribe((result) => {
      this.actionTable = this.actionTable.concat(result);
      this.countActions();
    });
  }

  public onTransferValidation(data: ActionRow) {
    this.actionTable[0].comment = data.comment;
    this.actionTable[0].action = data.action;
    this.actionTable[0].status = 'Realise';
    this.countActions();
  }

  public onSelectActionPlan() {
    this.showActionNameDialog = true;
  }

  public onAddActionPlan() {
    return;
  }

  public onActionValidation() {
    return;
  }

  public onEditComment() {
    return;
  }

  public onActionDelete() {
    return;
  }

  public searchFolderName() {
    return;
  }

  public setActionPlan(data: string) {
    this.actionCounterData.actionPlan = data;
  }
}
