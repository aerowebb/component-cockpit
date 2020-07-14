import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/primeng';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentConstants } from '../../constants/component-constants';
import { ControlConfigConstants } from '../../constants/control-config-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ConfirmationService } from '../../services/confirmation.service';
import { DateService } from '../../services/date.service';
import { PropertiesService } from '../../services/properties.service';
import { FetchSentenceDecisionInputDTO } from '../../types/api-input-types/maintenance-component-cockpit/fetch-sentence-decision-input-dto.interface';
import { BidoDocumentationTableOutputDTO } from '../../types/api-output-types/fleet-management/bido-documentation-table-output-dto.interface';
import { GetPartNumberStructureOutputDTO } from '../../types/api-output-types/get-part-number-structure-output-dto.interface';
import { IWBFindingsCustom } from '../../types/api-output-types/maintenance-component-cockpit/iwb-findings-custom.interface';
import { SentenceAndDecisionListOutput } from '../../types/api-output-types/maintenance-component-cockpit/sentence-and-decision-list-output.interface';
import { TechnicalQuotationOutput } from '../../types/api-output-types/maintenance-component-cockpit/technical-quotation-output.interface';
import { DamagesWithItemVersionOutput } from '../../types/api-output-types/task-management/damages-with-item-version-output.interface';
import { TaskAssociatedItemOutput } from '../../types/api-output-types/task-management/task-associated-item-output.interface';
import { BireItemForWorkscopeTreeDTO } from '../../types/api-output-types/workscope-component/bire-item-for-workscope-tree-dto.interface';
import { BidmWorkOrderDTOId } from '../../types/api-types/bidm-work-order-dto-id.interface';
import { BidoDocumentationDTOId } from '../../types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../types/api-types/bido-documentation-dto.interface';
import { BireDocumentDTO } from '../../types/api-types/bire-document-dto.interface';
import { BireItemDTOId } from '../../types/api-types/bire-item-dto-id.interface';
import { BireItemVersionDTOId } from '../../types/api-types/bire-item-version-dto-id.interface';
import { BireLocalisationItemDTO } from '../../types/api-types/bire-localisation-item-dto.interface';
import { BirePnDTOId } from '../../types/api-types/bire-pn-dto-id.interface';
import { BireTaskDTO } from '../../types/api-types/bire-task-dto.interface';
import { BsdeProjectDTO } from '../../types/api-types/bsde-project-dto.interface';
import { FormPageComponent } from '../../types/form-page-component';
import { LabelValue } from '../../types/label-value.interface';
import { FileUtils } from '../../utils/file-utils';
import { ImageUtils } from '../../utils/image-utils';
import { SelectItemUtils } from '../../utils/select-item-utils';
import { StringUtils } from '../../utils/string-utils';
import { TableDataSource } from '../table/table-data-source';

import { AddEditInventoryService } from './add-edit-inventory.service';

export interface BreadcrumbsLabel {
  title?: string;
  subtittle?: string;
  index: number;
  data?: BsdeProjectDTO;
}

// Inventory DTO
interface InventoryDTO extends TechnicalQuotationOutput {
  index: number;
  control?: string;
  quantity?: string;
  icon?: string;
  sentenceList?: string[];
  decisionList?: string[];
  serialized?: boolean;
  isSelected?: boolean;
  targetPN?: string;
  comment?: string;
  trackingNumber?: string;
  progress?: number;
  findings?: FindingsInterface[];
  works?: WorkListInterface[];
  document?: BidoDocumentationTableOutputDTO[];
  documentsUpdated?: BidoDocumentationTableOutputDTO[];
  documentsAdded?: BidoDocumentationTableOutputDTO[];
}

// Findings Table Interface
interface FindingsInterface extends IWBFindingsCustom {
  index?: number;
  damageDescription?: string;
  location?: string;
  findingComment?: string;
  bireDocumentDTOList?: BireDocumentDTO[];
  additionalData?: unknown;
}

// Work List Table Interface
interface WorkListInterface extends BireTaskDTO {
  damage?: string;
  mroCenter?: string;
  workOrder?: string;
  applied?: boolean;
  progress?: number;
  taskTypeLabel?: string;
}

interface SNListInterface {
  value?: string;
}

interface SearchCriteria {
  selectedPN?: string;
  selectedWO?: string;
  selectedSentence?: string;
  selectedDecision?: string;
  control?: string[];
}

// Document Table Interface
interface DocumentTableRow {
  docName?: string;
  docPublicationDate?: string;
  docEndOfValidityDate?: string;
  docDescription?: string;
  docExtension?: string;
  docCode?: string;
  docCategory?: string;
  _obj?: BidoDocumentationDTO;
}

interface BreadcrumbsInventoryLabel extends BreadcrumbsLabel {
  bireItem?: BireItemForWorkscopeTreeDTO;
  isFromInspection?: boolean;
  isAddInventory?: boolean;
  inventoryList?: InventoryDTO[];
}

interface DamagesWithItemVersionOutputCustom {
  damageCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  versionNumber?: string;
  damageDescription?: string;
  unitCode?: string;
}

interface CustomTableColumn extends TableColumn {
  display?: string;
}

interface WorksSearchCriteriaFilter {
  selectedReworkPN?: string;
  selectedToggle?: number[];
  selectedDesignation?: LabelValue<string>;
  selectedCode?: LabelValue<string>;
}

