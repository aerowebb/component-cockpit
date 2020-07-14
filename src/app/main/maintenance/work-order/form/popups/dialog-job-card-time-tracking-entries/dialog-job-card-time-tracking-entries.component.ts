import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { BidmTimeTrackingByOperationInputDTO } from '../../../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-input-dto.interface';
import { BidmTimeTrackingByOperationOutputDTO } from '../../../../../../shared/types/api-input-types/aircraft-maintenance/bidm-time-tracking-by-operation-output-dto.interface';
import { BidmOperationDTO } from '../../../../../../shared/types/api-types/bidm-operation-dto.interface';
import { BidmTimeTrackingDTOId } from '../../../../../../shared/types/api-types/bidm-time-tracking-dto-id.interface';
import { BidmTimeTrackingDTO } from '../../../../../../shared/types/api-types/bidm-time-tracking-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { WorkOrderFormService } from '../../work-order-form.service';

interface DurationInterface {
  performedDuration?: Date;
  elapsedTime?: Date;
}

interface TimeTrackingOutput {
  durationInterface?: DurationInterface;
  addedBidmTimeTracking?: BidmTimeTrackingByOperationOutputDTO[];
}

@Component({
  selector: 'aw-dialog-job-card-time-tracking-entries',
  templateUrl: './dialog-job-card-time-tracking-entries.component.html',
  styleUrls: ['./dialog-job-card-time-tracking-entries.component.scss']
})
export class DialogJobCardTimeTrackingEntriesComponent extends DialogComponent implements OnInit {
  @Input()
  public workOrder: BidmWorkOrderDTO;

  @Input()
  public bidmTimeTrackingList: BidmTimeTrackingByOperationOutputDTO[];

  @Input()
  public addedBidmTimeTracking: BidmTimeTrackingByOperationOutputDTO[];

  @Input()
  public selectedOperations: BidmOperationDTO;

  @Output()
  public onValidated: EventEmitter<TimeTrackingOutput>;

  public resultsTableCols: TableColumn[];
  public resultList: BidmTimeTrackingByOperationOutputDTO[];

  public displayEditDuration: boolean;
  public selectedDuration: string | undefined;
  public selectedElapsed: string | undefined;
  public durationInterface: DurationInterface;

  private selectedRowIndex: number = -1;

  public showSaveSpinner: boolean;

  public constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly woFormService: WorkOrderFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogJobCardTimeTrackingEntriesComponent');
    this.onValidated = new EventEmitter<TimeTrackingOutput>();

