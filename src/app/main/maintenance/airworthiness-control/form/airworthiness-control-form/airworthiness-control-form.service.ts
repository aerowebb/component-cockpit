import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../../shared/api/airworthiness-management.api';
import { FleetBusinessApi } from '../../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../shared/services/app-config.service';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { ClearAirworthinessControlCacheInput } from '../../../../../shared/types/api-input-types/airworthiness-management/clear-airworthiness-control-cache-input.interface';
import { ComputeRemainingForAirworthinessControlPartInput } from '../../../../../shared/types/api-input-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-input.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { RemoveFromWorkPackageInput } from '../../../../../shared/types/api-input-types/airworthiness-management/remove-from-work-package-input.interface';
import { ControlConfigurationInput } from '../../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { ComputeRemainingForAirworthinessControlPartOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-output.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { ControlConfigurationOutput } from '../../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';

@Injectable()
export class AirworthinessControlFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

  public checkEquipmentForAirworthinessControl(
    input: CheckEquipmentForAirworthinessControlInput
  ): Observable<GenerateAirworthinessControlTableOutput> {
    return super.post<CheckEquipmentForAirworthinessControlInput, GenerateAirworthinessControlTableOutput>(
      this.airworthinessManagementApi.checkEquipmentForAirworthinessControl,
      input
    );
  }

  public clearAirworthinessControlCache(input: ClearAirworthinessControlCacheInput): Observable<void> {
    return super.post<ClearAirworthinessControlCacheInput, void>(
      this.airworthinessManagementApi.clearAirworthinessControlCache,
      input
    );
  }

  public computePotentialForAirworthinessControlInput(
    input: GenerateAirworthinessControlTableInput
  ): Observable<GenerateAirworthinessControlTableOutput[]> {
    return super.post<GenerateAirworthinessControlTableInput, GenerateAirworthinessControlTableOutput[]>(
      this.airworthinessManagementApi.computePotentialForAirworthinessControlInput,
      input
    );
  }

  public computeRemainingForAd(
    input: ComputeRemainingForAirworthinessControlPartInput
  ): Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined> {
    return super.post<
      ComputeRemainingForAirworthinessControlPartInput,
      ComputeRemainingForAirworthinessControlPartOutput | undefined
    >(this.airworthinessManagementApi.computeRemainingForAd, input);
  }

  public computeRemainingForDefect(
    input: ComputeRemainingForAirworthinessControlPartInput
  ): Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined> {
    return super.post<
      ComputeRemainingForAirworthinessControlPartInput,
      ComputeRemainingForAirworthinessControlPartOutput | undefined
    >(this.airworthinessManagementApi.computeRemainingForDefect, input);
  }

  public computeRemainingForDocument(
    equipmentCode: string
  ): Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined> {
    return super.post<string, ComputeRemainingForAirworthinessControlPartOutput | undefined>(
      this.airworthinessManagementApi.computeRemainingForDocument,
      equipmentCode
    );
  }

  public computeRemainingForLlp(
    input: ComputeRemainingForAirworthinessControlPartInput
  ): Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined> {
    return super.post<
      ComputeRemainingForAirworthinessControlPartInput,
      ComputeRemainingForAirworthinessControlPartOutput | undefined
    >(this.airworthinessManagementApi.computeRemainingForLlp, input);
  }

  public computeRemainingForTask(
    input: ComputeRemainingForAirworthinessControlPartInput
  ): Observable<ComputeRemainingForAirworthinessControlPartOutput | undefined> {
    return super.post<
      ComputeRemainingForAirworthinessControlPartInput,
      ComputeRemainingForAirworthinessControlPartOutput | undefined
    >(this.airworthinessManagementApi.computeRemainingForTask, input);
  }

  public generateAirworthinessControlTable(
    input: GenerateAirworthinessControlTableInput
  ): Observable<GenerateAirworthinessControlTableOutput[]> {
    return super.post<GenerateAirworthinessControlTableInput, GenerateAirworthinessControlTableOutput[]>(
      this.airworthinessManagementApi.generateAirworthinessControlTable,
      input
    );
  }

  public getCsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getCsnLabelForAirworthinessControl);
  }

  public getTsnLabelForAirworthinessControl(): Observable<string> {
    return super.post<void, string>(this.airworthinessManagementApi.getTsnLabelForAirworthinessControl);
  }

  public removeFromWorkPackage(input: RemoveFromWorkPackageInput): Observable<void> {
    return super.post<RemoveFromWorkPackageInput, void>(this.airworthinessManagementApi.removeFromWorkPackage, input);
  }

  /**************************************************************************
   * Fleet business api
   *************************************************************************/

  public controlConfiguration(input: ControlConfigurationInput): Observable<ControlConfigurationOutput> {
    return super.post<ControlConfigurationInput, ControlConfigurationOutput>(
      this.fleetBusinessApi.controlConfiguration,
      input
    );
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public getEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }
}
