import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { FillTypeInput } from '../../../../../../shared/types/api-input-types/component-filter/fill-type-input-dto.interface';
import { FillValueInput } from '../../../../../../shared/types/api-input-types/component-filter/fill-value-input-dto.interface';
import { FilterListOutput } from '../../../../../../shared/types/api-output-types/filter-list-output-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable()
export class DialogComponentCockptService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi : UserProfileManagementApi

  ) {
    super(http, appConfigService);
  }

  public getObjectDropdown(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(
      this.userProfileManagementApi.fillObject
    );
  }

  public getDataDropdown(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.userProfileManagementApi.fillData, input
    );
  }

  public getTypeDropDown(input: FillTypeInput): Observable<LabelValue<string>[]> {
    return super.post<FillTypeInput, LabelValue<string>[]>(
      this.userProfileManagementApi.fillType, input
    );
  }
  public getValueDropdown(input: FillValueInput): Observable<LabelValue<string>[]> {
    return super.post<FillValueInput, LabelValue<string>[]>(
      this.userProfileManagementApi.fillValue, input
    );
  }

  public getFilterList(): Observable<FilterListOutput[]> {
    return super.post<void, FilterListOutput[]>(
      this.userProfileManagementApi.findFilterList
    );
  }

}
