import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { WorkOrderTableCriteria } from '../../../../main/maintenance/work-package/form/types/work-order-table-criteria.interface';
import { WorkOrderTableFiltersService } from '../../../../main/maintenance/work-package/form/work-order-table-filters/work-order-table-filters.service';
import {
  WorkOrderRow,
  WorkPackageFormService
} from '../../../../main/maintenance/work-package/form/work-package-form.service';
import { AWPropertiesConstants } from '../../../constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../constants/bido-evolution-constants';
import { ComponentConstants } from '../../../constants/component-constants';
import { ComponentOpenMode } from '../../../enums/component-open-mode.enum';
import { ConfirmationService } from '../../../services/confirmation.service';
import { FileService } from '../../../services/file.service';
import { MessageService } from '../../../services/message.service';
import { PageService } from '../../../services/page.service';
import { SerializationService } from '../../../services/serialization.service';
import { TabService } from '../../../services/tab.service';
import { AssetWorkOrderOriginInput } from '../../../types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { ADSBModRowDTO } from '../../../types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { BidmProjectDTO } from '../../../types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTO } from '../../../types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../types/api-types/bido-notification-dto-id.interface';
import { BireItemDTOId } from '../../../types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../types/api-types/bire-item-dto.interface';
import { BireTaskDTO } from '../../../types/api-types/bire-task-dto.interface';
import { Chips } from '../../../types/chips.interface';
import { GoodsMovementInput } from '../../../types/component-input-types/logistics/goods-movement-input.interface';
import { GenericComponent } from '../../../types/generic-component';
import { LabelValue } from '../../../types/label-value.interface';
import { PageComponentData } from '../../../types/page-component-data.interface';
import { FileUtils } from '../../../utils/file-utils';
import { ListUtils } from '../../../utils/list-utils';
import { StringUtils } from '../../../utils/string-utils';

import { WorkOrderListService } from './work-order-list.service';

interface TreeTableColumns {
  field: string;
  alignment: string;
  width: string;
  class?: string;
}

interface WorkOrderEditionObject {
  display: boolean;
  workOrderSelected: BidmWorkOrderDTOId | undefined;
  workPackage: BidmProjectDTO;
  workOrderList: BidmWorkOrderDTO[];
}

interface UpdateSchedulingObject {
  display: boolean;
  selectedWorkOrders: TreeNode[];
}

