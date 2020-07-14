import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { FleetManagementApi } from '../../api/fleet-management.api';
import { AbstractAwHttpService } from '../../http/abstract-aw-http';
import { AppConfigService } from '../../services/app-config.service';
import { BidoNotificationAttributeDTOId } from '../../types/api-types/bido-notification-attribute-dto-id.interface';
import { BidoNotificationAttributeDTO } from '../../types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationDTOId } from '../../types/api-types/bido-notification-dto-id.interface';

import { AirworthinessManagementApi } from './../../api/airworthiness-management.api';
import { AssociateDefectToAcrsEventInput } from './../../types/api-input-types/airworthiness-management/associate-defect-to-acrs-event-input.interface';
import { ReportDefectElementDTO } from './../../types/api-output-types/airworthiness-management/report-defect-element-dto.interface';
import { BidoNotificationDTO } from './../../types/api-types/bido-notification-dto.interface';

@Injectable()
export class DefectListService extends AbstractAwHttpService {
  private readonly _refreshButtonSource: Subject<() => void>;
  private readonly _refreshButton$: Observable<() => void>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
    this._refreshButtonSource = new Subject<() => void>();
    this._refreshButton$ = this._refreshButtonSource.asObservable();
  }

  public get refreshButton$(): Observable<() => void> {
    return this._refreshButton$;
  }

  public setRefreshButton(f: () => void): void {
    this._refreshButtonSource.next(f);
  }

  public getDefectList(equipmentCode: string): Observable<ReportDefectElementDTO[]> {
    return super.post<string, ReportDefectElementDTO[]>(
      this.airworthinessManagementApi.getAssetDefectList,
      equipmentCode
    );
  }

  public closeAssetDefect(bidoNotificationDTO: BidoNotificationDTO): Observable<string> {
    return super.post<BidoNotificationDTO, string>(
      this.airworthinessManagementApi.closeAssetDefect,
      bidoNotificationDTO
    );
  }

  public associateDefectsAcrsEvent(input: AssociateDefectToAcrsEventInput): Observable<void> {
    return super.post<AssociateDefectToAcrsEventInput, void>(
      this.airworthinessManagementApi.associateDefectsAcrsEvent,
      input
    );
  }

  /***********************
   * Fleet Managment Api
   **********************/

  public findDefectsByDetectionContext(detectionContext: string): Observable<ReportDefectElementDTO[]> {
    return super.post<string, ReportDefectElementDTO[]>(
      this.fleetManagementApi.findDefectsByDetectionContext,
      detectionContext
    );
  }

  public findAllBidoNotificationAttributeByNotificationCode(
    bidoNotificationDTOId: BidoNotificationDTOId
  ): Observable<BidoNotificationAttributeDTO[]> {
    return super.post<BidoNotificationDTOId, BidoNotificationAttributeDTO[]>(
      this.fleetManagementApi.findAllBidoNotificationAttributeByNotificationCode,
      bidoNotificationDTOId
    );
  }

  public createBidoNotification(bidoNotificationDTO: BidoNotificationDTO): Observable<BidoNotificationDTOId> {
    return super.post<BidoNotificationDTO, BidoNotificationDTOId>(
      this.fleetManagementApi.createBidoNotification,
      bidoNotificationDTO
    );
  }

  public createBidoNotificationAttribute(
    notification: BidoNotificationAttributeDTO
  ): Observable<BidoNotificationAttributeDTOId> {
    return super.post<BidoNotificationAttributeDTO, BidoNotificationAttributeDTOId>(
      this.fleetManagementApi.createBidoNotificationAttribute,
      notification
    );
  }

  public removeBidoNotification(bireId: BidoNotificationDTOId[]): Observable<String> {
    return super.post<BidoNotificationDTOId[], String>(this.fleetManagementApi.removeBidoNotification, bireId);
  }
}
