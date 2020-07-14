import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidoUserSearchInput } from '../../../shared/types/api-input-types/administration-users/bido-user-search-input.interface';
import { BidoUserDTOId } from '../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../shared/types/api-types/bido-user-dto.interface';
import { CopyProfileDTO } from '../../../shared/types/api-types/copy-profile-dto.interface';

@Injectable()
export class UsersSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findUsersBySearchCriteria(input: BidoUserSearchInput): Observable<BidoUserDTO[]> {
    return super.post<BidoUserSearchInput, BidoUserDTO[]>(
      this.userProfileManagementApi.findUsersBySearchCriteria,
      input
    );
  }
  public findAllBidoUsers(): Observable<BidoUserDTO[]> {
    return super.post<void, BidoUserDTO[]>(this.userProfileManagementApi.findAllBidoUsers);
  }

  public removeUser(bidoUserDTOId: BidoUserDTOId[]): Observable<boolean> {
    return super.post<BidoUserDTOId[], boolean>(this.userProfileManagementApi.removeUser, bidoUserDTOId);
  }

  public copyUserProfile(copyProfileDTO: CopyProfileDTO): Observable<boolean> {
    return super.post<CopyProfileDTO, boolean>(this.userProfileManagementApi.copyUserProfile, copyProfileDTO);
  }
}
