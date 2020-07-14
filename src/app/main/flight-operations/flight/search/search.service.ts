import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtEmployeeApi } from '../../../../shared/api/bidt-employee.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { GenerateFlightLogbookPdfInput } from '../../../../shared/types/api-input-types/fleet-business/generate-flight-logbook-pdf-input.interface';
import { FindAllBidoMissionEquipmentByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-bido-mission-equipment-by-criteria-input.interface';
import { FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput } from '../../../../shared/types/api-input-types/fleet-management/find-replenishment-by-mission-equipment-and-type-and-equipment-code-input.interface';
import { BidoMissionEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-equipment-lwo.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoReplenishmentDTO } from '../../../../shared/types/api-types/bido-replenishment-dto.interface';
import { BidtEmployeeDTO } from '../../../../shared/types/api-types/bidt-employee-dto.interface';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class SearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Bidt employee api
   *************************************************************************/

  public findAllEmployeeByQualificationCode(qualificationCode: string): Observable<BidtEmployeeDTO[]> {
    return super.post<string, BidtEmployeeDTO[]>(
      this.bidtEmployeeApi.findAllEmployeeByQualificationCode,
      qualificationCode
    );
  }
  public findAllBidoCustomerBySearchCriteria(input: BidoCustomerDTO): Observable<BidoCustomerDTO[]> {
    return super.post<BidoCustomerDTO, BidoCustomerDTO[]>(
      this.fleetManagementApi.findAllBidoCustomerBySearchCriteria,
      input
    );
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public generateFlightLogbookPDF(input: GenerateFlightLogbookPdfInput): Observable<FileContentDTO> {
    return super.post<GenerateFlightLogbookPdfInput, FileContentDTO>(
      this.fleetBusinessApi.generateFlightLogbookPDF,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoMissionEquipmentByCriteria(
    criteria: FindAllBidoMissionEquipmentByCriteriaInput
  ): Observable<SearchResultsDTO<BidoMissionEquipmentLWO>> {
    return super.post<FindAllBidoMissionEquipmentByCriteriaInput, SearchResultsDTO<BidoMissionEquipmentLWO>>(
      this.fleetManagementApi.findAllBidoMissionEquipmentLwoByCriteria,
      criteria
    );
  }

  public findEquipmentEngineListByEquipmentCode(input: string): Observable<BidoEquipmentDTO[]> {
    return super.post<string, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
      input
    );
  }

  public findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode(
    input: FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput
  ): Observable<BidoReplenishmentDTO> {
    return super.post<FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput, BidoReplenishmentDTO>(
      this.fleetManagementApi.findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode,
      input
    );
  }

  public getSourceSystemIdList(): Observable<LabelValue<String>[]> {
    return super.post<void, LabelValue<String>[]>(this.fleetManagementApi.getSourceSystemIdList);
  }

  public getEquipmentRepresentation(input: BidoEquipmentDTO): Observable<string> {
    return super.post<BidoEquipmentDTO, string>(this.fleetManagementApi.getEquipmentRepresentation, input);
  }

  public removeBidoMissionEquipment(input: BidoMissionEquipmentDTOId[]): Observable<void> {
    return super.post<BidoMissionEquipmentDTOId[], void>(this.fleetManagementApi.removeBidoMissionEquipment, input);
  }
}
