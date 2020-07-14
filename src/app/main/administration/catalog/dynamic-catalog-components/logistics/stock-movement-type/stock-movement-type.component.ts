import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../../../shared/pipes/extract-translation.pipe';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { BidtStockMvtTypeDTO } from '../../../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStockMvtTypeIdDTO } from '../../../../../../shared/types/api-types/bidt-stock-mvt-type-id-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { StockMovementTypeService } from './stock-movement-type.service';

interface BidtStockMvtTypeRow extends BidtStockMvtTypeIdDTO {
  isStandard?: boolean;
  noOfOperations?: number;
  issueAreaType?: string; // 50
  receiptAreaType?: string; // 50
  smtName?: string; // 100
  smtStatuses?: string; // 300
  smtWay?: string; // 50
}

@Component({
  selector: 'aw-types-of-movement-type',
  templateUrl: './stock-movement-type.component.html'
})
export class StockMovementTypeComponent extends DynamicCatalog implements OnInit {
  private static readonly DOCUMENT_CATEGORY: string = 'DOC_ASSET_CATEGORY';
  private static readonly NO_OF_OPERATIONS: number = 0;
  public docCategoryPropertyId: string | undefined;
  public openDialogStockMovementType: boolean;
  public stockMovementTypeDialogOpenMode: ComponentOpenMode;
  public categoryTableDataSource: TableDataSource<BidtStockMvtTypeRow>;
  public component: typeof StockMovementTypeComponent;
  public stockMvtDataRow: number | undefined;
  public storageBinTypes: SelectItem[];
  public changeMeaningList: SelectItem[];
  public typeMap: Map<string, string>;

