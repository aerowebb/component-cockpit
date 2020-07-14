import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireUnitMeasureDTOId } from '../../../../../../shared/types/api-types/bire-unit-measure-dto-id.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { UnitOfMeasureService } from './unit-of-measure.service';

@Component({
  selector: 'aw-unit-of-measure',
  templateUrl: './unit-of-measure.component.html'
})
export class UnitOfMeasureComponent extends DynamicCatalog implements OnInit {
  public unitOfMeasureTableDataSource: TableDataSource<BireUnitMeasureDTO>;
  public selectedRunitOfMeasureDialogData: BireUnitMeasureDTO;

  public unitOfMeasureDialogOpenMode: ComponentOpenMode;
  public showunitOfMeasureDialog: boolean;

  private bireUnitMeasureDTOAddedList: BireUnitMeasureDTO[];
  private bireUnitMeasureDTOUpdatedList: BireUnitMeasureDTO[];

  private selectedUnitCodeEdit: string;

  public constructor(
    private readonly unitOfMeasureService: UnitOfMeasureService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.unitOfMeasureTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'unitCode', translateKey: this.getTranslateKey('unitCode') },
        {
          field: 'unitName',
          translateKey: this.getTranslateKey('unitName')
        }
      ],
      data: []
    });
    this.unitOfMeasureDialogOpenMode = ComponentOpenMode.Read;
    this.bireUnitMeasureDTOAddedList = [];
    this.bireUnitMeasureDTOUpdatedList = [];
  }

  public ngOnInit() {
    this.loadUnitOfMeaureTable();
  }

  public getComponentName(): string {
    return 'UnitOfMeasureComponent';
  }

  /**
   * Initially load measure table
   */
  private loadUnitOfMeaureTable(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.unitOfMeasureTableDataSource.setData([]);
    this.unitOfMeasureService.findAllBireUnitMeasures().subscribe((results) => {
      const sortedResult = results.list;
      sortedResult.sort((a, b) =>
        !!a.unitCode && !!b.unitCode && a.unitCode.toLowerCase() > b.unitCode.toLowerCase() ? 1 : -1
      );
      this.unitOfMeasureTableDataSource.setData(sortedResult);
      if (!flag) {
        if (this.bireUnitMeasureDTOAddedList) {
          this.unitOfMeasureTableDataSource.addData(this.bireUnitMeasureDTOAddedList);
        }

        // TO reenter modified entry in table
        if (this.bireUnitMeasureDTOUpdatedList) {
          this.unitOfMeasureTableDataSource.dataSrc.forEach((res) => {
            this.bireUnitMeasureDTOUpdatedList.forEach((entry) => {
              if (res.unitCode === entry.unitCode) {
                this.unitOfMeasureTableDataSource.replaceData(res, entry);
              }
            });
          });
        }
      }
    });
  }

  /**
   * On Add button click
   */
  public addUnitOfMeasure() {
    this.selectedRunitOfMeasureDialogData = {};
    this.unitOfMeasureDialogOpenMode = ComponentOpenMode.Create;
    this.showunitOfMeasureDialog = true;
  }

  /**
   * On add table row
   */
  public onAddUnitOfMeasure(ev) {
    this.unitOfMeasureTableDataSource.addData([ev]);
    this.bireUnitMeasureDTOAddedList.push(ev);
  }

  /**
   * Delete selected measures
   */
  public deleteSelectedUnitOfMeasure() {
    const partialMessageKey =
      this.unitOfMeasureTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedMeasures'
        : 'confirmDeleteSelectedMeasure';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireUnitMeasureDTOId: BireUnitMeasureDTOId[] = [];
        this.unitOfMeasureTableDataSource.dataSelection.forEach((res) => {
          if (!!res.unitCode) {
            bireUnitMeasureDTOId.push({ unitCode: res.unitCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedUnitOfMeasure', 'res.unitCode');
          }

          const inAddedList = this.bireUnitMeasureDTOAddedList.filter((element, index) => {
            return res.unitCode === element.unitCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireUnitMeasureDTOAddedList.forEach((entry, index) => {
              if (entry.unitCode === res.unitCode) {
                foundAddedIndex = index;
              }
            });
            this.bireUnitMeasureDTOAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireUnitMeasureDTOUpdatedList.filter((element, index) => {
            return res.unitCode === element.unitCode;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireUnitMeasureDTOUpdatedList.forEach((entry, index) => {
              if (entry.unitCode === res.unitCode) {
                foundUpdatedIndex = index;
              }
            });
            this.bireUnitMeasureDTOUpdatedList.splice(foundUpdatedIndex, 1);
          }
        });
        this.unitOfMeasureTableDataSource.deleteDataSelection();
        this.unitOfMeasureService.removeBireUnitMeasure(bireUnitMeasureDTOId).subscribe((results) => {
          this.unitOfMeasureTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Measure
   */
  public editSelectedUnitOfMeasure() {
    this.selectedUnitCodeEdit = '';
    this.selectedRunitOfMeasureDialogData = this.unitOfMeasureTableDataSource.dataSelection[0];
    this.unitOfMeasureDialogOpenMode = ComponentOpenMode.Write;
    this.showunitOfMeasureDialog = true;
    const selMeasureCode = this.unitOfMeasureTableDataSource.dataSelection[0].unitCode;
    if (!!selMeasureCode) {
      this.selectedUnitCodeEdit = selMeasureCode;
    } else {
      super.throwUnboundLocalError('editSelectedUnitOfMeasure', 'selMeasureCode');
    }
  }

  /**
   * On update table row
   */
  public onUpdateUnitOfMeasure(ev: BireUnitMeasureDTO) {
    this.unitOfMeasureTableDataSource.dataSrc.forEach((res) => {
      if (res.unitCode === this.selectedUnitCodeEdit) {
        this.unitOfMeasureTableDataSource.replaceData(res, ev);
      }
    });
    // Check if new entry is edited
    let isNew = false;
    this.bireUnitMeasureDTOAddedList.forEach((res, index) => {
      if (res.unitCode === ev.unitCode) {
        isNew = true;
        this.bireUnitMeasureDTOAddedList.splice(index, 1);
      }
    });

    // Check if edited item is again edited
    if (!isNew) {
      this.bireUnitMeasureDTOUpdatedList.forEach((res, index) => {
        if (res.unitCode === ev.unitCode) {
          this.bireUnitMeasureDTOUpdatedList.splice(index, 1);
        }
      });
      this.bireUnitMeasureDTOUpdatedList.push(ev);
    } else {
      this.bireUnitMeasureDTOAddedList.push(ev);
    }
    this.unitOfMeasureTableDataSource.dataSelection = [];
  }

  /**
   * Saving Measure Data
   */
  public save() {
    if (this.isSaveValid(this.bireUnitMeasureDTOAddedList, this.bireUnitMeasureDTOUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireUnitMeasureDTOAddedList: this.bireUnitMeasureDTOAddedList,
        bireUnitMeasureDTOUpdatedList: this.bireUnitMeasureDTOUpdatedList
      };

      this.unitOfMeasureService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireUnitMeasureDTOAddedList = [];
        this.bireUnitMeasureDTOUpdatedList = [];
        this.unitOfMeasureTableDataSource.dataSelection = [];
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
    this.bireUnitMeasureDTOAddedList = [];
    this.bireUnitMeasureDTOUpdatedList = [];
    this.loadUnitOfMeaureTable(true);
  }
}
