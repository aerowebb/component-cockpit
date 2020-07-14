import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { GenericPropertyConstants } from '../../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../../../../shared/pipes/extract-translation.pipe';
import { FormatSelectOptionPipe } from '../../../../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../../../../shared/services/confirmation.service';
import { InputValidationService } from '../../../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { BidtStockMvtTypeDTO } from '../../../../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStockMvtTypeOperationDTO } from '../../../../../../../shared/types/api-types/bidt-stock-mvt-type-operation-dto.interface';
import { BidtStockMvtTypeOperationIdDTO } from '../../../../../../../shared/types/api-types/bidt-stock-mvt-type-operation-id-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { NumberUtils } from '../../../../../../../shared/utils/number-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';
import { CatalogService } from '../../../../catalog.service';
import { StockMovementTypeService } from '../stock-movement-type.service';

interface PartNumberRows {
  value?: string;
  pnType?: string;
}
interface DocCategoriesRows {
  value?: string;
  docCategorie?: string;
}
interface StatusTableRows {
  value?: string;
  label?: string;
}
interface OperationTableRows extends BidtStockMvtTypeOperationIdDTO {
  bidtStockMvtTypeId?: number;
  bidtStockMvtType?: string;
  smtoKey?: string;
  smtoSequenceNumber?: string;
  taskTypeCode?: string;
  taskTypeName?: string;
  pnTypes?: PartNumberRows[];
  docCategories?: DocCategoriesRows[];
}

