import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SortEvent, TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';
import { StockViewSiteNodeDTO } from '../../../../shared/types/api-types/stock-view-site-node-dto.interface';
import { StockViewWarehouseNodeDTO } from '../../../../shared/types/api-types/stock-view-warehouse-node-dto.interface';
import { StockViewZoneNodeDTO } from '../../../../shared/types/api-types/stock-view-zone-node-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { StockMvtParameters } from '../../stock-movements/stock-movement-parameters.interface';

import { StockViewFormService } from './stock-view-form.service';

interface TreeNodeData {
  data: StockViewSiteNodeDTO | StockViewWarehouseNodeDTO | StockViewZoneNodeDTO;
  quantity: number;
  type: string;
}

enum TreeNodeType {
  SITE = 'site',
  WAREHOUSE = 'warehouse',
  ZONE = 'zone'
}

interface StockViewTableFilter {
  pn?: string;
  siteId?: string;
  warehouseId?: string;
  areaId?: string;
  storageBinId?: string;
  stockIssueDate?: Date;
}

@Component({
  selector: 'aw-stock-view-form',
  styleUrls: ['./stock-view-form.component.scss'],
  templateUrl: './stock-view-form.component.html'
})
export class StockViewFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  // private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
  private static readonly issueData: string = 'stockIssueDate';
  public readonly treeNodeType: typeof TreeNodeType;

  public date: Date;
  public withAlternatives: boolean;

  public stockInformationTable: StockInformationDTO[];
  public stockViewTreeTable: TreeNode[];

  public equipmentStatuses: LabelValue<string>[];

  public selectedStockInformations: StockInformationDTO[] | undefined;
  public selectedStockViewTreeNode: TreeNode | undefined;
  public isChangeLocationDisplayed: boolean;
  public filtersVisible: boolean;
  public showFilterOverlay: boolean;
  public completeStockInformationTable: StockInformationDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly stockViewFormService: StockViewFormService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.treeNodeType = TreeNodeType;

    this.init();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_STOCK_VIEW_FORM;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData.objectId) {
      const input = this.serializationService.deserialize(this.componentData.objectId) as {
        data: StockViewSiteNodeDTO[];
        date: Date;
        withAlternatives: boolean;
      };

      this.date = input.date;
      this.withAlternatives = input.withAlternatives;
      this.stockViewTreeTable = input.data.map((node) => this.createSiteTreeNode(node));

      if (this.stockViewTreeTable.length === 1) {
        this.stockViewTreeTable[0].expanded = true;
        this.selectedStockViewTreeNode = this.stockViewTreeTable[0];
        this.onSelectStockViewTreeNode(this.selectedStockViewTreeNode);
      }
    }
  }

  // ////////////////////////////////////////////////////////////////////////////

  public customSort(event: SortEvent): void {
    if (event.data) {
      event.data.sort((data1: StockInformationDTO, data2: StockInformationDTO) => {
        let value1: unknown;
        let value2: unknown;
        let result: number;

        if (event.field === 'stockSn') {
          value1 = data1.stockSn || data1.manufacturingBatchNumber;
          value2 = data2.stockSn || data2.manufacturingBatchNumber;
        } else {
          value1 = data1[event.field as string];
          value2 = data2[event.field as string];
        }

        if (value1 === null && value2 !== null) {
          result = -1;
        } else if (value1 !== null && value2 === null) {
          result = 1;
        } else if (value1 === null && value2 === null) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          result = (value1 as number) < (value2 as number) ? -1 : (value1 as number) > (value2 as number) ? 1 : 0;
        }

        return (event.order as number) * result;
      });
    }
  }

  public onSelectStockViewTreeNode(node: TreeNode): void {
    this.stockInformationTable = (node.data as TreeNodeData).data.stockInformation.sort((x, y) =>
      x.pn.localeCompare(y.pn)
    );
    this.completeStockInformationTable = _cloneDeep(this.stockInformationTable);
    this.selectedStockInformations = [];
  }

  public onUnselectStockViewTreeNode(): void {
    this.stockInformationTable = [];
    this.completeStockInformationTable = [];
  }

  public openBatch(row: StockInformationDTO): void {
    const equip: BidoEquipmentDTO = {};
    equip.pnCode = row.pn;
    equip.batchNumber = row.stockBatchNumber;
    equip.bidoEquipmentAttributeList = [];
    equip.equipmentFunction = '';
    this.stockViewFormService.findBidoEquipmentByPnAndBatchNumber(equip).subscribe({
      next: (result) => {
        if (result) {
          const data: PageComponentData = {
            id: this.tabService.generateId(),
            componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
            openMode: ComponentOpenMode.Read
          };

          data.objectId = result.equipmentCode;
          const labelKey = 'transaction.' + data.componentId;
          this.tabService.open(this.tabService.create(data, labelKey, true));
        }
      }
    });
  }

  public openEquipment(row: StockInformationDTO): void {
    this.loadStockInformationEquipment(row).subscribe({
      next: (equipment) => {
        if (equipment) {
          const data: PageComponentData = {
            componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
            id: this.tabService.generateId(),
            objectId: this.serializationService.serialize({
              equipmentCode: equipment.equipmentCode
            }),
            openMode: ComponentOpenMode.Read
          };
          const labelKey = 'transaction.' + data.componentId;
          this.tabService.open(this.tabService.create(data, labelKey, true));
        }
      }
    });
  }

  public openManufacturingBatch(row: StockInformationDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      objectId: this.serializationService.serialize({ customerCode: row.manufacturingBatchNumber }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openPn(row: StockInformationDTO): void {
    const data: PageComponentData = {
      componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
      id: this.tabService.generateId(),
      objectId: row.pn,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // ////////////////////////////////////////////////////////////////////////////

  private calculateQuantity(stockInformation: StockInformationDTO[]): number {
    return stockInformation
      .filter((aStockInformation) => !StringUtils.isNullOrEmpty(aStockInformation.stockQuantity))
      .map((aStockInformation) => aStockInformation.stockQuantity as string)
      .map((quantity) => NumberUtils.fromString(quantity))
      .reduce((x, y) => x + y, 0);
  }

  private createSiteTreeNode(node: StockViewSiteNodeDTO): TreeNode {
    return {
      data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.SITE },
      children: node.warehouseNodes.map((warehouseNode) => this.createWarehouseTreeNode(warehouseNode))
    };
  }

  private createWarehouseTreeNode(node: StockViewWarehouseNodeDTO): TreeNode {
    return {
      data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.WAREHOUSE },
      children: node.zoneNodes.map((zoneNode) => this.createZoneTreeNode(zoneNode))
    };
  }

  private createZoneTreeNode(node: StockViewZoneNodeDTO): TreeNode {
    return {
      data: { data: node, quantity: this.calculateQuantity(node.stockInformation), type: TreeNodeType.ZONE },
      children: []
    };
  }

  private init(): void {
    this.stockInformationTable = [];
    this.stockViewTreeTable = [];

    this.equipmentStatuses = [];

    this.selectedStockInformations = [];
    this.selectedStockViewTreeNode = undefined;
    this.isChangeLocationDisplayed = false;

    this.loadEquipmentStatuses();
  }

  private loadEquipmentStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((statuses) => {
      this.equipmentStatuses = statuses.sort((s1, s2) => s1.label.localeCompare(s2.label));
    });
  }

  private loadStockInformationEquipment(rowData: StockInformationDTO): Observable<BidoEquipmentDTO | undefined> {
    return this.stockViewFormService
      .findBidoEquipmentsByPnAndSn({
        pnCode: rowData.pn,
        sn: rowData.stockSn
      })
      .pipe(map((equipments) => (equipments.length > 0 ? equipments[0] : undefined)));
  }

  public changeLocation(): void {
    this.isChangeLocationDisplayed = true;
  }

  public openFilters() {
    this.showFilterOverlay = !this.filtersVisible;
  }

  public filterWithCriteria(event: StockViewTableFilter) {
    if (Object.keys(event).length === 0) {
      this.stockInformationTable = [];
      this.stockInformationTable = _cloneDeep(this.completeStockInformationTable);
    } else {
      this.stockInformationTable = this.completeStockInformationTable.filter((element) => {
        for (const prop in event) {
          if (prop === StockViewFormComponent.issueData && element[prop] && event[prop]) {
            const currentDate = new Date(event[prop]).getTime();
            const savedDate = new Date(element[prop]).getTime();

            return currentDate < savedDate ? false : true;
          } else if (event[prop] && element[prop] !== event[prop]) {
            return false;
          }
        }

        return true;
      });
    }
  }

  public onValidateChangeLocation(params: StockMvtParameters) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: JSON.stringify(params)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
