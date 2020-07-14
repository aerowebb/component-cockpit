import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';
import { finalize } from 'rxjs/operators';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { RefreshArchivedImportReportInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/refresh-archived-import-report-input.interface';
import { RemoveDataInput } from '../../../../shared/types/api-input-types/engineering-data-exchange/remove-data-input.interface';
import { BireReportDTOId } from '../../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../../shared/types/api-types/bire-report-dto.interface';
import { ImportStatusDto } from '../../../../shared/types/api-types/import-status-dto-interface';
import { ImportTaskDTO } from '../../../../shared/types/api-types/import-task-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';

import { XmlDataLoadingFormService } from './xml-data-loading-form.service';

@Component({
  selector: 'aw-xml-data-loading-form',
  styleUrls: ['./xml-data-loading-form.component.scss'],
  templateUrl: './xml-data-loading-form.component.html'
})
export class XmlDataLoadingFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAX_RETRY: number = 3;
  private retryCounter: number = 0;
  public ipcData: string = '0';
  public engineManualData: string = '1';

  // Button
  public dataList: LabelValue<string>[];
  public selectedData: string;
  public displayEnginePanel: boolean;
  public wbmRevNum: string | undefined;
  public planCodeCharged?: string;

  // Table
  public reports: BireReportDTO[];
  public reportTableCols: TableColumn[];
  public selectedReports: BireReportDTO[];

  // Import
  public fileName: string | undefined;
  public importLoader: boolean;
  public importRunning: boolean;
  public importIpcSatuses: ImportStatusDto[];
  public importTasksSatuses: ImportStatusDto[];
  public currentFile: File;
  public timeBeweenProgressBarUpdate: number = 2000;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly xmlDataLoadingFormService: XmlDataLoadingFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.COL_XML_DATA_LOADING_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.init();
  }

  private init() {
    // Setting data select buttons
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
    this.selectedData = this.ipcData;

    // Setting table columns
    this.reportTableCols = [
      { field: 'familyCode' },
      { field: 'reportCode' },
      { field: 'reportName' },
      { field: 'author' },
      { field: 'statusDate', alignment: 'center' }
    ];
    this.selectedReports = [];

    this.updateStatusBar(false);
  }

  /**********************************
   * On Change Data select button
   **********************************/
  public checkDataControl() {
    this.displayEnginePanel = this.selectedData === this.ipcData ? false : true;
    this.updateStatusBar(false);
  }

  /**********************************
   * Import Functionality
   **********************************/
  public import() {
    if (this.validate()) {
      this.importLoader = true;
      this.importRunning = true;
      const importTaskDto: ImportTaskDTO = { wbRevNo: this.wbmRevNum };
      const observable = !this.displayEnginePanel
        ? this.xmlDataLoadingFormService.importIPC(this.currentFile)
        : this.xmlDataLoadingFormService.importTask(this.currentFile, importTaskDto as ImportTaskDTO);

      observable
        .pipe(
          finalize(() => {
            this.updateStatusBar(true);
          })
        )
        .subscribe();
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('wbmRevNotFilled'));
    }
  }

  private validate() {
    return !this.displayEnginePanel || (this.displayEnginePanel && !!this.wbmRevNum);
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    this.currentFile = event.files[0];
    this.fileName = this.currentFile.name;
    fileUploader.clear();
  }
  public updateStatusBar(reloadWhenEmpty: boolean): void {
    const observable = !this.displayEnginePanel
      ? this.xmlDataLoadingFormService.getImportIpcStatus()
      : this.xmlDataLoadingFormService.getImportTaskStatus();

    observable.subscribe((results) => {
      this.importIpcSatuses = [];
      this.importTasksSatuses = [];
      if (!!results) {
        results.forEach((result) => {
          if (!this.displayEnginePanel) {
            this.importIpcSatuses.push(result);
          } else {
            this.importTasksSatuses.push(result);
            if (!!result.planCodeCharged) {
              this.planCodeCharged = result.planCodeCharged;
            }
          }
        });

        setTimeout(() => {
          this.updateStatusBar(false);
        }, this.timeBeweenProgressBarUpdate);
      } else if (reloadWhenEmpty) {
        this.retryCounter++;
        if (this.retryCounter < XmlDataLoadingFormComponent.MAX_RETRY) {
          setTimeout(() => {
            this.updateStatusBar(reloadWhenEmpty);
          }, this.timeBeweenProgressBarUpdate);
        } else {
          this.pageDefaults();
          this.messageService.showErrorMessage(this.getTranslateKey('errorOccurred'));
        }
      } else {
        this.pageDefaults();
      }
    });
  }

  private pageDefaults(): void {
    this.importLoader = false;
    this.importRunning = false;
    this.loadImportReportList();
  }

  public loadImportReportList(): void {
    this.reports = [];
    const loadImportReportsInput: RefreshArchivedImportReportInput = {
      reportCode: !this.displayEnginePanel ? 'IPD_IMPORT_REPORT' : 'TASK_IMPORT_REPORT'
    };
    this.xmlDataLoadingFormService.fetchXmlDataLoadingReport(loadImportReportsInput).subscribe(
      (results) => {
        this.reports = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadImportReports'));
      }
    );
  }

  /**********************************
   * On clicking report name
   **********************************/
  public openReportDetail(object: BireReportDTO): void {
    if (!!object.reportId) {
      const bireReportDTOId: BireReportDTOId = {
        reportId: object.reportId
      };
      this.xmlDataLoadingFormService.openImportReportContent(bireReportDTOId).subscribe((result) => {
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
          this.xmlDataLoadingFormService.removeDataReportsByReportId(removeDataInput).subscribe(
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

  private openMaintenanceProgram(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_CHANGE_RECORD_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public changeRecord(): void {
    if (!!this.planCodeCharged) {
      this.openMaintenanceProgram(this.planCodeCharged, ComponentOpenMode.Read);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('wbmRevNotFilled'));
    }
  }
}
