import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem, SelectItem } from 'primeng/api';
import { Observable, forkJoin, of } from 'rxjs';
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
import { FileService } from '../../../../shared/services/file.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { CalculateRemainingQuantityInput } from '../../../../shared/types/api-input-types/logistic/calculate-remaining-quantity-input';
import { CalculateProcurementRequestRemainingQuantity } from '../../../../shared/types/api-output-types/calculate-procurement-request-remaining-quantity';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtProcReqItemDTO } from '../../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtStockMvtIdDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-id-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnMeasureDTO } from '../../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { CandidateAssetDTO } from '../../../../shared/types/api-types/candidate-asset-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { ImageUtils } from '../../../../shared/utils/image-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { LogisticsService } from '../../logistics.service';
import { ProcurementRequestSearchService } from '../../procurement-request/search/procurement-request-search.service';
import { MaterialProposedTableRow } from '../shared/material-proposed-table-row.interface';

import { MaterialRequestManagementFormService } from './material-request-management-form.service';

interface SearchFilterInput {
  status?: string;
  site?: number;
  warehouse?: number;
  sn?: string;
  sameSite?: SatisfactoryRateFilterState;
  availableAtDate?: SatisfactoryRateFilterState;
  potential?: SatisfactoryRateFilterState;
  calendarPotential?: SatisfactoryRateFilterState;
  bookingStatus?: SatisfactoryRateFilterState;
  noUnconfirmedFailure?: SatisfactoryRateFilterState;
}

