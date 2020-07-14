import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { SaveBidoCustomerInput } from '../../../../shared/types/api-input-types/fleet-management/save-bido-customer-input.interface';
import { UpdateFieldsOfBidoDocumentationInput } from '../../../../shared/types/api-input-types/fleet-management/update-fields-of-bido-documentation-input.interface';
import { FindBireEvolutionsByEvolutionCriteriaInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-evolutions-by-evolution-criteria-input.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoCusCustomerDTO } from '../../../../shared/types/api-types/bido-cus-customer-dto.interface';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoCustomerEvolutionDTOId } from '../../../../shared/types/api-types/bido-customer-evolution-dto-id.interface';
import { BidoCustomerEvolutionDTO } from '../../../../shared/types/api-types/bido-customer-evolution-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEvolutionDTOId } from '../../../../shared/types/api-types/bido-evolution-dto-id.interface';
import { BidoEvolutionDTO } from '../../../../shared/types/api-types/bido-evolution-dto.interface';
import { BidoFunctionTypeDTOId } from '../../../../shared/types/api-types/bido-function-type-dto-id.interface';
import { BidoFunctionTypeDTO } from '../../../../shared/types/api-types/bido-function-type-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable()
export class BusinessPartnerFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public addBidoCusCustomers(cusCustomerData: BidoCusCustomerDTO[]): Observable<void> {
    return super.post<BidoCusCustomerDTO[], void>(this.fleetManagementApi.addBidoCusCustomers, cusCustomerData);
  }

  public createBidoCustomer(customer: SaveBidoCustomerInput): Observable<void> {
    return super.post<SaveBidoCustomerInput, void>(this.fleetManagementApi.createBidoCustomer, customer);
  }

  public createBidoCustomerEvolution(
    customerEvolution: BidoCustomerEvolutionDTO
  ): Observable<BidoCustomerEvolutionDTOId> {
    return super.post<BidoCustomerEvolutionDTO, BidoCustomerEvolutionDTOId>(
      this.fleetManagementApi.createBidoCustomerEvolution,
      customerEvolution
    );
  }

  public createBidoDocumentation(documentation: BidoDocumentationDTO): Observable<BidoDocumentationDTOId> {
    return super.post<BidoDocumentationDTO, BidoDocumentationDTOId>(
      this.fleetManagementApi.createBidoDocumentation,
      documentation
    );
  }

  public createBidoEvolution(evolution: BidoEvolutionDTO): Observable<BidoEvolutionDTOId> {
    return super.post<BidoEvolutionDTO, BidoEvolutionDTOId>(this.fleetManagementApi.createBidoEvolution, evolution);
  }

  public findBidoAttribute(attributeId: BidoAttributeDTOId): Observable<BidoAttributeDTO> {
    return super.post<BidoAttributeDTOId, BidoAttributeDTO>(this.fleetManagementApi.findBidoAttribute, attributeId);
  }

  public findBidoAttributesByAttributeCategory(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(
      this.fleetManagementApi.findBidoAttributesByAttributeCategory,
      attributeCategory
    );
  }

  public findBidoContactsByCustomerCode(customerCode: string): Observable<BidoContactDTO[]> {
    return super.post<string, BidoAttributeDTO[]>(this.fleetManagementApi.findBidoContactsByCustomerCode, customerCode);
  }

  public findBidoCusCustomersByCustomerCode(customerCode: string): Observable<BidoCusCustomerDTO[]> {
    return super.post<string, BidoCusCustomerDTO[]>(
      this.fleetManagementApi.findBidoCusCustomersByCustomerCode,
      customerCode
    );
  }

  public findBidoCustomer(customerId: BidoCustomerDTOId): Observable<BidoCustomerDTO> {
    return super.post<BidoCustomerDTOId, BidoCustomerDTO>(this.fleetManagementApi.findBidoCustomer, customerId);
  }

  public findBidoCustomerEvolutionsByCustomerCode(customerCode: string): Observable<BidoCustomerEvolutionDTO[]> {
    return super.post<string, BidoCustomerEvolutionDTO[]>(
      this.fleetManagementApi.findBidoCustomerEvolutionsByCustomerCode,
      customerCode
    );
  }

  public findBidoCustomersBySearchCriteria(criteria: BidoCustomerDTO): Observable<SearchResultsDTO<BidoCustomerDTO>> {
    return super.post<BidoCustomerDTO, SearchResultsDTO<BidoCustomerDTO>>(
      this.fleetManagementApi.findBidoCustomersBySearchCriteria,
      criteria
    );
  }

  public findBidoDocumentationsByCustomerCode(customerCode: string): Observable<BidoDocumentationDTO[]> {
    return super.post<string, BidoDocumentationDTO[]>(
      this.fleetManagementApi.findBidoDocumentationsByCustomerCode,
      customerCode
    );
  }

  public removeAllBidoCusCustomersByCustomerCode(customerCode: string): Observable<void> {
    return super.post<string, void>(this.fleetManagementApi.removeAllBidoCusCustomersByCustomerCode, customerCode);
  }

  public removeBidoCustomerEvolution(customerEvolutionId: BidoCustomerEvolutionDTOId): Observable<void> {
    return super.post<BidoCustomerEvolutionDTOId, void>(
      this.fleetManagementApi.removeBidoCustomerEvolution,
      customerEvolutionId
    );
  }

  public removeBidoDocumentation(documentationId: BidoDocumentationDTOId): Observable<void> {
    return super.post<BidoDocumentationDTOId, void>(this.fleetManagementApi.removeBidoDocumentation, documentationId);
  }

  public updateBidoContact(contact: BidoContactDTO): Observable<void> {
    return super.post<BidoCustomerDTO, void>(this.fleetManagementApi.updateBidoContact, contact);
  }

  public updateBidoCustomer(customer: SaveBidoCustomerInput): Observable<void> {
    return super.post<SaveBidoCustomerInput, void>(this.fleetManagementApi.updateBidoCustomer, customer);
  }

  public updateBidoCustomerEvolution(customerEvolution: BidoCustomerEvolutionDTO): Observable<void> {
    return super.post<BidoCustomerDTO, void>(this.fleetManagementApi.updateBidoCustomerEvolution, customerEvolution);
  }

  public updateFieldsOfBidoDocumentation(
    documentationId: BidoDocumentationDTOId,
    docName: string,
    docDescription: string,
    publicationDate: Date,
    endOfValidityDate: Date,
    docCategory: string,
    docVersion: string,
    docLanguage: string
  ): Observable<void> {
    const documentation: BidoDocumentationDTO = {
      docCode: documentationId.docCode
    };
    const params: UpdateFieldsOfBidoDocumentationInput = {
      bidoDocumentationDTO: documentation,
      docName,
      docDescription,
      publicationDate,
      endOfValidityDate,
      docCategory,
      docVersion,
      docLanguage
    };

    return super.post<UpdateFieldsOfBidoDocumentationInput, void>(
      this.fleetManagementApi.updateFieldsOfBidoDocumentation,
      params
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBireEvolution(evolutionId: BireEvolutionDTOId): Observable<BireEvolutionDTO> {
    return super.post<BireEvolutionDTOId, BireEvolutionDTO>(
      this.productStructureManagementApi.findBireEvolution,
      evolutionId
    );
  }

  public findBireEvolutionsByEvolutionCriteria(
    evolution: BireEvolutionDTO,
    familyCode: string | undefined,
    structureType: string | undefined,
    variantCode: string | undefined
  ): Observable<SearchResultsDTO<BireEvolutionDTO>> {
    const params: FindBireEvolutionsByEvolutionCriteriaInput = {
      bireEvolutionDTO: evolution,
      familyCode,
      structureType,
      variantCode
    };

    return super.post<FindBireEvolutionsByEvolutionCriteriaInput, SearchResultsDTO<BireEvolutionDTO>>(
      this.productStructureManagementApi.findBireEvolutionsByEvolutionCriteria,
      params
    );
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  public createFunctionType(functionType: BidoFunctionTypeDTO): Observable<BidoFunctionTypeDTOId> {
    return super.post<BidoFunctionTypeDTO, BidoFunctionTypeDTOId>(
      this.userProfileManagementApi.createFunctionType,
      functionType
    );
  }

  public updateFunctionType(functionType: BidoFunctionTypeDTO): Observable<void> {
    return super.post<BidoFunctionTypeDTO, void>(this.userProfileManagementApi.updateFunctionType, functionType);
  }
}
