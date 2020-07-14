import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { Subject } from 'rxjs';
import { debounceTime, finalize, takeUntil } from 'rxjs/operators';

import { AppConstants } from '../../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { TechincalQuotationAndSubassembliesOutput } from '../../../../../shared/types/api-input-types/maintenance-component-cockpit/technical-quotation-and-sub-assembly-output.interface';
import { TechnicalQuotationInput } from '../../../../../shared/types/api-input-types/maintenance-component-cockpit/technical-quotation-input.interface';
import { ACTreeData } from '../../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { BireItemForTreeDTO } from '../../../../../shared/types/api-output-types/fleet-management/bire-item-for-tree-dto.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { IWBFindingsCustom } from '../../../../../shared/types/api-output-types/maintenance-component-cockpit/iwb-findings-custom.interface';
import { IWBTaskCustom } from '../../../../../shared/types/api-output-types/maintenance-component-cockpit/iwb-task-custom.interface';
import { SubAssemblySiblingOutput } from '../../../../../shared/types/api-output-types/maintenance-component-cockpit/sub-assembly-sibling-output.interface';
import { TechnicalQuotationOutput } from '../../../../../shared/types/api-output-types/maintenance-component-cockpit/technical-quotation-output.interface';
import { BidmWorkOrderDTOId } from '../../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireDocumentDTO } from '../../../../../shared/types/api-types/bire-document-dto.interface';
import { BireItemDTOId } from '../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BsdeProjectDTO } from '../../../../../shared/types/api-types/bsde-project-dto.interface';
import { ChartType } from '../../../../../shared/types/chart-type.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { ImageUtils } from '../../../../../shared/utils/image-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { BreadcrumbsLabel } from '../../../cockpit-workscope/form/shared/types/breadcrumbs-label.interface';
import { CockpitInspectionFormService } from '../cockpit-inspection-form.service';

interface ConfigurationControl {
  label: string;
  ok: number;
  warning: number;
  nok: number;
}

interface TechnicalQuotationTableFilter {
  decision?: string[];
  sentence?: string[];
  control?: string[];
  pn?: string;
  wo?: string;
}

interface BreadcrumbsInventoryLabel extends BreadcrumbsLabel {
  bireItem?: BireItemForTreeDTO;
  isFromInspection?: boolean;
  isAddInventory?: boolean;
  inventoryList?: TechnicalQuotationOutput[];
}

interface CustomTableColumn {
  field: string;
  alignment: string;
  display: string;
}

interface CustomSiblingsLabelValue {
  label?: string;
  subtitle?: string;
  value?: BireItemForTreeDTO;
  data?: SubAssemblySiblingOutput;
}

interface ProgressChartInterface {
  completed: number;
  notCompleted: number;
}

interface TechnicalQuotationCustomOutput extends TechnicalQuotationOutput {
  index?: number;
  isOtherPN?: boolean;
  iwbFindingsToDisplayHover?: string;
  iwbTaskHover?: string;
  tn?: string;
  trackingNumber?: string;
  icon?: string;
  serialized?: boolean;
}

interface SubAssemblyPageData {
  selectedBireItem?: BireItemDTO;
  parentBireItem?: BireItemForTreeDTO;
  selectedBireItemForTree?: BireItemForTreeDTO;
  bsdeProjectDTO: BsdeProjectDTO;
}

