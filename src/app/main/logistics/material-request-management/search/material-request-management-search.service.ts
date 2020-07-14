import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { MaterialRequestInput } from '../shared/material-request-input.interface';
import { MaterialRequestOutput } from '../shared/material-request-output.interface';

@Injectable()
export class MaterialRequestManagementSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtSiteApi: BidtSiteApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt site api
   *************************************************************************/

  public findAllSiteList(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findSiteByUseCaseCode);
  }

  public findAllSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.getSites);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public findAllWarehouseList(): Observable<BidtWarehouseDTO[]> {
    return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
  }

  public findWarehouseListBySite(input: string): Observable<BidtWarehouseDTO[]> {
    return super.post<string, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, input);
  }

  /**************************************************************************
   * search requested material api
   *************************************************************************/
  public findMaterialsRequested(input: MaterialRequestInput): Observable<SearchResultsDTO<MaterialRequestOutput>> {
    const simpleObservable = new Observable<SearchResultsDTO<MaterialRequestOutput>>((observer) => {
      const searchResult: SearchResultsDTO<MaterialRequestOutput> = {
        list: [
          {
            illustration: 'assets/img/illustration-1.jpg',
            sn: 'S4000307',
            createdBy: 'TO201792',
            createdOn: '27/08/2019',
            origin: 'Order de Travail',
            pn: '303-086-103-0',
            designation: '### DESIGNATION DU P/N ###',
            quantity: '3',
            desiredPotential: '450',
            potentialUnit: 'FH',
            site: 'Monte-de-Marsan',
            warehouse: 'Ateller A',
            desiredOn: '30/08/2019',
            criticity: 'red',
            status: 'Lance',
            progress: 'Servi partiellement',
            served: '1',
            booked: '1',
            notBooked: '1'
          },
          {
            illustration: 'assets/img/illustration-2.jpg',
            sn: 'S4000992',
            createdBy: 'TO137901',
            createdOn: '17/08/2019',
            origin: 'Order de Travail',
            pn: '303-722-001-0',
            designation: '### DESIGNATION DU P/N ###',
            quantity: '1',
            desiredPotential: '200',
            potentialUnit: 'FH',
            site: 'Toulouse',
            warehouse: 'DRSU',
            desiredOn: '14/09/2019',
            criticity: 'yellow',
            status: 'Brouillon',
            progress: 'Non Servi',
            served: '0',
            booked: '0',
            notBooked: '1'
          },
          {
            illustration: 'assets/img/illustration-3.png',
            sn: 'S4000901',
            createdBy: 'TO137901',
            createdOn: '17/08/2019',
            origin: 'Lot de Deploiement',
            pn: '70720041-00',
            designation: 'APU',
            quantity: '28',
            desiredPotential: '260',
            potentialUnit: 'FH',
            site: 'Monte-de-Marsan',
            warehouse: 'DRSU',
            desiredOn: '11/09/2019',
            criticity: 'green',
            status: 'Lance',
            progress: 'Non Servi',
            served: '0',
            booked: '6',
            notBooked: '22'
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
}
