import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem } from 'primeng/api';
import { merge } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { SimulationCriteria } from '../../../../main/maintenance/airworthiness-control/types/simulation-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BireUnitMeasureConstants } from '../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { ChartType } from '../../../../shared/types/chart-type.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ToolsMaintenanceStatusFormService } from './tools-maintenance-status-form.service';

interface ToolsRow {
  alert: ControlConfigConstants | undefined;
  asset: string;
  designation: string;
  remainingDays: string | undefined;
  status: string;
  hasChildren: boolean;
  potential: string | undefined;
  mp: string | undefined;
  tasks: ControlConfigConstants | undefined;
  _id: string;
  _obj: GenerateAirworthinessControlTableOutput;
  _alertLoading: boolean;
  _airworthinessAlertTooltip: string | undefined;
  _alertTooltip: string;
  _expand: boolean;
  _potentialLoading: boolean;
}

@Component({
  selector: 'aw-tools-maintenance-status-form',
  styleUrls: ['./tools-maintenance-status-form.component.scss'],
  templateUrl: './tools-maintenance-status-form.component.html'
})
export class ToolsMaintenanceStatusFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly EXPORT_TRANSLATE_KEY: string = 'ToolsMaintenanceStatusFormComponent';
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  private topEquipmentCodeList: string[];

  // Simulation
  public simulationCriteria: SimulationCriteria | undefined;
  public simulationDialogVisible: boolean;

  // Chart
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean;
  public servicableEquipmentNb: number;
  public servicableWithAlertEquipmentNb: number;
  public notservicableEquipmentNb: number;

  // Table
  public toolsTableCols: TableColumn[];
  public toolsTable: ToolsRow[];
  public toolsTableSelection: ToolsRow[];
  public toolsTableLoading: boolean;
  public toolsTableDisplayedRowNb: number;
  public toolsTableVisibilitySelected: number;
  public toolsTableVisibilityList: SelectItem[];
  public toolsTableOnlyAlertsVisible: boolean;
  public toolsTreeTable: GenerateAirworthinessControlTableOutput[];
  private toolsMap: Map<string, ToolsRow>;
  public minimumRemainingEquivalentMap: Map<string, GenerateAirworthinessControlTableOutput>;

  // Flags
  public panelLoading: boolean;
  public exportingFlag: boolean;

  // List
  public designationList: string[];
  public pnCodeList: string[];
  public snCodeList: string[];
  public familyVariantList: string[];
  public groundEquipmentTypes: LabelValue<string>[];

  // Potential unit
  public potentialUnitList: MenuItem[];
  public potentialUnitSelected: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public dateService: DateService,
    private readonly translateService: TranslateService,
    private readonly toolsMaintenanceStatusFormService: ToolsMaintenanceStatusFormService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.controlConfigConstants = ControlConfigConstants;

    this.setPotentialUnitList();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_TOOLS_MAINTENANCE_STATUS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.topEquipmentCodeList =
      !!this.componentData.objectId &&
      !!(this.serializationService.deserialize(this.componentData.objectId) as string[])
        ? (this.serializationService.deserialize(this.componentData.objectId) as string[])
        : [];

    this.potentialUnitSelected = BireUnitMeasureConstants.HOUR;
    this.init();
  }

  /**********************************
   * PAGE OPERATIONS
   **********************************/
  public reload() {
    this.init();
  }

  public simulate() {
    this.simulationDialogVisible = true;
  }

  /**********************************
   * INITIALIZATION
   **********************************/
  private init() {
    this.toolsTable = [];
    this.toolsTableSelection = [];
    this.toolsTableVisibilitySelected = 0;
    this.designationList = [];
    this.pnCodeList = [];
    this.snCodeList = [];
    this.familyVariantList = [];
    this.toolsTreeTable = [];
    this.toolsMap = new Map<string, ToolsRow>();
    this.minimumRemainingEquivalentMap = new Map<string, GenerateAirworthinessControlTableOutput>();

    this.initChart();
    this.initTableHeader();
    this.setToolsTableVisibilityList();

    this.toolsMaintenanceStatusFormService.fetchGroundEquipmentFunctionList().subscribe(
      (results) => {
        this.groundEquipmentTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetGroundEquipmentTypes'));
      }
    );

    this.load();
  }

  private setPotentialUnitList(): void {
    const cyclesKey = this.getTranslateKey('cycles');
    const daysKey = this.getTranslateKey('days');
    const hoursKey = this.getTranslateKey('hours');
    this.translateService.get([daysKey, cyclesKey, hoursKey]).subscribe((results) => {
      const cyclesLabel = results ? results[cyclesKey] : 'Cycles';
      const daysLabel = results ? results[daysKey] : 'Days';
      const hoursLabel = results ? results[hoursKey] : 'Hours';

      this.potentialUnitList = [
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
        },
        {
          label: hoursLabel,
          command: () => {
            this.updatePotentialUnit(BireUnitMeasureConstants.HOUR);
          }
        }
      ];
    });
  }

  /**********************************
   * TOOLS TABLE HEADER
   **********************************/
  private initTableHeader() {
    this.toolsTableCols = [
      { field: 'alert', alignment: 'center', width: '10%' },
      { field: 'asset', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '30%' },
      { field: 'potential', alignment: 'left', width: '15%' },
      { field: 'status', alignment: 'left', width: '20%' },
      { field: 'mp', alignment: 'left', width: '10%' }
    ];
  }

  /**********************************
   * CHART OPERATIONS
   **********************************/
  private initChart(): void {
    this.chartType = 'pie';
    this.chartVisible = false;
    this.chartData = {
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE, AppConstants.COLOR_RED],
          hoverBackgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE, AppConstants.COLOR_RED]
        }
      ],
      labels: []
    };

    this.servicableEquipmentNb = 0;
    this.servicableWithAlertEquipmentNb = 0;
    this.notservicableEquipmentNb = 0;

    this.setChartLabels();
    this.setChartOptions();
  }

  private setChartLabels(): void {
    const servicableKey = this.getTranslateKey('servicable');
    const serviceableWithAlertsKey = this.getTranslateKey('serviceableWithAlerts');
    const notServiceableKey = this.getTranslateKey('notServiceable');
    this.translateService.get([servicableKey, serviceableWithAlertsKey, notServiceableKey]).subscribe((results) => {
      const servicableLabel = results ? results[servicableKey] : '';
      const serviceableWithAlertsLabel = results ? results[serviceableWithAlertsKey] : 'Serviceable with alerts';
      const notServiceableLabel = results ? results[notServiceableKey] : 'Not serviceable';

      this.chartData.labels = [servicableLabel, serviceableWithAlertsLabel, notServiceableLabel];
    });
  }

  private setChartOptions(): void {
    this.chartOptions = {
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private clearChartData(): void {
    this.chartData.datasets[0].data = [0, 0, 0];

    this.servicableEquipmentNb = 0;
    this.servicableWithAlertEquipmentNb = 0;
    this.notservicableEquipmentNb = 0;
  }

  private updateChartData(): void {
    this.toolsTable.forEach((row) => {
      if (row.alert) {
        const SERVICABLE_VALUES_INDEX = 0;
        const SERVICABLE_WITH_ALERTS_VALUES_INDEX = 1;
        const NOT_SERVICABLE_VALUES_INDEX = 2;

        if (row.alert === ControlConfigConstants.ICON_GREEN) {
          this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX]++;
          this.servicableEquipmentNb = this.chartData.datasets[0].data[SERVICABLE_VALUES_INDEX];
        }
        if (row.alert === ControlConfigConstants.ICON_YELLOW) {
          this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX]++;
          this.servicableWithAlertEquipmentNb = this.chartData.datasets[0].data[SERVICABLE_WITH_ALERTS_VALUES_INDEX];
        }
        if (row.alert === ControlConfigConstants.ICON_RED) {
          this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX]++;
          this.notservicableEquipmentNb = this.chartData.datasets[0].data[NOT_SERVICABLE_VALUES_INDEX];
        }
        this.chartData = { ...this.chartData };

        this.chartVisible = this.chartData.datasets[0].data.some((elt) => elt > 0);
      }
    });
  }

  /**********************************
   * Generate Table data
   **********************************/
  private setToolsTableVisibilityList(): void {
    const allKey = this.getTranslateKey('showAll');
    const onlyAlertsKey = this.getTranslateKey('showOnlyAlerts');
    this.translateService.get([allKey, onlyAlertsKey]).subscribe((results) => {
      const allLabel = !!results ? results[allKey] : 'Show All';
      const onlyAlertsLabel = !!results ? results[onlyAlertsKey] : 'Show Only Alerts';
      this.toolsTableVisibilityList = [
        { label: allLabel, value: 0 },
        { label: onlyAlertsLabel, value: 1 }
      ];
    });
  }

  public onChangeToolsTableVisibility(): void {
    this.toolsTableOnlyAlertsVisible = this.toolsTableVisibilitySelected === 1;

    if (this.toolsTableOnlyAlertsVisible) {
      this.toolsTableDisplayedRowNb = this.toolsTable.filter(
        (elt) =>
          elt.alert !== undefined &&
          elt.alert !== null &&
          (elt.alert === ControlConfigConstants.ICON_RED || elt.alert === ControlConfigConstants.ICON_YELLOW)
      ).length;
    }
  }

  private load(): void {
    this.toolsTableLoading = true;
    this.panelLoading = true;
    this.toolsTable = [];
    this.chartVisible = false;
    this.designationList = [];
    this.pnCodeList = [];
    this.snCodeList = [];
    this.familyVariantList = [];

    this.clearChartData();

    const airworthinessTableParams: GenerateAirworthinessControlTableInput = {
      equipmentCodeList: this.topEquipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitEquivalent: this.potentialUnitSelected
    };
    this.toolsMaintenanceStatusFormService.generateAirworthinessControlTable(airworthinessTableParams).subscribe(
      (results) => {
        this.toolsTableLoading = false;
        this.toolsTreeTable = ListUtils.orEmpty(results).filter(
          (elt) => elt.bidoEquipment && !StringUtils.isNullOrEmpty(elt.bidoEquipment.equipmentCode)
        );

        this.createAllToolsRow(this.toolsTreeTable);
        this.createDataForToolsPanel(results);

        this.toolsTable = this.toolsTreeTable.map(
          (elt) => this.toolsMap.get(elt.bidoEquipment.equipmentCode as string) as ToolsRow
        );
        this.computeGlobalAlertForEachTopEquipment(this.toolsTable);

        this.toolsTableLoading = false;
        this.panelLoading = false;
      },
      (error) => {
        this.toolsTableLoading = false;
        this.panelLoading = false;
      }
    );
  }

  private createDataForToolsPanel(results: GenerateAirworthinessControlTableOutput[]) {
    // Setting data for First Panel
    results.forEach((res) => {
      if (!!res && !!res.bidoEquipment) {
        if (
          !!res.bidoEquipment.equipmentDesignation &&
          this.designationList.indexOf(res.bidoEquipment.equipmentDesignation) === -1
        ) {
          this.designationList.push(res.bidoEquipment.equipmentDesignation as string);
        }

        if (!!res.bidoEquipment.pnCode && this.pnCodeList.indexOf(res.bidoEquipment.pnCode) === -1) {
          this.pnCodeList.push(res.bidoEquipment.pnCode as string);
        }

        if (!!res.bidoEquipment.sn && this.snCodeList.indexOf(res.bidoEquipment.sn) === -1) {
          this.snCodeList.push(res.bidoEquipment.sn as string);
        }

        if (
          !!res.bidoEquipment.familyVariantCode &&
          this.familyVariantList.indexOf(res.bidoEquipment.familyVariantCode) === -1
        ) {
          this.familyVariantList.push(res.bidoEquipment.familyVariantCode as string);
        }

        this.displayComponentContext(this.displayToolInfo(this.familyVariantList), this.isCreateOpenMode);
      }
    });
  }

  private createAllToolsRow(list: GenerateAirworthinessControlTableOutput[]): void {
    if (list.length > 0) {
      list.forEach((elt) => {
        this.toolsMap.set(elt.bidoEquipment.equipmentCode as string, this.createAirworthinessRow(elt));
        this.createAllToolsRow(elt.children);
      });
    }
  }

  private computeGlobalAlertForEachTopEquipment(topEquipmentList: ToolsRow[]): void {
    this.clearChartData();

    topEquipmentList.forEach((equipment) => {
      equipment._alertLoading = true;
    });
    this.togglePotentialLoadingIndicator(true);

    const observables = topEquipmentList.map((equipment) => {
      const input: CheckEquipmentForAirworthinessControlInput = {
        equipmentCodeList: this.topEquipmentCodeList,
        simulation: this.simulationCriteria !== undefined,
        simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
        simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
        simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
        equipmentToCheck: equipment._obj.bidoEquipment.equipmentCode as string
      };

      return this.toolsMaintenanceStatusFormService.checkEquipmentForAirworthinessControl(input);
    });

    merge(...observables)
      .pipe(
        finalize(() => {
          this.updateChartData();
          this.setPotentialForAllEquipment(this.toolsTreeTable);
        })
      )
      .subscribe((result) => {
        const matchingEquipment = topEquipmentList.find(
          (equipment) => equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode
        );

        if (!!matchingEquipment) {
          matchingEquipment._alertLoading = false;

          matchingEquipment.alert = result.airworthinessAlertIcon;
        }
      });
  }

  /**********************************
   * UPDATE POTENTIAL
   **********************************/
  private updatePotentialUnit(unit: string): void {
    this.potentialUnitSelected = unit;

    this.togglePotentialLoadingIndicator(true);

    const params: GenerateAirworthinessControlTableInput = {
      equipmentCodeList: this.topEquipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitEquivalent: this.potentialUnitSelected
    };

    this.toolsMaintenanceStatusFormService.computePotentialForAirworthinessControlInput(params).subscribe((results) => {
      this.setPotentialForAllEquipment(results);
    });
  }

  private setPotentialForAllEquipment(results: GenerateAirworthinessControlTableOutput[]): void {
    // Compute minimum remaining equivalent for each equipment
    ListUtils.orEmpty(results).forEach((result) => {
      const minimumRemainingEquivalent = this.findMinimumRemainingEquivalent(result.children);
      if (result.code && minimumRemainingEquivalent) {
        this.minimumRemainingEquivalentMap.set(result.code, minimumRemainingEquivalent);
      }
    });
    // if (this.isAssetViewMode) {
    //   this.topAssetAirworthinessTableRemainingValuesComponent.load();
    // }

    const treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
    treeNodeMap.forEach((_, key) => {
      const treeNode = treeNodeMap.get(key);
      const matchingElt = this.toolsMap.get(key) as ToolsRow;
      if (!!treeNode) {
        matchingElt.potential = StringUtils.orEmpty(treeNode.remainingEquivalent);
        matchingElt._obj.remainingEquivalent = treeNode.remainingEquivalent;
        matchingElt._obj.remainingEquivalentIcon = treeNode.remainingEquivalentIcon;
        matchingElt._obj.remainingEquivalentTooltip = treeNode.remainingEquivalentTooltip;

        if (matchingElt.alert === ControlConfigConstants.ICON_YELLOW) {
          const lowRemainingKey = this.getTranslateKey('lowRemaining');
          this.translateService.get(lowRemainingKey).subscribe((translatedKey) => {
            matchingElt._alertTooltip = translatedKey || 'Low remaining';
          });
        } else if (matchingElt.alert === ControlConfigConstants.ICON_RED) {
          const missingAssetInAppliedConfigurationKey = this.getTranslateKey('missingAssetInAppliedConfiguration');
          const overPotentialKey = this.getTranslateKey('overduePotential');
          const overPotentialSubassemblyKey = this.getTranslateKey('overduePotentialSubAssembly');
          this.translateService
            .get([missingAssetInAppliedConfigurationKey, overPotentialKey, overPotentialSubassemblyKey])
            .subscribe((translatedKeys) => {
              const missingAssetInAppliedConfigurationLabel = !!translatedKeys
                ? translatedKeys[missingAssetInAppliedConfigurationKey]
                : 'Missing asset in the applied configuration';
              const overPotentialLabel = !!translatedKeys ? translatedKeys[overPotentialKey] : 'Overdue potential';
              const overPotentialSubassemblyLabel = !!translatedKeys
                ? translatedKeys[overPotentialSubassemblyKey]
                : 'Overdue potential on sub-assemblies';

              let alertList: string[] = [];
              if (!!matchingElt.potential && matchingElt.potential.startsWith('-')) {
                alertList = [...alertList, overPotentialLabel];
              }
              const overduePotentialSubAssembly = matchingElt._obj.children.some((child) =>
                StringUtils.orEmpty(child.remainingEquivalent).startsWith('-')
              );
              if (overduePotentialSubAssembly) {
                alertList = [...alertList, overPotentialSubassemblyLabel];
              }
              if (treeNode.checkResultIcon === ControlConfigConstants.ICON_RED) {
                alertList = [...alertList, missingAssetInAppliedConfigurationLabel];
              }
              matchingElt._alertTooltip = alertList.join(' & ');
            });
        }
      }
    });

    this.togglePotentialLoadingIndicator(false);
  }

  private mapTreeNodeByEquipmentCode(
    list: GenerateAirworthinessControlTableOutput[]
  ): Map<string, GenerateAirworthinessControlTableOutput> {
    const map = new Map<string, GenerateAirworthinessControlTableOutput>();

    let queue = _cloneDeep(list);
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as GenerateAirworthinessControlTableOutput;
      queue = [...queue, ...first.children];
      map.set(first.bidoEquipment.equipmentCode as string, first);
    }

    return map;
  }

  private findMinimumRemainingEquivalent(
    list: GenerateAirworthinessControlTableOutput[]
  ): GenerateAirworthinessControlTableOutput | undefined {
    let remainingEquivalent: GenerateAirworthinessControlTableOutput | undefined;

    let queue = _cloneDeep(list);
    while (!ListUtils.isEmpty(queue)) {
      const first = queue.shift() as GenerateAirworthinessControlTableOutput;
      queue = [...queue, ...first.children];

      if (ObjectUtils.isDefined(first.remainingEquivalentValue)) {
        if (!(remainingEquivalent as GenerateAirworthinessControlTableOutput)) {
          remainingEquivalent = first;
        } else {
          const currMin = (remainingEquivalent as GenerateAirworthinessControlTableOutput)
            .remainingEquivalentValue as number;
          const newMin = (first as GenerateAirworthinessControlTableOutput).remainingEquivalentValue as number;
          if (newMin < currMin) {
            remainingEquivalent = first;
          }
        }
      }
    }

    return remainingEquivalent;
  }

  private togglePotentialLoadingIndicator(newStatus: boolean): void {
    this.toolsTable.forEach((elt) => {
      elt._potentialLoading = newStatus;
    });
  }

  /**********************************
   * RENDER TOOLS TABLE ROW
   **********************************/
  private createAirworthinessRow(elt: GenerateAirworthinessControlTableOutput): ToolsRow {
    return {
      alert: elt.airworthinessAlertIcon,
      asset: BidoEquipmentUtils.createAssetName(elt.bidoEquipment),
      designation: StringUtils.orEmpty(elt.assetDesignation),
      remainingDays: elt.remainingDays,
      mp: elt.maintenanceProgram,
      potential: '',
      status: StringUtils.orEmpty(elt.status),
      hasChildren: elt.children.length > 0,
      tasks: elt.airworthinessAlertIcon,
      _id: elt.bidoEquipment.equipmentCode as string,
      _obj: elt,
      _alertLoading: false,
      _alertTooltip: '',
      _airworthinessAlertTooltip: elt.airworthinessAlertTooltip,
      _expand: false,
      _potentialLoading: false
    };
  }

  public toggleToolsTableRowDetailsVisibility(row: ToolsRow): void {
    row._expand = !row._expand;
  }

  /**********************************
   * OPENING ASSET UC
   **********************************/
  public openSubAsset(subAssembly: ToolsRow): void {
    if (subAssembly._obj.bidoEquipment.equipmentCode && subAssembly._obj.bidoEquipment.equipmentFunction) {
      switch (subAssembly._obj.bidoEquipment.equipmentFunction) {
        case AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY:
          this.openAircraft(subAssembly._obj.bidoEquipment.equipmentCode);
          break;

        case AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY:
          this.openEngine(subAssembly._obj.bidoEquipment.equipmentCode);
          break;
        case AWPropertiesConstants.ITEM_FAMILY_CODE_TOOL_KEY:
          this.openTool(subAssembly._obj.bidoEquipment.equipmentCode);
          break;
        default:
          this.openEquipment(subAssembly._obj.bidoEquipment.equipmentCode);
          break;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenSubAssembly'));
    }
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

  private openTool(equipmentCode: string): void {
    const objectId: BidoEquipmentDTO = {
      equipmentCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.LOG_TOOL_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMaintenanceProgram(mp: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MAINTENANCE_PROGRAM_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!mp) {
      const birePlanDTOId: BireMaintenancePlanDTOId = {
        planCode: mp
      };
      data.objectId = this.serializationService.serialize(birePlanDTOId);
    }

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * TOOLS PANEL INFORMATION RENDER
   **********************************/
  public displayToolInfo(arr: string[]): string {
    let str = '';
    if (arr.length > 0) {
      arr.forEach((res, index) => {
        if (arr.length - 1 === index) {
          str = str + res;
        } else {
          str = `${str}${res}, `;
        }
      });
    }

    return str;
  }

  /**********************************
   * SIMULATION OPERATIONS
   **********************************/
  public onSimulate(criteria: SimulationCriteria): void {
    this.simulationCriteria = criteria;

    this.reloadFromCache();
  }

  private reloadFromCache(): void {
    this.load();
    this.loadConfigurationControl();
  }

  private loadConfigurationControl(): void {
    // TODO
  }

  public resetSimulation(): void {
    this.simulationCriteria = undefined;

    this.reloadFromCache();
  }

  /**********************************
   * EXPORT TOOLS TABLE
   **********************************/
  public exportToolsTable(): void {
    this.exportingFlag = true;
    const translateKey = ToolsMaintenanceStatusFormComponent.EXPORT_TRANSLATE_KEY;

    const alert = super.getTranslateKey('alert', translateKey);
    const alertNokKey = super.getTranslateKey('alertNok', translateKey);
    const alertOkKey = super.getTranslateKey('alertOk', translateKey);
    const alertWarningKey = super.getTranslateKey('alertWarning', translateKey);
    const assetKey = super.getTranslateKey('asset', translateKey);
    const potential = super.getTranslateKey('potential', translateKey);
    const designationKey = super.getTranslateKey('designation', translateKey);
    const eventStatus = super.getTranslateKey('eventStatus', translateKey);
    const tasks = super.getTranslateKey('tasks', translateKey);
    const remainingDays = super.getTranslateKey('remainingDays', translateKey);
    const mp = super.getTranslateKey('mp', translateKey);
    const statusKey = super.getTranslateKey('status', translateKey);
    const fileNamePrefixKey = super.getTranslateKey('fileNamePrefix', translateKey);
    this.translateService
      .get([
        alert,
        alertNokKey,
        alertOkKey,
        alertWarningKey,
        assetKey,
        potential,
        designationKey,
        eventStatus,
        remainingDays,
        tasks,
        statusKey,
        fileNamePrefixKey,
        mp
      ])
      .subscribe(
        (results) => {
          if (results) {
            const listToExport = this.toolsTable.map((element) => {
              let alertStr: string;
              switch (element.alert) {
                case ControlConfigConstants.ICON_GREEN:
                  alertStr = results[alertOkKey];
                  break;

                case ControlConfigConstants.ICON_RED:
                  alertStr = results[alertNokKey];
                  break;

                case ControlConfigConstants.ICON_YELLOW:
                  alertStr = results[alertWarningKey];
                  break;

                default:
                  alertStr = '';
                  break;
              }

              let tasksStr: string;
              switch (element.tasks) {
                case ControlConfigConstants.ICON_GREEN:
                  tasksStr = results[alertOkKey];
                  break;

                case ControlConfigConstants.ICON_RED:
                  tasksStr = results[alertNokKey];
                  break;

                case ControlConfigConstants.ICON_YELLOW:
                  tasksStr = results[alertWarningKey];
                  break;

                default:
                  tasksStr = '';
                  break;
              }

              return {
                [results[alert]]: alertStr,
                [results[assetKey]]: element.asset,
                [results[designationKey]]: element.designation,
                [results[potential]]: element.potential,
                [results[eventStatus]]: element.status,
                [results[mp]]: element.mp,
                [results[remainingDays]]: element.remainingDays,
                [results[tasks]]: tasksStr
              };
            });

            const fileNameToExport =
              (results[fileNamePrefixKey] as string) + '__' + this.dateService.dateWithHourToString(new Date());

            const exportOpts = {
              header: [
                results[alert],
                results[assetKey],
                results[designationKey],
                results[potential],
                results[eventStatus],
                results[mp],
                results[remainingDays],
                results[tasks]
              ]
            };

            this.exportService.toExcel(listToExport, fileNameToExport, undefined, exportOpts);
            this.exportingFlag = false;
          }
        },
        (error) => {
          this.exportingFlag = false;
        }
      );
  }
}
