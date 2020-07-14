import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidtFuncObjectApi } from '../../../../shared/api/bidt-func-object.api';
import { WorkflowImportApi } from '../../../../shared/api/workflow-import.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { ImportWorkflowFromExcelDTO } from '../../../../shared/types/api-input-types/administration-workflow-management/import-workflow-from-excel-dto.interface';
import { SaveWorkflowManagementInputDTO } from '../../../../shared/types/api-input-types/administration-workflow-management/save-workflow-management-input-dto.interface';
import { BidtScenarioDataCustomOutputDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-data-custom-output-dto.interface';
import { BidtScenarioDTO } from '../../../../shared/types/api-types/bidt-scenario-dto.interface';
import { BidtScenarioApi } from '../../../../shared/types/api-types/bidt-scenario.api';
import { LabelValue } from '../../../../shared/types/label-value.interface';

export interface LabelValueKey<T> extends LabelValue<T> {
  key: string;
}

@Injectable()
export class WorkflowManagementFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtScenarioApi: BidtScenarioApi,
    private readonly bidtFuncObjectApi: BidtFuncObjectApi,
    private readonly workflowImportApi: WorkflowImportApi,
    private readonly translateService: TranslateService
  ) {
    super(http, appConfigService);
  }

  public searchScenarioByCriteria(bidtScenarioDTO: BidtScenarioDTO): Observable<BidtScenarioDataCustomOutputDTO> {
    return super.post<BidtScenarioDTO, BidtScenarioDataCustomOutputDTO>(
      this.bidtScenarioApi.searchScenarioByCriteria,
      bidtScenarioDTO
    );
  }

  public getControlMgmtTableData(bidtScenarioDTO: BidtScenarioDTO): Observable<BidtScenarioDataCustomOutputDTO> {
    return super.post<BidtScenarioDTO, BidtScenarioDataCustomOutputDTO>(
      this.bidtScenarioApi.getControlMgmtTableData,
      bidtScenarioDTO
    );
  }

  public findAll(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.bidtFuncObjectApi.findAll);
  }

  public getInternationalizedFuncObject(): Observable<LabelValueKey<string>[]> {
    return this.findAll().pipe(
      map((response: LabelValue<string>[]) => {
        return response.map((lv) => ({
          value: lv.value,
          key: lv.label,
          label: this.translateService.instant(`FuncObject.${lv.label}`)
        }));
      })
    );
  }

  public saveWorkflowManagement(dto: SaveWorkflowManagementInputDTO): Observable<number> {
    return super.post<SaveWorkflowManagementInputDTO, number>(this.bidtScenarioApi.saveWorkflowManagement, dto);
  }

  public importWorkflowFromExcel(dto: ImportWorkflowFromExcelDTO): Observable<string> {
    return super.post<ImportWorkflowFromExcelDTO, string>(this.workflowImportApi.importWorkflowFromExcel, dto);
  }
}
