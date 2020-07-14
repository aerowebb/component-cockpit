import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../../../shared/api/airworthiness-management.api';
import { FleetBusinessApi } from '../../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { FindCsnAndTsnValuesInput } from '../../../../../../shared/types/api-input-types/airworthiness-management/find-csn-and-tsn-values-input.interface';
import { GoNoGoValidationInput } from '../../../../../../shared/types/api-input-types/fleet-business/gonogo-validation-input.interface';
import { ValidateGoNoGoInput } from '../../../../../../shared/types/api-input-types/fleet-business/validate-gonogo-input.interface';
import { FindCsnAndTsnValuesOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/find-csn-and-tsn-values-output.interface';
import { GoNoGoValidationOutput } from '../../../../../../shared/types/api-output-types/fleet-business/gonogo-validation-output.interface';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';

@Injectable()
export class GonogoValidationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public findCsnAndTsnValues(input: FindCsnAndTsnValuesInput): Observable<FindCsnAndTsnValuesOutput> {
    return super.post<FindCsnAndTsnValuesInput, FindCsnAndTsnValuesOutput>(
      this.airworthinessManagementApi.findCsnAndTsnValues,
      input
    );
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public validateGoNoGo(input: ValidateGoNoGoInput): Observable<BidoMissionEquipmentDTO> {
    return super.post<ValidateGoNoGoInput, BidoMissionEquipmentDTO>(this.fleetBusinessApi.validateGoNoGo, input);
  }

  public goNoGoValidation(input: GoNoGoValidationInput): Observable<GoNoGoValidationOutput> {
    return super.post<GoNoGoValidationInput, GoNoGoValidationOutput>(this.fleetBusinessApi.goNoGoValidation, input);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoCustomerByCriteria(input: BidoCustomerDTO): Observable<BidoCustomerDTO[]> {
    return super.post<BidoCustomerDTO, BidoCustomerDTO[]>(
      this.fleetManagementApi.findAllBidoCustomerBySearchCriteria,
      input
    );
  }

  public findEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public findMissionEquipment(input: BidoMissionEquipmentDTOId): Observable<BidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
      this.fleetManagementApi.findBidoMissionEquipment,
      input
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public getStandardCycleCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardCycleCounterLabel);
  }

  public getStandardTimeCounterLabel(): Observable<string> {
    return super.post<void, string>(this.productStructureManagementApi.getStandardTimeCounterLabel);
  }
}
