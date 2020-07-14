import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireRangeDTOId } from '../../../../../../shared/types/api-types/bire-range-dto-id.interface';
import { BireRangeDTO } from '../../../../../../shared/types/api-types/bire-range-dto.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { RangeService } from './range.service';

@Component({
  selector: 'aw-range',
  templateUrl: './range.component.html'
})
export class RangeComponent extends DynamicCatalog implements OnInit {
  public rangeTableDataSource: TableDataSource<BireRangeDTO>;

  public selectedRangeTableDialogData: BireRangeDTO;

  public rangeDialogOpenMode: ComponentOpenMode;
  public showRangeDialog: boolean;

  private bireRangeAddedList: BireRangeDTO[];
  private bireRangeUpdatedList: BireRangeDTO[];

  private selectedRangeCodeToEdit: string;

  public constructor(
    private readonly rangeService: RangeService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.rangeDialogOpenMode = ComponentOpenMode.Read;
    this.rangeTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'rangeCode', translateKey: this.getTranslateKey('rangeCode') },
        {
          field: 'rangeDescription',
          translateKey: this.getTranslateKey('rangeDescription')
        }
      ],
      data: []
    });
    this.showRangeDialog = false;
    this.bireRangeUpdatedList = [];
    this.bireRangeAddedList = [];
  }

  public ngOnInit() {
    this.loadrangeTableata();
  }

  public getComponentName(): string {
    return 'RangeComponent';
  }
  /**
   * Loading Range table data
   */
  private loadrangeTableata(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.rangeTableDataSource.setData([]);
    this.rangeService.findAllBireRanges().subscribe((results) => {
      this.rangeTableDataSource.addData(results.list);

      if (!flag) {
        if (this.bireRangeAddedList) {
          this.bireRangeAddedList.forEach((entry) => {
            this.rangeTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        if (this.bireRangeUpdatedList) {
          this.rangeTableDataSource.dataSrc.forEach((res) => {
            this.bireRangeUpdatedList.forEach((entry) => {
              if (res.rangeCode === entry.rangeCode) {
                this.rangeTableDataSource.replaceData(res, entry);
              }
            });
          });
          this.rangeTableDataSource.setData(this.rangeTableDataSource.dataSrc);
          this.rangeTableDataSource.update();
        }
      }
    });
  }

  /**
   * On Add button click
   */
  public addRange() {
    this.selectedRangeTableDialogData = {};
    this.rangeDialogOpenMode = ComponentOpenMode.Create;
    this.showRangeDialog = true;
  }

  /**
   * On add table row
   */
  public onAddRange(ev) {
    this.rangeTableDataSource.addData([ev]);
    this.bireRangeAddedList.push(ev);
  }

  /**
   * Delete selected Range
   */
  public deleteSelectedRange() {
    const partialMessageKey =
      this.rangeTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedRanges' : 'confirmDeleteSelectedRange';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireRangeDTOId: BireRangeDTOId[] = [];
        this.rangeTableDataSource.dataSelection.forEach((res) => {
          if (!!res.rangeCode) {
            bireRangeDTOId.push({ rangeCode: res.rangeCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedRange', 'res.rangeCode');
          }

          const inAddedList = this.bireRangeAddedList.filter((element, index) => {
            return res.rangeCode === element.rangeCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireRangeAddedList.forEach((entry, index) => {
              if (entry.rangeCode === res.rangeCode) {
                foundAddedIndex = index;
              }
            });
            this.bireRangeAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireRangeUpdatedList.filter((element, index) => {
            return res.rangeCode === element.rangeCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireRangeUpdatedList.forEach((entry, index) => {
              if (entry.rangeCode === res.rangeCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireRangeUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.rangeTableDataSource.deleteDataSelection();
        });

        this.rangeService.removeBireRange(bireRangeDTOId).subscribe((results) => {
          this.rangeTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Range
   */
  public editSelectedRange() {
    this.selectedRangeCodeToEdit = '';
    this.selectedRangeTableDialogData = this.rangeTableDataSource.dataSelection[0];
    this.rangeDialogOpenMode = ComponentOpenMode.Write;
    this.showRangeDialog = true;
    const selRangeCode = this.rangeTableDataSource.dataSelection[0].rangeCode;
    if (!!selRangeCode) {
      this.selectedRangeCodeToEdit = selRangeCode;
    } else {
      super.throwUnboundLocalError('editSelectedRange', 'selRangeCode');
    }
  }

  /**
   * On update table row
   */
  public updateRange(ev: BireRangeDTO) {
    this.rangeTableDataSource.dataSrc.forEach((res, index) => {
      if (res.rangeCode === this.selectedRangeCodeToEdit) {
        this.rangeTableDataSource.replaceData(res, ev);
      }
    });
    let isNew = false;
    this.bireRangeAddedList.forEach((res, index) => {
      if (res.rangeCode === ev.rangeCode) {
        isNew = true;
        this.bireRangeAddedList.splice(index, 1);
      }
    });

    if (!isNew) {
      this.bireRangeUpdatedList.forEach((res, index) => {
        if (res.rangeCode === ev.rangeCode) {
          this.bireRangeUpdatedList.splice(index, 1);
        }
      });
      this.bireRangeUpdatedList.push(ev);
    } else {
      this.bireRangeAddedList.push(ev);
    }
    this.rangeTableDataSource.dataSelection = [];
  }

  /**
   * Saving Range Data
   */
  public save() {
    if (this.isSaveValid(this.bireRangeAddedList, this.bireRangeUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireRangeAddedList: this.bireRangeAddedList,
        bireRangeUpdatedList: this.bireRangeUpdatedList
      };

      this.rangeService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireRangeAddedList = [];
        this.bireRangeUpdatedList = [];
      });
    }
  }

  private isSaveValid(dtoAdd, dtoUpdate): boolean {
    // if (dtoAdd.length === 0 && dtoUpdate.length === 0) {
    //   return false;
    // }

    return true;
  }

  public refresh() {
    this.rangeTableDataSource.dataSelection = [];
    this.bireRangeAddedList = [];
    this.bireRangeUpdatedList = [];
    this.loadrangeTableata(true);
  }
}
