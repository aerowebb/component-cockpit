import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ReferentialManagementApi extends AbstractApi {

    private static readonly baseUrl: string = '/referential_dashboard';

    public readonly getFilesFromMediation: string = super.appendToBaseUrl('/fetch_files');

    public readonly deletFiles: string = super.appendToBaseUrl('/delete_files');

    public readonly downloadFiles: string = super.appendToBaseUrl('/download_files');

    public constructor() {
        super(ReferentialManagementApi.baseUrl);
      }
}
