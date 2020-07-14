import { Component, Input, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStorageBinTypeDTO } from '../../../../../../shared/types/api-types/bidt-storage-bin-type-dto.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { StorageBinTypeService } from './storage-bin-type.service';

@Component({
  selector: 'aw-storage-bin-type',
  templateUrl: './storage-bin-type.component.html'
})
export class StorageBinTypeComponent extends DynamicCatalog implements OnInit {
  public filteredRowsNb: number;
  @Input() private readonly componentData: PageComponentData;

  public storageBinTypesTableDataSource: TableDataSource<BidtStorageBinTypeDTO>;

  public currentStorageBinType: BidtStorageBinTypeDTO | undefined;
  public currentStorageBinTypeIndex: number | undefined;
  public showStorageBinTypeForm: boolean;
  public isNewStorageBinType: boolean;
  public storageBinTypesAddedList: BidtStorageBinTypeDTO[];
  public storageBinTypesUpdatedList: BidtStorageBinTypeDTO[];
  public deletedStorage: BidtStorageBinTypeDTO[];

  public constructor(
    private readonly _loaderService: LoaderService,
    private readonly _messageService: MessageService,
    private readonly storageBinTypeService: StorageBinTypeService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.storageBinTypesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'sbtTypeName', translateKey: this.getTranslateKey('sbtTypeName') },
        {
          field: 'sbtTypeDescription',
          translateKey: this.getTranslateKey('sbtTypeDescription')
        }
      ],
      data: []
    });

    this.currentStorageBinType = undefined;
    this.currentStorageBinTypeIndex = undefined;

    this.showStorageBinTypeForm = false;
    this.isNewStorageBinType = false;
    this.storageBinTypesAddedList = [];
    this.storageBinTypesUpdatedList = [];
    this.deletedStorage = [];
  }

  public ngOnInit() {
    this.loadStorageBinTypeTableData();
    this._loaderService.hideModuleLoadingBar();
  }

  public getComponentName(): string {
    return 'StorageBinTypeComponent';
  }

  protected get messageService(): MessageService {
    return this._messageService;
  }

  public loadStorageBinTypeTableData(): void {
    this.storageBinTypesTableDataSource.setData([]);
    const storageType = this.componentData && this.componentData.objectId ? this.componentData.objectId : undefined;
    this.storageBinTypeService.loadStorageBinTypeTableData().subscribe(
      (results) => {
        if (results && results.list && results.list.length) {
          const storageDataArray: BidtStorageBinTypeDTO[] = results.list.filter((element) => {
            return element.areaCategory || storageType ? element.areaCategory === storageType : element;
          });
          this.storageBinTypesTableDataSource.addData(storageDataArray);
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  public refresh(): void {
    this.storageBinTypesTableDataSource.dataSelection = [];
    this.storageBinTypesAddedList = [];
    this.storageBinTypesUpdatedList = [];
    this.loadStorageBinTypeTableData();
  }

  public save(): void {
    const input: SaveCatalogInput = {
      bidtStorageBinTypeDTOList: this.storageBinTypesTableDataSource.dataSrc
    };
    this.storageBinTypeService.saveStorageBinType(input).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveStorageBinType'));
        this.refresh();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveStorageBinType'));
      }
    );
  }

  public addStorageBinType(): void {
    this.showStorageBinTypeForm = true;
    this.isNewStorageBinType = true;
    this.currentStorageBinType = {};
  }

  public editSelectedStorageBinType(): void {
    this.showStorageBinTypeForm = true;
    this.isNewStorageBinType = false;
    const storageBinType = this.storageBinTypesTableDataSource.dataSelection[0];
    this.currentStorageBinType = storageBinType;
    this.currentStorageBinTypeIndex = this.storageBinTypesTableDataSource.dataSrc.findIndex(
      (type) => type === this.storageBinTypesTableDataSource.dataSelection[0]
    );
  }

  public deleteSelectedStorageBinType(): void {
    const partialMessageKey =
      this.storageBinTypesTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedRows'
        : 'confirmDeleteSelectedRow';
    const storageType: number[] = [];
    this.storageBinTypesTableDataSource.dataSelection.forEach((type) => {
      if (type && type.id) {
        const typeId: number = type.id;
        storageType.push(typeId);
        this.confirmationService.confirmDelete({
          messageKey: this.getTranslateKey(partialMessageKey),
          accept: () => {
            this.storageBinTypeService.deleteStorageBinType(storageType).subscribe(
              (_result) => {
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStorageBinType'));
                this.storageBinTypesTableDataSource.dataSelection = [];
                this.refresh();
              },
              (_error) => {
                this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteStorageBinType'));
              }
            );
          }
        });
      } else if (type && type.id == undefined) {
        this.confirmationService.confirmDelete({
          messageKey: this.getTranslateKey(partialMessageKey),
          accept: () => {
            const inAddedList = this.storageBinTypesAddedList.filter((element, index) => {
              return type.sbtTypeName === element.sbtTypeName && element.sbtTypeDescription === type.sbtTypeDescription;
            });

            // removing from added
            if (inAddedList) {
              let foundAddedIndex = -1;
              this.storageBinTypesAddedList.forEach((entry, index) => {
                if (entry.sbtTypeName === type.sbtTypeName && entry.sbtTypeDescription === type.sbtTypeDescription) {
                  foundAddedIndex = index;
                }
              });
              this.storageBinTypesAddedList.splice(foundAddedIndex, 1);
            }

            const inUpdatedList = this.storageBinTypesUpdatedList.filter((element, index) => {
              return element.sbtTypeName === type.sbtTypeName && element.sbtTypeDescription === type.sbtTypeDescription;
            });

            // removing from updated
            if (inUpdatedList) {
              let foundUpdatedIndex = -1;
              this.storageBinTypesUpdatedList.forEach((entry, index) => {
                if (entry.sbtTypeName === type.sbtTypeName && entry.sbtTypeDescription === type.sbtTypeDescription) {
                  foundUpdatedIndex = index;
                }
              });
              this.storageBinTypesUpdatedList.splice(foundUpdatedIndex, 1);
            }

            // Removing from table
            this.storageBinTypesTableDataSource.deleteDataSelection();

            this.storageBinTypesTableDataSource.dataSelection = [];
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStorageBinType'));
          }
        });
      }
    });
  }

  public createStorageBinType(event: BidtStorageBinTypeDTO): void {
    if (event) {
      event.areaCategory = this.componentData && this.componentData.objectId ? this.componentData.objectId : undefined;
      this.storageBinTypesAddedList = [...this.storageBinTypesAddedList, event];
      const storageBinType = { ...event };
      this.storageBinTypesTableDataSource.addData([storageBinType]);
    }
  }

  public updateStorageBinType(event: BidtStorageBinTypeDTO): void {
    if (!!this.currentStorageBinTypeIndex) {
      this.storageBinTypesUpdatedList = [...this.storageBinTypesUpdatedList, event];
      const storageBinType = { ...event };
      this.storageBinTypesTableDataSource.replaceData(
        this.storageBinTypesTableDataSource.dataSrc[this.currentStorageBinTypeIndex],
        storageBinType
      );
      this.storageBinTypesTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updateStorageBinType', 'this.currentStorageBinTypeIndex');
    }
  }
}
