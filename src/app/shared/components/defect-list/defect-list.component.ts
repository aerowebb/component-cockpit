import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DefectsDTO } from '../../../main/maintenance/asset-review/form/types/defects-dto.interface';
import { RemainingDefectsDTO } from '../../../main/maintenance/asset-review/form/types/remaining-defects-dto.interface';
import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../constants/bido-attribute-constants';
import { ComponentConstants } from '../../constants/component-constants';
import { ControlConfigConstants } from '../../constants/control-config-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { ConfirmationService } from '../../services/confirmation.service';
import { DateService } from '../../services/date.service';
import { ExportService } from '../../services/export.service';
import { MessageService } from '../../services/message.service';
import { SerializationService } from '../../services/serialization.service';
import { TabService } from '../../services/tab.service';
import { AssociateDefectToAcrsEventInput } from '../../types/api-input-types/airworthiness-management/associate-defect-to-acrs-event-input.interface';
import { ReportDefectElementDTO } from '../../types/api-output-types/airworthiness-management/report-defect-element-dto.interface';
import { BidoNotificationAttributeDTO } from '../../types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTOId } from '../../types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../types/api-types/bido-notification-dto.interface';
import { NotificationTableDto } from '../../types/api-types/notification-table-dto.interface';
import { WorkDataDefect } from '../../types/component-input-types/maintenance/work-data-defect.interface';
import { GenericComponent } from '../../types/generic-component';
import { PageComponentData } from '../../types/page-component-data.interface';
import { TableColumn } from '../../types/table-column.interface';

import { DefectListService } from './defect-list.service';

interface DefectExportDTO {
  defectTitle?: string;
  control?: string;
  remainingText?: string;
  formattedNotificationStartDate?: string;
  defectDetectionContext?: string;
  isCriticalText?: string;
  notificationStatus?: string;
  defectCADescriptionShort?: string;
  notificationLinkedEventCode?: string;
}

interface DefectCountDTO {
  ok: number;
  nok: number;
  warning: number;
}

@Component({
  selector: 'aw-defect-list',
  styleUrls: ['./defect-list.component.scss'],
  templateUrl: './defect-list.component.html'
})
export class DefectListComponent extends GenericComponent {
  public awPropertiesConstants: typeof AWPropertiesConstants;

  @Input()
  public acrsEventCodeList: BidoNotificationDTOId[];

  @Input()
  public statusState: boolean;

  @Input()
  public set equipmentCode(equipmentCode) {
    if (equipmentCode && this._equipmentCode !== equipmentCode) {
      this._equipmentCode = equipmentCode;
      this.refreshDefectTable();
    }
  }
  public get equipmentCode() {
    return this._equipmentCode;
  }

  @Input()
  public set workDataDefect(workDataDefect) {
    if (workDataDefect && this._workDataDefect !== workDataDefect) {
      this._workDataDefect = workDataDefect;
      if (this._workDataDefect.workOrder && this._workDataDefect.workPackage) {
        this.detectionContext =
          `${this._workDataDefect.workPackage.projectNumber}` + `/${this._workDataDefect.workOrder.woCode}`;
      } else if (this._workDataDefect.workPackage) {
        this.detectionContext = `${this._workDataDefect.workPackage.projectNumber}`;
      }
      if (!!this.detectionContext) {
        this.refreshDefectTableWorkData();
      }
    }
  }

  public get workDataDefect() {
    return this._workDataDefect;
  }

  @Input()
  public equipmentName: string;

  @Input()
  public isAddAvailable: boolean;

  @Output()
  public updateDefectSummary: EventEmitter<DefectCountDTO>;

  public _equipmentCode: string = '';
  public _workDataDefect: WorkDataDefect;

  public defectsByDetectionContext: ReportDefectElementDTO[];

  public detectionContext: string;
  public defectsTable: ReportDefectElementDTO[] = [];
  public defectsTableForDisplay: DefectsDTO[];
  public defectsTableBackup: DefectsDTO[];
  public defectsTableCols: TableColumn[];
  public selectedDefects: DefectsDTO[];

  // Defect
  public currentDefect: NotificationTableDto | undefined;
  public defectPopupOpenMode: ComponentOpenMode;
  public showDefectPopup: boolean;
  public assetTitle: string;
  public defaultCategory: string = '5-def';

  // tslint:disable-next-line:no-any
  public remainingTable: any;
  public remainingTableCols: TableColumn[];
  public remainingTableCols2: TableColumn[];

  public defectsToExport: DefectExportDTO[] = [];
  public isDefectTableLoading: boolean = false;
  public defectTableSummary: { ok?: number; warning?: number; nok?: number }[] = [];

