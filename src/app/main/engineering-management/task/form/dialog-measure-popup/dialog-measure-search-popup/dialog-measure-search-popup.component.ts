import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { ArrayUtils } from '../../../../../../shared/utils/array-utils';
import { TaskFormService } from '../../task-form.service';

@Component({
  selector: 'aw-dialog-measure-search-popup',
  templateUrl: './dialog-measure-search-popup.component.html'
})
export class DialogMeasureSearchPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input('data')
  public set setData(data: BireMeasureReferenceDTO) {
    if (!!data) {
      this.bireMeasureRefDTO = data;
    } else {
      this.bireMeasureRefDTO = {};
    }
  }
  @Output() public onMeasurementRowSelected: EventEmitter<BireMeasureReferenceDTO>;

  public bireMeasureRefDTO: BireMeasureReferenceDTO;

  public measurementPointTableDataSource: TableDataSource<BireMeasureReferenceDTO>;
  public unitCodeList: SelectItem[];

  public constructor(
    public readonly sessionService: SessionService,
    private readonly taskFormService: TaskFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogMeasureSearchPopupComponent');
    this.initMeasurementPointTableDataSource();

    this.onMeasurementRowSelected = new EventEmitter<BireMeasureReferenceDTO>();

    this.unitCodeList = [];
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    this.bindDropDownList();
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (
      this.measurementPointTableDataSource.hasDataSelection &&
      this.measurementPointTableDataSource.dataSelectionCount === 1
    ) {
      this.onMeasurementRowSelected.emit(this.measurementPointTableDataSource.dataSelection[0]);
      this.display = false;
    }
  }

  private bindDropDownList(): void {
    this.taskFormService.findAllBireUnitMeasures().subscribe((result) => {
      if (!!result) {
        const labelValue: LabelValue<String>[] = [];
        result.forEach((res: LabelValue<string>) => {
          labelValue.push({
            label: res.label,
            value: res.value
          });
        });
        this.unitCodeList = labelValue.sort(ArrayUtils.compareValues('label'));
      }
    });
  }

  public search(): void {
    this.measurementPointTableDataSource.setData([]);
    this.taskFormService.findBireMeasureReferencesBySearchCriteria(this.bireMeasureRefDTO).subscribe((results) => {
      if (results) {
        this.measurementPointTableDataSource.setData(results);
      }
    });
  }

  private initMeasurementPointTableDataSource(): void {
    this.measurementPointTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'counterCode',
          translateKey: this.getTranslateKey('counterCode'),
          width: '15%'
        },
        {
          field: 'unitCode',
          translateKey: this.getTranslateKey('unit'),
          width: '15%'
        },
        {
          field: 'counterRemarks',
          translateKey: this.getTranslateKey('description'),
          width: '70%'
        }
      ],
      data: []
    });
  }
}
