import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem, TreeNode } from 'primeng/api';
import { Observable, forkJoin, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { MaterialFormService } from '../../../../../../main/logistics/material/form/material-form.service';
import { WorkOrderFormService } from '../../../../../../main/maintenance/work-order/form/work-order-form.service';
import { ObjectStatusComponent } from '../../../../../../main/object-status/object-status.component';
import { OverlayService } from '../../../../../../main/overlay/overlay.service';
import { PageTocService } from '../../../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BidtDocumentDTO } from '../../../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtEmployeeDTO } from '../../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../../../../shared/types/api-types/bidt-site-dto.interface';
import { FormPageComponent } from '../../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { PurchaseContractPropertyConstants } from '../../../../constants/properties/purchase-contract-property-constants';
import { PurchaseContractStatusConstants } from '../../../../constants/properties/purchasecontract/purchase-contract-status-constants';
import { BidtPurchaseContractDTOId } from '../../../../dtos/bidt-purchase-contract-dto-id.interface';
import { BidtPurchaseContractDTO } from '../../../../dtos/bidt-purchase-contract-dto.interface';
import { BidtPurchaseContractElementDTO } from '../../../../dtos/bidt-purchase-contract-element-dto.interface';
import { BidtPurchaseContractItemDTO } from '../../../../dtos/bidt-purchase-contract-item-dto.interface';
import { BidtPurchaseContractPartnerDTO } from '../../../../dtos/bidt-purchase-contract-partner-dto.interface';
import { BidtPurchaseContractSliceDTO } from '../../../../dtos/bidt-purchase-contract-slice-dto.interface';
import { SaveBidtPurchaseContractInput } from '../../../../dtos/input/save-bidt-purchase-contract-input.interface';
import { PurchaseContractElementService } from '../../../../services/purchase-contract-element.service';
import { PurchaseContractItemService } from '../../../../services/purchase-contract-item.service';
import { PurchaseContractService } from '../../../../services/purchase-contract.service';
import { LabelValueHelper } from '../../../../utils/label-value-helper';
import { TableDataSourceWithHistory } from '../../../../utils/table-data-source-with-history';
import { TreeModifications } from '../../../../utils/tree/tree-modifications';
import { TreeNodeUtils } from '../../../../utils/tree/tree-node-utils';
import { DocumentSectionComponent } from '../../../shared/document-section/document-section.component';

interface ContractPartnerRow {
  bidtPurchaseContractPartnerDTO: BidtPurchaseContractPartnerDTO;
  customerCode?: string;
  roleLabel?: string;
}
interface ContractSliceRow {
  bidtPurchaseContractSliceDTO: BidtPurchaseContractSliceDTO;
  sliceTypeLabel?: string;
  sliceStatusLabel?: string;
  sliceItemsTree?: TreeModifications<ContractItemRow, string>;
}

interface ContractItemRow {
  bidtPurchaseContractItemDTO: BidtPurchaseContractItemDTO;
  itemElementAndServicesTableDataSource?: TableDataSourceWithHistory<ContractElementRow>;
}

interface ContractElementRow {
  bidtPurchaseContractElementDTO: BidtPurchaseContractElementDTO;
}

