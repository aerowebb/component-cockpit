import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../shared/services/session.service';
import { GenericComponent } from '../../../../shared/types/generic-component';

interface ComponentCockpitMatrixFilter {
  familyVariantCriteria?: string[];
  itemCriteria?: string[];
  pnCriteria?: string[];

  mroCenterList?: string[];
  customerList?: string[];
  matchingList?: string[];

  sentenceList?: string[];
  decisionList?: string[];
  typeList?: string[];
  statusList?: string[];
}
@Component({
  selector: 'aw-component-cockpit-matrix-filters',
  templateUrl: './component-cockpit-matrix-filters.component.html',
  styleUrls: ['./shared/shared.scss']
})
export class ComponentCockpitMatrixFiltersComponent extends GenericComponent {
  @Input()
  public familyVariantList: SelectItem[];

  @Input()
  public itemList: SelectItem[];

  @Input()
  public pnList: SelectItem[];

  @Input()
  public mroCenterList: SelectItem[];

  @Input()
  public customerList: SelectItem[];

  @Input()
  public matchingList: SelectItem[];

  @Input()
  public sentenceList: SelectItem[];

  @Input()
  public decisionList: SelectItem[];

  @Input()
  public typeList: SelectItem[];

  @Input()
  public statusList: SelectItem[];

  @Input()
  public searchCriteria: ComponentCockpitMatrixFilter;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'ComponentCockpitMatrixFiltersComponent';
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
