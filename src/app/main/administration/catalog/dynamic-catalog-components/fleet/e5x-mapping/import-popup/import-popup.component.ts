import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { BidoDocumentationDTO } from '../../../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { FileContent } from '../../../../../../../shared/types/api-types/file-content.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../../../shared/utils/file-utils';
import { E5xMappingService } from '../e5x-mapping.service';

@Component({
  selector: 'aw-import-popup',
  templateUrl: './import-popup.component.html'
})
export class ImportPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  // tslint:disable-next-line:no-any
  public refresh: EventEmitter<any>;

  public readonly componentId: string;

  public displayValue: boolean;

  public fileName: string;
  public file: BidoDocumentationDTO;

  public templateName: string;

  public constructor(
    private readonly e5xMappingService: E5xMappingService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ImportPopupComponent');

    this.refresh = new EventEmitter<string>();
    this.templateName = 'Template_E5X_MAPPING.xls';
  }

  public ngOnInit() {
    // todo
  }

  public openTemplate() {
    this.e5xMappingService.downloadTemplate().subscribe((result) => {
      this.downLoadFiles(result, this.templateName);
    });
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          this.file = {
            docFile: fileContent,
            docName: file.name,
            docPublicationDate: new Date()
          };
          if (!!this.file.docName) {
            this.fileName = this.file.docName;
          }
        });
      }

      fileUploader.clear();
    }
  }

  public import(): void {
    const importInput: FileContent = {
      fileName: this.templateName,
      fileContent: this.file.docFile
    };

    this.e5xMappingService.importFile(importInput).subscribe(
      (result) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnImport'));
        this.close();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
      }
    );
  }

  public close(): void {
    this.display = false;
    this.refresh.emit();
  }
}
