import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchCriteriaApi } from '../../shared/api/search-critieria.api';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { SearchCriteriaDTO } from '../../shared/types/api-types/search-criteria-dto.interface';

@Injectable()
export class SearchCriteriaService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly searchCriteriaApi: SearchCriteriaApi
  ) {
    super(http, appConfigService);
  }

  public listContext(criteriaId: string): Observable<SearchCriteriaDTO[]> {
    return super.post<string, SearchCriteriaDTO[]>(this.searchCriteriaApi.getContextList, criteriaId);
  }

  public getContext(contextId: string): Observable<SearchCriteriaDTO> {
    return super.post<string, SearchCriteriaDTO>(this.searchCriteriaApi.getContext, contextId);
  }

  public saveContext(context: SearchCriteriaDTO): Observable<SearchCriteriaDTO> {
    return super.post<SearchCriteriaDTO, SearchCriteriaDTO>(this.searchCriteriaApi.saveContext, context);
  }

  public deleteContext(context: SearchCriteriaDTO): Observable<boolean> {
    return super.post<SearchCriteriaDTO, boolean>(this.searchCriteriaApi.deleteContext, context);
  }

  public setAsFavorite(context: SearchCriteriaDTO): Observable<boolean> {
    return super.post<SearchCriteriaDTO, boolean>(this.searchCriteriaApi.setAsFavorite, context);
  }

  public removeAsFavorite(context: SearchCriteriaDTO): Observable<boolean> {
    return super.post<SearchCriteriaDTO, boolean>(this.searchCriteriaApi.removeAsFavorite, context);
  }
}
