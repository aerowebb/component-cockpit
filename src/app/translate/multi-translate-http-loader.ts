import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export class MultiTranslateHttpLoader implements TranslateLoader {
  public constructor(
    private readonly http: HttpClient,
    private readonly resources: { prefix: string }[] = [
      {
        prefix: '/assets/i18n/'
      }
    ]
  ) {}

  // tslint:disable-next-line:no-any
  public getTranslation(lang: string): Observable<any> {
    return forkJoin(
      this.resources.map((config) => {
        return this.http.get(`${config.prefix}${lang}.json`);
      })
    ).pipe(
      map((response) => {
        return response.reduce((a: object, b: object) => {
          return { ...a, ...b };
        });
      })
    );
  }
}