@Component({
  selector: 'aw-work-order-list',
  styleUrls: ['./work-order-list.component.scss'],
  templateUrl: './work-order-list.component.html'
})
export class WorkOrderListComponent extends GenericComponent implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  public readonly componentOpenMode: typeof ComponentOpenMode;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  public displayTransferButton: boolean;
  public showWorkPackageListDialog: boolean;

  @Input()
  public set workPackage(workPackageData) {
    this._workPackage = workPackageData;
    this.init();
  }
  public get workPackage() {
    return this._workPackage;
  }

  @Input()
  public hideWOTableAction: boolean | undefined;

  @Input()
  public mainPageOpenMode: ComponentOpenMode | undefined;

  @Input()
  public set workOrderInputList(workOrderInputList: BidmWorkOrderDTOId[]) {
    this._workOrderInputList = workOrderInputList;
    this.init();
  }
  public get workOrderInputList() {
    return this._workOrderInputList;
  }

  @Output()
  public editWorkOrder: EventEmitter<WorkOrderEditionObject>;

  @Output()
  public addWorkOrder: EventEmitter<WorkOrderEditionObject>;

  @Output()
  public updateSchadulingEdition: EventEmitter<UpdateSchedulingObject>;

  @Output()
  public transferOfWO: EventEmitter<BidmProjectDTO>;

  public hideTableActions: boolean | undefined = false;
  private _workPackage: BidmProjectDTO;
  public _workOrderInputList: BidmWorkOrderDTOId[];
  public context: string;
  public showSaveSpinner: boolean = false;
  public mroCenterList: SelectItem[];
  public statusLabels: LabelValue<string>[] = [];

  public workOrderTableCols: TreeTableColumns[];
  public workOrderSelected: BidmWorkOrderDTOId | undefined;
  private projectId: string;
  public isLoadingWorkOrderTable: boolean = false;

  public filtersVisible: boolean = false;
  public workOrderList: BidmWorkOrderDTO[];
  public workOrderInitialTable: TreeNode[];
  public workOrderTable: TreeNode[];
  public selectedWorkOrders: TreeNode[];
  public workOrderCount: number = 0;

  public searchGlobalFilter: string;
  public filterActivatedList: Chips[] = [];
  public workOrderTableCriteria: WorkOrderTableCriteria;

  public statusList: SelectItem[];
  public woStatusList: SelectItem[];
  private woCriteriaStatusList: string[] = [];

  public typeList: SelectItem[];
  private woCriteriaTypeList: string[] = [];
  public woTypeList: SelectItem[];

  private searchGlobalFilter$: Subject<string>;
  private readonly assignedToFilterList: Set<string> = new Set();
  private readonly assetFilterList: Set<string> = new Set();
  private readonly zoneFilterList: Set<string> = new Set();
  private readonly qualificationList: Set<string> = new Set();

  public constructor(
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly workOrdersFormService: WorkOrderListService,
    private readonly wpFormService: WorkPackageFormService,
    private readonly workOrderTableFiltersService: WorkOrderTableFiltersService,
    private readonly confirmationService: ConfirmationService,
    private readonly pageService: PageService,
    private readonly translateService: TranslateService,
    private readonly fileService: FileService
  ) {
    super(ComponentOpenMode.Write);
    this.initStatusLabel();
    this.editWorkOrder = new EventEmitter<WorkOrderEditionObject>();
    this.addWorkOrder = new EventEmitter<WorkOrderEditionObject>();
    this.updateSchadulingEdition = new EventEmitter<UpdateSchedulingObject>();
    this.transferOfWO = new EventEmitter<BidmProjectDTO>();

    this.componentOpenMode = ComponentOpenMode;
    this.awPropertiesConstants = AWPropertiesConstants;
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_ORDERS_FORM;
  }

  private init(): void {
    if (this.hideWOTableAction !== undefined && this.hideWOTableAction) {
      this.hideTableActions = true;
    }
    this.workOrderTable = [];
    this.selectedWorkOrders = [];
    this.filterActivatedList = [];

    if (!!this.workPackage) {
      this.projectId = this.workPackage.projectId || '';
    }

    this.workOrdersFormService.loadMROCenterList().subscribe((result) => {
      this.mroCenterList = result;
    });
    this.setGlobalFilter();
    this.initWorkOrderTableFilters();
    this.initWorkOrderTableCols();
    this.loadLists();
    this.loadWorkOrders();
  }

  public ngOnInit() {
    if (this.mainPageOpenMode === undefined) {
      this.mainPageOpenMode = ComponentOpenMode.Write;
    }
  }

  // DATA LOADING

  private loadWorkOrders() {
    this.selectedWorkOrders = [];
    this.isLoadingWorkOrderTable = true;
    if (!!this.workPackage) {
      this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe((woList) => {
        this.workOrderInitialTable = [...woList];
        this.workOrderInitialTable.forEach((wo) => this.loadIllustrations(wo.data));
        this.workOrderList = this.flatDeep(woList);
        this.updateWorkOrderTable();
        this.initFilterLists();
        this.isLoadingWorkOrderTable = false;
      });
    } else if (!!this.workOrderInputList) {
      this.wpFormService.getBidmWorkOrdersStructure(this.workOrderInputList).subscribe((woList) => {
        this.workOrderInitialTable = [...woList];
        this.workOrderInitialTable.forEach((wo) => this.loadIllustrations(wo.data));
        this.workOrderList = this.flatDeep(woList);
        this.updateWorkOrderTable();
        this.initFilterLists();
        this.isLoadingWorkOrderTable = false;
      });
    }
  }

  private flatDeep(tree: TreeNode[]): BidmWorkOrderDTO[] {
    return tree.reduce(
      (acc, val) => [...acc, ...(val ? [val.data] : []), ...(val.children ? this.flatDeep(val.children) : [])],
      []
    );
  }

  private loadLists() {
    this.wpFormService.woStatusList$.subscribe((list) => {
      this.woStatusList = list;
      this.workOrderTableCriteria.statusList = this.woStatusList.map((status) => status.value);
      this.woCriteriaStatusList = this.workOrderTableCriteria.statusList;

      const removedStatuses = [AWPropertiesConstants.AIRM_PROJECT_STATUS_LINE_MAINTENANCE];
      this.statusList = list.filter((status) => !removedStatuses.includes(status.value));
    });
    this.wpFormService.woTypeList$.subscribe((list) => {
      this.woTypeList = list;
      this.workOrderTableCriteria.woTypeList = this.woTypeList.map((woType) => woType.value);
      this.woCriteriaTypeList = this.workOrderTableCriteria.woTypeList;
    });
  }

  private loadIllustrations(workOrderRow: WorkOrderRow): void {
    const workOrder: BidmWorkOrderDTO = workOrderRow.bidmWorkOrder;
    const equipment: BidoEquipmentDTO | undefined = workOrderRow.bidoEquipmentData;
    if (workOrder && equipment) {
      if (
        !!workOrder.bireItemChapter &&
        !!workOrder.bireItemSection &&
        !!workOrder.bireItemSubject &&
        !!workOrder.bireItemSheet &&
        !!workOrder.bireItemMarks
      ) {
        const bireItemDtoId: BireItemDTOId = {
          familyCode: workOrder.bireItemFamilyCode,
          variantCode: workOrder.bireItemVariantCode,
          chapter: workOrder.bireItemChapter,
          section: workOrder.bireItemSection,
          subject: workOrder.bireItemSubject,
          sheet: workOrder.bireItemSheet,
          marks: workOrder.bireItemMarks,
          structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
        };
        if (equipment.equipmentCode) {
          this.fileService.findIllustration(bireItemDtoId, equipment).subscribe((illustrationDocument) => {
            if (illustrationDocument) {
              workOrderRow.materialIllustration = this.fileService.sanitizeAndGetBase64Prefix(illustrationDocument);
            }
            // Refresh view with illustations
            this.updateWorkOrderTable();
            this.initWorkOrderTableCols();
          });
        }
      }
    }
  }

  // TABLE COLUMNS HANDLING

  private initWorkOrderTableCols() {
    if (this.hasIllustration(this.workOrderTable)) {
      this.workOrderTableCols = [
        { field: 'workOrder', alignment: 'left', width: '20%' },
        { field: 'engineeringData', alignment: 'left', width: '20%' },
        { field: 'fleetData', alignment: 'left', width: '10%' },
        { field: 'schedulingData', alignment: 'left', width: '15%' },
        { field: 'executionData', alignment: 'left', width: '15%' },
        { field: 'componentCockpitText', alignment: 'left', width: '10%' },
        { field: 'illustration', alignment: 'center', width: '10%' }
      ];
    } else {
      this.workOrderTableCols = [
        { field: 'workOrder', alignment: 'left', width: '22.5%' },
        { field: 'engineeringData', alignment: 'left', width: '20%' },
        { field: 'fleetData', alignment: 'left', width: '12.5%' },
        { field: 'schedulingData', alignment: 'left', width: '17.5%' },
        { field: 'executionData', alignment: 'left', width: '17.5%' },
        { field: 'componentCockpitText', alignment: 'left', width: '10%' }
      ];
    }
  }

  private hasIllustration(workOrderTable: TreeNode[] | undefined): boolean {
    return (
      !!workOrderTable &&
      !!workOrderTable.find((node: TreeNode) => {
        return !!node.data.materialIllustration || this.hasIllustration(node.children);
      })
    );
  }

  // FILTERS HANDLING

  public initWorkOrderTableFilters() {
    this.workOrderTableCriteria = {
      statusList: this.woCriteriaStatusList,
      woTypeList: this.woCriteriaTypeList,
      assignedTo: '',
      qualification: '',
      asset: '',
      zone: ''
    };
  }

  public resetWorkOrderTableFilters() {
    this.initWorkOrderTableFilters();
    this.updateWorkOrderTable();
  }

  public searchGlobalFilterChange(searchGlobalFilter: string) {
    this.searchGlobalFilter = searchGlobalFilter;
    this.searchGlobalFilter$.next(searchGlobalFilter);
  }

  private setGlobalFilter(): void {
    this.searchGlobalFilter = '';
    this.searchGlobalFilter$ = new Subject<string>();
    this.searchGlobalFilter$
      .pipe(
        debounceTime(WorkOrderListComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => this.updateWorkOrderTable());
  }

  public updateWorkOrderTable() {
    this.workOrderTable = _cloneDeep(this.workOrderInitialTable).filter((node) =>
      this.treeNodeMatchFilters(node, this.searchGlobalFilter)
    );
    this.filterActivatedList = [
      ...this.getChipFilters('statusList', this.woStatusList),
      ...this.getChipFilters('woTypeList', this.woTypeList),
      ...this.getChipFilter('assignedTo'),
      ...this.getChipFilter('qualification'),
      ...this.getChipFilter('asset'),
      ...this.getChipFilter('zone')
    ];
    this.initWorkOrderTableCols();
  }

  private getChipFilters(listName: string, filterList: SelectItem[]): Chips[] {
    const filterCriteria: string[] = this.workOrderTableCriteria[listName];

    return filterList
      .filter(({ value }) => filterCriteria.includes(value))
      .map((item) => {
        return {
          value: !!item.label ? item.label : '',
          action: () => {
            this.workOrderTableCriteria[listName] = filterCriteria.filter((elem) => elem !== item.value);
            this.updateWorkOrderTable();
          }
        };
      });
  }

  private getChipFilter(filterName: string): Chips[] {
    const filterValue = this.workOrderTableCriteria[filterName];

    return !filterValue
      ? []
      : [
          {
            value: filterValue,
            action: () => {
              this.workOrderTableCriteria[filterName] = '';
              this.updateWorkOrderTable();
            }
          }
        ];
  }

  private treeNodeMatchFilters(node: TreeNode, searchText: string): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.treeNodeMatchFilters(child, searchText));
    }

    const nodeData = node.data as WorkOrderRow;

    // Description
    const descriptionMatch =
      StringUtils.isNullOrEmpty(searchText) || nodeData.description.toLowerCase().includes(searchText as string);

    // Code
    const codeMatch =
      StringUtils.isNullOrEmpty(searchText) || nodeData.code.toLowerCase().includes(searchText as string);

    // Status
    let statusMatch = true;
    if (!ListUtils.isNullOrEmpty(this.workOrderTableCriteria.statusList)) {
      statusMatch = this.workOrderTableCriteria.statusList.includes(nodeData.status);
    }
    // AssignedTo
    const assignedToMatch =
      StringUtils.isNullOrEmpty(this.workOrderTableCriteria.assignedTo) ||
      this.workOrderTableCriteria.assignedTo === nodeData.assignedTo;

    // Asset
    const assetMatch =
      StringUtils.isNullOrEmpty(this.workOrderTableCriteria.asset) ||
      this.workOrderTableCriteria.asset === nodeData.asset;

    // Zone
    const zoneMatch =
      StringUtils.isNullOrEmpty(this.workOrderTableCriteria.zone) || this.workOrderTableCriteria.zone === nodeData.zone;

    // Qualification
    const qualificationMatch =
      StringUtils.isNullOrEmpty(this.workOrderTableCriteria.qualification) ||
      this.workOrderTableCriteria.qualification === nodeData.qualification;

    // Type
    let woTypeMatch = true;
    if (!ListUtils.isNullOrEmpty(this.workOrderTableCriteria.woTypeList)) {
      woTypeMatch = !!nodeData.type && this.workOrderTableCriteria.woTypeList.includes(nodeData.woType);
    }

    return (
      ListUtils.orEmpty(node.children).length > 0 ||
      ((codeMatch || descriptionMatch) &&
        statusMatch &&
        assignedToMatch &&
        assetMatch &&
        zoneMatch &&
        qualificationMatch &&
        woTypeMatch)
    );
  }

  private initFilterLists() {
    this.assignedToFilterList.clear();
    this.assetFilterList.clear();
    this.zoneFilterList.clear();
    this.qualificationList.clear();
    for (const wo of this.workOrderInitialTable) {
      this.treeNodeFilterListsCreation(wo);
    }
    this.workOrderTableFiltersService.assignedToFilterList = this.assignedToFilterList;
    this.workOrderTableFiltersService.assetFilterList = this.assetFilterList;
    this.workOrderTableFiltersService.zoneFilterList = this.zoneFilterList;
    this.workOrderTableFiltersService.qualificationList = this.qualificationList;
  }

  private treeNodeFilterListsCreation(node: TreeNode): void {
    if (!ListUtils.isNullOrEmpty(node.children) && node.children !== undefined) {
      for (const children of node.children) {
        this.treeNodeFilterListsCreation(children);
      }
    }

    const nodeData = node.data as WorkOrderRow;

    if (!!nodeData.assignedTo) {
      this.assignedToFilterList.add(nodeData.assignedTo);
    }
    if (!!nodeData.asset) {
      this.assetFilterList.add(nodeData.asset);
    }
    if (!!nodeData.zone) {
      this.zoneFilterList.add(nodeData.zone);
    }
    if (!!nodeData.qualification) {
      this.qualificationList.add(nodeData.qualification);
    }
  }

  // WORK ORDER TABLE LINKS HANDLER

  private getBidmWOFromTreeNodes(woNodes: TreeNode[]): BidmWorkOrderDTOId[] {
    return woNodes.map((node) => {
      const nodeData = node.data as WorkOrderRow;

      return {
        projectId: this.projectId,
        woId: StringUtils.orEmpty(nodeData.woId)
      };
    });
  }

  public openSelectedWorkOrders(curWorkOrder?: WorkOrderRow): void {
    const woTreeNodeList = curWorkOrder ? [{ data: curWorkOrder }] : this.selectedWorkOrders;
    const woList = this.getBidmWOFromTreeNodes(woTreeNodeList);
    for (const wo of woList) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(wo)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public editSelectedWorkOrder(curWorkOrder?: WorkOrderRow): void {
    const woTreeNodeList = curWorkOrder ? [{ data: curWorkOrder }] : this.selectedWorkOrders;
    const woList = this.getBidmWOFromTreeNodes(woTreeNodeList);

    if (woList.length === 1 && !curWorkOrder) {
      const workOrderEditObject: WorkOrderEditionObject = {
        display: true,
        workOrderSelected: this.workOrderSelected = {
          projectId: this.projectId,
          woId: StringUtils.orEmpty(woList[0].woId)
        },
        workPackage: this.workPackage,
        workOrderList: this.workOrderList
      };

      this.editWorkOrder.emit(workOrderEditObject);
    }
  }

  public addWorkOrderDialog(): void {
    const workOrderEditObject: WorkOrderEditionObject = {
      display: true,
      workOrderSelected: undefined,
      workPackage: this.workPackage,
      workOrderList: this.workOrderList
    };

    this.addWorkOrder.emit(workOrderEditObject);
  }

  public openUpdateSchedulingDialog(): void {
    const updateSchedulingObject: UpdateSchedulingObject = {
      display: true,
      selectedWorkOrders: this.selectedWorkOrders
    };
    this.updateSchadulingEdition.emit(updateSchedulingObject);
  }

  public deleteSelectedWorkOrder(): void {
    const partialMessageKey =
      this.selectedWorkOrders.length > 1 ? 'confirmDeleteSelectedWOs' : 'confirmDeleteSelectedWO';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bidmWorkOrderDTOIdList = this.getBidmWOFromTreeNodes(this.selectedWorkOrders);

        this.workOrdersFormService.removeBidmWorkOrderList(bidmWorkOrderDTOIdList).subscribe(
          (result) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteWO'));
            this.loadWorkOrders();
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteWO'));
            this.loadWorkOrders();
          }
        );
      }
    });
  }

  // GLOBAL ACTIONS HANDLER

  public goToCalendar(): void {
    const labelKey = 'transaction.WorkOrdersCalendarFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'WorkOrdersCalendarFormComponent',
      openMode: ComponentOpenMode.Read
    };
    if (!!this.workPackage) {
      data.objectId = this.serializationService.serialize(this.workPackage);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public printAllJobsCards(): void {
    this.showSaveSpinner = true;
    const workOrderIdList: BidmWorkOrderDTOId[] = [];
    this.workOrderList.forEach((wo) => {
      if (wo.woId && wo.projectId) {
        const workOrderId: BidmWorkOrderDTOId = {
          woId: wo.woId,
          projectId: wo.projectId
        };
        workOrderIdList.push(workOrderId);
      }
    });
    this.workOrdersFormService.generateJobcards(workOrderIdList).subscribe({
      next: (woCard) => {
        FileUtils.downloadFile(woCard.fileContent, woCard.fileName);
        this.showSaveSpinner = false;
      }
    });
  }

  public onReload(): void {
    this.init();
    this.loadLists();
    this.loadWorkOrders();
  }

  // WORK ORDER TABLE LINKS HANDLER

  public openSnLink(equipment: BidoEquipmentDTO): void {
    if (equipment && equipment.equipmentCode) {
      this.pageService.openAsset(equipment.equipmentCode, equipment.equipmentFunction);
    }
  }

  public openPartNumberLink(pnCode: string): void {
    this.openPN(pnCode, ComponentOpenMode.Read);
  }

  private openPN(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkOrderLink(workOrder: BidmWorkOrderDTO): void {
    if (workOrder && workOrder.woId && workOrder.projectId) {
      const workOrderId: BidmWorkOrderDTOId = {
        woId: workOrder.woId,
        projectId: workOrder.projectId
      };
      this.openWorkOrder(workOrderId, ComponentOpenMode.Read);
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

  public openSelectedGoodsMovement(): void {
    const woList: BidmWorkOrderDTOId[] = this.getBidmWOFromTreeNodes(this.selectedWorkOrders);
    woList.forEach((wo: BidmWorkOrderDTOId) => {
      const goodsMovementInput: GoodsMovementInput = {
        workOrderId: wo.woId,
        workPackageId: wo.projectId
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_GOODS_MOVEMENT_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(goodsMovementInput)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public openItem(workOrder: BidmWorkOrderDTO) {
    const woItemDTO: BireItemDTO = {
      familyCode: workOrder.bireItemFamilyCode,
      variantCode: workOrder.bireItemVariantCode,
      chapter: workOrder.bireItemChapter,
      section: workOrder.bireItemSection,
      subject: workOrder.bireItemSubject,
      sheet: workOrder.bireItemSheet,
      marks: workOrder.bireItemMarks,
      structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
    };

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode: ComponentOpenMode.Read
    };
    data.objectId = this.serializationService.serialize(woItemDTO);
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public consultWorkOrderOrigin(curWorkOrder: WorkOrderRow) {
    const workOrder = curWorkOrder.bidmWorkOrder;

    const calculateWorkOrderImput = {
      workOrderData: curWorkOrder.bidmWorkOrder,
      workPackageAssetCode: this.workPackage.assetCode,
      fromLineMaintenance: false
    };
    this.workOrdersFormService.calculateWorkOrderStatus(calculateWorkOrderImput).subscribe((calculateWorkOrder) => {
      const assetWorkOrderOriginInput: AssetWorkOrderOriginInput = {
        woType: workOrder.woType,
        woSource: workOrder.woSource,
        evolutionType: calculateWorkOrder.evolutionType,
        familyVariantCode: curWorkOrder.familyVariantCode
      };
      this.workOrdersFormService.findWorkOrderOriginDetails(assetWorkOrderOriginInput).subscribe((result) => {
        if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === workOrder.woType) {
          if (!!result.bireTaskDTOId) {
            // open task form
            const bireTaskDTO: BireTaskDTO = result.bireTaskDTOId as BireTaskDTO;
            this.pageService.openTask(bireTaskDTO);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === workOrder.woType) {
          if (BidoEvolutionConstants.CODE_EVOLUTION === assetWorkOrderOriginInput.evolutionType) {
            if (!!result.bireEvolutionDTOId) {
              // open evolution form
              const bireEvolutionDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireEvolutionDTOId
              };
              this.pageService.openEvolution(bireEvolutionDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_AD === assetWorkOrderOriginInput.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Airworthiness Directive form
              const bireSBDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.pageService.openAD(bireSBDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_SB === assetWorkOrderOriginInput.evolutionType) {
            if (!!result.bireSbDTOId) {
              // open Service Bulletin form
              const bireSbDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireSbDTOId
              };
              this.pageService.openSB(bireSbDTOId);
            }
          } else if (BidoEvolutionConstants.CODE_MODIFICATION === assetWorkOrderOriginInput.evolutionType) {
            if (!!result.bireModificationDTOId) {
              // open modification form
              const bireModificationDTOId: ADSBModRowDTO = {
                adSbModDTOId: result.bireModificationDTOId
              };
              this.pageService.openModification(bireModificationDTOId);
            }
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === assetWorkOrderOriginInput.woType) {
          if (!!result.bidoNotificationDTOId) {
            // open event form
            this.pageService.openEvent(result.bidoNotificationDTOId as BidoNotificationDTOId);
          }
        } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_SN_CHANGE === assetWorkOrderOriginInput.woType) {
          if (!!result.bidoEquipmentDTO) {
            if (AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY === result.bidoEquipmentDTO.equipmentFunction) {
              // open aircraft
              this.pageService.openAircraft(result.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
            } else if (
              AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY === result.bidoEquipmentDTO.equipmentFunction
            ) {
              // open engine
              this.pageService.openEngine(result.bidoEquipmentDTO.equipmentCode);
            } else {
              // open equipment
              this.pageService.openEquipment(result.bidoEquipmentDTO.equipmentCode);
            }
          }
        }
      });
    });
  }

  // REFERENCES UTILS

  private initStatusLabel() {
    const statusLabel = [];
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_SIMULATED, 'simulated');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED, 'released');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED, 'planned');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING, 'onGoing');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_PERFORMED, 'performed');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_TO_BE_CONFIRMED, 'toBeConfirm');
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE, 'close');
    this.addValueLabel(
      statusLabel,
      AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONEMENT_REQUESTED,
      'postPonementRequest'
    );
    this.addValueLabel(statusLabel, AWPropertiesConstants.AIRM_OPERATION_STATUS_POSTPONED, 'postponed');

    this.statusLabels = statusLabel;
  }

  private addValueLabel(references: LabelValue<string>[], value: string, labelKeySuffix: string): void {
    if (references) {
      references.push({
        value,
        label: this.translateService.instant(this.getTranslateKey(labelKeySuffix))
      });
    }
  }

  public getStatusLabel(value: string | undefined): string | undefined {
    const labelValue: LabelValue<string> | undefined = this.statusLabels.find((lv) => lv.value === value);

    return labelValue && labelValue.label;
  }

  /**
   * This method is used to check if Transfer WO is to be displayed or not.
   *
   * The conditions are as follow :
   * 1. If the selected WO has the status "released", a button "Transfer WO (s)" must appear. (see screenshot).
   * 2. If the selected WO isn't in "released" status, the "Transfer WO (s)" button must not appear.
   */
  public isTransferWOButtonVisible(): void {
    if (this.selectedWorkOrders.length === 0) {
      this.displayTransferButton = false;
    } else {
      const workOrders: TreeNode[] = this.selectedWorkOrders.filter(
        (workOrder) => workOrder.data.status !== AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED
      );
      if (workOrders.length === 0) {
        this.displayTransferButton = true;
      } else {
        this.displayTransferButton = false;
      }
    }
  }

  /**
   * This method is used to open the popup containing the list of work packages.
   */
  public openWorkPackagesList(): void {
    this.showWorkPackageListDialog = true;
  }

  /**
   *
   */
  public onTransferOfWO(workPackage: BidmProjectDTO): void {
    this.transferOfWO.emit(workPackage);
  }

  /**
   * This method hide updateScheduling and Edit button on selection of Closed Work order.
   */
  public showUpdateEditButton(): boolean {
    const closedWorkOrder = this.selectedWorkOrders.find(
      (workOrder) => workOrder.data.status === AWPropertiesConstants.AIRM_OPERATION_STATUS_CLOSE
    );

    if (!!closedWorkOrder) {
      return false;
    } else {
      return true;
    }
  }
}
