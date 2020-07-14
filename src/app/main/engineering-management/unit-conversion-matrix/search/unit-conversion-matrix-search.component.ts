import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SaveExcelDataInput } from '../../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SearchBireConversionMatrixInput } from '../../../../shared/types/api-input-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireConversionMatrixDTO } from '../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireReportDTOId } from '../../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../../shared/types/api-types/bire-report-dto.interface';
import { FileContent } from '../../../../shared/types/api-types/file-content.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ItemSearchService } from '../../../engineering-management/item/search/item-search.service';
import { UnitConversionMatrixService } from '../unit-conversion-matrix.service';

@Component({
  selector: 'aw-unit-conversion-matrix-search',
  templateUrl: './unit-conversion-matrix-search.component.html',
  styleUrls: ['./unit-conversion-matrix-search.component.scss']
})
export class UnitConversionMatrixSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly tabUnitConversionMatrixId: string;
  public readonly tabImportId: string;
  public readonly tabArchivedImportReportsId: string;

  public currentTabId: string;

  public templateFile: FileContent;

  public showDialogUnitConversionMatrix: boolean;

  public file: BidoDocumentationDTO | undefined;
  public fileName: string | undefined;

  public familyVariant: LabelValue<string>[];
  public familyVariantValue: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];

  public searchObject: SearchBireConversionMatrixInput;
  public ucmSearchResultsTable: BireConversionMatrixDTO[] | undefined;
  public ucmSearchResultsTableCols: TableColumn[];
  public selectedUcmSearchResults: BireConversionMatrixDTO[];

  public archivedImportReportTable: BireReportDTO[] | undefined;
  public archivedImportReportTableCols: TableColumn[];
  public selectedArchivedImportReports: BireReportDTO[];

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
    private readonly itemSearchService: ItemSearchService,
    private readonly unitConversionMatrixService: UnitConversionMatrixService,
    public confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.tabImportId = 'import';
    this.tabArchivedImportReportsId = 'archImportReport';

    this.showDialogUnitConversionMatrix = false;

    this.currentTabId = this.tabUnitConversionMatrixId;

    this.templateFile = {};

    this.file = undefined;
    this.fileName = undefined;

    this.familyVariant = [];
    this.familyVariantValue = [];

    this.loadFamilyVariant();

    this.resetSearchCriteria();

    this.ucmSearchResultsTable = undefined;
    this.ucmSearchResultsTableCols = [
      { field: 'cmCode', alignment: 'left', width: '20%' },
      { field: 'cmName', alignment: 'left', width: '80%' }
    ];

    this.selectedUcmSearchResults = [];

    this.archivedImportReportTable = undefined;
    this.archivedImportReportTableCols = [
      { field: 'reportCode', alignment: 'center' },
      { field: 'reportName', alignment: 'center' },
      { field: 'statusUser', alignment: 'center' },
      { field: 'statusDate', alignment: 'center' }
    ];

    this.selectedArchivedImportReports = [];

    this.loadArchivedImportReports();

    this.isLoadingImport = false;
    this.isLoading = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'UnitConversionMatrixSearchComponent';
  }

  /**
   * This function loads the family variants for search criteria
   */
  public loadFamilyVariant(): void {
    this.itemSearchService.findBireVariantVersionsByFamilyFunctionItemAlternative().subscribe((results) => {
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
      this.familyVariant = list || [];
      this.familyVariantValue = results;
    });
  }

  /**
   * This function search unit conversion matrix and populate the results in a table.
   */
  public searchUnitConversionMatrix(): void {
    this.selectedUcmSearchResults = [];
    this.unitConversionMatrixService.searchUnitMatrixConversion(this.searchObject).subscribe((result) => {
      this.ucmSearchResultsTable = result;
    });
  }

  /**
   * This function opens the selected UCM
   */
  public openSelectedUCM(): void {
    this.selectedUcmSearchResults.forEach((ucmRecord) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'UnitConversionMatrixFormComponent',
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({ cmId: ucmRecord.cmId })
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  /**
   * This funtion deletes the UCM
   */

  public deleteUCM(): void {
    const partialMessageKey =
      this.selectedUcmSearchResults.length > 1 ? 'confirmDeleteSelectedRows' : 'confirmDeleteSelectedRow';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const ids: number[] = [];
        this.selectedUcmSearchResults.forEach((ucmRecord) => {
          ids.push(!!ucmRecord && !!ucmRecord.cmId ? ucmRecord.cmId : 0);
        });

        this.unitConversionMatrixService.deleteUnitConversionMatrix(ids).subscribe(() => {
          if (!!this.ucmSearchResultsTable) {
            const messageKey = this.selectedUcmSearchResults.length > 1 ? 'successOnDeleteRows' : 'successOnDeleteRow';
            this.messageService.showSuccessMessage(this.getTranslateKey(messageKey));
            this.ucmSearchResultsTable = this.ucmSearchResultsTable.filter((ucmRow) => {
              return !this.selectedUcmSearchResults.includes(ucmRow);
            });
            this.selectedUcmSearchResults = [];
          }
        });
      }
    });
  }

  /**
   * This function resets the search criteria
   */
  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  /**
   * Create Unit Conversion Matrix
   */
  public createUnitConversionMatrix(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAI_UNIT_CONVERSION_MATRIX_FORM,
      openMode: ComponentOpenMode.Create,
      objectId: undefined
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
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

  /***********
   * Open tabs
   ***********/

  public openImportTab(): void {
    this.currentTabId = this.tabImportId;
  }

  public openArchImportReportTab(): void {
    this.currentTabId = this.tabArchivedImportReportsId;
  }

  public reloadMatrix() {
    this.searchUnitConversionMatrix();
    this.loadArchivedImportReports();
  }
}
