import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { concatMap, finalize, map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { SearchCandidateAssetsTransferOrderInput } from '../../../../shared/types/api-input-types/logistic/search-candidate-assets-transfer-order-input.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTorItemDTO } from '../../../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { CandidateAssetDTO } from '../../../../shared/types/api-types/candidate-asset-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';

import { MaterialRequestTransferOrderManagementFormService } from './material-request-transfer-order-management-form.service';

interface SearchFilterInput {
  status?: string;
  site?: number;
  warehouse?: number;
  sn?: string;
  sameSite?: SatisfactoryRateFilterState;
  availableAtDate?: SatisfactoryRateFilterState;
  bookingStatus?: SatisfactoryRateFilterState;
  noUnconfirmedFailure?: SatisfactoryRateFilterState;
}

export enum CandidateAssetCategory {
  GLOBAL,
  LOCAL,
  PICKING,
  WAREHOUSE
}

export enum SatisfactoryRateFilterState {
  UNDEFINED,
  YES,
  NO
}

@Component({
  selector: 'aw-material-request-transfer-order-management-form',
  styleUrls: ['../shared/style.scss'],
  templateUrl: './material-request-transfer-order-management-form.component.html'
})
export class MaterialRequestTransferOrderManagementFormComponent extends FormPageComponent<PageComponentData>
  implements OnInit {
  public readonly CRITICITY_GREEN = 'green';
  public readonly CRITICITY_RED = 'red';
  public readonly CRITICITY_YELLOW = 'yellow';

  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly componentOpenMode: typeof ComponentOpenMode;
  public readonly candidateAssetCategory: typeof CandidateAssetCategory;

  public transferOrder: BidtTransferOrderDTO;
  public selectedTorItem: BidtTorItemDTO;
  public selectedTorItemBirePn: BirePnDTO;
  public shippedNb: number;
  public selectedNb: number;
  public notSelectedNb: number;
  public receivedNb: number;

  public torTypeList: LabelValue<number>[];
  public applicant: string;
  public applicantLogin: string;

  public subtitle: string;
  public searchFilterObject: SearchFilterInput;
  public materialProposedTableCols: TableColumn[];

  public statusList: SelectItem[];
  public siteList: SelectItem[];
  public warehouseList: SelectItem[];
  public openChangeCustomerDialog: boolean;
  public dataSupplier: object;
  public openImageDialog: boolean;
  public filtersVisible: boolean;
  public logisticsTypeList: SelectItem[];
  public locationWarehouseType: string | undefined;
  public satifactionRateStatus: SelectItem[];

  public candidateAssetCategoryList: SelectItem[];
  public selectedcandidateAssetCategory: CandidateAssetCategory;
  public itemIllustration: SafeResourceUrl;
  public potentialUnitList: MenuItem[];
  public potentialUnitSelected: string;

  public equipmentStatusList: LabelValue<string>[];
  public equipmentStatusListFilter: LabelValue<string>[];

  public candidateAssetsSrc: CandidateAssetDTO[];
  public candidateAssets: CandidateAssetDTO[];
  public selectedCandidateAsset: CandidateAssetDTO | undefined;
  public iscandidateAssetsLoading: boolean;
  public saving: boolean;

  private sites: BidtSiteDTO[];

  public showSatisfactionRateDialog: boolean;

  public formattedRequestedPotential: string;

  public isLoading: boolean;

  public workPackageAsset: BidoEquipmentDTO | undefined;
  public workPackageAssetName: string;

  private transferedStockMvts: BidtStockMvtDTO[];

  public showChangeSupplierAndQuantityDialog: boolean;

  public currentSupplierWarehouse: BidtWarehouseDTO;
  public isProRecSupplierWarehouse: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public dateService: DateService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly materialRequestTransferOrderFormService: MaterialRequestTransferOrderManagementFormService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.componentOpenMode = ComponentOpenMode;
    this.candidateAssetCategory = CandidateAssetCategory;

    this.init();
    this.initMaterialProposedTableCols();

    this.materialRequestTransferOrderFormService.findAllSite().subscribe((sites) => {
      this.sites = sites;
    });

    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe((statusList) => {
      this.statusList = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((statusList) => {
      this.equipmentStatusList = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.materialRequestTransferOrderFormService.getOperationalStatusMap(' ').subscribe((statusList) => {
      this.equipmentStatusListFilter = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe((res) => {
      if (res && res.length) {
        this.logisticsTypeList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.locationWarehouseType = this.logisticsTypeList[0].value;
      }
    });

    this.materialRequestTransferOrderFormService.fetchTypeList().subscribe((list) => {
      this.torTypeList = list;
    });

    this.materialRequestTransferOrderFormService.findAllSite().subscribe({
      next: (sites) => {
        this.siteList = ListUtils.orEmpty(sites)
          .filter((site) => !!site.siteId && !StringUtils.isNullOrEmpty(site.siteName))
          .map((site) => {
            return {
              label: `${site.siteCode} - ${site.siteName}`,
              value: site.siteId as number
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
      }
    });
    const localLevelKey = this.getTranslateKey('localLevel');
    const globalLevelKey = this.getTranslateKey('globalLevel');
    const warehouseLevelKey = this.getTranslateKey('warehouseLevel');
    const yesKey = this.getTranslateKey('yes');
    const noKey = this.getTranslateKey('no');
    const undefinedKey = this.getTranslateKey('undefined');
    this.translateService
      .get([localLevelKey, globalLevelKey, warehouseLevelKey, yesKey, noKey, undefinedKey])
      .subscribe({
        next: (results: { [key: string]: string }) => {
          const localLevelLabel = !!results ? results[localLevelKey] : 'Local';
          const globalLevelLabel = !!results ? results[globalLevelKey] : 'Global';
          const warehouseLevelLabel = !!results ? results[warehouseLevelKey] : 'Warehouse';
          this.candidateAssetCategoryList = [
            { label: warehouseLevelLabel, value: CandidateAssetCategory.WAREHOUSE },
            { label: localLevelLabel, value: CandidateAssetCategory.LOCAL },
            { label: globalLevelLabel, value: CandidateAssetCategory.GLOBAL }
          ];
          const yesLabel = !!results ? results[yesKey] : 'Yes';
          const noLabel = !!results ? results[noKey] : 'No';
          const undefinedLabel = !!results ? results[undefinedKey] : 'Undefined';
          this.satifactionRateStatus = [
            { label: undefinedLabel, value: SatisfactoryRateFilterState.UNDEFINED },
            { label: yesLabel, value: SatisfactoryRateFilterState.YES },
            { label: noLabel, value: SatisfactoryRateFilterState.NO }
          ];
        }
      });
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    this.load();
  }

  public reload(): void {
    this.load();
  }

  private load(): void {
    if (!this.isCreateOpenMode && this.componentData.objectId) {
      const { torId, torItemId } = this.serializationService.deserialize(this.componentData.objectId) as {
        torId: number;
        torItemId: number;
      };
      this.materialRequestTransferOrderFormService
        .findTransferOrderById(torId)
        .subscribe((ftor: FindTransferOrdersByCriteriaOutput) => {
          this.transferOrder = ftor.bidtTransferOrder;
          if (!!this.transferOrder.bidtTorItems) {
            const tempSelectedTorItem = this.transferOrder.bidtTorItems.find((item) => item.id === torItemId);

            if (!!tempSelectedTorItem) {
              this.selectedTorItem = tempSelectedTorItem;
            }
            if (!!this.selectedTorItem) {
              this.materialRequestTransferOrderFormService
                .getBirePnByPn({ pnCode: this.selectedTorItem.birePnPnCode })
                .subscribe((result) => {
                  this.selectedTorItemBirePn = result;
                  this.updateCandidateAssetTableColumns();
                });
            }
          }
          if (this.transferOrder.statusUser) {
            this.materialRequestTransferOrderFormService.findUser(this.transferOrder.statusUser).subscribe((user) => {
              this.applicant = `${user.firstname} ${user.lastname}`;
              this.applicantLogin = !!user.login ? user.login : '';
            });
          }
        });
    }
  }

  public openEquipment(equipment?: BidoEquipmentDTO): void {
    if (equipment) {
      const componentId =
        equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY
          ? ComponentConstants.FLE_AIRCRAFT_FORM
          : equipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY
          ? ComponentConstants.FLE_ENGINE_FORM
          : ComponentConstants.FLE_EQUIPMENT_FORM;
      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        objectId: this.serializationService.serialize({ equipmentCode: equipment.equipmentCode }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openManufacturingBatch(manufacturingBatchNumber: string | undefined): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      objectId: this.serializationService.serialize({ customerCode: manufacturingBatchNumber }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openPart(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.pn) {
      const data: PageComponentData = {
        componentId: ComponentConstants.ENG_PART_NUMBER_FORM,
        id: this.tabService.generateId(),
        objectId: candidateAsset.pn.pnCode,
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  private calculateSituation(): void {
    const stockMvts = ListUtils.orEmpty(this.selectedTorItem.pickingMovements).filter(
      (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT
    );
    this.transferedStockMvts = stockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );

    this.selectedNb = stockMvts
      .filter(
        (stockMvt) =>
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY &&
          (!StringUtils.isNullOrEmpty(stockMvt.stockMvtSn) || !StringUtils.isNullOrEmpty(stockMvt.stockMvtBatchNumber))
      )
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    this.receivedNb = ListUtils.orEmpty(this.selectedTorItem.pickingMovements)
      .filter(
        (stockMvt) =>
          stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT &&
          stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      )
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    this.shippedNb =
      this.transferedStockMvts
        .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
        .reduce((acc, x) => acc + x, 0) - this.receivedNb;

    if (!!this.selectedTorItem.quantity) {
      this.notSelectedNb = this.selectedTorItem.quantity - this.shippedNb - this.selectedNb - this.receivedNb;
    }
  }

  private loadPreemptionRight(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.stockInformation && candidateAsset.stockInformation.siteId) {
      this.materialRequestTransferOrderFormService
        .findSiteById(candidateAsset.stockInformation.siteId)
        .pipe(
          concatMap((site) =>
            this.materialRequestTransferOrderFormService.hasDisplayRights({
              useCaseCode: BidoFunctionTypeConstants.UC_MM_PREEMPTION,
              functionCode: site.siteCode
            })
          )
        )
        .subscribe({
          next: (hasPreemptionRight) => {
            candidateAsset._hasPreemptionRight = hasPreemptionRight;
          }
        });
    }
  }

  private loadCandidateAssets(): void {
    this.iscandidateAssetsLoading = true;
    this.candidateAssetsSrc = [];
    this.candidateAssets = [];
    this.resetFilters();
    if (!!this.transferOrder.bidtSiteIssue && !!this.transferOrder.bidtWarehouseIssue) {
      const param: SearchCandidateAssetsTransferOrderInput = {
        torItemId: this.selectedTorItem.id,
        pnCode: this.selectedTorItem.birePnPnCode,
        requestedDate: this.transferOrder.statusDate,
        bidtSiteReceiptId: this.transferOrder.bidtSiteIssue.siteId,
        bidtWarehouseIssueId: this.transferOrder.bidtWarehouseIssue.wareHouseId
      };
      if (this.selectedcandidateAssetCategory === CandidateAssetCategory.WAREHOUSE) {
        this.logisticsService
          .searchWarehouseCandidateAssetsByTorItem(param)
          .pipe(
            finalize(() => {
              this.iscandidateAssetsLoading = false;
            })
          )
          .subscribe((candidateAssets) => {
            this.candidateAssetsSrc = this.sortCandidateAssets(candidateAssets);
            this.candidateAssetsSrc.forEach((candidateAsset) => {
              this.loadPreemptionRight(candidateAsset);
            });
            this.candidateAssets = [...this.candidateAssetsSrc];
            this.calculateSituation();
          });
      } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.LOCAL) {
        this.logisticsService
          .searchLocalCandidateAssetsByTorItem(param)
          .pipe(
            finalize(() => {
              this.iscandidateAssetsLoading = false;
            })
          )
          .subscribe((candidateAssets) => {
            this.candidateAssetsSrc = this.sortCandidateAssets(candidateAssets);
            this.candidateAssetsSrc.forEach((candidateAsset) => {
              this.loadPreemptionRight(candidateAsset);
            });
            this.candidateAssets = [...this.candidateAssetsSrc];
            this.calculateSituation();
          });
      } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.GLOBAL) {
        this.logisticsService
          .searchGlobalCandidateAssetsByTorItem(param)
          .pipe(
            finalize(() => {
              this.iscandidateAssetsLoading = false;
            })
          )
          .subscribe((candidateAssets) => {
            this.candidateAssetsSrc = this.sortCandidateAssets(candidateAssets);
            this.candidateAssetsSrc.forEach((candidateAsset) => {
              this.loadPreemptionRight(candidateAsset);
            });
            this.candidateAssets = [...this.candidateAssetsSrc];
            this.calculateSituation();
          });
      }
    }
  }

  private sortCandidateAssets(candidateAssets: CandidateAssetDTO[]): CandidateAssetDTO[] {
    return candidateAssets.sort((c1, c2) => {
      if (this.isCandidateAssetServed(c1) && !this.isCandidateAssetServed(c2)) {
        return -1;
      } else if (!this.isCandidateAssetServed(c1) && this.isCandidateAssetServed(c2)) {
        return 1;
      } else {
        if (
          c1.transferOrder &&
          c1.transferOrder.id === this.transferOrder.id &&
          !(c2.transferOrder && c2.transferOrder.id === this.transferOrder.id)
        ) {
          return -1;
        } else if (
          c2.transferOrder &&
          c2.transferOrder.id === this.transferOrder.id &&
          !(c1.transferOrder && c1.transferOrder.id === this.transferOrder.id)
        ) {
          return 1;
        } else {
          const r1 = this.calculateSatisfactionRate(c1);
          const r2 = this.calculateSatisfactionRate(c2);

          if (r1 > r2) {
            return -1;
          } else if (r1 < r2) {
            return 1;
          } else {
            const e1 = c1.equipment ? StringUtils.orEmpty(c1.equipment.sn) : '';
            const e2 = c2.equipment ? StringUtils.orEmpty(c2.equipment.sn) : '';

            return e1.localeCompare(e2);
          }
        }
      }
    });
  }

  private init() {
    this.transferOrder = {};
    this.applicant = '';
    this.applicantLogin = '';
    this.torTypeList = [];

    this.formattedRequestedPotential = '';
    this.selectedCandidateAsset = undefined;
    this.selectedcandidateAssetCategory = CandidateAssetCategory.WAREHOUSE;
    this.potentialUnitList = [];
    this.candidateAssetsSrc = [];
    this.candidateAssets = [];
    this.equipmentStatusList = [];
    this.statusList = [];
    this.shippedNb = 0;
    this.selectedNb = 0;
    this.notSelectedNb = 0;
    this.iscandidateAssetsLoading = false;
    this.transferedStockMvts = [];
    this.satifactionRateStatus = [];

    this.workPackageAsset = undefined;
    this.workPackageAssetName = '';

    this.searchFilterObject = {};
    this.searchFilterObject.sameSite = -1;
    this.searchFilterObject.availableAtDate = -1;
    this.searchFilterObject.bookingStatus = -1;
    this.searchFilterObject.noUnconfirmedFailure = -1;
    this.materialProposedTableCols = [];
    this.siteList = [];
    this.warehouseList = [];
    this.logisticsTypeList = [];

    this.showChangeSupplierAndQuantityDialog = false;
  }

  private initMaterialProposedTableCols(): void {
    this.materialProposedTableCols = this.getCandidateAssetTableColumnsForLocalCategory();
  }

  private getCandidateAssetTableColumnsForPickingCategory(): TableColumn[] {
    return [
      { field: 'material', alignment: 'left', width: '15%' },
      { field: 'snBatch', alignment: 'left', width: '12.5%' },
      { field: 'msn', alignment: 'left', width: '15%' },
      { field: 'locationForPicking', alignment: 'left', width: '17.5%' },
      { field: 'technicalData', alignment: 'left', width: '15%' },
      { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
      { field: 'satisfactionRate', alignment: 'left', width: '10%' }
    ];
  }

  private getCandidateAssetTableColumnsForLocalCategory(): TableColumn[] {
    return [
      { field: 'material', alignment: 'left', width: '15%' },
      { field: 'batch', alignment: 'left', width: '12.5%' },
      { field: 'sn', alignment: 'left', width: '15%' },
      { field: 'quantity', alignment: 'right', width: '5%' },
      { field: 'location', alignment: 'left', width: '15%' },
      { field: 'technicalData', alignment: 'left', width: '12.5%' },
      { field: 'availabilityAtDate', alignment: 'left', width: '15%' },
      { field: 'satisfactionRate', alignment: 'left', width: '10%' }
    ];
  }

  public onChangeCustomer() {
    this.openChangeCustomerDialog = true;
  }

  public resetFilters() {
    this.searchFilterObject.status = undefined;
    this.searchFilterObject.sn = undefined;
    this.searchFilterObject.site = undefined;
    this.searchFilterObject.warehouse = undefined;
    this.searchFilterObject.sameSite = SatisfactoryRateFilterState.UNDEFINED;
    this.searchFilterObject.availableAtDate = SatisfactoryRateFilterState.UNDEFINED;
    this.searchFilterObject.bookingStatus = SatisfactoryRateFilterState.UNDEFINED;
    this.searchFilterObject.noUnconfirmedFailure = SatisfactoryRateFilterState.UNDEFINED;
    this.warehouseList = [];
    this.locationWarehouseType = this.logisticsTypeList[0].value as string;
    this.candidateAssets = [...this.candidateAssetsSrc];
  }

  public filterSearchResult() {
    this.candidateAssets = this.candidateAssetsSrc.filter((elt) => {
      return (
        this.statusFilterCriteria(elt) &&
        this.snFilterCriteria(elt) &&
        this.siteFilterCriteria(elt) &&
        this.warehouseFilterCriteria(elt) &&
        this.satifactoryRateSameSiteFilterCriteria(elt) &&
        this.satisfactoryRateAvailableAtDateCriteria(elt) &&
        this.statifactoryRateBookingStatusCriteria(elt) &&
        this.satisfactoryRateNoUnconfirmedFailureCriteria(elt)
      );
    });
  }

  private statusFilterCriteria(elt: CandidateAssetDTO): boolean {
    return (
      !this.searchFilterObject.status ||
      (!!elt.equipment && elt.equipment.operationalStatus === this.searchFilterObject.status)
    );
  }

  private snFilterCriteria(elt: CandidateAssetDTO): boolean {
    return (
      !this.searchFilterObject.sn ||
      (!!elt.equipment &&
        !!elt.equipment.sn &&
        elt.equipment.sn.toUpperCase().includes(this.searchFilterObject.sn.toUpperCase()))
    );
  }

  private siteFilterCriteria(elt: CandidateAssetDTO): boolean {
    return (
      !this.searchFilterObject.site || (!!elt.siteReceipt && elt.siteReceipt.siteId === this.searchFilterObject.site)
    );
  }

  private warehouseFilterCriteria(elt: CandidateAssetDTO): boolean {
    return (
      !this.searchFilterObject.warehouse ||
      (!!elt.warehouseReceipt && elt.warehouseReceipt.wareHouseId === this.searchFilterObject.warehouse)
    );
  }

  private satifactoryRateSameSiteFilterCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.sameSite === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.YES && // YES
        !!elt.siteReceipt &&
        !!this.transferOrder.bidtSiteReceipt &&
        elt.siteReceipt.siteId === this.transferOrder.bidtSiteReceipt.siteId) ||
      (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.NO && // NO
        !(
          !!elt.siteReceipt &&
          !!this.transferOrder.bidtSiteReceipt &&
          elt.siteReceipt.siteId === this.transferOrder.bidtSiteReceipt.siteId
        ))
    );
  }

  private satisfactoryRateAvailableAtDateCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.YES && // YES
        !ObjectUtils.isDefined(elt.plannedAvailabilityDate)) ||
      (this.searchFilterObject.availableAtDate === SatisfactoryRateFilterState.NO && // NO
        ObjectUtils.isDefined(elt.plannedAvailabilityDate))
    );
  }

  private statifactoryRateBookingStatusCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.YES && // YES
        (!ObjectUtils.isDefined(elt.transferOrder) ||
          (!!elt.transferOrder && elt.transferOrder.id === this.transferOrder.id))) ||
      (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.NO && // NO
        !(
          !ObjectUtils.isDefined(elt.transferOrder) ||
          (!!elt.transferOrder && elt.transferOrder.id === this.transferOrder.id)
        ))
    );
  }

  private satisfactoryRateNoUnconfirmedFailureCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.YES && // YES
        !ObjectUtils.isDefined(elt.unconfirmedFailure)) ||
      (this.searchFilterObject.noUnconfirmedFailure === SatisfactoryRateFilterState.NO && // NO
        ObjectUtils.isDefined(elt.unconfirmedFailure))
    );
  }

  public onGoBack() {
    const openMode: ComponentOpenMode = ComponentOpenMode.Read;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_SEARCH,
      openMode
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public formatEquipmentStatus(statusValue: string | undefined): string {
    const matchingStatus = this.equipmentStatusList.find((status) => status.value === statusValue);

    return matchingStatus ? StringUtils.orEmpty(matchingStatus.label) : '';
  }

  public formatStatus(statusValue: string | undefined): string {
    const matchingStatus = this.statusList.find((status) => status.value === statusValue);

    return matchingStatus ? StringUtils.orEmpty(matchingStatus.label) : '';
  }

  public formatQuantity(quantity: string | undefined): string {
    return quantity ? NumberUtils.roundNumber(NumberUtils.fromString(quantity), 2).toString() : '';
  }

  public formatPotential(potential: string | undefined): string {
    return potential ? NumberUtils.roundNumber(NumberUtils.fromString(potential), 2).toString() : '';
  }

  public updateCandidateAssetTableColumns(): void {
    this.materialProposedTableCols =
      this.selectedcandidateAssetCategory === CandidateAssetCategory.PICKING
        ? this.getCandidateAssetTableColumnsForPickingCategory()
        : this.getCandidateAssetTableColumnsForLocalCategory();

    this.loadCandidateAssets();
  }

  public isAvailableAtDate(candidateAsset: CandidateAssetDTO): boolean {
    return !ObjectUtils.isDefined(candidateAsset.plannedAvailabilityDate);
  }

  public calculateSatisfactionRate(candidateAsset: CandidateAssetDTO): number {
    const rates: number[] = [];
    const rate = (value: boolean) => {
      rates.push(value ? 1 : 0);
    };

    rate(this.isAvailableAtDate(candidateAsset));

    rate(
      !ObjectUtils.isDefined(candidateAsset.transferOrder) ||
        (candidateAsset.transferOrder as BidtTransferOrderDTO).id === this.transferOrder.id
    );

    rate(
      !!candidateAsset.siteReceipt &&
        !!this.transferOrder.bidtSiteIssue &&
        candidateAsset.siteReceipt.siteId === this.transferOrder.bidtSiteIssue.siteId
    );

    rate(!ObjectUtils.isDefined(candidateAsset.unconfirmedFailure));

    // tslint:disable-next-line:no-magic-numbers
    return NumberUtils.roundNumber((rates.filter((value) => value === 1).length / rates.length) * 100, 0);
  }

  public formatSite(siteCode: string | undefined): string {
    const matchingSite = this.sites.find((site) => site.siteCode === siteCode);

    return matchingSite ? StringUtils.orEmpty(matchingSite.siteName) : '';
  }

  public openSatisfactionRateDetails(candidateAsset: CandidateAssetDTO): void {
    this.selectedCandidateAsset = candidateAsset;
    this.showSatisfactionRateDialog = true;
  }

  public isSameQuantity(qt1?: string, qt2?: string): boolean {
    return this.formatQuantity(qt1) === this.formatQuantity(qt2);
  }

  public openProcurementRequest(procurementRequest?: BidtProcurementRequestDTO): void {
    if (procurementRequest) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
        objectId: this.serializationService.serialize({ id: procurementRequest.id }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public cancelBooking(rowData: CandidateAssetDTO): void {
    if (rowData.equipment) {
      this.logisticsService.isAssetBookedByTorItem(rowData.equipment).subscribe({
        next: (stockMvt) => {
          if (stockMvt) {
            this.logisticsService.cancelBookedAssetByTorItem(stockMvt).subscribe({
              next: () => {
                this.reload();
              }
            });
          } else {
            this.messageService.showErrorMessage('errorOnCancelBookedAsset');
          }
        }
      });
    }
  }

  public openBatch(code: string) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode: ComponentOpenMode.Read
    };

    data.objectId = code;

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isSelectBtnVisible(): boolean {
    const procurementRequestQty = this.selectedTorItem.quantity ? this.selectedTorItem.quantity : undefined;

    return (
      ObjectUtils.isDefined(procurementRequestQty) &&
      this.selectedNb + this.shippedNb < (procurementRequestQty as number)
    );
  }

  public bookCandidateAsset(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.equipment) {
      candidateAsset._bookCandidateAssetLoading = true;

      const quantity = candidateAsset.equipment.sn
        ? '1'
        : Math.min(this.notSelectedNb, candidateAsset.equipment.quantity || 0).toString();

      this.logisticsService
        .bookCandidateAssetByTorItem({ quantity, candidateAsset, bidtTorItem: this.selectedTorItem })
        .pipe(
          finalize(() => {
            candidateAsset._bookCandidateAssetLoading = false;
          })
        )
        .subscribe({
          next: () => {
            this.reload();
          }
        });
    }
  }

  public confirmPreemptCandidateAsset(candidateAsset: CandidateAssetDTO): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmPreempt'),
      accept: () => {
        this.preemptCandidateAsset(candidateAsset);
      }
    });
  }

  public preemptCandidateAsset(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.equipment) {
      candidateAsset._bookCandidateAssetLoading = true;

      const quantity = candidateAsset.equipment.sn
        ? '1'
        : Math.min(this.notSelectedNb, candidateAsset.equipment.quantity || 0).toString();

      this.logisticsService
        .preemptCandidateAssetByTorItem({ quantity, candidateAsset, bidtTorItem: this.selectedTorItem })
        .pipe(
          finalize(() => {
            candidateAsset._bookCandidateAssetLoading = false;
          })
        )
        .subscribe({
          next: () => {
            this.reload();
          }
        });
    }
  }

  public openWorkPackageAsset(): void {
    if (this.workPackageAsset) {
      let componentId: string;
      if (this.workPackageAsset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_AIRCRAFT_KEY) {
        componentId = ComponentConstants.FLE_AIRCRAFT_FORM;
      } else if (this.workPackageAsset.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY) {
        componentId = ComponentConstants.FLE_ENGINE_FORM;
      } else {
        componentId = ComponentConstants.FLE_EQUIPMENT_FORM;
      }

      const data: PageComponentData = {
        componentId,
        id: this.tabService.generateId(),
        objectId: this.serializationService.serialize({
          equipmentCode: this.workPackageAsset.equipmentCode
        }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public isCancelBookingBtnVisible(candidateAsset: CandidateAssetDTO): boolean {
    return (
      !!candidateAsset.equipment &&
      !!candidateAsset.transferOrder &&
      !!candidateAsset.transferOrder.bidtTorItems &&
      !!candidateAsset.transferOrder.bidtTorItems
        .filter((torItem) => torItem && torItem.pickingMovements)
        .map((torItem) => torItem.pickingMovements as BidtStockMvtDTO[])
        .reduce((acc, x) => acc.concat(x))
        .some(
          (stockMvt) =>
            (candidateAsset.equipment as BidoEquipmentDTO).sn === stockMvt.stockMvtSn &&
            (candidateAsset.equipment as BidoEquipmentDTO).batchNumber === stockMvt.stockMvtBatchNumber &&
            (stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.PICKING ||
              stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.CROSS_DOCKING) &&
            stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
            stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY
        )
    );
  }

  public isCandidateAssetServed(candidateAsset: CandidateAssetDTO): boolean {
    return (
      !!candidateAsset.equipment &&
      this.transferedStockMvts.some(
        (servedStockMvt) =>
          servedStockMvt.stockMvtSn === (candidateAsset.equipment as BidoEquipmentDTO).sn &&
          servedStockMvt.stockMvtBatchNumber === (candidateAsset.equipment as BidoEquipmentDTO).batchNumber
      )
    );
  }

  public loadLocationWarehouses(): void {
    this.searchFilterObject.warehouse = undefined;
    this.warehouseList = [];

    if (!!this.searchFilterObject.site && this.locationWarehouseType) {
      this.loadWareHouses(this.searchFilterObject.site, this.locationWarehouseType).subscribe({
        next: (warehouses) => {
          this.warehouseList = warehouses;
        }
      });
    }
  }

  private loadWareHouses(siteId: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.materialRequestTransferOrderFormService.getWarehousesBySiteId(siteId).pipe(
      map((warehouses) => {
        return warehouses
          .filter(
            (warehouse) =>
              !!warehouse.whCode &&
              !!warehouse.whName &&
              !!warehouse.whCategory &&
              warehouseCategory === warehouse.whCategory
          )
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

  public getBookedQty(candidateAsset: CandidateAssetDTO): string {
    if (candidateAsset.transferOrder && candidateAsset.transferOrder.bidtTorItems) {
      const matchingStockMvt = candidateAsset.transferOrder.bidtTorItems
        .filter((torItem) => torItem && torItem.pickingMovements)
        .map((torItem) => torItem.pickingMovements as BidtStockMvtDTO[])
        .reduce((acc, x) => acc.concat(x))
        .find(
          (stockMvt) =>
            (candidateAsset.equipment as BidoEquipmentDTO).sn === stockMvt.stockMvtSn &&
            (candidateAsset.equipment as BidoEquipmentDTO).batchNumber === stockMvt.stockMvtBatchNumber &&
            (stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.PICKING ||
              stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.CROSS_DOCKING)
        );

      if (matchingStockMvt) {
        return StringUtils.orEmpty(matchingStockMvt.stockMvtQuantity);
      }
    }

    return '';
  }

  public onChangeSupplier(): void {
    this.showChangeSupplierAndQuantityDialog = true;
  }

  public toNumber(str?: string): number {
    return Number(str);
  }

  public openTransferOrder(transferOrder?: BidtTransferOrderDTO) {
    if (transferOrder) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_TRANSFER_ORDER_FORM,
        objectId: this.serializationService.serialize(transferOrder.id),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
