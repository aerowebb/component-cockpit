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
import { TransferOrderService } from '../../transfer-order/shared/transfer-order-service';
import { DeliveryFolderSearchService } from '../delivery-folder-search.service';

import { ComponentContext, GoodsReceiptSearchComponent } from './goods-receipt-search.component';

@Component({
  selector: 'aw-local-goods-receipt-search',
  styleUrls: ['./goods-receipt-search.component.scss'],
  templateUrl: './goods-receipt-search.component.html'
})
export class ExternalGoodReceiptSearchComponent extends GoodsReceiptSearchComponent {
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
    public readonly transferOrderService: TransferOrderService,
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
      transferOrderService,
      extractTranslationPipe
    );
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_EXTERNAL_GOODS_RECEIPT_SEARCH;
  }

  public get getCurrentComponentContext(): number {
    return ComponentContext.EXTERNAL;
  }
}
