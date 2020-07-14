import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class DialogWorkOrderCreationService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly aMProjectManagementApi: AMProjectManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoOperation(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.findAllBidoOperations);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findAllBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireSite);
  }

  public findAllMroCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
  }

  public findAuthorizedBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAuthorizedBireSite);
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findBidoUsersWithUseCase(useCase: string): Observable<BidoUserDTO[]> {
    return super.post<string, BidoUserDTO[]>(this.userProfileManagementApi.findBidoUsersWithUseCase, useCase);
  }

  /**************************************************************************
   * Warehouse management api
   *************************************************************************/

  public findAllWarehouseByProduct(pn: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findByProduct, pn);
  }

  /**************************************************************************
   * Project management api
   *************************************************************************/

  public findUnfinishedProjectByEquipmentCode(equipmentCode: string): Observable<BidmProjectDTO[]> {
    return super.post<string, BidmProjectDTO[]>(
      this.aMProjectManagementApi.findUnfinishedProjectByEquipmentCode,
      equipmentCode
    );
  }
}
