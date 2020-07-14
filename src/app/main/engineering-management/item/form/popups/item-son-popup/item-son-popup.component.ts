import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogTableData } from '../../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { ItemFathersAndSonsOutput } from '../../../../../../shared/types/api-output-types/product-structure-management/item-fathers-and-sons-output.interface';
import { BireItemDTO } from '../../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { BirePnMeasureDTO } from '../../../../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { SearchResultsDTO } from '../../../../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ItemFormService } from '../../item-form.service';

@Component({
  selector: 'aw-item-son-popup',
  templateUrl: './item-son-popup.component.html',
  styleUrls: ['./item-son-popup.component.scss']
})
export class ItemSonPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<ItemFathersAndSonsOutput> | null;

  @Input('bireItemCloneDTO')
  public bireItemCloneDTO: BireItemDTO;

  @Output()
  public onCreate: EventEmitter<BireItemDTO>;

  public bireItemDTO: BireItemDTO;

  public showCounterCodeDialog: boolean;
  public currentRef: BirePnMeasureDTO;
  public dialogTableDataCounterCode: DialogTableData<BireMeasureReferenceDTO>;
  public showItemDialog: boolean;

  public dialogTableDataItems: DialogTableData<BireItemDTO>;

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService
  ) {
    super(ComponentOpenMode.Write, 'ItemSonPopupComponent');
    this.onCreate = new EventEmitter<BireItemDTO>();
  }

  public ngOnInit() {
    this.bireItemDTO = {};
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const indexThree = 3;
      const indexFour = 4;
      if (!!this.componentData.object) {
        const dto = this.componentData.object;
        this.bireItemDTO.chapter = dto.item.split('-')[0];
        this.bireItemDTO.section = dto.item.split('-')[1];
        this.bireItemDTO.subject = dto.item.split('-')[2];
        this.bireItemDTO.sheet = dto.item.split('-')[indexThree];
        this.bireItemDTO.marks = dto.item.split('-')[indexFour];
      }
    }
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    this.isBireItemPresent((isItemInDb) => {
      if (Object.keys(isItemInDb).length !== 0) {
        this.bireItemDTO = isItemInDb;
        if (this.validateScreen()) {
          this.onCreate.emit(this.bireItemDTO);
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorBireItemNotExist'));
      }
    });
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (!!this.bireItemDTO.chapter) {
      return true;
    }

    return false;
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    this.bireItemDTO = selectedObject;
    this.showItemDialog = false;
  }

  /**
   * Search Item OVS
   */
  public searchItems() {
    if (!this.isReadOpenMode) {
      this.showItemDialog = true;

      const itemCol: TableColumn[] = [
        { field: 'familyCode', filterMode: TableColumnFilterMode.Input },
        { field: 'structureType', filterMode: TableColumnFilterMode.Input },
        { field: 'variantCode', filterMode: TableColumnFilterMode.Input },
        { field: 'name', filterMode: TableColumnFilterMode.Input },
        { field: 'chapter', filterMode: TableColumnFilterMode.Input },
        { field: 'section', filterMode: TableColumnFilterMode.Input },
        { field: 'subject', filterMode: TableColumnFilterMode.Input },
        { field: 'sheet', filterMode: TableColumnFilterMode.Input },
        { field: 'marks', filterMode: TableColumnFilterMode.Input },
        { field: 'functionCode', filterMode: TableColumnFilterMode.Input },
        { field: 'itemNumber', filterMode: TableColumnFilterMode.Input },
        { field: 'itemType', filterMode: TableColumnFilterMode.Input },
        { field: 'flocType', filterMode: TableColumnFilterMode.Input },
        { field: 'itemFamily', filterMode: TableColumnFilterMode.Input },
        { field: 'configurableItem', filterMode: TableColumnFilterMode.Tricheckbox }
      ];

      const bire: BireItemDTO = this.bireItemCloneDTO;

      bire.chapter = !!this.bireItemDTO.chapter ? this.bireItemDTO.chapter : undefined;
      bire.section = !!this.bireItemDTO.section ? this.bireItemDTO.section : undefined;
      bire.marks = !!this.bireItemDTO.marks ? this.bireItemDTO.marks : undefined;
      bire.sheet = !!this.bireItemDTO.sheet ? this.bireItemDTO.sheet : undefined;
      bire.subject = !!this.bireItemDTO.subject ? this.bireItemDTO.subject : undefined;

      const criteria: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: bire
      };
      this.dialogTableDataItems = {
        componentId: 'ImpactsItemPopupDialog',
        tableCols: itemCol,
        tableRows: this.itemFormService.findBireItemsBySearchCriteria(criteria),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    }
  }

  /**
   * Chcking if item present in db
   */
  private isBireItemPresent(callback) {
    const bire: BireItemDTO = this.bireItemCloneDTO;

    const criteria: FindBireItemsBySearchCriteriaInput = {
      bireItemDTOCriteria: bire
    };

    this.itemFormService.findBireItemsBySearchCriteria(criteria).subscribe((res: SearchResultsDTO<BireItemDTO>) => {
      let isFound: BireItemDTO = {};
      res.list.forEach((result: BireItemDTO) => {
        const resultItem = `${result.chapter}-${result.section}-${result.subject}-${result.sheet}-${result.marks}`;
        const bireItem = `${this.bireItemDTO.chapter}-${this.bireItemDTO.section}-${this.bireItemDTO.subject}-${
          this.bireItemDTO.sheet
        }-${this.bireItemDTO.marks}`;

        if (resultItem === bireItem) {
          isFound = result;
        }
      });

      callback(isFound);
    });
  }

}
