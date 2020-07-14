import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { FindBireSbsBySbCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-sbs-by-sb-criteria-input.interface';
import { BireEvolutionSbDTOId } from '../../../../../shared/types/api-types/bire-evolution-sb-dto-id.interface';
import { BireEvolutionSbDTO } from '../../../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireSbDTO } from '../../../../../shared/types/api-types/bire-sb-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class SbadPopupFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService
  ) {
    super(http, appConfigService);
  }

  public removeBireSbad(sbadId: BireEvolutionSbDTOId) {
    return super.post<BireEvolutionSbDTOId, void>(this.productStructureManagementApi.createBireEvolutionSb, sbadId);
  }

  public createBireEvolutionSb(sbad: BireEvolutionSbDTO): Observable<BireEvolutionSbDTOId> {
    return super.post<BireEvolutionSbDTO, BireEvolutionSbDTOId>(
      this.productStructureManagementApi.createBireEvolutionSb,
      sbad
    );
  }

  public findBireSbsBySbCriteria(): Observable<SearchResultsDTO<BireSbDTO>> {
    const bireSbDTO: BireSbDTO = {
      sbNumber: undefined
    };
    const criteria: FindBireSbsBySbCriteriaInput = {
      bireSbDTO,
      familyCode: undefined,
      structureType: undefined,
      variantCode: undefined,
      publicationDateFrom: undefined,
      publicationDateTo: undefined,
      effectiveDateFrom: undefined,
      effectiveDateTo: undefined
    };

    return super.post<FindBireSbsBySbCriteriaInput, SearchResultsDTO<BireEvolutionSbDTOId>>(
      this.productStructureManagementApi.findBireSbsBySbCriteria,
      criteria
    );
  }

  public getFuncObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getFuncObjectStatusMap');
  }

  public getSbTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getSbTypeMap');
  }

  public getComplianceMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getComplianceMap');
  }

  public getSbClassificationMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getSbClassificationMap');
  }
}
