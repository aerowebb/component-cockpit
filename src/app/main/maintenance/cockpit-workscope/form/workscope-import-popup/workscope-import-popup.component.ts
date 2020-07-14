import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { BidoDocumentationDTO } from '../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { CockpitWorkscopeFormService } from '../cockpit-workscope-form.service';

@Component({
  selector: 'aw-workscope-import-popup',
  styleUrls: ['../shared/shared.scss'],
  templateUrl: './workscope-import-popup.component.html'
})
export class WorkscopeImportPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  public refresh: EventEmitter<string>;

  public readonly componentId: string;

  public displayValue: boolean;

  public fileName: string;
  public file: BidoDocumentationDTO;

  public templateName: string;

  public constructor(
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService,
    private readonly cockpitWorkscopeFormService: CockpitWorkscopeFormService
  ) {
    super(ComponentOpenMode.Write, 'WorkscopeImportPopupComponent');

    this.refresh = new EventEmitter<string>();
    this.templateName = this.translateService.instant(this.getTranslateKey('templateFile'));
  }

  public ngOnInit() {
    // todo
  }

  public openTemplate() {
    this.cockpitWorkscopeFormService.downloadTemplate().subscribe((result) => {
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
    // TODO : Add import functionality
    this.messageService.showSuccessMessage(this.getTranslateKey('succesMessage'));
    this.close();
  }

  public close(): void {
    this.display = false;
    this.refresh.emit();
  }
}
