import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../../shared/services/tab.service';
import { SaveCatalogInput } from '../../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtStockTypeDTO } from '../../../../../../../shared/types/api-types/bidt-stock-type-dto.interface';
import { BidtStockTypeStatusDTO } from '../../../../../../../shared/types/api-types/bidt-stock-type-status-dto.interface';
import { FormPageComponent } from '../../../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../../shared/types/page-component-data.interface';
import { CatalogService } from '../../../../catalog.service';
import { StockTypeService } from '../stock-type.service';

@Component({
  selector: 'aw-stock-type-form',
  templateUrl: './stock-type-form.component.html'
})
export class StockTypeFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public stockTypeField: BidtStockTypeDTO;
  public operatorName: string | undefined;
  public readonly tabFieldsId: string;
  public readonly tabStatusId: string;
  public currentTabId: string;
  public ownerName: LabelValue<string>[];

  public statusTableDataSource: TableDataSource<BidtStockTypeStatusDTO>;

  public currentStatusForm: BidtStockTypeStatusDTO;
  public currentStatusFormIndex: number | undefined;

  public showQuickSearchBusinessPartnerPopup: boolean;

  public showStatusFormPopup: boolean;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly stockTypeService: StockTypeService,
    private readonly catalogService: CatalogService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    // this.stockData = [];
    this.tabFieldsId = 'Fields';
    this.tabStatusId = 'Status';
    this.init();
  }

  public init(): void {
    this.stockTypeField = {};
    this.operatorName = undefined;

    this.currentTabId = this.tabFieldsId;

    this.statusTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'stockTypeStatusName',
          translateKey: this.getTranslateKey('stockTypeStatusName')
        }
      ],
      data: []
    });

    this.statusTableDataSource.dataSelection = [];
    this.currentStatusForm = {};
    this.currentStatusFormIndex = undefined;

    this.ownerDropDown();
    this.showStatusFormPopup = false;
  }
  public openFieldsTab(): void {
    this.currentTabId = this.tabFieldsId;
  }

  public openStatusTab(): void {
    this.currentTabId = this.tabStatusId;
  }
  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const stockTypeContext = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).stockTypeCode;

      this.displayComponentContext(stockTypeContext, this.isCreateOpenMode);

      this.loadStockForm();
    }
  }
  public loadStockForm(): void {
    this.statusTableDataSource.setData([]);
    if (!!this.componentData && !!this.componentData.objectId) {
      const stockId: number = this.serializationService.deserialize(this.componentData.objectId).id;
      this.stockTypeService.findStockFormById(stockId).subscribe(
        (results) => {
          if (results) {
            this.stockTypeField = results;
            // Status tab
            this.statusTableDataSource.addData(results.bidtStockTypeStatus || []);
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadData'));
        }
      );
    }
  }

  public getComponentName(): string {
    return 'StockTypeFormComponent';
  }

  public reloadStockTypeForm(): void {
    this.init();
    this.loadStockForm();
  }

  public editStockTypeForm(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public saveStockTypeForm(): void {
    if (
      this.stockTypeField.stockTypeCode &&
      this.stockTypeField.stockTypeCode.trim().length !== 0 &&
      this.stockTypeField.stockTypeOwner
    ) {
      this.stockTypeField.stockTypeIsValuated = this.stockTypeField.stockTypeIsValuated ? 1 : 0;
      const bidtStockTypeDTO: BidtStockTypeDTO = {
        bidtStockTypeStatus: this.statusTableDataSource.dataSrc,
        id: this.stockTypeField.id,
        stockTypeCode: this.stockTypeField.stockTypeCode,
        stockTypeIsValuated: this.stockTypeField.stockTypeIsValuated,
        stockTypeOwner: this.stockTypeField.stockTypeOwner,
        stockTypeDescription: this.stockTypeField.stockTypeDescription
      };
      const input: SaveCatalogInput = {
        bidtStockTypeDTOAddorUpdateList: bidtStockTypeDTO
      };

      this.showSaveSpinner = true;
      this.catalogService.saveCatalog(input).subscribe(
        (result) => {
          bidtStockTypeDTO.id = result.stockId;
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveStockType'));
          if (!!bidtStockTypeDTO.stockTypeCode) {
            this.displayComponentContext(bidtStockTypeDTO.stockTypeCode, this.isCreateOpenMode);
          }
          this.updateOpenMode(ComponentOpenMode.Write);
          this.componentData.objectId = this.serializationService.serialize(bidtStockTypeDTO);
          this.reloadStockTypeForm();
          this.showSaveSpinner = false;
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveStockType'));
          this.showSaveSpinner = false;
        }
      );
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  public cancelStockTypeForm(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadStockTypeForm();
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  /*******
   * Popup
   *******/

  public addNewStatus(): void {
    this.showStatusFormPopup = true;
    this.currentStatusForm = {};
  }

  public deleteStatus(): void {
    this.statusTableDataSource.deleteDataSelection();
    this.statusTableDataSource.dataSelection = [];
    this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteStatus'));
  }

  public createStatusForm(event: BidtStockTypeStatusDTO): void {
    this.statusTableDataSource.addData([event]);
  }

  public ownerDropDown() {
    this.stockTypeService.getOwnerNameMap().subscribe((results) => {
      this.ownerName = results;
    });
  }
}
