import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidoCustomerDTO } from '../../../../../../generated_files/api-types/bido-customer-dto.interface';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtTransferOrderApi } from '../../../../shared/api/bidt-transfer-order.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileBusinessApi } from '../../../../shared/api/user-profile-business.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AccessRightQueryDTO } from '../../../../shared/types/api-types/access-right-query-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

@Injectable()
export class MaterialRequestTransferOrderManagementFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtTransferOrderApi: BidtTransferOrderApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * User profile business api
   *************************************************************************/

  public hasDisplayRights(input: AccessRightQueryDTO): Observable<boolean> {
    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasDisplayRights, input);
  }

  /**************************************************************************
   * Bidt site api
   *************************************************************************/

  public findAllSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.getSites);
  }

  public findSiteById(input: string): Observable<BidtSiteDTO> {
    return super.post<string, BidtSiteDTO>(this.bidtSiteApi.getById, input);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  /**************************************************************************
   * search requested material api
   *************************************************************************/

  public getOperationalStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }

  public findTransferOrderById(id: number): Observable<FindTransferOrdersByCriteriaOutput> {
    return super.post<number, FindTransferOrdersByCriteriaOutput>(this.bidtTransferOrderApi.findTransferOrderById, id);
  }

  public fetchTypeList(): Observable<LabelValue<number>[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes).pipe(
      map((dfTypes) => {
        return ListUtils.orEmpty(dfTypes).map((dfType) => {
          return {
            label: StringUtils.orEmpty(dfType.dftDesignation),
            value: dfType.id as number
          };
        });
      })
    );
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public findUser(input: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, input);
  }

  /**************************************************************************
   * Bire PN api
   *************************************************************************/

  public getBirePnByPn(birePnPnCode: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, birePnPnCode);
  }
}
