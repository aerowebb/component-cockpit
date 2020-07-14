import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Observable, forkJoin } from 'rxjs';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ProgressFromOperationStatusInput } from '../../../../shared/types/api-input-types/work-order/progress-from-operation-status-input';
import { BidmOperationDTO } from '../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { WorkOrderStatusDetailDTO } from '../../../../shared/types/api-types/work-order-status-detail-dto.interface';
import { ChartType } from '../../../../shared/types/chart-type.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { TechnicalReceiptFormService } from './technical-receipt-form.service';

interface ReceptionTechniqueFormInterface {
  partNumber?: string;
  snLot?: string;
  worthiness?: string;
  emplacement?: string;
  designation?: string;
  warehouse?: string;
  operationalStatus?: string;
  fileNumber?: string;
  type?: string;
  status?: string;
  location?: string;
  logisticLocation?: string;
  releaseBy?: string;
  date?: Date;
  wo?: string;
  wp?: string;
  mroCenter?: string;
  progress?: number;
  taskAcceptance?: string;
}

interface DueDateTableInterface {
  value?: string;
  type?: string;
  designation?: string;
}

interface JobCardOperation extends BidmOperationDTO {
  opeDesignation?: string;
  opeSequence?: number;
  opeQualification?: string;
  opeStdDurationDisplay?: string;
  opePerformedDurationDisplay?: string;
  opePerformedElapsedDisplay?: string;
  opeStartDateDisplay?: string;
  opePerformedOnDisplay?: string;
  opeStatusPercent?: string;
  opeStatusDisplay?: string;
  opePerformedLastByDisplay?: string;
  opeCheckByDisplay?: string;
  opeCheckOnDisplay?: string;
  isOpeOnPerformed?: boolean;
  isOpeOnElapsed?: boolean;
  isCriticalTask?: boolean;
  _expand?: boolean | false;
}

