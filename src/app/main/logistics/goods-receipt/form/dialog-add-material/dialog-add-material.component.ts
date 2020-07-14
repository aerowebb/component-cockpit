import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { BireMeasureReferenceConstants } from '../../../../../shared/constants/bire-measure-reference-constants';
import { BireRatingConstants } from '../../../../../shared/constants/bire-rating-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AddReceiptMaterialInput } from '../../../../../shared/types/api-input-types/logistic/add-receipt-material-input.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfItemDTO } from '../../../../../shared/types/api-types/bidt-df-item-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtStockMvtDTO } from '../../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { BidoEquipmentUtils } from '../../../../../shared/utils/bido-equipment-utils';
import { BidoFamilyVariantUtils } from '../../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { LogisticsService } from '../../../logistics.service';
import { DeliveryFolderSearchService } from '../../delivery-folder-search.service';

interface TableBidtStockDTO extends BidtStockMvtDTO {
  id?: number;
  isEditable?: boolean;
  manufacturingBatch?: string;
  manufacturingDate?: Date;
  expirationDate?: Date;
}

@Component({
  selector: 'aw-dialog-add-material',
  templateUrl: './dialog-add-material.component.html',
  styleUrls: ['./dialog-add-material.component.scss']
})
export class DialogAddMaterialComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';

  public static readonly EXISTING_ITEM: string = '0';
  public static readonly NEW_ITEM: string = '1';

  public static readonly CURRENT_PACKAGE: string = '0';
  public static readonly NEW_PACKAGE: string = '1';
  public static readonly WWITHOUT_PACKAGE: string = '2';

  public static readonly ASSET_UNKNOW: string = '0';
  public static readonly ASSET_KNOW: string = '1';

  @Input() private readonly bidtDeliveryFolder: BidtDeliveryFolderDTO;

  @Input() private readonly itemsDtoList: BidtDfItemDTO[];

  @Input() public packageDtoList: BidtPackageDTO[];

  @Output()
  public onCreate: EventEmitter<BidtStockMvtDTO>;

  public article?: string;
  public choiceListItemPackage: LabelValue<string>[];
  public choiceListPackagingNumber: LabelValue<string>[];
  public choiceListPackage: LabelValue<string>[];
  public choiceListItem: LabelValue<string>[];
  public choiceListAsset: LabelValue<string>[];

  public createWithPackage: boolean;
  public isGeneratedPackagingNumber: boolean;
  public isPackageCodeGenerated: boolean;
  public isTracabilityBySN: boolean;
  public isTracabilityByBatchAndSn: boolean;
  public isTracabilityByPackagingBatch: boolean;
  public isTracabilityByBatch: boolean;
  public isExistingItem: boolean;
  public isNotReceiptDone: boolean;
  public isAssetUnknow: boolean;
  public item: BidtDfItemDTO | undefined;
  public itemsList: LabelValue<BidtDfItemDTO>[];
  public packageList: LabelValue<BidtPackageDTO>[];
  public packageDto: BidtPackageDTO | undefined;
  public pnChoose: BirePnDTO | undefined;
  public quantity: number;
  public quantityItem: number;

  public selectedChoicePackagingNumber: string;
  public selectedChoiceItemPackage: string;
  public selectedChoicePackage: string;
  public selectedChoiceItem: string;
  public selectedChoiceAsset: string;

  public assetDialogVisible: boolean;
  public searchPnDialogVisible: boolean;

  public selectedAssetName: string;
  public packagesTypesList: LabelValue<string>[];

  public stockMvtTable: TableBidtStockDTO[];
  public remainingQuantity: number;
  public isNotQuantityOver: boolean;
  public disableButton: boolean;
  public isDraftStatus: boolean;

  public component: typeof DialogAddMaterialComponent;
  public constructor(
    public readonly sessionService: SessionService,
    public readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService,
    private readonly logisticsService: LogisticsService
  ) {
    super(ComponentOpenMode.Read, 'DialogAddMaterialComponent');
    this.component = DialogAddMaterialComponent;
    this.onCreate = new EventEmitter<BidtStockMvtDTO>();
    this.init();
  }

  public ngOnInit(): void {
    this.loadDropDowns();
    this.isDraftStatus = this.bidtDeliveryFolder.dfStatus === AWPropertiesConstants.RECEIPT_FOLDER_STATUS_DRAFT;
  }

  private init(): void {
    this.isExistingItem = true;
    this.choiceListItemPackage = [];
    this.choiceListPackage = [];
    this.choiceListPackagingNumber = [];
    this.choiceListItem = [];
    this.itemsList = [];
    this.resetModelValues();
    this.resetTraceabilityvalues();
  }

  private resetModelValues(): void {
    this.item = undefined;
    this.pnChoose = undefined;
    this.quantity = 1;
    this.isNotQuantityOver = true;
    this.isNotReceiptDone = true;
    this.stockMvtTable = [];
    this.isPackageCodeGenerated = true;
    this.isGeneratedPackagingNumber = true;
    this.disableButton = false;
    this.isAssetUnknow = true;
    this.assetDialogVisible = false;
    this.searchPnDialogVisible = false;
    this.createWithPackage = true;
  }

  private initializeStockMvtTable(): void {
    this.stockMvtTable = [];
    this.stockMvtTable.push(this.getInitialRow());
  }

  private getInitialRow(): TableBidtStockDTO {
    return {
      id: this.stockMvtTable.length,
      stockMvtBatchNumber: undefined,
      stockMvtQuantity: undefined,
      isEditable: true,
      manufacturingBatch: undefined,
      manufacturingDate: undefined,
      expirationDate: undefined,
      stockMvtSn: undefined
    };
  }
  private loadDropDowns() {
    const packageTypes = this.propertiesService.getValue(GenericPropertyConstants.PACKAGE_TYPE_MAP);

    forkJoin({ packageTypes }).subscribe({
      next: (results) => {
        this.packagesTypesList = results.packageTypes;
        this.itemsList = [];
        this.itemsList = this.loadItemsList();
        this.packageList = this.loadPackageList();
        this.getChoiceListPackagingNumber();
        this.getChoiceListItemPackage();
        this.getChoiceListPackage();
        this.getChoiceListItem();
        this.getChoiceListAsset();
      }
    });
  }

  private loadPackageList(): LabelValue<BidtPackageDTO>[] {
    return ListUtils.orEmpty(this.packageDtoList)
      .filter((pack) => !!pack.packageCode)
      .map((bidtPackage: BidtPackageDTO) => {
        const unit: LabelValue<BidtPackageDTO> = {
          label: bidtPackage.packageCode as string,
          value: bidtPackage
        };

        return unit;
      });
  }

  private loadItemsList(): LabelValue<BidtDfItemDTO>[] {
    return ListUtils.orEmpty(this.itemsDtoList)
      .filter((item) => !!item.dfiCode)
      .map((bidtItem: BidtDfItemDTO) => {
        const unit: LabelValue<BidtDfItemDTO> = {
          label: `${bidtItem.dfiCode} : ${bidtItem.birePnPnCode} (${
            (bidtItem.birePn as BirePnDTO).articleDesignation
          })`,
          value: bidtItem
        };

        return unit;
      });
  }

  private getChoiceListPackagingNumber(): void {
    this.choiceListPackagingNumber = this.deliveryFolderSearchService.loadCreationChoiceListPackagingNumber();
    this.setSelectedChoicePackagingNumber();
  }

  private setSelectedChoicePackagingNumber(): void {
    this.selectedChoicePackagingNumber =
      this.choiceListPackagingNumber && this.choiceListPackagingNumber.length
        ? this.choiceListPackagingNumber[0].value
        : '';
  }

  private getChoiceListItemPackage(): void {
    this.choiceListItemPackage = this.deliveryFolderSearchService.loadCreationChoiceList();
    this.selectedChoiceItemPackage =
      this.choiceListItemPackage && this.choiceListItemPackage.length ? this.choiceListItemPackage[0].value : '';
  }

  private getChoiceListPackage(): void {
    this.choiceListPackage = this.deliveryFolderSearchService.loadCreationChoiceListPackageNumber();
    this.selectedChoicePackage =
      this.choiceListPackage && this.choiceListPackage.length ? this.choiceListPackage[0].value : '';
  }

  private getChoiceListItem(): void {
    this.choiceListItem = this.deliveryFolderSearchService.loadCreationChoiceListItem();
    this.selectedChoiceItem = this.choiceListItem && this.choiceListItem.length ? this.choiceListItem[0].value : '';
  }

  private getChoiceListAsset(): void {
    this.choiceListAsset = this.deliveryFolderSearchService.loadCreationAssetChoice();
    this.selectedChoiceAsset = this.choiceListAsset && this.choiceListAsset.length ? this.choiceListAsset[0].value : '';
  }

  public onChangeItem(item: BidtDfItemDTO): void {
    const missingQuantity: number = this.getMissingQuantity();
    this.quantity = this.isDraftStatus ? missingQuantity : missingQuantity > 0 ? 1 : 0;
    this.checkPn(item.birePn);
    this.remainingQuantity = this.quantity;
    this.isNotReceiptDone = this.checkIsNotReceiptdone(item);
    this.isNotQuantityOver = this.checkQuanntityOnSelectedItem(item);
  }

  public checkIsNotReceiptdone(item: BidtDfItemDTO): boolean {
    return item.bidtPackage && item.bidtPackage.packageStatus === AWPropertiesConstants.PACKAGE_STATUS_DELIVERED
      ? false
      : true;
  }

  private resetTraceabilityvalues(): void {
    this.disableButton = true;
    this.isTracabilityByPackagingBatch = false;
    this.isTracabilityBySN = false;
    this.isTracabilityByBatchAndSn = false;
    this.isTracabilityByBatch = false;
    this.isAssetUnknow = true;
  }

  public checkPn(pn: BirePnDTO | undefined) {
    this.initializeStockMvtTable();
    this.resetTraceabilityvalues();
    if (pn) {
      this.article = pn.pnCode as string;
      this.pnChoose = pn;
      switch (pn.traceability) {
        case AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH:
          this.isTracabilityByBatch = true;
          break;
        case AWPropertiesConstants.PN_TRACEABILITY_BY_SN:
          this.isTracabilityBySN = true;
          break;
        case AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH:
          this.isTracabilityByPackagingBatch = true;
          break;
        case AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN:
          this.isTracabilityByBatchAndSn = true;
          break;
        default:
          this.isTracabilityBySN = true;
          break;
      }
    }
  }

  public updateRemainingQuantity(): void {
    if (this.getMissingQuantity() && this.quantity && this.getMissingQuantity() < this.quantity) {
      this.quantity = this.getMissingQuantity();
      this.messageService.showWarningMessage(this.getTranslateKey('warning'));
    } else if (this.quantityItem && this.quantity && this.quantityItem < this.quantity) {
      this.quantity = this.quantityItem;
      this.messageService.showWarningMessage(this.getTranslateKey('warning'));
    }
    const computedQuantity = this.quantity ? this.quantity : this.quantityItem;
    if (this.stockMvtTable.length === 1 && !this.isStockMvtTableComplete(this.stockMvtTable[0])) {
      this.remainingQuantity = computedQuantity;
    } else {
      let totalStockMvtQuantity = 0;
      this.stockMvtTable.forEach((item) => {
        totalStockMvtQuantity += Number(item.stockMvtQuantity || 0);
      });
      this.remainingQuantity = computedQuantity - totalStockMvtQuantity;
      if (
        !this.stockMvtTable.length ||
        this.isStockMvtTableComplete(this.stockMvtTable[this.stockMvtTable.length - 1])
      ) {
        this.addNewStockInTable();
      }
    }
  }

  public openSearchPnDialog(): void {
    this.searchPnDialogVisible = true;
  }

  public getMissingQuantity(): number {
    let missingQuantity = 0;
    if (this.item) {
      const actualQuantity = this.getMaterialTotalQuantityOfItem(this.item);
      missingQuantity = Number(this.item.quantity) - actualQuantity;
    }

    return missingQuantity;
  }

  public checkQuanntityOnSelectedItem(bidtDfItemDTO: BidtDfItemDTO): boolean {
    const actualQuantity = this.getMaterialTotalQuantityOfItem(bidtDfItemDTO);

    return actualQuantity < Number(bidtDfItemDTO.quantity);
  }

  public checkQuantity(): boolean {
    if (this.item) {
      const actualQuantity = this.getMaterialTotalQuantityOfItem(this.item);
      const newQuantity = actualQuantity + this.quantity;

      return newQuantity <= Number(this.item.quantity);
    } else {
      return this.quantity <= this.quantityItem;
    }
  }

  private getMaterialTotalQuantityOfItem(bidtDfItemDTO: BidtDfItemDTO): number {
    let totalQuantity = 0;
    if (bidtDfItemDTO.bidtStockMvts && bidtDfItemDTO.bidtStockMvts.length > 0) {
      bidtDfItemDTO.bidtStockMvts.forEach((mvt) => {
        totalQuantity = totalQuantity + Number(mvt.stockMvtQuantity);
      });
    }

    return totalQuantity;
  }

  public resetChoiceItem(): void {
    this.changeModeItem();
  }

  private changeModeItem(): void {
    this.resetModelValues();
    switch (this.selectedChoiceItem) {
      case this.component.EXISTING_ITEM:
        this.isExistingItem = true;
        this.disableButton = true;
        this.quantityItem = 0;
        break;

      case this.component.NEW_ITEM:
        this.isExistingItem = false;
        this.article = undefined;
        this.disableButton = false;
        this.remainingQuantity = 0;
        this.quantity = 0;
        break;

      default:
        break;
    }
  }

  public resetChoicePackagingnumber(): void {
    this.initializeStockMvtTable();
    this.updateRemainingQuantity();
    this.changeModePackagingNumber();
  }

  private changeModePackagingNumber(): void {
    switch (this.selectedChoicePackagingNumber) {
      case this.component.GENERATE:
        this.isGeneratedPackagingNumber = true;
        break;

      case this.component.ENTER:
        this.isGeneratedPackagingNumber = false;
        break;

      default:
        break;
    }
  }

  public resetChoiceItemPackage(): void {
    this.changeModeItemPackage();
  }

  private changeModeItemPackage(): void {
    switch (this.selectedChoiceItemPackage) {
      case this.component.CURRENT_PACKAGE:
        this.packageDto = undefined;
        this.createWithPackage = true;
        break;

      case this.component.NEW_PACKAGE:
        this.packageDto = {};
        this.createWithPackage = true;
        break;

      case this.component.WWITHOUT_PACKAGE:
        this.packageDto = {};
        this.createWithPackage = false;
        break;

      default:
        break;
    }
  }

  public resetChoicePackage(): void {
    this.changeModePackage();
  }

  private changeModePackage(): void {
    switch (this.selectedChoicePackage) {
      case this.component.GENERATE:
        this.isPackageCodeGenerated = true;
        break;

      case this.component.ENTER:
        this.isPackageCodeGenerated = false;
        break;

      default:
        break;
    }
  }

  public resetChoiceAsset(): void {
    this.isGeneratedPackagingNumber = true;
    this.setSelectedChoicePackagingNumber();
    this.changeModeAsset();
  }

  private changeModeAsset(): void {
    switch (this.selectedChoiceAsset) {
      case this.component.ASSET_UNKNOW:
        this.isAssetUnknow = true;
        break;

      case this.component.ASSET_KNOW:
        this.isAssetUnknow = false;
        break;

      default:
        break;
    }
  }

  public openAssetDialog(): void {
    this.assetDialogVisible = true;
  }

  public onSelectAsset(equipment: BidoEquipmentDTO): void {
    if (equipment.sn) {
      this.stockMvtTable[this.stockMvtTable.length - 1].stockMvtSn = equipment.sn;
    }
    if (equipment.batchNumber) {
      this.stockMvtTable[this.stockMvtTable.length - 1].stockMvtBatchNumber = equipment.batchNumber;
    }
    this.selectedAssetName = BidoEquipmentUtils.createAssetRepresentation(equipment);
  }

  public updateStockMvtTable(): void {
    if (this.stockMvtTable.length > 0) {
      const rowData = this.stockMvtTable[this.stockMvtTable.length - 1];

      if (!this.isStockMvtTableComplete(rowData)) {
        return;
      }
      if (this.isTracabilityBySN || this.isTracabilityByBatchAndSn) {
        rowData.stockMvtQuantity = '1';
      }
      if (this.remainingQuantity < Number(rowData.stockMvtQuantity)) {
        this.messageService.showWarningMessage(this.getTranslateKey('warning'));

        return;
      }

      this.stockMvtTable.pop();
      rowData.isEditable = false;
      this.remainingQuantity = this.remainingQuantity - Number(rowData.stockMvtQuantity);
      this.stockMvtTable.push(rowData);
      this.addNewStockInTable();
    }
  }

  public isAddBtnVisible(): boolean {
    return this.remainingQuantity > 0 && this.stockMvtTable.every((row) => !row.isEditable);
  }

  private addNewStockInTable(): void {
    this.selectedAssetName = '';
    if (this.remainingQuantity > 0) {
      this.disableButton = true;
      this.stockMvtTable.push(this.getInitialRow());
    } else {
      this.disableButton = false;
    }
  }

  private isExpirationDateMandatory(): boolean {
    return !!this.pnChoose && !!this.pnChoose.hasExpirationDate;
  }

  private isStockMvtTableComplete(rowData: TableBidtStockDTO): boolean {
    let complete = false;
    if (this.isTracabilityByBatch) {
      complete =
        rowData.manufacturingBatch &&
        (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
        (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber) &&
        rowData.stockMvtQuantity
          ? true
          : false;
    } else if (this.isTracabilityBySN) {
      complete = ObjectUtils.isDefined(rowData.stockMvtSn);
    } else if (this.isTracabilityByPackagingBatch) {
      complete =
        rowData.stockMvtQuantity &&
        (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
        (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber)
          ? true
          : false;
    } else if (this.isTracabilityByBatchAndSn) {
      complete =
        rowData.stockMvtSn &&
        (!this.isExpirationDateMandatory() || !!rowData.expirationDate) &&
        (this.isGeneratedPackagingNumber || rowData.stockMvtBatchNumber)
          ? true
          : false;
    }

    return complete;
  }

  public validateAssetListForPackage() {
    const input: AddReceiptMaterialInput[] = [];
    this.stockMvtTable.forEach((mvtObject) => {
      input.push(this.updateAssetRequestBody(mvtObject));
    });
    this.logisticsService.addReceiptMaterialList(input).subscribe((res) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreate'));
      this.onCreate.emit((res && res.length && res[0]) || undefined);
      this.closeDialog();
    });
  }

  private updateAssetRequestBody(mvtObject?: TableBidtStockDTO): AddReceiptMaterialInput {
    const receiptMaterialObject: AddReceiptMaterialInput = {
      bidtDeliveyFolder: this.bidtDeliveryFolder,
      bidtDfItem: this.item ? this.item : undefined,
      bidtStockMvt: this.getBidtStockMvtObject(mvtObject),
      birePnDTO: this.pnChoose ? this.pnChoose : undefined,
      createWithPackage: this.createWithPackage,
      isExistingItem: this.isExistingItem,
      isPackageCodeGenerated: this.isPackageCodeGenerated,
      packageDTO: this.packageDto,
      quantityItem: this.quantity ? this.quantity : this.quantityItem
    };
    if (mvtObject) {
      receiptMaterialObject.manufacturingBatchNumber = mvtObject.manufacturingBatch
        ? mvtObject.manufacturingBatch
        : undefined;
      receiptMaterialObject.manufacturingDate = mvtObject.manufacturingDate ? mvtObject.manufacturingDate : undefined;
      receiptMaterialObject.expirationDate = mvtObject.expirationDate ? mvtObject.expirationDate : undefined;
    }

    return receiptMaterialObject;
  }

  private getBidtStockMvtObject(bidtObject?: TableBidtStockDTO): BidtStockMvtDTO {
    const stockMvtObject: BidtStockMvtDTO = {};
    if (bidtObject) {
      stockMvtObject.stockMvtSn = bidtObject.stockMvtSn ? bidtObject.stockMvtSn : undefined;
      stockMvtObject.stockMvtQuantity = bidtObject.stockMvtQuantity
        ? bidtObject.stockMvtQuantity.toString()
        : undefined;
      stockMvtObject.stockMvtBatchNumber = bidtObject.stockMvtBatchNumber ? bidtObject.stockMvtBatchNumber : undefined;
    }

    return stockMvtObject;
  }

  public deleteStockItem(row: TableBidtStockDTO): void {
    this.stockMvtTable = this.stockMvtTable.filter((data) => row.id !== data.id);

    this.updateListId();
    this.updateRemainingQuantity();
  }

  private updateListId(): void {
    let newId = 0;
    this.stockMvtTable.forEach((row) => {
      row.id = newId;
      newId++;
    });
  }

  public fillByBatch(row: TableBidtStockDTO, batchNumber: string | undefined, isManufacturingBatchType: boolean): void {
    if (this.pnChoose && !StringUtils.isNullOrEmpty(batchNumber)) {
      const logUnknownEquipment = () => {
        this.messageService.showWarningMessage(
          this.getTranslateKey(
            isManufacturingBatchType ? 'warningOnUnknownBatchNumber' : 'warningOnUnknownPackagingNumber'
          )
        );
      };

      const existingRow =
        isManufacturingBatchType &&
        this.stockMvtTable
          .slice(0, -1)
          .find((r) => !!r.manufacturingBatch && r.manufacturingBatch === row.manufacturingBatch);

      if (!!existingRow) {
        row.manufacturingDate = existingRow.manufacturingDate;
        row.expirationDate = existingRow.expirationDate;

        if (!isManufacturingBatchType) {
          row.stockMvtQuantity = existingRow.stockMvtQuantity;
        }
      } else {
        this.logisticsService
          .findEquipmentByPnAndBatchNumber({
            pnCode: this.pnChoose.pnCode,
            batchNumber
          })
          .subscribe((equipment) => {
            row.manufacturingDate = undefined;
            row.expirationDate = undefined;
            row.stockMvtQuantity = undefined;
            row.stockMvtSn = undefined;

            if (!!equipment) {
              if (
                this.isTracabilityByBatchAndSn ||
                (isManufacturingBatchType &&
                  equipment.batchType === AWPropertiesConstants.BATCH_TYPE_MANUFACTURING_KEY) ||
                (!isManufacturingBatchType && equipment.batchType === AWPropertiesConstants.BATCH_TYPE_PACKAGING_KEY)
              ) {
                row.manufacturingDate = equipment.manufacturingDate;

                if (!isManufacturingBatchType) {
                  row.stockMvtQuantity = ObjectUtils.isDefined(equipment.quantity)
                    ? NumberUtils.toString(NumberUtils.roundNumber(equipment.quantity as number))
                    : undefined;
                }

                if (this.isTracabilityByBatchAndSn) {
                  row.stockMvtSn = equipment.sn;
                }

                if (
                  !isManufacturingBatchType &&
                  equipment.batchType === AWPropertiesConstants.BATCH_TYPE_PACKAGING_KEY &&
                  ObjectUtils.isDefined(equipment.equEquipmentCode)
                ) {
                  this.logisticsService.findEquipment({ equipmentCode: equipment.equEquipmentCode }).subscribe({
                    next: (fatherEquipment) => {
                      row.manufacturingBatch = fatherEquipment.batchNumber;
                    }
                  });
                }

                if (!this.isTracabilityByBatchAndSn && !this.isTracabilityByPackagingBatch) {
                  // Expiration date
                  this.logisticsService
                    .findBidoEquipmentCounter({
                      equipmentCode: equipment.equipmentCode,
                      counterCode: BireMeasureReferenceConstants.BIRE_MEASURE_REFERENCE_COUNTER_CODE_CALENDAR_LIMIT,
                      familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
                        equipment.familyVariantCode
                      ),
                      ratingCode: BireRatingConstants.DEFAULT
                    })
                    .subscribe((bidoEquipmentCounter) => {
                      if (bidoEquipmentCounter) {
                        row.expirationDate = bidoEquipmentCounter.dateLimit;
                      }
                    });
                }
              }
            } else {
              logUnknownEquipment();
            }
          });
      }
    }
  }

  public fillBySn(row: TableBidtStockDTO): void {
    if (this.pnChoose) {
      this.logisticsService
        .findEquipmentByPnAndSn({
          pnCode: this.pnChoose.pnCode,
          sn: row.stockMvtSn
        })
        .subscribe((equipment) => {
          if (equipment) {
            row.manufacturingDate = equipment.manufacturingDate;
            row.stockMvtBatchNumber = equipment.logisticsSequenceCode;
            row.stockMvtQuantity = ObjectUtils.isDefined(equipment.quantity)
              ? NumberUtils.toString(NumberUtils.roundNumber(equipment.quantity as number))
              : undefined;
          } else {
            row.manufacturingDate = undefined;
            row.stockMvtBatchNumber = undefined;
            row.stockMvtQuantity = undefined;

            this.messageService.showWarningMessage(this.getTranslateKey('warningOnUnknownSn'));
          }
        });
    }
  }
}
