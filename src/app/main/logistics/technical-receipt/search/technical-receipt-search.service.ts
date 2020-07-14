import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class TechnicalReceiptSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly propertiesService: PropertiesService,
    appConfigService: AppConfigService
  ) {
    super(http, appConfigService);
  }

  public loadTechincalReceipt() {
    return [
      {
        partNumber: '0055215-100-01',
        designation: '### DESINGATION DU P/N ###',
        sn: '114621-11',
        lot: 'Bon Etat',
        location: 'BA113- Mont-de-Marsan',
        providerSite: 'Magasin General',
        receptionFile: 'RF4000992',
        fileName: 'Reception Pieces Neuves',
        expectedDate: '23/11/2019',
        criticality: 'Immediate'
      },
      {
        partNumber: 'AA789-001',
        designation: '### DESINGATION DU P/N ###',
        sn: 'A6541-61',
        lot: 'Bon Etat',
        location: 'BA113- Mont-de-Marsan',
        providerSite: 'Magasin General',
        receptionFile: 'RF4001186',
        fileName: 'Retour de Reparation',
        expectedDate: '22/11/2019',
        criticality: 'Urgent'
      },
      {
        partNumber: '122-987-12-122',
        designation: '### DESINGATION DU P/N ###',
        sn: '121621-11',
        lot: 'Bon Etat',
        location: 'BA113- Mont-de-Marsan',
        providerSite: 'Magasin General',
        receptionFile: 'RF4003321',
        fileName: 'Nivilement de Stock',
        expectedDate: '21/11/2019',
        criticality: 'Routine'
      }
    ];
  }

  public findAllStockStatusSites(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtSiteApi.findSiteByUsecaseCodeStockStatus);
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public loadWarehousesSelectItem(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }

  public loadCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
  }
}
