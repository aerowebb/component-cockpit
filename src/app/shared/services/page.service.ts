import { Injectable } from '@angular/core';

import { AWPropertiesConstants } from '../constants/aw-properties-constants';
import { ComponentConstants } from '../constants/component-constants';
import { ComponentOpenMode } from '../enums/component-open-mode.enum';
import { ADSBModRowDTO } from '../types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { BidoEquipmentDTOId } from '../types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../types/api-types/bido-notification-dto-id.interface';
import { BireEvolutionDTOId } from '../types/api-types/bire-evolution-dto-id.interface';
import { BireModificationDTOId } from '../types/api-types/bire-modification-dto-id.interface';
import { BireSbDTOId } from '../types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTO } from '../types/api-types/bire-task-dto.interface';
import { PageComponentData } from '../types/page-component-data.interface';

import { SerializationService } from './serialization.service';
import { TabService } from './tab.service';

@Injectable()
export class PageService {
  public constructor(
    private readonly tabService: TabService,
    private readonly serializationService: SerializationService
  ) {}

  public openAsset(equipmentCode: string = '', equipmentFunction: string = ''): void {
    if (equipmentCode.length > 0) {
      const isTopAssetAircraft =
        !!equipmentFunction && equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY;
      const isTopAssetEngine =
        !!equipmentFunction && equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY;

      if (isTopAssetAircraft) {
        this.openAircraft(equipmentCode, ComponentOpenMode.Read);
      } else if (isTopAssetEngine) {
        this.openEngine(equipmentCode);
      } else {
        this.openEquipment(equipmentCode);
      }
    }
  }

  public openAircraft(objectId: string | undefined, openMode: ComponentOpenMode): void {
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

  public openEngine(equipmentCode: string | undefined): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEquipment(equipmentCode: string | undefined): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openTask(bireTaskDTO: BireTaskDTO): void {
    const labelKey = 'transaction.TaskFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'TaskFormComponent',
      objectId: this.serializationService.serialize(bireTaskDTO),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvolution(row: ADSBModRowDTO): void {
    const bireEvolutionDTOId: BireEvolutionDTOId = row.adSbModDTOId as BireEvolutionDTOId;
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(bireEvolutionDTOId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openSB(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.SbadFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'SbadFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openModification(row: ADSBModRowDTO): void {
    const bireModificationDTOId: BireModificationDTOId = row.adSbModDTOId as BireModificationDTOId;
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      objectId: bireModificationDTOId ? this.serializationService.serialize(bireModificationDTOId) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openAD(row: ADSBModRowDTO): void {
    const bireSBDTOId: BireSbDTOId = row.adSbModDTOId as BireSbDTOId;
    const labelKey = 'transaction.AirworthinessDirectiveFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AirworthinessDirectiveFormComponent',
      objectId: this.serializationService.serialize(bireSBDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvent(defectId: BidoNotificationDTOId): void {
    if (defectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        objectId: this.serializationService.serialize(defectId),
        openMode: ComponentOpenMode.Read
      };

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
