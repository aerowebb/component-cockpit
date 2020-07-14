import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PageService } from '../../../shared/services/page.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { DialogWorkOrderEditService } from '../../maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { WorkPackageSearchComponent } from '../../maintenance/work-package/search/work-package-search.component';
import { WorkPackageSearchService } from '../../maintenance/work-package/search/work-package-search.service';
import { WorkPackageService } from '../../maintenance/work-package/work-package.service';
import { AssetSearchService } from '../asset/search/asset-search.service';

@Component({
  selector: 'aw-search-all-work-package',
  templateUrl: '../../maintenance/work-package/search/work-package-search.component.html',
  styleUrls: ['../../maintenance/work-package/search/work-package-search.component.scss']
})
export class SearchAllWorkPackageComponent extends WorkPackageSearchComponent {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    sessionService: SessionService,
    confirmationService: ConfirmationService,
    pageService: PageService,
    wpSearchService: WorkPackageSearchService,
    wpService: WorkPackageService,
    assetSearchService: AssetSearchService,
    translateService: TranslateService,
    dialogWorkOrderEditService: DialogWorkOrderEditService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      translateService,
      confirmationService,
      pageService,
      wpSearchService,
      wpService,
      assetSearchService,
      dialogWorkOrderEditService
    );
    this.globalSearch = true;
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_SEARCH_WORK_PACKAGE;
  }
}
