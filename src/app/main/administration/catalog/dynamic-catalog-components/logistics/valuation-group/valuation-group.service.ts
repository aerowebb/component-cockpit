import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtValuationGroupApi } from '../../../../../../shared/api/bidt-valuation-group.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtValuationGroupDTO } from '../../../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable({
  providedIn: 'root'
})
export class ValuationGroupService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly bidtValuationGroupApi: BidtValuationGroupApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadValuationGroupTableData(): Observable<SearchResultsDTO<BidtValuationGroupDTO>> {
    return super.post<void, SearchResultsDTO<BidtValuationGroupDTO>>(this.bidtValuationGroupApi.findByCriteria);
  }
  public getValuationGroupCodeNameMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getValuationGroupCodeMap');
  }
  public deleteValuationGroup(valuationGroup: number[]) {
    return super.post<number[], void>(this.bidtValuationGroupApi.delete, valuationGroup);
  }
  public getValuationGroupUnitCodeMapping(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findAllBireUnitMeasures);
  }
  public saveValuationGroup(input: SaveCatalogInput) {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, input);
  }
}
