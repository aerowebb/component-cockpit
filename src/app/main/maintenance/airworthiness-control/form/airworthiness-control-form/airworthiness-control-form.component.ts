import { ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem, SortEvent } from 'primeng/api';
import { Observable, forkJoin, merge } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AppConstants } from '../../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BireUnitMeasureConstants } from '../../../../../shared/constants/bire-unit-measure-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../shared/services/date.service';
import { ExportService } from '../../../../../shared/services/export.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { FileService } from '../../../../../shared/services/file.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { CheckEquipmentForAirworthinessControlInput } from '../../../../../shared/types/api-input-types/airworthiness-management/check-equipment-for-airworthiness-control-input.interface';
import { ClearAirworthinessControlCacheInput } from '../../../../../shared/types/api-input-types/airworthiness-management/clear-airworthiness-control-cache-input.interface';
import { GenerateAirworthinessControlTableInput } from '../../../../../shared/types/api-input-types/airworthiness-management/generate-airworthiness-control-table-input.interface';
import { ControlConfigurationInput } from '../../../../../shared/types/api-input-types/fleet-business/control-configuration-input.interface';
import { GenerateAirworthinessControlTableOutput } from '../../../../../shared/types/api-output-types/airworthiness-management/generate-airworthiness-control-table-output.interface';
import { ControlConfigurationOutput } from '../../../../../shared/types/api-output-types/fleet-business/control-configuration-output.interface';
import { BidoBireDocumentDTO } from '../../../../../shared/types/api-types/bido-bire-documentdto';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { ChartType } from '../../../../../shared/types/chart-type.interface';
import { AppliedConfigurationManagementInput } from '../../../../../shared/types/component-input-types/maintenance/applied-configuration-management.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { SummaryRow } from '../../../../../shared/types/summary-row.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../../shared/utils/bido-equipment-utils';
import { ComparatorUtils } from '../../../../../shared/utils/comparator-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../../types/airworthiness-control-form-component-input.interface';
import { ScheduleMaintenanceFormComponentInput } from '../../types/schedule-maintenance-form-component-input.interface';
import { SimulationCriteria } from '../../types/simulation-criteria.interface';

import { AirworthinessControlFormService } from './airworthiness-control-form.service';
import { AirworthinessTableRemainingValuesComponent } from './airworthiness-table-remaining-values/airworthiness-table-remaining-values.component';
import { AirworthinessTableVisibility } from './enums/airworthiness-table-visibility.enum';
import { AirworthinessRow } from './types/airworthiness-row.interface';

enum ViewMode {
  Asset,
  Fleet
}

