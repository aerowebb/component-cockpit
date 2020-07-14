import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireUnitMeasureDTOId } from '../../../../../../shared/types/api-types/bire-unit-measure-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class UnitOfMeasureService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireUnitMeasures(): Observable<SearchResultsDTO<BireUnitMeasureDTO>> {
    return super.post<void, SearchResultsDTO<BireUnitMeasureDTO>>(
      this.productStructureManagementApi.findAllBireUnitMeasureTable
    );
  }

  public removeBireUnitMeasure(bireReturnReasonDTOId: BireUnitMeasureDTOId[]): Observable<void> {
    return super.post<BireUnitMeasureDTOId[], void>(
      this.productStructureManagementApi.removeBireUnitMeasure,
      bireReturnReasonDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
