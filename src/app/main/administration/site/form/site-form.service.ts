import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompanyApi } from '../../../../shared/api/bidt-company.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { LogisticsManagementApi } from '../../../../shared/api/logistics-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindAllBirePnByCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-pn-by-criteria-input.interface';
import { BidtCompanyDTO } from '../../../../shared/types/api-types/bidt-company-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { BsdeSitePnTilDTO } from '../../../../shared/types/api-types/bsde-site-pn-til-dto.interface';
import { SaveSiteInput } from '../../../../shared/types/api-types/save-site-screen-input';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SiteFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly logisticsManagementApi: LogisticsManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly bidtCompanyApi: BidtCompanyApi
  ) {
    super(http, appConfigService);
  }

  public getById(siteId: number): Observable<BidtSiteDTO> {
    return super.post<number, BidtSiteDTO>(this.bidtSiteApi.getById, siteId);
  }

  public findBsdeSitePnTilsBySiteCode(repairCenterCode: string): Observable<BsdeSitePnTilDTO[]> {
    return super.post<string, BsdeSitePnTilDTO[]>(
      this.logisticsManagementApi.findBsdeSitePnTilsBySiteCode,
      repairCenterCode
    );
  }

  public findAllBirePnByCriteria(criteria: FindAllBirePnByCriteriaInput): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindAllBirePnByCriteriaInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findAllBirePnByCriteria,
      criteria
    );
  }

  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }

  public findAllBireTils(): Observable<BireTilDTO[]> {
    return super.post<void, BireTilDTO[]>(this.taskManagementApi.findAllBireTils);
  }

  public saveSite(saveSiteInput: SaveSiteInput): Observable<boolean> {
    return super.post<SaveSiteInput, boolean>(this.bidtSiteApi.saveSite, saveSiteInput);
  }

  // public removeBidoCustomer(bidoCustomerId: BidoCustomerDTOId): Observable<boolean> {
  //   return super.post<BidoCustomerDTOId, boolean>(this.fleetManagementApi.removeBidoCustomer, bidoCustomerId);
  // }
}
