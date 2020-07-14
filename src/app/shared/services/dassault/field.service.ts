import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DavFieldApi } from '../../api/dassault/field.api';
import { AbstractAwDassaultHttpService } from '../../http/abstract-aw-dassault-http';
import { AppConfigService } from '../../services/app-config.service';
import { TaskFieldLinkInput } from '../../types/api-input-types/dassault/task-field-link.interface';

@Injectable()
export class DavFieldService extends AbstractAwDassaultHttpService {
  public constructor(http: HttpClient, appConfigService: AppConfigService, private readonly davFieldApi: DavFieldApi) {
    super(http, appConfigService);
  }

  public buildTaskFieldLink(taskFieldLinkInput: TaskFieldLinkInput): Observable<string> {
    return super.post<TaskFieldLinkInput, string>(this.davFieldApi.buildTaskFieldLink, taskFieldLinkInput);
  }
}
