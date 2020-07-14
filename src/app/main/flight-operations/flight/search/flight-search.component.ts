import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { SettingsFormService } from '../../../administration/settings/form/settings-form.service';
import { FunctionalLocationSearchService } from '../../../engineering-management/functional-location-search/functional-location-search.service';
import { FlightInputData } from '../types/flight-input-data.interface';
import { MissionEquipmentRow } from '../types/mission-equipment-row.interface';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'aw-flight-search',
  templateUrl: './search.component.html'
})
export class FlightSearchComponent extends SearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'flight-list';

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    sessionService: SessionService,
    confirmationService: ConfirmationService,
    dateService: DateService,
    exportService: ExportService,
    searchService: SearchService,
    propertiesService: PropertiesService,
    translateService: TranslateService,
    functionalLocationSearchService: FunctionalLocationSearchService,
    settingsFormService: SettingsFormService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      confirmationService,
      dateService,
      exportService,
      searchService,
      propertiesService,
      translateService,
      functionalLocationSearchService,
      settingsFormService
    );
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHT_SEARCH;
  }

  public get isFlightSearch(): boolean {
    return true;
  }

  public exportFlightLogbookVisible(): boolean {
    return true;
  }

  public openNewMissionEquipment(): void {
    this.openMissionEquipment(undefined, ComponentOpenMode.Create);
  }

  protected getMissionEquipmentTableExportName(): string {
    return FlightSearchComponent.TABLE_EXPORT_NAME;
  }

  protected openMissionEquipment(missionEquipment: MissionEquipmentRow | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      openMode
    };
    if (!!missionEquipment) {
      const missionEquipmentId: FlightInputData = {
        equipmentCode: missionEquipment.equipmentCode,
        missionCode: missionEquipment.missionCode,
        occurrence: missionEquipment.occurrence,
        chronoNumber: missionEquipment.chronoNumber
      };
      data.objectId = this.serializationService.serialize(missionEquipmentId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
