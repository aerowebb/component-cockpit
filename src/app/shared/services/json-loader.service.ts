import { HttpClient } from '@angular/common/http';

import { ServerUtils } from '../utils/server-utils';

export abstract class JsonLoaderService {
  public constructor(private readonly http: HttpClient) {}

  public loadJson<T>(filePath: string): Promise<T> {
    return this.http.get<T>(ServerUtils.join(window.location.origin, filePath)).toPromise<T>();
  }
}
