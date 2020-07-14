import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../api/asset-management.api';
import { FleetBusinessApi } from '../../api/fleet-business.api';
import { FleetManagementApi } from '../../api/fleet-management.api';
import { ProductStructureBusinessApi } from '../../api/product-structure-business.api';
import { ProductStructureManagementApi } from '../../api/product-structure-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { AssetInputDto } from '../../types/api-input-types/fleet-management/asset-input-dto.interface';
import { AssetOutputDto } from '../../types/api-output-types/fleet-management/asset-output-dto.interface';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { BidoEquipmentCounterDTOId } from '../../types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTO } from '../../types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../types/api-types/bire-measure-reference-dto.interface';

@Injectable()
export class ComponentMeasureService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly assetManagementApi: AssetManagementApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly productStructureBusinessApi: ProductStructureBusinessApi
  ) {
    super(http, appConfigService);
  }

  public getMeasureTabData(
    bidoEquipmentDTO: BidoEquipmentDTO
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentDTO, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.assetManagementApi.fetchMeasureTableData,
      bidoEquipmentDTO
    );
  }

  public findAllBireMeasureReferencesMaintenanceProgram(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(
      this.productStructureManagementApi.findAllBireMeasureReferencesMaintenanceProgram
    );
  }

  public getMeasureDetailTableData(
    bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId
  ): Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]> {
    return super.post<BidoEquipmentCounterDTOId, FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>(
      this.fleetBusinessApi.findBidoMeasuresByEquipmentAndCounterCodes,
      bidoEquipmentCounterDTOId
    );
  }

  public findAllBireMeasureReferences(): Observable<BireMeasureReferenceDTO[]> {
    return super.post<void, BireMeasureReferenceDTO[]>(this.fleetManagementApi.findAllBireMeasureReferences);
  }

  public isFollowedInRating(followedRatingInput: string): Observable<boolean> {
    return super.post<string, boolean>(this.productStructureBusinessApi.isFollowedInRating, followedRatingInput);
  }

  public findBidoEquipmentAlternative(asset: AssetInputDto): Observable<AssetOutputDto> {
    return super.post<AssetInputDto, AssetOutputDto>(this.assetManagementApi.getAssetByCode, asset);
  }

  public findFirstBidoEquipmentsByPnAndSnCodes(woEquipement: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findFirstBidoEquipmentsByPnAndSnCodes,
      woEquipement
    );
  }
}
