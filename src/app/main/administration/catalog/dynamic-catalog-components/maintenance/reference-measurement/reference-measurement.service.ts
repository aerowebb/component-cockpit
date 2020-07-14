import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireMeasureReferenceDTOId } from '../../../../../../shared/types/api-types/bire-measure-reference-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';

@Injectable()
export class ReferenceMeasurementService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireUnitMeasures(): Observable<BireUnitMeasureDTO[]> {
    return super.post<void, BireUnitMeasureDTO[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }

  public findBireMeasureReferencesBySearchCriteria(
    bireMeasureReferenceDTO: BireMeasureReferenceDTO
  ): Observable<BireMeasureReferenceDTO[]> {
    return super.post<BireMeasureReferenceDTO, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findBireMeasureReferencesBySearchCriteria,
      bireMeasureReferenceDTO
    );
  }

  public removeBireMeasureReference(bireMeasureReferenceDTOId: BireMeasureReferenceDTOId[]): Observable<void> {
    return super.post<BireMeasureReferenceDTOId[], void>(
      this.productStructureManagementApi.removeBireMeasureReference,
      bireMeasureReferenceDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
