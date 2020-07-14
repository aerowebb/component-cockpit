import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../shared/services/session.service';
import { GenericComponent } from '../../../../shared/types/generic-component';
import { MyJobsCardsTableCriteria } from '../types/my-jobs-cards-table-criteria.interface';

@Component({
  selector: 'aw-my-jobs-cards-table-filters',
  styleUrls: ['./my-jobs-cards-table-filters.component.scss'],
  templateUrl: './my-jobs-cards-table-filters.component.html'
})
export class MyJobsCardsTableFiltersComponent extends GenericComponent {
  @Input()
  public searchStatusList: SelectItem[];

  @Input()
  public searchTypeList: SelectItem[];

  @Input()
  public searchWOAssetList: SelectItem[];

  @Input()
  public searchWPAssetList: SelectItem[];

  @Input()
  public searchWOCodeList: SelectItem[];

  @Input()
  public searchUserList: SelectItem[];

  @Input()
  public nextDaysList: SelectItem[];

  @Input()
  public searchCriteria: MyJobsCardsTableCriteria;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public previousNexDaysValue: number | undefined;

  public constructor(public sessionService: SessionService, public translateService: TranslateService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'MyJobsCardsTableFiltersComponent';
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
    this.nextDaysList = [];
    this.nextDaysList.push({
      label: this.translateService.instant(this.getTranslateKey('nextDay')),
      value: 1
    });
    this.nextDaysList.push({
      label: this.translateService.instant(this.getTranslateKey('nextWeek')),
      value: 7
    });
  }

  public onNextDayChange(): void {
    if (this.searchCriteria.nextDays && this.searchCriteria.nextDays === this.previousNexDaysValue) {
      this.searchCriteria.nextDays = undefined;
    }
    this.previousNexDaysValue = this.searchCriteria.nextDays;
  }
}
