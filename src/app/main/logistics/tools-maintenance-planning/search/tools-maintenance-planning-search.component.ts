import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentForAirworthinessControlCustomDTO } from '../../../../shared/types/api-output-types/airworthiness-management/bido-equipment-for-airworthiness-control-custom-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ScheduleMaintenanceFormComponentInput } from '../types/schedule-maintenance-form-component-input.interface';

@Component({
  selector: 'aw-tools-maintenance-planning-search',
  styleUrls: ['./tools-maintenance-planning-search.component.scss'],
  templateUrl: './tools-maintenance-planning-search.component.html'
})
export class ToolsMaintenancePlanningSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  /****************************
   * Opens TOOLS Form
   ****************************/
  public openToolForm(event: BidoEquipmentForAirworthinessControlCustomDTO[]) {
    event.forEach((obj) => {
      const objectId: ScheduleMaintenanceFormComponentInput = {
        warehouse: undefined,
        equipmentCode: obj.equipmentCode as string,
        familyVariantCode: obj.familyVariant,
        function: obj.function
      };

      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_PLANNING_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }
}
