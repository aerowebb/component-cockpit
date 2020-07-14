import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidtCompanyApi } from '../../../shared/api/bidt-company.api';
import { BidtSiteApi } from '../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidtCompanyDTO } from '../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BidtWorkCenterDTO } from '../../../shared/types/api-types/bidt-work-center-dto.interface';
import { EnterpriseDefinitionElementDTO } from '../../../shared/types/api-types/enterprise-definition-element-dto.interface';
import { SaveWarehouseInput } from '../../../shared/types/api-types/save-warehouse-input.interface';
import { TreeNodeDTO } from '../../../shared/types/api-types/tree-node-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { NumberUtils } from '../../../shared/utils/number-utils';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseDefinitionService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtCompanyApi: BidtCompanyApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt company api
   *************************************************************************/

  public deleteCompany(input: number): Observable<void> {
    return super.post<number, void>(this.bidtCompanyApi.delete, input);
  }

  public getCompanyById(input: number): Observable<BidtCompanyDTO> {
    return super.post<number, BidtCompanyDTO>(this.bidtCompanyApi.getById, input);
  }

  public loadCompanies(input: BidtCompanyDTO): Observable<LabelValue<number>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, input).pipe(
      map((companies) => {
        return companies
          .map((company) => {
            return {
              label: company.label,
              value: NumberUtils.fromString(company.value)
            };
          })
          .sort((c1, c2) => c1.label.localeCompare(c2.label));
      })
    );
  }

  public loadEnterpriseDefinition(): Observable<TreeNodeDTO<EnterpriseDefinitionElementDTO>[]> {
    return super.post<void, TreeNodeDTO<EnterpriseDefinitionElementDTO>[]>(this.bidtCompanyApi.getEnterpriseStructure);
  }

  public saveCompany(input: BidtCompanyDTO): Observable<BidtCompanyDTO> {
    return super.post<BidtCompanyDTO, BidtCompanyDTO>(this.bidtCompanyApi.addOrUpdate, input);
  }

  /**************************************************************************
   * Bidt site api
   *************************************************************************/

  public deleteSite(input: number[]): Observable<void> {
    return super.post<number[], void>(this.bidtSiteApi.delete, input);
  }

  public getSiteById(input: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, input);
  }

  public loadSites(input: BidtSiteDTO): Observable<BidtSiteDTO[]> {
    return super.post<BidtSiteDTO, BidtSiteDTO[]>(this.bidtSiteApi.getSites, input);
  }

  public saveSite(input: BidtSiteDTO): Observable<BidtSiteDTO> {
    return super.post<BidtSiteDTO, BidtSiteDTO>(this.bidtSiteApi.addOrUpdate, input);
  }

  /**************************************************************************
   * Bidt warehouse api
   *************************************************************************/

  public deleteWarehouse(input: number[]): Observable<void> {
    return super.post<number[], void>(this.bidtWarehouseApi.delete, input);
  }

  public getWarehouseById(input: number): Observable<BidtWarehouseDTO> {
    return super.post<number, BidtWorkCenterDTO>(this.bidtWarehouseApi.getById, input);
  }

  public getWarehousesBySiteId(input: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWorkCenterDTO[]>(this.bidtWarehouseApi.findBySiteId, input);
  }

  public saveWarehouse(input: SaveWarehouseInput): Observable<number> {
    return super.post<SaveWarehouseInput, number>(this.bidtWarehouseApi.saveWarehouse, input);
  }
}
