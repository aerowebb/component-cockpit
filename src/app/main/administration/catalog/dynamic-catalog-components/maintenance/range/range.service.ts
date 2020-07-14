import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireRangeDTOId } from '../../../../../../shared/types/api-types/bire-range-dto-id.interface';
import { BireRangeDTO } from '../../../../../../shared/types/api-types/bire-range-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class RangeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireRanges(): Observable<SearchResultsDTO<BireRangeDTO>> {
    return super.post<void, SearchResultsDTO<BireRangeDTO>>(this.taskManagementApi.findAllBireRanges);
  }

  public removeBireRange(bireRangeDTOId: BireRangeDTOId[]): Observable<void> {
    return super.post<BireRangeDTOId[], void>(this.taskManagementApi.removeBireRange, bireRangeDTOId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
