import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireLocalisationCodeDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-localisation-code-dto.interface';
import { BireLocalisationCodeDTOId } from '../../../../../../shared/types/api-types/bire-localisation-code-dto-id.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class LocalisationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireLocalisationCodesByCriteria(): Observable<SearchResultsDTO<BireLocalisationCodeDTO>> {
    return super.post<void, SearchResultsDTO<BireLocalisationCodeDTO>>(
      this.taskManagementApi.findBireLocalisationCodesByCriteria
    );
  }

  public removeBireLocalisationCode(bireLocalisationCodeDTOId: BireLocalisationCodeDTOId[]): Observable<void> {
    return super.post<BireLocalisationCodeDTOId[], void>(
      this.taskManagementApi.removeBireLocalisationCode,
      bireLocalisationCodeDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
