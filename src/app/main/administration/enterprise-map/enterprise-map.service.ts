import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../shared/api/bidt-company.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class EnterpriseMapService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtCompanyApi: BidtCompanyApi
  ) {
    super(http, appConfigService);
  }

  public enterpriseMap(id: string): Observable<TreeNode> {
    return super.post<string, TreeNode>(this.bidtCompanyApi.enterpriseMap, id);
  }

  public getCompanyList(): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(this.bidtCompanyApi.getCompanyList);
  }
}
