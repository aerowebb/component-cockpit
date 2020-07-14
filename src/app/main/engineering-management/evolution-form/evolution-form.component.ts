// TODO: clean code
// tslint:disable:no-string-literal

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';

import { ProductStructureHistoryApi } from '../../../shared/api/product-structure-history.api';
import { UpdateHistoricApi } from '../../../shared/api/update-historic.api';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BireActionTypeConstants } from '../../../shared/constants/bire-action-type-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../shared/services/update-historic.service';
import { SaveEvolutionDataInput } from '../../../shared/types/api-input-types/product-structure-management/save-evolution-data-input.interface';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireAlternativePnAndItemPnDTO } from '../../../shared/types/api-types/bire-alternative-pn-and-item-pn-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireDocEvolDTOId } from '../../../shared/types/api-types/bire-doc-evol-dto-id.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionAttributeDTOId } from '../../../shared/types/api-types/bire-evolution-attribute-dto-id.interface';
import { BireEvolutionAttributeDTO } from '../../../shared/types/api-types/bire-evolution-attribute-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-evolution-dto-id.interface';
import { BireEvolutionEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-evolution-dto.interface';
import { BireEvolutionItemDTOId } from '../../../shared/types/api-types/bire-evolution-item-dto-id.interface';
import { BireEvolutionItemDTO } from '../../../shared/types/api-types/bire-evolution-item-dto.interface';
import { BireEvolutionPnDTOId } from '../../../shared/types/api-types/bire-evolution-pn-dto-id.interface';
import { BireEvolutionPnDTO } from '../../../shared/types/api-types/bire-evolution-pn-dto.interface';
import { BireEvolutionSbDTOId } from '../../../shared/types/api-types/bire-evolution-sb-dto-id.interface';
import { BireEvolutionSbDTO } from '../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireEvolutionVariantDTOId } from '../../../shared/types/api-types/bire-evolution-variant-dto-id.interface';
import { BireEvolutionVariantDTO } from '../../../shared/types/api-types/bire-evolution-variant-dto.interface';
import { BireItemItemDTO } from '../../../shared/types/api-types/bire-item-item-dto.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { BireModificationEvolutionDTOId } from '../../../shared/types/api-types/bire-modification-evolution-dto-id.interface';
import { BireModificationEvolutionDTO } from '../../../shared/types/api-types/bire-modification-evolution-dto.interface';
import { BireSbDTOId } from '../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbVariantDTO } from '../../../shared/types/api-types/bire-sb-variant-dto.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { BireTaskEvolutionDTO } from '../../../shared/types/api-types/bire-task-evolution-dto.interface';
import { BireVariantVersionDTO } from '../../../shared/types/api-types/bire-variant-version-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { HBireEvolutionDTO } from '../../../shared/types/api-types/h-bire-evolution-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { TabObjectIdUtils } from '../../../shared/utils/tab-object-id-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';
import { EvolutionSearchService } from '../evolution-search/evolution-search.service';

import { EvolutionFormService } from './evolution-form.service';

interface DocumentRow {
  docCode?: string;
  docExtension?: string;
  docName?: string;
  docPublicationDate?: string;
  docSize?: string;
  docSource?: string;
  _obj: BireDocumentDTO;
}

@Component({
  selector: 'aw-evolution-form',
  templateUrl: './evolution-form.component.html',
  styleUrls: ['./evolution-form.component.scss']
})
export class EvolutionFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  @ViewChild('mainInfoAnchor')
  public mainInfoAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('airworthiDocAnchor')
  public airworthiDocAnchor: ElementRef;

  @ViewChild('applicabilityAnchor')
  public applicabilityAnchor: ElementRef;

  @ViewChild('impactAnchor')
  public impactAnchor: ElementRef;

  @ViewChild('tasksAnchor')
  public tasksAnchor: ElementRef;

  public evolution: BireEvolutionDTO;
  public subtitle: string;
  public showStatusNotMatchedWarning: boolean;
  public statusNotMatchedWarning: string;

  /* POPUP Show Boolean */
  public showApplicabilitiesDialog: boolean;
  public showAssetDialog: boolean;
  public showEvolDialog: boolean;
  public showItemDialog: boolean;
  public showImpactDialog: boolean;
  public showSbadDialog: boolean;
  public showModificationDialog: boolean;
  public showInterdependanceDialog: boolean;

  /* DYNAMIC Attributes & Documents*/
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForEvolution: BireAttributeDTO[];
  public bireEvolutionAttributes: BireEvolutionAttributeDTO[];
  public dynamicAttributesForEvolution: DynamicAttributes[];
  public dynamicAttributesHistoric: Observable<HBidoEquipmentAttributeDTO[]>;

  public bireDocumentDisplayed: DocumentRow[];
  private bireDocumentAddedList: BireDocumentDTO[];
  private bireDocumentUpdatedList: BireDocumentDTO[];
  private bireDocDeletedList: BireDocEvolDTOId[];
  public selectedDocuments: DocumentRow[];
  public currentDocumentIndex: number;
  public currentDocument: BireDocumentDTO;
  public showDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;
  public bireDocument: BireDocumentDTO[];
  public documentsTableCols: TableColumn[];

  /* SBAD Attributes */
  public bireSbadDisplayed: BireEvolutionSbDTO[];
  public currentSbadIndex: number;
  private bireSbadAddedList: BireEvolutionSbDTO[];
  public selectedEvolutions: BireEvolutionSbDTO[];
  public evolutionTableCols: TableColumn[];
  public dataSb: PopupEntry<BireEvolutionSbDTO>;
  public evolutionTableFilteredRowsNb: number;
  public currentSbad: BireEvolutionSbDTO;
  private bireSbadUpdatedList: BireEvolutionSbDTO[];
  private bireSbadDeletedList: BireEvolutionSbDTOId[];
  public bireSb: BireEvolutionSbDTO;
  public bireSbId: string;

  /* ASSETS Attributes */
  public currentAsset: BireConcernedAssetDTO;
  public assetsTableFilteredRowsNb: number;
  public dataAssets: PopupEntry<BireConcernedAssetDTO>;
  public selectedAssets: BireConcernedAssetDTO[];
  public assetsTableCols: TableColumn[];
  public instructions: LabelValue<string>[];
  public currentConcernedAssetIndex: number;
  private bireConcernedAssetAddedList: BireConcernedAssetDTO[];
  public bireConcernedAssetDisplayed: BireConcernedAssetDTO[];

  /* MODIFICATION Attributes */
  public newModif: BireModificationEvolutionDTO;
  public selectedModifications: BireModificationEvolutionDTO[];
  public modificationsTableCols: TableColumn[];
  public modificationsTableFilteredRowsNb: number;
  public dataModif: PopupEntry<BireModificationEvolutionDTO>;
  public currentModificationIndex: number;
  private bireModificationAddedList: BireModificationEvolutionDTO[];
  public bireModificationDisplayed: BireModificationEvolutionDTO[];
  public currentModification: BireModificationEvolutionDTO;
  private bireModificationUpdatedList: BireModificationEvolutionDTO[];
  private bireModificationDeletedList: BireModificationEvolutionDTOId[];
  public bireModif: BireModificationEvolutionDTO;
  public bireModifId: string;

  /* APPLICABILITIES Attributes */
  public newAppli: BireVariantVersionDTO;
  public selectedApplicabilities: BireEvolutionVariantDTO[];
  public applicabilitiesTableCols: TableColumn[];
  public applicabilitiesTableFilteredRowsNb: number;
  public dataAppli: PopupEntry<BireEvolutionVariantDTO>;
  public currentApplicabilityIndex: number;
  private bireApplicabilityAddedList: BireEvolutionVariantDTO[];
  public bireApplicabilityDisplayed: BireEvolutionVariantDTO[];
  public currentApplicability: BireEvolutionVariantDTO;
  private bireApplicabilityUpdatedList: BireEvolutionVariantDTO[];
  private bireApplicabilityDeletedList: BireEvolutionVariantDTOId[];
  public bireAppli: BireEvolutionVariantDTO;
  public bireAppliId: string;

  /* INTERDEPENDENCE Attributes */
  public newInterdep: BireEvolutionEvolutionDTO;
  public selectedInterdependences: BireEvolutionEvolutionDTO[];
  public interdependencesTableCols: TableColumn[];
  public interdependencesTableFilteredRowsNb: number;
  public dataInterdep: PopupEntry<BireEvolutionEvolutionDTO>;
  public currentInterdependenceIndex: number;
  private bireInterdependenceAddedList: BireEvolutionEvolutionDTO[];
  public bireInterdependenceDisplayed: BireEvolutionEvolutionDTO[];
  public currentInterdependence: BireEvolutionEvolutionDTO;
  private bireInterdependenceUpdatedList: BireEvolutionEvolutionDTO[];
  private bireInterdependenceDeletedList: BireEvolutionEvolutionDTOId[];
  public bireInterdep: BireEvolutionEvolutionDTO;
  public bireInterdepId: string;

  /* Impacts on P/N Evolution Attributes */
  public selectedImpactsEvol: BireAlternativePnAndItemPnDTO[];
  public impactsEvolTableCols: TableColumn[];
  public impactsEvolTableFilteredRowsNb: number;
  public dataImpactsEvol: PopupEntry<BireAlternativePnAndItemPnDTO>;
  public currentImpactEvolIndex: number;
  private bireImpactEvolAddedList: BireAlternativePnAndItemPnDTO[];
  public bireImpactEvolDisplayed: BireAlternativePnAndItemPnDTO[];
  public currentImpactEvol: BireAlternativePnAndItemPnDTO;
  private bireImpactEvolUpdatedList: BireAlternativePnAndItemPnDTO[];
  private bireImpactEvolDeletedList: BireAlternativePnAndItemPnDTO[];
  public bireImpactEvol: BireAlternativePnAndItemPnDTO;
  public bireImpactEvolId: string;

  public selectedImpacts: BireEvolutionPnDTO[];
  public impactsTableCols: TableColumn[];
  public impactsTableFilteredRowsNb: number;
  public dataImpacts: PopupEntry<BireEvolutionPnDTO>;
  public currentImpactIndex: number;
  private bireImpactAddedList: BireEvolutionPnDTO[];
  public bireImpactDisplayed: BireEvolutionPnDTO[];
  public currentImpact: BireEvolutionPnDTO;

  private bireImpactUpdatedList: BireEvolutionPnDTO[];
  private bireImpactDeletedList: BireEvolutionPnDTOId[];
  public bireImpact: BireEvolutionPnDTO;
  public bireImpactId: string;

  public selectedImpactsItem: BireEvolutionItemDTO[];
  public impactsItemTableCols: TableColumn[];
  public impactsItemTableFilteredRowsNb: number;
  public dataImpactsItem: PopupEntry<BireEvolutionItemDTO>;
  public currentImpactItemIndex: number;
  private bireImpactItemAddedList: BireEvolutionItemDTO[];
  public bireImpactItemDisplayed: BireEvolutionItemDTO[];
  public currentImpactItem: BireEvolutionItemDTO;
  private bireImpactItemUpdatedList: BireEvolutionItemDTO[];
  private bireImpactItemDeletedList: BireEvolutionItemDTOId[];
  public bireImpactItem: BireEvolutionItemDTO;
  public bireImpactItemId: string;

  public fatherItem: BireItemItemDTO[];
  public item: string;
  public variant: string;

  /* Tab Management */
  public currentTabId: string;
  public tabModificationsId: string;
  public tabImpactsId: string;
  public tabGeneralId: string;
  public tabApplicabilitiesId: string;

  /* DropDown Lists */
  public propertyVariant: LabelValue<string>[];
  public propertyType: LabelValue<string>[];
  public propertyCompliance: LabelValue<string>[];
  public propertyLevel: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyStatusSbad: LabelValue<string>[];
  public propertyActionType: LabelValue<string>[];
  public propertyActionTypeImpactItem: LabelValue<string>[];
  public propertyActionTypeImpact: LabelValue<string>[];
  public propertyInterchangeability: LabelValue<string>[];
  public interdependence: LabelValue<string>[];
  public propertyObjectStatus: LabelValue<string>[];

  /* TASK Attributes */
  public tasksTableCols: TableColumn[];
  public selectedTask: BireTaskEvolutionDTO[];
  public tabTaskId: string;
  public tasksTable: BireTaskEvolutionDTO[];
  public tasksTableFilteredRowsNb: number;
  public dataTasks: PopupEntry<BireTaskEvolutionDTO>;
  public dataAttributesHistoric: PopupEntry<BireEvolutionDTO>;
  public opeAttributesTableCols: TableColumn[];

  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public arrowOrientation: Map<BireEvolutionEvolutionDTO, boolean>;

  // Status and Update popup
  public tableStatusUpdatesData: DialogTableData<HBireEvolutionDTO>;
  public evolutionStatus: BireEvolutionDTO;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public showStatusUpdatesPopup: boolean;
  public isReadOnlyImpactEvolDialog: boolean;
  public isNewImpactEvol: boolean;
  public displayStatusPopupInterdep: boolean;
  public rightArrow: boolean;
  public isReadOnlyInterdependenceDialog: boolean;
  public isNewInterdependence: boolean;
  public displayStatusPopupAppli: boolean;
  public isReadOnlyApplicabilityDialog: boolean;
  public isNewApplicability: boolean;
  public isReadOnlyModificationDialog: boolean;
  public isNewModification: boolean;
  public displayStatusPopupModif: boolean;
  public isEditable: boolean;
  public displayStatusPopup: boolean;
  public showDynamicAttributesHistoric: boolean;
  public isNewSbad: boolean;
  public isReadOnlySbadDialog: boolean;
  public displayStatusPopupSb: boolean;
  public isNewAsset: boolean;
  public isReadOnlyAssetDialog: boolean;
  public displayStatusPopupImpactEvol: boolean;
  public isReadOnlyImpactDialog: boolean;
  public isNewImpact: boolean;
  public displayStatusPopupImpact: boolean;
  public isReadOnlyImpactItemDialog: boolean;
  public isNewImpactItem: boolean;
  public displayStatusPopupImpactItem: boolean;
  public selectedAnchor: string | undefined;
  public toc: PageTocEntry[];
  private isCreateMode: boolean = true;
  public resultsTable: BireEvolutionDTO[];
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public productStructureHistoryApi: ProductStructureHistoryApi,
    public dateService: DateService,
    private readonly evolutionFormService: EvolutionFormService,
    private readonly confirmationService: ConfirmationService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly updateHistoricService: UpdateHistoricService,
    public sessionService: SessionService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly evolutionSearchService: EvolutionSearchService,
    private readonly propertiesService: PropertiesService,
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

    super.registerPageTocEntryObservable();

    // For status/updates popup
    this.showStatusUpdatesPopup = false;
    this.deleteApi = this.updateHistoricApi.removeBireEvolutionHistory;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.tabModificationsId = 'modifications';
    this.tabImpactsId = 'impacts';
    this.tabGeneralId = 'general';
    this.tabApplicabilitiesId = 'applicabilities';
    this.tabTaskId = 'task';

    this.attributeIdValueMap = new Map<string, string>();
    this.bireAttributesForEvolution = [];
    this.dynamicAttributesForEvolution = [];
    this.bireEvolutionAttributes = [];
    this.opeAttributesTableCols = [];
    this.showDynamicAttributesHistoric = false;
    this.rightArrow = false;
    this.displayStatusPopup = false;
    this.bireDocumentDisplayed = [];
    this.bireDocumentAddedList = [];
    this.bireDocumentUpdatedList = [];
    this.bireDocDeletedList = [];
    this.selectedDocuments = [];
    this.bireDocument = [];

    this.getBireAttributesForEvolution();

    this.selectedEvolutions = [];
    this.selectedModifications = [];
    this.selectedInterdependences = [];
    this.selectedApplicabilities = [];
    this.selectedTask = [];
    this.tasksTable = [];
    this.selectedAssets = [];
    this.selectedImpactsEvol = [];
    this.selectedImpacts = [];
    this.selectedImpactsItem = [];
    this.isEditable = false;
    this.evolution = {};
    this.currentTabId = this.tabGeneralId;
    this.evolutionTableFilteredRowsNb = 0;
    this.modificationsTableFilteredRowsNb = 0;
    this.interdependencesTableFilteredRowsNb = 0;
    this.applicabilitiesTableFilteredRowsNb = 0;
    this.assetsTableFilteredRowsNb = 0;
    this.tasksTableFilteredRowsNb = 0;
    this.impactsEvolTableFilteredRowsNb = 0;
    this.impactsTableFilteredRowsNb = 0;
    this.impactsItemTableFilteredRowsNb = 0;
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.arrowOrientation = new Map<BireEvolutionEvolutionDTO, boolean>();
    this.bireSbadDisplayed = [];
    this.bireConcernedAssetAddedList = [];
    this.bireConcernedAssetDisplayed = [];
    this.bireModificationDisplayed = [];
    this.bireApplicabilityDisplayed = [];
    this.bireInterdependenceDisplayed = [];
    this.bireImpactDisplayed = [];
    this.bireImpactItemDisplayed = [];
    this.bireImpactEvolDisplayed = [];
    this.instructions = [];

    // POPUP Show Boolean init
    this.showApplicabilitiesDialog = false;
    this.showAssetDialog = false;
    this.showEvolDialog = false;
    this.showItemDialog = false;
    this.showImpactDialog = false;
    this.showInterdependanceDialog = false;
    this.showModificationDialog = false;
    this.showSbadDialog = false;
    this.selectedAnchor = undefined;
    this.resultsTable = [];

    this.initLists();

    this.propertyActionType = [];

    this.loadTablesHeader();
    this.fillDropDown();

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Change the DropDownList content regarding the langage
      this.fillDropDown();
    });
  }

  public getComponentName(): string {
    return 'EvolutionFormComponent';
  }

  public initLists() {
    this.bireSbadAddedList = [];
    this.bireSbadDeletedList = [];
    this.bireSbadUpdatedList = [];
    this.bireModificationAddedList = [];
    this.bireModificationDeletedList = [];
    this.bireModificationUpdatedList = [];
    this.bireApplicabilityAddedList = [];
    this.bireApplicabilityDeletedList = [];
    this.bireApplicabilityUpdatedList = [];
    this.bireInterdependenceAddedList = [];
    this.bireInterdependenceDeletedList = [];
    this.bireInterdependenceUpdatedList = [];
    this.bireImpactAddedList = [];
    this.bireImpactDeletedList = [];
    this.bireImpactUpdatedList = [];
    this.bireImpactItemAddedList = [];
    this.bireImpactItemDeletedList = [];
    this.bireImpactItemUpdatedList = [];
    this.bireImpactEvolAddedList = [];
    this.bireImpactEvolDeletedList = [];
    this.bireImpactEvolUpdatedList = [];

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForEvolution = this.dynamicAttributesService.from(this.bireAttributesForEvolution);
    });
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      let context = '';

      this.updateOpenMode(this.componentData.openMode);

      if (
        this.componentData.objectId &&
        this.componentData.objectId !== 'null' &&
        this.componentData.objectId.length > 0
      ) {
        this.isEditable = false;
        let evolutionId: BireEvolutionDTOId = {};
        if (this.componentData.objectId.indexOf(';') !== -1) {
          evolutionId = {
            evolutionNumber: this.componentData.objectId.split(';')[0],
            evolutionRevisionNumber: this.componentData.objectId.split(';')[1]
          };

          this.componentData.objectId = this.serializationService.serialize(evolutionId);
        }

        const tempContext = TabObjectIdUtils.bireEvolutionDTOIdToString(
          this.serializationService.deserialize(this.componentData.objectId)
        ).split('|');
        tempContext.forEach((element) => {
          context += element + TabObjectIdUtils.CONTEXT_SEPARATOR;
        });
        context = context.substring(0, context.length - 1);
        this.subtitle = context;
        this.displayComponentContext(context, this.isCreateOpenMode);

        this.loadEvolution();
      } else {
        this.isEditable = true;
      }

      this.evolutionList();
    }

    const mainDataKey = 'page.mainData';
    const impactKey = 'global.impacts';
    const generalKey = 'global.general';
    const airworthiDocKey = 'global.sbadMod';
    const applicabilityKey = 'global.applicabilities';
    const tasksKey = 'global.tasks';

    this.translateService
      .get([mainDataKey, impactKey, generalKey, airworthiDocKey, applicabilityKey, tasksKey])
      .subscribe((results) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main data';
        const impactLabel = !!results ? results[impactKey] : 'Impacts';
        const generalLabel = !!results ? results[generalKey] : 'Additional information';
        const airworthiDocLabel = !!results ? results[airworthiDocKey] : 'Airworthiness Documents/MODs';
        const applicabilityLabel = !!results ? results[applicabilityKey] : 'Applicabilities';
        const tasksLabel = !!results ? results[tasksKey] : 'Tasks';

        this.toc = [
          {
            id: 'mainInfoAnchor',
            anchor: this.mainInfoAnchor,
            label: mainDataLabel
          },
          {
            id: 'impactAnchor',
            anchor: this.impactAnchor,
            label: impactLabel
          },
          {
            id: 'generalAnchor',
            anchor: this.generalAnchor,
            label: generalLabel
          },
          {
            id: 'airworthiDocAnchor',
            anchor: this.airworthiDocAnchor,
            label: airworthiDocLabel
          },
          {
            id: 'applicabilityAnchor',
            anchor: this.applicabilityAnchor,
            label: applicabilityLabel
          },
          {
            id: 'tasksAnchor',
            anchor: this.tasksAnchor,
            label: tasksLabel
          }
        ];
      });

    super.selectPageTocEntry('mainInfoAnchor');
  }

  public refresh(): void {
    if (this.isCreateOpenMode && this.isCreateMode) {
      this.initOnCreate();
    } else {
      this.loadDocuments();
      this.reloadEvolution();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private loadDocuments() {
    this.bireDocumentAddedList = [];
    this.bireDocumentUpdatedList = [];

    this.bireDocument = [];
    this.bireDocumentDisplayed.forEach((obj) => {
      this.bireDocument.push({ ...obj._obj });
    });
    this.findBireDocumentsByEvol();
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadEvolution(): void {
    this.init();
    this.loadEvolution();
  }

  private init(): void {
    this.evolution = {};

    this.selectedApplicabilities = [];
    this.selectedAssets = [];
    this.selectedEvolutions = [];
    this.selectedImpacts = [];
    this.selectedImpactsEvol = [];
    this.selectedImpactsItem = [];
    this.selectedInterdependences = [];
    this.selectedModifications = [];
    this.selectedTask = [];
    this.bireDocumentDisplayed = [];
    this.bireDocumentAddedList = [];
    this.bireDocumentUpdatedList = [];
    this.bireDocDeletedList = [];
    this.selectedDocuments = [];

    this.loadTablesHeader();
    this.fillDropDown();
  }

  private initOnCreate(): void {
    this.evolution = {};

    this.selectedApplicabilities = [];
    this.selectedAssets = [];
    this.selectedEvolutions = [];
    this.selectedImpacts = [];
    this.selectedImpactsEvol = [];
    this.selectedImpactsItem = [];
    this.selectedInterdependences = [];
    this.selectedModifications = [];
    this.selectedTask = [];

    this.initAttributeValue();
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesForEvolution);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public loadEvolution(): void {
    if (!!this.componentData && !!this.componentData.objectId) {
      let evolutionId: BireEvolutionDTOId = {};
      if (this.componentData.objectId.indexOf(';') !== -1) {
        evolutionId = {
          evolutionNumber: this.componentData.objectId.split(';')[0],
          evolutionRevisionNumber: this.componentData.objectId.split(';')[1]
        };
      } else {
        evolutionId = this.serializationService.deserialize(this.componentData.objectId);
      }
      this.evolutionFormService.findBireEvolution(evolutionId).subscribe((result) => {
        this.evolution = result;
        if (this.evolution) {
          this.loadTablesAssociated();
          this.getBireEvolutionAttributes();
          this.findBireDocumentsByEvol();
          if (this.evolution.statusState === '3-loa' || this.evolution.statusState === '9-upd') {
            this.evolution.statusState = '1-ong';
          }
        }
        this.openHistoricAttributes();
      });
    }
  }

  /**************************************************************************
   * Tabs management
   *************************************************************************/

  public openModificationsTab(): void {
    this.currentTabId = this.tabModificationsId;
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openTaskTab(): void {
    this.currentTabId = this.tabTaskId;
  }

  public openApplicabilitiesTab(): void {
    this.currentTabId = this.tabApplicabilitiesId;
  }

  public openImpactsTab(): void {
    this.currentTabId = this.tabImpactsId;
  }

  /**************************************************************************
   * Tables management
   *************************************************************************/

  // tslint:disable-next-line:no-any
  public onFilterTable(event: any): void {
    this.evolutionTableFilteredRowsNb = event.filteredValue.length;
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetForm(): void {
    this.evolution = {};
  }

  /**************************************************************************
   * Show popup functions
   *************************************************************************/

  public openStatus(rowData: BireEvolutionDTO): void {
    // StatusManagementApi?
    /*this.dataStatus = {
            componentId: 'StatusPopupFormComponent',
            selectedRow: rowData,
            object: null,
            openMode: ComponentOpenMode.Read
        };*/
  }

  public openHistoricAttributes(): void {
    if (!!this.evolution.evolutionNumber && !!this.evolution.evolutionRevisionNumber) {
      this.showDynamicAttributesHistoric = true;

      const attributeIds: BireEvolutionAttributeDTOId[] = this.dynamicAttributesService.toBireEvolutionAttributeId(
        this.evolution.evolutionNumber,
        this.evolution.evolutionRevisionNumber,
        this.dynamicAttributesForEvolution
      );
      this.dynamicAttributesHistoric = this.evolutionFormService.findHBireEvolutionAttributesByAttributeId(
        attributeIds
      );
    }
  }

  public openEvolution(objectId: string | undefined): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId,
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**************************************************************************
   * Duplicate functions
   *************************************************************************/

  public duplicateImpactEvol(): void {
    // this.updateImpactEvol(true);
  }

  public duplicateImpact(): void {
    // this.updateImpact();
  }

  public duplicateImpactItem(): void {
    // this.updateImpactItem(true);
  }

  /**************************************************************************
   * Loading tables and dropdown
   *************************************************************************/

  public loadTablesHeader(): void {
    this.evolutionTableCols = [
      { field: 'sbNumber', alignment: 'left' },
      { field: 'sbRevisionNumber', alignment: 'left' },
      { field: 'sbTitle', alignment: 'left', width: '40%' },
      { field: 'sbType', alignment: 'left' }
    ];

    this.modificationsTableCols = [
      { field: 'modificationNumber', alignment: 'left' },
      { field: 'modificationRevisionNumber', alignment: 'left' },
      { field: 'modificationTitle', alignment: 'left', width: '40%' },
      { field: 'modificationType', alignment: 'left' }
    ];

    this.interdependencesTableCols = [
      { field: 'variantCode', alignment: 'left' },
      { field: 'way', alignment: 'left' },
      { field: 'interdependenceCode', alignment: 'left' },
      { field: 'evoEvolutionNumber', alignment: 'left' },
      { field: 'evoEvolutionRevisionNumber', alignment: 'left' }
    ];

    this.applicabilitiesTableCols = [
      { field: 'variantStructureTypeFamily', alignment: 'left' },
      { field: 'evolutionApplicabilityDate', alignment: 'left' },
      { field: 'statusStatePerPartner', alignment: 'left' }
    ];

    this.assetsTableCols = [
      { field: 'assetPn', alignment: 'left' },
      { field: 'assetSn', alignment: 'left' },
      { field: 'assetActionType', alignment: 'left' }
    ];

    this.tasksTableCols = [
      { field: 'taskCode', alignment: 'left' },
      { field: 'taskVersion', alignment: 'left' },
      { field: 'taskEvolutionTypeCode', alignment: 'left' }
    ];

    this.impactsEvolTableCols = [
      { field: 'variant', alignment: 'left' },
      { field: 'item', alignment: 'left' },
      { field: 'pnCode', alignment: 'left' },
      { field: 'pnPnCode', alignment: 'left' },
      { field: 'actionTypeCode', alignment: 'left' },
      { field: 'quantityBefore', alignment: 'left' },
      { field: 'quantityAfter', alignment: 'left' },
      { field: 'interchangeability', alignment: 'left' },
      { field: 'applicability', alignment: 'left' }
    ];

    this.impactsTableCols = [
      { field: 'variant', alignment: 'left' },
      { field: 'item', alignment: 'left' },
      { field: 'assetPn', alignment: 'left' },
      { field: 'actionTypeCode', alignment: 'left' },
      { field: 'applicability', alignment: 'left' }
    ];

    this.impactsItemTableCols = [
      { field: 'variant', alignment: 'left' },
      { field: 'itemFather', alignment: 'left' },
      { field: 'inGroup', alignment: 'left' },
      { field: 'item', alignment: 'left' },
      { field: 'actionTypeCode', alignment: 'left' }
    ];

    this.opeAttributesTableCols = [
      { field: 'dateAndHour', alignment: 'left', width: '5rem' },
      { field: 'author', alignment: 'left', width: '5rem' },
      { field: 'state', alignment: 'left', width: '5rem' },
      { field: 'value', alignment: 'left', width: '5rem' },
      { field: 'downloadDate', alignment: 'left', width: '5rem' }
    ];

    this.documentsTableCols = [
      { field: 'docName', alignment: 'left' },
      { field: 'docSource', alignment: 'left' },
      { field: 'docExtension', alignment: 'left' },
      { field: 'docSize', alignment: 'left' },
      { field: 'docPublicationDate', alignment: 'left' }
    ];
  }

  public loadTablesAssociated(): void {
    this.showStatusNotMatchedWarning = false;
    this.statusNotMatchedWarning = '';
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: this.evolution.evolutionNumber,
      evolutionRevisionNumber: this.evolution.evolutionRevisionNumber
    };
    this.evolutionFormService.findBireEvolutionSbsByEvolution(this.evolution).subscribe(
      (results) => {
        if (results) {
          this.bireSbadDisplayed = results;
          results.forEach((element) => {
            if (this.evolution.statusState !== element.statusState) {
              this.showStatusNotMatchedWarning = true;
              const statusKey = this.getTranslateKey('statusNotMatchedMessage');
              this.translateService.get(statusKey).subscribe((result: string) => {
                this.statusNotMatchedWarning = result;
              });
            }
            if (this.propertyStatusSbad.filter((status) => status.value === element.statusState).length !== 0) {
              element.statusState = this.propertyStatusSbad.filter(
                (status) => status.value === element.statusState
              )[0].label;
            }
            // TODO: Appends when the evolution is upgraded, but why the SB/AD Status change too?
            if (element.statusState === '9-upd') {
              element.statusState = 'Updated';
            }

            this.propertiesService
              .getValue(GenericPropertyConstants.SB_TYPE_MAP)
              .subscribe((sbTypes: LabelValue<string>[]) => {
                sbTypes.forEach((tmp: LabelValue<string>) => {
                  if (element.sbType === tmp.value) {
                    element.sbType = tmp.label;
                  }
                });
              });
          });
          this.evolutionTableFilteredRowsNb = this.bireSbadDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetSBADResults'));
      }
    );

    this.evolutionFormService.findBireModificationEvolutionsByEvolution(this.evolution).subscribe(
      (results) => {
        if (results) {
          this.bireModificationDisplayed = results;
          this.modificationsTableFilteredRowsNb = this.bireModificationDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetModificationsResults'));
      }
    );
    this.evolutionFormService.findBireEvolutionEvolutionsByEvolution(this.evolution).subscribe(
      (results) => {
        if (results) {
          this.bireInterdependenceDisplayed = results;
          results.forEach((element) => {
            if (element.interdependenceCode) {
              element.interdependenceCode = this.interdependence.filter(
                (status) => status.value === element.interdependenceCode
              )[0].label;
            }
            if (
              this.evolution.evolutionNumber === element.evolutionNumber &&
              this.evolution.evolutionRevisionNumber === element.evolutionRevisionNumber
            ) {
              this.arrowOrientation.set(element, true);
            } else {
              this.arrowOrientation.set(element, false);
              element.evoEvolutionNumber = element.evolutionNumber;
              element.evoEvolutionRevisionNumber = element.evolutionRevisionNumber;
            }
          });

          this.interdependencesTableFilteredRowsNb = this.bireInterdependenceDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInterdependencesResults'));
      }
    );

    this.evolutionFormService.findBireEvolutionVariantsByEvolutionNumbers(evolutionId).subscribe(
      (results) => {
        if (results) {
          this.bireApplicabilityDisplayed = results;
          this.applicabilitiesTableFilteredRowsNb = this.bireApplicabilityDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetApplicabilitiesResults'));
      }
    );

    this.evolutionFormService.findBireConcernedAssetsByEvolution(evolutionId).subscribe(
      (results) => {
        if (results) {
          results.forEach((element) => {
            if (element.assetActionType) {
              element.assetActionType = this.instructions.filter(
                (actionType) => actionType.value === element.assetActionType
              )[0].label;
            }
          });

          this.bireConcernedAssetDisplayed = results;
          this.assetsTableFilteredRowsNb = this.bireConcernedAssetDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetAssetsResults'));
      }
    );

    this.evolutionFormService.findBireEvolutionPnsByEvolution(evolutionId).subscribe(
      (results) => {
        if (results) {
          this.bireImpactDisplayed = results;
          results.forEach((element) => {
            element.actionTypeCode = this.propertyActionTypeImpact.filter(
              (action) => action.value === element.actionTypeCode
            )[0].label;

            element[
              'item'
            ] = `${element.chapter}-${element.section}-${element.subject}-${element.sheet}-${element.marks}`;

            element['variant'] = `${element.familyCode}-${element.structureType}-${element.variantCode}`;

            element['assetPn'] = `${element.pnCode}`;
          });
          this.bireImpactDisplayed = results;
          this.impactsTableFilteredRowsNb = this.bireImpactDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetImpactsOnPNResults'));
      }
    );

    this.evolutionFormService.findBireEvolutionItemsByEvolution(evolutionId).subscribe(
      (results) => {
        if (results) {
          // this.bireImpactItemDisplayed = results;
          this.bireImpactItemDisplayed = [];
          results.forEach((element) => {
            if (element.actionTypeCode) {
              element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
                (action) => action.value === element.actionTypeCode
              )[0].label;
            }

            element[
              'item'
            ] = `${element.chapter}-${element.section}-${element.subject}-${element.sheet}-${element.marks}`;

            element['variant'] = `${element.familyCode}-${element.structureType}-${element.variantCode}`;
            this.findBireItemItemsByItemSon(element, (result: BireItemItemDTO[]) => {
              if (!!result && result.length !== 0) {
                let itemFather = `${result[0].fatherChapter}-${result[0].fatherSection}-`;
                itemFather += `${result[0].fatherSheet}-${result[0].fatherSubject}-${result[0].fatherMarks}`;
                element['itemFather'] = itemFather;
              }
              this.bireImpactItemDisplayed.push(element);
            });
          });
          this.impactsItemTableFilteredRowsNb = this.bireImpactItemDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetImpactsOnItemResults'));
      }
    );

    this.evolutionFormService.findBireItemPnEvolutionsByEvolution(evolutionId).subscribe(
      (results) => {
        if (results) {
          this.bireImpactEvolDisplayed = results;
          results.forEach((element) => {
            if (element.actionTypeCode) {
              element.actionTypeCode = this.propertyActionType.filter(
                (action) => action.value === element.actionTypeCode
              )[0].label;
            }
            if (element.interchangeability) {
              element.interchangeability = this.propertyInterchangeability.filter(
                (interchangeability) => interchangeability.value === element.interchangeability
              )[0].label;
            }

            element[
              'item'
            ] = `${element.chapter}-${element.section}-${element.subject}-${element.sheet}-${element.marks}`;

            element['variant'] = `${element.familyCode}-${element.structureType}-${element.variantCode}`;
          });
          this.bireImpactEvolDisplayed = results;
          this.impactsEvolTableFilteredRowsNb = this.bireImpactEvolDisplayed.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetImpactsOnEvolResults'));
      }
    );

    this.evolutionFormService.findBireTaskEvolutionsByEvolution(evolutionId).subscribe(
      (results) => {
        if (results) {
          this.tasksTable = results;
          this.tasksTableFilteredRowsNb = this.tasksTable.length;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTasksResults'));
      }
    );
  }

  // Get differents attributes list for this object
  public getBireAttributesForEvolution(): void {
    this.evolutionFormService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY)
      .subscribe(
        (results) => {
          this.bireAttributesForEvolution.push(...results);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
        }
      );

    this.evolutionFormService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_EVOLUTION_KEY)
      .subscribe(
        (results) => {
          this.bireAttributesForEvolution.push(...results);
          setTimeout(() => {
            this.dynamicAttributesForEvolution = this.dynamicAttributesService.from(this.bireAttributesForEvolution);
            this.getBireEvolutionAttributes();
          });
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
        }
      );
  }

  public getBireEvolutionAttributes(): void {
    this.evolutionFormService.findBireEvolutionAttributesByEvolution(this.evolution).subscribe(
      (results) => {
        this.bireEvolutionAttributes = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributesForEvolution, this.bireEvolutionAttributes);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByEvolution'));
      }
    );
  }

  public initAttributeIdValueMap() {
    // Real code
    this.bireEvolutionAttributes.forEach((element) => {
      if (!!element.attributeId && !!element.attributeValue) {
        this.attributeIdValueMap.set(element.attributeId, element.attributeValue);
      } else {
        super.throwUnboundLocalError('initAttributeValueMap', 'element');
      }
    });
  }

  public fillDropDown() {
    this.evolutionFormService.getFuncObjectStatusMap().subscribe(
      (results) => {
        this.propertyStatus = results;
        // this.propertyStatusSbad = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );
    this.evolutionFormService.getFunctionObjectionStatus('3-loa').subscribe(
      (results) => {
        this.propertyStatusSbad = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );
    this.evolutionFormService.getObjectStatusMap().subscribe(
      (results) => {
        this.propertyObjectStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatus'));
      }
    );
    this.evolutionFormService.getEvolutionTypeMap().subscribe(
      (results) => {
        this.propertyType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionType'));
      }
    );
    this.evolutionFormService.getEvolutionLevelMap().subscribe(
      (results) => {
        this.propertyLevel = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionLevel'));
      }
    );
    this.evolutionFormService.getComplianceMap().subscribe(
      (results) => {
        this.propertyCompliance = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionCompliance'));
      }
    );
    this.evolutionFormService.findAllBireInterdependences().subscribe(
      (results) => {
        this.interdependence = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInterdependences'));
      }
    );
    this.evolutionFormService.getAssetActionType().subscribe(
      (results) => {
        this.instructions = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInstructions'));
      }
    );
    this.evolutionFormService.findBireActionTypesByActionTypeCode(BireActionTypeConstants.ACTION_TYPE_B).subscribe(
      (results) => {
        this.propertyActionType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetActionTypes'));
      }
    );
    this.evolutionFormService.findBireActionTypesByActionTypeCode(BireActionTypeConstants.ACTION_TYPE_A).subscribe(
      (results) => {
        this.propertyActionTypeImpact = results;
        this.propertyActionTypeImpactItem = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetActionTypes'));
      }
    );
    this.evolutionFormService.findAllBireVariantVersions().subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((element) => {
          if (!!element.labelValueDTO) {
            list.push(element.labelValueDTO);
            this.familyVariantMap.set(element.labelValueDTO, element);
          } else {
            super.throwUnboundLocalError('fillDropdown', 'element.labelValueDTO');
          }
        });
        this.propertyVariant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
    this.evolutionFormService.getPnInterchangeabilityMap().subscribe(
      (results) => {
        this.propertyInterchangeability = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInterchangeability'));
      }
    );

    if (!this.evolution.statusState) {
      this.evolution.statusState = '1-ong';
    }
  }

  /**************************************************************************
   * SBAD table
   *************************************************************************/

  public confirmDeleteSbad(): void {
    const partialMessageKey = 'deleteConfirmationSbad';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedSbad();
      }
    });
  }

  public createSbad(): void {
    this.showSbadDialog = true;
    this.isNewSbad = true;
    this.isReadOnlySbadDialog = false;
    this.dataSb = {
      componentId: 'SbadPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editSbad(): void {
    this.isNewSbad = false;
    this.isReadOnlySbadDialog = false;
    if (this.selectedEvolutions.length === 1) {
      this.currentSbad = { ...this.selectedEvolutions[0] };
      this.currentSbadIndex = this.bireSbadDisplayed.indexOf(this.selectedEvolutions[0]);
      this.showSbadDialog = true;
      this.dataSb = {
        componentId: 'SbadPopupDialog',
        selectedRow: this.selectedEvolutions,
        object: this.currentSbad,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openSbad(): void {
    this.isReadOnlySbadDialog = true;
    if (this.selectedEvolutions.length === 1) {
      this.currentSbad = { ...this.selectedEvolutions[0] };
      this.currentSbadIndex = this.bireSbadDisplayed.indexOf(this.selectedEvolutions[0]);
      this.showSbadDialog = true;
      this.dataSb = {
        componentId: 'SbadPopupDialog',
        selectedRow: this.selectedEvolutions,
        object: this.currentSbad,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewSbad(newSbad: BireEvolutionSbDTO) {
    if (newSbad.statusState) {
      newSbad.statusState = this.propertyStatusSbad.filter((status) => status.value === newSbad.statusState)[0].label;
    }
    const searchInDisplayedList = this.bireSbadDisplayed.find(
      (value) =>
        value.sbNumber === newSbad.sbNumber &&
        value.sbRevisionNumber === newSbad.sbRevisionNumber &&
        value.statusState === newSbad.statusState
    );
    if (!searchInDisplayedList) {
      this.bireSbadAddedList.push(newSbad);
      this.bireSbadDisplayed.push(newSbad);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('SbadAlreadyExists'));
    }
  }

  private deleteSelectedSbad() {
    this.selectedEvolutions.forEach((element) => {
      if (
        !!element.evolutionNumber &&
        !!element.evolutionRevisionNumber &&
        !!element.sbNumber &&
        !!element.sbRevisionNumber
      ) {
        const sbadId: BireEvolutionSbDTOId = {
          evolutionNumber: element.evolutionNumber,
          evolutionRevisionNumber: element.evolutionRevisionNumber,
          sbNumber: element.sbNumber,
          sbRevisionNumber: element.sbRevisionNumber
        };
        const searchInAddedList = this.bireSbadAddedList.find(
          (value) => value.sbNumber === element.sbNumber && value.sbRevisionNumber === element.sbRevisionNumber
        );
        const searchInUpdatedList = this.bireSbadAddedList.find(
          (value) => value.sbNumber === element.sbNumber && value.sbRevisionNumber === element.sbRevisionNumber
        );
        if (searchInAddedList) {
          const indexInAddedList = this.bireSbadAddedList.indexOf(searchInAddedList);
          this.bireSbadAddedList.splice(indexInAddedList, 1);
        } else if (searchInUpdatedList) {
          const indexInUpdatedList = this.bireSbadUpdatedList.indexOf(searchInUpdatedList);
          this.bireSbadUpdatedList.splice(indexInUpdatedList, 1);
          this.bireSbadDeletedList.push(sbadId);
        } else {
          this.bireSbadDeletedList.push(sbadId);
        }
        const indexInDisplayedList = this.bireSbadDisplayed.indexOf(element);
        this.bireSbadDisplayed.splice(indexInDisplayedList, 1);
      } else {
        // super.throwUnboundLocalError('deleteSelectedSbad', 'element');
        const searchInAddedList = this.bireSbadAddedList.find(
          (value) => value.sbNumber === element.sbNumber && value.sbRevisionNumber === element.sbRevisionNumber
        );
        if (searchInAddedList) {
          const indexInAddedList = this.bireSbadAddedList.indexOf(searchInAddedList);
          this.bireSbadAddedList.splice(indexInAddedList, 1);
        }
        const indexInDisplayedList = this.bireSbadDisplayed.indexOf(element);
        this.bireSbadDisplayed.splice(indexInDisplayedList, 1);
      }
    });
    this.selectedEvolutions = [];
  }

  public updateSbad(udpatedSbad: BireEvolutionSbDTO) {
    if (udpatedSbad.statusState) {
      udpatedSbad.statusState = this.propertyStatusSbad.filter(
        (status) => status.value === udpatedSbad.statusState
      )[0].label;
    }
    const previousSbadObject = this.bireSbadDisplayed[this.currentSbadIndex];
    const searchInAddedList = this.bireSbadAddedList.find(
      (value) =>
        value.sbNumber === previousSbadObject.sbNumber && value.sbRevisionNumber === previousSbadObject.sbRevisionNumber
    );
    const searchInUpdatedList = this.bireSbadUpdatedList.find(
      (value) =>
        value.sbNumber === previousSbadObject.sbNumber && value.sbRevisionNumber === previousSbadObject.sbRevisionNumber
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireSbadAddedList.indexOf(searchInAddedList);
      this.bireSbadAddedList[indexInAddedList] = udpatedSbad;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireSbadUpdatedList.indexOf(searchInUpdatedList);
      this.bireSbadUpdatedList[indexInUpdatedList] = udpatedSbad;
    } else {
      this.bireSbadUpdatedList.push(udpatedSbad);
    }
    this.selectedEvolutions = [];
    this.bireSbadDisplayed[this.currentSbadIndex] = udpatedSbad;
  }

  /**************************************************************************
   * Assets table
   *************************************************************************/

  public confirmDeleteAsset(): void {
    const partialMessageKey = 'deleteConfirmationAsset';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedConcernedAssets();
      }
    });
  }

  public createAsset(): void {
    this.showAssetDialog = true;
    this.isNewAsset = true;
    this.isReadOnlyAssetDialog = false;
    this.dataAssets = {
      componentId: 'AssetPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }
  public editAsset(): void {
    this.isNewAsset = false;
    this.isReadOnlyAssetDialog = false;
    if (this.selectedAssets.length === 1) {
      this.currentAsset = { ...this.selectedAssets[0] };

      if (this.currentAsset.assetActionType) {
        this.currentAsset.assetActionType = this.instructions.filter(
          (actionType) => actionType.label === this.currentAsset.assetActionType
        )[0].value;
      }
      this.currentConcernedAssetIndex = this.bireConcernedAssetDisplayed.indexOf(this.selectedAssets[0]);
      this.showAssetDialog = true;
      this.dataAssets = {
        componentId: 'AssetPopupDialog',
        selectedRow: this.selectedAssets,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openAsset(): void {
    this.isReadOnlyAssetDialog = true;
    if (this.selectedAssets.length === 1) {
      this.currentAsset = { ...this.selectedAssets[0] };

      if (this.currentAsset.assetActionType) {
        this.currentAsset.assetActionType = this.instructions.filter(
          (actionType) => actionType.label === this.currentAsset.assetActionType
        )[0].value;
      }
      this.currentConcernedAssetIndex = this.bireConcernedAssetDisplayed.indexOf(this.selectedAssets[0]);
      this.showAssetDialog = true;
      this.dataAssets = {
        componentId: 'AssetPopupDialog',
        selectedRow: this.selectedAssets,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  private deleteSelectedConcernedAssets() {
    this.selectedAssets.forEach((element) => {
      const indexInDisplayedList = this.bireConcernedAssetDisplayed.indexOf(element);
      this.bireConcernedAssetDisplayed.splice(indexInDisplayedList, 1);
    });
    this.bireConcernedAssetAddedList = this.bireConcernedAssetDisplayed;
    this.selectedAssets = [];
  }

  public addNewAsset(concernedAsset: BireConcernedAssetDTO) {
    if (concernedAsset.assetActionType) {
      concernedAsset.assetActionType = this.instructions.filter(
        (actionType) => actionType.value === concernedAsset.assetActionType
      )[0].label;
    }
    const searchInDisplayedList = this.bireConcernedAssetDisplayed.find((value) =>
      this.isConcernedAssetTheSame(value, concernedAsset)
    );
    if (!searchInDisplayedList) {
      this.bireConcernedAssetDisplayed.push(concernedAsset);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorAlreadyConcernedAssetExist'));
    }
    this.bireConcernedAssetAddedList = this.bireConcernedAssetDisplayed;
  }

  public updateConcernedAsset(concernedAsset: BireConcernedAssetDTO) {
    if (concernedAsset.assetActionType) {
      concernedAsset.assetActionType = this.instructions.filter(
        (actionType) => actionType.value === concernedAsset.assetActionType
      )[0].label;
    }
    this.bireConcernedAssetDisplayed[this.currentConcernedAssetIndex] = concernedAsset;
    this.bireConcernedAssetAddedList = this.bireConcernedAssetDisplayed;
    this.selectedAssets = [];
  }

  private isConcernedAssetTheSame(
    concernedAsset1: BireConcernedAssetDTO,
    concernedAsset2: BireConcernedAssetDTO
  ): boolean {
    if (
      concernedAsset1.assetPn === concernedAsset2.assetPn &&
      concernedAsset1.assetSn === concernedAsset2.assetSn &&
      concernedAsset1.assetActionType === concernedAsset2.assetActionType
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**************************************************************************
   * Modifications table
   *************************************************************************/

  public confirmDeleteModification(): void {
    const partialMessageKey = 'deleteConfirmationModif';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedModification();
      }
    });
  }

  public createModification(): void {
    this.showModificationDialog = true;
    this.isNewModification = true;
    this.isReadOnlyModificationDialog = false;
    this.dataModif = {
      componentId: 'ModificationsPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editModification(): void {
    this.isNewModification = false;
    this.isReadOnlyModificationDialog = false;
    if (this.selectedModifications.length === 1) {
      this.currentModification = { ...this.selectedModifications[0] };
      this.currentModificationIndex = this.bireModificationDisplayed.indexOf(this.selectedModifications[0]);
      this.showModificationDialog = true;
      this.dataModif = {
        componentId: 'ModificationsPopupDialog',
        selectedRow: this.selectedModifications,
        object: this.currentModification,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openModification(): void {
    this.isReadOnlyModificationDialog = true;
    if (this.selectedModifications.length === 1) {
      this.currentModification = { ...this.selectedModifications[0] };
      this.currentModificationIndex = this.bireModificationDisplayed.indexOf(this.selectedModifications[0]);
      this.showModificationDialog = true;
      this.dataModif = {
        componentId: 'ModificationsPopupDialog',
        selectedRow: this.selectedModifications,
        object: this.currentModification,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewModification(newModification: BireModificationEvolutionDTO) {
    const searchInDisplayedList = this.bireModificationDisplayed.find(
      (value) =>
        value.modificationNumber === newModification.modificationNumber &&
        value.modificationRevisionNumber === newModification.modificationRevisionNumber &&
        value.familyCode === newModification.familyCode &&
        value.structureType === newModification.structureType
    );
    if (!searchInDisplayedList) {
      this.bireModificationAddedList.push(newModification);
      this.bireModificationDisplayed.push(newModification);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('ModificationAlreadyExists'));
    }
  }

  private deleteSelectedModification() {
    this.selectedModifications.forEach((element) => {
      const searchInAddedList = this.bireModificationAddedList.find(
        (value) =>
          value.modificationNumber === element.modificationNumber &&
          value.modificationRevisionNumber === element.modificationRevisionNumber &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType
      );
      const searchInUpdatedList = this.bireModificationAddedList.find(
        (value) =>
          value.modificationNumber === element.modificationNumber &&
          value.modificationRevisionNumber === element.modificationRevisionNumber &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireModificationAddedList.indexOf(searchInAddedList);
        this.bireModificationAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.modificationType &&
          !!element.evolutionNumber &&
          !!element.evolutionRevisionNumber &&
          !!element.familyCode &&
          !!element.structureType &&
          !!element.modificationNumber &&
          !!element.modificationRevisionNumber
        ) {
          const modifId: BireModificationEvolutionDTOId = {
            modificationType: element.modificationType,
            evolutionNumber: element.evolutionNumber,
            evolutionRevisionNumber: element.evolutionRevisionNumber,
            familyCode: element.familyCode,
            structureType: element.structureType,
            modificationNumber: element.modificationNumber,
            modificationRevisionNumber: element.modificationRevisionNumber
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireModificationUpdatedList.indexOf(searchInUpdatedList);
            this.bireModificationUpdatedList.splice(indexInUpdatedList, 1);
            this.bireModificationDeletedList.push(modifId);
          } else {
            this.bireModificationDeletedList.push(modifId);
          }
        } else {
          super.throwUnboundLocalError('deleteSelectedModification', 'element');
        }
      }

      const indexInDisplayedList = this.bireModificationDisplayed.indexOf(element);
      this.bireModificationDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedModifications = [];
  }

  public updateModification(udpatedModification: BireModificationEvolutionDTO) {
    const previousModificationObject = this.bireModificationDisplayed[this.currentModificationIndex];
    const searchInAddedList = this.bireModificationAddedList.find(
      (value) =>
        value.modificationNumber === previousModificationObject.modificationNumber &&
        value.modificationRevisionNumber === previousModificationObject.modificationRevisionNumber &&
        value.familyCode === previousModificationObject.familyCode &&
        value.structureType === previousModificationObject.structureType
    );
    const searchInUpdatedList = this.bireModificationUpdatedList.find(
      (value) =>
        value.modificationNumber === previousModificationObject.modificationNumber &&
        value.modificationRevisionNumber === previousModificationObject.modificationRevisionNumber &&
        value.familyCode === previousModificationObject.familyCode &&
        value.structureType === previousModificationObject.structureType
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireModificationAddedList.indexOf(searchInAddedList);
      this.bireModificationAddedList[indexInAddedList] = udpatedModification;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireModificationUpdatedList.indexOf(searchInUpdatedList);
      this.bireModificationUpdatedList[indexInUpdatedList] = udpatedModification;
    } else {
      this.bireModificationUpdatedList.push(udpatedModification);
    }
    this.selectedModifications = [];
    this.bireModificationDisplayed[this.currentModificationIndex] = udpatedModification;
  }

  /**************************************************************************
   * Applicabilities table
   *************************************************************************/

  public confirmDeleteApplicability(): void {
    const partialMessageKey = 'deleteConfirmationAppli';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedApplicability();
      }
    });
  }

  public createApplicability(): void {
    this.showApplicabilitiesDialog = true;
    this.isNewApplicability = true;
    this.isReadOnlyApplicabilityDialog = false;
    this.dataAppli = {
      componentId: 'ApplicabilityPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editApplicability(): void {
    this.isNewApplicability = false;
    this.isReadOnlyApplicabilityDialog = false;
    if (this.selectedApplicabilities.length === 1) {
      this.currentApplicability = { ...this.selectedApplicabilities[0] };
      this.currentApplicabilityIndex = this.bireApplicabilityDisplayed.indexOf(this.selectedApplicabilities[0]);
      this.showApplicabilitiesDialog = true;
      this.dataAppli = {
        componentId: 'ApplicabilityPopupDialog',
        selectedRow: this.selectedApplicabilities,
        object: this.currentApplicability,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openApplicability(): void {
    this.isReadOnlyApplicabilityDialog = true;
    if (this.selectedApplicabilities.length === 1) {
      this.currentApplicability = { ...this.selectedApplicabilities[0] };
      this.currentApplicabilityIndex = this.bireApplicabilityDisplayed.indexOf(this.selectedApplicabilities[0]);
      this.showApplicabilitiesDialog = true;
      this.dataAppli = {
        componentId: 'ApplicabilityPopupDialog',
        selectedRow: this.selectedApplicabilities,
        object: this.currentApplicability,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewApplicability(newApplicability: BireEvolutionVariantDTO) {
    const searchInDisplayedList = this.bireApplicabilityDisplayed.find(
      (value) =>
        value.variantCode === newApplicability.variantCode &&
        value.familyCode === newApplicability.familyCode &&
        value.structureType === newApplicability.structureType
    );
    if (!searchInDisplayedList) {
      if (newApplicability.evolutionApplicabilityDate) {
        newApplicability.evolutionApplicabilityDate = new Date(newApplicability.evolutionApplicabilityDate.toString());
      }
      this.bireApplicabilityAddedList.push(newApplicability);
      newApplicability['variantStructureTypeFamily'] = `${newApplicability.familyCode}-${newApplicability.structureType}
      -${newApplicability.familyCode}-${newApplicability.variantCode}`;
      this.bireApplicabilityDisplayed.push(newApplicability);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('ApplicabilityAlreadyExists'));
    }
  }

  private deleteSelectedApplicability() {
    this.selectedApplicabilities.forEach((element) => {
      const searchInAddedList = this.bireApplicabilityAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType
      );
      const searchInUpdatedList = this.bireApplicabilityUpdatedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireApplicabilityAddedList.indexOf(searchInAddedList);
        this.bireApplicabilityAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.evolutionNumber &&
          !!element.evolutionRevisionNumber &&
          !!element.variantCode &&
          !!element.familyCode &&
          !!element.structureType
        ) {
          const appliId: BireEvolutionVariantDTOId = {
            evolutionNumber: element.evolutionNumber,
            evolutionRevisionNumber: element.evolutionRevisionNumber,
            variantCode: element.variantCode,
            familyCode: element.familyCode,
            structureType: element.structureType
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireApplicabilityUpdatedList.indexOf(searchInUpdatedList);
            this.bireApplicabilityUpdatedList.splice(indexInUpdatedList, 1);
            this.bireApplicabilityDeletedList.push(appliId);
          } else {
            this.bireApplicabilityDeletedList.push(appliId);
          }
        } else {
          super.throwUnboundLocalError('deleteSelectedApplicability', 'element');
        }
      }

      const indexInDisplayedList = this.bireApplicabilityDisplayed.indexOf(element);
      this.bireApplicabilityDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedApplicabilities = [];
  }

  public updateApplicability(udpatedApplicability: BireSbVariantDTO) {
    const previousSbVariantObject = this.bireApplicabilityDisplayed[this.currentApplicabilityIndex];
    const searchInAddedList = this.bireApplicabilityAddedList.find(
      (value) =>
        value.variantCode === previousSbVariantObject.variantCode &&
        value.familyCode === previousSbVariantObject.familyCode &&
        value.structureType === previousSbVariantObject.structureType
    );
    const searchInUpdatedList = this.bireApplicabilityUpdatedList.find(
      (value) =>
        value.variantCode === previousSbVariantObject.variantCode &&
        value.familyCode === previousSbVariantObject.familyCode &&
        value.structureType === previousSbVariantObject.structureType
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireApplicabilityAddedList.indexOf(searchInAddedList);
      this.bireApplicabilityAddedList[indexInAddedList] = udpatedApplicability;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireApplicabilityUpdatedList.indexOf(searchInUpdatedList);
      this.bireApplicabilityUpdatedList[indexInUpdatedList] = udpatedApplicability;
    } else {
      this.bireApplicabilityUpdatedList.push(udpatedApplicability);
    }
    this.selectedApplicabilities = [];
    this.bireApplicabilityDisplayed[this.currentApplicabilityIndex] = udpatedApplicability;
  }

  /**************************************************************************
   * Interdependence table
   *************************************************************************/

  public confirmDeleteInterdependence(): void {
    const partialMessageKey = 'deleteConfirmationInterdependence';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedInterdependence();
      }
    });
  }

  public createInterdependence(): void {
    this.showInterdependanceDialog = true;
    this.isNewInterdependence = true;
    this.isReadOnlyInterdependenceDialog = false;
    this.currentInterdependence = {
      evolutionNumber: this.evolution.evolutionNumber,
      evolutionRevisionNumber: this.evolution.evolutionRevisionNumber
    };
    this.dataInterdep = {
      componentId: 'InterdependencePopupDialog',
      selectedRow: [],
      object: this.currentInterdependence,
      openMode: ComponentOpenMode.Create
    };
  }

  public editInterdependence(): void {
    this.isNewInterdependence = false;
    this.isReadOnlyInterdependenceDialog = false;
    if (this.selectedInterdependences.length === 1) {
      this.currentInterdependence = { ...this.selectedInterdependences[0] };
      this.currentInterdependence.interdependenceCode = this.interdependence.filter(
        (interdep) => interdep.label === this.currentInterdependence.interdependenceCode
      )[0].value;
      this.currentInterdependenceIndex = this.bireInterdependenceDisplayed.indexOf(this.selectedInterdependences[0]);
      this.currentInterdependence.evolutionNumber = this.evolution.evolutionNumber;
      this.currentInterdependence.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      this.showInterdependanceDialog = true;
      this.dataInterdep = {
        componentId: 'InterdependencePopupDialog',
        selectedRow: this.selectedInterdependences,
        object: this.currentInterdependence,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openInterdependence(): void {
    this.isReadOnlyInterdependenceDialog = true;
    if (this.selectedInterdependences.length === 1) {
      this.currentInterdependence = { ...this.selectedInterdependences[0] };
      this.currentInterdependence.interdependenceCode = this.interdependence.filter(
        (interdep) => interdep.label === this.currentInterdependence.interdependenceCode
      )[0].value;
      this.currentInterdependenceIndex = this.bireInterdependenceDisplayed.indexOf(this.selectedInterdependences[0]);
      this.currentInterdependence.evolutionNumber = this.evolution.evolutionNumber;
      this.currentInterdependence.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      this.showInterdependanceDialog = true;
      this.dataInterdep = {
        componentId: 'InterdependencePopupDialog',
        selectedRow: this.selectedInterdependences,
        object: this.currentInterdependence,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewInterdependence(newInterdependence: BireEvolutionEvolutionDTO) {
    newInterdependence.interdependenceCode = this.interdependence.filter(
      (status) => status.value === newInterdependence.interdependenceCode
    )[0].label;
    const searchInDisplayedList = this.bireInterdependenceDisplayed.find(
      (value) =>
        value.variantCode === newInterdependence.variantCode &&
        value.familyCode === newInterdependence.familyCode &&
        value.structureType === newInterdependence.structureType &&
        value.interdependenceCode === newInterdependence.interdependenceCode
    );
    if (!searchInDisplayedList) {
      this.bireInterdependenceAddedList.push(newInterdependence);
      this.bireInterdependenceDisplayed.push(newInterdependence);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('InterdependenceAlreadyExists'));
    }
  }

  private deleteSelectedInterdependence() {
    this.selectedInterdependences.forEach((element) => {
      const searchInAddedList = this.bireInterdependenceAddedList.find(
        (value) =>
          value.interdependenceCode === element.interdependenceCode &&
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.evoEvolutionNumber === element.evoEvolutionNumber &&
          value.evoEvolutionRevisionNumber === element.evoEvolutionRevisionNumber
      );
      const searchInUpdatedList = this.bireInterdependenceAddedList.find(
        (value) =>
          value.evolutionRevisionNumber === element.evolutionRevisionNumber &&
          value.interdependenceCode === element.interdependenceCode &&
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.evoEvolutionNumber === element.evoEvolutionNumber &&
          value.evoEvolutionRevisionNumber === element.evoEvolutionRevisionNumber
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireInterdependenceAddedList.indexOf(searchInAddedList);
        this.bireInterdependenceAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.evolutionNumber &&
          !!element.evolutionRevisionNumber &&
          !!element.familyCode &&
          !!element.structureType &&
          !!element.interdependenceCode &&
          !!element.variantCode &&
          !!element.evoEvolutionNumber &&
          !!element.evoEvolutionRevisionNumber
        ) {
          const interdepId: BireEvolutionEvolutionDTOId = {
            evolutionNumber: element.evolutionNumber,
            evolutionRevisionNumber: element.evolutionRevisionNumber,
            familyCode: element.familyCode,
            structureType: element.structureType,
            interdependenceCode: element.interdependenceCode,
            variantCode: element.variantCode,
            evoEvolutionNumber: element.evoEvolutionNumber,
            evoEvolutionRevisionNumber: element.evoEvolutionRevisionNumber
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireInterdependenceUpdatedList.indexOf(searchInUpdatedList);
            this.bireInterdependenceUpdatedList.splice(indexInUpdatedList, 1);
            this.bireInterdependenceDeletedList.push(interdepId);
          } else {
            this.bireInterdependenceDeletedList.push(interdepId);
          }
        } else {
          super.throwUnboundLocalError('deleteSelectedInterdependence', 'element');
        }
      }

      const indexInDisplayedList = this.bireInterdependenceDisplayed.indexOf(element);
      this.bireInterdependenceDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedInterdependences = [];
  }

  public updateInterdependence(udpatedInterdependence: BireEvolutionEvolutionDTO) {
    const previousInterdependenceObject = this.bireInterdependenceDisplayed[this.currentInterdependenceIndex];
    const searchInAddedList = this.bireInterdependenceAddedList.find(
      (value) =>
        value.variantCode === previousInterdependenceObject.variantCode &&
        value.interdependenceCode === previousInterdependenceObject.interdependenceCode &&
        value.familyCode === previousInterdependenceObject.familyCode &&
        value.structureType === previousInterdependenceObject.structureType &&
        value.evoEvolutionNumber === previousInterdependenceObject.evoEvolutionNumber &&
        value.evoEvolutionRevisionNumber === previousInterdependenceObject.evoEvolutionRevisionNumber
    );
    const searchInUpdatedList = this.bireInterdependenceUpdatedList.find(
      (value) =>
        value.variantCode === previousInterdependenceObject.variantCode &&
        value.interdependenceCode === previousInterdependenceObject.interdependenceCode &&
        value.familyCode === previousInterdependenceObject.familyCode &&
        value.structureType === previousInterdependenceObject.structureType &&
        value.evoEvolutionNumber === previousInterdependenceObject.evoEvolutionNumber &&
        value.evoEvolutionRevisionNumber === previousInterdependenceObject.evoEvolutionRevisionNumber
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireInterdependenceAddedList.indexOf(searchInAddedList);
      this.bireInterdependenceAddedList[indexInAddedList] = udpatedInterdependence;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireInterdependenceUpdatedList.indexOf(searchInUpdatedList);
      this.bireInterdependenceUpdatedList[indexInUpdatedList] = udpatedInterdependence;
    } else {
      this.bireInterdependenceUpdatedList.push(udpatedInterdependence);
    }
    this.selectedInterdependences = [];
    this.bireInterdependenceDisplayed[this.currentInterdependenceIndex] = udpatedInterdependence;
  }

  /**************************************************************************
   * Impacts table
   *************************************************************************/

  public confirmDeleteImpact(): void {
    const partialMessageKey = 'deleteConfirmationImpact';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedImpact();
      }
    });
  }

  public createImpact(): void {
    this.showImpactDialog = true;
    this.isNewImpact = true;
    this.isReadOnlyImpactDialog = false;
    this.dataImpacts = {
      componentId: 'ImpactsPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editImpact(): void {
    this.isNewImpact = false;
    this.isReadOnlyImpactDialog = false;
    if (this.selectedImpacts.length === 1) {
      this.currentImpact = { ...this.selectedImpacts[0] };
      this.currentImpact.actionTypeCode = this.propertyActionTypeImpact.filter(
        (action) => action.label === this.currentImpact.actionTypeCode
      )[0].value;
      this.currentImpactIndex = this.bireImpactDisplayed.indexOf(this.selectedImpacts[0]);
      this.showImpactDialog = true;
      this.dataImpacts = {
        componentId: 'ImpactsPopupDialog',
        selectedRow: this.selectedImpacts,
        object: this.currentImpact,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openImpact(): void {
    this.isReadOnlyImpactDialog = true;
    if (this.selectedImpacts.length === 1) {
      this.currentImpact = { ...this.selectedImpacts[0] };
      this.currentImpact.actionTypeCode = this.propertyActionTypeImpact.filter(
        (action) => action.label === this.currentImpact.actionTypeCode
      )[0].value;
      this.currentImpactIndex = this.bireImpactDisplayed.indexOf(this.selectedImpacts[0]);
      this.showImpactDialog = true;
      this.dataImpacts = {
        componentId: 'ImpactsPopupDialog',
        selectedRow: this.selectedImpacts,
        object: this.currentImpact,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewImpact(newImpact: BireEvolutionPnDTO) {
    newImpact.actionTypeCode = this.propertyActionTypeImpact.filter(
      (action) => action.value === newImpact.actionTypeCode
    )[0].label;
    const searchInDisplayedList = this.bireImpactDisplayed.find(
      (value) =>
        value.variantCode === newImpact.variantCode &&
        value.familyCode === newImpact.familyCode &&
        value.structureType === newImpact.structureType &&
        value.actionTypeCode === newImpact.actionTypeCode &&
        value.chapter === newImpact.chapter &&
        value.section === newImpact.section &&
        value.sheet === newImpact.sheet &&
        value.subject === newImpact.subject &&
        value.marks === newImpact.marks &&
        value.pnCode === newImpact.pnCode
    );
    if (!searchInDisplayedList) {
      this.bireImpactAddedList.push(newImpact);
      newImpact[
        'item'
      ] = `${newImpact.chapter}-${newImpact.section}-${newImpact.subject}-${newImpact.sheet}-${newImpact.marks}`;

      newImpact['variant'] = `${newImpact.familyCode}-${newImpact.structureType}-${newImpact.variantCode}`;
      newImpact['assetPn'] = `${newImpact.pnCode}`;
      this.bireImpactDisplayed.push(newImpact);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('ImpactAlreadyExists'));
    }
  }

  private deleteSelectedImpact() {
    this.selectedImpacts.forEach((element) => {
      const searchInAddedList = this.bireImpactAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks &&
          value.pnCode === element.pnCode
      );
      const searchInUpdatedList = this.bireImpactAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks &&
          value.pnCode === element.pnCode
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireImpactAddedList.indexOf(searchInAddedList);
        this.bireImpactAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.evolutionNumber &&
          !!element.evolutionRevisionNumber &&
          !!element.familyCode &&
          !!element.structureType &&
          !!element.actionTypeCode &&
          !!element.variantCode &&
          !!element.chapter &&
          !!element.sheet &&
          !!element.section &&
          !!element.subject &&
          !!element.marks &&
          !!element.pnCode
        ) {
          const impactId: BireEvolutionPnDTOId = {
            evolutionNumber: element.evolutionNumber,
            evolutionRevisionNumber: element.evolutionRevisionNumber,
            familyCode: element.familyCode,
            structureType: element.structureType,
            variantCode: element.variantCode,
            actionTypeCode: element.actionTypeCode,
            chapter: element.chapter,
            sheet: element.sheet,
            section: element.section,
            subject: element.subject,
            marks: element.marks,
            pnCode: element.pnCode
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireImpactUpdatedList.indexOf(searchInUpdatedList);
            this.bireImpactUpdatedList.splice(indexInUpdatedList, 1);
            this.bireImpactDeletedList.push(impactId);
          } else {
            this.bireImpactDeletedList.push(impactId);
          }
        } else {
          super.throwUnboundLocalError('deleteSelectedImpact', 'element');
        }
      }

      const indexInDisplayedList = this.bireImpactDisplayed.indexOf(element);
      this.bireImpactDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedImpacts = [];
  }

  public updateImpact(udpatedImpact: BireEvolutionPnDTO) {
    udpatedImpact.actionTypeCode = this.propertyActionTypeImpact.filter(
      (action) => action.value === udpatedImpact.actionTypeCode
    )[0].label;
    const previousImpactObject = this.bireImpactDisplayed[this.currentImpactIndex];
    const searchInAddedList = this.bireImpactAddedList.find(
      (value) =>
        value.variantCode === previousImpactObject.variantCode &&
        value.familyCode === previousImpactObject.familyCode &&
        value.structureType === previousImpactObject.structureType &&
        value.chapter === previousImpactObject.chapter &&
        value.section === previousImpactObject.section &&
        value.sheet === previousImpactObject.sheet &&
        value.subject === previousImpactObject.subject &&
        value.marks === previousImpactObject.marks &&
        value.pnCode === previousImpactObject.pnCode
    );
    const searchInUpdatedList = this.bireImpactUpdatedList.find(
      (value) =>
        value.variantCode === previousImpactObject.variantCode &&
        value.familyCode === previousImpactObject.familyCode &&
        value.structureType === previousImpactObject.structureType &&
        value.chapter === previousImpactObject.chapter &&
        value.section === previousImpactObject.section &&
        value.sheet === previousImpactObject.sheet &&
        value.subject === previousImpactObject.subject &&
        value.marks === previousImpactObject.marks &&
        value.pnCode === previousImpactObject.pnCode
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireImpactAddedList.indexOf(searchInAddedList);
      this.bireImpactAddedList[indexInAddedList] = udpatedImpact;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireImpactUpdatedList.indexOf(searchInUpdatedList);
      this.bireImpactUpdatedList[indexInUpdatedList] = udpatedImpact;
    } else {
      this.bireImpactUpdatedList.push(udpatedImpact);
    }
    this.selectedImpacts = [];
    this.bireImpactDisplayed[this.currentImpactIndex] = udpatedImpact;

    this.bireImpactAddedList[this.currentImpactIndex]['assetPn'] = `${udpatedImpact.pnCode}`;
  }

  /**************************************************************************
   * Impacts on pn evol table
   *************************************************************************/

  public confirmDeleteImpactEvol(): void {
    const partialMessageKey = 'deleteConfirmationImpactEvol';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedImpactEvol();
      }
    });
  }

  public createImpactEvol(): void {
    this.isNewImpactEvol = true;
    this.isReadOnlyImpactEvolDialog = false;
    this.showEvolDialog = true;
    this.dataImpactsEvol = {
      componentId: 'ImpactsEvolPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editImpactEvol(): void {
    this.isNewImpactEvol = false;
    this.isReadOnlyImpactEvolDialog = false;
    if (this.selectedImpactsEvol.length === 1) {
      this.currentImpactEvol = { ...this.selectedImpactsEvol[0] };
      this.currentImpactEvol.actionTypeCode = this.propertyActionType.filter(
        (action) => action.label === this.currentImpactEvol.actionTypeCode
      )[0].value;
      if (this.currentImpactEvol.interchangeability) {
        this.currentImpactEvol.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.label === this.currentImpactEvol.interchangeability
        )[0].value;
      }
      this.currentImpactEvolIndex = this.bireImpactEvolDisplayed.indexOf(this.selectedImpactsEvol[0]);
      this.showEvolDialog = true;
      this.dataImpactsEvol = {
        componentId: 'ImpactsEvolPopupDialog',
        selectedRow: this.selectedImpactsEvol,
        object: this.currentImpactEvol,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openImpactEvol(): void {
    this.isReadOnlyImpactEvolDialog = true;
    if (this.selectedImpactsEvol.length === 1) {
      this.currentImpactEvol = { ...this.selectedImpactsEvol[0] };
      this.currentImpactEvol.actionTypeCode = this.propertyActionType.filter(
        (action) => action.label === this.currentImpactEvol.actionTypeCode
      )[0].value;
      if (this.currentImpactEvol.interchangeability) {
        this.currentImpactEvol.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.label === this.currentImpactEvol.interchangeability
        )[0].value;
      }
      this.currentImpactEvolIndex = this.bireImpactEvolDisplayed.indexOf(this.selectedImpactsEvol[0]);
      this.showEvolDialog = true;
      this.dataImpactsEvol = {
        componentId: 'ImpactsEvolPopupDialog',
        selectedRow: this.selectedImpactsEvol,
        object: this.currentImpactEvol,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewImpactEvol(newImpactEvol: BireAlternativePnAndItemPnDTO) {
    if (newImpactEvol.actionTypeCode) {
      newImpactEvol.actionTypeCode = this.propertyActionType.filter(
        (action) => action.value === newImpactEvol.actionTypeCode
      )[0].label;
    }
    if (newImpactEvol.interchangeability) {
      newImpactEvol.interchangeability = this.propertyInterchangeability.filter(
        (interchangeability) => interchangeability.value === newImpactEvol.interchangeability
      )[0].label;
    }
    const searchInDisplayedList = this.bireImpactEvolDisplayed.find(
      (value) =>
        value.variantCode === newImpactEvol.variantCode &&
        value.familyCode === newImpactEvol.familyCode &&
        value.structureType === newImpactEvol.structureType &&
        value.pnCode === newImpactEvol.pnCode &&
        value.pnPnCode === newImpactEvol.pnPnCode &&
        value.chapter === newImpactEvol.chapter &&
        value.section === newImpactEvol.section &&
        value.sheet === newImpactEvol.sheet &&
        value.subject === newImpactEvol.subject &&
        value.marks === newImpactEvol.marks
    );
    if (!searchInDisplayedList) {
      this.bireImpactEvolAddedList.push(newImpactEvol);

      let item = `${newImpactEvol.chapter}-${newImpactEvol.section}-`;
      item += `${newImpactEvol.subject}-${newImpactEvol.sheet}-${newImpactEvol.marks}`;

      newImpactEvol['item'] = item;

      newImpactEvol[
        'variant'
      ] = `${newImpactEvol.familyCode}-${newImpactEvol.structureType}-${newImpactEvol.variantCode}`;

      this.bireImpactEvolDisplayed.push(newImpactEvol);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('ImpactEvolAlreadyExists'));
    }
  }

  private deleteSelectedImpactEvol() {
    this.selectedImpactsEvol.forEach((element) => {
      const impactId: BireAlternativePnAndItemPnDTO = {
        pnPnCode: element.pnPnCode,
        evolutionNumber: element.evolutionNumber,
        evolutionRevisionNumber: element.evolutionRevisionNumber,
        familyCode: element.familyCode,
        structureType: element.structureType,
        variantCode: element.variantCode,
        actionTypeCode: element.actionTypeCode,
        chapter: element.chapter,
        sheet: element.sheet,
        section: element.section,
        subject: element.subject,
        marks: element.marks,
        pnCode: element.pnCode,
        applicability: element.applicability,
        versionNumber: element.versionNumber,
        interchangeability: element.interchangeability
      };
      const searchInAddedList = this.bireImpactEvolAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.versionNumber === element.versionNumber &&
          value.actionTypeCode === element.actionTypeCode &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks
      );
      const searchInUpdatedList = this.bireImpactEvolAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.versionNumber === element.versionNumber &&
          value.actionTypeCode === element.actionTypeCode &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireImpactEvolAddedList.indexOf(searchInAddedList);
        this.bireImpactEvolAddedList.splice(indexInAddedList, 1);
      } else if (searchInUpdatedList) {
        const indexInUpdatedList = this.bireImpactEvolUpdatedList.indexOf(searchInUpdatedList);
        this.bireImpactEvolUpdatedList.splice(indexInUpdatedList, 1);
        this.bireImpactEvolDeletedList.push(impactId);
      } else {
        this.bireImpactEvolDeletedList.push(impactId);
      }
      const indexInDisplayedList = this.bireImpactEvolDisplayed.indexOf(element);
      this.bireImpactEvolDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedImpactsEvol = [];
  }

  public updateImpactEvol(udpatedImpactEvol: BireAlternativePnAndItemPnDTO) {
    if (udpatedImpactEvol.actionTypeCode) {
      udpatedImpactEvol.actionTypeCode = this.propertyActionType.filter(
        (action) => action.value === udpatedImpactEvol.actionTypeCode
      )[0].label;
    }
    if (udpatedImpactEvol.interchangeability) {
      udpatedImpactEvol.interchangeability = this.propertyInterchangeability.filter(
        (interchangeability) => interchangeability.value === udpatedImpactEvol.interchangeability
      )[0].label;
    }
    const previousImpactEvolObject = this.bireImpactEvolDisplayed[this.currentImpactEvolIndex];
    const searchInAddedList = this.bireImpactEvolAddedList.find(
      (value) =>
        value.variantCode === previousImpactEvolObject.variantCode &&
        value.familyCode === previousImpactEvolObject.familyCode &&
        value.structureType === previousImpactEvolObject.structureType &&
        value.versionNumber === previousImpactEvolObject.versionNumber &&
        value.actionTypeCode === previousImpactEvolObject.actionTypeCode &&
        value.chapter === previousImpactEvolObject.chapter &&
        value.section === previousImpactEvolObject.section &&
        value.sheet === previousImpactEvolObject.sheet &&
        value.subject === previousImpactEvolObject.subject &&
        value.marks === previousImpactEvolObject.marks
    );
    const searchInUpdatedList = this.bireImpactEvolUpdatedList.find(
      (value) =>
        value.variantCode === previousImpactEvolObject.variantCode &&
        value.familyCode === previousImpactEvolObject.familyCode &&
        value.structureType === previousImpactEvolObject.structureType &&
        value.versionNumber === previousImpactEvolObject.versionNumber &&
        value.actionTypeCode === previousImpactEvolObject.actionTypeCode &&
        value.chapter === previousImpactEvolObject.chapter &&
        value.section === previousImpactEvolObject.section &&
        value.sheet === previousImpactEvolObject.sheet &&
        value.subject === previousImpactEvolObject.subject &&
        value.marks === previousImpactEvolObject.marks
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireImpactEvolAddedList.indexOf(searchInAddedList);
      this.bireImpactEvolAddedList[indexInAddedList] = udpatedImpactEvol;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireImpactEvolUpdatedList.indexOf(searchInUpdatedList);
      this.bireImpactEvolUpdatedList[indexInUpdatedList] = udpatedImpactEvol;
    } else {
      this.bireImpactEvolUpdatedList.push(udpatedImpactEvol);
    }
    this.selectedImpactsEvol = [];
    this.bireImpactEvolDisplayed[this.currentImpactEvolIndex] = udpatedImpactEvol;
  }

  /**************************************************************************
   * Impacts on item table
   *************************************************************************/

  public findBireItemItemsByItemSon(bireEvolutionItemDTO: BireEvolutionItemDTO, callback) {
    this.evolutionFormService.findBireItemItemsByItemSon(bireEvolutionItemDTO).subscribe(
      (result) => {
        this.fatherItem = result;
        callback(result);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFather'));
      }
    );
  }

  public confirmDeleteImpactItem(): void {
    const partialMessageKey = 'deleteConfirmationImpactItem';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedImpactItem();
      }
    });
  }

  public createImpactItem(): void {
    this.showItemDialog = true;
    this.isNewImpactItem = true;
    this.isReadOnlyImpactDialog = false;
    this.dataImpactsItem = {
      componentId: 'ImpactsItemPopupDialog',
      selectedRow: [],
      object: {},
      openMode: ComponentOpenMode.Create
    };
  }

  public editImpactItem(): void {
    this.isNewImpactItem = false;
    this.isReadOnlyImpactItemDialog = false;
    if (this.selectedImpactsItem.length === 1) {
      this.currentImpactItem = { ...this.selectedImpactsItem[0] };
      this.currentImpactItem.actionTypeCode = this.propertyActionTypeImpactItem.filter(
        (action) => action.label === this.currentImpactItem.actionTypeCode
      )[0].value;
      this.currentImpactItemIndex = this.bireImpactItemDisplayed.indexOf(this.selectedImpactsItem[0]);
      this.showItemDialog = true;
      this.dataImpactsItem = {
        componentId: 'ImpactsItemPopupDialog',
        selectedRow: this.selectedImpactsItem,
        object: this.currentImpactItem,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public openImpactItem(): void {
    this.isReadOnlyImpactItemDialog = true;
    if (this.selectedImpactsItem.length === 1) {
      this.currentImpactItem = { ...this.selectedImpactsItem[0] };
      this.currentImpactItem.actionTypeCode = this.propertyActionTypeImpactItem.filter(
        (action) => action.label === this.currentImpactItem.actionTypeCode
      )[0].value;
      this.currentImpactItemIndex = this.bireImpactItemDisplayed.indexOf(this.selectedImpactsItem[0]);
      this.showItemDialog = true;
      this.dataImpactsItem = {
        componentId: 'ImpactsItemPopupDialog',
        selectedRow: this.selectedImpactsItem,
        object: this.currentImpactItem,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public addNewImpactItem(newImpactItem: BireEvolutionItemDTO) {
    if (newImpactItem.actionTypeCode) {
      newImpactItem.actionTypeCode = this.propertyActionTypeImpactItem.filter(
        (action) => action.value === newImpactItem.actionTypeCode
      )[0].label;
    }
    const searchInDisplayedList = this.bireImpactItemDisplayed.find(
      (value) =>
        value.variantCode === newImpactItem.variantCode &&
        value.familyCode === newImpactItem.familyCode &&
        value.structureType === newImpactItem.structureType &&
        value.chapter === newImpactItem.chapter &&
        value.sheet === newImpactItem.sheet &&
        value.section === newImpactItem.section &&
        value.marks === newImpactItem.marks &&
        value.subject === newImpactItem.subject &&
        value.actionTypeCode === newImpactItem.actionTypeCode
    );
    if (!searchInDisplayedList) {
      this.bireImpactItemAddedList.push(newImpactItem);

      let item = `${newImpactItem.chapter}-${newImpactItem.section}-`;
      item += `${newImpactItem.subject}-${newImpactItem.sheet}-${newImpactItem.marks}`;

      newImpactItem['item'] = item;

      newImpactItem[
        'variant'
      ] = `${newImpactItem.familyCode}-${newImpactItem.structureType}-${newImpactItem.variantCode}`;

      this.findBireItemItemsByItemSon(newImpactItem, (result: BireItemItemDTO[]) => {
        if (!!result && result.length !== 0) {
          let itemFather = `${result[0].fatherChapter}-${result[0].fatherSection}-${result[0].fatherSheet}`;
          itemFather += `-${result[0].fatherSubject}-${result[0].fatherMarks}`;
          newImpactItem['itemFather'] = itemFather;
        }
        this.bireImpactItemDisplayed.push(newImpactItem);
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('ImpactItemAlreadyExists'));
    }
  }

  private deleteSelectedImpactItem() {
    this.selectedImpactsItem.forEach((element) => {
      const searchInAddedList = this.bireImpactItemAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks &&
          value.actionTypeCode === element.actionTypeCode
      );
      const searchInUpdatedList = this.bireImpactItemAddedList.find(
        (value) =>
          value.variantCode === element.variantCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.chapter === element.chapter &&
          value.section === element.section &&
          value.sheet === element.sheet &&
          value.subject === element.subject &&
          value.marks === element.marks &&
          value.actionTypeCode === element.actionTypeCode
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireImpactItemAddedList.indexOf(searchInAddedList);
        this.bireImpactItemAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.evolutionNumber &&
          !!element.evolutionRevisionNumber &&
          !!element.familyCode &&
          !!element.structureType &&
          !!element.actionTypeCode &&
          !!element.variantCode &&
          !!element.chapter &&
          !!element.sheet &&
          !!element.section &&
          !!element.subject &&
          !!element.marks
        ) {
          const impactId: BireEvolutionItemDTOId = {
            evolutionNumber: element.evolutionNumber,
            evolutionRevisionNumber: element.evolutionRevisionNumber,
            familyCode: element.familyCode,
            structureType: element.structureType,
            variantCode: element.variantCode,
            actionTypeCode: element.actionTypeCode,
            chapter: element.chapter,
            sheet: element.sheet,
            section: element.section,
            subject: element.subject,
            marks: element.marks
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireImpactItemUpdatedList.indexOf(searchInUpdatedList);
            this.bireImpactItemUpdatedList.splice(indexInUpdatedList, 1);
            this.bireImpactItemDeletedList.push(impactId);
          } else {
            this.bireImpactItemDeletedList.push(impactId);
          }
        } else {
          super.throwUnboundLocalError('deleteSelectedImpactItem', 'element');
        }
      }
      const indexInDisplayedList = this.bireImpactItemDisplayed.indexOf(element);
      this.bireImpactItemDisplayed.splice(indexInDisplayedList, 1);
    });
    this.selectedImpactsItem = [];
  }

  public updateImpactItem(udpatedImpactItem: BireEvolutionItemDTO) {
    if (udpatedImpactItem.actionTypeCode) {
      udpatedImpactItem.actionTypeCode = this.propertyActionTypeImpactItem.filter(
        (action) => action.value === udpatedImpactItem.actionTypeCode
      )[0].label;
    }
    const previousImpactItemObject = this.bireImpactItemDisplayed[this.currentImpactItemIndex];
    const searchInAddedList = this.bireImpactItemAddedList.find(
      (value) =>
        value.variantCode === previousImpactItemObject.variantCode &&
        value.familyCode === previousImpactItemObject.familyCode &&
        value.structureType === previousImpactItemObject.structureType &&
        value.chapter === previousImpactItemObject.chapter &&
        value.section === previousImpactItemObject.section &&
        value.sheet === previousImpactItemObject.sheet &&
        value.subject === previousImpactItemObject.subject &&
        value.marks === previousImpactItemObject.marks &&
        value.actionTypeCode === previousImpactItemObject.actionTypeCode
    );
    const searchInUpdatedList = this.bireImpactItemUpdatedList.find(
      (value) =>
        value.variantCode === previousImpactItemObject.variantCode &&
        value.familyCode === previousImpactItemObject.familyCode &&
        value.structureType === previousImpactItemObject.structureType &&
        value.chapter === previousImpactItemObject.chapter &&
        value.section === previousImpactItemObject.section &&
        value.sheet === previousImpactItemObject.sheet &&
        value.subject === previousImpactItemObject.subject &&
        value.marks === previousImpactItemObject.marks &&
        value.actionTypeCode === previousImpactItemObject.actionTypeCode
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireImpactItemAddedList.indexOf(searchInAddedList);
      this.bireImpactItemAddedList[indexInAddedList] = udpatedImpactItem;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireImpactItemUpdatedList.indexOf(searchInUpdatedList);
      this.bireImpactItemUpdatedList[indexInUpdatedList] = udpatedImpactItem;
    } else {
      this.bireImpactItemUpdatedList.push(udpatedImpactItem);
    }
    this.selectedImpactsItem = [];
    this.bireImpactItemDisplayed[this.currentImpactItemIndex] = udpatedImpactItem;
  }

  /***********************************************************************************
   * Documents Tab
   ***********************************************************************************/
  /*
        Documents handler functions
    */

  private getCustomDocumentRow(newDocument: BireDocumentDTO): DocumentRow {
    return {
      _obj: newDocument,
      docCode: newDocument.docCode,
      docExtension: this.showDocExtension(newDocument),
      docName: newDocument.docName,
      docPublicationDate: this.dateService.dateToString(newDocument.docPublicationDate),
      docSize: this.showDocSize(newDocument),
      docSource: newDocument.docSource
    };
  }

  private addNewDocument(newDocument: BireDocumentDTO) {
    const searchInDisplayedList = this.bireDocumentDisplayed.find((value) => value.docName === newDocument.docName);
    if (!searchInDisplayedList) {
      this.bireDocumentAddedList.push(newDocument);
      this.bireDocumentDisplayed.push(this.getCustomDocumentRow(newDocument));
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
    }
  }
  public deleteSelectedDocuments() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedDocuments'),
      accept: () => {
        this.selectedDocuments.forEach((element) => {
          const searchInAddedList = this.bireDocumentAddedList.find((value) => value.docName === element.docName);
          const searchInUpdatedList = this.bireDocumentUpdatedList.find((value) => value.docName === element.docName);
          if (searchInAddedList) {
            const indexInAddedList = this.bireDocumentAddedList.indexOf(searchInAddedList);
            this.bireDocumentAddedList.splice(indexInAddedList, 1);
          } else if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireDocumentUpdatedList.indexOf(searchInUpdatedList);
            this.bireDocumentUpdatedList.splice(indexInUpdatedList, 1);
            if (!!this.evolution.evolutionNumber && !!this.evolution.evolutionRevisionNumber) {
              const bireDocEvolId: BireDocEvolDTOId = {
                evolutionNumber: this.evolution.evolutionNumber,
                evolutionRevisionNumber: this.evolution.evolutionRevisionNumber,
                docCode: element.docCode || ''
              };
              this.bireDocDeletedList.push(bireDocEvolId);
            }
          } else {
            if (!!this.evolution.evolutionNumber && !!this.evolution.evolutionRevisionNumber) {
              const bireDocEvolId: BireDocEvolDTOId = {
                evolutionNumber: this.evolution.evolutionNumber,
                evolutionRevisionNumber: this.evolution.evolutionRevisionNumber,
                docCode: element.docCode || ''
              };
              this.bireDocDeletedList.push(bireDocEvolId);
            }
          }
          const indexInDisplayedList = this.bireDocumentDisplayed.indexOf(element);
          this.bireDocumentDisplayed.splice(indexInDisplayedList, 1);
        });
        this.bireDocDeletedList = [...this.bireDocDeletedList];
        this.selectedDocuments = [];
      }
    });
  }
  public updateDocument(updatedDocument: BireDocumentDTO) {
    if (this.currentDocumentIndex === undefined || this.currentDocumentIndex < 0) {
      this.addNewDocument(updatedDocument);
    } else {
      const previousDocumentObject = this.bireDocumentDisplayed[this.currentDocumentIndex];
      const searchInAddedList = this.bireDocumentAddedList.find(
        (value) => value.docName === previousDocumentObject.docName
      );
      const searchInUpdatedList = this.bireDocumentUpdatedList.find(
        (value) => value.docCode === previousDocumentObject.docCode
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireDocumentAddedList.indexOf(searchInAddedList);
        this.bireDocumentAddedList[indexInAddedList] = updatedDocument;
      } else if (searchInUpdatedList) {
        const indexInUpdatedList = this.bireDocumentUpdatedList.indexOf(searchInUpdatedList);
        this.bireDocumentUpdatedList[indexInUpdatedList] = updatedDocument;
      } else {
        this.bireDocumentUpdatedList.push(updatedDocument);
      }
      this.bireDocumentDisplayed[this.currentDocumentIndex] = this.getCustomDocumentRow(updatedDocument);
      this.selectedDocuments = [];
    }
  }

  // File handler utilities
  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  public showDocSize(document: BidoDocumentationDTO): string {
    return document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  public editDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.bireDocumentDisplayed.findIndex((document) => {
        return document === this.selectedDocuments[0];
      });

      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocument = this.selectedDocuments[0]._obj;
      this.isReadOnlyDocumentDialog = true;
      this.showDocumentDialog = true;
    }
  }

  private findBireDocumentsByEvol(): void {
    this.evolutionFormService.findBireDocumentsByEvol(this.evolution).subscribe(
      (results) => {
        this.bireDocument = results;
        this.bireDocument.forEach((element) => {
          if (element && element.docPublicationDate) {
            element.docPublicationDate = new Date(element.docPublicationDate.toString());
          } else {
            this.bireDocument.pop();
          }
        });

        this.bireDocumentDisplayed = [];
        this.bireDocument.forEach((doc) => {
          this.bireDocumentDisplayed.push(this.getCustomDocumentRow(doc));
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireDocEvolsByEvol'));
      }
    );
  }

  public addDocuments(): void {
    this.currentDocument = {};
    this.selectedDocuments = [];
    this.currentDocumentIndex = -1;
    this.isReadOnlyDocumentDialog = false;
    this.showDocumentDialog = true;
  }

  public downloadFiles(): void {
    this.selectedDocuments.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
    });
  }

  public confirmUpgradeEvolution(): void {
    const partialMessageKey = 'confirmCreateEvolutionUpgrade';

    this.confirmationService.confirm({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.evolutionFormService.checkAndReturnNewRevisionNumberByEvolution(this.evolution).subscribe(
          (revisionNumber) => {
            if (!!revisionNumber && !!this.evolution.evolutionRevisionNumber) {
              const evolRevisionNumber = (parseInt(this.evolution.evolutionRevisionNumber, 10) + 1).toString();
              this.evolutionFormService.upgradeBireEvolution(this.evolution, evolRevisionNumber).subscribe((result) => {
                this.evolution = result;
                if (!!this.componentData) {
                  this.componentData.objectId = `${this.evolution.evolutionNumber}`;
                  this.componentData.objectId += `;${this.evolution.evolutionRevisionNumber}`;
                }
                this.getEvolution();
                this.ngOnInit();
                this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpgradeEvolution'));
              });
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('upgradeAlreadyExists'));
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpgradeEvolution'));
          }
        );
      }
    });
  }

  private getEvolution(): void {
    const bireEvolutionDTOId: BireEvolutionDTOId = {
      evolutionNumber: this.evolution.evolutionNumber,
      evolutionRevisionNumber: this.evolution.evolutionRevisionNumber
    };
    this.evolutionFormService.findBireEvolution(bireEvolutionDTOId).subscribe((data) => {
      this.evolution.evolutionCompliance = data.evolutionCompliance;
      this.evolution.evolutionLevel = data.evolutionLevel;
      this.evolution.evolutionSummary = data.evolutionSummary;
      this.evolution.evolutionType = data.evolutionType;
      this.evolution.tracked = data.tracked;
      this.evolution.statusState = data.statusState;
      this.evolution.statusDate = data.statusDate;
      this.evolution.statusUser = data.statusUser;
    });
  }

  public updateListsAttributes() {
    this.bireApplicabilityAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
    });
    this.bireModificationAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
    });
    this.bireInterdependenceAddedList.forEach((element) => {
      element.interdependenceCode = this.interdependence.filter(
        (status) => status.label === element.interdependenceCode
      )[0].value;
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
    });
    this.bireInterdependenceDeletedList.forEach((element) => {
      element.interdependenceCode = this.interdependence.filter(
        (status) => status.label === element.interdependenceCode
      )[0].value;
    });
    this.bireImpactAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpact.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
    });
    this.bireImpactUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpact.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
    });
    this.bireImpactDeletedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpact.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
    });
    this.bireImpactEvolAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionType.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
      if (element.interchangeability) {
        element.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.label === element.interchangeability
        )[0].value;
      }
    });
    this.bireImpactEvolDeletedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionType.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
      if (element.interchangeability) {
        element.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.label === element.interchangeability
        )[0].value;
      }
    });
    this.bireImpactEvolUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionType.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
      if (element.interchangeability) {
        element.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.label === element.interchangeability
        )[0].value;
      }
    });
    this.bireImpactItemAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
    });
    this.bireImpactItemUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
          (action) => action.label === element.actionTypeCode
        )[0].value;
      }
    });
    this.bireImpactItemDeletedList.forEach((element) => {
      if (!!this.evolution.evolutionNumber && !!this.evolution.evolutionRevisionNumber) {
        element.evolutionNumber = this.evolution.evolutionNumber;
        element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
        if (element.actionTypeCode) {
          element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
            (action) => action.label === element.actionTypeCode
          )[0].value;
        }
      } else {
        super.throwUnboundLocalError('getEvolution', 'this.evolution');
      }
    });
    this.bireSbadAddedList.forEach((element) => {
      element.statusState = this.propertyStatusSbad.filter((status) => status.label === element.statusState)[0].value;
      if (element.statusState !== this.evolution.statusState) {
        this.messageService.showWarningMessage(this.getTranslateKey('Warning'));
      }
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
    });
    this.bireConcernedAssetAddedList.forEach((element) => {
      element.evolutionNumber = this.evolution.evolutionNumber;
      element.evolutionRevisionNumber = this.evolution.evolutionRevisionNumber;
      if (element.assetActionType) {
        element.assetActionType = this.instructions.filter(
          (actionType) => actionType.label === element.assetActionType
        )[0].value;
      }
    });
  }

  private transformDdlValueToLabel() {
    this.bireSbadAddedList.forEach((element) => {
      element.statusState = this.propertyStatusSbad.filter((status) => status.value === element.statusState)[0].label;
    });
    this.bireInterdependenceAddedList.forEach((element) => {
      element.interdependenceCode = this.interdependence.filter(
        (status) => status.value === element.interdependenceCode
      )[0].label;
    });
    this.bireConcernedAssetAddedList.forEach((element) => {
      if (element.assetActionType) {
        element.assetActionType = this.instructions.filter(
          (actionType) => actionType.value === element.assetActionType
        )[0].label;
      }
    });
    this.bireImpactEvolAddedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionType.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
      if (element.interchangeability) {
        element.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.value === element.interchangeability
        )[0].label;
      }
    });
    this.bireImpactEvolUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionType.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
      if (element.interchangeability) {
        element.interchangeability = this.propertyInterchangeability.filter(
          (interchangeability) => interchangeability.value === element.interchangeability
        )[0].label;
      }
    });
    this.bireImpactItemAddedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
    });
    this.bireImpactItemUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpactItem.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
    });
    this.bireImpactAddedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpact.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
    });
    this.bireImpactUpdatedList.forEach((element) => {
      if (element.actionTypeCode) {
        element.actionTypeCode = this.propertyActionTypeImpact.filter(
          (action) => action.value === element.actionTypeCode
        )[0].label;
      }
    });
  }

  public saveEvolutionData(): void {
    if (this.evolution.evolutionNumber && this.evolution.evolutionRevisionNumber) {
      if (!this.isEvolutionAlreadyExist(this.evolution.evolutionNumber, this.evolution.evolutionRevisionNumber)) {
        this.updateListsAttributes();

        this.bireEvolutionAttributes = this.dynamicAttributesService.toBireEvolutionAttribute(
          this.evolution.evolutionNumber,
          this.evolution.evolutionRevisionNumber,
          this.dynamicAttributesForEvolution
        );

        const saveEvolutionDateInput: SaveEvolutionDataInput = {
          evolution: this.evolution,
          bireApplicabilityAddedList: this.bireApplicabilityAddedList,
          bireApplicabilityUpdatedList: this.bireApplicabilityUpdatedList,
          bireApplicabilityDeletedList: this.bireApplicabilityDeletedList,
          bireConcernedAssetAddedList: this.bireConcernedAssetAddedList,
          bireImpactAddedList: this.bireImpactAddedList,
          bireImpactUpdatedList: this.bireImpactUpdatedList,
          bireImpactDeletedList: this.bireImpactDeletedList,
          bireImpactEvolAddedList: this.bireImpactEvolAddedList,
          bireImpactEvolUpdatedList: this.bireImpactEvolUpdatedList,
          bireImpactEvolDeletedList: this.bireImpactEvolDeletedList,
          bireImpactItemAddedList: this.bireImpactItemAddedList,
          bireImpactItemUpdatedList: this.bireImpactItemUpdatedList,
          bireImpactItemDeletedList: this.bireImpactItemDeletedList,
          bireInterdependenceAddedList: this.bireInterdependenceAddedList,
          bireInterdependenceUpdatedList: this.bireInterdependenceUpdatedList,
          bireInterdependenceDeletedList: this.bireInterdependenceDeletedList,
          bireModificationAddedList: this.bireModificationAddedList,
          bireModificationUpdatedList: this.bireModificationUpdatedList,
          bireModificationDeletedList: this.bireModificationDeletedList,
          bireSbadAddedList: this.bireSbadAddedList,
          bireSbadUpdatedList: this.bireSbadUpdatedList,
          bireSbadDeletedList: this.bireSbadDeletedList,
          bireEvolutionAttributes: this.bireEvolutionAttributes,
          bireDocumentAddedList: this.bireDocumentAddedList,
          bireDocumentUpdatedList: this.bireDocumentUpdatedList,
          bireDocDeletedList: this.bireDocDeletedList
        };

        this.showSaveSpinner = true;
        this.evolutionFormService.saveEvolutionData(saveEvolutionDateInput).subscribe(
          (result) => {
            this.isCreateMode = false;
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnSavedEvolution'));
            this.initLists();
            this.updateOpenMode(ComponentOpenMode.Read);
            if (!!this.componentData && !this.componentData.objectId) {
              // this.componentData.objectId = `${this.evolution.evolutionNumber};${this.evolution.evolutionRevisionNumber}`;
              this.isEditable = false;
            }
            const bireEvolutionId: BireEvolutionDTOId = {
              evolutionNumber: this.evolution.evolutionNumber,
              evolutionRevisionNumber: this.evolution.evolutionRevisionNumber
            };

            this.componentData.objectId = this.serializationService.serialize(bireEvolutionId);
            this.refresh();
            this.showSaveSpinner = false;
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveEvolution'));
            this.showSaveSpinner = false;
          }
        );
        this.transformDdlValueToLabel();
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('evolutionAlreadyExist'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }
  }

  public openStatusPopupSbad(bireEvolution: BireEvolutionSbDTO): void {
    this.bireSb = { ...bireEvolution };
    if (this.propertyObjectStatus.filter((status) => status.value === this.bireSb.statusState).length !== 0) {
      this.bireSb.statusState = this.propertyObjectStatus.filter(
        (status) => status.value === this.bireSb.statusState
      )[0].value;
    }
    if (this.bireSb.statusDate) {
      this.bireSb.statusDate = new Date(this.bireSb.statusDate);
    }

    let id = `${this.evolution.evolutionNumber}-${this.evolution.evolutionRevisionNumber}/`;
    id += `${this.bireSb.sbNumber}-${this.bireSb.sbRevisionNumber}`;

    this.bireSbId = id;
    this.displayStatusPopupSb = true;
  }

  public openStatusPopupModification(bireEvolution: BireModificationEvolutionDTO): void {
    this.bireModif = { ...bireEvolution };
    if (this.propertyObjectStatus.filter((status) => status.value === this.bireModif.statusState).length !== 0) {
      this.bireModif.statusState = this.propertyObjectStatus.filter(
        (status) => status.value === this.bireModif.statusState
      )[0].value;
    }
    if (this.bireModif.statusDate) {
      this.bireModif.statusDate = new Date(this.bireModif.statusDate);
    }
    if (!!this.evolution) {
      let id = `${this.bireModif.modificationType}-${this.bireModif.modificationNumber}`;
      id += `-${this.bireModif.modificationRevisionNumber}/`;
      id += `${this.evolution.evolutionNumber}-${this.evolution.evolutionRevisionNumber}`;

      this.bireModifId = id;
    }
    this.displayStatusPopupModif = true;
  }

  public openStatusPopupApplicability(): void {
    if (!!this.selectedApplicabilities && this.selectedApplicabilities.length === 1) {
      this.bireAppli = { ...this.selectedApplicabilities[0] };
      if (this.propertyObjectStatus.filter((status) => status.value === this.bireAppli.statusState).length !== 0) {
        this.bireAppli.statusState = this.propertyObjectStatus.filter(
          (status) => status.value === this.bireAppli.statusState
        )[0].value;
      }
      if (this.bireAppli.statusDate) {
        this.bireAppli.statusDate = new Date(this.bireAppli.statusDate);
      }

      let id = `${this.bireAppli.familyCode}-${this.bireAppli.variantCode}/`;
      id += `${this.bireAppli.evolutionNumber}-${this.bireAppli.evolutionRevisionNumber}`;

      this.bireAppliId = id;
      this.displayStatusPopupAppli = true;
    }
  }

  public openStatusPopupInterdependence(): void {
    if (!!this.selectedInterdependences && this.selectedInterdependences.length === 1) {
      this.bireInterdep = { ...this.selectedInterdependences[0] };
      if (this.propertyObjectStatus.filter((status) => status.value === this.bireInterdep.statusState).length !== 0) {
        this.bireInterdep.statusState = this.propertyObjectStatus.filter(
          (status) => status.value === this.bireInterdep.statusState
        )[0].value;
      }
      if (this.bireInterdep.statusDate) {
        this.bireInterdep.statusDate = new Date(this.bireInterdep.statusDate);
      }
      this.bireInterdepId = `${this.bireInterdep.evolutionNumber}-${this.bireInterdep.evolutionRevisionNumber}/
    ${this.bireInterdep.evoEvolutionNumber}-${this.bireInterdep.evoEvolutionRevisionNumber}`;
      this.displayStatusPopupInterdep = true;
    }
  }

  public openStatusPopupImpact(): void {
    if (!!this.selectedImpacts && this.selectedImpacts.length === 1) {
      this.bireImpact = { ...this.selectedImpacts[0] };
      if (this.propertyObjectStatus.filter((status) => status.value === this.bireImpact.statusState).length !== 0) {
        this.bireImpact.statusState = this.propertyObjectStatus.filter(
          (status) => status.value === this.bireImpact.statusState
        )[0].value;
      }
      if (this.bireImpact.statusDate) {
        this.bireImpact.statusDate = new Date(this.bireImpact.statusDate);
      }

      let id = `${this.bireImpact.pnCode}/`;
      id += `${this.bireImpact.evolutionNumber}-${this.bireImpact.evolutionRevisionNumber}`;

      this.bireImpactId = id;
      this.displayStatusPopupImpact = true;
    }
  }

  public openStatusPopupImpactItem(): void {
    if (!!this.selectedImpactsItem && this.selectedImpactsItem.length === 1) {
      this.bireImpactItem = { ...this.selectedImpactsItem[0] };
      if (this.propertyObjectStatus.filter((status) => status.value === this.bireImpactItem.statusState).length !== 0) {
        this.bireImpactItem.statusState = this.propertyObjectStatus.filter(
          (status) => status.value === this.bireImpactItem.statusState
        )[0].value;
      }
      if (this.bireImpactItem.statusDate) {
        this.bireImpactItem.statusDate = new Date(this.bireImpactItem.statusDate);
      }

      let id = `${this.bireImpactItem.familyCode}-${this.bireImpactItem.variantCode}/`;
      id += `${this.bireImpactItem.evolutionNumber}-${this.bireImpactItem.evolutionRevisionNumber}`;

      this.bireImpactItemId = id;
      this.displayStatusPopupImpactItem = true;
    }
  }

  public openStatusPopupImpactEvol(): void {
    if (this.selectedImpactsEvol && this.selectedImpactsEvol.length === 1) {
      this.bireImpactEvol = { ...this.selectedImpactsEvol[0] };
      if (this.propertyObjectStatus.filter((status) => status.value === this.bireImpactEvol.statusState).length !== 0) {
        this.bireImpactEvol.statusState = this.propertyObjectStatus.filter(
          (status) => status.value === this.bireImpactEvol.statusState
        )[0].value;
      }

      if (this.bireImpactEvol.statusDate) {
        this.bireImpactEvol.statusDate = new Date(this.bireImpactEvol.statusDate);
      }

      const actionTypeCode = this.propertyActionType.filter(
        (action) => action.label === this.bireImpactEvol.actionTypeCode
      )[0].value;

      let id = `${this.bireImpactEvol.familyCode}-${this.bireImpactEvol.variantCode}`;
      id += `-${this.bireImpactEvol.chapter}-${this.bireImpactEvol.section}-`;
      id += `${this.bireImpactEvol.subject}-${this.bireImpactEvol.sheet}-${this.bireImpactEvol.marks}/`;
      id += `${this.bireImpactEvol.pnCode}/${this.bireImpactEvol.pnPnCode}/`;
      id += `${this.evolution.evolutionNumber}-${this.evolution.evolutionRevisionNumber}/${actionTypeCode}`;

      this.bireImpactEvolId = id;
      this.displayStatusPopupImpactEvol = true;
    }
  }

  public openStatusUpdatesPopup() {
    // Test of the popup (not the real history)
    this.showStatusUpdatesPopup = true;

    this.evolutionStatus = { ...this.evolution };
    if (this.evolutionStatus.statusState) {
      this.evolutionStatus.statusState = this.propertyStatus.filter(
        (status) => status.value === this.evolutionStatus.statusState
      )[0].value;
    }
    if (!!this.evolutionStatus.statusState) {
      this.evolutionStatus.statusDate = new Date(this.evolutionStatus.statusState.toString());
    }

    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true, alignment: 'left' },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'evolutionType', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'evolutionSummary', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'evolutionLevel', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'evolutionCompliance', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'tracked', width: '100px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: this.evolution.evolutionNumber,
      evolutionRevisionNumber: this.evolution.evolutionRevisionNumber
    };
    this.updatesKeyMap.set('evolutionCompliance', this.evolutionFormService.getComplianceMap());
    this.updatesKeyMap.set('evolutionType', this.evolutionFormService.getEvolutionTypeMap());
    this.updatesKeyMap.set('evolutionLevel', this.evolutionFormService.getEvolutionLevelMap());
    this.tableStatusUpdatesData = {
      componentId: 'EvolutionFormComponent',
      tableCols: columns,
      tableRows: this.updateHistoricService.findBireEvolutionHistoric(evolutionId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private isEvolutionAlreadyExist(evolutionNumber, evolutionRevisionNumber): boolean {
    let isFound = false;

    if (this.componentData && this.componentData.objectId) {
      return false;
    }

    this.resultsTable.forEach((res) => {
      if (res.evolutionNumber === evolutionNumber && res.evolutionRevisionNumber === evolutionRevisionNumber) {
        isFound = true;
      }
    });

    return isFound;
  }

  private evolutionList() {
    this.evolutionSearchService.findBireEvolutionsByEvolutionCriteria({}, '', '', '').subscribe((results) => {
      this.resultsTable = results.list;
    });
  }

  /**
   * Event on Modification row click
   * param modification
   */
  public openModificationNumber(modification) {
    const selectedObjectId: BireModificationDTO = {
      familyCode: modification.familyCode,
      structureType: modification.structureType,
      modificationType: modification.modificationType,
      modificationNumber: modification.modificationNumber,
      modificationRevisionNumber: modification.modificationRevisionNumber
    };
    this.openModificationForm(selectedObjectId, ComponentOpenMode.Read);
  }

  private openModificationForm(objectId: BireModificationDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'ModificationFormComponent',
      objectId: objectId ? this.serializationService.serialize(objectId) : undefined,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**
   * Event on Evolution row click
   * param modification
   */
  public openEvolutionNumber(ev) {
    if (ev && ev.evoEvolutionNumber && ev.evoEvolutionRevisionNumber) {
      const bireEvId: BireEvolutionDTOId = {
        evolutionNumber: ev.evoEvolutionNumber,
        evolutionRevisionNumber: ev.evoEvolutionRevisionNumber
      };

      this.openEvolution(this.serializationService.serialize(bireEvId));
    }
  }

  /**
   * Event on Task row click
   * param modification
   */
  public openTaskCode(task: BireTaskDTO) {
    if (task) {
      this.openTask(task, ComponentOpenMode.Read);
    }
  }

  public openTask(object: BireTaskDTO | undefined, openMode: ComponentOpenMode): void {
    if (object != undefined) {
      const labelKey = 'transaction.TaskFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'TaskFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /**
   * Event on SbAD row click
   * param modification
   */
  public openRevisionNumber(row: BireEvolutionSbDTO) {
    if (row && row.sbNumber && row.sbRevisionNumber) {
      const bireSbId: BireSbDTOId = { sbNumber: row.sbNumber, sbRevisionNumber: row.sbRevisionNumber };
      if (row.sbType === 'AD') {
        this.openADForm(bireSbId, ComponentOpenMode.Read);
      } else {
        this.openSBForm(bireSbId, ComponentOpenMode.Read);
      }
    }
  }

  public openSBForm(objectId: BireSbDTOId | undefined, openMode: ComponentOpenMode): void {
    if (objectId != undefined) {
      const labelKey = 'transaction.SbadFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'SbadFormComponent',
        objectId: this.serializationService.serialize(objectId),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openADForm(objectId: BireSbDTOId | undefined, openMode: ComponentOpenMode): void {
    if (objectId != undefined) {
      const labelKey = 'transaction.AirworthinessDirectiveFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'AirworthinessDirectiveFormComponent',
        objectId: this.serializationService.serialize(objectId),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.evolution.statusUser,
        currentDate: this.evolution.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.evolution.statusState, this.propertyStatus),
          value: this.evolution.statusState
        },
        nextStatuses: this.propertyStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.evolution.statusState = event.data;
          this.saveEvolutionData();
        }
      }
    });
  }
}
