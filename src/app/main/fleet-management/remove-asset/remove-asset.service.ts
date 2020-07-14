import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetHistoryApi } from '../../../shared/api/fleet-history.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { DismantleEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/dismantle-equipment-input.interface';
import { AssetRemovedInput } from '../../../shared/types/api-input-types/fleet-history/asset-removed-input.interface';
import { CounterMeasureInputDTO } from '../../../shared/types/api-input-types/install-asset/counter-measure-input-dto.interface';
import { EvolutionLinkedToAssetInputDTO } from '../../../shared/types/api-input-types/install-asset/evolution-linked-to-asset-input-dto.interface';
import { RemovalOutput } from '../../../shared/types/api-output-types/fleet-business/removal-output.interface';
import { AssetsToRemoveOutput } from '../../../shared/types/api-output-types/fleet-history/assets-to-removed-output.interface';
import { EvolutionLinkedToAssetOutputDTO } from '../../../shared/types/api-output-types/install-asset/evolution-linked-to-asset-output-dto.interface';
import { MeasureProgressOutputDTO } from '../../../shared/types/api-output-types/install-asset/measure-progress-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class RemoveAssetService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetHistoryApi: FleetHistoryApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllWarehouseForRemoval(input: String): Observable<LabelValue<string>[]> {
    return super.post<String, LabelValue<string>[]>(this.bidtWarehouseApi.findAllWarehouseForRemoval, input);
  }

  public findBidoEquipment(asset: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, asset);
  }

  public findAssetsRemovedList(asset: AssetRemovedInput): Observable<AssetsToRemoveOutput> {
    return super.post<AssetRemovedInput, AssetsToRemoveOutput>(this.fleetHistoryApi.findAssetsRemovedList, asset);
  }

  public dismantleEquipment(assets: DismantleEquipmentInput): Observable<RemovalOutput> {
    return super.post<DismantleEquipmentInput, RemovalOutput>(this.fleetBusinessApi.dismantleEquipment, assets);
  }

  public findAllWarehouseForRemovalWithData(input: String): Observable<LabelValue<BidtWarehouseDTO>[]> {
    return super.post<String, LabelValue<BidtWarehouseDTO>[]>(
      this.bidtWarehouseApi.findAllWarehouseForRemovalWithData,
      input
    );
  }

  public getEvolutionsLinkedToAsset(
    asset: EvolutionLinkedToAssetInputDTO[]
  ): Observable<EvolutionLinkedToAssetOutputDTO[]> {
    return super.post<EvolutionLinkedToAssetInputDTO[], EvolutionLinkedToAssetOutputDTO[]>(
      this.fleetBusinessApi.getEvolutionsLinkedToAsset,
      asset
    );
  }

  public getCounterMeasureList(counterMeasureInput: CounterMeasureInputDTO[]): Observable<MeasureProgressOutputDTO[]> {
    return super.post<CounterMeasureInputDTO[], MeasureProgressOutputDTO[]>(
      this.fleetBusinessApi.getCounterMeasureList,
      counterMeasureInput
    );
  }

  public getEventTypesValues(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getEventTypesValues);
  }

}
