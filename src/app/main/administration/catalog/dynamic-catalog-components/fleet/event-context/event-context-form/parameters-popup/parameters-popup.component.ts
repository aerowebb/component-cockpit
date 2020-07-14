import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../../../../shared/enums/component-open-mode.enum';
import { BidoParameterDTO } from '../../../../../../../../shared/types/api-types/bido-parameter-dto.interface';
import { DialogComponent } from '../../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../../shared/types/label-value.interface';
import { EventContextService } from '../../event-context.service';

@Component({
  selector: 'aw-parameters-popup',
  templateUrl: './parameters-popup.component.html'
})
export class ParametersPopupComponent extends DialogComponent implements OnInit {
  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public parameter: BidoParameterDTO | null;

  @Input()
  public isNewParameter: boolean;

  @Output()
  public onCreate: EventEmitter<BidoParameterDTO>;

  @Output()
  public onUpdate: EventEmitter<BidoParameterDTO>;

  public readonly componentId: string;

  public displayValue: boolean;

  public units: LabelValue<string>[];

  public parameterObject: BidoParameterDTO;

  public constructor(private readonly eventContextService: EventContextService) {
    super(ComponentOpenMode.Write, 'ParametersPopupComponent');

    this.onCreate = new EventEmitter<BidoParameterDTO>();
    this.onUpdate = new EventEmitter<BidoParameterDTO>();

    this.units = [];

    this.parameterObject = {};

    this.loadUnitDropdown();
  }

  public ngOnInit() {
    if (!this.parameter) {
      this.parameter = {};
    }
  }

  public loadUnitDropdown(): void {
    this.eventContextService.loadUnitDropdown().subscribe((result) => {
      // this.units = result || [];
      result.forEach((res) => {
        const unit: LabelValue<string> = {
          label: '',
          value: ''
        };
        unit.label = res.value;
        unit.value = res.label;
        this.units.push(unit);
      });

      this.units = this.units.sort((a, b) =>
        !!a.label && !!b.label && a.value.toLowerCase() > b.value.toLowerCase() ? 1 : -1
      );

      if (this.parameter) {
        this.parameterObject = this.parameter;
      }
    });
  }

  public associate(): void {
    if (this.isNewParameter) {
      this.onCreate.emit(this.parameterObject);
      this.display = false;
    } else {
      this.onUpdate.emit(this.parameterObject);
      this.display = false;
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public enableAssociateButton(): boolean {
    if (
      !!this.parameterObject.code &&
      this.parameterObject.code.trim().length !== 0 &&
      !!this.parameterObject.name &&
      this.parameterObject.name.trim().length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}
