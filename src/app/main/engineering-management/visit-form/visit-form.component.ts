import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TaskHistoryApi } from '../../../shared/api/task-history.api';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../shared/services/update-historic.service';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireTaskAttributeDTOId } from '../../../shared/types/api-types/bire-task-attribute-dto-id.interface';
import { BireTaskAttributeDTO } from '../../../shared/types/api-types/bire-task-attribute-dto.interface';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { HBireTaskAttributeDTO } from '../../../shared/types/api-types/h-bire-task-attribute-dto.interface';
import { HBireTaskDTO } from '../../../shared/types/api-types/h-bire-task-dto.interface';
import { SaveBireTaskInput } from '../../../shared/types/api-types/save-bire-task-input.interface';
import { TaskDecompositionTableAttributeDTO } from '../../../shared/types/api-types/task-decomposition-table-attribute-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { SettingsUtils } from '../../../shared/utils/settings-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';
import { VisitSearchService } from '../visit-search/visit-search.service';

import { VisitFormService } from './visit-form.service';

@Component({
  selector: 'aw-visit-form',
  templateUrl: './visit-form.component.html',
  styleUrls: ['./visit-form.component.scss']
})
export class VisitFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly TASK_DECOMPOSITION_ANCHOR_ID: string = 'taskDecompositionAnchor';
  public static readonly MAINTENANCE_PROGRAMS_ANCHOR_ID: string = 'maintenanceProgramsAnchor';
  public static readonly ATTRIBUTES_ANCHOR_ID: string = 'attributesAnchor';

  public readonly form: typeof VisitFormComponent;

  public readonly tabFieldsId: string;
  public readonly tabTasksId: string;
  public readonly tabMaintenanceId: string;
  public readonly tabAttributesId: string;

  public visit: BireTaskDTO;

  public saving: boolean;
  public statusList: LabelValue<string>[];

  //  Table of content
  @ViewChild(VisitFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationElRef: ElementRef;

  @ViewChild(VisitFormComponent.TASK_DECOMPOSITION_ANCHOR_ID)
  public taskDecompositionElRef: ElementRef;

  @ViewChild(VisitFormComponent.MAINTENANCE_PROGRAMS_ANCHOR_ID)
  public maintenanceProgramsElRef: ElementRef;

  @ViewChild(VisitFormComponent.ATTRIBUTES_ANCHOR_ID)
  public attributesElRef: ElementRef;
  public toc: PageTocEntry[];

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HBireTaskDTO>;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  // Dynamic historic
  public showDynamicAttributesHistoric: boolean;
  public dynamicAttributesHistoric: Observable<HBireTaskAttributeDTO[]>;

  // Tasks tab
  public decompositionInput: TaskDecompositionTableAttributeDTO;
  public decompositionTableDataSource: TableDataSource<TaskDecompositionTableAttributeDTO>;
  public decompositionTableRemovedList: TaskDecompositionTableAttributeDTO[];
  public taskGroups: LabelValue<string>[];
  public taskTypes: LabelValue<string>[];
  public periodicityTypes: LabelValue<string>[];

  // Maintenance programs tab
  public maintenanceTableDataSource: TableDataSource<BireMaintenancePlanDTO>;

  // Attributes tab
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForVisit: BireAttributeDTO[];
  public bireVisitAttributes: BireTaskAttributeDTO[];
  public dynamicAttributesForVisit: DynamicAttributes[];
  public newAttributeDisplayed: string;

  public currentTabId: string;

  public currentDecomposition: TaskDecompositionTableAttributeDTO | undefined;
  public currentDecompositionIndex: number;
  public isNewDecomposition: boolean;
  public isReadOnlyDecompositionDialog: boolean;
  public showDecompositionDialog: boolean;

  public currency: string;

  public isCostSettingEnabled: boolean;
  public totalCost: number | undefined;

  public isDecompositionLoading: boolean;
  public isMaintenanceLoading: boolean;

  // For tab context
  public subTitle: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly visitFormService: VisitFormService,
    private readonly visitSearchService: VisitSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly taskHistoryApi: TaskHistoryApi,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.form = VisitFormComponent;

    // Historic popup
    this.showStatusUpdatesPopup = false;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.deleteApi = this.taskHistoryApi.removeBireTaskHistory;

    // Dynamic historic
    this.showDynamicAttributesHistoric = false;

    this.tabFieldsId = 'fields';
    this.tabTasksId = 'tasks';
    this.tabMaintenanceId = 'maintenance';
    this.tabAttributesId = 'attributes';

    super.registerPageTocEntryObservable();

    this.loadCurrency();

    this.currentTabId = this.tabFieldsId;

    this.currentDecomposition = undefined;
    this.isReadOnlyDecompositionDialog = true;
    this.showDecompositionDialog = false;

    this.isDecompositionLoading = false;
    this.isMaintenanceLoading = false;

    this.totalCost = undefined;

    this.initCostSettingDisplay();
    this.initMaintenanceTableDataSource();
    this.initDecompositionTableDataSource();

    this.loadTaskGroups();
    this.loadTaskTypes();
    this.loadPeriodicityTypes();
    this.loadVisitStatus();
    this.init();

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForVisit = this.dynamicAttributesService.from(this.bireAttributesForVisit);
      this.getBireAttributesForVisit();
    });
  }

  public getComponentName(): string {
    return 'VisitFormComponent';
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      this.subtitleMethod();
      this.loadVisit();
      this.setTableOfContent();
    }
  }

  public subtitleMethod() {
    const context = !!this.componentData.objectId
      ? `${this.serializationService.deserialize(this.componentData.objectId).taskCode}-${
          this.serializationService.deserialize(this.componentData.objectId).taskVersion
        }`
      : 'tab.createMode';
    this.displayComponentContext(context, this.isCreateOpenMode);
    this.subTitle = context;
  }

  private setTableOfContent(): void {
    const mainInformationKey = this.getTranslateKey('mainData');
    const taskDecompositionsKey = this.getTranslateKey('decomposition');
    const maintenanceProgramsKey = this.getTranslateKey('maintenanceProgram');
    const attributesKey = this.getTranslateKey('attributes');
    this.translateService
      .get([mainInformationKey, taskDecompositionsKey, maintenanceProgramsKey, attributesKey])
      .subscribe((results: string[]) => {
        const mainInformationLabel = !!results ? results[mainInformationKey] : 'Main Information';
        const taskDecompositionsLabel = !!results ? results[taskDecompositionsKey] : 'Tasks Decomposition';
        const maintenanceProgramsLabel = !!results ? results[maintenanceProgramsKey] : 'Maintenance Programs';
        const attributesLabel = !!results ? results[attributesKey] : 'Attributes';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationElRef,
            label: mainInformationLabel
          },
          {
            id: 'taskDecompositionAnchor',
            anchor: this.taskDecompositionElRef,
            label: taskDecompositionsLabel
          },
          {
            id: 'maintenanceProgramsAnchor',
            anchor: this.maintenanceProgramsElRef,
            label: maintenanceProgramsLabel
          },
          {
            id: 'attributesAnchor',
            anchor: this.attributesElRef,
            label: attributesLabel
          }
        ];

        super.selectPageTocEntry('mainInformationAnchor');
      });
  }

  public cancelVisit(): void {
    if (this.isCreateOpenMode) {
      this.initOnCreate();
    } else {
      this.reloadVisit();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesForVisit);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public editVisit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public loadVisit(): void {
    if (!!this.componentData.objectId) {
      const visitTemp: BireTaskDTO = {
        taskCode: this.serializationService.deserialize(this.componentData.objectId).taskCode,
        taskVersion: this.serializationService.deserialize(this.componentData.objectId).taskVersion
      };

      this.visitSearchService.findBireVisitsByCriteria(visitTemp).subscribe(
        (result) => {
          result.list.forEach((res) => {
            if (res.taskCode === visitTemp.taskCode && res.taskVersion === visitTemp.taskVersion) {
              this.visit = res;
            }
          });

          if (!!this.visit.taskCode && !!this.visit.taskVersion) {
            const visitId: BireTaskDTO = {
              taskCode: this.visit.taskCode,
              taskVersion: this.visit.taskVersion
            };

            this.loadDecompositionTable(visitId);
            this.loadMaintenanceTable(visitId);
            this.getBireVisitAttributes();
            this.getTotalCost(visitId);
            this.loadVisitStatus();
            this.subtitleMethod();
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadVisit'));
        }
      );
    } else {
      this.visit.statusState = AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
    }
  }

  public reloadVisit(): void {
    this.init();
    this.loadVisit();
  }

  private loadVisitStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_OPERATION_STATUS_MAP).subscribe(
      (results) => {
        this.statusList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  public saveVisit(): void {
    if (StringUtils.isNullOrEmpty(this.visit.taskCode) || StringUtils.isNullOrEmpty(this.visit.taskVersion)) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.saving = true;
      const visit: BireTaskDTO = {
        taskCode: this.visit.taskCode,
        taskVersion: this.visit.taskVersion
      };
      if (this.componentData.openMode === ComponentOpenMode.Create) {
        this.visitSearchService.findBireVisitsByCriteria(visit).subscribe((results) => {
          let visitExists = false;
          results.list.forEach((res) => {
            if (res.taskCode === this.visit.taskCode && res.taskVersion === this.visit.taskVersion) {
              visitExists = true;
            }
          });
          if (!visitExists) {
            this.save();
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('visitAlreadyExists'));
            this.saving = false;
          }
        });
      } else {
        this.visitSearchService.findBireVisitsByCriteria(visit).subscribe((results) => {
          let visitExists = false;
          results.list.forEach((res) => {
            if (res.taskCode === this.visit.taskCode && res.taskVersion === this.visit.taskVersion) {
              visitExists = true;
            }
          });
          if (visitExists) {
            this.save();
          } else {
            this.messageService.showErrorMessage('global.internalServerError');
            this.saving = false;
          }
        });
      }
    }
  }

  private save(): void {
    const decTable = JSON.parse(JSON.stringify(this.decompositionTableDataSource.dataSrc));
    decTable.forEach((decomposition) => {
      if (!!decomposition && !!decomposition.periodicityType) {
        const periodicityType = this.periodicityTypes.filter((type) => type.label === decomposition.periodicityType);
        decomposition.periodicityType =
          periodicityType.length !== 0 ? periodicityType[0].value : decomposition.periodicityType;
      }
      if (!!decomposition && !!decomposition.taskType) {
        const taskType = this.taskTypes.filter((type) => type.label === decomposition.taskType);
        decomposition.taskType = taskType.length !== 0 ? taskType[0].value : decomposition.taskType;
      }
    });

    if (!!this.visit && !!this.visit.taskCode && !!this.visit.taskVersion) {
      const bireTaskAttributes = this.dynamicAttributesService.toBireTaskAttribute(
        this.visit.taskCode,
        this.visit.taskVersion,
        this.dynamicAttributesForVisit
      );

      const saveVisitId: SaveBireTaskInput = {
        visitCode: this.visit.taskCode,
        visitVersion: this.visit.taskVersion,
        visitDesignation: this.visit.taskDesignation,
        visitDescription: this.visit.taskDescription,
        taskDecompositionTableAttributeAddedDTO: decTable,
        taskDecompositionTableAttributeRemoveDTO: this.decompositionTableRemovedList,
        statusState: this.visit.statusState,
        bireTaskAttributeUpdatedList: bireTaskAttributes
      };

      this.visitFormService.saveVisit(saveVisitId).subscribe(
        (result) => {
          this.saving = false;
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveVisit'));
          const context = `${this.visit.taskCode}-${this.visit.taskVersion}`;
          this.displayComponentContext(context, this.isCreateOpenMode);
          this.updateOpenMode(ComponentOpenMode.Read);
          this.componentData.objectId = this.serializationService.serialize(this.visit);
          this.reloadVisit();
        },
        (error) => {
          this.saving = false;
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveVisit'));
        }
      );
    } else {
      this.saving = false;
      super.throwUnboundLocalError('saveVisit', 'this.visit && this.visit.taksCode && this.visit.taskVersion');
    }
  }

  private init(): void {
    this.visit = {};
    this.decompositionInput = {};
    this.decompositionTableRemovedList = [];

    this.saving = false;

    this.attributeIdValueMap = new Map<string, string>();
    this.bireAttributesForVisit = [];
    this.dynamicAttributesForVisit = [];
    this.bireVisitAttributes = [];
    this.getBireAttributesForVisit();
  }

  private initOnCreate(): void {
    this.visit = {};
    this.decompositionInput = {};

    this.initAttributeValue();
  }

  private loadDecompositionTable(bireTaskDTO: BireTaskDTO): void {
    this.isDecompositionLoading = true;
    this.visitFormService.findTasksDecompositionByVisit(bireTaskDTO).subscribe(
      (results) => {
        this.isDecompositionLoading = false;
        this.decompositionTableDataSource.setData(results || []);
        this.decompositionTableDataSource.dataSrc.forEach((decomposition) => {
          const taskGroup: LabelValue<string> = this.taskGroups.filter(
            (element) => element.value === decomposition.taskGroup
          )[0];

          const taskType: LabelValue<string> = this.taskTypes.filter(
            (element) => element.value === decomposition.taskType
          )[0];

          const periodicityType: LabelValue<string> = this.periodicityTypes.filter(
            (element) => element.value === decomposition.periodicityType
          )[0];

          if (decomposition.taskGroup && taskGroup) {
            decomposition.taskGroup = taskGroup.label;
          }
          if (decomposition.taskType && taskType) {
            decomposition.taskType = taskType.label;
          }
          if (decomposition.periodicityType && periodicityType) {
            decomposition.periodicityType = periodicityType.label;
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTasksDecompositions'));
      }
    );
  }

  private loadMaintenanceTable(bireTaskDTO: BireTaskDTO): void {
    this.isMaintenanceLoading = true;
    this.visitFormService.findBireMaintenancePlan(bireTaskDTO).subscribe(
      (results) => {
        this.maintenanceTableDataSource.setData(results || []);
        this.isMaintenanceLoading = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetMaintenancePlan'));
      }
    );
  }

  private loadTaskGroups(): void {
    this.visitFormService.getTaskGroups().subscribe(
      (results) => {
        this.taskGroups = results.filter((taskGroup) => taskGroup.value != undefined) || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTaskGroups'));
      }
    );
  }

  private loadTaskTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe(
      (results) => {
        this.taskTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetTaskTypes'));
      }
    );
  }

  private loadPeriodicityTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PERIODICITY_TYPE_MAP).subscribe(
      (results) => {
        this.periodicityTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('.errorOnGetPeriodicityTypes'));
      }
    );
  }

  private getTotalCost(input: BireTaskDTO): void {
    this.visitFormService.findBireOperationsByTaskTotalCost(input).subscribe((result) => {
      this.totalCost = result;
    });
  }

  private initDecompositionTableDataSource(): void {
    this.decompositionTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      itemsPerPage: 7,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'taskGroup',
          translateKey: this.getTranslateKey('taskGroup'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'taskType',
          translateKey: this.getTranslateKey('taskType'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'groupCode',
          translateKey: this.getTranslateKey('groupCode'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'periodicityType',
          translateKey: this.getTranslateKey('periodicityType'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'sequenceNumber',
          translateKey: this.getTranslateKey('sequenceNumber'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: []
    });
  }

  private initMaintenanceTableDataSource(): void {
    this.maintenanceTableDataSource = new TableDataSource({
      enableSelection: false,
      itemsPerPage: 10,
      columns: [
        {
          field: 'planCode',
          translateKey: this.getTranslateKey('planCode'),
          width: '15%'
        },
        {
          field: 'planName',
          translateKey: this.getTranslateKey('planName'),
          width: '40%'
        },
        {
          field: 'planRevisionNumber',
          translateKey: this.getTranslateKey('planRevisionNumber'),
          alignment: ColumnAlignment.CENTER,
          width: '22.5%'
        },
        {
          field: 'planRevisionDate',
          translateKey: this.getTranslateKey('planRevisionDate'),
          alignment: ColumnAlignment.CENTER,
          width: '22.5%'
        }
      ],
      data: []
    });
  }

  /*************************************************************************
   * Fields tab
   *************************************************************************/

  public openFieldsTab(): void {
    this.currentTabId = this.tabFieldsId;
  }

  /*************************************************************************
   * Tasks tab
   *************************************************************************/

  public openTasksTab(): void {
    this.currentTabId = this.tabTasksId;
  }

  public createDecomposition(): void {
    this.currentDecomposition = undefined;
    this.isNewDecomposition = true;
    this.isReadOnlyDecompositionDialog = false;
    this.showDecompositionDialog = true;
  }

  public editDecomposition(): void {
    if (this.decompositionTableDataSource.dataSelectionCount === 1) {
      this.currentDecomposition = { ...this.decompositionTableDataSource.dataSelection[0] };
      this.isNewDecomposition = false;
      this.currentDecompositionIndex = this.decompositionTableDataSource.dataSrc.indexOf(
        this.decompositionTableDataSource.dataSelection[0]
      );

      const taskGroup: LabelValue<string> = this.taskGroups.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.taskGroup
      )[0];

      const taskType: LabelValue<string> = this.taskTypes.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.taskType
      )[0];

      const periodicityType: LabelValue<string> = this.periodicityTypes.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.periodicityType
      )[0];

      if (this.currentDecomposition.taskGroup && taskGroup) {
        this.currentDecomposition.taskGroup = taskGroup.value;
      }
      if (this.currentDecomposition.taskType && taskType) {
        this.currentDecomposition.taskType = taskType.value;
      }
      if (this.currentDecomposition.periodicityType && periodicityType) {
        this.currentDecomposition.periodicityType = periodicityType.value;
      }

      this.isReadOnlyDecompositionDialog = false;
      this.showDecompositionDialog = true;
    }
  }

  public openDecomposition(): void {
    if (this.decompositionTableDataSource.dataSelectionCount === 1) {
      this.currentDecomposition = { ...this.decompositionTableDataSource.dataSelection[0] };

      const taskGroup: LabelValue<string> = this.taskGroups.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.taskGroup
      )[0];

      const taskType: LabelValue<string> = this.taskTypes.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.taskType
      )[0];

      const periodicityType: LabelValue<string> = this.periodicityTypes.filter(
        (element) => !!this.currentDecomposition && element.label === this.currentDecomposition.periodicityType
      )[0];

      if (this.currentDecomposition.taskGroup && taskGroup) {
        this.currentDecomposition.taskGroup = taskGroup.value;
      }
      if (this.currentDecomposition.taskType && taskType) {
        this.currentDecomposition.taskType = taskType.value;
      }
      if (this.currentDecomposition.periodicityType && periodicityType) {
        this.currentDecomposition.periodicityType = periodicityType.value;
      }

      this.isNewDecomposition = false;
      this.isReadOnlyDecompositionDialog = true;
      this.showDecompositionDialog = true;
    }
  }

  public deleteDecomposition(): void {
    if (this.decompositionTableDataSource.dataSelectionCount === 1) {
      const partialMessageKey =
        this.decompositionTableDataSource.dataSelectionCount > 1
          ? 'confirmDeleteSelectedDecompositions'
          : 'confirmDeleteSelectedDecomposition';

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          const deleteDecomposition: TaskDecompositionTableAttributeDTO = {
            taskCode: this.decompositionTableDataSource.dataSelection[0].taskCode,
            taskVersion: this.decompositionTableDataSource.dataSelection[0].taskVersion
          };

          this.decompositionTableRemovedList.push(deleteDecomposition);

          this.decompositionTableDataSource.setData(
            this.decompositionTableDataSource.dataSrc.filter(
              (dec) => dec.taskCode !== this.decompositionTableDataSource.dataSelection[0].taskCode
            )
          );

          this.decompositionTableDataSource.dataSelection = [];
        }
      });
    }
  }

  public goToTask(event: TaskDecompositionTableAttributeDTO) {
    const object = event.bireTask;
    const labelKey = 'transaction.TaskFormComponent';
    if (!!object && !!object.taskCode && !!object.taskVersion) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      super.throwUnboundLocalError('goToTask', 'event.bireTask');
    }
  }

  /*************************************************************************
   * Maintenance tab
   *************************************************************************/
  public goToMaintenanceProgram(event: BireMaintenancePlanDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!event.planCode) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: event.planCode
      };
      data.objectId = this.serializationService.serialize(birePlanDTOId);

      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      super.throwUnboundLocalError('goToMaintenanceProgram', 'event.planCode');
    }
  }

  /*************************************************************************
   * Attributes tab
   *************************************************************************/

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public getBireAttributesForVisit(): void {
    this.visitFormService.findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY).subscribe(
      (results) => {
        this.bireAttributesForVisit.push(...results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
    this.visitFormService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_VISIT_KEY)
      .subscribe(
        (results) => {
          this.bireAttributesForVisit.push(...results);
          setTimeout(() => {
            this.dynamicAttributesForVisit = this.dynamicAttributesService.from(this.bireAttributesForVisit);
            this.getBireVisitAttributes();
          });
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
        }
      );
  }

  public getBireVisitAttributes(): void {
    if (!!this.visit && !!this.visit.taskCode && !!this.visit.taskVersion) {
      const visitId: BireTaskDTOId = {
        taskCode: this.visit.taskCode,
        taskVersion: this.visit.taskVersion
      };
      this.visitFormService.findBireTaskAttributeByTask(visitId).subscribe(
        (results) => {
          this.bireVisitAttributes = results;
          this.dynamicAttributesService.setValues(this.dynamicAttributesForVisit, this.bireVisitAttributes);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByTask'));
        }
      );
    }
  }

  /*************************************************************************
   * Associated Tasks Maintenance Dialog
   *************************************************************************/

  public addNewDecomposition(taskDecomposition: TaskDecompositionTableAttributeDTO): void {
    if (taskDecomposition) {
      const decompositionInExistingTable = this.decompositionTableDataSource.dataSrc.filter(
        (decomposition) => decomposition.taskCode === taskDecomposition.taskCode
      );
      if (decompositionInExistingTable.length === 0) {
        this.decompositionTableDataSource.addData([taskDecomposition]);
        this.decompositionTableDataSource.dataSrc.forEach((decomposition) => {
          const taskGroup: LabelValue<string> = this.taskGroups.filter(
            (element) => element.value === decomposition.taskGroup
          )[0];

          const taskType: LabelValue<string> = this.taskTypes.filter(
            (element) => element.value === decomposition.taskType
          )[0];

          const periodicityType: LabelValue<string> = this.periodicityTypes.filter(
            (element) => element.value === decomposition.periodicityType
          )[0];

          if (decomposition.taskGroup && taskGroup) {
            decomposition.taskGroup = taskGroup.label;
          }
          if (decomposition.taskType && taskType) {
            decomposition.taskType = taskType.label;
          }
          if (decomposition.periodicityType && periodicityType) {
            decomposition.periodicityType = periodicityType.label;
          }
        });
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('decompositionExists'));
      }
    }
  }

  public updateDecomposition(taskDecomposition: TaskDecompositionTableAttributeDTO): void {
    if (taskDecomposition) {
      this.decompositionTableDataSource.replaceData(
        this.decompositionTableDataSource.dataSelection[0],
        taskDecomposition
      );
      this.decompositionTableDataSource.dataSelection = [];

      this.decompositionTableDataSource.dataSrc.forEach((decomposition) => {
        const taskGroup: LabelValue<string> = this.taskGroups.filter(
          (element) => element.value === decomposition.taskGroup
        )[0];

        const taskType: LabelValue<string> = this.taskTypes.filter(
          (element) => element.value === decomposition.taskType
        )[0];

        const periodicityType: LabelValue<string> = this.periodicityTypes.filter(
          (element) => element.value === decomposition.periodicityType
        )[0];

        if (decomposition.taskGroup && taskGroup) {
          decomposition.taskGroup = taskGroup.label;
        }
        if (decomposition.taskType && taskType) {
          decomposition.taskType = taskType.label;
        }
        if (decomposition.periodicityType && periodicityType) {
          decomposition.periodicityType = periodicityType.label;
        }
      });
    }
  }

  // Currency
  private loadCurrency(): void {
    this.currency = '';
    this.visitFormService.getLocalCurrency().subscribe((result) => {
      this.currency = result;
    });
  }

  public openStatusUpdatesPopup() {
    if (!!this.visit && !!this.visit.taskCode && !!this.visit.taskVersion) {
      const taskId: BireTaskDTOId = {
        taskCode: this.visit.taskCode,
        taskVersion: this.visit.taskVersion
      };
      this.showStatusUpdatesPopup = true;
      const columns: TableColumn[] = [
        {
          field: 'timestamp',
          width: '200px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'center'
        },
        { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskTypeCode', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskDesignation', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskDescription', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'groupCode', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'repairCenterCode', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskChapter', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskSection', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskSubject', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskTask', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskSubTask', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'taskStatus', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        {
          field: 'taskApplicabilityDate',
          width: '200px',
          filterMode: TableColumnFilterMode.Input,
          isDate: true,
          alignment: 'center'
        },
        {
          field: 'taskApplicabilityCode',
          width: '200px',
          filterMode: TableColumnFilterMode.Input,
          alignment: 'center'
        },
        { field: 'overhaul', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' },
        { field: 'inspectionPerEsm', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'center' }
      ];
      this.updatesKeyMap.set('taskTypeCode', this.propertiesService.getValue('getTaskTypeMap'));
      this.updatesKeyMap.set('taskStatus', this.propertiesService.getValue('getFuncObjectStatusMap'));
      this.updatesKeyMap.set('taskApplicabilityCode', this.propertiesService.getValue('getTaskApplicabilityCodeMap'));
      this.updatesKeyMap.set('repairCenterCode', this.visitFormService.findMROCenter());
      this.updatesKeyMap.set('groupCode', this.visitFormService.getTaskGroups());
      this.tableStatusUpdatesData = {
        componentId: 'VisitFormComponent.historicPopup',
        tableCols: columns,
        tableRows: this.updateHistoricService.findBireTaskHistoric(taskId),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Multiple,
        globalFilter: false
      };
    } else {
      super.throwUnboundLocalError(
        'openStatusUpdatesPopup',
        'this.visit && this.visit.taskCode && this.visit.taskVersion'
      );
    }
  }

  public openHistoricAttributes(): void {
    if (!!this.visit && !!this.visit.taskCode && !!this.visit.taskVersion && !!this.dynamicAttributesForVisit) {
      this.showDynamicAttributesHistoric = true;

      const attributeIds: BireTaskAttributeDTOId[] = this.dynamicAttributesService.toBireTaskAttributeId(
        this.visit.taskCode,
        this.visit.taskVersion,
        this.dynamicAttributesForVisit
      );
      this.dynamicAttributesHistoric = this.visitFormService.findHBireTaskAttributesByAttributeId(attributeIds);
    }
  }

  public initCostSettingDisplay(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        this.isCostSettingEnabled = SettingsUtils.isPropertyEnabled(
          awConfiguration,
          AWPropertiesConstants.DISPLAY_COST
        );
      });
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.visit.statusUser,
        currentDate: this.visit.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.visit.statusState, this.statusList),
          value: this.visit.statusState
        },
        nextStatuses: this.statusList
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.visit.statusState = event.data;
          this.saveVisit();
        }
      }
    });
  }
}
