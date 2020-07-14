import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ComponentCommunicationService } from '../../../../shared/services/component-communication.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { GetPotentialListInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-potential-list-input.interface';
import { GetQuantityInStockBySiteInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-quantity-in-stock-by-site-input.interface';
import { GetQuantityInStockInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-quantity-in-stock-input.interface';
import { GetStockInformationListByCriteriaInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/get-stock-information-list-by-criteria-input.interface';
import { FindProductByWarehouseIdAndProductCodeInput } from '../../../../shared/types/api-input-types/logistics-material/find-product-by-warehouse-and-product-input.interface';
import { FindAllGoodMovementOutput } from '../../../../shared/types/api-output-types/bidt-stock-mvt/find-all-good-movement-output.interface';
import { BidtWarehouseProductDTO } from '../../../../shared/types/api-output-types/bidt-warehouse/bidt-warehouse-product-dto.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { StockInformationDTO } from '../../../../shared/types/api-types/stock-information-dto-interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { AirworthinessControlFormComponentInput } from '../../../maintenance/airworthiness-control/types/airworthiness-control-form-component-input.interface';

import { MaterialAvailabilityFormService } from './material-availability-form.service';

interface StockMvtRow {
  data: FindAllGoodMovementOutput;
  date: string;
  hasPurchaseRequest: boolean;
  hasWorkOrder: boolean;
  isExecuted: boolean;
  isOutDated: boolean;
  isPlanned: boolean;
  isRequested: boolean;
  materialIllustration: SafeResourceUrl | undefined;
  quantity: string;
  quantityAvailable?: number;
  statusStock?: string;
  reconditionedChecked: boolean;
  status: string;
  stockInformationTable: StockInformationRow[];
  stockInformationTableSelectionAvailable: boolean;
  stockInformationTableSelectionList: StockInformationRow[];
  time: string;
  type: number;
  expectedTitle?: string;
}

interface StockInformationRow {
  batch: string;
  potential: string;
  quantity: string;
  site: string;
  sn: string;
  stockType: string;
  storageBin: string;
  valuationGroup: string;
  warehouse: string;
  isSnAlreadySelected: boolean;
  isBatchAlreadySelected: boolean;
  woSelectedSn?: string;
  _obj: StockInformationDTO;
  _selected: boolean;
  _selectionAvailable: boolean;
}

interface StockRowInput {
  bidtStockMvtDTO: BidtStockMvtDTO;
  stockInformationTable?: StockInformationRow[];
}

interface MaterialTableRow {
  pnCode?: string;
  availableQuantity?: number;
  interchangeability?: string;
  isSn?: boolean;
  _select: boolean;
}

interface WarehouseTableRow {
  bidtWarehouseDTO?: BidtWarehouseDTO;
  product?: BidtWarehouseProductDTO;
  site?: BidtSiteDTO;
  quantity?: number;
  status?: string;
  _select: boolean;
}

interface SnBatchTableRow {
  stockInformationRow?: StockInformationRow;
  _select: boolean;
  storageDate?: string;
}

interface BreadcrumbsLabel {
  tittle?: string;
  subtittle?: string;
}

@Component({
  selector: 'aw-material-availability-form',
  styleUrls: ['./material-availability-form.component.scss'],
  templateUrl: './material-availability-form.component.html'
})
export class MaterialAvailabilityFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  private stockRowInputId: number;
  public goodMvtOutput: StockMvtRow;
  private stockRowInput: StockRowInput;

  public subTitle: string;
  public breadcrumbs: BreadcrumbsLabel;
  public breadcrumbsList: BreadcrumbsLabel[];
  public materialTable: MaterialTableRow[];
  public materialTableSelection: MaterialTableRow;
  public warehouseTable: WarehouseTableRow[];
  public warehouseTableSelection: WarehouseTableRow;
  public snBatchTable: SnBatchTableRow[];
  public snBatchTableSelection: SnBatchTableRow;
  public workPackage: BidmProjectDTO;
  public mroCenter: BidtSiteDTO;

  public materialTableColumn: TableColumn[];
  public warehouseTableColumn: TableColumn[];
  public snBatchTableColumn: TableColumn[];

  public materailTableIsLoading: boolean;
  public warehouseTableIsLoading: boolean;
  public snBatechTableIsLoading: boolean;
  public materialFirstInit: boolean = true;
  public warehouseFirstInit: boolean = true;
  public snBatchFirstInit: boolean = true;
  public noPnInWarehouse: boolean;
  public noSnWithPn: boolean;
  public noBatchWithPn: boolean;
  public isSaving: boolean = false;

  public warehouseTableMessage: string;
  public expectedTitle: string | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly translateService: TranslateService,
    private readonly materialAvailabilityFormService: MaterialAvailabilityFormService,
    private readonly componentCommunicationService: ComponentCommunicationService,
    private readonly dateService: DateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.aWPropertiesConstants = AWPropertiesConstants;
    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_AVAILABILITY_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData.objectId) {
      this.goodMvtOutput = this.serializationService.deserialize(this.componentData.objectId) as StockMvtRow;
      if (this.goodMvtOutput.data.stockMvt.id) {
        this.stockRowInputId = this.goodMvtOutput.data.stockMvt.id;
      }
      this.materialAvailabilityFormService.getStockMvtById(this.stockRowInputId).subscribe((stockMvt) => {
        this.stockRowInput = {
          bidtStockMvtDTO: stockMvt
        };
        if (this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId) {
          this.materialAvailabilityFormService
            .findBidmProjectById(this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId)
            .subscribe((project) => {
              this.workPackage = project;
              this.materialAvailabilityFormService.findAllSite().subscribe((siteList) => {
                siteList.forEach((site) => {
                  if (
                    site.siteCode === this.goodMvtOutput.data.repairCenterCode &&
                    site.siteName === this.goodMvtOutput.data.repairCenter
                  ) {
                    this.mroCenter = site;
                  }
                });
                this.createBreadcrumbsList();
                this.initMaterialTable();
              });
              this.translateService.get(this.getTranslateKey('workPackage')).subscribe((translation) => {
                this.subTitle = `${translation || 'Work Package'} n°${this.workPackage.projectNumber}`;
                this.displayComponentContext(this.subTitle, false);
              });
            });
        } else {
          this.createBreadcrumbsList();
          this.initMaterialTable();
        }
      });
    }
  }

  public refresh(): void {
    this.init();
    this.createBreadcrumbsList();
    this.initMaterialTable();
  }

  private init(): void {
    this.breadcrumbs = {};
    this.materialTableSelection = { _select: false };
    this.warehouseTableSelection = { _select: false };
    this.snBatchTableSelection = { _select: false };
    this.materailTableIsLoading = false;
    this.warehouseTableIsLoading = false;
    this.snBatechTableIsLoading = false;
    this.noPnInWarehouse = false;
    this.noSnWithPn = false;
    this.noBatchWithPn = false;
    this.materialFirstInit = true;
    this.warehouseFirstInit = true;
    this.snBatchFirstInit = true;
  }

  public cancel(): void {
    this.closeComponent();
  }

  private createBreadcrumbsList(): void {
    this.breadcrumbsList = [];
    forkJoin([this.translateService.get(this.getTranslateKey('selectStock'))]).subscribe({
      next: ([translation]) => {
        if (
          this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId &&
          this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderWoId
        ) {
          const woDtoId: BidmWorkOrderDTOId = {
            projectId: this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderProjectId,
            woId: this.stockRowInput.bidtStockMvtDTO.bidmWorkOrderWoId
          };
          this.materialAvailabilityFormService.findBidmWorkOrder(woDtoId).subscribe((workOrder) => {
            this.breadcrumbs.subtittle = `${workOrder.woCode} - ${this.goodMvtOutput.data.product.articleDesignation}`;
            this.breadcrumbsList.push(this.breadcrumbs);
          });
        }
        this.breadcrumbs.tittle = translation;
      }
    });
  }

  private initMaterialTable(): void {
    this.materialTable = [];
    const product = {
      pnCode: this.stockRowInput.bidtStockMvtDTO.birePnPnCode
    };
    this.materialAvailabilityFormService.getMaterialDetails(product).subscribe((result) => {
      if (result.birePnDTO.pnCode) {
        const materialInput: MaterialTableRow = {
          pnCode: result.birePnDTO.pnCode,
          interchangeability: undefined,
          isSn: result.birePnDTO.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH ? false : true,
          _select: false
        };
        this.materialTable.push(materialInput);
        result.bidtPnAlternativeDTOs.forEach((alternative) => {
          if (alternative.birePnByFkBidtPnBidtPn2BirePnPnCode) {
            if (alternative.birePnByFkBidtPnBidtPn2BirePnPnCode === result.birePnDTO.pnCode) {
              if (alternative.birePnByFkBidtPnBidtPn1BirePnPnCode) {
                const productAlt1 = {
                  pnCode: alternative.birePnByFkBidtPnBidtPn1BirePnPnCode
                };
                const materialAlt1: MaterialTableRow = {
                  pnCode: alternative.birePnByFkBidtPnBidtPn1BirePnPnCode,
                  interchangeability: alternative.nameOfInterchangebilty,
                  _select: false
                };
                this.materialTable.push(materialAlt1);
                this.materialAvailabilityFormService.getMaterialDetails(productAlt1).subscribe((altResult) => {
                  materialAlt1.isSn =
                    altResult.birePnDTO.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH ? false : true;
                });
              }
            } else {
              const productAlt2 = {
                pnCode: alternative.birePnByFkBidtPnBidtPn2BirePnPnCode
              };
              const materialAlt2: MaterialTableRow = {
                pnCode: alternative.birePnByFkBidtPnBidtPn2BirePnPnCode,
                interchangeability: alternative.nameOfInterchangebilty,
                _select: false
              };
              this.materialTable.push(materialAlt2);
              this.materialAvailabilityFormService.getMaterialDetails(productAlt2).subscribe((altResult2) => {
                materialAlt2.isSn =
                  altResult2.birePnDTO.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH ? false : true;
              });
            }
          }
        });
        this.materialTable.forEach((material) => {
          if (material.pnCode) {
            if (
              this.goodMvtOutput.data.stockMvt.birePnPnCode &&
              this.goodMvtOutput.data.stockMvt.birePnPnCode === material.pnCode &&
              this.materialFirstInit
            ) {
              this.toggleMaterialVisibility(material, true);
              this.materialFirstInit = false;
            }
            const birePnDTOIdInput: BirePnDTOId = {
              pnCode: material.pnCode
            };
            let dateInput: Date = new Date();
            if (this.stockRowInput.bidtStockMvtDTO.stockMvtDate) {
              dateInput = new Date(this.stockRowInput.bidtStockMvtDTO.stockMvtDate);
            }

            const getQuantityInAllStocksInput: GetQuantityInStockBySiteInput = {
              birePnDTOId: birePnDTOIdInput,
              site: this.mroCenter,
              quantity: Number(this.stockRowInput.bidtStockMvtDTO.stockMvtQuantity),
              date: this.stockRowInput.bidtStockMvtDTO.stockMvtDate,
              basedOnExecutedMovements:
                dateInput.getTime() <=
                moment()
                  .toDate()
                  .getTime()
            };
            this.materialAvailabilityFormService
              .getQuantityInStockBySite(getQuantityInAllStocksInput)
              .subscribe((availableQuantity) => {
                material.availableQuantity = availableQuantity.quantity;
              });
          }
        });
      }
    });
  }

  private initWarehousesTable(sort: boolean): void {
    this.noPnInWarehouse = false;
    this.warehouseFirstInit = true;
    if (!this.warehouseTableIsLoading) {
      this.warehouseTableIsLoading = true;
      this.warehouseTable = [];
      if (this.materialTableSelection && this.materialTableSelection.pnCode) {
        this.materialAvailabilityFormService
          .findWarehouseByProduct(this.materialTableSelection.pnCode)
          .subscribe((result) => {
            if (result.length > 0) {
              result.forEach((warehouse) => {
                if (
                  warehouse.wareHouseId &&
                  this.materialTableSelection &&
                  this.materialTableSelection.pnCode &&
                  this.mroCenter
                ) {
                  if (warehouse.bidtSiteId && this.mroCenter.siteId && warehouse.bidtSiteId === this.mroCenter.siteId) {
                    const warehouseDto: WarehouseTableRow = {
                      bidtWarehouseDTO: warehouse,
                      site: this.mroCenter,
                      _select: false
                    };
                    this.warehouseTable.push(warehouseDto);
                  }
                } else if (!this.mroCenter && warehouse.wareHouseId) {
                  const warehouseDto: WarehouseTableRow = {
                    bidtWarehouseDTO: warehouse,
                    site: undefined,
                    _select: false
                  };
                  this.warehouseTable.push(warehouseDto);
                }
              });
            }
            if (result.length === 0 || this.warehouseTable.length === 0) {
              this.noPnInWarehouse = true;
              if (this.materialTableSelection) {
                this.materialTableSelection._select = true;
                this.warehouseTableIsLoading = false;
              }
            }
            this.warehouseTable.forEach((warehouse) => {
              if (warehouse.bidtWarehouseDTO && warehouse.bidtWarehouseDTO.bidtSiteId) {
                this.materialAvailabilityFormService
                  .getSiteById(warehouse.bidtWarehouseDTO.bidtSiteId)
                  .subscribe((siteResult) => {
                    warehouse.site = siteResult;
                    if (
                      warehouse.bidtWarehouseDTO &&
                      warehouse.bidtWarehouseDTO.wareHouseId &&
                      this.stockRowInput.bidtStockMvtDTO.birePnPnCode
                    ) {
                      if (
                        this.goodMvtOutput.data.stockMvt.bidtWarehouseId &&
                        this.goodMvtOutput.data.stockMvt.bidtWarehouseId === warehouse.bidtWarehouseDTO.wareHouseId &&
                        this.warehouseFirstInit
                      ) {
                        this.toggleWarehouseVisibility(warehouse);
                        this.warehouseFirstInit = false;
                      }
                      const input: FindProductByWarehouseIdAndProductCodeInput = {
                        warehouseId: warehouse.bidtWarehouseDTO.wareHouseId,
                        pnCode: this.stockRowInput.bidtStockMvtDTO.birePnPnCode
                      };
                      this.materialAvailabilityFormService.findByWarehouseIdAndProductCode(input).subscribe((stock) => {
                        warehouse.product = stock;
                      });
                      if (this.stockRowInput.bidtStockMvtDTO.birePnPnCode && warehouse.bidtWarehouseDTO) {
                        const pnDtoId: BirePnDTOId = {
                          pnCode: this.stockRowInput.bidtStockMvtDTO.birePnPnCode
                        };
                        let dateInput: Date = new Date();
                        if (this.stockRowInput.bidtStockMvtDTO.stockMvtDate) {
                          dateInput = new Date(this.stockRowInput.bidtStockMvtDTO.stockMvtDate);
                        }
                        const inputQuantity: GetQuantityInStockInput = {
                          birePnDTOId: pnDtoId,
                          warehouseId: warehouse.bidtWarehouseDTO.wareHouseId,
                          date: this.stockRowInput.bidtStockMvtDTO.stockMvtDate,
                          basedOnExecutedMovements:
                            dateInput.getTime() <=
                            moment()
                              .toDate()
                              .getTime()
                        };
                        this.materialAvailabilityFormService.getQuantityInStock(inputQuantity).subscribe((quantity) => {
                          if (quantity < Number(this.stockRowInput.bidtStockMvtDTO.stockMvtQuantity)) {
                            warehouse.status = ControlConfigConstants.ICON_RED_LIGHT_CODE;
                            warehouse.quantity = quantity;
                          } else if (
                            warehouse.product &&
                            warehouse.product.whPrLowThreshold &&
                            quantity < warehouse.product.whPrLowThreshold
                          ) {
                            warehouse.status = ControlConfigConstants.ICON_YELLOW_LIGHT_CODE;
                            warehouse.quantity = quantity;
                          } else {
                            warehouse.status = ControlConfigConstants.ICON_GREEN_LIGHT_CODE;
                            warehouse.quantity = quantity;
                          }
                        });
                      }
                      if (this.materialTableSelection) {
                        this.materialTableSelection._select = true;
                        this.warehouseTableIsLoading = false;
                        if (sort) {
                          this.sortMaterialTable();
                        }
                      }
                    }
                  });
              }
            });
          });
      }
    }
  }

  public sortMaterialTable(): void {
    this.materialTable.sort((a, b): number => {
      if (a.pnCode !== undefined && b.pnCode !== undefined) {
        const boll = +b._select - +a._select || a.pnCode.localeCompare(b.pnCode);

        return boll;
      } else {
        return 0;
      }
    });
  }

  public initSnBatch(): void {
    this.noSnWithPn = false;
    this.noBatchWithPn = false;
    this.snBatchFirstInit = true;
    if (!this.snBatechTableIsLoading) {
      this.snBatechTableIsLoading = true;
      this.snBatchTable = [];
      if (
        this.warehouseTableSelection &&
        this.warehouseTableSelection.site &&
        this.warehouseTableSelection.bidtWarehouseDTO
      ) {
        const siteId = this.warehouseTableSelection.site.siteId;
        const input: GetStockInformationListByCriteriaInput = {
          issuePeriod: undefined, // TODO: replace 'undefined' by row.data.stockMvt.stockMvtDate,
          siteId,
          warehouseId: this.warehouseTableSelection.bidtWarehouseDTO.wareHouseId,
          pn: this.stockRowInput.bidtStockMvtDTO.birePnPnCode,
          withItsAlternatives: false
        };
        this.materialAvailabilityFormService.findStockInformationListByCriteria(input).subscribe({
          next: (results) => {
            if (results.length !== 0) {
              this.stockRowInput.stockInformationTable = ListUtils.orEmpty(results).map((result) =>
                this.createStockInformationRow(result, this.stockRowInput.bidtStockMvtDTO)
              );
              this.stockRowInput.stockInformationTable.forEach((stock) => {
                const stockRow: SnBatchTableRow = {
                  stockInformationRow: stock,
                  _select: false,
                  storageDate: stock._obj.stockReceiptDate
                    ? this.dateService.dateWithHourMinSecToString(stock._obj.stockReceiptDate)
                    : undefined
                };
                if (stockRow.stockInformationRow) {
                  if (
                    ObjectUtils.isDefined(stockRow.stockInformationRow._obj.stockSn) &&
                    ObjectUtils.isDefined(stockRow.stockInformationRow._obj.stockIssueQuantity)
                  ) {
                    stockRow.stockInformationRow.isSnAlreadySelected = true;
                  }
                  if (
                    ObjectUtils.isDefined(stockRow.stockInformationRow._obj.stockBatchNumber) &&
                    ObjectUtils.isDefined(stockRow.stockInformationRow._obj.stockIssueQuantity)
                  ) {
                    stockRow.stockInformationRow.isBatchAlreadySelected = true;
                  }
                  if (
                    (this.goodMvtOutput.data.stockMvt.stockMvtSn &&
                      this.goodMvtOutput.data.stockMvt.stockMvtSn === stockRow.stockInformationRow._obj.stockSn) ||
                    (this.goodMvtOutput.data.stockMvt.stockMvtBatchNumber &&
                      this.goodMvtOutput.data.stockMvt.stockMvtBatchNumber ===
                        stockRow.stockInformationRow._obj.stockBatchNumber)
                  ) {
                    stockRow.stockInformationRow.isSnAlreadySelected = false;
                    stockRow.stockInformationRow.isBatchAlreadySelected = false;
                    if (this.snBatchFirstInit) {
                      this.toggleSnBatchVisibility(stockRow);
                      this.snBatchFirstInit = false;
                    }
                  }
                }

                this.snBatchTable.push(stockRow);
              });
              this.loadPotentialList(this.stockRowInput, siteId);
            } else {
              if (this.materialTableSelection.isSn) {
                this.noSnWithPn = true;
              } else {
                this.noBatchWithPn = true;
              }
            }
          },
          complete: () => {
            if (this.warehouseTableSelection) {
              this.warehouseTableSelection._select = true;
              this.snBatechTableIsLoading = false;
            }
          }
        });
      }
    }
  }

  private loadPotentialList(stockMvtRow: StockRowInput, siteId: number | undefined): void {
    if (stockMvtRow.bidtStockMvtDTO.birePnPnCode) {
      const pnId: BirePnDTOId = {
        pnCode: stockMvtRow.bidtStockMvtDTO.birePnPnCode as string
      };
      const potentialListInput: GetPotentialListInput = {
        birePnDTOId: pnId,
        mvtDate: stockMvtRow.bidtStockMvtDTO.stockMvtDate,
        mvtId: stockMvtRow.bidtStockMvtDTO.id,
        siteId,
        stockStatusCode: stockMvtRow.bidtStockMvtDTO.stockStatus,
        stockTypeId: stockMvtRow.bidtStockMvtDTO.bidtStockTypeId,
        stockValuationId: stockMvtRow.bidtStockMvtDTO.bidtValuationGroupId,
        storageBinId: stockMvtRow.bidtStockMvtDTO.bidtStorageBinId,
        warehouseId: stockMvtRow.bidtStockMvtDTO.bidtWarehouseId,
        withPnAlternatives: false
      };
      this.materialAvailabilityFormService.findPotentialListByStockMvt(potentialListInput).subscribe({
        next: (results) => {
          const potentialList = ListUtils.orEmpty(results);
          if (this.stockRowInput.stockInformationTable) {
            this.stockRowInput.stockInformationTable.forEach((stockInformationRow) => {
              const matchingPotential = potentialList.find(
                (potential) =>
                  (ObjectUtils.isDefined(potential.stockMvtBatchNumber) &&
                    potential.stockMvtBatchNumber === stockInformationRow._obj.stockBatchNumber) ||
                  (ObjectUtils.isDefined(potential.stockMvtSn) &&
                    potential.stockMvtSn === stockInformationRow._obj.stockSn)
              );
              if (matchingPotential) {
                stockInformationRow.potential = matchingPotential
                  ? StringUtils.orEmpty(matchingPotential.potential)
                  : '';
              }
            });
          }
        }
      });
    }
  }

  private createStockInformationRow(
    stockInformation: StockInformationDTO,
    stockMvt: BidtStockMvtDTO
  ): StockInformationRow {
    // Quantity
    const quantity = !StringUtils.isNullOrEmpty(stockInformation.stockReceiptQuantity)
      ? NumberUtils.fromString(stockInformation.stockReceiptQuantity)
      : undefined;
    const formattedQuantity =
      ObjectUtils.isDefined(quantity) && !isNaN(quantity as number)
        ? NumberUtils.roundNumber(quantity as number, 1).toString()
        : '';

    // Selection availability of stock information rows
    const stockMvtQuantity = this.getStockMvtQuantity(stockMvt);
    const selectionAvailable =
      ObjectUtils.isDefined(stockMvtQuantity) && !isNaN(stockMvtQuantity as number) && (stockMvtQuantity as number) > 0;

    const stockInformationRow: StockInformationRow = {
      batch: StringUtils.orEmpty(stockInformation.stockBatchNumber),
      potential: '',
      quantity: formattedQuantity,
      site: StringUtils.orEmpty(stockInformation.siteText),
      sn: StringUtils.orEmpty(stockInformation.stockSn),
      stockType: StringUtils.orEmpty(stockInformation.stockTypeText),
      storageBin: StringUtils.orEmpty(stockInformation.storageBinText),
      valuationGroup: StringUtils.orEmpty(stockInformation.valuationGroupText),
      warehouse: StringUtils.orEmpty(stockInformation.warehouseText),
      isSnAlreadySelected: false,
      isBatchAlreadySelected: false,
      _obj: stockInformation,
      _selected: false,
      _selectionAvailable: selectionAvailable
    };

    return stockInformationRow;
  }

  private getStockMvtQuantity(stockMvt: BidtStockMvtDTO): number | undefined {
    return !StringUtils.isNullOrEmpty(stockMvt.stockMvtQuantity)
      ? NumberUtils.fromString(stockMvt.stockMvtQuantity as string)
      : undefined;
  }

  public toggleWarehouseVisibility(row: WarehouseTableRow): void {
    if (!row._select) {
      this.cleanWarehouseInfo();
      this.fillWarehouseInfo(row);
      this.initSnBatch();
    } else {
      this.cleanWarehouseInfo();
    }
  }

  private fillWarehouseInfo(row: WarehouseTableRow): void {
    if (row.bidtWarehouseDTO) {
      this.stockRowInput.bidtStockMvtDTO.bidtWarehouseId = row.bidtWarehouseDTO.wareHouseId;
      this.warehouseTableSelection = row;
    }
  }

  private cleanWarehouseInfo(): void {
    this.noPnInWarehouse = false;
    this.stockRowInput.bidtStockMvtDTO.bidtWarehouseId = undefined;
    this.clearSnBatchInfo();
    if (this.warehouseTableSelection) {
      this.warehouseTableSelection._select = false;
    }
  }

  public toggleMaterialVisibility(row: MaterialTableRow, sort: boolean): void {
    if (!row._select) {
      this.clearPnInfo(row);
      this.fillPnInfo(row);
      this.initWarehousesTable(sort);
    } else {
      this.clearPnInfo(row);
    }
  }

  private fillPnInfo(row: MaterialTableRow): void {
    this.stockRowInput.bidtStockMvtDTO.birePnPnCode = row.pnCode;
    this.materialTableSelection = row;
  }

  private clearPnInfo(row: MaterialTableRow): void {
    // this.stockRowInput.bidtStockMvtDTO.birePnPnCode = undefined;
    this.cleanWarehouseInfo();
    this.clearSnBatchInfo();
    if (this.materialTableSelection !== row) {
      this.materialTableSelection._select = false;
    }
  }

  public toggleSnBatchVisibility(row: SnBatchTableRow): void {
    if (!row._select) {
      this.clearSnBatchInfo();
      this.fillSnBatchInfo(row);
    } else {
      this.clearSnBatchInfo();
    }
  }

  private fillSnBatchInfo(row: SnBatchTableRow): void {
    if (row.stockInformationRow) {
      if (ObjectUtils.isDefined(row.stockInformationRow._obj.stockSn)) {
        this.stockRowInput.bidtStockMvtDTO.stockMvtSn = row.stockInformationRow._obj.stockSn;
      } else if (ObjectUtils.isDefined(row.stockInformationRow._obj.stockBatchNumber)) {
        this.stockRowInput.bidtStockMvtDTO.stockMvtBatchNumber = row.stockInformationRow._obj.stockBatchNumber;
      }
      this.snBatchTableSelection = row;
      this.snBatchTableSelection._select = true;
    }
  }

  private clearSnBatchInfo(): void {
    this.stockRowInput.bidtStockMvtDTO.stockMvtSn = undefined;
    this.stockRowInput.bidtStockMvtDTO.stockMvtBatchNumber = undefined;
    this.noSnWithPn = false;
    this.noBatchWithPn = false;
    if (this.snBatchTableSelection) {
      this.snBatchTableSelection._select = false;
    }
  }

  public save(): void {
    this.isSaving = true;
    this.materialAvailabilityFormService
      .addOrUpdateStockMvt(this.stockRowInput.bidtStockMvtDTO)
      .subscribe((stockMvtResult) => {
        this.isSaving = false;
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveStockSelection'));
        this.componentCommunicationService.changeStock(stockMvtResult);
        this.closeComponent();
      });
  }

  public openAirworthinessStatus(stockInformationRow: StockInformationRow): void {
    const equipmentInput: BidoEquipmentDTO = {
      pnCode: stockInformationRow._obj.pn,
      sn: stockInformationRow.sn
    };
    this.materialAvailabilityFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe({
      next: (equipmentList) => {
        if (
          ObjectUtils.isDefined(equipmentList) &&
          equipmentList.length === 1 &&
          ObjectUtils.isDefined(equipmentList[0])
        ) {
          const equipment: BidoEquipmentDTO = equipmentList[0];

          if (equipment.equipmentCode) {
            const objectId: AirworthinessControlFormComponentInput = {
              equipmentCodeList: [equipment.equipmentCode]
            };

            const data: PageComponentData = {
              componentId: ComponentConstants.MAI_AIRWORTHINESS_CONTROL_FOR_ASSET_FORM,
              id: this.tabService.generateId(),
              openMode: ComponentOpenMode.Write,
              objectId: this.serializationService.serialize(objectId)
            };
            const labelKey = 'transaction.' + data.componentId;

            this.tabService.open(this.tabService.create(data, labelKey, true));
          }
        }
      }
    });
  }

  public isConfOk(row: WarehouseTableRow): boolean {
    return row.status === ControlConfigConstants.ICON_GREEN_LIGHT_CODE;
  }

  public isConfWarning(row: WarehouseTableRow): boolean {
    return row.status === ControlConfigConstants.ICON_YELLOW_LIGHT_CODE;
  }

  public isConfNok(row: WarehouseTableRow): boolean {
    return row.status === ControlConfigConstants.ICON_RED_LIGHT_CODE;
  }

  public navigateToEquipment(pn: string | undefined, sn: string | undefined): void {
    if (pn && sn) {
      const equipmentInput: BidoEquipmentDTO = {
        sn,
        pnCode: pn
      };
      this.materialAvailabilityFormService.findBidoEquipmentsByPnAndSn(equipmentInput).subscribe({
        next: (equipmentList) => {
          if (
            ObjectUtils.isDefined(equipmentList) &&
            equipmentList.length === 1 &&
            ObjectUtils.isDefined(equipmentList[0])
          ) {
            const equipment: BidoEquipmentDTO = equipmentList[0];

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
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenEquipment'));
    }
  }

  public navigateToMaterial(pnCode: string | undefined): void {
    if (pnCode) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MATERIAL_FORM,
        objectId: this.serializationService.serialize({ pnCode }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnOpenMaterial'));
    }
  }
}
