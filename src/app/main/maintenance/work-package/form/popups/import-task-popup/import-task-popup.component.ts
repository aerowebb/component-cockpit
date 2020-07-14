import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { ImportWorkTaskFromExcelInput } from '../../../../../../shared/types/api-input-types/work-order/import-work-task-from-excel-input.interface';
import { BidmProjectDTO } from '../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoDocumentationDTO } from '../../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../../shared/utils/file-utils';

import { ImportTaskPopupService } from './import-task-popup.service';

@Component({
  selector: 'aw-import-task-popup',
  styleUrls: ['./import-task-popup.component.scss'],
  templateUrl: './import-task-popup.component.html'
})
export class ImportTaskPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public bidmProjectDTO: BidmProjectDTO;

  @Input()
  public bidoEquipmentDTO: BidoEquipmentDTO;

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  public refresh: EventEmitter<string>;

  public readonly componentId: string;

  public displayValue: boolean;

  public fileName: string;
  public file: BidoDocumentationDTO;

  public templateName: string;

  public reportMessage: string;
  public placeHolder: string;
  public isUpload: boolean;

  public constructor(
    private readonly _confirmationService: ConfirmationService,
    private readonly importTaskPopupService: ImportTaskPopupService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'ImportTaskPopupComponent');

    this.refresh = new EventEmitter<string>();
    this.templateName = 'TEMPLATE_WORK_TASK_FILE.xls';
  }

  public ngOnInit() {
    this.isUpload = false;
    this.fileName = this.translateService.instant(this.getTranslateKey('noFile', this.getComponentName()));
  }

  public openTemplate() {
    this.importTaskPopupService.downloadTemplate().subscribe((result) => {
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

      this.isUpload = true;
      fileUploader.clear();
    }
  }

  public import(): void {
    this.confirmDeleteWorkOrder();
  }

  public close(): void {
    this.display = false;
    this.refresh.emit(this.reportMessage);
  }

  public confirmDeleteWorkOrder(): void {
    if (this.openMode === ComponentOpenMode.Write || this.openMode === ComponentOpenMode.Create) {
      this._confirmationService.confirm({
        messageKey: 'confirmationMessage.reomoveWorkOrders',
        accept: () => {
          if (this.file.docFile) {
            const importWorkTaskFromExcelInput: ImportWorkTaskFromExcelInput = {
              fileName: this.templateName,
              excelSource: this.file.docFile,
              bidmProjectDTO: this.bidmProjectDTO,
              bidoEquipmentDTO: this.bidoEquipmentDTO,
              deletion: true
            };

            this.importTaskPopupService
              .ImportWorkTaskFromExcel(importWorkTaskFromExcelInput)
              .subscribe((reportData) => {
                this.reportMessage = reportData;
                this.close();
              });
          }
        },
        reject: () => {
          if (this.file.docFile) {
            const importWorkTaskFromExcelInput: ImportWorkTaskFromExcelInput = {
              fileName: this.templateName,
              excelSource: this.file.docFile,
              bidmProjectDTO: this.bidmProjectDTO,
              bidoEquipmentDTO: this.bidoEquipmentDTO,
              deletion: false
            };

            this.importTaskPopupService
              .ImportWorkTaskFromExcel(importWorkTaskFromExcelInput)
              .subscribe((reportData) => {
                this.reportMessage = reportData;
                this.close();
              });
          }
        }
      });
    } else {
      this.close();
    }
  }
}
