import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload, SelectItem } from 'primeng/primeng';

import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SessionService } from '../../../../shared/services/session.service';
import { IWBFindingsCustom } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/iwb-findings-custom.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { ColumnAlignment, TableDataSource } from '../../table/table-data-source';
import { AddEditInventoryService } from '../add-edit-inventory.service';

interface DocumentRow {
  docExtension: string;
  docName: string;
  docPublicationDate: string;
  docSize: string;
  docDescription?: string;
  docFile?: Uint8Array;
  _obj: BireDocumentDTO;
}

interface FindingsInterface extends IWBFindingsCustom {
  damageDescription?: string;
  location?: string;
  bireDocumentDTOList?: BireDocumentDTO[];
  additionalData?: unknown;
}

@Component({
  selector: 'aw-dialog-findings',
  templateUrl: './dialog-findings.component.html'
})
export class DialogFindingsComponent extends DialogComponent implements OnInit {
  @Input() public finding: FindingsInterface;
  @Input()
  public openMode: ComponentOpenMode;

  @Output() public onAddFindings: EventEmitter<FindingsInterface>;

  public damagesList: LabelValue<string>[];
  public locationList: LabelValue<string>[];
  public criticalityList: LabelValue<string>[];
  public quantity: number = 1;
  public selectedDamage: string | undefined;
  public selectedLocation: string | undefined;
  public selectedCriticity: string | undefined;
  public comment: string | undefined;

  public documentTableDataSource: TableDataSource<DocumentRow>;
  private documentsAdded: BireDocumentDTO[];
  private documentsRemoved: BireDocumentDTO[];
  private documentsUpdated: BireDocumentDTO[];
  public currentDocument: BireDocumentDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;
  private documents: BireDocumentDTO[];
  public currentDocumentIndex: number;
  public documentTypes: SelectItem[];

  public constructor(
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService,
    private readonly translateService: TranslateService,
    public readonly addEditInventoryService: AddEditInventoryService
  ) {
    super(ComponentOpenMode.Write, 'DialogFindingsComponent');
    this.onAddFindings = new EventEmitter();
  }

  // ****************************************************************************

  public ngOnInit(): void {
    this.documents = [];
    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.damagesList = [];
    this.locationList = [];

    this.initDocumentTableDataSource();
    this.loadDocumentTypes();

    this.updateOpenMode(this.openMode);

    if (!!this.addEditInventoryService.damagesList) {
      this.addEditInventoryService.damagesList.forEach((res) => {
        const label = !!res.damageDescription ? `${res.damageCode} - ${res.damageDescription}` : `${res.damageCode}`;
        this.damagesList.push({
          label,
          value: res.damageCode as string
        });
      });
    }

    if (!!this.addEditInventoryService.localisationList) {
      this.addEditInventoryService.localisationList.forEach((res) => {
        this.locationList.push({
          label: res.localisationDescription || (res.localisationCode as string),
          value: res.localisationCode as string
        });
      });
    }

    this.criticalityList = [
      {
        label: `${this.translateService.instant(this.getTranslateKey('acceptable'))}`,
        value: `${this.translateService.instant(this.getTranslateKey('acceptable'))}`
      },
      {
        label: `${this.translateService.instant(this.getTranslateKey('repairable'))}`,
        value: `${this.translateService.instant(this.getTranslateKey('repairable'))}`
      },
      {
        label: `${this.translateService.instant(this.getTranslateKey('scrap'))}`,
        value: `${this.translateService.instant(this.getTranslateKey('scrap'))}`
      }
    ];

    if (!this.finding) {
      this.finding = {
        quantity: '1'
      };
    } else {
      if (!!this.finding.bireDocumentDTOList && this.finding.bireDocumentDTOList.length > 0) {
        this.finding.bireDocumentDTOList.forEach((document) => {
          this.documentTableDataSource.addData([this.createDocumentRow(document)]);
        });
      }
    }
  }

  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('name'),
          alignment: ColumnAlignment.LEFT,
          width: '60%'
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('date'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('description'),
          alignment: ColumnAlignment.LEFT,
          width: '20%'
        }
      ],
      data: []
    });
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

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
    });
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
            const document: BireDocumentDTO = {
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

      if (!!fileUploader) {
        fileUploader.clear();
      }
    }
  }

  private createDocumentRow(document: BireDocumentDTO): DocumentRow {
    const documentRow: DocumentRow = {
      docExtension: this.formatDocExtension(document),
      docName: document.docName as string,
      docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
      docSize: this.formatDocSize(document),
      docDescription: document.docDescription,
      docFile: document.docFile,
      _obj: document
    };

    return documentRow;
  }

  private formatDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  private formatDocSize(document: BireDocumentDTO): string {
    return !!document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  private areSameDocument(obj1: BireDocumentDTO | undefined, obj2: BireDocumentDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
    }
  }

  /**************************************************************************
   * Document Dialog
   *************************************************************************/

  public onAddDocument(document: BireDocumentDTO): void {
    if (!!document) {
      if (this.currentDocumentIndex !== -1) {
        this.documents[this.currentDocumentIndex] = document;
        this.documentTableDataSource[this.currentDocumentIndex] = this.createDocumentRow(document);

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
          this.documentTableDataSource.addData([this.createDocumentRow(document)]);
        }
      }
    }

    this.documentTableDataSource.dataSelection = [];
  }

  public validate() {
    if (!this.finding.damageCode && !this.finding.findingComment) {
      this.messageService.showErrorMessage(this.getTranslateKey('commentMandatory'));
    } else {
      this.finding.bireDocumentDTOList = this.documentTableDataSource.data as BireDocumentDTO[];
      this.onAddFindings.emit(this.finding);
      this.closeDialog();
    }
  }

  public onChangeDamage() {
    const dto = this.damagesList.filter((res) => res.value === this.finding.damageCode);

    this.finding.damageDescription = !!dto && dto.length > 0 ? dto[0].label : undefined;
  }
}