@Component({
  selector: 'aw-purchase-contract-form',
  styleUrls: ['./purchase-contract-form.component.scss'],
  templateUrl: './purchase-contract-form.component.html'
})
export class PurchaseContractFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly HEADER_DATA_ANCHOR_ID: string = 'headerDataAnchor';
  public static readonly PARTNER_ANCHOR_ID: string = 'partnernAnchor';
  public static readonly SLICE_ANCHOR_ID: string = 'sliceAnchor';
  public static readonly OFFICE_PROVISION_ANCHOR_ID: string = 'officeProvisionAnchor';
  public static readonly PRICE_TABLE_ANCHOR_ID: string = 'priceTableAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentsAnchor';

  public readonly component: typeof PurchaseContractFormComponent;

  public purchaseContract: BidtPurchaseContractDTO;
  public showStatusUpdatesPopup: boolean;
  public showSaveSpinner: boolean;

  // Item structure dialog popup
  public currentItem: BidtPurchaseContractItemDTO | undefined;
  public isNewItem: boolean;
  public isReadOnlyItemPopup: boolean;
  public showItemPopup: boolean;

  // Dropdowns
  public statusList: LabelValue<string>[];
  public typeList: LabelValue<string>[];
  public pcTypeList: LabelValue<string>[];
  public pcCurrencyList: LabelValue<string>[];
  public sliceUnitList: LabelValue<string>[];
  public pcSiteList: SelectItem[];
  public partnerRoleList: LabelValue<string>[];
  public itemStatusStateList: LabelValue<string>[];

  // Items
  public itemsTreeTable?: TreeModifications<ContractItemRow, string>;
  public itemNodeSelected: TreeNode | undefined;
  public itemSelected: ContractItemRow | undefined;
  public itemsTreeTableColList: TableColumn[];

  // Slices
  public slicesPurchaseContract: BidtPurchaseContractSliceDTO;
  public slicesTableDataSource: TableDataSourceWithHistory<ContractSliceRow>;
  public slicesDialogOpenMode: ComponentOpenMode;
  public showSlicesDialog: boolean;
  public isNewSlice: boolean;
  public slicePopupData: BidtPurchaseContractSliceDTO;
  public showSliceEditPopup: boolean;
  public currentTabId: string;
  public tabSlicesId: string;
  public isReadOnlyPurchaseContractSliceDialog: boolean;
  public sliceStatusList: LabelValue<string>[];
  public sliceTypeList: LabelValue<string>[];
  public sliceSelected: ContractSliceRow;

  // Elements et services
  public elementAndServicesTableDataSource: TableDataSourceWithHistory<ContractElementRow>;
  public elementAndServicesDialogOpenMode: ComponentOpenMode;
  public showElementAndServicesDialog: boolean;
  public isNewElementAndServices: boolean;
  public elementAndServicesPopupData?: BidtPurchaseContractElementDTO;

  // Partner
  public partnerTableDataSource: TableDataSourceWithHistory<ContractPartnerRow>;
  public currentPartner: BidtPurchaseContractPartnerDTO;
  public partnerDialogOpenMode: ComponentOpenMode;
  public showPartnerDialog: boolean;

  // Documents
  public documentsList: BidtDocumentDTO[];
  public bidtDocumentDTO: BidtDocumentDTO;
  // Contract manager
  public contractManagerName: string;

  // Parent Contract id
  public parentContractLabel: string | undefined;

  public showParentIdDialog: boolean;
  public showEmployeePopup: boolean;

  // Table of content ***********************************************************

  @ViewChild(DocumentSectionComponent)
  public documentComponent: DocumentSectionComponent;

  @ViewChild(PurchaseContractFormComponent.HEADER_DATA_ANCHOR_ID)
  public headerDataEltRef: ElementRef;

  @ViewChild(PurchaseContractFormComponent.PARTNER_ANCHOR_ID)
  public partnerEltRef: ElementRef;

  @ViewChild(PurchaseContractFormComponent.SLICE_ANCHOR_ID)
  public sliceEltRef: ElementRef;

  @ViewChild(PurchaseContractFormComponent.OFFICE_PROVISION_ANCHOR_ID)
  public officeProvisionEltRef: ElementRef;

  @ViewChild(PurchaseContractFormComponent.PRICE_TABLE_ANCHOR_ID)
  public priceTableEltRef: ElementRef;

  @ViewChild(PurchaseContractFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentsEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public materialFormService: MaterialFormService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly purchaseContractService: PurchaseContractService,
    private readonly purchaseContractItemService: PurchaseContractItemService,
    private readonly purchaseContractElementService: PurchaseContractElementService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    private readonly workOrderFormService: WorkOrderFormService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe
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

    this.component = PurchaseContractFormComponent;

    this.pcTypeList = [];
    this.statusList = [];
    this.typeList = [];
    this.sliceStatusList = [];
    this.sliceTypeList = [];
    this.pcCurrencyList = [];
    this.pcSiteList = [];
    this.partnerRoleList = [];
    this.itemStatusStateList = [];

    this.currentItem = undefined;
    this.isReadOnlyItemPopup = true;
    this.showItemPopup = false;

    this.onBeforeLoad();
    this.tabSlicesId = 'slices';
    this.initItemTreeTableColList();
  }

  private onBeforeLoad() {
    this.showEmployeePopup = false;
    this.showParentIdDialog = false;
    super.registerPageTocEntryObservable();
    this.initSlicesTableDataSource();

    this.loadReferentialData();
  }

  public getComponentName(): string {
    return ComponentConstants.PCT_PURCHASE_CONTRACT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    this.setTableOfContent();

    this.init();
  }

  public cancel(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reload();
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reload(): void {
    this.init();
  }

  public save(): void {
    if (this.isScreenValidated()) {
      this.savePurchaseContract({
        bidtPurchaseContractDTO: this.purchaseContract,
        partnersModifications: this.partnerTableDataSource.mapListModifications(
          (row) => row.bidtPurchaseContractPartnerDTO
        ),
        slicesModifications: this.slicesTableDataSource.mapListModifications((row) => ({
          bidtPurchaseContractSliceDTO: row.bidtPurchaseContractSliceDTO,
          itemsTreeModifications:
            row.sliceItemsTree &&
            row.sliceItemsTree.mapTreeModifications((itemRow: ContractItemRow) => ({
              bidtPurchaseContractItemDTO: itemRow.bidtPurchaseContractItemDTO,
              elementsModificationsDTO:
                itemRow.itemElementAndServicesTableDataSource &&
                itemRow.itemElementAndServicesTableDataSource.mapListModifications((elementRow) => ({
                  bidtPurchaseContractElementDTO: elementRow.bidtPurchaseContractElementDTO
                }))
            }))
        })),
        documentsModifications: this.documentComponent.getDocumentsModifications()
      });
    }
  }

  private isScreenValidated(): boolean {
    let isScreenValidated = true;
    // Validating purchase contract mandatory fields
    if (
      StringUtils.isNullOrEmpty(this.purchaseContract.pcNumber) ||
      StringUtils.isNullOrEmpty(this.purchaseContract.statusState) ||
      StringUtils.isNullOrEmpty(this.purchaseContract.pcLegalCommitment) ||
      StringUtils.isNullOrEmpty(this.purchaseContract.pcLabel)
    ) {
      isScreenValidated = false;
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }

    const sliceOrderDuplicate = this.slicesTableDataSource.dataSrc.filter((sliceRow, index) => {
      return (
        sliceRow.bidtPurchaseContractSliceDTO &&
        index !==
          this.slicesTableDataSource.dataSrc.findIndex(
            (otherRow) =>
              otherRow.bidtPurchaseContractSliceDTO &&
              otherRow.bidtPurchaseContractSliceDTO.pcsOrder === sliceRow.bidtPurchaseContractSliceDTO.pcsOrder
          )
      );
    });

    if (sliceOrderDuplicate.length > 0) {
      isScreenValidated = false;
      this.messageService.showWarningMessage(this.getTranslateKey('errorDuplicateSliceNumber'));
    }

    // A supplier is mandatory on the contract
    // TODO BRASIDAS : Add supplier support to enforce rule that at least one supplier should be selected
    /*if (
      !this.partnerTableDataSource.dataSrc.some(
        (row) => row.bidtPurchaseContractPartnerDTO.pcpRole === PartnerRoleConstants.SUPPLIER
      )
    ) {
      isScreenValidated = false;
      this.messageService.showWarningMessage(this.getTranslateKey('errorNoSupplier'));
    }*/

    return isScreenValidated;
  }

  private savePurchaseContract(saveBidoCustomerInput: SaveBidtPurchaseContractInput): void {
    this.showSaveSpinner = true;
    this.purchaseContractService.saveBidtPurchaseContract(saveBidoCustomerInput).subscribe(
      (result) => {
        if (!this.purchaseContract.id) {
          if (result.id) {
            const purchaseContractId: BidtPurchaseContractDTOId = {
              id: result.id
            };
            this.componentData.objectId = this.serializationService.serialize(purchaseContractId);
          }
          this.updateOpenMode(ComponentOpenMode.Write);
          if (this.purchaseContract.pcNumber) {
            this.displayComponentContext(this.purchaseContract.pcNumber, this.isCreateOpenMode);
          }
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreatePurchaseContract'));
        } else {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdatePurchaseContract'));
        }
        this.reload();
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSave'));
      }
    );
  }

  private init(): void {
    this.purchaseContract = {};
    this.itemsTreeTable = undefined;
    this.itemNodeSelected = undefined;
    this.itemSelected = undefined;

    this.loadPurchaseContract();
    this.initTablePartnerCols();
    this.loadPartner();
    this.initTableElementAndServicesCols();
    this.loadSlices();
    this.loadPartner();
    this.loadDocuments();
    this.getSiteList();
  }

  private loadPurchaseContract(): void {
    if (this.componentData && this.componentData.objectId) {
      // Load purchase contract object
      const contractId: BidtPurchaseContractDTOId = this.serializationService.deserialize(this.componentData.objectId);

      this.purchaseContractService.findBidtPurchaseContract(contractId).subscribe(
        (result) => {
          if (!!result) {
            this.purchaseContract = result;

            if (!!this.purchaseContract.bidtEmployeeId) {
              this.workOrderFormService.getEmployeeById(this.purchaseContract.bidtEmployeeId).subscribe((employee) => {
                this.contractManagerName = this.getEmployeeName(employee);
              });
            }

            if (!!this.purchaseContract.bidtPurchaseContractId) {
              this.purchaseContractService
                .findBidtPurchaseContract({ id: this.purchaseContract.bidtPurchaseContractId })
                .subscribe((contract) => {
                  this.parentContractLabel = this.getParentContractLabel(contract);
                });
            }

            if (this.purchaseContract.pcNumber) {
              this.displayComponentContext(this.purchaseContract.pcNumber, this.isCreateOpenMode);
            }
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadingContract'));
        }
      );
    } else {
      // Creation initialisation
      this.purchaseContract = {
        pcCreationDate: new Date(),
        pcUpdateDate: new Date(),
        pcValidityStartDate: new Date(),
        pcValidityEndDate: new Date(),
        statusState: PurchaseContractStatusConstants.CREATED
      };
    }
  }

  // Load dropdown lists
  private loadReferentialData(): void {
    forkJoin({
      statusList: this.getReferencialObservable(this.statusList, PurchaseContractPropertyConstants.CONTRACT_STATUS_MAP),
      typeList: this.getReferencialObservable(this.typeList, PurchaseContractPropertyConstants.CONTRACT_ITEM_TYPE_MAP),
      sliceStatusList: this.getReferencialObservable(
        this.sliceStatusList,
        PurchaseContractPropertyConstants.CONTRACT_SLICE_STATUS_MAP
      ),
      sliceTypeList: this.getReferencialObservable(
        this.sliceTypeList,
        PurchaseContractPropertyConstants.CONTRACT_SLICE_TYPE_MAP
      ),
      pcTypeList: this.getReferencialObservable(this.pcTypeList, PurchaseContractPropertyConstants.CONTRACT_TYPE_MAP),
      pcCurrencyList: this.getReferencialObservable(this.pcCurrencyList, GenericPropertyConstants.CURRENCY_MAP),
      itemStatusList: this.getReferencialObservable(
        this.itemStatusStateList,
        PurchaseContractPropertyConstants.CONTRACT_ITEM_STATUS_MAP
      ),
      sliceUnitList: this.getReferencialObservable(
        this.pcCurrencyList,
        GenericPropertyConstants.MISSION_PERIODICITY_TYPE_MAP
      ),
      partnerRoleList: this.getReferencialObservable(
        this.partnerRoleList,
        PurchaseContractPropertyConstants.PARTNER_ROLE_MAP
      )
    }).subscribe((result) => {
      this.statusList = result.statusList;
      this.typeList = result.typeList;
      this.sliceStatusList = result.sliceStatusList;
      this.sliceTypeList = result.sliceTypeList;
      this.pcTypeList = result.pcTypeList;
      this.pcCurrencyList = result.pcCurrencyList;
      this.itemStatusStateList = result.itemStatusList;
      this.sliceUnitList = result.sliceUnitList;
      this.partnerRoleList = result.partnerRoleList;
    });
  }

  // Get site list data from server
  public getSiteList(): void {
    this.materialFormService.findAllSites().subscribe((result) => {
      this.pcSiteList = ListUtils.orEmpty(result).map((site: BidtSiteDTO) => {
        return {
          label: `${site.siteCode}-${site.siteName}`,
          value: site.siteId
        };
      });
    });
  }

  private loadDocuments(): void {
    if (this.componentData && this.componentData.objectId) {
      const contractId: BidtPurchaseContractDTOId = this.serializationService.deserialize(this.componentData.objectId);

      this.purchaseContractService
        .findBidtDocumentsByPurchaseContractId(contractId)
        .subscribe((results) => (this.documentsList = results));
    }
  }

  private getReferencialObservable(
    currentList: LabelValue<string>[],
    mapKey: string
  ): Observable<LabelValue<string>[]> {
    return ListUtils.isEmpty(currentList) ? this.propertiesService.getValue(mapKey) : of(currentList);
  }

  private loadPartner(): void {
    this.partnerTableDataSource.setData([]);
    if (this.componentData && this.componentData.objectId) {
      const contractId: BidtPurchaseContractDTOId = this.serializationService.deserialize(this.componentData.objectId);

      this.partnerTableDataSource.isLoading = true;
      this.purchaseContractService
        .findBidoPartnerByPurchaseContractId(contractId)
        .pipe(
          finalize(() => {
            this.partnerTableDataSource.isLoading = false;
          })
        )
        .subscribe(
          (result) => {
            if (!!result) {
              const partnerList = result.map((partner) => this.getContractPartnerRow(partner));
              this.partnerTableDataSource.setData(partnerList);
            } else {
              this.partnerTableDataSource.setData([]);
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadingPartners'));
          }
        );
    }
  }

  /**************************************************************************
   * Table Of Content
   *************************************************************************/

  private setTableOfContent(): void {
    const headerDataKey = this.getComponentName() + '.' + PurchaseContractFormComponent.HEADER_DATA_ANCHOR_ID;
    const partnerKey = this.getComponentName() + '.' + PurchaseContractFormComponent.PARTNER_ANCHOR_ID;
    const sliceKey = this.getComponentName() + '.' + PurchaseContractFormComponent.SLICE_ANCHOR_ID;
    const officeProvisionKey = this.getComponentName() + '.' + PurchaseContractFormComponent.OFFICE_PROVISION_ANCHOR_ID;
    const priceTableKey = this.getComponentName() + '.' + PurchaseContractFormComponent.PRICE_TABLE_ANCHOR_ID;
    const documentsKey = this.getComponentName() + '.' + PurchaseContractFormComponent.DOCUMENTS_ANCHOR_ID;
    this.translateService
      .get([headerDataKey, partnerKey, sliceKey, officeProvisionKey, priceTableKey, documentsKey])
      .subscribe((results: string[]) => {
        const headerDataLabel = !!results ? results[headerDataKey] : 'Header Data Information';
        const partnerLabel = !!results ? results[partnerKey] : 'Partner Information';
        const sliceLabel = !!results ? results[sliceKey] : 'Slice Information';
        const officeProvisionLabel = !!results ? results[officeProvisionKey] : 'Office / Provision Information';
        const priceTableLabel = !!results ? results[priceTableKey] : 'Price Information';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';
        this.toc = [
          {
            id: PurchaseContractFormComponent.HEADER_DATA_ANCHOR_ID,
            anchor: this.headerDataEltRef,
            label: headerDataLabel
          },
          {
            id: PurchaseContractFormComponent.PARTNER_ANCHOR_ID,
            anchor: this.partnerEltRef,
            label: partnerLabel
          },
          {
            id: PurchaseContractFormComponent.SLICE_ANCHOR_ID,
            anchor: this.sliceEltRef,
            label: sliceLabel
          },
          {
            id: PurchaseContractFormComponent.OFFICE_PROVISION_ANCHOR_ID,
            anchor: this.officeProvisionEltRef,
            label: officeProvisionLabel
          },
          {
            id: PurchaseContractFormComponent.PRICE_TABLE_ANCHOR_ID,
            anchor: this.priceTableEltRef,
            label: priceTableLabel
          },
          {
            id: PurchaseContractFormComponent.DOCUMENTS_ANCHOR_ID,
            anchor: this.documentsEltRef,
            label: documentsLabel
          }
        ];

        super.selectPageTocEntry(this.component.HEADER_DATA_ANCHOR_ID);
      });
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public selectDocumentSection(selected: boolean): void {
    if (selected) {
      this.selectPageTocEntry(this.component.DOCUMENTS_ANCHOR_ID);
    }
  }

  /**************************************************************************
   * Table Of Slices
   *************************************************************************/
  private initSlicesTableDataSource(): void {
    this.slicesTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        {
          field: 'pcsOrder',
          translateKey: this.getTranslateKey('pcsOrder')
        },
        {
          field: 'pcsDescription',
          translateKey: this.getTranslateKey('pcsDescription')
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('statusState')
        },
        {
          field: 'pcsConsolidationDate',
          translateKey: this.getTranslateKey('pcsConsolidationDate')
        },
        {
          field: 'pcsDuration',
          translateKey: this.getTranslateKey('pcsDuration')
        },
        {
          field: 'pcsStartDate',
          translateKey: this.getTranslateKey('pcsStartDate')
        },
        {
          field: 'pcsEndDate',
          translateKey: this.getTranslateKey('pcsEndDate')
        }
      ],
      data: [],
      allowUniqueValue: true
    });
  }

  private loadSlices(): void {
    if (this.componentData && this.componentData.objectId) {
      // Load business partner object
      const contractId: BidtPurchaseContractDTOId = this.serializationService.deserialize(this.componentData.objectId);

      this.slicesTableDataSource.setData([]);
      this.slicesTableDataSource.isLoading = true;
      this.purchaseContractService
        .findSlicesByPurchaseContractId(contractId)
        .pipe(
          finalize(() => {
            this.slicesTableDataSource.isLoading = false;
          })
        )
        .subscribe(
          (result) => {
            if (!!result) {
              this.slicesTableDataSource.setData(result.map((slice) => this.sliceToRow(slice)));
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadingSlices'));
          }
        );
    }
  }

  private elementToRow(bidtPurchaseContractElementDTO: BidtPurchaseContractElementDTO): ContractElementRow {
    this.purchaseContractElementService.calculatePrice(bidtPurchaseContractElementDTO);

    return {
      bidtPurchaseContractElementDTO
    };
  }

  private sliceToRow(sliceDTO: BidtPurchaseContractSliceDTO): ContractSliceRow {
    return {
      bidtPurchaseContractSliceDTO: sliceDTO,
      sliceStatusLabel: LabelValueHelper.getLabelByValue(this.sliceStatusList, sliceDTO.statusState) || '',
      sliceTypeLabel: LabelValueHelper.getLabelByValue(this.sliceTypeList, sliceDTO.pcsType) || ''
    };
  }

  public addSlices() {
    this.slicesDialogOpenMode = ComponentOpenMode.Create;
    this.slicePopupData = {};
    this.isNewSlice = true;
    this.openSliceEditPopup();
  }

  public onAddSlice(ev: BidtPurchaseContractSliceDTO) {
    this.slicesTableDataSource.addData([this.sliceToRow(ev)]);
  }

  public editSlices() {
    this.slicesDialogOpenMode = ComponentOpenMode.Write;
    this.slicePopupData = { ...this.slicesTableDataSource.dataSelection[0].bidtPurchaseContractSliceDTO };
    this.isNewSlice = false;
    this.openSliceEditPopup();
  }

  public openSliceEditPopup() {
    this.showSliceEditPopup = true;
  }

  public openSlices() {
    this.slicesDialogOpenMode = ComponentOpenMode.Read;
    this.slicePopupData = this.slicesTableDataSource.dataSelection[0].bidtPurchaseContractSliceDTO;
    this.isNewSlice = false;
    this.showSliceEditPopup = true;
    // this.isReadOnlyPurchaseContractSliceDialog = true;
  }

  public onUpdateSlice(ev: BidtPurchaseContractSliceDTO) {
    this.slicesTableDataSource.replaceData(this.slicesTableDataSource.dataSelection[0], this.sliceToRow(ev));
  }

  public deleteSlices() {
    const partialMessageKey =
      this.slicesTableDataSource.dataSelectionCount > 1 ? 'confirmOnDeleteSlices' : 'confirmOnDeleteSlice';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.slicesTableDataSource.deleteDataSelection();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteSlice'));
        this.reinitializeItemTree();
      }
    });
  }

  public onSliceSelected(_event: { selectedData: ContractSliceRow }): void {
    this.onSliceFocus();
  }

  public onSliceUnselected(_event: { selectedData: ContractSliceRow }): void {
    this.onSliceFocus();
  }

  public onSliceFocus(): void {
    if (this.slicesTableDataSource.dataSelectionCount === 1) {
      const currentSlice = this.slicesTableDataSource.dataSelection[0];
      // Tree already loaded
      if (currentSlice.sliceItemsTree) {
        // Tree already loaded => Direct affectation
        this.itemsTreeTable = currentSlice.sliceItemsTree;
      } else {
        this.loadSliceItems(currentSlice);
      }
      this.sliceSelected = currentSlice;
    } else {
      this.reinitializeItemTree();
    }
  }

  private reinitializeItemTree(): void {
    this.itemsTreeTable = undefined;
    this.itemSelected = undefined;
    this.itemNodeSelected = undefined;
    this.initTableElementAndServicesCols();
  }

  /**************************************************************************
   * PARTNER
   *************************************************************************/

  public getContractPartnerRow(bidtPurchaseContractPartnerDTO: BidtPurchaseContractPartnerDTO): ContractPartnerRow {
    return {
      bidtPurchaseContractPartnerDTO,
      customerCode: bidtPurchaseContractPartnerDTO.customerCode,
      roleLabel: LabelValueHelper.getLabelByValue(this.partnerRoleList, bidtPurchaseContractPartnerDTO.pcpRole)
    };
  }

  private initTablePartnerCols(): void {
    this.partnerTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        { field: 'customerCode', translateKey: this.getTranslateKey('customerCode') },
        { field: 'roleLabel', translateKey: this.getTranslateKey('roleLabel') }
      ],
      data: [],
      allowUniqueValue: true,
      propertiesWitchIdentifyData: ['customerCode', 'roleLabel'],
      errorOnAddedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate'),
      errorOnUpdatedDuplicate: this.getTranslateKey('errorOnPartnerDuplicate')
    });
  }

  public addPartner() {
    this.partnerDialogOpenMode = ComponentOpenMode.Create;
    this.currentPartner = {};
    this.showPartnerDialog = true;
  }

  public onAddPartner(ev: BidtPurchaseContractPartnerDTO) {
    this.partnerTableDataSource.addData([this.getContractPartnerRow(ev)]);
  }

  public editPartner() {
    this.currentPartner = this.partnerTableDataSource.dataSelection[0].bidtPurchaseContractPartnerDTO;
    this.partnerDialogOpenMode = ComponentOpenMode.Write;
    this.showPartnerDialog = true;
  }

  public onUpdatePartner(ev: BidtPurchaseContractPartnerDTO) {
    this.partnerTableDataSource.replaceData(
      this.partnerTableDataSource.dataSelection[0],
      this.getContractPartnerRow(ev)
    );
  }

  public deletePartner() {
    const partialMessageKey =
      this.partnerTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedPartners'
        : 'confirmDeleteSelectedPartner';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.partnerTableDataSource.deleteDataSelection();
      }
    });
  }

  /**************************************************************************
   * ELEMENT AND SERVICES
   *************************************************************************/

  private initTableElementAndServicesCols(): void {
    this.elementAndServicesTableDataSource = this.getItemAndServiceDataSourceWithHistory();
  }

  public addElementAndServices() {
    this.elementAndServicesPopupData = undefined;
    this.elementAndServicesDialogOpenMode = ComponentOpenMode.Create;
    this.showElementAndServicesDialog = true;
  }

  public onAddElementAndServices(ev: BidtPurchaseContractElementDTO) {
    this.elementAndServicesTableDataSource.addData([this.elementToRow(ev)]);
    this.onElementsAndServicesModification();
  }

  private onElementsAndServicesModification(): void {
    if (!!this.itemsTreeTable && !!this.itemNodeSelected) {
      this.itemsTreeTable.markAsUpdated(this.itemNodeSelected);
    }
    this.onItemsTreeModification();
  }

  public editElementAndServices() {
    this.elementAndServicesDialogOpenMode = ComponentOpenMode.Write;
    this.elementAndServicesPopupData = {
      ...this.elementAndServicesTableDataSource.dataSelection[0].bidtPurchaseContractElementDTO
    };
    this.isNewElementAndServices = false;
    this.showElementAndServicesDialog = true;
  }

  public onUpdateElementAndServices(ev: BidtPurchaseContractElementDTO) {
    this.elementAndServicesTableDataSource.replaceData(
      this.elementAndServicesTableDataSource.dataSelection[0],
      this.elementToRow(ev)
    );
    this.onElementsAndServicesModification();
  }

  public deleteElementAndService() {
    const partialMessageKey =
      this.elementAndServicesTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedElements'
        : 'confirmDeleteSelectedElement';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.elementAndServicesTableDataSource.deleteDataSelection();
        this.onElementsAndServicesModification();
      }
    });
  }
  /*************************************************************************
   * Item Structure Popup
   *************************************************************************/

  private loadSliceItems(slice: ContractSliceRow): void {
    const itemIdGetter = (row: ContractItemRow) =>
      row.bidtPurchaseContractItemDTO && row.bidtPurchaseContractItemDTO.id;
    const itemParentIdSetter = (row: ContractItemRow, parentId?: string) =>
      (row.bidtPurchaseContractItemDTO.bidtPurchaseContractItemId = parentId);
    if (!slice.bidtPurchaseContractSliceDTO || slice.bidtPurchaseContractSliceDTO.id === undefined) {
      // Added slice => Direct initialisation
      slice.sliceItemsTree = new TreeModifications<ContractItemRow, string>(itemIdGetter, itemParentIdSetter);
      this.itemsTreeTable = slice.sliceItemsTree;
    } else {
      // Existing slice => items tree loading
      this.purchaseContractItemService
        .getContractSliceItems(slice.bidtPurchaseContractSliceDTO.id)
        .subscribe((itemsTree) => {
          slice.sliceItemsTree = new TreeModifications<ContractItemRow, string>(itemIdGetter, itemParentIdSetter);
          slice.sliceItemsTree.tree = TreeNodeUtils.mapTreeNode(itemsTree, this.initContractItemRow);
          TreeNodeUtils.setExpanded(slice.sliceItemsTree.tree);
          this.itemsTreeTable = slice.sliceItemsTree;
        });
    }
  }

  private initContractItemRow(item: BidtPurchaseContractItemDTO): ContractItemRow {
    return {
      bidtPurchaseContractItemDTO: item
    };
  }

  private initItemTreeTableColList(): void {
    this.itemsTreeTableColList = [{ field: 'pciLabel', alignment: 'left' }];
  }

  public onItemSelection(itemNode: TreeNode | undefined): void {
    this.itemNodeSelected = itemNode;
    this.itemSelected = this.itemNodeSelected && this.itemNodeSelected.data;
    if (!!this.itemSelected) {
      if (this.itemSelected.itemElementAndServicesTableDataSource) {
        this.elementAndServicesTableDataSource = this.itemSelected.itemElementAndServicesTableDataSource;
      } else {
        this.loadItemElements();
      }
    }
  }

  public onAddItem(): void {
    // Show popup to create a new items
    this.isNewItem = true;
    if (this.sliceSelected && this.sliceSelected.bidtPurchaseContractSliceDTO) {
      this.currentItem = {
        pciStartDate: this.sliceSelected.bidtPurchaseContractSliceDTO.pcsStartDate,
        pciEndDate: this.sliceSelected.bidtPurchaseContractSliceDTO.pcsEndDate
      };
    } else {
      this.currentItem = undefined;
    }
    this.isReadOnlyItemPopup = false;
    this.showItemPopup = true;
  }

  public onItemsTreeModification() {
    // Force to register slice as modified to make its item modifications available on save
    this.slicesTableDataSource.markAsUpdated(this.slicesTableDataSource.dataSelection[0]);
  }
  public addNewItem(newItem: BidtPurchaseContractItemDTO): void {
    if (this.itemsTreeTable) {
      this.itemsTreeTable.addChildNode(this.initContractItemRow(newItem), this.itemNodeSelected);
      this.onItemsTreeModification();
    }
  }

  public onEditItem(): void {
    if (this.itemSelected) {
      // Show popup to edit selected item
      this.currentItem = { ...this.itemSelected.bidtPurchaseContractItemDTO };
      this.isNewItem = false;
      this.isReadOnlyItemPopup = false;
      this.showItemPopup = true;
    }
  }

  public editSelectedItem(item: BidtPurchaseContractItemDTO): void {
    if (item && this.itemNodeSelected && this.itemsTreeTable) {
      const itemRow: ContractItemRow = this.itemNodeSelected.data;
      itemRow.bidtPurchaseContractItemDTO = item;
      if (!!this.itemSelected) {
        this.itemSelected.bidtPurchaseContractItemDTO = item;
      }
      this.itemsTreeTable.updateNode(itemRow, this.itemNodeSelected);
      this.onItemsTreeModification();
    }
  }

  public deleteItems() {
    if (this.itemsTreeTable) {
      this.itemsTreeTable.deleteNode(this.itemNodeSelected);
      this.onItemsTreeModification();
      this.initTableElementAndServicesCols();
    }
  }

  private getItemAndServiceDataSourceWithHistory(): TableDataSourceWithHistory<ContractElementRow> {
    return new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        { field: 'birePnPnCode', translateKey: this.getTranslateKey('pnCode') },
        { field: 'pceQuantity', translateKey: this.getTranslateKey('pciQuantity') },
        { field: 'pceCurrency', translateKey: this.getTranslateKey('pcieCurrency') },
        { field: 'pcePriceExclTax', translateKey: this.getTranslateKey('pciePriceExclTax') },
        { field: 'pceVat', translateKey: this.getTranslateKey('pcieVat') },
        { field: 'pcePrice', translateKey: this.getTranslateKey('pciPrice') },
        { field: 'pceTimeLimit', translateKey: this.getTranslateKey('pcieTimeLimit') }
      ],
      data: [],
      allowUniqueValue: false
    });
  }

  private itemAlreadyExists(): boolean {
    return (
      !!this.itemSelected &&
      !!this.itemSelected.bidtPurchaseContractItemDTO &&
      !!this.itemSelected.bidtPurchaseContractItemDTO.id
    );
  }

  private loadItemElements(): void {
    if (this.itemAlreadyExists()) {
      this.purchaseContractElementService
        .findElementsByItemId((this.itemSelected && this.itemSelected.bidtPurchaseContractItemDTO.id) as string)
        .subscribe((elements) => {
          if (!!this.itemSelected) {
            this.itemSelected.itemElementAndServicesTableDataSource = this.getItemAndServiceDataSourceWithHistory();
            this.itemSelected.itemElementAndServicesTableDataSource.setData(
              elements.map((element) => this.elementToRow(element))
            );
            this.elementAndServicesTableDataSource = this.itemSelected.itemElementAndServicesTableDataSource;
          }
        });
    } else if (!!this.itemSelected) {
      this.itemSelected.itemElementAndServicesTableDataSource = this.getItemAndServiceDataSourceWithHistory();
      this.elementAndServicesTableDataSource = this.itemSelected.itemElementAndServicesTableDataSource;
    }
  }

  /*************************************************************************
   * Parent contract id Popup
   *************************************************************************/
  public selectParentId(): void {
    this.showParentIdDialog = true;
  }

  public onSelectedParentId(selectedObject: BidtPurchaseContractDTO) {
    if (selectedObject) {
      this.purchaseContract.bidtPurchaseContractId = selectedObject.id;
      this.parentContractLabel = this.getParentContractLabel(selectedObject);
    }
    this.showParentIdDialog = false;
  }

  private getParentContractLabel(selectedParentContract: BidtPurchaseContractDTO): string {
    return `${selectedParentContract.pcNumber} ${selectedParentContract.pcLabel}`;
  }

  /*************************************************************************
   * Search employee Popup
   *************************************************************************/
  public quickSearchEmployee(): void {
    this.showEmployeePopup = true;
  }

  public setSelectedEmployee(selectedEmployee: BidtEmployeeDTO) {
    if (selectedEmployee) {
      this.showEmployeePopup = false;
      this.purchaseContract.bidtEmployeeId = selectedEmployee.id;
      this.contractManagerName = this.getEmployeeName(selectedEmployee);
    }
  }

  private getEmployeeName(selectedEmployee: BidtEmployeeDTO): string {
    return `${selectedEmployee.employeeLastName} ${selectedEmployee.employeeFirstName}`;
  }

  public getCurrencyLabel(): string | undefined {
    let returnValue;
    if (!!this.purchaseContract.pcCurrency && !!this.purchaseContract.pcCurrency) {
      returnValue = LabelValueHelper.getLabelByValue(this.pcCurrencyList, this.purchaseContract.pcCurrency);
    }

    return returnValue;
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.purchaseContract.statusUser,
        currentDate: this.purchaseContract.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.purchaseContract.statusState, this.statusList),
          value: this.purchaseContract.statusState
        },
        nextStatuses: this.statusList
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.purchaseContract.statusState = event.data;
          this.save();
        }
      }
    });
  }
}
