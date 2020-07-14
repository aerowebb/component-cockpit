import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { FileUpload, SelectItem } from 'primeng/primeng';
import { Observable, Subject, forkJoin, of } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { BidtStockMvtTypeConstant } from '../../../../shared/constants/bidt-stock-mvt-type-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { CreateProcurementRequestInput } from '../../../../shared/types/api-input-types/logistic/create-procurement-request-input.interface';
import { FindStockMvtsByCriteriaInput } from '../../../../shared/types/api-input-types/logistic/find-stock-mvts-by-criteria-input.interface';
import { SaveProcurementRequestInput } from '../../../../shared/types/api-input-types/logistic/save-document-procurement-request-input.interface';
import { ReferenceBatchDTO } from '../../../../shared/types/api-output-types/fleet-management/reference-batch-dto.interface';
import { WorkOrderOVSInputDTO } from '../../../../shared/types/api-output-types/ovs-popup/work-order-ovs-input-dto.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoCounterReferenceDTO } from '../../../../shared/types/api-types/bido-counter-reference-dto.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtProcReqItemDTO } from '../../../../shared/types/api-types/bidt-proc-req-item-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BidtTorItemDTO } from '../../../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { BidoEquipmentUtils } from '../../../../shared/utils/bido-equipment-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import {
  LogisticalUtils,
  ProcurementRequestItemRow,
  ProcurementRequestReverseItemRow
} from '../../../../shared/utils/logistic-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { OverlayService } from '../../../overlay/overlay.service';
import { LogisticsService } from '../../logistics.service';

import { ProcurementRequestFormService } from './procurement-request-form.service';
import { ProcurementRequesttatusComponent } from './status/procurement-request-status.component';

export interface WorkshopEntryRow {
  obj: BidtStockMvtDTO;
  equipment?: BidoEquipmentDTO;
  manufacturingBatch?: ReferenceBatchDTO;
}

export interface StockMvtParameters {
  searchParameters: FindStockMvtsByCriteriaInput;
  bidtStockList: BidtStockMvtDTO[];
}

