import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtDfTypeDTO } from '../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtSiteDTO } from '../../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtTransferOrderDTO } from '../../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../../shared/types/api-types/bire-pn-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { LogisticalUtils } from '../../../../../shared/utils/logistic-utils';
import { NumberUtils } from '../../../../../shared/utils/number-utils';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../../logistics.service';
import { CreateTransferOrderInput } from '../../../material-request-management/form/material-request-management-form.component';
import { TransferOrderService } from '../../shared/transfer-order-service';

@Component({
  selector: 'aw-transfer-order-popup',
  templateUrl: './transfer-order-popup.component.html',
  styleUrls: ['./transfer-order-popup.component.scss']
})
export class TransferOrderPopupComponent extends DialogComponent implements OnInit {
  public static readonly RECIPIENT_INTERNAL: number = 0;
  public static readonly RECIPIENT_EXTERNAL: number = 1;

  public readonly MONO_ARTICLE: number = 0;
  public readonly MULTI_ARTICLE: number = 1;

  @Input()
  public createTransferOrderInput: CreateTransferOrderInput;

  @Input()
  public pn: BirePnDTO | undefined;

  @Output()
  public readonly onValidate: EventEmitter<BidtTransferOrderDTO>;

  public readonly awPropertiesConstants: typeof AWPropertiesConstants;
  public readonly component: typeof TransferOrderPopupComponent;
  public bidtTransferOrderDTOInput: BidtTransferOrderDTO;
  public partDTO: BirePnDTO;
  public criticityList: LabelValue<string>[];
  public whType: string;
  public shopList: SelectItem[];
  public warehouseList: LabelValue<number>[];
  public unitList: LabelValue<string>[];
  public hasBeenCalculated: boolean;
  public showQuickSearchMaterialPopup: boolean;
  public logisticsTypeList: SelectItem[];
  public transferOrderFlowList: SelectItem[];
  public unitOfIssueOptions: LabelValue<string>[];
  public maxQuantity: number;

  public selectedShipperWarehouseCategory: string | undefined;
  public selectedRecipientWarehouseCategory: string | undefined;
  public selectedFinalRecipientCustomerCode: string | undefined;
  public selectedRecipientSite: number | undefined;

  public articleNumberType: LabelValue<number>[];
  public selectedArticleNumber: number | undefined;

  public selectedRecipientWarehouse: number | undefined;
  public warehouseCategories: LabelValue<string>[];
  public selectedShipperSite: number | undefined;
  public shipperWarehouses: LabelValue<number>[];
  public selectedShipperWarehouse: number | undefined;
  public selectedTransferOrderType: BidtDfTypeDTO | undefined;
  public typeList: LabelValue<BidtDfTypeDTO>[];
  public showPartnerDialogInput: boolean;

  public recipientWarehouses: LabelValue<number>[];

  public recipientCustomerDialogVisible: boolean;

