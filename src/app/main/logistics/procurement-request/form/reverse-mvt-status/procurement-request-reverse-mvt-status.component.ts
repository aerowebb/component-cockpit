import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BidtProcurementRequestDTO } from '../../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtStockMvtDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { LogisticalUtils } from '../../../../../shared/utils/logistic-utils';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-procurement-request-reverse-mvt-status',
  templateUrl: './procurement-request-reverse-mvt-status.component.html'
})
export class ProcurementRequestReverseMvtStatusComponent extends GenericComponent implements OnInit {
  @Input('mvts')
  public mvtObservable$: Observable<BidtStockMvtDTO[]>;

  @Input()
  public procurementRequest: BidtProcurementRequestDTO;

  @Output()
  public readonly onClick: EventEmitter<boolean>;

  public mvts: BidtStockMvtDTO[];
  public steps: StepItem[];
  public showDetails: boolean;

  public constructor(private readonly translateService: TranslateService) {
    super(ComponentOpenMode.Write);

    this.mvts = [];
    this.steps = [];
    this.showDetails = false;
    this.onClick = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {
    this.mvtObservable$.subscribe((mvts: BidtStockMvtDTO[]) => {
      this.mvts = mvts;
      this.showDetails = false;
      this.initSteps();
    });
  }

  public getComponentName(): string {
    return 'ProcurementRequestReverseMvtStatusComponent';
  }

  private initSteps(): void {
    this.initArray();

    if (LogisticalUtils.isReversedTransfer(this.mvts)) {
      this.steps.slice(0, this.steps.length).forEach((step) => {
        step.status = 'previous';
      });
    } else if (LogisticalUtils.isReversingTransfer(this.mvts)) {
      this.steps.slice(0, this.steps.length - 1).forEach((step) => {
        step.status = 'previous';
      });
    } else {
      this.steps[0].status = 'previous';

      if (
        !!this.procurementRequest &&
        this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES &&
        LogisticalUtils.isExecutingTransfer(this.mvts)
      ) {
        this.steps[1].status = 'previous';
      }
    }
  }

  private initArray(): void {
    this.steps = [];

    const waitingKey = this.getTranslateKey('waiting');
    const executingKey = this.getTranslateKey('executing');
    const reversingKey = this.getTranslateKey('reversing');
    const reversedKey = this.getTranslateKey('reversed');

    this.translateService.get([waitingKey, executingKey, reversingKey, reversedKey]).subscribe({
      next: (results: { [key: string]: string }) => {
        const waitingLabel = !!results ? results[waitingKey] : 'Waiting';
        const executingLabel = !!results ? results[executingKey] : 'Executing';
        const reversingLabel = !!results ? results[reversingKey] : 'Reversing';
        const reversedLabel = !!results ? results[reversedKey] : 'Reversed';

        this.steps = [
          {
            label: executingLabel,
            status: 'next'
          },
          {
            label: reversingLabel,
            status: 'next'
          },
          {
            label: reversedLabel,
            status: 'next'
          }
        ];

        if (
          !!this.procurementRequest &&
          this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING_ES
        ) {
          this.steps = [
            {
              label: waitingLabel,
              status: 'next'
            },
            ...this.steps
          ];
        }
      }
    });
  }

  public schowDetails(): void {
    this.showDetails = !this.showDetails;
    this.onClick.emit(this.showDetails);
  }
}
