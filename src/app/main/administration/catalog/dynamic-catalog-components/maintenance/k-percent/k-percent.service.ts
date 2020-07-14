import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireKPourcentDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-k-pourcent-dto.interface';
import { BireKPourcentDTOId } from '../../../../../../shared/types/api-types/bire-k-pourcent-dto-id.interface';

@Injectable()
export class KPercentService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireKPourcents(): Observable<BireKPourcentDTO[]> {
    return super.post<void, BireKPourcentDTO[]>(this.productStructureManagementApi.findAllBireKPourcents);
  }

  public removeBireKPourcent(bireKPourcentDTOId: BireKPourcentDTOId[]): Observable<void> {
    return super.post<BireKPourcentDTOId[], void>(
      this.productStructureManagementApi.removeBireKPourcent,
      bireKPourcentDTOId
    );
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
