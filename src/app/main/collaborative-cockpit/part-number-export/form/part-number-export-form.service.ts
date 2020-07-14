import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MhiaelExportApi } from '../../../../shared/api/mhiael/export.api';
import { AbstractAwMhiaelHttpService } from '../../../../shared/http/abstract-aw-mhiael-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';

@Injectable()
export class PartNumberExportFormService extends AbstractAwMhiaelHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly mhiaelExportApi: MhiaelExportApi
  ) {
    super(http, appConfigService);
  }

  public exportPn(): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(this.mhiaelExportApi.exportPn, undefined);
  }
}
