import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class TransferOrderSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtSite: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly propertiesService: PropertiesService,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly bidtProductStructureManagementTypeApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public fetchPartnerList(): LabelValue<string>[] {
    return [
      { label: 'Dassault 1', value: '0' },
      { label: 'Dassault 2', value: '1' },
      { label: 'DMAe', value: '2' },
      { label: 'Thales', value: '3' }
    ];
  }

  public fetchSiteList(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSite.findAll);
  }

  public fetchWarehouseList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public fetchDocumentList(): Observable<BidtDfTypeDTO[]> {
    return super.post<number, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes);
  }

  public getBirePnByPn(birePnPnCode: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.bidtProductStructureManagementTypeApi.findBirePn, birePnPnCode);
  }
}