@Component({
  selector: 'aw-info-sub-assembly',
  templateUrl: './info-sub-assembly.component.html',
  styleUrls: ['./info-sub-assembly.component.scss', '../shared/shared.scss']
})
export class InfoSubAssemblyComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
  private static readonly OK: string = '9';
  private static readonly WARNING: string = '11';
  private static readonly NOK: string = '10';
  private static readonly ALL_TYPES_LABEL: string = 'All Types';
  private static readonly LOST_INVENTORY: string = '6-mis';
  private static readonly MISSING_ENTRY_INVENTORY: string = '5-los';

  public subAssemblyPageData: SubAssemblyPageData;
  public bsdeProjectDTO: BsdeProjectDTO;
  public itemFamily: string | undefined;
  public isSerialized: string;

  public familyCodeMap: LabelValue<string>[];

  public subAssemblys: ACTreeData[];

  // Sibling dropdown
  public siblingsList: CustomSiblingsLabelValue[];
  public selectedSibling: BireItemForTreeDTO | undefined;

  // Chart Params
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean;
  public completedNb: number;
  public notCompletedNb: number;

  // Configuration Control Table
  public confControlCols: TableColumn[];
  public confControlList: ConfigurationControl[];

  // Technical QuotationTable
  private technicalQuotationDBList: TechnicalQuotationCustomOutput[];
  public technicalQuotationList: TechnicalQuotationCustomOutput[];
  public technicalQuotationCols: CustomTableColumn[];
  public selectedElements: TechnicalQuotationCustomOutput[];
  public equipmentCode: string;

  public imgSrc: string;
  public openImageDialog: boolean;
  public treePanelLoading: boolean;
  public dialogImgSrc: SafeResourceUrl;

  public showSubAssemblyTree: boolean = true;
  public showAddQuotationPanel: boolean;
  public isTechnicalTableLoaded: boolean;
  public filtersVisible: boolean;

  // Overlay
  public decisionList: LabelValue<string>[];
  public sentenceList: LabelValue<string>[];
  public configurationList: LabelValue<string>[];
  public pnList: LabelValue<string>[];
  public woCodeList: LabelValue<string>[];
  public searchCriteria: TechnicalQuotationTableFilter;

  public mroCenters: LabelValue<string>[];
  public taskList: LabelValue<string>[];
  public selectedTaskType: string;

  private searchQuotationGlobalFilterChanged: Subject<string>;
  public readonly controlConfigConstants: typeof ControlConfigConstants;
  public isFromInspection: boolean = true;
  public isAddInventory: boolean;
  public isItemSerialized: boolean | undefined;

  public inventories: TechnicalQuotationCustomOutput[] = [];
  public showPrintSpinner: boolean;

  // New tab
  private projectNumber: number;
  private parentBireItem: BireItemForTreeDTO;
  public selectedBireItemDTO: BireItemForTreeDTO;
  public selectedSubAssembly: BireItemForTreeDTO;

  public availablePNList: string[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly domSanitizer: DomSanitizer,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly cockpitInspectionFormService: CockpitInspectionFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.controlConfigConstants = ControlConfigConstants;
    this.completedNb = 0;
    this.notCompletedNb = 0;
  }

  public getComponentName(): string {
    return 'InfoSubAssemblyComponent';
  }

  public ngOnInit() {
    this.selectedElements = [];
    this.availablePNList = [];
    this.selectedSubAssembly = {};

    this.subAssemblyPageData = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : undefined;

    if (!!this.subAssemblyPageData.selectedBireItem) {
      const item = this.subAssemblyPageData.selectedBireItem;
      this.displayComponentContext(
        `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`,
        this.isCreateOpenMode
      );
    }

    // Setting Page component Data
    if (!!this.subAssemblyPageData) {
      this.projectNumber = this.subAssemblyPageData.bsdeProjectDTO.projectNumber as number;
      this.selectedBireItemDTO = this.subAssemblyPageData.selectedBireItem as BireItemForTreeDTO;
      this.parentBireItem = this.subAssemblyPageData.parentBireItem as BireItemForTreeDTO;
      this.bsdeProjectDTO = this.subAssemblyPageData.bsdeProjectDTO;
      this.selectedSubAssembly = this.subAssemblyPageData.selectedBireItemForTree as BireItemForTreeDTO;

      if (!!this.selectedSubAssembly.bireDocumentDTO && this.selectedSubAssembly.bireDocumentDTO.docFile) {
        this.selectedSubAssembly.additionalData = this.loadItemStructureNodeIllustrationList(this.selectedSubAssembly);
      }

      this.loadPNList();
    }

    this.setControlGlobalFilter();
    this.init();
  }

  /**********************************
   * Load Image
   **********************************/
  private loadItemStructureNodeIllustrationList(result: BireItemForTreeDTO): SafeResourceUrl {
    const doc = result.bireDocumentDTO as BireDocumentDTO;

    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${ImageUtils.getBase64Prefix(doc.docType)}${doc.docFile}`);
  }

  public refresh() {
    this.initChart();
  }

  private init() {
    this.fetchDropdown();

    this.chartData = {
      datasets: [],
      labels: []
    };
    this.confControlList = [];
    this.subAssemblys = [];
    this.siblingsList = [];
    this.technicalQuotationList = [];
    this.pnList = [];
    this.woCodeList = [];
    this.selectedTaskType = '0';

    this.renderTableCols();
    this.initChart();
    this.getTechnicalQuotation();
  }

  /**********************************
   * INIT DROPDOWNS
   **********************************/
  private fetchDropdown() {
    this.propertiesService.resetCache(GenericPropertyConstants.TASK_TYPE_MAP);
    this.setSearchControlList();
    this.setSearchSentenceDecisionList();
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((res) => {
      this.familyCodeMap = res;
    });

    this.cockpitInspectionFormService.findMROCenter().subscribe((res) => {
      this.mroCenters = res;
    });

    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe((results) => {
      this.taskList = results || [];

      this.taskList.unshift({
        label: InfoSubAssemblyComponent.ALL_TYPES_LABEL,
        value: '0'
      });

      this.selectedTaskType = '0';
    });
  }

  private renderTableCols() {
    this.technicalQuotationCols = [
      { field: 'equipment', alignment: 'left', display: 'table-cell' },
      { field: 'pn', alignment: 'left', display: 'none' },
      { field: 'sn', alignment: 'left', display: 'none' },
      { field: 'sentenceValue', alignment: 'left', display: 'table-cell' },
      { field: 'decisionValue', alignment: 'left', display: 'table-cell' },
      {
        field: 'quantity',
        alignment: 'left',
        display: !!this.selectedBireItemDTO && this.selectedBireItemDTO.serializedPart ? 'none' : 'table-cell'
      },
      { field: 'iwbFindingsToDisplay', alignment: 'left', display: 'table-cell' },
      { field: 'iwbTask', alignment: 'left', display: 'table-cell' },
      { field: 'woCode', alignment: 'center', display: 'table-cell' },
      { field: 'targetPn', alignment: 'left', display: 'table-cell' },
      { field: 'control', alignment: 'center', display: 'table-cell' },
      { field: 'receiptWareHouse', alignment: 'left', display: 'none' },
      { field: 'issueWareHouse', alignment: 'left', display: 'none' }
    ];

    this.confControlCols = [
      { field: 'label', alignment: 'left', width: '30%' },
      { field: 'ok', alignment: 'center', width: '20%' },
      { field: 'warning', alignment: 'center', width: '30%' },
      { field: 'nok', alignment: 'center', width: '20%' }
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
          data: [],
          backgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE],
          hoverBackgroundColor: [AppConstants.COLOR_GREEN, AppConstants.COLOR_ORANGE]
        }
      ],
      labels: []
    };

    this.setChartLabels();
    this.setChartOptions();
  }

  private setChartLabels(): void {
    const completedKey = this.getTranslateKey('completed');
    const notCompletedKey = this.getTranslateKey('notCompleted');
    this.translateService.get([completedKey, notCompletedKey]).subscribe((results) => {
      const completedLabel = results ? results[completedKey] : 'Completed';
      const notCompletedLabel = results ? results[notCompletedKey] : 'Not Completed';

      this.chartData.labels = [completedLabel, notCompletedLabel];
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

  /**********************************
   * RENDER DATA FOR PROGRESS CHART
   **********************************/
  public renderProgress(event: ProgressChartInterface) {
    this.calculateProgressChartData();
    if (!!this.chartData && !!this.chartData.datasets) {
      setTimeout(() => {
        this.completedNb += event.completed;
        this.notCompletedNb += event.notCompleted;
        this.chartData.datasets[0].data = [this.completedNb, this.notCompletedNb];
        this.chartData = { ...this.chartData };
      });
    }
  }

  /**********************************
   * CONFIGURATION CONTROL TABLE
   **********************************/
  private fillConfControlTable() {
    this.confControlList = [];
    this.confControlList.push({
      label: `${this.translateService.instant(this.getTranslateKey('item'))}`,
      nok: this.getQuotationCounters(InfoSubAssemblyComponent.NOK),
      ok: this.getQuotationCounters(InfoSubAssemblyComponent.OK),
      warning: this.getQuotationCounters(InfoSubAssemblyComponent.WARNING)
    });

    if (!!this.subAssemblys && this.subAssemblys.length > 0) {
      this.confControlList.push({
        label: `${this.translateService.instant(this.getTranslateKey('subAssemblies'))}`,
        nok: this.getSubAssemblyCounters(InfoSubAssemblyComponent.NOK),
        ok: this.getSubAssemblyCounters(InfoSubAssemblyComponent.OK),
        warning: this.getSubAssemblyCounters(InfoSubAssemblyComponent.WARNING)
      });
    } else {
      if (this.confControlCols[0].field === 'label') {
        // Removing label column in case subassemby not present
        this.confControlCols.shift();
      }
    }
  }

  public calculateOKColorCode(rowData: ConfigurationControl): boolean {
    if (!rowData.ok) {
      return false;
    } else {
      if (!!rowData.ok) {
        if (!!rowData.nok) {
          return false;
        } else if (rowData.ok < rowData.warning) {
          return false;
        }
      }
    }

    return true;
  }

  public calculateWarningColorCode(rowData: ConfigurationControl) {
    if (!rowData.warning) {
      return false;
    } else {
      if (!!rowData.warning) {
        if (!!rowData.nok) {
          return false;
        } else if (rowData.warning < rowData.ok) {
          return false;
        }
      }
    }

    return true;
  }

  private getSubAssemblyCounters(code: string): number {
    let counter = 0;
    this.subAssemblys.forEach((res) => {
      if (!!res.data) {
        if (code === res.data.icon) {
          counter++;
        }
      }
    });

    return counter;
  }

  private getQuotationCounters(code: string): number {
    let counter = 0;
    this.technicalQuotationList.forEach((res) => {
      if (code === res.targetResultMatchingIcon) {
        counter++;
      }
    });

    return counter;
  }

  /**********************************
   * IMAGE ILLUSTRATION DIALOG OPERATIONS
   **********************************/
  public openImage(event: SafeResourceUrl) {
    this.openImageDialog = true;
    this.dialogImgSrc = event;
  }

  public closeDialog() {
    this.openImageDialog = false;
  }

  /**********************************
   * LOAD TECHNICAL QUOTATION TABLE DATA
   **********************************/
  public getTechnicalQuotation() {
    const input: TechnicalQuotationInput = {
      bireItemDTO: this.selectedBireItemDTO as BireItemDTO,
      projectNumber: !!this.projectNumber ? this.projectNumber : undefined,
      taskTypeCode: this.selectedTaskType
    };

    this.isTechnicalTableLoaded = true;
    this.cockpitInspectionFormService
      .getTechnicalQuotation(input)
      .pipe(
        finalize(() => {
          this.isTechnicalTableLoaded = false;
          if (!this.subAssemblys || this.subAssemblys.length === 0) {
            this.calculateProgressChartData();
          }
        })
      )
      .subscribe((data: TechincalQuotationAndSubassembliesOutput[]) => {
        const techQuotationData = data[0];
        this.technicalQuotationDBList = _cloneDeep(techQuotationData.technicalQuotationList);
        this.technicalQuotationList = this.customizeTechnicalTableData(techQuotationData.technicalQuotationList);
        if (!!techQuotationData.subAssemblies && techQuotationData.subAssemblies.length > 0) {
          if (!!techQuotationData.subAssemblies[0].children && techQuotationData.subAssemblies[0].children.length > 0) {
            this.subAssemblys = [...(techQuotationData.subAssemblies[0].children as ACTreeData[])];
            this.showSubAssemblyTree = true;
          }
        }
        this.loadItemInformation();
        this.fillConfControlTable();
        this.setPNAndWOList();
        this.setAssemblySiblings();
      });
  }

  private customizeTechnicalTableData(tableData: TechnicalQuotationCustomOutput[]): TechnicalQuotationCustomOutput[] {
    const MAX_ELEMENT = 3;

    tableData.forEach((row, index) => {
      row.index = index;

      if (!!row.iwbFindingsToDisplay) {
        if (row.iwbFindingsToDisplay.length > 0) {
          const findings = row.iwbFindingsToDisplay as IWBFindingsCustom[];
          row.iwbFindingsToDisplay = [];
          row.iwbFindingsToDisplayHover = '';
          findings.forEach((res) => {
            row.iwbFindingsToDisplay.push(
              [
                StringUtils.isNullOrEmpty(res.damageCode) ? '' : res.damageCode,
                StringUtils.isNullOrEmpty(res.quantity) ? '' : res.quantity,
                StringUtils.isNullOrEmpty(res.criticality) ? '' : res.criticality
              ]
                .filter((s: string) => !StringUtils.isEmpty(s))
                .join(' / ')
            );

            row.iwbFindingsToDisplayHover += [
              StringUtils.isNullOrEmpty(res.damageCode) ? '' : res.damageCode,
              StringUtils.isNullOrEmpty(res.quantity) ? '' : res.quantity,
              StringUtils.isNullOrEmpty(res.criticality) ? '' : res.criticality,
              StringUtils.isNullOrEmpty(res.findingComment) ? '\n' : `${res.findingComment}\n`
            ]
              .filter((s: string) => !StringUtils.isEmpty(s))
              .join(' / ');
          });
        }

        if (row.iwbFindingsToDisplay.length > MAX_ELEMENT) {
          row.iwbFindingsToDisplay = [...row.iwbFindingsToDisplay.slice(0, MAX_ELEMENT)];
          row.iwbFindingsToDisplay.push('[...]');
        }
      }

      if (!!row.iwbTask) {
        if (row.iwbTask.length > 0) {
          const tasks = row.iwbTask as IWBTaskCustom[];
          row.iwbTask = [];
          row.iwbTaskHover = '';
          tasks.forEach((res) => {
            row.iwbTask.push(StringUtils.isNullOrEmpty(res.taskCode) ? '' : res.taskCode);

            row.iwbTaskHover += [
              StringUtils.isNullOrEmpty(res.taskCode) ? '' : res.taskCode,
              StringUtils.isNullOrEmpty(res.taskDescription) ? '\n' : `${res.taskDescription}\n`
            ]
              .filter((s: string) => !StringUtils.isEmpty(s))
              .join(' / ');
          });
        }

        if (row.iwbTask.length > MAX_ELEMENT) {
          row.iwbTask = [...row.iwbTask.slice(0, MAX_ELEMENT)];
          row.iwbTask.push('[...]');
        }
      }

      // Handling for Other PN
      if (this.availablePNList.indexOf(row.pn as string) === -1) {
        row.isOtherPN = true;
      }
    });

    return tableData;
  }

  // Loading ITEM Panel Information
  private loadItemInformation() {
    this.selectedSubAssembly = { ...this.selectedSubAssembly };
    if (!!this.selectedSubAssembly.itemFamilyCode) {
      this.itemFamily = this.selectedSubAssembly.itemFamilyCode;
      this.isSerialized = `${
        !!this.selectedSubAssembly
          ? this.selectedSubAssembly.serializedPart
            ? ` (${this.translateService.instant(this.getTranslateKey('serialized'))})`
            : ` (${this.translateService.instant(this.getTranslateKey('notSerialized'))})`
          : undefined
      }`;

      this.isItemSerialized = this.selectedSubAssembly.serializedPart;
    }
  }

  /**********************************
   * SETTING SIBLINGS LIST
   **********************************/
  private setAssemblySiblings() {
    const input: TechnicalQuotationInput = {
      bireItemDTO: this.parentBireItem as BireItemDTO,
      projectNumber: this.projectNumber
    };

    this.cockpitInspectionFormService.getSubAssemblySiblingList(input).subscribe((data: SubAssemblySiblingOutput[]) => {
      data.forEach((res) => {
        if (!!res) {
          const bireItemForTreeDTO = res.bireItemDTO as BireItemForTreeDTO;
          bireItemForTreeDTO.expectedQuantity = this.getExpectedQuantity(res);
          bireItemForTreeDTO.realQuantity = this.getRealQuantity(res);
          bireItemForTreeDTO.bireDocumentDTO = res.bireDocumentDTO;

          this.siblingsList.push({
            label: [
              bireItemForTreeDTO.chapter,
              bireItemForTreeDTO.section,
              bireItemForTreeDTO.subject,
              bireItemForTreeDTO.sheet,
              bireItemForTreeDTO.marks
            ].join('-'),
            subtitle: bireItemForTreeDTO.name,
            value: bireItemForTreeDTO,
            data: res
          });

          this.setSiblingSelection();
        }
      });
    });
  }

  private setSiblingSelection() {
    // const data = this.breadcrumbsList[this.breadcrumbsList.length - 1].data as PageData;
    const bireItem = this.selectedBireItemDTO as BireItemForTreeDTO;
    this.siblingsList.forEach((res) => {
      const item = `${bireItem.chapter}-${bireItem.section}-${bireItem.subject}-${bireItem.sheet}-${bireItem.marks}`;
      if (res.label === item) {
        this.selectedSibling = res.value;
      }
    });
  }

  /**********************************
   * OPEN SUB ASSEMBLY
   **********************************/
  public openSubAssembly(node: ACTreeData) {
    const pageData: SubAssemblyPageData = {
      parentBireItem: !!node.parent && !!node.parent.data ? node.parent.data : this.selectedBireItemDTO,
      selectedBireItem: node.bireItemDTO as BireItemDTO,
      selectedBireItemForTree: node.data,
      bsdeProjectDTO: this.bsdeProjectDTO
    };

    this.openItemChildren(pageData);
  }

  private openItemChildren(item) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_INFO_SUB_ASSEMBLY_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!item) {
      data.objectId = this.serializationService.serialize(item);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openQuotationPanel() {
    this.isAddInventory = true;
    this.showAddQuotationPanel = true;

    const bireItem = this.subAssemblyPageData.selectedBireItemForTree as BireItemForTreeDTO;

    const item: BreadcrumbsInventoryLabel = {
      data: this.bsdeProjectDTO,
      subtittle: this.selectedSubAssembly.name,
      title: `${bireItem.chapter}-${bireItem.section}-${bireItem.subject}-${bireItem.sheet}-${bireItem.marks}`,
      bireItem,
      index: -1,
      isAddInventory: this.isAddInventory,
      isFromInspection: true,
      inventoryList: []
    };

    this.openItemInventory(item);
  }

  public hideEquipmentPanel() {
    this.showAddQuotationPanel = false;
  }

  public editInventory() {
    this.inventories =
      !!this.selectedElements && this.selectedElements.length > 0 ? this.selectedElements : this.technicalQuotationList;

    const inventoryList = _cloneDeep(this.inventories);
    inventoryList.forEach((res) => {
      res.icon = res.targetResultMatchingIcon;
      res.trackingNumber = res.tn;
      res.sentenceValue = !!res.sentenceValue ? this.getSentenceValue(res.sentenceValue) : undefined;
      res.decisionValue = !!res.decisionValue ? this.getDecisionValue(res.decisionValue) : undefined;
      res.serialized = !!this.isItemSerialized;
    });

    this.isAddInventory = false;
    this.showAddQuotationPanel = true;

    const bireItem = this.subAssemblyPageData.selectedBireItemForTree as BireItemForTreeDTO;
    const item: BreadcrumbsInventoryLabel = {
      data: this.bsdeProjectDTO,
      subtittle: this.selectedSubAssembly.name,
      title: `${bireItem.chapter}-${bireItem.section}-${bireItem.subject}-${bireItem.sheet}-${bireItem.marks}`,
      bireItem,
      index: -1,
      isAddInventory: this.isAddInventory,
      isFromInspection: true,
      inventoryList
    };

    this.openItemInventory(item);
  }

  private openItemInventory(item) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_ITEM_INVENTORY,
      openMode: ComponentOpenMode.Read
    };

    if (!!item) {
      data.objectId = this.serializationService.serialize(item);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openMeasure() {
    const bidoEquipment: BidoEquipmentDTO = {
      sn: this.isItemSerialized ? this.selectedElements[0].sn : undefined,
      pnCode: this.selectedElements[0].pn
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_MEASURE_COMPONENT,
      openMode: ComponentOpenMode.Read
    };

    data.objectId = this.serializationService.serialize(bidoEquipment);
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * EVENT ON LOADING ASSEMBLY'S SIBLINGS
   **********************************/
  public loadSibling() {
    const node: ACTreeData = {
      bireItemDTO: this.selectedSibling as BireItemDTO,
      data: this.selectedSibling as BireItemForTreeDTO
    };

    if (!!this.selectedSibling) {
      this.selectedSibling.itemFamilyCode = !!this.selectedSibling.itemFamilyCode
        ? this.familyCodeMap.filter(
            (res) => (this.selectedSibling as BireItemForTreeDTO).itemFamilyCode === res.value
          )[0].label
        : undefined;
    }

    this.openSubAssembly(node);
  }

  /**********************************
   * OPEN PART NUMBER UC
   **********************************/
  public openPartNumberLink(pnCode: string): void {
    this.openPN(pnCode, ComponentOpenMode.Read);
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.' + ComponentConstants.ENG_PART_NUMBER_FORM;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * OPEN WORK ORDER UC
   **********************************/
  public openWorkOrderLink(rowData: TechnicalQuotationOutput): void {
    if (!!rowData.woId && !!rowData.woProjectId) {
      const workOrderDTOId: BidmWorkOrderDTOId = {
        woId: rowData.woId,
        projectId: rowData.woProjectId
      };
      this.openWorkOrder(workOrderDTOId, ComponentOpenMode.Read);
    }
  }

  public openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * TABLE FILTER OPERATIONS
   **********************************/
  private setSearchControlList(): void {
    const OK = ControlConfigConstants.ICON_GREEN_LED_CODE;
    const NOK = ControlConfigConstants.ICON_RED_LED_CODE;
    const WARNING = ControlConfigConstants.ICON_YELLOW_LED_CODE;

    const alertNokKey = this.getTranslateKey('alertNok');
    const alertOkKey = this.getTranslateKey('alertOk');
    const alertWarningKey = this.getTranslateKey('alertWarning');

    this.translateService.get([alertNokKey, alertOkKey, alertWarningKey]).subscribe((results) => {
      const alertNokLabel: string = results ? results[alertNokKey] : 'NOK';
      const alertOkLabel: string = results ? results[alertOkKey] : 'OK';
      const alertWarningLabel: string = results ? results[alertWarningKey] : 'WARNING';

      this.configurationList = [
        {
          label: alertOkLabel,
          value: OK
        },
        {
          label: alertWarningLabel,
          value: WARNING
        },
        {
          label: alertNokLabel,
          value: NOK
        }
      ];
    });
  }

  /**********************************
   * SETTING DROPDOWN
   **********************************/
  private setSearchSentenceDecisionList(): void {
    this.cockpitInspectionFormService.fetchSentenceList().subscribe((res) => {
      this.sentenceList = res;
    });

    this.cockpitInspectionFormService.fetchDecisionList().subscribe((res) => {
      this.decisionList = res;
    });
  }

  private setPNAndWOList(): void {
    this.technicalQuotationList.forEach((res: TechnicalQuotationOutput) => {
      if (!!res && !!res.pn) {
        this.pnList.push({
          label: res.pn,
          value: res.pn
        });
      }

      if (!!res.woCode) {
        this.woCodeList.push({
          label: res.woCode,
          value: res.woCode
        });
      }
    });
  }

  /**********************************
   * TABLE FILTER OPERATIONS
   **********************************/
  public filterWithCriteria() {
    if (Object.keys(this.searchCriteria).length === 0) {
      this.technicalQuotationList = this.customizeTechnicalTableData(_cloneDeep(this.technicalQuotationDBList));
    } else {
      this.searchQuotationGlobalFilterChanged.next();
    }
  }

  public resetTableFilters() {
    this.searchCriteria = {};
  }

  private setControlGlobalFilter(): void {
    this.resetTableFilters();
    this.searchQuotationGlobalFilterChanged = new Subject();
    this.searchQuotationGlobalFilterChanged
      .pipe(debounceTime(InfoSubAssemblyComponent.SEARCH_TEXT_DEBOUNCE_TIME), takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.updateQuotationTableDisplayed();
      });
  }

  private matchFilters(row: TechnicalQuotationOutput, searchCriteria: TechnicalQuotationTableFilter): boolean {
    const pn = searchCriteria.pn === row.pn;
    const wo = searchCriteria.wo === row.woCode;

    let decision;
    if (!!row.decision) {
      decision = !!searchCriteria.decision && searchCriteria.decision.indexOf(row.decision as string) > -1;
    }

    let sentence;
    if (!!row.sentenceValue) {
      const sentenceLabel = this.sentenceList.filter((res) => res.label === row.sentenceValue)[0].value;
      sentence = !!searchCriteria.sentence && searchCriteria.sentence.indexOf(sentenceLabel as string) > -1;
    }

    let control;
    if (!!row.targetResultMatchingIcon) {
      control = !!searchCriteria.control && searchCriteria.control.indexOf(row.targetResultMatchingIcon as string) > -1;
    }

    return pn || wo || decision || sentence || control;
  }

  private updateQuotationTableDisplayed(): void {
    this.technicalQuotationList = [];
    this.technicalQuotationList = _cloneDeep(this.technicalQuotationDBList);

    this.technicalQuotationList = this.customizeTechnicalTableData(
      this.technicalQuotationList.filter((elt) => this.matchFilters(elt, this.searchCriteria))
    );
  }

  public getExpectedQuantity(rowData: BireItemForTreeDTO): string | undefined {
    const qty = rowData.quantity;

    rowData.expectedQuantity =
      qty !== undefined && qty.split(' ').length === 2
        ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
        : qty === '0'
        ? qty
        : undefined;

    return rowData.expectedQuantity;
  }

  public getRealQuantity(rowData: BireItemForTreeDTO): string | undefined {
    const qty = rowData.quantity;

    rowData.realQuantity =
      qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;

    return rowData.realQuantity;
  }

  /**********************************
   * CALCULATE PROGRESS CHART DATA
   **********************************/
  public calculateProgressChartData() {
    this.completedNb = 0;
    this.notCompletedNb = 0;
    this.technicalQuotationList.forEach((res) => {
      if (
        !!res.decision &&
        !!res.sentenceValue &&
        (res.decision !== InfoSubAssemblyComponent.LOST_INVENTORY ||
          res.decision !== InfoSubAssemblyComponent.MISSING_ENTRY_INVENTORY)
      ) {
        this.completedNb =
          !this.isItemSerialized && !!res.quantity && parseInt(res.quantity, 10) > 0
            ? this.completedNb + parseInt(res.quantity, 10)
            : this.completedNb + 1;
      } else {
        this.notCompletedNb =
          !this.isItemSerialized && !!res.quantity && parseInt(res.quantity, 10) > 0
            ? this.notCompletedNb + parseInt(res.quantity, 10)
            : this.notCompletedNb + 1;
      }
    });

    // Handling for missing quantities
    if (
      !!this.selectedSubAssembly.expectedQuantity &&
      !!this.technicalQuotationList &&
      (this.technicalQuotationList.length < Number(this.selectedSubAssembly.expectedQuantity) ||
        this.technicalQuotationList.length < Number(this.selectedSubAssembly.realQuantity))
    ) {
      const totalInventoryQty = this.technicalQuotationList.reduce(
        (acc, val) => acc + parseInt(val.quantity as string, 10),
        0
      );
      const missingQuantities =
        Number(this.selectedSubAssembly.expectedQuantity) > Number(this.selectedSubAssembly.realQuantity)
          ? Number(this.selectedSubAssembly.expectedQuantity) - totalInventoryQty
          : Number(this.selectedSubAssembly.realQuantity) - totalInventoryQty;
      this.notCompletedNb = this.notCompletedNb + missingQuantities;
    }

    this.chartData.datasets[0].data = [this.completedNb, this.notCompletedNb];
    this.chartData = { ...this.chartData };
  }

  /*****************************************
   * Print Inventory as PDF
   ****************************************/
  public printPDF() {
    const input: TechnicalQuotationInput = {
      bireItemDTO: this.selectedBireItemDTO as BireItemDTO,
      projectNumber: !!this.projectNumber ? this.projectNumber : undefined
    };

    this.showPrintSpinner = true;
    this.cockpitInspectionFormService
      .printPDF(input)
      .pipe(
        finalize(() => {
          this.showPrintSpinner = false;
        })
      )
      .subscribe(
        (res) => {
          if (!!res.fileContent) {
            this.downLoadFiles(res.fileContent, res.fileName as string);
          }
        },
        (error) => {
          const httpError = error as HttpErrorResponse;
          if (!!httpError.error && !!httpError.error.errorDesc) {
            this.messageService.showErrorMessage(httpError.error.errorDesc);
          }
          this.showPrintSpinner = false;
        }
      );
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  /*********************************************
   * Fetch Sentence List
   *********************************************/
  public getSentenceValue(label: string): string | undefined {
    const dto = this.sentenceList.filter((res) => res.label === label);

    return !!dto && dto.length > 0 ? dto[0].value : undefined;
  }

  /*********************************************
   * Fetch Decision List
   *********************************************/
  public getDecisionValue(label: string): string | undefined {
    const dto = this.decisionList.filter((res) => res.label === label);

    return !!dto && dto.length > 0 ? dto[0].value : undefined;
  }

  /********************************************
   * Load PN list
   ********************************************/
  private loadPNList() {
    const input: BireItemDTOId = this.selectedBireItemDTO as BireItemDTOId;

    this.cockpitInspectionFormService
      .getPartNumberStructure(input)
      .subscribe((res: GetPartNumberStructureOutputDTO[]) => {
        if (!!res && res.length > 0) {
          res.forEach((dto) => {
            this.availablePNList.push(dto.pn as string);
          });
        }
      });
  }
}
