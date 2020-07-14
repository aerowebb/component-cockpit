import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtScenarioFindByCriteriaInputDTO } from '../../../../shared/types/api-input-types/administration-workflow-management/bidt-scenario-find-by-criteria-input-dto.interface';
import { BidtScenarioUIDTO } from '../../../../shared/types/api-output-types/administration-workflow-management/bidt-scenario-ui-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';

import { WorkflowManagementSearchService } from './workflow-management-search.service';

interface BidtScenarioUICustomDTO {
  bidtScenarioProfileList?: LabelValue<string>[];
  selectedProfileVal?: string;
  selectedProfileLabel?: string;
  profileTooltip?: string;
  targetStatusKeyList?: LabelValue<string>[];
  targetStatusTooltip?: string;
  selectedStatusVal?: string;
  selectedStatusLabel?: string;
  bidtFuncObjectId?: number;
  name?: string;
  id?: number;
  description?: string;
  initialStatusKey?: string;
  initialStatusLabel?: string;
}

@Component({
  selector: 'aw-workflow-management-search',
  styleUrls: ['./workflow-management-search.component.scss'],
  templateUrl: './workflow-management-search.component.html'
})
export class WorkflowManagementSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  // Table
  public workflowTableDataSource: TableDataSource<BidtScenarioUICustomDTO>;

  public showExportSpinner: boolean;
  public showTableLoadingSpinner: boolean;

  public showImportDialog: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly translateService: TranslateService,
    private readonly workflowManagementSearchService: WorkflowManagementSearchService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initWorkflowTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_WORKFLOW_MANAGEMENT_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.init();
  }

  /*************************************************************************
   * SCREEN OPERATIONS
   *************************************************************************/
  private init() {
    this.load();
  }

  public refresh(): void {
    this.init();
  }

  /*************************************************************************
   * SET SCENARIO TABLE COLUMNS
   *************************************************************************/
  private initWorkflowTableDataSource(): void {
    this.workflowTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'name',
          translateKey: this.getTranslateKey('name'),
          width: '20%'
        },
        {
          field: 'bidtFuncObjectLabel',
          translateKey: this.getTranslateKey('bidtFuncObjectLabel'),
          width: '20%'
        },
        {
          field: 'initialStatusLabel',
          translateKey: this.getTranslateKey('initialStatusLabel'),
          width: '20%'
        },
        {
          field: 'targetStatusKeyList',
          translateKey: this.getTranslateKey('targetStatusKeyList'),
          width: '20%'
        },
        {
          field: 'bidtScenarioProfileList',
          translateKey: this.getTranslateKey('bidtScenarioProfileList'),
          width: '20%'
        }
      ],
      data: []
    });
  }

  /*************************************************************************
   * LOAD SCENARIO TABLE RESULTS
   *************************************************************************/
  private load(): void {
    const bidtScenarioFindByCriteriaInputDTO: BidtScenarioFindByCriteriaInputDTO = {
      bidtScenarioDTO: {}
    };
    this.showTableLoadingSpinner = true;
    this.workflowManagementSearchService.findByCriteria(bidtScenarioFindByCriteriaInputDTO).subscribe(
      (response: BidtScenarioUIDTO[]) => {
        if (!!response && response.length > 0) {
          response.forEach((res) => {
            if (!!res && !!res.bidtScenarioProfileList) {
              res.selectedProfileVal = res.bidtScenarioProfileList[0].value;
              this.setProfile(res);
            }

            // TODO: need confirmation of this behavior as always [...] is displayed in legacy
            if (!!res && !!res.targetStatusKeyList && res.targetStatusKeyList.length > 0) {
              res.selectedStatusLabel = '[...]';
            }

            this.setTooltip(res);

            res.selectedStatusLabel = '';
            if (res.targetStatusKeyList) {
              for (let i = 0; i < res.targetStatusKeyList.length; i++) {
                if (res.targetStatusKeyList[i].label !== '[...]') {
                  if (i === res.targetStatusKeyList.length - 1) {
                    res.selectedStatusLabel = res.selectedStatusLabel + res.targetStatusKeyList[i].label;
                  } else {
                    res.selectedStatusLabel = res.selectedStatusLabel + res.targetStatusKeyList[i].label + ', ';
                  }
                }
              }
            }

            res.selectedProfileVal = '';
            if (res.bidtScenarioProfileList) {
              for (let i = 0; i < res.bidtScenarioProfileList.length; i++) {
                if (res.bidtScenarioProfileList[i].label !== '[...]') {
                  if (i === res.bidtScenarioProfileList.length - 1) {
                    res.selectedProfileVal = res.selectedProfileVal + res.bidtScenarioProfileList[i].label;
                  } else {
                    res.selectedProfileVal = res.selectedProfileVal + res.bidtScenarioProfileList[i].label + ', ';
                  }
                }
              }
            }

            if (WorkflowUtils.ALL_STATUS === res.initialStatusKey) {
              res.initialStatusLabel = this.translateService.instant(this.getTranslateKey('allStatus'));
            }
          });
        }

        this.workflowTableDataSource.setData(response);
        this.workflowTableDataSource.update();

        this.showTableLoadingSpinner = false;
      },
      (error) => {
        this.showTableLoadingSpinner = false;
      }
    );
  }

  private setTooltip(rowData: BidtScenarioUICustomDTO) {
    const profileTooltip: string[] = [];
    if (!!rowData && !!rowData.bidtScenarioProfileList && rowData.bidtScenarioProfileList.length > 0) {
      rowData.bidtScenarioProfileList.forEach((res) => {
        if (res.label !== '[...]') {
          profileTooltip.push(res.label as string);
        }
      });

      rowData.profileTooltip = profileTooltip.toString();
    }

    const statusTootip: string[] = [];
    if (!!rowData && !!rowData.targetStatusKeyList && rowData.targetStatusKeyList.length > 0) {
      rowData.targetStatusKeyList.forEach((res) => {
        if (res.label !== '[...]') {
          statusTootip.push(res.label as string);
        }
      });

      rowData.targetStatusTooltip = statusTootip.toString();
    }
  }

  /*************************************************************************
   * EXPORT TABLE
   *************************************************************************/
  public exportTable(): void {
    this.showExportSpinner = true;
    this.workflowManagementSearchService.generateXlsWorkFlow().subscribe(
      (result) => {
        FileUtils.downloadFile(result.fileContent, result.fileName);
        this.showExportSpinner = false;
      },
      (error) => {
        this.showExportSpinner = false;
      }
    );
  }

  /*************************************************************************
   * IMPORT TABLE
   *************************************************************************/
  public importTable(): void {
    this.showImportDialog = true;
  }

  public onImportScenario($event) {
    this.refresh();
  }

  /*************************************************************************
   * OPEN/CREATE SCENARIO
   *************************************************************************/
  public openNewScenario() {
    this.openScenario(undefined, ComponentOpenMode.Create);
  }

  public openSelectedScenario() {
    this.workflowTableDataSource.dataSelection.forEach((scenario) => {
      if (!!scenario) {
        this.openScenario(scenario, ComponentOpenMode.Read);
      }
    });
  }

  public duplicateSelectedScenario() {
    this.workflowTableDataSource.dataSelection.forEach((scenario) => {
      if (!!scenario) {
        this.openScenario(scenario, ComponentOpenMode.Create);
      }
    });
  }

  private openScenario(objectId: BidtScenarioUIDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_WORKFLOW_MANAGEMENT_FORM,
      openMode
    };
    if (!!objectId && !!objectId.id) {
      data.objectId = this.serializationService.serialize(objectId.id);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*************************************************************************
   * DELETE SCENARIO
   *************************************************************************/
  public deleteSelectedScenario(): void {
    const confirmMessageKey =
      this.workflowTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedScenarios'
        : 'confirmDeleteSelectedScenario';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const idList: number[] = [];
        this.workflowTableDataSource.dataSelection.forEach((row) => {
          idList.push(row.id as number);
        });
        this.workflowManagementSearchService.deleteScenId(idList).subscribe(
          (result) => {
            this.workflowTableDataSource.dataSelection = [];
            this.refresh();
          },
          (error) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('errorOnDeletion'));
          }
        );
      }
    });
  }

  /**
   * Filtering
   */
  public setProfile(rowData: BidtScenarioUIDTO) {
    if (!!rowData && !!rowData.bidtScenarioProfileList) {
      if (!!rowData.selectedProfileVal) {
        rowData.selectedProfileLabel = rowData.bidtScenarioProfileList.filter((row) => {
          return row.value === rowData.selectedProfileVal;
        })[0].label;
      } else {
        rowData.selectedProfileLabel = '[...]';
      }
    }
  }
}
