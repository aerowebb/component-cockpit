import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveFamilyDataInput } from '../../../shared/types/api-input-types/product-structure-management/save-family-data-input.interface';
import { BireFamilyDTOId } from '../../../shared/types/api-types/bire-family-dto-id.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { BireRatingDTOId } from '../../../shared/types/api-types/bire-rating-dto-id.interface';
import { BireRatingDTO } from '../../../shared/types/api-types/bire-rating-dto.interface';

@Injectable()
export class FamilyFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Product structure management api
   *************************************************************************/

  public findBireModificationByBireFamily(bireFamily: BireFamilyDTO): Observable<BireModificationDTO[]> {
    const modificiation: BireModificationDTO = {
      familyCode: bireFamily.familyCode,
      structureType: bireFamily.structureType
    };

    return super.post<BireModificationDTO, BireModificationDTO[]>(
      this.productStructureManagementApi.findBireModificationsByFamilyId,
      modificiation
    );
  }

  public findBireRatingByBireFamily(familyCode: string, structureType: string): Observable<BireRatingDTO[]> {
    const familyId: BireFamilyDTOId = { familyCode, structureType };

    return super.post<BireFamilyDTOId, BireRatingDTO[]>(
      this.productStructureManagementApi.findBireRatingsByFamilyPK,
      familyId
    );
  }

  public saveFamilyData(
    bireFamilyDTO: BireFamilyDTO,
    bireModificationAddedList: BireModificationDTO[],
    bireModificationUpdatedList: BireModificationDTO[],
    bireModificationRemovedList: BireModificationDTOId[],
    bireRatingAddedList: BireRatingDTO[],
    bireRatingUpdatedList: BireRatingDTO[],
    bireRatingRemovedList: BireRatingDTOId[]
  ): Observable<void> {
    const params: SaveFamilyDataInput = {
      bireFamilyDTO,
      bireModificationAddedList,
      bireModificationUpdatedList,
      bireModificationRemovedList,
      bireRatingAddedList,
      bireRatingUpdatedList,
      bireRatingRemovedList,
      bidoFunctionTypeAddedList: [],
      bidoFunctionTypeUpdatedList: [],
      bidoProfileFunctionAddedList: []
    };

    return super.post<SaveFamilyDataInput, void>(this.productStructureManagementApi.saveFamilyData, params);
  }

  public findBireFamilyByFamilyId(familyCode: string, structureType: string): Observable<BireFamilyDTO> {
    const familyId: BireFamilyDTOId = { familyCode, structureType };

    return super.post<BireFamilyDTOId, BireFamilyDTO>(
      this.productStructureManagementApi.findBireFamilyByFamilyId,
      familyId
    );
  }
}
