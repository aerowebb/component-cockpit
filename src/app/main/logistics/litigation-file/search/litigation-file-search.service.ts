import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { CatalogPropertiesTableDTO } from '../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ArrayUtils } from '../../../../shared/utils/array-utils';
import { LitigationFileSearchRow } from '../shared/litigation-file-row.interface';

@Injectable()
export class LitigationFileSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly userProfileManagement: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public findByCriteria(): Observable<SearchResultsDTO<LitigationFileSearchRow>> {
    const simpleObservable = new Observable<SearchResultsDTO<LitigationFileSearchRow>>((observer) => {
      const searchResult: SearchResultsDTO<LitigationFileSearchRow> = {
        list: [
          {
            litigationFile: 'LF3223447',
            litigationType: 'Deterioration',
            category: 'Qualitatif',
            typeOfElement: 'Material Connu',
            isBlocking: true,
            folderNumber: 'RF4000992',
            folderName: 'Dossier de Reception - Material Neuf',
            status: 'Créé',
            foundOn: new Date(),
            createdBy: 'John McClane',
            comment: 'CRIQUE CONSTATEE SUR CE SN',
            supplier: 'Dassault1',
            carrier: 'DHL',
            criticity: 'Immediate',
            origin: 'Réception'
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

  public fetchPropertyValuesTableData(propertiesId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagement.findBidoPropertiesValuesByPropertiesId,
      propertiesId
    );
  }

  private findUsersWithUseCase(): Observable<BidoUserDTO[]> {
    return super.post<{}, BidoUserDTO[]>(
      this.userProfileManagement.findBidoUsersWithUseCase,
      BidoFunctionTypeConstants.UC_AIRM_RECEPTION
    );
  }

  public loadWarehousesSelectItem(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }

  public getWarehousesBySiteId(siteId: number | undefined): Observable<BidtWarehouseDTO[]> {
    if (siteId) {
      return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
    } else {
      return super.post<void, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
    }
  }

  public findAllStockStatusSites(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
  }

  public loadCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
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
