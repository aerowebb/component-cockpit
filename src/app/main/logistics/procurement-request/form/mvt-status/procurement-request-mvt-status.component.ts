import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { StepItem } from '../../../../../shared/components/stepper/stepper.component';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../../shared/constants/bidt-stock-mvt-constants';
import { BidtStockMvtTypeConstant } from '../../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { BidtStockMvtDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'aw-procurement-request-mvt-status',
  templateUrl: './procurement-request-mvt-status.component.html'
})
export class ProcurementRequestMvtStatusComponent extends GenericComponent implements OnInit {
  @Input('mvts')
  public mvtObservable$: Observable<BidtStockMvtDTO[]>;
  @Input()
  public componentName: string;

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
    return this.componentName;
  }

  private initSteps(): void {
    this.initArray();

    this.mvts.forEach((mvt: BidtStockMvtDTO) => {
      if (mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER) {
        if (mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
        } else if (mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
        } else if (!!mvt.mvtStatus && mvt.mvtStatus >= AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
        }
      } else if (mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT) {
        if (mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
        } else if (!!mvt.mvtStatus && mvt.mvtStatus >= AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
        }
      } else if (mvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT) {
        if (mvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
        } else if (!!mvt.mvtStatus && mvt.mvtStatus >= AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY) {
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_BEFORE_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_TRANSFERT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_DEBIT].status = 'previous';
          this.steps[BidtStockMvtConstants.MVT_STATUS_STEP_WAY_CREDIT].status = 'previous';
        }
      }
    });
  }

  private initArray(): void {
    this.steps = [];
    const mvtTransfert: BidtStockMvtDTO | undefined = this.mvts.find(
      (m: BidtStockMvtDTO) => m.stockMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER
    );
    const pickingKey = this.getTranslateKey('picking');
    const crossDockKey = this.getTranslateKey('crossDock');
    const executionPickingKey = this.getTranslateKey('executionPicking');
    const deliveryKey = this.getTranslateKey('delivery');
    const deliveredKey = this.getTranslateKey('delivered');

    this.translateService.get([pickingKey, crossDockKey, executionPickingKey, deliveryKey, deliveredKey]).subscribe({
      next: (results: { [key: string]: string }) => {
        const pickingLabel = !!results ? results[pickingKey] : 'picking';
        const crossDockLabel = !!results ? results[crossDockKey] : 'cross-dock';
        const executionPickingLabel = !!results ? results[executionPickingKey] : 'picking execution';
        const deliveryLabel = !!results ? results[deliveryKey] : 'delivery';
        const deliveredLabel = !!results ? results[deliveredKey] : 'delivered';

        this.steps = [
          {
            label:
              !!mvtTransfert &&
              !!mvtTransfert.bidtStockMvtType &&
              mvtTransfert.bidtStockMvtType.id === BidtStockMvtTypeConstant.PICKING
                ? pickingLabel
                : crossDockLabel,
            status: 'next'
          },
          {
            label: executionPickingLabel,
            status: 'next'
          },
          {
            label: deliveryLabel,
            status: 'next'
          },
          {
            label: deliveredLabel,
            status: 'next'
          }
        ];
      }
    });
  }

  public schowDetails(): void {
    this.showDetails = !this.showDetails;
    this.onClick.emit(this.showDetails);
  }
}