@Component({
  selector: 'aw-add-edit-inventory',
  templateUrl: './add-edit-inventory.component.html',
  styleUrls: ['./add-edit-inventory.component.scss']
})
export class AddEditInventoryComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly OK: string = ControlConfigConstants.ICON_GREEN;
  private static readonly WARNING: string = ControlConfigConstants.ICON_YELLOW;
  private static readonly NOK: string = ControlConfigConstants.ICON_RED;
  private static readonly APPLIED: number = 0;
  private static readonly NOT_APPLIED: number = 1;

  public inventoryList: InventoryDTO[];
  public bsdeProjectDTO: BsdeProjectDTO;
  public isFromInspection: boolean;
  public isAddInventory: boolean;
  public bireItemDTO: BireItemForWorkscopeTreeDTO;
  public pageComponentData: BreadcrumbsInventoryLabel;
  public findingCols: TableColumn[];
  public worksCols: CustomTableColumn[];
  public sentenceList: SelectItem[];
  public decisionList: SelectItem[];
  public pnList: string[];
  public clonePnList: string[];
  public snList: SelectItem[];
  public tnList: SelectItem[];
  public targetPNList: string[];
  public cloneTargetPNList: string[];
  public items: MenuItem[];
  public cardList: InventoryDTO[];
  public cloneCardList: InventoryDTO[];
  public snCount: SNListInterface[];
  public selectedInventoryList: InventoryDTO[];
  public findingsList: FindingsInterface[];
  public selectedFinding: FindingsInterface[];
  public workList: WorkListInterface[];
  public dbWorkList: WorkListInterface[];
  public selectedWork: WorkListInterface[];
  public mroCenterList: LabelValue<string>[];
  public taskList: LabelValue<string>[];
  public reworkPNs: LabelValue<string>[];

  public selectedSentence: string | undefined;
  public selectedDecision: string | undefined;
  public selectedMroCenter: string | undefined;

  public showEquipments: boolean;
  public isScreenSaved: boolean;
  public showFindingsDialog: boolean;
  public showInventories: boolean = true;
  public isSentenceMatch: boolean = true;
  public isDecisionMatch: boolean = true;
  public isTNCommon: boolean;
  public isIntersectionSentenceDiff: boolean;
  public isIntersectionDecisionDiff: boolean;
  public isTargetPNCommon: boolean;
  public findingsDialogOpenMode: ComponentOpenMode;
  public addNewInventory: boolean;
  public expandInventoryList: boolean;
  public isPNCommon: boolean;
  public isItemSerialized: boolean;

  public quantityValue: number | undefined;
  public finding: FindingsInterface | undefined;
  public selectedTask: string | undefined;

  public selectedTN: string | undefined;
  public selectedFindingsIndex: number = -1;

  public selectedPN: string | undefined;
  public selectedTargetPN: string | undefined;
  public otherPN: string | undefined;
  public isOtherPNDifferent: boolean;
  public showOtherPN: boolean;

  public nok: string = ControlConfigConstants.ICON_RED;
  public ok: string = ControlConfigConstants.ICON_GREEN;
  public warning: string = ControlConfigConstants.ICON_YELLOW_TRIANGLE_CODE;

  public newInventory: InventoryDTO;
  public sumRealQuantity: number | undefined = 0;
  private itemVersions: string[];
  private unknown: string;
  private addPNList: string[];

  // Overlay
  public inventoryPNList: LabelValue<string>[];
  public inventoryWOList: LabelValue<string>[];
  public inventorySentenceList: LabelValue<string>[];
  public inventoryDecisionList: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  public overlayContentReady: boolean;
  public searchCriteria: SearchCriteria;

  // Work Overlay
  public toggleList: LabelValue<number>[];
  public reworkPNList: LabelValue<string>[];
  public cloneReworkPNList: LabelValue<string>[];
  public taskCodeList: LabelValue<string>[];
  public cloneTaskCodeList: LabelValue<string>[];
  public designationList: LabelValue<string>[];
  public cloneDesignationList: LabelValue<string>[];
  public worksSearchCriteria: WorksSearchCriteriaFilter;

  // documents
  private documentsAdded: BidoDocumentationTableOutputDTO[];
  private documentsUpdated: BidoDocumentationTableOutputDTO[];
  private documents: BidoDocumentationTableOutputDTO[];
  public documentTableDataSource: TableDataSource<DocumentTableRow>;
  public showAddDocumentDialog: Boolean;
  public currentDocument: BidoDocumentationDTO | undefined;
  public documentTypes: SelectItem[];
  public currentDocumentIndex: number;
  public addedDocumentIndex: number;
  public documentDialogOpenMode: ComponentOpenMode;

  // Variables to store list of all sentence and decision
  // specific to Item
  public globalSentenceList: LabelValue<string>[];
  public globalDecisionList: LabelValue<string>[];
  public sentenceDecisionDTO: SentenceAndDecisionListOutput;

  private oldSentence: string | undefined;
  private oldDecision: string | undefined;
  public maxVisibleInventories: number = 4;

  public showFilterPanel: boolean;
  public filtersVisible: boolean;
  public loadInventoriesFlag: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly sessionService: SessionService,
    public translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly propertiesService: PropertiesService,
    private readonly domSanitizer: DomSanitizer,
    private readonly addEditInventoryService: AddEditInventoryService,
    public readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_ITEM_INVENTORY;
  }

  public ngOnInit() {
    this.bsdeProjectDTO = {};

    this.pageComponentData = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : undefined;

    if (!!this.pageComponentData) {
      // Trim down subtitle to 25 characters
      const MAX_LENGTH = 25;
      this.pageComponentData.subtittle =
        !!this.pageComponentData.subtittle && this.pageComponentData.subtittle.length > MAX_LENGTH
          ? `${this.pageComponentData.subtittle.substring(0, MAX_LENGTH)}...`
          : !this.pageComponentData.subtittle
          ? undefined
          : this.pageComponentData.subtittle;
      this.displayComponentContext(`N°${this.pageComponentData.subtittle}`, this.isCreateOpenMode);
    }

    this.cardList = [];
    this.cloneCardList = [];
    this.sentenceList = [];
    this.decisionList = [];
    this.findingsList = [];
    this.inventoryPNList = [];
    this.clonePnList = [];
    this.cloneTargetPNList = [];
    this.inventoryWOList = [];
    this.tnList = [];
    this.inventorySentenceList = [];
    this.inventoryDecisionList = [];
    this.statusList = [];
    this.globalSentenceList = [];
    this.globalDecisionList = [];
    this.addPNList = [];
    this.searchCriteria = {};
    this.worksSearchCriteria = {};

    this.statusList.push(
      { label: 'OK', value: AddEditInventoryComponent.OK },
      { label: 'WARNING', value: AddEditInventoryComponent.WARNING },
      { label: 'NOK', value: AddEditInventoryComponent.NOK }
    );

    this.toggleList = [
      {
        label: `${this.translateService.instant(this.getTranslateKey('applied'))}`,
        value: AddEditInventoryComponent.APPLIED
      },
      {
        label: `${this.translateService.instant(this.getTranslateKey('notApplied'))}`,
        value: AddEditInventoryComponent.NOT_APPLIED
      }
    ];

    this.worksSearchCriteria.selectedToggle = [
      AddEditInventoryComponent.APPLIED,
      AddEditInventoryComponent.NOT_APPLIED
    ];

    this.unknown = `${this.translateService.instant(this.getTranslateKey('unknown'))}`;

    this.documentsAdded = [];
    this.documents = [];
    this.documentsUpdated = [];
    this.documentDialogOpenMode = ComponentOpenMode.Read;

    this.resetData();
    this.init();
    this.loadDocumentTypes();
    this.initDocumentTableDataSource();
  }

  private resetData() {
    this.snCount = [];
    this.selectedWork = [];
    this.selectedFinding = [];
    this.selectedInventoryList = [];
    this.tnList = [];
    this.items = [];
    this.newInventory = {
      index: 0,
      iwbFindingsToDisplay: [],
      iwbTask: []
    };
    this.quantityValue = undefined;
    this.selectedPN = undefined;
    this.otherPN = undefined;
    this.selectedTargetPN = undefined;
    this.selectedSentence = undefined;
    this.selectedDecision = undefined;
    this.resetDecisionList();
  }

  private init() {
    this.renderTableCols();

    // Setting Page component Data
    if (!!this.pageComponentData && !!this.pageComponentData.bireItem) {
      this.inventoryList = !!this.pageComponentData.inventoryList ? this.pageComponentData.inventoryList : [];
      this.isFromInspection = this.pageComponentData.isFromInspection as boolean;
      this.isItemSerialized = !!this.pageComponentData.bireItem
        ? (this.pageComponentData.bireItem.serializedPart as boolean)
        : false;
      this.isAddInventory = this.pageComponentData.isAddInventory as boolean;
      this.bireItemDTO = this.pageComponentData.bireItem as BireItemForWorkscopeTreeDTO;
      this.bsdeProjectDTO = this.pageComponentData.data as BsdeProjectDTO;
      this.selectedMroCenter = this.bsdeProjectDTO.repairCenterCode || undefined;
      this.loadInventoriesFlag = true;

      this.renderList();
      this.displayComponentContext(`N°${this.bsdeProjectDTO.projectNumber}`, this.isCreateOpenMode);
    }

    this.loadTaskTypes();
  }

  private loadTaskTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe((results) => {
      this.taskList = results || [];

      this.selectedTask = this.taskList.length > 0 ? this.taskList[0].value : undefined;
    });
  }

  /****************************************************
   * DOCUMENT TABLE
   ****************************************************/
  private initDocumentTableDataSource(): void {
    this.documentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docEndOfValidityDate',
          translateKey: this.getTranslateKey('docEndOfValidityDate')
        },
        {
          field: 'docCategory',
          translateKey: this.getTranslateKey('docCategory')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
  }

  /***********************************************
   * Load PN List
   ***********************************************/
  private loadPNList() {
    this.clonePnList = [];
    this.cloneTargetPNList = [];
    this.reworkPNs = [];
    this.addPNList = [];

    const input: BireItemDTOId = this.bireItemDTO as BireItemDTOId;

    this.addEditInventoryService.getPartNumberStructure(input).subscribe((res: GetPartNumberStructureOutputDTO[]) => {
      if (!!res && res.length > 0) {
        res.forEach((dto) => {
          this.addPNList.push(dto.pn as string);
        });

        this.addPNList.push(this.unknown);

        // Setting rework PN
        this.addPNList.forEach((pn) => {
          if (pn !== this.unknown) {
            this.reworkPNs.push({
              label: pn,
              value: pn as string
            });
          }
        });

        this.loadNewPNList();
        this.clonePnList = [...this.addPNList];

        // Rework PN
        this.cloneReworkPNList = [...this.reworkPNs];
        this.reworkPNList = [...this.cloneReworkPNList];

        this.loadSentenceDecisionSpecificToItem();
      }
    });
  }

  private loadFindingsList() {
    this.findingsList.forEach((res, index) => (res.index = index));
    this.findingsList.forEach((res) => {
      if (!!res && !!res.bireDocumentDTOList && res.bireDocumentDTOList.length > 0) {
        res.additionalData = this.loadItemStructureNodeIllustrationList(res);
      }
    });
  }

  /*********************************
   * Load Findings list
   *********************************/
  private fetchFidingsList() {
    const input: FetchSentenceDecisionInputDTO = {
      projectNumber: this.bsdeProjectDTO.projectNumber,
      bireItemKey: this.getKey(this.bireItemDTO) as string
    };
    this.addEditInventoryService.loadFindingsList(input).subscribe((res) => {
      this.findingsList = res;
      this.updateFindingsToInventories();
    });
  }

  /**********************************
   * Load Image
   **********************************/
  private loadItemStructureNodeIllustrationList(result: FindingsInterface): SafeResourceUrl | undefined {
    if (!!result.bireDocumentDTOList && result.bireDocumentDTOList.length > 0) {
      const doc = result.bireDocumentDTOList[0] as BireDocumentDTO;

      return this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${ImageUtils.getBase64Prefix(doc.docType)}${doc.docFile}`
      );
    }
  }

  /********************************************
   * Filter PN List
   *******************************************/
  public searchPN(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.clonePnList) {
      dataArr = this.clonePnList.filter((pn) => pn.toLowerCase().startsWith(ev.query.toLowerCase()));
    } else {
      dataArr = this.clonePnList || [];
    }

    this.pnList = [...dataArr];
  }

  /********************************************
   * Filter Target PN List
   *******************************************/
  public searchTargetPN(ev) {
    let dataArr: string[] = [];
    if (!!ev && !!ev.query && !!this.cloneTargetPNList) {
      dataArr = this.cloneTargetPNList.filter((pn) => pn.toLowerCase().startsWith(ev.query.toLowerCase()));
    } else {
      dataArr = this.cloneTargetPNList || [];
    }

    this.targetPNList = [...dataArr];
  }

  /**********************************
   * RENDER SCREEN ELEMENTS
   **********************************/
  private renderTableCols() {
    this.findingCols = [
      { field: 'damage', alignment: 'left' },
      { field: 'localisation', alignment: 'left' },
      { field: 'findingComment', alignment: 'left' },
      { field: 'illustration', alignment: 'center' }
    ];

    this.worksCols = [
      { field: 'task', alignment: 'left', display: 'table-cell' },
      { field: 'code', alignment: 'left', display: 'none' },
      { field: 'type', alignment: 'left', display: 'none' },
      { field: 'designation', alignment: 'left', display: 'none' },
      { field: 'workorder', alignment: 'left', display: 'table-cell' },
      { field: 'applied', alignment: 'center', display: 'table-cell' }
    ];
  }

  /**********************************
   * INIT DROPDOWN
   **********************************/
  private renderList() {
    this.sentenceList = [];
    this.decisionList = [];

    // Load Sentence and Decision
    this.fetchSentence();

    this.addEditInventoryService.findMROCenter().subscribe((res) => {
      this.mroCenterList = res;
    });
  }

  /***********************************
   * Load Sentence
   ***********************************/
  private fetchSentence() {
    this.addEditInventoryService
      .fetchSentenceList()
      .pipe(
        finalize(() => {
          this.fetchDecision();
        })
      )
      .subscribe((res) => {
        this.globalSentenceList = res;
      });
  }

  /***********************************
   * Load Decision
   ***********************************/
  private fetchDecision() {
    this.addEditInventoryService
      .fetchDecisionList()
      .pipe(
        finalize(() => {
          this.loadPNList();
          this.initVersionsData();
          this.fetchFidingsList();
        })
      )
      .subscribe((res) => {
        this.globalDecisionList = res;
      });
  }

  /***********************************
   * Load Sentence Decision
   ***********************************/
  private loadSentenceDecisionSpecificToItem() {
    this.sentenceList = [];
    this.decisionList = [];

    const input: FetchSentenceDecisionInputDTO = {
      projectNumber: this.bsdeProjectDTO.projectNumber,
      bireItemKey: this.getKey(this.bireItemDTO) as string
    };

    this.addEditInventoryService
      .getSentenceAndDecisionList(input)
      .pipe(
        finalize(() => {
          this.loadInventories();
          this.getInventoryIcon();
        })
      )
      .subscribe((res) => {
        this.sentenceDecisionDTO = res;
        if (!!res.sentenceList && res.sentenceList.length > 0) {
          res.sentenceList.forEach((sentence) => {
            this.sentenceList.push({
              value: sentence,
              label: this.getSentenceLabel(sentence) || ''
            });
          });
        }

        if (!!res.decisionList && res.decisionList.length > 0) {
          res.decisionList.forEach((decision) => {
            this.decisionList.push({
              value: decision,
              label: this.getDecisionLabel(decision) || ''
            });
          });
        }
      });
  }

  // Get SN
  private getSN() {
    if (this.isItemSerialized) {
      if (this.isAddInventory || this.addNewInventory) {
        if (!!this.snCount && this.snCount.length > 0) {
          return this.snCount[0].value;
        }
      } else if (this.selectedInventoryList.length === 1) {
        return this.selectedInventoryList[0].sn;
      }
    }

    return undefined;
  }

  // Get Quantity
  private getQuantity() {
    return !!this.quantityValue ? (this.isItemSerialized ? `${this.quantityValue}` : `${this.sumRealQuantity}`) : '1';
  }

  /***********************************
   * Load Inventories
   ***********************************/
  private loadInventories() {
    // Render Inventories List
    this.cardList = [];

    if (this.inventoryList.length > 0) {
      this.inventoryList.forEach((inventory, index) => {
        inventory.index = index;
        inventory.sentenceList = !!inventory.sentenceValue ? [inventory.sentenceValue] : undefined; // TODO: add sentence List
        inventory.decisionList = !!inventory.decisionValue ? [inventory.decisionValue] : undefined; // TODO: add decision List
        this.cardList.push(inventory);
        this.selectInventory(inventory);
      });
      this.loadFavoriteCombination();
      this.cloneCardList = _cloneDeep(this.cardList);
    } else {
      this.loadInventoriesFlag = false;
    }

    // Collapsing if only 1 inventory
    if (this.cardList.length === 1) {
      this.toggleInventoryDisplay();
    }

    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    }

    if (this.isAddInventory) {
      this.loadFavoriteCombination();
    }

    this.filtersVisible = false;
    this.updateFilterCriteria();
  }

  /**************************************
   * Update filter
   **************************************/
  private updateFilterCriteria() {
    this.overlayContentReady = false;
    this.searchCriteria = {};
    this.inventoryPNList = [];
    this.inventoryDecisionList = [];
    this.inventorySentenceList = [];
    this.inventoryWOList = [];

    this.cardList.forEach((inventory) => {
      const isPNExist = this.inventoryPNList.find((pn) => pn.label === inventory.pn);
      if (!isPNExist && !!inventory.pn && this.pnList.includes(inventory.pn)) {
        this.inventoryPNList.push({
          label: inventory.pn,
          value: inventory.pn
        });
      }

      if (!!inventory.decisionValue) {
        const isDecisionExist = this.inventoryDecisionList.find((dec) => dec.value === inventory.decisionValue);

        if (!isDecisionExist) {
          this.inventoryDecisionList.push({
            label: this.getDecisionLabel(inventory.decisionValue) || '',
            value: inventory.decisionValue
          });
        }
      }

      if (!!inventory.woCode) {
        const isWOExist = this.inventoryWOList.find((dec) => dec.value === inventory.woCode);
        if (!isWOExist) {
          this.inventoryWOList.push({
            label: inventory.woCode,
            value: inventory.woCode
          });
        }
      }

      if (!!inventory.sentenceValue) {
        const isSentenceExist = this.inventorySentenceList.find((dec) => dec.value === inventory.sentenceValue);
        if (!isSentenceExist) {
          this.inventorySentenceList.push({
            label: this.getSentenceLabel(inventory.sentenceValue) || '',
            value: inventory.sentenceValue
          });
        }
      }

      this.overlayContentReady = true;
    });
  }

  private loadFilterPanel() {
    this.inventorySentenceList = [];
    this.inventoryPNList = [];
    this.inventoryDecisionList = [];
    this.inventoryWOList = [];

    if (this.inventoryList.length > 0) {
      this.inventoryList.forEach((inventory) => {
        const isPNExist = this.inventoryPNList.filter((pn) => pn.label === inventory.pn);
        if (isPNExist.length === 0 && !!inventory.pn) {
          this.inventoryPNList.push({
            label: inventory.pn,
            value: inventory.pn
          });
        }

        if (!!inventory.decisionValue) {
          const isDecisionExist = this.inventoryDecisionList.filter((dec) => dec.value === inventory.decisionValue);

          if (isDecisionExist.length === 0) {
            this.inventoryDecisionList.push({
              label: this.getDecisionLabel(inventory.decisionValue) || '',
              value: inventory.decisionValue
            });
          }
        }

        if (!!inventory.woCode) {
          const isWOExist = this.inventoryWOList.filter((dec) => dec.value === inventory.woCode);
          if (isWOExist.length === 0) {
            this.inventoryWOList.push({
              label: inventory.woCode,
              value: inventory.woCode
            });
          }
        }

        if (!!inventory.sentenceValue) {
          const isSentenceExist = this.inventorySentenceList.filter((dec) => dec.value === inventory.sentenceValue);
          if (isSentenceExist.length === 0) {
            this.inventorySentenceList.push({
              label: this.getSentenceLabel(inventory.sentenceValue) || '',
              value: inventory.sentenceValue
            });
          }
        }

        this.overlayContentReady = true;
      });

      this.cloneCardList = _cloneDeep(this.cardList);
    }
  }

  /*********************************************
   * Fetch Sentence List
   *********************************************/
  public getSentenceLabel(val: string): string | undefined {
    const dto = this.globalSentenceList.filter((res) => res.value === val);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  /*********************************************
   * Fetch Decision List
   *********************************************/
  public getDecisionLabel(val: string): string | undefined {
    const dto = this.globalDecisionList.filter((res) => res.value === val);

    return !!dto && dto.length > 0 ? dto[0].label : undefined;
  }

  private initVersionsData(): void {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
    this.itemVersions = [];
    this.addEditInventoryService.findBireItemVersions(bireItemDTOId).subscribe((results) => {
      if (!!results) {
        results.forEach((data: LabelValue<string>) => {
          this.itemVersions.push(data.value);
        });

        this.initDamagesAndLocationData();
      }
    });
  }

  /**
   * Return Bire Item DTO ID
   */
  private returnBireItemDTOId(): BireItemDTOId {
    let bireItemDTOId: BireItemDTOId = {
      chapter: '',
      marks: '',
      section: '',
      sheet: '',
      subject: '',
      structureType: ''
    };

    if (!!this.bireItemDTO) {
      bireItemDTOId = {
        familyCode: this.bireItemDTO.familyCode,
        chapter: this.bireItemDTO.chapter as string,
        section: this.bireItemDTO.section as string,
        sheet: this.bireItemDTO.sheet as string,
        marks: this.bireItemDTO.marks as string,
        subject: this.bireItemDTO.subject as string,
        structureType: this.bireItemDTO.structureType as string,
        variantCode: this.bireItemDTO.variantCode
      };
    }

    return bireItemDTOId;
  }

  // Damage table
  private initDamagesAndLocationData() {
    const damages: DamagesWithItemVersionOutputCustom[] = [];
    const locations: BireLocalisationItemDTO[] = [];

    this.itemVersions.forEach((res) => {
      const bireItemVersionDTOId: BireItemVersionDTOId = {
        chapter: this.bireItemDTO.chapter as string,
        familyCode: this.bireItemDTO.familyCode as string,
        marks: this.bireItemDTO.marks as string,
        section: this.bireItemDTO.section as string,
        sheet: this.bireItemDTO.sheet as string,
        structureType: this.bireItemDTO.structureType as string,
        subject: this.bireItemDTO.subject as string,
        variantCode: this.bireItemDTO.variantCode as string,
        versionNumber: res as string
      };

      // Damages
      this.addEditInventoryService
        .findBireDamageItemsByItemVersionItemScreen(bireItemVersionDTOId)
        .subscribe((results: DamagesWithItemVersionOutput[]) => {
          results.forEach((dto: DamagesWithItemVersionOutput) => {
            if (!!dto && !!dto.bireDamageItemDTO) {
              const damageCustomDTO: DamagesWithItemVersionOutputCustom = {
                damageCode: dto.bireDamageItemDTO.damageCode as string,
                chapter: dto.bireDamageItemDTO.chapter as string,
                familyCode: dto.bireDamageItemDTO.familyCode as string,
                marks: dto.bireDamageItemDTO.marks as string,
                section: dto.bireDamageItemDTO.section as string,
                sheet: dto.bireDamageItemDTO.sheet as string,
                structureType: dto.bireDamageItemDTO.structureType as string,
                subject: dto.bireDamageItemDTO.subject as string,
                variantCode: dto.bireDamageItemDTO.variantCode as string,
                damageDescription: dto.description,
                versionNumber: dto.bireDamageItemDTO.versionNumber
              };
              damages.push(damageCustomDTO);
            }
          });
          this.addEditInventoryService.damagesList = [...damages];
        });

      // Location
      this.addEditInventoryService
        .findBireLocalisationItemsByItemVersion(bireItemVersionDTOId)
        .subscribe((results: BireLocalisationItemDTO[]) => {
          results.forEach((dto: BireLocalisationItemDTO) => {
            locations.push(dto);
          });
          this.addEditInventoryService.localisationList = [...locations];
        });
    });

    // Items
    this.initTasksData();
  }

  /**********************************
   * CHANGE QUANTITY VALUE
   **********************************/
  public onQuantityChange() {
    if (this.isAddInventory || this.addNewInventory) {
      this.snCount = [];

      if (this.quantityValue !== undefined && Number.isInteger(this.quantityValue)) {
        let count = 0;

        // Add Mode
        if (this.isAddInventory || this.addNewInventory) {
          count = this.quantityValue;
        }

        // Creating snList of dynamic size depending upon number entered by user
        Array(count)
          .fill({})
          .map(() => {
            this.snCount.push({
              value: undefined
            });
          });
      }
    } else if (!this.isItemSerialized && this.selectedInventoryList.length === 1 && !!this.sumRealQuantity) {
      this.selectedInventoryList[0].quantity = `${this.sumRealQuantity}`;
    }
  }

  /***********************************************
   * Get color of configuration
   ***********************************************/
  public getStyles(controlCode) {
    return controlCode === ControlConfigConstants.ICON_GREEN
      ? 'alert--ok'
      : controlCode === ControlConfigConstants.ICON_YELLOW
      ? 'alert--warning'
      : controlCode === ControlConfigConstants.ICON_RED
      ? 'alert--nok'
      : 'none';
  }

  /**************************************************
   * GET CONFIGURATON CONTROL OF SELECTED INVENTORIES
   *************************************************/
  public getConfiguration() {
    let warning = 0;
    let ok = 0;
    let nok = 0;

    if (this.selectedInventoryList.length > 0) {
      this.selectedInventoryList.forEach((res) => {
        if (res.icon === ControlConfigConstants.ICON_GREEN) {
          ok++;
        } else if (res.icon === ControlConfigConstants.ICON_RED) {
          nok++;
        } else if (res.icon === ControlConfigConstants.ICON_YELLOW) {
          warning++;
        }
      });
    }

    return !!nok
      ? ControlConfigConstants.ICON_RED
      : !!warning
      ? ControlConfigConstants.ICON_YELLOW
      : ControlConfigConstants.ICON_GREEN;
  }

  /****************************************
   * Inventories Action
   ****************************************/
  public addInventory() {
    this.resetTaskDamagesAndDocuments();
    this.addNewInventory = true;
    this.unselectAllInventories();
    this.resetData();
    this.loadFavoriteCombination();
    this.quantityValue = 1;
  }

  private loadNewPNList() {
    this.clonePnList = [];
    this.cloneTargetPNList = [];

    this.clonePnList = [...this.addPNList];
    this.cloneTargetPNList = _cloneDeep(this.clonePnList);

    this.pnList = _cloneDeep(this.clonePnList);
    this.targetPNList = _cloneDeep(this.clonePnList);
  }

  private loadFavoriteCombination() {
    // Set favorite combination, if exist
    if (
      (this.isAddInventory || this.addNewInventory) &&
      !!this.sentenceDecisionDTO &&
      !!this.sentenceDecisionDTO.favoriteCombination
    ) {
      this.selectedSentence = this.sentenceDecisionDTO.favoriteCombination.sentence;
      this.modifyDecisionList();
      this.oldSentence = this.selectedSentence;
      this.selectedDecision = this.sentenceDecisionDTO.favoriteCombination.decision;
      this.oldDecision = this.selectedDecision;
      this.selectedPN = this.sentenceDecisionDTO.favoriteCombination.pn;
    }
  }

  public toggleInventoryDisplay() {
    this.showInventories = this.showInventories ? false : true;
  }

  public expandAll() {
    this.expandInventoryList = !this.expandInventoryList;
  }

  public selectAllInventories() {
    this.otherPN = undefined;

    // Removing favorites, if any
    this.selectedSentence = undefined;
    this.selectedDecision = undefined;
    this.selectedPN = undefined;

    this.modifyInventories(true);
    this.sumRealQuantity = this.selectedInventoryList
      .map((obj) => (!!obj.quantity ? Number(obj.quantity) : 0))
      .reduce((sum, quantity) => sum + quantity, 0);

    this.loadFindingsWorksAndDocuments();
  }

  public unselectAllInventories() {
    this.modifyInventories(false);
    this.sumRealQuantity = 0;
    this.selectedSentence = undefined;
    this.selectedDecision = undefined;
    this.otherPN = undefined;

    this.addNewInventory = true;
    this.resetData();
    this.loadFavoriteCombination();
    this.loadFindingsWorksAndDocuments();
  }

  private modifyInventories(selection: boolean) {
    this.otherPN = undefined;
    this.cardList.forEach((res) => {
      res.isSelected = selection;
    });

    this.updateSelectionAndQuantity();
    this.modifyInventoryList();
  }

  private updateSelectionAndQuantity() {
    this.updateInventoriesSelection();
    this.sumRealQuantity = this.selectedInventoryList
      .map((obj) => (!!obj.quantity ? Number(obj.quantity) : 0))
      .reduce((sum, quantity) => sum + quantity, 0);
  }

  private updateInventoriesSelection() {
    this.selectedInventoryList = this.cardList.filter((res) => res.isSelected);
  }

  /****************************************
   * On selection of inventories
   ****************************************/
  public selectInventory(inventory: InventoryDTO) {
    this.otherPN = undefined;
    this.addNewInventory = false;
    inventory.isSelected = inventory.isSelected ? false : true;

    this.selectedInventoryList = [];
    this.selectedInventoryList = this.cardList.filter((res) => res.isSelected);
    this.sumRealQuantity = this.selectedInventoryList
      .map((obj) => (!!obj.quantity ? Number(obj.quantity) : 0))
      .reduce((sum, quantity) => sum + quantity, 0);

    this.quantityValue = this.selectedInventoryList.length;

    this.selectedSentence = undefined;
    this.selectedDecision = undefined;
    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    } else {
      this.resetData();
      this.addNewInventory = true;
      this.loadFavoriteCombination();
    }

    this.loadFindingsWorksAndDocuments();
  }

  private modifyInventoryList() {
    const sentenceArr: string[][] = [];
    const diffPNArr: string[] = [];
    const otherPNArr: string[] = [];
    this.snList = [];
    this.tnList = [];
    this.addNewInventory = false;

    const decisionArr: string[][] = [];
    const trackNumberArr: string[][] = [];

    this.selectedInventoryList.forEach((res) => {
      const snIndex = this.snList.findIndex((sn) => !!res.sn && res.sn === sn.value);
      const tnIndex = this.tnList.findIndex((tn) => !!res.trackingNumber && res.trackingNumber === tn.value);

      if (!!res.pn) {
        if (this.clonePnList.indexOf(res.pn) !== -1 && diffPNArr.indexOf(res.pn) === -1) {
          diffPNArr.push(res.pn);
        } else if (this.clonePnList.indexOf(res.pn) === -1 && otherPNArr.indexOf(res.pn) === -1) {
          otherPNArr.push(res.pn);
        }
      }

      if (snIndex === -1 && !!res.sn) {
        this.snList.push({
          value: res.sn,
          label: res.sn
        });
      }

      if (tnIndex === -1 && !!res.trackingNumber) {
        this.tnList.push({
          value: res.trackingNumber,
          label: res.trackingNumber
        });

        trackNumberArr.push([res.trackingNumber]);
      }

      if (!!res.sentenceValue) {
        sentenceArr.push([res.sentenceValue]);
      }

      if (!!res.decisionValue) {
        decisionArr.push([res.decisionValue]);
      }
    });

    this.isPNCommon = diffPNArr.length > 1 && this.selectedInventoryList.length > 1 ? this.setCommonPN() : false;
    this.isOtherPNDifferent =
      otherPNArr.length > 1 && this.selectedInventoryList.length > 1 ? this.setDiffOtherPN() : false;

    if (this.addNewInventory || this.newInventory) {
      this.selectedTargetPN = undefined;
    } else {
      this.isTargetPNCommon =
        this.selectedInventoryList.length > 1 && this.cloneTargetPNList.length === this.selectedInventoryList.length
          ? this.setCommonTargetPN()
          : false;
    }

    // Fill Sentence and Decision List of intersection
    if (sentenceArr.length > 0 && sentenceArr.length !== this.selectedInventoryList.length) {
      this.selectedSentence = undefined;
      this.oldSentence = undefined;
      this.isIntersectionSentenceDiff = true;
      this.resetDecisionList();
    } else if (!!sentenceArr && sentenceArr.length > 0) {
      const commonSent = sentenceArr.reduce((a, b) => a.filter((c) => b.includes(c)));
      if (!!commonSent && commonSent.length > 0) {
        this.selectedSentence = commonSent[0];
        this.oldSentence = this.selectedSentence;
        this.modifyDecisionList();
      } else {
        this.selectedSentence = undefined;
        this.oldSentence = undefined;
        this.isIntersectionSentenceDiff = true;
        this.resetDecisionList();
      }
    } else {
      this.isIntersectionSentenceDiff = false;
    }

    if (decisionArr.length > 0 && decisionArr.length !== this.selectedInventoryList.length) {
      this.selectedDecision = undefined;
      this.oldSentence = undefined;
      this.isIntersectionDecisionDiff = true;
    } else if (!!decisionArr && decisionArr.length > 0) {
      const commonDec = decisionArr.reduce((a, b) => a.filter((c) => b.includes(c)));
      if (!!commonDec && commonDec.length > 0) {
        this.selectedDecision = commonDec[0];
        this.oldDecision = this.selectedDecision;
      } else {
        this.selectedDecision = undefined;
        this.oldSentence = undefined;
        this.isIntersectionDecisionDiff = true;
      }
    } else {
      this.isIntersectionDecisionDiff = false;
    }

    if (!!trackNumberArr && trackNumberArr.length > 0) {
      const commonTN = trackNumberArr.reduce((a, b) => a.filter((c) => b.includes(c)));
      this.isTNCommon = commonTN.length === 0;
    }

    if (!this.addNewInventory || !this.newInventory) {
      if (!this.isOtherPNDifferent) {
        this.otherPN = diffPNArr.length === 0 && otherPNArr.length > 0 ? otherPNArr[0] : undefined;
      }

      if (!this.isPNCommon) {
        this.selectedPN =
          otherPNArr.length === 0 && this.clonePnList.length > 0 && diffPNArr.length > 0 ? diffPNArr[0] : undefined;
      }
    }

    this.showOtherPN = otherPNArr.length > 0 && diffPNArr.length === 0;

    if (this.cloneTargetPNList.length > 0 && (!this.addNewInventory || !this.newInventory)) {
      this.selectedTargetPN = this.isTargetPNCommon ? undefined : this.cloneTargetPNList[0];
    }

    this.pnList = [...this.clonePnList];
    this.targetPNList = [...this.cloneTargetPNList];
  }

  private setCommonPN(): boolean {
    this.selectedPN = undefined;

    return true;
  }

  private setCommonTargetPN(): boolean {
    this.selectedTargetPN = undefined;

    return true;
  }

  private setDiffOtherPN(): boolean {
    this.otherPN = undefined;

    return true;
  }

  /****************************************************
   * Onchange event for sentence and decision dropdown
   ****************************************************/
  public changeSentence() {
    if (this.selectedSentence === this.oldSentence) {
      this.selectedSentence = undefined;
      this.oldSentence = undefined;
      this.resetDecisionList();
    } else {
      this.oldSentence = this.selectedSentence;
    }
    this.selectedDecision = undefined;
    this.oldDecision = undefined;

    this.selectedInventoryList.forEach((res) => {
      res.sentenceList = [];
      res.sentenceList.push(this.selectedSentence as string);
      res.sentenceValue = this.selectedSentence;
    });

    this.modifyDecisionList();
    if (this.decisionList.length === 1 && !!this.selectedSentence) {
      this.selectedDecision = this.decisionList[0].value as string;

      // Assign decision to all selected inventories
      this.selectedInventoryList.forEach((res) => {
        res.decisionValue = this.selectedDecision;
      });
    } else {
      this.selectedDecision = undefined;
    }

    this.changeDecision(true);

    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    }

    this.filtersVisible = false;
    this.updateFilterCriteria();
    this.cloneCardList = _cloneDeep(this.cardList);
  }

  /***************************************
   * Update Decision List on basis of sentence
   ***************************************/
  private modifyDecisionList() {
    if (
      !!this.sentenceDecisionDTO &&
      !!this.sentenceDecisionDTO.sentenceDecisionList &&
      this.sentenceDecisionDTO.sentenceDecisionList.length > 0
    ) {
      const dto = this.sentenceDecisionDTO.sentenceDecisionList.filter(
        (res) => res.sentence === this.selectedSentence && res.decisionList
      );

      if (!!dto && dto.length > 0 && !!dto[0].decisionList) {
        this.decisionList = [];
        dto[0].decisionList.forEach((res) => {
          this.decisionList.push({
            label: this.getDecisionLabel(res),
            value: res
          });
        });
      }
    }
  }

  public changeDecision(isModify?: boolean) {
    // Dont modify in case change is happened from sentence
    if (!isModify) {
      if (this.selectedDecision === this.oldDecision) {
        this.selectedDecision = undefined;
        this.oldDecision = undefined;
      } else {
        this.oldDecision = this.selectedDecision;
      }
    }

    this.selectedInventoryList.forEach((res) => {
      res.decisionList = [];
      res.decisionList.push(this.selectedDecision as string);
      res.decisionValue = this.selectedDecision;
    });

    this.loadFilterPanel();

    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    }

    this.cloneCardList = _cloneDeep(this.cardList);
    this.filtersVisible = false;
    this.updateFilterCriteria();
  }

  /****************************************************
   * Onchange event for pn and target PN dropdown
   ****************************************************/
  public onChangeTargetPN() {
    this.selectedInventoryList.forEach((res) => {
      res.targetPN = this.selectedTargetPN;
    });

    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    }

    this.getInventoryIcon();
  }

  public onChangePN() {
    this.selectedInventoryList.forEach((res) => {
      res.pn = this.selectedPN;
    });

    this.getInventoryIcon();
  }

  private getMatchingIconInput(): FetchSentenceDecisionInputDTO {
    return {
      projectNumber: this.bsdeProjectDTO.projectNumber,
      pn: !!this.selectedPN ? this.selectedPN : !!this.otherPN ? this.otherPN : undefined,
      sn: this.getSN(),
      bireItemKey: this.getKey(this.bireItemDTO) as string,
      quantity: this.getQuantity(),
      sentence: this.selectedSentence
    };
  }

  private getControlForMultipleInventories(): FetchSentenceDecisionInputDTO[] {
    const list: FetchSentenceDecisionInputDTO[] = [];
    this.selectedInventoryList.forEach((res) => {
      list.push({
        projectNumber: this.bsdeProjectDTO.projectNumber,
        pn: res.pn,
        sn: !!res.sn ? res.sn : undefined,
        bireItemKey: this.getKey(this.bireItemDTO) as string,
        quantity: res.quantity,
        sentence: res.sentenceValue
      });
    });

    return list;
  }

  public openFindingsDialog() {
    this.finding = _cloneDeep(this.selectedFinding[0]);
    this.findingsDialogOpenMode = ComponentOpenMode.Create;
    this.showFindingsDialog = true;
  }

  /****************************************************
   * EDIT FINDINGS
   ****************************************************/
  public editFindings() {
    const dto = _cloneDeep(this.selectedFinding[0]);
    this.finding = dto;
    this.selectedFindingsIndex = this.findingsList.findIndex(
      (res) => res.index === (this.finding as FindingsInterface).index
    );

    this.findingsDialogOpenMode = ComponentOpenMode.Write;
    this.showFindingsDialog = true;
  }

  /****************************************************
   * DELETE FINDINGS
   ****************************************************/
  public deleteFindings() {
    const partialMessageKey =
      this.findingsList.length > 1 ? 'confirmDeleteSelectedFindings' : 'confirmDeleteSelectedFinding';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedFinding.forEach((dto) => {
          const index = this.findingsList.findIndex(
            (res) => res.damageCode === dto.damageCode && res.index === dto.index
          );
          if (index !== -1) {
            this.findingsList.splice(index, 1);
            this.deleteInventoriesFindings(dto);
          }
        });
        this.selectedFinding = [];
      }
    });
  }

  private deleteInventoriesFindings(dto: FindingsInterface) {
    this.selectedInventoryList.forEach((res) => {
      if (!!res.findings && res.findings.length > 0) {
        const index = res.findings.findIndex(
          (finding) => finding.damageCode === dto.damageCode && finding.index === dto.index
        );
        if (index !== -1 && !!this.cardList && !!this.cardList[res.index] && !!this.cardList[res.index].findings) {
          (this.cardList[res.index].findings as FindingsInterface[]).splice(index, 1);
        }
      }
    });
  }

  public openFindingsDialogInReadMode() {
    this.finding = _cloneDeep(this.selectedFinding[0]);
    this.findingsDialogOpenMode = ComponentOpenMode.Read;
    this.showFindingsDialog = true;
  }

  public addFindings(event: FindingsInterface) {
    if (this.selectedFindingsIndex !== -1) {
      this.findingsList[this.selectedFindingsIndex] = event;
    } else {
      if (!this.findingsList) {
        this.findingsList = [];
      }
      this.findingsList.push(event);
    }

    this.loadFindingsList();
    this.updateFindingsToInventories(event);
    this.finding = undefined;
    this.selectedFinding = [];
  }

  // Item Data
  private initTasksData() {
    this.workList = [];
    this.dbWorkList = [];
    this.reworkPNList = [];
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();

    // Setting work list
    this.addEditInventoryService
      .findBireTaskItemsByItemTaskTab(bireItemDTOId)
      .subscribe((results: TaskAssociatedItemOutput[]) => {
        results.forEach((task) => {
          this.workList.push({
            taskCode: task.code,
            taskVersion: task.version,
            taskDesignation: task.designation
          });
        });
        this.updateWorksToInventories();
        this.fetchMROCenterForEachTask();
      });
  }

  private returnTaskTypeLabel(key): LabelValue<string>[] {
    return this.taskList.filter((task) => task.value === key);
  }

  // Fetch MRO Center of each task
  private fetchMROCenterForEachTask() {
    this.workList.forEach((task, index) => {
      this.addEditInventoryService
        .findBireTask({ taskCode: task.taskCode as string, taskVersion: task.taskVersion as string })
        .pipe(
          finalize(() => {
            this.changeMroCenterAndLoadTask();
          })
        )
        .subscribe((dto) => {
          const taskTypeCodeDTO = this.returnTaskTypeLabel(dto.taskTypeCode);
          task.taskTypeCode = dto.taskTypeCode;
          task.taskTypeLabel = !!taskTypeCodeDTO && taskTypeCodeDTO.length > 0 ? taskTypeCodeDTO[0].label : undefined;
          task.mroCenter = dto.repairCenterCode;
          this.dbWorkList[index] = task;
        });
    });
  }

  public changeMroCenterAndLoadTask() {
    this.changeMROCenter();
    // Assign task list for selected MRO Center
    this.loadTaskList();
  }

  private changeMROCenter() {
    if (this.taskList.length > 0 && !this.selectedMroCenter) {
      this.workList = [...this.dbWorkList];
    } else {
      this.workList = this.dbWorkList.filter((res) => res.mroCenter === this.selectedMroCenter);
    }
  }

  // Setting content of filter panel
  private loadTaskList() {
    this.cloneTaskCodeList = [];
    this.cloneDesignationList = [];
    this.workList.filter((task) => {
      this.cloneTaskCodeList.push({
        label: task.taskCode as string,
        value: task.taskCode as string
      });

      this.cloneDesignationList.push({
        label: task.taskDesignation as string,
        value: task.taskDesignation as string
      });
    });
    this.taskCodeList = [...this.cloneTaskCodeList];
    this.designationList = [...this.cloneDesignationList];
  }

  public changeTaskType() {
    if (this.taskList.length > 0 && (this.selectedTask === this.taskList[0].value || !this.selectedTask)) {
      this.workList = this.dbWorkList.filter((res) => res.mroCenter === this.selectedMroCenter);
    } else {
      this.workList = this.dbWorkList.filter(
        (res) => res.taskTypeCode === this.selectedTask && res.mroCenter === this.selectedMroCenter
      );
    }

    // Assign task list for selected MRO Center
    this.loadTaskList();
  }

  // Documents
  private loadDocumentTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_ASSET_CATEGORY_MAP).subscribe((results) => {
      this.documentTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    let flag = false;
    if (!!event.files) {
      const file: File = event.files[0];
      this.documents.forEach((document) => {
        if (!!document.bidoDocumentationDTO) {
          if (document.bidoDocumentationDTO.docName === file.name) {
            flag = true;
          }
        }
      });
      if (flag) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          const fileNameParts = file.name && file.name.includes('.') ? file.name.split('.') : [];
          const docType = fileNameParts.length > 0 ? fileNameParts[fileNameParts.length - 1].toUpperCase() : undefined;

          if (!!fileContent) {
            const document: BidoDocumentationDTO = {
              docType,
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };
            const bidoDoc: BidoDocumentationTableOutputDTO = {
              bidoDocumentationDTO: document
            };
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];
            this.documentTableDataSource.addData([this.addData(document)]);
          }
          this.updateDocumentsToInventories();
        });
      }

      fileUploader.clear();
    }
  }

  public openDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = -1;
      this.addedDocumentIndex = -1;
      this.currentDocument = this.documentTableDataSource.dataSelection[0]._obj;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showAddDocumentDialog = true;
    }
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        const temp: BidoDocumentationDTOId[] = [];
        this.documentTableDataSource.dataSelection.forEach((data) => {
          if (!!data && !!data._obj && !!data._obj.docCode) {
            const codeId: BidoDocumentationDTOId = {
              docCode: data._obj.docCode
            };
            temp.push(codeId);
          }
        });
        // this.equipment.removeBidoDocumentationId = temp;

        this.documentTableDataSource.setData(
          this.documentTableDataSource.dataSrc.filter((data) => {
            return !this.documentTableDataSource.dataSelection.some((row) => {
              return data.docName === row.docName;
            });
          })
        );

        this.documents = this.documents.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentsAdded = this.documentsAdded.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });
        this.documentsUpdated = this.documentsUpdated.filter((data) => {
          return !this.documentTableDataSource.dataSelection.some((row) => {
            return !!data.bidoDocumentationDTO && data.bidoDocumentationDTO.docName === row.docName;
          });
        });

        this.documentTableDataSource.dataSelection = [];
        this.updateDocumentsToInventories();
      }
    });
  }

  public downloadFiles(): void {
    this.documentTableDataSource.dataSelection.forEach((documentRow) => {
      if (!!documentRow._obj) {
        FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
      }
    });
  }

  public editDocument(): void {
    if (this.documentTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documents.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.addedDocumentIndex = this.documentsAdded.findIndex((list) => {
        return (
          !!list.bidoDocumentationDTO &&
          !!this.documentTableDataSource.dataSelection[0].docName &&
          list.bidoDocumentationDTO.docName === this.documentTableDataSource.dataSelection[0].docName
        );
      });
      this.currentDocument = { ...this.documentTableDataSource.dataSelection[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showAddDocumentDialog = true;
    }
    this.updateDocumentsToInventories();
  }

  public addNewDocument(newDocument: BidoDocumentationDTO) {
    const bidoDoc: BidoDocumentationTableOutputDTO = {
      bidoDocumentationDTO: newDocument
    };
    let fileExists = true;
    if (!!newDocument) {
      this.documentTableDataSource.dataSrc.forEach((doc, i) => {
        if (doc.docName === newDocument.docName) {
          if (this.currentDocumentIndex === i) {
            fileExists = true;
          } else {
            fileExists = false;
            this.messageService.showWarningMessage('global.warningOnFileExists');
          }
        }
      });
      if (fileExists) {
        if (this.currentDocumentIndex !== -1) {
          this.documents[this.currentDocumentIndex] = bidoDoc;
          this.documentTableDataSource[this.currentDocumentIndex] = this.addData(newDocument);
          const updatedDocumentIndex = this.documentsUpdated.findIndex((obj) => {
            return (
              !!obj.bidoDocumentationDTO &&
              !!obj.bidoDocumentationDTO.docName &&
              !!bidoDoc.bidoDocumentationDTO &&
              !!bidoDoc.bidoDocumentationDTO.docName &&
              obj.bidoDocumentationDTO.docName === bidoDoc.bidoDocumentationDTO.docName
            );
          });
          if (newDocument.docCode) {
            if (updatedDocumentIndex !== -1) {
              this.documentsUpdated[updatedDocumentIndex] = bidoDoc;
            } else {
              this.documentsUpdated = [...this.documentsUpdated, bidoDoc];
            }
          } else {
            if (this.addedDocumentIndex !== -1) {
              this.documentsAdded[this.addedDocumentIndex] = bidoDoc;
            } else {
              this.documentsAdded = [...this.documentsAdded, bidoDoc];
            }
          }
        } else {
          const isAdded = this.documentsAdded.some((documentAdded) => this.areSameDocument(documentAdded, bidoDoc));
          if (isAdded) {
            this.messageService.showWarningMessage('global.warningOnDocumentExists');
          } else {
            this.documents = [...this.documents, bidoDoc];
            this.documentsAdded = [...this.documentsAdded, bidoDoc];
            this.documentTableDataSource.addData([this.addData(newDocument)]);
          }
        }
        this.updateDocumentsToInventories();
      }
      this.documentTableDataSource.dataSelection = [];
    }
  }

  private areSameDocument(
    obj1: BidoDocumentationTableOutputDTO | undefined,
    obj2: BidoDocumentationTableOutputDTO | undefined
  ): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return (
        !!obj1.bidoDocumentationDTO &&
        !!obj1.bidoDocumentationDTO.docName &&
        !!obj2.bidoDocumentationDTO &&
        !!obj2.bidoDocumentationDTO.docName &&
        obj1.bidoDocumentationDTO.docName === obj2.bidoDocumentationDTO.docName
      );
    }
  }

  public addData(newDocument: BidoDocumentationDTO): DocumentTableRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!newDocument.docCategory && (documentType.value as string) === newDocument.docCategory
    );
    const row: DocumentTableRow = {
      docName: newDocument.docName,
      docExtension: this.showDocExtension(newDocument),
      docDescription: newDocument.docDescription,
      docCategory: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docEndOfValidityDate: this.dateService.dateToString(newDocument.docEndOfValidityDate),
      _obj: newDocument
    };

    return row;
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  /*************************
   * Overlay Actions
   *************************/
  public filter() {
    if (!!this.searchCriteria && Object.keys(this.searchCriteria).length > 0) {
      this.cardList = this.cloneCardList.filter((res) => {
        let isPNMatch = true;
        if (!!this.searchCriteria.selectedPN) {
          isPNMatch = this.searchCriteria.selectedPN === res.pn;
        }

        let isWOMatch = true;
        if (!!this.searchCriteria.selectedWO) {
          isWOMatch = this.searchCriteria.selectedWO === res.woCode;
        }

        let isSentenceMatch = true;

        if (!!this.searchCriteria.selectedSentence) {
          isSentenceMatch = this.searchCriteria.selectedSentence === res.sentenceValue;
        }

        let isDecisionMatch = true;
        if (!!this.searchCriteria.selectedDecision) {
          isDecisionMatch = this.searchCriteria.selectedDecision === res.decisionValue;
        }

        let control = true;
        if (!!this.searchCriteria.control && this.searchCriteria.control.length > 0 && !!res.icon) {
          control = this.searchCriteria.control.indexOf(res.icon) === -1 ? false : true;
        }

        // Make inventory selected if match is true
        res.isSelected = isPNMatch && isWOMatch && isSentenceMatch && isDecisionMatch && control ? true : false;

        return true;
      });

      this.cardList = _cloneDeep(this.cardList);
    } else {
      this.selectedInventoryList = [];
      this.cardList = _cloneDeep(this.cloneCardList);

      // Make all selected
      this.cardList.forEach((res) => (res.isSelected = true));
    }

    this.updateSelectionAndQuantity();

    if (this.selectedInventoryList.length > 0) {
      this.modifyInventoryList();
    } else {
      this.addNewInventory = true;
      this.quantityValue = this.isItemSerialized ? 1 : undefined;
      this.loadFavoriteCombination();
    }
  }

  public reset() {
    this.searchCriteria = {};
  }

  /**********************************************
   * Validate
   *********************************************/
  private validateScreenAndSave() {
    // PN Validity
    if (!this.otherPN && !this.selectedPN && (this.isAddInventory || this.addNewInventory)) {
      this.messageService.showErrorMessage(this.getTranslateKey('missingPN'));

      return;
    }

    // Is other PN Valid
    if (!!this.otherPN) {
      const pnId: BirePnDTOId = {
        pnCode: this.otherPN
      };

      this.addEditInventoryService.findBirePn(pnId).subscribe(
        (result) => {
          if (!!result) {
            this.validateQty();
          }
        },
        (err) => {
          this.messageService.showErrorMessage(this.getTranslateKey('invalidPN'));

          return;
        }
      );
    } else {
      this.validateQty();
    }
  }

  /*************************************
   * Validate for Quantity
   *************************************/
  private validateQty() {
    // check has to verify that the quantity of all inventories is equal to expected quantity,
    // if it is not equal, then do not save and display the message
    const totalInventory = this.inventoryList.length + (this.quantityValue || 0);
    if (
      (this.isAddInventory || this.addNewInventory) &&
      !!this.bireItemDTO.expectedQuantity &&
      !!totalInventory &&
      (totalInventory > parseInt(this.bireItemDTO.expectedQuantity, 10) ||
        totalInventory < parseInt(this.bireItemDTO.expectedQuantity, 10))
    ) {
      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey('inventoryQuantityNotCorrect'),
        accept: () => {
          // SN Validity
          if (
            !(this.isAddInventory || this.addNewInventory) &&
            !!this.selectedInventoryList &&
            this.selectedInventoryList.length > 0
          ) {
            let isSNAdded = true;
            const snArray: string[] = [];

            this.selectedInventoryList.forEach((res) => {
              if (!res.sn) {
                isSNAdded = false;
              } else {
                snArray.push(res.sn);
              }
            });

            if (!isSNAdded) {
              this.messageService.showErrorMessage(this.getTranslateKey('snMandatory'));

              return;
            }

            // Find duplicate sn
            const findDuplicates = (arr: string[]) => arr.filter((item, index) => arr.indexOf(item) !== index);

            if (findDuplicates(snArray).length > 0) {
              const pn = !!this.selectedPN ? this.selectedPN : this.otherPN;
              const errMsg = `${this.translateService.instant(this.getTranslateKey('duplicateSN'))} ${pn} / ${
                findDuplicates(snArray)[0]
              }`;

              this.messageService.showErrorMessage(errMsg);

              return;
            }
          }

          if ((this.isAddInventory || this.addNewInventory) && this.isItemSerialized) {
            let isSNAdded = true;
            const snArray: string[] = [];

            this.snCount.forEach((res) => {
              if (!res.value) {
                isSNAdded = false;
              } else {
                snArray.push(res.value);
              }
            });

            if (this.snCount.length === 0 || !isSNAdded || this.snCount.length !== snArray.length) {
              this.messageService.showErrorMessage(this.getTranslateKey('snMandatory'));

              return;
            }

            // Find duplicate sn
            const findDuplicates = (arr: string[]) => arr.filter((item, index) => arr.indexOf(item) !== index);

            if (findDuplicates(snArray).length > 0) {
              const pn = !!this.selectedPN ? this.selectedPN : this.otherPN;
              const errMsg = `${this.translateService.instant(this.getTranslateKey('duplicateSN'))} ${pn} / ${
                findDuplicates(snArray)[0]
              }`;

              this.messageService.showErrorMessage(errMsg);

              return;
            }
          }
          this.save();
        },
        reject: () => {
          return;
        }
      });
    } else {
      this.save();
    }
  }

  /*******************************
   * Event to save Inventory
   *******************************/
  public saveInventory() {
    this.validateScreenAndSave();
  }

  public save() {
    // TODO

    // Remove other PN in case both PN and Other PN are entered
    if (!!this.selectedPN && !!this.otherPN) {
      this.otherPN = undefined;
    }

    // Assign PN
    if (this.selectedPN || this.otherPN) {
      const pn = this.selectedPN || this.otherPN;

      this.selectedInventoryList.forEach((res) => (res.pn = pn));
    }

    // Check if any inventory is empty for sentence/decision, then assign favorite to it
    this.cardList.forEach((inventory) => {
      if (!!this.sentenceDecisionDTO && !!this.sentenceDecisionDTO.favoriteCombination) {
        if (!inventory.sentenceValue && !inventory.decisionValue) {
          inventory.sentenceValue = this.sentenceDecisionDTO.favoriteCombination.sentence;
          if (!!inventory.sentenceValue) {
            inventory.sentenceList = [inventory.sentenceValue];
          }

          inventory.decisionValue = this.sentenceDecisionDTO.favoriteCombination.decision;
          if (!!inventory.decisionValue) {
            inventory.decisionList = [inventory.decisionValue];
          }

          // Setting up favorite selection
          this.selectedSentence = this.sentenceDecisionDTO.favoriteCombination.sentence;
          this.modifyDecisionList();
          this.oldSentence = this.selectedSentence;
          this.selectedDecision = this.sentenceDecisionDTO.favoriteCombination.decision;
          this.oldDecision = this.selectedDecision;
        }
      }

      // Assign decision if length is 1
      if (this.decisionList.length === 1 && !!this.selectedSentence) {
        this.selectedDecision = this.decisionList[0].value as string;
        this.oldDecision = this.selectedDecision;
        inventory.decisionValue = this.selectedDecision;
      }
    });

    if (!this.addNewInventory && !this.newInventory) {
      this.modifyInventories(true);
    }

    this.filtersVisible = false;
    this.updateFilterCriteria();

    // Update dbCopy
    this.cloneCardList = _cloneDeep(this.cardList);
    this.getInventoryIcon();
    this.messageService.showSuccessMessage('global.successOnSave');
  }

  private resetTaskDamagesAndDocuments() {
    this.workList.forEach((res) => (res.applied = false));
    this.findingsList = [];
    this.documents = [];
    this.documentsAdded = [];
    this.documentsUpdated = [];
  }

  public deleteInventories() {
    const partialMessageKey =
      this.selectedInventoryList.length === 1
        ? 'confirmDeleteInventory'
        : this.selectedInventoryList.length === this.cardList.length
        ? 'confirmDeleteAllInventories'
        : 'confirmDeleteSelectedInventory';

    const message =
      this.selectedInventoryList.length === this.cardList.length
        ? ` ${this.pageComponentData.title} ?`
        : `\n ${this.getInventoryList(this.isItemSerialized)}`;

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      contextKeys: [message],
      accept: () => {
        this.selectedInventoryList.forEach((inventory) => {
          const index = this.cardList.findIndex((res) => res.index === inventory.index);
          this.cardList.splice(index, 1);
        });
        this.selectedInventoryList = [];
        this.cloneCardList = _cloneDeep(this.cardList);
        this.unselectAllInventories();
      }
    });
  }

  private getInventoryList(isItemSerialized: boolean): string {
    const maxSize = 5;
    const list: string[] = [];
    let str: string;
    this.selectedInventoryList.forEach((res) => {
      if (list.length < maxSize) {
        if (isItemSerialized) {
          str = !!res.sn ? `- P/N ${res.pn} | S/N ${res.sn}` : `- P/N ${res.pn}`;
        } else {
          str = !!res.trackingNumber
            ? `- P/N ${res.pn} | T/N ${res.trackingNumber} (${this.translateService.instant(
                this.getTranslateKey('qty')
              )} = ${res.quantity})`
            : `- P/N ${res.pn} (${this.translateService.instant(this.getTranslateKey('qty'))} = ${res.quantity})`;
        }
        list.push(str);
      }

      if (this.selectedInventoryList.length > maxSize && list.length === maxSize) {
        list.push('- ...');
      }
    });

    return list.join('\n');
  }

  /**********************************************
   * Filter Item List
   *********************************************/
  public searchReworkPNList(ev) {
    if (!!ev && !!ev.query && !!this.cloneReworkPNList) {
      this.reworkPNList = this.cloneReworkPNList.filter((res) =>
        res.label.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      this.reworkPNList = [...this.reworkPNList];
    }
  }

  /**********************************************
   * Filter Item List
   *********************************************/
  public searchTaskCodeList(ev) {
    if (!!ev && !!ev.query && !!this.cloneTaskCodeList) {
      this.taskCodeList = this.cloneTaskCodeList.filter((res) =>
        res.label.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      this.taskCodeList = [...this.taskCodeList];
    }
  }

  /**********************************************
   * Filter Item List
   *********************************************/
  public searchDesignationList(ev) {
    if (!!ev && !!ev.query && !!this.cloneDesignationList) {
      this.designationList = this.cloneDesignationList.filter((res) =>
        res.label.toLowerCase().startsWith(ev.query.toLowerCase())
      );
    } else {
      this.designationList = [...this.designationList];
    }
  }

  public resetWorks() {
    this.worksSearchCriteria.selectedToggle = [
      AddEditInventoryComponent.APPLIED,
      AddEditInventoryComponent.NOT_APPLIED
    ];
    this.worksSearchCriteria.selectedDesignation = undefined;
    this.worksSearchCriteria.selectedReworkPN = undefined;
    this.worksSearchCriteria.selectedCode = undefined;
  }

  public filterWorks() {
    if (!!this.worksSearchCriteria && Object.keys(this.worksSearchCriteria).length > 0) {
      this.workList = this.dbWorkList.filter((res) => {
        let isCodeMatch = true;
        if (!!this.worksSearchCriteria.selectedCode) {
          isCodeMatch = this.worksSearchCriteria.selectedCode.value === res.taskCode;
        }

        let isDesignationMatch = true;
        if (!!this.worksSearchCriteria.selectedDesignation) {
          isDesignationMatch = this.worksSearchCriteria.selectedDesignation.value === res.taskDesignation;
        }

        let control = true;
        if (!!this.worksSearchCriteria.selectedToggle && this.worksSearchCriteria.selectedToggle.length > 0) {
          const code = res.applied ? 0 : 1;
          control = this.worksSearchCriteria.selectedToggle.indexOf(code) === -1 ? false : true;
        }

        return isCodeMatch && isDesignationMatch && control;
      });

      this.workList = this.workList.filter(
        (res) => !!this.selectedMroCenter && res.mroCenter === this.selectedMroCenter
      );
      this.workList = _cloneDeep(this.workList);
    } else {
      this.changeMroCenterAndLoadTask();
      this.workList = _cloneDeep(this.dbWorkList);
    }
    this.showFilterPanel = false;
  }

  public togglePNButton() {
    this.showOtherPN = this.showOtherPN ? false : true;

    if (this.showOtherPN && !!this.selectedPN) {
      this.selectedPN = undefined;
    }

    if (!this.showOtherPN && !!this.otherPN) {
      this.otherPN = undefined;
    }

    if (this.addNewInventory || this.newInventory) {
      this.loadFavoriteCombination();
    } else {
      this.modifyInventoryList();
    }

    this.getInventoryIcon();
  }

  /**********************************
   * OPEN WORK ORDER UC
   **********************************/
  public openWorkOrderLink(rowData: TechnicalQuotationOutput): void {
    if (!!rowData.woId && !!rowData.woProjectId) {
      const workOrderDTOId: BidmWorkOrderDTOId = {
        woId: rowData.woId,
        projectId: rowData.woProjectId
      };
      this.openWorkOrder(workOrderDTOId, ComponentOpenMode.Read);
    }
  }

  public openWorkOrder(wo: BidmWorkOrderDTOId, openModeWanted: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
      openMode: openModeWanted,
      objectId: this.serializationService.serialize(wo)
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  // Getting identifier key for an item node
  public getKey(item: BireItemForWorkscopeTreeDTO): string {
    return `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;
  }

  /**************************************
   * Update Sentence Decision List
   **************************************/
  private loadSentenceDecisionListByPN(targetIcon?: string) {
    const input: FetchSentenceDecisionInputDTO = {
      projectNumber: this.bsdeProjectDTO.projectNumber,
      pn: this.selectedPN || this.otherPN,
      bireItemKey: this.getKey(this.bireItemDTO) as string,
      sn: !!this.snCount && this.snCount.length > 0 ? this.snCount[0].value : undefined,
      quantity: !!this.quantityValue
        ? this.isItemSerialized
          ? `${this.quantityValue}`
          : `${this.sumRealQuantity}`
        : '1',
      sentence: this.selectedSentence,
      icon: !!targetIcon
        ? targetIcon
        : this.selectedInventoryList.length > 0
        ? this.getConfiguration()
        : this.bireItemDTO.resultAssignmentIcon
    };

    this.addEditInventoryService
      .getSentenceAndDecisionList(input)
      .pipe(
        finalize(() => {
          this.modifyDecisionList();
        })
      )
      .subscribe((res) => {
        this.sentenceDecisionDTO.sentenceDecisionList = res.sentenceDecisionList;
      });
  }

  /**************************************
   * Apply Task
   **************************************/
  public applyTask() {
    this.selectedWork.forEach((res) => {
      res.applied = true;
    });

    this.updateDBList();
  }

  public taskApplied() {
    this.updateDBList();
  }

  private updateDBList() {
    this.workList.forEach((work) => {
      const index = this.dbWorkList.findIndex((res) => res.taskCode === work.taskCode);
      if (index !== -1) {
        this.dbWorkList[index] = work;
      }
    });
    this.updateWorksToInventories();
  }

  /*****************************************************
   * Callback method to fetch icon
   *****************************************************/
  private getInventoryIcon() {
    const input: FetchSentenceDecisionInputDTO[] =
      this.isAddInventory || this.addNewInventory || this.selectedInventoryList.length === 1
        ? [this.getMatchingIconInput()]
        : this.getControlForMultipleInventories();

    this.addEditInventoryService
      .fetchMatchingIcon(input)
      .pipe(
        finalize(() => {
          this.loadInventoriesFlag = false;
        })
      )
      .subscribe((res) => {
        if (res.length === 1) {
          this.loadSentenceDecisionListByPN(res[0].icon);
        } else {
          res.forEach((dto, index) => {
            this.selectedInventoryList[index].icon = dto.icon;
          });
          this.loadSentenceDecisionListByPN(this.getConfiguration());
          this.filtersVisible = false;
          this.updateFilterCriteria();
        }
      });
  }

  public getTrimLabel(label: string): string {
    const maxLength = 25;
    const lastIndex = 22;

    return !!label && label.length > maxLength ? `${label.substring(0, lastIndex)}...` : label;
  }

  public getTrimQty(label: string): string {
    const maxLength = 17;
    const lastIndex = 16;

    return !!label && label.length > maxLength ? `${label.substring(0, lastIndex)}...` : label;
  }

  /***************************************
   * Update Findings
   ***************************************/
  private updateFindingsToInventories(isAddUpdateData?: FindingsInterface) {
    if (!!this.selectedInventoryList && !!this.cardList && this.cardList.length > 0) {
      if (this.selectedInventoryList.length === 1) {
        this.selectedInventoryList[0].findings = this.findingsList;
      } else if (this.selectedInventoryList.length > 1) {
        this.cardList.forEach((res) => {
          if (res.isSelected) {
            if (!res.findings) {
              res.findings = [];
            }

            // If method called from updation/edition
            if (!!isAddUpdateData && this.selectedFindingsIndex !== -1) {
              res.findings[this.selectedFindingsIndex] = isAddUpdateData;
            } else {
              res.findings = [...res.findings, ...this.findingsList];
            }
          }
        });
      }
    }
  }

  /***************************************
   * Update Works
   ***************************************/
  private updateWorksToInventories() {
    if (!!this.cardList && this.cardList.length > 0) {
      this.cardList.forEach((res) => {
        if (res.isSelected) {
          res.works = _cloneDeep(this.dbWorkList);
        }
      });
    }
  }

  /***************************************
   * Update Documents
   ***************************************/
  private updateDocumentsToInventories() {
    if (this.cardList.length > 0) {
      if (!!this.cardList && this.cardList.length > 0) {
        this.cardList.forEach((res) => {
          if (res.isSelected) {
            res.document = _cloneDeep(this.documents);
            res.documentsAdded = _cloneDeep(this.documentsAdded);
            res.documentsUpdated = _cloneDeep(this.documentsUpdated);
          }
        });
      }
    }
  }

  /*****************************************
   * Method to load findings and works of
   * selected Inventory
   *****************************************/
  private loadFindingsWorksAndDocuments() {
    const docListIndex = 0;
    const docAddIndex = 1;
    const docUpdateIndex = 2;

    this.updateInventoriesSelection();
    if (this.selectedInventoryList.length > 0) {
      // Load Findings
      this.findingsList =
        this.selectedInventoryList.length === 1
          ? !!this.selectedInventoryList[0].findings
            ? _cloneDeep(this.selectedInventoryList[0].findings)
            : []
          : this.loadCommonFindings();

      // Load Works
      const workList: WorkListInterface[] =
        this.selectedInventoryList.length === 1 && !!this.selectedInventoryList[0].works
          ? _cloneDeep(this.selectedInventoryList[0].works)
          : this.loadCommonWorks();

      this.updateWorkTable(workList);

      // Load Document
      this.documents =
        this.selectedInventoryList.length === 1
          ? this.selectedInventoryList[0].document || []
          : this.loadCommonDocuments(docListIndex) || [];
      this.documentsAdded =
        this.selectedInventoryList.length === 1
          ? this.selectedInventoryList[0].documentsAdded || []
          : this.loadCommonDocuments(docAddIndex) || [];
      this.documentsUpdated =
        this.selectedInventoryList.length === 1
          ? this.selectedInventoryList[0].documentsUpdated || []
          : this.loadCommonDocuments(docUpdateIndex) || [];

      if (!!this.documents) {
        this.loadDocumentTable();
      }
    } else {
      this.resetTaskDamagesAndDocuments();
    }
  }

  private updateWorkTable(list: WorkListInterface[]) {
    this.workList = [];
    this.workList = list.filter((res) => res.mroCenter === this.selectedMroCenter);
  }

  /**************************************
   * Load documents of inventories
   **************************************/
  private loadDocumentTable() {
    this.documentTableDataSource.setData([]);
    const docArr: DocumentTableRow[] = [];

    this.documents.forEach((res) => {
      if (!!res && !!res.bidoDocumentationDTO) {
        docArr.push(this.addData(res.bidoDocumentationDTO));
      }
    });

    this.documentTableDataSource.setData(docArr);
  }

  /*******************************************
   * Load inventories findings
   *******************************************/
  private loadCommonFindings(): FindingsInterface[] {
    const findings: unknown[][] = [];
    this.selectedInventoryList.forEach((inventory) => {
      if (!!inventory.findings && inventory.findings.length > 0) {
        findings.push(inventory.findings);
      }
    });
    let findingsArr: FindingsInterface[] = [];

    if (!!findings && findings.length > 1) {
      const intersectionArr = findings.reduce((intersection, array) => {
        return (intersection as FindingsInterface[]).filter((intersectedItem) =>
          (array as FindingsInterface[]).some(
            (item) =>
              intersectedItem.findingComment === item.findingComment &&
              intersectedItem.localisationCode === item.localisationCode &&
              intersectedItem.quantity === item.quantity &&
              intersectedItem.unitCode === item.unitCode &&
              intersectedItem.criticality === item.criticality &&
              intersectedItem.damageCode === item.damageCode
          )
        );
      }, findings[0]);

      if (!!intersectionArr && intersectionArr.length > 0) {
        findingsArr = intersectionArr as FindingsInterface[];
      }
    } else {
      findingsArr = [];
    }

    return findingsArr;
  }

  /*******************************************
   * Load Intersection of works
   *******************************************/
  private loadCommonWorks(): WorkListInterface[] {
    const works: WorkListInterface[][] = [];
    let worksArr: WorkListInterface[] = [];

    this.selectedInventoryList.forEach((inventory) => {
      if (!!inventory.works) {
        works.push(inventory.works);
      }
    });

    if (!!works && works.length > 0) {
      const intersectionArr: WorkListInterface[] = works[0];
      works.forEach((res: WorkListInterface[]) => {
        res.forEach((work) => {
          if (!work.applied) {
            const eleIndex = intersectionArr.findIndex((dto) => dto.taskCode === work.taskCode);
            if (eleIndex !== -1) {
              intersectionArr[eleIndex] = work;
            }
          }
        });
      });

      worksArr =
        !!intersectionArr && intersectionArr.length > 0
          ? (intersectionArr as WorkListInterface[])
          : this.resetWorksTable();
    } else {
      worksArr = this.resetWorksTable();
    }

    return worksArr;
  }

  private resetWorksTable() {
    this.resetWorks();
    const workArr = _cloneDeep(this.dbWorkList);
    workArr.forEach((res) => (res.applied = false));

    return workArr;
  }

  /********************************
   * Load Common Documents
   ********************************/
  private loadCommonDocuments(index: number) {
    let docsArr: BidoDocumentationTableOutputDTO[] = [];

    const list =
      index === 0
        ? this.selectedInventoryList.map((inventory) => inventory.document)
        : index === 1
        ? this.selectedInventoryList.map((inventory) => inventory.documentsAdded)
        : this.selectedInventoryList.map((inventory) => inventory.documentsUpdated);

    if (!!list) {
      list.forEach((res) => {
        if (!!res) {
          docsArr = [...docsArr, ...res];
        }
      });
    }

    return docsArr;
  }

  /********************************
   * Reset decision list
   ********************************/
  private resetDecisionList() {
    if (!!this.sentenceDecisionDTO && !!this.sentenceDecisionDTO.decisionList) {
      this.decisionList = [];
      this.sentenceDecisionDTO.decisionList.forEach((res) => {
        this.decisionList.push({
          label: this.getDecisionLabel(res),
          value: res
        });
      });
    }
  }
}
