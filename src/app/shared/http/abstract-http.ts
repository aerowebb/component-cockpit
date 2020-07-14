import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AppConfigService } from '../services/app-config.service';
import { ServerUtils } from '../utils/server-utils';

export abstract class AbstractHttpService {
  private readonly defaultHttpHeaders: HttpHeaders;
  private readonly defaultOptions: Object;

  private baseUrl: string;

  protected constructor(
    private readonly http: HttpClient,
    private readonly appConfigService: AppConfigService,
    serviceUrl?: string
  ) {
    this.defaultHttpHeaders = this.getDefaultHttpHeaders();
    this.defaultOptions = this.getDefaultOptions();

    if (!!serviceUrl) {
      this.setBaseUrl(serviceUrl);
    }
  }

  protected delete<T>(url: string, options?: Object): Observable<T> {
    return this.rawDelete<T>(url, options).pipe(
      map<HttpResponse<T>, T | null>((response) => this.extractData<T>(response)),
      map<T, T>(this.postProcess, this),
      catchError(this.handleError)
    );
  }

  protected deleteWithFullResponse<T>(url: string, options?: Object): Observable<HttpResponse<T>> {
    return this.rawDelete<T>(url, options).pipe(
      map<HttpResponse<T>, HttpResponse<T>>(this.postProcessFullResponse),
      catchError(this.handleError)
    );
  }

  protected get<T>(url: string, options?: Object): Observable<T> {
    return this.rawGet<T>(url, options).pipe(
      map<HttpResponse<T>, T | null>((response) => this.extractData<T>(response)),
      map<T, T>(this.postProcess, this),
      catchError(this.handleError)
    );
  }

  protected getWithFullResponse<T>(url: string, options?: Object): Observable<HttpResponse<T>> {
    return this.rawGet<T>(url, options).pipe(
      map<HttpResponse<T>, HttpResponse<T>>(this.postProcessFullResponse),
      catchError(this.handleError)
    );
  }

  protected post<T, U>(url: string, body?: T, options?: Object): Observable<U> {
    return this.rawPost<T, U>(url, body, options).pipe(
      map<HttpResponse<U>, U | null>((response) => this.extractData<U>(response)),
      map<U, U>(this.postProcess, this),
      catchError(this.handleError)
    );
  }

  protected postFile<T, U>(url: string, file: File, data?: Object, options?: Object): Observable<U> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    if (!!data) {
      formData.append(
        'data',
        new Blob([JSON.stringify(data)], {
          type: 'application/json'
        })
      );
    }
    const fileOption = { ...{ headers: new HttpHeaders() }, ...options };

    return this.rawPost<FormData, U>(url, formData, fileOption).pipe(
      map<HttpResponse<U>, U | null>((response) => this.extractData<U>(response)),
      map<U, U>(this.postProcess, this),
      catchError(this.handleError)
    );
  }

  protected postWithFullResponse<T, U>(url: string, body?: T, options?: Object): Observable<HttpResponse<U>> {
    return this.rawPost<T, U>(url, body, options).pipe(
      map<HttpResponse<U>, HttpResponse<U>>(this.postProcessFullResponse),
      catchError(this.handleError)
    );
  }

  protected put<T, U>(url: string, body: T, options?: Object): Observable<U> {
    return this.rawPut<T, U>(url, body, options).pipe(
      map<HttpResponse<U>, U | null>((response) => this.extractData<U>(response)),
      map<U, U>(this.postProcess, this),
      catchError(this.handleError)
    );
  }

  protected putWithFullResponse<T, U>(url: string, body: T, options?: Object): Observable<HttpResponse<U>> {
    return this.rawPut<T, U>(url, body, options).pipe(
      map<HttpResponse<U>, HttpResponse<U>>(this.postProcessFullResponse),
      catchError(this.handleError)
    );
  }

  protected getOptions(options?: Object): Object {
    return { ...this.defaultOptions, ...options };
  }

  protected getDefaultOptions(): Object {
    return {
      headers: this.defaultHttpHeaders,
      observe: 'response',
      params: new HttpParams(),
      reportProgress: false,
      responseType: 'json',
      withCredentials: true
    };
  }

  protected postProcess<T>(response: T): T {
    if (!!response) {
      this.handleDates(response);
    }

    return response;
  }

  protected postProcessFullResponse<T>(response: HttpResponse<T>): HttpResponse<T> {
    return response;
  }

  protected getDefaultHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  protected setBaseUrl(serviceUrl: string): void {
    let formattedServerUrl: string = ServerUtils.removeTrailingSeparator(this.appConfigService.appConfig.serverUrl);
    // Do we need to force serverUrl to use Frontend Url
    // Happen when multiple URL allows to access the application (portal vs direct access for example)
    if (this.appConfigService.appConfig.forceFrontendUrlAsServerUrl) {
      formattedServerUrl = '';
    }
    let formattedServiceUrl: string = ServerUtils.removeTrailingSeparator(serviceUrl);
    formattedServiceUrl = ServerUtils.addLeadingSeparator(formattedServiceUrl);

    this.baseUrl = formattedServerUrl + formattedServiceUrl;
  }

  private extractData<T>(response: HttpResponse<T>): T | null {
    return response.body;
  }

  private getUrl(url: string): string {
    let formattedUrl: string = ServerUtils.removeTrailingSeparator(url);
    formattedUrl = ServerUtils.addLeadingSeparator(formattedUrl);

    return this.baseUrl + formattedUrl;
  }

  private handleDates(object: Object[] | Object): void {
    if (object instanceof Array) {
      object.forEach((element) => this.handleDates(element));
    } else if (object instanceof Object) {
      Object.getOwnPropertyNames(object).forEach((property) => {
        if (object[property] instanceof Array) {
          object[property].forEach((element) => this.handleDates(element));
        } else if (object[property] instanceof Object) {
          this.handleDates(object[property]);
        } else if (object[property] instanceof String || typeof object[property] === 'string') {
          if (!!object[property] && this.isMatchingDatePattern(object[property])) {
            object[property] = new Date(object[property]);
          }
        }
      });
    }
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    return throwError(errorResponse);
  }

  private isMatchingDatePattern(value: string): boolean {
    return /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)$/.test(value);
  }

  private rawDelete<T>(url: string, options?: Object): Observable<HttpResponse<T>> {
    return this.http.delete<HttpResponse<T>>(this.getUrl(url), this.getOptions(options));
  }

  private rawGet<T>(url: string, options?: Object): Observable<HttpResponse<T>> {
    return this.http.get<HttpResponse<T>>(this.getUrl(url), this.getOptions(options));
  }

  private rawPost<T, U>(url: string, body?: T, options?: Object): Observable<HttpResponse<U>> {
    const formattedBody = !!body && typeof body === 'string' ? `"${body}"` : body;

    return this.http.post<HttpResponse<U>>(this.getUrl(url), formattedBody, this.getOptions(options));
  }

  private rawPut<T, U>(url: string, body: T, options?: Object): Observable<HttpResponse<U>> {
    return this.http.put<HttpResponse<U>>(this.getUrl(url), body, this.getOptions(options));
  }
}
