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
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { AssetSearchComponent } from '../search/asset-search.component';
import { AssetSearchService } from '../search/asset-search.service';
import { DavAssetSearchService } from '../search/asset-search.service-dassault';

@Component({
  selector: 'aw-search-search',
  templateUrl: '../search/asset-search.component.html',
  styleUrls: ['../form/asset-form.component.scss']
})
export class ToolSearchComponent extends AssetSearchComponent {
  private static readonly TABLE_EXPORT_NAME: string = 'tools-list';
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.TOOL_SEARCH_CRITERIA_ID;
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
    this.resultsTableCols = [
      { field: 'sn', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'familyVariantCode', alignment: 'left' },
      { field: 'equipmentDesignation', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'eisDate', alignment: 'left' },
      { field: 'equipmentCode', alignment: 'left' }
    ];
  }
  public getComponentName(): string {
    return 'ToolSearchComponent';
  }

  protected getTableExportName(): string {
    return ToolSearchComponent.TABLE_EXPORT_NAME;
  }

  public isEngine(): boolean {
    return false;
  }

  public isAircraft(): boolean {
    return false;
  }

  public isTool(): boolean {
    return true;
  }

  public openNewEquipment(): void {
    this.openEquipment(undefined, ComponentOpenMode.Create);
  }

  public openSelectedEquipment(): void {
    this.selectedTool.forEach((equipment) => {
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
    const labelKey = 'transaction.ToolFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'ToolFormComponent',
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
}
