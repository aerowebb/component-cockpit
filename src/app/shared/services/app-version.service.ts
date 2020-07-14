import { Injectable } from '@angular/core';

import rawAppVersionJson from '../../../app-version.json';
import { StringUtils } from '../utils/string-utils.js';

interface AppVersion {
  copyright: string;
  specificDAV: boolean;
  specificMHIAEL: boolean;
  specificSAE: boolean;
  specificBRASIDAS: boolean;
  version: string;
  versionDate: Date | undefined;
}

interface AppVersionJSON {
  copyright: string;
  version: string;
  versionDate: string | undefined;
}

enum CLIENT {
  DAV = 'DAV',
  SAE = 'SN',
  MHIAEL = 'MHIAEL',
  BRASIDAS = 'BRASIDAS'
}

@Injectable()
export class AppVersionService {
  private readonly _appVersion: AppVersion;

  public constructor() {
    const appVersionJson = rawAppVersionJson as AppVersionJSON;

    this._appVersion = {
      copyright: appVersionJson.copyright,
      specificDAV: false,
      specificMHIAEL: false,
      specificSAE: false,
      specificBRASIDAS: false,
      version: appVersionJson.version,
      versionDate: StringUtils.isNullOrEmpty(appVersionJson.versionDate)
        ? undefined
        : new Date(appVersionJson.versionDate as string)
    };
  }

  public setSpecificClient(clientCode: string) {
    this._appVersion.specificDAV = clientCode === CLIENT.DAV;
    this._appVersion.specificMHIAEL = clientCode === CLIENT.MHIAEL;
    this._appVersion.specificSAE = clientCode === CLIENT.SAE;
    this._appVersion.specificBRASIDAS = clientCode === CLIENT.BRASIDAS;
  }

  public get appVersion(): AppVersion {
    return this._appVersion;
  }
}
