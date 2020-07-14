import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { ImportEmployeeFromExcelHRAndLogisticsInput } from '../../../shared/types/api-input-types/employee-data-exchange/import-employee-from-excel-hr-logistics-input.interface';
import { ImportFromExcelHRAndLogisticsOutputDTO } from '../../../shared/types/api-output-types/hr-data-exchange/import-from-excel-hr-logistic-output.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../shared/utils/file-utils';

import { LogisticDataExchangeService } from './logistic-data-exchange.service';

@Component({
  selector: 'aw-logistic-data-exchange',
  templateUrl: './logistic-data-exchange.component.html'
})
export class LogisticDataExchangeComponent extends PageComponent<PageComponentData> implements OnInit {
  public fileName: string | undefined;
  public file: BidoDocumentationDTO;
  public showImportReportMessage: boolean;
  public importReportMessage: string;
  public showSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticDataExchangeService: LogisticDataExchangeService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.fileName = '';
    this.showImportReportMessage = false;
    this.importReportMessage = '';
    this.showSpinner = false;
  }

  public ngOnInit() {
    super.ngOnInit();
  }

  public getComponentName(): string {
    return 'LogisticDataExchangeComponent';
  }

  // For Doc Import
  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            this.file = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };
            this.fileName = this.file.docName;
          }
        });
      }

      fileUploader.clear();
    }
  }

  public openTemplate(templateName: string): void {
    this.logisticDataExchangeService.getImportMaterial().subscribe((result) => {
      this.downLoadFiles(result, templateName);
    });
    // const partialMessageKey = this.getTranslateKey('openReport');
    // this.confirmationService.confirm({
    //   interpolateParams: { 'openReport.reportName': templateName },
    //   messageKey: partialMessageKey,
    //   accept: () => {
    //     this.logisticDataExchangeService.getImportMaterial().subscribe((result) => {
    //       this.downLoadFiles(result, templateName);
    //     });
    //   }
    // });
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public loadTemplate(): string {
    return 'TEMPLATE_MATERIAL.xls';
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName);
  }

  /**
   * function is called with parameter 1 if simulate button is clicked, else called with 0
   */
  public import(): void {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        accept: () => {
          this.showSpinner = true;
          // Importing Excel file
          if (!!this.fileName && !!this.file.docFile) {
            const excelInput: ImportEmployeeFromExcelHRAndLogisticsInput = {
              fileName: this.fileName,
              excelSource: this.file.docFile
            };

            this.logisticDataExchangeService
              .importMaterialFromExcel(excelInput)
              .subscribe((result: ImportFromExcelHRAndLogisticsOutputDTO) => {
                this.fileName = '';
                this.showImportReportMessage = true;
                this.importReportMessage = result.reportRepresentation;
                this.showSpinner = false;
              });
          }
        }
      });
    }
  }
}