  public okString: string;
  public nokString: string | '';
  public warningString: string | '';

  public defectSummaryTableCols = [
    { field: 'ok', alignment: 'center' },
    { field: 'warning', alignment: 'center' },
    { field: 'nok', alignment: 'center' }
  ];

  public showAddACRSEventDialog: boolean | false;

  private defectCounts: DefectCountDTO;

  private defectResultsExportName: string;

  public constructor(
    private readonly messageService: MessageService,
    private readonly exportService: ExportService,
    private readonly dateService: DateService,
    private readonly defectListService: DefectListService,
    private readonly confirmationService: ConfirmationService,
    private readonly translateService: TranslateService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService
  ) {
    super(ComponentOpenMode.Write);

    this.init();
    // tslint:disable-next-line: no-unsafe-any
    this.defectListService.setRefreshButton(this.refreshDefectList.bind(this));

    this.awPropertiesConstants = AWPropertiesConstants;
  }

  public init(): void {
    this.updateDefectSummary = new EventEmitter<DefectCountDTO>();

    this.defectsTableForDisplay = [];
    this.selectedDefects = [];
    this.initDefectSummary();
    this.initDefectsSummaryCount();
    this.setDefectExportFilename();
    this.setTableCols();
  }

  public getComponentName(): string {
    return 'DefectListComponent';
  }

  public refreshDefectTableWorkData(): void {
    this.getDefectsBydetectionContext();
  }

  public getDefectsBydetectionContext(): void {
    this.selectedDefects = [];
    this.defectsTable = [];
    this.defectsTableBackup = [];
    this.defectsTableForDisplay = [];
    this.defectTableSummary = [];
    this.initDefectsSummaryCount();
    this.initDefectSummary();
    this.isDefectTableLoading = true;

    this.defectListService.findDefectsByDetectionContext(this.detectionContext).subscribe((defects) => {
      this.defectsTable = defects;
      this.loadDefectsTable();
    });
  }

  // tslint:disable-next-line:no-any
  public onChangeFilterAlert(event: any): void {
    switch (event.value) {
      case 0:
        this.defectsTableForDisplay = JSON.parse(JSON.stringify(this.defectsTableBackup));
        break;
      case 1:
        this.defectsTableForDisplay = JSON.parse(JSON.stringify(this.defectsTableForDisplay)).filter(
          (defect: { isCriticalText: string }) => defect.isCriticalText === 'true'
        );
        break;
      default:
        break;
    }
  }

  public setTableCols(): void {
    this.defectsTableCols = [
      { field: 'defectTitle', alignment: 'left', width: '10%' },
      { field: 'control', alignment: 'left', width: '7%' },
      { field: 'remainingText', alignment: 'left' },
      { field: 'formattedNotificationStartDate', alignment: 'left', width: '12%' },
      { field: 'defectDetectionContext', alignment: 'left' },
      { field: 'isCriticalText', alignment: 'left', width: '5%' },
      { field: 'notificationStatus', alignment: 'left' },
      { field: 'defectCADescriptionShort', alignment: 'left' },
      { field: 'notificationLinkedEventCode', alignment: 'left' }
    ];
  }

  public enableDefectACRSButton(): boolean {
    let response = true;
    this.selectedDefects.forEach((defect) => {
      response =
        defect.notificationLinkedEventCode === null || defect.notificationLinkedEventCode === undefined
          ? response && true
          : response && false;
    });

    return response;
  }

  public addToAcrsEvent(): void {
    this.showAddACRSEventDialog = true;
  }

  public addDefect() {
    this.currentDefect = {
      bidoNotificationDTO: {
        reportingPeriodStartDate: new Date(),
        bidoNotificationTypeDTO: {}
      }
    };
    this.defectPopupOpenMode = ComponentOpenMode.Create;
    this.showDefectPopup = true;
    this.assetTitle = this.equipmentName;
  }

