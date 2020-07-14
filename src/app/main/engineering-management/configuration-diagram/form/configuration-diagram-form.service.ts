import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureBusinessApi } from '../../../../shared/api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { GenerateConfigInput } from '../../../../shared/types/api-input-types/product-structure-business/generate-config-input.interface';
import { FindAllFamilyByModuleAndUseCaseInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-family-by-module-and-use-case-input.interface';
import { FindBireItemsByFamilyCodeAndVariantCodeInput } from '../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-family-code-and-variant-code-input.interface';
import { GeneratePNLinkSchemaInput } from '../../../../shared/types/api-input-types/product-structure-management/generate-pn-link-schema-input.interface';
import { GenerateConfigOutput } from '../../../../shared/types/api-output-types/product-structure-business/generate-config-output.interface';
import { GeneratePNLinkSchemaOutput } from '../../../../shared/types/api-output-types/product-structure-management/generate-pn-link-schema-output.interface';
import { BireActionTypeDTO } from '../../../../shared/types/api-types/bire-action-type-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionPnDTO } from '../../../../shared/types/api-types/bire-evolution-pn-dto.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemPnEvolutionDTO } from '../../../../shared/types/api-types/bire-item-pn-evolution-dto.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';

@Injectable()
export class ConfigurationDiagramFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Product structure business api
   *************************************************************************/
  public generateConfigurationList(input: GenerateConfigInput): Observable<GenerateConfigOutput> {
    return super.post<GenerateConfigInput, GenerateConfigOutput>(
      this.productStructureBusinessApi.generateConfigurationList,
      input
    );
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/
  public findAllBireActionType(): Observable<BireActionTypeDTO[]> {
    return super.post<void, BireActionTypeDTO[]>(this.productStructureManagementApi.findAllBireActionType);
  }

  public findAllBireEvolutionPnByItem(input: BireItemDTO): Observable<BireEvolutionPnDTO[]> {
    return super.post<BireItemDTO, BireEvolutionPnDTO[]>(
      this.productStructureManagementApi.findAllBireEvolutionPnByItem,
      input
    );
  }

  public findAllBireItemByFamilyCodeAndVariantCode(
    input: FindBireItemsByFamilyCodeAndVariantCodeInput
  ): Observable<BireItemDTO[]> {
    return super.post<FindBireItemsByFamilyCodeAndVariantCodeInput, BireItemDTO[]>(
      this.productStructureManagementApi.findAllBireItemByFamilyCodeAndVariantCode,
      input
    );
  }

  public findBireVersionPnsByPnCode(pnCode: string): Observable<BireVersionPnDTO[]> {
    return super.post<string, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByPnCode,
      pnCode
    );
  }

  public findAllBireItemPnEvolutionByItem(input: BireItemDTO): Observable<BireItemPnEvolutionDTO[]> {
    return super.post<BireItemDTO, BireItemPnEvolutionDTO[]>(
      this.productStructureManagementApi.findAllBireItemPnEvolutionByItem,
      input
    );
  }

  public findAllBireVersionPnByItem(input: BireItemDTO): Observable<BireVersionPnDTO[]> {
    return super.post<BireItemDTO, BireVersionPnDTO[]>(
      this.productStructureManagementApi.findBireVersionPnsByItem,
      input
    );
  }

  public findAllFamilyByModuleAndUseCase(input: FindAllFamilyByModuleAndUseCaseInput): Observable<BireFamilyDTO[]> {
    return super.post<FindAllFamilyByModuleAndUseCaseInput, BireFamilyDTO[]>(
      this.productStructureManagementApi.findAllFamilyByModuleAndUseCase,
      input
    );
  }

  public findBireEvolution(input: BireEvolutionDTOId): Observable<BireEvolutionDTO> {
    return super.post<BireEvolutionDTOId, BireEvolutionDTO>(
      this.productStructureManagementApi.findBireEvolution,
      input
    );
  }

  public generatePnLinkSchema(input: GeneratePNLinkSchemaInput): Observable<GeneratePNLinkSchemaOutput> {
    return super.post<GeneratePNLinkSchemaInput, GeneratePNLinkSchemaOutput>(
      this.productStructureManagementApi.generatePnLinkSchema,
      input
    );
  }
}
