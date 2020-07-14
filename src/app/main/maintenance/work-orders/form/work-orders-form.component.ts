import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoEvolutionConstants } from '../../../../shared/constants/bido-evolution-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PageService } from '../../../../shared/services/page.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { AssetWorkOrderOriginInput } from '../../../../shared/types/api-input-types/airworthiness-management/asset-work-order-origin-input.inteface';
import { ADSBModRowDTO } from '../../../../shared/types/api-output-types/airworthiness-management/adsb-mod-row-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { Chips } from '../../../../shared/types/chips.interface';
import { GoodsMovementInput } from '../../../../shared/types/component-input-types/logistics/goods-movement-input.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkOrderScheduleInfo } from '../../work-package/form/popups/dialog-work-order-scheduling-edition/dialog-work-order-scheduling-edition.component';
import { WorkOrderTableCriteria } from '../../work-package/form/types/work-order-table-criteria.interface';
import { WorkOrderTableFiltersService } from '../../work-package/form/work-order-table-filters/work-order-table-filters.service';
import { WorkOrderRow, WorkPackageFormService } from '../../work-package/form/work-package-form.service';

import { WorkOrdersFormService } from './work-orders-form.service';

interface TreeTableColumns {
  field: string;
  alignment: string;
  width: string;
  class?: string;
}

const SUBTITLE_SEPARATOR = ' | ';

@Component({
  selector: 'aw-work-orders-form',
  styleUrls: ['./work-orders-form.component.scss'],
  templateUrl: './work-orders-form.component.html'
})
export class WorkOrdersFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  public context: string;
  public showSaveSpinner: boolean = false;
  public workPackage: BidmProjectDTO;
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

  public displayWorkOrderEdit: boolean = false;
  public displayWorkOrderSchedulingEdit: boolean = false;

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
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly workOrdersFormService: WorkOrdersFormService,
    private readonly wpFormService: WorkPackageFormService,
    private readonly workOrderTableFiltersService: WorkOrderTableFiltersService,
    private readonly confirmationService: ConfirmationService,
    private readonly pageService: PageService,
    private readonly translateService: TranslateService,
    private readonly fileService: FileService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initStatusLabel();
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_WORK_ORDERS_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData && this.componentData.objectId) {
      this.workPackage = this.serializationService.deserialize(this.componentData.objectId);
      this.projectId = this.workPackage.projectId || '';
    }
    this.workOrdersFormService.loadMROCenterList().subscribe((result) => {
      this.mroCenterList = result;
      this.setSubtitle();
    });
    this.setGlobalFilter();
    this.initWorkOrderTableFilters();
    this.initWorkOrderTableCols();
    this.loadLists();
    this.loadWorkOrders();
  }

  private init(): void {
    this.workOrderTable = [];
    this.selectedWorkOrders = [];
    this.filterActivatedList = [];
  }

  // SUBTITLE COMPUTATION

  private setSubtitle() {
    let subtitle = '';
    if (this.workPackage) {
      if (this.workPackage.projectNumber) {
        subtitle = this.appendSubtitle(subtitle, `WP n°${this.workPackage.projectNumber}`);
      }
      if (this.workPackage.aircraftMsn) {
        subtitle = this.appendSubtitle(subtitle, `MSN ${this.workPackage.aircraftMsn}`);
      }
      const mroCode = this.workPackage.bireRepairCenterCode;
      if (mroCode) {
        let mroItem: SelectItem | undefined;
        if (Array.isArray(this.mroCenterList)) {
          mroItem = this.mroCenterList.find((mro) => mro.value === this.workPackage.bireRepairCenterCode);
        }
        if (!mroItem) {
          mroItem = { value: mroCode, label: mroCode };
        }
        subtitle = this.appendSubtitle(subtitle, `${mroItem.label}`);
      }
    }
    this.context = subtitle;
    this.displayComponentContext(subtitle, false);
  }

  private appendSubtitle(subtitle: string, toAppend: string): string {
    let ret = subtitle;
    if (subtitle.length > 0) {
      ret += SUBTITLE_SEPARATOR;
    }
    ret += toAppend;

    return ret;
  }

  // DATA LOADING

  private loadWorkOrders() {
    this.selectedWorkOrders = [];
    this.isLoadingWorkOrderTable = true;
    this.wpFormService.getBidmWorkOrdersStructureByProject(this.projectId).subscribe((woList) => {
      this.workOrderInitialTable = [...woList];
      this.workOrderInitialTable.forEach((wo) => this.loadIllustrations(wo.data));
      this.workOrderList = this.flatDeep(woList);
      this.updateWorkOrderTable();
      this.initFilterLists();
      this.isLoadingWorkOrderTable = false;
    });
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
        debounceTime(WorkOrdersFormComponent.SEARCH_TEXT_DEBOUNCE_TIME),
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

    if (woList.length === 1 && !curWorkOrder) {
      this.workOrderSelected = {
        projectId: this.projectId,
        woId: StringUtils.orEmpty(woList[0].woId)
      };
      this.displayWorkOrderEdit = true;
    } else {
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
  }

  public displayWorkOrderScreenEdit(): void {
    this.workOrderSelected = undefined;
    this.displayWorkOrderEdit = true;
  }

  public onAddWorkOrder(isCreated: boolean): void {
    if (isCreated) {
      this.workOrdersFormService.calculateBidmProjectStatus(this.workPackage).subscribe((statusState) => {
        if (this.workPackage.statusState !== statusState) {
          this.updateOpenMode(ComponentOpenMode.Write);
          this.workPackage.statusState = statusState;
        }
      });
      this.loadWorkOrders();
    }
  }

  public openUpdateSchedulingDialog(): void {
    this.displayWorkOrderSchedulingEdit = true;
  }

  public onWorkOrderSchedulingEdited(woScheduleInfo: WorkOrderScheduleInfo): void {
    const isAssignedToUpdate = woScheduleInfo.assignedTo !== undefined && woScheduleInfo.assignedTo.length > 0;
    const isStartDateToUpdate = woScheduleInfo.woScheduledStartDate !== undefined;
    const isEndDateToUpdate = woScheduleInfo.woScheduledEndDate !== undefined;

    if (isAssignedToUpdate || isStartDateToUpdate || isEndDateToUpdate) {
      const woList: WorkOrderRow[] = this.selectedWorkOrders.map((node) => node.data as WorkOrderRow);

      const bidmWorkOrderList = woList.map((wo) => {
        const bidmWorkOrder = wo.bidmWorkOrder;
        bidmWorkOrder.woAssignedTo = isAssignedToUpdate ? woScheduleInfo.assignedTo : bidmWorkOrder.woAssignedTo;
        bidmWorkOrder.woScheduledStartDate = isStartDateToUpdate
          ? woScheduleInfo.woScheduledStartDate
          : bidmWorkOrder.woScheduledStartDate;
        bidmWorkOrder.woScheduledEndDate = isEndDateToUpdate
          ? woScheduleInfo.woScheduledEndDate
          : bidmWorkOrder.woScheduledEndDate;

        return bidmWorkOrder;
      });

      this.workOrdersFormService.updateBidmWorkOrders(bidmWorkOrderList).subscribe(
        (result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateScheduleWO'));
          this.loadWorkOrders();
        },
        (error) => {
          if (!!error.error && !!error.error.errorDesc && error.error.errorDesc.length > 0) {
            this.messageService.showErrorMessage(error.error.errorDesc);
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpdateScheduleWO'));
          }
          this.loadWorkOrders();
        }
      );
    }
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

  public openSnLink(code: string): void {
    if (code) {
      this.openEquipment(code, ComponentOpenMode.Read);
    }
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
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
}
