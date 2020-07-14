import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireReturnReasonDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-return-reason-dto.interface';
import { BireReturnReasonDTOId } from '../../../../../../shared/types/api-types/bire-return-reason-dto-id.interface';

@Injectable()
export class CauseForRemovalService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireReturnReasonsByCriteria(): Observable<BireReturnReasonDTO[]> {
    return super.post<void, BireReturnReasonDTO[]>(this.taskManagementApi.findBireReturnReasonsByCriteria);
  }

  public removeBireReturnReasons(bireReturnReasonDTOId: BireReturnReasonDTOId[]): Observable<void> {
    return super.post<BireReturnReasonDTOId[], void>(
      this.taskManagementApi.removeBireReturnReasons,
      bireReturnReasonDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
