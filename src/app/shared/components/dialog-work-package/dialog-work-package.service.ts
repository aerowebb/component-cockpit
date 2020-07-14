import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../api/bidt-site.api';
import { FleetManagementApi } from '../../api/fleet-management.api';
import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { UserProfileManagementApi } from '../../api/user-profile-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BidoUserDTO } from '../../types/api-types/bido-user-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class DialogWorkPackageService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtSiteApi: BidtSiteApi
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
}
