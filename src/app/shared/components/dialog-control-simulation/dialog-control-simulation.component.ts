import { Component, EventEmitter, Output } from '@angular/core';

import { SimulationCriteria } from '../../../main/maintenance/airworthiness-control/types/simulation-criteria.interface';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { SessionService } from '../../../shared/services/session.service';
import { DialogComponent } from '../../../shared/types/dialog-component';

@Component({
  selector: 'aw-dialog-control-simulation',
  templateUrl: './dialog-control-simulation.component.html'
})
export class DialogControlSimulationComponent extends DialogComponent {
  @Output()
  public onValidated: EventEmitter<SimulationCriteria>;

  public criteria: SimulationCriteria;

  public constructor(public inputValidationService: InputValidationService, public sessionService: SessionService) {
    super(ComponentOpenMode.Write, 'DialogControlSimulationComponent');

    this.criteria = {
      atDate: undefined,
      inCycles: undefined,
      inHours: undefined
    };
    this.onValidated = new EventEmitter<SimulationCriteria>();
  }

  public isValid(): boolean {
    return (
      this.criteria.atDate !== undefined || this.criteria.inCycles !== undefined || this.criteria.inHours !== undefined
    );
  }

  public valid(): boolean {
    if (!!this.criteria.inHours) {
      if (!this.isPositiveInteger(this.criteria.inHours)) {
        return false;
      }
    }

    if (!!this.criteria.inCycles) {
      if (!this.isPositiveInteger(this.criteria.inCycles)) {
        return false;
      }
    }

    if (!!this.criteria.inCycles || !!this.criteria.inHours || !!this.criteria.atDate) {
      return true;
    }

    return false;
  }

  private isPositiveInteger(value): boolean {
    if (isNaN(value)) {
      return false;
    }

    const val = parseFloat(value);

    if (parseInt(value, 10) === val && val > 0) {
      return true;
    }

    return false;
  }

  public validate(): void {
    this.criteria.inCycles = this.criteria.inCycles || 0;
    this.criteria.inHours = this.criteria.inHours || 0;

    this.onValidated.emit(this.criteria);
    this.closeDialog();
  }
}
