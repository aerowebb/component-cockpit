import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

@Injectable()
export class ManufacturingBatchSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly serializationService: SerializationService,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly tabService: TabService
  ) {
    super(http, appConfigService);
  }

  public getMfgBatchList(equipmentObj: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.bidoEquipmentApi.findManufacturingBatchesByCriteria,
      equipmentObj
    );
  }

  public openMfgBatch(objectId: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      objectId: objectId ? this.serializationService.serialize({ customerCode: objectId }) : undefined,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
