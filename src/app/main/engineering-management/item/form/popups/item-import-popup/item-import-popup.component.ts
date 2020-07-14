import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BireDocumentDTO } from '../../../../../../shared/types/api-types/bire-document-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../../shared/utils/file-utils';

@Component({
  selector: 'aw-item-import-popup',
  templateUrl: './item-import-popup.component.html'
})
export class ItemImportPopupComponent extends DialogComponent implements OnInit {
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
  @Input() public types: SelectItem[];

  public readonly componentId: string;
  public displayValue: boolean;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'SbadFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BireDocumentDTO>();
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