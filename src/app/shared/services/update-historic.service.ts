import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureHistoryApi } from '../../shared/api/product-structure-history.api';
import { TaskHistoryApi } from '../../shared/api/task-history.api';
import { UpdateHistoricApi } from '../../shared/api/update-historic.api';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { BireEvolutionDTOId } from '../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireModificationDTOId } from '../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireOperationDTOId } from '../../shared/types/api-types/bire-operation-dto-id.interface';
import { BirePnDTOId } from '../../shared/types/api-types/bire-pn-dto-id.interface';
import { BireSbDTOId } from '../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTOId } from '../../shared/types/api-types/bire-task-dto-id.interface';
import { BireVariantVersionDTOId } from '../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { HBireEvolutionDTO } from '../../shared/types/api-types/h-bire-evolution-dto.interface';
import { HBireModificationDTO } from '../../shared/types/api-types/h-bire-modification-dto.interface';
import { HBireOperationDTO } from '../../shared/types/api-types/h-bire-operation-dto.interface';
import { HBireSbDTO } from '../../shared/types/api-types/h-bire-sb-dto.interface';
import { HBireTaskDTO } from '../../shared/types/api-types/h-bire-task-dto.interface';
import { HBireVariantVersionDTO } from '../../shared/types/api-types/h-bire-variant-version-dto.interface';
import { HistoricObjectPnDTO } from '../../shared/types/api-types/historic-object-pn-dto.interface';
import { SearchResultsDTO } from '../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class UpdateHistoricService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly taskHistoryApi: TaskHistoryApi,
    private readonly productStructureHistoryApi: ProductStructureHistoryApi
  ) {
    super(http, appConfigService);
  }

  public findBireEvolutionHistoric(id: BireEvolutionDTOId): Observable<SearchResultsDTO<HBireEvolutionDTO>> {
    return super.post<BireEvolutionDTOId, SearchResultsDTO<HBireEvolutionDTO>>(
      this.updateHistoricApi.findBireEvolutionHistoric,
      id
    );
  }

  public findBireSbHistoric(id: BireSbDTOId): Observable<SearchResultsDTO<HBireSbDTO>> {
    return super.post<BireSbDTOId, SearchResultsDTO<HBireSbDTO>>(this.updateHistoricApi.findBireSbHistoric, id);
  }

  public removeUpdateHistory<T>(api: string, histories: T[]): Observable<boolean> {
    return super.post<T[], boolean>(api, histories);
  }

  public findBirePnHistoric(id: BirePnDTOId): Observable<SearchResultsDTO<HistoricObjectPnDTO>> {
    return super.post<BirePnDTOId, SearchResultsDTO<HistoricObjectPnDTO>>(
      this.updateHistoricApi.findBirePnHistoric,
      id
    );
  }

  public findBireTaskHistoric(id: BireTaskDTOId): Observable<SearchResultsDTO<HBireTaskDTO>> {
    return super.post<BireTaskDTOId, SearchResultsDTO<HBireTaskDTO>>(this.taskHistoryApi.findBireTaskHistoric, id);
  }

  public findBireModificationHistoric(id: BireModificationDTOId): Observable<SearchResultsDTO<HBireModificationDTO>> {
    return super.post<BireModificationDTOId, SearchResultsDTO<HBireModificationDTO>>(
      this.updateHistoricApi.findBireModificationHistoric,
      id
    );
  }

  public findBireOperationHistoric(id: BireOperationDTOId): Observable<SearchResultsDTO<HBireOperationDTO>> {
    return super.post<BireOperationDTOId, SearchResultsDTO<HBireOperationDTO>>(
      this.updateHistoricApi.findBireOperationHistoric,
      id
    );
  }

  public findBireVariantVersionHistoric(
    bireVariantVersionDTOId: BireVariantVersionDTOId
  ): Observable<SearchResultsDTO<HBireVariantVersionDTO>> {
    return super.post<BireVariantVersionDTOId, SearchResultsDTO<HBireVariantVersionDTO>>(
      this.productStructureHistoryApi.findBireVariantVersionHistoric,
      bireVariantVersionDTOId
    );
  }
}
