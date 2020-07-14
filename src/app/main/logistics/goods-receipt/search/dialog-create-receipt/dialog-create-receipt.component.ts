import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../../shared/pipes/extract-translation.pipe';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { LogisticsService } from '../../../logistics.service';
import { DeliveryFolderSearchService } from '../../delivery-folder-search.service';

export enum ComponentContext {
  LOCALE,
  EXTERNAL
}

@Component({
  selector: 'aw-dialog-create-receipt',
  templateUrl: './dialog-create-receipt.component.html',
  styleUrls: ['./dialog-create-receipt.component.scss']
})
export class DialogCreateReceiptComponent extends DialogComponent {
  @Input()
  public readonly contextComponent: number;

  @Output()
  public readonly onValidate: EventEmitter<BidtDeliveryFolderDTO>;

  public readonly componentContext: typeof ComponentContext;
  public criticalities: LabelValue<string | undefined>[];
  public dfTypes: LabelValue<BidtDfTypeDTO>[];
  public recipientWarehouses: LabelValue<number>[];
  public shipperWarehouses: LabelValue<number>[];
  public sites: LabelValue<number>[];
  public warehouseCategories: LabelValue<string>[];

  public selectedCriticality: string | undefined;
  public selectedDfType: BidtDfTypeDTO | undefined;
  public selectedPlannedDate: Date | undefined;
  public selectedRecipientSite: number | undefined;
  public selectedRecipientWarehouse: number | undefined;
  public selectedRecipientWarehouseCategory: string | undefined;
  public selectedShipperSite: number | undefined;
  public selectedShipperWarehouse: number | undefined;
  public selectedShipperWarehouseCategory: string | undefined;
  public showPartnerDropdown: boolean;
  public businessPartnerList: SelectItem[];
  public bidoCustomerReceiver: BidoCustomerDTO;
  public bidoCustomerSender: BidoCustomerDTO;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly dfSearchService: DeliveryFolderSearchService,
    private readonly logisticsService: LogisticsService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'DialogCreateReceiptComponent');
    this.componentContext = ComponentContext;
    this.onValidate = new EventEmitter<BidtDeliveryFolderDTO>();

    this.init();
    this.loadSites();
    this.loadWarehouseCategories();
  }

  ///////////////////////////////////////////////////////////////////////////////

  public canValidate(): boolean {
    return this.selectedDfType &&
      (this.selectedRecipientWarehouse || (this.bidoCustomerReceiver && this.bidoCustomerReceiver.customerCode)) &&
      (this.selectedShipperWarehouse || (this.bidoCustomerSender && this.bidoCustomerSender.customerCode)) &&
      this.selectedRecipientWarehouse !== this.selectedShipperWarehouse
      ? true
      : false;
  }

  public isSitesOk(): boolean {
    if (
      this.selectedDfType &&
      this.selectedDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY
    ) {
      return this.selectedRecipientSite === this.selectedShipperSite;
    } else if (
      this.selectedDfType &&
      this.selectedDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY
    ) {
      return this.selectedRecipientSite !== this.selectedShipperSite;
    } else {
      return true;
    }
  }

  public onChangeRecipientSite(): void {
    this.onChangeRecipientWarehouseCategory();
  }

  public onChangeRecipientWarehouseCategory(): void {
    this.unselectRecipientWarehouse();

    if (this.selectedRecipientSite) {
      this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.recipientWarehouses = warehouses;
        }
      });
    }
  }

  public onChangeShipperSite(): void {
    this.onChangeShipperWarehouseCategory();
  }

  public onChangeShipperWarehouseCategory(): void {
    this.unselectShipperWarehouse();

    if (this.selectedShipperSite) {
      this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.shipperWarehouses = warehouses;
        }
      });
    }
  }

  public validate(): void {
    const input: BidtDeliveryFolderDTO = {
      bidtDfTypeId: this.selectedDfType && this.selectedDfType.id,
      bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
      bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
      bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
      bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
      criticality: this.selectedCriticality,
      plannedDate: this.selectedPlannedDate,
      bidoCustomerReceiver: this.bidoCustomerReceiver,
      bidoCustomerSender: this.bidoCustomerSender
    };
    this.logisticsService.addOrUpdateReceiptFolder(input).subscribe((res) => {
      this.onValidate.emit(res);
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreate'));

      this.closeDialog();
    });
  }

  ///////////////////////////////////////////////////////////////////////////////

  private init(): void {
    this.criticalities = [];
    this.dfTypes = [];
    this.recipientWarehouses = [];
    this.shipperWarehouses = [];
    this.sites = [];
    this.warehouseCategories = [];
    this.bidoCustomerReceiver = {};

    this.selectedCriticality = AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE;
    this.selectedDfType = undefined;
    this.selectedPlannedDate = new Date();
    this.selectedRecipientSite = undefined;
    this.selectedRecipientWarehouse = undefined;
    this.selectedRecipientWarehouseCategory = undefined;
    this.selectedShipperSite = undefined;
    this.selectedShipperWarehouse = undefined;
    this.selectedShipperWarehouseCategory = undefined;
    this.showPartnerDropdown = false;
    this.businessPartnerList = [];

    this.loadCriticalities();
    this.loadDfTypes();
    this.loadSites();
    this.loadWarehouseCategories();
    this.loadBusinessPartnerList();
  }

  private loadCriticalities(): void {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP).subscribe({
      next: (criticalities) => {
        this.criticalities = criticalities.map((criticality) => {
          return {
            label: criticality.label,
            value: criticality.value
          };
        });
      }
    });
  }

  private loadDfTypes(): void {
    this.logisticsService.findReceiptDfTypes().subscribe({
      next: (dfTypes) => {
        if (this.contextComponent === this.componentContext.LOCALE) {
          this.dfTypes = ListUtils.orEmpty(dfTypes)
            .filter((dfType) => !StringUtils.isNullOrEmpty(dfType.dftDesignation))
            .filter((dfType) => dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY)
            .map((dfType) => {
              return {
                label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
                value: dfType
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));

          this.selectedDfType = this.dfTypes.length === 1 ? this.dfTypes[0].value : undefined;
        } else {
          this.dfTypes = ListUtils.orEmpty(dfTypes)
            .filter((dfType) => !StringUtils.isNullOrEmpty(dfType.dftDesignation))
            .filter(
              (dfType) =>
                dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY ||
                dfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_EXTERNAL_KEY
            )
            .map((dfType) => {
              return {
                label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
                value: dfType
              };
            })
            .sort((s1, s2) => s1.label.localeCompare(s2.label));

          this.selectedDfType = this.dfTypes.length === 1 ? this.dfTypes[0].value : undefined;
        }
      }
    });
  }

  private loadBusinessPartnerList(): void {
    this.logisticsService.findAllBidoCustomer().subscribe((results) => {
      this.businessPartnerList = ListUtils.orEmpty(results)
        .filter((customer) => !!customer.customerCode)
        .map((customer) => {
          return {
            label: StringUtils.isNullOrEmpty(customer.customerName)
              ? customer.customerCode
              : `${customer.customerName} (${customer.customerCode})`,
            value: customer
          };
        });
    });
  }

  public onSelectedDfTypeChange(): void {
    this.showPartnerDropdown =
      (this.selectedDfType &&
        this.selectedDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTRA_SITE_KEY) ||
      (this.selectedDfType &&
        this.selectedDfType.transferType === AWPropertiesConstants.MM_TRANSFER_TYPE_INTER_SITE_KEY)
        ? false
        : true;
  }

  private loadSites(): void {
    this.dfSearchService.findAllSiteList().subscribe({
      next: (sites) => {
        this.sites = ListUtils.orEmpty(sites)
          .map((site) => {
            return {
              label: `${site.siteCode} - ${site.siteName}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
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

  private loadWareHouses(site: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.dfSearchService.getWarehousesBySiteId(site).pipe(
      map((warehouses) => {
        return ListUtils.orEmpty(warehouses)
          .filter((warehouse) => warehouse.whCategory === warehouseCategory)
          .map((warehouse) => {
            return {
              label: `${warehouse.whCode} - ${warehouse.whName}`,
              value: warehouse.wareHouseId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      })
    );
  }

  private unselectRecipientWarehouse(): void {
    this.recipientWarehouses = [];
    this.selectedRecipientWarehouse = undefined;
  }

  private unselectShipperWarehouse(): void {
    this.shipperWarehouses = [];
    this.selectedShipperWarehouse = undefined;
  }
}
