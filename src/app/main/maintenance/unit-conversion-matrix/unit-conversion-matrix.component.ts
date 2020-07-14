import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { FileContent } from '../../../shared/types/api-types/file-content.interface';
import { UnitConversionMatrixRowDTO } from '../../../shared/types/api-types/unit-conversion-matrix-row-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';

import { UnitConversionMatrixService } from './unit-conversion-matrix.service';

@Component({
  selector: 'aw-unit-conversion-matrix',
  templateUrl: './unit-conversion-matrix.component.html',
  styleUrls: ['./unit-conversion-matrix.component.scss']
})
export class UnitConversionMatrixComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly tabUnitConversionMatrixId: string;
  public readonly tabImportId: string;
  public readonly tabArchivedImportReportsId: string;

  public currentTabId: string;

  public templateFile: FileContent;

  public ucmTable: UnitConversionMatrixRowDTO[] | undefined;
  public ucmTableCols: TableColumn[];
  public selectedUcmRows: UnitConversionMatrixRowDTO[];
  public currentUcm: UnitConversionMatrixRowDTO | undefined;
  public currentUcmIndex: number;

  public isNewUcm: boolean;
  public showDialogUnitConversionMatrix: boolean;

  public file: BidoDocumentationDTO | undefined;
  public fileName: string | undefined;

  public archivedImportReportTable: BireReportDTO[] | undefined;
  public archivedImportReportTableCols: TableColumn[];
  public selectedArchivedImportReports: BireReportDTO[];

  private unitConversionMatrixRowAddedList: UnitConversionMatrixRowDTO[];

  public importReportMessage: string;
  public showImportReportMessage: boolean;

  public isLoading: boolean;
  public isLoadingImport: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    public unitConversionMatrixService: UnitConversionMatrixService,
    public confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.tabUnitConversionMatrixId = 'ucm';
    this.tabImportId = 'import';
    this.tabArchivedImportReportsId = 'archImportReport';
    this.currentUcm = undefined;

    this.showDialogUnitConversionMatrix = false;

    this.currentTabId = this.tabUnitConversionMatrixId;

    this.templateFile = {};

    this.ucmTable = undefined;
    this.ucmTableCols = [{ field: 'unit', alignment: 'center' }, { field: 'fhEquivalent', alignment: 'center' }];
    this.selectedUcmRows = [];

    this.file = undefined;
    this.fileName = undefined;

    this.archivedImportReportTable = undefined;
    this.archivedImportReportTableCols = [
      { field: 'reportCode', alignment: 'center' },
      { field: 'reportName', alignment: 'center' },
      { field: 'statusUser', alignment: 'center' },
      { field: 'statusDate', alignment: 'center' }
    ];
    this.selectedArchivedImportReports = [];
    this.unitConversionMatrixRowAddedList = [];

    this.loadUnitConversionMatrixTable();

    this.loadArchivedImportReports();

    this.isLoadingImport = false;
    this.isLoading = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'UnitConversionMatrixComponent';
  }

  // Downloads excel template
  public openTemplate(): void {
    this.unitConversionMatrixService.getExcelTemplate().subscribe(
      (result) => {
        this.templateFile = result;
        if (!!this.templateFile.fileContent && !!this.templateFile.fileName) {
          this.downLoadFiles(this.templateFile.fileContent, this.templateFile.fileName);
        } else {
          super.throwUnboundLocalError('openTemplate', 'this.template');
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTemplate'));
      }
    );
  }

  private loadUnitConversionMatrixTable(): void {
    this.isLoading = true;
    this.unitConversionMatrixService.getUnitConversionMatrixRows().subscribe(
      (results) => {
        this.ucmTable = results || [];
        this.isLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetUcmRows'));
        this.isLoading = false;
      }
    );
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

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

  public import(): void {
    if (!!this.file) {
      const input: SaveExcelDataInput = {
        fileName: this.fileName,
        excelSource: this.file.docFile
      };

      this.unitConversionMatrixService.importUnitConversionMatrixFromExcel(input).subscribe((result) => {
        this.fileName = '';
        this.file = undefined;
        this.importReportMessage = result;
        this.showImportReportMessage = true;
        this.loadUnitConversionMatrixTable();
        this.loadArchivedImportReports();
      });
    }
  }

  public loadArchivedImportReports(): void {
    this.isLoadingImport = true;
    this.unitConversionMatrixService.loadArchivedImportReports().subscribe(
      (results) => {
        this.archivedImportReportTable = results || [];
        this.isLoadingImport = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetArchivedImportReports'));
        this.isLoadingImport = false;
      }
    );
  }

  public deleteArchivedImportReports(): void {
    if (this.selectedArchivedImportReports !== []) {
      const partialMessageKey =
        this.selectedArchivedImportReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();

      this.selectedArchivedImportReports.forEach((report) => {
        if (report && report.reportId) {
          const reportId: BireReportDTOId = {
            reportId: report.reportId
          };
          reports.push(reportId);
        }
      });

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.unitConversionMatrixService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);

              this.selectedArchivedImportReports = [];
              this.loadArchivedImportReports();
            },
            () => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('errorOnDeleteReports')
                  : this.getTranslateKey('errorOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);
            }
          );
        }
      });
    }
  }

  public openReportDetail(object: BireReportDTO): void {
    const partialMessageKey = this.getTranslateKey('openReport');
    this.confirmationService.confirm({
      interpolateParams: { 'openReport.reportName': object.reportName },
      contextKeys: [this.getTranslateKey('openReport.line1')],
      messageKey: partialMessageKey,
      accept: () => {
        if (!!object.reportId) {
          const bireReportDTOId: BireReportDTOId = {
            reportId: object.reportId
          };
          this.unitConversionMatrixService.openImportReportContent(bireReportDTOId).subscribe((result) => {
            if (!!object.reportName) {
              this.downLoadFiles(result, object.reportName);
            } else {
              super.throwUnboundLocalError('openReportDetail', 'object.reportName');
            }
          });
        } else {
          super.throwUnboundLocalError('openReportDetail', 'object.reportId');
        }
      }
    });
  }

  public save(): void {
    this.unitConversionMatrixService.saveBidoPreferenceUser(this.unitConversionMatrixRowAddedList).subscribe(() => {
      this.unitConversionMatrixRowAddedList = [];
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveUnitConversionMatrix'));
    });
  }

  /***********
   * Open tabs
   ***********/

  public openUCMTab(): void {
    this.currentTabId = this.tabUnitConversionMatrixId;
  }

  public openImportTab(): void {
    this.currentTabId = this.tabImportId;
  }

  public openArchImportReportTab(): void {
    this.currentTabId = this.tabArchivedImportReportsId;
  }

  /************************************
   * Unit Conversion Matrix Tab Actions
   ************************************/

  public createUcmRecord(): void {
    this.currentUcm = undefined;
    this.isNewUcm = true;
    this.showDialogUnitConversionMatrix = true;
  }

  public editUcmRecord(): void {
    if (!!this.ucmTable && this.selectedUcmRows.length === 1) {
      this.currentUcm = { ...this.selectedUcmRows[0] };
      this.isNewUcm = false;
      this.currentUcmIndex = this.ucmTable.indexOf(this.selectedUcmRows[0]);
      this.showDialogUnitConversionMatrix = true;
    }
  }

  public deleteUcmRecord(): void {
    const partialMessageKey =
      this.selectedUcmRows.length > 1 ? 'confirmDeleteSelectedRows' : 'confirmDeleteSelectedRow';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const idArr: number[] = [];
        this.selectedUcmRows.forEach((res) => {
          if (!!res.preferenceUserId) {
            idArr.push(res.preferenceUserId);
          }
        });
        this.unitConversionMatrixService.removeBidoPreferenceUser(idArr).subscribe(() => {
          if (!!this.ucmTable) {
            const messageKey = this.selectedUcmRows.length > 1 ? 'successOnDeleteRows' : 'successOnDeleteRow';
            this.messageService.showSuccessMessage(this.getTranslateKey(messageKey));
            this.ucmTable = this.ucmTable.filter((ucmRow) => {
              return !this.selectedUcmRows.includes(ucmRow);
            });
            this.selectedUcmRows = [];
          }
        });
      }
    });
  }

  public addNewUcm(ucm: UnitConversionMatrixRowDTO): void {
    if (!!ucm && !!this.ucmTable) {
      this.unitConversionMatrixRowAddedList.push(ucm);
      this.ucmTable = [...this.ucmTable, ucm];
    }
  }

  public updateUcm(ucm: UnitConversionMatrixRowDTO): void {
    if (!!ucm && !!this.ucmTable) {
      const foundIndex = this.unitConversionMatrixRowAddedList.findIndex(
        (value) => value.preferenceUserId === ucm.preferenceUserId
      );

      if (foundIndex !== -1) {
        this.unitConversionMatrixRowAddedList[foundIndex] = ucm;
      } else {
        this.unitConversionMatrixRowAddedList.push(ucm);
      }

      this.ucmTable[this.currentUcmIndex] = ucm;
      this.selectedUcmRows = [];
    }
  }

  public reloadMatrix() {
    this.selectedArchivedImportReports = [];
    this.unitConversionMatrixRowAddedList = [];

    this.loadUnitConversionMatrixTable();
    this.loadArchivedImportReports();
  }
}
