import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { E5XMappingRowDTO } from '../../../../../../shared/types/api-types/e5x-mapping-row-dto.interface';
import { FileContent } from '../../../../../../shared/types/api-types/file-content.interface';
import { FileUtils } from '../../../../../../shared/utils/file-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { E5xMappingService } from './e5x-mapping.service';

@Component({
  selector: 'aw-e5x-mapping',
  templateUrl: './e5x-mapping.component.html'
})
export class E5xMappingComponent extends DynamicCatalog implements OnInit {
  public e5xTableDataSource: TableDataSource<E5XMappingRowDTO>;
  public fileToExport: FileContent;
  public showImportPopup: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly e5xMappingService: E5xMappingService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.init();
  }

  public init(): void {
    this.e5xTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        { field: 'e5xFieldId', translateKey: this.getTranslateKey('e5xFieldId'), alignment: ColumnAlignment.CENTER },
        { field: 'e5xRefCode', translateKey: this.getTranslateKey('e5xRefCode'), alignment: ColumnAlignment.CENTER },
        { field: 'e5xRefName', translateKey: this.getTranslateKey('e5xRefName'), alignment: ColumnAlignment.CENTER },
        { field: 'awRefCode', translateKey: this.getTranslateKey('awRefCode'), alignment: ColumnAlignment.CENTER },
        { field: 'awRefName', translateKey: this.getTranslateKey('awRefName'), alignment: ColumnAlignment.CENTER },
        { field: 'awRefTable', translateKey: this.getTranslateKey('awRefTable'), alignment: ColumnAlignment.CENTER },
        {
          field: 'defaultFieldBoolean',
          translateKey: this.getTranslateKey('defaultFieldBoolean'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: [],
      enableSelection: false
    });

    this.showImportPopup = false;
  }

  public ngOnInit() {
    this.loadE5xTableData();
  }

  public getComponentName(): string {
    return 'E5xMappingComponent';
  }

  public refresh() {
    this.loadE5xTableData();
  }

  public export() {
    this.e5xMappingService.getExcelFileOnExport().subscribe(
      (result) => {
        this.fileToExport = result;
        if (!!this.fileToExport.fileContent && !!this.fileToExport.fileName) {
          this.downLoadFiles(this.fileToExport.fileContent, this.fileToExport.fileName);
        } else {
          super.throwUnboundLocalError('export', '');
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFile'));
      }
    );
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public import() {
    this.showImportPopup = true;
  }

  public loadE5xTableData(): void {
    this.e5xTableDataSource.setData([]);
    this.e5xMappingService.loadE5xTableData().subscribe(
      (results) => {
        results.forEach((e5x) => {
          e5x.defaultFieldBoolean = e5x.defaultField === '1';
        });
        this.e5xTableDataSource.addData(results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadingE5xTableData'));
      }
    );
  }

  public refreshOnImport(): void {
    this.refresh();
  }
}
