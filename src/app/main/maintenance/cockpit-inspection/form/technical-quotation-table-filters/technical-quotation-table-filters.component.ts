import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

interface TechnicalQuotationTableFilter {
  decision?: string[];
  sentence?: string[];
  control?: string[];
  pn?: string;
  wo?: string;
}

@Component({
  selector: 'aw-technical-quotation-table-filters',
  templateUrl: './technical-quotation-table-filters.component.html',
  styleUrls: ['../shared/shared.scss']
})
export class TechnicalQuotationTableFiltersComponent extends GenericComponent {
  private static readonly OK: string = ControlConfigConstants.ICON_GREEN;
  private static readonly WARNING: string = ControlConfigConstants.ICON_YELLOW;
  private static readonly NOK: string = ControlConfigConstants.ICON_RED;

  @Input()
  public decisionList: LabelValue<string>[];

  @Input()
  public sentenceList: LabelValue<string>[];

  @Input()
  public configurationList: LabelValue<string>[];

  @Input()
  public pnList: LabelValue<string>[];

  @Input()
  public woCodeList: LabelValue<string>[];

  @Input()
  public searchCriteria: TechnicalQuotationTableFilter;

  @Output()
  public onFilter: EventEmitter<void>;

  @Output()
  public onReset: EventEmitter<void>;

  public constructor(public sessionService: SessionService) {
    super(ComponentOpenMode.Write);

    this.init();
  }

  public getComponentName(): string {
    return 'TechnicalQuotationTableFiltersComponent';
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

    this.configurationList = [];
    this.configurationList.push(
      { label: 'OK', value: TechnicalQuotationTableFiltersComponent.OK },
      { label: 'WARNING', value: TechnicalQuotationTableFiltersComponent.WARNING },
      { label: 'NOK', value: TechnicalQuotationTableFiltersComponent.NOK }
    );
  }
}
