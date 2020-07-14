import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { SaveFilterInput } from '../../../../../shared/types/api-input-types/component-filter/save-filter-input-dto.interface';
import { FilterListOutput } from '../../../../../shared/types/api-output-types/filter-list-output-dto.interface';
import { FilterOutputById } from '../../../../../shared/types/api-output-types/filter-output-by-id.interface';
import { BidoPreferenceUserDTO } from '../../../../../shared/types/api-types/bido-preference-user-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class ComponentCockpitFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi : UserProfileManagementApi

  ) {
    super(http, appConfigService);
  }

  public getLogicData(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.userProfileManagementApi.fillLogicLink
    );
  }

  public getData(criteria: string): Observable<FilterOutputById> {
    return super.post<string, FilterOutputById>(
      this.userProfileManagementApi.getBidoPreferenceById, criteria
    );
  }

  public saveFilter(criteria: SaveFilterInput): Observable<BidoPreferenceUserDTO > {
    return super.post<SaveFilterInput, BidoPreferenceUserDTO >(
      this.userProfileManagementApi.saveBidoFilter, criteria
    );
  }

  public getProfileDropdown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.userProfileManagementApi.fillProfile
    );
  }

  public getSiteDropdown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.userProfileManagementApi.fillSite
    );
  }

  public getVariantDropdown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.userProfileManagementApi.fillVariant
    );
  }

  public getFilterList(): Observable<FilterListOutput[]> {
    return super.post<void, FilterListOutput[]>(
      this.userProfileManagementApi.findFilterList
    );
  }

}
