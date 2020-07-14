import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../../../shared/utils/file-utils';

import { SessionService } from './../../../../../../shared/services/session.service';
import { BidmProjectDTO } from './../../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmProjectReportDtoId } from './../../../../../../shared/types/api-types/bidm-project-report-dto-id.interface';
import { WpReportDialogFormService } from './wp-report-dialog.service';

interface DataRow {
  id?: string;
  fileName?: string;
  fileDesc?: string;
  fileFormat?: string;
}

@Component({
  selector: 'aw-wp-report-dialog',
  templateUrl: './wp-report-dialog.component.html',
  styleUrls: ['./wp-report-dialog.component.scss']
})
export class WpReportDialogComponent extends GenericComponent implements OnInit {
  @Input() public workPackage: BidmProjectDTO;
  @Input() public isAircraft: boolean;
  @Output() public onValidate: EventEmitter<Event>;

  public resultsTableCols: TableColumn[];
  public resultsTable: DataRow[];

  public showGenerateSpinner: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly reportDialogFormService: WpReportDialogFormService,
    private readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write);
    this.resultsTableCols = [
      { field: 'fileName', width: '60%', alignment: 'left' },
      { field: 'fileFormat', width: '20%', alignment: 'left' },
      { field: 'action', width: '20%', alignment: 'center' }
    ];
    this.resultsTable = [];
    this.onValidate = new EventEmitter<Event>();
  }

  public ngOnInit() {
    this.resultsTable = [
      {
        fileName: 'workPackage',
        fileDesc: 'workPackagePdfDesc',
        fileFormat: 'PDF',
        id: 'workPackagePdf'
      },
      {
        fileName: 'workPackage',
        fileDesc: 'workPackageXmlDesc',
        fileFormat: 'XML',
        id: 'workPackageXml'
      },
      {
        fileName: 'technicalQuotation',
        fileDesc: 'technicalQuotationDesc',
        fileFormat: 'PDF',
        id: 'technicalQuotation'
      },
      {
        fileName: 'findings',
        fileDesc: 'findingsDesc',
        fileFormat: 'PDF',
        id: 'findings'
      },
      {
        fileName: 'ACRS',
        fileDesc: 'ACRSDesc',
        fileFormat: 'PDF',
        id: 'ACRS'
      }
    ];
  }

  public getComponentName(): string {
    return 'WpReportDialogComponent';
  }

  public generateReport(reportName) {
    const onSuccess = (result) => {
      if (!!result.fileContent && result.fileName) {
        this.downLoadFiles(result.fileContent, result.fileName);
      }
    };

    const onError = (err) => {
      this.showGenerateSpinner = false;
      this.onValidate.emit();
      if (!!err && !!err.errorDetail) {
        this.messageService.showErrorMessage(err.errorDetail);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGeneratingDoc'));
      }
    };

    const workPackageReport: BidmProjectReportDtoId = {
      projectId: this.workPackage.projectId || '',
      equipmentCode: this.workPackage.assetCode || '',
      isSpecific: this.sessionService.isSpecificDassault
    };
    this.showGenerateSpinner = true;
    switch (reportName) {
      case 'workPackagePdf':
        this.reportDialogFormService.generateWorkPackageReport(workPackageReport).subscribe(onSuccess, onError);
        break;

      case 'workPackageXml':
        this.reportDialogFormService
          .generateAssetWorkXmlAlternate(this.workPackage.projectId)
          .subscribe(onSuccess, onError);
        break;

      case 'technicalQuotation':
        this.reportDialogFormService
          .exportBidmFindingsReportPdf(this.workPackage.projectId)
          .subscribe(onSuccess, onError);
        break;

      case 'findings':
        this.reportDialogFormService
          .exportBsdeFindingsReportPdf(this.workPackage.projectId)
          .subscribe(onSuccess, onError);
        break;

      case 'ACRS':
        this.reportDialogFormService.generateAPRSCertificate(workPackageReport).subscribe(onSuccess, onError);
        break;

      default:
        break;
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
    this.showGenerateSpinner = false;
    this.onValidate.emit();
  }
}
