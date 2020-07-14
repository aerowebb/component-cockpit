import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../shared/services/message.service';
import { SessionService } from '../../../shared/services/session.service';
import { DeferredDefectEventDTO } from '../../../shared/types/api-types/deferred-defect-event-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';

import { DialogSearchDefectEventsService } from './dialog-search-defect-events.service';

interface TableRow {
  code?: string;
  date?: string;
  logNumber?: string;
  context?: string;
  description?: string;
  lastAuthor?: string;
  correctiveDescription?: string;
  correctiveLastAuthor?: string;
  isDeferred?: Boolean;
  deferralDelay?: string;
  deferralLastAuthor?: string;
  _obj: DeferredDefectEventDTO;
}

@Component({
  selector: 'aw-dialog-search-defect-events',
  templateUrl: 'dialog-search-defect-events.component.html'
})
export class DialogSearchDefectEventsComponent extends DialogComponent implements OnInit {
  public resultsTableCols: TableColumn[];
  public resultsTable: TableRow[];
  public selectedObject: DeferredDefectEventDTO | undefined;

  public set selectedRow(selectedRow: TableRow) {
    this.selectedObject = selectedRow._obj;
  }

  @Output()
  public onSelected = new EventEmitter<DeferredDefectEventDTO>();

  @Input()
  public equipmentCode: string;

  public constructor(
    private readonly dialogSearchDefectEventsService: DialogSearchDefectEventsService,
    private readonly sessionService: SessionService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchDefectEventsComponent');

    this.resultsTable = [];

    this.resultsTableCols = [
      { field: 'code', alignment: 'left' },
      { field: 'date', alignment: 'left' },
      { field: 'logNumber', alignment: 'left' },
      { field: 'context', alignment: 'left' },
      { field: 'description', alignment: 'left' },
      { field: 'correctiveDescription', alignment: 'left' },
      { field: 'isDeferred', alignment: 'center' },
      { field: 'deferralDelay', alignment: 'left' }
    ];
  }

  public ngOnInit() {
    this.selectedObject = undefined;
    this.resultsTable = [];
    this.searchDefectEvents();
  }

  public searchDefectEvents(): void {
    this.dialogSearchDefectEventsService
      .findDefectEventsByEquipmentCode({
        equipmentCode: this.equipmentCode,
        forWholeStructure: true
      })
      .subscribe(
        (results) => {
          if (results) {
            this.selectedObject = undefined;
            this.resultsTable = results.map((findDefectEventsByEquipmentCodeOutput) => {
              const deferredDefectEventDTO = findDefectEventsByEquipmentCodeOutput.deferredDefectEventDTO;
              deferredDefectEventDTO.caDescription = findDefectEventsByEquipmentCodeOutput.defectCADescription;
              const notification = deferredDefectEventDTO.bidoNotificationData;
              if (!notification) {
                throw new Error('Missing notification data');
              }

              return {
                code: notification.notificationCode,
                date: notification.reportingPeriodStartDate
                  ? moment(notification.reportingPeriodStartDate).format(this.sessionService.dateTimeFormatMomentJS)
                  : '',
                logNumber: findDefectEventsByEquipmentCodeOutput.defectLogNumber,
                context: findDefectEventsByEquipmentCodeOutput.defectDetectionContext,
                description: findDefectEventsByEquipmentCodeOutput.defectDescription,
                correctiveDescription: findDefectEventsByEquipmentCodeOutput.defectCADescription,
                isDeferred: findDefectEventsByEquipmentCodeOutput.isDeferred,
                deferralDelay: findDefectEventsByEquipmentCodeOutput.deferralDelay,
                _obj: deferredDefectEventDTO
              };
            });
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
        }
      );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.onSelected.emit(this.selectedObject);
    this.selectedObject = undefined;
    this.display = false;
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.display = false;
  }
}
