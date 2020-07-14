import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetHistoryApi } from '../../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidoFhEquipmentDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-fh-equipment-dto.interface';
import { HBidoEquipmentDTO } from '../../../../shared/types/api-output-types/fleet-management/h-bido-equipment-dto.interface';
import { HFBidoEquipmentDTO } from '../../../../shared/types/api-output-types/fleet-management/hf-bido-equipment-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoReportDTOId } from '../../../../shared/types/api-types/bido-report-dto-id.interface';
import { BidoReportDTO } from '../../../../shared/types/api-types/bido-report-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class AssetLogFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetHistorApi: FleetHistoryApi,
    private readonly propertiesService: PropertiesService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public getHistoricTableData(input: BidoEquipmentDTOId): Observable<BidoFhEquipmentDTO[]> {
    return super.post<BidoEquipmentDTOId, BidoFhEquipmentDTO[]>(this.fleetHistorApi.findBidoFhEquipments, input);
  }
  public getHistoricDetailTableData(input: string): Observable<HFBidoEquipmentDTO[]> {
    return super.post<string, HFBidoEquipmentDTO[]>(this.fleetHistorApi.findHFBidoEquipmentsByEquipmentCode, input);
  }
  public getUpdateTableData(input: BidoEquipmentDTOId): Observable<HBidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTOId, HBidoEquipmentDTO[]>(this.fleetHistorApi.findHBidoEquipments, input);
  }
  public getReportTableData(input: BidoEquipmentDTOId): Observable<BidoReportDTO[]> {
    return super.post<BidoEquipmentDTOId, BidoReportDTO[]>(
      this.fleetHistorApi.initilizeBidoEquipmentReportTable,
      input
    );
  }
  public findBidoReportContentOfBidoReport(input: BidoReportDTOId): Observable<Uint8Array> {
    return super.post<BidoReportDTOId, Uint8Array>(this.fleetManagementApi.findBidoReportContentOfBidoReport, input);
  }
  public deleteReportEntry(reportId: BidoReportDTOId[]) {
    return super.post<BidoReportDTOId[], BidoReportDTO[]>(this.fleetManagementApi.removeBidoReport, reportId);
  }
  public getEquipmentFunctionList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP);
  }
  public getOperationalStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
  }
  public getOperationalStatusMapForAircraft(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRCRAFT_STATUS_MAP);
  }
  public getFamilyVariant(input: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.initializeFamilyVariantList,
      input
    );
  }
  public getObjectStatusMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getObjectStatusMap');
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }
}
