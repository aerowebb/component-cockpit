import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectManagementApi } from '../../../../shared/api/project-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AWLicenseReportCustomDTO } from '../../../../shared/types/api-output-types/administration-licensing/aw-license-report-custom-dto.interface';
import { BsdeAwCustomLicensingDTO } from '../../../../shared/types/api-output-types/administration-licensing/bsde-aw-custom-licensing-dto.interface';

@Injectable()
export class LicensingSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly projectManagementApi: ProjectManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBsdeAwCustomsForLicensing(): Observable<BsdeAwCustomLicensingDTO> {
    return super.post<void, BsdeAwCustomLicensingDTO>(this.projectManagementApi.findBsdeAwCustomsForLicensing);
  }

  public checkAWLicense(): Observable<AWLicenseReportCustomDTO> {
    return super.post<void, AWLicenseReportCustomDTO>(this.userProfileManagementApi.checkAWLicense);
  }
}
