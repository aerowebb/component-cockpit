import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { AssetInputDto } from '../../../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../../../shared/types/api-types/bido-notification-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { FileUtils } from '../../../../../../shared/utils/file-utils';

import { ReportDialogFormService } from './report-dialog.service';

interface DataRow {
  id?: string;
  fileName?: string;
  fileDesc?: string;
  fileFormat?: string;
}

@Component({
  selector: 'aw-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss']
})
export class ReportDialogComponent extends GenericComponent implements OnInit {
  @Input()
  public showReport: boolean;
  @Input()
  public isAircraft: boolean;
  @Input()
  public isEngine: boolean;
  @Input()
  public showList: boolean;
  @Input()
  public data: BidoEquipmentDTO;
  @Input()
  public bidoEquipmentDTOId: BidoEquipmentDTOId;
  @Input()
  public bidoNotificationData: BidoNotificationDTO[];
  @Output()
  public onValidate: EventEmitter<Event>;
  public reportTableDataSource: TableDataSource<DataRow>;
  public _obj: DataRow[];
  public isLoading: boolean;

  public constructor(
    private readonly messageService: MessageService,
    private readonly reportDialogFormService: ReportDialogFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);
    this.initReportTableDataSource();
    this.onValidate = new EventEmitter<Event>();
    this._obj = [];
    this.isLoading = false;
  }

  public ngOnInit() {
    if (!this.isEngine && !this.isAircraft) {
      this._obj = [
        {
          fileName: this.translateService.instant(this.getTranslateKey('logcard')),
          fileDesc: 'Edit Logcard which indetifies the equipment',
          fileFormat: 'PDF',
          id: 'logcard'
        }
      ];
    }
    if (this.isEngine && !this.isAircraft) {
      this._obj = [
        {
          fileName: this.translateService.instant(this.getTranslateKey('logcard')),
          fileDesc: 'Edit a Logcard which indetifies the engine',
          fileFormat: 'PDF',
          id: 'logcard'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('logbook')),
          fileDesc: 'Edit the engine Logbook',
          fileFormat: 'PDF',
          id: 'logbook'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('llpPartStatus')),
          fileDesc: 'Edit the report of the engine parts life limits',
          fileFormat: 'EXCEL',
          id: 'llp'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('adsbComplianceStatus')),
          fileDesc: 'Edit the report of the AD and SB compliance status on the engine and its major equipments',
          fileFormat: 'EXCEL',
          id: 'adsb'
        }
      ];
    }
    if (!this.isEngine && this.isAircraft) {
      this._obj = [
        {
          fileName: this.translateService.instant(this.getTranslateKey('logcard')),
          fileDesc: 'Edit a Logcard which indetifies the aircraft',
          fileFormat: 'PDF',
          id: 'logcard'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('logbook')),
          fileDesc: 'Edit the aircraft Logbook',
          fileFormat: 'PDF',
          id: 'logbook'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('defectsReport')),
          fileDesc: 'Edit the report of all the aircraft defects ',
          fileFormat: 'PDF',
          id: 'defect'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('llpPartStatus')),
          fileDesc: 'Edit the report of the aircraft parts life limits',
          fileFormat: 'EXCEL',
          id: 'llp'
        },
        {
          fileName: this.translateService.instant(this.getTranslateKey('adsbComplianceStatus')),
          fileDesc: 'Edit the report of the AD and SB compliance status on the aircraft and its major equipments',
          fileFormat: 'EXCEL',
          id: 'adsb'
        }
      ];
    }
    this.reportTableDataSource.setData(this._obj);
  }

  private initReportTableDataSource(): void {
    this.reportTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'fileName',
          translateKey: this.getTranslateKey('fileName'),
          width: '60%'
        },
        {
          field: 'fileFormat',
          translateKey: this.getTranslateKey('fileFormat'),
          width: '20%'
        },
        {
          field: 'action',
          translateKey: this.getTranslateKey('action'),
          alignment: ColumnAlignment.CENTER,
          width: '20%'
        }
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return 'ReportDialogComponent';
  }

  public generateReport(data) {
    this.isLoading = true;
    if (data === 'logcard') {
      this.reportDialogFormService.generateLogCard(this.data).subscribe(
        (result) => {
          if (!!result.fileContent && result.fileName) {
            this.downLoadFiles(result.fileContent, result.fileName);
          }
        },
        (err) => {
          this.isLoading = false;
          this.messageService.showErrorMessage(err.error.errorDetail);
        }
      );
    }
    if (data === 'logbook') {
      if (this.isEngine) {
        const equipmentId: BidoEquipmentDTOId = this.bidoEquipmentDTOId;
        const assetId: AssetInputDto = {
          bidoEquipmentDTOId: equipmentId,
          assetfunction: AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
        };
        this.reportDialogFormService.generateLogBook(assetId).subscribe(
          (result) => {
            if (!!result.fileContent && result.fileName) {
              this.downLoadFiles(result.fileContent, result.fileName);
            }
          },
          (err) => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
      if (this.isAircraft) {
        const equipmentId: BidoEquipmentDTOId = this.bidoEquipmentDTOId;
        const assetId: AssetInputDto = {
          bidoEquipmentDTOId: equipmentId,
          assetfunction: AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
        };
        this.reportDialogFormService.generateLogBook(assetId).subscribe(
          (result) => {
            if (!!result.fileContent && result.fileName) {
              this.downLoadFiles(result.fileContent, result.fileName);
            }
          },
          (err) => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
    if (data === 'llp') {
      if (this.data.equipmentCode) {
        this.reportDialogFormService.generateLlp(this.data.equipmentCode).subscribe(
          (result) => {
            if (!!result.fileContent && result.fileName) {
              this.downLoadFiles(result.fileContent, result.fileName);
            }
          },
          (err) => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
    if (data === 'adsb') {
      if (this.data.equipmentCode) {
        this.reportDialogFormService.generateAsb(this.data.equipmentCode).subscribe(
          (result) => {
            if (!!result.fileContent && result.fileName) {
              this.downLoadFiles(result.fileContent, result.fileName);
            }
          },
          (err) => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
    if (data === 'defect') {
      if (this.data.equipmentCode) {
        this.reportDialogFormService.generateDefectCard(this.bidoNotificationData).subscribe(
          (result) => {
            if (!!result.fileContent && result.fileName) {
              this.downLoadFiles(result.fileContent, result.fileName);
            }
          },
          (err) => {
            this.isLoading = false;
            this.messageService.showErrorMessage(err.error.errorDetail);
          }
        );
      }
    }
    this.onValidate.emit();
  }
  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
    this.isLoading = false;
  }
}