  public onAddDefect(event: NotificationTableDto): void {
    let isExistingEvent = false;
    event.bidoNotificationDTO.reportingPeriodStartDateStr = this.dateService.dateToString(
      event.bidoNotificationDTO.reportingPeriodStartDate
    );
    if (!!this.defectsTableForDisplay) {
      this.defectsTableForDisplay.forEach((eventDisplayed) => {
        if (
          !!eventDisplayed.bidoNotificationDTO &&
          !!event.bidoNotificationDTO &&
          eventDisplayed.bidoNotificationDTO.typeCode === event.bidoNotificationDTO.typeCode &&
          eventDisplayed.bidoNotificationDTO.reportingDateStr === event.bidoNotificationDTO.reportingPeriodStartDateStr
        ) {
          isExistingEvent = true;
        }
      });
    }
    if (isExistingEvent) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnDefectExists'));
    } else if (this._workDataDefect) {
      event.bidoNotificationDTO.equipmentCode = this._workDataDefect.equipementCode;
      this.defectListService.createBidoNotification(event.bidoNotificationDTO).subscribe((notificationId) => {
        const attribute: BidoNotificationAttributeDTO = {
          notificationCode: notificationId.notificationCode,
          attributeValue: this.detectionContext,
          attributeId: BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT.toString()
        };
        this.defectListService.createBidoNotificationAttribute(attribute).subscribe((attributeId) => {
          this.getDefectsBydetectionContext();
          const timer = 10;
          setTimeout(() => {
            this.openDefectAdd(notificationId.notificationCode);
          }, timer);
        });
      });
    }
  }

  public onSelectedEvent(event: BidoNotificationDTO) {
    const bidoNotificationDTOList: BidoNotificationDTO[] = [];
    this.selectedDefects.forEach((defect) => {
      if (!!defect && !!defect._obj) {
        bidoNotificationDTOList.push(defect._obj.bidoNotificationDTO);
      }
    });

    if (!!event.notificationCode && bidoNotificationDTOList.length > 0) {
      const input: AssociateDefectToAcrsEventInput = {
        eventCode: event.notificationCode,
        bidoNotificationDTOList
      };
      this.defectListService.associateDefectsAcrsEvent(input).subscribe(() => {
        this.refreshDefectTable();
      });
    }
  }

  public toggleDefectsExpand(row: DefectsDTO): void {
    this.remainingTable = [];
    this.remainingTableCols = [
      { field: 'defectName', alignment: 'left' },
      { field: 'defectLastAuthor', alignment: 'left' },
      { field: 'defectCALastAuthor', alignment: 'left' },
      { field: 'deferralLastAuthor', alignment: 'left' }
    ];
    const remainingRow: RemainingDefectsDTO = {};
    const def = this.defectsTable.filter((defect) => defect.defectName === row.defectName);
    remainingRow.defectName = def[0].defectName;
    remainingRow.defectLastAuthor = def[0].defectLastAuthor;
    remainingRow.defectCALastAuthor = def[0].defectCALastAuthor;
    remainingRow.deferralLastAuthor = def[0].deferralLastAuthor;
    this.remainingTable.push(remainingRow);
    row._expand = !row._expand;
  }

  public deleteDfects(): void {
    const confirmMessageKey =
      this.selectedDefects.length > 1 ? 'confirmDeleteSelectedDefects' : 'confirmDeleteSelectedDefect';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const eventIds: BidoNotificationDTOId[] = [];
        this.selectedDefects.map((event) => {
          if (!!event && !!event.bidoNotificationDTO.notificationCode) {
            const dto: BidoNotificationDTOId = {
              notificationCode: event.bidoNotificationDTO.notificationCode
            };

            eventIds.push(dto);
          }
        });

        this.defectListService.removeBidoNotification(eventIds).subscribe((msg: string) => {
          const successMessageKey =
            this.selectedDefects.length > 1 ? 'successOnDeleteDefects' : 'successOnDeleteDefect';
          if (!msg) {
            this.messageService.showSuccessMessage(this.getTranslateKey(successMessageKey));
          } else {
            this.messageService.showWarningMessage(msg);
          }
          this.selectedDefects = [];
          this.refreshDefectTableWorkData();
        });
      }
    });
  }

  public refreshDefectList(): void {
    if (this._workDataDefect) {
      this.refreshDefectTableWorkData();
    } else {
      this.refreshDefectTable();
    }
  }

  public refreshDefectTable(): void {
    this.selectedDefects = [];
    this.defectsTable = [];
    this.defectsTableBackup = [];
    this.defectsTableForDisplay = [];
    this.defectTableSummary = [];
    this.initDefectsSummaryCount();
    this.initDefectSummary();
    this.isDefectTableLoading = true;
    this.defectListService.getDefectList(this._equipmentCode).subscribe((results) => {
      this.defectsTable = results;
      this.loadDefectsTable();
    });
  }

  public openDefect(row: DefectsDTO): void {
    if (row.bidoNotificationDTO.notificationCode) {
      const defectId: BidoNotificationDTOId = {
        notificationCode: row.bidoNotificationDTO.notificationCode
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        objectId: this.serializationService.serialize(defectId),
        openMode: ComponentOpenMode.Read
      };

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openDefectAdd(objectId: string | undefined): void {
    if (!!objectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        openMode: ComponentOpenMode.Write
      };

      const defectId: BidoNotificationDTOId = {
        notificationCode: objectId
      };
      data.objectId = this.serializationService.serialize(defectId);

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public closeDefect(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmCloseDefect'),
      accept: () => {
        this.selectedDefects.forEach((defect) => {
          this.defectListService.closeAssetDefect(defect.bidoNotificationDTO).subscribe(
            (result) => {
              this.messageService.showSuccessMessage(result);
              this.refreshDefectTable();
              // this.loadSummaryData();
            },
            (error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnCloseDefect'));
            }
          );
        });
      }
    });
  }

  public exportDefects(): void {
    this.exportService.toExcel(this.defectsToExport, this.defectResultsExportName, this.getComponentName());
  }

  private initDefectsSummaryCount(): void {
    this.defectCounts = {
      ok: 0,
      nok: 0,
      warning: 0
    };
  }

  private loadDefectsTable(): void {
    this.isDefectTableLoading = true;
    if (this.defectsTable.length > 0) {
      this.bindDefectsTable();

      this.defectCounts.ok = this.defectsTable.filter(
        (def) => def.controlResultIcon === ControlConfigConstants.ICON_GREEN
      ).length;
      this.defectCounts.nok = this.defectsTable.filter(
        (def) => def.controlResultIcon === ControlConfigConstants.ICON_RED
      ).length;
      this.defectCounts.warning = this.defectsTable.filter(
        (def) => def.controlResultIcon === ControlConfigConstants.ICON_YELLOW
      ).length;

      this.defectTableSummary[0].ok = this.defectCounts.ok;
      this.defectTableSummary[0].nok = this.defectCounts.nok;
      this.defectTableSummary[0].warning = this.defectCounts.warning;

      this.updateDefectSummary.emit(this.defectCounts);
    } else {
      this.isDefectTableLoading = false;
    }
  }

  private bindDefectsTable(): void {
    this.defectsTable.forEach((def) => {
      const defect: DefectsDTO = {
        defectIsCritical: false,
        bidoNotificationDTO: {
          bidoNotificationTypeDTO: {}
        }
      };
      defect.rowId = Math.random();
      defect.defectName = def.defectName;
      defect.remainingText = def.remainingText;
      defect.formattedNotificationStartDate = def.formattedNotificationStartDate;
      defect.defectDetectionContext = def.defectDetectionContext;
      if (!!def.defectIsCritical) {
        defect.isCriticalText = `${def.defectIsCritical}`;
      }
      defect.notificationStatus = def.notificationStatus;
      defect.defectCADescriptionShort = def.defectCADescriptionShort;
      defect.notificationLinkedEventCode = def.notificationLinkedEventCode;
      defect.defectLastAuthor = def.defectLastAuthor;
      defect.defectCALastAuthor = def.defectCALastAuthor;
      defect.deferralLastAuthor = def.deferralLastAuthor;
      defect.controlResultIcon = def.controlResultIcon;
      defect.control =
        def.controlResultIcon === ControlConfigConstants.ICON_GREEN
          ? this.okString
          : def.controlResultIcon === ControlConfigConstants.ICON_RED
          ? this.nokString
          : def.controlResultIcon === ControlConfigConstants.ICON_YELLOW
          ? this.warningString
          : '';
      defect.bidoNotificationDTO = def.bidoNotificationDTO;
      defect._obj = def;
      defect.defectTitle = def.defectTitle;
      this.defectsTableForDisplay.push(defect);
    });
    this.defectsTableBackup = JSON.parse(JSON.stringify(this.defectsTableForDisplay));
    this.setDefectExportData();
    this.isDefectTableLoading = false;
  }

  private initDefectSummary(): void {
    this.defectTableSummary = [
      {
        ok: 0,
        warning: 0,
        nok: 0
      }
    ];
  }

  private setDefectExportData(): void {
    this.defectsToExport = [];
    this.defectsTableForDisplay.forEach((defect) => {
      const defectToExport: DefectExportDTO = {
        defectTitle: defect.defectTitle,
        control: defect.control,
        remainingText: defect.remainingText,
        formattedNotificationStartDate: defect.formattedNotificationStartDate,
        defectDetectionContext: defect.defectDetectionContext,
        isCriticalText: defect.isCriticalText,
        notificationStatus: defect.notificationStatus,
        defectCADescriptionShort: defect.defectCADescriptionShort,
        notificationLinkedEventCode: defect.notificationLinkedEventCode
      };
      this.defectsToExport.push(defectToExport);
    });
  }

  private setDefectExportFilename(): void {
    const filename = `${this.getComponentName()}.defectExportFileName`;
    this.translateService.get(filename).subscribe((result) => {
      this.defectResultsExportName = result;
    });
  }
}