@Component({
  selector: 'aw-technical-receipt-form',
  styleUrls: ['./technical-receipt-form.component.scss'],
  templateUrl: './technical-receipt-form.component.html'
})
export class TechnicalReceiptFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly EQUIPMENT_ANCHOR_ID: string = 'equipmentAnchor';
  public static readonly RECEPTION_ANCHOR_ID: string = 'reception';
  public static readonly OPERATION_ANCHOR_ID: string = 'operation';
  public static readonly DUE_DATE_ANCHOR_ID: string = 'dueDate';
  public static readonly SUB_ASSEMBLY_ANCHOR_ID: string = 'subAssembly';
  public static readonly APPLIED_CONF_ANCHOR_ID: string = 'appliedConf';
  public static readonly COMMENT_ANCHOR_ID: string = 'comment';
  public static readonly ADDITIONAL_WORK_ANCHOR_ID: string = 'additionalWork';

  public readonly awPropertiesConstants: typeof AWPropertiesConstants;

  // Table of content
  public toc: PageTocEntry[];

  public readonly component: typeof TechnicalReceiptFormComponent;

  public mainInfo: ReceptionTechniqueFormInterface;

  public dueDateTableCols: TableColumn[];
  public dueDateTable: DueDateTableInterface[];

  // Chart Params
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean;

  public navigable: number = 1;
  public navigableWithAlerts: number = 0;
  public nonNavigable: number = 0;

  public configurationControlTable: SummaryRow[];
  public showValidateTechnicalConditionDialog: boolean;

  // Operation table
  public isLoadingOperationsTable: boolean;
  public operationTable: JobCardOperation[];
  public operationTableCols: TableColumn[];
  public selectedOperations: BidmOperationDTO[];
  public operationSelectedIndex: number = -1;

  public isCommentEdit: boolean = false;
  public woComments: string | undefined;

  public woStatus: WorkOrderStatusDetailDTO;
  public bidmWorkOrderId: BidmWorkOrderDTOId;
  public workOrder: BidmWorkOrderDTO = {};
  public woAdditionalWork: string | undefined;
  public woItemDTO: BireItemDTO;
  public relatedItem: string;
  public isWoNeedCheck: boolean;

  @ViewChild(TechnicalReceiptFormComponent.EQUIPMENT_ANCHOR_ID)
  public equipmentAnchor: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.RECEPTION_ANCHOR_ID)
  public reception: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.OPERATION_ANCHOR_ID)
  public operation: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.DUE_DATE_ANCHOR_ID)
  public dueDate: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.SUB_ASSEMBLY_ANCHOR_ID)
  public subAssembly: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.APPLIED_CONF_ANCHOR_ID)
  public appliedConf: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.COMMENT_ANCHOR_ID)
  public comment: ElementRef;

  @ViewChild(TechnicalReceiptFormComponent.ADDITIONAL_WORK_ANCHOR_ID)
  public additionalWork: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly technicalReceiptFormService: TechnicalReceiptFormService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    super.registerPageTocEntryObservable();

    this.component = TechnicalReceiptFormComponent;
    this.awPropertiesConstants = AWPropertiesConstants;
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TECHNICAL_RECEIPT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.setTableOfContent();

    this.mainInfo = {};
    this.dueDateTable = [];
    this.operationTable = [];
    this.selectedOperations = [];
    this.configurationControlTable = [];

    this.woStatus = {
      costAndDuration: {}
    };

    this.chartData = {
      datasets: [],
      labels: []
    };
    this.initChart();

    this.dueDateTableCols = [
      { field: 'value', alignment: 'left', width: '10%' },
      { field: 'type', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '75%' }
    ];

    this.operationTableCols = [
      { field: 'sequence', alignment: 'center', width: '2.5%' },
      { field: 'bireOpeCode', alignment: 'center', width: '10%' },
      { field: 'opeDesignation', alignment: 'left', width: '30%' },
      { field: 'opePerformedDuration', alignment: 'center', width: '10%' },
      { field: 'opePerformedElapsed', alignment: 'center', width: '10%' },
      { field: 'achievement', alignment: 'center', width: '7.5%' },
      { field: 'opeStatusDisplay', alignment: 'center', width: '7.5%' }
    ];

    this.loadTechnicalRecepitData();

    this.bidmWorkOrderId = this.technicalReceiptFormService.loadBidmWorkOrderID();
    this.loadWorkOrder();
  }

  /***************************************
   * SETTING TOC
   ***************************************/
  private setTableOfContent() {
    const mainDataKey = this.getTranslateKey('equipment');
    const receptionKey = this.getTranslateKey('logisticsReception');
    const operationKey = this.getTranslateKey('operations');
    const dueDateKey = this.getTranslateKey('nextDueDate');
    const subAssemblyKey = this.getTranslateKey('subsets');
    const appliedConfKey = this.getTranslateKey('applicableConfiguration');
    const commentKey = this.getTranslateKey('comments');
    const additionalWorkKey = this.getTranslateKey('additionalWork');
    this.translateService
      .get([
        mainDataKey,
        receptionKey,
        operationKey,
        dueDateKey,
        subAssemblyKey,
        appliedConfKey,
        commentKey,
        additionalWorkKey
      ])
      .subscribe((results: string[]) => {
        const equipmentLabel: string = !!results ? (results[mainDataKey] as string) : 'Equipment';
        const receptionLabel: string = !!results ? (results[receptionKey] as string) : 'Logistics Reception';
        const operationLabel: string = !!results ? (results[operationKey] as string) : 'Operations';
        const dueDateLabel: string = !!results ? (results[dueDateKey] as string) : 'Next Due Date';
        const subAssemblyLabel: string = !!results ? (results[subAssemblyKey] as string) : 'Sub-assemblies';
        const appliedConfLabel: string = !!results ? (results[appliedConfKey] as string) : 'Applied Configuration';
        const commentLabel: string = !!results ? (results[commentKey] as string) : 'Comment';
        const additionalWorkLabel: string = !!results ? (results[additionalWorkKey] as string) : 'Additional Work';

        this.toc = [
          {
            id: 'equipmentAnchor',
            anchor: this.equipmentAnchor,
            label: equipmentLabel
          },
          {
            id: 'dueDate',
            anchor: this.dueDate,
            label: dueDateLabel
          },
          {
            id: 'reception',
            anchor: this.reception,
            label: receptionLabel
          },
          {
            id: 'subAssembly',
            anchor: this.subAssembly,
            label: subAssemblyLabel
          },
          {
            id: 'appliedConf',
            anchor: this.appliedConf,
            label: appliedConfLabel
          },
          {
            id: 'operation',
            anchor: this.operation,
            label: operationLabel
          },
          {
            id: 'comment',
            anchor: this.comment,
            label: commentLabel
          },
          {
            id: 'additionalWork',
            anchor: this.additionalWork,
            label: additionalWorkLabel
          }
        ];

        super.selectPageTocEntry(this.component.EQUIPMENT_ANCHOR_ID);
      });
  }

  /**********************************
   * Load Form Data
   **********************************/
  private loadTechnicalRecepitData() {
    this.mainInfo = this.technicalReceiptFormService.loadTechnicalRecepitData();
    this.dueDateTable = this.technicalReceiptFormService.loadDueDateData();
    this.configurationControlTable = this.technicalReceiptFormService.loadConfigurationData();

    if (!!this.mainInfo.partNumber) {
      this.displayComponentContext(this.mainInfo.partNumber, this.isCreateOpenMode);
    }
  }

  /**********************************
   * CHART OPERATIONS
   **********************************/
  private initChart(): void {
    this.chartType = 'pie';
    this.chartVisible = false;
    this.chartData = {
      datasets: [
        {
          data: [1, 0, 0],
          backgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE, AppConstants.COLOR_RED],
          hoverBackgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE, AppConstants.COLOR_RED]
        }
      ],
      labels: []
    };

    this.setChartLabels();
    this.setChartOptions();
  }

  private setChartLabels(): void {
    const navigable = this.getTranslateKey('navigable');
    const navigableWithAlerts = this.getTranslateKey('navigableWithAlerts');
    const nonNavigable = this.getTranslateKey('nonNavigable');
    this.translateService.get([navigable, navigableWithAlerts, nonNavigable]).subscribe((results) => {
      const navigableLabel = results ? results[navigable] : 'Navigable';
      const navigableWithAlertsLabel = results ? results[navigableWithAlerts] : 'Navigable With Alerts';
      const nonNavigableLabel = results ? results[nonNavigable] : 'Non Navigable';

      this.chartData.labels = [navigableLabel, navigableWithAlertsLabel, nonNavigableLabel];
    });
  }

  private setChartOptions(): void {
    this.chartOptions = {
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  /**************************************************
   * LOAD WORK ORDER
   **************************************************/
  public loadWorkOrder() {
    this.isLoadingOperationsTable = true;
    this.technicalReceiptFormService.findBidmWorkOrder(this.bidmWorkOrderId).subscribe((result) => {
      if (result === null) {
        this.messageService.showErrorMessage(this.getTranslateKey('notFound'));
      } else {
        this.displayComponentContext(StringUtils.orEmpty(result.bidmWorkOrder.woCode), false);
        this.workOrder = result.bidmWorkOrder;
        this.woAdditionalWork = result.bidmWorkOrder.woAdditionalWork;
        this.woComments = result.bidmWorkOrder.woComments;
        this.relatedItem = result.relatedItem;
        this.woItemDTO = {
          familyCode: this.workOrder.bireItemFamilyCode,
          variantCode: this.workOrder.bireItemVariantCode,
          chapter: this.workOrder.bireItemChapter,
          section: this.workOrder.bireItemSection,
          subject: this.workOrder.bireItemSubject,
          sheet: this.workOrder.bireItemSheet,
          marks: this.workOrder.bireItemMarks,
          structureType: this.awPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
        };

        const bireOperationDataDTO = 'bireOperationData'; // #TODO: interface to be declared
        this.operationTable = [];
        if (result.workOrderStatusDetail.bidmOperationDataList) {
          result.workOrderStatusDetail.bidmOperationDataList.forEach((bidmOperation: BidmOperationDTO) => {
            const jobCardOperation: JobCardOperation = bidmOperation;
            jobCardOperation.opeDesignation = bidmOperation[bireOperationDataDTO].ope_DESIGNATION;
            jobCardOperation.opeQualification = bidmOperation[bireOperationDataDTO].ope_QUALIFICATION;
            jobCardOperation.opeSequence = bidmOperation[bireOperationDataDTO].ope_SEQUENCE_NUMBER;
            jobCardOperation.isOpeOnPerformed = false;
            jobCardOperation.isOpeOnElapsed = false;
            jobCardOperation.isCriticalTask = result.workOrderStatusDetail.isCritical;
            this.operationTable.push(jobCardOperation);
          });
        }
        this.initOperationTable();
        this.isLoadingOperationsTable = false;
      }
    });
  }

  private initOperationTable() {
    const opeCheckUsers: BidoUserDTOId[] = [];
    const opePerformedUsers: BidoUserDTOId[] = [];
    const operationsList: BidmOperationDTO[] = [];

    this.operationTable.forEach((operationRow) => {
      if (operationRow.opeStatus) {
        if (operationRow.opeStatus !== this.awPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE) {
          this.isWoNeedCheck = false;
        }
        operationRow.opeStatusDisplay = operationRow.opeStatus.slice(2);
      }

      if (operationRow.opeOpeningDate) {
        operationRow.opeStartDateDisplay = this.getFullDateFormatWithDate(operationRow.opeOpeningDate);
      }

      if (operationRow.opeCheckedOn) {
        operationRow.opeCheckOnDisplay = this.getFullDateFormatWithDate(operationRow.opeCheckedOn);
      }
      const bireOperationDataDTO = 'bireOperationData';
      if (operationRow[bireOperationDataDTO].ope_DURATION_TIME) {
        this.changeOpeStdDurationDisplay(operationRow, operationRow[bireOperationDataDTO].ope_DURATION_TIME);
      } else {
        const noDurationTime = 0;
        this.changeOpeStdDurationDisplay(operationRow, noDurationTime);
      }

      if (operationRow.opePerformedOn) {
        operationRow.opePerformedOnDisplay = this.getFullDateFormatWithDate(operationRow.opePerformedOn);
      }

      // initialize performed Duration and Elapsed duration
      if (!operationRow.opePerformedDuration && !operationRow.opePerformedElapsed) {
        operationRow.opePerformedDuration = 0;
        operationRow.opePerformedElapsed = 0;
      }
      this.changeOpePerformedDurationDisplay(operationRow);
      this.changeOpePerformedElapsedDisplay(operationRow);

      // create list of userDTOId for checkBy
      if (operationRow.opeCheckedBy) {
        const userDtoId: BidoUserDTOId = {
          userId: operationRow.opeCheckedBy
        };
        opeCheckUsers.push(userDtoId);
      }

      // create list of userDTOId for performedBy
      if (operationRow.opePerformedLastBy) {
        const userDtoId: BidoUserDTOId = {
          userId: operationRow.opePerformedLastBy
        };
        opePerformedUsers.push(userDtoId);
      }

      // create list of operation
      if (operationRow) {
        operationsList.push(operationRow);
      }
    });

    const observableListCheckBy: Observable<BidoUserDTO>[] = [];
    const observableListPerformedBy: Observable<BidoUserDTO>[] = [];
    const observableListStatusPercent: Observable<number>[] = [];

    opeCheckUsers.forEach((user) => {
      observableListCheckBy.push(this.technicalReceiptFormService.findUserById(user));
    });
    forkJoin(observableListCheckBy).subscribe((userCheckByList) => {
      for (let i = 0; i < userCheckByList.length; i++) {
        this.operationTable[i].opeCheckedBy = userCheckByList[i].userId;
        if (!!userCheckByList[i].employeeId) {
          this.technicalReceiptFormService
            .getEmployeeById(Number(userCheckByList[i].employeeId))
            .subscribe((employee) => {
              this.operationTable[i].opeCheckByDisplay = this.getEmployeeText(employee, userCheckByList[i]);
            });
        } else {
          this.operationTable[i].opeCheckByDisplay = this.getUserText(userCheckByList[i]);
        }
      }
    });

    opePerformedUsers.forEach((user) => {
      observableListPerformedBy.push(this.technicalReceiptFormService.findUserById(user));
    });
    forkJoin(observableListPerformedBy).subscribe((userPerformedByList) => {
      for (let i = 0; i < userPerformedByList.length; i++) {
        this.operationTable[i].opePerformedLastBy = userPerformedByList[i].userId;
        if (!!userPerformedByList[i].employeeId) {
          this.technicalReceiptFormService
            .getEmployeeById(Number(userPerformedByList[i].employeeId))
            .subscribe((employee) => {
              this.operationTable[i].opePerformedLastByDisplay = this.getEmployeeText(employee, userPerformedByList[i]);
            });
        } else {
          this.operationTable[i].opePerformedLastByDisplay = this.getUserText(userPerformedByList[i]);
        }
      }
    });

    operationsList.forEach((ope) => {
      const bireOpeRow = 'bireOperationData';
      const bireOperationDtoRow: BireOperationDTO = {
        opeDurationTime: ope[bireOpeRow].ope_DURATION_TIME
      };
      const progressFromOperationStatusInput: ProgressFromOperationStatusInput = {
        bireOperationDto: bireOperationDtoRow,
        bidmOperationDto: ope
      };

      observableListStatusPercent.push(
        this.technicalReceiptFormService.getProgressFromOperationStatus(progressFromOperationStatusInput)
      );
    });
    forkJoin(observableListStatusPercent).subscribe((statusPercentList) => {
      for (let i = 0; i < statusPercentList.length; i++) {
        this.operationTable[i].opeStatusPercent = Math.floor(statusPercentList[i]).toString();
      }
    });

    this.operationTable.sort((a, b): number => {
      if (a.opeSequence !== undefined && b.opeSequence !== undefined && a.opeSequence !== b.opeSequence) {
        return a.opeSequence - b.opeSequence;
      } else {
        if (!!a.bireOpeCode && !!b.bireOpeCode) {
          const boll = a.bireOpeCode.localeCompare(b.bireOpeCode);

          return boll;
        } else {
          return 0;
        }
      }
    });
  }

  public changeOpePerformedElapsedDisplay(row: JobCardOperation): void {
    if (row.opePerformedElapsed !== undefined) {
      row.opePerformedElapsedDisplay = this.timeToDisplay(row.opePerformedElapsed);
    }
  }

  public changeOpePerformedDurationDisplay(row: JobCardOperation): void {
    if (row.opePerformedDuration !== undefined) {
      row.opePerformedDurationDisplay = this.timeToDisplay(row.opePerformedDuration);
    }
  }

  private getEmployeeText(employee: BidtEmployeeDTO, user: BidoUserDTO): string {
    if (employee.employeeNumber) {
      const opeDisplay = `${employee.employeeNumber} (${user.firstname} ${user.lastname})`;

      return opeDisplay;
    } else {
      const opeDisplay = `${user.firstname} ${user.lastname}`;

      return opeDisplay;
    }
  }

  private getUserText(user: BidoUserDTO): string {
    const opeDisplay = `${user.firstname} ${user.lastname}`;

    return opeDisplay;
  }

  public changeOpeStdDurationDisplay(row: JobCardOperation, num: number): void {
    if (num !== undefined) {
      const durationTimeInmillisecond = 3600000;
      row.opeStdDurationDisplay = this.timeToDisplay(num * durationTimeInmillisecond);
    }
  }

  public timeToDisplay(millisecond: number): string {
    const secondInmillisecond = 1000;
    const hourInSecond = 3600;
    const minuteInSecond = 60;
    const secondModulo = 60;
    const check = 10;
    const second = Math.floor(millisecond / secondInmillisecond);
    const hours = Math.floor(second / hourInSecond);
    const minutes = Math.floor((second - hours * hourInSecond) / minuteInSecond);
    const seconds = second % secondModulo;
    let minutesDisplay: string = minutes.toString();
    let secondsDisplay: string = seconds.toString();

    if (minutes < check || seconds < check) {
      if (minutes < check) {
        minutesDisplay = `0${minutes}`;
      }
      if (seconds < check) {
        secondsDisplay = `0${seconds}`;
      }
      const displayLessTen = `${hours}:${minutesDisplay}:${secondsDisplay}`;

      return displayLessTen;
    }

    const display = `${hours}:${minutesDisplay}:${secondsDisplay}`;

    return display;
  }

  public getFullDateFormatWithDate(date: Date): string {
    const dateDisplay = moment(date);

    return dateDisplay.format('MM/DD/YYYY HH:mm');
  }

  public openConfControl() {
    // TODO
  }

  public validateTechnicalCondition() {
    this.showValidateTechnicalConditionDialog = true;
  }

  public onValidateTechnicalCondition(ev: string) {
    this.mainInfo.operationalStatus = ev;
  }

  public refresh() {
    // TODO
  }

  public deleteOperation(): void {
    // #TODO
  }

  public editComments() {
    this.isCommentEdit = true;
  }

  public saveComents() {
    // TODO
    this.isCommentEdit = false;
  }

  public saveWorkOrder() {
    // TODO
  }
}
