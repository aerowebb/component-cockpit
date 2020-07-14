import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BidtStockTypeDTO } from '../../../../../../shared/types/api-types/bidt-stock-type-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { StockTypeService } from './stock-type.service';

@Component({
  selector: 'aw-stock-type',
  templateUrl: './stock-type.component.html'
})
export class StockTypeComponent extends DynamicCatalog implements OnInit {
  public filteredRowsNb: number;

  public stockTypesTableDataSource: TableDataSource<BidtStockTypeDTO>;
  public currentStockType: BidtStockTypeDTO | undefined;
  public currentStockTypeIndex: number | undefined;
  public showStockTypeForm: boolean;
  public stockTypesAddedList: BidtStockTypeDTO[];
  public stockTypesUpdatedList: BidtStockTypeDTO[];
  public deletedStock: BidtStockTypeDTO[];
  public ownerName: LabelValue<string>[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly stockTypeService: StockTypeService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.stockTypesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'stockTypeCode',
          translateKey: this.getTranslateKey('stockTypeCode')
        },
        {
          field: 'stockTypeDescription',
          translateKey: this.getTranslateKey('stockTypeDescription')
        },
        {
          field: 'stockTypeIsValuatedBoolean',
          translateKey: this.getTranslateKey('stockTypeIsValuatedBoolean'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'stockTypeOwner',
          translateKey: this.getTranslateKey('stockTypeOwner')
        }
      ],
      data: []
    });

    this.currentStockType = undefined;
    this.currentStockTypeIndex = undefined;
    this.showStockTypeForm = false;
    this.stockTypesAddedList = [];
    this.stockTypesUpdatedList = [];
    this.deletedStock = [];
    this.loadStockTypeTableData();
    this.ownerDropDown();
  }

  public ngOnInit() {
    // super.ngOnInit();
    // this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'StockTypeComponent';
  }
  public ownerDropDown() {
    this.stockTypeService.getOwnerNameMap().subscribe((results) => {
      this.ownerName = results;
    });
  }

  public loadStockTypeTableData(): void {
    this.stockTypesTableDataSource.setData([]);
    this.stockTypeService.loadStockTypeTableData().subscribe(
      (results) => {
        results.list.forEach((stockType) => {
          stockType.stockTypeIsValuatedBoolean = stockType.stockTypeIsValuated === 0 ? false : true;
          LabelValueUtils.stringValueToLabel(stockType, 'stockTypeOwner', this.ownerName);
        });
        this.stockTypesTableDataSource.addData(results.list);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  public refresh(): void {
    this.loadStockTypeTableData();
    this.stockTypesTableDataSource.dataSelection = [];
    this.stockTypesAddedList = [];
    this.stockTypesUpdatedList = [];
  }

  public addStockType(): void {
    this.showStockTypeForm = true;
    this.currentStockType = {};
  }

  public editSelectedStockType(): void {
    this.showStockTypeForm = true;
    const stockType = this.stockTypesTableDataSource.dataSelection[0];
    this.currentStockType = stockType;
    this.currentStockTypeIndex = this.stockTypesTableDataSource.dataSrc.findIndex(
      (type) => type === this.stockTypesTableDataSource.dataSelection[0]
    );
  }

  public deleteSelectedStockType(): void {
    const partialMessageKey =
      this.stockTypesTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedRows' : 'confirmDeleteSelectedRow';
    const stockIDs: number[] = [];
    this.stockTypesTableDataSource.dataSelection.forEach((type) => {
      if (!!type && !!type.id) {
        stockIDs.push(type.id);
        this.confirmationService.confirmDelete({
          messageKey: this.getTranslateKey(partialMessageKey),
          accept: () => {
            this.stockTypeService.deleteStockType(stockIDs).subscribe(
              (_result) => {
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStockType'));
                this.stockTypesTableDataSource.dataSelection = [];
                this.refresh();
              },
              (_error) => {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteStockType'));
              }
            );
          }
        });
      } else if (type && type.id == undefined) {
        this.confirmationService.confirmDelete({
          messageKey: this.getTranslateKey(partialMessageKey),
          accept: () => {
            this.refresh();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStockType'));
          }
        });
      }
    });
  }

  public createStockType(event: BidtStockTypeDTO): void {
    if (event) {
      this.stockTypesAddedList = [...this.stockTypesAddedList, event];
      if (event.stockTypeIsValuated) {
        event.stockTypeIsValuated = 1;
      }
      const stockType = { ...event };
      this.stockTypesTableDataSource.addData([stockType]);
    }
  }

  public updateStockType(event: BidtStockTypeDTO): void {
    if (!!this.currentStockTypeIndex) {
      this.stockTypesUpdatedList = [...this.stockTypesUpdatedList, event];
      if (event.stockTypeIsValuated) {
        event.stockTypeIsValuated = 1;
      }
      const stockType = { ...event };
      this.stockTypesTableDataSource.replaceData(
        this.stockTypesTableDataSource.dataSrc[this.currentStockTypeIndex],
        stockType
      );
      this.stockTypesTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updateStockType', 'this.currentStockTypeIndex');
    }
  }
  public openStockType(): void {
    this.stockTypesTableDataSource.dataSelection.forEach((stock) => {
      if (stock) {
        if (stock.stockTypeCode && stock.stockTypeCode.trim().length > 0) {
          this.openStockForm(stock, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingStock'));
        }
      }
    });
  }
  private openStockForm(object: BidtStockTypeDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.StockTypeFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'StockTypeFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
  public create(): void {
    this.openStockForm(undefined, ComponentOpenMode.Create);
  }
}
