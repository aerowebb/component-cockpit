import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { TreeNode } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { BireItemForTreeDTO } from '../../../../shared/types/api-output-types/fleet-management/bire-item-for-tree-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { ChartType } from '../../../../shared/types/chart-type.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { CockpitInspectionFormService } from './cockpit-inspection-form.service';

interface PageData {
  bireItemDTO?: BireItemDTO;
  node?: BireItemDTO;
  bsdeProjectDTO?: BsdeProjectDTO;
  children?: TreeNode[];
}
interface BreadcrumbsLabel {
  title?: string;
  subtittle?: string;
  index: number;
  data?: PageData;
}

interface EventTreeNode {
  parent?: TreeNode;
  data?: BireItemForTreeDTO;
  children?: ACTreeData[];
  bireItemDTO?: BireItemDTO;
}

interface ProgressChartInterface {
  completed: number;
  notCompleted: number;
}

interface SubAssemblyPageData {
  selectedBireItem?: BireItemDTO;
  selectedBireItemForTree?: BireItemForTreeDTO;
  parentBireItem?: BireItemForTreeDTO;
  bsdeProjectDTO?: BsdeProjectDTO;
}

@Component({
  selector: 'aw-cockpit-inspection-form',
  styleUrls: ['./cockpit-inspection-form.component.scss', './shared/shared.scss'],
  templateUrl: './cockpit-inspection-form.component.html'
})
export class CockpitInspectionFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public bsdeProjectDTO: BsdeProjectDTO;
  public mroCenter: string | undefined;
  public panelLoading: boolean;
  public subtitle: string;

  // Tree Params
  public itemStructureDisplayed: ACTreeData[];
  public itemStructureNodeSelected: ACTreeData[] | undefined;
  public structureTableCols: TableColumn[];
  public subAssemblys: ACTreeData[];

  public imgSrc: string;
  public openImageDialog: boolean;

  public dialogImgSrc: SafeResourceUrl;

  // Chart Params
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartVisible: boolean;
  public completedNb: number;
  public notCompletedNb: number;
  public chartContentReady: boolean = true;

  // Sub-Assembly Form
  public showInfoSubAssembly: boolean;
  public selectedSubAssembly: BireItemDTO;
  public selectedBireItemDTO: BireItemDTO;
  public breadcrumbsList: BreadcrumbsLabel[];
  public treeContentReady: boolean;

  private mroCenters: LabelValue<string>[];
  private customerList: LabelValue<string>[];

  // Button Controls
  public isHideDisabled: boolean;

  public bidoEquipmentDTO: BidoEquipmentDTO | undefined;
  public bireItemDTO: BireItemDTO | undefined;
  public familyVariants: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly cockpitInspectionFormService: CockpitInspectionFormService,
    private readonly translateService: TranslateService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.familyVariants = [];
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_COCKPIT_INSPECTION_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.init();
    this.renderTreeTableColumns();
    this.loadMROCenter();
    this.loadFamilyVariants();
    this.bidoEquipmentDTO = {};
  }

  public refresh() {
    if (this.breadcrumbsList.length === 0 || this.breadcrumbsList.length === 1) {
      this.treeContentReady = false;
      this.init();
      this.loadScreenData();
    }
  }

  /**********************************
   * INITIALIZATION
   **********************************/
  private init() {
    this.bsdeProjectDTO = {};
    this.itemStructureNodeSelected = [];
    this.itemStructureDisplayed = [];
    this.breadcrumbsList = [];
    this.subAssemblys = [];

    this.selectedSubAssembly = {};
    this.chartData = {
      datasets: [],
      labels: []
    };
  }

  private loadScreenData() {
    this.fetchProjectDetails();
    this.initChart();
  }

  private loadMROCenter(): void {
    // Load dropdowns
    const observables: Observable<LabelValue<string>[]>[] = [
      this.cockpitInspectionFormService.findMROCenter(),
      this.cockpitInspectionFormService.findAllCustomers()
    ];

    forkJoin(observables).subscribe((results) => {
      this.mroCenters = results[0] || [];
      this.customerList = results[1] || [];
      this.loadScreenData();
    });
  }

  public loadFamilyVariants(): void {
    this.familyVariants = [];
    this.cockpitInspectionFormService.loadFamilyVariants().subscribe(
      (results) => {
        results.forEach((result) => {
          const label1 = result.familyname ? result.familyname : result.familyCode;
          const label2 = result.variantName ? result.variantName : result.variantCode;
          const label = `${label1}-${label2}`;
          const value = BidoFamilyVariantUtils.buildFamilyVariantCode(result.familyCode, result.variantCode);
          if (!!label && !!value) {
            const familyVariant: LabelValue<string> = {
              label,
              value
            };
            this.familyVariants.push(familyVariant);
          } else {
            super.throwUnboundLocalError('loadFamilyVariants', 'label && value');
          }
        });
        this.familyVariants.sort((a, b) =>
          !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
        );
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
      }
    );
  }

  /**********************************
   * TREE TABLE COLUMNS
   **********************************/
  private renderTreeTableColumns() {
    this.structureTableCols = [
      { field: 'item', alignment: 'left', width: '20%' },
      { field: 'functionData', alignment: 'left', width: '10%' },
      { field: 'itemFamilyCode', alignment: 'left', width: '10%' },
      { field: 'progress', alignment: 'center', width: '10%' },
      { field: 'quantity', alignment: 'left', width: '10%' },
      { field: 'configuration', alignment: 'center', width: '10%' },
      { field: 'illustration', alignment: 'center', width: '20%' },
      { field: 'action', alignment: 'center', width: '10%' }
    ];
  }

  /**********************************
   * FETCH PROJECT DETAILS
   **********************************/
  private fetchProjectDetails() {
    if (!!this.componentData && !!this.componentData.objectId) {
      const projectNumber: number = this.serializationService.deserialize(this.componentData.objectId);
      this.panelLoading = true;
      this.cockpitInspectionFormService
        .findBsdeProjectByProjectNumber(projectNumber)
        .pipe(
          finalize(() => {
            this.panelLoading = false;
          })
        )
        .subscribe((result) => {
          this.mroCenter = !result.repairCenterCode
            ? undefined
            : this.mroCenters.filter((res) => res.value === result.repairCenterCode)[0].label;

          result.customerCode = !result.customerCode
            ? undefined
            : this.customerList.filter((res) => res.value === result.customerCode)[0].label;

          this.bsdeProjectDTO = result;

          // Setting Context of screen
          if (!!result.projectNumber) {
            this.subtitle = [
              StringUtils.isNullOrEmpty(result.projectNumber.toString()) ? '' : `N° ${result.projectNumber}`,
              StringUtils.isNullOrEmpty(result.projectPn) ? '' : `P/N ${result.projectPn}`,
              StringUtils.isNullOrEmpty(result.projectSn) ? '' : `S/N ${result.projectSn}`
            ]
              .filter((s) => !StringUtils.isEmpty(s))
              .join(' | ');
          }
          this.displayComponentContext(this.subtitle, this.isCreateOpenMode);

          if (!!this.bsdeProjectDTO.projectPn || !!this.bsdeProjectDTO.projectSn) {
            const input: BidoEquipmentDTO = {
              pnCode: this.bsdeProjectDTO.projectPn,
              sn: this.bsdeProjectDTO.projectSn
            };
            this.cockpitInspectionFormService.findBidoEquipmentsByPnAndSn(input).subscribe((res) => {
              this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : undefined;
            });
          }

          this.panelLoading = false;
          this.treeContentReady = true;
        });
    }
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
      const completedLabel: string = results ? results[completedKey] : 'Completed';
      const notCompletedLabel: string = results ? results[notCompletedKey] : 'Not Completed';

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

  public clearChartData(): void {
    this.chartData.datasets[0].data = [0, 0];

    this.completedNb = 0;
    this.notCompletedNb = 0;
  }

  /**********************************
   * RENDER DATA FOR PROGRESS CHART
   **********************************/
  public renderProgress(event: ProgressChartInterface) {
    if (!!this.chartData && !!this.chartData.datasets) {
      this.chartContentReady = false;
      this.completedNb = event.completed;
      this.notCompletedNb = event.notCompleted;
      this.chartData.datasets[0].data = [event.completed, event.notCompleted];
      this.chartData = { ...this.chartData };
    }
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
   * OPEN SUB-ASSEMBLY and ASSOSCIATED FUNCTIONALITY
   **********************************/
  public openSubAssembly(event: EventTreeNode) {
    const pageData: SubAssemblyPageData = {
      parentBireItem: !!event.parent && !!event.parent.data ? event.parent.data : this.bireItemDTO,
      selectedBireItem: event.bireItemDTO as BireItemDTO,
      selectedBireItemForTree: event.data,
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

  /**********************************
   * OPEN PART NUMBER UC
   **********************************/
  public openPartNumberLink(): void {
    if (!!this.bidoEquipmentDTO && !!this.bireItemDTO) {
      const bireVersionPnDTO: BireVersionPnDTO = {
        subject: this.bidoEquipmentDTO.subject,
        sheet: this.bidoEquipmentDTO.sheet,
        marks: this.bidoEquipmentDTO.marks,
        chapter: this.bidoEquipmentDTO.chapter,
        section: this.bidoEquipmentDTO.section,
        pnCode: this.bsdeProjectDTO.projectPn,
        familyCode: this.bireItemDTO.familyCode,
        variantCode: this.bireItemDTO.variantCode,
        structureType: this.bireItemDTO.structureType
      };

      this.cockpitInspectionFormService.getPartNumberStructure(bireVersionPnDTO as BireItemDTOId).subscribe((res) => {
        if (!!res && res.length > 0) {
          const partNum = res.filter(
            (dto) =>
              !!dto.bireVersionPnDTO &&
              this.bsdeProjectDTO.projectPn === dto.bireVersionPnDTO.pnCode &&
              this.bsdeProjectDTO.projectSn
          );

          if (!!partNum && partNum.length > 0) {
            bireVersionPnDTO.isnAta = partNum[0].isn;
            bireVersionPnDTO.versionNumber = partNum[0].versionNumber;
            this.openItemPartNumber(bireVersionPnDTO, ComponentOpenMode.Read);
          }
        }
      });
    }
  }

  /**
   * open item part number UC
   */
  public openItemPartNumber(objectId: BireVersionPnDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_PART_NUMBER_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public closeInventory() {
    this.cockpitInspectionFormService.closeEvent();
  }

  public openSNLink(): void {
    if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentCode) {
      const functionNm = this.bidoEquipmentDTO.equipmentFunction || AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY;
      this.openEquipment(this.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read, functionNm);
    }
  }

  public openEquipment(
    objectId: string | undefined,
    openMode: ComponentOpenMode,
    functionNm: string | undefined
  ): void {
    let labelKey;
    let componentName;
    if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
      labelKey = `transaction.${ComponentConstants.FLE_EQUIPMENT_FORM}`;
      componentName = ComponentConstants.FLE_EQUIPMENT_FORM;
    } else {
      if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        labelKey = `transaction.${ComponentConstants.FLE_ENGINE_FORM}`;
        componentName = ComponentConstants.FLE_ENGINE_FORM;
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        labelKey = `transaction.${ComponentConstants.FLE_AIRCRAFT_FORM}`;
        componentName = ComponentConstants.FLE_AIRCRAFT_FORM;
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY) {
        labelKey = `transaction.${ComponentConstants.LOG_TOOL_FORM}`;
        componentName = ComponentConstants.LOG_TOOL_FORM;
      } else {
        // Open Equipment By default for other cases
        labelKey = `transaction.${ComponentConstants.FLE_EQUIPMENT_FORM}`;
        componentName = ComponentConstants.FLE_EQUIPMENT_FORM;
      }
    }

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName,
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public getBireItem(dto: BireItemDTO) {
    this.bireItemDTO = dto;
  }
}
