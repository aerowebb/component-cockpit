import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { BireTaskMeasurementPointTableDTO } from '../../../../../shared/types/api-output-types/task-management/bire-task-measurement-point-table-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

interface MeasurePoint {
  measurePoint1?: string;
  operator?: string;
  measurePoint2?: string;
  formula?: string;
}

@Component({
  selector: 'aw-dialog-measure-formula-popup',
  styleUrls: ['../task-form.component.scss'],
  templateUrl: './dialog-measure-formula-popup.component.html'
})
export class DialogMeasureFormulaPopupComponent extends DialogComponent implements OnInit {
  public static readonly BOOLEAN: string = 'BOOL';
  public static readonly TEXT: string = 'TEXT';
  @Input()
  public measureList: BireTaskMeasurementPointTableDTO[];
  @Input()
  public selectedMeasurePoint: string;
  @Input()
  public selectedMeasurePointFormula: string;
  @Input()
  public selectedMeasurePointTitle: string;
  @Output()
  public onValidated: EventEmitter<string>;
  public document: MeasurePoint;
  public operators: LabelValue<string>[];
  public measurePoints1: LabelValue<string>[];
  public measurePoints2: LabelValue<string>[];
  public readonly component: typeof DialogMeasureFormulaPopupComponent;
  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogMeasureFormulaPopupComponent');
    this.onValidated = new EventEmitter<string>();
    this.operators = [];
    this.measurePoints1 = [];
    this.measurePoints2 = [];
    this.component = DialogMeasureFormulaPopupComponent;
  }

  public ngOnInit(): void {
    this.document = {};
    this.loadMeasurementPoints1();
    this.loadOperators();
    this.loadMeasurementPoints2();
    this.document.formula = this.selectedMeasurePointFormula;
  }

  private loadMeasurementPoints1() {
    if (this.measureList) {
      this.measurePoints1 = [];
      const measures = [...this.measureList];
      measures.forEach((obj) => {
        if (
          obj.counterCode &&
          obj.unitCode &&
          obj.unitCode !== this.component.BOOLEAN &&
          obj.unitCode !== this.component.TEXT
        ) {
          if (!!obj.counterRemarks) {
            this.measurePoints1.push({ label: `${obj.counterRemarks} (${obj.counterCode})`, value: obj.counterCode });
          } else {
            this.measurePoints1.push({ label: `(${obj.counterCode})`, value: obj.counterCode });
          }
        }
      });
    }
  }

  private loadMeasurementPoints2() {
    if (this.measureList) {
      this.measurePoints2 = [];
      const measures = [...this.measureList];
      measures.forEach((obj) => {
        if (
          obj.counterCode &&
          obj.unitCode &&
          obj.unitCode !== this.component.BOOLEAN &&
          obj.unitCode !== this.component.TEXT
        ) {
          if (!!obj.counterRemarks) {
            this.measurePoints2.push({ label: `${obj.counterRemarks} (${obj.counterCode})`, value: obj.counterCode });
          } else {
            this.measurePoints2.push({ label: `(${obj.counterCode})`, value: obj.counterCode });
          }
        }
      });
    }
  }

  private loadOperators() {
    this.operators = [];
    this.operators.push({ label: '+', value: '+' });
    this.operators.push({ label: '-', value: '-' });
    this.operators.push({ label: '/', value: '/' });
    this.operators.push({ label: '*', value: '*' });
  }

  public addOperator(): void {
    let formula = !!this.document.formula ? this.document.formula : '';
    if (!!this.document.measurePoint1) {
      formula = !!formula ? `${formula};[${this.document.measurePoint1}]` : `[${this.document.measurePoint1}]`;
    }
    if (!!this.document.operator && !!this.document.measurePoint2) {
      formula = `${formula};(${this.document.operator});[${this.document.measurePoint2}]`;
    }
    this.document.formula = formula;
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidated.emit(this.document.formula);
    this.display = false;
  }

  public isPageValid(): boolean {
    let isValidPage = true;
    if (!!this.document.operator) {
      isValidPage = !!this.document.measurePoint2;
    }

    if (!!this.document.measurePoint2) {
      isValidPage = !!this.document.operator;
    }

    return isValidPage && !!this.document.measurePoint1;
  }
}
