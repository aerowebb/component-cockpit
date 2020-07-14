import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../../shared/enums/table-selection-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { ItemStructurePropertyValueInput } from '../../../../../shared/types/api-input-types/product-structure-management/item-structure-property-value-input.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModelDTO } from '../../../../../shared/types/api-types/bire-model-dto.interface';
import { BireVariantVersionDTOId } from '../../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ItemPartNumberService } from '../../form/item-part-number.service';

@Component({
  selector: 'aw-add-rule-popup',
  templateUrl: './add-rule-popup.component.html',
  styleUrls: ['./add-rule-popup.component.scss']
})
export class AddRulePopupComponent extends DialogComponent implements OnInit {
  @Input()
  public propertyOptions: LabelValue<string>[];

  @Input()
  public input: BireVariantVersionDTOId;

  @Output()
  public onValidate: EventEmitter<string>;

  public propertiesOptionsList: LabelValue<string>[];
  public propertySelected: string;

  public isnOptionsList: LabelValue<string>[];
  public isnSelected: string;

  public applicability: string;

  public item: BireItemDTO;

  public showApplicabilityPopup: boolean;
  public applicabilityTableData: DialogTableData<BireModelDTO>;

  public showItemPopup: boolean;
  public itemTableData: DialogTableData<BireItemDTO>;

  public keyMap: Map<string, Observable<LabelValue<string>[]>>;

  public constructor(
    private readonly itemPartNumberService: ItemPartNumberService,
    private readonly messageaService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'AddRulePopupComponent');

    this.onValidate = new EventEmitter<string>();
    this.init();

    this.loadISNDropdown();
  }

  public ngOnInit() {
    if (!!this.propertyOptions) {
      this.propertiesOptionsList = this.propertyOptions;
    }
    this.initApplicabilityData();
    this.initItemData();
  }

  public validate(): void {
    const input: ItemStructurePropertyValueInput = {
      propertyKey: this.propertySelected,
      bireItemDTO: this.item,
      isn: this.isnSelected,
      applicability: this.applicability
    };
    this.itemPartNumberService.getItemPartNumberPropertyValue(input).subscribe(
      (result) => {
        this.onValidate.emit(result);
        this.display = false;
      },
      (error) => {
        this.messageaService.showWarningMessage(error.error.errorDesc);
      }
    );
  }

  public onCancel() {
    this.init();
    this.display = false;
  }

  public openApplicabilityDialog(): void {
    this.showApplicabilityPopup = true;
  }

  public setSelectedApplicability(event: BireModelDTO[]): void {
    this.applicability =
      this.applicability === null || this.applicability === undefined
        ? this.generateApplicabilityString(event)
        : `${this.applicability}/${this.generateApplicabilityString(event)}`;
  }

  public openItemTableDialog(): void {
    this.showItemPopup = true;
  }

  public onSelectedItem(event: BireItemDTO): void {
    this.item.familyCode = event.familyCode || '';
    this.item.variantCode = event.variantCode || '';
    this.item.structureType = event.structureType || '';
    this.item.chapter = event.chapter || '';
    this.item.section = event.section || '';
    this.item.sheet = event.sheet || '';
    this.item.subject = event.subject || '';
    this.item.marks = event.marks || '';
  }

  public disableItemInput(): boolean {
    let response = true;
    response =
      this.propertySelected === null ||
      this.propertySelected === undefined ||
      this.item === null ||
      this.item === undefined ||
      this.item.chapter === null ||
      this.item.chapter === undefined ||
      this.item.section === null ||
      this.item.section === undefined ||
      this.item.subject === null ||
      this.item.subject === undefined ||
      this.item.sheet === null ||
      this.item.sheet === undefined ||
      this.item.marks === null ||
      this.item.sheet === undefined
        ? true
        : false;

    return response;
  }

  private init(): void {
    this.propertySelected = '';
    this.propertiesOptionsList = [];

    this.isnSelected = '';
    this.isnOptionsList = [];

    this.applicability = '';

    this.item = {};

    this.showItemPopup = false;
    this.showApplicabilityPopup = false;

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('structureType', this.propertiesService.getValue('getStructureTypeMap'));
    this.keyMap.set('itemType', this.propertiesService.getValue('getItemTypeMap'));
    this.keyMap.set('itemFamilyCode', this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP));
  }

  private loadISNDropdown(): void {
    this.itemPartNumberService.getISNOptions().subscribe((results) => {
      this.isnOptionsList = results;
    });
  }

  private initApplicabilityData(): void {
    const applicabilityTableCols: TableColumn[] = [
      { field: 'modelCode', alignment: 'left' },
      { field: 'modelName', alignment: 'left' }
    ];

    this.applicabilityTableData = {
      componentId: 'DialogApplicability',
      tableCols: applicabilityTableCols,
      tableRows: this.itemPartNumberService.findBireModelsByVariantPk(this.input),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: true
    };
  }

  private generateApplicabilityString(event: BireModelDTO[]): string {
    let result = '';
    if (event.length === 0) {
      result = '';
    } else if (event.length === 1) {
      result = `${event[0].modelCode}`;
    } else if (event.length > 1) {
      result = `${event[0].modelCode}`;
      for (let i = 1; i < event.length; i++) {
        result = `${result}/${event[i].modelCode}`;
      }
    }

    return result;
  }

  private initItemData(): void {
    const itemTableCols: TableColumn[] = [
      { field: 'familyCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'structureType', alignment: 'left', width: '20%', filterMode: TableColumnFilterMode.Input },
      { field: 'variantCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'name', alignment: 'left', width: '30%', filterMode: TableColumnFilterMode.Input },
      { field: 'chapter', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'section', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'subject', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'sheet', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'marks', alignment: 'left', width: '8%', filterMode: TableColumnFilterMode.Input },
      { field: 'functionCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'itemNumber', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'itemType', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'fLocType', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input }, // not in BireItemDTO
      { field: 'itemFamilyCode', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input },
      { field: 'configurableArticle', alignment: 'left', width: '10%', filterMode: TableColumnFilterMode.Input }
    ];

    this.itemTableData = {
      componentId: 'DialogItem',
      tableCols: itemTableCols,
      tableRows: !!this.input
        ? this.itemPartNumberService.findBireItemsBySearchCriteria(
            this.input.familyCode || '',
            this.input.structureType || '',
            this.input.variantCode || ''
          )
        : this.itemPartNumberService.findBireItemsBySearchCriteria('', '', ''),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }
}
