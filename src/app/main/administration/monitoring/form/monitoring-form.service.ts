import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FleetBusinessApi } from '../../../../shared/api/fleet-business.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { DetailedStatsOutput } from '../../../../shared/types/api-output-types/administration-monitoring/detailed-stats-output-dto.interface';
import { Log4jConfigurationTextOutput } from '../../../../shared/types/api-output-types/administration-monitoring/log4j-configuration-text-output-dto.interface';
import { MonitoringOutput } from '../../../../shared/types/api-output-types/administration-monitoring/monitoring-output-dto.interface';

@Injectable()
export class MonitoringFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetBusinessApi: FleetBusinessApi
  ) {
    super(http, appConfigService);
  }

  public adminMonitoring(): Observable<MonitoringOutput> {
    return super.post<void, MonitoringOutput>(this.fleetBusinessApi.adminMonitoring);
  }

  /**********************************
   * STATS OPERATIONS
   **********************************/
  public reset(): Observable<string> {
    return super.post<void, string>(this.fleetBusinessApi.resetStats);
  }

  public refresh(): Observable<string> {
    return super.post<void, string>(this.fleetBusinessApi.refreshStats);
  }

  public detailed(): Observable<DetailedStatsOutput> {
    return super.post<void, DetailedStatsOutput>(this.fleetBusinessApi.detailedStats);
  }

  public changeLogLevel(conf: Log4jConfigurationTextOutput): Observable<void> {
    return super.post<Log4jConfigurationTextOutput, void>(this.fleetBusinessApi.changeLogLevel, conf);
  }
}
