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

import { ARSearchService } from './ar-search.service';

interface AssetReviewEvent {
  warehouseId?: string;
  output?: FindAllAssetForAirworthinessControlOutput;
}

@Component({
  selector: 'aw-ar-search',
  templateUrl: './ar-search.component.html',
  styleUrls: ['./ar-search.component.scss']
})
export class ARSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public wareHouseList: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public assetReviewSearchService: ARSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.loadWareHouseList();
  }

  public openSelection(event: AssetReviewEvent): void {
    if (!!event.output) {
      let warehouse: string | undefined;
      if (event.warehouseId) {
        const selectedWarehouse = this.wareHouseList.find((wareHouse) => wareHouse.value === event.warehouseId);
        if (selectedWarehouse) {
          warehouse = selectedWarehouse.label;
        }
      }

      const componentId: string = ComponentConstants.MAI_ASSET_REVIEW_FORM;
      const equipmentList = [];
      const fvList = [];
      const funcList = [];
      const objectId: AirworthinessControlFormComponentInput = {
        warehouse,
        equipmentCodeList: [...equipmentList, event.output.equipmentCode],
        familyVariantList: [...fvList, event.output.familyVariant],
        functionList: [...funcList, event.output.function]
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
  }

  public ngOnInit() {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_ASSET_REVIEW_SEARCH;
  }

  private loadWareHouseList(): void {
    this.assetReviewSearchService.findAllWarehouse().subscribe((results) => {
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
