import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtEmployeeApi } from '../../../shared/api/bidt-employee.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { ValidateSapUserInput } from '../../../shared/types/api-input-types/administration-users/bido-user-check-sap-user-input.interface';
import { FindEmployeeByCompany } from '../../../shared/types/api-input-types/administration-users/find-employee-by-company.interface';
import { UserProfileFunctionDTO } from '../../../shared/types/api-output-types/administration-users/bido-user-profile-function-dto.interface';
import { BidoCompanyTypeDTO } from '../../../shared/types/api-types/bido-company-type-dto.interface';
import { BidoFunctionTypePopUpDTO } from '../../../shared/types/api-types/bido-function-type-popup-dto.interface';
import { BidoProfileDTO } from '../../../shared/types/api-types/bido-profile-dto.interface';
import { BidoUserDTOId } from '../../../shared/types/api-types/bido-user-dto-id.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { ProfileManagementWithUseCaseDTO } from '../../../shared/types/api-types/profile-management-with-use-case-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class UsersFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public getUserDetails(input: BidoUserDTOId): Observable<UserProfileFunctionDTO> {
    return super.post<BidoUserDTOId, UserProfileFunctionDTO>(this.userProfileManagementApi.getuserdetail, input);
  }
  /**************************************************************************
   * profile management api
   *************************************************************************/

  public findAllBidoProfiles(): Observable<BidoProfileDTO[]> {
    return super.post<void, BidoProfileDTO[]>(this.userProfileManagementApi.findAllBidoProfiles);
  }

  public findAllBidoFunctionTypesByModule(input: string): Observable<BidoFunctionTypePopUpDTO[]> {
    return super.post<string, BidoFunctionTypePopUpDTO[]>(
      this.userProfileManagementApi.findAllBidoFunctionTypesByModule,
      input
    );
  }

  /**************************************************************************
   *use cases tab api
   *************************************************************************/
  public getBuildingBlockUseCaseLevel(input: BidoUserDTOId): Observable<ProfileManagementWithUseCaseDTO[]> {
    return super.post<BidoUserDTOId, ProfileManagementWithUseCaseDTO[]>(
      this.userProfileManagementApi.getBuildingBlockUseCaseLevel,
      input
    );
  }

  public getUseCaseLevel(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getUseCasesAccessDegrees);
  }
  /**************************************************************************
   * clients tab api
   *************************************************************************/

  public checkSapUser(input: ValidateSapUserInput): Observable<boolean> {
    return super.post<ValidateSapUserInput, boolean>(this.userProfileManagementApi.checkSapUser, input);
  }

  /**************************************************************************
   *genral tab api
   *************************************************************************/
  public companyMapping(): Observable<BidoCompanyTypeDTO> {
    return super.post<void, BidoCompanyTypeDTO>(this.userProfileManagementApi.companyMap);
  }
  public findEmployeeByCompany(criteria: FindEmployeeByCompany): Observable<BidtEmployeeDTO[]> {
    return super.post<FindEmployeeByCompany, BidtEmployeeDTO[]>(this.bidtEmployeeApi.findEmployeeByCompany, criteria);
  }

  public addUsersForm(input: UserProfileFunctionDTO): Observable<string> {
    return super.post<UserProfileFunctionDTO, string>(this.userProfileManagementApi.addUser, input);
  }
  public updateUsersForm(input: UserProfileFunctionDTO): Observable<void> {
    return super.post<UserProfileFunctionDTO, void>(this.userProfileManagementApi.updateUserDetails, input);
  }
}
