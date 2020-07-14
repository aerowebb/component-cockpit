import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SelectItem, TreeNode } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Observable } from 'rxjs/internal/Observable';

import { ProductStructureHistoryApi } from '../../../../shared/api/product-structure-history.api';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BirePackEvolutionInput } from '../../../../shared/types/api-input-types/product-structure-management/bire-pack-evolution-input.interface';
import { SaveItemInput } from '../../../../shared/types/api-input-types/product-structure-management/save-item-input.interface';
import { GetPartNumberStructureOutputDTO } from '../../../../shared/types/api-output-types/get-part-number-structure-output-dto.interface';
import { HistoricUpdatesItemOutput } from '../../../../shared/types/api-output-types/product-structure-history/historic-updates-item-output.interface';
import { BireItemPnEvolutionCustomDTO } from '../../../../shared/types/api-output-types/product-structure-management/bire-item-pn-evolution-custom-dto.interface';
import { BirePackEvolutionOutput } from '../../../../shared/types/api-output-types/product-structure-management/bire-pack-evolution-output.interface';
import { ItemFathersAndSonsOutput } from '../../../../shared/types/api-output-types/product-structure-management/item-fathers-and-sons-output.interface';
import { StructureItemScreenOutput } from '../../../../shared/types/api-output-types/product-structure-management/structure-item-screen-output.interface';
import { BireDamLocTaskOutput } from '../../../../shared/types/api-output-types/task-management/bire-dam-loc-task-output.interface';
import { BireReturnItemCustomDTO } from '../../../../shared/types/api-output-types/task-management/bire-return-item-custom-dto.interface';
import { DamagesWithItemVersionOutput } from '../../../../shared/types/api-output-types/task-management/damages-with-item-version-output.interface';
import { TaskAssociatedItemOutput } from '../../../../shared/types/api-output-types/task-management/task-associated-item-output.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDamLocTaskDTOId } from '../../../../shared/types/api-types/bire-dam-loc-task-dto-id.interface';
import { BireDamLocTaskDTO } from '../../../../shared/types/api-types/bire-dam-loc-task-dto.interface';
import { BireDamageItemDTOId } from '../../../../shared/types/api-types/bire-damage-item-dto-id.interface';
import { BireDamageItemDTO } from '../../../../shared/types/api-types/bire-damage-item-dto.interface';
import { BireDocItemDTO } from '../../../../shared/types/api-types/bire-doc-item-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionItemDTO } from '../../../../shared/types/api-types/bire-evolution-item-dto.interface';
import { BireItemAttributeDTO } from '../../../../shared/types/api-types/bire-item-attribute-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireItemItemDTOId } from '../../../../shared/types/api-types/bire-item-item-dto-id.interface';
import { BireItemItemDTO } from '../../../../shared/types/api-types/bire-item-item-dto.interface';
import { BireItemMaintenanceDTOId } from '../../../../shared/types/api-types/bire-item-maintenance-dto-id.interface';
import { BireItemMaintenanceDTO } from '../../../../shared/types/api-types/bire-item-maintenance-dto.interface';
import { BireItemSiteDTOId } from '../../../../shared/types/api-types/bire-item-site-dto-id.interface';
import { BireItemSiteDTO } from '../../../../shared/types/api-types/bire-item-site-dto.interface';
import { BireItemVersionDTOId } from '../../../../shared/types/api-types/bire-item-version-dto-id.interface';
import { BireItemVersionDTO } from '../../../../shared/types/api-types/bire-item-version-dto.interface';
import { BireLocalisationItemDTOId } from '../../../../shared/types/api-types/bire-localisation-item-dto-id.interface';
import { BireLocalisationItemDTO } from '../../../../shared/types/api-types/bire-localisation-item-dto.interface';
import { BireMaintenancePlanDTO } from '../../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BirePackBaseOptionDTOId } from '../../../../shared/types/api-types/bire-pack-base-option-dto-id.interface';
import { BirePackBaseOptionDTO } from '../../../../shared/types/api-types/bire-pack-base-option-dto.interface';
import { BirePackEvolutionDTO } from '../../../../shared/types/api-types/bire-pack-evolution-dto.interface';
import { BireReturnItemDTOId } from '../../../../shared/types/api-types/bire-return-item-dto-id.interface';
import { BireReturnItemDTO } from '../../../../shared/types/api-types/bire-return-item-dto.interface';
import { BireReturnReasonDTO } from '../../../../shared/types/api-types/bire-return-reason-dto.interface';
import { BireTaskDTOId } from '../../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskItemDTOId } from '../../../../shared/types/api-types/bire-task-item-dto-id.interface';
import { BireTaskItemDTO } from '../../../../shared/types/api-types/bire-task-item-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { BireTilItemDTOId } from '../../../../shared/types/api-types/bire-til-item-dto-id.interface';
import { BireTilItemDTO } from '../../../../shared/types/api-types/bire-til-item-dto.interface';
import { BireUnmountAssemblyDTO } from '../../../../shared/types/api-types/bire-unmount-assembly-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVersionMeasureDTOId } from '../../../../shared/types/api-types/bire-version-measure-dto-id.interface';
import { BireVersionMeasureDTO } from '../../../../shared/types/api-types/bire-version-measure-dto.interface';
import { BireVersionPnDTOId } from '../../../../shared/types/api-types/bire-version-pn-dto-id.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { EvolutionDetailDTO } from '../../../../shared/types/api-types/evolution-detail-dto.interface';
import { FindBireVariantVersionsByFamilyFunctionAlternativeDTO } from '../../../../shared/types/api-types/find-bire-variant-versions-by-family-function-alternative-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { UrlUtils } from '../../../../shared/utils/url-utils';
import { ItemSearchService } from '../search/item-search.service';

import { ItemFormService } from './item-form.service';

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

interface BireDamageDTOCustom {
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  familyCode?: string;
  structureType?: string;
  damageCode?: string;
  damageDescription?: string;
  variantCode?: string;
  unitCode?: string;
  versionNumber?: string;
}

interface BireDamLocTaskCustomOutput {
  localisationCode?: string;
  localisationCodeTxt?: string;
  damageCode?: string;
  damageCodeTxt?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  taskCode?: string;
  taskVersion?: string;
  versionNumber?: string;
  chapter?: string;
  section?: string;
  subject?: string;
  sheet?: string;
  marks?: string;
  damageDescription?: string;
  localisationDescription?: string;
  damageDescriptionTxt?: string;
  localisationDescriptionTxt?: string;
  taskDesignation?: string;
}

interface DamageLocalisationTaskRow {
  versionNumber: string;
  damage: string;
  localisation: string;
  taskCode: string;
  taskVersion: string;
  taskDesignation: string;
  _obj: BireDamLocTaskCustomOutput;
}

interface BireItemMaintenanceCustomDTO {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  repairCenterCode?: string;
  kPourcentCode?: string;
  environmentCode?: string;
  startDate?: Date;
  endDate?: Date;
  startDateLabel?: string;
  endDateLabel?: string;
  probability?: number;
}

interface BireVersionMeasureCustomDTO {
  counterCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  birFamilyCode?: string;
  birStructureType?: string;
  ratingCode?: string;
  referenceValue?: string;
  limitDate?: Date;
  limitDateLabel?: string;
  versionNumber?: string;
}

interface StructureRow {
  item: string;
  designation: string;
  itemFamily: string;
  functionCode: string;
  itemNumber: string;
}

interface MaintenanceProgramRow {
  maintenanceProgram: string;
}

interface TechnicalLevelRow {
  technicalLevel: string;
  _obj: BireTilDTO;
}

interface PartNumberRow {
  pn: string;
  isn: string;
  ipcQuantity: string;
  mplQuantity: string;
  alternatePn: string;
  _obj: GetPartNumberStructureOutputDTO;
}

interface DocumentRow {
  docCode?: string;
  docExtension?: string;
  docName?: string;
  docPublicationDate?: string;
  docSize?: string;
  docSource?: string;
  docCategory?: string;
  _obj: BireDocumentDTO;
}

interface PackEvolutionRow {
  control?: string;
  evolutionNumber?: string;
  revisionNumber?: string;
  designation?: string;
  vintageDate?: string;
  description?: string;
  _obj?: BirePackEvolutionOutput;
  message?: string;
}

