import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { WorksManagementDTO } from '../../../../shared/types/api-types/works-management-dto-interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class WorksManagementFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Aircraft management api
   *************************************************************************/
  public initializeWorksManagement(): Observable<WorksManagementDTO[]> {
    return super.post<void, WorksManagementDTO[]>(this.aircraftMaintenanceApi.initializeWorksManagement);
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findBidoUserByLogin(login: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, login);
  }

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadUserList(): Observable<SelectItem[]> {
    return this.findUsersWithUseCase().pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.lastname} ${user.firstname}`,
                  value: user.userId
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findWorkOrderOriginDetails(input: AssetWorkOrderOriginInput): Observable<AssetWorkOrderOriginDataOutput> {
    return super.post<AssetWorkOrderOriginInput, AssetWorkOrderOriginDataOutput>(
      this.airworthinessManagementApi.findWorkOrderOriginDetails,
      input
    );
  }

  public loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }
}
