import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../api/bidt-site.api';
import { UserProfileManagementApi } from '../../api/user-profile-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BidoUserDTO } from '../../types/api-types/bido-user-dto.interface';
import { LabelValue } from '../../types/label-value.interface';

@Injectable()
export class WorkPackageListService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt Site api
   *************************************************************************/

  public findAllMroCenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findBidoUsersWithUseCase(useCase: string): Observable<BidoUserDTO[]> {
    return super.post<string, BidoUserDTO[]>(this.userProfileManagementApi.findBidoUsersWithUseCase, useCase);
  }
}
