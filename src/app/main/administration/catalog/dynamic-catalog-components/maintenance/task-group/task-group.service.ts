import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireTaskGroupDTOId } from '../../../../../../shared/types/api-types/bire-task-group-dto-id.interface';
import { BireTaskGroupDTO } from '../../../../../../shared/types/api-types/bire-task-group-dto.interface';

@Injectable()
export class TaskGroupService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireTaskGroupsCatalog(): Observable<BireTaskGroupDTO[]> {
    return super.post<void, BireTaskGroupDTO[]>(this.taskManagementApi.findAllBireTaskGroupsCatalog);
  }

  public removeBireTaskGroup(bireTaskGroupDTOId: BireTaskGroupDTOId[]): Observable<void> {
    return super.post<BireTaskGroupDTOId[], void>(this.taskManagementApi.removeBireTaskGroup, bireTaskGroupDTOId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
