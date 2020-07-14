import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem, SortEvent, TreeNode } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BireUnitMeasureConstants } from '../../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../shared/services/date.service';
import { ExportService } from '../../../../../shared/services/export.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { ExportDueListInput } from '../../../../../shared/types/api-input-types/airworthiness-management/export-due-list-input.interface';
import { AssetStructureElementOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/asset-structure-element-output.interface';
import { MaintenancePlanStructureElementOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/maintenance-plan-structure-element-output.interface';
import { BidmProjectDTOId } from '../../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BireSbDTOId } from '../../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireTaskDTOId } from '../../../../../shared/types/api-types/bire-task-dto-id.interface';
import { Chips } from '../../../../../shared/types/chips.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ComparatorUtils } from '../../../../../shared/utils/comparator-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { WorkOrdersFormService } from '../../../work-orders/form/work-orders-form.service';
import { WorkPackageFormService } from '../../../work-package/form/work-package-form.service';
import { AirworthinessControlFormComponentInput } from '../../types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../../types/schedule-maintenance-form-component-input.interface';

import { MaintenancePlanTableTypeConstants } from './constants/maintenance-plan-table-type-constants';
import { MaintenancePlanTableTaskCriteria } from './enums/maintenance-plan-table-task-criteria.interface';
import { MaintenancePlanTableTypeCriteria } from './enums/maintenance-plan-table-type-criteria.interface';
import { ScheduleMaintenanceFormService } from './schedule-maintenance-form.service';
import { MaintenancePlanRow } from './types/maintenance-plan-row.interface';
import { MaintenancePlanTableCriteria } from './types/maintenance-plan-table-criteria.interface';

@Component({
  selector: 'aw-schedule-maintenance-form',
  styleUrls: ['../share.scss', './share.scss', './schedule-maintenance-form.component.scss'],
  templateUrl: './schedule-maintenance-form.component.html'
})
export class ScheduleMaintenanceFormComponent extends FormPageComponent<PageComponentData>
  implements OnDestroy, OnInit {
  public static readonly AIRCRAFT_ANCHOR_ID: string = 'aircraftAnchor';
  public static readonly UPCOMING_EVENTS_SUMMARY_ANCHOR_ID: string = 'upcomingEventsSummaryAnchor';
  public static readonly UPCOMING_EVENTS_ANCHOR_ID: string = 'upcomingEventsAnchor';

  public static readonly SUMMARY_TABLE_AD_LABEL: string = 'ad';
  public static readonly SUMMARY_TABLE_DEFECT_LABEL: string = 'defect';
  public static readonly SUMMARY_TABLE_GLOBAL_LABEL: string = 'global';
  public static readonly SUMMARY_TABLE_LLP_LABEL: string = 'llp';
  public static readonly SUMMARY_TABLE_OMP_LABEL: string = 'task';
  public static readonly SUMMARY_TABLE_SB_LABEL: string = 'sb';
  public static readonly SUMMARY_TABLE_AMG_LABEL: string = 'amg';

  private static readonly EXPORT_TRANSLATE_KEY: string = 'ScheduleMaintenanceFormComponentExport';
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  private static readonly SUMMARY_TABLE_AD_INDEX: number = 3;
  private static readonly SUMMARY_TABLE_DEFECT_INDEX: number = 2;
  private static readonly SUMMARY_TABLE_GLOBAL_INDEX: number = 0;
  private static readonly SUMMARY_TABLE_LLP_INDEX: number = 5;
  private static readonly SUMMARY_TABLE_OMP_INDEX: number = 1;
  private static readonly SUMMARY_TABLE_SB_INDEX: number = 4;
  private static readonly SUMMARY_TABLE_AMG_INDEX: number = 6;

  public readonly component: typeof ScheduleMaintenanceFormComponent;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public componentContext: string;

  public airworthinessStatus: string;
  public asset: BidoEquipmentDTO;
  public assetCsn: string;
  // public assetEisDate: string;
  public assetStatus: string;
  public assetStructure: AssetStructureElementOutput[];
  public assetTsn: string;
  public csnLabel: string;
  public filterActivatedList: Chips[];
  public filtersVisible: boolean;
  public interdependenceDataList: string[];
  public interdependenceDataVisible: boolean;
  public lastTaskApplicationsVisible: boolean;
  public maintenancePlanTableCalendarVisible: boolean;
  public maintenancePlanTableColList: TableColumn[];
  public maintenancePlanTableDisplayedLeafNb: number;
  public maintenancePlanTableDisplayed: TreeNode[];
  public maintenancePlanTableFullScreenVisible: boolean;
  public maintenancePlanTableLeafNb: number;
  public maintenancePlanTableLoading: boolean;
  public maintenancePlanTableSelectedList: TreeNode[];
  public idRowToAssicateToWPWithWOCreation: number;
  public navigationLinkList: MenuItem[];
  public potentialEquivalent: string;
  public remaining: string;
  public potentialUnitList: MenuItem[];
  public potentialUnitSelected: string;
  public scope: ScheduleMaintenanceFormComponentInput;
  public searchAssetList: SelectItem[];
  public searchControlList: SelectItem[];
  public searchCounterList: SelectItem[];
  public searchCriteria: MaintenancePlanTableCriteria;
  public searchGlobalFilter: string;
  public searchGlobalFilterChanged: Subject<string>;
  public searchTaskGroupList: SelectItem[];
  public searchTaskList: SelectItem[];
  public searchTypeList: SelectItem[];
  public searchWorkPackageList: SelectItem[];
  public summaryTable: SummaryRow[];
  public summaryTableColList: TableColumn[];
  public summaryTableVisible: boolean;
  public taskCountersVisible: boolean;
  public topEquipmentCode: string;
  public tsnLabel: string;
  public workPackageCreationVisible: boolean;
  public workPackageList: BidmProjectDTO[];
  public workPackageListToAddVisible: boolean;
  public workPackageListToShowVisible: boolean;
  public workPackageToAdd: BidmProjectDTO | undefined;
  public workPackageStatusList: LabelValue<string>[];
  public workOrderSelected: BidmWorkOrderDTOId | undefined;

  public displayWorkOrderEdit: boolean = false;
  public workPackage: BidmProjectDTO;
  private projectId: string;
  public workOrderList: BidmWorkOrderDTO[];
  private maintenancePlanTable: TreeNode[];

  // Table of content ***********************************************************

  @ViewChild(ScheduleMaintenanceFormComponent.AIRCRAFT_ANCHOR_ID)
  public aircraftEltRef: ElementRef;

  @ViewChild(ScheduleMaintenanceFormComponent.UPCOMING_EVENTS_SUMMARY_ANCHOR_ID)
  public upcomingEventsSummaryEltRef: ElementRef;

  @ViewChild(ScheduleMaintenanceFormComponent.UPCOMING_EVENTS_ANCHOR_ID)
  public upcomingEventsEltRef: ElementRef;

  // ****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public scheduleMaintenanceFormService: ScheduleMaintenanceFormService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly workOrdersFormService: WorkOrdersFormService,
    private readonly wpFormService: WorkPackageFormService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = ScheduleMaintenanceFormComponent;
    this.controlConfigConstants = ControlConfigConstants;

    this.init();

    this.loadCsnLabel();
    this.loadTsnLabel();

    this.setGlobalFilter();
    this.setMaintenanceTableColList();
    this.setNavigationLinkList();
    this.setPotentialUnitList();
    this.setSearchControlList();
    this.setSearchTaskList();
    this.setSearchTypeList();
    this.setSummaryTableColList();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM;
  }

  public ngOnDestroy(): void {
    this.scheduleMaintenanceFormService.clearScheduleMaintenanceCache(this.topEquipmentCode).subscribe();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.remaining = '';
    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      this.scope = this.serializationService.deserialize(
        this.componentData.objectId as string
      ) as ScheduleMaintenanceFormComponentInput;
      this.topEquipmentCode = this.scope.equipmentCode;

      this.loadWorkPackageStatusList().subscribe((workPackageStatusList) => {
        this.workPackageStatusList = workPackageStatusList;

        this.load();
        this.loadAsset();
      });

      this.setDefaultSearchControlList();
      this.setDefaultSearchTaskList();
      this.setDefaultSearchTypeList();
    }
  }

  public get isAssetAircraft(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
    );
  }

  public get isAssetEngine(): boolean {
    return (
      !!this.asset &&
      !!this.asset.equipmentFunction &&
      this.asset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
    );
  }

  public get isAssetEquipment(): boolean {
    return !!this.asset && !this.isAssetAircraft && !this.isAssetEngine;
  }

  public addToWorkPackage(workPackage: BidmProjectDTO): void {
    this.workPackageToAdd = workPackage;
    const controlBaseMaintenanceSelectionParams = {
      topEquipmentCode: this.topEquipmentCode,
      selectedElementIdList: this.maintenancePlanTableSelectedList.map((elt) => elt.data._id)
    };
    this.scheduleMaintenanceFormService
      .controlBaseMaintenanceSelection(controlBaseMaintenanceSelectionParams)
      .subscribe((result) => {
        if (result) {
          this.scheduleMaintenanceFormService
            .controlEvolutionsInterdependenceForScheduleMaintenance(this.topEquipmentCode)
            .subscribe((interdependenceDataList) => {
              if (ListUtils.isNullOrEmpty(interdependenceDataList)) {
                this.onAcceptInterdependenceData();
              } else {
                this.interdependenceDataList = interdependenceDataList.map(
                  (interdependenceData) => interdependenceData.issueMessage
                );
                this.interdependenceDataVisible = true;
              }
            });
        }
      });
  }

  public addToWorkPackageAndDisplayWorkOrder(workPackage: BidmProjectDTO): void {
    this.workPackageToAdd = workPackage;
    this.scheduleMaintenanceFormService
      .controlEvolutionsInterdependenceForScheduleMaintenance(this.topEquipmentCode)
      .subscribe((interdependenceDataList) => {
        if (ListUtils.isNullOrEmpty(interdependenceDataList)) {
          this.onAcceptInterdependenceDataAndDisplayWOCreation();
        } else {
          this.interdependenceDataList = interdependenceDataList.map(
            (interdependenceData) => interdependenceData.issueMessage
          );
          this.interdependenceDataVisible = true;
        }
      });
  }

  public createWorkPackage(): void {
    this.scheduleMaintenanceFormService
      .controlEvolutionsInterdependenceForScheduleMaintenance(this.topEquipmentCode)
      .subscribe((interdependenceDataList) => {
        this.interdependenceDataList = interdependenceDataList.map(
          (interdependenceData) => interdependenceData.issueMessage
        );

        this.workPackageCreationVisible = true;
      });
  }

  public exportDueList(): void {
    const input: ExportDueListInput = {
      topEquipmentCode: this.topEquipmentCode,
      rootNodeIdList: this.maintenancePlanTableDisplayed.map((rootNode) => rootNode.data._id),
      nodeIdList: this.getNodeList()
    };
    this.scheduleMaintenanceFormService.exportDueList(input).subscribe((result) => {
      const adTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.AD);
      const aircraftTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.AIRCRAFT);
      const defectTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.DEFECT);
      const engineTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.ENGINE);
      const equipmentTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.EQUIPMENT);
      const groupCodeTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.GROUP_CODE);
      const llpTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.LLP);
      const sbTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.SB);
      const taskTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.TASK);
      const visitTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.VISIT);
      const fileNamePrefixKey = super.getTranslateKey(
        'fileNamePrefix',
        ScheduleMaintenanceFormComponent.EXPORT_TRANSLATE_KEY
      );
      const amgTypeKey = this.getTranslateKeyForEventType(MaintenancePlanTableTypeConstants.AMG);
      this.translateService
        .get([
          adTypeKey,
          aircraftTypeKey,
          defectTypeKey,
          engineTypeKey,
          equipmentTypeKey,
          groupCodeTypeKey,
          llpTypeKey,
          sbTypeKey,
          taskTypeKey,
          visitTypeKey,
          fileNamePrefixKey,
          amgTypeKey
        ])
        .subscribe((results) => {
          if (results) {
            const listToExport = ListUtils.orEmpty(result).map((element) => {
              const elementWithFormattedType = { ...element };
              elementWithFormattedType.upcomingEventType =
                results[this.getTranslateKeyForEventType(element.upcomingEventType)];

              return elementWithFormattedType;
            });

            const familyVariantCode = this.asset.familyVariantCode || '';
            const pn = this.asset.pnCode || '';
            const registration = this.asset.registration || '';
            const sn = this.asset.sn || '';
            const fileNameToExport =
              (results[fileNamePrefixKey] as string) +
              (StringUtils.isEmpty(familyVariantCode) ? '' : '__' + familyVariantCode) +
              (StringUtils.isEmpty(registration) ? '' : '__' + registration) +
              (StringUtils.isEmpty(pn) ? '' : '__' + pn) +
              (StringUtils.isEmpty(sn) ? '' : '__' + sn) +
              '__' +
              this.dateService.dateWithHourToString(new Date());

            const exportOpts = {
              header: [
                'assetText',
                'pn',
                'sn',
                'item',
                'functionCode',
                'upcomingEventType',
                'taskType',
                'upcomingEventText',
                'upcomingEventDescription',
                'confText',
                'eventId',
                'eventVersion',
                'visitCode',
                'visitVersion',
                'visitDesignation',
                'counterCode',
                'remaining',
                'remainingUnit',
                'remainingEquivalent',
                'remainingEquivalentUnit',
                'alertText',
                'nextTerm',
                'nextTermUnit',
                'periodicity',
                'periodicityUnit',
                'periodicityType',
                'status',
                'statusInfo',
                'postponementNotificationText',
                'nextWorkPackageText'
              ]
            };

            this.exportService.toExcel(
              listToExport,
              fileNameToExport,
              ScheduleMaintenanceFormComponent.EXPORT_TRANSLATE_KEY,
              exportOpts
            );
          }
        });
    });
  }

  public filter(searchTextValue: string) {
    this.searchGlobalFilterChanged.next(searchTextValue);
  }

  public filterWithCriteria(): void {
    this.load();
  }

  public isOmp(row: TreeNode): boolean {
    return row.data._obj.type === MaintenancePlanTableTypeConstants.TASK;
  }

  public onAcceptInterdependenceData(): void {
    this.interdependenceDataVisible = false;

    if (!!this.workPackageToAdd) {
      const params = {
        topEquipmentCode: this.topEquipmentCode,
        bidmProject: this.workPackageToAdd,
        selectedElementIdList: this.maintenancePlanTableSelectedList.map((elt) => elt.data._id)
      };
      this.scheduleMaintenanceFormService.addToWorkPackage(params).subscribe((result) => {
        if (result) {
          this.maintenancePlanTableSelectedList.forEach((row) => {
            this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(this.workPackageToAdd, row.data);
          });

          const selectedElementNb = this.maintenancePlanTableSelectedList.length;
          const message = selectedElementNb === 1 ? 'successOnAddElementToWP' : 'successOnAddElementsToWP';
          this.messageService.showSuccessMessage(this.getTranslateKey(message));
          this.maintenancePlanTableSelectedList = [];
          this.workPackageToAdd = undefined;
        }
      });
    }
  }

  public onAcceptInterdependenceDataAndDisplayWOCreation(): void {
    this.interdependenceDataVisible = false;

    if (!!this.workPackageToAdd) {
      const params = {
        topEquipmentCode: this.topEquipmentCode,
        bidmProject: this.workPackageToAdd,
        selectedElementIdList: [this.idRowToAssicateToWPWithWOCreation]
      };
      this.scheduleMaintenanceFormService.addToWorkPackage(params).subscribe((result) => {
        if (result) {
          this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(
            this.workPackageToAdd,
            this.findRowByid(this.idRowToAssicateToWPWithWOCreation).data
          );
          const selectedElementNb = 1;
          const message = selectedElementNb === 1 ? 'successOnAddElementToWP' : 'successOnAddElementsToWP';
          this.messageService.showSuccessMessage(this.getTranslateKey(message));
          this.maintenancePlanTableSelectedList = [];
          this.workPackageToAdd = undefined;
          this.displayWorkOrderScreenEdit();
        }
      });
    }
  }

  public onCloseLastTaskApplications(updated: boolean): void {
    if (updated) {
      this.load();
    }
  }

  public onCloseTaskCounters(updated: boolean): void {
    if (updated) {
      this.load();
    }
  }

  public onCreateWorkPackage(data: { workPackage: BidmProjectDTO; workcenter: number }): void {
    const params = {
      topEquipmentCode: this.topEquipmentCode,
      bidmProject: data.workPackage,
      selectedElementIdList: this.maintenancePlanTableSelectedList.map((elt) => elt.data._id),
      workCenter: data.workcenter
    };
    this.scheduleMaintenanceFormService.createWorkPackage(params).subscribe((newWorkPackage) => {
      this.workPackageList = [...this.workPackageList, newWorkPackage];
      this.setSearchWorkPackageList();

      this.maintenancePlanTableSelectedList.forEach((row) => {
        this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(newWorkPackage, row.data);
      });

      this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateWP'));

      this.maintenancePlanTableSelectedList = [];
    });
  }

  public onRejectInterdependenceData(): void {
    this.interdependenceDataVisible = false;
  }

  public openAsset(): void {
    if (this.isAssetAircraft) {
      this.openAircraft(this.topEquipmentCode);
    } else if (this.isAssetEngine) {
      this.openEngine(this.topEquipmentCode);
    } else if (this.isAssetEquipment) {
      this.openEquipment(this.topEquipmentCode);
    }
  }

  public openMaintenancePlanRow(row: MaintenancePlanRow): void {
    switch (row._obj.type) {
      case MaintenancePlanTableTypeConstants.AD:
        if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
          this.openAirworthinessDirective(row._obj.sbNumber, row._obj.sbRevisionNumber);
        }
        break;
      case MaintenancePlanTableTypeConstants.AIRCRAFT:
        if (row._obj.equipmentCode) {
          this.openAircraft(row._obj.equipmentCode);
        }
        break;
      case MaintenancePlanTableTypeConstants.DEFECT:
        if (row._obj.notificationCode) {
          this.openDefect(row._obj.notificationCode);
        }
        break;
      case MaintenancePlanTableTypeConstants.ENGINE:
        if (row._obj.equipmentCode) {
          this.openEngine(row._obj.equipmentCode);
        }
        break;
      case MaintenancePlanTableTypeConstants.EQUIPMENT:
        if (row._obj.equipmentCode) {
          this.openEquipment(row._obj.equipmentCode);
        }
        break;
      case MaintenancePlanTableTypeConstants.GROUP_CODE:
        // TODO
        break;
      case MaintenancePlanTableTypeConstants.LLP:
        if (row._obj.equipmentCode) {
          this.openEquipment(row._obj.equipmentCode);
        }
        break;
      case MaintenancePlanTableTypeConstants.SB:
        if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
          this.openServiceBulletin(row._obj.sbNumber, row._obj.sbRevisionNumber);
        }
        break;
      case MaintenancePlanTableTypeConstants.TASK:
        if (row._obj.taskCode && row._obj.taskVersion) {
          this.openTask(row._obj.taskCode, row._obj.taskVersion);
        }
        break;
      case MaintenancePlanTableTypeConstants.VISIT:
        if (row._obj.taskCode && row._obj.taskVersion) {
          this.openVisit(row._obj.taskCode, row._obj.taskVersion);
        }
        break;
      case MaintenancePlanTableTypeConstants.AMG:
        if (row._obj.sbNumber && row._obj.sbRevisionNumber) {
          this.openAdditionalMaintenanceGuideline(row._obj.sbNumber, row._obj.sbRevisionNumber);
        }
        break;
      default:
        break;
    }
  }

  public openWorkPackage(row: MaintenancePlanRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ wpId: (row._obj.nextWorkPackage as BidmProjectDTO).projectId })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public reload(): void {
    this.scheduleMaintenanceFormService.clearScheduleMaintenanceCache(this.topEquipmentCode).subscribe(() => {
      this.clearGlobalFilter();
      this.resetTableFilters();

      this.load();
    });
  }

  public removeFromWorkPackage(): void {
    const partialKey =
      this.maintenancePlanTableSelectedList.length === 1
        ? 'confirmRemoveElementFromWorkPackage'
        : 'confirmRemoveElementsFromWorkPackage';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialKey),
      accept: () => {
        this.maintenancePlanTableSelectedList.forEach((elt) => {
          const params = {
            topEquipmentCode: this.topEquipmentCode,
            selectedElementId: elt.data._id
          };
          this.scheduleMaintenanceFormService.removeFromWorkPackage(params).subscribe(() => {
            elt.data.nextWorkPackage = '';
            elt.data.nextWorkPackageTooltip = '';

            this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveFromWP'));
          });
        });

        this.maintenancePlanTableSelectedList = [];
      }
    });
  }

  public removeWorkPackage(workPackage: BidmProjectDTO): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmRemoveWorkPackage'),
      accept: () => {
        const input: BidmProjectDTOId = {
          projectId: workPackage.projectId as string
        };
        this.scheduleMaintenanceFormService.removeWorkPackage(input).subscribe(() => {
          this.workPackageList = this.workPackageList.filter((elt) => elt.projectId !== workPackage.projectId);

          this.updateMaintenancePlanTableAfterWorkPackageRemoval(this.maintenancePlanTable, workPackage);
          this.updateMaintenancePlanTableDisplayed(this.searchGlobalFilter);

          this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveWP'));
        });
      }
    });
  }

  public resetTableFilters(): void {
    this.searchCriteria = {
      controlList: [],
      taskList: [],
      typeList: []
    };
    this.searchGlobalFilter = '';

    this.setDefaultSearchControlList();
    this.setDefaultSearchTaskList();
    this.setDefaultSearchTypeList();
  }

  public showLastTaskApplications(): void {
    this.lastTaskApplicationsVisible = true;
  }

  public showMaintenancePlanTableCalendar(): void {
    this.maintenancePlanTableCalendarVisible = true;
  }

  public showMaintenancePlanTableFullScreen(): void {
    this.maintenancePlanTableFullScreenVisible = true;
  }

  public showTaskCounters(): void {
    this.taskCountersVisible = true;
  }

  private getNodeList(): number[] {
    return this.maintenancePlanTableDisplayed
      .filter((rootNode) => rootNode.children)
      .map((rootNode) => {
        return rootNode.children as TreeNode[];
      })
      .reduce((acc: TreeNode[], x: TreeNode[]) => acc.concat(x), [])
      .map((node) => {
        return node.data._id;
      });
  }

  private clearFilterAsset(): void {
    this.searchCriteria.asset = undefined;
    this.load();
  }

  private clearFilterControl(controlToRemove: string): void {
    this.searchCriteria.controlList = this.searchCriteria.controlList.filter((control) => control !== controlToRemove);
    this.load();
  }

  private clearFilterCounterValue(): void {
    this.searchCriteria.counterValue = undefined;
    this.load();
  }

  private clearFilterCounterUnit(): void {
    this.searchCriteria.counterUnit = undefined;
    this.load();
  }

  private clearFilterCycles(): void {
    this.searchCriteria.cycles = undefined;
    this.load();
  }

  private clearFilterDate(): void {
    this.searchCriteria.date = undefined;
    this.load();
  }

  private clearFilterHours(): void {
    this.searchCriteria.hours = undefined;
    this.load();
  }

  private clearFilterTask(taskToRemove: MaintenancePlanTableTaskCriteria): void {
    this.searchCriteria.taskList = this.searchCriteria.taskList.filter((task) => task !== taskToRemove);
    this.load();
  }

  private clearFilterTaskGroup(): void {
    this.searchCriteria.taskGroup = undefined;
    this.load();
  }

  private clearFilterType(typeToRemove: MaintenancePlanTableTypeCriteria): void {
    this.searchCriteria.typeList = this.searchCriteria.typeList.filter((type) => type !== typeToRemove);
    this.load();
  }

  private clearFilterWorkPackage(): void {
    this.searchCriteria.workPackage = undefined;
    this.load();
  }

  private clearGlobalFilter(): void {
    this.searchGlobalFilter = '';
  }

  private clearTable(): void {
    this.maintenancePlanTable = [];
    this.maintenancePlanTableDisplayed = [];
    this.maintenancePlanTableSelectedList = [];

    this.initSummaryTable();
  }

  private createMaintenancePlanRow(element: MaintenancePlanStructureElementOutput): MaintenancePlanRow {
    const remainingEquivalent = StringUtils.isNullOrEmpty(element.remainingEquivalent)
      ? element.remaining
      : element.remainingEquivalent;
    const remainingEquivalentTooltip = StringUtils.isNullOrEmpty(element.remainingEquivalent)
      ? StringUtils.orEmpty(element.remainingEquivalentTooltip)
      : [element.remainingEquivalentTooltip, element.remaining]
          .filter((elt) => !StringUtils.isNullOrEmpty(elt))
          .join('\n');

    const maintenancePlanRow: MaintenancePlanRow = {
      remainingEquivalentTooltip,
      firstColumn: StringUtils.orEmpty(element.firstColumn),
      firstColumnTooltip: StringUtils.orEmpty(element.firstColumnTooltip),
      alert: StringUtils.orEmpty(element.alertIcon),
      alertTooltip: StringUtils.orEmpty(element.alertTooltip),
      asset: StringUtils.orEmpty(element.assetText),
      counterAlert: StringUtils.orEmpty(element.counterAlertIcon),
      counterAlertTooltip: StringUtils.orEmpty(element.counterAlertTooltip),
      description: StringUtils.orEmpty(element.description),
      nextTerm: StringUtils.orEmpty(element.nextTerm),
      nextWorkPackage: '',
      nextWorkPackageTooltip: '',
      period: StringUtils.orEmpty(element.period),
      postponement: StringUtils.orEmpty(element.postponementNotificationText),
      remaining: StringUtils.orEmpty(element.remaining),
      remainingEquivalent: StringUtils.orEmpty(remainingEquivalent),
      remainingEquivalentIcon: StringUtils.orEmpty(element.remainingEquivalentIcon),
      status: StringUtils.orEmpty(element.status),
      tolerance: StringUtils.orEmpty(element.tolerance),
      type: '',
      usageCounterExplanation: StringUtils.orEmpty(element.usageCounterExplanation),
      _id: element.id,
      _obj: element,
      _isActiveWorkPackageBtn: false
    };

    this.setMaintenancePlanRowType(element, maintenancePlanRow);
    this.setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(element.nextWorkPackage, maintenancePlanRow);

    return maintenancePlanRow;
  }

  private createMaintenancePlanTreeNode(baseElement: MaintenancePlanStructureElementOutput): TreeNode {
    const node: TreeNode = {
      data: this.createMaintenancePlanRow(baseElement),
      expanded: false,
      children: ListUtils.orEmpty(baseElement.children)
        .map((childElement) => this.createMaintenancePlanTreeNode(childElement))
        .sort((n1, n2) => {
          const alertN1: string = n1.data.alert;
          const alertN2: string = n2.data.alert;
          const typeN1: string = n1.data.type;
          const typeN2: string = n2.data.type;
          if (alertN1 === alertN2) {
            return typeN1.localeCompare(typeN2);
          } else if (
            (alertN1 === ControlConfigConstants.ICON_RED && alertN2 === ControlConfigConstants.ICON_YELLOW) ||
            (alertN1 === ControlConfigConstants.ICON_RED && alertN2 === ControlConfigConstants.ICON_GREEN) ||
            (alertN1 === ControlConfigConstants.ICON_YELLOW && alertN2 === ControlConfigConstants.ICON_GREEN)
          ) {
            return -1;
          } else {
            return 1;
          }
        })
    };

    return node;
  }

  private displayFilterActivatedList(): void {
    this.filterActivatedList = [];

    const filterControlActivatedList = this.searchCriteria.controlList
      .filter((control) =>
        this.searchControlList.some((elt) => elt.value === control && !StringUtils.isNullOrEmpty(elt.label))
      )
      .map((control) => {
        const selectedControl = this.searchControlList.find((elt) => elt.value === control) as SelectItem;

        return {
          action: this.clearFilterControl.bind(this, control),
          value: selectedControl.label as string
        };
      });
    this.filterActivatedList = [...this.filterActivatedList, ...filterControlActivatedList];

    const filterTaskActivatedList = this.searchCriteria.taskList
      .filter((task) => this.searchTaskList.some((elt) => elt.value === task && !StringUtils.isNullOrEmpty(elt.label)))
      .map((task) => {
        const selectedTask = this.searchTaskList.find((elt) => elt.value === task) as SelectItem;

        return {
          action: this.clearFilterTask.bind(this, task),
          value: selectedTask.label as string
        };
      });
    this.filterActivatedList = [...this.filterActivatedList, ...filterTaskActivatedList];

    const filterTypeActivatedList = this.searchCriteria.typeList
      .filter((type) => this.searchTypeList.some((elt) => elt.value === type && !StringUtils.isNullOrEmpty(elt.label)))
      .map((type) => {
        const selectedType = this.searchTypeList.find((elt) => elt.value === type) as SelectItem;

        return {
          action: this.clearFilterType.bind(this, type),
          value: selectedType.label as string
        };
      });
    this.filterActivatedList = [...this.filterActivatedList, ...filterTypeActivatedList];

    if (this.searchCriteria.taskGroup) {
      const chips = {
        action: this.clearFilterTaskGroup.bind(this),
        value: this.searchCriteria.taskGroup
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.asset) {
      const chips = {
        action: this.clearFilterAsset.bind(this),
        value: this.searchCriteria.asset
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.workPackage) {
      const chips = {
        action: this.clearFilterWorkPackage.bind(this),
        value: this.searchCriteria.workPackage
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.counterUnit) {
      const chips = {
        action: this.clearFilterCounterUnit.bind(this),
        value: this.searchCriteria.counterUnit
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.hours) {
      const chips = {
        action: this.clearFilterHours.bind(this),
        value: this.searchCriteria.hours,
        label: `${this.translateService.instant(this.getTranslateKey('hours'))} <=`
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.cycles) {
      const chips = {
        action: this.clearFilterCycles.bind(this),
        value: this.searchCriteria.cycles,
        label: `${this.translateService.instant(this.getTranslateKey('cycles'))} <=`
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.date) {
      const chips = {
        action: this.clearFilterDate.bind(this),
        value: this.dateService.dateToString(this.searchCriteria.date),
        label: `${this.translateService.instant(this.getTranslateKey('date'))} <=`
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }

    if (this.searchCriteria.counterValue && this.searchCriteria.counterUnit) {
      const chips = {
        action: this.clearFilterCounterValue.bind(this),
        label: `${this.searchCriteria.counterUnit} <=`,
        value: this.searchCriteria.counterValue
      };
      this.filterActivatedList = [...this.filterActivatedList, chips];
    }
  }

  private getAllMaintenancePlanTableLeaf(table: TreeNode[]): MaintenancePlanRow[] {
    let result: MaintenancePlanRow[] = [];

    let queue = _cloneDeep(table);
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as TreeNode;

      if (ListUtils.isNullOrEmpty(first.children)) {
        result = [...result, first.data];
      } else {
        queue = [...queue, ...(first.children as TreeNode[])];
      }
    }

    return result;
  }

  private getMaintenancePlanRowListByType(type: number): MaintenancePlanRow[] {
    return this.getAllMaintenancePlanTableLeaf(this.maintenancePlanTableDisplayed).filter(
      (row) => row._obj.type === type
    );
  }

  private getTranslateKeyForEventType(typeCode: number): string {
    let type: string;
    switch (typeCode) {
      case MaintenancePlanTableTypeConstants.AD:
        type = 'AD';
        break;
      case MaintenancePlanTableTypeConstants.AIRCRAFT:
        type = 'AIRCRAFT';
        break;
      case MaintenancePlanTableTypeConstants.DEFECT:
        type = 'DEFECT';
        break;
      case MaintenancePlanTableTypeConstants.ENGINE:
        type = 'ENGINE';
        break;
      case MaintenancePlanTableTypeConstants.EQUIPMENT:
        type = 'EQUIPMENT';
        break;
      case MaintenancePlanTableTypeConstants.GROUP_CODE:
        type = 'GROUP_CODE';
        break;
      case MaintenancePlanTableTypeConstants.LLP:
        type = 'LLP';
        break;
      case MaintenancePlanTableTypeConstants.SB:
        type = 'SB';
        break;
      case MaintenancePlanTableTypeConstants.TASK:
        type = 'TASK';
        break;
      case MaintenancePlanTableTypeConstants.VISIT:
        type = 'VISIT';
        break;
      case MaintenancePlanTableTypeConstants.AMG:
        type = 'AMG';
        break;
      default:
        type = '';
        break;
    }

    return this.getTranslateKey(type.replace(/_/g, '').toLowerCase());
  }

  private init(): void {
    this.componentContext = '';

    this.airworthinessStatus = '';
    this.asset = {};
    this.assetCsn = '';
    // this.assetEisDate = '';
    this.assetStatus = '';
    this.assetStructure = [];
    this.assetTsn = '';
    this.csnLabel = '';
    this.filterActivatedList = [];
    this.filtersVisible = false;
    this.interdependenceDataList = [];
    this.interdependenceDataVisible = false;
    this.lastTaskApplicationsVisible = false;
    this.maintenancePlanTableCalendarVisible = false;
    this.maintenancePlanTable = [];
    this.maintenancePlanTableDisplayed = [];
    this.maintenancePlanTableDisplayedLeafNb = 0;
    this.maintenancePlanTableFullScreenVisible = false;
    this.maintenancePlanTableLeafNb = 0;
    this.maintenancePlanTableSelectedList = [];
    this.potentialEquivalent = '';
    this.potentialUnitSelected = BireUnitMeasureConstants.HOUR;
    this.searchAssetList = [];
    this.searchCounterList = [];
    this.searchGlobalFilter = '';
    this.searchTaskGroupList = [];
    this.searchWorkPackageList = [];
    this.taskCountersVisible = false;
    this.tsnLabel = '';
    this.workPackageCreationVisible = false;
    this.workPackageList = [];
    this.workPackageListToAddVisible = false;
    this.workPackageListToShowVisible = false;
    this.workPackageToAdd = undefined;

    this.clearTable();
    this.resetTableFilters();
  }

  private initSummaryTable(): void {
    this.summaryTableVisible = false;
    this.summaryTable = [
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_OMP_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_DEFECT_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AD_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_SB_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_LLP_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      },
      {
        category: ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AMG_LABEL,
        nok: 0,
        ok: 0,
        warning: 0
      }
    ];
  }

  private load(): void {
    if (!!this.topEquipmentCode) {
      this.maintenancePlanTableLoading = true;

      this.clearTable();
      this.displayFilterActivatedList();

      this.summaryTableVisible = true;

      this.scheduleMaintenanceFormService
        .initializeScheduleMaintenance(this.topEquipmentCode)
        .subscribe((assetStructure) => {
          this.assetStructure = ListUtils.orEmpty(assetStructure);

          this.loadSearchCounterList();
          this.loadSearchTaskGroupList();

          // Maintenance plan structure
          let onlyTaskOnCondition: boolean | undefined;
          let showActiveTasksChecked: boolean | undefined;
          let showInactiveTasksChecked: boolean | undefined;
          if (!!this.searchCriteria.taskList) {
            onlyTaskOnCondition =
              this.searchCriteria.taskList.includes(MaintenancePlanTableTaskCriteria.OnCondition) &&
              this.searchCriteria.taskList.length === 1;
            showActiveTasksChecked = this.searchCriteria.taskList.includes(
              MaintenancePlanTableTaskCriteria.ActiveTasks
            );
            showInactiveTasksChecked = this.searchCriteria.taskList.includes(
              MaintenancePlanTableTaskCriteria.InactiveTasks
            );
          }
          const params = {
            onlyTaskOnCondition,
            showActiveTasksChecked,
            showInactiveTasksChecked,
            areDeletedTasksHidden: false,
            counterCodeSelected: this.searchCriteria.counterUnit,
            filterActivated: true,
            modeScheduleWPVisibility: true,
            targetCounterValue: this.searchCriteria.counterValue,
            targetCycles: this.searchCriteria.cycles,
            targetDate: this.searchCriteria.date,
            targetHours: this.searchCriteria.hours,
            taskGroupCodeSelected: this.searchCriteria.taskGroup,
            topEquipmentCode: this.topEquipmentCode,
            unitCodeEquivalentSelected: this.potentialUnitSelected
          };
          this.scheduleMaintenanceFormService
            .initializeMaintenancePlanStructure(params)
            .subscribe((maintenancePlanStructure) => {
              this.loadAssetCsn();
              this.loadAssetTsn();

              if (
                !!maintenancePlanStructure &&
                !ListUtils.isEmpty(maintenancePlanStructure) &&
                !!maintenancePlanStructure[0].remainingEquivalentInOriginalUnit
              ) {
                this.remaining = maintenancePlanStructure[0].remainingEquivalentInOriginalUnit;
              }

              this.loadPotentialEquivalentValues();

              this.maintenancePlanTable = maintenancePlanStructure.map((element) =>
                this.createMaintenancePlanTreeNode(element)
              );

              this.maintenancePlanTableLeafNb = this.getAllMaintenancePlanTableLeaf(this.maintenancePlanTable).length;

              this.updateMaintenancePlanTableDisplayed();

              this.maintenancePlanTableLoading = false;

              this.setSearchAssetList();
            });

          // Work packages
          this.scheduleMaintenanceFormService
            .workPackageList({ topEquipmentCode: this.topEquipmentCode })
            .subscribe((result) => {
              this.workPackageList = ListUtils.orEmpty(result);
              this.setSearchWorkPackageList();
            });
        });
    }
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.topEquipmentCode
    };
    this.scheduleMaintenanceFormService.getEquipment(input).subscribe((result) => {
      this.asset = result;

      if (!!this.asset) {
        // this.setAssetEisDate();
        this.setAssetStatus();
      }

      this.setComponentContextForAsset();
    });
  }

  private loadAssetCsn(): void {
    this.scheduleMaintenanceFormService.getAssetCsn(this.topEquipmentCode).subscribe((result) => {
      this.assetCsn = StringUtils.orEmpty(result);
    });
  }

  private loadAssetTsn(): void {
    this.scheduleMaintenanceFormService.getAssetTsn(this.topEquipmentCode).subscribe((result) => {
      this.assetTsn = StringUtils.orEmpty(result);
    });
  }

  private loadCsnLabel(): void {
    this.scheduleMaintenanceFormService.getCsnLabelForAirworthinessControl().subscribe((result) => {
      this.csnLabel = StringUtils.orEmpty(result);
    });
  }

  private loadPotentialEquivalentValues(): void {
    this.scheduleMaintenanceFormService.getPotentialEquivalentValues(this.topEquipmentCode).subscribe((result) => {
      if (!ListUtils.isNullOrEmpty(result)) {
        this.potentialEquivalent = `${Math.min(...result)} ${this.potentialUnitSelected} / ${this.remaining}`;
      }
    });
  }

  private loadSearchCounterList(): void {
    this.scheduleMaintenanceFormService.counterListFromMaintenancePlan(this.topEquipmentCode).subscribe((result) => {
      if (!!result) {
        this.searchCounterList = Object.entries(result).map((list) => {
          return {
            label: list[1],
            value: list[0]
          };
        });
      }
    });
  }

  private loadSearchTaskGroupList(): void {
    this.scheduleMaintenanceFormService.taskGroupListFromMaintenancePlan(this.topEquipmentCode).subscribe((result) => {
      if (!!result) {
        this.searchTaskGroupList = Object.entries(result).map((list) => {
          return {
            label: list[1],
            value: list[0]
          };
        });
      }
    });
  }

  private loadTsnLabel(): void {
    this.scheduleMaintenanceFormService.getTsnLabelForAirworthinessControl().subscribe((result) => {
      this.tsnLabel = StringUtils.orEmpty(result);
    });
  }

  private loadWorkPackageStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP);
  }

  private openAircraft(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_AIRCRAFT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAirworthinessControl(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      warehouse: this.scope.warehouse,
      equipmentCodeList: [this.scope.equipmentCode],
      familyVariantList: this.scope.familyVariantCode ? [this.scope.familyVariantCode] : undefined,
      functionList: this.scope.function ? [this.scope.function] : undefined
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAirworthinessDirective(sbNumber: string, sbRevisionNumber: string): void {
    const objectId: BireSbDTOId = {
      sbNumber,
      sbRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_AIRWORTHINESS_DIRECTIVE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAppliedConfigurationControl(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.topEquipmentCode]
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_CONFIGURATION_CONTROL,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetMaintenancePlan(): void {
    const objectId: BidoEquipmentDTOId = {
      equipmentCode: this.topEquipmentCode
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: 'AssetMaintenancePlanComponent', // TODO
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAssetReview(): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [this.asset.equipmentCode as string],
      familyVariantList: this.asset.familyVariantCode ? [this.asset.familyVariantCode] : undefined
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Write,
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openDefect(notificationCode: string): void {
    const objectId: BidoNotificationDTOId = {
      notificationCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_DEFECT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEngine(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_ENGINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openEquipment(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openServiceBulletin(sbNumber: string, sbRevisionNumber: string): void {
    const objectId: BireSbDTOId = {
      sbNumber,
      sbRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_SBAD_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openAdditionalMaintenanceGuideline(sbNumber: string, sbRevisionNumber: string): void {
    const objectId: BireSbDTOId = {
      sbNumber,
      sbRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_ADDITIONAL_MAINTENANCE_GUIDELINE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openTask(taskCode: string, taskVersion: string): void {
    const objectId: BireTaskDTOId = {
      taskCode,
      taskVersion
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_TASK_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openVisit(taskCode: string, taskVersion: string): void {
    const objectId: BireTaskDTOId = {
      taskCode,
      taskVersion
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.ENG_VISIT_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private resetSummaryTableRow(index: number): void {
    this.summaryTable[index].nok = 0;
    this.summaryTable[index].ok = 0;
    this.summaryTable[index].warning = 0;
  }

  private setAirworthinessStatus(): void {
    let worstFlag = ControlConfigConstants.ICON_GREEN;

    for (const element of this.maintenancePlanTable) {
      if (element.data.alert === ControlConfigConstants.ICON_RED) {
        worstFlag = ControlConfigConstants.ICON_RED;
        break;
      } else if (
        element.data.alert === ControlConfigConstants.ICON_YELLOW &&
        worstFlag === ControlConfigConstants.ICON_GREEN
      ) {
        worstFlag = ControlConfigConstants.ICON_YELLOW;
      }
    }

    this.airworthinessStatus = worstFlag;
  }

  // private setAssetEisDate(): void {
  //   this.assetEisDate = this.dateService.dateToString(this.asset.eisDate);
  // }

  private setAssetStatus(): void {
    if (this.isAssetAircraft) {
      const familyVariantInput = AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY;
      this.scheduleMaintenanceFormService.getStatusMap(familyVariantInput).subscribe((results) => {
        const status = ListUtils.orEmpty(results).find((elt) => elt.value === this.asset.operationalStatus);
        this.assetStatus = status ? status.label : '';
      });
    } else {
      this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
        const status = ListUtils.orEmpty(results).find((elt) => elt.value === this.asset.operationalStatus);
        this.assetStatus = status ? status.label : '';
      });
    }
  }

  private setComponentContextForAsset(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP).subscribe((result) => {
      if (this.asset) {
        if (this.isAssetAircraft) {
          const selectedFunction = ListUtils.orEmpty(result).find(
            (elt) => elt.value === (this.asset as BidoEquipmentDTO).equipmentFunction
          );
          const aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
          this.componentContext = [StringUtils.orEmpty(aircraftLabel), StringUtils.orEmpty(this.asset.registration)]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' ');
        } else {
          this.componentContext = [
            StringUtils.orEmpty(this.asset.equipmentDesignation),
            StringUtils.orEmpty(this.asset.sn)
          ]
            .filter((s) => !StringUtils.isEmpty(s))
            .join(' / ');
        }

        this.displayComponentContext(this.componentContext, this.isCreateOpenMode);
      }
    });
  }

  private setDefaultSearchControlList(): void {
    this.searchCriteria.controlList = [
      ControlConfigConstants.ICON_GREEN,
      ControlConfigConstants.ICON_YELLOW,
      ControlConfigConstants.ICON_RED
    ];
  }

  private setDefaultSearchTaskList(): void {
    this.searchCriteria.taskList = [
      MaintenancePlanTableTaskCriteria.ActiveTasks,
      MaintenancePlanTableTaskCriteria.OnCondition
    ];
  }

  private setDefaultSearchTypeList(): void {
    this.searchCriteria.typeList = [
      MaintenancePlanTableTypeCriteria.AD,
      MaintenancePlanTableTypeCriteria.Defect,
      MaintenancePlanTableTypeCriteria.LLP,
      MaintenancePlanTableTypeCriteria.OMP,
      MaintenancePlanTableTypeCriteria.SB,
      MaintenancePlanTableTypeCriteria.AMG
    ];
  }

  private setGlobalFilter(): void {
    this.clearGlobalFilter();
    this.searchGlobalFilterChanged = new Subject<string>();
    this.searchGlobalFilterChanged
      .pipe(
        debounceTime(ScheduleMaintenanceFormComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.updateMaintenancePlanTableDisplayed(searchTextValue);
      });
  }

  private setMaintenancePlanRowNextWorkPackageAndDisplayBtnADDWP(
    workPackage: BidmProjectDTO | undefined,
    maintenancePlanRow: MaintenancePlanRow
  ): void {
    if (
      !!workPackage &&
      ObjectUtils.isDefined(workPackage.projectId) &&
      ObjectUtils.isDefined(workPackage.projectNumber)
    ) {
      maintenancePlanRow._obj.nextWorkPackage = workPackage;

      const selectedStatus = this.workPackageStatusList.find((status) => status.value === workPackage.statusState);
      const workPackageStatus = !!selectedStatus ? selectedStatus.label : '';
      const workPackageDate = this.dateService.dateToString(workPackage.projectStartDate);
      let tooltip = `WP n° ${workPackage.projectNumber}`;
      if (!StringUtils.isEmpty(workPackageDate) || !StringUtils.isEmpty(workPackageStatus)) {
        tooltip += ' (';
        tooltip += StringUtils.isEmpty(workPackageStatus) ? '' : workPackageStatus;
        tooltip += !StringUtils.isEmpty(workPackageDate) && !StringUtils.isEmpty(workPackageStatus) ? ', ' : '';
        tooltip += StringUtils.isEmpty(workPackageDate) ? '' : workPackageDate;
        tooltip += ')';
      }

      maintenancePlanRow.nextWorkPackage = `${workPackage.projectNumber}`;
      maintenancePlanRow.nextWorkPackageTooltip = tooltip;
    } else {
      maintenancePlanRow.nextWorkPackage = '';
      maintenancePlanRow.nextWorkPackageTooltip = '';
    }
    this.setMaintenancePlanRowDisplayBtnADDWP(maintenancePlanRow);
  }

  private setMaintenancePlanRowDisplayBtnADDWP(maintenancePlanRow: MaintenancePlanRow): void {
    maintenancePlanRow._displayBtnADDWP = maintenancePlanRow.nextWorkPackage === '';
  }

  private setMaintenancePlanRowType(
    element: MaintenancePlanStructureElementOutput,
    maintenancePlanRow: MaintenancePlanRow
  ): void {
    if (element.type) {
      const typeKey = this.getTranslateKeyForEventType(element.type);
      this.translateService.get(typeKey).subscribe((translatedKey) => {
        maintenancePlanRow.type = StringUtils.orEmpty(translatedKey);
        maintenancePlanRow._isTypeEquipment =
          element.type === MaintenancePlanTableTypeConstants.EQUIPMENT ||
          element.type === MaintenancePlanTableTypeConstants.ENGINE;
      });
    }
  }

  private setMaintenanceTableColList(): void {
    this.maintenancePlanTableColList = [
      { field: 'alert', alignment: 'center', width: '6%' },
      { field: 'firstColumn', alignment: 'left', width: '17%' },
      { field: 'type', alignment: 'left', width: '5%' },
      { field: 'remainingEquivalent', alignment: 'left', width: '13%' },
      { field: 'remainingTime', alignment: 'left', width: '13%' },
      { field: 'nextTerm', alignment: 'left', width: '13%' },
      { field: 'nextWorkPackage', alignment: 'left', width: '11%' },
      { field: 'period', alignment: 'left', width: '15%' },
      { field: 'tolerance', alignment: 'left', width: '10%' },
      { field: 'postponement', alignment: 'left', width: '10%' }
    ];
  }

  private setNavigationLinkList(): void {
    const airworthinessControlKey = this.getTranslateKey('airworthinessStatus');
    const appliedConfigurationControlKey = this.getTranslateKey('appliedConfigurationControl');
    const assetMaintenancePlanKey = this.getTranslateKey('assetMaintenancePlan');
    const assetReviewKey = this.getTranslateKey('assetReview');
    this.translateService
      .get([airworthinessControlKey, appliedConfigurationControlKey, assetMaintenancePlanKey, assetReviewKey])
      .subscribe((results) => {
        const airworthinessControlLabel = results ? results[airworthinessControlKey] : 'Airworthiness Status';
        const appliedConfigurationControlLabel = results
          ? results[appliedConfigurationControlKey]
          : 'Applied Configuration Control';
        const assetMaintenancePlanLabel = results ? results[assetMaintenancePlanKey] : 'Asset Maintenance Plan';
        const assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';

        this.navigationLinkList = [
          {
            label: airworthinessControlLabel,
            command: () => {
              this.openAirworthinessControl();
            }
          },
          {
            label: appliedConfigurationControlLabel,
            command: () => {
              this.openAppliedConfigurationControl();
            }
          },
          {
            label: assetMaintenancePlanLabel,
            command: () => {
              this.openAssetMaintenancePlan();
            }
          },
          {
            label: assetReviewLabel,
            command: () => {
              this.openAssetReview();
            }
          }
        ];
      });
  }

  private setPotentialUnitList(): void {
    const daysKey = this.getTranslateKey('days');
    const cyclesKey = this.getTranslateKey('cycles');
    const hoursKey = this.getTranslateKey('hours');
    this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe((results) => {
      const daysLabel = results ? results[daysKey] : 'Days';
      const cyclesLabel = results ? results[cyclesKey] : 'Cycles';
      const hoursLabel = results ? results[hoursKey] : 'Hours';

      this.potentialUnitList = [
        {
          label: hoursLabel,
          command: () => {
            this.updatePotentialUnit(BireUnitMeasureConstants.HOUR);
          }
        },
        {
          label: cyclesLabel,
          command: () => {
            this.updatePotentialUnit(BireUnitMeasureConstants.CYCLE);
          }
        },
        {
          label: daysLabel,
          command: () => {
            this.updatePotentialUnit(BireUnitMeasureConstants.DAY);
          }
        }
      ];
    });
  }

  private setSearchAssetList(): void {
    this.searchAssetList = this.maintenancePlanTable
      .filter((elt) => !!elt.data)
      .map((elt) => {
        return {
          label: (elt.data as MaintenancePlanRow).firstColumn,
          value: (elt.data as MaintenancePlanRow).firstColumn
        };
      });
  }

  private setSearchControlList(): void {
    const alertNokKey = this.getTranslateKey('alertNok');
    const alertOkKey = this.getTranslateKey('alertOk');
    const alertWarningKey = this.getTranslateKey('alertWarning');
    this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe((results) => {
      const alertNokLabel = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel = results ? results[alertOkKey] : 'OK';
      const alertWarningLabel = results ? results[alertWarningKey] : 'WARNING';

      this.searchControlList = [
        {
          label: alertOkLabel,
          value: ControlConfigConstants.ICON_GREEN
        },
        {
          label: alertWarningLabel,
          value: ControlConfigConstants.ICON_YELLOW
        },
        {
          label: alertNokLabel,
          value: ControlConfigConstants.ICON_RED
        }
      ];
    });
  }

  private setSearchTaskList(): void {
    const activeTasksKey = this.getTranslateKey('activeTasks');
    const inactiveTasksKey = this.getTranslateKey('inactiveTasks');
    const onConditionKey = this.getTranslateKey('onCondition');
    this.translateService.get([activeTasksKey, inactiveTasksKey, onConditionKey]).subscribe((results) => {
      const activeTasksLabel = results ? results[activeTasksKey] : 'Active Tasks';
      const inactiveTasksLabel = results ? results[inactiveTasksKey] : 'Inactive Tasks';
      const onConditionLabel = results ? results[onConditionKey] : 'On Condition';

      this.searchTaskList = [
        {
          label: activeTasksLabel,
          value: MaintenancePlanTableTaskCriteria.ActiveTasks
        },
        {
          label: inactiveTasksLabel,
          value: MaintenancePlanTableTaskCriteria.InactiveTasks
        },
        {
          label: onConditionLabel,
          value: MaintenancePlanTableTaskCriteria.OnCondition
        }
      ];
    });
  }

  private setSearchTypeList(): void {
    const adKey = this.getTranslateKey('ad');
    const defectKey = this.getTranslateKey('defect');
    const llpKey = this.getTranslateKey('llp');
    const ompKey = this.getTranslateKey('omp');
    const sbKey = this.getTranslateKey('sb');
    const amgKey = this.getTranslateKey('amg');
    this.translateService.get([adKey, defectKey, llpKey, ompKey, sbKey, amgKey]).subscribe((results) => {
      const adLabel = results ? results[adKey] : 'AD';
      const defectLabel = results ? results[defectKey] : 'Defect';
      const llpLabel = results ? results[llpKey] : 'LLP';
      const ompLabel = results ? results[ompKey] : 'OMP';
      const sbLabel = results ? results[sbKey] : 'SB';
      const amgLabel = results ? results[amgKey] : 'AMG';

      this.searchTypeList = [
        {
          label: adLabel,
          value: MaintenancePlanTableTypeCriteria.AD
        },
        {
          label: sbLabel,
          value: MaintenancePlanTableTypeCriteria.SB
        },
        {
          label: defectLabel,
          value: MaintenancePlanTableTypeCriteria.Defect
        },
        {
          label: llpLabel,
          value: MaintenancePlanTableTypeCriteria.LLP
        },
        {
          label: ompLabel,
          value: MaintenancePlanTableTypeCriteria.OMP
        },
        {
          label: amgLabel,
          value: MaintenancePlanTableTypeCriteria.AMG
        }
      ];
    });
  }

  private setSearchWorkPackageList(): void {
    this.searchWorkPackageList = this.workPackageList
      .map((elt) => {
        const workPackageNumber = `${elt.projectNumber}`;

        return {
          label: workPackageNumber,
          value: workPackageNumber
        };
      })
      .sort((w1, w2) => w1.label.localeCompare(w2.label));
  }

  private setSummaryTableColList(): void {
    this.summaryTableColList = [
      { field: 'category', alignment: 'left', width: '40%' },
      { field: 'ok', alignment: 'center', width: '20%' },
      { field: 'warning', alignment: 'center', width: '20%' },
      { field: 'nok', alignment: 'center', width: '20%' }
    ];
  }

  private treeNodeMatchFilters(node: TreeNode, searchText?: string): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.treeNodeMatchFilters(child, searchText));
    }

    const nodeData = node.data as MaintenancePlanRow;

    // Control
    let controlMatch = true;
    if (!ListUtils.isNullOrEmpty(this.searchCriteria.controlList)) {
      const nodeControl = nodeData.alert;
      const controlList = this.searchCriteria.controlList as ControlConfigConstants[];

      controlMatch = controlList.includes(nodeControl);
    }

    // Description
    const descriptionMatch =
      StringUtils.isNullOrEmpty(searchText) || nodeData.description.toLowerCase().includes(searchText as string);

    // First column
    const firstColumnMatch =
      StringUtils.isNullOrEmpty(searchText) || nodeData.firstColumn.toLowerCase().includes(searchText as string);

    // Type
    let typeMatch = true;
    if (!ListUtils.isNullOrEmpty(this.searchCriteria.typeList)) {
      const nodeType = nodeData._obj.type;
      const typeList = this.searchCriteria.typeList as MaintenancePlanTableTypeCriteria[];

      typeMatch =
        (typeList.includes(MaintenancePlanTableTypeCriteria.AD) && nodeType === MaintenancePlanTableTypeConstants.AD) ||
        (typeList.includes(MaintenancePlanTableTypeCriteria.Defect) &&
          nodeType === MaintenancePlanTableTypeConstants.DEFECT) ||
        (typeList.includes(MaintenancePlanTableTypeCriteria.LLP) &&
          nodeType === MaintenancePlanTableTypeConstants.LLP) ||
        (typeList.includes(MaintenancePlanTableTypeCriteria.OMP) &&
          nodeType === MaintenancePlanTableTypeConstants.TASK) ||
        (typeList.includes(MaintenancePlanTableTypeCriteria.SB) && nodeType === MaintenancePlanTableTypeConstants.SB) ||
        (typeList.includes(MaintenancePlanTableTypeCriteria.AMG) && nodeType === MaintenancePlanTableTypeConstants.AMG);
    }

    // Work package
    const workPackageMatch =
      StringUtils.isNullOrEmpty(this.searchCriteria.workPackage) ||
      nodeData.nextWorkPackage === this.searchCriteria.workPackage;

    return (
      ListUtils.orEmpty(node.children).length > 0 ||
      ((descriptionMatch || firstColumnMatch) && controlMatch && typeMatch && workPackageMatch)
    );
  }

  private updateMaintenancePlanTableAfterWorkPackageRemoval(nodes: TreeNode[], workPackage: BidmProjectDTO): void {
    nodes.forEach((node) => {
      const nodeData = node.data as MaintenancePlanRow;
      if (nodeData._obj.nextWorkPackage && nodeData._obj.nextWorkPackage.projectId === workPackage.projectId) {
        nodeData._obj.nextWorkPackage = undefined;
        nodeData.nextWorkPackage = '';
        nodeData.nextWorkPackageTooltip = '';
      }

      if (!ListUtils.isNullOrEmpty(node.children)) {
        this.updateMaintenancePlanTableAfterWorkPackageRemoval(node.children as TreeNode[], workPackage);
      }
    });
  }

  private updateMaintenancePlanTableDisplayed(searchText?: string): void {
    const selectedAsset = this.maintenancePlanTable.find(
      (elt) => (elt.data as MaintenancePlanRow).firstColumn === this.searchCriteria.asset
    );

    this.maintenancePlanTableDisplayed = _cloneDeep(!!selectedAsset ? [selectedAsset] : this.maintenancePlanTable);
    this.maintenancePlanTableDisplayed = this.maintenancePlanTableDisplayed.filter((elt) =>
      this.treeNodeMatchFilters(elt, !!searchText ? searchText.toLowerCase() : undefined)
    );

    this.maintenancePlanTableDisplayedLeafNb = this.getAllMaintenancePlanTableLeaf(
      this.maintenancePlanTableDisplayed
    ).length;

    if (
      !this.maintenancePlanTableDisplayed.some((elt) => !!elt.expanded) &&
      this.maintenancePlanTableDisplayed.length > 0
    ) {
      this.maintenancePlanTableDisplayed[0].expanded = true;
    }

    this.setAirworthinessStatus();
    this.updateSummaryTable();
  }

  private updatePotentialUnit(unit: string): void {
    this.potentialUnitSelected = unit;

    this.load();
  }

  private updateSummaryTableRow(indexInSummaryTable: number, rowType: number): void {
    const rowList = this.getMaintenancePlanRowListByType(rowType);

    // Reset old values
    this.resetSummaryTableRow(indexInSummaryTable);

    // Fill with new values
    this.summaryTable[indexInSummaryTable].nok = rowList.filter(
      (row) => row.alert === ControlConfigConstants.ICON_RED
    ).length;
    this.summaryTable[indexInSummaryTable].ok = rowList.filter(
      (row) => row.alert === ControlConfigConstants.ICON_GREEN
    ).length;
    this.summaryTable[indexInSummaryTable].warning = rowList.filter(
      (row) => row.alert === ControlConfigConstants.ICON_YELLOW
    ).length;

    // Update global row
    this.updateSummaryTableGlobal();
  }

  private updateSummaryTable(): void {
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AD_INDEX,
      MaintenancePlanTableTypeConstants.AD
    );
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_DEFECT_INDEX,
      MaintenancePlanTableTypeConstants.DEFECT
    );
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_LLP_INDEX,
      MaintenancePlanTableTypeConstants.LLP
    );
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_OMP_INDEX,
      MaintenancePlanTableTypeConstants.TASK
    );
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_SB_INDEX,
      MaintenancePlanTableTypeConstants.SB
    );
    this.updateSummaryTableRow(
      ScheduleMaintenanceFormComponent.SUMMARY_TABLE_AMG_INDEX,
      MaintenancePlanTableTypeConstants.AMG
    );
    this.updateSummaryTableGlobal();

    this.summaryTable = [...this.summaryTable];
  }

  private updateSummaryTableGlobal(): void {
    const index = ScheduleMaintenanceFormComponent.SUMMARY_TABLE_GLOBAL_INDEX;

    this.summaryTable[index].nok = this.summaryTable
      .slice(1)
      .map((row) => row.nok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].ok = this.summaryTable
      .slice(1)
      .map((row) => row.ok)
      .reduce((a, b) => a + b, 0);

    this.summaryTable[index].warning = this.summaryTable
      .slice(1)
      .map((row) => row.warning)
      .reduce((a, b) => a + b, 0);
  }

  public customSort(event: SortEvent) {
    if (event.field && event.field === 'remainingEquivalent' && event.data) {
      let order = event.order;
      if (!order) {
        order = 1;
      }
      this.sortTreeAndTreeChildrensOnRemainingEquivalent(event.data, order);
    }

    if (event.field && event.field === 'remainingTime' && event.data) {
      let order = event.order;
      if (!order) {
        order = 1;
      }
      this.sortTreeAndTreeChildrensOnRemainingTime(event.data, order);
    }
  }

  private sortTreeAndTreeChildrensOnRemainingEquivalent(rows: TreeNode[], order: number): void {
    rows.forEach((row) => {
      if (row.children && row.children.length > 1) {
        this.sortTreeAndTreeChildrensOnRemainingEquivalent(row.children, order);
      }
    });
    rows.sort((data1, data2) => {
      return this.compareRemainingEquivalent(data1.data, data2.data) * order;
    });
  }

  private sortTreeAndTreeChildrensOnRemainingTime(rows: TreeNode[], order: number): void {
    rows.forEach((row) => {
      if (row.children && row.children.length > 1) {
        this.sortTreeAndTreeChildrensOnRemainingTime(row.children, order);
      }
    });
    rows.sort((data1, data2) => {
      return this.compareRemainingTime(data1.data, data2.data) * order;
    });
  }

  private compareRemainingEquivalent(
    maintenancePlanRow1: MaintenancePlanRow,
    maintenancePlanRow2: MaintenancePlanRow
  ): number {
    const remainingEquivalent1 = maintenancePlanRow1.remainingEquivalent;
    const remainingEquivalent2 = maintenancePlanRow2.remainingEquivalent;
    const isNOK1 = maintenancePlanRow1.alert === ControlConfigConstants.ICON_RED;
    const isNOK2 = maintenancePlanRow2.alert === ControlConfigConstants.ICON_RED;

    return ComparatorUtils.compareByRemainingEquivalent(
      {
        equipment: maintenancePlanRow1._obj.equipment as BidoEquipmentDTO,
        remainingEquivalent: remainingEquivalent1,
        isNOK: isNOK1
      },
      {
        equipment: maintenancePlanRow2._obj.equipment as BidoEquipmentDTO,
        remainingEquivalent: remainingEquivalent2,
        isNOK: isNOK2
      }
    );
  }

  private compareRemainingTime(
    maintenancePlanRow1: MaintenancePlanRow,
    maintenancePlanRow2: MaintenancePlanRow
  ): number {
    const remaining1 = maintenancePlanRow1.remaining;
    const remaining2 = maintenancePlanRow2.remaining;
    const isNOK1 = maintenancePlanRow1.alert === ControlConfigConstants.ICON_RED;
    const isNOK2 = maintenancePlanRow2.alert === ControlConfigConstants.ICON_RED;

    return ComparatorUtils.compareByRemaining(
      {
        equipment: maintenancePlanRow1._obj.equipment as BidoEquipmentDTO,
        remaining: remaining1,
        isNOK: isNOK1
      },
      {
        equipment: maintenancePlanRow2._obj.equipment as BidoEquipmentDTO,
        remaining: remaining2,
        isNOK: isNOK2
      }
    );
  }

  private flatDeep(tree: TreeNode[]): BidmWorkOrderDTO[] {
    return tree.reduce(
      (acc, val) => [...acc, ...(val ? [val.data] : []), ...(val.children ? this.flatDeep(val.children) : [])],
      []
    );
  }

  public displayWorkOrderScreenEdit(): void {
    const rowData = this.findRowByid(this.idRowToAssicateToWPWithWOCreation).data as MaintenancePlanRow;
    if (rowData._obj && rowData._obj.nextWorkPackage) {
      this.workPackage = rowData._obj.nextWorkPackage as BidmProjectDTO;
      if (this.workPackage.projectId) {
        this.projectId = this.workPackage.projectId;
      }
      this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe((woList) => {
        this.workOrderList = this.flatDeep(woList);
        this.displayWorkOrderEdit = true;
      });
      this.workOrderSelected = undefined;
    }
  }

  public onAddWorkOrder(isCreated: boolean): void {
    if (isCreated) {
      this.workOrdersFormService.calculateBidmProjectStatus(this.workPackage).subscribe((statusState) => {
        if (this.workPackage.statusState !== statusState) {
          this.updateOpenMode(ComponentOpenMode.Write);
          this.workPackage.statusState = statusState;
        }
      });
    }
  }

  public storeRowToAssociateToWPWithWOCreation(node: TreeNode): void {
    const equipmentLine = node.data as MaintenancePlanRow;
    equipmentLine._isActiveWorkPackageBtn = true;
    this.idRowToAssicateToWPWithWOCreation = +node.data._id;
  }

  public findRowByid(id: number): TreeNode {
    return this.maintenancePlanTableDisplayed.filter((elt) => +elt.data._id === id)[0];
  }

  public openEventUC(eventCode) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode: ComponentOpenMode.Read
    };
    if (!!eventCode) {
      const eventId: BidoNotificationDTOId = {
        notificationCode: eventCode as string
      };
      data.objectId = this.serializationService.serialize(eventId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
