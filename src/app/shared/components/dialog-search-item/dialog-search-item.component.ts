import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { FindFamilyVariantInput } from '../../types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { BireItemDTO } from '../../types/api-types/bire-item-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchItemService } from './dialog-search-item.service';

interface ItemRow {
  designation: string;
  familyVariant: string;
  functionCode: string;
  item: string;
  itemFamily: string;
  itemNumber: string;
  _obj: BireItemDTO;
}

@Component({
  selector: 'aw-dialog-search-item',
  templateUrl: 'dialog-search-item.component.html'
})
export class DialogSearchItemComponent extends DialogComponent implements OnInit {
  private static readonly FAMILY_VARIANT_REGEXP: RegExp = /([^-]+)-[^-]+-(.+)/;

  @Input()
  public searchObject: BireItemDTO;

  @Input()
  public autoFilterForFlFunction: string | undefined;

  @Output()
  public onValidated = new EventEmitter<BireItemDTO>();

  public familyVariantList: SelectItem[];
  public searchFamilyVariant: string | undefined;
  public table: SearchResultsDTO<ItemRow>;
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: ItemRow | undefined;

  private familyCodeList: LabelValue<string>[];

  public constructor(
    private readonly dialogSearchItemService: DialogSearchItemService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchItemComponent');

    this.init();

    this.loadFamilyCodeList();
    this.loadFamilyVariantList();

    this.setTableColList();
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
  }

  public search(): void {
    this.tableLoading = true;
    this.clearTableData();

    let familyCode: string | undefined;
    let variantCode: string | undefined;
    if (ObjectUtils.isDefined(this.searchFamilyVariant)) {
      familyCode = this.extractFamilyCodeFromFamilyVariant(this.searchFamilyVariant);
      variantCode = this.extractVariantCodeFromFamilyVariant(this.searchFamilyVariant);
    }
    this.searchObject.familyCode = familyCode;
    this.searchObject.variantCode = variantCode;

    this.dialogSearchItemService
      .findBireItemsBySearchCriteria(this.searchObject, this.autoFilterForFlFunction)
      .subscribe((result) => {
        this.table.moreResults = result.moreResults;
        this.table.list = ListUtils.orEmpty(result.list).map((elt) => this.createItemRow(elt));

        this.tableLoading = false;
      });
  }

  public cancel(): void {
    super.closeDialog();
  }

  public validate(): void {
    if (!this.tableSelection) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.tableSelection._obj);
      super.closeDialog();
    }
  }

  private clearTableData(): void {
    this.table = { list: [], moreResults: false };
    this.tableSelection = undefined;
  }

  private createItemRow(obj: BireItemDTO): ItemRow {
    let familyVariant = StringUtils.orEmpty(obj.familyCode);
    familyVariant += StringUtils.isNullOrEmpty(obj.structureType) ? '' : `-${StringUtils.orEmpty(obj.structureType)}`;
    familyVariant += StringUtils.isNullOrEmpty(obj.variantCode) ? '' : `-${StringUtils.orEmpty(obj.variantCode)}`;

    const item = [obj.chapter, obj.section, obj.subject, obj.sheet, obj.marks]
      .filter((elt) => ObjectUtils.isDefined(elt))
      .join('-');

    const itemFamily = this.familyCodeList.find((elt) => elt.value === obj.familyCode);

    const itemRow: ItemRow = {
      familyVariant,
      item,
      designation: StringUtils.orEmpty(obj.name),
      functionCode: StringUtils.orEmpty(obj.functionCode),
      itemFamily: itemFamily ? StringUtils.orEmpty(itemFamily.label) : '',
      itemNumber: StringUtils.orEmpty(obj.itemNumber),
      _obj: obj
    };

    return itemRow;
  }

  private extractFamilyCodeFromFamilyVariant(familyVariant: string | undefined): string | undefined {
    if (ObjectUtils.isDefined(familyVariant)) {
      const matches = (familyVariant as string).match(DialogSearchItemComponent.FAMILY_VARIANT_REGEXP);

      return matches ? matches[1] : undefined;
    } else {
      return undefined;
    }
  }

  private extractVariantCodeFromFamilyVariant(familyVariant: string | undefined): string | undefined {
    if (ObjectUtils.isDefined(familyVariant)) {
      const matches = (familyVariant as string).match(DialogSearchItemComponent.FAMILY_VARIANT_REGEXP);

      return matches ? matches[2] : undefined;
    } else {
      return undefined;
    }
  }

  private init(): void {
    this.clearTableData();

    this.familyCodeList = [];
    this.familyVariantList = [];
    this.searchFamilyVariant = undefined;
    this.tableLoading = false;
  }

  private loadFamilyCodeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.familyCodeList = ListUtils.orEmpty(results);
    });
  }

  private loadFamilyVariantList(): void {
    const input: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY
    };

    this.dialogSearchItemService.findFamilyVariant(input).subscribe((results) => {
      this.familyVariantList = ListUtils.orEmpty(results)
        .filter((elt) => ObjectUtils.isDefined(elt.labelValueDTO))
        .map((elt) => {
          return {
            label: (elt.labelValueDTO as LabelValue<string>).label,
            value: (elt.labelValueDTO as LabelValue<string>).value
          };
        });
    });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'familyVariant', alignment: 'left', width: '15%' },
      { field: 'item', alignment: 'left', width: '25%' },
      { field: 'designation', alignment: 'left', width: '35%' },
      { field: 'functionCode', alignment: 'left', width: '15%' },
      { field: 'itemNumber', alignment: 'left', width: '10%' }
    ];
  }
}