export interface CreateTransferOrderInput {
  procurmentRequest: BidtProcurementRequestDTO;
  procReqItem: BidtProcReqItemDTO;
  notServedQuantity: number;
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
  selector: 'aw-material-request-management-form',
  styleUrls: ['../shared/style.scss'],
  templateUrl: './material-request-management-form.component.html'
})
export class MaterialRequestManagementFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly CRITICITY_GREEN = 'green';
  public readonly CRITICITY_RED = 'red';
  public readonly CRITICITY_YELLOW = 'yellow';

  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly componentOpenMode: typeof ComponentOpenMode;
  public readonly candidateAssetCategory: typeof CandidateAssetCategory;
  public readonly bidoFunctionTypeConstants: typeof BidoFunctionTypeConstants;

  public procurementRequest: BidtProcurementRequestDTO;
  public procurementRequestItem: BidtProcReqItemDTO;
  public servedNb: number;
  public bookedNb: number;
  public notServedNb: number;

  public subtitle: string;
  public searchFilterObject: SearchFilterInput;
  public materialProposedTableCols: TableColumn[];
  public materialProposedTable: MaterialProposedTableRow[];
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

  private servedStockMvts: BidtStockMvtDTO[];

  public showChangeSupplierAndQuantityDialog: boolean;

  public currentSupplierWarehouse: BidtWarehouseDTO;
  public isProRecSupplierWarehouse: boolean;

  // transfer order popup variables
  public showCreateTransferOrderDialog: boolean;
  public createTransferOrderInput: CreateTransferOrderInput;
  public quantityInMovement: number;
  public remainingQuantity: number;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

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
    private readonly domSanitizer: DomSanitizer,
    private readonly fileService: FileService,
    private readonly logisticsService: LogisticsService,
    private readonly propertiesService: PropertiesService,
    private readonly materialRequestManagementFormService: MaterialRequestManagementFormService,
    private readonly procurementRequestSearchService: ProcurementRequestSearchService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.componentOpenMode = ComponentOpenMode;
    this.candidateAssetCategory = CandidateAssetCategory;
    this.bidoFunctionTypeConstants = BidoFunctionTypeConstants;

    this.init();
    this.initMaterialProposedTableCols();

    this.materialRequestManagementFormService.findAllSite().subscribe((sites) => {
      this.sites = sites;
    });

    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe((statusList) => {
      this.statusList = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((statusList) => {
      this.equipmentStatusList = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.materialRequestManagementFormService.getOperationalStatusMap(' ').subscribe((statusList) => {
      this.equipmentStatusListFilter = ListUtils.orEmpty(statusList).sort((s1, s2) => s1.label.localeCompare(s2.label));
    });

    this.procurementRequestSearchService.getWarehouseCategoryMap().subscribe((res) => {
      if (res && res.length) {
        this.logisticsTypeList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
        this.locationWarehouseType = this.logisticsTypeList[0].value;
      }
    });

    this.procurementRequestSearchService.findAllBireSite().subscribe({
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
    const pickingKey = this.getTranslateKey('pickingOnAircraft');
    const warehouseLevelKey = this.getTranslateKey('warehouseLevel');
    const yesKey = this.getTranslateKey('yes');
    const noKey = this.getTranslateKey('no');
    const undefinedKey = this.getTranslateKey('undefined');
    this.translateService
      .get([localLevelKey, globalLevelKey, pickingKey, warehouseLevelKey, yesKey, noKey, undefinedKey])
      .subscribe({
        next: (results: { [key: string]: string }) => {
          const localLevelLabel = !!results ? results[localLevelKey] : 'Local';
          const globalLevelLabel = !!results ? results[globalLevelKey] : 'Global';
          const pickingLabel = !!results ? results[pickingKey] : 'Picking On Aircraft';
          const warehouseLevelLabel = !!results ? results[warehouseLevelKey] : 'Warehouse';
          this.candidateAssetCategoryList = [
            { label: warehouseLevelLabel, value: CandidateAssetCategory.WAREHOUSE },
            { label: localLevelLabel, value: CandidateAssetCategory.LOCAL },
            { label: globalLevelLabel, value: CandidateAssetCategory.GLOBAL },
            { label: pickingLabel, value: CandidateAssetCategory.PICKING }
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
    return ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM;
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
      const { prId, prItemId } = this.serializationService.deserialize(this.componentData.objectId) as {
        prId: number;
        prItemId: number;
      };

      this.logisticsService.findProcurementRequestByIdWithAllObjects({ id: prId }).subscribe((procurementRequest) => {
        const matchingProcurementRequestItem = ListUtils.orEmpty(procurementRequest.bidtProcReqItems).find(
          (procurementRequestItem) => procurementRequestItem.id === prItemId
        );

        if (matchingProcurementRequestItem) {
          this.procurementRequest = procurementRequest;
          this.procurementRequestItem = matchingProcurementRequestItem;

          this.subtitle = StringUtils.orEmpty(procurementRequest.procCode);

          this.displayComponentContext(this.isCreateOpenMode ? 'tab.createMode' : this.subtitle, this.isCreateOpenMode);

          if (this.procurementRequestItem.birePn) {
            this.logisticsService
              .findBirePnMeasuresByPnCode({
                pnCode: this.procurementRequestItem.birePn.pnCode as string
              })
              .subscribe((pnMeasures) => {
                this.setPotentialUnitList(pnMeasures);
                this.loadCandidateAssets();
              });
          }

          this.loadItemIllustration(this.procurementRequestItem);
        }

        if (this.procurementRequest.requestedPotential) {
          this.formattedRequestedPotential = NumberUtils.roundNumber(
            NumberUtils.fromString(this.procurementRequest.requestedPotential),
            2
          ).toString();
        }

        if (this.procurementRequest.bidmWorkOrder && this.procurementRequest.bidmWorkOrder.projectId) {
          this.logisticsService
            .findWorkPackage(this.procurementRequest.bidmWorkOrder.projectId)
            .pipe(
              concatMap((workPackage) =>
                workPackage.assetCode
                  ? this.logisticsService.findEquipment({ equipmentCode: workPackage.assetCode })
                  : of(undefined)
              )
            )
            .subscribe((workPackageAsset) => {
              this.workPackageAsset = workPackageAsset;
              this.workPackageAssetName = BidoEquipmentUtils.createAssetRepresentation(workPackageAsset);
            });
        }

        this.isProRecSupplierWarehouse = true;
        if (this.procurementRequestItem.bidtWarehouseId !== null && !!this.procurementRequestItem.bidtWarehouseId) {
          this.logisticsService.getWarehouseById(this.procurementRequestItem.bidtWarehouseId).subscribe({
            next: (warehouse: BidtWarehouseDTO) => {
              this.currentSupplierWarehouse = warehouse;
              this.isProRecSupplierWarehouse = false;
            }
          });
        } else if (!!this.procurementRequest.bidtWarehouseIssue) {
          this.currentSupplierWarehouse = this.procurementRequest.bidtWarehouseIssue;
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
    const stockMvts = ListUtils.orEmpty(this.procurementRequestItem.workshopEntries).filter(
      (stockMvt) => stockMvt.stockMvtWay === BidtStockMvtConstants.MVT_WAY_CREDIT
    );
    this.servedStockMvts = stockMvts.filter(
      (stockMvt) => stockMvt.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY
    );
    this.servedNb = this.servedStockMvts
      .map((stockMvt) => (stockMvt.stockMvtQuantity ? Number(stockMvt.stockMvtQuantity) : 0))
      .reduce((acc, x) => acc + x, 0);

    this.bookedNb = this.candidateAssets
      .map((candidateAsset) => this.getBookedQty(candidateAsset))
      .map((qty) => (StringUtils.isNullOrEmpty(qty) ? 0 : Number(qty)))
      .reduce((acc, x) => acc + x, 0);

    if (!StringUtils.isNullOrEmpty(this.procurementRequestItem.requestedQuantity)) {
      this.notServedNb = Math.max(
        0,
        NumberUtils.fromString(this.procurementRequestItem.requestedQuantity as string) - this.servedNb - this.bookedNb
      );
    }
  }

  private loadPreemptionRight(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.stockInformation && candidateAsset.stockInformation.siteId) {
      this.materialRequestManagementFormService
        .findSiteById(candidateAsset.stockInformation.siteId)
        .pipe(
          concatMap((site) =>
            this.materialRequestManagementFormService.hasDisplayRights({
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

    if (this.selectedcandidateAssetCategory === CandidateAssetCategory.WAREHOUSE) {
      const searchCandidateWarehouse$ = this.logisticsService.searchWarehouseCandidateAssets({
        bidtProcurementRequest: { ...this.procurementRequest, potentialUnit: this.potentialUnitSelected },
        bidtProcReqItem: this.procurementRequestItem
      });
      const inputRemainigQuantity: CalculateRemainingQuantityInput = {
        bidtProcReqItemDTO: this.procurementRequestItem,
        notServedQuantity: this.notServedNb
      };
      const calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);

      forkJoin([searchCandidateWarehouse$, calculateRemaining$]).subscribe({
        next: ([searchCandidateWarehouse, calculateRemaining]) => {
          this.candidateAssetsSrc = this.sortCandidateAssets(searchCandidateWarehouse);
          this.candidateAssetsSrc.forEach((candidateAsset) => {
            this.loadPreemptionRight(candidateAsset);
          });
          this.candidateAssets = [...this.candidateAssetsSrc];
          this.calculateSituation();
          this.calculateRemainingQuantity(calculateRemaining);
          this.iscandidateAssetsLoading = false;
        }
      });
    } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.LOCAL) {
      const searchCandidateLocal$ = this.logisticsService.searchLocalCandidateAssets({
        bidtProcurementRequest: { ...this.procurementRequest, potentialUnit: this.potentialUnitSelected },
        bidtProcReqItem: this.procurementRequestItem
      });
      const inputRemainigQuantity: CalculateRemainingQuantityInput = {
        bidtProcReqItemDTO: this.procurementRequestItem,
        notServedQuantity: this.notServedNb
      };
      const calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);

      forkJoin([searchCandidateLocal$, calculateRemaining$]).subscribe({
        next: ([searchCandidateLocal, calculateRemaining]) => {
          this.candidateAssetsSrc = this.sortCandidateAssets(searchCandidateLocal);
          this.candidateAssetsSrc.forEach((candidateAsset) => {
            this.loadPreemptionRight(candidateAsset);
          });
          this.candidateAssets = [...this.candidateAssetsSrc];
          this.calculateSituation();
          this.calculateRemainingQuantity(calculateRemaining);
          this.iscandidateAssetsLoading = false;
        }
      });
    } else if (this.selectedcandidateAssetCategory === CandidateAssetCategory.GLOBAL) {
      const searchCandidateGlobal$ = this.logisticsService.searchGlobalCandidateAssets({
        bidtProcurementRequest: { ...this.procurementRequest, potentialUnit: this.potentialUnitSelected },
        bidtProcReqItem: this.procurementRequestItem
      });
      const inputRemainigQuantity: CalculateRemainingQuantityInput = {
        bidtProcReqItemDTO: this.procurementRequestItem,
        notServedQuantity: this.notServedNb
      };
      const calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);

      forkJoin([searchCandidateGlobal$, calculateRemaining$]).subscribe({
        next: ([searchCandidateGlobal, calculateRemaining]) => {
          this.candidateAssetsSrc = this.sortCandidateAssets(searchCandidateGlobal);
          this.candidateAssetsSrc.forEach((candidateAsset) => {
            this.loadPreemptionRight(candidateAsset);
          });
          this.candidateAssets = [...this.candidateAssetsSrc];
          this.calculateSituation();
          this.calculateRemainingQuantity(calculateRemaining);
          this.iscandidateAssetsLoading = false;
        }
      });
    } else {
      const searchCandidateCanibalism$ = this.logisticsService.searchCandidateAssetsForCannibalism({
        bidtProcurementRequest: { ...this.procurementRequest, potentialUnit: this.potentialUnitSelected },
        bidtProcReqItem: this.procurementRequestItem
      });
      const inputRemainigQuantity: CalculateRemainingQuantityInput = {
        bidtProcReqItemDTO: this.procurementRequestItem,
        notServedQuantity: this.notServedNb
      };
      const calculateRemaining$ = this.logisticsService.calculateRemainingQuantity(inputRemainigQuantity);

      forkJoin([searchCandidateCanibalism$, calculateRemaining$]).subscribe({
        next: ([searchCandidateCanibalism, calculateRemaining]) => {
          this.candidateAssetsSrc = this.sortCandidateAssets(searchCandidateCanibalism);
          this.candidateAssets = [...this.candidateAssetsSrc];
          this.calculateSituation();
          this.calculateRemainingQuantity(calculateRemaining);
          this.iscandidateAssetsLoading = false;
        }
      });
    }
  }

  public calculateRemainingQuantity(calculateRemaining: CalculateProcurementRequestRemainingQuantity): void {
    this.quantityInMovement = calculateRemaining.quantityInMovement;
    this.remainingQuantity = calculateRemaining.remainingQuantity;
    this.createTransferOrderInput = {
      procurmentRequest: this.procurementRequest,
      procReqItem: this.procurementRequestItem,
      notServedQuantity: this.remainingQuantity
    };
  }

  private sortCandidateAssets(candidateAssets: CandidateAssetDTO[]): CandidateAssetDTO[] {
    return candidateAssets.sort((c1, c2) => {
      if (this.isCandidateAssetServed(c1) && !this.isCandidateAssetServed(c2)) {
        return -1;
      } else if (!this.isCandidateAssetServed(c1) && this.isCandidateAssetServed(c2)) {
        return 1;
      } else {
        if (
          c1.bookingProcurementRequest &&
          c1.bookingProcurementRequest.id === this.procurementRequest.id &&
          !(c2.bookingProcurementRequest && c2.bookingProcurementRequest.id === this.procurementRequest.id)
        ) {
          return -1;
        } else if (
          c2.bookingProcurementRequest &&
          c2.bookingProcurementRequest.id === this.procurementRequest.id &&
          !(c1.bookingProcurementRequest && c1.bookingProcurementRequest.id === this.procurementRequest.id)
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

  private loadItemIllustration(procurementRequestItem: BidtProcReqItemDTO): void {
    if (procurementRequestItem.birePn && !StringUtils.isNullOrEmpty(procurementRequestItem.birePn.pnCode)) {
      this.fileService.findBireDocItemByPnCode(procurementRequestItem.birePn.pnCode as string).subscribe({
        next: (docItem) => {
          if (
            docItem &&
            docItem.bireDocumentDTO &&
            ObjectUtils.isDefined(docItem.bireDocumentDTO.docFile) &&
            !StringUtils.isNullOrEmpty(docItem.bireDocumentDTO.docType)
          ) {
            this.itemIllustration = this.domSanitizer.bypassSecurityTrustResourceUrl(
              `${ImageUtils.getBase64Prefix(docItem.bireDocumentDTO.docType)}${docItem.bireDocumentDTO.docFile}`
            );
          }
        }
      });
    }
  }

  private init() {
    this.formattedRequestedPotential = '';
    this.selectedCandidateAsset = undefined;
    this.procurementRequest = {};
    this.procurementRequestItem = {};
    this.selectedcandidateAssetCategory = CandidateAssetCategory.WAREHOUSE;
    this.potentialUnitList = [];
    this.candidateAssetsSrc = [];
    this.candidateAssets = [];
    this.equipmentStatusList = [];
    this.statusList = [];
    this.servedNb = 0;
    this.bookedNb = 0;
    this.notServedNb = 0;
    this.iscandidateAssetsLoading = false;
    this.servedStockMvts = [];
    this.satifactionRateStatus = [];
    this.showCreateTransferOrderDialog = false;

    this.workPackageAsset = undefined;
    this.workPackageAssetName = '';

    this.searchFilterObject = {};
    this.searchFilterObject.sameSite = -1;
    this.searchFilterObject.availableAtDate = -1;
    this.searchFilterObject.potential = -1;
    this.searchFilterObject.calendarPotential = -1;
    this.searchFilterObject.bookingStatus = -1;
    this.searchFilterObject.noUnconfirmedFailure = -1;
    this.clearTables();
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

  private clearTables(): void {
    this.materialProposedTable = [];
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
    this.searchFilterObject.potential = SatisfactoryRateFilterState.UNDEFINED;
    this.searchFilterObject.calendarPotential = SatisfactoryRateFilterState.UNDEFINED;
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
        this.satisfactoryRatePotentialCriteria(elt) &&
        this.satisfactoryRateCalendarPotentialCriteria(elt) &&
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
        !!this.procurementRequest.bidtSiteReceipt &&
        elt.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId) ||
      (this.searchFilterObject.sameSite === SatisfactoryRateFilterState.NO && // NO
        !(
          !!elt.siteReceipt &&
          !!this.procurementRequest.bidtSiteReceipt &&
          elt.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId
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

  private satisfactoryRatePotentialCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.potential === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.potential === SatisfactoryRateFilterState.YES && // YES
        ((!this.procurementRequest.requestedPotential &&
          (!elt.potentialValue || NumberUtils.fromString(elt.potentialValue) > 0)) ||
          (!!elt.potentialValue &&
            !!this.procurementRequest.requestedPotential &&
            NumberUtils.fromString(elt.potentialValue) >
              NumberUtils.fromString(this.procurementRequest.requestedPotential)))) ||
      (this.searchFilterObject.potential === SatisfactoryRateFilterState.NO && // NO
        !(
          (!this.procurementRequest.requestedPotential &&
            (!elt.potentialValue || NumberUtils.fromString(elt.potentialValue) > 0)) ||
          (!!elt.potentialValue &&
            !!this.procurementRequest.requestedPotential &&
            NumberUtils.fromString(elt.potentialValue) >
              NumberUtils.fromString(this.procurementRequest.requestedPotential))
        ))
    );
  }

  private satisfactoryRateCalendarPotentialCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.UNDEFINED || // UNDEFIND
      (this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.YES && // YES
        ((!!this.procurementRequest.requestedDate &&
          !!this.procurementRequest.calendarPotential &&
          !!elt.calendarPotential &&
          moment(elt.calendarPotential).isAfter(moment(this.procurementRequest.calendarPotential))) ||
          !(
            !!this.procurementRequest.requestedDate &&
            !!this.procurementRequest.calendarPotential &&
            !!elt.calendarPotential
          ))) ||
      (this.searchFilterObject.calendarPotential === SatisfactoryRateFilterState.NO && // NO
        !(
          (!!this.procurementRequest.requestedDate &&
            !!this.procurementRequest.calendarPotential &&
            !!elt.calendarPotential &&
            moment(elt.calendarPotential).isAfter(moment(this.procurementRequest.calendarPotential))) ||
          !(
            !!this.procurementRequest.requestedDate &&
            !!this.procurementRequest.calendarPotential &&
            !!elt.calendarPotential
          )
        ))
    );
  }

  private statifactoryRateBookingStatusCriteria(elt: CandidateAssetDTO): boolean {
    return (
      this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.UNDEFINED || // UNDEFINED
      (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.YES && // YES
        (!ObjectUtils.isDefined(elt.bookingProcurementRequest) ||
          (!!elt.bookingProcurementRequest && elt.bookingProcurementRequest.id === this.procurementRequest.id))) ||
      (this.searchFilterObject.bookingStatus === SatisfactoryRateFilterState.NO && // NO
        !(
          !ObjectUtils.isDefined(elt.bookingProcurementRequest) ||
          (!!elt.bookingProcurementRequest && elt.bookingProcurementRequest.id === this.procurementRequest.id)
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

  public deleteMaterial(rowData: MaterialProposedTableRow): void {
    const criteriaInput: BidtStockMvtIdDTO = {
      id: Number(rowData.id)
    };
    this.logisticsService.deleteMaterial(criteriaInput).subscribe((results) => {
      // Todo depend on response
    });
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

    // Availability at date
    rate(this.isAvailableAtDate(candidateAsset));

    // Not booked by another procurement request
    rate(
      !ObjectUtils.isDefined(candidateAsset.bookingProcurementRequest) ||
        (candidateAsset.bookingProcurementRequest as BidtProcurementRequestDTO).id === this.procurementRequest.id
    );

    // Potential
    rate(
      !this.procurementRequest.requestedPotential ||
        (!!candidateAsset.potentialValue &&
          NumberUtils.fromString(candidateAsset.potentialValue) >=
            NumberUtils.fromString(this.procurementRequest.requestedPotential))
    );

    // Same site
    rate(
      !!candidateAsset.siteReceipt &&
        !!this.procurementRequest.bidtSiteReceipt &&
        candidateAsset.siteReceipt.siteId === this.procurementRequest.bidtSiteReceipt.siteId
    );

    // No Unconfirmed Failure
    rate(!ObjectUtils.isDefined(candidateAsset.unconfirmedFailure));

    // Calendar potential
    if (!candidateAsset.calendarPotential) {
      rate(true);
    } else {
      rate(
        moment(candidateAsset.calendarPotential).isAfter(
          moment(this.procurementRequest.calendarPotential || this.procurementRequest.requestedDate)
        )
      );
    }

    // tslint:disable-next-line:no-magic-numbers
    return NumberUtils.roundNumber((rates.filter((value) => value === 1).length / rates.length) * 100, 0);
  }

  private setPotentialUnitList(pnMeasures: BirePnMeasureDTO[] | undefined): void {
    this.potentialUnitList = ListUtils.orEmpty(pnMeasures)
      .map((pnMeasure) => pnMeasure.counterCode)
      .filter((counterCode) => !!counterCode)
      .sort((c1, c2) => (c1 as string).localeCompare(c2 as string))
      .map((counterCode) => {
        return {
          label: counterCode,
          command: () => {
            this.potentialUnitSelected = counterCode as string;
            this.loadCandidateAssets();
          }
        };
      });

    if (this.potentialUnitList.length > 0) {
      this.potentialUnitSelected = this.potentialUnitList[0].label as string;
    }
  }

  public formatSite(siteCode: string | undefined): string {
    const matchingSite = this.sites.find((site) => site.siteCode === siteCode);

    return matchingSite ? StringUtils.orEmpty(matchingSite.siteName) : '';
  }

  public pick(rowData: CandidateAssetDTO): void {
    this.saving = true;

    this.logisticsService
      .cannibalizeAsset({
        bidtProcReqItem: this.procurementRequestItem,
        candidateAsset: rowData,
        requestedDate: this.procurementRequest.requestedDate as Date
      })
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(() => {
        this.reload();
      });
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

  public cancelBooking(rowData: CandidateAssetDTO): void {
    if (rowData.equipment) {
      this.logisticsService.isAssetBooked(rowData.equipment).subscribe({
        next: (stockMvt) => {
          if (stockMvt) {
            this.logisticsService.cancelBookedAsset(stockMvt).subscribe({
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

  public cancelPicking(rowData: CandidateAssetDTO): void {
    if (rowData.currentBidmProject && rowData.currentBidmProject.projectId) {
      this.logisticsService.removeBidmProject({ projectId: rowData.currentBidmProject.projectId }).subscribe(() => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnCancelPicking'));
        this.reload();
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
    const procurementRequestQty = this.procurementRequestItem.requestedQuantity
      ? NumberUtils.fromString(this.procurementRequestItem.requestedQuantity)
      : undefined;

    return (
      ObjectUtils.isDefined(procurementRequestQty) && this.bookedNb + this.servedNb < (procurementRequestQty as number)
    );
  }

  public bookCandidateAsset(candidateAsset: CandidateAssetDTO): void {
    if (candidateAsset.equipment) {
      candidateAsset._bookCandidateAssetLoading = true;

      const quantity = candidateAsset.equipment.sn
        ? '1'
        : this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_STOCK_LEVELING ||
          this.procurementRequest.procType === AWPropertiesConstants.PROCUREMENT_REQUEST_TYPE_DEPLOYEMENT_BATCH
        ? (candidateAsset.equipment.quantity || 0).toString()
        : Math.min(this.notServedNb, candidateAsset.equipment.quantity || 0).toString();

      this.logisticsService
        .bookCandidateAsset({ quantity, candidateAsset, bidtProcReqItem: this.procurementRequestItem })
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
        : Math.min(this.notServedNb, candidateAsset.equipment.quantity || 0).toString();

      this.logisticsService
        .preemptCandidateAsset({ quantity, candidateAsset, bidtProcReqItem: this.procurementRequestItem })
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
      this.servedStockMvts.some(
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
    return this.procurementRequestSearchService.getWarehousesBySiteId(siteId).pipe(
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

  public isUserHasRight(right: string, degree: number) {
    return this.sessionService.hasUserRightByUseCase(right, degree);
  }

  public onCreateTransferOrder(): void {
    this.reload();
  }

  public openCreateTransferDialog(): void {
    this.showCreateTransferOrderDialog = true;
  }
}
