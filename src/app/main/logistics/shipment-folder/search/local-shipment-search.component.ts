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
import { DeliveryFolderSearchService } from '../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../logistics.service';

import { ComponentContext, ShipmentFolderSearchComponent } from './shipment-folder-search.component';

@Component({
  selector: 'aw-local-shipment-search',
  styleUrls: ['./shipment-folder-search.component.scss'],
  templateUrl: './shipment-folder-search.component.html'
})
export class LocalShipmentSearchComponent extends ShipmentFolderSearchComponent {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    public readonly dfSearchService: DeliveryFolderSearchService,
    public readonly logisticsService: LogisticsService,
    public readonly propertiesService: PropertiesService,
    public readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      translateService,
      dfSearchService,
      logisticsService,
      propertiesService,
      extractTranslationPipe
    );
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_GOODS_LOCAL_SHIPMENT_SEARCH;
  }

  public get getCurrentComponentContext(): number {
    return ComponentContext.LOCALE;
  }
}
