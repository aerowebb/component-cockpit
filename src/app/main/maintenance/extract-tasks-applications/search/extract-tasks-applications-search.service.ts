import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AirworthinessManagementApi } from '../../../../shared/api/airworthiness-management.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { TaskManagementApi } from '../../../../shared/api/task-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ExtractTaskApplicationInputDTO } from '../../../../shared/types/api-input-types/airworthiness-management/extract-task-application-input-dto.interface';
import { TaskApplicationVOOutputDTO } from '../../../../shared/types/api-output-types/airworthiness-management/task-application-vo-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';

@Injectable()
export class ExtractTasksApplicationsSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly airworthinessManagementApi: AirworthinessManagementApi,
    private readonly taskManagementApi: TaskManagementApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  /**************************************************************************
   * API call to extract tasks applications
   *************************************************************************/
  public extractTasksApplicationsFromAssetCodeListAndTaskKeyList(
    input: ExtractTaskApplicationInputDTO
  ): Observable<TaskApplicationVOOutputDTO[]> {
    return super.post<ExtractTaskApplicationInputDTO, TaskApplicationVOOutputDTO[]>(
      this.airworthinessManagementApi.extractTasksApplicationsFromAssetCodeListAndTaskKeyList,
      input
    );
  }

  public getTaskGroups(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.taskManagementApi.findAllBireTaskGroups);
  }

  public getEquipmentName(bidoEquipmentDTOId: BidoEquipmentDTOId): Observable<string> {
    return super.post<BidoEquipmentDTOId, string>(this.fleetManagementApi.getEquipmentName, bidoEquipmentDTOId);
  }
}
