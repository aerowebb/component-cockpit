import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/primeng';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/engineering-data-exchange/find-data-list-by-search-criteria-input.interface';
import { ExportFleetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-fleet-data-input.interface';
import { FindAssetListConfigurationEventDTO } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-configuration-event-dto.interface';
import { GetRefreshedArchivedReportDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/get-refreshed-archived-report-data-input.interface';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SaveXmlDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-xml-data-input.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { ListUtils } from '../../../shared/utils/list-utils';

import { FlightDataExchangeService } from './flight-data-exchange.service';

enum FileExtensions {
  txt = 'txt',
  xls = 'xls',
  xlsx = 'xlsx',
  xml = 'xml',
  zip = 'zip'
}
@Component({
  selector: 'aw-flight-data-exchange',
  templateUrl: './flight-data-exchange.component.html'
})
export class FlightDataExchangeComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly loading: string = 'Loading';
  public static readonly excel: string = 'Excel';
  public static readonly xml: string = 'Xml';
  public static readonly export: string = 'Export';
  public static readonly flights: string = 'Flights';
  public static readonly dateFormat: string = 'dd-MM-yyyy_HH';
  public static readonly monthFormat: string = 'mm';
  public readonly component: typeof FlightDataExchangeComponent;

  public exportDataFrom: Date | undefined;

  public file: BidoDocumentationDTO;
  public fileName: string | undefined;
  public type: string;
  public format: string | undefined;

  // Dropdown
  public propertyDataList: LabelValue<string>[];
  public propertyFormatList: LabelValue<string>[];
  public propertyTypeList: LabelValue<string>[];
  public propertyFamilyList: LabelValue<string>[];
  public propertyVariantList: LabelValue<string>[];

  public showImportComponents: boolean;
  public showExportComponents: boolean;

  public importReportMessage: string;
  public showImportReportMessage: boolean;

  // Import Table Parmas
  public reportTableCols: TableColumn[];
  public reports: BireReportDTO[];
  public selectedReports: BireReportDTO[];

  public isReportLoading: boolean;
  public showSpinner: boolean;

  public assetSelectionTableCols: TableColumn[];
  public exportReportTableCols: TableColumn[];

  public superiorTable: FindAssetListConfigurationEventDTO[];
  public selectedAssetTask: FindAssetListConfigurationEventDTO[];

  public selectedExportReports: BireReportDTO[];

  public showAssetsSelectionDialog: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    public translateService: TranslateService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly flightDataExchangeService: FlightDataExchangeService,
    public sessionService: SessionService,
    private readonly datepipe: DatePipe,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.component = FlightDataExchangeComponent;

    this.showExportComponents = false;
    this.showImportComponents = false;
    this.isReportLoading = false;
    this.exportDataFrom = undefined;

    this.propertyDataList = [];
    this.propertyTypeList = [];
    this.propertyFormatList = [
      { label: this.getTranslation('excel'), value: this.component.excel },
      { label: this.getTranslation('xml'), value: this.component.xml }
    ];
    this.reports = [];
    this.selectedReports = [];

    this.initImportTableCols();
    this.setExportTableCols();
    this.type = this.component.loading;
    this.format = this.component.excel;
    this.selectedAssetTask = [];
    this.selectedExportReports = [];

    this.superiorTable = [];

    this.importReportMessage = '';
    this.showImportReportMessage = false;

    this.showAssetsSelectionDialog = false;

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  public getComponentName(): string {
    return 'FlightDataExchangeComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownLists();
    this.loadReportList();
  }

  // Change event of Type and format
  public onTypeChange(event: LabelValue<string>): void {
    this.format = undefined;
    this.propertyFormatList = [];
    if (event.value === this.component.loading) {
      this.format = this.component.excel;
      this.propertyFormatList = [
        { label: this.getTranslation('excel'), value: this.component.excel },
        { label: this.getTranslation('xml'), value: this.component.xml }
      ];
    } else if (event.value === this.component.export) {
      this.showAssetsSelectionDialog = false;
      this.propertyFormatList = [{ label: this.getTranslation('xml'), value: this.component.xml }];
      this.format = this.component.xml;
      this.onDataChangeInit();
    }

    this.selectImportOrExportComponents();
    this.resetScreen();
    this.loadReportList();
  }

  private onDataChangeInit(): void {
    this.resetScreen();
    this.initImportTableCols();
    this.loadReportList();
  }

  public onFormatChange(): void {
    if (this.format === null) {
      this.propertyDataList = [];
    }

    this.selectImportOrExportComponents();

    if (!!this.format) {
      if (this.format === this.component.excel) {
        this.format = this.component.excel;
      } else if (this.format === this.component.xml) {
        this.format = this.component.xml;
      }
    }
    this.loadReportList();
  }

  public selectImportOrExportComponents(): void {
    if (this.validSearchCombination()) {
      if (this.type === this.component.loading) {
        this.showImportComponents = true;
        this.showExportComponents = false;
      } else if (this.type === this.component.export) {
        this.showExportComponents = true;
        this.showImportComponents = false;
      } else {
        this.showImportComponents = false;
        this.showExportComponents = false;
      }
    }
  }

  public validSearchCombination(): boolean {
    if (!!this.type && !!this.format) {
      return true;
    } else {
      return false;
    }
  }

  public openTemplate(templateName: string): void {
    if (!!this.type && !!this.format) {
      const getTemplateInput: FindDataListBySearchCriteriaInput = {
        type: this.type,
        format: this.format,
        data: this.component.flights
      };

      this.flightDataExchangeService.getTemplate(getTemplateInput).subscribe((result) => {
        this.downLoadFiles(result, templateName);
      });
    } else {
      super.throwUnboundLocalError('openTemplate', 'this.type && this.format');
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public loadTemplate(): string {
    let templateName = '';
    if (this.format === this.component.excel) {
      templateName = 'Template_FLIGHTS_IMPORT.xls';
    } else if (this.format === this.component.xml) {
      templateName = 'Template_FLIGHTS_IMPORT.xsd';
    }

    return templateName;
  }

  public enableImport(): boolean {
    if (!!this.format) {
      return false;
    } else {
      return true;
    }
  }

  // For Doc Import
  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    // if (!!event.files) {
    const file: File = event.files[0];
    {
      // if (!!this.file && !!this.file.docName) {
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
    // }
  }

  // function is called with parameter 1 if simulate button is clicked, else called with 0
  public import(simulate: boolean): void {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        delayCallback: true,
        accept: () => {
          // Importing Excel file
          this.showSpinner = true;
          const isExcel =
            this.showDocExtension(this.file) === FileExtensions.xlsx ||
            this.showDocExtension(this.file) === FileExtensions.xls;
          if (this.format === this.component.excel && isExcel) {
            const excelInput: SaveExcelDataInput = {
              fileName: this.fileName,
              excelSource: this.file.docFile,
              removingChoice: false,
              familyCodeSelected: undefined,
              variantCodeSelected: undefined,
              isSimulated: simulate,
              data: this.component.flights
            };

            this.flightDataExchangeService.saveExcelFleetDataExchange(excelInput).subscribe(
              (result) => {
                this.fileName = '';
                const importReport = `${result}\n${this.getTranslation('importReportError')}`;
                this.importReportMessage = importReport;
                this.showImportReportMessage = true;
                this.loadReportList();
                this.showSpinner = false;
              },
              () => {
                if (simulate) {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnSimulate'));
                  this.showSpinner = false;
                } else {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
                  this.showSpinner = false;
                }
              }
            );
          } else if (this.format === this.component.excel && !isExcel) {
            this.fileName = '';
            this.messageService.showErrorMessage(this.getTranslateKey('notExcel'));
            this.showSpinner = false;
          }

          // Import Xml File
          if (this.format === this.component.xml) {
            if (!!this.file && !!this.fileName && !!this.file.docFile) {
              const xmlInput: SaveXmlDataInput = {
                fileName: this.fileName,
                xmlSource: this.file.docFile,
                simulated: simulate,
                data: this.component.flights
              };

              if (this.showDocExtension(this.file) === this.component.xml.toLowerCase()) {
                this.importXmlData(xmlInput);
              } else {
                this.messageService.showErrorMessage(this.getTranslateKey('notXml'));
                this.showSpinner = false;
              }
            } else {
              super.throwUnboundLocalError('import', 'this.fileName && this.file && this.data && this.file.docFile');
              this.showSpinner = false;
            }
          }
        }
      });
    }
  }

  public importXmlData(xmlInput: SaveXmlDataInput): void {
    this.flightDataExchangeService.saveXmlFleetDataExchange(xmlInput).subscribe(
      (result) => {
        this.fileName = '';
        this.importReportMessage = result;
        this.showImportReportMessage = true;
        this.loadReportList();
        this.showSpinner = false;
        this.showSpinner = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
      }
    );
  }

  public export(): void {
    this.showSpinner = true;

    const xmlInput: ExportFleetDataInput = {
      equipmentCode: [],
      date: new Date(),
      lockAsset: false
    };

    this.superiorTable.forEach((row) => {
      xmlInput.equipmentCode.push(row.equipmentCode);
    });

    if (this.type === this.component.export) {
      if (this.format === this.component.xml) {
        if (this.superiorTable.length !== 0) {
          xmlInput.date = this.exportDataFrom;

          this.flightDataExchangeService
            .exportFlightsData(xmlInput)
            .pipe(
              finalize(() => {
                this.showSpinner = false;
              })
            )
            .subscribe((bytes) => {
              this.flightDataExchangeService.getServerDate().subscribe((result) => {
                const templateName = `${this.translateService.instant(
                  this.getTranslateKey('flightsDataExportFileNamePrefix')
                )}_${this.datepipe.transform(result, this.component.dateFormat)}h${this.datepipe.transform(
                  result,
                  this.component.monthFormat
                )}.${FileExtensions.zip}`;

                this.downLoadFiles(bytes, templateName);
                this.loadReportList();
              });
            });
        } else {
          this.showSpinner = false;
          this.messageService.showErrorMessage(this.getTranslateKey('addAssets'));
        }
      }
    }
  }

  public showImportReports(): boolean {
    let returnValue = false;
    if (this.type === this.component.loading) {
      if (this.format === this.component.excel) {
        returnValue = true;
      } else if (this.format === this.component.xml) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  // Event to delete report entry
  public deleteReports() {
    if (this.selectedReports !== []) {
      const partialMessageKey =
        this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();

      this.selectedReports.forEach((report) => {
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
          this.flightDataExchangeService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);

              this.selectedReports = [];
              this.loadReportList();
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

  public deleteExportReports() {
    if (this.selectedExportReports !== []) {
      const partialMessageKey =
        this.selectedExportReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();

      this.selectedExportReports.forEach((report) => {
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
          this.flightDataExchangeService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);

              this.selectedExportReports = [];
              this.loadReportList();
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

  public deleteAssets() {
    if (this.selectedAssetTask !== []) {
      const partialMessageKey = 'global.deleteConfirmationMsg';

      this.confirmationService.confirmDelete({
        messageKey: partialMessageKey,
        accept: () => {
          this.superiorTable = this.superiorTable.filter((asset) => {
            return !this.selectedAssetTask.includes(asset);
          });
          this.selectedAssetTask = [];
        }
      });
    }
  }

  public openReportDetail(object: BireReportDTO): void {
    if (!!object && !!object.reportId) {
      const bireReportDTOId: BireReportDTOId = {
        reportId: object.reportId
      };
      this.flightDataExchangeService.openImportReportContent(bireReportDTOId).subscribe((result) => {
        if (!!object && !!object.reportName) {
          if (
            object.reportName.includes(`.${FileExtensions.txt}`) ||
            object.reportName.includes(`.${FileExtensions.zip}`)
          ) {
            this.downLoadFiles(result, object.reportName);
          } else if (this.type === this.component.loading) {
            this.downLoadFiles(result, `${object.reportName}.${FileExtensions.txt}`);
          } else if (this.type === this.component.export) {
            this.downLoadFiles(result, `${object.reportName}.${FileExtensions.zip}`);
          }
        } else {
          super.throwUnboundLocalError('openReportDetail', 'object.reportName');
        }
      });
    } else {
      super.throwUnboundLocalError('openReportDetail', 'object.reportId');
    }
  }

  // Method to set table columns
  private setExportTableCols(): void {
    this.assetSelectionTableCols = [
      { field: 'equipmentText', width: '10%' },
      { field: 'equipmentFamilyVariantCode', width: '10%' },
      { field: 'equipmentRegistration', width: '10%' },
      { field: 'equipmentPn', width: '5%' },
      { field: 'equipmentDesignation', width: '10%' },
      { field: 'equipmentFunction', width: '10%' },
      { field: 'equipmentSn', width: '5%' },
      { field: 'equipmentSupAsset', width: '10%' },
      { field: 'equipmentOwner', width: '5%' },
      { field: 'equipmentOperator', width: '10%' },
      { field: 'equipmentLocation', width: '10%' },
      { field: 'equipmentOperationalStatus', width: '10%' },
      { field: 'equipmentCode', width: '5%' }
    ];

    this.exportReportTableCols = [
      { field: 'reportCode', alignment: 'center' },
      { field: 'reportName', alignment: 'center' },
      { field: 'statusUser', alignment: 'center' },
      { field: 'statusDate', alignment: 'center' }
    ];
  }

  // Modifying table columns depending on search criteria
  private initImportTableCols() {
    this.reportTableCols = [
      { field: 'reportCode', alignment: 'center' },
      { field: 'reportName', alignment: 'center', width: '25rem' },
      { field: 'statusUser', alignment: 'center' },
      { field: 'statusDate', alignment: 'center' }
    ];
  }

  private loadReportList(): void {
    this.selectedReports = [];
    this.reports = [];
    if (!!this.format && !!this.type) {
      const input: GetRefreshedArchivedReportDataInput = {
        data: this.getTranslation('flights'),
        format: this.format,
        type: this.type,
        reportCode: ''
      };

      if (this.type === this.component.loading) {
        // 'Loading'
        if (this.format === this.component.excel) {
          // 'Excel'
          input.reportCode = 'XLS_MISSION_IMPORT_REPORT_CODE';
          this.hitFetchAPI(input);
        } else if (this.format === this.component.xml) {
          input.reportCode = 'XML_MISSION_IMPORT_REPORT_CODE';
          this.hitFetchAPI(input);
        }
      } else if (this.type === this.component.export) {
        if (this.format === this.component.xml) {
          input.reportCode = 'ZIP_MISSION_EXPORT_REPORT';
          this.hitFetchAPI(input);
        }
      }
    }
  }

  public setSelectedAssetsFromSelectionDilog(event: FindAssetListConfigurationEventDTO[]) {
    event.forEach((e) => {
      const inSuperiorTable = this.superiorTable.filter((asset) => asset.equipmentCode === e.equipmentCode);
      if (inSuperiorTable.length === 0) {
        this.superiorTable.push(e);
      }
    });
  }

  private hitFetchAPI(input: GetRefreshedArchivedReportDataInput): void {
    this.isReportLoading = true;
    this.flightDataExchangeService.fetchFleetDataExchangeReport(input).subscribe((result) => {
      this.reports = result;
      this.isReportLoading = false;
    });
  }

  private resetScreen(): void {
    this.file = {};
    this.fileName = '';

    this.superiorTable = [];
    this.reports = [];
    this.exportDataFrom = undefined;
  }

  // Load Dropdown with data at initial
  private loadDropDownLists(): void {
    this.flightDataExchangeService.findTypeList().subscribe(
      (results) => {
        this.propertyTypeList = ListUtils.orEmpty(results).map((elt) => {
          // FIXME
          if (elt.value === 'Loading') {
            elt.label = this.translateService.instant('loading');
          } else if (elt.value === 'Export') {
            elt.label = this.translateService.instant('export');
          }

          return elt;
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTypeList'));
      }
    );
  }

  private getTranslation(label: string): string {
    return this.translateService.instant(this.getTranslateKey(label)) as string;
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName);
  }

  /*************************
   * Asset(s) selection popup
   *************************/

  public openAssetsSelectionDialog(): void {
    this.showAssetsSelectionDialog = true;
  }
}
