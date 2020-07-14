import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReferentialManagementApi } from '../../../shared/api/referential-managment.api';
import { AbstractAwDassaultHttpService } from '../../../shared/http/abstract-aw-dassault-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ReferentialDashboardDTO } from '../../../shared/types/api-types/referential-dashboard-dto.interface';

@Injectable()
export class ReferentialDashboardSearchService extends AbstractAwDassaultHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly referentialApi: ReferentialManagementApi
  ) {
    super(http, appConfigService);
  }

  public deleteFile(referntials: ReferentialDashboardDTO) {
    return super.post<ReferentialDashboardDTO, void>(this.referentialApi.deletFiles, referntials);
  }

  public downloadNDeleteFiles(referntials: ReferentialDashboardDTO) {
    return super.post<ReferentialDashboardDTO, Uint8Array>(this.referentialApi.downloadFiles, referntials);
  }

  public getAllFiles() {
    return super.get(this.referentialApi.getFilesFromMediation);
  }
}