@Component({
  selector: 'aw-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  @ViewChild('mainInfoAnchor')
  public mainInfoAnchor: ElementRef;

  @ViewChild('partNumber')
  public partNumber: ElementRef;

  @ViewChild('general')
  public general: ElementRef;

  @ViewChild('structure')
  public structure: ElementRef;

  @ViewChild('refMeasurement')
  public refMeasurement: ElementRef;

  @ViewChild('taskDamagesLocalisation')
  public taskDamagesLocalisation: ElementRef;

  @ViewChild('evolutions')
  public evolutions: ElementRef;

  @ViewChild('configurationPacks')
  public configurationPacks: ElementRef;

  @ViewChild('maintenance')
  public maintenance: ElementRef;

  @ViewChild('illustrations')
  public illustrations: ElementRef;

  // Main form object
  public bireItemDTO: BireItemDTO;

  public readonly componentName: string;
  public selectedAnchor: string | undefined;
  public toc: PageTocEntry[];
  public isMelSelected: boolean = false;
  public isillustratedSelected: boolean = false;
  public showStatusUpdatesPopup: boolean;

  // Dropdowns
  public itemFamilyList: LabelValue<string>[];
  public familyVariantList: LabelValue<string>[];
  public flocTypeList: LabelValue<string>[];
  public itemTypeList: LabelValue<string>[];
  public lifeRestrictionTypeList: LabelValue<string>[];
  public replacableUnitTypeList: LabelValue<string>[];
  public itemFamilyCodeList: LabelValue<string>[];
  public levelList: LabelValue<string>[];
  private bireVariantVersionList: FindBireVariantVersionsByFamilyFunctionAlternativeDTO[];
  private taskItemList: LabelValue<string>[];
  private kPourcentList: LabelValue<string>[];
  private maintenanceTypeList: LabelValue<string>[];
  private repairCenterList: LabelValue<string>[];
  private exchangeTypeList: LabelValue<string>[];
  public unmountCodeList: LabelValue<string>[];
  public packTypeList: LabelValue<string>[];
  public bireUnmountAssemblyList: BireUnmountAssemblyDTO[];

  // Dropdown selection
  public selectedFamilyVariant: string;

  // Dialogs
  public showItemsDialog: boolean;

  private itemDialogSource: string;
  public referRadio: string;

  // Evolution Table
  public evolutionTableCols: TableColumn[];
  public evolutionTableList: BireItemPnEvolutionCustomDTO[];

  public evolutionPacksTableCols: TableColumn[];
  public evolutionPacksTableList: PackEvolutionRow[];
  public selectedEvolutionPacks: PackEvolutionRow[];
  public currentEvolutionPack: BirePackEvolutionOutput;

  // Configuration Packs
  public configurationPackCols: TableColumn[];
  public configurationPackList: BirePackBaseOptionDTO[];
  public selectedConfigurationPacks: BirePackBaseOptionDTO[];

  // Maintenance Program
  public maintenanceProgramCols: TableColumn[];
  public maintenanceProgramList: MaintenanceProgramRow[];
  public selectedMaintenanceProgram: BireMaintenancePlanDTO[];

  // Technical Level
  public technicalLevelCols: TableColumn[];
  public technicalLevelList: TechnicalLevelRow[];
  public selectedTechnicalLevel: TechnicalLevelRow[];
  private bireTilItemDTOAddedList: BireTilItemDTO[];
  private bireTilItemDTODeletedList: BireTilItemDTOId[];
  public dataItem: PopupEntry<BireTilItemDTO>;
  public showTILDialog: boolean;

  // REpair Center
  public repairCentersCols: TableColumn[];
  public repairCentersList: BireItemSiteDTO[];
  public selectedRepairCenters: BireItemSiteDTO[];
  private bireItemSiteDTOAddedList: BireItemSiteDTO[];
  private bireItemSiteDTODeletedList: BireItemSiteDTOId[];
  private bireItemSiteDTOUpdatedList: BireItemSiteDTO[];
  public showRepairCenterDialog: boolean;
  private currentCenterIndex: number;
  public dataRepairCenter: PopupEntry<BireItemSiteDTO>;

  // Cause of removal
  public causeOfRemovalCols: TableColumn[];
  public causeOfRemovalList: BireReturnItemCustomDTO[];
  public selectedCauseOfRemoval: BireReturnItemCustomDTO[];
  private bireReturnItemDTOAddedList: BireReturnItemDTO[];
  private bireReturnItemDTODeletedList: BireReturnItemDTOId[];
  public showCauseOfRemovalDialog: boolean;

  // Statistics
  public statisticsCols: TableColumn[];
  public statisticsList: BireItemMaintenanceCustomDTO[];
  public selectedStatistics: BireItemMaintenanceDTO[];
  public showMaintenanceStatDialog: boolean;
  private bireItemMaintenanceDTOAddedList: BireItemMaintenanceDTO[];
  private bireItemMaintenanceDTOUpdatedList: BireItemMaintenanceDTO[];
  private bireItemMaintenanceDTODeletedList: BireItemMaintenanceDTOId[];
  public dataMaintenanceStats: PopupEntry<BireItemSiteDTO>;
  public currentStatIndex: number;

  // Part Number
  public partNumberTableCols: TableColumn[];
  public partNumberTableList: PartNumberRow[];
  public rowGroupMetadata: Object;
  public selectedPartNumber: PartNumberRow[];
  public openPartNumberVersionDialogFlag: boolean;
  public dataItemVersion: PopupEntry<GetPartNumberStructureOutputDTO>;
  public bireItemVersionDTOAddedList: BireItemVersionDTO[];
  public bireItemVersionDTODeletedList: BireItemVersionDTOId[];
  public bireVersionPnDTOIdDeletedList: BireVersionPnDTOId[];
  public partNumberVersionList: TreeNode[];
  public partNumberVersionSelected: TreeNode | undefined;
  public partNumberMap: Map<string, PartNumberRow[]>;

  // Attributes
  public bireAttributesForItem: BireAttributeDTO[];
  public dynamicAttributesForItem: DynamicAttributes[];
  public dynamicAttributesHistoric: Observable<HBidoEquipmentAttributeDTO[]>;
  public bireItemAttributeDTO: BireItemAttributeDTO[];

  // Item Father
  public itemSonFatherCols: TableColumn[];
  public itemFatherList: StructureRow[];
  public selectedItemFathers: ItemFathersAndSonsOutput[];
  public showItemFatherDialog: boolean;
  private saveStructureTab: BireItemItemDTO[];

  // Item Son
  public itemSonList: StructureRow[];
  public selectedItemSons: ItemFathersAndSonsOutput[];
  public showItemSonDialog: boolean;
  public removeDataStructureTab: BireItemItemDTOId[];

  // Tasks
  public tasksCols: TableColumn[];
  public tasksList: TaskAssociatedItemOutput[];
  public selectedTasks: TaskAssociatedItemOutput[];
  public showItemTaskDialog: boolean;
  private bireTaskItemAddedList: BireTaskItemDTO[];
  private bireTaskItemDeletedList: BireTaskItemDTOId[];
  public dataItemTask: PopupEntry<TaskAssociatedItemOutput>;

  // Damages
  public damagesCols: TableColumn[];
  public damagesList: DamagesWithItemVersionOutputCustom[];
  public selectedDamages: DamagesWithItemVersionOutputCustom[];
  public showDamageDialog: boolean;
  public dataDamage: PopupEntry<DamagesWithItemVersionOutputCustom>;
  public bireDamageItemDTOIdRemoveList: BireDamageItemDTOId[];
  public bireDamageItemDTOAddedList: BireDamageItemDTO[];

  // Localisation
  public localisationList: BireLocalisationItemDTO[];
  public localisationCols: TableColumn[];
  public selectedLocalisation: BireLocalisationItemDTO[];
  public bireLocalisationItemDTOIdRemoveList: BireLocalisationItemDTOId[];
  public bireLocalisationItemDTOAddedList: BireLocalisationItemDTO[];
  public showLocalisationDialog: boolean;
  public dataLocalisation: PopupEntry<BireLocalisationItemDTO>;

  // Reference Measurement
  public refMeasurementCols: TableColumn[];
  public refMeasurementList: BireVersionMeasureCustomDTO[];
  public selectedRefMeasurement: BireVersionMeasureDTO[];
  public showRefMeasurementDialog: boolean;
  public dataRefMeasurement: PopupEntry<BireVersionMeasureDTO>;
  public createBireVersionMeasureDTOList: BireVersionMeasureDTO[];
  public updateBireVersionMeasureDTOList: BireVersionMeasureDTO[];
  private currentRefIndex: number;
  public removeBireVersionMeasureDTOIdList: BireVersionMeasureDTOId[];

  // Damage, Localisation and Task Table
  public damLocTasCols: TableColumn[];
  public damLocTaskList: DamageLocalisationTaskRow[];
  public selectedDamLocTask: DamageLocalisationTaskRow[];
  public createBireDamLocTaskDTOList: BireDamLocTaskDTO[];
  public removeBireDamLocTaskDTOIdList: BireDamLocTaskDTOId[];
  public dataBireDamLoc: PopupEntry<BireDamLocTaskCustomOutput>;
  public showBireDamLocalisationDialog: boolean;

  // item versions list
  private itemVersions: string[];
  private bireTils: BireTilDTO[];
  private listOfAllCauseOfRemoval: BireReturnReasonDTO[];

  // Update
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public tableStatusUpdatesData: DialogTableData<HistoricUpdatesItemOutput>;
  public deleteApi: string;

  // Illustrations tab
  public docURL: string | undefined;
  public note1: string | undefined;
  public note2: string | undefined;
  public note3: string | undefined;
  public isDocPresent: boolean;

  // Documents tab
  public documentsTable: BireDocumentDTO[];
  public documentsTableCols: TableColumn[];
  public selectedDocuments: DocumentRow[];
  public currentDocument: BidoDocumentationDTO | undefined;
  public currentDocumentIndex: number | undefined;
  public bireDocumentDisplayed: DocumentRow[];
  public documentsAdded: BireDocItemDTO[];
  public documentsRemoved: BireDocItemDTO[];
  public documentsUpdated: BireDocItemDTO[];
  public documentTypes: LabelValue<string>[];

  public showDocumentDialog: boolean;
  public showAddDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;

  // Configuration Packs
  public packNumberList: TreeNode[];
  public packNumberSelected: TreeNode | undefined;
  public packNumberMap: Map<string, BirePackBaseOptionDTO>;
  public currentPackNumber: BirePackBaseOptionDTO;
  public showConfigPackDialog: boolean;
  public createBirePackBaseOptionList: BirePackBaseOptionDTO[];
  public updateBirePackBaseOptionList: BirePackBaseOptionDTO[];
  public removeBirePackBaseOptionList: BirePackBaseOptionDTOId[];
  public createBirePackEvolutionDTOList: BirePackEvolutionDTO[];
  public updateBirePackEvolutionDTOList: BirePackEvolutionDTO[];
  public packBaseOptionCode: string[];
  public currentPack: PopupEntry<BirePackBaseOptionDTO>;

  public showAddConfigPackDialog: boolean;
  public showEditEvolutionPackDialog: boolean;
  public currentConfigEvolution: PopupEntry<BirePackEvolutionOutput>;
  public isNewPack: boolean;

  public subtitle: string;

  private causeTypeList: LabelValue<string>[];
  public referList: SelectItem[];
  public showSaveSpinner: boolean;

  public statusList: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    private readonly propertiesService: PropertiesService,
    private readonly itemFormService: ItemFormService,
    private readonly itemSearchService: ItemSearchService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly confirmationService: ConfirmationService,
    private readonly productStructureHistoryApi: ProductStructureHistoryApi,
    private readonly dateService: DateService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    super.registerPageTocEntryObservable();

    this.componentName = ComponentConstants.ENG_ITEM_FORM;

    this.init();

    this.loadCauseTypeList();
    this.loadItemFamilyList();

    this.setReferList();
  }

  private init(): void {
    this.kPourcentList = [];
    this.maintenanceTypeList = [];
    this.exchangeTypeList = [];
    this.repairCenterList = [];
    this.itemFamilyList = [];
    this.familyVariantList = [];
    this.bireVariantVersionList = [];
    this.flocTypeList = [];
    this.itemTypeList = [];
    this.lifeRestrictionTypeList = [];
    this.replacableUnitTypeList = [];
    this.itemFamilyCodeList = [];
    this.levelList = [];
    this.evolutionTableCols = [];
    this.evolutionTableList = [];
    this.unmountCodeList = [];
    this.bireUnmountAssemblyList = [];
    this.evolutionPacksTableCols = [];
    this.evolutionPacksTableList = [];
    this.selectedEvolutionPacks = [];

    this.configurationPackCols = [];
    this.configurationPackList = [];
    this.selectedConfigurationPacks = [];
    this.bireDocumentDisplayed = [];
    this.selectedDocuments = [];

    this.maintenanceProgramCols = [];
    this.maintenanceProgramList = [];
    this.selectedMaintenanceProgram = [];
    this.bireItemMaintenanceDTOAddedList = [];
    this.bireItemMaintenanceDTOUpdatedList = [];
    this.bireItemMaintenanceDTODeletedList = [];

    this.technicalLevelCols = [];
    this.technicalLevelList = [];
    this.selectedTechnicalLevel = [];
    this.bireTilItemDTODeletedList = [];
    this.bireTilItemDTOAddedList = [];

    this.repairCentersCols = [];
    this.repairCentersList = [];
    this.selectedRepairCenters = [];
    this.bireItemSiteDTODeletedList = [];
    this.bireItemSiteDTOAddedList = [];
    this.bireItemSiteDTOUpdatedList = [];

    this.causeOfRemovalList = [];
    this.causeOfRemovalCols = [];
    this.selectedCauseOfRemoval = [];
    this.bireReturnItemDTOAddedList = [];
    this.bireReturnItemDTODeletedList = [];

    this.itemSonFatherCols = [];
    this.itemFatherList = [];
    this.selectedItemFathers = [];

    this.itemSonList = [];
    this.selectedItemSons = [];
    this.removeDataStructureTab = [];
    this.saveStructureTab = [];

    this.tasksCols = [];
    this.tasksList = [];
    this.selectedTasks = [];
    this.bireTaskItemAddedList = [];
    this.bireTaskItemDeletedList = [];

    this.createBireVersionMeasureDTOList = [];
    this.updateBireVersionMeasureDTOList = [];
    this.removeBireVersionMeasureDTOIdList = [];

    this.statisticsCols = [];
    this.statisticsList = [];
    this.selectedStatistics = [];

    this.dynamicAttributesForItem = [];
    this.bireAttributesForItem = [];
    this.bireItemAttributeDTO = [];

    this.damagesCols = [];
    this.damagesList = [];
    this.selectedDamages = [];
    this.bireDamageItemDTOIdRemoveList = [];
    this.bireDamageItemDTOAddedList = [];

    this.refMeasurementList = [];
    this.selectedRefMeasurement = [];
    this.createBireVersionMeasureDTOList = [];
    this.updateBireVersionMeasureDTOList = [];

    this.selectedPartNumber = [];
    this.bireItemVersionDTOAddedList = [];
    this.bireItemVersionDTODeletedList = [];
    this.bireVersionPnDTOIdDeletedList = [];

    this.localisationList = [];
    this.selectedLocalisation = [];
    this.localisationCols = [];
    this.bireLocalisationItemDTOAddedList = [];
    this.bireLocalisationItemDTOIdRemoveList = [];

    this.damLocTasCols = [];
    this.selectedDamLocTask = [];
    this.createBireDamLocTaskDTOList = [];
    this.removeBireDamLocTaskDTOIdList = [];

    this.itemVersions = [];
    this.partNumberTableList = [];
    this.partNumberVersionList = [];
    this.partNumberVersionSelected = undefined;
    this.partNumberMap = new Map<string, PartNumberRow[]>();
    this.packNumberMap = new Map<string, BirePackBaseOptionDTO>();
    this.bireTils = [];
    this.listOfAllCauseOfRemoval = [];

    this.documentsTable = [];
    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];

    this.causeTypeList = [];

    this.dataItem = {
      componentId: 'TilPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };

    this.showTILDialog = false;
    this.showRepairCenterDialog = false;
    this.showCauseOfRemovalDialog = false;
    this.showMaintenanceStatDialog = false;
    this.showConfigPackDialog = false;

    this.referRadio = 'referNHA';

    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.deleteApi = this.productStructureHistoryApi.removeHfObjectByPk;

    this.createBirePackBaseOptionList = [];
    this.updateBirePackBaseOptionList = [];
    this.removeBirePackBaseOptionList = [];
    this.createBirePackEvolutionDTOList = [];
    this.updateBirePackEvolutionDTOList = [];
    this.packBaseOptionCode = [];
    this.packNumberSelected = undefined;
    this.currentPackNumber = {};
    this.packTypeList = [];
    this.packNumberList = [];
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_ITEM_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!this.isCreateOpenMode && this.componentData.objectId) {
        this.bireItemDTO = this.serializationService.deserialize(this.componentData.objectId);
        this.initVersionsData();

        let context = `${this.bireItemDTO.chapter}-${this.bireItemDTO.section}-${this.bireItemDTO.subject}`;
        context += `-${this.bireItemDTO.sheet}-${this.bireItemDTO.marks}`;

        this.subtitle = context;
        this.displayComponentContext(context, this.isCreateOpenMode);

        this.initDropdown();
        this.initTableCols();
        this.initItemData();
      } else {
        this.bireItemDTO = {};
        const context = 'tab.createMode';
        this.displayComponentContext(context, this.isCreateOpenMode);
        this.initDropdown();
        this.findBireAttributesByCategory();
      }
    }

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForItem = this.dynamicAttributesService.from(this.bireAttributesForItem);
    });

    this.initTableCols();
    this.loadStatusList();
  }

  private loadStatusList() {
    this.propertiesService.getValue(GenericPropertyConstants.OBJECT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });
  }

  private initVersionsData(): void {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
    this.itemVersions = [];
    this.itemFormService.findBireItemVersions(bireItemDTOId).subscribe((results) => {
      if (!!results) {
        results.forEach((data: LabelValue<string>) => {
          this.itemVersions.push(data.value);
        });
      }
    });
  }

  public bindToc() {
    const mainDataKey = 'page.mainData';
    const generalKey = this.getTranslateKey('general');
    const partNumberKey = this.getTranslateKey('partNumbers');
    const structureKey = this.getTranslateKey('structure');
    const refMeasurementKey = this.getTranslateKey('refMeasurement');
    const damagesLocalisationKey = this.getTranslateKey('taskDamagesLocalisation');
    const confPackKey = this.getTranslateKey('configurationPacks');
    const maintenanceKey = this.getTranslateKey('maintenance');

    this.translateService
      .get([
        mainDataKey,
        generalKey,
        partNumberKey,
        structureKey,
        refMeasurementKey,
        damagesLocalisationKey,
        confPackKey,
        maintenanceKey
      ])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const generalLabel = !!results ? results[generalKey] : 'Additional Information';
        const partNumberLabel = !!results ? results[partNumberKey] : 'Part Numbers';
        const structureLabel = !!results ? results[structureKey] : 'Structure';
        const refMeasurementLabel = !!results ? results[refMeasurementKey] : 'Reference Measurement';
        const damagesLocalisationLabel = !!results ? results[damagesLocalisationKey] : 'Task, Damages and Localisation';

        const confPackLabel = !!results ? results[confPackKey] : 'Configuration Packs';
        const maintenanceLabel = !!results ? results[maintenanceKey] : 'Maintenance';

        this.toc = [
          {
            id: 'mainInfoAnchor',
            anchor: this.mainInfoAnchor,
            label: mainDataLabel
          },
          {
            id: 'partNumber',
            anchor: this.partNumber,
            label: partNumberLabel
          },
          {
            id: 'general',
            anchor: this.general,
            label: generalLabel
          },
          {
            id: 'structure',
            anchor: this.structure,
            label: structureLabel
          },
          {
            id: 'refMeasurement',
            anchor: this.refMeasurement,
            label: refMeasurementLabel
          },
          {
            id: 'taskDamagesLocalisation',
            anchor: this.taskDamagesLocalisation,
            label: damagesLocalisationLabel
          }
        ];

        if (!!this.bireItemDTO.configurableArticle) {
          this.toc.push({
            id: 'configurationPacks',
            anchor: this.configurationPacks,
            label: confPackLabel
          });
        }

        this.toc.push({
          id: 'maintenance',
          anchor: this.maintenance,
          label: maintenanceLabel
        });

        super.selectPageTocEntry('mainInfoAnchor');
      });
  }

  /**
   * Initilize table cols
   */
  private initTableCols(): void {
    this.evolutionTableCols = [
      { field: 'evolutionNumber', alignment: 'left' },
      { field: 'evolutionRemarks', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'quantityBefore', alignment: 'left' },
      { field: 'actionTypeCode', alignment: 'left' },
      { field: 'pnPnCode', alignment: 'left' },
      { field: 'quantityAfter', alignment: 'left' },
      // { field: 'evolutionRevisionNumber', alignment: 'left' },
      { field: 'applicability', alignment: 'left' }
    ];

    this.documentsTableCols = [
      { field: 'docName', alignment: 'left', width: '47.5%' },
      { field: 'docSource', alignment: 'left', width: '12.5%' },
      { field: 'docExtension', alignment: 'left', width: '12.5%' },
      { field: 'docSize', alignment: 'left', width: '12.5%' },
      { field: 'docPublicationDate', alignment: 'left', width: '15%' }
    ];

    this.configurationPackCols = [
      { field: 'packBaseOptionCode', alignment: 'left' },
      { field: 'packDescription', alignment: 'left' },
      { field: 'packType', alignment: 'left' }
    ];

    this.maintenanceProgramCols = [{ field: 'maintenanceProgram', alignment: 'left' }];

    this.technicalLevelCols = [{ field: 'technicalLevel', alignment: 'left' }];

    this.repairCentersCols = [
      { field: 'repairCenterCode', alignment: 'left' },
      { field: 'exchangeType', alignment: 'left' }
    ];

    this.causeOfRemovalCols = [
      { field: 'returnReasonCode', alignment: 'left', width: '12.5%' },
      { field: 'returnReasonName', alignment: 'left', width: '25%' },
      { field: 'returnReasonDescription', alignment: 'left', width: '50%' },
      { field: 'causeTypeLabel', alignment: 'left', width: '12.5%' }
    ];

    this.statisticsCols = [
      { field: 'environmentCode', alignment: 'left', width: '20%' },
      { field: 'kPourcentCode', alignment: 'left', width: '20%' },
      { field: 'repairCenterCode', alignment: 'left', width: '30%' },
      { field: 'startDateLabel', alignment: 'left', width: '10%' },
      { field: 'endDateLabel', alignment: 'left', width: '10%' },
      { field: 'probability', alignment: 'left', width: '10%' }
    ];

    this.partNumberTableCols = [
      { field: 'pn', alignment: 'left', width: '15%' },
      { field: 'isn', alignment: 'left', width: '10%' },
      { field: 'ipcQuantity', alignment: 'left', width: '12.5%' },
      { field: 'mplQuantity', alignment: 'left', width: '12.5%' },
      { field: 'alternatePn', alignment: 'left', width: '50%' }
    ];

    this.itemSonFatherCols = [
      { field: 'item', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '40%' },
      { field: 'itemFamily', alignment: 'left', width: '15%' },
      { field: 'functionCode', alignment: 'left', width: '15%' },
      { field: 'itemNumber', alignment: 'left', width: '15%' }
    ];

    this.tasksCols = [
      { field: 'itemVersion', alignment: 'left', width: '8.5%' },
      { field: 'code', alignment: 'left', width: '15%' },
      { field: 'version', alignment: 'left', width: '6.5%' },
      { field: 'designation', alignment: 'left', width: '55%' },
      { field: 'type', alignment: 'left', width: '15%' }
    ];

    this.damagesCols = [
      { field: 'versionNumber', alignment: 'left', width: '22.5%' },
      { field: 'damageCode', alignment: 'left', width: '17.5%' },
      { field: 'damageDescription', alignment: 'left', width: '60%' }
    ];

    this.localisationCols = [
      { field: 'versionNumber', alignment: 'left', width: '22.5%' },
      { field: 'localisationCode', alignment: 'left', width: '17.5%' },
      { field: 'localisationDescription', alignment: 'left', width: '60%' }
    ];

    this.refMeasurementCols = [
      { field: 'versionNumber', alignment: 'left' },
      { field: 'counterCode', alignment: 'left' },
      { field: 'referenceValue', alignment: 'left' },
      { field: 'limitDateLabel', alignment: 'left' }
    ];

    this.damLocTasCols = [
      { field: 'versionNumber', alignment: 'left', width: '10%' },
      { field: 'damage', alignment: 'left', width: '20%' },
      { field: 'localisation', alignment: 'left', width: '20%' },
      { field: 'taskCode', alignment: 'left', width: '12.5%' },
      { field: 'taskVersion', alignment: 'left', width: '7.5%' },
      { field: 'taskDesignation', alignment: 'left', width: '30%' }
    ];

    this.evolutionPacksTableCols = [
      { field: 'control', alignment: 'left', width: '10%' },
      { field: 'evolutionNumber', alignment: 'left', width: '15%' },
      { field: 'revisionNumber', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '57%' }
    ];
  }

  /**
   * Init Screen
   */
  private initItemData(): void {
    this.initItemGeneralData();
    this.getIsMELIsIllustratedSelected();
    this.initEvolutionData();
    this.initConfigurationPacksData();
    this.initMaintenanceProgramData();
    this.statisticsData();
    this.initTechnicalLevelData();
    this.repairCenterData();
    this.causeOfRemovalData();
    this.partNumberData();
    this.findBireAttributesByCategory();
    this.initStructureData();
    this.initTaskDamagesLocalisationData();
    this.packNumberData();
  }

  /**
   * On click edit button
   */
  public editItem(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  /**
   * On click refresh button
   */
  public refreshItem(): void {
    this.init();
    this.ngOnInit();
    this.initTableCols();
  }

  /**
   * On click Cancel
   */
  public cancelItem(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.refreshItem();
  }

  /**
   * On Radio change
   */
  public radChange() {
    this.bireItemDTO.fixChapter = undefined;
    this.bireItemDTO.fixSection = undefined;
    this.bireItemDTO.fixSubject = undefined;
    this.bireItemDTO.fixSheet = undefined;
    this.bireItemDTO.fixMarks = undefined;

    this.bireItemDTO.nhaChapter = undefined;
    this.bireItemDTO.nhaSection = undefined;
    this.bireItemDTO.nhaSubject = undefined;
    this.bireItemDTO.nhaSheet = undefined;
    this.bireItemDTO.nhaMarks = undefined;
  }

  private loadItemFamilyList(): void {
    this.itemFormService.getEquipmentFunctionList().subscribe((results) => {
      this.itemFamilyList = ListUtils.orEmpty(results);
    });
  }

  /**
   * Method to init dropdowns
   */
  private initDropdown() {
    // Dissassemby group
    if (
      !this.isCreateOpenMode &&
      !!this.bireItemDTO &&
      !!this.bireItemDTO.familyCode &&
      !!this.bireItemDTO.structureType &&
      !!this.bireItemDTO.variantCode
    ) {
      const bireVariantVersionDTOId: BireVariantVersionDTOId = {
        familyCode: this.bireItemDTO.familyCode,
        structureType: this.bireItemDTO.structureType,
        variantCode: this.bireItemDTO.variantCode
      };

      this.itemFormService
        .findBireUnmountAssemblysByFamilyAndVariantCodes(bireVariantVersionDTOId)
        .subscribe((results: BireUnmountAssemblyDTO[]) => {
          this.bireUnmountAssemblyList = results;
          results.forEach((res: BireUnmountAssemblyDTO) => {
            if (!!res && !!res.unmountCode) {
              this.unmountCodeList.push({
                label: res.unmountCode,
                value: res.unmountCode
              });
            }
          });
        });
    }

    // Pack Type DropDown
    this.itemFormService.getPackType().subscribe((results) => {
      this.packTypeList = results;
    });

    // Family Variant dropdown
    this.itemSearchService.findBireVariantVersionsByFamilyFunctionItemAlternative().subscribe((results) => {
      this.bireVariantVersionList = results;
      const list: LabelValue<string>[] = [];
      results.forEach((element) => {
        list.push(element.labelValue);
      });
      this.familyVariantList = list || [];
    });

    // Floc Type dropdown
    this.propertiesService.getValue(GenericPropertyConstants.FLOC_TYPE_MAP).subscribe((results) => {
      this.flocTypeList = results;
    });

    // Item Type list dropdown
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_TYPE_MAP).subscribe((results) => {
      this.itemTypeList = results;
    });

    // Life restriction
    this.propertiesService.getValue(GenericPropertyConstants.LIFE_RESTRICTION_TYPE_MAP).subscribe((results) => {
      this.lifeRestrictionTypeList = results;
    });

    // Replacable unit type
    this.propertiesService.getValue(GenericPropertyConstants.MAINTENANCE_TYPE_MAP).subscribe((results) => {
      this.replacableUnitTypeList = results;
    });

    // Item family code list
    this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP).subscribe((results) => {
      this.itemFamilyCodeList = results;
    });

    // Level Dropdown
    const maxLevel = 9;
    for (let i = 0; i <= maxLevel; i++) {
      this.levelList.push({
        label: i.toString(),
        value: i.toString()
      });
    }

    // Get dropdown list
    this.itemFormService.findAllBireTils().subscribe((results: BireTilDTO[]) => {
      this.bireTils = results;
    });

    // Repair Center List
    this.itemFormService.findAllBireReturnReasons().subscribe((results: BireReturnReasonDTO[]) => {
      this.listOfAllCauseOfRemoval = results;
    });

    this.getItemTypeMap();

    // K Pourcent List
    this.itemFormService.findBireKPourcentList().subscribe((results: LabelValue<string>[]) => {
      this.kPourcentList = results;
    });

    // Maintenance Type
    this.itemFormService.findBireMaintenanceEnvironmentsList().subscribe((results: LabelValue<string>[]) => {
      this.maintenanceTypeList = results;
    });

    // Repair Center List
    this.itemFormService.findAllBireSites().subscribe((results: LabelValue<string>[]) => {
      results.forEach((res) => {
        res.label = `${res.value}-${res.label}`;
        if (res.value === 'Air base 1') {
          res.label = 'Air base 1';
        }
      });
      this.repairCenterList = results;
    });

    // Exchange Type List
    this.propertiesService.getValue(GenericPropertyConstants.EXCHANGE_TYPE_MAP).subscribe((results) => {
      this.exchangeTypeList = results;
    });
  }

  /**
   * Event on chaning assembly dropdown
   */
  public changeDissassembly() {
    const unmountCodeDTO: BireUnmountAssemblyDTO = this.bireUnmountAssemblyList.filter(
      (res) => res.unmountCode === this.bireItemDTO.unmountCode
    )[0];

    if (!!unmountCodeDTO) {
      this.bireItemDTO.unmFamilyCode = unmountCodeDTO.familyCode;
      this.bireItemDTO.unmStructureType = unmountCodeDTO.structureType;
      this.bireItemDTO.unmVariantCode = unmountCodeDTO.variantCode;
    }
  }

  private getItemTypeMap() {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_ITEM_TYPE_MAP).subscribe((results) => {
      this.taskItemList = results;
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

  /**
   * Method to fill Item screen in Edit mode
   */
  private initItemGeneralData() {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();

    this.itemFormService.findBireItem(bireItemDTOId).subscribe((results) => {
      this.bireItemDTO = results;

      // Getting family variant
      this.selectedFamilyVariant = `${this.bireItemDTO.familyCode}-${this.bireItemDTO.variantCode}`;
      this.referRadio = !!this.bireItemDTO.nhaChapter ? 'referNHA' : 'referToVal';

      this.bindToc();
      this.loadDocumentsTable();
    });
  }

  /**
   * Fetch data for Evolution tab
   */
  private initEvolutionData() {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService
        .findBireItemPnEvolutionsByItem(bireItemDTOId)
        .subscribe((results: BireItemPnEvolutionCustomDTO[]) => {
          results.forEach((res) => {
            if (!!res.actionTypeCode) {
              this.getActionTypeLabel(res.actionTypeCode, (label) => {
                res.actionTypeCode = label;
                this.evolutionTableList = [...this.evolutionTableList, res];
              });
            } else {
              this.evolutionTableList = [...this.evolutionTableList, res];
            }
          });
        });
    }
  }

  private getActionTypeLabel(code: string, callback): void {
    this.itemFormService.findBireActionTypesByActionTypeCode(code).subscribe((results) => {
      callback(results[0].label);
    });
  }

  /**
   * Fetch data for Configuration packs table
   */
  private initConfigurationPacksData(): void {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.findBirePackBaseOptionsByItem(bireItemDTOId).subscribe((results) => {
        this.configurationPackList = results;
      });
    }
  }

  /**
   * Fetch data for Maintenance Program table
   */
  private initMaintenanceProgramData(): void {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.findBireMaintenancePlansByItem(bireItemDTOId).subscribe((results) => {
        this.maintenanceProgramList = ListUtils.orEmpty(results).map((result) => {
          let maintenanceProgram = StringUtils.orEmpty(result.planCode);
          maintenanceProgram += StringUtils.isNullOrEmpty(result.planDescription) ? '' : ` - ${result.planDescription}`;

          return {
            maintenanceProgram
          };
        });
      });
    }
  }

  /**
   * Data for TIL table
   */
  private initTechnicalLevelData(): void {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.findBireTilItemsByItem(bireItemDTOId).subscribe((results) => {
        this.technicalLevelList = ListUtils.orEmpty(results).map((result) => {
          let technicalLevel = `${result.technicalLevel}`;
          technicalLevel += StringUtils.isNullOrEmpty(result.tilDescription) ? '' : ` - ${result.tilDescription}`;

          return {
            technicalLevel,
            _obj: result
          };
        });
      });
    }
  }

  /**
   * Data for repair center table
   */
  private repairCenterData(): void {
    this.repairCentersList = [];
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.findBireItemSitesByItem(bireItemDTOId).subscribe((results) => {
        results.forEach((dto) => {
          if (!!dto.repairCenterCode) {
            dto.repairCenterCode = this.repairCenterList.filter((res: LabelValue<string>) => {
              if (res.value === 'Air base 1') {
                res.label = 'Air base 1';
              }

              return res.value === dto.repairCenterCode;
            })[0].label;
          }
          if (!!dto.exchangeType) {
            dto.exchangeType = this.exchangeTypeList.filter(
              (res: LabelValue<string>) => res.value === dto.exchangeType
            )[0].label;
          }

          this.repairCentersList.push(dto);
        });

        this.repairCentersList = [...this.repairCentersList];
      });
    }
  }

  /**
   * Data for cause of removal table
   */
  private causeOfRemovalData(): void {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.findBireReturnItem(bireItemDTOId).subscribe((results) => {
        this.causeOfRemovalList = results;
      });
    }
  }

  /**
   * Fetch data for statistics
   */
  private statisticsData(): void {
    this.statisticsList = [];
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService
        .findBireItemMaintenanceByItem(bireItemDTOId)
        .subscribe((results: BireItemMaintenanceCustomDTO[]) => {
          const cloneBireItemMaintenance: BireItemMaintenanceCustomDTO[] = [];
          results.forEach((dto) => {
            if (!!dto) {
              if (!!dto.environmentCode) {
                dto.environmentCode = this.maintenanceTypeList.filter(
                  (res: LabelValue<string>) => res.value === dto.environmentCode
                )[0].label;
              }

              if (!!dto.kPourcentCode) {
                dto.kPourcentCode = this.kPourcentList.filter(
                  (res: LabelValue<string>) => res.value === dto.kPourcentCode
                )[0].label;
              }

              if (!!dto.repairCenterCode) {
                dto.repairCenterCode = this.repairCenterList.filter(
                  (res: LabelValue<string>) => res.value === dto.repairCenterCode
                )[0].label;
              }
            }

            dto.startDateLabel = this.dateService.dateToString(dto.startDate);
            dto.endDateLabel = this.dateService.dateToString(dto.endDate);
            cloneBireItemMaintenance.push(dto);
          });
          this.statisticsList = [...cloneBireItemMaintenance];
        });
    }
  }

  public onSelectPartNumberVersion(): void {
    if (!!this.partNumberMap.get((this.partNumberVersionSelected as TreeNode).data)) {
      this.partNumberTableList = [
        ...(this.partNumberMap.get((this.partNumberVersionSelected as TreeNode).data) as PartNumberRow[])
      ];

      if (this.partNumberTableList.length === 1 && !this.partNumberTableList[0].pn) {
        this.partNumberTableList = [];
      }
    } else {
      this.partNumberTableList = [];
    }
  }

  /**
   * Fetch data for part number
   */
  private partNumberData(): void {
    if (!this.isCreateOpenMode) {
      const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();
      this.itemFormService.getPartNumberStructure(bireItemDTOId).subscribe((results) => {
        const filteredResults = ListUtils.orEmpty(results).filter((result) => !!result.versionNumber);

        this.partNumberVersionList = filteredResults
          .map((result) => result.versionNumber)
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((version) => {
            return {
              label: `Version ${version}`,
              data: version as string
            };
          });

        filteredResults.forEach((result) => {
          const version = result.versionNumber as string;
          if (!this.partNumberMap.has(version)) {
            this.partNumberMap.set(version, []);
          }

          const alternatePn = ListUtils.orEmpty(result.alternatePn)
            .map((pn) => {
              let formattedPn = `${pn.pnPnCode}`;
              formattedPn += StringUtils.isNullOrEmpty(pn.interchangeability) ? '' : ` - ${pn.interchangeability}`;

              return formattedPn;
            })
            .join(' ; ');
          const partNumberRow: PartNumberRow = {
            alternatePn,
            pn: StringUtils.orEmpty(result.pn),
            isn: StringUtils.orEmpty(result.isn),
            ipcQuantity: StringUtils.orEmpty(result.ipcQuantity),
            mplQuantity: StringUtils.orEmpty(result.mplQuantity),
            _obj: result
          };

          if (!!this.partNumberMap.get(version) && (this.partNumberMap.get(version) as PartNumberRow[]).length !== 0) {
            this.partNumberMap.set(version, [...(this.partNumberMap.get(version) as PartNumberRow[]), partNumberRow]);
          } else {
            this.partNumberMap.set(version, [partNumberRow]);
          }

          if (this.partNumberVersionList.length > 0) {
            this.partNumberVersionSelected = this.partNumberVersionList[0];
            this.onSelectPartNumberVersion();
          }
        });

        // this.updateRowGroupMetaData();
        this.initReferenceMeasurementData();
        this.initDamagesData();
        this.initLocalisationData();
        this.bireDamLocTaskData();
      });
    }
  }

  /**
   * Update row group of part number on every operation on table
   */
  // private updateRowGroupMetaData() {
  //   this.rowGroupMetadata = {};
  //   if (this.partNumberTableList) {
  //     for (let i = 0; i < this.partNumberTableList.length; i++) {
  //       const rowData = this.partNumberTableList[i];
  //       const versionNumber = rowData.versionNumber as string;
  //       if (i === 0) {
  //         this.rowGroupMetadata[versionNumber] = { index: 0, size: 1 };
  //       } else {
  //         const previousRowData = this.partNumberTableList[i - 1];
  //         const previousRowGroup = previousRowData.versionNumber;
  //         if (versionNumber === previousRowGroup) {
  //           this.rowGroupMetadata[versionNumber].size++;
  //         } else {
  //           this.rowGroupMetadata[versionNumber] = { index: i, size: 1 };
  //         }
  //       }
  //     }
  //   }
  // }

  /**
   * Search Item OVS
   */
  public searchItems(source: string) {
    this.itemDialogSource = source;
    let componentObj: BireItemDTO;

    componentObj =
      !!this.componentData && !!this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId)
        : {};

    if (!this.isReadOpenMode) {
      this.showItemsDialog = true;
    }
  }

  /**
   * Method call after item has been selected
   *
   */
  public setSelectedItems(selectedObject: BireItemDTO) {
    if (selectedObject) {
      if (this.itemDialogSource === 'fixedElement') {
        this.bireItemDTO.fixChapter = selectedObject.chapter;
        this.bireItemDTO.fixSheet = selectedObject.sheet;
        this.bireItemDTO.fixSubject = selectedObject.subject;
        this.bireItemDTO.fixSection = selectedObject.section;
        this.bireItemDTO.fixMarks = selectedObject.marks;
      } else if (this.itemDialogSource === 'referForNHA') {
        this.bireItemDTO.nhaChapter = selectedObject.chapter;
        this.bireItemDTO.nhaSheet = selectedObject.sheet;
        this.bireItemDTO.nhaSubject = selectedObject.subject;
        this.bireItemDTO.nhaSection = selectedObject.section;
        this.bireItemDTO.nhaMarks = selectedObject.marks;
      } else {
        this.bireItemDTO.referChapter = selectedObject.chapter;
        this.bireItemDTO.referSheet = selectedObject.sheet;
        this.bireItemDTO.referSubject = selectedObject.subject;
        this.bireItemDTO.referSection = selectedObject.section;
        this.bireItemDTO.referMarks = selectedObject.marks;
      }
    }
    this.showItemsDialog = false;
  }

  /**
   * Fetch data for is mel and is illustrated
   */
  private getIsMELIsIllustratedSelected() {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();

    this.itemFormService.getIsMELIsIllustratedSelected(bireItemDTOId).subscribe(
      (results: BireItemAttributeDTO[]) => {
        if (results.length !== 0) {
          results.forEach((res) => {
            if (res.attributeId === '1') {
              this.isillustratedSelected = res.attributeValue === 'true' ? true : false;
              if (this.isillustratedSelected) {
                this.isIllustratedChange();
              }
            }
            if (res.attributeId === '6') {
              this.isMelSelected = res.attributeValue === 'true' ? true : false;
            }
          });
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('getIsMELIsIllustratedSelected'));
      }
    );
  }

  /**
   * Find list of attrubutes
   */
  private findBireAttributesByCategory() {
    this.bireAttributesForItem = [];
    this.itemFormService
      .findBireItemAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ITEM_KEY)
      .subscribe((results) => {
        this.bireAttributesForItem = [...results];
        setTimeout(() => {
          this.dynamicAttributesForItem = this.dynamicAttributesService.from(this.bireAttributesForItem);
          this.getBireItemAttributes();
        });
      });
  }

  /**
   * Get attribute data
   */
  public getBireItemAttributes(): void {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();

    this.itemFormService.findBireItemAttributesByItem(bireItemDTOId).subscribe(
      (results) => {
        results.forEach((attr) => {
          switch (attr.attributeId) {
            case '11': {
              this.note1 = attr.attributeValue;
              break;
            }
            case '12': {
              this.note2 = attr.attributeValue;
              break;
            }
            case '13': {
              this.note3 = attr.attributeValue;
              break;
            }
            case '2': {
              this.isDocPresent = !!attr.attributeValue ? true : false;
              this.docURL = attr.attributeValue;
              break;
            }
            default: {
              break;
            }
          }
        });
        this.bireItemAttributeDTO = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributesForItem, this.bireItemAttributeDTO);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('getBireItemAttributes'));
      }
    );
  }

  /**
   * ITEM OPERATIONS
   */

  // ADD
  public createItem(): void {
    this.dataItem = {
      componentId: 'FamilyFormComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showTILDialog = true;
  }

  // ADD EVENT ITEM
  public addNewItem(newItem: BireTilItemDTO) {
    const searchInDisplayedList = this.technicalLevelList.find(
      // tslint:disable-next-line:triple-equals
      (value) => value._obj.technicalLevel == newItem.technicalLevel
    );

    if (!searchInDisplayedList) {
      if (!!newItem && !!newItem.technicalLevel) {
        const bireTilItemDTO: BireTilItemDTO = {
          technicalLevel: newItem.technicalLevel,
          chapter: this.bireItemDTO.chapter,
          familyCode: this.bireItemDTO.familyCode,
          marks: this.bireItemDTO.marks,
          section: this.bireItemDTO.section,
          sheet: this.bireItemDTO.sheet,
          structureType: this.bireItemDTO.structureType,
          subject: this.bireItemDTO.subject,
          variantCode: this.bireItemDTO.variantCode
        };

        const bireTilDTO = this.bireTils.filter((res) => {
          // tslint:disable-next-line:triple-equals
          return res.technicalLevel == newItem.technicalLevel;
        })[0];

        if (!!bireTilDTO) {
          const dto: BireTilDTO = {
            technicalLevel: newItem.technicalLevel,
            tilDescription: bireTilDTO.tilDescription,
            tilName: bireTilDTO.tilName
          };
          let technicalLevel = `${dto.technicalLevel}`;
          technicalLevel += StringUtils.isNullOrEmpty(dto.tilDescription) ? '' : ` - ${dto.tilDescription}`;
          const technicalLevelRow: TechnicalLevelRow = {
            technicalLevel,
            _obj: dto
          };
          this.technicalLevelList = [...this.technicalLevelList, technicalLevelRow];
        }

        this.bireTilItemDTOAddedList.push(bireTilItemDTO);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyItemExisting'));
    }
    this.showTILDialog = false;
  }

  // DELETE ITEM
  public deleteSelectedItem() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedTILs'),
      accept: () => {
        this.selectedTechnicalLevel.forEach((element) => {
          const searchInAddedList = this.bireTilItemDTOAddedList.find(
            (value) => value.technicalLevel === element._obj.technicalLevel
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireTilItemDTOAddedList.indexOf(searchInAddedList);
            this.bireTilItemDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireTilItemDTOId: BireTilItemDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              technicalLevel: element._obj.technicalLevel as number,
              variantCode: this.bireItemDTO.variantCode as string
            };
            this.bireTilItemDTODeletedList.push(bireTilItemDTOId);
          }

          const indexInDisplayedList = this.technicalLevelList.indexOf(element);
          this.technicalLevelList.splice(indexInDisplayedList, 1);
        });
        this.selectedTechnicalLevel = [];
      }
    });
  }

  /**
   * REPAIR CENTER OPERATIONS
   */
  public createRepairCenter(): void {
    this.dataRepairCenter = {
      componentId: 'RepairCenterPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showRepairCenterDialog = true;
  }

  // Edit repair center
  public editRepairCenterDialog() {
    if (this.selectedRepairCenters.length === 1) {
      this.currentCenterIndex = this.repairCentersList.indexOf(this.selectedRepairCenters[0]);
      const cloneDTO = { ...this.selectedRepairCenters[0] };
      cloneDTO.repairCenterCode = this.repairCenterList.filter(
        (res: LabelValue<string>) => res.label === cloneDTO.repairCenterCode
      )[0].value;

      if (!!cloneDTO.exchangeType) {
        cloneDTO.exchangeType = this.exchangeTypeList.filter(
          (res: LabelValue<string>) => res.label === cloneDTO.exchangeType
        )[0].value;
      }

      this.dataRepairCenter = {
        componentId: 'RepairCenterPopupComponent',
        selectedRow: undefined,
        object: cloneDTO,
        openMode: ComponentOpenMode.Write
      };
      this.showRepairCenterDialog = true;
    }
  }

  // Update event
  public updateRepairCenter(updatedCenter: BireItemSiteDTO) {
    const previousRatingObject = this.repairCentersList[this.currentCenterIndex];
    let isFound = false;

    const cloneDTO = { ...previousRatingObject };
    cloneDTO.repairCenterCode = this.repairCenterList.filter(
      (res: LabelValue<string>) => res.value === updatedCenter.repairCenterCode
    )[0].label;

    cloneDTO.exchangeType = this.exchangeTypeList.filter(
      (res: LabelValue<string>) => res.value === updatedCenter.exchangeType
    )[0].label;

    const searchInAddedList = this.bireItemSiteDTOAddedList.find(
      (value) => value.repairCenterCode === cloneDTO.repairCenterCode && value.exchangeType === cloneDTO.exchangeType
    );
    const searchInUpdatedList = this.bireItemSiteDTOUpdatedList.find(
      (value) => value.repairCenterCode === cloneDTO.repairCenterCode && value.exchangeType === cloneDTO.exchangeType
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireItemSiteDTOAddedList.indexOf(searchInAddedList);
      this.repairCentersList.forEach((res) => {
        if (
          res.repairCenterCode === updatedCenter.repairCenterCode &&
          res.exchangeType === updatedCenter.exchangeType
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
      } else {
        this.bireItemSiteDTOAddedList[indexInAddedList] = updatedCenter;
      }
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireItemSiteDTOUpdatedList.indexOf(searchInUpdatedList);
      this.repairCentersList.forEach((res) => {
        if (
          res.repairCenterCode === updatedCenter.repairCenterCode &&
          res.exchangeType === updatedCenter.exchangeType
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
      } else {
        this.bireItemSiteDTOUpdatedList[indexInUpdatedList] = updatedCenter;
      }
    } else {
      this.repairCentersList.forEach((res) => {
        if (
          res.repairCenterCode === updatedCenter.repairCenterCode &&
          res.exchangeType === updatedCenter.exchangeType
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
      } else {
        this.bireItemSiteDTOUpdatedList.push(updatedCenter);
      }
    }
    this.selectedStatistics = [];

    const clone = { ...updatedCenter };

    clone.repairCenterCode = this.repairCenterList.filter(
      (res: LabelValue<string>) => res.value === updatedCenter.repairCenterCode
    )[0].label;

    clone.exchangeType = this.exchangeTypeList.filter(
      (res: LabelValue<string>) => res.value === updatedCenter.exchangeType
    )[0].label;

    this.repairCentersList[this.currentCenterIndex] = clone;
    this.showRepairCenterDialog = false;
  }

  // ADD EVENT SITE
  public addNewRepairCenter(newCenter: BireItemSiteDTO) {
    const cloneCenter = { ...newCenter };
    cloneCenter.repairCenterCode = this.repairCenterList.filter((res: LabelValue<string>) => {
      if (res.value === 'Air base 1') {
        res.label = 'Air base 1';
      }

      return res.value === cloneCenter.repairCenterCode;
    })[0].label;

    if (!!cloneCenter.exchangeType) {
      cloneCenter.exchangeType = this.exchangeTypeList.filter(
        (res: LabelValue<string>) => res.value === cloneCenter.exchangeType
      )[0].label;
    }

    const searchInDisplayedList = this.repairCentersList.find(
      (value) => value.repairCenterCode === cloneCenter.repairCenterCode
    );

    if (!searchInDisplayedList) {
      if (!!newCenter) {
        newCenter.chapter = this.bireItemDTO.chapter;
        newCenter.familyCode = this.bireItemDTO.familyCode;
        newCenter.marks = this.bireItemDTO.marks;
        newCenter.section = this.bireItemDTO.section;
        newCenter.sheet = this.bireItemDTO.sheet;
        newCenter.structureType = this.bireItemDTO.structureType;
        newCenter.subject = this.bireItemDTO.subject;
        newCenter.variantCode = this.bireItemDTO.variantCode;

        this.bireItemSiteDTOAddedList.push(newCenter);

        const dto = { ...newCenter };

        dto.repairCenterCode = this.repairCenterList.filter(
          (res: LabelValue<string>) => res.value === dto.repairCenterCode
        )[0].label;

        if (!!dto.exchangeType) {
          dto.exchangeType = this.exchangeTypeList.filter(
            (res: LabelValue<string>) => res.value === dto.exchangeType
          )[0].label;
        }

        this.repairCentersList.push(dto);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyCenterExisting'));
    }
    this.showRepairCenterDialog = false;
  }

  // DELETE Repair CENTER
  public deleteSelectedRepairCenter() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedSites'),
      accept: () => {
        this.selectedRepairCenters.forEach((element) => {
          const searchInAddedList = this.bireItemSiteDTOAddedList.find(
            (value) => value.repairCenterCode === element.repairCenterCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireItemSiteDTOAddedList.indexOf(searchInAddedList);
            this.bireItemSiteDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireItemSiteDTOId: BireItemSiteDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              repairCenterCode: element.repairCenterCode as string
            };

            const dto = { ...bireItemSiteDTOId };

            dto.repairCenterCode = this.repairCenterList.filter(
              (res: LabelValue<string>) => res.label === dto.repairCenterCode
            )[0].value;

            this.bireItemSiteDTODeletedList.push(dto);
          }

          const indexInDisplayedList = this.repairCentersList.indexOf(element);
          this.repairCentersList.splice(indexInDisplayedList, 1);
        });
        this.selectedRepairCenters = [];
      }
    });
  }

  /**
   * CAUSE OF REMOVAL Operations
   */
  // ADD
  public createRemovalCause(): void {
    this.dataRepairCenter = {
      componentId: 'CauseOfRemovalPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showCauseOfRemovalDialog = true;
  }

  // ADD EVENT
  public addNewCause(newCenter: BireReturnItemDTO[]) {
    newCenter.forEach((element) => {
      const searchInDisplayedList = this.causeOfRemovalList.find(
        (value) => value.returnReasonCode === element.returnReasonCode
      );

      if (!searchInDisplayedList) {
        if (!!element) {
          const elementDTO: BireReturnItemDTO = {
            chapter: this.bireItemDTO.chapter as string,
            familyCode: this.bireItemDTO.familyCode as string,
            marks: this.bireItemDTO.marks as string,
            section: this.bireItemDTO.section as string,
            sheet: this.bireItemDTO.sheet as string,
            structureType: this.bireItemDTO.structureType as string,
            subject: this.bireItemDTO.subject as string,
            variantCode: this.bireItemDTO.variantCode as string,
            returnReasonCode: element.returnReasonCode
          };

          this.bireReturnItemDTOAddedList.push(elementDTO);

          const bireReturnReasonDTO: BireReturnReasonDTO = this.listOfAllCauseOfRemoval.filter((res) => {
            return res.returnReasonCode === element.returnReasonCode;
          })[0];

          if (!!bireReturnReasonDTO) {
            const causeType = this.causeTypeList.find((elt) => elt.value === bireReturnReasonDTO.causeType);
            const dto: BireReturnItemCustomDTO = {
              causeType: bireReturnReasonDTO.causeType,
              causeTypeLabel: causeType ? causeType.label : bireReturnReasonDTO.causeType,
              returnReasonCode: element.returnReasonCode,
              returnReasonDescription: bireReturnReasonDTO.returnReasonDescription,
              returnReasonName: bireReturnReasonDTO.returnReasonName
            };

            this.causeOfRemovalList.push(dto);
          }
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRemovalCauseExisting'));
      }
    });
    this.showCauseOfRemovalDialog = false;
  }

  // DELETE
  public deleteSelectedRemovalCause() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedCauses'),
      accept: () => {
        this.selectedCauseOfRemoval.forEach((element) => {
          const searchInAddedList = this.bireReturnItemDTOAddedList.find(
            (value) => value.returnReasonCode === element.returnReasonCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireReturnItemDTOAddedList.indexOf(searchInAddedList);
            this.bireReturnItemDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireReturnItemDTOId: BireReturnItemDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              returnReasonCode: element.returnReasonCode as string
            };
            this.bireReturnItemDTODeletedList.push(bireReturnItemDTOId);
          }

          const indexInDisplayedList = this.causeOfRemovalList.indexOf(element);
          this.causeOfRemovalList.splice(indexInDisplayedList, 1);
        });
        this.selectedCauseOfRemoval = [];
      }
    });
  }

  /**
   * MAINTENANCE STATS Operations
   */
  public createMaintenanceStats(): void {
    this.dataMaintenanceStats = {
      componentId: 'StatisticsPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showMaintenanceStatDialog = true;
  }

  // OPEN
  public openMaintenanceStatDialog() {
    if (this.selectedStatistics.length === 1) {
      const cloneDTO = { ...this.selectedStatistics[0] };
      cloneDTO.environmentCode = this.maintenanceTypeList.filter(
        (res: LabelValue<string>) => res.label === cloneDTO.environmentCode
      )[0].value;

      cloneDTO.kPourcentCode = this.kPourcentList.filter(
        (res: LabelValue<string>) => res.label === cloneDTO.kPourcentCode
      )[0].value;

      cloneDTO.repairCenterCode = this.repairCenterList.filter(
        (res: LabelValue<string>) => res.label === cloneDTO.repairCenterCode
      )[0].value;

      this.dataMaintenanceStats = {
        componentId: 'StatisticsPopupComponent',
        selectedRow: undefined,
        object: cloneDTO,
        openMode: ComponentOpenMode.Read
      };
      this.showMaintenanceStatDialog = true;
    }
  }

  // ADD EVENT STATS
  public addNewStat(newCenter: BireItemMaintenanceDTO) {
    const envCode = this.maintenanceTypeList.filter(
      (res: LabelValue<string>) => res.value === newCenter.environmentCode
    )[0].label;

    const kPourCode = this.kPourcentList.filter((res: LabelValue<string>) => res.value === newCenter.kPourcentCode)[0]
      .label;

    const repairCenterCode = this.repairCenterList.filter(
      (res: LabelValue<string>) => res.value === newCenter.repairCenterCode
    )[0].label;

    const searchInDisplayedList = this.statisticsList.find(
      (value) =>
        value.repairCenterCode === repairCenterCode &&
        value.kPourcentCode === kPourCode &&
        value.environmentCode === envCode
    );

    if (!searchInDisplayedList) {
      if (!!newCenter) {
        const bireItemMaintenanceDTO: BireItemMaintenanceDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          endDate: newCenter.endDate,
          environmentCode: newCenter.environmentCode,
          kPourcentCode: newCenter.kPourcentCode,
          probability: newCenter.probability,
          repairCenterCode: newCenter.repairCenterCode,
          startDate: newCenter.startDate
        };

        const tableDTO: BireItemMaintenanceCustomDTO = { ...bireItemMaintenanceDTO };

        tableDTO.environmentCode = this.maintenanceTypeList.filter(
          (res: LabelValue<string>) => res.value === newCenter.environmentCode
        )[0].label;

        tableDTO.kPourcentCode = this.kPourcentList.filter(
          (res: LabelValue<string>) => res.value === newCenter.kPourcentCode
        )[0].label;

        tableDTO.repairCenterCode = this.repairCenterList.filter(
          (res: LabelValue<string>) => res.value === newCenter.repairCenterCode
        )[0].label;

        this.bireItemMaintenanceDTOAddedList.push(bireItemMaintenanceDTO);

        tableDTO.startDateLabel = this.dateService.dateToString(tableDTO.startDate);
        tableDTO.endDateLabel = this.dateService.dateToString(tableDTO.endDate);
        this.statisticsList.push(tableDTO);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyItemExisting'));
    }
    this.showMaintenanceStatDialog = false;
  }

  // EDIT
  public editStat(): void {
    if (this.selectedStatistics.length === 1) {
      // Copy all the selectedRating[0] field into currentRating one by one
      this.currentStatIndex = this.statisticsList.indexOf(this.selectedStatistics[0]);
      const cloneObj = { ...this.selectedStatistics[0] };

      cloneObj.environmentCode = this.maintenanceTypeList.filter(
        (res: LabelValue<string>) => res.label === this.selectedStatistics[0].environmentCode
      )[0].value;

      cloneObj.kPourcentCode = this.kPourcentList.filter(
        (res: LabelValue<string>) => res.label === this.selectedStatistics[0].kPourcentCode
      )[0].value;

      cloneObj.repairCenterCode = this.repairCenterList.filter(
        (res: LabelValue<string>) => res.label === this.selectedStatistics[0].repairCenterCode
      )[0].value;

      this.dataMaintenanceStats = {
        componentId: 'StatisticsPopupComponent',
        selectedRow: undefined,
        object: cloneObj,
        openMode: ComponentOpenMode.Write
      };
    }
    this.showMaintenanceStatDialog = true;
  }

  // UPDATE
  public updateStat(udpatedStat: BireItemMaintenanceDTO) {
    const previousRatingObject = this.statisticsList[this.currentStatIndex];
    let isFound = false;
    const searchInAddedList = this.bireItemMaintenanceDTOAddedList.find(
      (value) =>
        value.environmentCode === previousRatingObject.environmentCode &&
        value.kPourcentCode === previousRatingObject.kPourcentCode &&
        value.repairCenterCode === previousRatingObject.repairCenterCode
    );
    const searchInUpdatedList = this.bireItemMaintenanceDTOUpdatedList.find(
      (value) =>
        value.environmentCode === previousRatingObject.environmentCode &&
        value.kPourcentCode === previousRatingObject.kPourcentCode &&
        value.repairCenterCode === previousRatingObject.repairCenterCode
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireItemMaintenanceDTOAddedList.indexOf(searchInAddedList);
      this.statisticsList.forEach((res) => {
        if (
          res.environmentCode === udpatedStat.environmentCode &&
          res.kPourcentCode === udpatedStat.kPourcentCode &&
          res.repairCenterCode === udpatedStat.repairCenterCode &&
          res.startDate === udpatedStat.startDate &&
          res.probability === udpatedStat.probability &&
          res.endDate === udpatedStat.endDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireItemMaintenanceDTOAddedList[indexInAddedList] = udpatedStat;
      }
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireItemMaintenanceDTOUpdatedList.indexOf(searchInUpdatedList);
      this.statisticsList.forEach((res) => {
        if (
          res.environmentCode === udpatedStat.environmentCode &&
          res.kPourcentCode === udpatedStat.kPourcentCode &&
          res.repairCenterCode === udpatedStat.repairCenterCode &&
          res.startDate === udpatedStat.startDate &&
          res.probability === udpatedStat.probability &&
          res.endDate === udpatedStat.endDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireItemMaintenanceDTOUpdatedList[indexInUpdatedList] = udpatedStat;
      }
    } else {
      this.statisticsList.forEach((res) => {
        if (
          res.environmentCode === udpatedStat.environmentCode &&
          res.kPourcentCode === udpatedStat.kPourcentCode &&
          res.repairCenterCode === udpatedStat.repairCenterCode &&
          res.startDate === udpatedStat.startDate &&
          res.probability === udpatedStat.probability &&
          res.endDate === udpatedStat.endDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.bireItemMaintenanceDTOUpdatedList.push(udpatedStat);
      }
    }
    this.selectedStatistics = [];

    const clone: BireItemMaintenanceCustomDTO = { ...udpatedStat };

    clone.environmentCode = this.maintenanceTypeList.filter(
      (res: LabelValue<string>) => res.value === udpatedStat.environmentCode
    )[0].label;

    clone.kPourcentCode = this.kPourcentList.filter(
      (res: LabelValue<string>) => res.value === udpatedStat.kPourcentCode
    )[0].label;

    clone.repairCenterCode = this.repairCenterList.filter(
      (res: LabelValue<string>) => res.value === udpatedStat.repairCenterCode
    )[0].label;

    clone.startDateLabel = this.dateService.dateToString(clone.startDate);
    clone.endDateLabel = this.dateService.dateToString(clone.endDate);
    this.statisticsList[this.currentStatIndex] = clone;

    this.showMaintenanceStatDialog = false;
  }

  // DELETE
  public deleteSelectedStat() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedStat'),
      accept: () => {
        this.selectedStatistics.forEach((element) => {
          const searchInAddedList = this.bireItemMaintenanceDTODeletedList.find(
            (value) =>
              value.environmentCode === element.environmentCode &&
              value.kPourcentCode === element.kPourcentCode &&
              value.repairCenterCode === element.repairCenterCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireItemMaintenanceDTODeletedList.indexOf(searchInAddedList);
            this.bireItemMaintenanceDTODeletedList.splice(indexInAddedList, 1);
          } else {
            const bireItemMaintenanceDTOId: BireItemMaintenanceDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              environmentCode: element.environmentCode as string,
              kPourcentCode: element.kPourcentCode as string,
              repairCenterCode: element.repairCenterCode as string
            };

            const clone = { ...bireItemMaintenanceDTOId };

            clone.environmentCode = this.maintenanceTypeList.filter(
              (res: LabelValue<string>) => res.label === this.selectedStatistics[0].environmentCode
            )[0].value;

            clone.kPourcentCode = this.kPourcentList.filter(
              (res: LabelValue<string>) => res.label === this.selectedStatistics[0].kPourcentCode
            )[0].value;

            clone.repairCenterCode = this.repairCenterList.filter(
              (res: LabelValue<string>) => res.label === this.selectedStatistics[0].repairCenterCode
            )[0].value;

            this.bireItemMaintenanceDTODeletedList.push(clone);
          }

          const indexInDisplayedList = this.statisticsList.indexOf(element);
          this.statisticsList.splice(indexInDisplayedList, 1);
        });
        this.selectedStatistics = [];
      }
    });
  }

  /**
   * STRUCTURE TAB Fetch(ITEM FATHER AND ITEM SONS)
   */
  private initStructureData() {
    const bireEvolutionItemDTO: BireEvolutionItemDTO = {
      chapter: this.bireItemDTO.chapter as string,
      familyCode: this.bireItemDTO.familyCode as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      structureType: this.bireItemDTO.structureType as string,
      subject: this.bireItemDTO.subject as string,
      variantCode: this.bireItemDTO.variantCode as string
    };

    this.itemFormService.getStructureDetails(bireEvolutionItemDTO).subscribe((results: StructureItemScreenOutput[]) => {
      results.forEach((res) => {
        if (!!res.itemFatherOutput) {
          this.itemFatherList = [...this.itemFatherList, this.createStructureRow(res.itemFatherOutput)];
        }

        if (!!res.itemSonsOutput) {
          this.itemSonList = [...this.itemSonList, this.createStructureRow(res.itemSonsOutput)];
        }
      });
    });
  }

  private createStructureRow(obj: ItemFathersAndSonsOutput): StructureRow {
    const itemFamily = this.itemFamilyCodeList.find((elt) => elt.value === obj.itemFamily);

    const structureRow: StructureRow = {
      item: obj.item,
      designation: obj.designation,
      itemFamily: itemFamily ? itemFamily.label : obj.itemFamily,
      functionCode: obj.functionCode,
      itemNumber: obj.itemNumber
    };

    return structureRow;
  }

  /**
   * Tasks Damages Localisation Tab Fetch
   */
  private initTaskDamagesLocalisationData() {
    this.initTasksData();
  }

  // Item Data
  private initTasksData() {
    const bireItemDTOId: BireItemDTOId = this.returnBireItemDTOId();

    this.itemFormService
      .findBireTaskItemsByItemTaskTab(bireItemDTOId)
      .subscribe((results: TaskAssociatedItemOutput[]) => {
        this.tasksList = results;
      });
  }

  // Damage table
  private initDamagesData() {
    const arr: DamagesWithItemVersionOutputCustom[] = [];
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

      this.itemFormService
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
              arr.push(damageCustomDTO);
            }
          });
          this.damagesList = [...arr];
        });
    });
  }

  /**
   * Localisation Table data
   */
  private initLocalisationData() {
    const arr: BireLocalisationItemDTO[] = [];
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

      this.itemFormService
        .findBireLocalisationItemsByItemVersion(bireItemVersionDTOId)
        .subscribe((results: BireLocalisationItemDTO[]) => {
          results.forEach((dto: BireLocalisationItemDTO) => {
            arr.push(dto);
          });
          this.localisationList = [...arr];
        });
    });
  }

  /**
   * Damage Localisation Task Table fetch data
   */
  private bireDamLocTaskData() {
    const arr: DamageLocalisationTaskRow[] = [];
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

      this.itemFormService
        .findBireDamLocTasksByItemVersion(bireItemVersionDTOId)
        .subscribe((results: BireDamLocTaskOutput[]) => {
          results.forEach((dto: BireDamLocTaskOutput) => {
            if (!!dto && !!dto.bireDamLocTaskDTO) {
              const bireDamLocTaskCustomOutput: BireDamLocTaskCustomOutput = {
                damageCode: dto.bireDamLocTaskDTO.damageCode as string,
                chapter: dto.bireDamLocTaskDTO.chapter as string,
                familyCode: dto.bireDamLocTaskDTO.familyCode as string,
                marks: dto.bireDamLocTaskDTO.marks as string,
                section: dto.bireDamLocTaskDTO.section as string,
                sheet: dto.bireDamLocTaskDTO.sheet as string,
                structureType: dto.bireDamLocTaskDTO.structureType as string,
                subject: dto.bireDamLocTaskDTO.subject as string,
                variantCode: dto.bireDamLocTaskDTO.variantCode as string,
                damageDescription: dto.damageDescription,
                localisationCode: dto.bireDamLocTaskDTO.localisationCode,
                localisationDescription: dto.localisationDescription,
                taskCode: dto.bireDamLocTaskDTO.taskCode,
                taskDesignation: dto.taskDesignation,
                taskVersion: dto.bireDamLocTaskDTO.taskVersion,
                versionNumber: dto.bireDamLocTaskDTO.versionNumber,
                damageCodeTxt: dto.bireDamLocTaskDTO.damageCode as string,
                damageDescriptionTxt: dto.damageDescription,
                localisationCodeTxt: dto.bireDamLocTaskDTO.localisationCode,
                localisationDescriptionTxt: dto.localisationDescription
              };

              let damage = StringUtils.orEmpty(dto.bireDamLocTaskDTO.damageCode);
              damage += StringUtils.isNullOrEmpty(dto.damageDescription) ? '' : ` - ${dto.damageDescription}`;
              let localisation = StringUtils.orEmpty(dto.bireDamLocTaskDTO.localisationCode);
              localisation += StringUtils.isNullOrEmpty(dto.localisationDescription)
                ? ''
                : ` - ${dto.localisationDescription}`;
              const damageLocalisationTaskRow: DamageLocalisationTaskRow = {
                damage,
                localisation,
                versionNumber: StringUtils.orEmpty(dto.bireDamLocTaskDTO.versionNumber),
                taskCode: StringUtils.orEmpty(dto.bireDamLocTaskDTO.taskCode),
                taskVersion: StringUtils.orEmpty(dto.bireDamLocTaskDTO.taskVersion),
                taskDesignation: StringUtils.orEmpty(dto.taskDesignation),
                _obj: bireDamLocTaskCustomOutput
              };

              arr.push(damageLocalisationTaskRow);
            }
          });
          this.damLocTaskList = [...arr];
        });
    });
  }

  /**
   * REFERENCE MEASUREMENT Fetch data
   */
  private initReferenceMeasurementData() {
    this.refMeasurementList = [];
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

      this.itemFormService
        .findBireVersionMeasuresByItemVersion(bireItemVersionDTOId)
        .subscribe((results: BireVersionMeasureCustomDTO[]) => {
          results.forEach((resp) => {
            resp.limitDateLabel = this.dateService.dateToString(resp.limitDate);
          });
          this.refMeasurementList = [...results];
        });
    });
  }

  // Create
  public createRefMeasurement(): void {
    this.dataRefMeasurement = {
      componentId: 'ReferenceMeasurementPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showRefMeasurementDialog = true;
  }

  // OPEN
  public openRefMeasurementDialog() {
    if (this.selectedRefMeasurement.length === 1) {
      this.dataRefMeasurement = {
        componentId: 'ReferenceMeasurementPopupComponent',
        selectedRow: undefined,
        object: { ...this.selectedRefMeasurement[0] },
        openMode: ComponentOpenMode.Read
      };
      this.showRefMeasurementDialog = true;
    }
  }

  // ADD EVENT STATS
  public addNewRefMeasurement(newCenter: BireVersionMeasureDTO) {
    // TODO find out how to have version number in column while adding something as there is no dropdown for it
    const searchInDisplayedList = this.refMeasurementList.find(
      (value) =>
        value.versionNumber === newCenter.versionNumber &&
        value.counterCode === newCenter.counterCode &&
        value.ratingCode === newCenter.ratingCode
    );

    if (!searchInDisplayedList) {
      if (!!newCenter) {
        const bireVersionMeasureDTO: BireVersionMeasureCustomDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          versionNumber: newCenter.versionNumber as string,
          counterCode: newCenter.counterCode,
          referenceValue: newCenter.referenceValue,
          limitDate: newCenter.limitDate,
          ratingCode: newCenter.ratingCode,
          birFamilyCode: this.bireItemDTO.familyCode as string,
          birStructureType: this.bireItemDTO.structureType as string,
          limitDateLabel: this.dateService.dateToString(newCenter.limitDate)
        };

        this.createBireVersionMeasureDTOList.push(bireVersionMeasureDTO);
        this.refMeasurementList = [...this.refMeasurementList, bireVersionMeasureDTO];
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
    }
    this.showRefMeasurementDialog = false;
  }

  // dELETE REFERENCE   measurement
  public deleteSelectedRefMeasurement() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedRefMeasurements'),
      accept: () => {
        this.selectedRefMeasurement.forEach((element) => {
          const searchInAddedList = this.createBireVersionMeasureDTOList.find(
            (value) =>
              value.counterCode === element.counterCode &&
              value.versionNumber === element.versionNumber &&
              value.limitDate === element.limitDate &&
              value.referenceValue === element.referenceValue
          );

          if (searchInAddedList) {
            const indexInAddedList = this.createBireVersionMeasureDTOList.indexOf(searchInAddedList);
            this.createBireVersionMeasureDTOList.splice(indexInAddedList, 1);
          } else {
            const bireVersionMeasureDTOId: BireVersionMeasureDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              counterCode: element.counterCode as string,
              versionNumber: element.versionNumber as string,
              ratingCode: element.ratingCode as string,
              birFamilyCode: element.birFamilyCode as string,
              birStructureType: element.birStructureType as string
            };
            this.removeBireVersionMeasureDTOIdList.push(bireVersionMeasureDTOId);
          }

          const indexInDisplayedList = this.refMeasurementList.indexOf(element);
          this.refMeasurementList.splice(indexInDisplayedList, 1);
        });
        this.selectedRefMeasurement = [];
      }
    });
  }

  // EDIT
  public editSelectedRefMeasurement(): void {
    if (this.selectedRefMeasurement.length === 1) {
      this.currentRefIndex = this.refMeasurementList.indexOf(this.selectedRefMeasurement[0]);
      const cloneObj = { ...this.selectedRefMeasurement[0] };
      this.dataRefMeasurement = {
        componentId: 'ReferenceMeasurementPopupComponent',
        selectedRow: undefined,
        object: cloneObj,
        openMode: ComponentOpenMode.Write
      };
    }
    this.showRefMeasurementDialog = true;
  }

  // On action update
  public updateRefMeasurement(udpatedStat: BireVersionMeasureDTO) {
    const previousRatingObject = this.refMeasurementList[this.currentRefIndex];
    let isFound = false;
    const searchInAddedList = this.createBireVersionMeasureDTOList.find(
      (value) =>
        value.counterCode === previousRatingObject.counterCode &&
        value.versionNumber === previousRatingObject.versionNumber &&
        value.ratingCode === previousRatingObject.ratingCode &&
        value.referenceValue === udpatedStat.referenceValue &&
        value.limitDate === udpatedStat.limitDate
    );
    const searchInUpdatedList = this.updateBireVersionMeasureDTOList.find(
      (value) =>
        value.counterCode === previousRatingObject.counterCode &&
        value.versionNumber === previousRatingObject.versionNumber &&
        value.ratingCode === previousRatingObject.ratingCode &&
        value.referenceValue === previousRatingObject.referenceValue &&
        value.limitDate === previousRatingObject.limitDate
    );
    if (searchInAddedList) {
      const indexInAddedList = this.createBireVersionMeasureDTOList.indexOf(searchInAddedList);
      this.refMeasurementList.forEach((res) => {
        if (
          res.counterCode === udpatedStat.counterCode &&
          res.versionNumber === udpatedStat.versionNumber &&
          res.ratingCode === udpatedStat.ratingCode &&
          res.referenceValue === udpatedStat.referenceValue &&
          res.limitDate === udpatedStat.limitDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
      } else {
        this.createBireVersionMeasureDTOList[indexInAddedList] = udpatedStat;
      }
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.updateBireVersionMeasureDTOList.indexOf(searchInUpdatedList);
      this.refMeasurementList.forEach((res) => {
        if (
          res.counterCode === udpatedStat.counterCode &&
          res.versionNumber === udpatedStat.versionNumber &&
          res.ratingCode === udpatedStat.ratingCode &&
          res.referenceValue === udpatedStat.referenceValue &&
          res.limitDate === udpatedStat.limitDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyRefMeasurementExisting'));
      } else {
        this.updateBireVersionMeasureDTOList[indexInUpdatedList] = udpatedStat;
      }
    } else {
      this.refMeasurementList.forEach((res) => {
        if (
          res.counterCode === udpatedStat.counterCode &&
          res.versionNumber === udpatedStat.versionNumber &&
          res.ratingCode === udpatedStat.ratingCode &&
          res.referenceValue === udpatedStat.referenceValue &&
          res.limitDate === udpatedStat.limitDate
        ) {
          isFound = true;
        }
      });

      if (isFound) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyModificationExisting'));
      } else {
        this.updateBireVersionMeasureDTOList.push(udpatedStat);
      }
    }
    this.selectedRefMeasurement = [];

    const clone: BireVersionMeasureCustomDTO = { ...udpatedStat };
    clone.limitDateLabel = this.dateService.dateToString(clone.limitDate);
    this.refMeasurementList[this.currentRefIndex] = clone;

    this.showRefMeasurementDialog = false;
  }

  /**
   * ITEM FATHER/SON Dialog
   */

  // SON
  public createItemSon(): void {
    this.showItemSonDialog = true;
  }

  // Son item add event
  public addNewItemSon(ev: BireItemDTO) {
    const item = `${ev.chapter}-${ev.section}-${ev.subject}-${ev.sheet}-${ev.marks}`;
    let father = `${this.bireItemDTO.chapter}-${this.bireItemDTO.section}-${this.bireItemDTO.subject}`;
    father += `-${this.bireItemDTO.sheet}-${this.bireItemDTO.marks}`;

    if (!this.isItemAddedSame(item, father)) {
      const searchInDisplayedList = this.itemSonList.find((value) => value.item === item);

      if (!searchInDisplayedList) {
        if (!!ev) {
          const dto: ItemFathersAndSonsOutput = {
            designation: ev.name as string,
            functionCode: ev.functionCode as string,
            item: item as string,
            itemFamily: ev.itemFamilyCode as string,
            itemNumber: ev.itemNumber as string
          };

          this.itemSonList = [...this.itemSonList, this.createStructureRow(dto)];

          const bireItemItemDTO: BireItemItemDTO = {
            fatherChapter: this.bireItemDTO.chapter as string,
            fatherFamilyCode: this.bireItemDTO.familyCode as string,
            fatherMarks: this.bireItemDTO.marks as string,
            fatherSection: this.bireItemDTO.section as string,
            fatherSheet: this.bireItemDTO.sheet as string,
            fatherStructureType: this.bireItemDTO.structureType as string,
            fatherSubject: this.bireItemDTO.subject as string,
            fatherVariantCode: this.bireItemDTO.variantCode as string,
            sonChapter: ev.chapter as string,
            sonFamilyCode: ev.familyCode as string,
            sonMarks: ev.marks as string,
            sonSection: ev.section as string,
            sonSheet: ev.sheet as string,
            sonStructureType: this.bireItemDTO.structureType as string,
            sonSubject: ev.subject as string,
            sonVariantCode: this.bireItemDTO.variantCode as string
          };
          this.saveStructureTab.push(bireItemItemDTO);
        }
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadySonItemExisting'));
      }
      this.showItemSonDialog = false;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUnderItself'));
    }
  }

  // Son delete
  public deleteSelectedSonItem() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedSon'),
      accept: () => {
        this.selectedItemSons.forEach((element) => {
          const searchInAddedList = this.removeDataStructureTab.filter((value) => {
            let item = `${value.sonChapter}-${value.sonSection}-${value.sonSubject}`;
            item += `-${value.sonSheet}-${value.sonMarks}`;

            if (item === element.item) {
              return true;
            }
          })[0];

          if (searchInAddedList) {
            const indexInAddedList = this.removeDataStructureTab.indexOf(searchInAddedList);
            this.removeDataStructureTab.splice(indexInAddedList, 1);
          } else {
            const three = 3;
            const four = 4;
            const bireItemItemDTOId: BireItemItemDTOId = {
              fatherChapter: this.bireItemDTO.chapter as string,
              fatherFamilyCode: this.bireItemDTO.familyCode as string,
              fatherMarks: this.bireItemDTO.marks as string,
              fatherSection: this.bireItemDTO.section as string,
              fatherSheet: this.bireItemDTO.sheet as string,
              fatherStructureType: this.bireItemDTO.structureType as string,
              fatherSubject: this.bireItemDTO.subject as string,
              fatherVariantCode: this.bireItemDTO.variantCode as string,
              sonChapter: element.item.split('-')[0] as string,
              sonFamilyCode: this.bireItemDTO.familyCode as string,
              sonMarks: element.item.split('-')[four] as string,
              sonSection: element.item.split('-')[1] as string,
              sonSheet: element.item.split('-')[three] as string,
              sonStructureType: this.bireItemDTO.structureType as string,
              sonSubject: element.item.split('-')[2] as string,
              sonVariantCode: this.bireItemDTO.variantCode as string
            };
            this.removeDataStructureTab.push(bireItemItemDTOId);
          }

          const indexInDisplayedList = this.itemSonList.indexOf(element);
          this.itemSonList.splice(indexInDisplayedList, 1);
        });
        this.selectedItemSons = [];
      }
    });
  }

  // FATHER
  public createItemFather(): void {
    this.showItemFatherDialog = true;
  }

  // Father add item event
  public addNewItemFather(ev: BireItemDTO) {
    const item = `${ev.chapter}-${ev.section}-${ev.subject}-${ev.sheet}-${ev.marks}`;
    let son = `${this.bireItemDTO.chapter}-${this.bireItemDTO.section}-${this.bireItemDTO.subject}`;
    son += `-${this.bireItemDTO.sheet}-${this.bireItemDTO.marks}`;

    if (!this.isSonSameAsFather(son, item)) {
      if (!this.isFatherItemAddedSame(item)) {
        const searchInDisplayedList = this.itemFatherList.find((value) => value.item === item);

        if (!searchInDisplayedList) {
          if (!!ev) {
            const dto: ItemFathersAndSonsOutput = {
              designation: ev.name as string,
              functionCode: ev.functionCode as string,
              item: item as string,
              itemFamily: ev.itemFamilyCode as string,
              itemNumber: ev.itemNumber as string
            };

            this.itemFatherList = [...this.itemFatherList, this.createStructureRow(dto)];

            const bireItemItemDTO: BireItemItemDTO = {
              fatherChapter: ev.chapter as string,
              fatherFamilyCode: ev.familyCode as string,
              fatherMarks: ev.marks as string,
              fatherSection: ev.section as string,
              fatherSheet: ev.sheet as string,
              fatherStructureType: ev.structureType as string,
              fatherSubject: ev.subject as string,
              fatherVariantCode: this.bireItemDTO.variantCode as string,
              sonChapter: this.bireItemDTO.chapter as string,
              sonFamilyCode: this.bireItemDTO.familyCode as string,
              sonMarks: this.bireItemDTO.marks as string,
              sonSection: this.bireItemDTO.section as string,
              sonSheet: this.bireItemDTO.sheet as string,
              sonStructureType: this.bireItemDTO.structureType as string,
              sonSubject: this.bireItemDTO.subject as string,
              sonVariantCode: this.bireItemDTO.variantCode as string
            };
            this.saveStructureTab.push(bireItemItemDTO);
          }
        } else {
          this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyFatherItemExisting'));
        }
        this.showItemFatherDialog = false;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUpperItself'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorCannotInsertItemUnderItself'));
    }
  }

  /**
   * Checking if same son item is being added to son table
   */
  private isItemAddedSame(sonItem, fatherItem): boolean {
    if (sonItem === fatherItem) {
      return true;
    }

    const isFound = this.itemFatherList.filter((father: ItemFathersAndSonsOutput) => {
      return sonItem === father.item;
    });

    return isFound.length > 0 ? true : false;
  }

  /**
   * Check for father / son item
   */
  private isSonSameAsFather(sonItem, fatherItem): boolean {
    if (sonItem === fatherItem) {
      return true;
    }

    return false;
  }

  /**
   * Checking father item on add
   */
  private isFatherItemAddedSame(fatherItem): boolean {
    const isFound = this.itemSonList.filter((son: ItemFathersAndSonsOutput) => {
      return fatherItem === son.item;
    });

    return isFound.length > 0 ? true : false;
  }

  // Father Delete
  public deleteSelectedFatherItem() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedFather'),
      accept: () => {
        this.selectedItemFathers.forEach((element) => {
          const searchInAddedList = this.removeDataStructureTab.filter((value) => {
            let item = `${value.fatherChapter}-${value.fatherSection}-${value.fatherSubject}`;
            item += `-${value.fatherSheet}-${value.fatherMarks}`;

            if (item === element.item) {
              return true;
            }
          })[0];

          if (searchInAddedList) {
            const indexInAddedList = this.removeDataStructureTab.indexOf(searchInAddedList);
            this.removeDataStructureTab.splice(indexInAddedList, 1);
          } else {
            const three = 3;
            const four = 4;
            const bireItemItemDTOId: BireItemItemDTOId = {
              fatherChapter: (element.item.split('-')[0] as string) as string,
              fatherFamilyCode: this.bireItemDTO.familyCode as string,
              fatherMarks: element.item.split('-')[four] as string,
              fatherSection: element.item.split('-')[1] as string,
              fatherSheet: element.item.split('-')[three] as string,
              fatherStructureType: this.bireItemDTO.structureType as string,
              fatherSubject: element.item.split('-')[2] as string,
              fatherVariantCode: this.bireItemDTO.variantCode as string,
              sonChapter: this.bireItemDTO.chapter as string,
              sonFamilyCode: this.bireItemDTO.familyCode as string,
              sonMarks: this.bireItemDTO.marks as string,
              sonSection: this.bireItemDTO.section as string,
              sonSheet: this.bireItemDTO.sheet as string,
              sonStructureType: this.bireItemDTO.structureType as string,
              sonSubject: this.bireItemDTO.subject as string,
              sonVariantCode: this.bireItemDTO.variantCode as string
            };
            this.removeDataStructureTab.push(bireItemItemDTOId);
          }

          const indexInDisplayedList = this.itemFatherList.indexOf(element);
          this.itemFatherList.splice(indexInDisplayedList, 1);
        });
        this.selectedItemFathers = [];
      }
    });
  }

  /**
   * Part Number Operations
   */
  public openPartNumberVersionDialog() {
    if (this.selectedPartNumber.length === 1) {
      this.dataItemVersion = {
        componentId: 'ItemFatherPopupComponent',
        openMode: ComponentOpenMode.Read,
        object: this.selectedPartNumber[0]._obj,
        selectedRow: undefined
      };
      this.openPartNumberVersionDialogFlag = true;
    }
  }

  // Add Version dialog
  public createPartNumberVersion() {
    this.dataItemVersion = {
      componentId: 'ItemFatherPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.openPartNumberVersionDialogFlag = true;
  }

  // Add Version
  public addNewItemVersion(ev: GetPartNumberStructureOutputDTO) {
    const searchInDisplayedList = this.partNumberVersionList.find((value) => value.data === ev.versionNumber);

    if (!searchInDisplayedList) {
      if (!!ev) {
        // const dto: GetPartNumberStructureOutputDTO = {
        //   alternatePn: [],
        //   versionNumber: ev.versionNumber
        // };

        const bireItemVersionDTO: BireItemVersionDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          versionNumber: ev.versionNumber as string
        };

        this.bireItemVersionDTOAddedList.push(bireItemVersionDTO);

        // const partNumberRow: PartNumberRow = {
        //   alternatePn: '',
        //   pn: '',
        //   isn: '',
        //   ipcQuantity: '',
        //   mplQuantity: '',
        //   _obj: dto
        // };

        this.partNumberTableList = [...this.partNumberTableList];

        this.partNumberVersionList.push({
          label: `Version ${ev.versionNumber}`,
          data: ev.versionNumber as string,
          parent: undefined,
          expanded: true
        });

        // const version = (this.partNumberVersionSelected as TreeNode).data as string;
        // this.partNumberMap.set(version, [...this.partNumberTableList]);
        // this.updateRowGroupMetaData();
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyVersionExisting'));
    }
    this.openPartNumberVersionDialogFlag = false;
  }

  // Delete Version
  public deleteVersion() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedVersions'),
      accept: () => {
        const version = (this.partNumberVersionSelected as TreeNode).data as string;
        ListUtils.orEmpty(this.partNumberMap.get(version)).forEach((elt) => {
          const bireItemVersionDTOId: BireItemVersionDTOId = {
            chapter: this.bireItemDTO.chapter as string,
            familyCode: this.bireItemDTO.familyCode as string,
            marks: this.bireItemDTO.marks as string,
            section: this.bireItemDTO.section as string,
            sheet: this.bireItemDTO.sheet as string,
            structureType: this.bireItemDTO.structureType as string,
            subject: this.bireItemDTO.subject as string,
            variantCode: this.bireItemDTO.variantCode as string,
            versionNumber: elt._obj.versionNumber as string
          };
          this.bireItemVersionDTODeletedList.push(bireItemVersionDTOId);

          this.partNumberTableList = this.partNumberTableList.filter((res) => {
            return res._obj.versionNumber !== elt._obj.versionNumber;
          });

          this.partNumberMap.set(version, [...this.partNumberTableList]);
        });

        this.partNumberVersionList = this.partNumberVersionList.filter((elt) => elt.data !== version);

        this.partNumberVersionSelected = undefined;
      }
    });
  }

  /**
   * Delete Part Number
   */
  public deletePN() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedPNs'),
      accept: () => {
        this.selectedPartNumber.forEach((element) => {
          const bireVersionPnDTOId: BireVersionPnDTOId = {
            chapter: this.bireItemDTO.chapter as string,
            familyCode: this.bireItemDTO.familyCode as string,
            isnAta: element.isn as string,
            marks: this.bireItemDTO.marks as string,
            pnCode: element.pn as string,
            section: this.bireItemDTO.section as string,
            sheet: this.bireItemDTO.sheet as string,
            structureType: this.bireItemDTO.structureType as string,
            subject: this.bireItemDTO.subject as string,
            variantCode: this.bireItemDTO.variantCode as string,
            versionNumber: element._obj.versionNumber as string
          };
          this.bireVersionPnDTOIdDeletedList.push(bireVersionPnDTOId);

          this.partNumberTableList.forEach((res, index) => {
            if (res.pn === element.pn) {
              this.partNumberTableList.splice(index, 1);
            }
          });
        });
        // this.updateRowGroupMetaData();
        this.selectedPartNumber = [];
      }
    });
  }

  /**
   * TASK Operations
   */
  public openItemTaskDialog() {
    if (this.selectedTasks.length === 1) {
      const cloneDTO = { ...this.selectedTasks[0] };
      cloneDTO.type = this.taskItemList.filter((res) => {
        return res.label === cloneDTO.type;
      })[0].value;

      this.dataItemTask = {
        componentId: 'TaskPopupComponent',
        selectedRow: undefined,
        object: cloneDTO,
        openMode: ComponentOpenMode.Read
      };
      this.showItemTaskDialog = true;
    }
  }

  // Add Task dialog
  public createItemTask() {
    this.dataItemTask = {
      componentId: 'TaskPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showItemTaskDialog = true;
  }

  // Add Item Task
  public addNewItemTask(ev: TaskAssociatedItemOutput) {
    const label = this.taskItemList.filter((res) => {
      return res.value === ev.type;
    })[0].label;

    const searchInDisplayedList = this.tasksList.find(
      (value) =>
        value.code === ev.code &&
        value.designation === ev.designation &&
        value.itemVersion === ev.itemVersion &&
        value.type === label &&
        value.version === ev.version
    );

    if (!searchInDisplayedList) {
      if (!!ev) {
        const bireTaskItemDTO: BireTaskItemDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          // item: ev.item,
          taskCode: ev.code,
          taskItemTypeCode: ev.type,
          taskVersion: ev.version,
          versionNumber: ev.itemVersion
        };

        this.bireTaskItemAddedList.push(bireTaskItemDTO);

        const cloneDTO = { ...ev };
        cloneDTO.type = this.taskItemList.filter((res) => {
          return res.value === cloneDTO.type;
        })[0].label;
        this.tasksList = [...this.tasksList, cloneDTO];
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyTaskExisting'));
    }
    this.showItemTaskDialog = false;
  }

  // Delete Task
  public deleteSelectedItemTasks() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedTasks'),
      accept: () => {
        this.selectedTasks.forEach((element) => {
          const searchInAddedList = this.bireTaskItemAddedList.find(
            (value) =>
              value.taskCode === element.code &&
              value.taskVersion === element.version &&
              value.versionNumber === element.itemVersion &&
              value.taskItemTypeCode === element.type
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireItemVersionDTOAddedList.indexOf(searchInAddedList);
            this.bireItemVersionDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireTaskItemDTOId: BireTaskItemDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              taskCode: element.code as string,
              taskItemTypeCode: element.type as string,
              taskVersion: element.version as string,
              versionNumber: element.itemVersion as string
            };

            bireTaskItemDTOId.taskItemTypeCode = this.taskItemList.filter((res) => {
              return res.label === element.type;
            })[0].value;
            this.bireTaskItemDeletedList.push(bireTaskItemDTOId);
          }

          const indexInDisplayedList = this.tasksList.indexOf(element);
          this.tasksList.splice(indexInDisplayedList, 1);
        });
        this.selectedTasks = [];
      }
    });
  }

  /**
   * Damage Operations
   */
  public openDamageDialog() {
    if (this.selectedDamages.length === 1) {
      this.dataDamage = {
        componentId: 'DamagePopupComponent',
        selectedRow: undefined,
        object: { ...this.selectedDamages[0] },
        openMode: ComponentOpenMode.Read
      };
      this.showDamageDialog = true;
    }
  }

  // Add Damage dialog
  public createDamage() {
    this.dataItemTask = {
      componentId: 'DamagePopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showDamageDialog = true;
  }

  // Add Item Damage
  public addNewDamage(ev: BireDamageDTOCustom) {
    const searchInDisplayedList = this.damagesList.find(
      (value) => value.damageCode === ev.damageCode && ev.versionNumber === value.versionNumber
    );
    if (!searchInDisplayedList) {
      if (!!ev) {
        const bireDamageItemDTO: BireDamageItemDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          damageCode: ev.damageCode as string,
          versionNumber: ev.versionNumber
        };

        this.bireDamageItemDTOAddedList.push(bireDamageItemDTO);

        const damageTableDTO: DamagesWithItemVersionOutputCustom = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          versionNumber: ev.versionNumber,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          damageDescription: ev.damageDescription,
          damageCode: ev.damageCode,
          unitCode: ev.unitCode
        };

        this.damagesList.push(damageTableDTO);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyDamageExisting'));
    }
    this.showDamageDialog = false;
  }

  // Delete Damage
  public deleteSelectedDamages() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedDamages'),
      accept: () => {
        this.selectedDamages.forEach((element) => {
          const searchInAddedList = this.bireDamageItemDTOAddedList.find(
            (value) => value.damageCode === element.damageCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireDamageItemDTOAddedList.indexOf(searchInAddedList);
            this.bireDamageItemDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireDamageItemDTOId: BireDamageItemDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              damageCode: element.damageCode as string,
              versionNumber: element.versionNumber as string
            };
            this.bireDamageItemDTOIdRemoveList.push(bireDamageItemDTOId);
          }

          const indexInDisplayedList = this.damagesList.indexOf(element);
          this.damagesList.splice(indexInDisplayedList, 1);
        });
        this.selectedDamages = [];
      }
    });
  }

  /**
   * Localisation Operations
   */
  public openLocalisationDialog() {
    if (this.selectedLocalisation.length === 1) {
      this.dataLocalisation = {
        componentId: 'LocalisationPopupComponent',
        selectedRow: undefined,
        object: { ...this.selectedLocalisation[0] },
        openMode: ComponentOpenMode.Read
      };
      this.showLocalisationDialog = true;
    }
  }

  // Add Localisation dialog
  public createLocalisation() {
    this.dataItemTask = {
      componentId: 'LocalisationPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showLocalisationDialog = true;
  }

  // Add Item Localisation
  public addNewLocalisation(ev: BireLocalisationItemDTO) {
    const searchInDisplayedList = this.localisationList.find(
      (value) => value.localisationCode === ev.localisationCode && value.versionNumber === ev.versionNumber
    );

    if (!searchInDisplayedList) {
      if (!!ev) {
        const bireLocalisationItemDTO: BireLocalisationItemDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          localisationCode: ev.localisationCode as string,
          versionNumber: ev.versionNumber
        };

        this.bireLocalisationItemDTOAddedList.push(bireLocalisationItemDTO);
        this.localisationList.push(ev);
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyLocalisationExisting'));
    }
    this.showDamageDialog = false;
  }

  // Delete Localisation
  public deleteSelectedLocalisation() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedLocalisations'),
      accept: () => {
        this.selectedLocalisation.forEach((element) => {
          const searchInAddedList = this.bireLocalisationItemDTOAddedList.find(
            (value) => value.localisationCode === element.localisationCode
          );

          if (searchInAddedList) {
            const indexInAddedList = this.bireLocalisationItemDTOAddedList.indexOf(searchInAddedList);
            this.bireLocalisationItemDTOAddedList.splice(indexInAddedList, 1);
          } else {
            const bireLocalisationItemDTOId: BireLocalisationItemDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              localisationCode: element.localisationCode as string,
              versionNumber: element.versionNumber as string
            };
            this.bireLocalisationItemDTOIdRemoveList.push(bireLocalisationItemDTOId);
          }

          const indexInDisplayedList = this.localisationList.indexOf(element);
          this.localisationList.splice(indexInDisplayedList, 1);
        });
        this.selectedDamages = [];
      }
    });
  }

  /**
   * Damage Localisation Task Table Operations
   */
  public openDamLocTaskDialog() {
    if (this.selectedDamLocTask.length === 1) {
      this.dataBireDamLoc = {
        componentId: 'LocalisationPopupComponent',
        selectedRow: undefined,
        object: { ...this.selectedDamLocTask[0] },
        openMode: ComponentOpenMode.Read
      };
      this.showBireDamLocalisationDialog = true;
    }
  }

  // Add Dam/Localisation/Task dialog
  public createDamLocTask() {
    this.dataBireDamLoc = {
      componentId: 'LocalisationPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: {},
      selectedRow: undefined
    };
    this.showBireDamLocalisationDialog = true;
  }

  // Add Item Dam/Localisation/Task
  public addNewDamLocTask(ev: BireDamLocTaskCustomOutput) {
    const searchInDisplayedList = this.damLocTaskList.find(
      (value) =>
        value._obj.localisationCode === ev.localisationCode &&
        value._obj.damageCode === ev.damageCode &&
        value._obj.taskCode === ev.taskCode &&
        value._obj.taskVersion === ev.taskVersion &&
        value._obj.versionNumber === ev.versionNumber
    );

    if (!searchInDisplayedList) {
      if (!!ev) {
        const bireDamLocTaskDTO: BireDamLocTaskDTO = {
          chapter: this.bireItemDTO.chapter as string,
          familyCode: this.bireItemDTO.familyCode as string,
          marks: this.bireItemDTO.marks as string,
          section: this.bireItemDTO.section as string,
          sheet: this.bireItemDTO.sheet as string,
          structureType: this.bireItemDTO.structureType as string,
          subject: this.bireItemDTO.subject as string,
          variantCode: this.bireItemDTO.variantCode as string,
          localisationCode: ev.localisationCode as string,
          versionNumber: ev.versionNumber,
          damageCode: ev.damageCode,
          taskCode: ev.taskCode,
          taskVersion: ev.taskVersion
        };

        this.createBireDamLocTaskDTOList.push(bireDamLocTaskDTO);

        ev.damageDescriptionTxt = ev.damageDescription;
        ev.localisationDescriptionTxt = ev.localisationDescription;
        ev.localisationCodeTxt = ev.localisationCode as string;
        ev.damageCodeTxt = ev.damageCode;

        let damage = StringUtils.orEmpty(ev.damageCode);
        damage += StringUtils.isNullOrEmpty(ev.damageDescription) ? '' : ` - ${ev.damageDescription}`;
        let localisation = StringUtils.orEmpty(ev.localisationCode);
        localisation += StringUtils.isNullOrEmpty(ev.localisationDescription) ? '' : ` - ${ev.localisationDescription}`;
        const damageLocalisationTaskRow: DamageLocalisationTaskRow = {
          damage,
          localisation,
          versionNumber: StringUtils.orEmpty(ev.versionNumber),
          taskCode: StringUtils.orEmpty(ev.taskCode),
          taskVersion: StringUtils.orEmpty(ev.taskVersion),
          taskDesignation: StringUtils.orEmpty(ev.taskDesignation),
          _obj: ev
        };

        this.damLocTaskList = [...this.damLocTaskList, damageLocalisationTaskRow];
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyDamageLocTaskExisting'));
    }
    this.showBireDamLocalisationDialog = false;
  }

  // Delete Dam/Localisation/Task
  public deleteSelectedDamLocTask() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedDamLocTasks'),
      accept: () => {
        this.selectedDamLocTask.forEach((element) => {
          const searchInAddedList = this.createBireDamLocTaskDTOList.find(
            (value) =>
              value.localisationCode === element._obj.localisationCode &&
              value.versionNumber === element._obj.versionNumber &&
              value.taskCode === element._obj.taskCode &&
              value.damageCode === element._obj.damageCode &&
              value.taskVersion === element._obj.taskVersion
          );

          if (searchInAddedList) {
            const indexInAddedList = this.createBireDamLocTaskDTOList.indexOf(searchInAddedList);
            this.createBireDamLocTaskDTOList.splice(indexInAddedList, 1);
          } else {
            const bireDamLocTaskDTOId: BireDamLocTaskDTOId = {
              chapter: this.bireItemDTO.chapter as string,
              familyCode: this.bireItemDTO.familyCode as string,
              marks: this.bireItemDTO.marks as string,
              section: this.bireItemDTO.section as string,
              sheet: this.bireItemDTO.sheet as string,
              structureType: this.bireItemDTO.structureType as string,
              subject: this.bireItemDTO.subject as string,
              variantCode: this.bireItemDTO.variantCode as string,
              localisationCode: element._obj.localisationCode as string,
              versionNumber: element._obj.versionNumber as string,
              damageCode: element._obj.damageCode as string,
              taskCode: element._obj.taskCode as string,
              taskVersion: element._obj.taskVersion as string
            };
            this.removeBireDamLocTaskDTOIdList.push(bireDamLocTaskDTOId);
          }

          const indexInDisplayedList = this.damLocTaskList.indexOf(element);
          this.damLocTaskList.splice(indexInDisplayedList, 1);
        });
        this.selectedDamLocTask = [];
      }
    });
  }

  /**
   * Update status update popup
   */
  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;

    const objId: BireItemDTOId = this.returnBireItemDTOId();

    const columns: TableColumn[] = [
      { field: 'time', alignment: 'left', width: '150px' },
      { field: 'author', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '150px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'objectStatus', alignment: 'left', width: '200px' },
      { field: 'designation', alignment: 'left', width: '200px' },
      { field: 'itemFamilyCode', alignment: 'left', width: '6.25rem' },
      { field: 'remarks', alignment: 'left', width: '6.25rem' },
      { field: 'itemType', alignment: 'left', width: '6.25rem' },
      { field: 'itemNumber', alignment: 'left', width: '6.25rem' },
      { field: 'functionCode', alignment: 'left', width: '6.25rem' },
      { field: 'itemLevel', alignment: 'left', width: '6.25rem' },
      { field: 'attachingPart', alignment: 'left', width: '6.25rem' },
      { field: 'replaceableUnitType', alignment: 'left', width: '6.25rem' },
      { field: 'fLocType', alignment: 'left', width: '6.25rem' },
      { field: 'lifeRestrictionType', alignment: 'left', width: '6.25rem' },
      { field: 'configurableItem', alignment: 'left', width: '6.25rem' },
      { field: 'serializedPart', alignment: 'left', width: '6.25rem' },
      { field: 'visibleOnInspection', alignment: 'left', width: '6.25rem' },
      { field: 'disassemblyGroup', alignment: 'left', width: '6.25rem' },
      { field: 'isItemHeadOfGroup', alignment: 'left', width: '6.25rem' },
      { field: 'fixedElementChapter', alignment: 'left', width: '6.25rem' },
      { field: 'fixedElementMark', alignment: 'left', width: '6.25rem' },
      { field: 'fixedElementSection', alignment: 'left', width: '6.25rem' },
      { field: 'fixedElementSheet', alignment: 'left', width: '6.25rem' },
      { field: 'fixedElementSubject', alignment: 'left', width: '6.25rem' },
      { field: 'referToChapter', alignment: 'left', width: '6.25rem' },
      { field: 'referToMark', alignment: 'left', width: '6.25rem' },
      { field: 'referToSection', alignment: 'left', width: '6.25rem' },
      { field: 'referToSheet', alignment: 'left', width: '6.25rem' },
      { field: 'referToSubject', alignment: 'left', width: '6.25rem' },
      { field: 'referForNHAMark', alignment: 'left', width: '6.25rem' },
      { field: 'referForNHASection', alignment: 'left', width: '6.25rem' },
      { field: 'referForNHASheet', alignment: 'left', width: '6.25rem' },
      { field: 'referForNHASubject', alignment: 'left', width: '6.25rem' }
    ];

    if (!!objId) {
      this.tableStatusUpdatesData = {
        componentId: 'ItemFormComponent.historicPopup',
        tableCols: columns,
        tableRows: this.itemFormService.findHistoricOfObjectByPk(objId),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Multiple,
        globalFilter: false
      };
    } else {
      super.throwUnboundLocalError('openStatusUpdatesPopup', 'this.bireItemDTO');
    }
  }

  /**
   * SAVE HANDLING
   */
  // Validation
  private validateScreen(): boolean {
    if (
      !!this.bireItemDTO.familyCode &&
      !!this.bireItemDTO.variantCode &&
      !!this.bireItemDTO.chapter &&
      !!this.bireItemDTO.section &&
      !!this.bireItemDTO.subject &&
      !!this.bireItemDTO.sheet &&
      !!this.bireItemDTO.marks &&
      !!this.selectedFamilyVariant
    ) {
      return true;
    }

    return false;
  }

  private setFamilyVariantCode() {
    this.bireVariantVersionList.forEach((res) => {
      if (this.selectedFamilyVariant === res.labelValue.value) {
        this.bireItemDTO.familyCode = res.bireVariantVersionDTO.familyCode;
        this.bireItemDTO.variantCode = res.bireVariantVersionDTO.variantCode;
        this.bireItemDTO.structureType = res.bireVariantVersionDTO.structureType;
      }
    });
  }

  /**
   * Setting MEL and Illustrated Value
   */
  private setisMelIllustratedValuesToAttributeArray() {
    const attribute1: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '6',
      attributeValue: this.isMelSelected.toString()
    };

    const attribute2: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '1',
      attributeValue: this.isillustratedSelected.toString()
    };

    const attribute3: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '11',
      attributeValue: this.note1
    };

    const attribute4: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '12',
      attributeValue: this.note2
    };

    const attribute5: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '13',
      attributeValue: this.note3
    };

    const attribute6: BireItemAttributeDTO = {
      familyCode: this.bireItemDTO.familyCode as string,
      variantCode: this.bireItemDTO.variantCode as string,
      structureType: this.bireItemDTO.structureType as string,
      chapter: this.bireItemDTO.chapter as string,
      marks: this.bireItemDTO.marks as string,
      section: this.bireItemDTO.section as string,
      sheet: this.bireItemDTO.sheet as string,
      subject: this.bireItemDTO.subject as string,
      attributeId: '2',
      attributeValue: this.docURL
    };

    this.bireItemAttributeDTO.push(attribute1);
    this.bireItemAttributeDTO.push(attribute2);
    this.bireItemAttributeDTO.push(attribute3);
    this.bireItemAttributeDTO.push(attribute4);
    this.bireItemAttributeDTO.push(attribute5);
    this.bireItemAttributeDTO.push(attribute6);
  }

  // Save
  public saveItem() {
    if (this.isCreateOpenMode) {
      this.setFamilyVariantCode();
    }

    if (this.validateScreen()) {
      if (this.isIllustrationTabValid()) {
        // Attributes
        this.bireItemAttributeDTO = this.dynamicAttributesService.toBireItemAttribute(
          this.bireItemDTO.familyCode as string,
          this.bireItemDTO.variantCode as string,
          this.bireItemDTO.structureType as string,
          this.bireItemDTO.chapter as string,
          this.bireItemDTO.marks as string,
          this.bireItemDTO.section as string,
          this.bireItemDTO.sheet as string,
          this.bireItemDTO.subject as string,
          this.dynamicAttributesForItem
        );

        this.setisMelIllustratedValuesToAttributeArray();
        const saveItemDTO: SaveItemInput = {
          bireItemDTO: this.bireItemDTO,
          isCreate: this.isCreateOpenMode,
          bireDamageItemDTOAddedList: this.bireDamageItemDTOAddedList,
          bireDamageItemDTOIdRemoveList: this.bireDamageItemDTOIdRemoveList,
          bireItemAttributeDTOList: this.bireItemAttributeDTO,
          bireItemMaintenanceDTOAddedList: this.bireItemMaintenanceDTOAddedList,
          bireItemMaintenanceDTODeletedList: this.bireItemMaintenanceDTODeletedList,
          bireItemMaintenanceDTOUpdatedList: this.bireItemMaintenanceDTOUpdatedList,
          bireItemSiteDTOAddedList: this.bireItemSiteDTOAddedList,
          bireItemSiteDTODeletedList: this.bireItemSiteDTODeletedList,
          bireItemVersionDTODeletedList: this.bireItemVersionDTODeletedList,
          bireItemVersionDTOAddedList: this.bireItemVersionDTOAddedList,
          bireLocalisationItemDTOAddedList: this.bireLocalisationItemDTOAddedList,
          bireLocalisationItemDTOIdRemoveList: this.bireLocalisationItemDTOIdRemoveList,
          // bireLocalisationItemDTOUpdatedList: this.bireLocalisationItemDTOUpdatedList,
          bireReturnItemDTOAddedList: this.bireReturnItemDTOAddedList,
          bireReturnItemDTODeletedList: this.bireReturnItemDTODeletedList,
          bireTaskItemAddedList: this.bireTaskItemAddedList,
          bireTaskItemDeletedList: this.bireTaskItemDeletedList,
          bireTilItemDTOAddedList: this.bireTilItemDTOAddedList,
          bireTilItemDTODeletedList: this.bireTilItemDTODeletedList,
          createBireDamLocTaskDTOList: this.createBireDamLocTaskDTOList,
          removeBireDamLocTaskDTOIdList: this.removeBireDamLocTaskDTOIdList,
          createBireVersionMeasureDTOList: this.createBireVersionMeasureDTOList,
          removeDataStructureTab: this.removeDataStructureTab,
          saveStructureTab: this.saveStructureTab,
          updateBireVersionMeasureDTOList: this.updateBireVersionMeasureDTOList,
          removeBireVersionMeasureDTOIdList: this.removeBireVersionMeasureDTOIdList,
          bireVersionPnDTOIdDeletedList: this.bireVersionPnDTOIdDeletedList,
          bireItemSiteDTOUpdatedList: this.bireItemSiteDTOUpdatedList,
          documentsAdded: this.documentsAdded,
          documentsRemoved: this.documentsRemoved,
          documentsUpdated: this.documentsUpdated,
          createBirePackBaseOptionList: this.createBirePackBaseOptionList,
          updateBirePackBaseOptionList: this.updateBirePackBaseOptionList,
          removeBirePackBaseOptionList: this.removeBirePackBaseOptionList,
          createBirePackEvolutionDTOList: [],
          updateBirePackEvolutionDTOList: this.updateBirePackEvolutionDTOList,
          packBaseOptionCode: []
        };

        if (this.currentPackNumber && this.currentPackNumber.packBaseOptionCode) {
          saveItemDTO.packBaseOptionCode = [this.currentPackNumber.packBaseOptionCode];
        }

        if (this.evolutionPacksTableList.length > 0) {
          this.createBirePackEvolutionDTOList = [];
          this.evolutionPacksTableList.forEach((obj) => {
            const element: BirePackEvolutionDTO = this.bireItemDTO as BirePackEvolutionDTO;
            element.evolutionNumber = obj.evolutionNumber;
            element.evolutionRevisionNumber = obj.revisionNumber;
            element.packBaseOptionCode = this.currentPackNumber && this.currentPackNumber.packBaseOptionCode;
            element.packEvolutionDescription = obj.description;
            element.vintageDate = obj._obj && obj._obj.vintageDate;
            this.createBirePackEvolutionDTOList.push({ ...element });
          });
          saveItemDTO.createBirePackEvolutionDTOList = this.createBirePackEvolutionDTOList;
        }

        this.showSaveSpinner = true;
        this.itemFormService.saveItem(saveItemDTO).subscribe(
          (result) => {
            if (result === 'SUCCESS') {
              this.componentData.objectId = this.serializationService.serialize(this.bireItemDTO);
              this.updateOpenMode(ComponentOpenMode.Read);
              let context = `${this.bireItemDTO.chapter}-${this.bireItemDTO.section}-${this.bireItemDTO.subject}`;
              context += `-${this.bireItemDTO.sheet}-${this.bireItemDTO.marks}`;
              this.displayComponentContext(context, this.isCreateOpenMode);
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveItem'));
              this.documentsAdded = [];
              this.documentsRemoved = [];
              this.documentsUpdated = [];
              this.createBirePackBaseOptionList = [];
              this.updateBirePackBaseOptionList = [];
              this.removeBirePackBaseOptionList = [];
              this.createBirePackEvolutionDTOList = [];
              this.updateBirePackEvolutionDTOList = [];
              this.createBireVersionMeasureDTOList = [];
              this.updateBireVersionMeasureDTOList = [];
              this.removeBireVersionMeasureDTOIdList = [];
              this.packBaseOptionCode = [];
              this.packNumberData();
            } else {
              // this.messageService.showErrorMessage(result.split('=')[1]);
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveItem'));
            }
            this.showSaveSpinner = false;
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveItem'));
            this.showSaveSpinner = false;
          }
        );
      }
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  private isIllustrationTabValid(): boolean {
    if (!!this.docURL) {
      if (UrlUtils.validateUrl(this.docURL)) {
        return true;
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('invalidURL'));

        return false;
      }
    }

    return true;
  }

  public openUrl(): void {
    UrlUtils.openUrl(this.docURL);
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

  public createItemPN() {
    const bireVersionPnDTO: BireVersionPnDTO = {
      familyCode: this.bireItemDTO.familyCode,
      variantCode: this.bireItemDTO.variantCode,
      structureType: this.bireItemDTO.structureType,
      subject: this.bireItemDTO.subject,
      sheet: this.bireItemDTO.sheet,
      marks: this.bireItemDTO.marks,
      chapter: this.bireItemDTO.chapter,
      section: this.bireItemDTO.section,
      versionNumber:
        this.selectedPartNumber.length > 0
          ? this.selectedPartNumber[0]._obj.versionNumber
          : !!this.partNumberVersionSelected
          ? (this.partNumberVersionSelected.data as string)
          : undefined
    };

    this.openItemPartNumber(bireVersionPnDTO, ComponentOpenMode.Create);
  }

  public editItemPN(row: PartNumberRow): void {
    this.openItemPartNumber(row._obj.bireVersionPnDTO, ComponentOpenMode.Read);
  }

  /**
   * open Item UC on click on Item son/father row
   */
  public openItemUC(ev: ItemFathersAndSonsOutput) {
    if (ev && ev.item && ev.item) {
      const three = 3;
      const four = 4;
      const bireItemDTO: BireItemDTO = {
        chapter: ev.item.split('-')[0],
        section: ev.item.split('-')[1],
        subject: ev.item.split('-')[2],
        sheet: ev.item.split('-')[three],
        marks: ev.item.split('-')[four],
        familyCode: this.bireItemDTO.familyCode,
        structureType: this.bireItemDTO.structureType,
        variantCode: this.bireItemDTO.variantCode
      };

      this.openItem(bireItemDTO, ComponentOpenMode.Read);
    }
  }

  private openItem(objectId: BireItemDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode
    };
    if (!!objectId) {
      const itemFormId: BireItemDTO = {
        familyCode: objectId.familyCode,
        chapter: objectId.chapter,
        section: objectId.section,
        sheet: objectId.sheet,
        marks: objectId.marks,
        subject: objectId.subject,
        structureType: objectId.structureType,
        variantCode: objectId.variantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**
   * Opens evolution on row click
   */
  public openEvolution(evolution): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: evolution.evolutionNumber,
      evolutionRevisionNumber: evolution.evolutionRevisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(evolutionId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadCauseTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.CAUSE_TYPE_MAP).subscribe((results) => {
      this.causeTypeList = ListUtils.orEmpty(results);
    });
  }

  private setReferList(): void {
    const referForNHAKey = this.getTranslateKey('referForNHA');
    const referToKey = this.getTranslateKey('referTo');
    this.translateService.get([referForNHAKey, referToKey]).subscribe((results) => {
      const referForNHALabel = results ? results[referForNHAKey] : 'Refer For NHA';
      const referToLabel = results ? results[referToKey] : 'Refer To';
      this.referList = [
        { label: referForNHALabel, value: 'referNHA' },
        { label: referToLabel, value: 'referToVal' }
      ];
    });
  }

  public isIllustratedChange() {
    if (this.isillustratedSelected) {
      this.toc.push({
        id: 'illustrations',
        anchor: this.illustrations,
        label: 'Illustrations'
      });
    } else {
      let isFound = false;
      let illusIndex = -1;
      this.toc.forEach((res, index) => {
        if (res.id === 'illustrations') {
          isFound = true;
          illusIndex = index;
        }
      });

      if (isFound) {
        this.toc.splice(illusIndex, 1);
      }
    }
  }

  /*************************************************************************
   * Documents tab Operations
   *************************************************************************/
  public addDocument(): void {
    this.currentDocumentIndex = -1;
    this.currentDocument = undefined;
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public editDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.documentsTable.findIndex((document) => {
        return DTOUtils.equalsBireDocumentDTO(document, this.selectedDocuments[0]._obj);
      });
      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocument = this.selectedDocuments[0]._obj;
      this.currentDocumentIndex = undefined;
      this.isReadOnlyDocumentDialog = true;
      this.showDocumentDialog = true;
    }
  }

  private loadDocumentsTable() {
    const bireItemDTOId: BireItemDTOId = {
      familyCode: StringUtils.orEmpty(this.bireItemDTO.familyCode),
      chapter: StringUtils.orEmpty(this.bireItemDTO.chapter),
      subject: StringUtils.orEmpty(this.bireItemDTO.subject),
      variantCode: StringUtils.orEmpty(this.bireItemDTO.variantCode),
      section: StringUtils.orEmpty(this.bireItemDTO.section),
      sheet: StringUtils.orEmpty(this.bireItemDTO.sheet),
      marks: StringUtils.orEmpty(this.bireItemDTO.marks),
      structureType: StringUtils.orEmpty(this.bireItemDTO.structureType)
    };
    this.itemFormService.findBireDocItemsByItem(bireItemDTOId).subscribe((results) => {
      results.forEach((doc) => {
        if (!!doc && !!doc.bireDocumentDTO) {
          this.documentsTable.push(doc.bireDocumentDTO);
          this.bireDocumentDisplayed.push(this.getCustomDocumentRow(doc.bireDocumentDTO));
        }
      });
    });
  }

  private getCustomDocumentRow(newDocument: BireDocumentDTO): DocumentRow {
    return {
      _obj: newDocument,
      docCode: newDocument.docCode,
      docExtension: this.showDocExtension(newDocument),
      docName: newDocument.docName,
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docSize: this.showDocSize(newDocument),
      docSource: newDocument.docSource,
      docCategory: !!newDocument.docType ? this.getLabel(newDocument.docType, this.documentTypes) : undefined
    };
  }

  public showDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  public showDocSize(document: BireDocumentDTO): string {
    return document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentsTable.some((document) => {
        return document.docName === file.name;
      });
      if (fileExists) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnFileExists'));
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (fileContent) {
            const document: BireDocumentDTO = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };

            const bireDocItemDTO: BireDocItemDTO = {
              familyCode: StringUtils.orEmpty(this.bireItemDTO.familyCode),
              chapter: StringUtils.orEmpty(this.bireItemDTO.chapter),
              subject: StringUtils.orEmpty(this.bireItemDTO.subject),
              variantCode: StringUtils.orEmpty(this.bireItemDTO.variantCode),
              section: StringUtils.orEmpty(this.bireItemDTO.section),
              sheet: StringUtils.orEmpty(this.bireItemDTO.sheet),
              marks: StringUtils.orEmpty(this.bireItemDTO.marks),
              structureType: StringUtils.orEmpty(this.bireItemDTO.structureType),
              bireDocumentDTO: document
            };

            this.documentsTable = [...this.documentsTable, document];
            this.documentsAdded = [...this.documentsAdded, bireDocItemDTO];
          }
        });
      }

      fileUploader.clear();
    }
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedDocuments.forEach((selectedDocument) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter((documentAdded) => {
            if (!!documentAdded.bireDocumentDTO) {
              return selectedDocument.docName !== documentAdded.bireDocumentDTO.docName;
            }
          });
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const isRemoved = this.documentsAdded.some((documentAdded) => {
              return DTOUtils.equalsBireDocumentDTO(selectedDocument._obj, documentAdded);
            });
            if (!isRemoved && !!selectedDocument && !!selectedDocument.docCode) {
              const documentId: BireDocItemDTO = {
                familyCode: StringUtils.orEmpty(this.bireItemDTO.familyCode),
                chapter: StringUtils.orEmpty(this.bireItemDTO.chapter),
                subject: StringUtils.orEmpty(this.bireItemDTO.subject),
                variantCode: StringUtils.orEmpty(this.bireItemDTO.variantCode),
                section: StringUtils.orEmpty(this.bireItemDTO.section),
                sheet: StringUtils.orEmpty(this.bireItemDTO.sheet),
                marks: StringUtils.orEmpty(this.bireItemDTO.marks),
                structureType: StringUtils.orEmpty(this.bireItemDTO.structureType),
                docCode: selectedDocument.docCode
              };
              this.documentsRemoved.push(documentId);
            }
          }
          let docIndex = -1;
          this.bireDocumentDisplayed.filter((doc, index) => {
            if (doc.docName === selectedDocument.docName) {
              docIndex = index;
            }
          });

          this.bireDocumentDisplayed.splice(docIndex, 1);
        });
        this.documentsTable = this.documentsTable.filter((document) => {
          return !this.selectedDocuments.some((selectedDocument) => {
            return DTOUtils.equalsBireDocumentDTO(document, selectedDocument._obj);
          });
        });
        this.selectedDocuments = [];
      }
    });
  }

  public addNewDocument(newDocument: BireDocumentDTO) {
    const searchInDisplayedList = this.documentsTable.find((value) => value.docName === newDocument.docName);
    const searchInAddedList = this.documentsAdded.find((value) => {
      if (!!value.bireDocumentDTO) {
        return value.bireDocumentDTO.docName === newDocument.docName;
      }

      return false;
    });
    if (!searchInDisplayedList) {
      if (searchInAddedList) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
      } else {
        const bireDocItemDTO: BireDocItemDTO = {
          familyCode: StringUtils.orEmpty(this.bireItemDTO.familyCode),
          chapter: StringUtils.orEmpty(this.bireItemDTO.chapter),
          subject: StringUtils.orEmpty(this.bireItemDTO.subject),
          variantCode: StringUtils.orEmpty(this.bireItemDTO.variantCode),
          section: StringUtils.orEmpty(this.bireItemDTO.section),
          sheet: StringUtils.orEmpty(this.bireItemDTO.sheet),
          marks: StringUtils.orEmpty(this.bireItemDTO.marks),
          structureType: StringUtils.orEmpty(this.bireItemDTO.structureType),
          bireDocumentDTO: newDocument
        };
        this.documentsAdded.push(bireDocItemDTO);
        this.bireDocumentDisplayed.push(this.getCustomDocumentRow(newDocument));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
    }
  }

  public updateDocument(updatedDocument: BireDocumentDTO): void {
    if (
      this.currentDocumentIndex !== null &&
      this.currentDocumentIndex !== undefined &&
      this.currentDocumentIndex >= 0
    ) {
      const bireDocItemDTO: BireDocItemDTO = {
        familyCode: StringUtils.orEmpty(this.bireItemDTO.familyCode),
        chapter: StringUtils.orEmpty(this.bireItemDTO.chapter),
        subject: StringUtils.orEmpty(this.bireItemDTO.subject),
        variantCode: StringUtils.orEmpty(this.bireItemDTO.variantCode),
        section: StringUtils.orEmpty(this.bireItemDTO.section),
        sheet: StringUtils.orEmpty(this.bireItemDTO.sheet),
        marks: StringUtils.orEmpty(this.bireItemDTO.marks),
        structureType: StringUtils.orEmpty(this.bireItemDTO.structureType),
        docCode: updatedDocument.docCode,
        bireDocumentDTO: updatedDocument
      };
      const inAddedList = this.documentsAdded.some((doc) => doc.docCode === updatedDocument.docCode);
      const inUpdatedList = this.documentsUpdated.some((doc) => doc.docCode === updatedDocument.docCode);
      if (inAddedList) {
        // added but unsaved
        const indexInAddedList = this.documentsAdded.findIndex((doc) => doc.docCode === updatedDocument.docCode);

        this.documentsAdded[indexInAddedList] = bireDocItemDTO;
      } else if (inUpdatedList) {
        // DB value already updated
        const indexInUpdatedList = this.documentsUpdated.findIndex((doc) => doc.docCode === updatedDocument.docCode);
        this.documentsUpdated[indexInUpdatedList] = bireDocItemDTO;
      } else {
        // non updated DB value
        this.documentsUpdated.push(bireDocItemDTO);
      }
      this.documentsTable[this.currentDocumentIndex] = updatedDocument;
      this.bireDocumentDisplayed[this.currentDocumentIndex] = this.getCustomDocumentRow(updatedDocument);
      this.selectedDocuments = [];
    }
  }

  public downloadDocument(event): void {
    FileUtils.downloadFile(event._obj.docFile, event._obj.docName);
  }

  private getLabel(val: string, itemList: LabelValue<string>[]): string {
    let value: LabelValue<string>[] = [];
    if (!!itemList) {
      value = itemList.filter((res) => {
        return res.value === val;
      });
    }

    return value.length > 0 ? value[0].label : val;
  }

  private packNumberData(): void {
    if (!this.isCreateOpenMode) {
      this.itemFormService.findBirePackBaseOptionsByItemTab(this.bireItemDTO).subscribe((results) => {
        results.forEach((result) => {
          const packBaseOptionCode = result.packBaseOptionCode as string;
          if (!this.packNumberMap.has(packBaseOptionCode)) {
            this.packNumberMap.set(packBaseOptionCode, { ...result });
          }
        });

        this.setConfigPackTreeData();

        if (this.packNumberList.length > 0) {
          this.packNumberSelected = this.packNumberList[0];
          this.onSelectPackNumber();
        }
      });
    }
  }

  private setConfigPackTreeData() {
    this.packNumberList = [];
    this.packNumberMap.forEach((value) => {
      this.packNumberList.push({
        label: value.packBaseOptionCode,
        data: value.packBaseOptionCode
      });
    });
  }

  public onSelectPackNumber(): void {
    if (
      this.packNumberSelected &&
      this.packNumberSelected.label &&
      this.packNumberMap.get(this.packNumberSelected.label)
    ) {
      const obj = this.packNumberMap.get(this.packNumberSelected.label);
      this.currentPackNumber = obj || {};
    } else {
      this.currentPackNumber = {};
    }
    this.loadPacksEvolutions();
  }

  public loadPacksEvolutions(): void {
    this.evolutionPacksTableList = [];
    if (this.currentPackNumber && this.currentPackNumber.packBaseOptionCode) {
      const input: BirePackEvolutionInput = {
        bireItemDTO: this.bireItemDTO,
        packBaseOptionCode: this.currentPackNumber.packBaseOptionCode
      };

      this.itemFormService.findBirePackEvolutionsByItemAndPackBaseOptionCodeItem(input).subscribe((results) => {
        results.forEach((obj) => {
          const row: PackEvolutionRow = this.transformEvolutionToRow({ ...obj });
          this.evolutionPacksTableList.push(row);
        });
      });
    }
  }

  public updateConfigPack(obj: BirePackBaseOptionDTO) {
    if (!this.isNewPack && this.packNumberSelected && obj.packBaseOptionCode) {
      if (
        this.packNumberSelected.data.toString() !== obj.packBaseOptionCode &&
        this.packNumberMap.has(obj.packBaseOptionCode)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorPackCodeAlreadyExist'));

        return;
      }

      this.updateBirePackBaseOptionList.forEach((elem, index) => {
        if (obj.packBaseOptionCode === elem.packBaseOptionCode) {
          this.updateBirePackBaseOptionList.splice(index, 1);
        }
      });
      this.updateBirePackBaseOptionList.push(obj);

      this.packNumberMap.set(obj.packBaseOptionCode, obj);
      this.onSelectPackNumber();
    } else {
      if (this.isNewPack && obj.packBaseOptionCode && !this.packNumberMap.has(obj.packBaseOptionCode)) {
        const newPack: TreeNode = {
          label: obj.packBaseOptionCode,
          data: obj.packBaseOptionCode
        };
        this.packNumberList.push(newPack);

        obj.familyCode = this.bireItemDTO.familyCode;
        obj.structureType = this.bireItemDTO.structureType;
        obj.variantCode = this.bireItemDTO.variantCode;
        obj.chapter = this.bireItemDTO.chapter;
        obj.sheet = this.bireItemDTO.sheet;
        obj.marks = this.bireItemDTO.marks;
        obj.section = this.bireItemDTO.section;
        obj.subject = this.bireItemDTO.subject;

        this.createBirePackBaseOptionList.forEach((elem, index) => {
          if (obj.packBaseOptionCode === elem.packBaseOptionCode) {
            this.createBirePackBaseOptionList.splice(index, 1);
          }
        });
        this.createBirePackBaseOptionList.push(obj);

        this.packNumberMap.set(obj.packBaseOptionCode, obj);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorPackCodeAlreadyExist'));
      }
    }
  }

  public deleteConfigPack() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedPack'),
      accept: () => {
        if (this.packNumberSelected && this.currentPackNumber) {
          const obj: BirePackBaseOptionDTOId = this.currentPackNumber as BirePackBaseOptionDTOId;
          this.removeBirePackBaseOptionList.forEach((elem, index) => {
            if (obj.packBaseOptionCode === elem.packBaseOptionCode) {
              this.removeBirePackBaseOptionList.splice(index, 1);
            }
          });
          this.removeBirePackBaseOptionList.push(obj);

          this.packNumberMap.delete(obj.packBaseOptionCode);
          this.currentPackNumber = {};
          this.setConfigPackTreeData();
          this.packNumberSelected = undefined;
          this.selectedEvolutionPacks = [];
          this.evolutionPacksTableList = [];
        }
      }
    });
  }

  public addConfigPack() {
    this.isNewPack = true;
    this.currentPack = {
      componentId: 'ConfigurationPackPopupComponent',
      openMode: ComponentOpenMode.Write,
      object: undefined,
      selectedRow: undefined
    };
    this.showConfigPackDialog = true;
  }

  public editConfigPack() {
    if (this.packNumberSelected && this.currentPackNumber) {
      this.isNewPack = false;
      this.currentPack = {
        componentId: 'ConfigurationPackPopupComponent',
        openMode: ComponentOpenMode.Write,
        object: { ...this.currentPackNumber },
        selectedRow: undefined
      };
      this.showConfigPackDialog = true;
    }
  }

  public addConfigEvolution() {
    if (this.selectedEvolutionPacks.length === 0) {
      this.showAddConfigPackDialog = true;
      this.currentPack = {
        componentId: 'AddEvolutionPopupComponent',
        openMode: ComponentOpenMode.Write,
        object: { ...this.currentPackNumber },
        selectedRow: undefined
      };
    }
  }

  public editConfigEvolution() {
    if (this.selectedEvolutionPacks.length > 0 && this.selectedEvolutionPacks[0]._obj) {
      this.showEditEvolutionPackDialog = true;
      this.currentConfigEvolution = {
        componentId: 'EditEvolutionPopupComponent',
        openMode: ComponentOpenMode.Write,
        object: { ...this.selectedEvolutionPacks[0]._obj },
        selectedRow: undefined
      };
    }
  }

  public deleteConfigEvolution() {
    const partialMessageKey =
      this.selectedEvolutionPacks.length > 1
        ? 'confirmDeleteSelectedConfingEvolutions'
        : 'confirmDeleteConfingEvolution';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedEvolutionPacks.forEach((obj) => {
          if (obj.evolutionNumber) {
            const index = this.evolutionPacksTableList.indexOf(obj);
            this.evolutionPacksTableList.splice(index, 1);
          }
        });
        this.selectedEvolutionPacks = [];
      }
    });
  }

  public updateConfigEvolution(input: BirePackEvolutionOutput) {
    const currentRow: PackEvolutionRow = this.selectedEvolutionPacks[0];
    currentRow._obj = input;
    currentRow.description = input.description;
    currentRow.vintageDate = this.dateService.dateToString(input.vintageDate);

    const birePackEvolutionDTO: BirePackEvolutionDTO = this.bireItemDTO as BirePackEvolutionDTO;
    birePackEvolutionDTO.evolutionNumber = input.evolutionNumber;
    birePackEvolutionDTO.evolutionRevisionNumber = input.evolutionRevisionNumber;
    birePackEvolutionDTO.vintageDate = input.vintageDate;
    birePackEvolutionDTO.packBaseOptionCode = this.currentPackNumber && this.currentPackNumber.packBaseOptionCode;
    birePackEvolutionDTO.packEvolutionDescription = input.description;

    this.updateBirePackEvolutionDTOList.forEach((elem, index) => {
      if (currentRow.evolutionNumber === elem.evolutionNumber) {
        this.updateBirePackEvolutionDTOList.splice(index, 1);
      }
    });

    this.updateBirePackEvolutionDTOList.push(birePackEvolutionDTO);
    this.selectedEvolutionPacks = [];
  }

  public validateConfigEvolution(inputList: EvolutionDetailDTO[]) {
    if (inputList && inputList.length > 0) {
      inputList.forEach((obj) => {
        const checkData = this.evolutionPacksTableList.filter((tableRow) => {
          if (obj.bireEvolutionData) {
            return tableRow.evolutionNumber === obj.bireEvolutionData.evolutionNumber;
          }
        });
        if (checkData.length === 0) {
          const birePackEvolutionOutput: BirePackEvolutionOutput = {
            evolutionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionNumber,
            evolutionRevisionNumber: obj.bireEvolutionData && obj.bireEvolutionData.evolutionRevisionNumber,
            description: undefined,
            vintageDate: undefined,
            designation: undefined
          };
          const row: PackEvolutionRow = this.transformEvolutionToRow({ ...birePackEvolutionOutput });
          this.evolutionPacksTableList.push(row);
        }
      });
    }
  }

  private transformEvolutionToRow(obj: BirePackEvolutionOutput): PackEvolutionRow {
    const packEvolutionRow: PackEvolutionRow = {
      _obj: obj,
      control: obj.interdependency,
      evolutionNumber: obj.evolutionNumber,
      revisionNumber: obj.evolutionRevisionNumber,
      designation: obj.designation,
      description: obj.description,
      vintageDate: this.dateService.dateToString(obj.vintageDate),
      message: obj.issueMessage
    };

    return packEvolutionRow;
  }

  // tslint:disable-next-line:no-any
  public toggleRowDetailsVisibility(row: any): void {
    row.expand = !row.expand;
  }

  public openTaskCode(task) {
    if (task) {
      const bireTaskId: BireTaskDTOId = {
        taskCode: task.code,
        taskVersion: task.version
      };
      this.openTask(bireTaskId, ComponentOpenMode.Read);
    }
  }

  public openTask(object: BireTaskDTO | undefined, openMode: ComponentOpenMode): void {
    if (object != undefined) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.ENG_TASK_FORM,
        objectId: this.serializationService.serialize(object),
        openMode
      };
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }
}
