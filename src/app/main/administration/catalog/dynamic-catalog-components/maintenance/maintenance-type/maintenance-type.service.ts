import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireMaintenanceEnvironmentDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-maintenance-environment-dto.interface';
import { BireMaintenanceEnvironmentDTOId } from '../../../../../../shared/types/api-types/bire-maintenance-environment-dto-id.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class MaintenanceTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireMaintenanceEnvironments(): Observable<SearchResultsDTO<BireMaintenanceEnvironmentDTO>> {
    return super.post<void, SearchResultsDTO<BireMaintenanceEnvironmentDTO>>(
      this.productStructureManagementApi.findAllBireMaintenanceEnvironments
    );
  }

  public removeBireMaintenanceEnvironment(
    bireMaintenanceEnvironmentDTOId: BireMaintenanceEnvironmentDTOId[]
  ): Observable<void> {
    return super.post<BireMaintenanceEnvironmentDTOId[], void>(
      this.productStructureManagementApi.removeBireMaintenanceEnvironment,
      bireMaintenanceEnvironmentDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
