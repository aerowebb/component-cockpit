import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../../shared/pipes/extract-translation.pipe';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { AddShipmentPackageInput } from '../../../../../shared/types/api-input-types/logistic/add-shipment-package-input.interface';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDfTypeDTO } from '../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtPackageDTO } from '../../../../../shared/types/api-types/bidt-package-dto.interface';
import { BidtPackageTypeDTO } from '../../../../../shared/types/api-types/bidt-package-type-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { GoodsReceiptFormService } from '../../../goods-receipt/form/goods-receipt-form.service';
import { LogisticsService } from '../../../logistics.service';
import { StockMovementTableInterface } from '../form.component';

@Component({
  selector: 'aw-dialog-create-shipment-folder',
  templateUrl: './dialog-create-shipment-folder.component.html'
})
export class DialogCreateShipmentFolderComponent extends DialogComponent implements OnInit {
  public static readonly GENERATE: string = '0';
  public static readonly ENTER: string = '1';

  public static readonly NEW_PACKAGE: string = '0';
  public static readonly WITHOUT_PACKAGE: string = '1';

  public static readonly ROOTS_VALUE: string = '3';

  @Input()
  public readonly movementStock: StockMovementTableInterface;

  @Output()
  public readonly onValidate: EventEmitter<AddShipmentPackageInput>;

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
  public bidoCustomerReceiver?: BidoCustomerDTO;
  public bidoCustomerSender?: BidoCustomerDTO;
  public showPartnerDropdown: boolean;
  public businessPartnerList: SelectItem[];

  // package variables
  public choiceList: LabelValue<string>[];
  public selectedChoice: string;
  public packagesTypesList: LabelValue<BidtPackageTypeDTO>[];
  public isGenerated: boolean;
  public externalPackageCode: string;
  public newPackageList: LabelValue<string>[];
  public selectedChoiceNewPackage: string;
  public createWithPackage: boolean;

  public unitLengthList: LabelValue<string>[];
  public unitWeightList: LabelValue<string>[];
  public packageInput: BidtPackageDTO;
  public disableLength: boolean;
  public disableWidth: boolean;
  public disableHeight: boolean;
  public selectedPackageType: BidtPackageTypeDTO;

