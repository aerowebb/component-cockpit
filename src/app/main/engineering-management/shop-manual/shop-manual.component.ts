import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { SaveCatalogInput } from '../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireShopManualDTO } from '../../../shared/types/api-output-types/administration-catalog/bire-shop-manual-dto.interface';
import { BireShopManualDTOId } from '../../../shared/types/api-types/bire-shop-manual-dto-id.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { ShopManualService } from './shop-manual.service';

@Component({
  selector: 'aw-shop-manual',
  styleUrls: ['./shop-manual.component.scss'],
  templateUrl: './shop-manual.component.html'
})
export class ShopManualComponent extends PageComponent<PageComponentData> implements OnInit {
  public shopManualTableDataSource: TableDataSource<BireShopManualDTO>;
  public shopManualTableLoading: boolean;
  public selectedShopManualTableDialogData: BireShopManualDTO;
  public filteredRowsNb: number;

  public shopManualDialogOpenMode: ComponentOpenMode;
  public showShopManualDialog: boolean;

  private bireShopManualAddedList: BireShopManualDTO[];
  private bireShopManualUpdatedList: BireShopManualDTO[];

  public selectedShopManualCodeToEdit: string;
  public showSaveSpinner: boolean;

  public subtitle: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly shopManualService: ShopManualService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.shopManualTableLoading = false;
    this.filteredRowsNb = 0;
    this.shopManualDialogOpenMode = ComponentOpenMode.Read;

    // Table column
    this.initShopManualTableDataSource();

    this.showShopManualDialog = false;
    this.bireShopManualUpdatedList = [];
    this.bireShopManualAddedList = [];
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_SHOP_MANUAL;
  }

  public ngOnInit() {
    this.displayComponentContext(this.getTranslateKey('list'), true);

    this.loadShopManualTableData();

    if (this.componentData.objectId && this.componentData.objectId.length > 0) {
      this.subtitle = this.componentData.objectId;
    }
  }

  private initShopManualTableDataSource(): void {
    this.shopManualTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'smCode',
          translateKey: this.getTranslateKey('smCode'),
          width: '30%'
        },
        {
          field: 'smDescription',
          translateKey: this.getTranslateKey('smDescription'),
          width: '70%'
        }
      ],
      data: []
    });
  }

  private loadShopManualTableData(isfromRefresh?: boolean) {
    this.shopManualTableLoading = true;

    const flag = isfromRefresh ? true : false;

    this.shopManualService.findAllBireShopManuals().subscribe((results) => {
      this.shopManualTableDataSource.setData(results.list);
      this.filteredRowsNb = this.shopManualTableDataSource.dataCount;

      if (!flag) {
        if (this.bireShopManualAddedList) {
          this.bireShopManualAddedList.forEach((entry) => {
            this.shopManualTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireShopManualUpdatedList) {
          this.shopManualTableDataSource.dataSrc.forEach((res) => {
            this.bireShopManualUpdatedList.forEach((entry) => {
              if (res.smCode === entry.smCode) {
                this.shopManualTableDataSource.replaceData(this.shopManualTableDataSource.dataSelection[0], entry);
              }
            });
          });
        }
      }

      this.shopManualTableLoading = false;
    });
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  /**
   * On Add button click
   */
  public addShopManual() {
    this.selectedShopManualTableDialogData = {};
    this.shopManualDialogOpenMode = ComponentOpenMode.Create;
    this.showShopManualDialog = true;
  }

  /**
   * On add table row
   */
  public onAddShopManual(ev) {
    this.shopManualTableDataSource.addData([ev]);
    this.bireShopManualAddedList.push(ev);
    this.filteredRowsNb = this.shopManualTableDataSource.dataCount;
  }

  /**
   * Delete selected Row
   */
  public deleteSelectedShopManual() {
    const partialMessageKey =
      this.shopManualTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedShopManuals'
        : 'confirmDeleteSelectedShopManual';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireShopManualDTOId: BireShopManualDTOId[] = [];
        this.shopManualTableDataSource.dataSelection.forEach((res) => {
          if (!!res.smCode) {
            bireShopManualDTOId.push({ smCode: res.smCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedShopManual', 'res.smCode');
          }
        });

        this.shopManualService.removeBireShopManual(bireShopManualDTOId).subscribe((results) => {
          // Removing entry from added list if added
          this.bireShopManualAddedList.forEach((entry, index) => {
            this.shopManualTableDataSource.dataSelection.forEach((en) => {
              if (entry.smCode === en.smCode) {
                this.bireShopManualAddedList.splice(index, 1);
              }
            });
          });

          // Removing entry from updated list if added
          this.bireShopManualUpdatedList.forEach((entry, index) => {
            this.shopManualTableDataSource.dataSelection.forEach((en) => {
              if (entry.smCode === en.smCode) {
                this.bireShopManualUpdatedList.splice(index, 1);
              }
            });
          });
          this.refresh();

          this.shopManualTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Row
   */
  public editSelectedShopManual() {
    this.selectedShopManualCodeToEdit = '';
    this.selectedShopManualTableDialogData = this.shopManualTableDataSource.dataSelection[0];
    this.shopManualDialogOpenMode = ComponentOpenMode.Write;
    this.showShopManualDialog = true;
    const selShopManualCode = this.shopManualTableDataSource.dataSelection[0].smCode;
    if (!!selShopManualCode) {
      this.selectedShopManualCodeToEdit = selShopManualCode;
    } else {
      super.throwUnboundLocalError('editSelectedShopManual', 'selShopManualCode');
    }
  }

  /**
   * On update table row
   */
  public updateShopManual(ev: BireShopManualDTO) {
    this.shopManualTableDataSource.replaceData(this.shopManualTableDataSource.dataSelection[0], ev);

    let isNew = false;
    this.bireShopManualAddedList.forEach((res, index) => {
      if (res.smCode === ev.smCode) {
        isNew = true;
        this.bireShopManualAddedList.splice(index, 1);
      }
    });

    if (!isNew) {
      this.bireShopManualUpdatedList.forEach((res, index) => {
        if (res.smCode === ev.smCode) {
          this.bireShopManualUpdatedList.splice(index, 1);
        }
      });
      this.bireShopManualUpdatedList.push(ev);
    } else {
      this.bireShopManualAddedList.push(ev);
    }
    this.shopManualTableDataSource.dataSelection = [];
  }

  /**
   * Saving Data
   */
  public onClickSave() {
    if (this.isSaveValid(this.bireShopManualAddedList, this.bireShopManualUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireShopManualAddedList: this.bireShopManualAddedList,
        bireShopManualUpdatedList: this.bireShopManualUpdatedList
      };

      this.showSaveSpinner = true;
      this.shopManualService.saveCatalog(saveCatalogInput).subscribe(
        () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

          // Clearing Added and updated List
          this.bireShopManualAddedList = [];
          this.bireShopManualUpdatedList = [];
          this.showSaveSpinner = false;
        },
        (error) => {
          this.showSaveSpinner = false;
        }
      );
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }

  public refresh() {
    this.shopManualTableDataSource.dataSelection = [];
    this.bireShopManualAddedList = [];
    this.bireShopManualUpdatedList = [];
    this.loadShopManualTableData(true);
  }
}