    this.durationInterface = {};
  }

  public ngOnInit(): void {
    this.resultsTableCols = [
      { field: 'status', alignment: 'center', width: '5%' },
      { field: 'operation', alignment: 'left', width: '10%' },
      { field: 'clockInText', alignment: 'left', width: '15%' },
      { field: 'clockOutText', alignment: 'left', width: '15%' },
      { field: 'durationText', alignment: 'left', width: '15%' },
      { field: 'elapsedText', alignment: 'left', width: '15%' },
      { field: 'isEditable', alignment: 'center', width: '5%' },
      { field: 'performedBy', alignment: 'left', width: '15%' },
      { field: 'isDelete', alignment: 'center', width: '5%' }
    ];

    this.resultList = [...this.addedBidmTimeTracking, ...this.bidmTimeTrackingList];
  }

  /**
   * Save operation
   */
  public save() {
    this.showSaveSpinner = true;
    this.woFormService
      .saveBidmTimeTracking(this.resultList)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe((res) => {
        this.addedBidmTimeTracking = [];
        this.fetchTimeTracking();
      });
  }

  /**
   * API To fetch time tracking list
   */
  private fetchTimeTracking() {
    const input: BidmTimeTrackingByOperationInputDTO = {
      projectId: this.workOrder.projectId as string,
      woId: this.workOrder.woId as string,
      bidmOperationDTO: this.selectedOperations,
      opeCode: this.selectedOperations.bireOpeCode,
      opeVersion: this.selectedOperations.bireOpeVersion
    };

    this.woFormService.fetchBidmTimeTrackings(input).subscribe((res) => {
      if (!!res) {
        this.resultList = res;
      }
    });
  }

  /**
   * Delete time Tracking entry
   */
  public deleteEntry(rowData: BidmTimeTrackingByOperationOutputDTO) {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmDeleteSelectedTime'),
      accept: () => {
        if (!!rowData.bidmTimeTrackingDTO) {
          if (!!rowData.bidmTimeTrackingDTO.timeTrackingId) {
            const bidmTimeTrackingDTOId: BidmTimeTrackingDTOId = {
              timeTrackingId: rowData.bidmTimeTrackingDTO.timeTrackingId
            };

            this.woFormService.removeBidmTimeTracking(bidmTimeTrackingDTOId).subscribe((res) => {
              if (!!rowData.bidmTimeTrackingDTO) {
                const id = rowData.bidmTimeTrackingDTO.timeTrackingId as string;
                const index = this.resultList.findIndex(
                  (row) => !!row.bidmTimeTrackingDTO && row.bidmTimeTrackingDTO.timeTrackingId === id
                );
                this.resultList.splice(index, 1);
              }
            });
          } else {
            this.spliceEntry(rowData);
          }
        }
      }
    });
  }

  private spliceEntry(rowData: BidmTimeTrackingByOperationOutputDTO) {
    const index = this.resultList.findIndex(
      (res) =>
        res.operation === rowData.operation &&
        res.durationText === rowData.durationText &&
        res.elapsedText === rowData.elapsedText
    );
    this.resultList.splice(index, 1);

    const addedIndex = this.addedBidmTimeTracking.findIndex(
      (res) =>
        res.operation === rowData.operation &&
        res.durationText === rowData.durationText &&
        res.elapsedText === rowData.elapsedText
    );
    if (!!addedIndex) {
      this.addedBidmTimeTracking.splice(addedIndex, 1);
    }
  }

  /**
   * Update time tracking entry
   */
  public updateEntry(rowData: BidmTimeTrackingByOperationOutputDTO) {
    if (!!rowData.bidmTimeTrackingDTO && !!rowData.bidmTimeTrackingDTO.timeTrackingId) {
      this.selectedRowIndex = this.resultList.findIndex(
        (res) =>
          !!res.bidmTimeTrackingDTO &&
          res.bidmTimeTrackingDTO.timeTrackingId === (rowData.bidmTimeTrackingDTO as BidmTimeTrackingDTO).timeTrackingId
      );
    } else {
      this.selectedRowIndex = this.resultList.findIndex(
        (res) =>
          res.operation === rowData.operation &&
          res.durationText === rowData.durationText &&
          res.elapsedText === rowData.elapsedText
      );
    }

    this.selectedDuration = rowData.durationText;
    this.selectedElapsed = rowData.elapsedText;

    this.displayEditDuration = true;
  }

  public onValidateDuration(ev: DurationInterface) {
    if (!!ev.performedDuration && !!ev.elapsedTime) {
      const TIME = 60;
      const NUM = 1000;
      const pHour = ev.performedDuration.getHours();
      const pMin = ev.performedDuration.getMinutes();
      const pSec = ev.performedDuration.getSeconds();

      const eHour = ev.elapsedTime.getHours();
      const eMin = ev.elapsedTime.getMinutes();
      const eSec = ev.elapsedTime.getSeconds();

      const newDuration = (pHour * TIME * TIME + pMin * TIME + pSec) * NUM;
      const newElapsed = (eHour * TIME * TIME + eMin * TIME + eSec) * NUM;

      this.resultList[this.selectedRowIndex].durationText = this.timeToDisplay(newDuration);
      this.resultList[this.selectedRowIndex].elapsedText = this.timeToDisplay(newElapsed);
      this.durationInterface.elapsedTime = ev.elapsedTime;
      this.durationInterface.performedDuration = ev.performedDuration;
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

  /**
   * Validate Operation
   */
  public validate(): void {
    this.woFormService
      .saveBidmTimeTracking(this.resultList)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe((res) => {
        this.addedBidmTimeTracking = [];
        const output: TimeTrackingOutput = {
          addedBidmTimeTracking: this.addedBidmTimeTracking,
          durationInterface: this.durationInterface
        };

        this.onValidated.emit(output);
        this.closeDialog();
      });
  }
}
