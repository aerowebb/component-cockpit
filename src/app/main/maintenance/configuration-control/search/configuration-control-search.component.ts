import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllAssetForAirworthinessControlOutput } from '../../../../shared/types/api-output-types/product-structure-management/find-all-asset-for-airworthiness-control-output.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../../airworthiness-control/types/airworthiness-control-form-component-input.interface';

import { ConfigurationControlSearchService } from './configuration-control-search.service';

interface ConfigurationControlEvent {
  input?: AirworthinessControlFormComponentInput;
  warehouseId?: string;
  output?: FindAllAssetForAirworthinessControlOutput;
}

@Component({
  selector: 'aw-configuration-control-search',
  templateUrl: './configuration-control-search.component.html'
})
export class ConfigurationControlSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public wareHouseList: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly searchService: ConfigurationControlSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.loadWareHouseList();
  }

  public openSelection(event: ConfigurationControlEvent): void {
    if (!!event.output) {
      // getting scope for AssetReview
      let warehouse: string | undefined;
      if (event.warehouseId) {
        const selectedWarehouse = this.wareHouseList.find((wareHouse) => wareHouse.value === event.warehouseId);
        if (selectedWarehouse) {
          warehouse = selectedWarehouse.label;
        }
      }
      const equipmentList = [];
      const fvList = [];
      const funcList = [];
      const scope: AirworthinessControlFormComponentInput = {
        warehouse,
        equipmentCodeList: [...equipmentList, event.output.equipmentCode],
        familyVariantList: [...fvList, event.output.familyVariant],
        functionList: [...funcList, event.output.function]
      };

      // opening configuration control
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(scope)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public ngOnInit() {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_CONFIGURATION_CONTROL_SEARCH;
  }

  private loadWareHouseList(): void {
    this.searchService.findAllWarehouse().subscribe((results) => {
      this.wareHouseList = ListUtils.orEmpty(results)
        .filter((warehouse) => !!warehouse.whCode)
        .map((warehouse) => {
          return {
            label: StringUtils.isNullOrEmpty(warehouse.whName)
              ? warehouse.whCode
              : `${warehouse.whCode} - ${warehouse.whName}`,
            value: warehouse.wareHouseId
          };
        });
    });
  }
}
