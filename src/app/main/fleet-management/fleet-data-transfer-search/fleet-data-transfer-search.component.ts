import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindBidoEquipmentsDTOBySearchCriteriaOutput } from '../../../shared/types/api-output-types/fleet-management/find-bido-equipments-dto-by-search-criteria-output';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

interface FleetDataTranferRow {
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
  selector: 'aw-fleet-data-transfer-search',
  templateUrl: './fleet-data-transfer-search.component.html',
  styleUrls: ['./fleet-data-transfer-search.component.scss']
})
export class FleetDataTransferSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public airCraftSelected: boolean;
  public attributesMap: Map<string, string>;
  public currentAssets: string[];
  public isLoading: boolean;
  public operatorSelected: boolean;
  public ownerSelected: boolean;
  public aircraftTableDataSource: TableDataSource<BidoEquipmentDTO>;
  public engineTableDataSource: TableDataSource<BidoEquipmentDTO>;
  public equipmentTableDataSource: TableDataSource<FindBidoEquipmentsDTOBySearchCriteriaOutput>;
  public selectedType: string;
  public showFleetDataOperatorTransferPopup: boolean;
  public showFleetDataTransferPopup: boolean;
  public types: SelectItem[];

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.types = [
      { label: 'Aircraft', value: 'aircraft' },
      { label: 'Engine', value: 'engine' },
      { label: 'Equipment', value: 'equipment' }
    ];

    this.initEngineTableDataSource();
    this.initAircraftTableDataSource();
    this.initEquipmentTableDataSource();

    this.attributesMap = new Map<string, string>();
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_DATA_TRANSFER_SEARCH;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.init();
    this.displayComponentContext('global.search', true);
  }

  private initAircraftTableDataSource(): void {
    this.aircraftTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'asset',
          translateKey: this.getTranslateKey('asset'),
          width: '30%'
        },
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode'),
          width: '20%'
        },
        {
          field: 'equipmentDesignation',
          translateKey: this.getTranslateKey('equipmentDesignation'),
          width: '35%'
        },
        {
          field: 'ownerCustomerCode',
          translateKey: this.getTranslateKey('ownerCustomerCode'),
          width: '15%'
        }
      ],
      data: []
    });
  }

  private initEngineTableDataSource(): void {
    this.engineTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'asset',
          translateKey: this.getTranslateKey('asset'),
          width: '30%'
        },
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode'),
          width: '20%'
        },
        {
          field: 'equipmentDesignation',
          translateKey: this.getTranslateKey('equipmentDesignation'),
          width: '35%'
        },
        {
          field: 'ownerCustomerCode',
          translateKey: this.getTranslateKey('ownerCustomerCode'),
          width: '15%'
        }
      ],
      data: []
    });
  }

  private initEquipmentTableDataSource(): void {
    this.equipmentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'asset',
          translateKey: this.getTranslateKey('asset'),
          width: '30%'
        },
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode'),
          width: '20%'
        },
        {
          field: 'equipmentDesignation',
          translateKey: this.getTranslateKey('equipmentDesignation'),
          width: '35%'
        },
        {
          field: 'ownerCustomerCode',
          translateKey: this.getTranslateKey('ownerCustomerCode'),
          width: '15%'
        }
      ],
      data: []
    });
  }

  public init() {
    this.currentAssets = [];
    this.selectedType = 'aircraft';
    this.isLoading = false;
    this.showFleetDataTransferPopup = false;
    this.airCraftSelected = false;
    this.ownerSelected = false;
    this.operatorSelected = false;
  }

  public searchLaunched(sl: boolean) {
    this.isLoading = sl;
  }

  public selectedTypeUpdated(type: string) {
    this.selectedType = type;
  }

  public resultsTableAircraftUpdated(resultsTableAircraft: SearchResultsDTO<FleetDataTranferRow>) {
    this.aircraftTableDataSource.setData(resultsTableAircraft.list);
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public resultsTableEngineUpdated(resultsTableEngine: SearchResultsDTO<FleetDataTranferRow>) {
    this.engineTableDataSource.setData(resultsTableEngine.list);
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public resultsTableEquipmentUpdated(resultsTableEquipment: SearchResultsDTO<FleetDataTranferRow>) {
    this.equipmentTableDataSource.setData(resultsTableEquipment.list);
    super.differ(() => {
      super.scrollToAnchor(this.resultsContainerAnchor);
    });
  }

  public openSelectedAircraftsOwner(): void {
    this.currentAssets = [];
    if (this.aircraftTableDataSource.dataSelectionCount > 0) {
      this.aircraftTableDataSource.dataSelection.forEach((item) => {
        if (!!item.equipmentCode) {
          this.currentAssets.push(item.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedAircraftsOwner', 'item.equipmentCode');
        }
      });
      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = true;
      this.operatorSelected = false;
      this.ownerSelected = true;
    }
  }
  public openSelectedAircraftsOperator(): void {
    this.currentAssets = [];
    if (this.aircraftTableDataSource.dataSelectionCount > 0) {
      this.aircraftTableDataSource.dataSelection.forEach((item) => {
        if (!!item.equipmentCode) {
          this.currentAssets.push(item.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedAircraftsOperator', 'item.equipmentCode');
        }
      });

      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = true;
      this.ownerSelected = false;
      this.operatorSelected = true;
    }
  }
  public openSelectedEngineOwner() {
    this.currentAssets = [];
    if (this.engineTableDataSource.dataSelectionCount > 0) {
      this.engineTableDataSource.dataSelection.forEach((item) => {
        if (!!item.equipmentCode) {
          this.currentAssets.push(item.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedEngineOwner', 'item.equipmentCode');
        }
      });
      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = false;
      this.operatorSelected = false;
      this.ownerSelected = true;
    }
  }
  public openSelectedEngineOperator() {
    this.currentAssets = [];
    if (this.engineTableDataSource.dataSelectionCount > 0) {
      this.engineTableDataSource.dataSelection.forEach((item) => {
        if (!!item.equipmentCode) {
          this.currentAssets.push(item.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedEngineOperator', 'item.equipmentCode');
        }
      });

      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = false;
      this.ownerSelected = false;
      this.operatorSelected = true;
    }
  }

  public openSelectedEquipmentOwner() {
    this.currentAssets = [];
    if (this.equipmentTableDataSource.dataSelectionCount > 0) {
      this.equipmentTableDataSource.dataSelection.forEach((equip) => {
        const equipmentDto: BidoEquipmentDTO = equip as BidoEquipmentDTO;
        if (!!equipmentDto.equipmentCode) {
          this.currentAssets.push(equipmentDto.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedEquipmentOwner', 'equipmentDto.equipmentCode');
        }
      });
      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = false;
      this.operatorSelected = false;
      this.ownerSelected = true;
    }
  }
  public openSelectedEquipmentOperator() {
    this.currentAssets = [];
    if (this.equipmentTableDataSource.dataSelectionCount > 0) {
      this.equipmentTableDataSource.dataSelection.forEach((equip) => {
        const equipmentDto: BidoEquipmentDTO = equip as BidoEquipmentDTO;
        if (!!equipmentDto.equipmentCode) {
          this.currentAssets.push(equipmentDto.equipmentCode);
        } else {
          super.throwUnboundLocalError('openSelectedEquipmentOperator', 'equipmentDto.equipmentCode');
        }
      });
      this.showFleetDataTransferPopup = true;
      this.airCraftSelected = false;
      this.ownerSelected = false;
      this.operatorSelected = true;
    }
  }

  public openLinkEquipment(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openLinkAircraft(code: string): void {
    if (code) {
      this.openAircraft(code, ComponentOpenMode.Read);
    }
  }

  public openLinkEngine(code: string): void {
    if (code) {
      this.openEngine(code, ComponentOpenMode.Read);
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
}
