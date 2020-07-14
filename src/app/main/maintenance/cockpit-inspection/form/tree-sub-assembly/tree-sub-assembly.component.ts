import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, finalize, takeUntil } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
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
import { CockpitInspectionInput } from '../../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { ACTreeData } from '../../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { BireItemForTreeDTO } from '../../../../../shared/types/api-output-types/fleet-management/bire-item-for-tree-dto.interface';
import { BireDocumentDTO } from '../../../../../shared/types/api-types/bire-document-dto.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BsdeProjectDTO } from '../../../../../shared/types/api-types/bsde-project-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ImageUtils } from '../../../../../shared/utils/image-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { CockpitInspectionFormService } from '../cockpit-inspection-form.service';

interface SubAssemblyTableFilter {
  progress?: number[];
  configuration?: string[];
  family?: string;
}

interface EventTreeNode {
  node: ACTreeData;
  parent?: TreeNode;
  data?: BireItemForTreeDTO;
  children?: ACTreeData[];
  bireItemDTO?: BireItemDTO;
}

interface ProgressChartInterface {
  completed: number;
  notCompleted: number;
}

@Component({
  selector: 'aw-tree-sub-assembly',
  templateUrl: './tree-sub-assembly.component.html',
  styleUrls: ['./tree-sub-assembly.component.scss', '../shared/shared.scss']
})
export class TreeSubAssemblyComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  @Output()
  public openImageEmitter: EventEmitter<SafeResourceUrl>;

  @Output()
  public openSubAssemblyEmitter: EventEmitter<ACTreeData>;

  @Output()
  public bireItemDTOEmitter: EventEmitter<BireItemDTO>;

  @Output() public renderProgress: EventEmitter<ProgressChartInterface>;

  @Input() public bsdeProjectDTO: BsdeProjectDTO;

  @Input() public subAssemblys: ACTreeData[];

  public searchSubAssemblyGlobalFilterChanged: Subject<string>;

  public familyCodeMap: LabelValue<string>[];

  // Sub Assembly tree
  private acTreeData: ACTreeData[];
  public itemStructureDisplayed: ACTreeData[];
  public itemStructureNodeSelected: ACTreeData[] | undefined;
  public structureTableCols: TableColumn[];

  public treePanelLoading: boolean;
  public filtersVisible: boolean;

  // Overlay
  public progressList: SelectItem[];
  public itemFamiliesList: SelectItem[];
  public configurationList: SelectItem[];
  public searchCriteria: SubAssemblyTableFilter;
  public searchGlobalFilter: string;

  public progressCounter: ProgressChartInterface;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly domSanitizer: DomSanitizer,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly cockpitInspectionFormService: CockpitInspectionFormService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.controlConfigConstants = ControlConfigConstants;

    this.openImageEmitter = new EventEmitter<SafeResourceUrl>();
    this.openSubAssemblyEmitter = new EventEmitter<ACTreeData>();
    this.renderProgress = new EventEmitter<ProgressChartInterface>();
    this.bireItemDTOEmitter = new EventEmitter<BireItemDTO>();
  }

  public getComponentName(): string {
    return 'TreeSubAssemblyComponent';
  }

  public ngOnInit() {
    this.itemStructureNodeSelected = [];
    this.searchCriteria = {};
    this.progressCounter = {
      completed: 0,
      notCompleted: 0
    };
    this.init();
  }

  public init() {
    this.setControlGlobalFilter();
    this.setSearchControlList();
    this.setSearchFamiliesList();
    this.setSearchProgressList();
    this.renderTreeTableColumns();
    this.fetchDropdown();
  }

  /**********************************
   * INIT DROPDOWNS
   **********************************/
  private fetchDropdown() {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((res) => {
      this.familyCodeMap = res;

      if (!!this.bsdeProjectDTO.projectPn) {
        if (!!this.subAssemblys && this.subAssemblys.length > 0) {
          this.itemStructureDisplayed = this.buildTree(this.subAssemblys);
          this.itemStructureDisplayed = this.emptyChildrens(this.itemStructureDisplayed);
          this.acTreeData = _cloneDeep(this.acTreeData);
          if (this.itemStructureDisplayed.length > 0) {
            this.itemStructureDisplayed[0].expanded = true;
          }
          this.calculateChart();
        } else {
          this.fetchTreeStructure();
        }
      }
    });
  }

  // When on Info screen, remove the childrens for tree
  private emptyChildrens(treeNode: ACTreeData[]): ACTreeData[] {
    treeNode.forEach((node) => (node.children = []));

    return treeNode;
  }

  /**********************************
   * TREE TABLE COLUMNS
   **********************************/
  private renderTreeTableColumns() {
    this.structureTableCols = [
      { field: 'item', alignment: 'left', width: '20%' },
      { field: 'functionData', alignment: 'left', width: '15%' },
      { field: 'itemFamilyCode', alignment: 'left', width: '10%' },
      { field: 'progress', alignment: 'center', width: '15%' },
      { field: 'quantity', alignment: 'left', width: '10%' },
      { field: 'configuration', alignment: 'center', width: '10%' },
      { field: 'illustration', alignment: 'center', width: '10%' },
      { field: 'action', alignment: 'center', width: '10%' }
    ];
  }

  /**********************************
   * RENDER TREE
   **********************************/
  private fetchTreeStructure() {
    if (!!this.bsdeProjectDTO.projectPn && !!this.bsdeProjectDTO.projectSn) {
      const input: CockpitInspectionInput = {
        projectNumber: this.bsdeProjectDTO.projectNumber,
        repairCenterCode: this.bsdeProjectDTO.repairCenterCode,
        taskTypeCode: this.bsdeProjectDTO.taskTypeCode
      };
      this.treePanelLoading = true;

      this.cockpitInspectionFormService
        .getCockpitInspection(input)
        .pipe(
          finalize(() => {
            this.treePanelLoading = false;
            this.calculateChart();
          })
        )
        .subscribe((result) => {
          this.itemStructureDisplayed = this.buildTree(result);
          this.calculateProgressChartData(this.itemStructureDisplayed);
          if (this.itemStructureDisplayed.length > 0) {
            this.itemStructureDisplayed[0].expanded = true;
            this.bireItemDTOEmitter.emit(this.itemStructureDisplayed[0].bireItemDTO);
          }
          this.acTreeData = _cloneDeep(result);
        });
    }
  }

  private calculateChart() {
    this.progressCounter = {
      completed: 0,
      notCompleted: 0
    };

    this.calculateProgressChartData(this.itemStructureDisplayed);
    this.renderProgress.emit(this.progressCounter); // Emitting with default values
  }

  private buildTree(data: ACTreeData[]): ACTreeData[] {
    const toReturn: ACTreeData[] = [];

    if (!!data) {
      data.forEach((elt: ACTreeData) => {
        const eleClone = _cloneDeep(elt.data);
        if (!!eleClone) {
          if (!!eleClone.itemFamilyCode) {
            const dto = this.familyCodeMap.filter((res) => eleClone.itemFamilyCode === res.value)[0];
            if (!!dto) {
              eleClone.itemFamilyCode = dto.label;
            }
          }

          if (!!eleClone.bireDocumentDTO && eleClone.bireDocumentDTO.docFile) {
            eleClone.additionalData = this.loadItemStructureNodeIllustrationList(eleClone);
          }

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
          children: this.buildTree(ListUtils.orEmpty(elt.children)),
          bireItemDTO: elt.bireItemDTO,
          sentenceAndDecisionList: elt.sentenceAndDecisionList,
          expanded: !StringUtils.isNullOrEmpty(this.searchGlobalFilter)
        });
      });
    }

    return toReturn;
  }

  /**********************************
   * Load Image
   **********************************/
  private loadItemStructureNodeIllustrationList(result: BireItemForTreeDTO): SafeResourceUrl {
    const doc = result.bireDocumentDTO as BireDocumentDTO;

    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${ImageUtils.getBase64Prefix(doc.docType)}${doc.docFile}`);
  }

  /**********************************
   * CALCULATE PERCENTAGE
   **********************************/
  public calculateItemProgress(data: BireItemForTreeDTO) {
    const PERCENT = 100;
    const expectedQty = this.getExpectedQuantity(data);
    const realQty = this.getRealQuantity(data);

    if (realQty === '0') {
      return 0;
    } else if (realQty !== undefined && expectedQty !== undefined && parseInt(realQty, 10) > 0) {
      const val = ((parseInt(expectedQty, 10) - parseInt(realQty, 10)) / parseInt(expectedQty, 10)) * PERCENT;

      return val < 0 ? 0 : val;
    }

    return 0;
  }

  /**********************************
   * CALCULATE PROGRESS CHART DATA
   **********************************/
  private calculateProgressChartData(data: ACTreeData[]): void {
    data.forEach((elt) => {
      if (!!elt && !!elt.data) {
        const expectedQty = this.getExpectedQuantity(elt.data) || '0';
        const realQty = this.getRealQuantity(elt.data) || '0';
        this.progressCounter.completed += elt.data.totalCompletedInventory as number;

        if (
          (expectedQty != undefined && parseInt(expectedQty, 10) > parseInt(realQty, 10)) ||
          parseInt(expectedQty, 10) === parseInt(realQty, 10)
        ) {
          this.progressCounter.notCompleted += parseInt(expectedQty, 10) - (elt.data.totalCompletedInventory || 0);
        }
        if (realQty != undefined && parseInt(expectedQty, 10) < parseInt(realQty, 10)) {
          this.progressCounter.notCompleted += parseInt(realQty, 10) - (elt.data.totalCompletedInventory || 0);
        }
      }

      if (!!elt.children && elt.children.length > 0) {
        this.calculateProgressChartData(elt.children);
      }
    });
  }

  /**********************************
   * IMAGE ILLUSTRATION DIALOG OPERATIONS
   **********************************/
  public openImage(event: SafeResourceUrl) {
    this.openImageEmitter.emit(event);
  }

  public openSubAssembly(event: EventTreeNode) {
    this.openSubAssemblyEmitter.emit(event.node);
  }

  /**********************************
   * OPEN ITEM UC
   **********************************/
  public openItemUC(rowData: BireItemForTreeDTO) {
    if (!!rowData && !!rowData.chapter) {
      this.openItem(rowData as BireItemDTO);
    }
  }

  public openItem(item: BireItemDTO) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode: ComponentOpenMode.Read
    };
    if (!!item) {
      const itemFormId: BireItemDTO = {
        familyCode: item.familyCode,
        chapter: item.chapter,
        section: item.section,
        sheet: item.sheet,
        marks: item.marks,
        subject: item.subject,
        structureType: item.structureType,
        variantCode: item.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
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
          label: alertNokLabel,
          value: NOK
        },
        {
          label: alertWarningLabel,
          value: WARNING
        }
      ];
    });
  }

  private setSearchProgressList(): void {
    const completedKey = this.getTranslateKey('completed');
    const notCompletedKey = this.getTranslateKey('notCompleted');

    this.translateService.get([completedKey, notCompletedKey]).subscribe((results) => {
      const completedLabel: string = results ? results[completedKey] : 'Completed';
      const notCompletedLabel: string = results ? results[notCompletedKey] : 'Not Completed';

      this.progressList = [
        {
          label: completedLabel,
          value: 0
        },
        {
          label: notCompletedLabel,
          value: 1
        }
      ];
    });
  }

  private setSearchFamiliesList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((res) => {
      this.itemFamiliesList = res;
    });
  }

  public filterWithCriteria() {
    this.searchGlobalFilter = '';
    if (Object.keys(this.searchCriteria).length === 0) {
      const acTreeData = !!this.subAssemblys && this.subAssemblys.length > 0 ? this.subAssemblys : this.acTreeData;
      this.itemStructureDisplayed = this.buildTree(acTreeData);
      if (this.itemStructureDisplayed.length > 0) {
        this.itemStructureDisplayed[0].expanded = true;
      }
    } else {
      this.searchSubAssemblyGlobalFilterChanged.next();
    }
  }

  public filterTextWithCriteria(): void {
    this.searchSubAssemblyGlobalFilterChanged.next();
  }

  /**********************************
   * FILTER FUNCTIONALITY
   **********************************/
  public resetTableFilters() {
    this.searchGlobalFilter = '';
    this.searchCriteria = {};
  }

  private setControlGlobalFilter(): void {
    this.resetTableFilters();
    this.searchSubAssemblyGlobalFilterChanged = new Subject();
    this.searchSubAssemblyGlobalFilterChanged
      .pipe(debounceTime(TreeSubAssemblyComponent.SEARCH_TEXT_DEBOUNCE_TIME), takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.updateTreeDisplayed();
      });
  }

  private treeNodeMatchFilters(node: ACTreeData, searchCriteria: SubAssemblyTableFilter): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as ACTreeData[]).filter((child) =>
        this.treeNodeMatchFilters(child, searchCriteria)
      );
    }

    const nodeData = node.data as BireItemForTreeDTO;

    // Control
    let controlMatch = true;
    if (!ListUtils.isNullOrEmpty(searchCriteria.configuration)) {
      const nodeControl = nodeData.icon as string;
      const controlList = this.searchCriteria.configuration as string[];

      controlMatch = controlList.includes(nodeControl);
    }

    let family = true;
    if (!!nodeData.itemFamilyCode && !StringUtils.isNullOrEmpty(searchCriteria.family)) {
      const familyLabel = this.familyCodeMap.filter((res) => nodeData.itemFamilyCode === res.label)[0].value;
      family = searchCriteria.family === familyLabel;
    }

    let completed = true;
    if (!ListUtils.isNullOrEmpty(searchCriteria.progress)) {
      const completedItem = nodeData.isItemCompleted as number;
      const completedList = searchCriteria.progress as number[];

      completed = completedList.includes(completedItem);
    }

    const functionCode = nodeData.functionCode ? nodeData.functionCode.toLowerCase() : '';
    const functionCodeMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) &&
      functionCode.includes(this.searchGlobalFilter.toLowerCase());

    const item = `${nodeData.chapter}-${nodeData.section}-${nodeData.subject}-${nodeData.sheet}-${nodeData.marks}`;
    const itemMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && item.includes(this.searchGlobalFilter.toLowerCase());

    const itemNumber = nodeData.itemNumber ? nodeData.itemNumber.toLowerCase() : '';
    const itemNumberMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && itemNumber.includes(this.searchGlobalFilter.toLowerCase());

    const name = nodeData.name ? nodeData.name.toLowerCase() : '';
    const nameMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && name.includes(this.searchGlobalFilter.toLowerCase());

    const familyCode = nodeData.itemFamilyCode ? nodeData.itemFamilyCode.toLowerCase() : '';
    const familyMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && familyCode.includes(this.searchGlobalFilter.toLowerCase());

    const expected = !!nodeData.expectedQuantity ? nodeData.expectedQuantity : '';
    const expectedMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && expected.includes(this.searchGlobalFilter.toLowerCase());

    const real = !!nodeData.realQuantity ? nodeData.realQuantity : '';
    const realMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && real.includes(this.searchGlobalFilter.toLowerCase());

    const serialized = nodeData.serializedPart ? 'serialized' : 'not serialized';
    const serializedMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && serialized.includes(this.searchGlobalFilter.toLowerCase());

    if (StringUtils.isNullOrEmpty(this.searchGlobalFilter)) {
      if (!!node.sentenceAndDecisionList && node.sentenceAndDecisionList.length > 0) {
        const filterSuccess = ListUtils.orEmpty(node.children).length > 0 || (controlMatch && family && completed);
        node.expanded = filterSuccess ? true : false;

        return filterSuccess;
      } else {
        const filterSuccess = ListUtils.orEmpty(node.children).length > 0 || (controlMatch && family);
        node.expanded = filterSuccess ? true : false;

        return filterSuccess;
      }
    } else {
      const filterSuccess =
        ListUtils.orEmpty(node.children).length > 0 ||
        functionCodeMatch ||
        itemNumberMatch ||
        familyMatch ||
        expectedMatch ||
        realMatch ||
        nameMatch ||
        itemMatch ||
        serializedMatch;

      node.expanded = filterSuccess ? true : false;

      return filterSuccess;
    }
  }

  private updateTreeDisplayed(): void {
    this.itemStructureDisplayed = [];
    const acTreeData = !!this.subAssemblys && this.subAssemblys.length > 0 ? this.subAssemblys : this.acTreeData;
    this.itemStructureDisplayed = this.buildTree(_cloneDeep(acTreeData));
    if (StringUtils.isNullOrEmpty(this.searchGlobalFilter) && this.itemStructureDisplayed.length > 0) {
      this.itemStructureDisplayed[0].expanded = true;
    }
    this.itemStructureDisplayed = this.itemStructureDisplayed.filter((elt) => {
      return this.treeNodeMatchFilters(elt, this.searchCriteria);
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
}
