import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/components/fileupload/fileupload';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { ImportWorkflowFromExcelDTO } from '../../../../../shared/types/api-input-types/administration-workflow-management/import-workflow-from-excel-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { WorkflowManagementFormService } from '../workflow-management-form.service';

@Component({
  selector: 'aw-dialog-import-scenario',
  templateUrl: './dialog-import-scenario.component.html'
})
export class DialogImportScenarioComponent extends DialogComponent implements OnInit {
  @Output()
  public onValidate: EventEmitter<string>;

  // Fields
  public file: ImportWorkflowFromExcelDTO;
  public fileName: string | undefined;

  // Report Report Dialog
  public showImportMsgDialog: boolean;
  public importMessage: string;

  // Loader
  public showImportSpinner: boolean;

  public constructor(
    private readonly workflowManagementFormService: WorkflowManagementFormService,
    public messageService: MessageService
  ) {
    super(ComponentOpenMode.Read, 'DialogImportScenarioComponent');
    this.file = {};
    this.onValidate = new EventEmitter<string>();
  }

  public ngOnInit() {
    // TODO
  }

  /*************************************************************************
   * UPLOAD FILE
   *************************************************************************/
  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            this.file = {
              excelSource: fileContent,
              fileName: file.name,
              deletion: this.file.deletion
            };

            this.fileName = this.file.fileName;
          }
        });
      }

      fileUploader.clear();
    }
  }

  /*************************************************************************
   * IMPORT FILE
   *************************************************************************/
  public importFile() {
    this.showImportSpinner = true;
    this.workflowManagementFormService.importWorkflowFromExcel(this.file).subscribe(
      (resp: string) => {
        this.importMessage = resp;
        this.showImportMsgDialog = true;
        this.showImportSpinner = false;
        this.onValidate.emit();
      },
      (error) => {
        this.messageService.showErrorMessage('global.internalServerError');
        this.showImportSpinner = false;
      }
    );
  }

  public onCloseMsgDialog() {
    this.closeDialog();
  }
}
