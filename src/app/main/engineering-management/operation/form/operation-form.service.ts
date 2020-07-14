import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AircraftMaintenanceApi } from '../../../../shared/api/aircraft-maintenance.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { StatusManagementApi } from '../../../../shared/api/status-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { UserProfileBusinessApi } from '../../../../shared/api/user-profile-business.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { FindBirePnsBySearchCriteriaPSMInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-pns-by-search-criteria-input.interface';
import { CalculateCostOfBireOperationInput } from '../../../../shared/types/api-input-types/task-management/calculate-cost-of-bire-operation-input.interface';
import { FindBirePnsBySearchCriteriaTMInput } from '../../../../shared/types/api-input-types/task-management/find-bire-pns-by-search-criteria-input.interface';
import { SaveBireOperationInput } from '../../../../shared/types/api-input-types/task-management/save-bire-operation-input.interface';
import { WarehouseListDTO } from '../../../../shared/types/api-output-types/bidt-warehouse/warehouse-list-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocOperationDTOId } from '../../../../shared/types/api-types/bire-doc-operation-dto-id.interface';
import { BireDocOperationDTO } from '../../../../shared/types/api-types/bire-doc-operation-dto.interface';
import { BireDocumentDTOId } from '../../../../shared/types/api-types/bire-document-dto-id.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireOperationAttributeDTOId } from '../../../../shared/types/api-types/bire-operation-attribute-dto-id.interface';
import { BireOperationAttributeDTO } from '../../../../shared/types/api-types/bire-operation-attribute-dto.interface';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BireOperationPnDTOId } from '../../../../shared/types/api-types/bire-operation-pn-dto-id.interface';
import { BireOperationPnDTO } from '../../../../shared/types/api-types/bire-operation-pn-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireRangeDTO } from '../../../../shared/types/api-types/bire-range-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { ObjectStatusDTO } from '../../../../shared/types/api-types/object-status-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class OperationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly aircraftMaintenanceApi: AircraftMaintenanceApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly propertiesService: PropertiesService,
    private readonly userProfileBusinessApi: UserProfileBusinessApi,
    private readonly statusManagementApi: StatusManagementApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi
  ) {
    super(http, appConfigService);
  }

  /*************************************************************************
   * Aircraft maintenance api
   *************************************************************************/

  public calculateCostOfBireOperationForAircraftMaintenance(
    operationManHour: number,
    qualificationCode: string,
    duration: number,
    operationDTO: BireOperationDTO
  ): Observable<number> {
    const params = {
      operationManHour,
      qualificationCode,
      duration,
      operationDTO
    };

    return super.post<
      { operationManHour: number; qualificationCode: string; duration: number; operationDTO: BireOperationDTO },
      number
    >(this.aircraftMaintenanceApi.calculateCostOfBireOperation, params);
  }

  /*************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBireAttributesByCategory(p: string): Observable<BireAttributeDTO[]> {
    return super.post<string, BireAttributeDTO[]>(this.productStructureManagementApi.findBireAttributesByCategory, p);
  }

  public findBirePnForProductStructureManagement(p: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, p);
  }

  public createBireDocument(p: BireDocumentDTO): Observable<BireDocumentDTOId> {
    return super.post<BireDocumentDTO, BireDocumentDTOId>(this.productStructureManagementApi.createBireDocument, p);
  }

  public updateBireDocument(p: BireDocumentDTO): Observable<void> {
    return super.post<BireDocumentDTO, void>(this.productStructureManagementApi.updateBireDocument, p);
  }

  public removeBireDocument(p: BireDocumentDTOId): Observable<void> {
    return super.post<BireDocumentDTOId, void>(this.productStructureManagementApi.removeBireDocument, p);
  }

  /*
   *    Dialog Components
   */
  public findBirePnsBySearchCriteriaPSM(
    p: FindBirePnsBySearchCriteriaPSMInput
  ): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindBirePnsBySearchCriteriaPSMInput, SearchResultsDTO<BirePnDTO>>(
      this.productStructureManagementApi.findBirePnsBySearchCriteria,
      p
    );
  }

  /*************************************************************************
   * Task management api
   *************************************************************************/

  public findAllBireTils(p: void): Observable<BireTilDTO[]> {
    return super.post<void, BireTilDTO[]>(this.taskManagementApi.findAllBireTils, p);
  }

  public findAllBireQualificationDatas(p: void): Observable<BireQualificationDTO[]> {
    return super.post<void, BireQualificationDTO[]>(this.taskManagementApi.findAllBireQualificationDatas, p);
  }

  public findBireOperationPnsByOperation(p: BireOperationDTOId): Observable<BireOperationPnDTO[]> {
    return super.post<BireOperationDTOId, BireOperationPnDTO[]>(
      this.taskManagementApi.findBireOperationPnsByOperation,
      p
    );
  }

  public findBirePn(pnId: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.taskManagementApi.findBirePn, pnId);
  }

  public findBireDocOperationByOperation(p: BireOperationDTOId): Observable<BireDocOperationDTO[]> {
    return super.post<BireOperationDTOId, BireDocOperationDTO[]>(
      this.taskManagementApi.findBireDocOperationByOperation,
      p
    );
  }

  public findBireDocumentByOperation(p: BireOperationDTOId): Observable<BireDocumentDTO[]> {
    return super.post<BireOperationDTOId, BireDocOperationDTO[]>(this.taskManagementApi.findBireDocumentByOperation, p);
  }

  public calculateCostOfBireOperation(input: CalculateCostOfBireOperationInput): Observable<number> {
    return super.post<CalculateCostOfBireOperationInput, number>(
      this.taskManagementApi.calculateCostOfBireOperation,
      input
    );
  }

  public findBireOperationAttributesByOperation(operation: BireOperationDTO): Observable<BireOperationAttributeDTO[]> {
    return super.post<BireOperationDTO, BireOperationAttributeDTO[]>(
      this.taskManagementApi.findBireOperationAttributesByOperation,
      operation
    );
  }

  public updateBireOperation(input: SaveBireOperationInput): Observable<void> {
    return super.post<SaveBireOperationInput, void>(this.taskManagementApi.updateBireOperation, input);
  }

  public createBireOperation(input: SaveBireOperationInput): Observable<void> {
    return super.post<SaveBireOperationInput, void>(this.taskManagementApi.createBireOperation, input);
  }

  public createBireOperationPn(p: BireOperationPnDTO): Observable<BireOperationPnDTOId> {
    return super.post<BireOperationPnDTO, BireOperationPnDTOId>(this.taskManagementApi.createBireOperationPn, p);
  }

  public updateBireOperationPn(p: BireOperationPnDTO): Observable<void> {
    return super.post<BireOperationPnDTO, void>(this.taskManagementApi.updateBireOperationPn, p);
  }

  public removeBireOperationPn(p: BireOperationPnDTOId): Observable<void> {
    return super.post<BireOperationPnDTOId, void>(this.taskManagementApi.removeBireOperationPn, p);
  }

  public createBireDocOperation(p: BireDocOperationDTO): Observable<BireDocOperationDTOId> {
    return super.post<BireDocOperationDTO, BireDocOperationDTOId>(this.taskManagementApi.createBireDocOperation, p);
  }

  public removeBireDocOperation(p: BireDocOperationDTOId): Observable<void> {
    return super.post<BireDocOperationDTOId, void>(this.taskManagementApi.removeBireDocOperation, p);
  }

  public removeBireOperationAttribute(p: BireOperationAttributeDTOId): Observable<void> {
    return super.post<BireOperationAttributeDTOId, void>(this.taskManagementApi.removeBireOperationAttribute, p);
  }

  public createBireOperationAttribute(p: BireOperationAttributeDTO): Observable<BireOperationAttributeDTOId> {
    return super.post<BireOperationAttributeDTO, BireOperationAttributeDTOId>(
      this.taskManagementApi.createBireOperationAttribute,
      p
    );
  }

  public updateBireOperationAttribute(p: BireOperationAttributeDTO): Observable<void> {
    return super.post<BireOperationAttributeDTO, void>(this.taskManagementApi.updateBireOperationAttribute, p);
  }

  public findBireOperation(p: BireOperationDTOId): Observable<BireOperationDTO> {
    return super.post<BireOperationDTOId, BireOperationDTO>(this.taskManagementApi.findBireOperation, p);
  }

  /*************************************************************************
   * Work Center api
   *************************************************************************/
  public findByCriteriaWorkshop(): Observable<WarehouseListDTO[]> {
    return super.post<void, WarehouseListDTO[]>(this.bidtWarehouseApi.findByCriteriaWorkshop);
  }

  /*
   * Dialog Components
   */
  public findBirePnsBySearchCriteriaTM(p: FindBirePnsBySearchCriteriaTMInput): Observable<SearchResultsDTO<BirePnDTO>> {
    return super.post<FindBirePnsBySearchCriteriaTMInput, SearchResultsDTO<BirePnDTO>>(
      this.taskManagementApi.findBirePnsBySearchCriteria,
      p
    );
  }

  /*
   * Dialog Range Codes
   */
  public findAllBireRanges(p: void): Observable<SearchResultsDTO<BireRangeDTO>> {
    return super.post<void, SearchResultsDTO<BireRangeDTO>>(this.taskManagementApi.findAllBireRanges, p);
  }

  /*************************************************************************
   * User profile business api
   *************************************************************************/

  public isBuildingBlockInstalled(p: void): Observable<boolean> {
    return super.post<void, boolean>(this.userProfileBusinessApi.isBuildingBlockInstalled, p);
  }

  /*************************************************************************
   * PropertiesService
   *************************************************************************/

  public getPnTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getPnTypeMap');
  }

  public getCurrencyMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue('getCurrencyMap');
  }

  public updateStaus(input: ObjectStatusDTO): Observable<void> {
    return super.post<ObjectStatusDTO, void>(this.statusManagementApi.updateStatusGlobal, input);
  }
}
