import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { EventTypeOutputDTO } from '../../../../../../shared/types/api-output-types/catalog/event-type-output-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../../../shared/types/api-types/bido-notification-type-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public loadEventTypeTableData(): Observable<EventTypeOutputDTO[]> {
    return super.post<void, EventTypeOutputDTO[]>(this.fleetManagementApi.findBidoNotificationTypesBySearchCriteria);
  }

  public deleteEventType(eventTypes: BidoNotificationTypeDTO[]) {
    return super.post<BidoNotificationTypeDTO[], void>(this.fleetManagementApi.removeBidoNotificationType, eventTypes);
  }

  public saveCatalog(input: SaveCatalogInput) {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, input);
  }
}
