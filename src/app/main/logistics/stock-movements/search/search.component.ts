import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtTypeDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-type-dto.interface';
import { BidtStorageBinDTO } from '../../../../shared/types/api-types/bidt-storage-bin-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { LogisticalUtils } from '../../../../shared/utils/logistic-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { LogisticsService } from '../../logistics.service';
import { StockMvtParameters } from '../stock-movement-parameters.interface';

import { SearchService } from './search.service';

export enum ComponentContext {
  PICKING,
  STOCK_MOVEMENT,
  STOCK_PILLING
}

export abstract class SearchComponent extends PageComponent<PageComponentData> {
  public static readonly RECIPIENT_EXTERNAL: number = 0;
  public static readonly RECIPIENT_INTERNAL: number = 1;
  public static readonly EXECUTED_STATUS: string = AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY;
  public static readonly CANCEL_STATUS: string = AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY;
  public static readonly NO_EXECUTED: string = '0';

  public readonly component: typeof SearchComponent;
  public readonly componentContext: typeof ComponentContext;
  public readonly componentNamespace: string;

  public filteredMovementTypes: LabelValue<number>[];
  public finalRecipientWarehouses: LabelValue<number>[];
  public recipients: LabelValue<number>[];
  public sites: LabelValue<number>[];
  public statuses: LabelValue<string>[];
  public warehouseCategories: LabelValue<string>[];
  public warehouses: LabelValue<number>[];
  public zonesList: LabelValue<number>[];
  public criticalList: LabelValue<string | undefined>[];

  public selectedBatchNumber: string | undefined;
  public selectedDate: Date | undefined;
  public selectedFinalRecipientCustomerCode: string | undefined;
  public selectedFinalRecipientSite: number | undefined;
  public selectedFinalRecipientWarehouse: number | undefined;
  public selectedFinalRecipientWarehouseCategory: string | undefined;
  public selectedPnCode: string | undefined;
  public selectedMovementType: number | undefined;
  public selectedRecipient: number | undefined;
  public selectedSite: number | undefined;
  public selectedSn: string | undefined;
  public selectedStatus: string | undefined;
  public selectedWarehouse: number | undefined;
  public selectedWarehouseCategory: string | undefined;
  public withAlternatives: boolean;
  public selectedWarehouseDTO: BidtWarehouseDTO;
  public selectedZone: number;
  public selectedCritical: string | undefined;

  public advancedCriteriaVisible: boolean;
  public customerDialogVisible: boolean;
  public finalRecipientVisible: boolean;
  public pnDialogVisible: boolean;
  public particularSearch: boolean;

  private movementTypes: LabelValue<BidtStockMvtTypeDTO>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly logisticsService: LogisticsService,
    public readonly sessionService: SessionService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly propertiesService: PropertiesService,
    private readonly searchService: SearchService,
    public readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = SearchComponent;
    this.componentContext = ComponentContext;
    this.componentNamespace = ComponentConstants.LOG_STOCK_MOVEMENTS_SEARCH;

