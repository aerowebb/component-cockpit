import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { SearchCategory } from '../enums/search-category.enum';
import { ScheduleMaintenanceFormComponentInput } from '../types/schedule-maintenance-form-component-input.interface';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'aw-schedule-maintenance-search',
  templateUrl: './search.component.html'
})
export class ScheduleMaintenanceSearchComponent extends SearchComponent {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    searchService: SearchService,
    sessionService: SessionService,
    propertiesService: PropertiesService,
    translateService: TranslateService
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      searchService,
      propertiesService,
      translateService
    );
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_SEARCH;
  }

  public get warehouseVisible(): boolean {
    return false;
  }

  public openSelection(): void {
    let warehouse: string | undefined;
    if (this.searchAssetObject.warehouseCode) {
      const selectedWarehouse = this.wareHouseList.find(
        (wareHouse) => wareHouse.value === this.searchAssetObject.warehouseCode
      );
      if (selectedWarehouse) {
        warehouse = selectedWarehouse.label;
      }
    }

    this.selection.forEach((elt) => {
      const objectId: ScheduleMaintenanceFormComponentInput = {
        warehouse,
        equipmentCode: elt.equipmentCode as string,
        familyVariantCode: elt.familyVariant,
        function: elt.function
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Write,
        componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public search(): void {
    this.resultTableLoading = true;
    super.clearResultTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    const observable =
      this.selectedSearchCategory === SearchCategory.Asset || StringUtils.isNullOrEmpty(this.searchFleet)
        ? this.searchService.findAllAssetForMaintenancePlanning(this.searchAssetObject)
        : this.searchService.findAllFleetForAirworthinessControl(this.searchFleet as string);

    observable.subscribe((result) => {
      this.resultTableLoading = false;

      this.resultTable.moreResults = result.moreResults;
      this.resultTable.list = ListUtils.orEmpty(result.list).filter(
        (elt) => !StringUtils.isNullOrEmpty(elt.equipmentCode) && !StringUtils.isNullOrEmpty(elt.familyVariant)
      );

      super.differ(() => {
        super.scrollToAnchor(this.resultsContainerAnchor);
      });
    });
  }
}
