import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FileContent } from '../../../../shared/types/api-types/file-content.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ComponentCockpitMatrixService } from '../component-cockpit-matrix.service';

@Component({
  selector: 'aw-import-excel-popup',
  templateUrl: './import-excel-popup.component.html'
})
export class ImportReportExcelComponent extends DialogComponent implements OnInit {
  @Output() public onUpload: EventEmitter<boolean>;

  public templateName: string;
  public fileName: string;
  public templateFile: FileContent;

  public constructor(public componentCockpitMatrixService: ComponentCockpitMatrixService) {
    super(ComponentOpenMode.Write, 'ImportReportExcelComponent');
    this.onUpload = new EventEmitter<boolean>();
    this.templateName = 'Template_Component_Cockpit_Matrix_File.xls';
    this.fileName = '';
  }

  public ngOnInit() {
    return;
  }

  public close(): void {
    this.display = false;
  }

  public downloadTemplate() {
    this.componentCockpitMatrixService.getImportTaskBsdeXLS().subscribe((result) => {
      if (result && result.length > 0) {
        FileUtils.downloadFile(result, this.templateName);
      }
    });
  }

  public import() {
    this.onUpload.emit(true);
    this.display = false;
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];
      this.fileName = file.name;
    }

    fileUploader.clear();
  }
}
