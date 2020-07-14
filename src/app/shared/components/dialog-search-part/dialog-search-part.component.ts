import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { PartsSearchInput } from '../../types/api-input-types/task-management/parts-search-input.interface';
import { PartsAssociatedTableDTO } from '../../types/api-output-types/task-management/parts-associated-table-dto.interface';
import { BirePnDTO } from '../../types/api-types/bire-pn-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { ObjectUtils } from '../../utils/object-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchPartService } from './dialog-search-part.service';

interface ItemRow {
  partType: string;
  partNumber: string;
  partDesignation: string;
  _obj: PartsAssociatedTableDTO;
}

@Component({
  selector: 'aw-dialog-search-part',
  templateUrl: 'dialog-search-part.component.html'
})
export class DialogSearchPartComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: PartsSearchInput;

  @Input()
  public disablePartTypeDropdown: boolean;

  @Input()
  public pnType: string | undefined;

  @Output()
  public onValidated = new EventEmitter<PartsAssociatedTableDTO>();

  public table: SearchResultsDTO<ItemRow>;
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: ItemRow | undefined;

  public pnTypeList: SelectItem[];
  public selectedPnType: string | undefined;
  public toolSearch: boolean;
  public showPartTypeDropdown: boolean;
  private pnTypeMap: LabelValue<string>[];

  public constructor(
    private readonly dialogSearchPartService: DialogSearchPartService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchPartComponent');
    this.setTableColList();
  }

  public ngOnInit(): void {
    this.init();
    this.searchObject = this.searchObject || {};
    if (this.searchObject !== {}) {
      this.selectedPnType = this.pnType;
      this.showPartTypeDropdown = !this.searchObject.toolSearch;
    }
  }

  public search(): void {
    this.tableLoading = true;
    this.clearTableData();

    this.searchObject.type = ObjectUtils.isDefined(this.selectedPnType) ? this.selectedPnType : undefined;
    // Since ingredient search also includes tools, dont assign type in request
    if (this.disablePartTypeDropdown && this.searchObject.type === AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY) {
      this.searchObject.type = undefined;
    }
    if (this.searchObject.toolSearch) {
      this.searchObject.type = undefined;
    }
    //////////////////////////////////////

    this.dialogSearchPartService
      .findBirePartNumbersBySearchCriteria(this.searchObject)
      .subscribe((result: SearchResultsDTO<PartsAssociatedTableDTO>) => {
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
      /*const item: PartsAssociatedTableDTO = this.tableSelection._obj;
      const partAssociateTableDTO: PartAssociateTableDTO = {
        birePlanPnDTO: item.birePnDTO,
        pnCode: item.consumableCode,
        pnName: item.consumableName,
        pnType: item.consumableTypeKey,
        planPnTypeText: item.consumableTypeValue
      };*/
      this.onValidated.emit(this.tableSelection._obj);
      super.closeDialog();
    }
  }

  private clearTableData(): void {
    this.table = { list: [], moreResults: false };
    this.tableSelection = undefined;
  }

  private createItemRow(obj: PartsAssociatedTableDTO): ItemRow {
    const birePnDTO: BirePnDTO = obj.birePnDTO ? obj.birePnDTO : {};

    let pnType: string | undefined;
    this.pnTypeMap.forEach((element: LabelValue<string>) => {
      if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
        pnType = element.label;
      }
    });

    const itemRow: ItemRow = {
      partDesignation: StringUtils.orEmpty(birePnDTO.articleDesignation),
      partNumber: StringUtils.orEmpty(birePnDTO.pnCode),
      partType: StringUtils.orEmpty(pnType),
      _obj: obj
    };

    return itemRow;
  }

  private init(): void {
    this.clearTableData();
    this.showPartTypeDropdown = true;
    this.tableLoading = false;

    this.handlePnType();
  }

  private handlePnType(): void {
    this.selectedPnType = undefined;
    this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP).subscribe((results) => {
      this.pnTypeMap = ListUtils.orEmpty(results);
      this.pnTypeList = ListUtils.orEmpty(results).map((elt: LabelValue<string>) => {
        if (this.disablePartTypeDropdown && elt.value === AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY) {
          elt.label = this.translateService.instant(this.getTranslateKey('ingredientTool'));
        }

        return {
          label: elt.label,
          value: elt.value
        };
      });
    });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'partType', alignment: 'left', width: '25%' },
      { field: 'partNumber', alignment: 'left', width: '25%' },
      { field: 'partDesignation', alignment: 'left', width: '50%' }
    ];
  }
}
