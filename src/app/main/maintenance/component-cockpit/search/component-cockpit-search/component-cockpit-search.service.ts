import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { FilterListOutput } from '../../../../../shared/types/api-output-types/filter-list-output-dto.interface';
import { BidoPreferenceUserDTO } from '../../../../../shared/types/api-types/bido-preference-user-dto.interface';

@Injectable()
export class ComponentCockpitSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi : UserProfileManagementApi

  ) {
    super(http, appConfigService);
  }

  public getFilterList(): Observable<FilterListOutput[]> {
    return super.post<void, FilterListOutput[]>(
      this.userProfileManagementApi.findFilterList
    );
  }

  public removeFilterList(criteria: BidoPreferenceUserDTO[]): Observable<void> {
    return super.post<BidoPreferenceUserDTO[], void>(
      this.userProfileManagementApi.removeBidoUserFilter, criteria
    );
  }
}
