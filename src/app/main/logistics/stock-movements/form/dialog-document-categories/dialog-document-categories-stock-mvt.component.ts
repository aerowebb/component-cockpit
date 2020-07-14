import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BidtDfTypeOperationDTO } from '../../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';
import { BidtStockMvtOperationDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-operation-dto.interface';
import { BidtStockMvtTypeOperationDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-type-operation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { FormService } from '../form.service';

interface OperationDocRow {
  operationCode?: String;
  operationDocs?: String;
  _operation: BidtStockMvtOperationDTO;
}

@Component({
  selector: 'aw-dialog-document-categories',
  templateUrl: './dialog-document-categories-stock-mvt.component.html'
})
export class DialogDocumentCategoriesStockMvtComponent extends DialogComponent implements OnInit {
  public dialogContent: string;
  public numberOfDocs: number;
  public operationsTableDataSource: TableDataSource<OperationDocRow>;
  public data: OperationDocRow[];
  public docAssetCategory: LabelValue<String>[];
  public logisticalOperation: LabelValue<string>[];
  @Input() public bidtStockMvtOperationDTOList: BidtStockMvtOperationDTO[];

  public constructor(private readonly formService: FormService, private readonly propertiesService: PropertiesService) {
    super(ComponentOpenMode.Read, 'DialogDocumentCategoriesStockMvtComponent');
    this.data = [];
    this.initalizeTableColumns();
  }

  public ngOnInit(): void {
    const docAssetCategory$ = this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP);

    const logisticalOperation$ = this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_OPERATION_MAP);

    const operationAssetCategory$ = this.formService.getOperationCategories(this.bidtStockMvtOperationDTOList);

    forkJoin([docAssetCategory$, operationAssetCategory$, logisticalOperation$]).subscribe({
      next: ([docAssetCategory, operationAssetCategory, logisticalOperation]) => {
        this.docAssetCategory = docAssetCategory;
        this.logisticalOperation = logisticalOperation;
        if (operationAssetCategory.dfTypeOperationList && operationAssetCategory.dfTypeOperationList.length > 0) {
          this.useDfTypesOperation(operationAssetCategory.dfTypeOperationList);
        } else if (
          operationAssetCategory.stockMvtTypeOperationList &&
          operationAssetCategory.stockMvtTypeOperationList.length > 0
        ) {
          this.useStockMvtTypesOperation(operationAssetCategory.stockMvtTypeOperationList);
        }

        this.operationsTableDataSource.setData(this.data);
      }
    });
  }

  private getDocCategories(operation: BidtDfTypeOperationDTO | BidtStockMvtTypeOperationDTO): void {
    this.numberOfDocs = 1;
    this.dialogContent = '';
    if (operation.docCategories && operation.docCategories.length > 0) {
      operation.docCategories.forEach((categorieOpe) => {
        if (this.numberOfDocs === 1) {
          this.dialogContent = `${this.numberOfDocs}. ${
            this.docAssetCategory.filter((categorie) => categorie.value === categorieOpe)[0].label
          }`;
          this.numberOfDocs++;
        } else {
          this.dialogContent = `${this.dialogContent}\r${this.numberOfDocs}. ${
            this.docAssetCategory.filter((categorie) => categorie.value === categorieOpe)[0].label
          }`;
          this.dialogContent = this.dialogContent.replace(/\r?\n/g, '</br>');
          this.numberOfDocs++;
        }
      });
    }
  }

  private useDfTypesOperation(dfTypesOperations: BidtDfTypeOperationDTO[]): void {
    dfTypesOperations.forEach((operation) => {
      this.getDocCategories(operation);
      const operationRow: OperationDocRow = {
        operationCode: this.logisticalOperation.filter((ope) => ope.value === operation.dftopeKey)[0].label,
        operationDocs: this.dialogContent,
        _operation: this.bidtStockMvtOperationDTOList.filter((ope) => ope.bidtDfTypeOperationId === operation.id)[0]
      };
      this.data.push(operationRow);
    });
  }

  private useStockMvtTypesOperation(stockMvtTypeOperationLs: BidtStockMvtTypeOperationDTO[]): void {
    stockMvtTypeOperationLs.forEach((operation) => {
      this.getDocCategories(operation);
      const operationRow: OperationDocRow = {
        operationCode: this.logisticalOperation.filter((ope) => ope.value === operation.smtoKey)[0].label,
        operationDocs: this.dialogContent,
        _operation: this.bidtStockMvtOperationDTOList.filter((ope) => ope.bidtDfTypeOperationId === operation.id)[0]
      };
      this.data.push(operationRow);
    });
  }

  private initalizeTableColumns(): void {
    this.operationsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'operationCode',
          translateKey: this.getTranslateKey('operationCode')
        },
        {
          field: 'docList',
          translateKey: this.getTranslateKey('docList')
        }
      ],
      data: []
    });
  }
}
