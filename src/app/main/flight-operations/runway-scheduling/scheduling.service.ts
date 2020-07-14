import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidoEquipmentDTO } from '../../../../../generated_files/api-types/bido-equipment-dto.interface';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { RunwaySchedulingApi } from '../../../shared/api/runway-scheduling.api';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { BidoRunwaySchedulingFlightInputDTO } from '../../../shared/types/api-input-types/fleet-management/bido-runway-scheduling-flight-input-dto.interface';
import { FindAllAircraftByCriteriaInput } from '../../../shared/types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { RunwaySchedulingFlightInfoOutputDTO } from '../../../shared/types/api-output-types/fleet-management/runway-scheduling-flight-info-outpout-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class SchedulingService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly runwaySchedulingApi: RunwaySchedulingApi
  ) {
    super(http, appConfigService);
  }

  public findAllAircraftByCriteria(
    criteria: FindAllAircraftByCriteriaInput
  ): Observable<SearchResultsDTO<BidoEquipmentDTO>> {
    return super.post<FindAllAircraftByCriteriaInput, SearchResultsDTO<BidoEquipmentDTO>>(
      this.fleetManagementApi.findAllAircraftByCriteria,
      criteria
    );
  }

  public getRunwaySchedulingFlightInfo(
    criteria: BidoRunwaySchedulingFlightInputDTO
  ): Observable<RunwaySchedulingFlightInfoOutputDTO> {
    return super.post<BidoRunwaySchedulingFlightInputDTO, RunwaySchedulingFlightInfoOutputDTO>(
      this.runwaySchedulingApi.getMissionSchedulingFlightInfo,
      criteria
    );
  }

  public getOperationalStatusMap(): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.fleetManagementApi.getOperationalStatusMap,
      AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
    );
  }
}
