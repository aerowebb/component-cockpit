import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoReportDTOId } from '../../../../shared/types/api-types/bido-report-dto-id.interface';
import { BidoReportDTO } from '../../../../shared/types/api-types/bido-report-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { LabelValueUtils } from '../../../../shared/utils/label-value-utils';

import { AssetLogFormService } from './asset-log-form.service';

interface HistoricRowDTO {
  statusDateField?: string;
  statusDate?: string;
  fieldName?: string;
  fieldOldValue?: string;
  fieldNewValue?: string;
  statusUser?: string;
}
interface HistoricFRowDTO {
  dateOfChange?: string;
  pn?: string;
  sn?: string;
  familyVariantCode?: string;
  modelCode?: string;
  operationalStatus?: string;
  zone?: string;
  country?: string;
  equEquipmentCode?: string;
  owner?: string;
  operator?: string;
  statusUser?: string;
}

interface UpdateRowDTO {
  familyVariantCode?: string;
  equEquipmentCodeUpdate?: string;
  ownerCustomerCode?: string;
  pnCode?: string;
  operatorCustomerCode?: string;
  sn?: string;
  equipmentFunction?: string;
  timestamp?: string;
  action?: string;
  modelCode?: string;
  statusState?: string;
  statusUser?: string;
  equipmentCode?: string;
  snManufacturer?: string;
  equipmentDesignation?: string;
  manufacturingDate?: Date;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  marks?: string;
  equiPosition?: string;
  manufacturingConfiguration?: boolean;
  functionCode?: string;
  zone?: string;
  country?: string;
  operationalStatus?: string;
  rowId?: number;
  _expand?: boolean | false;
}
export interface ReportRowDTO {
  reportId?: string;
  reportName?: string;
  statusUser?: string;
  statusDate?: string;
}
@Component({
  selector: 'aw-asset-log-form',
  templateUrl: './asset-log-form.component.html'
})
export class AssetLogFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public historicTableCols1: TableColumn[];
  public historicTableCols2: TableColumn[];
  public updateTableCols1: TableColumn[];
  public updateTableCols2: TableColumn[];
  public reportTableCols: TableColumn[];
  public historicTable1: HistoricRowDTO[];
  public historicTable2: HistoricFRowDTO[];
  public updateTable: UpdateRowDTO[];
  public reportTable: ReportRowDTO[];
  public selectedReports: BidoReportDTO[];
  public displayHistoricFullScreen: boolean;
  public displayUpdateFullScreen: boolean;
  public familyVariant: string | undefined;
  public propertyOperationalStatus: LabelValue<string>[];
  public propertyFunction: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public toc;
  public selectedAnchor: string | undefined;
  public remainingTable: UpdateRowDTO[];
  public remainingTableCols: TableColumn[];
  public secondTable: UpdateRowDTO[];
  public secondTableCols: TableColumn[];
  private resultsTable: SearchResultsDTO<BidoCustomerDTO>;

  @ViewChild('historicAnchor')
  public historicAnchor: ElementRef;

  @ViewChild('updatesAnchor')
  public updatesAnchor: ElementRef;

  @ViewChild('reportAnchor')
  public reportAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public inputValidationService: InputValidationService,
    public translateService: TranslateService,
    private readonly assetLogFormService: AssetLogFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.setTableCols();
    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.selectedAnchor = undefined;
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_ASSET_LOG_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const contextMode = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          ` P/N ${this.serializationService.deserialize(this.componentData.objectId).pnCode}
        | S/N ${this.serializationService.deserialize(this.componentData.objectId).sn}`;
      if (!!contextMode) {
        this.displayComponentContext(contextMode, this.isCreateOpenMode);
      }

      const isAircraft =
        this.componentData.objectId &&
        this.serializationService.deserialize(this.componentData.objectId).equipmentFunction ===
          AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;

      forkJoin({
        customers: this.assetLogFormService.findBidoCustomersBySearchCriteria({}),
        equipmentFunctionList: this.assetLogFormService.getEquipmentFunctionList(),
        objectStatuses: this.assetLogFormService.getObjectStatusMap(),
        operationalStatuses: isAircraft
          ? this.assetLogFormService.getOperationalStatusMapForAircraft()
          : this.assetLogFormService.getOperationalStatusMap()
      }).subscribe((result) => {
        this.propertyFunction = result.equipmentFunctionList;
        this.propertyOperationalStatus = result.operationalStatuses;
        this.propertyStatus = result.objectStatuses;

        if (result.customers) {
          this.resultsTable = result.customers;

          this.loadHistoricTableData();
          this.loadUpdateTableData();
          this.loadReportTableData();
        }
      });
    }
    this.toc = [
      {
        id: 'historicAnchor',
        anchor: this.historicAnchor,
        label: this.translateService.instant('historic')
      },
      {
        id: 'updatesAnchor',
        anchor: this.updatesAnchor,
        label: this.translateService.instant('updates')
      },
      {
        id: 'reportAnchor',
        anchor: this.reportAnchor,
        label: this.translateService.instant('reports')
      }
    ];
  }

  private init(): void {
    this.propertyStatus = [];
    this.propertyOperationalStatus = [];
    this.propertyFunction = [];
    this.familyVariant = undefined;
    this.historicTable1 = [];
    this.updateTable = [];
    this.reportTable = [];
    this.selectedReports = [];
    this.displayHistoricFullScreen = false;
    this.displayUpdateFullScreen = false;
    this.remainingTable = [];
    this.remainingTableCols = [];
    this.secondTable = [];
    this.secondTableCols = [];
  }
  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.selectedAnchor = anchorId;
  }
  private setTableCols(): void {
    this.reportTableCols = [
      { field: 'reportName', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'statusDate', alignment: 'left' }
    ];
    this.updateTableCols1 = [
      { field: 'timestamp', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'statusState', alignment: 'left' },
      { field: 'action', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equEquipmentCodeUpdate', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'sn', alignment: 'left' }
    ];
    this.updateTableCols2 = [
      { field: 'timestamp', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'statusState', alignment: 'left' },
      { field: 'action', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equEquipmentCodeUpdate', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'ownerCustomerCode', alignment: 'left' },
      { field: 'operatorCustomerCode', alignment: 'left' },
      { field: 'modelCode', alignment: 'left' }
    ];
    this.historicTableCols1 = [
      { field: 'statusDateField', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'fieldName', alignment: 'left' },
      { field: 'fieldOldValue', alignment: 'left' },
      { field: 'fieldNewValue', alignment: 'left' }
    ];
    this.historicTableCols2 = [
      { field: 'dateOfChange', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equEquipmentCode', alignment: 'left' },
      { field: 'pn', alignment: 'left' },
      { field: 'sn', alignment: 'left' },
      { field: 'owner', alignment: 'left' },
      { field: 'operator', alignment: 'left' },
      { field: 'modelCode', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'zone', alignment: 'left' },
      { field: 'country', alignment: 'left' }
    ];
  }

  public closeHistoricDialog(): void {
    this.displayHistoricFullScreen = false;
  }
  public closeUpdateDialog(): void {
    this.displayUpdateFullScreen = false;
  }

  public loadHistoricTableData(): void {
    if (!!this.componentData.objectId) {
      const equipCode = this.serializationService.deserialize(
        this.serializationService.deserialize(this.componentData.objectId).equipmentCode
      ).equipmentCode;
      const userId = {
        equipmentCode: equipCode
      };
      if (!!userId) {
        this.assetLogFormService.getHistoricTableData(userId).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              this.historicTable1 = [];
              this.historicTable1 = result.map((historic) => {
                if (historic.fieldName === 'OPERATIONAL_STATUS') {
                  this.labelValueMap(historic);
                }

                if (historic.fieldName === 'OPERATOR' || historic.fieldName === 'OWNER') {
                  this.labelValueOwnerOperatorMap(historic);
                }

                const historicRow: HistoricRowDTO = {
                  statusDateField: this.dateService.dateWithHourToString(historic.statusDate),
                  statusDate: this.dateService.dateWithHourToString(historic.statusDate),
                  fieldName: historic.fieldName,
                  fieldOldValue: historic.fieldOldValue,
                  fieldNewValue: historic.fieldNewValue,
                  statusUser: historic.statusUser
                };

                return historicRow;
              });
            } else {
              super.throwUnboundLocalError('loadHistoricTableData', 'result');
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadHistoricData'));
          }
        );
      }
    }
  }

  private labelValueMap(element) {
    if (!!element.fieldOldValue) {
      LabelValueUtils.stringValueToLabel(element, 'fieldOldValue', this.propertyOperationalStatus);
    }

    if (!!element.fieldNewValue) {
      LabelValueUtils.stringValueToLabel(element, 'fieldNewValue', this.propertyOperationalStatus);
    }
  }

  private labelValueOwnerOperatorMap(element): void {
    this.resultsTable.list.forEach((res) => {
      if (!!element.fieldOldValue && res.customerCode === element.fieldOldValue) {
        element.fieldOldValue = `${res.customerName} (${res.customerCode})`;
      } else if (!!element.fieldNewValue && res.customerCode === element.fieldNewValue) {
        element.fieldNewValue = `${res.customerName} (${res.customerCode})`;
      }
    });
  }

  public loadUpdateTableData(): void {
    if (!!this.componentData.objectId) {
      const equipCode = this.serializationService.deserialize(
        this.serializationService.deserialize(this.componentData.objectId).equipmentCode
      ).equipmentCode;
      const userId = {
        equipmentCode: equipCode
      };
      if (!!userId) {
        this.assetLogFormService.getUpdateTableData(userId).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              result.forEach((element) => {
                if (element.equipmentFunction) {
                  element.equipmentFunction = this.propertyFunction.filter(
                    (action) => action.value === element.equipmentFunction
                  )[0].label;
                }
                if (element.statusState) {
                  element.statusState = this.propertyStatus.filter(
                    (action) => action.value === element.statusState
                  )[0].label;
                }
                if (element.operationalStatus) {
                  element.operationalStatus = this.propertyOperationalStatus.filter(
                    (action) => action.value === element.operationalStatus
                  )[0].label;
                }
              });
              this.updateTable = [];
              this.updateTable = result.map((update) => {
                const updateFRow: UpdateRowDTO = {
                  timestamp: this.dateService.timestampWithHourToString(update.timestamp),
                  statusUser: update.statusUser,
                  statusState: update.statusState,
                  action: update.action,
                  familyVariantCode: update.familyVariantCode,
                  equEquipmentCodeUpdate: update.equEquipmentCode,
                  pnCode: update.pnCode,
                  sn: update.sn,
                  equipmentFunction: update.equipmentFunction,
                  ownerCustomerCode: update.ownerCustomerCode,
                  operatorCustomerCode: update.operatorCustomerCode,
                  modelCode: update.modelCode,
                  operationalStatus: update.operationalStatus,
                  functionCode: update.functionCode,
                  equiPosition: update.equiPosition,
                  chapter: update.chapter,
                  section: update.section,
                  subject: update.subject,
                  sheet: update.sheet,
                  marks: update.marks,
                  equipmentDesignation: update.equipmentDesignation,
                  snManufacturer: update.snManufacturer,
                  manufacturingDate: update.manufacturingDate,
                  manufacturingConfiguration: update.manufacturingConfiguration,
                  zone: update.zone,
                  country: update.country,
                  rowId: Math.random()
                };

                return updateFRow;
              });
            } else {
              super.throwUnboundLocalError('loadUpdateTableData', 'result');
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadUpdateData'));
          }
        );
      }
    }
  }

  public loadReportTableData(): void {
    if (!!this.componentData.objectId) {
      const equipCode = this.serializationService.deserialize(
        this.serializationService.deserialize(this.componentData.objectId).equipmentCode
      ).equipmentCode;
      const userId = {
        equipmentCode: equipCode
      };
      if (!!userId) {
        this.assetLogFormService.getReportTableData(userId).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              this.reportTable = [];
              this.reportTable = result.map((report) => {
                const reportRow: ReportRowDTO = {
                  statusDate: this.dateService.dateWithHourToString(report.statusDate),
                  reportName: report.reportName,
                  statusUser: report.statusUser,
                  reportId: report.reportId
                };

                return reportRow;
              });
            } else {
              super.throwUnboundLocalError('loadReportTableData', 'result');
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadReportData'));
          }
        );
      }
    }
  }

  public loadHistoricDetailTableData(): void {
    this.displayHistoricFullScreen = true;
    if (!!this.componentData.objectId) {
      const equipCode = this.serializationService.deserialize(
        this.serializationService.deserialize(this.componentData.objectId).equipmentCode
      ).equipmentCode;
      if (!!equipCode) {
        this.assetLogFormService.getHistoricDetailTableData(equipCode).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              result.forEach((element) => {
                if (element.operationalStatus) {
                  element.operationalStatus = this.propertyOperationalStatus.filter(
                    (action) => action.value === element.operationalStatus
                  )[0].label;
                }
              });
              this.historicTable2 = [];
              this.historicTable2 = result.map((historic) => {
                const historicFRow: HistoricFRowDTO = {
                  dateOfChange: this.dateService.dateWithHourToString(historic.dateOfChange),
                  statusUser: historic.statusUser,
                  familyVariantCode: historic.familyVariantCode,
                  equEquipmentCode: historic.equEquipmentCode,
                  pn: historic.pn,
                  sn: historic.sn,
                  owner:
                    !!historic.owner && !!historic.owner.customerName && !!historic.owner.customerCode
                      ? `${historic.owner.customerName}(${historic.owner.customerCode})`
                      : !!historic.owner &&
                        !!historic.owner.customerName &&
                        (historic.owner.customerCode === null || undefined)
                      ? `${historic.owner.customerName}`
                      : !!historic.owner &&
                        !!historic.owner.customerCode &&
                        (historic.owner.customerName === null || undefined)
                      ? `${historic.owner.customerCode}`
                      : undefined,
                  operator:
                    !!historic.operator && !!historic.operator.customerName && !!historic.operator.customerCode
                      ? `${historic.operator.customerCode}(${historic.operator.customerName})`
                      : !!historic.operator &&
                        !!historic.operator.customerName &&
                        (historic.operator.customerCode === null || undefined)
                      ? `${historic.operator.customerName}`
                      : !!historic.operator &&
                        !!historic.operator.customerCode &&
                        (historic.operator.customerName === null || undefined)
                      ? `${historic.operator.customerCode}`
                      : undefined,
                  modelCode: historic.modelCode,
                  operationalStatus: historic.operationalStatus,
                  zone: historic.zone,
                  country: historic.country
                };

                return historicFRow;
              });
            } else {
              super.throwUnboundLocalError('loadHistoricDetailTableData', 'result');
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadHistoricFullData'));
          }
        );
      }
    }
  }
  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }
  public openReportDetail(object: BidoReportDTO): void {
    const partialMessageKey = this.getTranslateKey('openReport');
    this.confirmationService.confirm({
      interpolateParams: { 'openReport.reportName': object.reportName },
      messageKey: partialMessageKey,
      accept: () => {
        if (!!object.reportId) {
          const bidoReportDTOId: BidoReportDTOId = {
            reportId: object.reportId
          };
          this.assetLogFormService.findBidoReportContentOfBidoReport(bidoReportDTOId).subscribe((result) => {
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
  // Event to delete report entry
  public deleteReports() {
    if (this.selectedReports !== []) {
      const partialMessageKey =
        this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BidoReportDTOId>();

      this.selectedReports.forEach((report) => {
        if (report && report.reportId) {
          const reportId: BidoReportDTOId = {
            reportId: report.reportId
          };
          reports.push(reportId);
        }
      });

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.assetLogFormService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);
              this.loadReportTableData();
              this.selectedReports = [];
            },
            () => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('errorOnDeleteReports')
                  : this.getTranslateKey('errorOnDeleteReport');

              this.messageService.showErrorMessage(messageKey);
            }
          );
        }
      });
    }
  }

  public toggleDefectsExpand(row: UpdateRowDTO): void {
    row._expand = !row._expand;
    this.remainingTable = [];
    this.secondTable = [];
    this.remainingTableCols = [
      { field: 'equipmentFunction', alignment: 'left' },
      { field: 'ownerCustomerCode', alignment: 'left' },
      { field: 'operatorCustomerCode', alignment: 'left' },
      { field: 'modelCode', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'functionCode', alignment: 'left' },
      { field: 'equiPosition', alignment: 'left' },
      { field: 'chapter', alignment: 'left' },
      { field: 'section', alignment: 'left' }
    ];
    this.secondTableCols = [
      { field: 'subject', alignment: 'left' },
      { field: 'sheet', alignment: 'left' },
      { field: 'marks', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'snManufacturer', alignment: 'left' },
      { field: 'manufacturingDate', alignment: 'left' },
      { field: 'manufacturingConfiguration', alignment: 'left' },
      { field: 'zone', alignment: 'left' },
      { field: 'country', alignment: 'left' }
    ];
    const remainingRow: UpdateRowDTO = {};
    const secondRow: UpdateRowDTO = {};
    const def = this.updateTable;
    remainingRow.equipmentFunction = def[0].equipmentFunction;
    remainingRow.ownerCustomerCode = def[0].ownerCustomerCode;
    remainingRow.operatorCustomerCode = def[0].operatorCustomerCode;
    remainingRow.modelCode = def[0].modelCode;
    remainingRow.operationalStatus = def[0].operationalStatus;
    remainingRow.functionCode = def[0].functionCode;
    remainingRow.equiPosition = def[0].equiPosition;
    remainingRow.chapter = def[0].chapter;
    remainingRow.section = def[0].section;
    secondRow.subject = def[0].subject;
    secondRow.sheet = def[0].sheet;
    secondRow.marks = def[0].marks;
    secondRow.equipmentDesignation = def[0].equipmentDesignation;
    secondRow.snManufacturer = def[0].snManufacturer;
    secondRow.manufacturingDate = def[0].manufacturingDate;
    secondRow.manufacturingConfiguration = def[0].manufacturingConfiguration;
    secondRow.zone = def[0].zone;
    secondRow.country = def[0].country;

    this.remainingTable.push(remainingRow);
    this.secondTable.push(secondRow);
  }
}
