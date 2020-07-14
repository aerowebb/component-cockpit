import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkflowExportApi } from '../../../../shared/api/workflow-export.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidtScenarioFindByCriteriaInputDTO } from '../../../../shared/types/api-input-types/administration-workflow-management/bidt-scenario-find-by-criteria-input-dto.interface';
import { BidtScenarioUIDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-ui-dto.interface';
import { BidtScenarioApi } from '../../../../shared/types/api-types/bidt-scenario.api';
import { FileContentDTO } from '../../../../shared/types/api-types/file-content-dto.interface';

@Injectable()
export class WorkflowManagementSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtScenarioApi: BidtScenarioApi,
    private readonly workflowExportApi: WorkflowExportApi
  ) {
    super(http, appConfigService);
  }

  /**
   * Search table records
   */
  public findByCriteria(
    bidtScenarioFindByCriteriaInputDTO: BidtScenarioFindByCriteriaInputDTO
  ): Observable<BidtScenarioUIDTO[]> {
    return super.post<BidtScenarioFindByCriteriaInputDTO, BidtScenarioUIDTO[]>(
      this.bidtScenarioApi.findByCriteria,
      bidtScenarioFindByCriteriaInputDTO
    );
  }

  /**
   * Export Workflow
   */
  public generateXlsWorkFlow(): Observable<FileContentDTO> {
    return super.post<void, FileContentDTO>(this.workflowExportApi.generateXlsWorkFlow);
  }

  /**
   * Delete selected records
   */
  public deleteScenId(idList: number[]): Observable<number[]> {
    return super.post<number[], number[]>(this.bidtScenarioApi.delete, idList);
  }
}
