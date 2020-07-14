import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BackgroundJobDTO } from '../../../shared/types/api-types/background-job-dto.inteface';

@Injectable()
export class BackgroundJobsService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public getBackgroundJobs(): Observable<BackgroundJobDTO[]> {
    return super.post<void, BackgroundJobDTO[]>(this.userProfileManagementApi.findBackgroundJobs);
  }
}
