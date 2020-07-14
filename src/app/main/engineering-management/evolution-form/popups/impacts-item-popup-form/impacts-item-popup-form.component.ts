import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { FindBireItemsBySearchCriteriaInput } from '../../../../../shared/types/api-input-types/product-structure-management/find-bire-items-by-search-criteria-input.interface';
import { BireEvolutionItemDTO } from '../../../../../shared/types/api-types/bire-evolution-item-dto.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { FamilyVariantDTO } from '../../../../../shared/types/api-types/family-variant-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ArrayUtils } from '../../../../../shared/utils/array-utils';

import { ImpactsItemPopupFormService } from './impacts-item-popup-form.service';

@Component({
  selector: 'aw-impacts-item-popup-form',
  templateUrl: './impacts-item-popup-form.component.html'
})
export class ImpactsItemPopupFormComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<BireEvolutionItemDTO> | null;

  @Input()
  public isNewImpactsItem: boolean;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onCreate: EventEmitter<BireEvolutionItemDTO>;

  @Output()
  public onUpdate: EventEmitter<BireEvolutionItemDTO>;

  public newEvol: BireEvolutionItemDTO;
  public displayDialog: boolean;
  public newItem: boolean;
  public isEditable: boolean;

  public variant: SelectItem[];
  public group: SelectItem[];
  public actionType: SelectItem[];
  public actionTypeCode: string;
  public itemNumber: string | undefined;

  public dialogTableDataItems: DialogTableData<BireItemDTO>;
  public showItemsDialog: boolean;
  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;

  public constructor(
    public impactsItemPopupFormService: ImpactsItemPopupFormService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'ImpactsItemPopupDialog');

    this.onCreate = new EventEmitter<BireEvolutionItemDTO>();
    this.onUpdate = new EventEmitter<BireEvolutionItemDTO>();

    this.displayDialog = false;
    this.newItem = false;
    this.showItemsDialog = false;

    this.newEvol = {};
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();

    this.loadItems();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.newEvol = this.componentData.object as BireEvolutionItemDTO;
      if (!!this.componentData.selectedRow && this.componentData.selectedRow.length === 0) {
        this.isEditable = true;
        this.isReadOnlyForm = false;
      } else {
        this.isEditable = false;

        const bire: BireItemDTO = {
          familyCode: this.newEvol.familyCode,
          variantCode: this.newEvol.variantCode,
          structureType: this.newEvol.structureType,
          chapter: this.newEvol.chapter,
          section: this.newEvol.section,
          sheet: this.newEvol.sheet,
          subject: this.newEvol.subject,
          marks: this.newEvol.marks
        };
        const criteria: FindBireItemsBySearchCriteriaInput = {
          bireItemDTOCriteria: bire
        };
        this.impactsItemPopupFormService.findBireItemsBySearchCriteria(criteria).subscribe((results) => {
          this.itemNumber = results.list[0].itemNumber;
        });
      }
    }
  }

  public onShow() {
    this.displayDialog = true;
  }

  public onHide(): void {
    this.newItem = false;
    this.newEvol = {};
    this.display = false;
  }

  public onValidate(): void {
    if (
      this.newEvol.chapter &&
      this.newEvol.section &&
      this.newEvol.sheet &&
      this.newEvol.subject &&
      this.newEvol.marks &&
      this.newEvol.actionTypeCode
    ) {
      if (this.isNewImpactsItem) {
        this.onCreate.emit(this.newEvol);
        this.display = false;
      } else {
        this.onUpdate.emit(this.newEvol);
        this.display = false;
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  private loadItems(): void {
    this.impactsItemPopupFormService.findAllBireVariantVersions().subscribe(
      (results) => {
        const variantList = new Array<LabelValue<string>>();
        results.forEach((element) => {
          if (!!element.labelValueDTO) {
            variantList.push(element.labelValueDTO);
            this.familyVariantMap.set(element.labelValueDTO, element);
          } else {
            super.throwUnboundLocalError('loadItems', 'element.labelValueDTO');
          }
        });
        this.variant = variantList;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetVariant'));
      }
    );
    this.impactsItemPopupFormService.findBireActionTypesByActionTypeCode().subscribe(
      (results) => {
        this.actionType = results.sort(ArrayUtils.compareValues('label'));
        this.newEvol.actionTypeCode = this.actionType[0].value as string;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetActionType'));
      }
    );

    const list = new Array<LabelValue<string>>();
    const groupSize = 10;
    for (let i = 0; i < groupSize; i++) {
      const group: LabelValue<string> = {
        label: String(i),
        value: String(i)
      };
      list.push(group);
    }
    this.group = list;
  }

  public searchItems() {
    if (!this.isReadOnlyForm && this.isEditable) {
      this.showItemsDialog = true;

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
      const chapter = !this.newEvol.chapter ? undefined : this.newEvol.chapter + '%';
      const section = !this.newEvol.section ? undefined : this.newEvol.section + '%';
      const sheet = !this.newEvol.sheet ? undefined : this.newEvol.sheet + '%';
      const subject = !this.newEvol.subject ? undefined : this.newEvol.subject + '%';
      const marks = !this.newEvol.marks ? undefined : this.newEvol.marks + '%';
      const bire: BireItemDTO = {
        familyCode: this.newEvol.familyCode,
        variantCode: this.newEvol.variantCode,
        structureType: this.newEvol.structureType,
        chapter,
        section,
        sheet,
        subject,
        marks
      };
      const criteria: FindBireItemsBySearchCriteriaInput = {
        bireItemDTOCriteria: bire
      };
      this.dialogTableDataItems = {
        componentId: 'ImpactsItemPopupDialog',
        tableCols: itemCol,
        tableRows: this.impactsItemPopupFormService.findBireItemsBySearchCriteria(criteria),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
    }
  }

  public setSelectedItems(selectedObject: BireItemDTO) {
    if (selectedObject) {
      this.newEvol.familyCode = selectedObject.familyCode;
      this.newEvol.structureType = selectedObject.structureType;
      this.newEvol.variantCode = selectedObject.variantCode;
      this.newEvol.section = selectedObject.section;
      this.newEvol.marks = selectedObject.marks;
      this.newEvol.chapter = selectedObject.chapter;
      this.newEvol.sheet = selectedObject.sheet;
      this.newEvol.subject = selectedObject.subject;
      this.newEvol.statusDate = selectedObject.statusDate;
      this.newEvol.statusUser = selectedObject.statusUser;
      this.newEvol.statusState = selectedObject.statusState;
      this.itemNumber = selectedObject.itemNumber;
    }
    this.showItemsDialog = false;
  }
}
