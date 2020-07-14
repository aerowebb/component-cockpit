import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { CockpitInspectionInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { SaveBsdeProjectInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/save-bsde-project-input.interface';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { BireItemForTreeDTO } from '../../../../shared/types/api-output-types/fleet-management/bire-item-for-tree-dto.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { ProjectSearchOutputDTO } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/product-search-output-dto.interface';
import { BireItemForWorkscopeTreeDTO } from '../../../../shared/types/api-output-types/workscope-component/bire-item-for-workscope-tree-dto.interface';
import { WorkscopeTreeData } from '../../../../shared/types/api-output-types/workscope-component/workscope-tree-data-output';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { BsdeAttributeDTO } from '../../../../shared/types/api-types/bsde-attribute-dto.interface';
import { BsdeProjectAttributeDTOId } from '../../../../shared/types/api-types/bsde-project-attribute-dto-id.interface';
import { BsdeProjectAttributeDTO } from '../../../../shared/types/api-types/bsde-project-attribute-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { FamilyVariantDTO } from '../../../../shared/types/api-types/family-variant-dto.interface';
import { ChartType } from '../../../../shared/types/chart-type.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { ComponentCockpitOperationFormService } from './component-cockpit-operation-form.service';

interface ProgressChartInterface {
  completed: number;
  notCompleted: number;
}

interface WorkscopeInformationInterface {
  versionNumber?: number;
  status?: string;
  lastUpdate?: string;
  lastUpdateDate?: Date;
  approveItem?: number;
  removeItem?: number;
  draftItem?: number;
}

interface CustomBsdeProjectAttributeDTO extends BsdeProjectAttributeDTO {
  name?: string;
}

interface CustomAttributeLabelValue extends BsdeAttributeDTO {
  label: string;
  value: string;
}

enum ProjectStatus {
  CLOSE = '0',
  REOPEN = '1',
  OPEN = '3'
}

interface CustomPageComponentData extends PageComponentData {
  isFromWorkPackage?: boolean;
}

@Component({
  selector: 'aw-component-cockpit-operation-form',
  templateUrl: './component-cockpit-operation-form.component.html',
  styleUrls: ['./component-cockpit-operation-form.component.scss']
})
export class ComponentCockpitOperationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  @Input('cockpitComponentData') public cockpitComponentData: CustomPageComponentData;

  private tabTitle: string;
  public subTitle: string;
  public bsdeProjectDTO: BsdeProjectDTO;

  public mroCenters: LabelValue<string>[];
  public customerList: LabelValue<string>[];

  public progressChart: ProgressChartInterface;
  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;
  public chartContentReady: Boolean;

  public displayAttributeDialog: boolean;
  public attributesTableDataSource: TableDataSource<CustomBsdeProjectAttributeDTO>;
  public familyVariants: LabelValue<string>[];
  public selectedFamilyVariant: string | undefined;

  public bidoEquipmentDTO: BidoEquipmentDTO;
  public panelLoading: boolean;
  public workscopePanelLoading: boolean;
  public removedAttributeList: BsdeProjectAttributeDTOId[];
  private attributeList: CustomAttributeLabelValue[];
  public showSaveSpinner: boolean;
  public isEditMode: boolean;
  public workscopeInformationObject: WorkscopeInformationInterface;
  public isStatusClose: boolean;
  public isStatusReopen: boolean;
  public bireItemDTO: BireItemDTO;
  public showItemSelectionDialog: boolean;
  public bireItemDTOList: BireItemDTO[];
  private updateEquipment: boolean;
  private familyVariantDTOList: FamilyVariantDTO[];
  public draft: string;
  public approved: string;
  public partNumberDTO: GetPartNumberStructureOutputDTO;
  public isFromWorkPackage: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    public readonly sessionService: SessionService,
    private readonly translateService: TranslateService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly componentCockpitOperationFormService: ComponentCockpitOperationFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.chartContentReady = false;
    this.familyVariants = [];
    this.initObjects();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_FORM;
  }

  public ngOnInit(): void {
    if (!!this.cockpitComponentData) {
      this.componentData = this.cockpitComponentData as PageComponentData;
      this.isFromWorkPackage = (this.componentData as CustomPageComponentData).isFromWorkPackage || false;
    }

    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);
    this.initAttributeTableDataSource();
    this.initChart();
    this.loadDropDowns();
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
    this.componentData.openMode = ComponentOpenMode.Write;
  }

  public cancel(): void {
    if (this.componentData.openMode !== ComponentOpenMode.Create) {
      this.updateOpenMode(ComponentOpenMode.Read);
      this.componentData.openMode = ComponentOpenMode.Read;
    }
    this.initObjects();
    this.initAttributeTableDataSource();
    this.initChart();
    this.loadScreenData();
  }

  public search(): void {
    this.loadScreenData();
  }

  public close() {
    this.isStatusClose = true;
    this.isStatusReopen = false;
    this.bsdeProjectDTO.projectEndDate = new Date();
  }

  public reopen() {
    this.isStatusReopen = true;
    this.isStatusClose = false;
    this.bsdeProjectDTO.projectEndDate = undefined;
  }

  private initAttributeTableDataSource() {
    this.attributesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'name',
          translateKey: this.getTranslateKey('name'),
          alignment: ColumnAlignment.LEFT
        },
        {
          field: 'attributeValue',
          translateKey: this.getTranslateKey('value'),
          alignment: ColumnAlignment.LEFT
        }
      ],
      data: []
    });
  }

  public loadFamilyVariants(): void {
    this.familyVariants = [];
    this.componentCockpitOperationFormService.loadFamilyVariants().subscribe(
      (results) => {
        this.familyVariantDTOList = results;
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

        this.loadScreenData();
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
      }
    );
  }

  private initObjects() {
    this.bidoEquipmentDTO = {};
    this.bireItemDTO = {};
    this.partNumberDTO = {};
    this.workscopeInformationObject = {};
    this.selectedFamilyVariant = undefined;
    this.bsdeProjectDTO = {
      projectStartDate: new Date()
    };
    this.removedAttributeList = [];
    this.progressChart = {
      completed: 0,
      notCompleted: 0
    };
    this.chartData = {
      datasets: [],
      labels: []
    };

    this.draft = this.translateService.instant(this.getTranslateKey('draft'));
    this.approved = this.translateService.instant(this.getTranslateKey('approve'));
  }

  // Load dropdowns
  private loadDropDowns(): void {
    const observables: Observable<LabelValue<string>[]>[] = [
      this.componentCockpitOperationFormService.findMROCenter(),
      this.componentCockpitOperationFormService.findAllCustomers()
    ];

    forkJoin(observables).subscribe((results) => {
      this.mroCenters = results[0] || [];
      this.customerList = results[1] || [];
      this.loadFamilyVariants();
    });

    this.loadAttributesDropdownList();
  }

  /**************************************************
   * To get dto of family variant
   **************************************************/
  private filterFamilyVariant(familyVariant: string) {
    if (familyVariant.split('-').length > 1) {
      const family = familyVariant.split('-')[0];
      const variant = familyVariant.split('-')[1];

      return this.familyVariantDTOList.filter((res) => res.familyCode === family && res.variantCode === variant);
    }

    return [];
  }

  private loadAttributesDropdownList() {
    this.attributeList = [];

    this.componentCockpitOperationFormService.findBsdeAttributeList().subscribe((res: BsdeAttributeDTO[]) => {
      res.forEach((dto) => {
        if (!!dto.attributeId && !!dto.attributeName) {
          this.attributeList.push({
            label: dto.attributeName,
            value: dto.attributeId,
            attributeDescription: dto.attributeDescription
          });
        }
      });
      this.attributeList.sort((a, b) =>
        !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
      );
    });
  }

  private loadScreenData() {
    this.fetchProjectDetails();
  }

  /**********************************
   * FETCH Component Cockpit DETAILS
   **********************************/
  private fetchProjectDetails() {
    if (!!this.componentData && !!this.componentData.objectId) {
      const projectNumber: number = parseInt(
        this.serializationService.deserialize(this.componentData.objectId) as string,
        10
      );
      if (!!projectNumber) {
        this.panelLoading = true;
        this.chartContentReady = true;
        this.componentCockpitOperationFormService
          .findBsdeProjectByProjectNumber(projectNumber as number)
          .pipe(
            finalize(() => {
              this.panelLoading = false;
            })
          )
          .subscribe((result) => {
            this.bsdeProjectDTO = result;
            this.bsdeProjectDTO.projectStartDate = this.bsdeProjectDTO.projectStartDate
              ? this.bsdeProjectDTO.projectStartDate
              : new Date();

            if (!!this.bsdeProjectDTO.projectPn || !!this.bsdeProjectDTO.projectSn) {
              const bidoEquipment: BidoEquipmentDTO = {
                pnCode: this.bsdeProjectDTO.projectPn,
                sn: this.bsdeProjectDTO.projectSn
              };
              this.componentCockpitOperationFormService.findBidoEquipmentsByPnAndSn(bidoEquipment).subscribe((res) => {
                this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : {};

                this.selectedFamilyVariant = !!this.bidoEquipmentDTO.familyVariantCode
                  ? this.bidoEquipmentDTO.familyVariantCode
                  : undefined;

                this.findBireItemByBidoEquipment();
              });
            }

            this.isStatusClose = this.bsdeProjectDTO.statusState === BidoFunctionTypeConstants.UC_IWB_PROJECT_CLOSING;

            // Setting Context of screen
            if (!!result.projectNumber) {
              this.subTitle = `N° ${result.projectNumber}`;
              this.tabTitle = [
                StringUtils.isNullOrEmpty(result.projectNumber.toString()) ? '' : `N° ${result.projectNumber}`,
                StringUtils.isNullOrEmpty(result.projectPn) ? '' : `P/N ${result.projectPn}`,
                StringUtils.isNullOrEmpty(result.projectSn) ? '' : `S/N ${result.projectSn}`
              ]
                .filter((s) => !StringUtils.isEmpty(s))
                .join(' | ');
            }
            this.displayComponentContext(this.tabTitle, this.isCreateOpenMode);

            this.loadAttributes(this.bsdeProjectDTO.projectId as string);
          });

        this.loadWorkscope(projectNumber);
      }
    }
  }

  private findBireItemByBidoEquipment() {
    if (!!this.bidoEquipmentDTO && !!this.selectedFamilyVariant) {
      const dto = this.filterFamilyVariant(this.selectedFamilyVariant);

      if (!!dto && dto.length > 0) {
        const bireItemDTOId: BireItemDTOId = {
          chapter: this.bidoEquipmentDTO.chapter as string,
          section: this.bidoEquipmentDTO.section as string,
          subject: this.bidoEquipmentDTO.subject as string,
          sheet: this.bidoEquipmentDTO.sheet as string,
          marks: this.bidoEquipmentDTO.marks as string,
          structureType: dto[0].structureType as string,
          familyCode: dto[0].familyCode,
          variantCode: dto[0].variantCode
        };
        this.componentCockpitOperationFormService.findBireItem(bireItemDTOId).subscribe((bireItem) => {
          this.bireItemDTO = bireItem;
          this.loadPNInformation();
        });
      }
    }
  }

  /*************************************
   * Load Inspection
   *************************************/
  private loadInspectionInformation(projectNumber: number) {
    // Reset Chart
    this.clearChartData();

    // Fill inspection progress chart
    const input: CockpitInspectionInput = {
      projectNumber
    };
    this.componentCockpitOperationFormService
      .getCockpitInspection(input)
      .pipe(
        finalize(() => {
          this.chartContentReady = false;
        })
      )
      .subscribe((result) => {
        const data = this.buildInspectionTree(result);
        this.calculateProgressChartData(data);

        // Fill chart data set
        this.chartData.datasets[0].data = [this.progressChart.completed, this.progressChart.notCompleted];
        this.chartData = { ...this.chartData };
      });
  }

  private buildInspectionTree(data: ACTreeData[]): ACTreeData[] {
    const toReturn: ACTreeData[] = [];

    if (!!data) {
      data.forEach((elt: ACTreeData) => {
        const eleClone = elt.data;

        if (!!eleClone) {
          if (!!elt.sentenceAndDecisionList && elt.sentenceAndDecisionList.length > 0) {
            elt.sentenceAndDecisionList.forEach((res) => {
              if (
                !!res.decision &&
                !!res.sentence &&
                (res.decision !== AWPropertiesConstants.SENTENCE_BBIS_ENTRY_MISSING_KEY ||
                  res.decision !== AWPropertiesConstants.SENTENCE_BBIS_LOST_KEY)
              ) {
                if (eleClone.totalCompletedInventory === undefined) {
                  eleClone.totalCompletedInventory = 0;
                }
                eleClone.totalCompletedInventory =
                  !eleClone.serializedPart && !!res.quantity && parseInt(res.quantity, 10) > 0
                    ? eleClone.totalCompletedInventory + parseInt(res.quantity, 10)
                    : eleClone.totalCompletedInventory + 1;
              }
            });
          }
        }
        toReturn.push({
          data: eleClone,
          children: this.buildInspectionTree(ListUtils.orEmpty(elt.children))
        });
      });
    }

    return toReturn;
  }

  /*************************************
   * Load Workscope
   *************************************/
  private loadWorkscope(projectNumber: number) {
    // Fill workscope panel
    const input: CockpitInspectionInput = {
      projectNumber
    };

    this.workscopePanelLoading = true;
    this.componentCockpitOperationFormService
      .getWorkscope(input)
      .pipe(
        finalize(() => {
          this.workscopePanelLoading = false;
          this.loadInspectionInformation(projectNumber);
        })
      )
      .subscribe((result) => {
        this.getWorkscopeInformation(result);
        const workscopeStructure = this.buildTree(result);
        this.resetWorkscopeCounters();
        this.updateWorkscopeInformation(workscopeStructure);
      });
  }

  private buildTree(data: WorkscopeTreeData[]): WorkscopeTreeData[] {
    const toReturn: WorkscopeTreeData[] = [];

    data.forEach((elt: WorkscopeTreeData) => {
      this.updateVersionColumn(elt.data as BireItemForWorkscopeTreeDTO);
      toReturn.push({
        data: elt.data,
        children: this.buildTree(elt.children || []),
        bireItemDTO: elt.bireItemDTO
      });
    });

    return toReturn;
  }

  private resetWorkscopeCounters() {
    this.workscopeInformationObject.approveItem = 0;
    this.workscopeInformationObject.draftItem = 0;
    this.workscopeInformationObject.removeItem = 0;
  }

  /***************************************************
   * Update counter of Workscope Information panel
   ***************************************************/
  private updateWorkscopeInformation(res: WorkscopeTreeData[]) {
    res.forEach((workscope) => {
      if (!!workscope.data) {
        const data = workscope.data;

        if (data.isRemoved && this.workscopeInformationObject.removeItem !== undefined) {
          this.workscopeInformationObject.removeItem += 1;
        }

        if (data.workscopeVersionStatus === 1 && this.workscopeInformationObject.approveItem !== undefined) {
          this.workscopeInformationObject.approveItem += 1;
        }

        if (data.workscopeVersionStatus === 0 && this.workscopeInformationObject.draftItem !== undefined) {
          this.workscopeInformationObject.draftItem += 1;
        }

        if (!!workscope.children && workscope.children.length > 0) {
          this.updateWorkscopeInformation(workscope.children);
        }
      }
    });
  }

  /***********************************************
   * UPDATE VERSION COLUMN
   ***********************************************/
  private updateVersionColumn(data: BireItemForWorkscopeTreeDTO) {
    if (data.isWorkscope) {
      if (!data.workscopeVersionNumber || data.workscopeVersionStatus === 0) {
        data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
        data.workscopeVersionStatus = this.workscopeInformationObject.status === this.draft ? 0 : 1;
      }
    } else {
      data.workscopeVersionNumber = undefined;
      data.workscopeVersionStatus = undefined;
    }
  }

  /**********************************************
   * Set Workscope Information Panel
   *********************************************/
  private getWorkscopeInformation(data: WorkscopeTreeData[]): void {
    this.workscopeInformationObject = {
      lastUpdate: this.bsdeProjectDTO.statusUser,
      lastUpdateDate: this.bsdeProjectDTO.statusDate,
      approveItem: 0,
      draftItem: 0,
      removeItem: 0
    };

    if (!!data && data.length > 0 && !!data[0].data) {
      this.workscopeInformationObject.versionNumber = data[0].data.workscopeVersionNumber as number;
      this.workscopeInformationObject.status = data[0].data.workscopeVersionStatus === 0 ? this.draft : this.approved;
    }
  }

  /***************************************
   * Load Attributes table
   ***************************************/
  private loadAttributes(projectId: string) {
    const id: BsdeProjectDTOId = {
      projectId
    };
    this.componentCockpitOperationFormService.findBsdeProjectAttributeByProjectId(id).subscribe((res) => {
      const tableArr: CustomBsdeProjectAttributeDTO[] = [];
      res.forEach((dto) => {
        tableArr.push({
          attributeId: dto.attributeId,
          attributeValue: dto.attributeValue,
          projectId: this.bsdeProjectDTO.projectId,
          name: this.getAttributeName(dto.attributeId)
        });
      });
      this.attributesTableDataSource.setData(tableArr);
    });
  }

  private getAttributeName(id): string | undefined {
    const dto = this.attributeList.filter((res) => res.value === id);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /**********************************
   * CHART OPERATIONS
   **********************************/
  private initChart(): void {
    this.chartType = 'pie';
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

  private calculateProgressChartData(data: ACTreeData[]): void {
    data.forEach((elt) => {
      if (!!elt && !!elt.data) {
        const expectedQty = this.getExpectedQuantity(elt.data) || '0';
        const realQty = this.getRealQuantity(elt.data) || '0';
        this.progressChart.completed += elt.data.totalCompletedInventory as number;

        if (
          (expectedQty != undefined && parseInt(expectedQty, 10) > parseInt(realQty, 10)) ||
          parseInt(expectedQty, 10) === parseInt(realQty, 10)
        ) {
          this.progressChart.notCompleted += parseInt(expectedQty, 10) - (elt.data.totalCompletedInventory || 0);
        }
        if (realQty != undefined && parseInt(expectedQty, 10) < parseInt(realQty, 10)) {
          this.progressChart.notCompleted += parseInt(realQty, 10) - (elt.data.totalCompletedInventory || 0);
        }
      }

      if (!!elt.children && elt.children.length > 0) {
        this.calculateProgressChartData(elt.children);
      }
    });
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

  public clearChartData(): void {
    this.chartData.datasets[0].data = [0, 0];

    this.progressChart = {
      completed: 0,
      notCompleted: 0
    };
  }

  /********************************************
   * Attribute Functionality
   ********************************************/
  public openAttributeDialog() {
    this.displayAttributeDialog = true;
    this.isEditMode = false;
  }

  public editAttributeDialog() {
    this.displayAttributeDialog = true;
    this.isEditMode = true;
  }

  public deleteAttribute() {
    const partialMessageKey =
      this.attributesTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedAttributes'
        : 'confirmDeleteSelectedAttribute';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.attributesTableDataSource.dataSelection.forEach((res) => {
          const startIndex = this.attributesTableDataSource.dataSrc.findIndex(
            (code) => code.attributeId === res.attributeId
          );
          this.attributesTableDataSource.dataSrc.splice(startIndex, 1);
          const id: BsdeProjectAttributeDTOId = {
            attributeId: res.attributeId as string,
            projectId: this.bsdeProjectDTO.projectId as string
          };

          this.removedAttributeList.push(id);
        });
        this.attributesTableDataSource.setData(this.attributesTableDataSource.dataSrc);
        this.attributesTableDataSource.update();
        this.attributesTableDataSource.dataSelection = [];
      }
    });
  }

  public addEditAttribute(event: CustomBsdeProjectAttributeDTO) {
    if (!!event.attributeId && !!event.attributeValue) {
      const index = this.attributesTableDataSource.data.findIndex((res) => res.attributeId === event.attributeId);

      if (index !== -1) {
        if (!this.isEditMode) {
          const duplicateMsg = 'attributeAlreadyExists';

          this.confirmationService.confirm({
            messageKey: this.getTranslateKey(duplicateMsg),
            accept: () => {
              event.projectId = this.bsdeProjectDTO.projectId;
              this.attributesTableDataSource.replaceData(this.attributesTableDataSource.data[index], event);
            }
          });
        } else {
          // Same attribute name
          event.projectId = this.bsdeProjectDTO.projectId;
          this.attributesTableDataSource.replaceData(this.attributesTableDataSource.data[index], event);
        }
      } else {
        if (this.attributesTableDataSource.dataSelection.length === 1 && this.isEditMode) {
          const i = this.attributesTableDataSource.data.findIndex(
            (res) => res.attributeId === this.attributesTableDataSource.dataSelection[0].attributeId
          );
          event.projectId = this.bsdeProjectDTO.projectId;
          this.attributesTableDataSource.replaceData(this.attributesTableDataSource.data[i], event);
        } else {
          this.attributesTableDataSource.addData([event]);
        }
      }
      this.attributesTableDataSource.dataSelection = [];
    }
  }

  /********************************************
   * Save
   ********************************************/
  public save(): void {
    if (this.isValidForm()) {
      this.showSaveSpinner = true;
      this.componentCockpitOperationFormService
        .findBsdeProjectsByProjectCriteria({ bsdeProjectDTOCriteria: {} })
        .subscribe((res: ProjectSearchOutputDTO[]) => {
          const dto: ProjectSearchOutputDTO[] = res.filter(
            (project) => project.sn === this.bsdeProjectDTO.projectSn && project.pn === this.bsdeProjectDTO.projectPn
          );

          if (!!dto && dto.length > 0 && this.isCreateOpenMode) {
            this.showSaveSpinner = false;
            this.messageService.showErrorMessage(this.getTranslateKey('projectAlreadyExist'));
          } else {
            this.findBirePn();
          }
        });
    }
  }

  // Check if PN Exist
  private findBirePn() {
    const input: BirePnDTOId = {
      pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : ''
    };

    // Input for PN  Validity
    this.componentCockpitOperationFormService.findBirePn(input).subscribe(
      (result) => {
        if (result && result.pnCode) {
          this.checkBidoEquipmentsByPnAndSn();
        } else {
          this.showSaveSpinner = false;
          this.messageService.showErrorMessage(this.getTranslateKey('pnDoesnotExist'));
        }
      },
      (error) => {
        this.showSaveSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('pnDoesnotExist'));
      }
    );
  }

  // Find if PN and SN correspond to a equipment
  private checkBidoEquipmentsByPnAndSn(): void {
    const input: BidoEquipmentDTO = {
      pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : this.bidoEquipmentDTO.pnCode,
      sn: this.bsdeProjectDTO.projectSn ? this.bsdeProjectDTO.projectSn : this.bidoEquipmentDTO.sn
    };

    // Input for PN SN Validity
    this.componentCockpitOperationFormService.findBidoEquipmentsByPnAndSn(input).subscribe((result) => {
      // Equipment Exist
      if (!!result && result.length > 0) {
        if (
          !StringUtils.isNullOrEmpty(this.selectedFamilyVariant) &&
          this.selectedFamilyVariant !== result[0].familyVariantCode
        ) {
          this.messageService.showErrorMessage(this.getTranslateKey('familyVariantError'));
        } else {
          this.selectedFamilyVariant = result[0].familyVariantCode;
          this.bidoEquipmentDTO = result[0];

          if (!!this.bidoEquipmentDTO.chapter) {
            this.findBireItemByBidoEquipment();
            this.saveBsdeProject();
          } else {
            this.updateEquipment = true;
            // Find Items associated with Part number
            this.componentCockpitOperationFormService
              .findBireItemsBySearchCriteria(this.bsdeProjectDTO.projectPn as string)
              .subscribe((data) => {
                if (!!data && data.length > 0) {
                  this.bireItemDTOList = data;
                  this.showItemSelectionDialog = true;
                }
              });
          }
        }
      } else {
        // Check if family Variant exist if PN SN does not correspond to equipment
        if (StringUtils.isNullOrEmpty(this.selectedFamilyVariant)) {
          this.messageService.showErrorMessage(this.getTranslateKey('familyVariantReq'));
        } else {
          // Check if PN and Family Variant are consistant
          const familyDTO = this.filterFamilyVariant(this.selectedFamilyVariant as string);
          if (familyDTO.length > 0) {
            this.componentCockpitOperationFormService
              .findBirePnsBySearchCriteria({
                birePnDTOCriteria: {
                  pnCode: this.bsdeProjectDTO.projectPn
                },
                familyCode: familyDTO[0].familyCode,
                variantCode: familyDTO[0].variantCode,
                structureType: familyDTO[0].structureType
              })
              .subscribe((res) => {
                if (!!res && res.list.length > 0) {
                  // Equipment does not exist
                  input.familyVariantCode = this.selectedFamilyVariant;
                  input.equipmentFunction = '';

                  // Find Items associated with Part number
                  this.componentCockpitOperationFormService
                    .findBireItemsBySearchCriteria(this.bsdeProjectDTO.projectPn as string)
                    .subscribe((data) => {
                      if (!!data && data.length > 0) {
                        if (data.length === 1) {
                          input.chapter = data[0].chapter;
                          input.section = data[0].section;
                          input.subject = data[0].subject;
                          input.sheet = data[0].sheet;
                          input.marks = data[0].marks;

                          this.updateEquipment = false;
                          this.bireItemDTO = data[0];
                          this.createAsset(input);
                        } else {
                          this.bireItemDTOList = data;
                          this.showItemSelectionDialog = true;
                        }
                      } else {
                        this.messageService.showErrorMessage(this.getTranslateKey('noItemAssociated'));
                      }
                    });
                } else {
                  this.messageService.showErrorMessage(this.getTranslateKey('pnNotConsistant'));
                }
              });
          }
        }
      }
      this.showSaveSpinner = false;
    });
  }

  public addBireItem(ev: BireItemDTO) {
    const input: BidoEquipmentDTO = {
      pnCode: this.bsdeProjectDTO.projectPn ? this.bsdeProjectDTO.projectPn : this.bidoEquipmentDTO.pnCode,
      sn: this.bsdeProjectDTO.projectSn ? this.bsdeProjectDTO.projectSn : this.bidoEquipmentDTO.sn,
      familyVariantCode: `${ev.familyCode}-${ev.variantCode}`,
      equipmentFunction: '',
      chapter: ev.chapter,
      section: ev.section,
      subject: ev.subject,
      sheet: ev.sheet,
      marks: ev.marks
    };

    this.bireItemDTO = ev;
    if (!this.updateEquipment) {
      this.createAsset(input);
    } else {
      this.bidoEquipmentDTO.chapter = ev.chapter;
      this.bidoEquipmentDTO.section = ev.section;
      this.bidoEquipmentDTO.subject = ev.subject;
      this.bidoEquipmentDTO.sheet = ev.sheet;
      this.bidoEquipmentDTO.marks = ev.marks;
      this.updateAsset(this.bidoEquipmentDTO);
    }
  }

  /****************************************************
   * Create Bido Equipment DTO
   ****************************************************/
  private createAsset(input: BidoEquipmentDTO) {
    this.componentCockpitOperationFormService
      .saveCreateAsset(input)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe(
        (res) => {
          this.findBidoEquipment(res);
          this.saveBsdeProject();
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('pnNotConsistant'));
        }
      );
  }

  private findBidoEquipment(res: BidoEquipmentDTOId) {
    this.componentCockpitOperationFormService.findBidoEquipment(res).subscribe((equipment) => {
      this.bidoEquipmentDTO = equipment;
    });
  }

  /****************************************************
   * Update Bido Equipment DTO
   ****************************************************/
  private updateAsset(input: BidoEquipmentDTO) {
    this.componentCockpitOperationFormService.updateEquipment(input).subscribe((res) => {
      this.bidoEquipmentDTO = res;
      this.saveBsdeProject();
    });
  }

  private saveBsdeProject() {
    const bsdeProjectAttributeDTOList: BsdeProjectAttributeDTO[] = [];
    this.attributesTableDataSource.data.forEach((res) => {
      bsdeProjectAttributeDTOList.push({
        attributeId: res.attributeId,
        attributeValue: res.attributeValue,
        projectId: !!res.projectId ? res.projectId : undefined
      });
    });

    this.bsdeProjectDTO.statusState = this.isStatusClose
      ? ProjectStatus.CLOSE
      : this.isStatusReopen
      ? ProjectStatus.REOPEN
      : ProjectStatus.OPEN;
    const input: SaveBsdeProjectInput = {
      bsdeProjectDTO: this.bsdeProjectDTO,
      bsdeProjectAttributeDTOList,
      removeBsdeProjectAttributeDTOIdList: this.removedAttributeList
    };

    this.componentCockpitOperationFormService
      .saveBsdeProject(input)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe((res) => {
        if (!!res) {
          this.bsdeProjectDTO = res;
          this.componentData.objectId = this.serializationService.serialize(res.projectNumber);
          this.fetchProjectDetails();
          this.messageService.showSuccessMessage('global.successOnSave');
          this.updateOpenMode(ComponentOpenMode.Read);
        }
      });
  }

  /********************************************
   * Validate Screen
   ********************************************/
  private isValidForm(): Boolean {
    let isValid = true;
    if (this.componentData.openMode !== ComponentOpenMode.Read) {
      if (
        StringUtils.isNullOrEmpty(this.bsdeProjectDTO.projectPn) ||
        StringUtils.isNullOrEmpty(this.bsdeProjectDTO.projectSn)
      ) {
        isValid = false;
        this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
      } else {
        if (
          this.componentData.openMode !== ComponentOpenMode.Create &&
          !StringUtils.isNullOrEmpty(this.selectedFamilyVariant) &&
          this.selectedFamilyVariant !== this.bidoEquipmentDTO.familyVariantCode
        ) {
          this.messageService.showErrorMessage(this.getTranslateKey('familyVariantError'));
          isValid = false;
        }
      }
    }

    return isValid;
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

      bireVersionPnDTO.isnAta = this.partNumberDTO.isn;
      bireVersionPnDTO.versionNumber = this.partNumberDTO.versionNumber;
      this.openItemPartNumber(bireVersionPnDTO, ComponentOpenMode.Read);
    }
  }

  private loadPNInformation() {
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

      this.componentCockpitOperationFormService
        .getPartNumberStructure(bireVersionPnDTO as BireItemDTOId)
        .subscribe((res) => {
          if (!!res && res.length > 0) {
            const partNum = res.filter(
              (dto) =>
                !!dto.bireVersionPnDTO &&
                this.bsdeProjectDTO.projectPn === dto.bireVersionPnDTO.pnCode &&
                this.bsdeProjectDTO.projectSn
            );

            if (!!partNum && partNum.length > 0) {
              this.partNumberDTO = partNum[0];
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

  /************************************
   * Open Equipment Card
   ************************************/
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

  /************************************
   * Open Inspection Form
   ************************************/
  public openInspectionForm() {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_COCKPIT_INSPECTION_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!this.bsdeProjectDTO) {
      const projectNumber: number = this.bsdeProjectDTO.projectNumber as number;
      data.objectId = this.serializationService.serialize(projectNumber);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /************************************
   * Open Workscope Form
   ************************************/
  public openWorkscopeForm() {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_COCKPIT_WORKSCOPE_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!this.bsdeProjectDTO) {
      const projectNumber: number = this.bsdeProjectDTO.projectNumber as number;
      data.objectId = this.serializationService.serialize(projectNumber);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
