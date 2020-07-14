import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { LogisticsService } from '../../logistics.service';
import { SearchService } from '../search/search.service';

import { ComponentContext, FormComponent, StockMovementTableInterface } from './form.component';
import { FormService } from './form.service';

@Component({
  selector: 'aw-stock-movements-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html'
})
export class StockMovementsFormComponent extends FormComponent {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    sessionService: SessionService,
    translateService: TranslateService,
    extractTranslationPipe: ExtractTranslationPipe,
    logisticsService: LogisticsService,
    propertiesService: PropertiesService,
    searchService: SearchService,
    formService: FormService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      translateService,
      extractTranslationPipe,
      logisticsService,
      propertiesService,
      searchService,
      formService
    );
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_MOVEMENTS_FORM;
  }

  // ////////////////////////////////////////////////////////////////////////////

  protected init(): void {
    super.init();
  }

  public get getCurrentComponentContext(): number {
    return ComponentContext.STOCK_MOVEMENT;
  }

  public sortStockMovementRows(): StockMovementTableInterface[] {
    return this.stockMovementsRows.sort((a, b) => (a.mvtStockCode as string).localeCompare(b.mvtStockCode as string));
  }
}