@Component({
  selector: 'aw-procurement-request-form',
  styleUrls: ['./procurement-request-form.component.scss'],
  templateUrl: './procurement-request-form.component.html'
})
export class ProcurementRequestFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly aWPropertiesConstants: typeof AWPropertiesConstants;
  public readonly bidtStockMvtConstants: typeof BidtStockMvtConstants;
  public readonly component: typeof ProcurementRequestFormComponent;
  public readonly bidtStockMvtTypeConstants: typeof BidtStockMvtTypeConstant;

  public procurementRequest: BidtProcurementRequestDTO;
  public procurementRequestCriticities: LabelValue<string>[];
  public procurementRequestStatuses: LabelValue<string>[];
  public procurementRequestTypes: LabelValue<string>[];
  public procurementRequestUnits: LabelValue<string>[];
  public stockMvtStatuses: LabelValue<string>[];
  public operationalStatuses: LabelValue<string>[];
  public userLogin: string;
  public userName: string;
  public workPackageAsset: BidoEquipmentDTO | undefined;
  public workPackageAssetName: string;

  public bookedNb: number;
  public notBookedNb: number;
  public isServed: boolean;
  public servedNb: number;
  public bookedButDidntStartedNb: number;

  public procurementRequestItems: ProcurementRequestItemRow[];
  public selectedProcurementRequestItem: ProcurementRequestItemRow | undefined;

  public workshopEntries: WorkshopEntryRow[];
  public selectedWorkshopEntry: WorkshopEntryRow | undefined;

  public documentTableDataSource: TableDataSource<BidtDocumentDTO>;
  public stockMvtTableDataSource: TableDataSource<BidtStockMvtDTO>;

  public itemDialogVisible: boolean;
  public editQuantityDialogVisible: boolean;
  public selectedProcReqItem?: BidtProcReqItemDTO;
  public showWoDialog: boolean;

  private procurementRequestId: number;

  // document table
  public deleteDocument: Observable<number>[];
  public documentTypes: SelectItem[];

  private userSiteId: number | undefined;

  public enableProcReqItemQuantityModification: boolean;

  public stockMvtSubject: Subject<BidtStockMvtDTO[]>;
  public showDetails: boolean;

  public searchWoObject: WorkOrderOVSInputDTO;

  // ////////////////////////////////////////////////////////////////////////////

  public reverseProcurementRequestItems: ProcurementRequestReverseItemRow[];
  public reverseSelectedProcurementRequestItem: ProcurementRequestReverseItemRow | undefined;
  public reverseWorkshopEntries: WorkshopEntryRow[];
  public reverseSelectedWorkshopEntry: WorkshopEntryRow | undefined;
  public reverseStockMvtTableDataSource: TableDataSource<BidtStockMvtDTO>;
  public reverseStockMvtSubject: Subject<BidtStockMvtDTO[]>;
  public reverseShowDetails: boolean;
  public reversedNb: number;
  public notReversedNb: number;

  // ////////////////////////////////////////////////////////////////////////////

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly logisticsService: LogisticsService,
    private readonly overlayService: OverlayService,
    private readonly procurementRequestFormService: ProcurementRequestFormService,
    private readonly propertiesService: PropertiesService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.aWPropertiesConstants = AWPropertiesConstants;
    this.component = ProcurementRequestFormComponent;
    this.bidtStockMvtConstants = BidtStockMvtConstants;
    this.bidtStockMvtTypeConstants = BidtStockMvtTypeConstant;

    this.propertiesService.getValue(GenericPropertyConstants.DOC_PARTNER_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.sessionService.getUserSiteId().subscribe({
      next: (site) => {
        this.userSiteId = site ? site.siteId : undefined;
      }
    });

    this.stockMvtSubject = new Subject<BidtStockMvtDTO[]>();
    this.reverseStockMvtSubject = new Subject<BidtStockMvtDTO[]>();
    this.showDetails = false;
    this.reverseShowDetails = false;
    this.init();
    this.onBeforeLoad();
  }

  // ////////////////////////////////////////////////////////////////////////////

  public getComponentName(): string {
    return ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM;
  }

  // ////////////////////////////////////////////////////////////////////////////

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData.objectId) {
      this.procurementRequestId = (this.serializationService.deserialize(this.componentData.objectId) as {
        id: number;
      }).id;
      this.load();
    }
  }

  // ////////////////////////////////////////////////////////////////////////////

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
  }

  public cancelBooking(row: WorkshopEntryRow): void {
    if (row.equipment) {
      this.logisticsService.isAssetBooked(row.equipment).subscribe({
        next: (stockMvt) => {
          if (stockMvt) {
            this.logisticsService.cancelBookedAsset(stockMvt).subscribe({
              next: () => {
                this.reload();
              }
            });
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnCancelBookedAsset'));
          }
        }
      });
    }
  }

  public canSave(): boolean {
    return (
      ObjectUtils.isDefined(this.procurementRequest.criticality) &&
      ObjectUtils.isDefined(this.procurementRequest.requestedDate)
    );
  }

  public deleteProcurementRequestItem(row?: ProcurementRequestItemRow): void {
    if (row) {
      this.logisticsService.deleteProcurementRequestItem(row.obj.id as number).subscribe({
        next: () => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnRemoveItem'));
          this.reload();
        }
      });
    }
  }

  public editProcReqItemQuantity(row: ProcurementRequestItemRow): void {
    this.editQuantityDialogVisible = true;
    this.selectedProcReqItem = row.obj;
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public manageProcurementRequestItem(row?: ProcurementRequestItemRow): void {
    if (row) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MATERIAL_REQUEST_MANAGEMENT_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize({
          prId: this.procurementRequest.id,
          prItemId: row.obj.id
        })
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public onSelectProcurementRequestItem(): void {
    this.workshopEntries = [];
    this.stockMvtTableDataSource.setData([]);
    this.stockMvtSubject.next([]);
    this.showDetails = false;

    this.selectedWorkshopEntry = undefined;
    this.stockMvtTableDataSource.dataSelection = [];

    this.loadWorkshopEntryFromProcurementRequestItem();
  }

  public onSelectReverseProcurementRequestItem(): void {
    this.reverseWorkshopEntries = [];
    this.reverseStockMvtTableDataSource.setData([]);
    this.reverseStockMvtSubject.next([]);
    this.reverseShowDetails = false;

    this.reverseSelectedWorkshopEntry = undefined;
    this.reverseStockMvtTableDataSource.dataSelection = [];

    this.loadReverseWorkshopEntryFromProcurementRequestItem();
  }

  public onSelectReverseWorkshopEntry(): void {
    this.reverseStockMvtTableDataSource.setData([]);
    this.reverseStockMvtSubject.next([]);
    this.reverseShowDetails = false;

    this.reverseStockMvtTableDataSource.dataSelection = [];

    this.loadReverseStockMvtFromWorkshopEntry();
  }

  public onSelectWorkshopEntry(): void {
    this.stockMvtTableDataSource.setData([]);
    this.stockMvtSubject.next([]);
    this.showDetails = false;

    this.stockMvtTableDataSource.dataSelection = [];

    this.loadStockMvtFromWorkshopEntry();
  }

  public onValidateItem(event: { pn: BirePnDTO; quantity: string }): void {
    const input: CreateProcurementRequestInput = {
      bidtProcurementRequest: this.procurementRequest,
      pnCode: event.pn.pnCode as string,
      quantity: event.quantity
    };
    this.logisticsService
      .createProcurementRequestItem(input)
      .pipe(
        finalize(() => {
          this.itemDialogVisible = false;
        })
      )
      .subscribe({
        next: () => {
          this.messageService.showSuccessMessage('successOnAddItem');
          this.reload();
        }
      });
  }

  public onEditQuantity(newQuantity: string): void {
    if (this.selectedProcReqItem) {
      this.logisticsService
        .updateProcurementRequestItemQuantity({
          newQuantity,
          itemId: this.selectedProcReqItem.id as number,
          oldQuantity: this.selectedProcReqItem.requestedQuantity as string
        })
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

  public openArticle(pnCode: string): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({ pnCode })
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openStovkMvt(rowData: BidtStockMvtDTO): void {
    const searchCriteria: FindStockMvtsByCriteriaInput = {
      mvtStatus: rowData.mvtStatus ? [rowData.mvtStatus] : [],
      mvtStatusExcluded: [],
      untilPlannedDate: rowData.stockMvtPlannedDate,
      stockMvt: rowData,
      pnCode: rowData.birePnPnCode,
      withAlternatives: false,
      criticality: rowData.criticality,
      dfShipmentSearch: false
    };
    const params: StockMvtParameters = {
      searchParameters: searchCriteria,
      bidtStockList: [rowData]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_STOCK_MOVEMENTS_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize(params)
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openWorkOrder(): void {
    if (this.isReadOpenMode || this.bookedNb !== 0) {
      if (this.procurementRequest.bidmWorkOrder) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
          openMode: ComponentOpenMode.Read,
          objectId: this.serializationService.serialize({
            projectId: this.procurementRequest.bidmWorkOrder.projectId,
            woId: this.procurementRequest.bidmWorkOrder.woId
          })
        };
        const labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public reload(): void {
    this.onBeforeLoad();
    this.load();
  }

  public remove(): void {
    this.confirmationService.confirm({
      messageKey: 'confirmDeleteProcurementRequest',
      accept: () => {
        this.logisticsService.deleteProcurementRequest(this.procurementRequest.id as number).subscribe({
          next: () => {
            this.messageService.showSuccessMessage('successOnDeleteProcurementRequest');
            this.tabService.openPreviousTab();
          }
        });
      }
    });
  }

  public save(): void {
    this.logisticsService.addOrUpdateProcurementRequest(this.procurementRequest).subscribe({
      next: (procurementRequest) => {
        this.saveBidtDocuments();
        this.procurementRequest = procurementRequest;
        this.updateOpenMode(ComponentOpenMode.Read);

        this.reload();
      }
    });
  }

  public showItemDialog(): void {
    this.itemDialogVisible = true;
  }

  public showStatus(): void {
    if (this.procurementRequest.procStatus !== AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CANCELED) {
      const overlayRef = this.overlayService.openWithPositionCenter<string | undefined>({
        content: ProcurementRequesttatusComponent,
        data: {
          procurementRequest: this.procurementRequest,
          showClosedButton: this.bookedNb - this.bookedButDidntStartedNb === 0
        }
      });

      overlayRef.afterClosed$.subscribe({
        next: (event) => {
          if (event.data) {
            this.procurementRequest.procStatus = event.data;
            if (
              !!this.procurementRequest.bidtProcReqItems &&
              this.procurementRequest.procStatus === AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_CLOSED
            ) {
              this.procurementRequest.bidtProcReqItems.forEach((item: BidtProcReqItemDTO) => {
                if (!!item.workshopEntries) {
                  item.workshopEntries.forEach((entry: BidtStockMvtDTO) => {
                    this.logisticsService.findStockMvtStory(entry).subscribe((mvts: BidtStockMvtDTO[]) => {
                      if (
                        mvts.some(
                          (mvt: BidtStockMvtDTO) =>
                            (mvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.PICKING ||
                              mvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.CROSS_DOCKING) &&
                            mvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
                            mvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY
                        )
                      ) {
                        this.logisticsService.cancelBookedAsset(entry).subscribe();
                      }
                    });
                  });
                }
              });
            }
            this.save();
          }
        }
      });
    }
  }

  public stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentTableDataSource.data.some((document) => document.documentName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const selectedDocumentType = this.documentTypes.find(
              (documentType) => !!file.type && (documentType.value as string) === file.type
            );
            const document: BidtDocumentDTO = {
              documentContent: fileContent,
              documentName: file.name,
              documentType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
              documentPublicationDate: new Date()
            };

            this.procurementRequest.bidtDocuments = [
              ...ListUtils.orEmpty(this.procurementRequest.bidtDocuments),
              document
            ];
            this.documentTableDataSource.addData([document]);
          }
        });
      }

      fileUploader.clear();
    }
  }

  public saveBidtDocuments(): void {
    if (this.procurementRequest.bidtDocuments) {
      const saveDocumentDeliveryFolderInput: SaveProcurementRequestInput = {
        procurementRequestDTO: this.procurementRequest,
        documentList: this.procurementRequest.bidtDocuments
      };

      this.procurementRequestFormService.saveDocuments(saveDocumentDeliveryFolderInput).subscribe((document) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateDocument'));
      });
    }
  }

  public deleteDocuments(): void {
    this.documentTableDataSource.dataSelection.forEach((selection) => {
      this.deleteDocument.push(this.procurementRequestFormService.deleteByid(selection.id as number));
    });

    forkJoin(this.deleteDocument).subscribe((result) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteDocument'));
      this.reload();
    });
  }

  private init(): void {
    this.initDocumentTable();
    this.initStockMvtTable();
  }

  private initDocumentTable(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'documentName', translateKey: this.getTranslateKey('name'), width: '90%' },
        { field: 'documentPublicationDate', translateKey: this.getTranslateKey('dateAdded'), width: '10%' }
      ],
      data: []
    });
  }

  private initStockMvtTable(): void {
    this.stockMvtTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
        { field: 'type', translateKey: this.getTranslateKey('type'), alignment: ColumnAlignment.CENTER, width: '7.5%' },
        { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
        { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '20%' },
        { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '20%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' }
      ],
      data: []
    });

    this.reverseStockMvtTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        { field: 'movement', translateKey: this.getTranslateKey('movement'), width: '20%' },
        { field: 'type', translateKey: this.getTranslateKey('type'), alignment: ColumnAlignment.CENTER, width: '7.5%' },
        { field: 'warehouseWorkshop', translateKey: this.getTranslateKey('warehouseWorkshop'), width: '20%' },
        { field: 'outbound', translateKey: this.getTranslateKey('outbound'), width: '20%' },
        { field: 'inbound', translateKey: this.getTranslateKey('inbound'), width: '20%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '12.5%' }
      ],
      data: []
    });
  }

  private load(): void {
    this.logisticsService
      .findProcurementRequestByIdWithAllObjects({ id: this.procurementRequestId })
      .pipe(
        concatMap((procurementRequest) => {
          return forkJoin({
            procurementRequest: of(procurementRequest),
            user: procurementRequest.statusUser
              ? this.procurementRequestFormService.findUser(procurementRequest.statusUser)
              : of(undefined),
            workPackageAsset:
              procurementRequest.bidmWorkOrder && procurementRequest.bidmWorkOrder.projectId
                ? this.procurementRequestFormService
                    .findWorkPackage(procurementRequest.bidmWorkOrder.projectId)
                    .pipe(
                      concatMap((workPackage) =>
                        workPackage.assetCode
                          ? this.procurementRequestFormService.findEquipment({ equipmentCode: workPackage.assetCode })
                          : of(undefined)
                      )
                    )
                : of(undefined)
          });
        })
      )
      .subscribe({
        next: ({ procurementRequest, user, workPackageAsset }) => {
          this.procurementRequest = procurementRequest;
          this.userLogin = user ? StringUtils.orEmpty(user.login) : '';
          this.userName = user ? `${user.firstname} ${user.lastname}` : (procurementRequest.statusUser as string);
          this.workPackageAsset = workPackageAsset;
          this.workPackageAssetName = BidoEquipmentUtils.createAssetRepresentation(workPackageAsset);

          if (this.procurementRequest.statusUser) {
            this.procurementRequestFormService.getUserSiteByLogin(this.procurementRequest.statusUser).subscribe({
              next: (site) => {
                this.enableProcReqItemQuantityModification = site && this.userSiteId === site.siteId;
              }
            });
          }

          this.procurementRequestFormService
            .findByProcurementRequestId(procurementRequest.id as number)
            .subscribe((documentDtolist) => {
              this.procurementRequest.bidtDocuments = documentDtolist;
              this.documentTableDataSource.setData(ListUtils.orEmpty(this.procurementRequest.bidtDocuments));
            });

          const warehouseCategory = (procurementRequest.bidtWarehouseReceipt as BidtWarehouseDTO).whCategory;
          if (warehouseCategory) {
            const procurementRequestItems = LogisticalUtils.buildProcurementRequestItemsRows(procurementRequest);
            const servedAndBooked = LogisticalUtils.computeProcurementRequestProgress(procurementRequestItems);
            this.bookedNb = servedAndBooked.bookedNb;
            this.notBookedNb = servedAndBooked.notBookedNb;
            this.isServed = servedAndBooked.isServed;
            this.servedNb = servedAndBooked.servedNb;

            this.procurementRequestItems = procurementRequestItems;

            this.procurementRequestItems.forEach((procurementRequestItem: ProcurementRequestItemRow) => {
              if (!!procurementRequestItem.obj.bidtWarehouseId) {
                this.logisticsService.getWarehouseById(procurementRequestItem.obj.bidtWarehouseId).subscribe({
                  next: (warehouse: BidtWarehouseDTO) => {
                    procurementRequestItem.warehouseName = warehouse.whName;
                    if (!!warehouse.bidtSiteId) {
                      this.logisticsService.getSiteById(warehouse.bidtSiteId).subscribe({
                        next: (site: BidtSiteDTO) => {
                          procurementRequestItem.siteName = site.siteName;
                        }
                      });
                    }
                  }
                });
              } else {
                if (!!this.procurementRequest.bidtSiteIssue) {
                  procurementRequestItem.siteName = this.procurementRequest.bidtSiteIssue.siteName;
                }
                if (!!this.procurementRequest.bidtWarehouseIssue) {
                  procurementRequestItem.warehouseName = this.procurementRequest.bidtWarehouseIssue.whName;
                }
              }
            });

            this.selectedProcurementRequestItem =
              this.procurementRequestItems.length > 0 ? this.procurementRequestItems[0] : undefined;

            // ////////////////////////////////////////////////////////////////////////////

            const reverseObservables$ = this.procurementRequestItems
              .map((item) => item.obj.id)
              .map((itemId) =>
                this.logisticsService.findTransferOrdersByCriteria({
                  transferOrder: {
                    bidtProcReqItemId: itemId,
                    torType: this.aWPropertiesConstants.TRANSFER_ORDER_TYPE_REVERSE_MVT
                  },
                  transferOrderStatusExcluded: []
                })
              );

            forkJoin(reverseObservables$).subscribe({
              next: (results) => {
                this.reverseProcurementRequestItems = results
                  .reduce((acc, x) => acc.concat(x), [])
                  .map((result) => result.bidtTransferOrder)
                  .filter((transferOrder) => transferOrder.bidtTorItems && transferOrder.bidtTorItems.length > 0)
                  .map((transferOrder) =>
                    (transferOrder.bidtTorItems as BidtTorItemDTO[]).map((torItem) => ({ transferOrder, torItem }))
                  )
                  .reduce(
                    (acc, x) => acc.concat(x),
                    [] as {
                      transferOrder: BidtTransferOrderDTO;
                      torItem: BidtTorItemDTO;
                    }[]
                  )
                  .map(({ transferOrder, torItem }) => {
                    const progress = LogisticalUtils.computeProcurementRequestReverseItemProgress(
                      torItem.pickingMovements
                    );

                    return {
                      obj: torItem,
                      allNb: progress.allNb,
                      reversedNb: progress.reversedNb,
                      notReversedNb: progress.notReversedNb,
                      warehouseReceiptName: transferOrder.bidtWarehouseReceipt
                        ? transferOrder.bidtWarehouseReceipt.whName
                        : undefined,
                      siteReceiptName: transferOrder.bidtSiteReceipt
                        ? transferOrder.bidtSiteReceipt.siteName
                        : undefined,
                      warehouseIssueName: transferOrder.bidtWarehouseIssue
                        ? transferOrder.bidtWarehouseIssue.whName
                        : undefined,
                      siteIssueName: transferOrder.bidtSiteIssue ? transferOrder.bidtSiteIssue.siteName : undefined
                    };
                  });

                this.reverseSelectedProcurementRequestItem =
                  this.reverseProcurementRequestItems.length > 0 ? this.reverseProcurementRequestItems[0] : undefined;
                this.onSelectReverseProcurementRequestItem();

                this.reverseProcurementRequestItems.forEach((item) => {
                  this.reversedNb += item.reversedNb;
                  this.notReversedNb += item.notReversedNb;
                });
              }
            });

            // ////////////////////////////////////////////////////////////////////////////

            this.loadProcurementRequestUnits(this.procurementRequestItems.map((row) => row.obj));
            this.loadWorkshopEntryFromProcurementRequestItem();

            this.bookedButDidntStartedNb = 0;
            this.workshopEntries.forEach((entry: WorkshopEntryRow) => {
              this.logisticsService.findStockMvtStory(entry.obj).subscribe((mvts: BidtStockMvtDTO[]) => {
                const tmpMvt = mvts.find(
                  (m: BidtStockMvtDTO) =>
                    m.stockMvtWay === BidtStockMvtConstants.MVT_WAY_TRANSFER &&
                    m.mvtStatus === AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY
                );
                if (tmpMvt) {
                  this.bookedButDidntStartedNb++;
                }
              });
            });
          }
        }
      });
  }

  private loadProcurementRequestCriticities(): void {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP).subscribe({
      next: (criticities) => {
        this.procurementRequestCriticities = ListUtils.orEmpty(criticities);
        this.procurementRequestCriticities = LogisticalUtils.sortCriticities(this.procurementRequestCriticities);
      }
    });
  }

  private loadProcurementRequestStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP).subscribe({
      next: (procurementRequestStatuses) => {
        this.procurementRequestStatuses = ListUtils.orEmpty(procurementRequestStatuses);
      }
    });
  }

  private loadProcurementRequestTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP).subscribe({
      next: (procurementRequestTypes) => {
        this.procurementRequestTypes = ListUtils.orEmpty(procurementRequestTypes);
      }
    });
  }

  private loadProcurementRequestUnits(bidtProcReqItems: BidtProcReqItemDTO[]): void {
    const observables = bidtProcReqItems
      .map((bidtProcReqItem) => bidtProcReqItem.birePnPnCode)
      .filter((pnCode) => ObjectUtils.isDefined(pnCode))
      .map((pnCode) =>
        this.procurementRequestFormService.findBidoCounterReferencesByPnCode({ pnCode: pnCode as string })
      );

    forkJoin(observables).subscribe({
      next: (results) => {
        this.procurementRequestUnits = results
          .reduce((acc, val) => acc.concat(val), [])
          .reduce((acc: BidoCounterReferenceDTO[], current) => {
            return acc.some((counterReference) => counterReference.counterCode === current.counterCode)
              ? acc
              : acc.concat([current]);
          }, [])
          .reduce((acc: BidoCounterReferenceDTO[], current) => {
            const isCounterReferenceAssociatedToAllPns = results.every((counterReferences) =>
              counterReferences.some((counterReference) => counterReference.counterCode === current.counterCode)
            );

            return isCounterReferenceAssociatedToAllPns ? acc.concat([current]) : acc;
          }, [])
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

  private loadStockMvtFromWorkshopEntry(): void {
    if (this.selectedWorkshopEntry) {
      this.logisticsService.findStockMvtStory(this.selectedWorkshopEntry.obj).subscribe({
        next: (stockMvts) => {
          if (
            (this.selectedWorkshopEntry as WorkshopEntryRow).obj.stockMvtSn ||
            (this.selectedWorkshopEntry as WorkshopEntryRow).obj.stockMvtBatchNumber
          ) {
            this.stockMvtTableDataSource.addData(stockMvts);
            this.stockMvtSubject.next(stockMvts);
            this.showDetails = false;
          } else {
            this.stockMvtTableDataSource.addData(
              stockMvts.filter(
                (stockMvt) =>
                  stockMvt.bidtStockMvtTypeId !== BidtStockMvtTypeConstant.RECEIPT &&
                  stockMvt.bidtStockMvtTypeId !== BidtStockMvtTypeConstant.WORKSHOP_ENTRY
              )
            );
          }
        }
      });
    }
  }

  private loadReverseStockMvtFromWorkshopEntry(): void {
    if (this.reverseSelectedWorkshopEntry) {
      this.logisticsService.findStockMvtStory(this.reverseSelectedWorkshopEntry.obj).subscribe({
        next: (stockMvts) => {
          if (
            (this.reverseSelectedWorkshopEntry as WorkshopEntryRow).obj.stockMvtSn ||
            (this.reverseSelectedWorkshopEntry as WorkshopEntryRow).obj.stockMvtBatchNumber
          ) {
            this.reverseStockMvtTableDataSource.addData(stockMvts);
            this.reverseStockMvtSubject.next(stockMvts);
            this.reverseShowDetails = false;
          } else {
            this.reverseStockMvtTableDataSource.addData(
              stockMvts.filter(
                (stockMvt) =>
                  stockMvt.bidtStockMvtTypeId !== BidtStockMvtTypeConstant.RECEIPT &&
                  stockMvt.bidtStockMvtTypeId !== BidtStockMvtTypeConstant.WORKSHOP_ENTRY
              )
            );
          }
        }
      });
    }
  }

  private loadOperationalStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe({
      next: (operationalStatuses) => {
        this.operationalStatuses = ListUtils.orEmpty(operationalStatuses);
      }
    });
  }

  private loadStovkMvtStatuses(): void {
    this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP).subscribe({
      next: (stockMvtStatuses) => {
        this.stockMvtStatuses = ListUtils.orEmpty(stockMvtStatuses);
      }
    });
  }

  private loadWorkshopEntryFromProcurementRequestItem(): void {
    if (this.selectedProcurementRequestItem) {
      this.workshopEntries = ListUtils.orEmpty(this.selectedProcurementRequestItem.obj.workshopEntries)
        .filter(
          (stockMvt) =>
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.RECEIPT ||
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.WORKSHOP_ENTRY ||
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.REMOVAL
        )
        .map((stockMvt) => {
          return {
            obj: stockMvt
          };
        })
        .sort((x, y) => {
          if (x.obj.stockMvtSn && y.obj.stockMvtSn) {
            if (x.obj.statusDate && y.obj.statusDate) {
              return moment(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
            } else if (x.obj.statusDate) {
              return -1;
            }

            return 1;
          } else if (x.obj.stockMvtSn) {
            return -1;
          }

          return 1;
        });
      this.selectedWorkshopEntry = this.workshopEntries.length > 0 ? this.workshopEntries[0] : undefined;

      this.workshopEntries.forEach((workshopEntry) => {
        if (workshopEntry.obj.stockMvtSn) {
          const input: BidoEquipmentDTO = {
            sn: workshopEntry.obj.stockMvtSn,
            pnCode: workshopEntry.obj.birePnPnCode
          };
          this.procurementRequestFormService.findBidoEquipmentsByPnAndSn(input).subscribe((equipments) => {
            if (equipments && equipments.length > 0) {
              workshopEntry.equipment = equipments[0];
            }
          });
        } else {
          const input: BidoEquipmentDTO = {
            batchNumber: workshopEntry.obj.stockMvtBatchNumber,
            pnCode: workshopEntry.obj.birePnPnCode
          };
          this.procurementRequestFormService.findBidoEquipmentByPnAndBatchNumber(input).subscribe((equipment) => {
            if (equipment) {
              workshopEntry.equipment = equipment;

              if (equipment.equEquipmentCode) {
                this.procurementRequestFormService
                  .getManufacturingBatchByEquipment(equipment)
                  .subscribe((manufacturingBatch) => {
                    workshopEntry.manufacturingBatch = manufacturingBatch;
                  });
              }
            }
          });
        }
      });

      this.loadStockMvtFromWorkshopEntry();
    }
  }

  private loadReverseWorkshopEntryFromProcurementRequestItem(): void {
    if (this.reverseSelectedProcurementRequestItem) {
      this.reverseWorkshopEntries = ListUtils.orEmpty(this.reverseSelectedProcurementRequestItem.obj.pickingMovements)
        .filter(
          (stockMvt) =>
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.RECEIPT ||
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.WORKSHOP_ENTRY ||
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.REMOVAL
        )
        .map((stockMvt) => {
          return {
            obj: stockMvt
          };
        })
        .sort((x, y) => {
          if (x.obj.stockMvtSn && y.obj.stockMvtSn) {
            if (x.obj.statusDate && y.obj.statusDate) {
              return moment(x.obj.statusDate).isBefore(y.obj.statusDate) ? -1 : 1;
            } else if (x.obj.statusDate) {
              return -1;
            }

            return 1;
          } else if (x.obj.stockMvtSn) {
            return -1;
          }

          return 1;
        });

      this.reverseSelectedWorkshopEntry =
        this.reverseWorkshopEntries.length > 0 ? this.reverseWorkshopEntries[0] : undefined;

      this.reverseWorkshopEntries.forEach((workshopEntry) => {
        if (workshopEntry.obj.stockMvtSn) {
          const input: BidoEquipmentDTO = {
            sn: workshopEntry.obj.stockMvtSn,
            pnCode: workshopEntry.obj.birePnPnCode
          };
          this.procurementRequestFormService.findBidoEquipmentsByPnAndSn(input).subscribe((equipments) => {
            if (equipments && equipments.length > 0) {
              workshopEntry.equipment = equipments[0];
            }
          });
        } else {
          const input: BidoEquipmentDTO = {
            batchNumber: workshopEntry.obj.stockMvtBatchNumber,
            pnCode: workshopEntry.obj.birePnPnCode
          };
          this.procurementRequestFormService.findBidoEquipmentByPnAndBatchNumber(input).subscribe((equipment) => {
            if (equipment && equipment.equEquipmentCode) {
              workshopEntry.equipment = equipment;

              if (equipment.equEquipmentCode) {
                this.procurementRequestFormService
                  .getManufacturingBatchByEquipment(equipment)
                  .subscribe((manufacturingBatch) => {
                    workshopEntry.manufacturingBatch = manufacturingBatch;
                  });
              }
            }
          });
        }
      });

      this.loadReverseStockMvtFromWorkshopEntry();
    }
  }

  private onBeforeLoad(): void {
    this.deleteDocument = [];
    this.procurementRequest = {};
    this.procurementRequestCriticities = [];
    this.procurementRequestStatuses = [];
    this.procurementRequestTypes = [];
    this.procurementRequestUnits = [];
    this.stockMvtStatuses = [];
    this.userLogin = '';
    this.userName = '';
    this.workPackageAsset = undefined;
    this.workPackageAssetName = '';

    this.bookedNb = 0;
    this.notBookedNb = 0;
    this.servedNb = 0;

    this.procurementRequestItems = [];
    this.selectedProcurementRequestItem = undefined;

    this.reverseProcurementRequestItems = [];
    this.reverseSelectedProcurementRequestItem = undefined;
    this.reverseWorkshopEntries = [];
    this.reverseSelectedWorkshopEntry = undefined;
    this.reverseStockMvtTableDataSource.setData([]);
    this.reversedNb = 0;
    this.notReversedNb = 0;

    this.workshopEntries = [];
    this.selectedWorkshopEntry = undefined;

    this.stockMvtTableDataSource.setData([]);

    this.documentTableDataSource.setData([]);

    this.itemDialogVisible = false;

    this.loadProcurementRequestCriticities();
    this.loadProcurementRequestStatuses();
    this.loadProcurementRequestTypes();
    this.loadOperationalStatuses();
    this.loadStovkMvtStatuses();
  }

  public openBatch(row: WorkshopEntryRow) {
    if (row.obj.stockMvtSn) {
      this.openEquipment(row);
    } else {
      if (row.equipment) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
          openMode: ComponentOpenMode.Read
        };

        data.objectId = row.equipment.equipmentCode;

        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public openEquipment(row: WorkshopEntryRow): void {
    if (row.equipment) {
      const objectId: BidoEquipmentDTO = {
        equipmentCode: row.equipment.equipmentCode
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        openMode: ComponentOpenMode.Read,
        componentId: ComponentConstants.FLE_EQUIPMENT_FORM,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openManufacturingBatch(row: WorkshopEntryRow): void {
    if (row.manufacturingBatch) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
        objectId: this.serializationService.serialize({ customerCode: row.manufacturingBatch.batchNumber }),
        openMode: ComponentOpenMode.Read
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public duplicate(): void {
    this.logisticsService.duplicateProcurementRequest(this.procurementRequest).subscribe({
      next: (duplicate) => {
        this.openProcurementRequest(duplicate);
      }
    });
  }

  private openProcurementRequest(procurementRequest: BidtProcurementRequestDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId: this.serializationService.serialize({ id: procurementRequest.id }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isExpectedSnVisible(): boolean {
    return this.procurementRequestItems
      .map((procReqItem) => procReqItem.obj)
      .some(
        (procReqItem) =>
          !!procReqItem.birePn &&
          (procReqItem.birePn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_BATCH ||
            procReqItem.birePn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_SN ||
            procReqItem.birePn.traceability === AWPropertiesConstants.PN_TRACEABILITY_BY_PACKAGING_BATCH_AND_SN)
      );
  }

  public isCancelBookingBtnVisible(row: WorkshopEntryRow): boolean {
    return (
      !!this.selectedWorkshopEntry &&
      this.selectedWorkshopEntry.obj.id === row.obj.id &&
      this.stockMvtTableDataSource.data.some(
        (stockMvt) =>
          row.obj.stockMvtSn === stockMvt.stockMvtSn &&
          row.obj.stockMvtBatchNumber === stockMvt.stockMvtBatchNumber &&
          (stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.PICKING ||
            stockMvt.bidtStockMvtTypeId === BidtStockMvtTypeConstant.CROSS_DOCKING) &&
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_EXECUTED_KEY &&
          stockMvt.mvtStatus !== AWPropertiesConstants.MM_MVT_STATUS_ON_GOING_KEY
      )
    );
  }

  public openWoDialog(): void {
    if (!this.isReadOpenMode) {
      if (this.bookedNb !== 0) {
        if (
          !!this.procurementRequest.bidtSiteReceipt &&
          !!this.procurementRequest.bidtSiteReceipt.siteId &&
          !!this.procurementRequest.bidtWarehouseReceipt &&
          !!this.procurementRequest.bidtWarehouseReceipt.wareHouseId
        ) {
          const searchWoObject: WorkOrderOVSInputDTO = {
            projectCriteria: {
              bireRepairCenterCode: this.procurementRequest.bidtSiteReceipt.siteId.toString()
            },
            workOrderCriteria: {
              bidtWarehouseId: this.procurementRequest.bidtWarehouseReceipt.wareHouseId as number
            }
          };
          this.searchWoObject = searchWoObject;
        }
      }
      this.showWoDialog = true;
    } else {
      this.openWorkOrder();
    }
  }

  public eraseWo(): void {
    this.procurementRequest.bidmWorkOrder = undefined;
    this.procurementRequest.bidmWorkOrderBidMandant = undefined;
    this.procurementRequest.bidmWorkOrderMandant = undefined;
    this.procurementRequest.bidmWorkOrderProjectId = undefined;
    this.procurementRequest.bidmWorkOrderWoId = undefined;
    this.procurementRequest.requestedDate = undefined;
    this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = undefined;
    this.procurementRequest.bidtSiteByBidtSiteReceiptId = undefined;
    this.procurementRequest.bidtWarehouseReceipt = undefined;
    this.procurementRequest.bidtSiteReceipt = undefined;
    this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = undefined;
    this.procurementRequest.bidtSiteByBidtSiteIssueId = undefined;
    this.procurementRequest.bidtWarehouseIssue = undefined;
    this.procurementRequest.bidtSiteIssue = undefined;
    this.workPackageAsset = undefined;
    this.workPackageAssetName = '';
  }

  public onSelectWo(workOrder: BidmWorkOrderDTO): void {
    this.eraseWo();
    this.procurementRequest.bidmWorkOrder = workOrder;
    this.procurementRequest.bidmWorkOrderProjectId = workOrder.projectId;
    this.procurementRequest.bidmWorkOrderWoId = workOrder.woId;
    this.procurementRequest.requestedDate = workOrder.woScheduledStartDate;

    if (workOrder.calculatedStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_PLANNED) {
      this.procurementRequest.procStatus = AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_PLANNED;
    } else if (workOrder.calculatedStatus === AWPropertiesConstants.AIRM_OPERATION_STATUS_RELEASED) {
      this.procurementRequest.procStatus = AWPropertiesConstants.PROCUREMENT_REQUEST_STATUS_RELEASED;
    }

    if (workOrder.bidtWarehouseId) {
      this.logisticsService.getWarehouseById(workOrder.bidtWarehouseId).subscribe({
        next: (warehouseReceipt: BidtWarehouseDTO) => {
          if (warehouseReceipt) {
            // Warehouse receipt
            this.procurementRequest.bidtWarehouseByBidtWarehouseReceiptId = warehouseReceipt.wareHouseId as number;
            this.procurementRequest.bidtSiteByBidtSiteReceiptId = warehouseReceipt.bidtSiteId as number;
            this.procurementRequest.bidtWarehouseReceipt = warehouseReceipt;
            if (warehouseReceipt.bidtSiteId) {
              // site receipt
              this.logisticsService.getSiteById(warehouseReceipt.bidtSiteId).subscribe((siteReceipt: BidtSiteDTO) => {
                this.procurementRequest.bidtSiteReceipt = siteReceipt;
              });
            }
            if (warehouseReceipt.bidtWarehouseId) {
              this.logisticsService.getWarehouseById(warehouseReceipt.bidtWarehouseId).subscribe({
                next: (warehouseIssue: BidtWarehouseDTO) => {
                  // warehouse issue
                  if (warehouseIssue) {
                    this.procurementRequest.bidtWarehouseByBidtWarehouseIssueId = warehouseIssue.wareHouseId as number;
                    this.procurementRequest.bidtSiteByBidtSiteIssueId = warehouseIssue.bidtSiteId as number;
                    this.procurementRequest.bidtWarehouseIssue = warehouseIssue;
                    if (warehouseReceipt.bidtSiteId) {
                      // site issue
                      this.logisticsService
                        .getSiteById(warehouseReceipt.bidtSiteId)
                        .subscribe((siteIssue: BidtSiteDTO) => {
                          this.procurementRequest.bidtSiteIssue = siteIssue;
                        });
                    }
                  }
                }
              });
            }
          }
        }
      });
    }
    if (workOrder.projectId) {
      // Asset
      this.procurementRequestFormService
        .findWorkPackage(workOrder.projectId)
        .pipe(
          concatMap((workPackage) =>
            workPackage.assetCode
              ? this.procurementRequestFormService.findEquipment({ equipmentCode: workPackage.assetCode })
              : of(undefined)
          )
        )
        .subscribe((workPackageAsset) => {
          this.workPackageAsset = workPackageAsset;
          this.workPackageAssetName = BidoEquipmentUtils.createAssetRepresentation(workPackageAsset);
        });
    }
  }

  public toggleDetailsTable(showDetails: boolean): void {
    this.showDetails = showDetails;
  }

  public toggleReverseDetailsTable(showDetails: boolean): void {
    this.reverseShowDetails = showDetails;
  }

  public manageTransfertOrderItem(row: ProcurementRequestReverseItemRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_REQUEST_TRANSFER_ORDER_MANAGEMENT_FORM,
      openMode: ComponentOpenMode.Read,
      objectId: this.serializationService.serialize({
        torId: row.obj.bidtTransferOrderId,
        torItemId: row.obj.id
      })
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
