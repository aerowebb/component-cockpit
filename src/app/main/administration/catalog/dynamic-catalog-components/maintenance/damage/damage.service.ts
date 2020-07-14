import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireDamageDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-damage-dto.interface';
import { BireDamageDTOId } from '../../../../../../shared/types/api-types/bire-damage-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';

@Injectable()
export class DamageService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBireDamagesByCriteria(): Observable<BireDamageDTO[]> {
    return super.post<void, BireDamageDTO[]>(this.taskManagementApi.findBireDamagesByCriteria);
  }

  public findAllBireUnitMeasures(): Observable<BireUnitMeasureDTO[]> {
    return super.post<void, BireUnitMeasureDTO[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }

  public removeBireDamage(bireDamageDTOId: BireDamageDTOId[]): Observable<void> {
    return super.post<BireDamageDTOId[], void>(this.taskManagementApi.removeBireDamage, bireDamageDTOId);
  }

  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