  public constructor(
    public readonly loaderService: LoaderService,
    public readonly messageService: MessageService,
    public readonly stockMovementTypeService: StockMovementTypeService,
    public readonly confirmationService: ConfirmationService,
    public readonly catalogService: CatalogService,
    private readonly extractTranslationPipe: ExtractTranslationPipe
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.loadDropDowns();
    this.component = StockMovementTypeComponent;
    this.openDialogStockMovementType = false;
    this.stockMovementTypeDialogOpenMode = ComponentOpenMode.Read;
    this.typeMap = new Map<string, string>();

    this.categoryTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'id', translateKey: this.getTranslateKey('key'), width: '10%' },
        {
          field: 'standard',
          translateKey: this.getTranslateKey('standard'),
          width: '10%'
        },
        {
          field: 'smtName',
          translateKey: this.getTranslateKey('name'),
          width: '25%'
        },
        {
          field: 'smtWay',
          translateKey: this.getTranslateKey('meaning'),
          width: '15%'
        },
        {
          field: 'receiptAreaType',
          translateKey: this.getTranslateKey('enteringAreaType'),
          width: '15%'
        },
        {
          field: 'issueAreaType',
          translateKey: this.getTranslateKey('outgoingZoneType'),
          width: '15%'
        },
        {
          field: 'noOfOperations',
          translateKey: this.getTranslateKey('noOfOperations'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  public ngOnInit() {
    this.getDocCategoryPropertyId();
    this.loadStockMovementTypeTable();
  }

  public getComponentName(): string {
    return 'StockMovementTypeComponent';
  }

  public addStockMovementType() {
    this.stockMvtDataRow = undefined;
    this.openDialogStockMovementType = true;
    this.stockMovementTypeDialogOpenMode = ComponentOpenMode.Create;
  }

  public openStockMovementType(): void {
    if (this.categoryTableDataSource.dataSelectionCount === 1) {
      this.openDialogStockMovementType = true;
      this.stockMovementTypeDialogOpenMode = ComponentOpenMode.Read;
      this.stockMvtDataRow = this.categoryTableDataSource.dataSelection[0].id;
    }
  }

  public editStockMovementType(): void {
    if (this.categoryTableDataSource.dataSelectionCount === 1) {
      this.openDialogStockMovementType = true;
      this.stockMovementTypeDialogOpenMode = ComponentOpenMode.Write;
      this.stockMvtDataRow = this.categoryTableDataSource.dataSelection[0].id;
    }
  }

  public deleteStockMovementTypes(stockMvtTypeRows: BidtStockMvtTypeRow[]): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        stockMvtTypeRows.length === 1 ? 'confirmDeleteSelectedStockMvtType' : 'confirmDeleteSelectedStockMvtTypes'
      ),
      accept: () => {
        const observables = stockMvtTypeRows.map((receipt) =>
          this.stockMovementTypeService.removeStockMovementType({
            id: receipt.id
          })
        );
        forkJoin(observables).subscribe({
          next: () => {
            this.loadStockMovementTypeTable();

            this.messageService.showSuccessMessage(
              this.getTranslateKey(
                stockMvtTypeRows.length === 1 ? 'successOnDeleteStockMvtType' : 'successOnDeleteStockMvtTypes'
              )
            );
          }
        });
      }
    });
  }

  public refresh(): void {
    this.loadStockMovementTypeTable();
  }

  private loadStockMovementTypeTable(): void {
    this.categoryTableDataSource.setData([]);
    this.stockMovementTypeService.loadStockMovementType().subscribe(
      (results: BidtStockMvtTypeDTO[]) => {
        const bidtStockMvtTypeRows: BidtStockMvtTypeRow[] = [];
        results.forEach((stockMvt) => {
          const row: BidtStockMvtTypeRow = {
            id: stockMvt.id,
            issueAreaType: stockMvt.issueAreaType
              ? this.storageBinTypes.filter((issue) => issue.value === stockMvt.issueAreaType)[0] &&
                this.storageBinTypes.filter((issue) => issue.value === stockMvt.issueAreaType)[0].label
              : '',
            receiptAreaType: !!stockMvt.receiptAreaType
              ? this.storageBinTypes.filter((receipt) => receipt.value === stockMvt.receiptAreaType)[0] &&
                this.storageBinTypes.filter((receipt) => receipt.value === stockMvt.receiptAreaType)[0].label
              : '',
            smtName: stockMvt.smtName,
            smtStatuses: stockMvt.smtStatuses,
            smtWay: stockMvt.smtWay && this.typeMap.get(stockMvt.smtWay),
            noOfOperations:
              !!stockMvt.bidtStockMvtTypeOperations && stockMvt.bidtStockMvtTypeOperations.length > 0
                ? stockMvt.bidtStockMvtTypeOperations.length
                : this.component.NO_OF_OPERATIONS
          };
          bidtStockMvtTypeRows.push(row);
        });

        this.categoryTableDataSource.setData(bidtStockMvtTypeRows);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  private loadDropDowns(): void {
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

    this.stockMovementTypeService.getMovementCategoryMap().subscribe((results) => {
      results.forEach((element) => {
        this.typeMap.set(element.value, element.label);
      });
    });
  }

  public onValidatedMeasurementRow(rowData: BidtStockMvtTypeDTO): void {
    if (!!rowData) {
      if (!this.hasDuplicateMeasureCode(rowData)) {
        this.loadStockMovementTypeTable();
        this.messageService.showSuccessMessage('global.successOnSave');
        this.stockMvtDataRow = undefined;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('duplicateKey'));
      }
    }
  }

  private hasDuplicateMeasureCode(rowData: BidtStockMvtTypeDTO): boolean {
    let stockMvtTypeList = [...this.categoryTableDataSource.dataSrc];
    if (this.categoryTableDataSource.hasDataSelection) {
      const selectedStockMvtRow = this.categoryTableDataSource.dataSelection[0];

      stockMvtTypeList = this.categoryTableDataSource.dataSrc.filter((mprow) => {
        return selectedStockMvtRow.id !== mprow.id;
      });
    }

    const hasAnyDuplicateRow = stockMvtTypeList.some((row) => {
      return row.id === rowData.id;
    });

    return hasAnyDuplicateRow;
  }

  private getDocCategoryPropertyId(): void {
    this.catalogService.getPropertyCatalogIdNameMapping().subscribe((results) => {
      const propertyIds = results.filter(
        (property) =>
          property.propertiesName && property.propertiesName.toUpperCase() === this.component.DOCUMENT_CATEGORY
      );
      this.docCategoryPropertyId = propertyIds[0] && propertyIds[0].propertiesId;
    });
  }
}
