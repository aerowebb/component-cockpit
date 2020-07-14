import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetFormComponent } from '../form/asset-form.component';
import { AssetFormService } from '../form/asset-form.service';
import { AssetSearchService } from '../search/asset-search.service';

@Component({
  selector: 'aw-equipment-form',
  templateUrl: '../form/asset-form.component.html',
  styleUrls: ['../form/asset-form.component.scss']
})
export class EquipmentFormComponent extends AssetFormComponent implements OnInit {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    assetFormService: AssetFormService,
    confirmationService: ConfirmationService,
    translateService: TranslateService,
    pageTocService: PageTocService,
    dynamicAttributesService: DynamicAttributesService,
    sessionService: SessionService,
    dateService: DateService,
    propertiesService: PropertiesService,
    extractTranslationPipe: ExtractTranslationPipe,
    assetSearchService: AssetSearchService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      pageTocService,
      serializationService,
      tabService,
      assetFormService,
      confirmationService,
      translateService,
      dynamicAttributesService,
      sessionService,
      dateService,
      propertiesService,
      extractTranslationPipe,
      assetSearchService
    );
  }
  public getComponentName(): string {
    return 'EquipmentFormComponent';
  }

  public isEngine(): boolean {
    return false;
  }

  public isAircraft(): boolean {
    return false;
  }

  public isTool(): boolean {
    return false;
  }

  public isEquipment(): boolean {
    return true;
  }
}