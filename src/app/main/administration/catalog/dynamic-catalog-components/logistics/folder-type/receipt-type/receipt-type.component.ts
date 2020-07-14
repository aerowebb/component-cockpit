import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../../../../shared/pipes/extract-translation.pipe';
import { ConfirmationService } from '../../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { AddOrUpdateDfTypeInputDTO } from '../../../../../../../shared/types/api-input-types/catalog/add-update-df-type-input.interface';
import { BidtDfTypeDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeIdDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-id-dto.interface';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';
import { CatalogService } from '../../../../catalog.service';
import { DynamicCatalog } from '../../../../types/dynamic-catalog.interface';
import { FolderTypeService } from '../folder-type.service';

interface BidtDfTypeRow extends BidtDfTypeIdDTO {
  dftCategory?: string; // 50
  dftCode?: string; // 50
  dftDesignation?: string; // 100
  noOfOperations: number;
}

@Component({
  selector: 'aw-receipt-shipment-type',
  templateUrl: '../folder-type.component.html'
})
export class ReceiptTypeComponent extends DynamicCatalog implements OnInit {
  public static readonly category: string = 'receipt';
  private static readonly NO_OF_OPERATIONS: number = 0;
  private static readonly DOCUMENT_CATEGORY: string = 'DOC_ASSET_CATEGORY';
  public docCategoryPropertyId: string | undefined;
  public openDialogFolderType: boolean;
  public folderTypeDialogOpenMode: ComponentOpenMode;
  private receiptTypeData: BidtDfTypeDTO[];

  public categoryTableDataSource: TableDataSource<BidtDfTypeRow>;
  public component: typeof ReceiptTypeComponent;

  public constructor(
    public readonly loaderService: LoaderService,
    public readonly messageService: MessageService,
    public readonly folderTypeService: FolderTypeService,
    public readonly confirmationService: ConfirmationService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.component = ReceiptTypeComponent;
    this.openDialogFolderType = false;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Read;

    this.categoryTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'dftCode', translateKey: this.getTranslateKey('code'), width: '15%' },
        { field: 'dftDesignation', translateKey: this.getTranslateKey('designation'), width: '55%' },
        { field: 'noOfOperations', translateKey: this.getTranslateKey('noOfOperations'), width: '30%' }
      ],
      data: []
    });
  }

  public ngOnInit() {
    this.getDocCategoryPropertyId();
    this.loadReceiptTable();
  }

  public getComponentName(): string {
    return 'ReceiptTypeComponent';
  }

  public addFolderType() {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Create;
  }

  public deleteFolderTypes(receiptTypeRows: BidtDfTypeRow[]): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        receiptTypeRows.length === 1 ? 'confirmDeleteSelectedReceiptType' : 'confirmDeleteSelectedReceiptTypes'
      ),
      accept: () => {
        const observables = receiptTypeRows.map((receipt) =>
          this.folderTypeService.removeFolderType({
            id: receipt.id
          })
        );
        forkJoin(observables).subscribe({
          next: () => {
            this.loadReceiptTable();

            this.messageService.showSuccessMessage(
              this.getTranslateKey(
                receiptTypeRows.length === 1 ? 'successOnDeleteReceiptType' : 'successOnDeleteReceiptTypes'
              )
            );
          }
        });
      }
    });
  }

  public refresh(): void {
    this.loadReceiptTable();
  }

  public refreshFolderType(): void {
    this.loadReceiptTable();
  }

  private loadReceiptTable(): void {
    this.receiptTypeData = [];
    this.categoryTableDataSource.setData([]);
    this.folderTypeService.loadReceiptType().subscribe(
      (results: BidtDfTypeDTO[]) => {
        const bidtDfTypeRows: BidtDfTypeRow[] = [];
        this.receiptTypeData = results && results.length ? results : [];
        results.forEach((receipt) => {
          const row: BidtDfTypeRow = {
            id: receipt.id,
            dftCategory: receipt.dftCategory,
            dftCode: receipt.dftCode,
            dftDesignation: StringUtils.orEmpty(this.extractTranslationPipe.transform(receipt.dftDesignation)),
            noOfOperations:
              !!receipt.bidtDfTypeOperations && receipt.bidtDfTypeOperations.length > 0
                ? receipt.bidtDfTypeOperations.length
                : this.component.NO_OF_OPERATIONS
          };
          bidtDfTypeRows.push(row);
        });

        this.categoryTableDataSource.setData(bidtDfTypeRows);
        this.categoryTableDataSource.update();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
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

  public getSelectedFolderObject(data: BidtDfTypeRow): AddOrUpdateDfTypeInputDTO {
    const selectedObject = (data && data.id && this.receiptTypeData.find((item) => item.id === data.id)) || {};
    selectedObject.dftCode = data && data.dftCode;
    selectedObject.dftDesignation = data && data.dftDesignation;

    return {
      dfType: selectedObject,
      dfTypeOperations: selectedObject.bidtDfTypeOperations
    };
  }

  public editSelectedType(): void {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Write;
  }
  public openSelectedType(): void {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Read;
  }
}
