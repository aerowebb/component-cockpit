import { PageTocService } from '../components/component-sidebar/page-toc.service';
import { ComponentOpenMode } from '../enums/component-open-mode.enum';
import { FavoriteService } from '../services/favorite.service';
import { LoaderService } from '../services/loader.service';
import { MessageService } from '../services/message.service';
import { SerializationService } from '../services/serialization.service';
import { TabService } from '../services/tab.service';

import { PageComponent } from './page-component';
import { PageComponentData } from './page-component-data.interface';

export abstract class FormPageComponent<T extends PageComponentData> extends PageComponent<T> {
  protected constructor(
    openMode: ComponentOpenMode,
    _favoriteService: FavoriteService,
    _loaderService: LoaderService,
    _messageService: MessageService,
    _serializationService: SerializationService,
    _tabService: TabService,
    _pageTocService?: PageTocService
  ) {
    super(
      openMode,
      _favoriteService,
      _loaderService,
      _messageService,
      _serializationService,
      _tabService,
      _pageTocService
    );
  }
}
