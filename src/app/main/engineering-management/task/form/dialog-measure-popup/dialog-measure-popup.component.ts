import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireTaskMeasurementPointTableDTO } from '../../../../../shared/types/api-output-types/task-management/bire-task-measurement-point-table-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Component({
  selector: 'aw-dialog-measure-popup',
  templateUrl: './dialog-measure-popup.component.html',
  styleUrls: ['../task-form.component.scss']
})
export class DialogMeasurePopupComponent extends DialogComponent implements OnInit {
  public static readonly BOOLEAN: string = 'BOOL';
  public static readonly TEXT: string = 'TEXT';

  @Input('openMode')
  public set openMode(mode: ComponentOpenMode) {
    if (!!mode) {
      this.measureSearchDialogOpenMode = mode;
    } else {
      this.measureSearchDialogOpenMode = ComponentOpenMode.Create;
    }
  }

  @Input('data')
  public set rowData(data: BireTaskMeasurementPointTableDTO) {
    if (!!data) {
      this.bireTaskMeasurementDTO = data;
    } else {
      this.bireTaskMeasurementDTO = {};
    }
  }

  @Input() public hasRefMeasurementLinked: boolean;

  @Output() public onValidatedMeasurementPoint: EventEmitter<BireTaskMeasurementPointTableDTO>;

  public types: LabelValue<string>[];
  public showAddMeasurementPointSearchDialog: boolean;
  public bireTaskMeasurementDTO: BireTaskMeasurementPointTableDTO;
  public bireMeasurementRefDTO: BireMeasureReferenceDTO;
  public measureSearchDialogOpenMode: ComponentOpenMode;
  public readonly component: typeof DialogMeasurePopupComponent;
  public constructor(
    public readonly sessionService: SessionService,
    public inputValidationService: InputValidationService
  ) {
    super(ComponentOpenMode.Write, 'DialogMeasurePopupComponent');
    this.onValidatedMeasurementPoint = new EventEmitter<BireTaskMeasurementPointTableDTO>();
    this.component = DialogMeasurePopupComponent;
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.measureSearchDialogOpenMode);
  }

  public showMeasurementPointDialog(): void {
    if (this.isCreateOpenMode) {
      this.showAddMeasurementPointSearchDialog = true;
    } else {
      this.showAddMeasurementPointSearchDialog = false;
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!!this.bireTaskMeasurementDTO) {
      this.onValidatedMeasurementPoint.emit(this.bireTaskMeasurementDTO);
      this.display = false;
    }
  }

  public onMeasurementRow(rowData: BireMeasureReferenceDTO): void {
    if (!!rowData && !!this.bireTaskMeasurementDTO) {
      this.bireTaskMeasurementDTO.counterCode = rowData.counterCode;
      this.bireTaskMeasurementDTO.unitCode = rowData.unitCode;
      this.bireTaskMeasurementDTO.counterRemarks = rowData.counterRemarks;
    }
  }

  public disableButton(): boolean {
    if (!!this.bireTaskMeasurementDTO.counterCode && !!this.bireTaskMeasurementDTO.sequenceNumber) {
      return false;
    }

    return true;
  }
}
