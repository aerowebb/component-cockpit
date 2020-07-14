import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidoCustomerDTO } from '../../../../../../generated_files/api-types/bido-customer-dto.interface';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileBusinessApi } from '../../../../shared/api/user-profile-business.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AccessRightQueryDTO } from '../../../../shared/types/api-types/access-right-query-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { MaterialProposedTableRow } from '../shared/material-proposed-table-row.interface';

@Injectable()
export class MaterialRequestManagementFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
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
  public findProposedMaterials(partNumber?: string): Observable<SearchResultsDTO<MaterialProposedTableRow>> {
    const simpleObservable = new Observable<SearchResultsDTO<MaterialProposedTableRow>>((observer) => {
      const partNumber2 = partNumber === '70720041-00' ? '70720041-10' : '303-086-103-1';

      const searchResult: SearchResultsDTO<MaterialProposedTableRow> = {
        list: [
          {
            sn: '69871',
            pn: partNumber,
            designation: '### DESIGNATION DU P/N ###',
            site: 'Monte-de-Marsan',
            warehouse: 'DRSU',
            location: 'B523',
            responsible: 'DMA6',
            potential: '600 FH',
            expiration: '90 Jours',
            satisfactionRate: 100,
            status: 'Disponible',
            satisfactionColor: 'green',
            buttonName: 'cancel'
          },
          {
            sn: '54789',
            pn: partNumber2,
            designation: '### DESIGNATION DU P/N ###',
            site: 'Toulouse',
            warehouse: 'DRSU',
            location: 'Transit',
            responsible: 'DMA6',
            potential: '500 FH',
            expiration: '60 Jours',
            satisfactionRate: 60,
            status: 'Disponible',
            message: 'Reserve pour DA S4000301',
            satisfactionColor: 'yellow',
            interchangebility: partNumber === '70720041-00' ? 'Two-Ways' : 'One-Way',
            buttonName: 'book'
          },
          {
            sn: '66399',
            pn: partNumber,
            designation: '### DESIGNATION DU P/N ###',
            site: 'Saint Dizier',
            warehouse: 'Ateller A',
            location: 'Transit',
            responsible: 'DMA6',
            potential: '250 FH',
            expiration: '72 Jours',
            satisfactionRate: 40,
            status: 'En attente de reparation',
            message: 'Disporible a partir du 29/08/2019',
            satisfactionColor: 'yellow',
            buttonName: 'book'
          },
          {
            sn: '66389',
            pn: partNumber,
            designation: '### DESIGNATION DU P/N ###',
            site: 'Saint Dizier',
            warehouse: 'Ateller A',
            location: 'Transit',
            responsible: 'DMA6',
            potential: '250 FH',
            expiration: '72 Jours',
            satisfactionRate: 20,
            status: 'En attente de reparation',
            message: 'Disporible a partir du 01/09/2019',
            satisfactionColor: 'red',
            buttonName: 'preempter'
          }
        ],
        moreResults: false
      };
      // observable execution
      observer.next(searchResult);
      observer.complete();
    });

    return simpleObservable;
  }

  public getOperationalStatusMap(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeOperationalStatusList,
      input
    );
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }
}
