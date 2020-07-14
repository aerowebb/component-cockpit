import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';

import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../shared/services/date.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { BidtDocumentDTO } from '../../../../../shared/types/api-types/bidt-document-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { ListModificationsDTO } from '../../../dtos/list-modifications-dto.interface';
import { TableDataSourceWithHistory } from '../../../utils/table-data-source-with-history';

@Component({
  selector: 'aw-document-section',
  templateUrl: './document-section.component.html'
})
export class DocumentSectionComponent extends PageComponent<PageComponentData> implements OnInit {
  @Input()
  public document: BidtDocumentDTO;
  @Input()
  public set documentsList(documentsTableDataSource: BidtDocumentDTO[]) {
    this.documentsTableDataSource.setData(documentsTableDataSource);
  }
  @Input()
  public documentSectionSelected: boolean;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onChangeDocumentSectionSelected: EventEmitter<boolean>;

  public readonly component: typeof DocumentSectionComponent;
  public errorMarkerList: string[];
  public documentsTableDataSource: TableDataSourceWithHistory<BidtDocumentDTO>;
  public categories: LabelValue<string>[];
  public typeList: LabelValue<string>[];
  public maxDate: Date;
  public isCategoryDisabled: boolean;
  public pageTocService: PageTocService;
  public showDocumentDialog: boolean;
  public showDocumentUrlDialog: boolean;
  public showAddDocumentDialog: boolean;
  public currentDocument: BidtDocumentDTO;
  public currentDocumentIndex: number;
  public isReadOnlyDocumentDialog: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public dateService: DateService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.component = DocumentSectionComponent;
    this.categories = [];
    this.typeList = [];
    this.maxDate = new Date();
    this.errorMarkerList = [];
    this.initDocumentsTableDataSource();
    this.onChangeDocumentSectionSelected = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
  }

  public getComponentName(): string {
    return 'DocumentSection';
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        {
          field: 'documentName',
          translateKey: this.getTranslateKey('documentName')
        },
        {
          field: 'documentDescription',
          translateKey: this.getTranslateKey('documentDescription')
        },
        {
          field: 'documentType',
          translateKey: this.getTranslateKey('documentType')
        },
        {
          field: 'documentPublicationDate',
          translateKey: this.getTranslateKey('documentPublicationDate')
        },
        {
          field: 'documentSource',
          translateKey: this.getTranslateKey('documentSource')
        }
      ],
      data: [],
      allowUniqueValue: true,
      propertiesWitchIdentifyData: ['documentName'],
      errorOnAddedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate'),
      errorOnUpdatedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate')
    });
  }

  public onChangeDocumentSelected(): void {
    this.documentSectionSelected = true;
    this.onChangeDocumentSectionSelected.emit(true);
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      FileUtils.getFileContentAsBase64(file, (fileContent) => {
        if (fileContent) {
          const document: BidtDocumentDTO = {
            documentContent: fileContent,
            documentName: file.name,
            documentPublicationDate: new Date()
          };

          this.addNewDocument(document);
        }
      });

      fileUploader.clear();
    }
  }

  public linkUrl(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentUrlDialog = true;
    } else {
      this.currentDocumentIndex = -1;
      this.currentDocument = {};
      this.showDocumentUrlDialog = true;
    }
  }

  public downloadFiles(): void {
    this.documentsTableDataSource.dataSelection.forEach((document) => {
      FileUtils.downloadFile(document.documentContent, document.documentName);
    });
  }

  public showDownloadDocButton(): boolean {
    let toReturn = true;
    if (!this.documentsTableDataSource.hasDataSelection) {
      toReturn = false;
    } else {
      this.documentsTableDataSource.dataSelection.forEach((doc: BidtDocumentDTO) => {
        if (!!doc.documentSource) {
          toReturn = false;
        }
      });
    }

    return toReturn;
  }

  public showGoToDocButton(): boolean {
    let toReturn = true;
    if (!this.documentsTableDataSource.hasDataSelection) {
      toReturn = false;
    } else {
      this.documentsTableDataSource.dataSelection.forEach((doc: BidtDocumentDTO) => {
        if (!doc.documentSource) {
          toReturn = false;
        }
      });
    }

    return toReturn;
  }

  public goToDoc(): void {
    this.documentsTableDataSource.dataSelection.forEach((doc: BidtDocumentDTO) => {
      window.open(doc.documentSource);
    });
  }

  private addNewDocument(newDocument: BidtDocumentDTO) {
    this.documentsTableDataSource.addData([this.convertDocumentType(newDocument)]);
  }

  public openDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = this.documentsTableDataSource.dataSelection[0];
      this.isReadOnlyDocumentDialog = true;
      if (!this.currentDocument.documentSource) {
        this.showDocumentDialog = true;
      } else {
        this.showDocumentUrlDialog = true;
      }
    }
  }

  public editDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
      this.isReadOnlyDocumentDialog = false;
      if (!this.currentDocument.documentSource) {
        this.showDocumentDialog = true;
      } else {
        this.showDocumentUrlDialog = true;
      }
    }
  }

  public onUpdateDocument(document: BidtDocumentDTO): void {
    this.documentsTableDataSource.replaceData(
      this.documentsTableDataSource.dataSelection[0],
      this.convertDocumentType(document)
    );
  }

  public onUpdateDocumentUrl(documentUrl: BidtDocumentDTO): void {
    if (this.currentDocumentIndex === -1) {
      this.addNewDocument(documentUrl);
    } else {
      this.onUpdateDocument(documentUrl);
    }
  }

  public deleteDocuments() {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentsTableDataSource.deleteDataSelection();
      }
    });
  }

  public getDocumentsModifications(): ListModificationsDTO<BidtDocumentDTO> {
    return this.documentsTableDataSource.toListModifications();
  }

  private convertDocumentType(obj: BidtDocumentDTO): BidtDocumentDTO {
    return {
      ...obj,
      documentType: this.showDocExtension(obj)
    };
  }

  public showDocExtension(document: BidtDocumentDTO): string {
    return FileUtils.getExtension(document.documentName).toUpperCase();
  }
}
