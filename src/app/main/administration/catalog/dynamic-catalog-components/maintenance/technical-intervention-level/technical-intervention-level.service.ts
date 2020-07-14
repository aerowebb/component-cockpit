import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireTilDTOId } from '../../../../../../shared/types/api-types/bire-til-dto-id.interface';
import { BireTilDTO } from '../../../../../../shared/types/api-types/bire-til-dto.interface';

@Injectable()
export class TechnicalInterventionLevelService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireTils(): Observable<BireTilDTO[]> {
    return super.post<void, BireTilDTO[]>(this.taskManagementApi.findAllBireTils);
  }

  public removeBireTil(bireTilDTOId: BireTilDTOId[]): Observable<void> {
    return super.post<BireTilDTOId[], void>(this.taskManagementApi.removeBireTil, bireTilDTOId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