@Component({
  selector: 'aw-dialog-stock-movement-type',
  styleUrls: ['./dialog-stock-movement-type.component.scss'],
  templateUrl: './dialog-stock-movement-type.component.html'
})
export class DialogStockMovementTypeComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input() public popupData: number;

  @Output()
  public onValidated: EventEmitter<BidtStockMvtTypeDTO>;

  @Input()
  public docCategoryId: string;

  public title: string;

  public component: typeof DialogStockMovementTypeComponent;

  public bidtStockMvtTypeDTO: BidtStockMvtTypeDTO;

  public openDialogOperation: boolean;
  public operationDialogOpenMode: ComponentOpenMode;

  public addOrUpdateInputDTO: BidtStockMvtTypeDTO;
  public changeMeaningList: LabelValue<string>[];
  public operationsTableDataSource: TableDataSource<OperationTableRows>;
  public partNumberTableDataSource: TableDataSource<PartNumberRows>;
  public statusTableDataSource: TableDataSource<StatusTableRows>;
  public documentCategoriesTableDataSource: TableDataSource<DocCategoriesRows>;
  public selectedOperation: OperationTableRows | undefined;
  public storageBinTypes: SelectItem[];
  private isOneOperationSelected: boolean = false;
  private partNumberList: PartNumberRows[];
  private docCategoryList: DocCategoriesRows[];
  public taskTypes: Map<string, string>;
  public operations: LabelValue<string>[];
  private sequence: string;

  public constructor(
    private readonly messageService: MessageService,
    private readonly stockMovementTypeService: StockMovementTypeService,
    public readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly catalogService: CatalogService,
    public inputValidationService: InputValidationService,
    private readonly _formatSelectOption: FormatSelectOptionPipe,
    private readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(ComponentOpenMode.Read, 'DialogStockMovementTypeComponent');
    this.component = DialogStockMovementTypeComponent;
    this.onValidated = new EventEmitter<BidtStockMvtTypeDTO>();

    this.init();
    this.loadDropDowns();
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_OPERATION_MAP).subscribe({
      next: (operations) => {
        this.operations = operations;
      }
    });
  }
  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    this.bindOperationRelatedTables();
    this.bindStatusTable();
    this.fetchStatusTable();

    if (!!this.popupData) {
      this.stockMovementTypeService.findStockMvtTypeById(this.popupData).subscribe((results) => {
        this.operationsTableDataSource.setData([]);
        this.bidtStockMvtTypeDTO = results;
        if (
          this.bidtStockMvtTypeDTO &&
          this.bidtStockMvtTypeDTO.bidtStockMvtTypeOperations &&
          this.bidtStockMvtTypeDTO.bidtStockMvtTypeOperations.length > 0
        ) {
          this.operationsTableDataSource.setData(
            this.bidtStockMvtTypeDTO.bidtStockMvtTypeOperations.map((operation) => this.createOperationRow(operation))
          );
          this.sortOperationTable();
        }
        this.operationsTableDataSource.update();
      });
    }
  }

  private createOperationRow(operationDTO: BidtStockMvtTypeOperationDTO): OperationTableRows {
    const maxDigit = 10;
    const numb = '0';
    if (!!operationDTO && operationDTO.smtoSequenceNumber) {
      this.sequence =
        Number(operationDTO.smtoSequenceNumber) < maxDigit
          ? numb.concat(
              NumberUtils.roundNumber(NumberUtils.fromString(operationDTO.smtoSequenceNumber as string), 0).toString()
            )
          : NumberUtils.roundNumber(NumberUtils.fromString(operationDTO.smtoSequenceNumber as string), 0).toString();
    }
    const operationRow: OperationTableRows = {
      bidtStockMvtTypeId: operationDTO.id,
      bidtStockMvtType: operationDTO.bidtStockMvtType,
      smtoKey: this._formatSelectOption.transform(operationDTO.smtoKey, this.operations),
      smtoSequenceNumber: !!operationDTO.smtoSequenceNumber ? this.sequence : '',
      taskTypeCode: operationDTO.taskTypeCode,
      taskTypeName: operationDTO.taskTypeCode && this.taskTypes.get(operationDTO.taskTypeCode),
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
          : []
    };

    return operationRow;
  }

  public moveDown(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.partNumberTableDataSource.dataSelection = [];
      this.documentCategoriesTableDataSource.dataSelection = [];
      const selectedOperation = this.operationsTableDataSource.dataSelection[0];
      const selectedRowSequenceNumber = selectedOperation.smtoSequenceNumber;
      const selectedRowIndex = this.operationsTableDataSource.dataSrc.findIndex((operation) => {
        return (
          operation.smtoSequenceNumber === selectedOperation.smtoSequenceNumber &&
          operation.smtoKey === selectedOperation.smtoKey
        );
      });

      // shift one row down
      if (this.operationsTableDataSource.dataSrc.length - 1 !== selectedRowIndex) {
        const data = this.operationsTableDataSource.dataSrc[selectedRowIndex + 1];

        selectedOperation.smtoSequenceNumber = data.smtoSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex + 1] = selectedOperation;

        data.smtoSequenceNumber = selectedRowSequenceNumber;
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
      const selectedRowSequenceNumber = selectedOperation.smtoSequenceNumber;
      const selectedRowIndex = this.operationsTableDataSource.dataSrc.findIndex((operation) => {
        return (
          operation.smtoSequenceNumber === selectedOperation.smtoSequenceNumber &&
          operation.smtoKey === selectedOperation.smtoKey
        );
      });

      // shift one row up
      if (selectedRowIndex > 0) {
        const data = this.operationsTableDataSource.dataSrc[selectedRowIndex - 1];

        selectedOperation.smtoSequenceNumber = data.smtoSequenceNumber;
        this.operationsTableDataSource.dataSrc[selectedRowIndex - 1] = selectedOperation; // shift selected row to up

        data.smtoSequenceNumber = selectedRowSequenceNumber;
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
    this.bidtStockMvtTypeDTO.bidtStockMvtTypeOperations = [];
    const operations: BidtStockMvtTypeOperationDTO[] = [];
    let statusValue = '';
    this.operationsTableDataSource.dataSrc.forEach((operation) => {
      const operationRow: BidtStockMvtTypeOperationDTO = {
        bidtStockMvtType: '',
        smtoSequenceNumber: operation.smtoSequenceNumber,
        smtoKey: this.getOperationValueFromLabel(operation.smtoKey as string),
        taskTypeCode: operation.taskTypeCode,
        pnTypes:
          !!operation.pnTypes && operation.pnTypes.length > 0
            ? operation.pnTypes.map((pn) => {
                return pn.value as string;
              })
            : [],
        docCategories:
          !!operation.docCategories && operation.docCategories.length > 0
            ? operation.docCategories.map((category) => {
                return category.value as string;
              })
            : []
      };
      operations.push(operationRow);
    });

    this.statusTableDataSource.dataSelection.forEach((status) => {
      if (!!status && !!status.value) {
        statusValue = statusValue.concat(status.value.toString(), ';');
      }
      this.bidtStockMvtTypeDTO.smtStatuses = statusValue.substr(0, statusValue.length - 1);
    });

    const input = { ...this.bidtStockMvtTypeDTO };
    input.bidtStockMvtTypeOperations = operations;

    this.stockMovementTypeService.addOrUpdate(input).subscribe((result) => {
      if (result) {
        this.onValidated.emit(result);
        this.closeDialog();
      }
    });
  }

  public deleteOperations(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        this.operationsTableDataSource.dataSelection.length === 1
          ? 'confirmDeleteSelectedOperation'
          : 'confirmDeleteSelectedOperations'
      ),
      accept: () => {
        const operations = this.operationsTableDataSource.dataSrc.filter((operationRow) => {
          return !this.operationsTableDataSource.dataSelection.some((deletedRow) => {
            return (
              deletedRow.smtoKey === operationRow.smtoKey &&
              deletedRow.smtoSequenceNumber === operationRow.smtoSequenceNumber
            );
          });
        });

        // Reset the sequential number
        if (!!operations && operations.length) {
          let sequenceNumber = 1;
          const maxDigit = 10;
          operations.forEach((row) => {
            row.smtoSequenceNumber = sequenceNumber < maxDigit ? `0${sequenceNumber}` : sequenceNumber.toString();
            sequenceNumber += 1;
          });

          this.operationsTableDataSource.setData(operations);
        }
      }
    });
  }

  public addOperation(): void {
    this.selectedOperation = undefined;
    this.openDialogOperation = true;
    this.operationDialogOpenMode = ComponentOpenMode.Create;
  }

  public editOperation(): void {
    if (this.operationsTableDataSource.dataSelectionCount === 1) {
      this.openDialogOperation = true;
      this.operationDialogOpenMode = ComponentOpenMode.Write;
      const selectedRow = { ...this.operationsTableDataSource.dataSelection[0] };
      selectedRow.smtoKey = this.getOperationValueFromLabel(selectedRow.smtoKey as string);
      this.selectedOperation = selectedRow;
    }
  }

  private getOperationValueFromLabel(label: string): string {
    const operation = this.operations.find((optKey) => optKey.label === label);

    return operation ? operation.value : '';
  }

  public validateOperation(operation: BidtStockMvtTypeOperationDTO): void {
    if (this.operationsTableDataSource.hasDataSelection) {
      this.operationsTableDataSource.replaceData(
        this.operationsTableDataSource.dataSelection[0],
        this.createOperationRow(operation)
      );
    } else {
      const maxDigit = 10;
      const num =
        this.operationsTableDataSource.data.length < maxDigit
          ? `0${this.operationsTableDataSource.data.length + 1}`
          : (this.operationsTableDataSource.data.length + 1).toString();
      operation.smtoSequenceNumber = num;
      this.operationsTableDataSource.addData([this.createOperationRow(operation)]);
    }
    this.operationsTableDataSource.dataSelection = [];
  }

  private sortOperationTable(): void {
    this.operationsTableDataSource.dataSrc.sort((e1, e2) => {
      if (!!e1.smtoSequenceNumber && !!e2.smtoSequenceNumber) {
        const s1 = Number(e1.smtoSequenceNumber);
        const s2 = Number(e2.smtoSequenceNumber);

        return s1 > s2 ? 1 : -1;
      }

      return 0;
    });
  }

  public disableButton(): boolean {
    if (!!this.bidtStockMvtTypeDTO.id) {
      return false;
    }

    return true;
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
  private bindStatusTable(): void {
    const status: StatusTableRows[] = [];
    this.stockMovementTypeService.getMvtStatusMap().subscribe(
      (results) => {
        results.forEach((element) => {
          status.push({ label: element.label, value: element.value });
          this.statusTableDataSource.setData(status);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatusTable'));
      }
    );
  }
  private init() {
    this.bidtStockMvtTypeDTO = {};
    this.openDialogOperation = false;
    this.selectedOperation = undefined;
    this.taskTypes = new Map<string, string>();
    this.storageBinTypes = [];
    this.partNumberList = [];
    this.docCategoryList = [];
    this.initalizeTableColumns();
  }

  private initalizeTableColumns(): void {
    this.operationsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'smtoSequenceNumber',
          translateKey: this.getTranslateKey('sequentialNumber')
        },
        {
          field: 'smtoKey',
          translateKey: this.getTranslateKey('operation')
        },
        {
          field: 'taskTypeName',
          translateKey: this.getTranslateKey('taskType')
        }
      ],
      data: []
    });
    this.initPartnumberTableSource();
    this.initCategoryTableSource();
    this.initStatusTableSource();
  }

  private initPartnumberTableSource(): void {
    this.partNumberTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: this.isOneOperationSelected,
      columns: [{ field: 'pnType', translateKey: this.getTranslateKey('pnType') }],
      data: []
    });
    this.partNumberTableDataSource.setData(this.partNumberList);
  }

  private initCategoryTableSource(): void {
    this.documentCategoriesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: this.isOneOperationSelected,
      columns: [{ field: 'docCategorie', translateKey: this.getTranslateKey('pnType') }],
      data: []
    });
    this.documentCategoriesTableDataSource.setData(this.docCategoryList);
  }

  private initStatusTableSource(): void {
    this.statusTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'value', translateKey: this.getTranslateKey('code') },
        { field: 'label', translateKey: this.getTranslateKey('value') }
      ],
      data: []
    });
  }

  private loadDropDowns(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe((results) => {
      results.forEach((element) => {
        this.taskTypes.set(element.value, element.label);
      });
    });

    this.stockMovementTypeService.getMovementCategoryMap().subscribe((results) => {
      this.bidtStockMvtTypeDTO.smtWay = results[2].value;
      this.changeMeaningList = [
        { value: results[2].value, label: results[2].label },
        { value: results[0].value, label: results[0].label },
        { value: results[1].value, label: results[1].label }
      ];
    });

    const observables = [this.stockMovementTypeService.findAllBinType()];
    forkJoin(observables).subscribe((results) => {
      const binTypes: LabelValue<string>[] = results['0'];
      this.storageBinTypes = binTypes.map((element) => {
        return {
          label: StringUtils.orEmpty(this.extractTranslationPipe.transform(element.label)),
          value: element.value.toString()
        };
      });
    });
  }

  private fetchStatusTable(): void {
    // TODO Fetch Selected Rows of Status Table for each id.
  }
}
