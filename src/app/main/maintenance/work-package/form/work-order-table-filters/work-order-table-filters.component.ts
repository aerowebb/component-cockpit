import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { GenericComponent } from '../../../../../shared/types/generic-component';
import { WorkOrderTableCriteria } from '../types/work-order-table-criteria.interface';

import { ComponentOpenMode } from './../../../../../shared/enums/component-open-mode.enum';
import { WorkPackageFormService } from './../work-package-form.service';
import { WorkOrderTableFiltersService } from './work-order-table-filters.service';

@Component({
  selector: 'aw-work-order-table-filters',
  styleUrls: ['./work-order-table-filters.component.scss'],
  templateUrl: './work-order-table-filters.component.html'
})
export class WorkOrderTableFiltersComponent extends GenericComponent {
  @Input()
  public searchCriteria: WorkOrderTableCriteria;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public statusList: SelectItem[];
  public woTypeList: SelectItem[];
  public userList: SelectItem[];
  public assetList: SelectItem[];
  public zoneList: SelectItem[];
  public qualificationList: SelectItem[];

  public constructor(
    private readonly wpFormService: WorkPackageFormService,
    private readonly workOrderTableFiltersService: WorkOrderTableFiltersService
    ) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'WorkOrderTableFiltersComponent';
  }

  public filter(): void {
    this.onFilter.emit();
  }

  public reset(): void {
    this.onReset.emit();
  }

  private init(): void {
    this.wpFormService.woStatusList$.subscribe((statusList) => (this.statusList = statusList));
    this.wpFormService.woTypeList$.subscribe((list) => (this.woTypeList = list));
    this.workOrderTableFiltersService.assignetToFilterList$.subscribe((list) => (this.userList = list));
    this.workOrderTableFiltersService.assetFilterList$.subscribe((list) => (this.assetList = list));
    this.workOrderTableFiltersService.zoneFilterList$.subscribe((list) => (this.zoneList = list));
    this.workOrderTableFiltersService.qualificationList$.subscribe((list) => (this.qualificationList = list));

    this.onFilter = new EventEmitter<void>();
    this.onReset = new EventEmitter<void>();
  }
}
