import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../shared/services/session.service';
import { FindEmployeeWorksInput } from '../../../../shared/types/api-input-types/bidt-employee/find-employee-works-input.interface';
import { GenericComponent } from '../../../../shared/types/generic-component';

@Component({
  selector: 'aw-work-flight-table-filters',
  styleUrls: ['./work-flight-table-filters.component.scss'],
  templateUrl: './work-flight-table-filters.component.html'
})
export class WorkFlightTableFiltersComponent extends GenericComponent {
  @Input()
  public searchCriteria: FindEmployeeWorksInput;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write);
    this.onFilter = new EventEmitter<void>();
    this.onReset = new EventEmitter<void>();
    this.searchCriteria = this.searchCriteria || {};
  }

  public getComponentName(): string {
    return 'WorkFlightTableFiltersComponent';
  }

  public filter(): void {
    this.onFilter.emit();
  }

  public reset(): void {
    this.onReset.emit();
  }
}