  public component: typeof DialogCreateShipmentFolderComponent;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly dfSearchService: DeliveryFolderSearchService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly goodsReceiptFormService: GoodsReceiptFormService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService
  ) {
    super(ComponentOpenMode.Read, 'DialogCreateShipmentFolderComponent');
    this.component = DialogCreateShipmentFolderComponent;
    this.onValidate = new EventEmitter<AddShipmentPackageInput>();

    this.init();
    this.loadSites();
    this.loadWarehouseCategories();
  }

  public ngOnInit(): void {
    this.packageInput = {};
    this.disableLength = false;
    this.disableWidth = false;
    this.disableHeight = false;
    if (this.movementStock._stockMvt) {
      this.selectedShipperSite = this.movementStock._stockMvt.bidtSiteByBidtSiteIssueId
        ? this.movementStock._stockMvt.bidtSiteByBidtSiteIssueId
        : undefined;
      this.selectedShipperWarehouseCategory = this.movementStock._stockMvt.bidtWarehouseIssue
        ? this.movementStock._stockMvt.bidtWarehouseIssue.whCategory
        : undefined;
      this.selectedShipperWarehouse = this.movementStock._stockMvt.bidtWarehouseByBidtWarehouseIssueId
        ? this.movementStock._stockMvt.bidtWarehouseByBidtWarehouseIssueId
        : undefined;
      this.selectedRecipientSite = this.movementStock._finalSite ? this.movementStock._finalSite.siteId : undefined;
      this.selectedRecipientWarehouseCategory = this.movementStock._finalWarehouse
        ? this.movementStock._finalWarehouse.whCategory
        : undefined;
      this.selectedRecipientWarehouse = this.movementStock._finalWarehouse
        ? this.movementStock._finalWarehouse.wareHouseId
        : undefined;
    }
    this.bidoCustomerReceiver = this.movementStock._bidoCustomerDto;
    if (this.selectedShipperSite) {
      this.loadWareHouses(this.selectedShipperSite, this.selectedShipperWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.shipperWarehouses = warehouses;
        }
      });
    }

    if (this.selectedRecipientSite) {
      this.loadWareHouses(this.selectedRecipientSite, this.selectedRecipientWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.recipientWarehouses = warehouses;
        }
      });
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return 'DialogCreateShipmentFolderComponent';
  }

  public canValidate() {
    return this.selectedDfType &&
      (this.selectedRecipientWarehouse || (this.bidoCustomerReceiver && this.bidoCustomerReceiver.customerCode)) &&
      (this.selectedShipperWarehouse || (this.bidoCustomerSender && this.bidoCustomerSender.customerCode)) &&
      this.selectedRecipientWarehouse !== this.selectedShipperWarehouse
      ? true
      : false;
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
    const deliveryFolderInput: BidtDeliveryFolderDTO = {
      bidtDfTypeId: this.selectedDfType && this.selectedDfType.id,
      bidtSiteByBidtSiteReceiverId: this.selectedRecipientSite,
      bidtSiteByBidtSiteSenderId: this.selectedShipperSite,
      bidtWarehouseByBidtWarehouseReceiverId: this.selectedRecipientWarehouse,
      bidtWarehouseByBidtWarehouseSenderId: this.selectedShipperWarehouse,
      criticality: undefined,
      plannedDate: this.selectedPlannedDate,
      bidoCustomerReceiver: this.bidoCustomerReceiver,
      bidoCustomerSender: this.bidoCustomerSender
    };
    this.logisticsService.addOrUpdateShipmentFolder(deliveryFolderInput).subscribe((deliveryFolder) => {
      const packageDTO: BidtPackageDTO = {
        externalPackageCode: this.externalPackageCode,
        packageType: this.selectedPackageType ? this.selectedPackageType.packageType : undefined,
        bidtDeliveryFolderId: deliveryFolder.id,
        height: this.packageInput.height,
        heightUnit: this.packageInput.heightUnit,
        width: this.packageInput.width,
        widthUnit: this.packageInput.widthUnit,
        length: this.packageInput.length,
        lengthUnit: this.packageInput.lengthUnit,
        weight: this.packageInput.weight,
        weightUnit: this.packageInput.weightUnit,
        volume: this.calculateVolume().toString()
      };
      const input: AddShipmentPackageInput = {
        bidtPackageDTO: packageDTO,
        isGenerated: this.isGenerated,
        bidtDeliveryFolderDTO: deliveryFolder,
        createWithPackage: this.createWithPackage
      };
      if (this.selectedChoiceNewPackage === this.component.NEW_PACKAGE) {
        this.goodsReceiptFormService.addShipmentPackage(input).subscribe((packageOutput) => {
          input.bidtPackageDTO = packageOutput;
          this.onValidate.emit(input);
          this.closeDialog();
        });
      } else {
        this.onValidate.emit(input);
        this.closeDialog();
      }
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
    this.businessPartnerList = [];

    this.selectedCriticality = AWPropertiesConstants.LOGISTICAL_CRITICALITY_ROUTINE;
    this.selectedDfType = undefined;
    this.selectedPlannedDate = new Date();

    this.showPartnerDropdown = false;
    this.createWithPackage = true;
    this.isGenerated = true;

    this.loadCriticalities();
    this.loadDfTypes();
    this.loadSites();
    this.loadWarehouseCategories();
    this.loadBusinessPartnerList();
    this.loadDropDowns();
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
    this.logisticsService.findShipmentDfTypes().subscribe({
      next: (dfTypes) => {
        this.dfTypes = ListUtils.orEmpty(dfTypes)
          .filter((dfType) => !StringUtils.isNullOrEmpty(dfType.dftDesignation))
          .map((dfType) => {
            return {
              label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
              value: dfType
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));

        this.selectedDfType = this.dfTypes.length === 1 ? this.dfTypes[0].value : undefined;
        if (this.movementStock._transferOrder) {
          this.selectedDfType = this.getDfTypeByKey(this.movementStock._transferOrder.torType as string);
        }
      }
    });
  }

  private getDfTypeByKey(key: string): BidtDfTypeDTO {
    return this.dfTypes.filter((type) => type.value.id === Number(key))[0].value;
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
        if (!!this.selectedRecipientWarehouseCategory) {
          this.selectedRecipientWarehouseCategory = warehouseCategory;
        }
        if (!!this.selectedShipperWarehouseCategory) {
          this.selectedShipperWarehouseCategory = warehouseCategory;
        }
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

  private loadDropDowns(): void {
    const packageTypes = this.propertiesService.getFullPackageTypeMap();
    const lengthUnit = this.logisticsService.fetchLengthUnitMap();
    const weightUnit = this.logisticsService.fetchWeightUnitMap();

    forkJoin({ packageTypes, lengthUnit, weightUnit }).subscribe({
      next: (results) => {
        this.packagesTypesList = results.packageTypes;
        this.unitLengthList = results.lengthUnit;
        this.unitWeightList = results.weightUnit;
        this.choiceList = this.deliveryFolderSearchService.loadCreationChoiceListPackage();
        this.selectedChoice = this.choiceList && this.choiceList.length ? this.choiceList[0].value : '';
        this.newPackageList = this.deliveryFolderSearchService.loadShipmentPackageChoiceList();
        this.selectedChoiceNewPackage =
          this.newPackageList && this.newPackageList.length ? this.newPackageList[0].value : '';
      }
    });
  }

  public resetChoice(): void {
    this.changeMode();
  }

  private changeMode(): void {
    switch (this.selectedChoice) {
      case this.component.GENERATE:
        this.isGenerated = true;
        break;

      case this.component.ENTER:
        this.isGenerated = false;
        break;

      default:
        break;
    }
  }

  public resetChoicePackage(): void {
    this.changeModePackage();
  }

  private changeModePackage(): void {
    switch (this.selectedChoiceNewPackage) {
      case this.component.NEW_PACKAGE:
        this.createWithPackage = true;
        this.isGenerated = true;
        break;

      case this.component.WITHOUT_PACKAGE:
        this.createWithPackage = false;
        this.isGenerated = false;
        break;

      default:
        break;
    }
  }

  public packageTypeChange(): void {
    this.packageInput = {
      length: this.selectedPackageType.length,
      lengthUnit: this.selectedPackageType.unit,
      width: this.selectedPackageType.width,
      widthUnit: this.selectedPackageType.unit,
      height: this.selectedPackageType.height,
      heightUnit: this.selectedPackageType.unit
    };
    this.disableLength = this.selectedPackageType.length ? true : false;
    this.disableWidth = this.selectedPackageType.width ? true : false;
    this.disableHeight = this.selectedPackageType.height ? true : false;
  }

  public calculateVolume(): number {
    return this.packageInput.width && this.packageInput.length && this.packageInput.height
      ? this.packageInput.height * this.packageInput.length * this.packageInput.width
      : 0;
  }
  public showVolume(): boolean {
    return (
      this.packageInput.lengthUnit === this.packageInput.widthUnit &&
      this.packageInput.lengthUnit === this.packageInput.heightUnit
    );
  }

  public getVolumnUnit(): string {
    const selectedUnit = this.unitLengthList.find((item) => item.value === this.packageInput.lengthUnit);

    return selectedUnit ? selectedUnit.label : '';
  }
}
