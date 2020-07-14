import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { PnTaskSearchInput } from '../../../../../shared/types/api-input-types/task-management/pn-task-search-input.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { TaskFormService } from '../task-form.service';

interface ItemRow {
  partType: string;
  partNumber: string;
  partDesignation: string;
  _obj: BirePnDTO;
}

@Component({
  selector: 'aw-dialog-measure-tool-popup',
  templateUrl: './dialog-measure-tool-popup.component.html'
})
export class DialogMeasureToolPopupComponent extends DialogComponent implements OnInit {
  @Input() public searchInput: PnTaskSearchInput;

  @Output() public onValidated: EventEmitter<BirePnDTO>;

  public partNumberTableDataSource: TableDataSource<ItemRow>;

  public pnTypeList: SelectItem[];
  public selectedPnType: string | undefined;
  private pnTypeMap: LabelValue<string>[];

  public searchCriteria: PnTaskSearchInput;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly taskFormService: TaskFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogMeasureToolPopupComponent');
    this.initTableDataSource();

    this.onValidated = new EventEmitter<BirePnDTO>();
    this.searchCriteria = {};
    this.selectedPnType = AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY;
  }

  public ngOnInit(): void {
    this.init();
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    const selectedRow =
      this.partNumberTableDataSource.dataSelectionCount === 1
        ? this.partNumberTableDataSource.dataSelection[0]._obj
        : undefined;
    this.onValidated.emit(selectedRow);
    this.display = false;
  }

  public search(): void {
    this.partNumberTableDataSource.setData([]);
    this.taskFormService.findPartNumbersAssociatedWithTaskOperations(this.searchCriteria).subscribe((results) => {
      if (!!results) {
        this.partNumberTableDataSource.setData(results.map((row) => this.createItemRow(row)));
      }
    });
  }

  private createItemRow(obj: BirePnDTO): ItemRow {
    const birePnDTO: BirePnDTO = obj;

    let pnType: string | undefined;
    this.pnTypeMap.forEach((element: LabelValue<string>) => {
      if (birePnDTO.pnType && birePnDTO.pnType === element.value) {
        pnType = element.label;
      }
    });

    const itemRow: ItemRow = {
      partNumber: StringUtils.orEmpty(birePnDTO.pnCode),
      partType: StringUtils.orEmpty(pnType),
      partDesignation: StringUtils.orEmpty(birePnDTO.articleDesignation),
      _obj: obj
    };

    return itemRow;
  }

  private init(): void {
    if (!!this.searchInput) {
      this.searchCriteria.taskCode = this.searchInput.taskCode;
      this.searchCriteria.taskVersion = this.searchInput.taskVersion;
    }

    this.handlePnType();
  }

  private handlePnType(): void {
    this.selectedPnType = undefined;
    this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP).subscribe((results) => {
      this.pnTypeMap = ListUtils.orEmpty(results);
      this.pnTypeList = ListUtils.orEmpty(results).map((elt: LabelValue<string>) => {
        if (elt.value === AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY) {
          elt.label = this.translateService.instant(this.getTranslateKey('ingredientTool'));
        }

        return {
          label: elt.label,
          value: elt.value
        };
      });
    });
  }

  private initTableDataSource(): void {
    this.partNumberTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'partType',
          translateKey: this.getTranslateKey('partType'),
          width: '25%'
        },
        {
          field: 'partNumber',
          translateKey: this.getTranslateKey('partNumber'),
          width: '25%'
        },
        {
          field: 'partDesignation',
          translateKey: this.getTranslateKey('partDesignation'),
          width: '50%'
        }
      ],
      data: []
    });
  }
}
