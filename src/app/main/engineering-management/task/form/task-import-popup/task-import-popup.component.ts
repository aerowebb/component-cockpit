import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireDocumentDTO } from '../../../../../shared/types/api-types/bire-document-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { FileUtils } from '../../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-task-import-popup',
  templateUrl: './task-import-popup.component.html'
})
export class TaskImportPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }
  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output() public displayChange: EventEmitter<boolean>;
  @Input() public document: BireDocumentDTO;
  @Input() public isReadOnlyForm: boolean;
  @Output() public onValidated: EventEmitter<BireDocumentDTO>;

  public readonly componentId: string;
  public displayValue: boolean;
  public categories: LabelValue<string>[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireDocumentDTO>();

    this.loadCategories();
  }

  public ngOnInit(): void {
    if (!this.document) {
      this.document = {};
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidated.emit(this.document);
    this.display = false;
  }

  private loadCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_TASK_CATEGORY_MAP).subscribe(
      (results) => {
        this.categories = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.componentId + '.errorOnGetDocumentTaskCategories');
      }
    );
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      FileUtils.getFileContentAsBase64(file, (fileContent) => {
        if (fileContent) {
          this.document.docFile = fileContent;
          this.document.docName = file.name;
          this.document.docPublicationDate = new Date();
          this.document.docType = FileUtils.getExtension(file.name).toUpperCase();
        }
      });

      fileUploader.clear();
    }
  }
}