  public sitesShipment: LabelValue<number>[];
  public sitesRecipient: LabelValue<number>[];
  public quantity: string | undefined;
  public isMainWarehouse: boolean;
  public formattedRequestedPotential: string;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly logisticsService: LogisticsService,
    public readonly translateService: TranslateService,
    private readonly transferOrderService: TransferOrderService,
    private readonly dfSearchService: DeliveryFolderSearchService
  ) {
    super(ComponentOpenMode.Read, 'TransferOrderPopupComponent');

    this.awPropertiesConstants = AWPropertiesConstants;
    this.whType = AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE;

    this.onValidate = new EventEmitter<BidtTransferOrderDTO>();
    this.component = TransferOrderPopupComponent;

    this.init();
  }

  public ngOnInit(): void {
    this.loadDropdown();
    this.partDTO = this.pn || {};

    if (this.createTransferOrderInput) {
      this.autoFillFields();
    }
  }

  private autoFillFields(): void {
    // fill expected date if defined
    if (this.createTransferOrderInput.procurmentRequest.requestedDate) {
      this.bidtTransferOrderDTOInput.receiptExpectedDate = moment(
        this.createTransferOrderInput.procurmentRequest.requestedDate
      )
        .subtract(1, 'days')
        .toDate();
    }

    if (this.createTransferOrderInput.procurmentRequest.requestedPotential) {
      this.formattedRequestedPotential = NumberUtils.roundNumber(
        NumberUtils.fromString(this.createTransferOrderInput.procurmentRequest.requestedPotential),
        2
      ).toString();
    }

    // fill criticality
    this.bidtTransferOrderDTOInput.criticality = this.createTransferOrderInput.procurmentRequest.criticality;

    // fill receipt
    this.selectedRecipientSite = this.createTransferOrderInput.procurmentRequest.bidtSiteReceipt
      ? this.createTransferOrderInput.procurmentRequest.bidtSiteReceipt.siteId
      : undefined;
    this.selectedRecipientWarehouseCategory = this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt
      ? this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt.whCategory
      : undefined;
    this.selectedRecipientWarehouse = this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt
      ? this.createTransferOrderInput.procurmentRequest.bidtWarehouseReceipt.wareHouseId
      : undefined;

    if (this.selectedRecipientSite) {
      this.loadWareHouses(
        this.selectedRecipientSite,
        this.selectedRecipientWarehouseCategory as string,
        true
      ).subscribe({
        next: (warehouses) => {
          this.recipientWarehouses = warehouses;

          if (this.recipientWarehouses && this.recipientWarehouses.length > 0) {
            this.selectedRecipientWarehouse = this.recipientWarehouses[0].value;
          } else {
            this.isMainWarehouse = false;
          }
        }
      });
    }

    // fill quantity
    this.maxQuantity = Math.floor(this.createTransferOrderInput.notServedQuantity);
    this.quantity = Math.floor(this.createTransferOrderInput.notServedQuantity).toString();
  }

  public changeQuantity(): void {
    if (Number(this.quantity) > this.maxQuantity) {
      this.quantity = this.maxQuantity.toString();
      this.messageService.showWarningMessage(this.getTranslateKey('warningQuantity'));
    }
  }

  private init(): void {
    this.bidtTransferOrderDTOInput = {};
    this.partDTO = {};
    this.criticityList = [];
    this.logisticsTypeList = [];
    this.warehouseList = [];
    this.unitList = [];
    this.sitesShipment = [];
    this.sitesRecipient = [];
    this.recipientWarehouses = [];
    this.warehouseCategories = [];
    this.shipperWarehouses = [];
    this.articleNumberType = [];

    this.recipientCustomerDialogVisible = false;
    this.selectedFinalRecipientCustomerCode = undefined;
    this.selectedShipperSite = undefined;
    this.selectedShipperWarehouse = undefined;
    this.selectedShipperWarehouseCategory = undefined;
    this.selectedRecipientSite = undefined;
    this.selectedRecipientWarehouse = undefined;
    this.selectedRecipientWarehouseCategory = undefined;
    this.selectedArticleNumber = undefined;
    this.showPartnerDialogInput = false;
    this.isMainWarehouse = true;

    this.loadLogisticType();
    this.loadCriticity();
    this.loadSites();
    this.loadWarehouseCategories();
    this.loadArticleNumberType();
    this.bidtTransferOrderDTOInput.torStatus = AWPropertiesConstants.TRANSFER_ORDER_STATUS_PLANNED;
  }

  private loadArticleNumberType() {
    this.articleNumberType = [
      {
        label: this.translateService.instant(this.getComponentName() + '.monoArticle') as string,
        value: this.MONO_ARTICLE
      },
      {
        label: this.translateService.instant(this.getComponentName() + '.multiArticle') as string,
        value: this.MULTI_ARTICLE
      }
    ];
    this.selectedArticleNumber = this.articleNumberType[0].value;
  }

  public clearPnCodeClass(): void {
    this.partDTO.pnCode = undefined;
    this.unitList = [];
  }

  /***************************************
   * Load Dropdowns
   ***************************************/
  private loadDropdown() {
    this.transferOrderService.fetchTypeObjectList().subscribe((types) => {
      this.typeList = types.sort((a, b) => a.label.localeCompare(b.label));
      // fill type
      if (this.createTransferOrderInput) {
        this.selectedTransferOrderType = this.typeList.filter(
          (type) => type.value.id === Number(AWPropertiesConstants.TRANSFER_ORDER_TYPE_INTER_SITE)
        )[0].value;
      }
    });
  }

  /************************************
   * Load Warehouse List on change
   ************************************/
  public loadWareHouseList(): void {
    this.warehouseList = [];
    this.shopList = [];
  }

  public onClickSearchMaterial(): void {
    if (this.hasBeenCalculated) {
      return;
    }
    this.showQuickSearchMaterialPopup = true;
  }

  public setSelectedMaterial(event: BirePnDTO): void {
    this.showQuickSearchMaterialPopup = false;
    this.partDTO = event;

    this.onChangePn();
  }

  public loadLogisticType() {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe((res) => {
      if (res && res.length) {
        this.logisticsTypeList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.whType = this.logisticsTypeList[0].value as string;
      }
    });
  }

  public loadCriticity() {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP).subscribe((res) => {
      if (res && res.length) {
        this.criticityList = ListUtils.orEmpty(res);
        this.criticityList = LogisticalUtils.sortCriticities(this.criticityList);
      }
    });
  }

  public onChangePn(): void {
    if (this.partDTO.pnCode) {
      this.loadUnits(this.partDTO.pnCode);
    }
  }

  private loadUnits(pnCode: string) {
    if (this.partDTO.pnCode) {
      this.logisticsService.findBidoCounterReferencesByPnCode({ pnCode }).subscribe({
        next: (counterReferences) => {
          this.unitList = counterReferences
            .map((counterReference) => {
              return {
                label: `${counterReference.unitCode} (${counterReference.counterCode})`,
                value: counterReference.counterCode as string
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));
        }
      });
    }
  }

  private loadWarehouseCategories(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe({
      next: (warehouseCategories) => {
        this.warehouseCategories = ListUtils.orEmpty(warehouseCategories).sort((s1, s2) =>
          s1.value.localeCompare(s2.value)
        );

        const warehouseCategory = this.warehouseCategories.length > 0 ? this.warehouseCategories[0].value : undefined;
        this.selectedRecipientWarehouseCategory = warehouseCategory;
        this.selectedShipperWarehouseCategory = warehouseCategory;
      }
    });
  }

  public openRecipientCustomerDialog() {
    this.recipientCustomerDialogVisible = true;
  }

  public onSelectRecipientCustomer(customer: BidoCustomerDTO): void {
    this.selectedFinalRecipientCustomerCode = customer.customerCode;
  }

  public unselectFinalRecipientCustomer(): void {
    this.selectedFinalRecipientCustomerCode = undefined;
  }

  public onChangeShipperSite(): void {
    this.onChangeShipperWarehouseCategory();
    if (
      !!this.selectedTransferOrderType &&
      this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY
    ) {
      this.selectedRecipientSite = this.selectedShipperSite;
      this.onChangeRecipientSite();
    }
    if (
      !!this.selectedTransferOrderType &&
      this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY
    ) {
      if (this.selectedShipperSite === this.selectedRecipientSite) {
        this.selectedRecipientSite = undefined;
        this.onChangeRecipientSite();
      }
      this.sitesRecipient = this.sitesShipment;
      this.sitesRecipient = this.sitesShipment.filter((site) => site.value !== this.selectedShipperSite);
    }
  }

  public onChangeShipperWarehouseCategory(): void {
    this.unselectShipperWarehouse();

    if (this.selectedShipperSite) {
      this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory as string, false).subscribe({
        next: (warehouses) => {
          this.shipperWarehouses = warehouses;
        }
      });
    }
  }

  private unselectShipperWarehouse(): void {
    this.shipperWarehouses = [];
    this.selectedShipperWarehouse = undefined;
  }

  private unselectRecipientWarehouse(): void {
    this.recipientWarehouses = [];
    this.selectedRecipientWarehouse = undefined;
  }

  public onChangeRecipientSite(): void {
    this.onChangeRecipientWarehouseCategory();
  }

  public onChangeRecipientWarehouseCategory(): void {
    this.unselectRecipientWarehouse();

    if (this.selectedRecipientSite) {
      this.loadWareHouses(
        this.selectedRecipientSite,
        this.selectedRecipientWarehouseCategory as string,
        false
      ).subscribe({
        next: (warehouses) => {
          this.recipientWarehouses = warehouses;
        }
      });
    }
  }

  private loadWareHouses(site: number, warehouseCategory: string, onlyMain: boolean): Observable<LabelValue<number>[]> {
    return this.dfSearchService.getWarehousesBySiteId(site).pipe(
      map((warehouses: BidtWarehouseDTO[]) => {
        if (onlyMain) {
          return ListUtils.orEmpty(warehouses)
            .filter(
              (warehouse) =>
                warehouse.whCategory === warehouseCategory &&
                warehouse.whType === AWPropertiesConstants.MM_WAREHOUSE_TYPE_MAIN
            )
            .map((warehouse) => {
              return {
                label: `${warehouse.whCode} - ${warehouse.whName}`,
                value: warehouse.wareHouseId as number
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));
        } else {
          return ListUtils.orEmpty(warehouses)
            .filter((warehouse) => warehouse.whCategory === warehouseCategory)
            .map((warehouse) => {
              return {
                label: `${warehouse.whCode} - ${warehouse.whName}`,
                value: warehouse.wareHouseId as number
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));
        }
      })
    );
  }

  private loadSites(): void {
    this.dfSearchService.findAllBireSite().subscribe({
      next: (sitesShipment: BidtSiteDTO[]) => {
        this.sitesShipment = ListUtils.orEmpty(sitesShipment)
          .map((site) => {
            return {
              label: `${site.siteCode} - ${site.siteName}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
        this.sitesRecipient = this.sitesShipment;
        if (
          this.createTransferOrderInput &&
          this.createTransferOrderInput.procurmentRequest.bidtSiteByBidtSiteIssueId
        ) {
          this.sitesShipment = this.sitesShipment.filter(
            (site) => site.value !== this.createTransferOrderInput.procurmentRequest.bidtSiteByBidtSiteIssueId
          );
        }
      }
    });
  }

  public canValidate() {
    return (
      this.selectedTransferOrderType &&
      ((this.selectedArticleNumber === this.MONO_ARTICLE && this.partDTO.pnCode && this.quantity) ||
        this.selectedArticleNumber === this.MULTI_ARTICLE) &&
      this.bidtTransferOrderDTOInput.receiptExpectedDate &&
      this.bidtTransferOrderDTOInput.criticality &&
      this.selectedShipperSite &&
      this.selectedShipperWarehouse &&
      ((this.selectedRecipientSite && this.selectedRecipientWarehouse) || this.selectedFinalRecipientCustomerCode)
    );
  }

  public validate(): void {
    const input: BidtTransferOrderDTO = {
      bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
      bidoCustomerByFkBidtTraTorReceiBidoCusCustomerCode: this.selectedFinalRecipientCustomerCode,
      bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
      bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
      bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
      torType:
        this.selectedTransferOrderType && this.selectedTransferOrderType.id
          ? this.selectedTransferOrderType.id.toString()
          : undefined,
      torStatus: this.bidtTransferOrderDTOInput.torStatus,
      criticality: this.bidtTransferOrderDTOInput.criticality,
      receiptExpectedDate: this.bidtTransferOrderDTOInput.receiptExpectedDate,
      bidtProcReqItemId: this.createTransferOrderInput ? this.createTransferOrderInput.procReqItem.id : undefined,
      bidtProcReqItem: this.createTransferOrderInput ? this.createTransferOrderInput.procReqItem : undefined,

      bidtTorItems: [
        {
          birePnPnCode: this.partDTO.pnCode,
          quantity: Number(this.quantity)
        }
      ]
    };

    this.logisticsService.createTransferOrder(input).subscribe((res) => {
      this.onValidate.emit(res);
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreate'));

      this.closeDialog();
    });
  }

  public onSelectTranferType(): void {
    this.sitesRecipient = this.sitesShipment;
    if (!!this.selectedTransferOrderType) {
      if (this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY) {
        this.bidtTransferOrderDTOInput.receiptExpectedDate = new Date();
        if (!!this.selectedShipperSite) {
          this.selectedRecipientSite = this.selectedShipperSite;
          this.onChangeRecipientSite();
        }
      }

      this.showPartnerDialogInput =
        this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY ||
        this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY
          ? false
          : true;

      if (this.selectedTransferOrderType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY) {
        this.selectedRecipientWarehouseCategory = AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE;
        if (!!this.selectedShipperSite) {
          if (this.selectedRecipientSite === this.selectedShipperSite) {
            this.selectedRecipientSite = undefined;
            this.onChangeRecipientSite();
          }
          this.sitesRecipient = this.sitesShipment.filter((site) => site.value !== this.selectedShipperSite);
        }
      }
    } else {
      this.showPartnerDialogInput = false;
    }
  }
}
