import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveSettingInput } from '../../../../shared/types/api-input-types/user-profile-management/save-setting-input.interface';
import { SettingTableDTO } from '../../../../shared/types/api-output-types/user-profile-management/setting-table-dto.interface';
import { BidoPropertiesDTO } from '../../../../shared/types/api-types/bido-properties-dto.interface';
import { BidoPropertiesValueDTO } from '../../../../shared/types/api-types/bido-properties-value-dto.interface';

@Injectable()
export class SettingsFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findBidoPropertyValuesByPropertyId(
    bidoPropertiesDTO: BidoPropertiesDTO
  ): Observable<BidoPropertiesValueDTO[]> {
    return super.post<BidoPropertiesDTO, BidoPropertiesValueDTO[]>(
      this.userProfileManagementApi.findBidoPropertyValuesByPropertyId,
      bidoPropertiesDTO
    );
  }

  public updateSettings(saveSettingInput: SaveSettingInput): Observable<void> {
    return super.post<SaveSettingInput, void>(this.userProfileManagementApi.updateSettings, saveSettingInput);
  }

  public getCustomizationData(): Observable<SettingTableDTO[]> {
    return super.post<void, SettingTableDTO[]>(this.userProfileManagementApi.getCustomizationData);
  }
}
