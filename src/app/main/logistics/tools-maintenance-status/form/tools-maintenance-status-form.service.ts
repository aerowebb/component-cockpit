import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AssetManagementApi } from '../../../../shared/api/asset-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ToolsMaintenanceStatusFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly assetManagementApi: AssetManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public generateAirworthinessControlTable(
    input: GenerateAirworthinessControlTableInput
  ): Observable<GenerateAirworthinessControlTableOutput[]> {
    return super.post<GenerateAirworthinessControlTableInput, GenerateAirworthinessControlTableOutput[]>(
      this.airworthinessManagementApi.generateAirworthinessControlTable,
      input
    );
  }

  public checkEquipmentForAirworthinessControl(
    input: CheckEquipmentForAirworthinessControlInput
  ): Observable<GenerateAirworthinessControlTableOutput> {
    return super.post<CheckEquipmentForAirworthinessControlInput, GenerateAirworthinessControlTableOutput>(
      this.airworthinessManagementApi.checkEquipmentForAirworthinessControl,
      input
    );
  }

  public computePotentialForAirworthinessControlInput(
    input: GenerateAirworthinessControlTableInput
  ): Observable<GenerateAirworthinessControlTableOutput[]> {
    return super.post<GenerateAirworthinessControlTableInput, GenerateAirworthinessControlTableOutput[]>(
      this.airworthinessManagementApi.computePotentialForAirworthinessControlInput,
      input
    );
  }

  public fetchGroundEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.assetManagementApi.fetchGroundEquipmentFunctionList);
  }
}
