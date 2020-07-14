import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants as gpc } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { ProgressFromOperationStatusInput } from '../../../../shared/types/api-input-types/work-order/progress-from-operation-status-input';
import { BidmWorkOrderDataDTO } from '../../../../shared/types/api-types/bidm-work-order-data-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoUserDTOId } from '../../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class TechnicalReceiptFormService extends AbstractAwHttpService {
  private readonly _woTypeList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woTypeList$ = this._woTypeList.asObservable();

  private readonly _userList = new BehaviorSubject<SelectItem[]>([]);
  public readonly userList$ = this._userList.asObservable();

  private readonly _woStatusList = new BehaviorSubject<SelectItem[]>([]);
  public readonly woStatusList$ = this._woStatusList.asObservable();

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly propertiesService: PropertiesService,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi
  ) {
    super(http, appConfigService);
  }

  public loadTechnicalRecepitData() {
    return {
      partNumber: '0055215-100-01',
      designation: '### DESIGNATION DU P/N ###',
      snLot: '114621-11',
      worthiness: 'NOK',
      location: 'BA118-Monte-de-Marsan',
      warehouse: 'Magasin General',
      emplacement: 'Zone Bon Etat - AD984',
      operationalStatus: 'To Control',
      fileNumber: 'RF400092',
      type: 'Reception Pieces Nievues',
      status: 'Release',
      logisticLocation: 'BA118- Monte-de-Marsan',
      releaseBy: 'John MacClane',
      date: new Date(),
      wp: '17965',
      wo: 'WO000032332432',
      mroCenter: 'BA118-Mont-de-Marsan',
      progress: 50,
      taskAcceptance: '53-00-00-00-201-01-01A'
    };
  }

  public loadDueDateData() {
    return [
      {
        value: '230FH',
        type: 'SB/AD',
        designation: '2019-XXX- INSPECTION / MODIFICATION'
      }
    ];
  }

  public loadConfigurationData() {
    return [{ ok: 79, nok: 2, warning: 0 }];
  }

  public loadDialogFormData() {
    return {
      user: 'John McClane',
      date: new Date(),
      oldValue: 'A controller',
      newValue: 'Bon Etat'
    };
  }

  /***********************************
   Aircraft maintenace api
  ***********************************/

  public findBidmWorkOrder(bidmWorkOrderDTOId: BidmWorkOrderDTOId): Observable<BidmWorkOrderDataDTO> {
    return forkJoin({
      woTypeList: this.loadGenProps(gpc.AIRM_WORK_ORDER_TYPES_MAP),
      woStatusList: this.loadGenProps(gpc.AIRM_OPERATION_STATUS_MAP),
      userList: this.loadUserList()
    }).pipe(
      mergeMap(({ woTypeList, woStatusList, userList }) => {
        this._woTypeList.next(woTypeList);
        this._woStatusList.next(woStatusList);
        this._userList.next(userList);

        return super
          .post<BidmWorkOrderDTOId, BidmWorkOrderDataDTO>(
            this.aircraftMaintenanceApi.findBidmWorkOrderData,
            bidmWorkOrderDTOId
          )
          .pipe(map((res) => res));
      })
    );
  }

  private loadUserList(): Observable<SelectItem[]> {
    return this.findUsersWithUseCase().pipe(
      map((results) => {
        return !!results
          ? results
              .map((user) => {
                return {
                  label: `${user.firstname} ${user.lastname}`,
                  value: user.userId
                };
              })
              .sort(ArrayUtils.compareValues('label'))
          : [];
      })
    );
  }

  private loadGenProps(key): Observable<SelectItem[]> {
    return this.propertiesService.getValue(key).pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  /***********************************
   user profile api
  ***********************************/

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagementApi.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadBidmWorkOrderID() {
    return { projectId: '4907143953337775713', woId: '3438490147292885418' };
  }

  public getProgressFromOperationStatus(operation: ProgressFromOperationStatusInput): Observable<number> {
    return super.post<ProgressFromOperationStatusInput, number>(
      this.aircraftMaintenanceApi.getProgressFromOperationStatus,
      operation
    );
  }

  /***********************************
   employee api
  ***********************************/
  public getEmployeeById(id: number): Observable<BidtEmployeeDTO> {
    return super.post<number, BidtEmployeeDTO>(this.bidtEmployeeApi.getById, id);
  }

  public findUserById(userId: BidoUserDTOId): Observable<BidoUserDTO> {
    return super.post<BidoUserDTOId, BidoUserDTO>(this.userProfileManagementApi.findUser, userId);
  }
}
