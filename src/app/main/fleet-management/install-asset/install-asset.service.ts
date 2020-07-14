import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { CheckInstallInput } from '../../../shared/types/api-input-types/fleet-business/check-install-input.interface';
import { InstallEquipmentInput } from '../../../shared/types/api-input-types/fleet-business/install-equipment-input.interface';
import { AssetInstalledInput } from '../../../shared/types/api-input-types/fleet-history/asset-installed-input.interface';
import { CounterMeasureInputDTO } from '../../../shared/types/api-input-types/install-asset/counter-measure-input-dto.interface';
import { EvolutionLinkedToAssetInputDTO } from '../../../shared/types/api-input-types/install-asset/evolution-linked-to-asset-input-dto.interface';
import { GetParentsByEquipmentRecursivelyAtDateInputDTO } from '../../../shared/types/api-input-types/install-asset/get-parents-by-equipment-recursively-at-date-input-dto.interface';
import { CheckInstallOutput } from '../../../shared/types/api-output-types/fleet-business/check-install-output.interface';
import { GetEquipmentsAssociatedToFlCodeDTO } from '../../../shared/types/api-output-types/fleet-business/get-equipments-associated-to-fl-code-dto.interface';
import { AssetsToBeInstalledOutputDTO } from '../../../shared/types/api-output-types/fleet-history/assets-to-be-installed-output-dto.interface';
import { EvolutionLinkedToAssetOutputDTO } from '../../../shared/types/api-output-types/install-asset/evolution-linked-to-asset-output-dto.interface';
import { InstallEquipmentOutputWithReportDTO } from '../../../shared/types/api-output-types/install-asset/install-equipment-output-with-report-dto.interface';
import { MeasureProgressOutputDTO } from '../../../shared/types/api-output-types/install-asset/measure-progress-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class InstallAssetService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public checkInstall(input: CheckInstallInput): Observable<CheckInstallOutput> {
    return super.post<CheckInstallInput, CheckInstallOutput>(this.fleetBusinessApi.checkInstall, input);
  }

  public getOperationalStatusMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.fleetManagementApi.getOperationalStatusMap);
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

  public findBidoEquipment(asset: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, asset);
  }

  public findAssetInstallList(asset: AssetInstalledInput): Observable<AssetsToBeInstalledOutputDTO[]> {
    return super.post<AssetInstalledInput, AssetsToBeInstalledOutputDTO[]>(
      this.fleetBusinessApi.findAssetInstallList,
      asset
    );
  }

  public installEquipment(assets: InstallEquipmentInput[]): Observable<InstallEquipmentOutputWithReportDTO> {
    return super.post<InstallEquipmentInput[], InstallEquipmentOutputWithReportDTO>(
      this.fleetBusinessApi.installEquipment,
      assets
    );
  }

  public getItemDataList(
    getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO
  ): Observable<LabelValue<string>[]> {
    return super.post<GetParentsByEquipmentRecursivelyAtDateInputDTO, LabelValue<string>[]>(
      this.fleetBusinessApi.getItemDataList,
      getParentsByEquipmentRecursivelyAtDateInputDTO
    );
  }

  public getParentsByEquipmentRecursivelyAtDate(
    getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO
  ): Observable<LabelValue<string>[]> {
    return super.post<GetParentsByEquipmentRecursivelyAtDateInputDTO, LabelValue<string>[]>(
      this.fleetBusinessApi.getParentsByEquipmentRecursivelyAtDate,
      getParentsByEquipmentRecursivelyAtDateInputDTO
    );
  }

  public isFLFree(getEquipmentsAssociatedToFlCodeDTO: GetEquipmentsAssociatedToFlCodeDTO): Observable<boolean> {
    return super.post<GetEquipmentsAssociatedToFlCodeDTO, boolean>(
      this.fleetBusinessApi.isFLFree,
      getEquipmentsAssociatedToFlCodeDTO
    );
  }

  public getFunctionalLocationDataMap(
    getParentsByEquipmentRecursivelyAtDateInputDTO: GetParentsByEquipmentRecursivelyAtDateInputDTO
  ): Observable<LabelValue<string>[]> {
    return super.post<GetParentsByEquipmentRecursivelyAtDateInputDTO, LabelValue<string>[]>(
      this.fleetBusinessApi.getFunctionalLocationDataMap,
      getParentsByEquipmentRecursivelyAtDateInputDTO
    );
  }

  public getItemRelatedToFLCode(assets: GetEquipmentsAssociatedToFlCodeDTO): Observable<LabelValue<string>[]> {
    return super.post<GetEquipmentsAssociatedToFlCodeDTO, LabelValue<string>[]>(
      this.fleetBusinessApi.getItemRelatedToFLCode,
      assets
    );
  }

  public getFunctionalLocationLinkedToItem(
    assets: GetEquipmentsAssociatedToFlCodeDTO
  ): Observable<LabelValue<string>[]> {
    return super.post<GetEquipmentsAssociatedToFlCodeDTO, LabelValue<string>[]>(
      this.fleetBusinessApi.getFunctionalLocationLinkedToItem,
      assets
    );
  }

  public isLastConfigurationChange(assets: GetParentsByEquipmentRecursivelyAtDateInputDTO): Observable<boolean> {
    return super.post<GetParentsByEquipmentRecursivelyAtDateInputDTO, boolean>(
      this.fleetBusinessApi.isLastConfigurationChange,
      assets
    );
  }
  public isFunctionalItemStructure(): Observable<boolean> {
    return super.post<void, boolean>(this.fleetBusinessApi.isFunctionalItemStructure);
  }
}
