import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ProfileBuildingBlockDTO } from '../../../shared/types/api-types/profile-building-block-dto.interface';
import { ProfileManagementWithUseCaseDTO } from '../../../shared/types/api-types/profile-management-with-use-case-dto.interface';
import { SaveProfileManagementDTO } from '../../../shared/types/api-types/save-profile-management-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class ProfilesFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findProfileWithUseCasesByName(profileName: string): Observable<ProfileManagementWithUseCaseDTO> {
    return super.post<string, ProfileManagementWithUseCaseDTO>(
      this.userProfileManagementApi.findProfileWithUseCasesByName,
      profileName
    );
  }

  public findBuildingBlocksForProfile(): Observable<ProfileBuildingBlockDTO[]> {
    return super.post<void, ProfileBuildingBlockDTO[]>(this.userProfileManagementApi.findBuildingBlocksForProfile);
  }

  public getUseCasesAccessDegrees(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getUseCasesAccessDegrees);
  }

  public saveProfile(saveProfileManagementDTO: SaveProfileManagementDTO) {
    return super.post<SaveProfileManagementDTO, void>(
      this.userProfileManagementApi.saveProfile,
      saveProfileManagementDTO
    );
  }
}
