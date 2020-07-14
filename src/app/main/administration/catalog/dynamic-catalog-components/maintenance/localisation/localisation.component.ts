import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BireLocalisationCodeDTO } from '../../../../../../shared/types/api-output-types/administration-catalog/bire-localisation-code-dto.interface';
import { BireLocalisationCodeDTOId } from '../../../../../../shared/types/api-types/bire-localisation-code-dto-id.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { LocalisationService } from './localisation.service';

@Component({
  selector: 'aw-localisation',
  templateUrl: './localisation.component.html'
})
export class LocalisationComponent extends DynamicCatalog implements OnInit {
  public localisationTableDataSource: TableDataSource<BireLocalisationCodeDTO>;

  public localisationDialogOpenMode: ComponentOpenMode;
  public showLocalisationDialog: boolean;

  private bireLocalisationCodeAddedList: BireLocalisationCodeDTO[];

  public constructor(
    private readonly localisationService: LocalisationService,
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.bireLocalisationCodeAddedList = [];

    this.localisationTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'localisationCode',
          translateKey: this.getTranslateKey('localisationCode')
        }
      ],
      data: []
    });
  }

  public ngOnInit() {
    this.loadLocalisationTableData();
  }

  /**
   * Load table data on initial
   */
  private loadLocalisationTableData(isfromRefresh?: boolean) {
    const flag = isfromRefresh ? true : false;
    this.localisationTableDataSource.setData([]);
    this.localisationService.findBireLocalisationCodesByCriteria().subscribe((results) => {
      this.localisationTableDataSource.addData(results.list);
      if (!flag) {
        if (this.bireLocalisationCodeAddedList) {
          this.bireLocalisationCodeAddedList.forEach((entry) => {
            this.localisationTableDataSource.addData([entry]);
          });
        }
      }
    });
  }

  public getComponentName(): string {
    return 'LocalisationComponent';
  }

  /**
   * On Add button click
   */
  public addLocalisation() {
    this.localisationDialogOpenMode = ComponentOpenMode.Create;
    this.showLocalisationDialog = true;
  }

  /**
   * On add table row
   */
  public onAddReasonReturn(ev) {
    this.localisationTableDataSource.addData([ev]);
    this.bireLocalisationCodeAddedList.push(ev);
  }

  /**
   * Delete selected row
   */
  public deleteSelectedLocalisation() {
    const partialMessageKey =
      this.localisationTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedLocalisations'
        : 'confirmDeleteSelectedLocalisation';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const bireLocalisationCodeDTOId: BireLocalisationCodeDTOId[] = [];
        this.localisationTableDataSource.dataSelection.forEach((res) => {
          if (!!res.localisationCode) {
            bireLocalisationCodeDTOId.push({ localisationCode: res.localisationCode });
          } else {
            super.throwUnboundLocalError('deleteSelectedLocalisation', 'res.localisationCode');
          }

          const inAddedList = this.bireLocalisationCodeAddedList.filter((element, index) => {
            return res.localisationCode === element.localisationCode;
          });

          // removing from added
          if (inAddedList) {
            let foundAddedIndex = -1;
            this.bireLocalisationCodeAddedList.forEach((entry, index) => {
              if (entry.localisationCode === res.localisationCode) {
                foundAddedIndex = index;
              }
            });
            this.bireLocalisationCodeAddedList.splice(foundAddedIndex, 1);
          }

          // Removing from table
          this.localisationTableDataSource.deleteDataSelection();
        });

        this.localisationService.removeBireLocalisationCode(bireLocalisationCodeDTOId).subscribe((results) => {
          this.localisationTableDataSource.dataSelection = [];
        });
      }
    });
  }

  /**
   * Save Functionality
   */
  public save() {
    if (this.isSaveValid(this.bireLocalisationCodeAddedList)) {
      const saveCatalogInput: SaveCatalogInput = {
        bireLocalisationCodeAddedList: this.bireLocalisationCodeAddedList
      };

      this.localisationService.saveCatalog(saveCatalogInput).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveLocalisation'));

        // Clearing Added and updated List
        this.bireLocalisationCodeAddedList = [];
      });
    }
  }

  private isSaveValid(dtoAdd): boolean {
    // if (dtoAdd.length === 0) {
    //   return false;
    // }

    return true;
  }

  /**
   * Refresh Screen
   */
  public refresh() {
    this.bireLocalisationCodeAddedList = [];
    this.loadLocalisationTableData(true);
  }
}
