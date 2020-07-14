import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NgPublicApi } from '../../../shared/api/ng-public.api';
import { AppConstants } from '../../../shared/constants/app-constants';
import { AbstractHttpService } from '../../../shared/http/abstract-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ChangePasswordInput } from '../../../shared/types/api-input-types/change-password/change-password-input-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogChangePasswordService extends AbstractHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService, private readonly ngPublicApi: NgPublicApi) {
    super(http, appConfigService, AppConstants.BASE_URL);
  }

  public changePasswordUser(criteria: ChangePasswordInput): Observable<void> {
    const passWordUrl = '/update_bido_password_of_user';
    const url = this.addNgServiceUrl(this.ngPublicApi.login);

    const apiUrl = url + passWordUrl;

    return super.post<ChangePasswordInput, void>(apiUrl, criteria);
  }
  private addNgServiceUrl(apiUrl: string): string {
    return AppConstants.NG_SERVICE_URL + apiUrl;
  }
}
