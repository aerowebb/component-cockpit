import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtQualificationApi } from '../../../../../shared/api/bidt-qualification.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { QualificationTitleListDTO } from '../../../../../shared/types/api-output-types/bidt-qualification/qualification-title-list-dto.interface';

@Injectable()
export class QualificationPopupFormService extends AbstractAwHttpService {
  public displayDialog: boolean;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtQualificationApi: BidtQualificationApi
  ) {
    super(http, appConfigService);
  }

  public findQualificationTitle(): Observable<QualificationTitleListDTO[]> {
    return super.post<void, QualificationTitleListDTO[]>(this.bidtQualificationApi.findQualificationTitle);
  }
}
