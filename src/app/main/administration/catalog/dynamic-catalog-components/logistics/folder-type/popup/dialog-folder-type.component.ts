import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { AddOrUpdateDfTypeInputDTO } from '../../../../../../../shared/types/api-input-types/catalog/add-update-df-type-input.interface';
import { BidtDfTypeDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeOperationDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { NumberUtils } from '../../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';
import { CatalogService } from '../../../../catalog.service';
import { FolderTypeService } from '../folder-type.service';

interface PartNumberRows {
  value?: string;
  pnType?: string;
}
interface DocCategoriesRows {
  value?: string;
  docCategorie?: string;
}
interface OperationTableRows {
  idOpe?: number;
  bidtDfType?: number;
  dftopeKey?: string;
  dftopeSequenceNumber?: string;
  objectType?: string;
  objectTypeName?: string;
  taskTypeCode?: string;
  taskTypeName?: string;
  pnTypes?: PartNumberRows[];
  docCategories?: DocCategoriesRows[];
  _obj: BidtDfTypeOperationDTO;
}

@Component({
  selector: 'aw-dialog-folder-type',
  templateUrl: './dialog-folder-type.component.html',
  styleUrls: ['./dialog-folder-type.component.scss']
})
export class DialogFolderTypeComponent extends DialogComponent implements OnInit {
  private static readonly CATEOGRY_TYPE_RECEIPT: string = 'receipt';

  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public set category(category: string) {
    if (!!category) {
      if (category === this.component.CATEOGRY_TYPE_RECEIPT) {
        this.dftCategory = AWPropertiesConstants.DELIVERY_CATEGORY_RECEIPT;
      } else {
        this.dftCategory = AWPropertiesConstants.DELIVERY_CATEGORY_SHIPMENT;
      }
      this.title = this.getTranslatedValue(category);
    }
  }

  @Output() public onValidated: EventEmitter<void>;

  @Input()
  public docCategoryId: string;

  @Input() public popupData: AddOrUpdateDfTypeInputDTO;

  private dftCategory: string;

  public title: string;

  public bidtDfTypeDTO: BidtDfTypeDTO;

  public openDialogOperation: boolean;
  public operationDialogOpenMode: ComponentOpenMode;

  public component: typeof DialogFolderTypeComponent;

  public operationsTableDataSource: TableDataSource<OperationTableRows>;
  public partNumberTableDataSource: TableDataSource<PartNumberRows>;
  public documentCategoriesTableDataSource: TableDataSource<DocCategoriesRows>;
  public selectedOperation: OperationTableRows | undefined;

  public elementTypes: SelectItem[];
  public taskTypes: SelectItem[];
  private isOneOperationSelected: boolean = false;
  private partNumberList: PartNumberRows[];
  private docCategoryList: DocCategoriesRows[];

  public operations: LabelValue<string>[];
  public transferTypeList: SelectItem[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly translateService: TranslateService,
    private readonly folderTypeService: FolderTypeService,
    public readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly catalogService: CatalogService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
  ) {
    super(ComponentOpenMode.Read, 'DialogFolderTypeComponent');
    this.component = DialogFolderTypeComponent;
    this.onValidated = new EventEmitter<void>();

    this.init();
    this.loadDropDowns();
  }

  public ngOnInit(): void {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_OPERATION_MAP).subscribe({
      next: (operations) => {
        this.operations = operations;
        this.updateOpenMode(this.openMode);
        this.bindOperationRelatedTables();
        if (!!this.popupData && this.popupData.dfType && this.popupData.dfType.id) {
          this.operationsTableDataSource.setData([]);
          this.bidtDfTypeDTO = { ...this.popupData.dfType };
          if (this.popupData && this.popupData.dfTypeOperations && this.popupData.dfTypeOperations.length > 0) {
            this.operationsTableDataSource.setData(
              this.popupData.dfTypeOperations.map((operation) => this.createOperationRow(operation))
            );
          }
          this.operationsTableDataSource.update();
        }
      }
    });
  }

  private loadTransferTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MM_TRASFER_TYPE_MAP).subscribe((results) => {
      this.transferTypeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private createOperationRow(operationDTO: BidtDfTypeOperationDTO): OperationTableRows {
    const operationRow: OperationTableRows = {
      idOpe: operationDTO.id,
      bidtDfType: operationDTO.bidtDfTypeId,
      dftopeKey: this._formatSelectOption.transform(operationDTO.dftopeKey, this.operations),
      dftopeSequenceNumber: ObjectUtils.isDefined(operationDTO.dftopeSequenceNumber)
        ? NumberUtils.roundNumber(NumberUtils.fromString(operationDTO.dftopeSequenceNumber as string), 0).toString()
        : '',
      objectType: operationDTO.objectType,
      objectTypeName: !!operationDTO.objectType
        ? this.elementTypes.filter((element) => element.value === operationDTO.objectType)[0] &&
          this.elementTypes.filter((element) => element.value === operationDTO.objectType)[0].label
        : '',
      taskTypeCode: operationDTO.taskTypeCode,
      taskTypeName: !!operationDTO.taskTypeCode
        ? this.taskTypes.filter((taskCode) => taskCode.value === operationDTO.taskTypeCode)[0] &&
          this.taskTypes.filter((taskCode) => taskCode.value === operationDTO.taskTypeCode)[0].label
        : '',
      pnTypes:
        !!operationDTO.pnTypes && operationDTO.pnTypes.length > 0
          ? operationDTO.pnTypes.map((pnType) => {
              const partNumer: PartNumberRows = {
                value: pnType as string
              };

              return partNumer;
            })
          : [],
      docCategories:
        !!operationDTO.docCategories && operationDTO.docCategories.length > 0
          ? operationDTO.docCategories.map((category) => {
              const docCategory: DocCategoriesRows = {
                value: category as string
              };

              return docCategory;
            })
          : [],
      _obj: operationDTO
    };

    return operationRow;
  }

  public moveDown(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.partNumberTableDataSource.dataSelection = [];
      this.documentCategoriesTableDataSource.dataSelection = [];
      const selectedOperation = this.operationsTableDataSource.dataSelection[0];
      const selectedRowSequenceNumber = selectedOperation.dftopeSequenceNumber;
      const selectedRowIndex = this.operationsTableDataSource.dataSrc.findIndex((operation) => {
        return (
          operation.dftopeSequenceNumber === selectedOperation.dftopeSequenceNumber &&
          operation.dftopeKey === selectedOperation.dftopeKey &&
          operation.objectType === selectedOperation.objectType
        );
      });

      // shift one row down
      if (this.operationsTableDataSource.dataSrc.length - 1 !== selectedRowIndex) {
        const data = this.operationsTableDataSource.dataSrc[selectedRowIndex + 1];

        selectedOperation.dftopeSequenceNumber = data.dftopeSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex + 1] = selectedOperation;

        data.dftopeSequenceNumber = selectedRowSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex] = data;
        this.operationsTableDataSource.setData(
          this.operationsTableDataSource.dataSrc.map((operation) => {
            return operation;
          })
        );
      }
    }
  }

  public moveUp(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.partNumberTableDataSource.dataSelection = [];
      this.documentCategoriesTableDataSource.dataSelection = [];
      const selectedOperation = this.operationsTableDataSource.dataSelection[0];
      const selectedRowSequenceNumber = selectedOperation.dftopeSequenceNumber;
      const selectedRowIndex = this.operationsTableDataSource.dataSrc.findIndex((operation) => {
        return (
          operation.dftopeSequenceNumber === selectedOperation.dftopeSequenceNumber &&
          operation.dftopeKey === selectedOperation.dftopeKey &&
          operation.objectType === selectedOperation.objectType
        );
      });

      // shift one row up
      if (selectedRowIndex > 0) {
        const data = this.operationsTableDataSource.dataSrc[selectedRowIndex - 1];

        selectedOperation.dftopeSequenceNumber = data.dftopeSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex - 1] = selectedOperation; // shift selected row to up

        data.dftopeSequenceNumber = selectedRowSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex] = data;
        this.operationsTableDataSource.setData(
          this.operationsTableDataSource.dataSrc.map((operation) => {
            return operation;
          })
        );
      }
    }
  }

  public onOperationsRowSelectUnselect(): void {
    this.partNumberTableDataSource.dataSelection = [];
    this.documentCategoriesTableDataSource.dataSelection = [];
    let selectedOperationRow: OperationTableRows;
    this.isOneOperationSelected = false;
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.isOneOperationSelected = true;
      // TODO: Automatically select related document categories and part numbers
      selectedOperationRow = this.operationsTableDataSource.dataSelection[0];
    }
    this.initPartnumberTableSource();
    this.initCategoryTableSource();
    this.partNumberTableDataSource.update();
  }

  public onPartNumberRowSelectUnselect(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      const selectedPartNumbers = this.partNumberTableDataSource.dataSelection.map((row) => {
        const partNumber: PartNumberRows = {
          pnType: row.pnType,
          value: row.value
        };

        return partNumber;
      });
      const selectedOperationRows = this.operationsTableDataSource.dataSelection[0];
      selectedOperationRows.pnTypes = selectedPartNumbers;
    }
  }

  public onDocCategoriesRowSelectUnselect(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      const selectedCategories = this.documentCategoriesTableDataSource.dataSelection.map((row) => {
        const docCategory: DocCategoriesRows = {
          docCategorie: row.docCategorie,
          value: row.value
        };

        return docCategory;
      });

      const selectedOperationRows = this.operationsTableDataSource.dataSelection[0];
      selectedOperationRows.docCategories = selectedCategories;
    }
  }

  // Save Operation
  public validate(): void {
    this.bidtDfTypeDTO.bidtDfTypeOperations = [];
    this.bidtDfTypeDTO.dftCategory = this.dftCategory;

    const operations: BidtDfTypeOperationDTO[] = [];

    this.operationsTableDataSource.dataSrc.forEach((operation) => {
      const operationRow = operation._obj;
      operationRow.docCategories = undefined;
      operationRow.pnTypes = undefined;
      operationRow.bidtDfTypeId = this.bidtDfTypeDTO.id as number;

      operations.push(operationRow);
    });
    this.folderTypeService.addOrUpdateOperations(operations).subscribe((result) => {
      this.onValidated.emit();
      this.closeDialog();
      this.messageService.showSuccessMessage('global.successOnSave');
    });
  }

  public deleteOperations(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        this.operationsTableDataSource.dataSelection.length === 1
          ? 'confirmDeleteSelectedFolderType'
          : 'confirmDeleteSelectedFolderTypes'
      ),
      accept: () => {
        const operations = this.operationsTableDataSource.dataSrc.filter((operationRow) => {
          return !this.operationsTableDataSource.dataSelection.some((deletedRow) => {
            return (
              deletedRow.dftopeKey === operationRow.dftopeKey &&
              deletedRow.dftopeSequenceNumber === operationRow.dftopeSequenceNumber
            );
          });
        });

        this.operationsTableDataSource.setData(operations);
      }
    });
  }

  public addOperation(): void {
    this.openDialogOperation = true;
    this.operationDialogOpenMode = ComponentOpenMode.Create;
    this.selectedOperation = undefined;
  }

  public editOperation(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.openDialogOperation = true;
      this.operationDialogOpenMode = ComponentOpenMode.Write;
      const selectedRow = { ...this.operationsTableDataSource.dataSelection[0] };
      selectedRow.dftopeKey = this.getOperationValueFromLabel(selectedRow.dftopeKey as string);
      this.selectedOperation = selectedRow;
    }
  }

  private getOperationValueFromLabel(label: string): string {
    const operation = this.operations.find((optKey) => optKey.label === label);

    return operation ? operation.value : '';
  }

  public validateOperation(operation: BidtDfTypeOperationDTO): void {
    if (this.operationsTableDataSource.hasDataSelection) {
      this.operationsTableDataSource.replaceData(
        this.operationsTableDataSource.dataSelection[0],
        this.createOperationRow(operation)
      );
    } else {
      this.operationsTableDataSource.addData([this.createOperationRow(operation)]);
    }

    this.operationsTableDataSource.dataSelection = [];
  }

  public isValidForm(): boolean {
    return (
      StringUtils.isNullOrEmpty(this.bidtDfTypeDTO.dftCode) ||
      StringUtils.isNullOrEmpty(this.bidtDfTypeDTO.dftDesignation)
    );
  }

  private bindOperationRelatedTables(): void {
    this.partNumberTableDataSource.setData([]);
    this.documentCategoriesTableDataSource.setData([]);
    this.propertiesService.getValue('getPnTypeMap').subscribe(
      (results) => {
        results.forEach((pn) => {
          this.partNumberList.push({ value: pn.value, pnType: pn.label });
        });
        this.initPartnumberTableSource();
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingMaterialType');
      }
    );

    this.catalogService.fetchPropertyValuesTableData(parseInt(this.docCategoryId, 10)).subscribe((results) => {
      results.map((category) => {
        const docCategory: DocCategoriesRows = {
          value: category.propertiesKey,
          docCategorie: category.enPropertiesValue
        };
        this.docCategoryList.push(docCategory);
        this.initCategoryTableSource();
      });
    });
  }

  private init() {
    this.bidtDfTypeDTO = {};
    this.openDialogOperation = false;
    this.selectedOperation = undefined;
    this.elementTypes = [];
    this.taskTypes = [];
    this.partNumberList = [];
    this.docCategoryList = [];
    this.transferTypeList = [];
    this.initalizeTableColumns();
  }

  private initalizeTableColumns(): void {
    this.operationsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'dftopeSequenceNumber', translateKey: this.getTranslateKey('code'), width: '20%' },
        { field: 'dftopeKey', translateKey: this.getTranslateKey('dftopeKey'), width: '30%' },
        { field: 'objectTypeName', translateKey: this.getTranslateKey('objectType'), width: '25%' },
        { field: 'taskTypeName', translateKey: this.getTranslateKey('taskTypeCode'), width: '25%' }
      ],
      data: []
    });
    this.initPartnumberTableSource();
    this.initCategoryTableSource();
  }

  private initPartnumberTableSource(): void {
    this.partNumberTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: this.isOneOperationSelected,
      columns: [{ field: 'pnType', translateKey: this.getTranslateKey('pnType') }]
    });
    this.partNumberTableDataSource.setData(this.partNumberList);

    this.documentCategoriesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: this.isOneOperationSelected,
      columns: [{ field: 'docCategorie', translateKey: this.getTranslateKey('docCategorie') }]
    });

    this.documentCategoriesTableDataSource.setData(this.docCategoryList);
  }

  private initCategoryTableSource(): void {
    this.documentCategoriesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: this.isOneOperationSelected,
      columns: [{ field: 'docCategorie', translateKey: this.getTranslateKey('docCategorie') }]
    });

    this.documentCategoriesTableDataSource.setData(this.docCategoryList);
  }

  private loadDropDowns(): void {
    this.elementTypes = [
      { label: this.getTranslatedValue('item'), value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_ITEM },
      { label: this.getTranslatedValue('package'), value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_PACKAGE },
      {
        label: this.translateService.instant('asset') as string,
        value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_ASSET
      }
    ];

    this.propertiesService.getValue('getTaskTypeMap').subscribe((results) => {
      this.taskTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
    this.loadTransferTypes();
  }

  private getTranslatedValue(key: string): string {
    return this.translateService.instant(this.getTranslateKey(key));
  }
}
