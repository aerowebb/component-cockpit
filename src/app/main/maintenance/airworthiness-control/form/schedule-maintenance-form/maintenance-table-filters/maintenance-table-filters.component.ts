import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../../shared/services/session.service';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { MaintenancePlanTableCriteria } from '../types/maintenance-plan-table-criteria.interface';

@Component({
  selector: 'aw-maintenance-table-filters',
  styleUrls: ['./maintenance-table-filters.component.scss'],
  templateUrl: './maintenance-table-filters.component.html'
})
export class MaintenanceTableFiltersComponent extends GenericComponent {
  @Input()
  public searchAssetList: SelectItem[];

  @Input()
  public searchControlList: SelectItem[];

  @Input()
  public searchCounterList: SelectItem[];

  @Input()
  public searchCriteria: MaintenancePlanTableCriteria;

  @Input()
  public searchTaskGroupList: SelectItem[];

  @Input()
  public searchTaskList: SelectItem[];

  @Input()
  public searchTypeList: SelectItem[];

  @Input()
  public searchWorkPackageList: SelectItem[];

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'MaintenanceTableFiltersComponent';
  }

  public filter(): void {
    this.onFilter.emit();
  }

  public reset(): void {
    this.onReset.emit();
  }

  private init(): void {
    this.onFilter = new EventEmitter<void>();
    this.onReset = new EventEmitter<void>();
  }
}
