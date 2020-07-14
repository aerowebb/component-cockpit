import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../../shared/api/airworthiness-management.api';
import { BidtEmployeeApi } from '../../../../../shared/api/bidt-employee.api';
import { FleetBusinessApi } from '../../../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { ApplyTaskForFlightInput } from '../../../../../shared/types/api-input-types/airworthiness-management/apply-task-for-flight-input.interface';
import { CalculatePostFlightRecordsInformationsInput } from '../../../../../shared/types/api-input-types/fleet-business/calculate-post-flight-records-informations-input.interface';
import { CreateDefectInput } from '../../../../../shared/types/api-input-types/fleet-business/create-defect-input.interface';
import { SaveFlightInput } from '../../../../../shared/types/api-input-types/fleet-business/save-flight-input.interface';
import { FindAllBidoFlightLoadByFlightInput } from '../../../../../shared/types/api-input-types/fleet-management/find-all-bido-flight-load-by-flight-input.interface';
import { FindAllBidoMeasureByFlightForFlightInput } from '../../../../../shared/types/api-input-types/fleet-management/find-all-bido-measure-by-flight-for-flight-input.interface';
import { FindBidoFlightAttributeInput } from '../../../../../shared/types/api-input-types/fleet-management/find-bido-flight-attribute-input.interface';
import { FindBidoFlightMeasuresByFlightInput } from '../../../../../shared/types/api-input-types/fleet-management/find-bido-flight-measures-by-flight-input.interface';
import { SaveBidoFlightAttributeInput } from '../../../../../shared/types/api-input-types/fleet-management/save-bido-flight-attribute-input.interface';
import { CatalogPropertiesTableDTO } from '../../../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { CalculatePostFlightRecordsInformationsOutput } from '../../../../../shared/types/api-output-types/fleet-business/calculate-post-flight-records-informations-output.interface';
import { FindAllBidoMeasureByFlightForFlightOutput } from '../../../../../shared/types/api-output-types/fleet-management/find-all-bido-measure-by-flight-for-flight-output.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlightAttributeDTO } from '../../../../../shared/types/api-types/bido-flight-attribute-dto.interface';
import { BidoFlightLoadDTO } from '../../../../../shared/types/api-types/bido-flight-load-dto.interface';
import { BidoFlightMeasureDTO } from '../../../../../shared/types/api-types/bido-flight-measure-dto.interface';
import { BidoMissionDTOId } from '../../../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationAttributeDTO } from '../../../../../shared/types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTOId } from '../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BidoPropertiesDTO } from '../../../../../shared/types/api-types/bido-properties-dto.interface';
import { BidtEmployeeDTO } from '../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BireMeasureReferenceDTOId } from '../../../../../shared/types/api-types/bire-measure-reference-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BireUnitMeasureDTOId } from '../../../../../shared/types/api-types/bire-unit-measure-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { DefectLWO } from '../../../../../shared/types/api-types/defect-lwo.interface';
import { HBidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/h-bido-mission-equipment-dto.interface';
import { ResultFlightLogDTO } from '../../../../../shared/types/api-types/result-flight-log-dto.interface';
import { SaveFlightEquipmentInputDTO } from '../../../../../shared/types/api-types/save-flight-equipment-input-dto.interface';
import { SearchResultsDTO } from '../../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

@Injectable()
export class FlightFormService extends AbstractAwHttpService {
  private readonly fuelUpdatedSource: Subject<number>;

  private readonly _fuelUpdated$: Observable<number>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly bidtEmployeeApi: BidtEmployeeApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);

    this.fuelUpdatedSource = new Subject<number>();

    this._fuelUpdated$ = this.fuelUpdatedSource.asObservable();
  }

  public get fuelUpdated$(): Observable<number> {
    return this._fuelUpdated$;
  }

  public updateFuelValue(newValue: number): void {
    this.fuelUpdatedSource.next(newValue);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public applyTaskForFlight(input: ApplyTaskForFlightInput): Observable<BidoNotificationDTO> {
    return super.post<ApplyTaskForFlightInput, BidoNotificationDTO>(
      this.airworthinessManagementApi.applyTaskForFlight,
      input
    );
  }

  /**************************************************************************
   * Bidt employee api
   *************************************************************************/

  public findAllEmployeeByQualificationCode(input: string): Observable<BidtEmployeeDTO[]> {
    return super.post<string, BidtEmployeeDTO[]>(this.bidtEmployeeApi.findAllEmployeeByQualificationCode, input);
  }

  public findAllEmployeeByQualificationType(input: string): Observable<BidtEmployeeDTO[]> {
    return super.post<string, BidtEmployeeDTO[]>(this.bidtEmployeeApi.findAllEmployeeByQualificationType, input);
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public calculatePostFlightRecordsInformations(
    input: CalculatePostFlightRecordsInformationsInput
  ): Observable<CalculatePostFlightRecordsInformationsOutput> {
    return super.post<CalculatePostFlightRecordsInformationsInput, CalculatePostFlightRecordsInformationsOutput>(
      this.fleetBusinessApi.calculatePostFlightRecordsInformations,
      input
    );
  }

  public createDefect(input: CreateDefectInput): Observable<DefectLWO> {
    return super.post<CreateDefectInput, DefectLWO>(this.fleetBusinessApi.createDefect, input);
  }

  public cancelFlightReplenishmentValidation(input: BidoMissionEquipmentDTOId): Observable<BidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
      this.fleetBusinessApi.cancelFlightReplenishmentValidation,
      input
    );
  }

  public findAllBireMeasureReferenceOfStructureByEquipmentCode(input: string): Observable<BireMeasureReferenceDTO[]> {
    return super.post<string, BireMeasureReferenceDTO[]>(
      this.fleetBusinessApi.findBireMeasureReferencesOfStructureByEquipmentCode,
      input
    );
  }

  public findAllEquipmentInStructureByEquipmentCode(input: string): Observable<BidoEquipmentDTO[]> {
    return super.post<string, BidoEquipmentDTO[]>(
      this.fleetBusinessApi.findAllEquipmentsInStructureByEquipmentCode,
      input
    );
  }

  public saveFlight(input: SaveFlightInput): Observable<ResultFlightLogDTO> {
    return super.post<SaveFlightInput, ResultFlightLogDTO>(this.fleetBusinessApi.saveFlight, input);
  }

  public updateFlightEquipment(input: SaveFlightEquipmentInputDTO): Observable<void> {
    return super.post<SaveFlightEquipmentInputDTO, void>(this.fleetManagementApi.updateFlightEquipment, input);
  }

  public validateFlightReplenishment(input: BidoMissionEquipmentDTOId): Observable<BidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
      this.fleetBusinessApi.validateFlightReplenishment,
      input
    );
  }

  /**************************************************************************
   * Fleet history api
   *************************************************************************/

  public findGoNoGoValidationStatus(input: BidoMissionEquipmentDTOId): Observable<HBidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, HBidoMissionEquipmentDTO>(
      this.fleetHistoryApi.findGoNoGoValidationStatus,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public findAllBidoCustomerBySearchCriteria(input: BidoCustomerDTO): Observable<BidoCustomerDTO[]> {
    return super.post<BidoCustomerDTO, BidoCustomerDTO[]>(
      this.fleetManagementApi.findAllBidoCustomerBySearchCriteria,
      input
    );
  }

  public findAllBidoFlightLoadByFlight(input: FindAllBidoFlightLoadByFlightInput): Observable<BidoFlightLoadDTO[]> {
    return super.post<FindAllBidoFlightLoadByFlightInput, BidoFlightLoadDTO[]>(
      this.fleetManagementApi.findAllBidoFlightLoadByFlight,
      input
    );
  }

  public findAllBidoEquipmentEngineByEquipmentCode(input: string): Observable<BidoEquipmentDTO[]> {
    return super.post<string, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findEquipmentEngineListByEquipmentCode,
      input
    );
  }

  public findAllBidoFlightMeasureByFlight(
    input: FindBidoFlightMeasuresByFlightInput
  ): Observable<BidoFlightMeasureDTO[]> {
    return super.post<FindBidoFlightMeasuresByFlightInput, BidoFlightMeasureDTO[]>(
      this.fleetManagementApi.findBidoFlightMeasuresByFlight,
      input
    );
  }

  public findAllBidoMeasureByFlight(
    input: FindAllBidoMeasureByFlightForFlightInput
  ): Observable<FindAllBidoMeasureByFlightForFlightOutput[]> {
    return super.post<FindAllBidoMeasureByFlightForFlightInput, FindAllBidoMeasureByFlightForFlightOutput[]>(
      this.fleetManagementApi.findAllBidoMeasureByFlightForFlight,
      input
    );
  }

  public findAllBidoNotificationAttributeByNotificationCode(
    input: BidoNotificationDTOId
  ): Observable<BidoNotificationAttributeDTO[]> {
    return super.post<BidoNotificationDTOId, BidoNotificationAttributeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode,
      input
    );
  }

  public findAllBidoNotificationTypesByTypeCategory(input: string): Observable<BidoNotificationTypeDTO[]> {
    return super.post<string, BidoNotificationTypeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationTypeByTypeCategory,
      input
    );
  }

  public findBidoEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public findBidoFlightAttribute(input: FindBidoFlightAttributeInput): Observable<BidoFlightAttributeDTO> {
    return super.post<FindBidoFlightAttributeInput, BidoFlightAttributeDTO>(
      this.fleetManagementApi.findBidoFlightAttribute,
      input
    );
  }

  public findBidoMission(input: BidoMissionDTOId): Observable<BidoMissionDTO> {
    return super.post<BidoMissionDTOId, BidoMissionDTO>(this.fleetManagementApi.findBidoMission, input);
  }

  public findBidoMissionEquipment(input: BidoMissionEquipmentDTOId): Observable<BidoMissionEquipmentDTO> {
    return super.post<BidoMissionEquipmentDTOId, BidoMissionEquipmentDTO>(
      this.fleetManagementApi.findBidoMissionEquipment,
      input
    );
  }

  public getSourceSystemIdList(): Observable<LabelValue<String>[]> {
    return super.post<void, LabelValue<String>[]>(this.fleetManagementApi.getSourceSystemIdList);
  }

  public saveBidoFlightAttribute(input: SaveBidoFlightAttributeInput): Observable<void> {
    return super.post<SaveBidoFlightAttributeInput, void>(this.fleetManagementApi.saveBidoFlightAttribute, input);
  }

  public getCountryZoneMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getCountryZoneMap');
  }

  public getFlightArea(propertiesId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagementApi.findBidoPropertiesValuesByPropertiesId,
      propertiesId
    );
  }

  public getPropertyCatalogIdNameMapping(): Observable<BidoPropertiesDTO[]> {
    return super.post<void, BidoPropertiesDTO[]>(this.userProfileManagementApi.findAllBidoProperties);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findAllBireUnitMeasure(): Observable<BireUnitMeasureDTO[]> {
    return super.post<void, BireUnitMeasureDTO[]>(this.productStructureManagementApi.findAllBireUnitMeasure);
  }

  public findBireMeasureReference(input: BireMeasureReferenceDTOId): Observable<BireMeasureReferenceDTO> {
    return super.post<BireMeasureReferenceDTOId, BireMeasureReferenceDTO>(
      this.productStructureManagementApi.findBireMeasureReference,
      input
    );
  }

  public findBireUnitMeasure(input: BireUnitMeasureDTOId): Observable<BireUnitMeasureDTO> {
    return super.post<BireUnitMeasureDTOId, BireUnitMeasureDTO>(
      this.productStructureManagementApi.findBireUnitMeasure,
      input
    );
  }

  /**************************************************************************
   * Fleet history api
   *************************************************************************/
  // tslint:disable-next-line: max-line-length
  public findHBidoMissionEquipments(
    objId: BidoMissionEquipmentDTOId
  ): Observable<SearchResultsDTO<HBidoMissionEquipmentDTO>> {
    return super.post<BidoMissionEquipmentDTOId, SearchResultsDTO<HBidoMissionEquipmentDTO>>(
      this.fleetHistoryApi.findHBidoMissionEquipments,
      objId
    );
  }
}
