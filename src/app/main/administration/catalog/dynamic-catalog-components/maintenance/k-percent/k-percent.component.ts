import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireKPourcentDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-k-pourcent-dto.interface';
import { BireKPourcentDTOId } from '../../../../../../shared/types/api-types/bire-k-pourcent-dto-id.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { KPercentService } from './k-percent.service';

@Component({
  selector: 'aw-k-percent',
  templateUrl: './k-percent.component.html'
})
export class KPercentComponent extends DynamicCatalog implements OnInit {
  public kpercentTableDataSource: TableDataSource<BireKPourcentDTO>;

  public selectedKPercentDialogData: BireKPourcentDTO;

  public kPercentDialogOpenMode: ComponentOpenMode;
  public showKPercentDialog: boolean;

  private bireKPourcentDTOAddedList: BireKPourcentDTO[];
  private bireKPourcentDTOUpdatedList: BireKPourcentDTO[];

  private selectedKPercentCodeEdit: string;

  public constructor(
    private readonly kPercentService: KPercentService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.kpercentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'kpourcentCode',
          translateKey: this.getTranslateKey('kpourcentCode')
        },
        { field: 'kpourcentType', translateKey: this.getTranslateKey('kpourcentType') }
      ],
      data: []
    });
    this.kPercentDialogOpenMode = ComponentOpenMode.Read;
    this.bireKPourcentDTOAddedList = [];
    this.bireKPourcentDTOUpdatedList = [];
  }

  public ngOnInit() {
    this.loadKPercentTable();
  }

  /**
   * Load K Percent table
   */
  private loadKPercentTable(isFromRefresh?: boolean) {
    const flag = isFromRefresh ? true : false;
    this.kpercentTableDataSource.setData([]);
    this.kPercentService.findAllBireKPourcents().subscribe((results) => {
      this.kpercentTableDataSource.addData(results);
      if (!flag) {
        if (this.bireKPourcentDTOAddedList) {
          this.bireKPourcentDTOAddedList.forEach((r) => {
            this.kpercentTableDataSource.addData([r]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireKPourcentDTOUpdatedList) {
          this.kpercentTableDataSource.dataSrc.forEach((res, index) => {
            this.bireKPourcentDTOUpdatedList.forEach((entry) => {
              if (res.kpourcentCode === entry.kpourcentCode) {
                this.kpercentTableDataSource.replaceData(res, entry);
              }
            });
          });
        }
      }
    });
  }

  public getComponentName(): string {
    return 'KPercentComponent';
  }

  /**
   * On Add button click
   */
  public addKPercent() {
    this.selectedKPercentDialogData = {};
    this.kPercentDialogOpenMode = ComponentOpenMode.Create;
    this.showKPercentDialog = true;
  }

  /**
   * On add table row
   */
  public onAddKPercent(ev) {
    this.kpercentTableDataSource.addData([ev]);
    this.bireKPourcentDTOAddedList.push(ev);
  }

  /**
   * Delete selected Percent
   */
  public deleteKPercent() {
    const partialMessageKey =
      this.kpercentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedPercents'
        : 'confirmDeleteSelectedPercent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireKPourcentDTOId: BireKPourcentDTOId[] = [];
        this.kpercentTableDataSource.dataSelection.forEach((res) => {
          if (!!res.kpourcentCode) {
            bireKPourcentDTOId.push({ kpourcentCode: res.kpourcentCode });
          }

          const inAddedList = this.bireKPourcentDTOAddedList.filter((element, index) => {
            return res.kpourcentCode === element.kpourcentCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireKPourcentDTOAddedList.forEach((entry, index) => {
              if (entry.kpourcentCode === res.kpourcentCode) {
                foundAddedIndex = index;
              }
            });
            this.bireKPourcentDTOAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireKPourcentDTOUpdatedList.filter((element, index) => {
            return res.kpourcentCode === element.kpourcentCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireKPourcentDTOUpdatedList.forEach((entry, index) => {
              if (entry.kpourcentCode === res.kpourcentCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireKPourcentDTOUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.kpercentTableDataSource.deleteDataSelection();
        });

        this.kPercentService.removeBireKPourcent(bireKPourcentDTOId).subscribe((results) => {
          this.kpercentTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Percent
   */
  public editKPercent() {
    this.selectedKPercentCodeEdit = '';
    this.selectedKPercentDialogData = this.kpercentTableDataSource.dataSelection[0];
    this.kPercentDialogOpenMode = ComponentOpenMode.Write;
    this.showKPercentDialog = true;
    const selPercentCode = this.kpercentTableDataSource.dataSelection[0].kpourcentCode;
    if (!!selPercentCode) {
      this.selectedKPercentCodeEdit = selPercentCode;
    } else {
      super.throwUnboundLocalError('editKPercent', 'selPercentCode');
    }
  }

  /**
   * On update table row
   */
  public onUpdateKPercent(ev: BireKPourcentDTO) {
    this.kpercentTableDataSource.dataSrc.forEach((res) => {
      if (res.kpourcentCode === this.selectedKPercentCodeEdit) {
        this.kpercentTableDataSource.replaceData(res, ev);
      }
    });
    // Check if new entry is edited
    let isNew = false;
    this.bireKPourcentDTOAddedList.forEach((res, index) => {
      if (res.kpourcentCode === ev.kpourcentCode) {
        isNew = true;
        this.bireKPourcentDTOAddedList.splice(index, 1);
      }
    });

    // Check if edited item is again edited
    if (!isNew) {
      this.bireKPourcentDTOUpdatedList.forEach((res, index) => {
        if (res.kpourcentCode === ev.kpourcentCode) {
          this.bireKPourcentDTOUpdatedList.splice(index, 1);
        }
      });
      this.bireKPourcentDTOUpdatedList.push(ev);
    } else {
      this.bireKPourcentDTOAddedList.push(ev);
    }
    this.kpercentTableDataSource.dataSelection = [];
  }

  /**
   * Saving Reason Return Data
   */
  public save() {
    if (this.isSaveValid(this.bireKPourcentDTOAddedList, this.bireKPourcentDTOUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireKPourcentDTOAddedList: this.bireKPourcentDTOAddedList,
        bireKPourcentDTOUpdatedList: this.bireKPourcentDTOUpdatedList
      };

      this.kPercentService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireKPourcentDTOAddedList = [];
        this.bireKPourcentDTOUpdatedList = [];
        this.kpercentTableDataSource.dataSelection = [];
      });
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.kpercentTableDataSource.dataSelection = [];
    this.bireKPourcentDTOAddedList = [];
    this.bireKPourcentDTOUpdatedList = [];
    this.loadKPercentTable(true);
  }
}
