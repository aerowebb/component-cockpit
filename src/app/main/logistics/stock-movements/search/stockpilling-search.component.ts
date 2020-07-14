import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { LogisticsService } from '../../logistics.service';

import { ComponentContext, SearchComponent } from './search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'aw-stockpilling-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html'
})
export class StockpillingSearcComponent extends SearchComponent {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    logisticsService: LogisticsService,
    sessionService: SessionService,
    extractTranslationPipe: ExtractTranslationPipe,
    propertiesService: PropertiesService,
    searchService: SearchService,
    translateService: TranslateService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      logisticsService,
      sessionService,
      extractTranslationPipe,
      propertiesService,
      searchService,
      translateService
    );
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_MOVEMENTS_SEARCH_STOCKPILLING;
  }

  // ////////////////////////////////////////////////////////////////////////////

  protected filterMovementTypes(): LabelValue<number>[] {
    return super
      .filterMovementTypes()
      .filter((movementType) => movementType.value === BidtStockMvtTypeConstant.STORAGE);
  }

  protected init(): void {
    super.init();

    this.finalRecipientVisible = false;
    this.selectedMovementType = BidtStockMvtTypeConstant.STORAGE;
    this.particularSearch = true;
  }

  public get getCurrentComponentContext(): number {
    return ComponentContext.STOCK_PILLING;
  }

  public get getComponentNameTocall(): string {
    return ComponentConstants.LOG_STOCK_MOVEMENTS_FORM_STOCKPILLING;
  }

  protected loadStatuses(): void {
    this.statuses = [
      {
        label: this.translateService.instant('StockMovementsSearchComponent.noExcecuted') as string,
        value: this.component.NO_EXECUTED
      },
      {
        label: this.translateService.instant('executed') as string,
        value: AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      },
      {
        label: this.translateService.instant('canceled') as string,
        value: AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY
      }
    ];
    this.selectedStatus = this.component.NO_EXECUTED;
  }
}
