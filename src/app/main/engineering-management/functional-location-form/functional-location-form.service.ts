import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveFunctionalLocationInput } from '../../../shared/types/api-input-types/fleet-management/save-functional-location-input.interface';
import { FunctionalLocationStructureTreeNodeOutput } from '../../../shared/types/api-output-types/fleet-management/functional-location-structure-tree-node-output';
import { SaveFunctionalLocationOutputDTO } from '../../../shared/types/api-output-types/fleet-management/save-functional-location-output-dto';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoFlDTOId } from '../../../shared/types/api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoFlEquipmentDTO } from '../../../shared/types/api-types/bido-fl-equipment-dto.interface';
import { FindBidoFlVariantsByFlCodeDTO } from '../../../shared/types/api-types/find-bido-fl-variants-by-fl-code-dto.interface';
import { FlModelsTableDTO } from '../../../shared/types/api-types/fl-models-table-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class FunctionalLocationFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findFamilyVariantByFlCode(flCode: BidoFlDTOId): Observable<FindBidoFlVariantsByFlCodeDTO[]> {
    return super.post<BidoFlDTOId, FindBidoFlVariantsByFlCodeDTO[]>(
      this.fleetManagementApi.findBidoFlVariantsByFlCode,
      flCode
    );
  }

  public findAssetsByFlCode(flCode: BidoFlDTOId): Observable<BidoFlEquipmentDTO[]> {
    return super.post<BidoFlDTOId, BidoFlEquipmentDTO[]>(this.fleetManagementApi.findBidoFlEquipmentsByFlCode, flCode);
  }

  public findModelsByFlCode(flCode: string): Observable<FlModelsTableDTO[]> {
    return super.post<string, FlModelsTableDTO[]>(this.fleetManagementApi.findBidoFlModelsByFlCode, flCode);
  }

  public findStructureByFlCode(flCode: string): Observable<FunctionalLocationStructureTreeNodeOutput> {
    return super.post<string, FunctionalLocationStructureTreeNodeOutput>(
      this.fleetManagementApi.findFLStructureTreeNode,
      flCode
    );
  }

  public findBidoDocumentationsByFleetCode(fleetCode: string): Observable<BidoDocumentationDTO[]> {
    return super.post<string, BidoDocumentationDTO[]>(
      this.fleetManagementApi.findBidoDocumentationsByFLCode,
      fleetCode
    );
  }

  // To populate values into delayCatefory dropdown
  public findFlDelayCategory(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.productStructureManagementApi.findFlDelayCategory);
  }

  public saveFlData(
    saveFunctionalLocationInput: SaveFunctionalLocationInput
  ): Observable<SaveFunctionalLocationOutputDTO> {
    return super.post<SaveFunctionalLocationInput, SaveFunctionalLocationOutputDTO>(
      this.fleetManagementApi.saveFunctionalLocation,
      saveFunctionalLocationInput
    );
  }

  public createUpdateFl(bidoFlDTO: BidoFlDTO): Observable<string> {
    return super.post<BidoFlDTO, string>(this.fleetManagementApi.createUpdateFl, bidoFlDTO);
  }
}
