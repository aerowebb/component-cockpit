import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { GenericComponent } from '../../../../../shared/types/generic-component';

interface SubAssemblyTableFilter {
  progress?: string[];
  configuration?: string[];
  family?: string;
}
@Component({
  selector: 'aw-sub-assembly-table-filters',
  templateUrl: './sub-assembly-table-filters.component.html',
  styleUrls: ['../shared/shared.scss']
})
export class SubAssemblyTableFiltersComponent extends GenericComponent {
  @Input()
  public progressList: SelectItem[];

  @Input()
  public configurationList: SelectItem[];

  @Input()
  public itemFamilyList: SelectItem[];

  @Input()
  public searchCriteria: SubAssemblyTableFilter;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'SubAssemblyTableFiltersComponent';
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
