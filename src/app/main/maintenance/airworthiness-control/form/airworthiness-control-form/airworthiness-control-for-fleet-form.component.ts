import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { DateService } from '../../../../../shared/services/date.service';
import { ExportService } from '../../../../../shared/services/export.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { FileService } from '../../../../../shared/services/file.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';

import { AirworthinessControlFormComponent } from './airworthiness-control-form.component';
import { AirworthinessControlFormService } from './airworthiness-control-form.service';

@Component({
  selector: 'aw-airworthiness-control-for-fleet-form',
  styleUrls: ['../share.scss', './airworthiness-control-form.component.scss'],
  templateUrl: './airworthiness-control-form.component.html'
})
export class AirworthinessControlForFleetFormComponent extends AirworthinessControlFormComponent {
  public constructor(
    exportService: ExportService,
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    dateService: DateService,
    sessionService: SessionService,
    airworthinessControlFormService: AirworthinessControlFormService,
    propertiesService: PropertiesService,
    translateService: TranslateService,
    fileService: FileService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      dateService,
      sessionService,
      airworthinessControlFormService,
      exportService,
      propertiesService,
      translateService,
      fileService
    );
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;
  }
}
