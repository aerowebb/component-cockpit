import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireTilDTOId } from '../../../../../../shared/types/api-types/bire-til-dto-id.interface';
import { BireTilDTO } from '../../../../../../shared/types/api-types/bire-til-dto.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { TechnicalInterventionLevelService } from './technical-intervention-level.service';

@Component({
  selector: 'aw-technical-intervention-level',
  templateUrl: './technical-intervention-level.component.html'
})
export class TechnicalInterventionLevelComponent extends DynamicCatalog implements OnInit {
  public techInterventionTableDataSource: TableDataSource<BireTilDTO>;
  public selectedTechInterventionTableDialogData: BireTilDTO;

  public techInterventionDialogOpenMode: ComponentOpenMode;
  public showTechInterventionDialog: boolean;

  private bireTilDTOAddedList: BireTilDTO[];
  private bireTilDTOUpdatedList: BireTilDTO[];

  private selectedTechinalInterventionLevelEdit: number | undefined;

  public constructor(
    private readonly technicalInterventionLevelService: TechnicalInterventionLevelService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.techInterventionDialogOpenMode = ComponentOpenMode.Read;

    this.techInterventionTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'technicalLevel',
          translateKey: this.getTranslateKey('technicalLevel'),
          alignment: ColumnAlignment.RIGHT
        },
        {
          field: 'tilName',
          translateKey: this.getTranslateKey('tilName')
        },
        {
          field: 'tilDescription',
          translateKey: this.getTranslateKey('tilDescription')
        }
      ],
      data: []
    });

    this.showTechInterventionDialog = false;
    this.bireTilDTOUpdatedList = [];
    this.bireTilDTOAddedList = [];
  }

  public ngOnInit() {
    this.loadTechInterventionTableData();
  }

  public getComponentName(): string {
    return 'TechnicalInterventionLevelComponent';
  }

  /**
   * Load Tech intervention table on load
   */
  private loadTechInterventionTableData(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.techInterventionTableDataSource.setData([]);
    this.technicalInterventionLevelService.findAllBireTils().subscribe((results) => {
      this.techInterventionTableDataSource.addData(results);

      if (!flag) {
        if (this.bireTilDTOAddedList) {
          this.bireTilDTOAddedList.forEach((entry) => {
            this.techInterventionTableDataSource.addData([entry]);
          });
        }

        // TO reenter modified entry in table
        this.techInterventionTableDataSource.dataSrc.forEach((res) => {
          this.bireTilDTOUpdatedList.forEach((entry) => {
            if (res.technicalLevel === entry.technicalLevel) {
              this.techInterventionTableDataSource.replaceData(res, entry);
            }
          });
        });
      }
    });
  }

  /**
   * On Add button click
   */
  public addTechnicalIntervention() {
    this.selectedTechInterventionTableDialogData = {};
    this.techInterventionDialogOpenMode = ComponentOpenMode.Create;
    this.showTechInterventionDialog = true;
  }

  /**
   * On add table row
   */
  public onAddTechIntervention(ev) {
    this.techInterventionTableDataSource.addData([ev]);
    this.bireTilDTOAddedList.push(ev);
  }

  /**
   * Delete selected Interventions
   */
  public deleteSelectedTechnicalIntervention() {
    const partialMessageKey =
      this.techInterventionTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedInterventions'
        : 'confirmDeleteSelectedInterventions';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireTilDTOId: BireTilDTOId[] = [];
        this.techInterventionTableDataSource.dataSelection.forEach((res) => {
          if (!!res.technicalLevel) {
            bireTilDTOId.push({ technicalLevel: res.technicalLevel });
          } else {
            super.throwUnboundLocalError('deleteSelectedTechnicalIntervention', 'res.technicalLevel');
          }

          const inAddedList = this.bireTilDTOAddedList.filter((element, index) => {
            return res.technicalLevel === element.technicalLevel;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireTilDTOAddedList.forEach((entry, index) => {
              if (entry.technicalLevel === res.technicalLevel) {
                foundAddedIndex = index;
              }
            });
            this.bireTilDTOAddedList.splice(foundAddedIndex, 1);
          }

          const inUpdatedList = this.bireTilDTOUpdatedList.filter((element, index) => {
            return res.technicalLevel === element.technicalLevel;
          });

          // removing from updated
          if (inUpdatedList) {
            let foundUpdatedIndex = -1;
            this.bireTilDTOUpdatedList.forEach((entry, index) => {
              if (entry.technicalLevel === res.technicalLevel) {
                foundUpdatedIndex = index;
              }
            });
            this.bireTilDTOUpdatedList.splice(foundUpdatedIndex, 1);
          }

          // Removing from table
          this.techInterventionTableDataSource.deleteDataSelection();
        });

        this.technicalInterventionLevelService.removeBireTil(bireTilDTOId).subscribe((results) => {
          this.techInterventionTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Edit Selected Reason
   */
  public editSelectedTechinalIntervention() {
    this.selectedTechinalInterventionLevelEdit = undefined;
    this.selectedTechInterventionTableDialogData = this.techInterventionTableDataSource.dataSelection[0];
    this.techInterventionDialogOpenMode = ComponentOpenMode.Write;
    this.showTechInterventionDialog = true;
    this.selectedTechinalInterventionLevelEdit = this.techInterventionTableDataSource.dataSelection[0].technicalLevel;
  }

  /**
   * On update table row
   */
  public onUpdateTechinalIntervention(ev: BireTilDTO) {
    this.techInterventionTableDataSource.dataSelection.forEach((res) => {
      if (res.technicalLevel === this.selectedTechinalInterventionLevelEdit) {
        this.techInterventionTableDataSource.replaceData(res, ev);
      }
    });
    // Check if new entry is edited
    let isNew = false;
    this.bireTilDTOAddedList.forEach((res, index) => {
      if (res.technicalLevel === ev.technicalLevel) {
        isNew = true;
        this.bireTilDTOAddedList.splice(index, 1);
      }
    });

    // Check if edited item is again edited
    if (!isNew) {
      this.bireTilDTOUpdatedList.forEach((res, index) => {
        if (res.technicalLevel === ev.technicalLevel) {
          this.bireTilDTOUpdatedList.splice(index, 1);
        }
      });
      this.bireTilDTOUpdatedList.push(ev);
    } else {
      this.bireTilDTOAddedList.push(ev);
    }
    this.techInterventionTableDataSource.dataSelection = [];
  }

  /**
   * Saving Reason Return Data
   */
  public save() {
    if (this.isSaveValid(this.bireTilDTOAddedList, this.bireTilDTOUpdatedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireTilDTOAddedList: this.bireTilDTOAddedList,
        bireTilDTOUpdatedList: this.bireTilDTOUpdatedList
      };

      this.technicalInterventionLevelService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

        // Clearing Added and updated List
        this.bireTilDTOAddedList = [];
        this.bireTilDTOUpdatedList = [];
        this.techInterventionTableDataSource.dataSelection = [];
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
    this.techInterventionTableDataSource.dataSelection = [];
    this.bireTilDTOAddedList = [];
    this.bireTilDTOUpdatedList = [];
    this.loadTechInterventionTableData(true);
  }
}
