import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtProcurementRequestApi } from '../../../../shared/api/bidt-procurement-request.api';
import { BidtSiteApi } from '../../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidoCounterReferenceDTO } from '../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ProcurementRequestSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    private readonly propertiesService: PropertiesService,
    appConfigService: AppConfigService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly bidtProcurementRequestApi: BidtProcurementRequestApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadTableCols() {
    return [
      { field: 'procurementRequest', alignment: 'left', width: '15%' },
      { field: 'referenceDocument', alignment: 'left', width: '14%' },
      { field: 'shipper', alignment: 'left', width: '10%' },
      { field: 'recipient', alignment: 'left', width: '10%' },
      { field: 'assetRecipient', alignment: 'left', width: '10%' },
      { field: 'materials', alignment: 'left', width: '10%' },
      { field: 'quantity', alignment: 'right', width: '5%' },
      { field: 'quantityUnit', alignment: 'left', width: '5%' },
      { field: 'expectedOn', alignment: 'left', width: '7%' },
      { field: 'status', alignment: 'left', width: '7%' },
      { field: 'criticity', alignment: 'left', width: '7%' }
    ];
  }

  public findBidoCounterReferencesByPnCode(input: BirePnDTOId): Observable<BidoCounterReferenceDTO[]> {
    return super.post<BirePnDTOId, BidoCounterReferenceDTO[]>(
      this.productStructureManagementApi.findBidoCounterReferencesByPnCode,
      input
    );
  }

  public loadCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
  }

  public getWarehouseCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }

  public loadStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP);
  }

  public findAllBireMeasureReferencesMaintenanceProgram(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram
    );
  }

  public findAllBidoCustomer(): Observable<BidoCustomerDTO[]> {
    return super.post<void, BidoCustomerDTO[]>(this.fleetManagementApi.findAllBidoCustomer);
  }

  public addOrUpdate(input: BidtProcurementRequestDTO): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.addOrUpdate,
      input
    );
  }

  public createProcurementRequest(input: BidtProcurementRequestDTO): Observable<BidtProcurementRequestDTO> {
    return super.post<BidtProcurementRequestDTO, BidtProcurementRequestDTO>(
      this.bidtProcurementRequestApi.createProcurementRequest,
      input
    );
  }
}
