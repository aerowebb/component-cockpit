import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';

import { HAttributeDTO } from '../../../shared/types/api-types/h-attribute-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { ConfirmationService } from '../../services/confirmation.service';
import { DateService } from '../../services/date.service';
import { LoaderService } from '../../services/loader.service';
import { StringUtils } from '../../utils/string-utils';
import { DynamicAttributesService } from '../dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../dynamic-attributes/types/dynamic-attributes.interface';

import { DynamicAttributesHistoryService } from './dynamic-attributes-history.service';

interface AttributeRow {
  attributeId: string;
  attributeValue: string;
  statusDate: string;
  statusState: string;
  statusUser: string;
  timestamp: string;
}

@Component({
  selector: 'aw-dynamic-attributes-history',
  templateUrl: './dynamic-attributes-history.component.html'
})
export class DynamicAttributesHistoryComponent<T extends HAttributeDTO> extends DialogComponent implements OnInit {
  @Input()
  public deleteApi: string;
  @Input('attributes')
  public dynamicAttributes: DynamicAttributes[];
  @Input('history')
  public historyObservable: Observable<T[]>;
  @Input()
  public showDelete: boolean;

  public attributes: SelectItem[];
  public selectedAttribute: string | undefined;
  public selectedRows: AttributeRow[];
  public tableCols: TableColumn[];
  public formattedTableRows: AttributeRow[];

  private readonly attributeMap: Map<string, T>;
  private attributesHistory: T[];

  public constructor(
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly dynamicAttributesHistoryService: DynamicAttributesHistoryService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly loaderService: LoaderService
  ) {
    super(ComponentOpenMode.Write, 'DynamicAttributesHistoryComponent');

    this.attributeMap = new Map<string, T>();
    this.attributes = [];
    this.selectedAttribute = undefined;
    this.selectedRows = [];
    this.formattedTableRows = [];

    this.showDelete = false;

    this.setTableCols();
  }

  public ngOnInit(): void {
    this.loaderService.hideLoadingBar();

    this.historyObservable.subscribe((results) => {
      this.attributesHistory = !!results ? results : [];
    });

    this.attributes = this.dynamicAttributesService.getLeafs(this.dynamicAttributes).map((dynamicAttribute) => {
      const attribute: SelectItem = {
        label: dynamicAttribute.label,
        value: dynamicAttribute.id
      };

      return attribute;
    });
  }

  public deleteSelectedHistory(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'dynamicAttributesHistory.confirmDeleteSelectedHistory',
      accept: () => {
        this.selectedRows.forEach((selectedRow) => {
          const attribute = this.attributeMap.get(selectedRow.attributeId);

          if (!!attribute) {
            this.dynamicAttributesHistoryService.removeAttributeHistory(this.deleteApi, attribute).subscribe((_) => {
              this.formattedTableRows = this.formattedTableRows.filter((row) => {
                return row.attributeId !== selectedRow.attributeId;
              });

              this.attributesHistory = this.attributesHistory.filter((attributeHistory) => {
                return attributeHistory.attributeId !== selectedRow.attributeId;
              });
            });
          }
        });

        this.selectedRows = [];
      }
    });
  }

  public handleAttributeSelected(value: string | undefined): void {
    if (!!value) {
      const selection = this.attributesHistory.filter((attributeHistoric) => {
        return attributeHistoric.attributeId === value;
      });

      if (!!selection) {
        this.formattedTableRows = selection.map((obj) => {
          const formattedObject: AttributeRow = {
            attributeId: obj.attributeId,
            attributeValue: StringUtils.orEmpty(obj.attributeValue),
            statusDate: this.dateService.dateWithHourMinSecToString(obj.statusDate),
            statusState: StringUtils.orEmpty(obj.statusState),
            statusUser: StringUtils.orEmpty(obj.statusUser),
            timestamp: this.dateService.dateWithHourMinSecToString(obj.timestamp)
          };

          this.attributeMap.set(formattedObject.attributeId, obj);

          return formattedObject;
        });
      } else {
        this.formattedTableRows = [];
      }
    }
  }

  private setTableCols(): void {
    this.tableCols = [
      { field: 'statusUser', alignment: 'left' },
      { field: 'statusState', alignment: 'left' },
      { field: 'attributeValue', alignment: 'left' },
      { field: 'statusDate', alignment: 'left' },
      { field: 'timestamp', alignment: 'left' }
    ];
  }
}