    this.init();
    this.displayComponentContext('global.search', true);
  }

  // ////////////////////////////////////////////////////////////////////////////

  public canSearch(): boolean {
    return (
      ObjectUtils.isDefined(this.selectedSite) &&
      ObjectUtils.isDefined(this.selectedMovementType) &&
      ObjectUtils.isDefined(this.selectedDate) &&
      (ObjectUtils.isDefined(this.selectedWarehouse) || ObjectUtils.isDefined(this.selectedPnCode))
    );
  }

  public onChangeSite(): void {
    this.onChangeWarehouseCategory();
  }

  public onChangeFinalRecipientSite(): void {
    this.onChangeFinalRecipientWarehouseCategory();
  }

  public onChangeFinalRecipientWarehouseCategory(): void {
    this.unselectFinalRecipientWarehouse();

    if (this.selectedFinalRecipientSite) {
      this.loadWareHouses(
        this.selectedFinalRecipientSite,
        this.selectedFinalRecipientWarehouseCategory as string
      ).subscribe({
        next: (warehouses) => {
          this.finalRecipientWarehouses = warehouses;
        }
      });
    }
  }

  public onChangeWarehouseCategory(): void {
    this.unselectWarehouse();

    this.filteredMovementTypes = this.filterMovementTypes();

    if (this.selectedSite) {
      this.loadWareHouses(this.selectedSite, this.selectedWarehouseCategory as string).subscribe({
        next: (warehouses) => {
          this.warehouses = warehouses;
        }
      });
    }
  }

  public onChangeWarehouse(): void {
    this.searchService.findBidtWarehouseById(this.selectedWarehouse as number).subscribe((warehouseWithBin) => {
      this.selectedWarehouseDTO = warehouseWithBin;
      if (this.selectedWarehouseDTO.bidtStorageBinDTOs) {
        this.fillZoneList(this.selectedWarehouseDTO.bidtStorageBinDTOs);
      }
    });
  }

  private fillZoneList(zonesListInput: BidtStorageBinDTO[]): void {
    this.zonesList = zonesListInput.map((zone) => {
      const zoneRow: LabelValue<number> = {
        label: (zone.sbNumber as string) + (zone.sbDescription ? ` - ${zone.sbDescription}` : ''),
        value: zone.id as number
      };

      return zoneRow;
    });
  }

  public onSelectCustomer(customer: BidoCustomerDTO): void {
    this.selectedFinalRecipientCustomerCode = customer.customerCode;
  }

  public onSelectMaterial(pn: BirePnDTO) {
    this.selectedPnCode = pn.pnCode;
  }

  public openCustomerDialog() {
    this.customerDialogVisible = true;
  }

  public openPnDialog() {
    this.pnDialogVisible = true;
  }

  public search(): void {
    const selectedMvtWay = (this.movementTypes.find(
      (movementType) => movementType.value.id === this.selectedMovementType
    ) as LabelValue<BidtStockMvtTypeDTO>).value.smtWay;

    let bidtSiteByBidtSiteIssueId: number | undefined;
    let bidtSiteByBidtSiteReceiptId: number | undefined;
    let bidtWarehouseByBidtWarehouseIssueId: number | undefined;
    let bidtWarehouseByBidtWarehouseReceiptId: number | undefined;
    let bidtStorageBinByBidtSbZoneReceiptId: number | undefined;
    let bidtStorageBinByBidtSbZoneIssueId: number | undefined;
    if (
      selectedMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT ||
      selectedMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER
    ) {
      bidtSiteByBidtSiteReceiptId = this.selectedSite;
      bidtWarehouseByBidtWarehouseReceiptId = this.selectedWarehouse;
      bidtStorageBinByBidtSbZoneReceiptId = this.selectedZone;
    } else if (
      selectedMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT ||
      selectedMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER
    ) {
      bidtSiteByBidtSiteIssueId = this.selectedSite;
      bidtWarehouseByBidtWarehouseIssueId = this.selectedWarehouse;
      bidtStorageBinByBidtSbZoneIssueId = this.selectedZone;
    }

    let mvtStatus: string[] = [];
    let mvtStatusExcluded: string[] = [];
    let untilPlannedDate: Date | undefined;
    let untilRealDate: Date | undefined;
    if (
      this.selectedStatus === AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY ||
      this.selectedStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    ) {
      mvtStatus = [this.selectedStatus];
      untilRealDate = this.selectedDate;
    } else if (this.selectedStatus === this.component.NO_EXECUTED) {
      mvtStatusExcluded = [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ];
      mvtStatus = [];
      untilPlannedDate = this.selectedDate;
    } else if (!!this.selectedStatus) {
      mvtStatusExcluded = [
        AWPropertiesConstants.MM_MVT_STATUS_CANCELED_KEY,
        AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
      ];
      mvtStatus = [this.selectedStatus];
      untilPlannedDate = this.selectedDate;
    }

    const searchCriteria: FindStockMvtsByCriteriaInput = {
      mvtStatus,
      mvtStatusExcluded,
      untilPlannedDate,
      untilRealDate,
      stockMvt: {
        bidtSiteByBidtSiteIssueId,
        bidtSiteByBidtSiteReceiptId,
        bidtWarehouseByBidtWarehouseIssueId,
        bidtWarehouseByBidtWarehouseReceiptId,
        bidtStorageBinByBidtSbZoneReceiptId,
        bidtStorageBinByBidtSbZoneIssueId,
        bidtStockMvtTypeId: this.selectedMovementType,
        stockMvtSn: this.selectedSn,
        stockMvtBatchNumber: this.selectedBatchNumber
      },
      finalReceiverCustomerCode: this.selectedFinalRecipientCustomerCode,
      finalReceiverSiteId: this.selectedFinalRecipientSite,
      finalReceiverWarehouseId: this.selectedFinalRecipientWarehouse,
      pnCode: this.selectedPnCode,
      withAlternatives: this.withAlternatives,
      criticality: this.selectedCritical,
      dfShipmentSearch: false
    };

    this.searchService.findByCriteria(searchCriteria).subscribe((mvtList) => {
      const params: StockMvtParameters = {
        searchParameters: searchCriteria,
        bidtStockList: mvtList
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: this.getComponentNameTocall,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(params)
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public unselectFinalRecipientCustomer(): void {
    this.selectedFinalRecipientCustomerCode = undefined;
  }

  public unselectPn(): void {
    this.selectedPnCode = undefined;
  }

  // ////////////////////////////////////////////////////////////////////////////

  protected filterMovementTypes(): LabelValue<number>[] {
    return this.movementTypes
      .filter((movementType) =>
        this.selectedWarehouseCategory === AWPropertiesConstants.WAREHOUSE_CATEGORY_WAREHOUSE
          ? movementType.value.id !== BidtStockMvtTypeConstant.INSTALLATION &&
            movementType.value.id !== BidtStockMvtTypeConstant.REMOVAL &&
            movementType.value.id !== BidtStockMvtTypeConstant.WORKSHOP_ENTRY &&
            movementType.value.id !== BidtStockMvtTypeConstant.WORKSHOP_ISSUE
          : movementType.value.id !== BidtStockMvtTypeConstant.INSTALLATION &&
            movementType.value.id !== BidtStockMvtTypeConstant.BATCH_SPLITTING_MINUS &&
            movementType.value.id !== BidtStockMvtTypeConstant.BATCH_SPLITTING_PLUS &&
            movementType.value.id !== BidtStockMvtTypeConstant.CROSS_DOCKING &&
            movementType.value.id !== BidtStockMvtTypeConstant.QUARANTINE &&
            movementType.value.id !== BidtStockMvtTypeConstant.RECEIPT &&
            movementType.value.id !== BidtStockMvtTypeConstant.SHIPMENT
      )
      .map((movementType) => {
        return {
          label: movementType.label,
          value: movementType.value.id as number
        };
      });
  }

  protected init(): void {
    this.filteredMovementTypes = [];
    this.finalRecipientWarehouses = [];
    this.movementTypes = [];
    this.recipients = [];
    this.sites = [];
    this.statuses = [];
    this.warehouseCategories = [];
    this.warehouses = [];
    this.zonesList = [];
    this.criticalList = [];

    this.selectedBatchNumber = undefined;
    this.selectedDate = new Date();
    this.selectedFinalRecipientCustomerCode = undefined;
    this.selectedFinalRecipientSite = undefined;
    this.selectedFinalRecipientWarehouse = undefined;
    this.selectedFinalRecipientWarehouseCategory = undefined;
    this.selectedPnCode = undefined;
    this.selectedMovementType = undefined;
    this.selectedRecipient = undefined;
    this.selectedSite = undefined;
    this.selectedSn = undefined;
    this.selectedStatus = undefined;
    this.selectedWarehouse = undefined;
    this.selectedWarehouseCategory = undefined;
    this.withAlternatives = false;

    this.advancedCriteriaVisible = false;
    this.customerDialogVisible = false;
    this.finalRecipientVisible = true;
    this.pnDialogVisible = false;
    this.particularSearch = false;

    this.loadMovementTypes();
    this.loadSites();
    this.loadStatuses();
    this.loadRecipients();
    this.loadWarehouseCategories();
    this.loadCriticity();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public abstract get getCurrentComponentContext(): number;

  public abstract get getComponentNameTocall(): string;

  protected abstract loadStatuses(): void;

  // ////////////////////////////////////////////////////////////////////////////

  private loadCriticity(): void {
    this.searchService.loadCriticalityList().subscribe((res) => {
      res.forEach((criticity) => {
        this.criticalList.push({
          label: criticity.label,
          value: criticity.value
        });
      });
      this.criticalList = LogisticalUtils.sortCriticities(this.criticalList as LabelValue<string>[]);
      this.criticalList = [
        {
          label: this.translateService.instant(this.getTranslateKey('all', this.componentNamespace)),
          value: undefined
        },
        ...this.criticalList
      ];
    });
  }

  private loadMovementTypes(): void {
    this.logisticsService.findStockMvtTypes().subscribe({
      next: (movementTypes) => {
        this.movementTypes = ListUtils.orEmpty(movementTypes)
          .filter(
            (movementType) =>
              movementType.id !== BidtStockMvtTypeConstant.INVENTORY_CORRECTION_MINUS &&
              movementType.id !== BidtStockMvtTypeConstant.INVENTORY_CORRECTION_PLUS
          )
          .map((movementType) => {
            return {
              label: this.extractTranslationPipe.transform(movementType.smtName),
              value: movementType
            };
          })
          .sort((s1, s2) => s1.label.localeCompare(s2.label));
        this.loadUserSiteId();
        this.LoadUserWarehouseId();
      }
    });
  }

  private LoadUserWarehouseId(): void {
    this.sessionService.getUserWarehouseId().subscribe({
      next: (warehouse) => {
        this.selectedWarehouseCategory = warehouse ? warehouse.whCategory : undefined;
        this.filteredMovementTypes = this.filterMovementTypes();

        this.loadWareHouses(this.selectedSite as number, this.selectedWarehouseCategory as string).subscribe({
          next: (warehouses) => {
            this.warehouses = warehouses;

            if (warehouse && warehouse.wareHouseId) {
              this.selectedWarehouse = warehouse ? warehouse.wareHouseId : undefined;
            }
          }
        });
      }
    });
  }

  private loadUserSiteId() {
    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        this.selectedSite = site ? site.siteId : undefined;
      }
    });
  }

  private loadRecipients() {
    this.recipients = [
      {
        label: this.translateService.instant('internal') as string,
        value: SearchComponent.RECIPIENT_INTERNAL
      },
      {
        label: this.translateService.instant('external') as string,
        value: SearchComponent.RECIPIENT_EXTERNAL
      }
    ];
  }

  private loadSites(): void {
    this.searchService.findAllBireSite().subscribe({
      next: (sites: BidtSiteDTO[]) => {
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

  private loadWareHouses(site: number, warehouseCategory: string): Observable<LabelValue<number>[]> {
    return this.searchService.getWarehousesBySiteId(site).pipe(
      map((warehouses: BidtWarehouseDTO[]) => {
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

  private loadWarehouseCategories() {
    this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP).subscribe({
      next: (warehouseCategories) => {
        this.warehouseCategories = ListUtils.orEmpty(warehouseCategories).sort((s1, s2) =>
          s1.value.localeCompare(s2.value)
        );

        const warehouseCategory = this.warehouseCategories.length > 0 ? this.warehouseCategories[0].value : undefined;
        this.selectedWarehouseCategory = warehouseCategory;
        this.selectedFinalRecipientWarehouseCategory = warehouseCategory;
        this.onChangeWarehouseCategory();
      }
    });
  }

  private unselectFinalRecipientWarehouse(): void {
    this.finalRecipientWarehouses = [];
    this.selectedFinalRecipientWarehouse = undefined;
  }

  private unselectWarehouse(): void {
    this.warehouses = [];
    this.selectedWarehouse = undefined;
  }
}
