import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';

interface FleetDataCopyRow {
  asset: string;
  equipmentCode?: string;
  familyVariantCode?: string;
  pnCode?: string;
  sn?: string;
  equipmentDesignation?: string;
  ownerCustomerCode?: string;
  _obj: BidoEquipmentDTO;
}

@Component({
  selector: 'aw-fleet-data-copy-search',
  templateUrl: './fleet-data-copy-search.component.html'
})
export class FleetDataCopySearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentId: string;

  public aircraftStatusList: LabelValue<string>[];
  public attributesMap: Map<string, string>;
  public currentAssets: BidoEquipmentDTO[];
  public isLoading: boolean;
  public resultsTableCols: TableColumn[];
  public resultsTableAircraft: SearchResultsDTO<FleetDataCopyRow>;
  public resultsTableEngine: SearchResultsDTO<FleetDataCopyRow>;
  public resultsTableEquipment: SearchResultsDTO<FleetDataCopyRow>;
  public selectedAircrafts: FleetDataCopyRow[];
  public selectedEngines: FleetDataCopyRow[];
  public selectedEquipments: FleetDataCopyRow[];
  public selectedType: string;
  public showFleetDataCopyPopup: boolean;
  public types: SelectItem[];

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.attributesMap = new Map<string, string>();
    this.resultsTableAircraft = {
      list: [],
      moreResults: false
    };
    this.resultsTableEngine = {
      list: [],
      moreResults: false
    };
    this.resultsTableEquipment = {
      list: [],
      moreResults: false
    };

    this.types = [
      { label: 'Aircraft', value: 'aircraft' },
      { label: 'Engine', value: 'engine' },
      { label: 'Equipment', value: 'equipment' }
    ];

    this.selectedAircrafts = [];
    this.selectedEngines = [];
    this.selectedEquipments = [];

    this.resultsTableCols = [
      { field: 'asset', alignment: 'left', width: '30%' },
      { field: 'familyVariantCode', alignment: 'left', width: '20%' },
      { field: 'equipmentDesignation', alignment: 'left', width: '35%' },
      { field: 'ownerCustomerCode', alignment: 'left', width: '15%' }
    ];

    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_DATA_COPY;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public init(): void {
    this.selectedType = 'aircraft';
    this.selectedAircrafts = [];

    this.showFleetDataCopyPopup = false;
    this.currentAssets = [];
    this.isLoading = false;
  }

  public searchLaunched(sl: boolean) {
    this.isLoading = sl;
    if (this.selectedType === 'aircraft') {
      this.resultsTableAircraft = {
        list: [],
        moreResults: false
      };
      this.selectedAircrafts = [];
    }
    if (this.selectedType === 'engine') {
      this.resultsTableEngine = {
        list: [],
        moreResults: false
      };
      this.selectedEngines = [];
    }
    if (this.selectedType === 'equipment') {
      this.resultsTableEquipment = {
        list: [],
        moreResults: false
      };
      this.selectedEquipments = [];
    }
  }

  public selectedTypeUpdated(type: string) {
    this.selectedType = type;
  }

  public resultsTableAircraftUpdated(resultsTableAircraft: SearchResultsDTO<FleetDataCopyRow>) {
    this.resultsTableAircraft = resultsTableAircraft;
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public resultsTableEngineUpdated(resultsTableEngine: SearchResultsDTO<FleetDataCopyRow>) {
    this.resultsTableEngine = resultsTableEngine;
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public resultsTableEquipmentUpdated(resultsTableEquipment: SearchResultsDTO<FleetDataCopyRow>) {
    this.resultsTableEquipment = resultsTableEquipment;
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public openSelectedAircrafts(): void {
    this.currentAssets = [];
    if (this.selectedAircrafts.length > 0) {
      this.selectedAircrafts.forEach((obj) => {
        this.currentAssets.push(obj._obj);
      });
      this.showFleetDataCopyPopup = true;
    }
  }

  public openSelectedEngines(): void {
    this.currentAssets = [];
    if (this.selectedEngines.length > 0) {
      this.selectedEngines.forEach((obj) => {
        this.currentAssets.push(obj._obj);
      });
      this.showFleetDataCopyPopup = true;
    }
  }

  public openSelectedEquipments(): void {
    this.currentAssets = [];
    if (this.selectedEquipments.length > 0) {
      this.selectedEquipments.forEach((equip) => {
        this.currentAssets.push(equip._obj);
      });
      this.showFleetDataCopyPopup = true;
    }
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

  public openLinkAircraft(code: string): void {
    if (code) {
      this.openAircraft(code, ComponentOpenMode.Read);
    }
  }

  private openAircraft(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
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

  public openLinkEngine(code: string): void {
    if (code) {
      this.openEngine(code, ComponentOpenMode.Read);
    }
  }

  private openEngine(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EngineFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EngineFormComponent',
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
