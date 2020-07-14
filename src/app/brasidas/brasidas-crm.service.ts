import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AbstractAwHttpService } from '../shared/http/abstract-aw-http';
import { AppConfigService } from '../shared/services/app-config.service';
import { BidoMissionEquipmentDTOId } from '../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { FileContentDTO } from '../shared/types/api-types/file-content-dto.interface';

import { BrasidasCrmApi } from './brasidas-crm.api';

@Injectable()
export class BrasidasCrmFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly brasidasCrmApi: BrasidasCrmApi
  ) {
    super(http, appConfigService);
  }

  public generateCrm(bidoMissionEquipmentDTOId: BidoMissionEquipmentDTOId): Observable<FileContentDTO> {
    return super.post<BidoMissionEquipmentDTOId, FileContentDTO>(
      this.brasidasCrmApi.generateCrmPackageReport,
      bidoMissionEquipmentDTOId
    );
  }
}
