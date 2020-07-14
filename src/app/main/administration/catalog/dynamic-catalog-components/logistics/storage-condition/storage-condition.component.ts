import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStorageConditionDTO } from '../../../../../../shared/types/api-types/bidt-storage-condition-dto.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { StorageConditionService } from './storage-condition.service';

@Component({
  selector: 'aw-storage-condition',
  templateUrl: './storage-condition.component.html'
})
export class StorageConditionComponent extends DynamicCatalog implements OnInit {
  public filteredRowsNb: number;

  public storageConditionTableDataSource: TableDataSource<BidtStorageConditionDTO>;
  public currentStorageCondition: BidtStorageConditionDTO | undefined;
  public currentStorageConditionIndex: number | undefined;
  public showStorageConditionForm: boolean;
  public isNewStorageCondition: boolean;
  public storageConditionAddedList: BidtStorageConditionDTO[];
  public storageConditionUpdatedList: BidtStorageConditionDTO[];

  public constructor(
    private readonly _loaderService: LoaderService,
    private readonly _messageService: MessageService,
    private readonly storageConditionService: StorageConditionService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.storageConditionTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'scName', translateKey: this.getTranslateKey('scName') },
        {
          field: 'scContainerType',
          translateKey: this.getTranslateKey('scContainerType')
        },
        { field: 'scDescription', translateKey: this.getTranslateKey('scDescription') }
      ],
      data: []
    });

    this.currentStorageCondition = undefined;
    this.currentStorageConditionIndex = undefined;

    this.showStorageConditionForm = false;
    this.isNewStorageCondition = false;
    this.storageConditionAddedList = [];
    this.storageConditionUpdatedList = [];
    this.loadStorageConditionTableData();
  }

  public ngOnInit() {
    this._loaderService.hideModuleLoadingBar();
  }

  public getComponentName(): string {
    return 'StorageConditionComponent';
  }

  protected get messageService(): MessageService {
    return this._messageService;
  }

  public loadStorageConditionTableData(): void {
    this.storageConditionTableDataSource.setData([]);
    this.storageConditionService.loadStorageConditionTableData().subscribe(
      (results) => {
        results.list.forEach((element) => {
          element.dataKey = element.id;
        });

        this.storageConditionTableDataSource.addData(results.list);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  public refresh(): void {
    this.storageConditionAddedList = [];
    this.storageConditionUpdatedList = [];
    this.loadStorageConditionTableData();
  }

  public save(): void {
    if (this.isSaveValid()) {
      const input: SaveCatalogInput = {
        bidtStorageConditionAddOrUpdateList: this.storageConditionTableDataSource.dataSrc
      };
      this.storageConditionService.saveStorageCondition(input).subscribe(
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveStorageCondition'));
          this.refresh();
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveStorageCondition'));
        }
      );
    }
  }

  private isSaveValid(): boolean {
    return true;
  }

  public addStorageCondition(): void {
    this.showStorageConditionForm = true;
    this.isNewStorageCondition = true;
    this.currentStorageCondition = {};
  }

  public editSelectedStorageCondition(): void {
    this.showStorageConditionForm = true;
    this.isNewStorageCondition = false;
    const storageCondition = this.storageConditionTableDataSource.dataSelection[0];
    this.currentStorageCondition = storageCondition;
    this.currentStorageConditionIndex = this.storageConditionTableDataSource.dataSrc.findIndex(
      (type) => type === this.storageConditionTableDataSource.dataSelection[0]
    );
  }

  public deleteSelectedStorageCondition(): void {
    const partialMessageKey =
      this.storageConditionTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedRows'
        : 'confirmDeleteSelectedRow';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const selectedStoragConditionList = new Array<number>();
        this.storageConditionTableDataSource.dataSelection.forEach((type) => {
          if (type && type.id) {
            selectedStoragConditionList.push(type.id);
          }

          const inAddedList = this.storageConditionAddedList.filter((element, index) => {
            return type.dataKey === element.dataKey;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.storageConditionAddedList.forEach((entry, index) => {
              if (entry.dataKey === type.dataKey) {
                foundAddedIndex = index;
              }
            });
            this.storageConditionAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.storageConditionUpdatedList.filter((element, index) => {
            return element.dataKey === type.dataKey;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.storageConditionUpdatedList.forEach((entry, index) => {
              if (entry.dataKey === type.dataKey) {
                foundUpdatedIndex = index;
              }
            });
            this.storageConditionUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.storageConditionTableDataSource.deleteDataSelection();
        });

        this.storageConditionService.deleteStorageCondition(selectedStoragConditionList).subscribe((result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStorageCondition'));
          this.storageConditionTableDataSource.dataSelection = [];
        });
      }
    });
  }

  public createStorageCondition(event: BidtStorageConditionDTO): void {
    if (event) {
      this.storageConditionAddedList = [...this.storageConditionAddedList, event];
      const storageCondition = { ...event };
      storageCondition.dataKey = Math.random();
      this.storageConditionTableDataSource.addData([storageCondition]);
    }
  }

  public updateStorageCondition(event: BidtStorageConditionDTO): void {
    if (this.currentStorageConditionIndex !== null && this.currentStorageConditionIndex !== undefined) {
      this.storageConditionUpdatedList = [...this.storageConditionUpdatedList, event];
      const storageCondition = { ...event };
      this.storageConditionTableDataSource.replaceData(
        this.storageConditionTableDataSource.dataSrc[this.currentStorageConditionIndex],
        storageCondition
      );
      this.storageConditionTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updateStorageCondition', 'this.currentStorageConditionIndex');
    }
  }
}
