import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentForAirworthinessControlCustomDTO } from '../../../../shared/types/api-output-types/airworthiness-management/bido-equipment-for-airworthiness-control-custom-dto.interface';
import { AppliedConfigurationManagementInput } from '../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

@Component({
  selector: 'aw-control-ground-equipment-search',
  templateUrl: './control-ground-equipment-search.component.html'
})
export class ControlGroundEquipmentSearchComponent extends PageComponent<PageComponentData> implements OnInit {
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
    return ComponentConstants.LOG_TOOLS_CONTROL_GROUND_EQUIPMENT;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
  }

  /****************************
   * Opens TOOLS Form
   ****************************/
  public openToolForm(event: BidoEquipmentForAirworthinessControlCustomDTO[]) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_TOOLS_MAINTENANCE_STATUS_FORM,
      openMode: ComponentOpenMode.Read
    };
    if (!!event) {
      const toolsList: string[] = [];
      event.forEach((obj) => {
        if (obj.equipmentCode) {
          toolsList.push(obj.equipmentCode);
        }
      });
      data.objectId = this.serializationService.serialize(toolsList);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAppliedConfigurationManagement(event: BidoEquipmentForAirworthinessControlCustomDTO[]): void {
    event.forEach((row) => {
      if (!!row.equipmentCode) {
        const objectId: AppliedConfigurationManagementInput = {
          equipmentCodeList: [row.equipmentCode]
        };

        const data: PageComponentData = {
          id: this.tabService.generateId(),
          openMode: ComponentOpenMode.Read,
          componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
          objectId: this.serializationService.serialize(objectId)
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    });
  }
}