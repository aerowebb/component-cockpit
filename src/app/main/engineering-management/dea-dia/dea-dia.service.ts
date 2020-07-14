import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BonitaApi } from '../../../shared/api/bonita/bonita.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { GuidelineCodeInputDTO } from '../../../shared/types/api-input-types/product-structure-management/guideline-code-input-dto.interface';
import { SaveBireDocPugsInput } from '../../../shared/types/api-input-types/product-structure-management/save-bire-doc-pugs-input.interface';
import { SaveBirePartUpdateGuidelineInput } from '../../../shared/types/api-input-types/product-structure-management/save-bire-part-update-guideline-input.interface';
import { BireDocPugDTOId } from '../../../shared/types/api-output-types/product-structure-management/bire-doc-pug-dto-id.interface';
import { BireDocPugDTO } from '../../../shared/types/api-output-types/product-structure-management/bire-doc-pug-dto.interface';
import { BirePartUpdateGuidelineDTOId } from '../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto-id.interface';
import { BirePartUpdateGuidelineDTO } from '../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto.interface';
import { BidoUserDTO } from '../../../shared/types/api-types/bido-user-dto.interface';
import { BirePnDTOId } from '../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';

@Injectable()
export class DeaDiaService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly bonitaApi: BonitaApi
  ) {
    super(http, appConfigService);
  }

  public findBidoUserByLogin(login: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, login);
  }

  public saveBirePartUpdateGuideline(
    saveInput: SaveBirePartUpdateGuidelineInput
  ): Observable<BirePartUpdateGuidelineDTO[]> {
    return super.post<SaveBirePartUpdateGuidelineInput, BirePartUpdateGuidelineDTO[]>(
      this.productStructureManagementApi.saveBirePartUpdateGuideline,
      saveInput
    );
  }

  public findPartUpdateGuidelineById(
    guidelineDTOId: BirePartUpdateGuidelineDTOId
  ): Observable<BirePartUpdateGuidelineDTO> {
    return super.post<BirePartUpdateGuidelineDTOId, BirePartUpdateGuidelineDTO>(
      this.productStructureManagementApi.findBirePartUpdateGuidelineById,
      guidelineDTOId
    );
  }

  public findBireDocPugs(guidelineDTOId: BirePartUpdateGuidelineDTOId): Observable<BireDocPugDTO[]> {
    return super.post<BirePartUpdateGuidelineDTOId, BireDocPugDTO[]>(
      this.productStructureManagementApi.findBireDocPugs,
      guidelineDTOId
    );
  }

  public saveBireDocPugs(saveInput: SaveBireDocPugsInput): Observable<BireDocPugDTOId[]> {
    return super.post<SaveBireDocPugsInput, BireDocPugDTOId[]>(
      this.productStructureManagementApi.saveBireDocPugs,
      saveInput
    );
  }

  public submitDeaDiaToDmae(guidelineCodeInput: GuidelineCodeInputDTO): Observable<void> {
    return super.post<GuidelineCodeInputDTO, void>(this.bonitaApi.submitDeaDiaToDmae, guidelineCodeInput);
  }

  public submitUpdatedDeaDiaToDmae(guidelineCodeInput: GuidelineCodeInputDTO): Observable<void> {
    return super.post<GuidelineCodeInputDTO, void>(this.bonitaApi.submitUpdatedDeaDiaToDmae, guidelineCodeInput);
  }

  public findBirePartUpdateGuidelinesBySearchCriteria(
    input: BirePartUpdateGuidelineDTO
  ): Observable<BirePartUpdateGuidelineDTO[]> {
    return super.post<BirePartUpdateGuidelineDTO, BirePartUpdateGuidelineDTO[]>(
      this.productStructureManagementApi.findBirePartUpdateGuidelinesBySearchCriteria,
      input
    );
  }

  public findBirePn(input: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.productStructureManagementApi.findBirePn, input);
  }
}
