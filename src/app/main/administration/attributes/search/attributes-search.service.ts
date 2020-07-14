import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BireAttributeDTOId } from '../../../../shared/types/api-types/bire-attribute-dto-id.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';

@Injectable()
export class AttributesSearchService extends AbstractAwHttpService {

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
  ) {
    super(http, appConfigService);
  }

  public getAllEngineeringAttributeList(): Observable<BireAttributeDTO[]> {
    return super.post<void, BireAttributeDTO[]>(this.productStructureManagementApi.
     findBireAttributes);
  }

  public getEngineeringAttributeList(category : string): Observable<BireAttributeDTO[]> {
   return super.post<string, BireAttributeDTO[]>(this.productStructureManagementApi.
    findBireAttributesByCategory, category);
}

  public getAllFleetAttributeList(): Observable<BidoAttributeDTO[]> {
    return super.post<void, BidoAttributeDTO[]>(this.fleetManagementApi.
      findBidoAttributes);
  }

  public getFleetAttributeList(category : string): Observable<BidoAttributeDTO[]> {
  return super.post<string, BidoAttributeDTO[]>(this.fleetManagementApi.
    findBidoAttributesByAttributeCategory, category);
}
  public removeEngineeringAttributes(selectedAttribute : BireAttributeDTOId[]): Observable<void> {
  return super.post<BireAttributeDTOId[], void>(this.productStructureManagementApi.
    removeBireAttribute, selectedAttribute);
}

  public removeFleetAttributes(selectedAttribute : BidoAttributeDTOId[]): Observable<void> {
  return super.post<BidoAttributeDTOId[], void>(this.fleetManagementApi.
    removeBidoAttribute, selectedAttribute);
}


}
