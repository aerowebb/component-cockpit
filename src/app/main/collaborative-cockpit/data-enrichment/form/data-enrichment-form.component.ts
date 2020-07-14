import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as FileSaver from 'file-saver';
import { FileUpload } from 'primeng/fileupload';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { RefreshArchivedImportReportInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { DataEnrichmentExportDTO } from '../../../../shared/types/api-input-types/mhiael/data-enrichement-export-dto.interface';
import { DataEnrichmentImportDTO } from '../../../../shared/types/api-input-types/mhiael/data-enrichement-import-dto.interface';
import { FindFamilyVariantInput } from '../../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { GetFamilyVariantOutputDTO } from '../../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireReportDTOId } from '../../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../../shared/types/api-types/bire-report-dto.interface';
import { ImportStatusDto } from '../../../../shared/types/api-types/import-status-dto-interface';
import { ImportTaskDTO } from '../../../../shared/types/api-types/import-task-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BireFamilyVariantUtil } from '../../../../shared/utils/bire-family-variant-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';

import { DataEnrichmentFormStandardService } from './data-enrichment-form-standard.service';
import { DataEnrichmentFormService } from './data-enrichment-form.service';

@Component({
  selector: 'aw-data-enrichment-form',
  styleUrls: ['./data-enrichment-form.component.scss'],
  templateUrl: './data-enrichment-form.component.html'
})
export class DataEnrichmentFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly export: string = '0';
  public readonly loading: string = '1';

  public readonly ipcData: string = '0';
  public readonly engineManualData: string = '1';
  public readonly tlm: string = '2';
  public readonly sbAd = '3';

  public dataList: LabelValue<string>[];
  public typeList: LabelValue<string>[];
  public familyList: LabelValue<string>[];
  public variantList: LabelValue<string>[];
  public objectStatusMap: Map<string, string>;
  public functionalStatusMap: Map<string, string>;

  public selectedFamily: string | undefined;
  public selectedVariant: string | undefined;
  public selectedFamilyCode: string | undefined;
  public selectedVariantCode: string | undefined;
  public selectedFamilyVariantCode: string | undefined;
  public selectedType: string;
  public selectedData: string;

  public displayLoadingPanel: boolean;
  public displayIPCPanel: boolean;
  public displayEnginePanel: boolean;
  public displayTLMPanel: boolean;
  public displaySbAdPanel: boolean;

  // Table
  public reports: BireReportDTO[];
  public reportTableCols: TableColumn[];
  public selectedReports: BireReportDTO[];

  // Import
  public currentFile: File;
  public fileName: string | undefined;
  public importLoader: boolean;
  public timeBeweenProgressBarUpdate: number = 2000;
  public importRunning: boolean;
  public importIpcEnrichmentSatuses: ImportStatusDto[];
  public importSBADEnrichmentSatuses: ImportStatusDto[];
  public importEngineManualEnrichmentSatuses: ImportStatusDto[];
  public importTLMEnrichmentSatuses: ImportStatusDto[];
  public currentEnrichmentSatuses: ImportStatusDto[];
  public nbStatusCall: number = 0;
  public maxEmptyStatusCall: number = 5;

  // Engine Module
  public name: string | undefined;
  public status: string | undefined;
  public revNum: string | undefined;
  public revDate: Date | undefined;
  public wbmRevNumList: LabelValue<string>[];
  public engineManuals: BireMaintenancePlanDTO[];
  public selectedWbm: string | undefined;

  public exportLoader: boolean;

  public getFamilyVariantOutputDTO: GetFamilyVariantOutputDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    public readonly sessionService: SessionService,
    private readonly dataEnrichmentFormService: DataEnrichmentFormService,
    private readonly dataEnrichmentFormStandardService: DataEnrichmentFormStandardService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.COL_DATA_ENRICHMENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  private init() {
    this.typeList = [
      {
        label: this.translateService.instant(this.getTranslateKey('export')),
        value: this.export
      },
      {
        label: this.translateService.instant(this.getTranslateKey('loading')),
        value: this.loading
      }
    ];
    this.selectedType = this.export;

    // Setting data select buttons
    this.dataList = [
      {
        label: this.translateService.instant(this.getTranslateKey('ipc')),
        value: this.ipcData
      },
      {
        label: this.translateService.instant(this.getTranslateKey('engineManual')),
        value: this.engineManualData
      },
      {
        label: this.translateService.instant(this.getTranslateKey('sbAd')),
        value: this.sbAd
      }
    ];
    this.selectedData = this.ipcData;

    // Setting table columns
    this.reportTableCols = [
      { field: 'familyCode' },
      { field: 'reportCode' },
      { field: 'reportName' },
      { field: 'author' },
      { field: 'statusDate' }
    ];
    this.selectedReports = [];
    this.status = undefined;
    this.functionalStatusMap = new Map<string, string>();
    this.objectStatusMap = new Map<string, string>();
    this.loadStatus();
    this.loadFamilyVariantDropdowns();
    this.loadMaintenancePlanDropDowns();
    this.checkImport();
  }

  private loadMaintenancePlanDropDowns(): void {
    this.dataEnrichmentFormService.findBireMaintenancePlans().subscribe(
      (results) => {
        const list: LabelValue<string>[] = [];
        results.forEach((mp) => {
          if (mp.planRevisionNumber && mp.planCode) {
            list.push({ label: mp.planCode, value: mp.planCode });
          }
        });
        this.wbmRevNumList = list;
        this.selectedWbm = list[0].value;
        this.engineManuals = results;
        if (this.selectedData === this.engineManualData) {
          this.getEngineManualComponents();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetMaintenancePlanList'));
      }
    );
  }

  private loadFamilyVariantDropdowns(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      familyCode: '',
      familyName: '',
      structureType: ''
    };

    this.dataEnrichmentFormStandardService.getBireFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        const list: LabelValue<string>[] = [];
        results.forEach((variantElement) => {
          list.push(variantElement.familyLabelValueDTO);
        });
        this.getFamilyVariantOutputDTO = results;
        this.familyList = list;
        this.selectedFamily = list[0].value;
        this.loadVariantsForSelectedFamily();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariantList'));
      }
    );
  }

  private loadVariantsForSelectedFamily(): void {
    this.variantList = [];
    const list: LabelValue<string>[] = [];
    this.getFamilyVariantOutputDTO.forEach((result) => {
      if (result.familyLabelValueDTO.label === this.selectedFamily) {
        result.variantLabelValueDTO.forEach((object) => {
          const element: LabelValue<string> = {
            label: `${object.variantCode}-${object.structureType}-${object.variantName}`,
            value: object.variantLabelValue.value
          };

          list.push(element);
        });
        this.variantList = list;
        this.selectedVariant = list[0].value;
        this.changeVariantType();
      }
    });
  }

  // Change event of family dropdown
  public changeFamilyType() {
    this.selectedVariant = undefined;
    this.loadVariantsForSelectedFamily();
  }

  public changeVariantType() {
    this.getFamilyVariantComponents();
  }

  /**********************************
   * On Change Type select button
   **********************************/
  public checkTypeControl() {
    this.displayLoadingPanel = this.selectedType === this.loading;
    this.dataList = [
      {
        label: this.translateService.instant(this.getTranslateKey('ipc')),
        value: this.ipcData
      },
      {
        label: this.translateService.instant(this.getTranslateKey('engineManual')),
        value: this.engineManualData
      }
    ];
    if (this.displayLoadingPanel) {
      this.dataList.push({
        label: this.translateService.instant(this.getTranslateKey('tlm')),
        value: this.tlm
      });
    } else if (this.selectedData === this.tlm) {
      this.selectedData = this.ipcData;
    }
    this.dataList.push({
      label: this.translateService.instant(this.getTranslateKey('sbAd')),
      value: this.sbAd
    });
  }

  public resetLoadingPanel() {
    switch (this.selectedData) {
      case this.ipcData: {
        this.selectedFamily = this.familyList[0].value;
        this.selectedVariant = this.variantList[0].value;
        this.getFamilyVariantComponents();
        break;
      }
      case this.engineManualData: {
        this.selectedWbm = this.wbmRevNumList[0].value;
        this.getEngineManualComponents();
        break;
      }
      case this.sbAd: {
        this.selectedFamily = this.familyList[0].value;
        this.selectedVariant = this.variantList[0].value;
        this.getFamilyVariantComponents();
        break;
      }
      case this.tlm: {
        this.selectedFamily = this.familyList[0].value;
        this.selectedVariant = this.variantList[0].value;
        this.getFamilyVariantComponents();
        break;
      }
      default: {
        this.selectedFamily = undefined;
        this.selectedVariant = undefined;
        this.selectedWbm = undefined;
        this.revDate = undefined;
        this.revNum = undefined;
        this.name = undefined;
        break;
      }
    }
    if (this.displayLoadingPanel) {
      this.loadImportReportList();
      this.updateStatusBar(false, this.selectedData);
    } else {
      this.checkImport();
    }
  }

  /**********************************
   * Import Functionality
   **********************************/
  public import(): void {
    if (this.validate()) {
      this.importLoader = true;
      this.importRunning = true;
      const importDto: DataEnrichmentImportDTO = {
        familyCode: this.selectedFamilyCode,
        variantCode: this.selectedVariantCode,
        familyVariantCode: this.selectedFamilyVariantCode
      };
      const importTaskDto: ImportTaskDTO = {
        wbRevNo: this.selectedWbm
      };
      switch (this.selectedData) {
        case this.ipcData: {
          this.dataEnrichmentFormService
            .importIpc(this.currentFile, importDto as DataEnrichmentImportDTO)
            .pipe(
              finalize(() => {
                this.updateStatusBar(true, this.ipcData);
              })
            )
            .subscribe();
          break;
        }
        case this.sbAd: {
          this.dataEnrichmentFormService
            .importSBAD(this.currentFile, importDto as DataEnrichmentImportDTO)
            .pipe(
              finalize(() => {
                this.updateStatusBar(true, this.sbAd);
              })
            )
            .subscribe();
          break;
        }
        case this.engineManualData: {
          this.dataEnrichmentFormService
            .importTask(this.currentFile, importTaskDto as ImportTaskDTO)
            .pipe(
              finalize(() => {
                this.updateStatusBar(true, this.engineManualData);
              })
            )
            .subscribe();
          break;
        }
        case this.tlm: {
          this.dataEnrichmentFormService
            .importTLM(this.currentFile, importDto as DataEnrichmentImportDTO)
            .pipe(
              finalize(() => {
                this.updateStatusBar(true, this.tlm);
              })
            )
            .subscribe();
          break;
        }
        default: {
          break;
        }
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('wbmRevNotFilled'));
    }
  }

  private validate(): boolean {
    // TODO

    return true;
  }

  public getImportHeader(): string {
    let header: string;

    switch (this.selectedData) {
      case this.ipcData: {
        header = this.translateService.instant(this.getTranslateKey('importIPC'));
        break;
      }
      case this.engineManualData: {
        header = this.translateService.instant(this.getTranslateKey('importEngineManual'));
        break;
      }
      case this.tlm: {
        header = this.translateService.instant(this.getTranslateKey('importTLM'));
        break;
      }
      case this.sbAd: {
        header = this.translateService.instant(this.getTranslateKey('importSbAd'));
        break;
      }
      default: {
        header = this.translateService.instant(this.getTranslateKey('importIPC'));
        break;
      }
    }

    return header;
  }

  public getExportHeader(): string {
    let header: string;

    switch (this.selectedData) {
      case this.ipcData: {
        header = this.translateService.instant(this.getTranslateKey('exportIPC'));
        break;
      }
      case this.engineManualData: {
        header = this.translateService.instant(this.getTranslateKey('exportEngineManual'));
        break;
      }
      case this.tlm: {
        header = this.translateService.instant(this.getTranslateKey('exportTLM'));
        break;
      }
      case this.sbAd: {
        header = this.translateService.instant(this.getTranslateKey('exportSbAd'));
        break;
      }
      default: {
        header = this.translateService.instant(this.getTranslateKey('exportIPC'));
        break;
      }
    }

    return header;
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    this.currentFile = event.files[0];
    this.fileName = this.currentFile.name;
    fileUploader.clear();
  }

  /**********************************
   * On clicking report name
   **********************************/
  public openReportDetail(object: BireReportDTO): void {
    if (!!object.reportId) {
      const bireReportDTOId: BireReportDTOId = {
        reportId: object.reportId
      };
      this.dataEnrichmentFormService.openImportReportContent(bireReportDTOId).subscribe((result) => {
        if (!!object.reportName && object.reportName.includes('.txt')) {
          this.downLoadFiles(result, object.reportName);
        } else {
          this.downLoadFiles(result, `${object.reportName}.txt`);
        }
      });
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  public downLoadZipFiles(resp: HttpResponse<Blob>): void {
    const contentDisposition = resp.headers.get('content-disposition');
    if (!!resp.body && !!contentDisposition) {
      const filename = contentDisposition
        .split(';')[1]
        .split('filename')[1]
        .split('=')[1]
        .trim();
      FileSaver.saveAs(resp.body, filename);
    }
  }

  public localDownloadFile(file: Uint8Array | undefined, fileName: string | undefined): void {
    if (!!file && !!fileName) {
      const byteCharacters = atob(file.toString());
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      FileSaver.saveAs(new Blob([new Uint8Array(byteNumbers)]), fileName);
    }
  }

  // Delete
  public deleteReports() {
    if (this.selectedReports !== []) {
      const partialMessageKey =
        this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports: BireReportDTOId[] = [];

      this.selectedReports.forEach((report) => {
        if (report && report.reportId) {
          const reportId: BireReportDTOId = {
            reportId: report.reportId
          };
          reports.push(reportId);
        }
      });
      const removeDataInput: RemoveDataInput = {
        bireReportDTOId: reports,
        data: ''
      };
      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.dataEnrichmentFormService.removeDataReportsByReportId(removeDataInput).subscribe(
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
    }
  }

  public exportDataEnrichment(): void {
    this.getFamilyVariantComponents();
    this.getEngineManualComponents();
    this.exportLoader = true;
    const exportData: DataEnrichmentExportDTO =
      this.selectedData === this.engineManualData
        ? {
            wbName: this.name,
            wbRevisionNumber: this.revNum
          }
        : {
            familyCode: this.selectedFamilyCode,
            variantCode: this.selectedVariantCode
          };
    switch (this.selectedData) {
      case this.ipcData: {
        this.dataEnrichmentFormService.exportIpc(exportData).subscribe((result) => {
          this.downLoadZipFiles(result);
          this.exportLoader = false;
        });
        break;
      }
      case this.engineManualData: {
        this.dataEnrichmentFormService.exportTask(exportData).subscribe((result) => {
          this.exportLoader = false;
          this.downLoadZipFiles(result);
        });
        break;
      }
      case this.sbAd: {
        this.dataEnrichmentFormService.exportSbAd(exportData).subscribe((result) => {
          this.downLoadZipFiles(result);
          this.exportLoader = false;
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  private getEngineManualComponents(): void {
    if (this.selectedWbm) {
      this.wbmRevNumList.forEach((wbRevNum) => {
        if (wbRevNum.value === this.selectedWbm) {
          this.engineManuals.forEach((em) => {
            if (em.planCode === wbRevNum.value) {
              this.name = em.planName;
              this.revNum = em.planRevisionNumber;
              this.status = em.statusState ? this.functionalStatusMap.get(em.statusState) : undefined;
            }
          });
        }
      });
    }
  }

  private getFamilyVariantComponents(): void {
    if (this.selectedVariant !== '' && !!this.selectedVariant) {
      this.variantList.forEach((variant) => {
        if (variant.value === this.selectedVariant) {
          this.getFamilyVariantOutputDTO.forEach((familyObject) => {
            if (familyObject.familyLabelValueDTO.label === this.selectedFamily) {
              familyObject.variantLabelValueDTO.forEach((variantObject) => {
                if (variantObject.variantLabelValue.label === variant.value) {
                  this.selectedFamilyCode = variantObject.familyCode;
                  this.selectedVariantCode = variantObject.variantCode;
                  this.selectedFamilyVariantCode = BireFamilyVariantUtil.buildFamilyVariantCodeWithStructureType(
                    variantObject.familyCode,
                    variantObject.structureType,
                    variantObject.variantCode
                  );
                  this.revNum = undefined;
                  this.revDate = undefined;
                  this.status = variantObject.statusState
                    ? this.objectStatusMap.get(variantObject.statusState)
                    : undefined;
                  this.revNum = variantObject.variantRevisionNumber;
                  if (variantObject.variantRevisionDate) {
                    this.revDate = new Date(variantObject.variantRevisionDate);
                  }
                }
              });
            }
          });
        }
      });
    } else {
      this.selectedFamilyCode = undefined;
      this.selectedVariantCode = undefined;
      this.selectedFamilyVariantCode = undefined;
    }
  }

  private loadStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe(
      (results) => {
        results.forEach((element) => {
          this.functionalStatusMap.set(element.value, element.label);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetStatuses'));
      }
    );
    this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP).subscribe(
      (results) => {
        results.forEach((element) => {
          this.objectStatusMap.set(element.value, element.label);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetStatuses'));
      }
    );
  }

  public loadImportReportList(): void {
    this.reports = [];
    const reportCode: string | undefined = this.getImportReportCode();
    if (!!reportCode) {
      const loadImportReportsInput: RefreshArchivedImportReportInput = {
        reportCode
      };
      this.dataEnrichmentFormService.fetchXmlDataLoadingReport(loadImportReportsInput).subscribe(
        (results) => {
          this.reports = results;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadImportReports'));
        }
      );
    }
  }

  private checkImport(): void {
    this.checkImportRunning(this.dataEnrichmentFormService.getImportIpcEnrichmentStatus(), this.ipcData);
    this.checkImportRunning(this.dataEnrichmentFormService.getImportSBADEnrichmentStatus(), this.sbAd);
    this.checkImportRunning(this.dataEnrichmentFormService.getImportTaskEnrichmentStatus(), this.engineManualData);
    this.checkImportRunning(this.dataEnrichmentFormService.getImportTLMEnrichmentStatus(), this.tlm);
  }

  public checkImportRunning(observable: Observable<ImportStatusDto[]>, code: string): void {
    observable.subscribe((results) => {
      if (!!results) {
        this.selectedType = this.loading;
        this.selectedData = code;
        this.checkTypeControl();
        this.updateStatusBar(false, code);
        this.fileName = results[0].fileName;
        this.importRunning = true;
      }
    });
  }

  public updateStatusBar(reloadWhenEmpty: boolean, data: String): void {
    if (!this.displayLoadingPanel) {
      return;
    }
    const observable = this.getUpdateStatusBarService(data);
    if (!!observable) {
      observable.subscribe((results) => {
        this.importLoader = false;
        this.importRunning = true;
        this.importIpcEnrichmentSatuses = [];
        this.importSBADEnrichmentSatuses = [];
        this.importEngineManualEnrichmentSatuses = [];
        this.importTLMEnrichmentSatuses = [];
        this.currentEnrichmentSatuses = [];
        if (!!results) {
          results.forEach((result) => {
            switch (data) {
              case this.ipcData: {
                this.importIpcEnrichmentSatuses.push(result);
                this.currentEnrichmentSatuses = this.importIpcEnrichmentSatuses;
                break;
              }
              case this.engineManualData: {
                this.importEngineManualEnrichmentSatuses.push(result);
                this.currentEnrichmentSatuses = this.importEngineManualEnrichmentSatuses;
                this.selectedWbm = result.planCodeCharged;
                this.getEngineManualComponents();
                break;
              }
              case this.sbAd: {
                this.importSBADEnrichmentSatuses.push(result);
                this.currentEnrichmentSatuses = this.importSBADEnrichmentSatuses;
                break;
              }
              case this.tlm: {
                this.importTLMEnrichmentSatuses.push(result);
                this.currentEnrichmentSatuses = this.importTLMEnrichmentSatuses;
                break;
              }
              default: {
                break;
              }
            }
          });
          setTimeout(() => {
            this.nbStatusCall = 0;
            this.updateStatusBar(false, data);
          }, this.timeBeweenProgressBarUpdate);
        } else if (reloadWhenEmpty && this.nbStatusCall < this.maxEmptyStatusCall) {
          setTimeout(() => {
            this.nbStatusCall++;
            this.updateStatusBar(reloadWhenEmpty, data);
          }, this.timeBeweenProgressBarUpdate);
        } else {
          this.loadImportReportList();
          this.importRunning = false;
          this.nbStatusCall = 0;
        }
      });
    }
  }

  private getUpdateStatusBarService(data: String): Observable<ImportStatusDto[]> | undefined {
    switch (data) {
      case this.ipcData: {
        return this.dataEnrichmentFormService.getImportIpcEnrichmentStatus();
      }
      case this.engineManualData: {
        return this.dataEnrichmentFormService.getImportTaskEnrichmentStatus();
      }
      case this.sbAd: {
        return this.dataEnrichmentFormService.getImportSBADEnrichmentStatus();
      }
      case this.tlm: {
        return this.dataEnrichmentFormService.getImportTLMEnrichmentStatus();
      }
      default: {
        return undefined;
      }
    }
  }

  private getImportReportCode(): string | undefined {
    if (this.isIPCImport()) {
      return 'IPC_IMPORT_REPORT';
    } else if (this.isSBADImport()) {
      return 'SB_AD_IMPORT_REPORT';
    } else if (this.isEngineManualImport()) {
      return 'TASK_IMPORT_XLS_REPORT';
    } else if (this.isTLMImport()) {
      return 'TLM_IMPORT_XLS_REPORT';
    } else {
      return undefined;
    }
  }

  private isIPCImport(): boolean {
    return this.displayLoadingPanel && this.selectedData === this.ipcData;
  }

  private isSBADImport(): boolean {
    return this.displayLoadingPanel && this.selectedData === this.sbAd;
  }

  private isTLMImport(): boolean {
    return this.displayLoadingPanel && this.selectedData === this.tlm;
  }

  private isEngineManualImport(): boolean {
    return this.displayLoadingPanel && this.selectedData === this.engineManualData;
  }
}
