import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OperationalConfigurationSetupApi } from '../../../../../../shared/api/operational-configuration-setup.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { GetOperationalConfigurationSetupInputDTO } from '../../../../../../shared/types/api-input-types/operational-configuration-setup/get-operational-configuration-setup-input-dto.interface';
import { UpdateOperationalConfigurationSetupInputDTO } from '../../../../../../shared/types/api-input-types/operational-configuration-setup/update-operational-configuration-setup-input-dto.interface';
import { CountOperationalConfigurationSetupOutputDTO } from '../../../../../../shared/types/api-output-types/operational-configuration-setup/count-operational-configuration-setup-output-dto.interface';
import { GetOperationalConfigurationSetupOutputDTO } from '../../../../../../shared/types/api-output-types/operational-configuration-setup/get-operational-configuration-setup-output-dto.interface';
import { BidmProjectDTOId } from '../../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { WoAssetManagementDTO } from '../../../../../../shared/types/api-types/wo-asset-management-dto.interface';

@Injectable()
export class OperationalConfigurationSetupService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly operationalConfigurationSetupApi: OperationalConfigurationSetupApi
  ) {
    super(http, appConfigService);
  }

  public initOperationalConfigurationSetup(input: BidoMissionEquipmentDTOId): Observable<BidmProjectDTOId> {
    return super.post<BidoMissionEquipmentDTOId, BidmProjectDTOId>(this.operationalConfigurationSetupApi.init, input);
  }

  public countOperationalConfigurationSetup(
    input: BidoMissionEquipmentDTOId
  ): Observable<CountOperationalConfigurationSetupOutputDTO> {
    return super.post<BidoMissionEquipmentDTOId, CountOperationalConfigurationSetupOutputDTO>(
      this.operationalConfigurationSetupApi.count,
      input
    );
  }

  public getOperationalConfigurationSetup(
    input: GetOperationalConfigurationSetupInputDTO
  ): Observable<GetOperationalConfigurationSetupOutputDTO> {
    return super.post<GetOperationalConfigurationSetupInputDTO, GetOperationalConfigurationSetupOutputDTO>(
      this.operationalConfigurationSetupApi.get,
      input
    );
  }

  public updateWOAssetManagementPn(
    input: UpdateOperationalConfigurationSetupInputDTO
  ): Observable<WoAssetManagementDTO> {
    return super.post<UpdateOperationalConfigurationSetupInputDTO, WoAssetManagementDTO>(
      this.operationalConfigurationSetupApi.updateWoAssetManagementPn,
      input
    );
  }

  public updateWOAssetManagementSelectedEquipment(
    input: UpdateOperationalConfigurationSetupInputDTO
  ): Observable<WoAssetManagementDTO> {
    return super.post<UpdateOperationalConfigurationSetupInputDTO, WoAssetManagementDTO>(
      this.operationalConfigurationSetupApi.updateWoAssetManagementSelectedEquipment,
      input
    );
  }

  public controlWOAssetManagement(
    input: UpdateOperationalConfigurationSetupInputDTO
  ): Observable<WoAssetManagementDTO> {
    return super.post<UpdateOperationalConfigurationSetupInputDTO, WoAssetManagementDTO>(
      this.operationalConfigurationSetupApi.controlWOAssetManagement,
      input
    );
  }

  public executeWOAssetManagementDecision(input: WoAssetManagementDTO[]): Observable<WoAssetManagementDTO[]> {
    return super.post<WoAssetManagementDTO[], WoAssetManagementDTO[]>(
      this.operationalConfigurationSetupApi.executeWoAssetManagementDecision,
      input
    );
  }
}
