import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtLaborTemplateHoursApi } from '../../../../../../shared/api/bidt-labor-template-hours.api';
import { BidtLaborTemplateApi } from '../../../../../../shared/api/bidt-labor-template.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { SavedCatalogOutputDTO } from '../../../../../../shared/types/api-output-types/catalog/saved-catalog-output-dto.inerface';
import { BidtLaborTemplateDTO } from '../../../../../../shared/types/api-types/bidt-labor-template-dto.interface';
import { CustomBidtLaborTemplateDTO } from '../../../../../../shared/types/api-types/custom-bidt-labor-template-dto.interface';
import { CustomBidtLaborTemplateHoursDTO } from '../../../../../../shared/types/api-types/custom-bidt-labor-template-hours-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable()
export class WorkTemplateService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtLaborTemplateApi: BidtLaborTemplateApi,
    private readonly bidtLaborTemplateHoursApi: BidtLaborTemplateHoursApi
  ) {
    super(http, appConfigService);
  }

  public findAll(): Observable<SearchResultsDTO<CustomBidtLaborTemplateDTO>> {
    return super.post<void, SearchResultsDTO<CustomBidtLaborTemplateDTO>>(this.bidtLaborTemplateApi.findAll);
  }

  public findByLaborTemplateId(id: number): Observable<CustomBidtLaborTemplateHoursDTO[]> {
    return super.post<Number, CustomBidtLaborTemplateHoursDTO[]>(
      this.bidtLaborTemplateHoursApi.findByLaborTemplateId,
      id
    );
  }

  public getWorkTemplateById(id: number): Observable<BidtLaborTemplateDTO> {
    return super.post<Number, BidtLaborTemplateDTO>(this.bidtLaborTemplateApi.getWorkTemplateById, id);
  }

  public deleteLabour(id: Number[]): Observable<void> {
    return super.post<Number[], void>(this.bidtLaborTemplateApi.delete, id);
  }

  public getDayMap(): Observable<LabelValue<String>[]> {
    return super.post<void, LabelValue<String>[]>(this.fleetManagementApi.getDayMap);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<SavedCatalogOutputDTO> {
    return super.post<SaveCatalogInput, SavedCatalogOutputDTO>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
