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
import { AirworthinessControlFormComponentInput } from '../types/airworthiness-control-form-component-input.interface';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'aw-airworthiness-control-search',
  templateUrl: './search.component.html'
})
export class AirworthinessControlSearchComponent extends SearchComponent {
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
    return ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SEARCH;
  }

  public get warehouseVisible(): boolean {
    return true;
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

    const componentId: string =
      this.selection.length === 1
        ? ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM
        : ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;
    const objectId: AirworthinessControlFormComponentInput = {
      warehouse,
      equipmentCodeList: this.selection.map((elt) => elt.equipmentCode as string),
      familyVariantList: this.selection.map((elt) => elt.familyVariant as string),
      functionList: this.selection
        .filter((elt) => !StringUtils.isNullOrEmpty(elt.function))
        .map((elt) => elt.function as string)
    };

    const data: PageComponentData = {
      componentId,
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public search(): void {
    this.resultTableLoading = true;
    super.clearResultTable();
    super.scrollToAnchor(this.resultsContainerAnchor);

    const observable =
      this.selectedSearchCategory === SearchCategory.Asset || StringUtils.isNullOrEmpty(this.searchFleet)
        ? this.searchService.findAllAssetForAirworthinessControl(this.searchAssetObject)
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
