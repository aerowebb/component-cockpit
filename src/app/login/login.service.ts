import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NgPublicApi } from '../shared/api/ng-public.api';
import { PublicApi } from '../shared/api/public.api';
import { AppConstants } from '../shared/constants/app-constants';
import { AbstractHttpService } from '../shared/http/abstract-http';
import { AppConfigService } from '../shared/services/app-config.service';
import { ChallengeDTO } from '../shared/types/api-types/challenge-dto.interface';
import { UserConnectionDTO } from '../shared/types/api-types/user-connection-dto.interface';
import { KeyValue } from '../shared/types/key-value.interface';

@Injectable()
export class LoginService extends AbstractHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly ngPublicApi: NgPublicApi,
    private readonly publicApi: PublicApi
  ) {
    super(http, appConfigService, AppConstants.BASE_URL);
  }

  public connect(params: ChallengeDTO): Observable<UserConnectionDTO> {
    const apiUrl = this.addNgServiceUrl(this.ngPublicApi.login);

    return super.post<ChallengeDTO, UserConnectionDTO>(apiUrl, params);
  }

  public getClients(): Observable<KeyValue<string>[]> {
    const apiUrl = this.addServiceUrl(this.publicApi.clients);

    return super.post<void, KeyValue<string>[]>(apiUrl);
  }

  private addNgServiceUrl(apiUrl: string): string {
    return AppConstants.NG_SERVICE_URL + apiUrl;
  }

  private addServiceUrl(apiUrl: string): string {
    return AppConstants.SERVICE_URL + apiUrl;
  }
}
