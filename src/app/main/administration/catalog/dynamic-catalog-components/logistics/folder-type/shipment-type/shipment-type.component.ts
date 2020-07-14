import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { AddOrUpdateDfTypeInputDTO } from '../../../../../../../shared/types/api-input-types/catalog/add-update-df-type-input.interface';
import { BidtDfTypeDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtDfTypeIdDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-id-dto.interface';
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
export class ShipmentTypeComponent extends DynamicCatalog implements OnInit {
  public static readonly category: string = 'shipment';
  private static readonly NO_OF_OPERATIONS: number = 0;
  private static readonly DOCUMENT_CATEGORY: string = 'DOC_ASSET_CATEGORY';
  public docCategoryPropertyId: string | undefined;
  public openDialogFolderType: boolean;
  public folderTypeDialogOpenMode: ComponentOpenMode;

  private shipmanetTypeData: BidtDfTypeDTO[];

  public categoryTableDataSource: TableDataSource<BidtDfTypeRow>;
  public component: typeof ShipmentTypeComponent;

  public constructor(
    public readonly loaderService: LoaderService,
    public readonly messageService: MessageService,
    public readonly folderTypeService: FolderTypeService,
    public readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.component = ShipmentTypeComponent;
    this.openDialogFolderType = false;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Read;

    this.categoryTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'dftCode', translateKey: this.getTranslateKey('code') },
        {
          field: 'dftDesignation',
          translateKey: this.getTranslateKey('designation')
        },
        {
          field: 'noOfOperations',
          translateKey: this.getTranslateKey('noOfOperations')
        }
      ],
      data: []
    });
  }

  public ngOnInit() {
    this.getDocCategoryPropertyId();
    this.loadShipmentType();
  }

  public getComponentName(): string {
    return 'ShipmentTypeComponent';
  }

  public addFolderType() {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Create;
  }

  public deleteFolderTypes(receiptTypeRows: BidtDfTypeRow[]): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(
        receiptTypeRows.length === 1 ? 'confirmDeleteSelectedShipmentType' : 'confirmDeleteSelectedShimpentTypes'
      ),
      accept: () => {
        const observables = receiptTypeRows.map((receipt) =>
          this.folderTypeService.removeFolderType({
            id: receipt.id
          })
        );
        forkJoin(observables).subscribe({
          next: () => {
            this.loadShipmentType();

            this.messageService.showSuccessMessage(
              this.getTranslateKey(
                receiptTypeRows.length === 1 ? 'successOnDeleteShimpmentType' : 'successOnDeleteShimpmentTypes'
              )
            );
          }
        });
      }
    });
  }

  public refresh(): void {
    this.loadShipmentType();
  }

  public refreshFolderType(): void {
    this.loadShipmentType();
  }

  private loadShipmentType(): void {
    this.shipmanetTypeData = [];
    this.categoryTableDataSource.setData([]);
    this.folderTypeService.loadShipmentType().subscribe(
      (results: BidtDfTypeDTO[]) => {
        this.shipmanetTypeData = results && results.length ? results : [];
        const bidtDfTypeRows: BidtDfTypeRow[] = [];
        results.forEach((shipment) => {
          const row: BidtDfTypeRow = {
            id: shipment.id,
            dftCategory: shipment.dftCategory,
            dftCode: shipment.dftCode,
            dftDesignation: shipment.dftDesignation,
            noOfOperations:
              !!shipment.bidtDfTypeOperations && shipment.bidtDfTypeOperations.length > 0
                ? shipment.bidtDfTypeOperations.length
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

  public editSelectedType(): void {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Write;
  }

  public openSelectedType(): void {
    this.openDialogFolderType = true;
    this.folderTypeDialogOpenMode = ComponentOpenMode.Read;
  }

  public getSelectedFolderObject(data: BidtDfTypeRow): AddOrUpdateDfTypeInputDTO {
    const selectedObject = (data && data.id && this.shipmanetTypeData.find((item) => item.id === data.id)) || {};
    selectedObject.dftCode = data && data.dftCode;
    selectedObject.dftDesignation = data && data.dftDesignation;

    return {
      dfType: selectedObject,
      dfTypeOperations: selectedObject.bidtDfTypeOperations
    };
  }
}
