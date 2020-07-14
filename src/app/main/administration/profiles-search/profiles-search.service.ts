import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidoProfileDTOId } from '../../../shared/types/api-types/bido-profile-dto-id.interface';
import { BidoProfileDTO } from '../../../shared/types/api-types/bido-profile-dto.interface';

@Injectable()
export class ProfilesSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBidoProfiles(): Observable<BidoProfileDTO[]> {
    return super.post<void, BidoProfileDTO[]>(this.userProfileManagementApi.findAllBidoProfiles);
  }

  public removeProfile(bidoProfileDTOIdList: BidoProfileDTOId[]) {
    return super.post<BidoProfileDTOId[], void>(this.userProfileManagementApi.removeProfile, bidoProfileDTOIdList);
  }
}
