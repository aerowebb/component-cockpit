import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { ExportMaintenanceFileInput } from '../../../shared/types/api-input-types/engineering-data-exchange/export-maintenance-file-input.interface';
import { ExportReferentialFileInput } from '../../../shared/types/api-input-types/engineering-data-exchange/export-referential-file-input.interface';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/engineering-data-exchange/find-data-list-by-search-criteria-input.interface';
import { GetExcelDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-excel-data-input.interface';
import { GetTypeDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-type-data-input.interface';
import { GetXMLDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/get-xml-data-input.interface';
import { RefreshArchivedImportReportInput } from '../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { FindBireItemsByFamilyVariantCode } from '../../../shared/types/api-output-types/engineering-data-exchange/find-bire-items-by-family-variant-code.interface';
import { GetFamilyVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';
import { GetImportListTableOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-import-list-table-output-dto.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';

import { EgineeringDataExchangeSearchService } from './engineering-data-exchange-search.service';

@Component({
  selector: 'aw-engineering-data-exchange-search',
  templateUrl: './engineering-data-exchange-search.component.html',
  styleUrls: ['./engineering-data-exchange-search.component.scss']
})
export class EngineeringDataExchangeSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly EXPORT: string = 'Export';
  public readonly LOADING: string = 'Loading';

  public readonly EXCEL: string = 'EXCEL';
  public readonly XML: string = 'XML';

  public readonly IPC: string = 'IPC';
  public readonly MAINTENANCE: string = 'Maintenance';
  public readonly LOGISTIC: string = 'Logistics';
  public readonly FEEDBACK: string = 'Experience Feedback';
  public readonly FUNCTIONAL: string = 'Functional locations';
  public readonly EIPC: string = 'EIPC - Detailed Parts List';
  public readonly AMG: string = 'Guidelines';

  public searchObject: BirePnDTO;

  public familyValues: LabelValue<string>[];
  public variantValues: LabelValue<string>[];

  public selectedFamily: string;
  public selectedVariant: string | undefined;

  public familyCode: string;
  public variantCode: string;
  public structureType: string;
  public familyName: string;
  public variantName: string;

  public getFamilyVariantOutputDTO: GetFamilyVariantOutputDTO[];

  public propertyVariant: LabelValue<string>[];
  public propertyDataList: LabelValue<string>[];
  public propertyDataLoadingExcel: LabelValue<string>[];
  public propertyDataLoadingXml: LabelValue<string>[];
  public propertyDataExportXml: LabelValue<string>[];
  public propertyDataExportExcel: LabelValue<string>[];
  public propertyFormatList: LabelValue<string>[];
  public propertyTypeList: LabelValue<string>[];

  public formats: LabelValue<string>[];

  public ataCodes: LabelValue<string>[];
  private ataData: FindBireItemsByFamilyVariantCode[];
  public selectedATACode: string;

  public type: string;
  public format: string | undefined;
  public data: string | undefined;

  public ipcExcelCheckbox: boolean;
  public maintenanceExcelCheckbox: boolean;
  public ipcXmlCheckbox: boolean;
  public maintenanceXmlCheckbox: boolean;
  public logisticsCheckbox: boolean;
  public experienceFeedbackCheckbox: boolean;
  public amgExcelCheckbox: boolean;

  public showSearchCriteria: boolean;
  public showImportPanel: boolean;
  public showImportReportList: boolean;
  public showImportDataPanel: boolean;
  public showExportIPCPanel: boolean;
  public showExportIPCPanelExcel: boolean;
  public showExportMaintenancePanel: boolean;
  public showExportEIPCPanel: boolean;

  public importReport: GetImportListTableOutputDTO[];
  public selectedReports: GetImportListTableOutputDTO[];

  public file: BidoDocumentationDTO | undefined;
  public fileName: string | undefined;

  public importReportMessage: string;
  public showImportReportMessage: boolean;

  public reportTableCols: TableColumn[];

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public taskGroups: LabelValue<string>[];
  public selectedTaskGroup: string;

  // For Export
  public showItemTableDialog: boolean;
  public itemTableData: DialogTableData<BireItemDTO>;
  public showExportPanel: boolean;
  public exportPanel: string;

  public ipcExportData: ExportReferentialFileInput;
  public maintenanceExportData: ExportMaintenanceFileInput;
  public eipcExportData: RefreshArchivedImportReportInput;

  public showSpinner: boolean;
  public showSimulateSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly engineeringDataExchangeSearchService: EgineeringDataExchangeSearchService,
    private readonly datepipe: DatePipe,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.searchObject = {};

    this.familyValues = [];
    this.variantValues = [];

    this.familyCode = '';
    this.variantCode = '';
    this.structureType = '';
    this.familyName = '';
    this.variantName = '';

    this.propertyVariant = [];
    this.propertyDataExportXml = [];
    this.propertyDataExportExcel = [];
    this.propertyDataLoadingExcel = [];
    this.propertyDataLoadingXml = [];
    this.propertyDataList = [];
    this.propertyTypeList = [];
    this.propertyFormatList = [];

    this.taskGroups = [];
    this.selectedTaskGroup = '';

    this.selectedReports = [];

    this.showSpinner = false;
    this.showSimulateSpinner = false;

    this.ataCodes = [];
    this.ataData = [];
    this.selectedATACode = '';

    this.ipcExcelCheckbox = false;
    this.maintenanceExcelCheckbox = false;
    this.ipcXmlCheckbox = false;
    this.maintenanceXmlCheckbox = false;
    this.logisticsCheckbox = false;
    this.experienceFeedbackCheckbox = false;
    this.amgExcelCheckbox = false;

    this.showSearchCriteria = false;
    this.showImportPanel = false;
    this.showImportReportList = false;
    this.showImportDataPanel = false;
    this.showExportIPCPanel = false;
    this.showExportIPCPanelExcel = false;
    this.showExportMaintenancePanel = false;
    this.showExportEIPCPanel = false;

    this.file = undefined;
    this.fileName = '';

    this.importReportMessage = '';
    this.showImportReportMessage = false;

    this.ipcExportData = {};
    this.ipcExportData.withFamilyVariant = true;
    this.maintenanceExportData = {};
    this.eipcExportData = {};

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
    this.keyMap.set('itemType', this.propertiesService.getValue('getItemTypeMap'));
    this.keyMap.set('itemFamilyCode', this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP));

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });
  }

  public visibilityExportExcelIpc(): boolean {
    return this.canDisplayForm(this.EXPORT, this.EXCEL, this.IPC);
  }

  public visibilityExportExcelMaintenance(): boolean {
    return this.canDisplayForm(this.EXPORT, this.EXCEL, this.MAINTENANCE);
  }

  public visibilityExportXmlIpc(): boolean {
    return this.canDisplayForm(this.EXPORT, this.XML, this.IPC);
  }

  public visibilityExportXmlMaintenance(): boolean {
    return this.canDisplayForm(this.EXPORT, this.XML, this.MAINTENANCE);
  }

  public visibilityExportXmlEipc(): boolean {
    return this.canDisplayForm(this.EXPORT, this.XML, this.EIPC);
  }

  public visibilityImport(): boolean {
    return this.canDisplayForm(this.LOADING, this.format, this.data);
  }

  private canDisplayForm(type: string, format: string | undefined, data: string | undefined): boolean {
    if (!format) {
      return false;
    }
    if (!data) {
      return false;
    }

    if (this.type !== type) {
      return false;
    }
    if (this.format !== format) {
      return false;
    }
    if (this.data !== data) {
      return false;
    }

    if (this.type === this.LOADING) {
      if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
        return true;
      }
    }

    if (!this.validFamilyVariantCombination()) {
      return false;
    }

    return true;
  }

  public getComponentName(): string {
    return 'EngineeringDataExchangeSearchComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownLists();
  }

  private setTableCols(): void {
    if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
      this.reportTableCols = [
        { field: 'reportCode', alignment: 'center' },
        { field: 'reportName', alignment: 'center', width: '28%' },
        { field: 'statusUser', alignment: 'center' },
        { field: 'statusDate', alignment: 'center' }
      ];
    } else {
      this.reportTableCols = [
        { field: 'familyCode', alignment: 'center', width: '18%' },
        { field: 'reportCode', alignment: 'center', width: '18%' },
        { field: 'reportName', alignment: 'center', width: '28%' },
        { field: 'statusUser', alignment: 'center', width: '18%' },
        { field: 'statusDate', alignment: 'center', width: '18%' }
      ];
    }
  }

  public deleteReports(): void {
    if (this.selectedReports !== []) {
      const partialMessageKey =
        this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();
      this.selectedReports.forEach((report) => {
        if (report && report.bireReportDTO.reportId) {
          const reportId: BireReportDTOId = {
            reportId: report.bireReportDTO.reportId
          };
          reports.push(reportId);
        }
      });
      if (!!reports && !!this.data) {
        const removeDataInput: RemoveDataInput = {
          bireReportDTOId: reports,
          data: this.data
        };
        this.confirmationService.confirmDelete({
          messageKey: this.getTranslateKey(partialMessageKey),
          accept: () => {
            this.engineeringDataExchangeSearchService.removeReportsByReportId(removeDataInput).subscribe(
              (result) => {
                const messageKey =
                  partialMessageKey === 'confirmDeleteSelectedReports'
                    ? this.getTranslateKey('successOnDeleteReports')
                    : this.getTranslateKey('successOnDeleteReport');

                this.messageService.showSuccessMessage(messageKey);
                this.selectedReports = [];
                this.loadImportReportList();
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
      } else {
        super.throwUnboundLocalError('deleteReports', 'reports && this.data');
      }
    }
  }

  public openReportDetail(object: GetImportListTableOutputDTO): void {
    if (!!object && !!object.bireReportDTO && !!object.bireReportDTO.reportId && !!object.bireReportDTO.reportName) {
      const bireReportDTOId: BireReportDTOId = {
        reportId: object.bireReportDTO.reportId
      };
      if (this.data === this.LOGISTIC) {
        if (!!object.reportContent && !!object.reportName) {
          if (object.reportName.includes('.txt')) {
            this.downLoadFiles(object.reportContent, object.reportName);
          } else {
            this.downLoadFiles(object.reportContent, `${object.reportName}.txt`);
          }
        }
      } else if (this.data === this.FUNCTIONAL) {
        this.engineeringDataExchangeSearchService.openFLIMportReportContent(bireReportDTOId).subscribe((result) => {
          if (!!object.bireReportDTO.reportName && object.bireReportDTO.reportName.includes('.txt')) {
            this.downLoadFiles(result, object.bireReportDTO.reportName);
          } else {
            this.downLoadFiles(result, `${object.bireReportDTO.reportName}.txt`);
          }
        });
      } else {
        this.engineeringDataExchangeSearchService.openImportReportContent(bireReportDTOId).subscribe((result) => {
          if (!!object.bireReportDTO.reportName && object.bireReportDTO.reportName.includes('.txt')) {
            this.downLoadFiles(result, object.bireReportDTO.reportName);
          } else {
            this.downLoadFiles(result, `${object.bireReportDTO.reportName}.txt`);
          }
        });
      }
    } else {
      super.throwUnboundLocalError('openReportDetail', 'object');
    }
  }

  // tslint:disable-next-line:no-any
  public onTypeChange(event: any) {
    this.format = undefined;
    if (event.value === null) {
      this.data = undefined;
      this.resetScreen();
    } else {
      this.propertyFormatList = this.formats;
      if (this.propertyFormatList && this.propertyFormatList.length > 0) {
        this.format = this.propertyFormatList[0].value;
      }
      this.changedTypeFormat();
    }
  }

  // tslint:disable-next-line:no-any
  public onFormatChange(event: any) {
    this.changedTypeFormat();
  }

  public changedTypeFormat() {
    this.resetScreen();
    this.data = undefined;
    if (this.type === 'Loading') {
      this.showExportIPCPanel = false;
      this.showExportIPCPanelExcel = false;
      this.showExportMaintenancePanel = false;
      this.showExportEIPCPanel = false;
      if (this.data === '' || this.data === undefined) {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
      }
      if (this.format === 'XML') {
        this.propertyDataList = this.propertyDataLoadingXml;
      } else if (this.format === 'EXCEL') {
        this.propertyDataList = this.propertyDataLoadingExcel;
      } else {
        this.propertyDataList = [];
        this.data = undefined;
      }
    } else if (this.type === 'Export') {
      this.showImportDataPanel = false;
      this.showImportPanel = false;
      if (this.data === '' || this.data === undefined) {
        this.showExportIPCPanel = false;
        this.showExportIPCPanelExcel = false;
        this.showExportMaintenancePanel = false;
        this.showExportEIPCPanel = false;
      }
      if (this.format === 'XML') {
        this.propertyDataList = this.propertyDataExportXml;
      } else if (this.format === 'EXCEL') {
        this.propertyDataList = this.propertyDataExportExcel;
      } else {
        this.propertyDataList = [];
        this.data = undefined;
      }
    } else {
      this.showImportDataPanel = false;
      this.showImportPanel = false;
      this.propertyDataList = [];
      this.data = undefined;
    }
  }

  // tslint:disable-next-line:no-any
  public onFamilyChange(event: any) {
    this.variantValues = [];
    this.selectedVariant = '';

    if (event.value === '' || event.value === null) {
      this.selectedVariant = '';
      this.showImportDataPanel = false;
      this.showImportPanel = false;
      this.showExportIPCPanel = false;
      this.showExportIPCPanelExcel = false;
      this.showExportMaintenancePanel = false;
      this.showExportEIPCPanel = false;
    } else {
      if (this.selectedVariant === '') {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
        this.showExportIPCPanel = false;
        this.showExportIPCPanelExcel = false;
        this.showExportMaintenancePanel = false;
        this.showExportEIPCPanel = false;
      }
      this.getFamilyVariantOutputDTO.forEach((object) => {
        if (object.familyLabelValueDTO.label === this.selectedFamily) {
          if (object.variantLabelValueDTO !== []) {
            object.variantLabelValueDTO.forEach((variant) => {
              this.variantValues.push(variant.variantLabelValue);
            });
          }
        }
      });

      this.familyAndVariantSelected();
    }
  }

  // tslint:disable-next-line:no-any
  public onVariantChange(event: any) {
    if (this.selectedVariant !== '') {
      this.familyAndVariantSelected();
    }
  }

  private familyAndVariantSelected(): string {
    this.getFamilyVariantOutputDTO.forEach((familyObject) => {
      if (familyObject.familyLabelValueDTO.label === this.selectedFamily) {
        familyObject.variantLabelValueDTO.forEach((variantObject) => {
          if (variantObject.variantLabelValue.label === this.selectedVariant) {
            this.variantCode = variantObject.variantCode;
            this.variantName = variantObject.variantName;
            this.structureType = variantObject.structureType;
          }
        });
      }
    });

    return `${this.selectedFamily}/${this.variantCode}-${this.variantName}/${this.structureType}`;
  }

  private getFamilyVariantComponents(): void {
    this.getFamilyVariantOutputDTO.forEach((familyObject) => {
      if (familyObject.familyLabelValueDTO.label === this.selectedFamily) {
        familyObject.variantLabelValueDTO.forEach((variantObject) => {
          if (variantObject.variantLabelValue.label === this.selectedVariant) {
            this.familyCode = variantObject.familyCode;
            this.structureType = variantObject.structureType;
            this.variantCode = variantObject.variantCode;
            this.familyName = variantObject.familyName;
            this.variantName = variantObject.variantName;
          }
        });
      }
    });
  }

  private resetCheckboxes(): void {
    this.ipcExcelCheckbox = false;
    this.maintenanceExcelCheckbox = false;
    this.logisticsCheckbox = false;
    this.experienceFeedbackCheckbox = false;
    this.ipcXmlCheckbox = false;
    this.ipcExcelCheckbox = false;
    this.maintenanceXmlCheckbox = false;
    this.amgExcelCheckbox = false;
  }

  public import(): void {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        accept: () => {
          this.showSpinner = true;
          this.getFamilyVariantComponents();

          // Importing Excel file
          const isExcel =
            this.file &&
            (this.showDocExtension(this.file) === 'xlsx' ||
              this.showDocExtension(this.file) === 'xls' ||
              (this.data === this.AMG && this.showDocExtension(this.file) === 'zip'));
          if (this.format === 'EXCEL' && isExcel) {
            if (!!this.file && !!this.fileName && !!this.file.docFile && !!this.data) {
              const excelInput: GetExcelDataInput = {
                fileName: this.fileName,
                excelSource: this.file && this.file.docFile,
                withOldDataRemoving: false,
                familyCodeSelected: this.familyCode,
                structureTypeSelected: this.structureType,
                variantCodeSelected: this.variantCode,
                data: this.data
              };

              switch (this.data) {
                case this.IPC:
                  {
                    excelInput.withOldDataRemoving = this.ipcExcelCheckbox;
                  }
                  break;
                case this.MAINTENANCE:
                  {
                    excelInput.withOldDataRemoving = this.maintenanceExcelCheckbox;
                  }
                  break;
                case this.LOGISTIC:
                  {
                    excelInput.withOldDataRemoving = this.logisticsCheckbox;
                  }
                  break;
                case this.FEEDBACK:
                  {
                    excelInput.withOldDataRemoving = this.experienceFeedbackCheckbox;
                  }
                  break;
                case this.AMG:
                  {
                    excelInput.withOldDataRemoving = this.amgExcelCheckbox;
                  }
                  break;
                default:
                  break;
              }

              this.engineeringDataExchangeSearchService.saveEngineeringExcelDataExchange(excelInput).subscribe(
                (result) => {
                  this.fileName = '';
                  this.importReportMessage = result;
                  this.showImportReportMessage = true;
                  this.loadImportReportList();
                  this.showSpinner = false;
                },
                (error) => {
                  this.messageService.showErrorMessage(error.error.errorDesc);
                  this.showSpinner = false;
                }
              );
            } else {
              super.throwUnboundLocalError('import', 'this.file');
              this.showSpinner = false;
            }
          } else if (this.format === 'EXCEL' && !isExcel) {
            this.fileName = '';
            if (this.data === this.AMG) {
              this.messageService.showErrorMessage(this.getTranslateKey('notExcelOrZip'));
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('notExcel'));
            }
            this.showSpinner = false;
          }

          // Import Xml File
          if (!!this.file && this.format === 'XML' && this.showDocExtension(this.file) === 'xml') {
            if (!!this.fileName && !!this.file.docFile && !!this.data) {
              const xmlInput: GetXMLDataInput = {
                fileName: this.fileName,
                xmlSource: this.file && this.file.docFile,
                familyCode: this.familyCode,
                structureType: this.structureType,
                variantCode: this.variantCode,
                withDeletion: false,
                simulate: false,
                data: this.data
              };
              switch (this.data) {
                case this.IPC:
                  {
                    xmlInput.withDeletion = this.ipcXmlCheckbox;
                  }
                  break;
                case this.MAINTENANCE:
                  {
                    xmlInput.withDeletion = this.maintenanceXmlCheckbox;
                  }
                  break;
                default:
                  break;
              }
              this.engineeringDataExchangeSearchService.saveEngineeringXMLDataExchange(xmlInput).subscribe(
                (result) => {
                  this.fileName = '';
                  this.importReportMessage = result;
                  this.showImportReportMessage = true;
                  this.loadImportReportList();
                  this.showSpinner = false;
                },
                (error) => {
                  this.messageService.showErrorMessage(error.error.errorDesc);
                  this.showSpinner = false;
                }
              );
            } else {
              super.throwUnboundLocalError('import', 'this.file');
              this.showSpinner = false;
            }
          } else if (!!this.file && this.format === 'XML' && this.showDocExtension(this.file) !== 'xml') {
            this.messageService.showErrorMessage(this.getTranslateKey('notXml'));
            this.showSpinner = false;
          }
        }
      });
    }
  }

  public simulate(): void {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        accept: () => {
          this.showSimulateSpinner = true;
          this.getFamilyVariantComponents();

          if (
            !!this.file &&
            !!this.fileName &&
            !!this.file.docFile &&
            !!this.familyCode &&
            !!this.structureType &&
            !!this.variantCode &&
            !!this.data
          ) {
            if (this.format === 'XML' && this.showDocExtension(this.file) === 'xml') {
              const xmlInput: GetXMLDataInput = {
                fileName: this.fileName,
                xmlSource: this.file.docFile,
                familyCode: this.familyCode,
                structureType: this.structureType,
                variantCode: this.variantCode,
                withDeletion: false,
                simulate: true,
                data: this.data
              };
              switch (this.data) {
                case this.IPC:
                  {
                    xmlInput.withDeletion = this.ipcXmlCheckbox;
                  }
                  break;
                case this.MAINTENANCE:
                  {
                    xmlInput.withDeletion = this.maintenanceXmlCheckbox;
                  }
                  break;
                default:
                  break;
              }
              this.engineeringDataExchangeSearchService.saveEngineeringXMLDataExchange(xmlInput).subscribe(
                (result) => {
                  this.fileName = '';
                  this.importReportMessage = result;
                  this.showImportReportMessage = true;
                  this.showSimulateSpinner = false;
                },
                (error) => {
                  this.messageService.showErrorMessage(error.error.errorDesc);
                  this.showSimulateSpinner = false;
                }
              );
            } else if (this.format === 'XML' && this.showDocExtension(this.file) !== 'xml') {
              this.fileName = '';
              this.messageService.showErrorMessage(this.getTranslateKey('notXml'));
              this.showSimulateSpinner = false;
            }
          }
        }
      });
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public exportIPC(): void {
    this.getFamilyVariantComponents();
    this.showSpinner = true;
    this.ipcExportData.familyCode = this.familyCode;
    this.ipcExportData.structureType = this.structureType;
    this.ipcExportData.variantCode = this.variantCode;

    if (this.ipcExportData.lastPublicationDate) {
      this.ipcExportData.lastPublicationDate = new Date(this.ipcExportData.lastPublicationDate).toISOString();
    }

    const currDate = new Date();
    const customDate = `${this.datepipe.transform(currDate, 'dd-MM-yyyy_HH')}h${this.datepipe.transform(
      currDate,
      'mm'
    )}`;
    this.engineeringDataExchangeSearchService.exportReferentialFile(this.ipcExportData).subscribe(
      (result) => {
        this.showSpinner = false;
        if (result !== null) {
          const fileName = `IPC_${this.familyName}_${this.variantCode}_${customDate}.zip`;

          this.getFamilyVariantComponents();
          this.downLoadFiles(result, fileName);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
        }
      },
      () => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
      }
    );
  }

  public exportExcelIpc(): void {
    this.getFamilyVariantComponents();
    this.showSpinner = true;
    this.ipcExportData.familyCode = this.familyCode;
    this.ipcExportData.structureType = this.structureType;
    this.ipcExportData.variantCode = this.variantCode;

    if (this.ipcExportData.lastPublicationDate) {
      this.ipcExportData.lastPublicationDate = new Date(this.ipcExportData.lastPublicationDate).toISOString();
    }

    const currDate = new Date();
    const customDate = `${this.datepipe.transform(currDate, 'dd-MM-yyyy_HH')}h${this.datepipe.transform(
      currDate,
      'mm'
    )}`;
    this.engineeringDataExchangeSearchService.exportReferentialFileExcel(this.ipcExportData).subscribe(
      (result) => {
        this.showSpinner = false;
        if (result !== null) {
          const fileName = `IPC_${this.familyName}_${this.variantCode}_${customDate}.xls`;

          this.getFamilyVariantComponents();
          this.downLoadFiles(result, fileName);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
        }
      },
      () => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
      }
    );
  }

  public exportMaintenance(): void {
    this.getFamilyVariantComponents();
    this.showSpinner = true;
    this.maintenanceExportData.familyCode = this.familyCode;
    this.maintenanceExportData.structureType = this.structureType;
    this.maintenanceExportData.variantCode = this.variantCode;

    const currDate = new Date();
    const customDate = `${this.datepipe.transform(currDate, 'dd-MM-yyyy_HH')}h${this.datepipe.transform(
      currDate,
      'mm'
    )}`;

    this.engineeringDataExchangeSearchService.exportMaintenanceFile(this.maintenanceExportData).subscribe(
      (result) => {
        this.showSpinner = false;
        if (result !== null) {
          const fileName = `Maintenance_${this.familyName}_${this.variantCode}_${customDate}.zip`;

          this.getFamilyVariantComponents();
          this.downLoadFiles(result, fileName);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
        }
      },
      () => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
      }
    );
  }

  public exportMaintenanceExcel(): void {
    this.getFamilyVariantComponents();
    this.showSpinner = true;
    this.maintenanceExportData.familyCode = this.familyCode;
    this.maintenanceExportData.structureType = this.structureType;
    this.maintenanceExportData.variantCode = this.variantCode;
    this.maintenanceExportData.taskGroupCode = this.selectedTaskGroup;

    const currDate = new Date();
    const customDate = `${this.datepipe.transform(currDate, 'dd-MM-yyyy_HH')}h${this.datepipe.transform(
      currDate,
      'mm'
    )}`;

    this.engineeringDataExchangeSearchService.exportMaintenanceFileExcel(this.maintenanceExportData).subscribe(
      (result) => {
        this.showSpinner = false;
        if (result !== null) {
          const fileName = `Maintenance_${this.familyName}_${this.variantCode}_${customDate}.xls`;

          this.getFamilyVariantComponents();
          this.downLoadFiles(result, fileName);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
        }
      },
      () => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
      }
    );
  }

  public exportEIPC(): void {
    this.getFamilyVariantComponents();
    this.showSpinner = true;
    this.eipcExportData.familyCode = this.familyCode;
    this.eipcExportData.structureType = this.structureType;
    this.eipcExportData.variantCode = this.variantCode;

    const currDate = new Date().getTime();

    this.engineeringDataExchangeSearchService.exportDetailPartsList(this.eipcExportData).subscribe(
      (result) => {
        this.showSpinner = false;
        if (result !== null) {
          const fileName = `EIPC_${this.familyName}_${this.variantCode}_DPLIST_${currDate}.xml`;
          this.getFamilyVariantComponents();
          this.downLoadFiles(result, fileName);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
        }
      },
      () => {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnExport'));
      }
    );
  }

  private loadDropDownLists(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };
    this.engineeringDataExchangeSearchService.getFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        this.getFamilyVariantOutputDTO = results;
        results.forEach((result) => {
          this.familyValues.push(result.familyLabelValueDTO);
          this.selectedFamily = this.familyValues[0].label;
          result.variantLabelValueDTO.forEach((object) => {
            this.variantValues.push(object.variantLabelValue);
          });
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );

    let dataListBySearchCriteriaInput: FindDataListBySearchCriteriaInput = {
      format: 'EXCEL',
      type: 'Loading'
    };
    this.engineeringDataExchangeSearchService.findDataListBySearchCriteria(dataListBySearchCriteriaInput).subscribe(
      (results) => {
        this.propertyDataLoadingExcel = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetDataList'));
      }
    );
    dataListBySearchCriteriaInput = {
      format: 'XML',
      type: 'Loading'
    };
    this.engineeringDataExchangeSearchService.findDataListBySearchCriteria(dataListBySearchCriteriaInput).subscribe(
      (results) => {
        this.propertyDataLoadingXml = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetDataList'));
      }
    );
    dataListBySearchCriteriaInput = {
      format: 'XML',
      type: 'Export'
    };
    this.engineeringDataExchangeSearchService.findDataListBySearchCriteria(dataListBySearchCriteriaInput).subscribe(
      (results) => {
        this.propertyDataExportXml = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetDataList'));
      }
    );
    dataListBySearchCriteriaInput = {
      format: 'EXCEL',
      type: 'Export'
    };
    this.engineeringDataExchangeSearchService.findDataListBySearchCriteria(dataListBySearchCriteriaInput).subscribe(
      (results) => {
        this.propertyDataExportExcel = [];
        if (results) {
          results.forEach((element: LabelValue<string>) => {
            if (element.value !== this.EIPC) {
              this.propertyDataExportExcel.push(element);
            }
          });
          this.propertyDataExportExcel = [...this.propertyDataExportExcel];
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetDataList'));
      }
    );

    this.getTypeList();

    this.engineeringDataExchangeSearchService.findAllBireTaskGroup().subscribe((data: LabelValue<string>[]) => {
      this.taskGroups = data;
    });
  }

  private getTypeList(): void {
    this.engineeringDataExchangeSearchService.findTypeList().subscribe(
      (results) => {
        this.propertyTypeList = results;
        if (this.propertyTypeList && this.propertyTypeList.length > 0) {
          this.type = this.propertyTypeList[0].value;
          /*if (this.format !== undefined) {
            this.changedTypeFormat();
          }*/
          this.getFormatList();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTypeList'));
      }
    );
  }

  private getFormatList(): void {
    this.engineeringDataExchangeSearchService.findFormatList().subscribe(
      (results) => {
        this.propertyFormatList = results;
        this.formats = results;
        this.onTypeChange({ value: this.type });
        /*if (this.propertyFormatList && this.propertyFormatList.length > 0) {
          this.format = this.propertyFormatList[0].value;
          if (this.type !== undefined) {
            this.changedTypeFormat();
          }
        }*/
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFormatList'));
      }
    );
  }

  public loadImportReportList(): void {
    this.getFamilyVariantComponents();
    this.importReport = [];
    if (this.type === 'Loading') {
      const loadImportReportsInput: RefreshArchivedImportReportInput = {
        familyCode: this.familyCode,
        structureType: this.structureType,
        variantCode: this.variantCode,
        data: this.data,
        reportCode: '',
        format: this.format
      };
      if (this.format === 'EXCEL') {
        switch (this.data) {
          case this.IPC:
            {
              loadImportReportsInput.reportCode = 'TCI_IMPORT_REPORT';
            }
            break;
          case this.MAINTENANCE:
            {
              loadImportReportsInput.reportCode = 'TASK_IMPORT_REPORT';
            }
            break;
          case this.LOGISTIC:
            {
              loadImportReportsInput.reportCode = 'LOGISTICS_IMPORT_REPORT';
            }
            break;
          case this.FEEDBACK:
            {
              loadImportReportsInput.reportCode = 'EXPERIENCE_IMPORT_REPORT';
            }
            break;
          case this.FUNCTIONAL:
            {
              loadImportReportsInput.reportCode = 'FL_STRUCTURE_IMPORT_REPORT';
            }
            break;
          case this.AMG:
            {
              loadImportReportsInput.reportCode = 'AMG_IMPORT_REPORT';
            }
            break;
          default:
            break;
        }
      } else if (this.format === 'XML') {
        switch (this.data) {
          case this.IPC:
            {
              loadImportReportsInput.reportCode = 'REFERENTIAL_IMPORT_REPORT_CODE';
            }
            break;
          case this.MAINTENANCE:
            {
              loadImportReportsInput.reportCode = 'MAINTENANCE_IMPORT_REPORT_CODE';
            }
            break;
          default:
            break;
        }
      }
      this.engineeringDataExchangeSearchService.refreshEngineeringDataExchange(loadImportReportsInput).subscribe(
        (results) => {
          this.importReport = results;
          this.importReport.forEach((report) => {
            report.reportId = report.bireReportDTO.reportId;
            report.familyCode = report.bireReportDTO.familyCode;
            report.structureType = report.bireReportDTO.structureType;
            report.variantCode = report.bireReportDTO.variantCode;
            report.reportCode = report.bireReportDTO.reportCode;
            report.reportName = report.bireReportDTO.reportName;
            report.reportContent = report.bireReportDTO.reportContent;
            report.reportDescription = report.bireReportDTO.reportDescription;
            report.statusState = report.bireReportDTO.statusState;
            report.statusUser = report.bireReportDTO.statusUser;
            report.statusDate = report.bireReportDTO.statusDate;
          });
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadImportReports'));
        }
      );
    }
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName);
  }

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
      // } else {
      //   super.throwUnboundLocalError('uploadDocument', 'this.file && this.file.docName');
      // }
    }

    fileUploader.clear();
    // }
  }

  public loadImportComponents(): void {
    this.setFamilyAndVariantDropdowns();
    this.fileName = '';
  }

  public loadExportComponents(): void {
    this.setFamilyAndVariantDropdowns();
    this.ipcExportData = {};
    this.maintenanceExportData = {};
  }

  private resetScreen(): void {
    this.showSearchCriteria = false;
    this.showImportPanel = false;
    this.showImportReportList = false;
    this.showImportDataPanel = false;
    this.showExportIPCPanel = false;
    this.showExportIPCPanelExcel = false;
    this.showExportMaintenancePanel = false;
    this.showExportEIPCPanel = false;
    this.resetCheckboxes();
    this.loadImportComponents();
    this.loadExportComponents();
  }

  public loadTemplate(): string {
    let templateName = '';
    if (this.format === 'EXCEL') {
      switch (this.data) {
        case this.IPC:
          {
            templateName = 'TEMPLATE_IPC_FILE.xls';
          }
          break;
        case this.MAINTENANCE:
          {
            templateName = 'TEMPLATE_TASK_FILE.xls';
          }
          break;
        case this.LOGISTIC:
          {
            templateName = 'TEMPLATE_LOGISTICS_FILE.xls';
          }
          break;
        case this.FEEDBACK:
          {
            templateName = 'TEMPLATE_EXPERIENCE_FILE.xls';
          }
          break;
        case this.FUNCTIONAL:
          {
            templateName = 'TEMPLATE_FL_FILE.xls';
          }
          break;
        case this.AMG:
          {
            templateName = 'TEMPLATE_AMG_FILE.xls';
          }
          break;
        default:
          break;
      }
    } else if (this.format === 'XML') {
      switch (this.data) {
        case this.IPC:
          {
            templateName = 'Template_REFERENTIAL_DATA_IMPORT.xsd';
          }
          break;
        case this.MAINTENANCE:
          {
            templateName = 'Template_MAINTENANCE_DATA_IMPORT.xsd';
          }
          break;
        default:
          break;
      }
    }

    return templateName;
  }

  public openTemplate(templateName: string): void {
    if (!!this.data && !!this.format) {
      const getTemplateInput: GetTypeDataInput = {
        data: this.data,
        format: this.format
      };
      /*const partialMessageKey = this.getTranslateKey('openReport');
      this.confirmationService.confirm({
        interpolateParams: { 'openReport.reportName': templateName },
        messageKey: partialMessageKey,
        accept: () => {
          this.engineeringDataExchangeSearchService.getTemplate(getTemplateInput).subscribe((result) => {
            this.downLoadFiles(result, templateName);
          });
        }
      });*/
      this.engineeringDataExchangeSearchService.getTemplate(getTemplateInput).subscribe((result) => {
        this.downLoadFiles(result, templateName);
      });
    } else {
      super.throwUnboundLocalError('openTemplate', 'this.data && this.format');
    }
  }

  /********************************
   * Validation Assisting Functions
   *******************************/

  public enableImport(): boolean {
    if (!!this.format && !!this.data) {
      return false;
    } else {
      return true;
    }
  }

  public validTypeFormatDataCombination(): boolean {
    if (!!this.type && !!this.format && !!this.data) {
      return true;
    } else {
      return false;
    }
  }

  public validFamilyVariantCombination(): boolean {
    if (!!this.selectedFamily && !!this.selectedVariant) {
      return true;
    } else {
      return false;
    }
  }

  private loadATACodes(familyCode: string, structureType: string, variantCode: string): void {
    this.ataCodes = [];
    this.ataData = [];
    const input: RefreshArchivedImportReportInput = {
      familyCode,
      structureType,
      variantCode
    };
    this.engineeringDataExchangeSearchService.loadATAcodes(input).subscribe((results) => {
      this.ataData = results;
      results.forEach((result) => {
        this.ataCodes.push(result.labelValueDTO);
      });
    });
  }

  // tslint:disable-next-line:no-any
  public setATACodeComponents(event: any) {
    if (event.value !== '' || event.value !== null) {
      this.ataData.forEach((ata) => {
        if (this.selectedATACode === ata.labelValueDTO.label) {
          this.ipcExportData.section = ata.bireItemDTO.section;
          this.ipcExportData.subject = ata.bireItemDTO.subject;
          this.ipcExportData.chapter = ata.bireItemDTO.chapter;
          this.ipcExportData.sheet = ata.bireItemDTO.sheet;
          this.ipcExportData.mark = ata.bireItemDTO.marks;
        }
      });
    } else {
      this.ipcExportData.section = '';
      this.ipcExportData.subject = '';
      this.ipcExportData.chapter = '';
      this.ipcExportData.sheet = '';
      this.ipcExportData.mark = '';
    }
  }

  public resetATAData(): void {
    this.selectedATACode = '';
    this.ipcExportData.chapter = '';
    this.ipcExportData.section = '';
    this.ipcExportData.sheet = '';
    this.ipcExportData.subject = '';
    this.ipcExportData.mark = '';
  }

  private setFamilyAndVariantDropdowns(): void {
    this.familyValues = [];
    this.variantValues = [];
    const results = this.getFamilyVariantOutputDTO;
    if (results && results.length > 0) {
      results.forEach((result) => {
        this.familyValues.push(result.familyLabelValueDTO);
        this.selectedFamily = this.familyValues[0].label;
      });
      results[0].variantLabelValueDTO.forEach((variantValue) => {
        this.variantValues.push(variantValue.variantLabelValue);
      });
    }
    this.selectedVariant = undefined;
  }

  // tslint:disable-next-line:no-any
  public setSearchCriteriaVisibility(event: any): void {
    this.showSearchCriteria = this.validTypeFormatDataCombination() ? this.checkSearchCriteria() : false;
    this.setTableCols();
    this.resetCheckboxes();
    this.fileName = '';
    this.setFamilyAndVariantDropdowns();
    this.importReport = [];

    if (event.value === null || event.value === '') {
      this.showImportDataPanel = false;
      this.showImportPanel = false;
      this.showExportIPCPanel = false;
      this.showExportIPCPanelExcel = false;
      this.showExportMaintenancePanel = false;
      this.showExportEIPCPanel = false;
    } else {
      if (this.format === 'EXCEL') {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
        this.showExportIPCPanel = false;
        this.showExportIPCPanelExcel = false;
        this.showExportMaintenancePanel = false;
        this.showExportEIPCPanel = false;
        if (this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG) {
          this.loadImportReportList();
          if (this.validTypeFormatDataCombination()) {
            this.showImportDataPanel = true;
            this.showImportPanel = true;
          } else {
            this.showImportDataPanel = false;
            this.showImportPanel = false;
          }
        }
      } else if (this.format === 'XML') {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
        this.showExportIPCPanel = false;
        this.showExportIPCPanelExcel = false;
        this.showExportMaintenancePanel = false;
        this.showExportEIPCPanel = false;
      }
    }
  }

  public setImportSectionVisibility(): void {
    this.resetCheckboxes();
    this.fileName = '';
    if (this.format === 'EXCEL') {
      this.showExportIPCPanel = false;
      this.showExportIPCPanelExcel = false;
      this.showExportMaintenancePanel = false;
      this.showExportEIPCPanel = false;
      this.importReport = [];
      if (this.validTypeFormatDataCombination() && this.validFamilyVariantCombination()) {
        this.loadImportReportList();
        this.showImportDataPanel = true;
        this.showImportPanel = true;
      } else {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
      }
    } else if (this.format === 'XML') {
      if (this.type === 'Loading') {
        if (this.data !== null || this.data !== '') {
          this.loadImportReportList();
          this.showImportDataPanel = true;
          this.showImportPanel = true;
        } else {
          this.importReport = [];
          this.showImportDataPanel = false;
          this.showImportPanel = false;
        }
      } else {
        this.showImportDataPanel = false;
        this.showImportPanel = false;
        if (this.validTypeFormatDataCombination() && this.validFamilyVariantCombination()) {
          switch (this.data) {
            case this.IPC:
              {
                this.ipcExportData = {};
                this.ipcExportData.withFamilyVariant = true;
                this.showExportIPCPanel = true;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
                this.getFamilyVariantComponents();
                this.loadATACodes(this.familyCode, this.structureType, this.variantCode);
              }
              break;
            case this.MAINTENANCE:
              {
                this.maintenanceExportData = {
                  withShopManual: true,
                  withRange: true,
                  withTaskStructure: true,
                  withTaskGroup: true,
                  withMaintenancePlan: true
                };
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = true;
                this.showExportEIPCPanel = false;
              }
              break;
            case 'EIPC - Detailed Parts List':
              {
                this.eipcExportData = {};
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = true;
              }
              break;
            default:
              {
                this.eipcExportData = {};
                this.showExportIPCPanel = false;
                this.showExportIPCPanelExcel = false;
                this.showExportMaintenancePanel = false;
                this.showExportEIPCPanel = false;
              }
              break;
          }
        } else {
          this.showExportIPCPanel = false;
          this.showExportIPCPanelExcel = false;
          this.showExportMaintenancePanel = false;
          this.showExportEIPCPanel = false;
        }
      }
    }
  }

  public checkSearchCriteria(): boolean {
    let returnValue = false;
    if (this.type === 'Loading') {
      if (this.format === 'EXCEL') {
        returnValue =
          this.data === this.LOGISTIC || this.data === this.FUNCTIONAL || this.data === this.AMG ? false : true;
      } else if (this.format === 'XML') {
        returnValue = true;
      }
    } else {
      if (this.format === 'EXCEL') {
        returnValue = true;
      } else if (this.format === 'XML') {
        this.showExportXMLData();

        returnValue = true;
      } else {
        returnValue = false;
      }
    }

    return returnValue;
  }

  // For export
  public openItemTableDialog() {
    this.initItemTableData();
    this.showItemTableDialog = true;
  }

  private initItemTableData(): void {
    this.getFamilyVariantComponents();
    const itemTableCols: TableColumn[] = [
      { field: 'familyCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', alignment: 'left', width: '20%', filterMode: TableColumnFilterMode.Input },
      { field: 'variantCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'name', alignment: 'left', width: '30%', filterMode: TableColumnFilterMode.Input },
      { field: 'chapter', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'section', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'subject', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'sheet', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'marks', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'functionCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'itemNumber', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'itemType', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'fLocType', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input }, // not in BireItemDTO
      { field: 'itemFamilyCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'configurableArticle', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input }
    ];

    this.itemTableData = {
      componentId: 'DialogItem',
      tableCols: itemTableCols,
      tableRows: this.engineeringDataExchangeSearchService.findBireItemsBySearchCriteria(
        this.familyCode,
        this.structureType,
        this.variantCode
      ),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  // To handle export data panel visibility
  private showExportXMLData() {
    if (this.type && this.format && this.data) {
      this.showExportPanel = true;
      this.exportPanel = this.data === this.IPC ? '0' : this.data === this.MAINTENANCE ? '1' : '2';
    } else {
      this.showExportPanel = false;
    }
  }

  /**************
   * Items dialog
   **************/

  public onSelectedItem(item: BireItemDTO): void {
    if (item) {
      this.ipcExportData.chapter = item.chapter;
      this.ipcExportData.section = item.section;
      this.ipcExportData.subject = item.subject;
      this.ipcExportData.sheet = item.sheet;
      this.ipcExportData.mark = item.marks;
    }
    this.ataData.forEach((ata) => {
      if (
        ata.bireItemDTO.chapter === item.chapter &&
        ata.bireItemDTO.section === item.section &&
        ata.bireItemDTO.subject === item.subject &&
        ata.bireItemDTO.sheet === item.sheet &&
        ata.bireItemDTO.marks === item.marks
      ) {
        this.selectedATACode = ata.labelValueDTO.label;
      }
    });
  }
}
