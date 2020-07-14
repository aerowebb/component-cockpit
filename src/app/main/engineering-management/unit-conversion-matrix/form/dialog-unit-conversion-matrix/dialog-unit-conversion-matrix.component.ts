import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BireConversionMatrixValueDTO } from '../../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-value-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { UnitConversionMatrixService } from '../../unit-conversion-matrix.service';

@Component({
  selector: 'aw-dialog-unit-conversion-matrix',
  templateUrl: './dialog-unit-conversion-matrix.component.html'
})
export class DialogUnitConversionMatrixComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public ucm: BireConversionMatrixValueDTO;

  @Input()
  public newUcm: boolean;

  @Output()
  public onCreate: EventEmitter<BireConversionMatrixValueDTO>;

  @Output()
  public onUpdate: EventEmitter<BireConversionMatrixValueDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public unitCodes: LabelValue<string>[];

  public measure: BireConversionMatrixValueDTO;

  public constructor(public unitConversionMatrixService: UnitConversionMatrixService) {
    super(ComponentOpenMode.Write, 'DialogUnitConversionMatrixComponent');

    this.onCreate = new EventEmitter<BireConversionMatrixValueDTO>();
    this.onUpdate = new EventEmitter<BireConversionMatrixValueDTO>();
  }

  public getComponentName(): string {
    return 'DialogUnitConversionMatrixComponent';
  }

  public ngOnInit() {
    this.measure = {};
    this.unitCodes = [];
    this.loadDropdown();
  }

  private loadDropdown() {
    this.unitConversionMatrixService.findAllBireMeasureReferences().subscribe((results) => {
      const list: BireMeasureReferenceDTO[] = results;

      list.sort((a, b) => {
        if (a.counterCode && b.counterCode) {
          const counterCodeA = a.counterCode.toLowerCase();
          const counterCodeB = b.counterCode.toLowerCase();
          if (counterCodeA < counterCodeB) {
            return -1;
          }
          if (counterCodeA > counterCodeB) {
            return 1;
          }
        }

        return 0;
      });

      list.forEach((element) => {
        const labelValue: LabelValue<string> = {
          label: !!element.counterCode ? element.counterCode : '',
          value: !!element.counterCode ? element.counterCode : ''
        };
        this.unitCodes.push(labelValue);
      });

      if (!!this.ucm) {
        this.measure = this.ucm;
      }
    });
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (!!this.measure) {
      if (this.newUcm) {
        this.onCreate.emit(this.measure);
        this.display = false;
      } else {
        this.onUpdate.emit(this.measure);
        this.display = false;
      }
    } else {
      super.throwUnboundLocalError('validate', 'this.measure');
    }
  }

  public enableValidate(): boolean {
    if (!!this.measure && !!this.measure.unitCode && this.measure.unitCode !== '' && !!this.measure.fhEquivalent) {
      return true;
    } else {
      return false;
    }
  }
}