export abstract class AirworthinessControlFormComponent extends FormPageComponent<PageComponentData>
  implements OnDestroy, OnInit {
  private static readonly EXPORT_TRANSLATE_KEY: string = 'AirworthinessControlFormComponentExport';

  public readonly componentName: string;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public airworthinessTable: AirworthinessRow[];
  public airworthinessTableColCsnLabel: string;
  public airworthinessTableColTsnLabel: string;
  public airworthinessTableCols: TableColumn[];
  public airworthinessTableDisplayedRowNb: number;
  public airworthinessTableFullScreenDialogVisible: boolean;
  public airworthinessTableOnlyAlertsVisible: boolean;
  public airworthinessTableLoading: boolean;
  public airworthinessTableSelection: AirworthinessRow[];
  public airworthinessTableVisibilityList: SelectItem[];
  public airworthinessTableVisibilitySelected: AirworthinessTableVisibility;
  public asset: BidoEquipmentDTO | undefined;
  public assetAirworthiness: AirworthinessRow | undefined;
  public configurationControlTable: SummaryRow[];
  public configurationControlTableLoading: boolean;
  public globalAlertListLoading: boolean;
  public minimumRemainingEquivalentMap: Map<string, GenerateAirworthinessControlTableOutput>;
  public navigationLinkList: MenuItem[];
  public navigationLinkListForTableRow: MenuItem[];
  public potentialUnitList: MenuItem[];
  public potentialUnitSelected: string;
  public scope: AirworthinessControlFormComponentInput;
  public simulationCriteria: SimulationCriteria | undefined;
  public simulationDialogVisible: boolean;
  public topAssetTypeList: string;
  public topEquipmentCode: string | undefined;
  public topEquipmentCodeList: string[];
  public topFamilyVariantList: string;
  public topWarehouse: string | undefined;
  public viewMode: ViewMode;

  // Chart
  public airworthyEquipmentNb: number;
  public airworthyWithAlertEquipmentNb: number;
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean;
  public notAirworthyEquipmentNb: number;

  private airworthinessMap: Map<string, AirworthinessRow>;
  private airworthinessTreeTable: GenerateAirworthinessControlTableOutput[];
  private readonly subAssetConfigurationControlMap: Map<
    string,
    { ok?: number; warning?: number; nok?: number }
  > = new Map<string, { ok: number; warning: number; nok: number }>();

  @ViewChild('airworthinessTableAnchor')
  public airworthinessTableAnchor: ElementRef;

  @ViewChild('maintenancePlanTableAnchor')
  public maintenancePlanTableAnchor: ElementRef;

  @ViewChild('remainingValuesAnchor')
  public remainingValuesAnchor: ElementRef;

  @ViewChild('scopeAnchor')
  public scopeAnchor: ElementRef;

  @ViewChild('summaryAnchor')
  public summaryAnchor: ElementRef;

  @ViewChild('topAssetAirworthinessTableRemainingValuesComponent')
  public topAssetAirworthinessTableRemainingValuesComponent: AirworthinessTableRemainingValuesComponent;
  public currentIllustration: SafeResourceUrl | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public dateService: DateService,
    public sessionService: SessionService,
    private readonly airworthinessControlFormService: AirworthinessControlFormService,
    private readonly exportService: ExportService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly fileService: FileService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.componentName = 'AirworthinessControlFormComponent';
    this.controlConfigConstants = ControlConfigConstants;

    this.setAirwothinessTableColumnList();
    this.setAirworthinessTableVisibilityList();
    this.setNavigationLinkList();
    this.setNavigationLinkListForTableRow();
    this.setPotentialUnitList();

    this.init();
    this.initChart();

    this.loadAirworthinessTableColumnLabelList();
  }

  protected getTranslateKey(key: string): string {
    return super.getTranslateKey(key, this.componentName);
  }

  public ngOnDestroy(): void {
    const input: ClearAirworthinessControlCacheInput = {
      equipmentCodeList: this.topEquipmentCodeList
    };
    this.airworthinessControlFormService.clearAirworthinessControlCache(input).subscribe();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      // Init scope
      this.scope = this.serializationService.deserialize(this.componentData.objectId as string) || [];

      this.topAssetTypeList = ListUtils.orEmpty(this.scope.functionList)
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(', ');
      this.topEquipmentCodeList = this.scope.equipmentCodeList;
      this.topFamilyVariantList = ListUtils.orEmpty(this.scope.familyVariantList)
        .filter((v, i, a) => a.indexOf(v) === i)
        .join(', ');
      this.topWarehouse = this.scope.warehouse;
      this.simulationCriteria = this.scope.simulationCriteria;

      this.viewMode = this.topEquipmentCodeList.length === 1 ? ViewMode.Asset : ViewMode.Fleet;

      // Load table
      this.load();

      if (this.isAssetViewMode) {
        // Load asset and display context from selected asset
        this.loadAsset();
      } else {
        this.displayComponentContext(this.topFamilyVariantList, this.isCreateOpenMode);
      }
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

  public get isAssetViewMode(): boolean {
    return this.viewMode === ViewMode.Asset;
  }

  public get isFleetViewMode(): boolean {
    return this.viewMode === ViewMode.Fleet;
  }

  public exportAirwothinessTable(): void {
    const translateKey = AirworthinessControlFormComponent.EXPORT_TRANSLATE_KEY;

    const aircraftStatusKey = super.getTranslateKey('aircraftStatus', translateKey);
    const alertNokKey = super.getTranslateKey('alertNok', translateKey);
    const alertOkKey = super.getTranslateKey('alertOk', translateKey);
    const alertWarningKey = super.getTranslateKey('alertWarning', translateKey);
    const assetKey = super.getTranslateKey('asset', translateKey);
    const designationKey = super.getTranslateKey('designation', translateKey);
    const maintenanceProgramKey = super.getTranslateKey('maintenanceProgram', translateKey);
    const potentialKey = super.getTranslateKey('potential', translateKey);
    const statusKey = super.getTranslateKey('status', translateKey);
    const fileNamePrefixKey = super.getTranslateKey('fileNamePrefix', translateKey);
    this.translateService
      .get([
        aircraftStatusKey,
        alertNokKey,
        alertOkKey,
        alertWarningKey,
        assetKey,
        designationKey,
        maintenanceProgramKey,
        potentialKey,
        statusKey,
        fileNamePrefixKey
      ])
      .subscribe((results) => {
        if (results) {
          const listToExport = this.airworthinessTable.map((element) => {
            let alert: string;
            switch (element.alert) {
              case ControlConfigConstants.ICON_GREEN:
                alert = results[alertOkKey];
                break;

              case ControlConfigConstants.ICON_RED:
                alert = results[alertNokKey];
                break;

              case ControlConfigConstants.ICON_YELLOW:
                alert = results[alertWarningKey];
                break;

              default:
                alert = '';
                break;
            }

            return {
              [results[statusKey]]: alert,
              [results[assetKey]]: element.asset,
              [results[designationKey]]: element.designation,
              [results[potentialKey]]: element.potential,
              [this.airworthinessTableColTsnLabel]: element.tsn,
              [this.airworthinessTableColCsnLabel]: element.csn,
              [results[aircraftStatusKey]]: element.status,
              [results[maintenanceProgramKey]]: element.mp
            };
          });

          const fileNameToExport =
            (results[fileNamePrefixKey] as string) + '__' + this.dateService.dateWithHourToString(new Date());

          const exportOpts = {
            header: [
              results[statusKey],
              results[assetKey],
              results[designationKey],
              results[potentialKey],
              this.airworthinessTableColTsnLabel,
              this.airworthinessTableColCsnLabel,
              results[aircraftStatusKey],
              results[maintenanceProgramKey]
            ]
          };

          this.exportService.toExcel(listToExport, fileNameToExport, undefined, exportOpts);
        }
      });
  }

  public goDownInAirworthinessTable(row: AirworthinessRow): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [row._obj.bidoEquipment.equipmentCode as string],
      simulationCriteria: this.simulationCriteria,
      _parent: this.scope
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public goUpInAirworthinessTable(): void {
    if (!!this.scope._parent) {
      const componentId: string =
        this.scope._parent.equipmentCodeList.length === 1
          ? ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM
          : ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_FLEET_FORM;

      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(this.scope._parent)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public onChangeAirworthinessTableVisibility(): void {
    this.airworthinessTableOnlyAlertsVisible =
      this.airworthinessTableVisibilitySelected === AirworthinessTableVisibility.OnlyAlerts;

    if (this.airworthinessTableOnlyAlertsVisible) {
      this.airworthinessTableDisplayedRowNb = this.airworthinessTable.filter(
        (elt) =>
          elt.alert !== undefined &&
          elt.alert !== null &&
          (elt.alert === ControlConfigConstants.ICON_RED || elt.alert === ControlConfigConstants.ICON_YELLOW)
      ).length;
    }
  }

  public onSimulate(criteria: SimulationCriteria): void {
    this.simulationCriteria = criteria;

    this.reloadFromCache();
  }

  public openAssetMaintenancePlan(equipmentCode: string): void {
    const objectId: BidoEquipmentDTOId = {
      equipmentCode
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

  public openControlConfiguration(): void {
    if (this.asset && this.asset.equipmentCode) {
      const objectId: AppliedConfigurationManagementInput = {
        equipmentCodeList: [this.asset.equipmentCode]
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
  }

  public openSubAsset(subAssembly: AirworthinessRow): void {
    if (subAssembly._obj.bidoEquipment.equipmentCode && subAssembly._obj.bidoEquipment.equipmentFunction) {
      switch (subAssembly._obj.bidoEquipment.equipmentFunction) {
        case AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY:
          this.openAircraft(subAssembly._obj.bidoEquipment.equipmentCode);
          break;

        case AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY:
          this.openEngine(subAssembly._obj.bidoEquipment.equipmentCode);
          break;

        default:
          this.openEquipment(subAssembly._obj.bidoEquipment.equipmentCode);
          break;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenSubAssembly'));
    }
  }

  public openTopAsset(): void {
    const assetCode = this.topEquipmentCode as string;

    if (this.isAssetAircraft) {
      this.openAircraft(assetCode);
    } else if (this.isAssetEngine) {
      this.openEngine(assetCode);
    } else {
      this.openEquipment(assetCode);
    }
  }

  public reload(): void {
    const input: ClearAirworthinessControlCacheInput = {
      equipmentCodeList: this.topEquipmentCodeList
    };
    this.airworthinessControlFormService.clearAirworthinessControlCache(input).subscribe(() => {
      this.load();
      this.loadConfigurationControl();
    });
  }

  public resetSimulation(): void {
    this.simulationCriteria = undefined;

    this.reloadFromCache();
  }

  public showAirworthinessTableFullScreen(): void {
    this.airworthinessTableFullScreenDialogVisible = true;
  }

  public simulate(): void {
    this.simulationDialogVisible = true;
  }

  public toggleAirworthinessTableRowDetailsVisibility(row: AirworthinessRow): void {
    row._expand = !row._expand;
  }

  private clearChartData(): void {
    this.chartData.datasets[0].data = [0, 0, 0];

    this.airworthyEquipmentNb = 0;
    this.airworthyWithAlertEquipmentNb = 0;
    this.notAirworthyEquipmentNb = 0;
  }

  private computeGlobalAlertForEachTopEquipment(topEquipmentList: AirworthinessRow[]): void {
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

      return this.airworthinessControlFormService.checkEquipmentForAirworthinessControl(input);
    });

    merge(...observables)
      .pipe(
        finalize(() => {
          this.updateChartData();
          this.setPotentialForAllEquipment(this.airworthinessTreeTable);
          this.globalAlertListLoading = false;
        })
      )
      .subscribe((result) => {
        this.loadConfigurationControl(result.bidoEquipment);

        const matchingEquipment = topEquipmentList.find(
          (equipment) => equipment._obj.bidoEquipment.equipmentCode === result.bidoEquipment.equipmentCode
        );

        if (!!matchingEquipment) {
          matchingEquipment._alertLoading = false;

          matchingEquipment.alert = result.globalAirworthinessStatus;
        }
      });
  }

  private createAirworthinessRow(elt: GenerateAirworthinessControlTableOutput): AirworthinessRow {
    const bidoEquipment = elt.bidoEquipment;

    const airworthinessRow: AirworthinessRow = {
      alert: elt.globalAirworthinessStatus,
      asset: BidoEquipmentUtils.createAssetName(bidoEquipment),
      csn: StringUtils.orEmpty(elt.counterCsn),
      designation: StringUtils.orEmpty(elt.assetDesignation),
      mp: StringUtils.orEmpty(elt.maintenanceProgram),
      nextWorkPackage: StringUtils.orEmpty(elt.nextWorkPackage),
      potential: '',
      status: StringUtils.orEmpty(elt.status),
      tsn: StringUtils.orEmpty(elt.counterTsn),
      hasChildren: elt.children.length > 0,
      pnCode: bidoEquipment.pnCode ? bidoEquipment.pnCode : '',
      sn: bidoEquipment.sn ? bidoEquipment.sn : '',
      _id: bidoEquipment.equipmentCode as string,
      _obj: { ...elt, assetRepresentation: BidoEquipmentUtils.createAssetRepresentation(bidoEquipment) },
      _alertLoading: false,
      _alertTooltip: '',
      _expand: false,
      _potentialLoading: false
    };

    // TODO: make only one call to retrieve all attached documents
    // if (
    //   bidoEquipment &&
    //   bidoEquipment.familyVariantCode &&
    //   bidoEquipment.section &&
    //   bidoEquipment.sheet &&
    //   bidoEquipment.marks &&
    //   bidoEquipment.subject &&
    //   bidoEquipment.chapter
    // ) {
    //   const familyCodeFound = bidoEquipment.familyVariantCode.split('-')[0];
    //   const variantCodeFound = bidoEquipment.familyVariantCode.split('-')[1];
    //   if (familyCodeFound && variantCodeFound) {
    //     const bireItemDtoId = {
    //       familyCode: familyCodeFound,
    //       chapter: bidoEquipment.chapter,
    //       subject: bidoEquipment.subject,
    //       variantCode: variantCodeFound,
    //       section: bidoEquipment.section,
    //       sheet: bidoEquipment.sheet,
    //       marks: bidoEquipment.marks,
    //       structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
    //     };

    //     this.fileService
    //       .findIllustration(bireItemDtoId, bidoEquipment)
    //       .subscribe((document) => (airworthinessRow.illustrationDocument = document));
    //   }
    // }

    return airworthinessRow;
  }

  private createAllAirworhtinessRow(list: GenerateAirworthinessControlTableOutput[]): void {
    if (list.length > 0) {
      list.forEach((elt) => {
        this.airworthinessMap.set(elt.bidoEquipment.equipmentCode as string, this.createAirworthinessRow(elt));
        this.createAllAirworhtinessRow(elt.children);
      });
    }
  }

  private init(): void {
    this.airworthinessMap = new Map<string, AirworthinessRow>();
    this.airworthinessTable = [];
    this.airworthinessTableDisplayedRowNb = 0;
    this.airworthinessTableFullScreenDialogVisible = false;
    this.airworthinessTableOnlyAlertsVisible = false;
    this.airworthinessTableLoading = false;
    this.airworthinessTableSelection = [];
    this.airworthinessTableVisibilitySelected = AirworthinessTableVisibility.All;
    this.airworthinessTreeTable = [];
    this.asset = undefined;
    this.assetAirworthiness = undefined;
    this.configurationControlTable = [];
    this.configurationControlTableLoading = false;
    this.globalAlertListLoading = false;
    this.minimumRemainingEquivalentMap = new Map<string, GenerateAirworthinessControlTableOutput>();
    this.potentialUnitSelected = BireUnitMeasureConstants.HOUR;
    this.simulationCriteria = undefined;
    this.simulationDialogVisible = false;
    this.topAssetTypeList = '';
    this.topEquipmentCode = undefined;
    this.topEquipmentCodeList = [];
    this.topFamilyVariantList = '';
    this.topWarehouse = undefined;
  }

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

    this.airworthyEquipmentNb = 0;
    this.airworthyWithAlertEquipmentNb = 0;
    this.notAirworthyEquipmentNb = 0;

    this.setChartLabels();
    this.setChartOptions();
  }

  private load(): void {
    this.airworthinessTableLoading = true;
    this.airworthinessTable = [];
    this.assetAirworthiness = undefined;
    this.chartVisible = false;
    this.globalAlertListLoading = true;
    this.topEquipmentCode = undefined;

    this.clearChartData();

    const airworthinessTableParams: GenerateAirworthinessControlTableInput = {
      equipmentCodeList: this.topEquipmentCodeList,
      simulation: this.simulationCriteria !== undefined,
      simulationCyclesValue: this.simulationCriteria ? this.simulationCriteria.inCycles : undefined,
      simulationDateValue: this.simulationCriteria ? this.simulationCriteria.atDate : undefined,
      simulationHoursValue: this.simulationCriteria ? this.simulationCriteria.inHours : undefined,
      unitEquivalent: this.potentialUnitSelected
    };
    this.airworthinessControlFormService
      .generateAirworthinessControlTable(airworthinessTableParams)
      .subscribe((results) => {
        this.airworthinessTableLoading = false;

        this.airworthinessTreeTable = ListUtils.orEmpty(results).filter(
          (elt) => elt.bidoEquipment && !StringUtils.isNullOrEmpty(elt.bidoEquipment.equipmentCode)
        );

        this.createAllAirworhtinessRow(this.airworthinessTreeTable);

        // In asset view mode, show sub assemblies
        if (this.isAssetViewMode) {
          this.topEquipmentCode = this.airworthinessTreeTable[0].bidoEquipment.equipmentCode as string;
          const topEquipment = this.airworthinessMap.get(this.topEquipmentCode) as AirworthinessRow;

          this.airworthinessTable = this.airworthinessTreeTable[0].children.map(
            (elt) => this.airworthinessMap.get(elt.bidoEquipment.equipmentCode as string) as AirworthinessRow
          );
          this.assetAirworthiness = this.airworthinessMap.get(this.topEquipmentCode) as AirworthinessRow;

          this.computeGlobalAlertForEachTopEquipment([topEquipment]);
        } else {
          this.airworthinessTable = this.airworthinessTreeTable.map(
            (elt) => this.airworthinessMap.get(elt.bidoEquipment.equipmentCode as string) as AirworthinessRow
          );

          this.computeGlobalAlertForEachTopEquipment(this.airworthinessTable);
        }
      });
  }

  private loadAirworthinessTableColumnLabelList(): void {
    const observables: Observable<string>[] = [
      this.airworthinessControlFormService.getCsnLabelForAirworthinessControl(),
      this.airworthinessControlFormService.getTsnLabelForAirworthinessControl()
    ];

    forkJoin(observables).subscribe(([cycleBireMeasureReferenceLabel, timeBireMeasureReferenceLabel]) => {
      this.airworthinessTableColCsnLabel = cycleBireMeasureReferenceLabel;
      this.airworthinessTableColTsnLabel = timeBireMeasureReferenceLabel;
    });
  }

  private loadAsset(): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: this.topEquipmentCodeList[0]
    };
    this.airworthinessControlFormService.getEquipment(input).subscribe((result) => {
      this.asset = result;

      this.setComponentContextForAsset();
    });
  }

  private loadConfigurationControl(bidoEquipmentDTO?: BidoEquipmentDTO): void {
    let input: ControlConfigurationInput = {
      checkConfiguration: true,
      checkFl: true,
      checkLogbook: true,
      checkMel: true,
      checkPotential: true,
      checkReferential: true,
      checkStructure: true,
      equipmentCode: '',
      withAllCounters: true,
      withFunctionalLocations: true,
      withMelFlag: true
    };
    if (this.isAssetViewMode) {
      this.configurationControlTable = [];
      this.configurationControlTableLoading = true;

      input = { ...input, equipmentCode: this.asset ? this.asset.equipmentCode || '' : '' };

      this.airworthinessControlFormService.controlConfiguration(input).subscribe((result) => {
        this.configurationControlTable = [
          {
            ok: this.computeConfigurationControl(result, ControlConfigConstants.ICON_GREEN, 'ok'),
            warning: this.computeConfigurationControl(result, ControlConfigConstants.ICON_YELLOW, 'warning'),
            nok: this.computeConfigurationControl(result, ControlConfigConstants.ICON_RED, 'nok')
          }
        ];
        this.configurationControlTableLoading = false;
      });
    } else if (bidoEquipmentDTO) {
      input = { ...input, equipmentCode: bidoEquipmentDTO.equipmentCode ? bidoEquipmentDTO.equipmentCode || '' : '' };
      this.airworthinessControlFormService.controlConfiguration(input).subscribe((result) => {
        this.computeConfigurationControl(result, ControlConfigConstants.ICON_GREEN, 'ok');
        this.computeConfigurationControl(result, ControlConfigConstants.ICON_YELLOW, 'warning');
        this.computeConfigurationControl(result, ControlConfigConstants.ICON_RED, 'nok');
      });
    }
  }

  private computeControlKey(sn: string | undefined, pnCode: string | undefined): string {
    return 'SN:' + (sn ? sn : '') + '|PN:' + (pnCode ? pnCode : '');
  }

  private computeConfigurationControl(
    asset: ControlConfigurationOutput,
    controlValueRef: ControlConfigConstants,
    statusChecked: string
  ): number {
    const checkList = [
      asset.checkConfigurationCause,
      asset.checkCoreCause,
      asset.checkFlCause,
      asset.checkMelCause,
      asset.checkReferentialCause,
      asset.checkStructureCause,
      asset.checkConfigurationCauseAlt,
      asset.checkCoreCauseAlt,
      asset.checkFlCauseAlt,
      asset.checkMelCauseAlt,
      asset.checkReferentialCauseAlt,
      asset.checkStructureCauseAlt,
      asset.checkConfigurationResult,
      asset.checkCoreResult,
      asset.checkFlResult,
      asset.checkMelResult,
      asset.checkReferentialResult,
      asset.checkStructureResult,
      asset.checkLogbookCause,
      asset.checkLogbookCauseAlt,
      asset.checkLogbookResult,
      asset.checkPotentialCause,
      asset.checkPotentialCauseAlt,
      asset.checkPotentialResult
    ];

    let controlValueNb = 0;
    controlValueNb += checkList.map((check) => (check === controlValueRef ? 1 : 0)).reduce((a, b) => a + b, 0);
    const cle = asset.bidoEquipment ? this.computeControlKey(asset.bidoEquipment.sn, asset.bidoEquipment.pnCode) : '';
    let objectStatusNbCtrl = this.subAssetConfigurationControlMap.get(StringUtils.orEmpty(cle));
    if (!objectStatusNbCtrl) {
      objectStatusNbCtrl = {};
      this.subAssetConfigurationControlMap.set(StringUtils.orEmpty(cle), objectStatusNbCtrl);
    }
    objectStatusNbCtrl[statusChecked] = controlValueNb;

    if (!ListUtils.isNullOrEmpty(asset.children)) {
      controlValueNb += (asset.children as ControlConfigurationOutput[])
        .map((assetChild) => this.computeConfigurationControl(assetChild, controlValueRef, statusChecked))
        .reduce((a, b) => a + b, 0);
    }

    return controlValueNb;
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

  private openAssetReview(equipmentCode: string, familyVariantCode: string | undefined): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [equipmentCode],
      familyVariantList: familyVariantCode ? [familyVariantCode] : undefined
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private openConfigurationControl(equipmentCode: string): void {
    const objectId: AirworthinessControlFormComponentInput = {
      equipmentCodeList: [equipmentCode]
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

  private openScheduleMaintenance(equipmentCode: string): void {
    const objectId: ScheduleMaintenanceFormComponentInput = {
      equipmentCode
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      openMode: ComponentOpenMode.Read,
      componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_SCHEDULE_MAINTENANCE_FORM,
      objectId: this.serializationService.serialize(objectId)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private reloadFromCache(): void {
    this.load();
    this.loadConfigurationControl();
  }

  private setAirwothinessTableColumnList(): void {
    this.airworthinessTableCols = [
      { field: 'alert', alignment: 'center', width: '11.5%' },
      { field: 'asset', alignment: 'left', width: '16.5%' },
      { field: 'potential', alignment: 'left', width: '14%' },
      { field: 'measures', alignment: 'left', width: '11%' },
      { field: 'appliedConfiguration', alignment: 'left', width: '16.5%' },
      { field: 'maintenancePlan', alignment: 'left', width: '14%' },
      { field: 'illustration', alignment: 'left', width: '16.5%' }
    ];
  }

  private setAirworthinessTableVisibilityList(): void {
    const allKey = this.getTranslateKey('showAll');
    const onlyAlertsKey = this.getTranslateKey('showOnlyAlerts');
    this.translateService.get([allKey, onlyAlertsKey]).subscribe((results) => {
      const allLabel = !!results ? results[allKey] : 'All';
      const onlyAlertsLabel = !!results ? results[onlyAlertsKey] : 'Only Alerts';
      this.airworthinessTableVisibilityList = [
        { label: allLabel, value: AirworthinessTableVisibility.All },
        { label: onlyAlertsLabel, value: AirworthinessTableVisibility.OnlyAlerts }
      ];
    });
  }

  private setChartLabels(): void {
    const airworthyKey = this.getTranslateKey('airworthy');
    const airworthyWithAlertsKey = this.getTranslateKey('airworthyWithAlerts');
    const notAirworthyKey = this.getTranslateKey('notAirworthy');
    this.translateService.get([airworthyKey, airworthyWithAlertsKey, notAirworthyKey]).subscribe((results) => {
      const airworthyLabel = results ? results[airworthyKey] : 'Airworthy';
      const airworthyWithAlertsLabel = results ? results[airworthyWithAlertsKey] : 'Airworthy With Alerts';
      const notAirworthyLabel = results ? results[notAirworthyKey] : 'Not Airworthy';

      this.chartData.labels = [airworthyLabel, airworthyWithAlertsLabel, notAirworthyLabel];
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

  private setComponentContextForAsset(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP).subscribe((result) => {
      if (this.asset) {
        let componentContext: string;

        if (this.isAssetAircraft) {
          const selectedFunction = ListUtils.orEmpty(result).find(
            (elt) => elt.value === (this.asset as BidoEquipmentDTO).equipmentFunction
          );
          const aircraftLabel = selectedFunction ? selectedFunction.label : 'Aircraft';
          componentContext = `${aircraftLabel} ${this.asset.registration}`;
        } else {
          componentContext = `${this.asset.equipmentDesignation} / ${this.asset.sn}`;
        }

        this.displayComponentContext(componentContext, this.isCreateOpenMode);
      }
    });
  }

  private setNavigationLinkList(): void {
    const assetReviewKey = this.getTranslateKey('assetReview');
    const configurationControlKey = this.getTranslateKey('configurationControl');
    const scheduleMaintenanceKey = this.getTranslateKey('scheduleMaintenance');
    this.translateService
      .get([assetReviewKey, configurationControlKey, scheduleMaintenanceKey])
      .subscribe((results) => {
        const assetReviewLabel = results ? results[assetReviewKey] : 'Asset Review';
        const configurationControlLabel = results
          ? results[configurationControlKey]
          : 'Applied Configuration Management';
        const scheduleMaintenanceLabel = results ? results[scheduleMaintenanceKey] : 'Maintenance Planning';

        this.navigationLinkList = [
          {
            label: assetReviewLabel,
            command: () => {
              this.openAssetReview(
                this.scope.equipmentCodeList[0],
                this.scope.familyVariantList ? this.scope.familyVariantList[0] : undefined
              );
            }
          },
          {
            label: configurationControlLabel,
            command: () => {
              this.openConfigurationControl(this.scope.equipmentCodeList[0]);
            }
          },
          {
            label: scheduleMaintenanceLabel,
            command: () => {
              this.openScheduleMaintenance(this.scope.equipmentCodeList[0]);
            }
          }
        ];
      });
  }

  private setNavigationLinkListForTableRow(): void {
    const aircraftReviewKey = this.getTranslateKey('assetReview');
    const configurationControlKey = this.getTranslateKey('configurationControl');
    const scheduleMaintenanceKey = this.getTranslateKey('scheduleMaintenance');
    this.translateService
      .get([aircraftReviewKey, configurationControlKey, scheduleMaintenanceKey])
      .subscribe((results) => {
        const aircraftReviewLabel = results ? results[aircraftReviewKey] : 'Aircraft Review';
        const configurationControlLabel = results
          ? results[configurationControlKey]
          : 'Applied Configuration Management';
        const scheduleMaintenanceLabel = results ? results[scheduleMaintenanceKey] : 'Maintenance Planning';

        this.navigationLinkListForTableRow = [
          {
            label: aircraftReviewLabel,
            command: () => {
              this.openAssetReview(
                this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode as string,
                this.airworthinessTableSelection[0]._obj.bidoEquipment.familyVariantCode
              );
            }
          },
          {
            label: configurationControlLabel,
            command: () => {
              this.openConfigurationControl(
                this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode as string
              );
            }
          },
          {
            label: scheduleMaintenanceLabel,
            command: () => {
              this.openScheduleMaintenance(
                this.airworthinessTableSelection[0]._obj.bidoEquipment.equipmentCode as string
              );
            }
          }
        ];
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
    if (this.isAssetViewMode) {
      this.topAssetAirworthinessTableRemainingValuesComponent.load();
    }

    const treeNodeMap = this.mapTreeNodeByEquipmentCode(results);
    treeNodeMap.forEach((_, key) => {
      const treeNode = treeNodeMap.get(key);
      const matchingElt = this.airworthinessMap.get(key) as AirworthinessRow;
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
              if (matchingElt.potential.startsWith('-')) {
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
    this.sortAirworthinessRowOnRemainingPotential();
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

  private togglePotentialLoadingIndicator(newStatus: boolean): void {
    this.airworthinessTable.forEach((elt) => {
      elt._potentialLoading = newStatus;
    });
  }

  private updateChartData(): void {
    this.airworthinessTable.forEach((row) => {
      if (row.alert) {
        const AIRWORTHY_VALUES_INDEX = 0;
        const AIRWORTHY_WITH_ALERTS_VALUES_INDEX = 1;
        const NOT_AIRWORTHY_VALUES_INDEX = 2;

        if (row.alert === ControlConfigConstants.ICON_GREEN) {
          this.chartData.datasets[0].data[AIRWORTHY_VALUES_INDEX]++;
          this.airworthyEquipmentNb = this.chartData.datasets[0].data[AIRWORTHY_VALUES_INDEX];
        }
        if (row.alert === ControlConfigConstants.ICON_YELLOW) {
          this.chartData.datasets[0].data[AIRWORTHY_WITH_ALERTS_VALUES_INDEX]++;
          this.airworthyWithAlertEquipmentNb = this.chartData.datasets[0].data[AIRWORTHY_WITH_ALERTS_VALUES_INDEX];
        }
        if (row.alert === ControlConfigConstants.ICON_RED) {
          this.chartData.datasets[0].data[NOT_AIRWORTHY_VALUES_INDEX]++;
          this.notAirworthyEquipmentNb = this.chartData.datasets[0].data[NOT_AIRWORTHY_VALUES_INDEX];
        }
        this.chartData = { ...this.chartData };

        this.chartVisible = this.chartData.datasets[0].data.some((elt) => elt > 0);
      }
    });
  }

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
    this.airworthinessControlFormService.computePotentialForAirworthinessControlInput(params).subscribe((results) => {
      this.setPotentialForAllEquipment(results);
    });
  }

  public sanitizeAndGetBase64Prefix(illustrationDocument: BidoBireDocumentDTO): SafeResourceUrl {
    return this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
  }

  public showIllustration(illustrationDocument: BidoBireDocumentDTO): void {
    this.currentIllustration = this.sanitizeAndGetBase64Prefix(illustrationDocument);
  }

  public hideIllustration(): void {
    this.currentIllustration = undefined;
  }

  public sortAirworthinessRowOnRemainingPotential(): void {
    this.airworthinessTable.sort((data1: AirworthinessRow, data2: AirworthinessRow) => {
      return this.compareRemainingEquivalent(data1, data2);
    });
  }

  public customSort(event: SortEvent): void {
    if (event.field && event.field === 'potential' && event.data) {
      event.data.sort((data1: AirworthinessRow, data2: AirworthinessRow) => {
        const result = this.compareRemainingEquivalent(data1, data2);

        return event.order ? event.order * result : result;
      });
    }
  }

  private compareRemainingEquivalent(data1: AirworthinessRow, data2: AirworthinessRow): number {
    const isNOK1 = data1.alert === ControlConfigConstants.ICON_RED;
    const isNOK2 = data2.alert === ControlConfigConstants.ICON_RED;

    const remainingEquivalent1 = data1._obj.remainingEquivalent;
    const remainingEquivalent2 = data2._obj.remainingEquivalent;

    return ComparatorUtils.compareByRemainingEquivalent(
      { equipment: data1._obj.bidoEquipment, remainingEquivalent: remainingEquivalent1, isNOK: isNOK1 },
      { equipment: data2._obj.bidoEquipment, remainingEquivalent: remainingEquivalent2, isNOK: isNOK2 }
    );
  }
}
