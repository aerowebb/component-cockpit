import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ServerUtils } from '../utils/server-utils';

import { JsonLoaderService } from './json-loader.service';
import { MessageService } from './message.service';

interface AppConfig {
  serverUrl: string;
  forceFrontendUrlAsServerUrl?: boolean;
}

@Injectable()
export class AppConfigService extends JsonLoaderService {
  private static readonly NOT_FOUND: number = 404;

  private static readonly CONFIG_PREFIX: string = environment.appConfigPrefix;
  private static readonly CONFIG_FILE_NAME: string = 'app-config.json';
  private static readonly CONFIG_FILE_PARENT_DIR_NAME: string = 'app-config';

  private _appConfig: AppConfig;
  private readonly messageService: MessageService;

  public constructor(http: HttpClient, messageService: MessageService) {
    super(http);
    this.messageService = messageService;
  }

  public get appConfig(): AppConfig {
    return this._appConfig;
  }

  public async load(): Promise<void> {
    try {
      let appConfigName = AppConfigService.CONFIG_FILE_NAME;
      if (AppConfigService.CONFIG_PREFIX !== '') {
        appConfigName = AppConfigService.CONFIG_PREFIX + '.' + AppConfigService.CONFIG_FILE_NAME;
      }

      const data = await super.loadJson<AppConfig>(
        ServerUtils.join(AppConfigService.CONFIG_FILE_PARENT_DIR_NAME, appConfigName)
      );
      this._appConfig = data;
      if (!('serverUrl' in this._appConfig)) {
        throw new Error();
      }
    } catch (err) {
      if (err instanceof HttpErrorResponse && err.status === AppConfigService.NOT_FOUND) {
        setTimeout(() => this.messageService.showErrorMessage('ERROR.APP_CONFIG_NOT_FOUND'), 0);
      } else {
        setTimeout(() => this.messageService.showErrorMessage('ERROR.APP_CONFIG_ERROR'), 0);
      }
      this._appConfig = { serverUrl: '', forceFrontendUrlAsServerUrl: true };
    }
  }
}
