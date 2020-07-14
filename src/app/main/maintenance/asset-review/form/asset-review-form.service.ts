import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AssetReviewInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-review-input.interface';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { ComputePotentialForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/compute-potential-for-airworthiness-control-input.interface';
import { ComputeRemainingForAirworthinessControlPartInput } from '../../../../shared/types/api-input-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-input.interface';
import { CreateAcrsInputEvent } from '../../../../shared/types/api-input-types/airworthiness-management/create-acrs-input-event.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { ControlConfigurationInput } from '../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { FindAllBidoMissionEquipmentByCriteriaInput } from '../../../../shared/types/api-input-types/fleet-management/find-all-bido-mission-equipment-by-criteria-input.interface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { AssetFlightTableDTO } from '../../../../shared/types/api-output-types/airworthiness-management/asset-flight-table-dto.interface';
import { AssetReviewTabsTableDTO } from '../../../../shared/types/api-output-types/airworthiness-management/asset-review-tabs-table-dto.interface';
import { AssetWorkOrderOriginDataOutput } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-order-origin-data-output.inteface';
import { AssetWorkPackageStatusTableDTO } from '../../../../shared/types/api-output-types/airworthiness-management/asset-work-package-status-table-dto.interface';
import { ComputeRemainingForAirworthinessControlPartOutput } from '../../../../shared/types/api-output-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-output.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { ReportPostponementElementDTO } from '../../../../shared/types/api-output-types/airworthiness-management/report-postponement-element-dto.interface';
import { ControlConfigurationOutput } from '../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoMissionEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-mission-equipment-lwo.interface';
import { UpcomingEventDTO } from '../../../../shared/types/api-output-types/upcoming-event-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class AssetReviewFormService extends AbstractAwHttpService {
  private readonly potentialUnitSource: Subject<void>;

  private readonly _potentialUnit$: Observable<void>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);

    this.potentialUnitSource = new Subject<void>();

    this._potentialUnit$ = this.potentialUnitSource.asObservable();
  }

  public get potentialUnit$(): Observable<void> {
    return this._potentialUnit$;
  }

  /**************************************************************************
   * Airworthiness management api
   *************************************************************************/

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

  public checkEquipmentForAirworthinessControl(
    input: CheckEquipmentForAirworthinessControlInput
  ): Observable<GenerateAirworthinessControlTableOutput> {
    return super.post<CheckEquipmentForAirworthinessControlInput, GenerateAirworthinessControlTableOutput>(
      this.airworthinessManagementApi.checkEquipmentForAirworthinessControl,
      input
    );
  }

  public computePotentialForAirworthinessControlInput(
    input: ComputePotentialForAirworthinessControlInput
  ): Observable<GenerateAirworthinessControlTableOutput[]> {
    return super.post<ComputePotentialForAirworthinessControlInput, GenerateAirworthinessControlTableOutput[]>(
      this.airworthinessManagementApi.computePotentialForAirworthinessControlInput,
      input
    );
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

  public getPotentialEquivalentValues(topEquipmentCode: string): Observable<number[]> {
    return super.post<string, number[]>(this.airworthinessManagementApi.getPotentialEquivalentValues, topEquipmentCode);
  }

  public getWorkPackageList(equipmentCode: string): Observable<AssetWorkPackageStatusTableDTO[]> {
    return super.post<string, AssetWorkPackageStatusTableDTO[]>(
      this.airworthinessManagementApi.getWorkPackageList,
      equipmentCode
    );
  }

  public createAcrsEvent(input: CreateAcrsInputEvent[]): Observable<string> {
    return super.post<CreateAcrsInputEvent[], string>(this.airworthinessManagementApi.createAcrsEvent, input);
  }

  public getAssetFlightList(equipmentCode: string): Observable<AssetFlightTableDTO[]> {
    return super.post<string, AssetFlightTableDTO[]>(this.airworthinessManagementApi.getAssetFlightList, equipmentCode);
  }

  public getPostponedWorkOrderList(equipmentCode: string): Observable<ReportPostponementElementDTO[]> {
    return super.post<string, ReportPostponementElementDTO[]>(
      this.airworthinessManagementApi.getAssetPostponedWorkOrderList,
      equipmentCode
    );
  }

  public getAssetUpcomingEventsPotentialUnit(input: AssetReviewInput): Observable<UpcomingEventDTO[]> {
    return super.post<AssetReviewInput, UpcomingEventDTO[]>(
      this.airworthinessManagementApi.getAssetUpcomingEventsPotentialUnit,
      input
    );
  }

  public getAssetAirworthinessDocuments(equipmentCode: string): Observable<ADSBModRowDTO[]> {
    return super.post<string, ADSBModRowDTO[]>(
      this.airworthinessManagementApi.getAssetAirworthinessDocuments,
      equipmentCode
    );
  }

  public getAssetReviewTabsData(input: AssetReviewInput): Observable<AssetReviewTabsTableDTO> {
    return super.post<AssetReviewInput, AssetReviewTabsTableDTO>(
      this.airworthinessManagementApi.getAssetReviewTabsData,
      input
    );
  }

  public findWorkOrderOriginDetails(input: AssetWorkOrderOriginInput): Observable<AssetWorkOrderOriginDataOutput> {
    return super.post<AssetWorkOrderOriginInput, AssetWorkOrderOriginDataOutput>(
      this.airworthinessManagementApi.findWorkOrderOriginDetails,
      input
    );
  }

  /**************************************************************************
   * Am project management api
   *************************************************************************/

  public findBidmProject(projectId: string): Observable<BidmProjectDTO> {
    return super.post<string, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  /**************************************************************************
   * Fleet management api
   *************************************************************************/

  public getEquipment(input: BidoEquipmentDTOId): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTOId, BidoEquipmentDTO>(this.fleetManagementApi.findBidoEquipment, input);
  }

  public findBidoNotification(notificationId: BidoNotificationDTOId): Observable<BidoNotificationDTO> {
    return super.post<BidoNotificationDTOId, BidoNotificationDTO>(
      this.fleetManagementApi.findBidoNotification,
      notificationId
    );
  }

  public findBidoNotificationList(id: BidoNotificationDTOId[]): Observable<SearchResultsDTO<BidoNotificationDTO>> {
    return super.post<BidoNotificationDTOId[], SearchResultsDTO<BidoNotificationDTO>>(
      this.fleetManagementApi.findBidoNotificationList,
      id
    );
  }

  public findAllBidoMissionEquipmentByCriteria(
    criteria: FindAllBidoMissionEquipmentByCriteriaInput
  ): Observable<SearchResultsDTO<BidoMissionEquipmentLWO>> {
    return super.post<FindAllBidoMissionEquipmentByCriteriaInput, SearchResultsDTO<BidoMissionEquipmentLWO>>(
      this.fleetManagementApi.findAllBidoMissionEquipmentLwoByCriteria,
      criteria
    );
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
}
