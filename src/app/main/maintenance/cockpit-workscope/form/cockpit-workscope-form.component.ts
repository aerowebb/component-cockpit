import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, forkJoin } from 'rxjs';
import { debounceTime, finalize, takeUntil } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
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
import { CockpitInspectionInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/cockpit-inspection-input-dto.interface';
import { SaveWorkscopeInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/save-workscope-input.interface';
import { BireItemForWorkscopeTreeDTO } from '../../../../shared/types/api-output-types/workscope-component/bire-item-for-workscope-tree-dto.interface';
import { WorkscopeTreeData } from '../../../../shared/types/api-output-types/workscope-component/workscope-tree-data-output';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { CockpitWorkscopeFormService } from './cockpit-workscope-form.service';
import { BreadcrumbsLabel } from './shared/types/breadcrumbs-label.interface';

interface WorkscopeInformationInterface {
  versionNumber?: number;
  status?: string;
  lastUpdate?: string;
  approveItem?: number;
  removeItem?: number;
  draftItem?: number;
  lastUpdateDate?: Date;
}
interface WorkscopeInventoryDTO {
  rowIndex: number;
  pn?: string;
  sn?: string;
  woCode?: string;
  woId?: string;
  woProjectId?: string;
  quantity?: string;
  currentOpeProgress?: number;
  workScopingOrder?: string;
  workScopingOrderId?: string;
  trackingNumber?: string;
  sentenceValue?: string;
  decisionValue?: string;
  tn?: string;
  icon?: string;
  serialized?: boolean;
  progress?: number;
  targetResultMatchingIcon?: string;
  targetResultMatchingAlt?: string;
}
interface WorkscopeTableFilter {
  selectedSerialize?: number[];
  selectedWorkscope?: number[];
  family?: string;
  item?: string;
  sn?: string;
  pn?: string;
  woCode?: string;
  designation?: string;
  impact?: string;
  functionCode?: string;
}

interface NodeInterface {
  parent?: NodeInterface;
  node?: NodeInterface;
  data?: BireItemForWorkscopeTreeDTO;
  children?: NodeInterface[];
  bireItemDTO?: BireItemDTO;
}

interface BreadcrumbsInventoryLabel extends BreadcrumbsLabel {
  bireItem?: BireItemForWorkscopeTreeDTO;
  isFromInspection?: boolean;
  isAddInventory?: boolean;
  inventoryList?: WorkscopeInventoryDTO[];
}

@Component({
  selector: 'aw-cockpit-workscope-form',
  styleUrls: ['./cockpit-workscope-form.component.scss'],
  templateUrl: './cockpit-workscope-form.component.html'
})
export class CockpitWorkscopeFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;
  private static readonly ALL: number = 0;
  private static readonly ADDED: number = 1;
  private static readonly DELETED: number = 2;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public draft: string;
  public approved: string;

  public bsdeProjectDTO: BsdeProjectDTO;
  public panelLoading: boolean;
  public tableLoading: boolean;
  public subtitle: string;
  public familyCodeMap: Map<string, string>;
  public mroCenter: string | undefined;
  private mroCenters: LabelValue<string>[];
  private customerList: LabelValue<string>[];
  public breadcrumbsList: BreadcrumbsLabel[];
  public breadcrumbsSelectedItem: BreadcrumbsLabel;

  // Tree Params
  public workscopeStructure: WorkscopeTreeData[]; // ngModel
  public modifiedWorkscopeTreeData: WorkscopeTreeData[]; // copy of data with modifications
  public workscopeTreeData: WorkscopeTreeData[]; // DB copy

  public workscopeTreeDataInDBByItemKeyMap: Map<String, WorkscopeTreeData>;
  public workscopeTreeDataFromUIByItemKeyMap: Map<String, WorkscopeTreeData>;
  public workscopeTreeDataFromStagedByItemKeyMap: Map<String, WorkscopeTreeData>;

  public workscopeTableCols: TableColumn[];
  public technicalQuotationCols: TableColumn[];
  public showLoadWorkscopePopup: boolean;
  public showAddEditInventory: boolean;
  public isFromInspection: boolean = false;
  public selectedWorkscope: BireItemForWorkscopeTreeDTO | undefined;
  public isAddInventory: boolean;
  public isNewInventoryAdded: boolean;
  public showChanges: boolean;
  public selectedChangeFilter: number = 0;
  public changeFilterList: LabelValue<number>[];
  public searchGlobalFilter: string;
  public searchSubAssemblyGlobalFilterChanged: Subject<string>;
  public bidoEquipmentDTO: BidoEquipmentDTO;
  public workscopeInformationObject: WorkscopeInformationInterface;
  public familyVariants: LabelValue<string>[];

  public inventories: WorkscopeInventoryDTO[] = [];
  public filtersVisible: boolean;
  public showFilterOverlay: boolean;
  public showSaveSpinner: boolean;

  public searchCriteria: WorkscopeTableFilter;
  public isApprove: boolean;
  public loadWorkscopeList: MenuItem[];
  public showWorkscopeImportPopup: boolean;

  public showFilterButtons: boolean;

  // Information about item selection, and inventory selection
  public isLineSelected: boolean;
  public selectedInventories: WorkscopeInventoryDTO[];
  public decisionList: LabelValue<string>[];
  public sentenceList: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly cockpitWorkscopeFormService: CockpitWorkscopeFormService,
    private readonly propertiesService: PropertiesService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.familyCodeMap = new Map<string, string>();
    this.renderTreeTableColumns(false);
    this.familyVariants = [];
    this.loadFamilyCodes();
    this.controlConfigConstants = ControlConfigConstants;
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_COCKPIT_WORKSCOPE_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
    }
    this.setSearchSentenceDecisionList();
    this.init();
    this.loadMROCenter();
    this.loadFamilyVariants();

    this.changeFilterList = [
      { value: CockpitWorkscopeFormComponent.ALL, label: this.translateService.instant(this.getTranslateKey('all')) },
      {
        value: CockpitWorkscopeFormComponent.ADDED,
        label: this.translateService.instant(this.getTranslateKey('added'))
      },
      {
        value: CockpitWorkscopeFormComponent.DELETED,
        label: this.translateService.instant(this.getTranslateKey('deleted'))
      }
    ];

    this.draft = this.translateService.instant(this.getTranslateKey('draft'));
    this.approved = this.translateService.instant(this.getTranslateKey('approve'));
  }

  /**********************************
   * FILTER FUNCTIONALITY
   **********************************/
  public resetTableFilters() {
    this.searchGlobalFilter = '';
    this.searchCriteria = {};
  }

  private setControlGlobalFilter(): void {
    this.resetTableFilters();
    this.searchSubAssemblyGlobalFilterChanged = new Subject();
    this.searchSubAssemblyGlobalFilterChanged
      .pipe(debounceTime(CockpitWorkscopeFormComponent.SEARCH_TEXT_DEBOUNCE_TIME), takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.changeFilter();
      });
  }

  /**********************************
   * INITIALIZATION
   **********************************/
  private init() {
    this.bsdeProjectDTO = {};
    this.bidoEquipmentDTO = {};
    this.workscopeInformationObject = {};
    this.workscopeStructure = [];
    this.mroCenters = [];
    this.customerList = [];
    this.breadcrumbsList = [];
    this.modifiedWorkscopeTreeData = [];
    this.selectedWorkscope = {};
    this.searchCriteria = {};
    this.showLoadWorkscopePopup = false;

    this.workscopeTreeDataInDBByItemKeyMap = new Map<String, WorkscopeTreeData>();
    this.workscopeTreeDataFromUIByItemKeyMap = new Map<String, WorkscopeTreeData>();
    this.workscopeTreeDataFromStagedByItemKeyMap = new Map<String, WorkscopeTreeData>();

    this.loadWorkscopeList = [
      {
        label: this.translateService.instant(this.getTranslateKey('fromFleetManagement')) as string,
        command: () => {
          this.loadWorkscope();
        }
      },
      {
        label: this.translateService.instant(this.getTranslateKey('fromExcel')) as string,
        command: () => {
          this.loadFromExcel();
        }
      }
    ];
  }

  public refresh() {
    this.init();
    this.loadMROCenter();
    this.loadFamilyVariants();
  }

  private loadMROCenter(): void {
    // Load dropdowns
    const observables: Observable<LabelValue<string>[]>[] = [
      this.cockpitWorkscopeFormService.findMROCenter(),
      this.cockpitWorkscopeFormService.findAllCustomers()
    ];

    forkJoin(observables).subscribe((results) => {
      this.mroCenters = results[0] || [];
      this.customerList = results[1] || [];
    });
  }

  public loadEquipment(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      const input: CockpitInspectionInput = {
        projectNumber: this.serializationService.deserialize(this.componentData.objectId) as number
      };
      this.cockpitWorkscopeFormService.loadWorkshopScopeByProjectNumber(input).subscribe((res) => {
        this.showLoadWorkscopePopup = false;
        this.refresh();
      });
    }
  }

  /**********************************
   * TREE TABLE COLUMNS
   **********************************/
  private renderTreeTableColumns(selected: boolean) {
    if (selected) {
      this.workscopeTableCols = [
        { field: 'item', alignment: 'left', width: '20%' },
        { field: 'itemFamily', alignment: 'left', width: '10%' },
        { field: 'workscope', alignment: 'center', width: '10%' },
        { field: 'relatedVersion', alignment: 'center', width: '10%' },
        { field: 'impacts', alignment: 'left', width: '10%' },
        { field: 'quantity', alignment: 'left', width: '10%' }
      ];
    } else {
      this.workscopeTableCols = [
        { field: 'item', alignment: 'left', width: '20%' },
        { field: 'itemFamily', alignment: 'left', width: '10%' },
        { field: 'workscope', alignment: 'center', width: '10%' },
        { field: 'relatedVersion', alignment: 'center', width: '10%' },
        { field: 'impacts', alignment: 'left', width: '10%' },
        { field: 'quantity', alignment: 'left', width: '10%' },
        { field: 'inventories', alignment: 'left', width: '20%' },
        { field: 'workOrder', alignment: 'center', width: '10%' }
      ];
    }
    this.technicalQuotationCols = [
      { field: 'equipment', alignment: 'left', width: '25%' },
      { field: 'sentenceValue', alignment: 'left', width: '25%' },
      { field: 'targetPn', alignment: 'left', width: '20%' },
      { field: 'quantity', alignment: 'center', width: '10%' },
      { field: 'control', alignment: 'center', width: '20%' }
    ];
  }

  /**********************************
   * FETCH PROJECT DETAILS
   **********************************/
  private fetchProjectDetails() {
    if (!!this.componentData && !!this.componentData.objectId) {
      const projectNumber = this.serializationService.deserialize(this.componentData.objectId) as number;
      this.panelLoading = true;

      this.cockpitWorkscopeFormService
        .findBsdeProjectByProjectNumber(projectNumber)
        .pipe(
          finalize(() => {
            this.panelLoading = false;
          })
        )
        .subscribe((bsdeProjectDTO) => {
          if (bsdeProjectDTO) {
            const mroCenteObj = this.mroCenters.filter((res) => res.value === bsdeProjectDTO.repairCenterCode)[0];
            const customerObj = this.customerList.filter((res) => res.value === bsdeProjectDTO.customerCode)[0];
            this.mroCenter = mroCenteObj && mroCenteObj.label;
            bsdeProjectDTO.customerCode = customerObj && customerObj.label;
            this.bsdeProjectDTO = bsdeProjectDTO as BsdeProjectDTO;
            this.subtitle = [
              !!bsdeProjectDTO && !!bsdeProjectDTO.projectNumber ? `N° ${bsdeProjectDTO.projectNumber}` : '',
              StringUtils.isNullOrEmpty(bsdeProjectDTO.projectPn) ? '' : `P/N ${bsdeProjectDTO.projectPn}`,
              StringUtils.isNullOrEmpty(bsdeProjectDTO.projectSn) ? '' : `S/N ${bsdeProjectDTO.projectSn}`
            ]
              .filter((s) => !StringUtils.isEmpty(s))
              .join(' | ');

            this.displayComponentContext(this.subtitle, this.isCreateOpenMode);
            this.breadcrumbsList = [];
            this.getFamilyVariantData();
          }
          this.panelLoading = false;
        });

      this.tableLoading = true;
      const input: CockpitInspectionInput = {
        projectNumber
      };
      this.cockpitWorkscopeFormService
        .getWorkscope(input)
        .pipe(
          finalize(() => {
            this.tableLoading = false;
          })
        )
        .subscribe((result) => {
          this.getWorkscopeInformation(result);
          this.workscopeStructure = this.buildTree(result);
          this.modifiedWorkscopeTreeData = _cloneDeep(result);
          this.buildMap(this.modifiedWorkscopeTreeData, this.workscopeTreeDataFromStagedByItemKeyMap);

          if (!!this.workscopeStructure && this.workscopeStructure.length > 0) {
            this.workscopeStructure[0].expanded = true;
          }
          this.buildMap(this.workscopeStructure, this.workscopeTreeDataFromUIByItemKeyMap);

          this.tableLoading = false;
          this.workscopeTreeData = _cloneDeep(result);
          this.buildMap(this.workscopeTreeData, this.workscopeTreeDataInDBByItemKeyMap);

          this.setControlGlobalFilter();
          this.resetWorkscopeCounters();
          this.updateWorkscopeInformation(this.modifiedWorkscopeTreeData);
        });
    }
  }

  private getFamilyVariantData(): void {
    if (!!this.bsdeProjectDTO.projectPn || !!this.bsdeProjectDTO.projectSn) {
      const bidoEquipment: BidoEquipmentDTO = {
        pnCode: this.bsdeProjectDTO.projectPn,
        sn: this.bsdeProjectDTO.projectSn
      };
      this.cockpitWorkscopeFormService.findBidoEquipmentsByPnAndSn(bidoEquipment).subscribe((res) => {
        this.bidoEquipmentDTO = !!res && res.length > 0 ? res[0] : {};
      });
    }
  }

  public openSNLink(): void {
    if (!!this.bidoEquipmentDTO && !!this.bidoEquipmentDTO.equipmentCode) {
      const functionNm = this.bidoEquipmentDTO.equipmentFunction || AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY;
      this.openEquipment(this.bidoEquipmentDTO.equipmentCode, ComponentOpenMode.Read, functionNm);
    }
  }

  public openEquipment(
    objectId: string | undefined,
    openMode: ComponentOpenMode,
    functionNm: string | undefined
  ): void {
    let labelKey;
    let componentName;
    if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
      labelKey = `transaction.${ComponentConstants.FLE_EQUIPMENT_FORM}`;
      componentName = ComponentConstants.FLE_EQUIPMENT_FORM;
    } else {
      if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        labelKey = `transaction.${ComponentConstants.FLE_ENGINE_FORM}`;
        componentName = ComponentConstants.FLE_ENGINE_FORM;
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
        labelKey = `transaction.${ComponentConstants.FLE_AIRCRAFT_FORM}`;
        componentName = ComponentConstants.FLE_AIRCRAFT_FORM;
      } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY) {
        labelKey = `transaction.${ComponentConstants.LOG_TOOL_FORM}`;
        componentName = ComponentConstants.LOG_TOOL_FORM;
      } else {
        // Open Equipment By default for other cases
        labelKey = `transaction.${ComponentConstants.FLE_EQUIPMENT_FORM}`;
        componentName = ComponentConstants.FLE_EQUIPMENT_FORM;
      }
    }

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName,
      openMode
    };
    if (!!objectId) {
      const equipmentId: BidoEquipmentDTOId = {
        equipmentCode: objectId
      };
      data.objectId = this.serializationService.serialize(equipmentId);
    }

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * OPEN PART NUMBER LINK
   **********************************/
  public openPartNumberLink(): void {
    if (!!this.bidoEquipmentDTO) {
      const bireVersionPnDTO: BireVersionPnDTO = {
        subject: this.bidoEquipmentDTO.subject,
        sheet: this.bidoEquipmentDTO.sheet,
        marks: this.bidoEquipmentDTO.marks,
        chapter: this.bidoEquipmentDTO.chapter,
        section: this.bidoEquipmentDTO.section,
        pnCode: this.bsdeProjectDTO.projectPn,
        familyCode: BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(this.bidoEquipmentDTO.familyVariantCode),
        variantCode: BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(
          this.bidoEquipmentDTO.familyVariantCode
        ),
        structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY
      };
      this.cockpitWorkscopeFormService.getPartNumberStructure(bireVersionPnDTO as BireItemDTOId).subscribe((res) => {
        if (!!res && res.length > 0) {
          const partNum = res.filter(
            (dto) =>
              !!dto.bireVersionPnDTO &&
              this.bsdeProjectDTO.projectPn === dto.bireVersionPnDTO.pnCode &&
              this.bsdeProjectDTO.projectSn
          );
          if (!!partNum && partNum.length > 0) {
            bireVersionPnDTO.isnAta = partNum[0].isn;
            bireVersionPnDTO.versionNumber = partNum[0].versionNumber;
            this.openItemPartNumber(bireVersionPnDTO, ComponentOpenMode.Read);
          }
        }
      });
    }
  }

  /**
   * open item part number UC
   */
  public openItemPartNumber(objectId: BireVersionPnDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_PART_NUMBER_FORM,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadFamilyCodes() {
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((familyCodeList) => {
      const itemFamily = familyCodeList;
      itemFamily.forEach((element) => {
        this.familyCodeMap.set(element.value, element.label);
      });
    });
  }

  public loadFamilyVariants(): void {
    this.familyVariants = [];
    this.cockpitWorkscopeFormService.loadFamilyVariants().subscribe(
      (results) => {
        results.forEach((result) => {
          const label1 = result.familyname ? result.familyname : result.familyCode;
          const label2 = result.variantName ? result.variantName : result.variantCode;
          const label = `${label1}-${label2}`;
          const value = BidoFamilyVariantUtils.buildFamilyVariantCode(result.familyCode, result.variantCode);
          if (!!label && !!value) {
            const familyVariant: LabelValue<string> = {
              label,
              value
            };
            this.familyVariants.push(familyVariant);
          } else {
            super.throwUnboundLocalError('loadFamilyVariants', 'label && value');
          }
        });
        this.familyVariants.sort((a, b) =>
          !!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
        );

        this.fetchProjectDetails();
      },
      () => {
        this.messageService.showErrorMessage('errorOnLoadingFamilyVariants');
      }
    );
  }

  private buildTree(data: WorkscopeTreeData[]): WorkscopeTreeData[] {
    const toReturn: WorkscopeTreeData[] = [];

    data.forEach((elt: WorkscopeTreeData) => {
      const eleClone = elt.data;

      if (!!eleClone) {
        if (!!eleClone.chapter) {
          // tslint:disable-next-line:max-line-length
          eleClone.item = `${eleClone.chapter}-${eleClone.section}-${eleClone.subject}-${eleClone.sheet}-${eleClone.marks}`;
        }
        if (!!eleClone.itemFamilyCode) {
          const dto = this.familyCodeMap.get(eleClone.itemFamilyCode);
          if (!!dto) {
            eleClone.itemFamilyCode = dto;
          }
        }

        if (!!eleClone.inventoriesList) {
          eleClone.inventoriesList.forEach((res: WorkscopeInventoryDTO, index) => {
            res.rowIndex = index;
            res.sentenceValue = !!res.sentenceValue ? res.sentenceValue : undefined;
            res.decisionValue = !!res.decisionValue ? res.decisionValue : undefined;
            res.targetResultMatchingIcon = ControlConfigConstants.ICON_GREEN; // FIXME when back will be updated
          });
        }

        this.updateVersionColumn(eleClone);
      }

      toReturn.push({
        data: eleClone,
        children: this.buildTree(elt.children || []),
        bireItemDTO: elt.bireItemDTO
      });
    });

    return toReturn;
  }

  /***********************************************
   * UPDATE VERSION COLUMN
   ***********************************************/
  private updateVersionColumn(data: BireItemForWorkscopeTreeDTO) {
    if (data.isWorkscope) {
      if (!data.workscopeVersionNumber || data.workscopeVersionStatus === 0) {
        data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
        data.workscopeVersionStatus = this.workscopeInformationObject.status === this.draft ? 0 : 1;
      }
    } else {
      data.workscopeVersionNumber = undefined;
      data.workscopeVersionStatus = undefined;
    }
  }

  public cancel(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  /*********************************************
   * Open Manage Configuration Screen
   *********************************************/
  public manageConfiguration(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_MANAGE_CONFIGURATION_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!this.bsdeProjectDTO.projectNumber) {
      data.objectId = this.serializationService.serialize(this.bsdeProjectDTO.projectNumber);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*********************************************
   * Open Manage Removal Cause Screen
   *********************************************/
  public manageRemovalCauses(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_MANAGE_REMOVAL_CAUSES_FORM,
      openMode: ComponentOpenMode.Read
    };

    if (!!this.bsdeProjectDTO.projectNumber) {
      data.objectId = this.serializationService.serialize(this.bsdeProjectDTO.projectNumber);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public loadWorkscope(): void {
    this.showLoadWorkscopePopup = true;
  }

  /*******************************
   * Add Inventory
   *******************************/
  public addInventory() {
    this.isAddInventory = true;
    this.showAddEditInventory = true;
    this.breadcrumbsList = [];
    this.createBreadCrumb(this.selectedWorkscope);

    const item: BreadcrumbsInventoryLabel = {
      data: this.bsdeProjectDTO,
      subtittle: this.breadcrumbsList[0].subtittle,
      title: this.breadcrumbsList[0].title,
      index: this.breadcrumbsList.length,
      bireItem: this.selectedWorkscope || undefined,
      isAddInventory: this.isAddInventory,
      isFromInspection: this.isFromInspection,
      inventoryList: []
    };

    this.openItemInventory(item);
  }

  private openItemInventory(item) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_ITEM_INVENTORY,
      openMode: ComponentOpenMode.Read
    };

    if (!!item) {
      data.objectId = this.serializationService.serialize(item);
    }
    const labelKey = `transaction.${data.componentId}`;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*******************************
   * Add Inventory
   *******************************/
  public editInventory() {
    this.inventories = [];
    this.breadcrumbsList = [];
    this.createBreadCrumb(this.selectedWorkscope);

    if (
      !!this.selectedWorkscope &&
      !!this.selectedWorkscope.inventoriesList &&
      this.selectedWorkscope.inventoriesList.length > 0
    ) {
      this.selectedInventories.forEach((res: WorkscopeInventoryDTO, index) => {
        this.inventories.push({
          rowIndex: index,
          pn: res.pn,
          sn: res.sn,
          trackingNumber: res.trackingNumber,
          woCode: res.workScopingOrder,
          quantity: res.quantity,
          sentenceValue: res.sentenceValue,
          decisionValue: res.decisionValue,
          serialized: !!this.selectedWorkscope ? this.selectedWorkscope.serializedPart : false,
          icon: res.targetResultMatchingIcon,
          progress: res.currentOpeProgress,
          woId: res.workScopingOrderId,
          woProjectId: res.woProjectId
        });
      });
    }
    this.isAddInventory = false;
    this.showAddEditInventory = true;

    const item: BreadcrumbsInventoryLabel = {
      index: this.breadcrumbsList.length,
      subtittle: this.breadcrumbsList[0].subtittle,
      title: this.breadcrumbsList[0].title,
      data: this.bsdeProjectDTO,
      bireItem: this.selectedWorkscope || undefined,
      isAddInventory: this.isAddInventory,
      isFromInspection: this.isFromInspection,
      inventoryList: this.inventories
    };

    this.openItemInventory(item);
  }

  private createBreadCrumb(data?: BireItemForWorkscopeTreeDTO) {
    if (data) {
      const item: BreadcrumbsLabel = {
        title: data.item,
        subtittle: data.name,
        index: this.breadcrumbsList.length
      };
      this.breadcrumbsList.push(item);
    }
  }

  public onRowSelected(node: WorkscopeTreeData): void {
    if (!!node.data) {
      this.selectedWorkscope = node.data;
    } else {
      super.throwUnboundLocalError('onRowSelected', 'node.data');
    }
    this.isLineSelected = true;
    this.selectedInventories = [];
    this.renderTreeTableColumns(true);
  }

  public onRowUnSelected(node: WorkscopeTreeData): void {
    this.selectedWorkscope = {};
    this.selectedInventories = [];
    this.isLineSelected = false;
    this.renderTreeTableColumns(false);
  }

  public getExpectedQuantity(rowData: BireItemForWorkscopeTreeDTO): string | undefined {
    const qty = rowData.quantity;

    rowData.expectedQuantity =
      qty !== undefined && qty.split(' ').length === 2
        ? qty.split(' ')[1].substring(1, qty.split(' ')[1].length - 1)
        : qty === '0'
        ? qty
        : undefined;

    return rowData.expectedQuantity;
  }

  public getRealQuantity(rowData: BireItemForWorkscopeTreeDTO): string | undefined {
    const qty = rowData.quantity;

    rowData.realQuantity =
      qty !== undefined && qty.split(' ').length > 0 ? qty.split(' ')[0] : qty === '0' ? qty : undefined;

    return rowData.realQuantity;
  }

  public filterTextWithCriteria(): void {
    this.searchSubAssemblyGlobalFilterChanged.next();
  }

  public changeFilter() {
    this.workscopeStructure = [];
    const treeData = this.modifiedWorkscopeTreeData;

    this.workscopeStructure = this.buildTree(_cloneDeep(treeData));
    if (StringUtils.isNullOrEmpty(this.searchGlobalFilter) && this.workscopeStructure.length > 0) {
      this.workscopeStructure[0].expanded = true;
    }
    this.workscopeStructure = this.workscopeStructure.filter((elt) =>
      this.treeNodeMatchFilters(elt, this.searchCriteria)
    );

    // Update modified Keys of ui tree
    this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);
  }

  private treeNodeMatchFilters(node: WorkscopeTreeData, searchCriteria: WorkscopeTableFilter): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as WorkscopeTreeData[]).filter((child) =>
        this.treeNodeMatchFilters(child, searchCriteria)
      );
    }

    const nodeData = node.data as BireItemForWorkscopeTreeDTO;

    const functionCode = nodeData.functionCode ? nodeData.functionCode.toLowerCase() : '';
    const functionCodeMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) &&
      functionCode.includes(this.searchGlobalFilter.toLowerCase());

    const item = `${nodeData.chapter}-${nodeData.section}-${nodeData.subject}-${nodeData.sheet}-${nodeData.marks}`;
    const itemMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && item.includes(this.searchGlobalFilter.toLowerCase());

    const itemNumber = nodeData.itemNumber ? nodeData.itemNumber.toLowerCase() : '';
    const itemNumberMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && itemNumber.includes(this.searchGlobalFilter.toLowerCase());

    const name = nodeData.name ? nodeData.name.toLowerCase() : '';
    const nameMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && name.includes(this.searchGlobalFilter.toLowerCase());

    const familyCode = nodeData.itemFamilyCode ? nodeData.itemFamilyCode.toLowerCase() : '';
    const familyMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && familyCode.includes(this.searchGlobalFilter.toLowerCase());

    const serialized = nodeData.serializedPart ? 'serialized' : 'not serialized';
    const serializedMatch =
      !StringUtils.isNullOrEmpty(this.searchGlobalFilter) && serialized.includes(this.searchGlobalFilter.toLowerCase());

    let filterCriteriaSuccess = true;

    // ADDED, DELETE AND ALL
    if (this.selectedChangeFilter === CockpitWorkscopeFormComponent.ALL) {
      filterCriteriaSuccess = true;
    } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent.DELETED) {
      filterCriteriaSuccess =
        ListUtils.orEmpty(node.children).length > 0 || ((nodeData.isModified && nodeData.isRemoved) as boolean);
      if (filterCriteriaSuccess) {
        node.expanded = true;
      }
    } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent.ADDED) {
      filterCriteriaSuccess =
        ListUtils.orEmpty(node.children).length > 0 || ((nodeData.isModified && nodeData.isAdded) as boolean);
      if (filterCriteriaSuccess) {
        node.expanded = true;
      }
    }

    // OVERLAY FILTERS
    let family = true;
    if (!StringUtils.isNullOrEmpty(searchCriteria.family)) {
      family = !!nodeData.itemFamilyCode && searchCriteria.family === nodeData.itemFamilyCode;
    }

    let designation = true;
    if (!StringUtils.isNullOrEmpty(searchCriteria.designation)) {
      designation =
        !!searchCriteria.designation &&
        !!nodeData.name &&
        nodeData.name.toLowerCase().indexOf(searchCriteria.designation.toLowerCase()) !== -1;
    }

    let funcCode = true;
    if (!StringUtils.isNullOrEmpty(searchCriteria.functionCode)) {
      funcCode = !!nodeData.functionCode && searchCriteria.functionCode === nodeData.functionCode;
    }

    let itemName = true;
    if (!StringUtils.isNullOrEmpty(searchCriteria.item)) {
      itemName = !!nodeData.item && searchCriteria.item === nodeData.item;
    }

    let impact = true;
    if (!StringUtils.isNullOrEmpty(searchCriteria.impact)) {
      impact = !!nodeData.impact && searchCriteria.impact === nodeData.impact;
    }

    let partNumber = true;
    if (!!nodeData.inventoriesList && !StringUtils.isNullOrEmpty(searchCriteria.pn)) {
      const dto = nodeData.inventoriesList.filter((inven: WorkscopeInventoryDTO) => inven.pn === searchCriteria.pn);
      partNumber = !!dto && dto.length > 0;
    }

    let serialNumber = true;
    if (!!nodeData.inventoriesList && !StringUtils.isNullOrEmpty(searchCriteria.sn)) {
      const dto = nodeData.inventoriesList.filter(
        (inven: WorkscopeInventoryDTO) =>
          !!inven.sn && !!searchCriteria.sn && inven.sn.indexOf(searchCriteria.sn) !== -1
      );
      serialNumber = !!dto && dto.length > 0;
    }

    let workOrder = true;
    if (!!nodeData.inventoriesList && !StringUtils.isNullOrEmpty(searchCriteria.woCode)) {
      const dto = nodeData.inventoriesList.filter(
        (inven: WorkscopeInventoryDTO) => inven.workScopingOrder === searchCriteria.woCode
      );
      workOrder = !!dto && dto.length > 0;
    }

    let isSerialized = true;
    if (!!searchCriteria.selectedSerialize && searchCriteria.selectedSerialize.length > 0) {
      const serialPart = nodeData.serializedPart ? 0 : 1;
      isSerialized = searchCriteria.selectedSerialize.includes(serialPart);
    }

    let isWorkscope = true;
    if (!!searchCriteria.selectedWorkscope && searchCriteria.selectedWorkscope.length > 0) {
      const workscope = nodeData.isWorkscope ? 0 : 1;
      isWorkscope = searchCriteria.selectedWorkscope.includes(workscope);
    }

    let filterSuccess = false;
    if (StringUtils.isNullOrEmpty(this.searchGlobalFilter)) {
      const success =
        ListUtils.orEmpty(node.children).length > 0 ||
        (designation &&
          isSerialized &&
          isWorkscope &&
          impact &&
          family &&
          funcCode &&
          itemName &&
          partNumber &&
          serialNumber &&
          workOrder &&
          filterCriteriaSuccess);

      if (!!this.searchCriteria && Object.keys(this.searchCriteria).length !== 0) {
        node.expanded = success;
      } else if (this.selectedChangeFilter === CockpitWorkscopeFormComponent.ALL) {
        this.workscopeStructure[0].expanded = true;
      } else {
        node.expanded = success;
      }

      return success;
    } else {
      filterSuccess =
        filterCriteriaSuccess &&
        (ListUtils.orEmpty(node.children).length > 0 ||
          functionCodeMatch ||
          itemNumberMatch ||
          familyMatch ||
          nameMatch ||
          itemMatch ||
          serializedMatch);
    }

    node.expanded = true;

    return filterSuccess;
  }

  /*****************************************************
   * Click on inventory workscope
   *****************************************************/
  public inventoryModified(data: BireItemForWorkscopeTreeDTO, event: NodeInterface, flag?: boolean, parent?: String) {
    // get modified copy
    const workscopeTreeDataFromStaged: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromStaged(
      this.getKey(data)
    );

    // Fetching original state
    const workscopeTreeDataInDB: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromDB(this.getKey(data));

    if (!parent && !!workscopeTreeDataFromStaged && workscopeTreeDataFromStaged.data) {
      // Modifying Item status for parent
      const parentItem = !!event.parent ? event.parent.data : undefined;
      // Check all childrens in db and modify them
      if (!!workscopeTreeDataInDB && !!workscopeTreeDataInDB.children && workscopeTreeDataInDB.children.length > 0) {
        let isChildrenSame = false;
        if (!!event.node && !!event.node.children && event.node.children.length > 0) {
          isChildrenSame = event.node.children.length === workscopeTreeDataInDB.children.length;
        }

        // Children length is same, take childrens from clicked node, else from db copy
        const childrenData =
          isChildrenSame && !!event.node && !!event.node.children && event.node.children.length > 0
            ? event.node.children
            : workscopeTreeDataInDB.children;
        this.modifyAllWorkscope(childrenData, data.isWorkscope as boolean, parentItem as BireItemForWorkscopeTreeDTO);
      }

      const isWorkscope = flag != undefined ? flag : data.isWorkscope;
      this.updateBireItemOfNode(data, isWorkscope as boolean);
      this.resetWorkscopeCounters();
      this.updateNodeInTree(data, this.modifiedWorkscopeTreeData);

      // Updating map
      this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeDataFromStaged.data);

      // Modify Parent Node on basis of childrens
      this.updateParentNode(event, data.isWorkscope as boolean);
    } else if (parent !== this.getKey(data)) {
      // Modify only if no childrens in case of remove
      if (flag || (!!event && !!event.children && event.children.length === 0)) {
        this.updateBireItemOfNode(data, flag as boolean);

        // Updating map
        this.updateNodeInTree(data, this.modifiedWorkscopeTreeData);
        if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
          this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeDataFromStaged.data);
        }
      }
    }

    // Update modified Keys of ui tree
    this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);

    // Refresh Tree Node after changes
    if (!parent && !!this.searchCriteria && Object.keys(this.searchCriteria).length > 0) {
      this.filterWithCriteria();
    }

    // Update counters
    this.updateWorkscopeInformation(this.modifiedWorkscopeTreeData);
  }

  private updateBireItemOfNode(data: BireItemForWorkscopeTreeDTO, flag: boolean) {
    const dbData: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromDB(this.getKey(data));

    if (!!data && !!dbData && !!!!dbData.data) {
      data.isModified = dbData.data.isWorkscope === flag ? false : true;
      data.isWorkscope = flag
        ? data.isWorkscope
          ? data.isWorkscope
          : flag
        : !data.isWorkscope
        ? data.isWorkscope
        : flag;
      data.isAdded = flag;
      data.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
      data.workscopeVersionStatus = !flag ? undefined : this.workscopeInformationObject.status === this.draft ? 0 : 1;
      data.isRemoved = !flag;
    }
  }

  /********************************************
   * If parent is clicked, apply settings to its childrens also
   ********************************************/
  private setActionForChildrens(data: WorkscopeTreeData[], isWorkscope: boolean) {
    data.forEach((res) => {
      if (!!res.data) {
        const workscopeTreeDataInDB: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromDB(
          this.getKey(res.data)
        );

        res.data.isWorkscope = isWorkscope;

        if (!!workscopeTreeDataInDB && workscopeTreeDataInDB.data) {
          if (workscopeTreeDataInDB.data.isWorkscope === res.data.isWorkscope) {
            // Item in original state
            res.data.isModified = false;
            res.data.isAdded = false;
            res.data.isRemoved = false;
          } else {
            res.data.isModified = true;
            res.data.isRemoved = isWorkscope ? false : true;
            res.data.isAdded = isWorkscope ? true : false;
          }

          this.updateVersionColumn(res.data);
        }

        if (!!res.children && res.children.length > 0) {
          this.setActionForChildrens(res.children, isWorkscope);
        }
      }
    });
  }

  public onNodeExpand(node: WorkscopeTreeData) {
    this.selectedWorkscope = node;
  }

  /**********************************************
   * Set Workscope Information Panel
   *********************************************/
  private getWorkscopeInformation(data: WorkscopeTreeData[]): void {
    this.workscopeInformationObject = {
      lastUpdate: this.bsdeProjectDTO.statusUser,
      lastUpdateDate: this.bsdeProjectDTO.statusDate,
      approveItem: 0,
      draftItem: 0,
      removeItem: 0
    };

    if (!!data && data.length > 0 && !!data[0].data) {
      this.workscopeInformationObject.versionNumber = data[0].data.workscopeVersionNumber as number;
      this.workscopeInformationObject.status = data[0].data.workscopeVersionStatus === 0 ? this.draft : this.approved;
    }

    if (this.workscopeInformationObject.status === this.approved) {
      this.isApprove = true;
    }
  }

  private resetWorkscopeCounters() {
    this.workscopeInformationObject.approveItem = 0;
    this.workscopeInformationObject.draftItem = 0;
    this.workscopeInformationObject.removeItem = 0;
  }

  public getColorStyle(rowData: BireItemForWorkscopeTreeDTO) {
    return rowData.isModified && rowData.isWorkscope
      ? 'added'
      : rowData.isModified && !rowData.isWorkscope
      ? 'removed'
      : 'none';
  }

  /***************************************************
   * Filter handling
   **************************************************/
  public filterWithCriteria() {
    this.showFilterButtons = Object.keys(this.searchCriteria).length === 0 ? false : true;
    this.searchGlobalFilter = '';

    if (Object.keys(this.searchCriteria).length === 0) {
      // No Filter => Restore UI data
      this.workscopeStructure = this.buildTree(this.modifiedWorkscopeTreeData);
      if (this.workscopeStructure.length > 0) {
        this.workscopeStructure[0].expanded = true;
      }
    } else {
      this.searchSubAssemblyGlobalFilterChanged.next();
    }
  }

  /**********************************************
   * Approve and Upgrade functionality
   **********************************************/
  public approve() {
    this.workscopeInformationObject.status = this.approved;
    this.buildTree(this.workscopeStructure);
    this.resetWorkscopeCounters();
    this.updateWorkscopeInformation(this.modifiedWorkscopeTreeData);
    this.isApprove = true;
  }

  public upgrade() {
    this.workscopeInformationObject.status = this.draft;
    if (!!this.workscopeInformationObject.versionNumber) {
      this.workscopeInformationObject.versionNumber += 1;
    }
    this.isApprove = false;
  }

  /*****************************************************
   * Add/Remove all from workscope
   ****************************************************/
  public addRemoveAllToWorkscope(flag: boolean) {
    // Avoiding multiple click on buttons
    if (this.workscopeStructure.length > 0) {
      // Avoid parent item to be modified
      const parentItemData = this.workscopeStructure[0].data as BireItemForWorkscopeTreeDTO;
      this.modifyAllWorkscope(this.workscopeStructure, flag, parentItemData);

      // Update modified Keys of ui tree
      this.updateTreeData(this.workscopeStructure, this.modifiedWorkscopeTreeData);
    }
  }

  private modifyAllWorkscope(treeData: NodeInterface[], isWorkscope: boolean, parent: BireItemForWorkscopeTreeDTO) {
    treeData.forEach((res: NodeInterface) => {
      if (!!res && !!res.data) {
        // get modified copy
        const workscopeTreeDataFromStaged: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromStaged(
          this.getKey(res.data)
        );

        const workscopeTreeDataInDB: WorkscopeTreeData | undefined = this.getWorkscopeTreeDataFromDB(
          this.getKey(res.data)
        );

        if (!!res.children && res.children.length === 0) {
          const parentInfo = !!parent ? this.getKey(parent) : undefined;
          this.inventoryModified(res.data, res, isWorkscope, parentInfo);
        }

        // Update Map
        this.updateStageMap(res.data);

        if (res.children && res.children.length > 0) {
          this.updateBireItemOfNode(res.data, isWorkscope as boolean);

          // Updating map
          if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
            this.updateBireItemForWorkscopeTreeDTO(res.data, workscopeTreeDataFromStaged.data);
          }

          this.updateNodeInTree(res.data, this.modifiedWorkscopeTreeData);
          this.modifyAllWorkscope(res.children, isWorkscope, parent);
        } else if (
          !!workscopeTreeDataInDB &&
          !!workscopeTreeDataInDB.data &&
          !!workscopeTreeDataInDB.children &&
          workscopeTreeDataInDB.children.length > 0
        ) {
          this.updateBireItemOfNode(workscopeTreeDataInDB.data, isWorkscope as boolean);

          // Updating map
          if (!!workscopeTreeDataFromStaged && !!workscopeTreeDataFromStaged.data) {
            this.updateBireItemForWorkscopeTreeDTO(workscopeTreeDataInDB.data, workscopeTreeDataFromStaged.data);
          }

          this.updateNodeInTree(workscopeTreeDataInDB.data, this.modifiedWorkscopeTreeData);
          this.modifyAllWorkscope(workscopeTreeDataInDB.children, isWorkscope, parent);
        }

        // Modify Parent Node on basis   of childrens
        this.updateParentNode(res, isWorkscope);
      }
    });
  }

  private updateParentNode(res: NodeInterface, isWorkscope: boolean) {
    // Modify Parent Node on basis of childrens
    if (!!res.parent) {
      if (!!res.parent.children && !!res.parent.data) {
        // Check workscope status of all children
        const parentDTO = this.workscopeTreeDataFromStagedByItemKeyMap.get(
          this.getKey(res.parent.data as BireItemForWorkscopeTreeDTO)
        );

        if (!!parentDTO && !!parentDTO.children) {
          const isAllWorkscope: WorkscopeTreeData[] = [];
          this.workscopeItems(parentDTO, isAllWorkscope);
          res.parent.data.isWorkscope = isAllWorkscope.length === 0 ? false : true;
          this.updateBireItemOfNode(res.parent.data, res.parent.data.isWorkscope as boolean);

          // Update Map
          this.updateStageMap(res.parent.data);
        }

        // If parent itself has parent
        if (!!res.parent.parent) {
          this.updateParentNode(res.parent, isWorkscope);
        }
      }
    }
  }

  private workscopeItems(data: WorkscopeTreeData, toReturn: WorkscopeTreeData[]) {
    if (!!data.children) {
      data.children.forEach((elt: WorkscopeTreeData) => {
        if (!!elt.data && elt.data.isWorkscope) {
          toReturn.push(elt);
        }

        if (!!elt.children) {
          this.workscopeItems(elt, toReturn);
        }
      });
    }
  }

  private updateStageMap(data: BireItemForWorkscopeTreeDTO) {
    // Update Map
    const workscopeTreeStagedData: WorkscopeTreeData | undefined = this.workscopeTreeDataFromStagedByItemKeyMap.get(
      this.getKey(data)
    );

    // Updating map
    if (!!workscopeTreeStagedData && !!workscopeTreeStagedData.data) {
      this.updateBireItemForWorkscopeTreeDTO(data, workscopeTreeStagedData.data);
    }
  }

  /***************************************************
   * Update counter of Workscope Information panel
   ***************************************************/
  private updateWorkscopeInformation(res: WorkscopeTreeData[]) {
    res.forEach((workscope) => {
      if (!!workscope.data) {
        const data = workscope.data;

        if (data.isModified && data.isRemoved && this.workscopeInformationObject.removeItem !== undefined) {
          this.workscopeInformationObject.removeItem += 1;
        }

        if (data.workscopeVersionStatus === 1 && this.workscopeInformationObject.approveItem !== undefined) {
          this.workscopeInformationObject.approveItem += 1;
        }

        if (data.workscopeVersionStatus === 0 && this.workscopeInformationObject.draftItem !== undefined) {
          this.workscopeInformationObject.draftItem += 1;
        }

        if (!!workscope.children && workscope.children.length > 0) {
          this.updateWorkscopeInformation(workscope.children);
        }
      }
    });
  }

  /**********************************************
   * Support for Load Workscope from Excel
   **********************************************/
  private loadFromExcel() {
    this.showWorkscopeImportPopup = true;
  }

  public refreshOnImport(): void {
    // TODO
  }

  public openFilters() {
    this.showFilterOverlay = !this.filtersVisible;
  }

  /********************************************
   * SAVE WORKSCOPE
   ********************************************/
  public save(isFromExport?: boolean): void {
    if (!this.isAddInventory && !this.isNewInventoryAdded) {
      this.cleanParents(this.modifiedWorkscopeTreeData);
      const input: SaveWorkscopeInput = {
        projectNumber: this.bsdeProjectDTO.projectNumber,
        workscopeTreeDataList: this.modifiedWorkscopeTreeData
      };

      this.showSaveSpinner = true;
      this.cockpitWorkscopeFormService
        .saveWorkscope(input)
        .pipe(
          finalize(() => {
            this.tableLoading = false;
            this.showSaveSpinner = false;
            if (isFromExport) {
              this.exportWorkscope();
            }
          })
        )
        .subscribe((result) => {
          this.updateOpenMode(ComponentOpenMode.Read);
          // TODO
          this.messageService.showSuccessMessage('global.successOnSave');
        });
    }
  }

  private cleanParents(structure: WorkscopeTreeData[]) {
    structure.forEach((elt: WorkscopeTreeData, index) => {
      elt.parent = {};
      if (elt.children) {
        this.cleanParents(elt.children);
      }
    });
  }

  public isObjectNotNull(searchCriteria: Object) {
    return !!searchCriteria && Object.keys(searchCriteria).length > 0;
  }

  /********************************************
   * UTILITY METHODS
   ********************************************/

  // Getting identifier key for an item node
  public getKey(item: BireItemForWorkscopeTreeDTO): String {
    return `${item.chapter}-${item.section}-${item.subject}-${item.sheet}-${item.marks}`;
  }

  // Based on the key, getting the node copy of DB
  public getWorkscopeTreeDataFromDB(key: String): WorkscopeTreeData | undefined {
    return this.workscopeTreeDataInDBByItemKeyMap.get(key);
  }

  // Based on the key, getting the node copy of UI
  public getWorkscopeTreeDataFromUI(key: String): WorkscopeTreeData | undefined {
    return this.workscopeTreeDataFromUIByItemKeyMap.get(key);
  }

  // Based on the key, getting the node copy from staged (modified)
  public getWorkscopeTreeDataFromStaged(key: String): WorkscopeTreeData | undefined {
    return this.workscopeTreeDataFromStagedByItemKeyMap.get(key);
  }

  // Build a map to ease the search of a node
  private buildMap(data: WorkscopeTreeData[], referenceMap: Map<String, WorkscopeTreeData>) {
    data.forEach((elt: WorkscopeTreeData) => {
      const eleClone = elt.data;

      if (!!eleClone) {
        if (!!eleClone.chapter) {
          // tslint:disable-next-line:max-line-length
          const item = `${eleClone.chapter}-${eleClone.section}-${eleClone.subject}-${eleClone.sheet}-${eleClone.marks}`;
          referenceMap.set(item, elt);
        }
      }
      this.buildMap(elt.children || [], referenceMap);
    });
  }

  private updateTreeData(source: WorkscopeTreeData[], destination: WorkscopeTreeData[]) {
    if (destination && source) {
      source.forEach((sourceItem) => {
        if (!!sourceItem.data) {
          const sData = sourceItem.data as BireItemForWorkscopeTreeDTO;
          this.updateNodeInTree(sData, destination);
        }
      });
    }
  }

  private updateNodeInTree(searchObj: BireItemForWorkscopeTreeDTO, destination: WorkscopeTreeData[]) {
    if (destination && searchObj) {
      destination.filter((destinationItem) => {
        const dData = destinationItem.data as BireItemForWorkscopeTreeDTO;
        if (this.getKey(searchObj) === this.getKey(dData)) {
          this.updateBireItemForWorkscopeTreeDTO(searchObj, dData);
        }

        if (!!destinationItem.children && destinationItem.children.length > 0) {
          this.updateNodeInTree(searchObj, destinationItem.children);
        }
      });
    }
  }

  // Synchronise two BireItemForWorkscopeTreeDTO
  private updateBireItemForWorkscopeTreeDTO(
    source: BireItemForWorkscopeTreeDTO,
    destination: BireItemForWorkscopeTreeDTO
  ) {
    if (destination && source) {
      destination.isWorkscope = source.isWorkscope;
      destination.isModified = source.isModified;
      destination.workscopeVersionNumber = this.workscopeInformationObject.versionNumber;
      destination.workscopeVersionStatus = !destination.isWorkscope
        ? undefined
        : this.workscopeInformationObject.status === this.draft
        ? 0
        : 1;
      destination.isAdded = source.isAdded;
      destination.isRemoved = source.isRemoved;
    }
  }

  private setSearchSentenceDecisionList(): void {
    this.cockpitWorkscopeFormService.fetchSentenceList().subscribe((res) => {
      this.sentenceList = res;
    });

    this.cockpitWorkscopeFormService.fetchDecisionList().subscribe((res) => {
      this.decisionList = res;
    });
  }

  /*********************************************
   * Fetch Sentence List
   *********************************************/
  public getSentenceValue(label: string, isValue: boolean): string | undefined {
    const dto = this.sentenceList.filter((res) => {
      return isValue ? res.value === label : res.label === label;
    });

    return !!dto && dto.length > 0 ? (isValue ? dto[0].label : dto[0].value) : undefined;
  }

  /*********************************************
   * Fetch Decision List
   *********************************************/
  public getDecisionValue(label: string, isValue: boolean): string | undefined {
    const dto = this.decisionList.filter((res) => {
      return isValue ? res.value === label : res.label === label;
    });

    return !!dto && dto.length > 0 ? (isValue ? dto[0].label : dto[0].value) : undefined;
  }

  /********************************************
   * Save and Export Workscope
   ********************************************/
  public saveAndExport() {
    let isSaveNeeded = true;
    // Check the need if project needs to be saved
    if (
      !!this.workscopeInformationObject &&
      this.workscopeInformationObject.removeItem === 0 &&
      this.workscopeInformationObject.approveItem === 0
    ) {
      // Nothing modified
      isSaveNeeded = false;
    }

    if (isSaveNeeded) {
      const partialMessageKey = 'saveProjectAndExport';

      this.confirmationService.confirm({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.save(true);
        }
      });
    } else {
      this.exportWorkscope();
    }
  }

  /**************************************
   * Export Workscope
   **************************************/
  private exportWorkscope() {
    // TODO implement when service is ready
    this.messageService.showSuccessMessage(this.getTranslateKey('exportFile'));
  }
}
