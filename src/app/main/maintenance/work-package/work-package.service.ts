import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';

import { FleetManagementApi } from './../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from './../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from './../../../shared/api/user-profile-management.api';
import { BidoFunctionTypeConstants } from './../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from './../../../shared/constants/generic-property-constants';
import { PropertiesService } from './../../../shared/services/properties.service';
import { BidoUserDTO } from './../../../shared/types/api-types/bido-user-dto.interface';
import { LabelValue } from './../../../shared/types/label-value.interface';
import { ArrayUtils } from './../../../shared/utils/array-utils';
import { SelectItemUtils } from './../../../shared/utils/select-item-utils';

@Injectable()
export class WorkPackageService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  private findAuthorizedBireSite(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAuthorizedBireSite);
  }

  private findAuthorizedBidoOperations(): Observable<LabelValue<string>[]> {
    return super.post<{}, LabelValue<string>[]>(this.fleetManagementApi.findAuthorizedBidoOperations);
  }

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  public loadStatusList(removedStatuses: string[]): Observable<SelectItem[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).pipe(
      map((results) => {
        const statusList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return statusList.filter((status) => !removedStatuses.includes(status.value));
      })
    );
  }

  public loadMROCenterList(): Observable<SelectItem[]> {
    return this.findAuthorizedBireSite().pipe(
      map((results) => {
        const mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];

        return mroCenterList.map((mro) => {
          mro.label = mro.label ? `${mro.label} (${mro.value})` : mro.value;

          return mro;
        });
      })
    );
  }

  public loadOperationList(): Observable<SelectItem[]> {
    return this.findAuthorizedBidoOperations().pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
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
}
