import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireShopManualDTO } from '../../../shared/types/api-output-types/administration-catalog/bire-shop-manual-dto.interface';
import { BireShopManualDTOId } from '../../../shared/types/api-types/bire-shop-manual-dto-id.interface';
import { BireSmTaskDTO } from '../../../shared/types/api-types/bire-sm-task-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class ShopManualService extends AbstractAwHttpService {

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireShopManuals(): Observable<SearchResultsDTO<BireShopManualDTO>> {
    return super.post<void, SearchResultsDTO<BireShopManualDTO>>(this.taskManagementApi.findAllBireShopManuals);
  }

  public removeBireShopManual(bireShopManualDTOId: BireShopManualDTOId[]): Observable<void> {
    return super.post<BireShopManualDTOId[], void>(this.taskManagementApi.removeBireShopManual, bireShopManualDTOId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }

  public findBireSmTasksByShopManual(
    bireShopManualDTOId: BireShopManualDTOId
  ): Observable<SearchResultsDTO<BireSmTaskDTO>> {
    return super.post<BireShopManualDTOId, SearchResultsDTO<BireSmTaskDTO>>(
      this.taskManagementApi.findBireSmTasksByShopManual,
      bireShopManualDTOId
    );
  }

}
