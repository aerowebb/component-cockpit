import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';

@Injectable()
export class GoodsMovementFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtSiteApi: BidtSiteApi
  ) {
    super(http, appConfigService);
  }

  public findSiteById(siteId: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, siteId);
  }

  public findWorkPackage(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }
}
