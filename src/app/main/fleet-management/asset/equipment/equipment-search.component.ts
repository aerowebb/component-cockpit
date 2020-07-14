import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
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
import { AssetInstalledInput } from '../../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { AssetRemovedInput } from '../../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { AssetSearchComponent } from '../search/asset-search.component';
import { AssetSearchService } from '../search/asset-search.service';
import { DavAssetSearchService } from '../search/asset-search.service-dassault';

@Component({
  selector: 'aw-equipment-search',
  templateUrl: '../search/asset-search.component.html',
  styleUrls: ['../form/asset-form.component.scss']
})
export class EquipmentSearchComponent extends AssetSearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'equipment-list';
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.EQUIPMENT_SEARCH_CRITERIA_ID;
  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    sessionService: SessionService,
    assetSearchService: AssetSearchService,
    davAssetSearchService: DavAssetSearchService,
    confirmationService: ConfirmationService,
    translateService: TranslateService,
    exportService: ExportService,
    dateService: DateService,
    propertiesService: PropertiesService,
    _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      sessionService,
      assetSearchService,
      davAssetSearchService,
      confirmationService,
      translateService,
      exportService,
      dateService,
      propertiesService,
      _formatSelectOption
    );
  }
  public getComponentName(): string {
    return 'EquipmentSearchComponent';
  }

  protected getTableExportName(): string {
    return EquipmentSearchComponent.TABLE_EXPORT_NAME;
  }

  public isEngine(): boolean {
    return false;
  }

  public isAircraft(): boolean {
    return false;
  }
  public isTool(): boolean {
    return false;
  }

  public openNewEquipment(): void {
    this.openEquipment(undefined, ComponentOpenMode.Create);
  }

  public openSelectedEquipment(): void {
    this.selectedEquipments.forEach((equipment) => {
      if (equipment && equipment.equipmentCode) {
        this.openEquipment(equipment.equipmentCode, ComponentOpenMode.Read);
      }
    });
  }

  public openLinkEquipment(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public installSelectedEquipments(): void {
    const assetsToInstall: AssetInstalledInput = {
      assetCode: []
    };
    this.selectedEquipments.forEach((equipment) => {
      if (!!assetsToInstall && !!assetsToInstall.assetCode && equipment && equipment.equipmentCode) {
        assetsToInstall.assetCode.push(equipment.equipmentCode);
      }
    });
    if (!!assetsToInstall && !!assetsToInstall.assetCode && assetsToInstall.assetCode.length > 0) {
      this.openAssetsToBeInstalled(assetsToInstall, ComponentOpenMode.Read);
    }
  }

  public openAssetsToBeInstalled(objectId: AssetInstalledInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.InstallAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'InstallAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.isNavigationOverlayVisible = false;
  }

  public removeSelectedEquipments(): void {
    const assetsToRemove: AssetRemovedInput = {
      assetCode: []
    };
    this.selectedEquipments.forEach((equipment) => {
      if (!!assetsToRemove && !!assetsToRemove.assetCode && equipment && equipment.equipmentCode) {
        assetsToRemove.assetCode.push(equipment.equipmentCode);
      }
    });
    this.openAssetsToBeRemoved(assetsToRemove, ComponentOpenMode.Read);
  }

  public openAssetsToBeRemoved(objectId: AssetRemovedInput | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.RemoveAssetComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'RemoveAssetComponent',
      objectId: this.serializationService.serialize(objectId),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
    this.isNavigationOverlayVisible = false;
  }
}
