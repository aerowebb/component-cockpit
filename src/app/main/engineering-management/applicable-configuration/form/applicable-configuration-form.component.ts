import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem, TreeNode } from 'primeng/api';
import { Observable, Subject, forkJoin } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { UpdateHistoricApi } from '../../../../shared/api/update-historic.api';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { ACTreeData } from '../../../../shared/types/api-output-types/fleet-management/ac-tree-data-output';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionEvolutionDTOId } from '../../../../shared/types/api-types/bire-evolution-evolution-dto-id.interface';
import { BireEvolutionEvolutionDTO } from '../../../../shared/types/api-types/bire-evolution-evolution-dto.interface';
import { BireFamilyDTO } from '../../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTOId } from '../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BireModificationDTO } from '../../../../shared/types/api-types/bire-modification-dto.interface';
import { BirePartnerDTOId } from '../../../../shared/types/api-types/bire-partner-dto-id.interface';
import { BirePartnerDTO } from '../../../../shared/types/api-types/bire-partner-dto.interface';
import { BireQualifVariantDTOId } from '../../../../shared/types/api-types/bire-qualif-variant-dto-id.interface';
import { BireQualifVariantDTO } from '../../../../shared/types/api-types/bire-qualif-variant-dto.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireRatingDTO } from '../../../../shared/types/api-types/bire-rating-dto.interface';
import { BireSbDTOId } from '../../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireUnmountAssemblyDTOId } from '../../../../shared/types/api-types/bire-unmount-assembly-dto-id.interface';
import { BireUnmountAssemblyDTO } from '../../../../shared/types/api-types/bire-unmount-assembly-dto.interface';
import { BireUnmountOrderDTOId } from '../../../../shared/types/api-types/bire-unmount-order-dto-id.interface';
import { BireUnmountOrderDTO } from '../../../../shared/types/api-types/bire-unmount-order-dto.interface';
import { BireVariantAttributeDTO } from '../../../../shared/types/api-types/bire-variant-attribute-dto.interface';
import { BireVariantDTO } from '../../../../shared/types/api-types/bire-variant-dto.interface';
import { BireVariantVersionDTOId } from '../../../../shared/types/api-types/bire-variant-version-dto-id.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { BireVersionPnDTO } from '../../../../shared/types/api-types/bire-version-pn-dto.interface';
import { ConfigurationDocumentsDTO } from '../../../../shared/types/api-types/configuration-documents-dto.interface';
import { EvolutionInterdependencesListDTO } from '../../../../shared/types/api-types/evolution-interdependences-list-dto.interface';
import { FindEvolutionModificationSbAdListDTO } from '../../../../shared/types/api-types/find-evolution-modification-sbad-list-dto.interface';
import { HBidoEquipmentAttributeDTO } from '../../../../shared/types/api-types/h-bido-equipment-attribute-dto.interface';
import { SaveApplicationConfigurationDataInput } from '../../../../shared/types/api-types/save-applicable-configuration-screen-input';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { ImageUtils } from '../../../../shared/utils/image-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';

import { ApplicableConfigurationFormMhiaelService } from './applicable-configuration-form-mhiael.service';
import { ApplicableConfigurationFormService } from './applicable-configuration-form.service';

interface EvolutionInterdependencesRow {
  bireEvolutionEvolutionDTO?: BireEvolutionEvolutionDTO;
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  evoEvolutionNumber?: string;
  evoEvolutionRevisionNumber?: string;
  interdependenceCode?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  adInitialText?: string;
  adDependentText?: string;
  sbInitialText?: string;
  sbDependentText?: string;
  modInitialText?: string;
  modDependentText?: string;
}

interface ConfigurationDocumentsRow {
  number?: string;
  revisionNumber?: string;
  type?: string;
  approvalDate?: Date;
  approvalDateStr?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  documentType?: string;
  applicabilityCode?: string;
}

interface ItemStructureNodePart {
  isnAta: string;
  pnCode: string;
  pnQuantityTci: string;
  pnQuantityMpl: string;
  alternativePn: string;
  _obj: BireVersionPnDTO;
}

@Component({
  selector: 'aw-applicable-configuration-form',
  styleUrls: ['./applicable-configuration-form.component.scss'],
  templateUrl: './applicable-configuration-form.component.html'
})
export class ApplicableConfigurationFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly SEARCH_TEXT_DEBOUNCE_TIME: number = 500;

  @ViewChild('mainInfoAnchor')
  public mainInfoAnchor: ElementRef;

  @ViewChild('generalAnchor')
  public generalAnchor: ElementRef;

  @ViewChild('itemStrucutre')
  public itemStrucutre: ElementRef;

  @ViewChild('configDoc')
  public configDoc: ElementRef;

  @ViewChild('docMatching')
  public docMatching: ElementRef;

  @ViewChild('evolutionInterdependences')
  public evolutionInterdependences: ElementRef;

  @ViewChild('disassemblyGroups')
  public disassemblyGroups: ElementRef;

  @ViewChild('attributes')
  public attributes: ElementRef;

  // public businessPartner: BidoCustomerDTO;
  public applicableConfiguration: BireVariantDTO;
  public contacts: BidoContactDTO[];
  public contactTableCols: TableColumn[];
  public countries: SelectItem[];

  public oemPartnersTableDataSource: TableDataSource<BirePartnerDTO>;

  public oemPartnersAdded: BirePartnerDTO[];
  public oemPartnersUpdated: BirePartnerDTO[];
  public oemPartnersRemoved: BirePartnerDTOId[];

  public tableStatusUpdatesData: DialogTableData<BireAttributeDTO>;

  public associatedQualificationTableDataSource: TableDataSource<BireQualificationDTO>;

  public associatedQualificationAdded: BireQualifVariantDTO[];
  public associatedQualificationRemoved: BireQualifVariantDTOId[];

  public bireRatingDTOAddedList: BireRatingDTO[];
  public bireRatingDTORemovedList: BireRatingDTO[];

  public structureTableCols: TableColumn[];
  public itemStructureDisplayed: TreeNode[];

  public configurationDocumentsTableDataSource: TableDataSource<ConfigurationDocumentsRow>;
  public currentConfigurationDocuments: BireUnmountAssemblyDTO | undefined;
  public currentConfigurationDocumentsIndex: number | undefined;
  public configurationDocumentsDialogOpenMode: ComponentOpenMode;
  public showConfigurationDocumentsDialog: boolean;

  public evolutionModificationTableDataSource: TableDataSource<FindEvolutionModificationSbAdListDTO>;

  public evolutionInterdependencesTableDataSource: TableDataSource<EvolutionInterdependencesRow>;
  public currentEvolutionInterdependences: EvolutionInterdependencesListDTO | undefined;
  public currentEvolutionInterdependencesIndex: number | undefined;
  public evolutionInterdependencesDialogOpenMode: ComponentOpenMode;
  public showEvolutionInterdependencesDialog: boolean;
  public interdependenceAddedList: BireEvolutionEvolutionDTO[];
  public interdepenedenceRemoved: BireEvolutionEvolutionDTOId[];

  public disassemblyGroupTableDataSource: TableDataSource<BireUnmountAssemblyDTO>;
  public currentDisassemblyGroup: BireUnmountAssemblyDTO | undefined;
  public currentDisassemblyGroupIndex: number | undefined;
  public disassemblyGroupDialogOpenMode: ComponentOpenMode;
  public showDisassemblyGroupDialog: boolean;
  public showFamilyCodeDialog: boolean;
  public showDocumentMatchingDialog: boolean;
  public documentMatchingDialogOpenMode: ComponentOpenMode;
  public disassemblyGroupAdded: BireUnmountAssemblyDTO[];
  public disassemblyGroupRemoved: BireUnmountAssemblyDTOId[];
  public configurationDocumentsAddedList: ConfigurationDocumentsDTO[];
  public configurationDocumentsRemovedList: ConfigurationDocumentsDTO[];
  public configurationDocumentsUpdatedList: ConfigurationDocumentsDTO[];

  public removalOrderTableDataSource: TableDataSource<BireUnmountOrderDTO>;
  public currentRemovalOrder: BireUnmountOrderDTO | undefined;
  public currentRemovalOrderIndex: number | undefined;
  public removalOrderDialogOpenMode: ComponentOpenMode;
  public showRemovalOrderDialog: boolean;
  public removalOrderAdded: BireUnmountOrderDTO[];
  public removalOrderRemoved: BireUnmountOrderDTOId[];

  public showOEMPartnerDialog: boolean;
  public oemPartnerOpenMode: ComponentOpenMode;
  public currentOEMPartnerMax: BireItemDTOId | undefined;
  public currentOEMPartnerMin: BireItemDTOId | undefined;
  public currentConfigurationDoc: ConfigurationDocumentsDTO[] | undefined;

  public showAssociatedQualificationDialog: boolean;
  public associatedQualificationOpenMode: ComponentOpenMode;

  public bireVariantVersionDTOId: BireVariantVersionDTOId;
  public bireVariantVersionSelected: BireVariantVersionDTOId | undefined;
  public dialogTableDataFamilyCode: DialogTableData<BireVariantDTO>;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public propertyStructureType: LabelValue<string>[];
  private interdependences: LabelValue<string>[];

  public displayStatusPopup: boolean;
  public displayStatusRemovalPopup: boolean;

  public currentAsset: BireUnmountAssemblyDTO;
  public currentRemovalAsset: BireUnmountOrderDTO;
  public currentAssetId: string;
  public isStatusEditable: boolean;
  public disassemblyList: LabelValue<string>[];
  public oemPartnersList: LabelValue<string>[];
  public structureTypes: LabelValue<string>[];
  public showStatusUpdatesPopup: boolean;
  public dialogTableDataFamilyList: DialogTableData<BireFamilyDTO>;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public deleteApi: string;
  public currency: string;
  private variantRevisionNumberClone: string;
  public variantRevisionDateClone: Date;

  public workflowStatus: LabelValue<string>[];
  public status: LabelValue<string>[];

  // Attribute History
  public bireAttributesForApplicableConfiguration: BireAttributeDTO[];
  public dynamicAttributesHistoric: Observable<HBidoEquipmentAttributeDTO[]>;
  public dynamicAttributesForAppConfig: DynamicAttributes[];
  public bireVariantAttributeDTO: BireVariantAttributeDTO[];
  public toc: PageTocEntry[];

  public selectedAnchor: string | undefined;

  public mapItemPns: Map<string, BireVersionPnDTO[]> = new Map<string, BireVersionPnDTO[]>();

  ///////////////////////////////////////////////////////////////////////////////

  public componentDesignation: string;
  public controlIpcDataVisible: boolean;
  public itemStructureLoading: boolean;
  public itemStructureNodeImageList: SafeResourceUrl[];
  public itemStructureNodeSelected: TreeNode | undefined;
  public nodePartTableDataSource: TableDataSource<ItemStructureNodePart>;
  public itemStructureNodePartTableLoading: boolean;
  public searchItemStructureGlobalFilter: string;
  public searchItemStructureGlobalFilterChanged: Subject<string>;

  private itemFamilyCodeList: LabelValue<string>[];
  private itemStructure: TreeNode[];
  public selectedFamilyFunction: string | undefined;
  public selectedFamilyFunctionDisplayed: string | undefined;
  public isDisplayRatingTable: boolean;

  public ratingTableDataSource: TableDataSource<BireRatingDTO>;
  public flFunctions: LabelValue<string>[];
  public showRatingDialog: boolean;
  public ratingDialogOpenMode: ComponentOpenMode;
  public bireRatingInput: BireRatingDTO;
  public isLoadingRating: boolean;

  ///////////////////////////////////////////////////////////////////////////////

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly domSanitizer: DomSanitizer,
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly applicableConfigurationFormMhiaelService: ApplicableConfigurationFormMhiaelService,
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

    this.setItemStructureGlobalFilter();

    this.init();

    this.structureTypes = [];
    this.bireAttributesForApplicableConfiguration = [];
    this.deleteApi = this.updateHistoricApi.removeBireVariantVersionHistory;
    this.selectedAnchor = undefined;

    // this.setTableCols();

    this.bireVariantVersionSelected = undefined;
    this.initOemPartnersTableDataSource();

    this.oemPartnersAdded = [];
    this.oemPartnersUpdated = [];
    this.oemPartnersRemoved = [];
    this.oemPartnersList = [];
    this.initAssociatedQualificationTableDataSource();

    this.associatedQualificationAdded = [];
    this.associatedQualificationRemoved = [];
    this.initConfigurationDocumentsTableDataSource();

    this.currentConfigurationDocuments = undefined;
    this.currentConfigurationDocumentsIndex = undefined;
    this.configurationDocumentsDialogOpenMode = ComponentOpenMode.Read;
    this.showConfigurationDocumentsDialog = false;
    this.showDocumentMatchingDialog = false;
    this.initEvolutionModificationTableDataSource();
    this.initEvolutionInterdependencesTableDataSource();
    this.interdependences = [];

    this.currentEvolutionInterdependences = undefined;
    this.currentEvolutionInterdependencesIndex = undefined;
    this.evolutionInterdependencesDialogOpenMode = ComponentOpenMode.Read;
    this.showEvolutionInterdependencesDialog = false;
    this.showFamilyCodeDialog = false;
    this.showStatusUpdatesPopup = false;

    this.interdependenceAddedList = [];
    this.interdepenedenceRemoved = [];
    this.loadInterdependences();
    this.initDisassemblyGroupTableDataSource();

    this.disassemblyGroupAdded = [];
    this.disassemblyGroupRemoved = [];

    this.configurationDocumentsAddedList = [];
    this.configurationDocumentsRemovedList = [];
    this.configurationDocumentsUpdatedList = [];

    this.currentDisassemblyGroup = undefined;
    this.currentDisassemblyGroupIndex = undefined;
    this.disassemblyGroupDialogOpenMode = ComponentOpenMode.Read;
    this.showDisassemblyGroupDialog = false;

    this.disassemblyList = [];
    this.initRemovalOrderTableDataSource();

    this.removalOrderAdded = [];
    this.removalOrderRemoved = [];

    this.currentRemovalOrder = undefined;
    this.currentRemovalOrderIndex = undefined;
    this.removalOrderDialogOpenMode = ComponentOpenMode.Read;
    this.showRemovalOrderDialog = false;
    this.displayStatusPopup = false;

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('familyFunction', this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP));
    this.keyMap.set('structureType', this.propertiesService.getValue(GenericPropertyConstants.STRUCTURE_TYPE_MAP));
    this.searchFamilyCode();

    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.initNodePartTableDataSource();

    this.isDisplayRatingTable = false;
    this.initRatingTableDataSource();

    this.itemStructureDisplayed = [];
    this.loadCurrency();

    this.applicableConfiguration.statusState = AWPropertiesConstants.FUNC_OBJECT_STATUS_ON_GOING_KEY;

    this.status = [];
    this.loadStatus(AWPropertiesConstants.OBJECT_STATUS_LOADED_KEY);

    this.userWorkflowSubject.pipe(takeUntil(this.unsubscribe)).subscribe((_userWorkflow) => {
      this.updateWorkflowStatusList();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_APPLICABLE_CONFIGURATION_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (!!this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const context = !!this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId)
        : 'tab.createMode';

      this.componentDesignation = context.familyCode
        ? `${context.familyCode}-${context.variantCode}-${context.variantName}`
        : 'tab.createMode';

      this.displayComponentContext(this.componentDesignation, this.isCreateOpenMode);
      this.loadFormData();
    }
    this.loadStructureTypes();
    this.loadOEMPartnerList();
    this.findBireAttributesByCategory();

    // Lang change events
    this.translateService.onLangChange.subscribe(() => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForAppConfig = this.dynamicAttributesService.from(
        this.bireAttributesForApplicableConfiguration
      );
    });

    this.fillTableOfContents();
  }

  private initNodePartTableDataSource(): void {
    this.nodePartTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      enableSelection: false,
      columns: [
        {
          field: 'pnCode',
          translateKey: this.getTranslateKey('pn'),
          width: '25%'
        },
        {
          field: 'isnAta',
          translateKey: this.getTranslateKey('isnAta'),
          width: '10%'
        },
        {
          field: 'pnQuantityTci',
          translateKey: this.getTranslateKey('ipcQuantity'),
          alignment: ColumnAlignment.RIGHT,
          width: '15%'
        },
        {
          field: 'pnQuantityMpl',
          translateKey: this.getTranslateKey('mplQuantity'),
          alignment: ColumnAlignment.RIGHT,
          width: '15%'
        },
        {
          field: 'alternativePn',
          translateKey: this.getTranslateKey('alternativePn'),
          width: '35%'
        }
      ],
      data: []
    });
  }

  private initOemPartnersTableDataSource(): void {
    this.oemPartnersTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'partnerCode',
          translateKey: this.getTranslateKey('partnerCode')
        },
        {
          field: 'itemRangeMin',
          translateKey: this.getTranslateKey('itemRangeMin')
        },
        {
          field: 'itemRangeMax',
          translateKey: this.getTranslateKey('itemRangeMax')
        }
      ],
      data: []
    });
  }

  private initAssociatedQualificationTableDataSource(): void {
    this.associatedQualificationTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'qualificationCode',
          translateKey: this.getTranslateKey('qualificationCode')
        },
        {
          field: 'qualificationName',
          translateKey: this.getTranslateKey('qualificationName')
        },
        {
          field: 'qualificationDescription',
          translateKey: this.getTranslateKey('qualificationDescription')
        },
        {
          field: 'averageHourRate',
          translateKey: this.getTranslateKey('averageHourRate')
        }
      ],
      data: []
    });
  }

  private initRatingTableDataSource(): void {
    this.ratingTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'ratingCode',
          translateKey: this.getTranslateKey('ratingCode')
        },
        {
          field: 'ratingName',
          translateKey: this.getTranslateKey('ratingName')
        }
      ],
      data: []
    });
  }

  private initConfigurationDocumentsTableDataSource(): void {
    this.configurationDocumentsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'number',
          translateKey: this.getTranslateKey('number'),
          width: '12.5%'
        },
        {
          field: 'revisionNumber',
          translateKey: this.getTranslateKey('revisionNumber'),
          width: '12.5%'
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation'),
          width: '47.5%'
        },
        {
          field: 'documentType',
          translateKey: this.getTranslateKey('documentType'),
          width: '12.5%'
        },
        {
          field: 'type',
          translateKey: this.getTranslateKey('type'),
          width: '5%'
        },
        {
          field: 'approvalDateStr',
          translateKey: this.getTranslateKey('approvalDateStr'),
          width: '10%'
        }
      ],
      data: []
    });
  }

  private initEvolutionModificationTableDataSource(): void {
    this.evolutionModificationTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber'),
          width: '10.5%'
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber'),
          width: '10.5%'
        },
        {
          field: 'familyCode',
          translateKey: this.getTranslateKey('familyCode'),
          width: '10.5%'
        },
        {
          field: 'modificationStructureTypeKey',
          translateKey: this.getTranslateKey('modificationStructureTypeKey'),
          width: '10.5%'
        },
        {
          field: 'modificationType',
          translateKey: this.getTranslateKey('modificationType'),
          width: '10.5%'
        },
        {
          field: 'modificationNumber',
          translateKey: this.getTranslateKey('modificationNumber'),
          width: '10.5%'
        },
        {
          field: 'modificationRevisionNumber',
          translateKey: this.getTranslateKey('modificationRevisionNumber'),
          width: '10.5%'
        },
        {
          field: 'sbAdNumber',
          translateKey: this.getTranslateKey('sbAdNumber'),
          width: '10.5%'
        },
        {
          field: 'sbAdRevisionNumber',
          translateKey: this.getTranslateKey('sbAdRevisionNumber'),
          width: '16%'
        }
      ],
      data: []
    });
  }

  private initEvolutionInterdependencesTableDataSource(): void {
    this.evolutionInterdependencesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyCode',
          translateKey: this.getTranslateKey('familyCode')
        },
        {
          field: 'variantCode',
          translateKey: this.getTranslateKey('variantCode')
        },
        {
          field: 'evolutionNumber',
          translateKey: this.getTranslateKey('evolutionNumber')
        },
        {
          field: 'evolutionRevisionNumber',
          translateKey: this.getTranslateKey('evolutionRevisionNumber')
        },
        {
          field: 'interdependenceCode',
          translateKey: this.getTranslateKey('interdependenceCode')
        },
        {
          field: 'evoEvolutionNumber',
          translateKey: this.getTranslateKey('evoEvolutionNumber')
        },
        {
          field: 'evoEvolutionRevisionNumber',
          translateKey: this.getTranslateKey('evoEvolutionRevisionNumber')
        }
      ],
      data: []
    });
  }

  private initDisassemblyGroupTableDataSource(): void {
    this.disassemblyGroupTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'familyCode',
          translateKey: this.getTranslateKey('familyCode')
        },
        {
          field: 'variantCode',
          translateKey: this.getTranslateKey('variantCode')
        },
        {
          field: 'unmountCode',
          translateKey: this.getTranslateKey('unmountCode')
        }
      ],
      data: []
    });
  }

  private initRemovalOrderTableDataSource(): void {
    this.removalOrderTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'unmountCode',
          translateKey: this.getTranslateKey('unmountCode')
        },
        {
          field: 'unmUnmountCode',
          translateKey: this.getTranslateKey('unmUnmountCode')
        }
      ],
      data: []
    });
  }

  private fillTableOfContents() {
    const mainDataKey = 'page.mainData';
    const generalKey = this.getTranslateKey('general');

    const itemStructureKey = this.getTranslateKey('itemStructure');
    const configDocKey = this.getTranslateKey('configDoc');
    const docMatchingKey = this.getTranslateKey('docMatching');
    const evolutionInterdependencesKey = this.getTranslateKey('evolutionInterdependences');
    const disassemblyGroupsKey = this.getTranslateKey('disassemblyGroups');
    const attributesKey = this.getTranslateKey('attributes');

    this.translateService
      .get([
        mainDataKey,
        generalKey,
        itemStructureKey,
        configDocKey,
        docMatchingKey,
        evolutionInterdependencesKey,
        disassemblyGroupsKey,
        attributesKey
      ])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const generalLabel = !!results ? results[generalKey] : 'Additional Information';
        const itemStructureLabel = !!results ? results[itemStructureKey] : 'Item Structure';
        const configDocLabel = !!results ? results[configDocKey] : 'Airworthiness Documents';
        const docMatchingLabel = !!results ? results[docMatchingKey] : 'Document Matching';
        const evolutionInterdependencesLabel = !!results
          ? results[evolutionInterdependencesKey]
          : 'Evolution Interdependences';

        const disassemblyGroupsLabel = !!results ? results[disassemblyGroupsKey] : 'Disassembly Groups';
        const attributesLabel = !!results ? results[attributesKey] : 'Attributes';

        this.toc = [
          {
            id: 'mainInfoAnchor',
            anchor: this.mainInfoAnchor,
            label: mainDataLabel
          },
          {
            id: 'itemStrucutre',
            anchor: this.itemStrucutre,
            label: itemStructureLabel
          },
          {
            id: 'generalAnchor',
            anchor: this.generalAnchor,
            label: generalLabel
          },
          {
            id: 'configDoc',
            anchor: this.configDoc,
            label: configDocLabel
          },
          {
            id: 'docMatching',
            anchor: this.docMatching,
            label: docMatchingLabel
          },
          {
            id: 'evolutionInterdependences',
            anchor: this.evolutionInterdependences,
            label: evolutionInterdependencesLabel
          },
          {
            id: 'disassemblyGroups',
            anchor: this.disassemblyGroups,
            label: disassemblyGroupsLabel
          },
          {
            id: 'attributes',
            anchor: this.attributes,
            label: attributesLabel
          }
        ];

        super.selectPageTocEntry('mainInfoAnchor');
      });
  }

  ///////////////////////////////////////////////////////////////////////////////

  public get itemFamilyCode(): string {
    if (!this.itemStructureNodeSelected) {
      return '';
    } else {
      const itemFamilyCodeSelected = this.itemFamilyCodeList.find(
        (elt) => elt.value === (this.itemStructureNodeSelected as TreeNode).data.itemFamilyCode
      );

      return itemFamilyCodeSelected ? itemFamilyCodeSelected.label : '';
    }
  }

  public controlIpcData(): void {
    this.controlIpcDataVisible = true;
  }

  public filterItemStructure(searchTextValue: string) {
    this.searchItemStructureGlobalFilterChanged.next(searchTextValue);
  }

  public onSelectNode(): void {
    this.itemStructureNodePartTableLoading = true;
    const node = this.itemStructureNodeSelected as TreeNode;
    const nodePart: ItemStructureNodePart[] = [];
    const bireItem: BireItemDTO = this.buildBireItemDTO(node.data);
    if (!!node && !!node.data) {
      this.applicableConfigurationFormService.findBireVersionPnsByItem(bireItem).subscribe((result) => {
        result.forEach((pn) => {
          const row: ItemStructureNodePart = {
            pnCode: StringUtils.orEmpty(pn.pnCode),
            isnAta: StringUtils.orEmpty(pn.isnAta),
            pnQuantityTci: StringUtils.orEmpty(pn.pnQuantityTci),
            pnQuantityMpl: StringUtils.orEmpty(pn.pnQuantityMpl),
            alternativePn: StringUtils.orEmpty(pn.pnAlternativeType),
            _obj: pn
          };
          nodePart.push(row);
        });
        this.nodePartTableDataSource.setData(nodePart);
        this.nodePartTableDataSource.update();
      });
    }

    this.itemStructureNodePartTableLoading = false;
    this.loadItemStructureNodeIllustrationList(bireItem);
  }

  // tslint:disable-next-line: no-any
  private buildBireItemDTO(data: any): BireItemDTO {
    return {
      chapter: data.chapter,
      familyCode: data.familyCode,
      marks: data.marks,
      section: data.section,
      sheet: data.sheet,
      structureType: data.structureType,
      subject: data.subject,
      variantCode: data.variantCode
    };
  }

  public openConfigurationDiagram(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_CONFIGURATION_DIAGRAM_FORM,
      objectId: this.serializationService.serialize((this.itemStructureNodeSelected as TreeNode).data),
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openItem(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      objectId: this.serializationService.serialize((this.itemStructureNodeSelected as TreeNode).data),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openItemPartNumber(itemPartNumber: ItemStructureNodePart): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_PART_NUMBER_FORM,
      objectId: this.serializationService.serialize(itemPartNumber._obj),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private clearItemStructureGlobalFilter(): void {
    this.searchItemStructureGlobalFilter = '';
  }

  private findNodeInItemStructureByItem(temStructure: TreeNode[] | undefined, item: BireItemDTO): TreeNode | undefined {
    return this.getAllNodeInItemStructure(temStructure).find((elt) => {
      const nodeData = elt.data as BireItemDTO;

      return (
        nodeData.familyCode === item.familyCode &&
        nodeData.chapter === item.chapter &&
        nodeData.subject === item.subject &&
        nodeData.variantCode === item.variantCode &&
        nodeData.section === item.section &&
        nodeData.sheet === item.sheet &&
        nodeData.marks === item.marks &&
        nodeData.structureType === item.structureType
      );
    });
  }

  private getAllNodeInItemStructure(itemStructure: TreeNode[] | undefined): TreeNode[] {
    let result: TreeNode[] = [];

    if (!ListUtils.isNullOrEmpty(itemStructure)) {
      (itemStructure as TreeNode[]).forEach((node) => {
        result = [...result, node];
        result = [...result, ...this.getAllNodeInItemStructure(node.children)];
      });
    }

    return result;
  }

  private loadFormData(): void {
    forkJoin([
      this.propertiesService.getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP),
      this.propertiesService.getValue(GenericPropertyConstants.FAMILY_FUNCTION_MAP)
    ]).subscribe(([itemFamilyCodeList, familyFunctionList]) => {
      this.itemFamilyCodeList = ListUtils.orEmpty(itemFamilyCodeList);
      this.flFunctions = ListUtils.orEmpty(familyFunctionList);
      this.loadApplicableConfiguration();
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.loadApplicableForm();
      }
    });
  }

  private loadItemStructureNodeIllustrationList(bireItem: BireItemDTO): void {
    this.itemStructureNodeImageList = [];

    const bireItemDTOId: BireItemDTOId = {
      familyCode: StringUtils.orEmpty(bireItem.familyCode),
      chapter: StringUtils.orEmpty(bireItem.chapter),
      subject: StringUtils.orEmpty(bireItem.subject),
      variantCode: StringUtils.orEmpty(bireItem.variantCode),
      section: StringUtils.orEmpty(bireItem.section),
      sheet: StringUtils.orEmpty(bireItem.sheet),
      marks: StringUtils.orEmpty(bireItem.marks),
      structureType: StringUtils.orEmpty(bireItem.structureType)
    };
    this.applicableConfigurationFormService.findBireDocItemsByItem(bireItemDTOId).subscribe((results) => {
      this.itemStructureNodeImageList = ListUtils.orEmpty(results)
        .filter((result) => {
          return (
            ObjectUtils.isDefined(result.bireDocumentDTO) &&
            ObjectUtils.isDefined((result.bireDocumentDTO as BireDocumentDTO).docFile)
          );
        })
        .map((result) => {
          const doc = result.bireDocumentDTO as BireDocumentDTO;

          return this.domSanitizer.bypassSecurityTrustResourceUrl(
            `${ImageUtils.getBase64Prefix(doc.docType)}${doc.docFile}`
          );
        });
    });
  }

  private setItemStructureGlobalFilter(): void {
    this.clearItemStructureGlobalFilter();
    this.searchItemStructureGlobalFilterChanged = new Subject<string>();
    this.searchItemStructureGlobalFilterChanged
      .pipe(
        debounceTime(ApplicableConfigurationFormComponent.SEARCH_TEXT_DEBOUNCE_TIME),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe)
      )
      .subscribe((searchTextValue) => {
        this.updateItemStructureDisplayed(searchTextValue);
      });
  }

  private treeNodeMatchFilters(node: TreeNode, searchText: string | undefined): boolean {
    if (!ListUtils.isNullOrEmpty(node.children)) {
      node.children = (node.children as TreeNode[]).filter((child) => this.treeNodeMatchFilters(child, searchText));
    }

    const nodeData = node.data as BireItemDTO;

    // Description
    const designation = [
      nodeData.chapter,
      nodeData.section,
      nodeData.subject,
      nodeData.sheet,
      nodeData.marks,
      nodeData.name
    ].join('-');
    const designationMatch = StringUtils.isNullOrEmpty(searchText) || designation.includes(searchText as string);

    // Name
    const name = StringUtils.orEmpty(nodeData.name).toLowerCase();
    const nameMatch = StringUtils.isNullOrEmpty(searchText) || name.includes(searchText as string);

    return ListUtils.orEmpty(node.children).length > 0 || designationMatch || nameMatch;
  }

  private updateItemStructureDisplayed(searchText: string): void {
    this.itemStructureDisplayed = _cloneDeep(this.itemStructure);
    this.itemStructureDisplayed = this.itemStructureDisplayed.filter((elt) =>
      this.treeNodeMatchFilters(elt, !!searchText ? searchText.toLowerCase() : undefined)
    );

    if (this.itemStructureNodeSelected) {
      const selectedItem = this.itemStructureNodeSelected.data as BireItemDTO;
      const nodeInItemStructureDisplayed = this.findNodeInItemStructureByItem(
        this.itemStructureDisplayed,
        selectedItem
      );
      if (nodeInItemStructureDisplayed) {
        this.itemStructureNodeSelected = nodeInItemStructureDisplayed;
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  private findBireAttributesByCategory() {
    this.applicableConfigurationFormService
      .findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_VARIANT_VERSION_KEY)
      .subscribe((results) => {
        if (!ListUtils.isNullOrEmpty(results)) {
          this.bireAttributesForApplicableConfiguration.push(...results);
        }
        setTimeout(() => {
          this.dynamicAttributesForAppConfig = this.dynamicAttributesService.from(
            this.bireAttributesForApplicableConfiguration
          );
          this.getBireEvolutionAttributes();
        });
      });
  }

  public getBireEvolutionAttributes(): void {
    const bireVariantVersionDTOId: BireVariantVersionDTOId = {
      familyCode: this.applicableConfiguration.familyCode as string,
      structureType: this.applicableConfiguration.structureType as string,
      variantCode: this.applicableConfiguration.variantCode as string
    };
    this.applicableConfigurationFormService
      .findBireVariantAttributesByVariantVersion(bireVariantVersionDTOId)
      .subscribe(
        (results) => {
          this.bireVariantAttributeDTO = results;
          this.dynamicAttributesService.setValues(this.dynamicAttributesForAppConfig, this.bireVariantAttributeDTO);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByEvolution'));
        }
      );
  }

  private loadApplicableForm() {
    if (
      !!this.applicableConfiguration.familyCode &&
      !!this.applicableConfiguration.variantCode &&
      !!this.applicableConfiguration.structureType
    ) {
      this.bireVariantVersionDTOId = {
        familyCode: this.applicableConfiguration.familyCode as string,
        variantCode: this.applicableConfiguration.variantCode as string,
        structureType: this.applicableConfiguration.structureType as string
      };
      this.loadConfigurationDocuments(this.bireVariantVersionDTOId);
      this.loadEvolutionModificationSbad(this.bireVariantVersionDTOId);
      this.loadEvolutionInterdependences(this.bireVariantVersionDTOId);
      this.loadDisassemblyGroups(this.bireVariantVersionDTOId);
      this.loadRemovalOrders(this.bireVariantVersionDTOId);
      this.loadOEMPartner(this.bireVariantVersionDTOId);
      this.loadAssociatedQualification(this.bireVariantVersionDTOId);
      this.loadItemStructure();
      this.loadConfigDocuments(this.bireVariantVersionDTOId);
      if (this.selectedFamilyFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
        this.loadRatingTable(this.bireVariantVersionDTOId);
      }
    } else {
      super.throwUnboundLocalError('ngOnInit', 'this.applicableConfiguration');
    }
  }

  // Item Structure table
  public loadItemStructure(): void {
    this.itemStructureLoading = true;
    this.searchItemStructureGlobalFilter = '';

    const input: BireVariantVersionDTOId = {
      familyCode: this.bireVariantVersionDTOId.familyCode,
      variantCode: this.bireVariantVersionDTOId.variantCode,
      structureType: this.bireVariantVersionDTOId.structureType
    };

    this.applicableConfigurationFormService.getItemStructureForTree(input).subscribe((data: ACTreeData[]) => {
      this.itemStructure = this.buildTree(data);
      this.itemStructureDisplayed = _cloneDeep(this.itemStructure);
      if (this.itemStructureDisplayed.length > 0) {
        if (this.itemStructureDisplayed.length === 1) {
          this.itemStructure[0].expanded = true;
          this.itemStructureDisplayed[0].expanded = true;
        }

        this.itemStructureNodeSelected = this.itemStructureDisplayed[0];
        this.onSelectNode();
      } else {
        this.itemStructureNodeSelected = undefined;
      }
      this.itemStructureLoading = false;
    });
  }

  private buildTree(data: ACTreeData[]): TreeNode[] {
    const toReturn: TreeNode[] = [];
    data.forEach((elt: ACTreeData) => {
      toReturn.push({
        data: elt.data,
        children: this.buildTree(ListUtils.orEmpty(elt.children))
      });
    });

    return toReturn;
  }

  public loadApplicableConfiguration(): void {
    if (this.componentData) {
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.applicableConfiguration = this.serializationService.deserialize(this.componentData.objectId);
        this.applicableConfiguration.statusDate = new Date(
          this.serializationService.deserialize(this.componentData.objectId).statusDate
        );
        this.selectedFamilyFunction = this.applicableConfiguration.familyFunction;

        if (!!this.flFunctions) {
          const selectedFunction = this.flFunctions.find(
            (functions) => functions.value === this.applicableConfiguration.familyFunction
          );
          this.selectedFamilyFunctionDisplayed =
            !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
        }

        this.applicableConfiguration.variantRevisionDate = this.applicableConfiguration.variantRevisionDate
          ? new Date(this.applicableConfiguration.variantRevisionDate)
          : this.variantRevisionDateClone
          ? this.variantRevisionDateClone
          : undefined;
        this.applicableConfiguration.variantRevisionNumber = this.applicableConfiguration.variantRevisionNumber
          ? this.applicableConfiguration.variantRevisionNumber
          : this.variantRevisionNumberClone
          ? this.variantRevisionNumberClone
          : '';

        this.bireRatingInput = {
          familyCode: this.applicableConfiguration.familyCode,
          structureType: this.applicableConfiguration.structureType
        };

        if (!!this.applicableConfiguration.statusState) {
          this.loadStatus(this.applicableConfiguration.statusState);
          this.loadUserWorkflow(this.applicableConfiguration.statusState);
        }
      }
    }
  }

  public loadConfigurationDocuments(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findEvolutionModificationSbadList(bireVariantVersionDTOId)
      .subscribe((result) => {
        result.forEach((element) => {
          const propertyStructureTypeSelected = ListUtils.orEmpty(this.propertyStructureType).find(
            (type) => type.value === element.structureType
          );
          if (element.structureType && propertyStructureTypeSelected) {
            element.structureType = propertyStructureTypeSelected.label;
          }
        });

        this.evolutionModificationTableDataSource.setData(this.removeDuplicateDoc(result));
        this.evolutionModificationTableDataSource.update();
      });
  }

  public loadEvolutionModificationSbad(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findEvolutionModificationSbadList(bireVariantVersionDTOId)
      .subscribe((result) => {
        this.evolutionModificationTableDataSource.setData(this.removeDuplicateDoc(result));
        this.evolutionModificationTableDataSource.update();
      });
  }

  private removeDuplicateDoc(result: FindEvolutionModificationSbAdListDTO[]) {
    const newArr: FindEvolutionModificationSbAdListDTO[] = [];
    result.forEach((res) => {
      let found = false;
      newArr.forEach((r) => {
        if (
          r.evolutionNumber === res.evolutionNumber &&
          r.evolutionRevisionNumber === res.evolutionRevisionNumber &&
          r.familyCode === res.familyCode &&
          r.modificationNumber === res.modificationNumber &&
          r.modificationRevisionNumber === res.modificationRevisionNumber &&
          r.modificationStructureTypeKey === r.modificationStructureTypeKey &&
          r.modificationType === res.modificationType &&
          r.sbAdNumber === res.sbAdNumber &&
          r.sbAdRevisionNumber === res.sbAdRevisionNumber &&
          r.structureType === res.structureType
        ) {
          found = true;
        }
      });

      if (!found) {
        newArr.push(res);
      }
    });

    return newArr;
  }

  public loadEvolutionInterdependences(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findBireEvolutionEvolutionsByFamilyAndVariantCodes(bireVariantVersionDTOId)
      .subscribe((results) => {
        const tempTable: EvolutionInterdependencesRow[] = [];
        let tempResult;
        results.forEach((result) => {
          tempResult = this.createApplicabilityRow(result);
          if (!!result && !!tempResult) {
            tempTable.push(tempResult);
          } else {
            super.throwUnboundLocalError('loadEvolutionInterdependences', 'result');
          }
        });
        this.evolutionInterdependencesTableDataSource.setData(tempTable);
        this.evolutionInterdependencesTableDataSource.update();
        // this.evolutionInterdependencesTable = result.map((resultData) => this.createApplicabilityRow(resultData));
      });
  }

  private createApplicabilityRow(
    resultData: EvolutionInterdependencesListDTO
  ): EvolutionInterdependencesRow | undefined {
    if (!!resultData.bireEvolutionEvolutionDTO) {
      const evolutionInterdependencesRow: EvolutionInterdependencesRow = {
        evolutionNumber: resultData.bireEvolutionEvolutionDTO.evolutionNumber,
        evolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
        evoEvolutionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionNumber,
        evoEvolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
        interdependenceCode: !!resultData.bireEvolutionEvolutionDTO.interdependenceCode
          ? this.formatInterdependences(resultData.bireEvolutionEvolutionDTO.interdependenceCode)
          : undefined,
        familyCode: resultData.bireEvolutionEvolutionDTO.familyCode,
        structureType: resultData.bireEvolutionEvolutionDTO.structureType,
        variantCode: resultData.bireEvolutionEvolutionDTO.variantCode,
        statusState: resultData.bireEvolutionEvolutionDTO.statusState,
        statusUser: resultData.bireEvolutionEvolutionDTO.statusUser,
        statusDate: resultData.bireEvolutionEvolutionDTO.statusDate,
        adInitialText: resultData.adInitialText,
        adDependentText: resultData.adDependentText,
        sbInitialText: resultData.sbInitialText,
        sbDependentText: resultData.sbDependentText,
        modInitialText: resultData.modInitialText,
        modDependentText: resultData.modDependentText,
        bireEvolutionEvolutionDTO: {
          evolutionNumber: resultData.bireEvolutionEvolutionDTO.evolutionNumber,
          evolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
          evoEvolutionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionNumber,
          evoEvolutionRevisionNumber: resultData.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
          interdependenceCode: resultData.bireEvolutionEvolutionDTO.interdependenceCode,
          familyCode: resultData.bireEvolutionEvolutionDTO.familyCode,
          structureType: resultData.bireEvolutionEvolutionDTO.structureType,
          variantCode: resultData.bireEvolutionEvolutionDTO.variantCode,
          statusState: resultData.bireEvolutionEvolutionDTO.statusState,
          statusUser: resultData.bireEvolutionEvolutionDTO.statusUser,
          statusDate: resultData.bireEvolutionEvolutionDTO.statusDate
        }
      };

      return evolutionInterdependencesRow;
    } else {
      super.throwUnboundLocalError('createApplicabilityRow', 'resultData.bireEvolutionEvolutionDTO');
    }
  }

  public loadDisassemblyGroups(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findBireUnmountAssemblysByFamilyAndVariantCodes(bireVariantVersionDTOId)
      .subscribe((result) => {
        this.disassemblyGroupTableDataSource.setData(result);
        this.disassemblyGroupTableDataSource.update();
      });
  }

  public loadRemovalOrders(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findBireUnmountOrdersByFamilyAndVariantCodes(bireVariantVersionDTOId)
      .subscribe((result) => {
        this.removalOrderTableDataSource.setData(result);
        this.removalOrderTableDataSource.update();
      });
  }

  public loadOEMPartner(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService.findBirePartnersByVariant(bireVariantVersionDTOId).subscribe((result) => {
      this.oemPartnersTableDataSource.setData(result);
      this.oemPartnersTableDataSource.update();
    });
  }

  public loadAssociatedQualification(bireVariantVersionDTOId): void {
    const precision = 2;
    this.applicableConfigurationFormService.getLocalCurrency().subscribe((result) => {
      this.currency = result;
      this.applicableConfigurationFormService
        .findBireQualificationsByVariantPK(bireVariantVersionDTOId)
        .subscribe((results) => {
          ListUtils.orEmpty(results).forEach((row) => {
            row.averageHourRate = row.averageHourRate
              ? parseInt(row.averageHourRate, 10).toFixed(precision) + ' ' + this.currency
              : row.averageHourRate;
          });
          this.associatedQualificationTableDataSource.setData(results);
          this.associatedQualificationTableDataSource.update();
        });
    });
  }

  private loadStructureTypes(): void {
    this.propertiesService.getValue('getStructureTypeMap').subscribe((results) => {
      this.structureTypes = results || [];
    });
  }

  public formatStructureText(): string {
    const structureLabel = !!this.applicableConfiguration.structureType
      ? this.formatStructures(this.applicableConfiguration.structureType)
      : '';

    return structureLabel;
  }

  public formatStructures(structureKey: string): string {
    const selectedStructure = this.structureTypes.find((structures) => structures.value === structureKey);

    return !!selectedStructure && !!selectedStructure.label ? selectedStructure.label : '';
  }

  public formatInterdependences(interdependenceKey: string): string {
    const selectedInterdepence = this.interdependences.find(
      (interdependence) => interdependence.value === interdependenceKey
    );

    return !!selectedInterdepence && !!selectedInterdepence.label ? selectedInterdepence.label : '';
  }

  private loadOEMPartnerList(): void {
    const oemCustomer: BidoCustomerDTO = {};
    this.applicableConfigurationFormService.findOEMPartnersBySearchCriteria(oemCustomer).subscribe(
      (results) => {
        this.oemPartnersList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnOEMList'));
      }
    );
  }

  private loadConfigDocuments(bireVariantVersionDTOId): void {
    this.applicableConfigurationFormService
      .findConfigurationDocuments(bireVariantVersionDTOId)
      .subscribe((configurationDocumentList) => {
        forkJoin([
          this.propertiesService.getValue(GenericPropertyConstants.EVOLUTION_TYPE_MAP),
          this.propertiesService.getValue(GenericPropertyConstants.SB_TYPE_MAP)
        ]).subscribe(([evolutionTypeList, sbTypeList]) => {
          this.configurationDocumentsTableDataSource.setData(
            configurationDocumentList.map((result) => {
              const configurationDocument: ConfigurationDocumentsRow = { ...result };

              const typeMap =
                result.documentType === 'Airworthiness'
                  ? sbTypeList
                  : result.documentType === 'Evolution'
                  ? evolutionTypeList
                  : [];
              configurationDocument.type =
                !ListUtils.isEmpty(typeMap) && !StringUtils.isNullOrEmpty(result.type)
                  ? this.extractTypeName(typeMap, result.type as string)
                  : configurationDocument.type;

              configurationDocument.approvalDateStr = this.dateService.dateToString(result.approvalDate);

              return configurationDocument;
            })
          );
          this.configurationDocumentsTableDataSource.update();
        });
      });
  }

  public openModification(modification): void {
    const bireModificationDTO: BireModificationDTO = {
      modificationType: modification.type,
      modificationNumber: modification.number,
      modificationRevisionNumber: modification.revisionNumber,
      familyCode: this.applicableConfiguration.familyCode,
      structureType: this.applicableConfiguration.structureType
    };
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'ModificationFormComponent',
      objectId: bireModificationDTO ? this.serializationService.serialize(bireModificationDTO) : undefined,
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvolution(evolution: { number?: string; revisionNumber?: string }): void {
    const labelKey = 'transaction.EvolutionFormComponent';
    const evolutionId: BireEvolutionDTOId = {
      evolutionNumber: evolution.number,
      evolutionRevisionNumber: evolution.revisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(evolutionId),
      openMode: ComponentOpenMode.Read
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openSbad(sbad): void {
    const labelKey = 'transaction.SbadFormComponent';
    const bireSbDTOId: BireSbDTOId = {
      sbNumber: sbad.number,
      sbRevisionNumber: sbad.revisionNumber
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'SbadFormComponent',
      objectId: this.serializationService.serialize(bireSbDTOId),
      openMode: ComponentOpenMode.Read
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openDocumentForm(document: ConfigurationDocumentsDTO): void {
    switch (document.documentType) {
      case 'Modification':
        this.openModification(document);
        break;
      case 'Evolution':
        this.openEvolution(document);
        break;
      case 'Airworthiness':
        this.openSbad(document);
        break;
      default:
        break;
    }
  }

  private extractTypeName(typeMap: LabelValue<string>[], typeCode: string): string {
    const selectedType = typeMap.find((elt) => elt.value === typeCode);

    return selectedType ? selectedType.label : typeCode;
  }

  public searchFamilyCode() {
    const test: TableColumn[] = [
      { field: 'familyCode', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyName', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'familyFunction', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'structureType', width: '180px', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];
    this.dialogTableDataFamilyCode = {
      componentId: 'ApplicabilityPopupDialog',
      tableCols: test,
      tableRows: this.applicableConfigurationFormService.findAllBireFamilys(),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Single,
      globalFilter: true
    };
  }

  public setSelectedFamilyCode(selectedObject: BireVariantDTO) {
    if (selectedObject) {
      this.applicableConfiguration.familyCode = selectedObject.familyCode;
      this.applicableConfiguration.structureType = selectedObject.structureType;
      this.selectedFamilyFunction = selectedObject.familyFunction;
      this.applicableConfiguration.familyFunction = selectedObject.familyFunction;
      this.bireRatingInput = {
        familyCode: this.applicableConfiguration.familyCode,
        structureType: this.applicableConfiguration.structureType
      };

      if (!!selectedObject.familyFunction) {
        const selectedFunction = this.flFunctions.find(
          (functions) => functions.value === selectedObject.familyFunction
        );
        this.selectedFamilyFunctionDisplayed =
          !!selectedFunction && !!selectedFunction.label ? selectedFunction.label : '';
      }
    }
    this.showFamilyCodeDialog = false;
  }

  public openFamilyPopup() {
    if (!this.isReadOpenMode && this.isCreateOpenMode) {
      this.showFamilyCodeDialog = true;
    }
  }

  // Tab Interdependence
  private loadInterdependences(): void {
    this.applicableConfigurationFormService.findAllBireInterdependences().subscribe(
      (results) => {
        this.interdependences = results;
      },
      () => {
        this.messageService.showErrorMessage('errorOnGetInterdependences');
      }
    );
  }

  public createInterdependence(): void {
    this.currentEvolutionInterdependences = undefined;
    this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
    this.evolutionInterdependencesDialogOpenMode = ComponentOpenMode.Create;
    this.showEvolutionInterdependencesDialog = true;
  }

  public openInterdependence(): void {
    if (this.evolutionInterdependencesTableDataSource.dataSelectionCount === 1) {
      const interdependenceCode = this.interdependences.filter((result) => {
        return result.label === this.evolutionInterdependencesTableDataSource.dataSelection[0].interdependenceCode;
      })[0].value;
      const tempCurrentEvolutionInterdependences: EvolutionInterdependencesListDTO = {
        bireEvolutionEvolutionDTO: {
          evolutionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0].evolutionNumber,
          evolutionRevisionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0]
            .evolutionRevisionNumber,
          evoEvolutionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0].evoEvolutionNumber,
          evoEvolutionRevisionNumber: this.evolutionInterdependencesTableDataSource.dataSelection[0]
            .evoEvolutionRevisionNumber,
          interdependenceCode: interdependenceCode ? interdependenceCode : '',
          familyCode: this.evolutionInterdependencesTableDataSource.dataSelection[0].familyCode,
          structureType: this.evolutionInterdependencesTableDataSource.dataSelection[0].structureType,
          variantCode: this.evolutionInterdependencesTableDataSource.dataSelection[0].variantCode,
          statusState: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusState,
          statusUser: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusUser,
          statusDate: this.evolutionInterdependencesTableDataSource.dataSelection[0].statusDate
        },
        adInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].adInitialText,
        adDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].adDependentText,
        sbInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].sbInitialText,
        sbDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].sbDependentText,
        modInitialText: this.evolutionInterdependencesTableDataSource.dataSelection[0].modInitialText,
        modDependentText: this.evolutionInterdependencesTableDataSource.dataSelection[0].modInitialText
      };
      this.currentEvolutionInterdependences = tempCurrentEvolutionInterdependences;
      this.currentEvolutionInterdependencesIndex = undefined;
      this.evolutionInterdependencesDialogOpenMode = ComponentOpenMode.Read;
      this.showEvolutionInterdependencesDialog = true;
    }
  }

  public deleteInterdependence(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.evolutionInterdependencesTableDataSource.dataSelection.forEach((interdependence) => {
          if (
            !!interdependence.bireEvolutionEvolutionDTO &&
            !!interdependence.bireEvolutionEvolutionDTO.interdependenceCode &&
            !!interdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber &&
            !!interdependence.bireEvolutionEvolutionDTO.evolutionNumber &&
            !!interdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber &&
            !!interdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber &&
            !!this.applicableConfiguration.familyCode &&
            !!this.applicableConfiguration.structureType &&
            !!this.applicableConfiguration.variantCode
          ) {
            const bireEvolutionEvolutionDTOId: BireEvolutionEvolutionDTOId = {
              interdependenceCode: interdependence.bireEvolutionEvolutionDTO.interdependenceCode,
              evolutionRevisionNumber: interdependence.bireEvolutionEvolutionDTO.evolutionRevisionNumber,
              evolutionNumber: interdependence.bireEvolutionEvolutionDTO.evolutionNumber,
              evoEvolutionNumber: interdependence.bireEvolutionEvolutionDTO.evoEvolutionNumber,
              evoEvolutionRevisionNumber: interdependence.bireEvolutionEvolutionDTO.evoEvolutionRevisionNumber,
              familyCode: this.applicableConfiguration.familyCode,
              variantCode: this.applicableConfiguration.variantCode,
              structureType: this.applicableConfiguration.structureType
            };
            const interdependenceAddedWithoutSelection = this.interdependenceAddedList.filter(
              (interdependenceAdded) => {
                return (
                  !!interdependence.bireEvolutionEvolutionDTO &&
                  !DTOUtils.equalsBireEvolutionEvolutionDTO(
                    interdependence.bireEvolutionEvolutionDTO,
                    interdependenceAdded
                  )
                );
              }
            );
            if (this.interdependenceAddedList.length !== interdependenceAddedWithoutSelection.length) {
              this.interdependenceAddedList = interdependenceAddedWithoutSelection;
            } else {
              this.interdepenedenceRemoved.push(bireEvolutionEvolutionDTOId);
            }
          } else {
            super.throwUnboundLocalError('deleteInterdependence', 'interdependence && this.applicableConfiguration');
          }
        });

        this.evolutionInterdependencesTableDataSource.setData(
          this.evolutionInterdependencesTableDataSource.dataSrc.filter((evolution) => {
            return !this.evolutionInterdependencesTableDataSource.dataSelection.some(
              (selectedEvolutionInterdependence) => {
                return DTOUtils.equalsBireEvolutionEvolutionDTO(
                  evolution.bireEvolutionEvolutionDTO,
                  selectedEvolutionInterdependence.bireEvolutionEvolutionDTO
                );
              }
            );
          })
        );
        this.evolutionInterdependencesTableDataSource.update();
        this.evolutionInterdependencesTableDataSource.dataSelection = [];
      }
    });
  }

  public onAddEvolutionInterdependences(evolutionInterdependence: EvolutionInterdependencesListDTO): void {
    if (!!evolutionInterdependence.bireEvolutionEvolutionDTO) {
      const isAdded = this.evolutionInterdependencesTableDataSource.dataSrc.some((evolution) => {
        return DTOUtils.equalsBireEvolutionEvolutionDTO(
          evolutionInterdependence.bireEvolutionEvolutionDTO,
          evolution.bireEvolutionEvolutionDTO
        );
      });
      if (isAdded) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnEvolutionInterdependenceExists'));
      } else {
        this.applicableConfigurationFormService
          .findSbAdModForBireEvolutionEvolutionDto(evolutionInterdependence.bireEvolutionEvolutionDTO)
          .subscribe((result) => {
            // Match the family code, before adding entry in table
            if (
              !!result.bireEvolutionEvolutionDTO &&
              !!this.bireVariantVersionSelected &&
              result.bireEvolutionEvolutionDTO.familyCode === this.bireVariantVersionSelected.familyCode
            ) {
              const tempRow = this.createApplicabilityRow(result);
              if (!!tempRow) {
                this.evolutionInterdependencesTableDataSource.addData([tempRow]);
              } else {
                super.throwUnboundLocalError('onAddEvolutionInterdependences', 'tempRow');
              }
              this.interdependenceAddedList.push(result.bireEvolutionEvolutionDTO);
            }
          });
      }
    }
    this.evolutionInterdependencesTableDataSource.dataSelection = [];
  }

  // Tab Disassembly
  public createDisassembly(): void {
    this.currentDisassemblyGroup = undefined;
    this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
    if (
      this.applicableConfiguration.familyCode &&
      this.applicableConfiguration.variantCode &&
      this.applicableConfiguration.variantName
    ) {
      this.disassemblyGroupDialogOpenMode = ComponentOpenMode.Create;
      this.showDisassemblyGroupDialog = true;
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  public openDisassembly(): void {
    if (this.disassemblyGroupTableDataSource.dataSelectionCount === 1) {
      this.currentDisassemblyGroup = this.disassemblyGroupTableDataSource.dataSelection[0];
      this.currentDisassemblyGroupIndex = undefined;
      this.disassemblyGroupDialogOpenMode = ComponentOpenMode.Read;
      this.showDisassemblyGroupDialog = true;
    }
  }

  public deleteDisassembly(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.disassemblyGroupTableDataSource.dataSelection.forEach((disassembly) => {
          if (
            !!disassembly.unmountCode &&
            !!this.applicableConfiguration.familyCode &&
            !!this.applicableConfiguration.variantCode &&
            !!this.applicableConfiguration.structureType
          ) {
            const bireUnmountAssemblyDTOId: BireUnmountAssemblyDTOId = {
              unmountCode: disassembly.unmountCode,
              familyCode: this.applicableConfiguration.familyCode,
              variantCode: this.applicableConfiguration.variantCode,
              structureType: this.applicableConfiguration.structureType
            };
            const disassemblyAddedWithoutSelection = this.disassemblyGroupAdded.filter((disassemblyGroupAdded) => {
              return !DTOUtils.equalsBireUnmountAssemblyDTO(disassembly, disassemblyGroupAdded);
            });
            if (this.disassemblyGroupAdded.length !== disassemblyAddedWithoutSelection.length) {
              this.disassemblyGroupAdded = disassemblyAddedWithoutSelection;
            } else {
              this.disassemblyGroupRemoved.push(bireUnmountAssemblyDTOId);
            }
          } else {
            super.throwUnboundLocalError('deleteDisassembly', 'disassembly && this.applicableConfiguration');
          }
        });

        this.disassemblyGroupTableDataSource.setData(
          this.disassemblyGroupTableDataSource.dataSrc.filter((disassembly) => {
            return !this.disassemblyGroupTableDataSource.dataSelection.some((selecteddisassembly) => {
              return DTOUtils.equalsBireUnmountAssemblyDTO(disassembly, selecteddisassembly);
            });
          })
        );
        this.disassemblyGroupTableDataSource.update();
        this.disassemblyGroupTableDataSource.dataSelection = [];
      }
    });
  }

  public onAddDisassembly(disassemblyGroup: BireUnmountAssemblyDTO): void {
    if (!!disassemblyGroup) {
      disassemblyGroup.familyCode = this.applicableConfiguration.familyCode;
      disassemblyGroup.structureType = this.applicableConfiguration.structureType;
      disassemblyGroup.variantCode = this.applicableConfiguration.variantCode;

      const isAdded = this.disassemblyGroupTableDataSource.dataSrc.some((disassembly) => {
        return DTOUtils.equalsBireUnmountAssemblyDTO(disassemblyGroup, disassembly);
      });
      if (isAdded) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnDisassemblyGroupExists'));
      } else {
        this.disassemblyGroupTableDataSource.addData([disassemblyGroup]);
        this.disassemblyGroupAdded.push(disassemblyGroup);
      }
    }
    this.disassemblyGroupTableDataSource.dataSelection = [];
  }

  // Tab Removal order
  public createRemovalOrder(): void {
    this.currentRemovalOrder = undefined;
    this.bireVariantVersionSelected = this.bireVariantVersionDTOId;
    if (
      this.applicableConfiguration.familyCode &&
      this.applicableConfiguration.variantCode &&
      this.applicableConfiguration.variantName
    ) {
      this.removalOrderDialogOpenMode = ComponentOpenMode.Create;
      this.showRemovalOrderDialog = true;
      // To populate values in dropdown
      this.disassemblyList = [];
      this.disassemblyGroupTableDataSource.dataSrc.forEach((item) => {
        if (!!item.unmountCode) {
          const disassembly = {
            label: item.unmountCode,
            value: item.unmountCode
          };
          this.disassemblyList.push(disassembly);
        } else {
          super.throwUnboundLocalError('createRemovalOrder', 'item.unmountCode');
        }
      });
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  public openRemovalOrder(): void {
    if (this.removalOrderTableDataSource.dataSelectionCount === 1) {
      this.currentRemovalOrder = this.removalOrderTableDataSource.dataSelection[0];
      this.currentRemovalOrderIndex = undefined;
      this.removalOrderDialogOpenMode = ComponentOpenMode.Read;
      this.showRemovalOrderDialog = true;
    }
  }

  public deleteRemovalOrder(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.removalOrderTableDataSource.dataSelection.forEach((removalOrder) => {
          if (
            !!removalOrder.unmountCode &&
            !!removalOrder.unmUnmountCode &&
            !!this.applicableConfiguration.familyCode &&
            !!this.applicableConfiguration.variantCode &&
            !!this.applicableConfiguration.structureType
          ) {
            const bireUnmountOrderDTOId: BireUnmountOrderDTOId = {
              unmountCode: removalOrder.unmountCode,
              familyCode: this.applicableConfiguration.familyCode,
              variantCode: this.applicableConfiguration.variantCode,
              structureType: this.applicableConfiguration.structureType,
              unmUnmountCode: removalOrder.unmUnmountCode,
              unmFamilyCode: this.applicableConfiguration.familyCode,
              unmVariantCode: this.applicableConfiguration.variantCode,
              unmStructureType: this.applicableConfiguration.structureType
            };
            const removalOrderAddedWithoutSelection = this.removalOrderAdded.filter((removalOrderAdded) => {
              return !DTOUtils.equalsBireUnmountAssemblyDTO(removalOrder, removalOrderAdded);
            });

            if (this.removalOrderAdded.length !== removalOrderAddedWithoutSelection.length) {
              this.removalOrderAdded = removalOrderAddedWithoutSelection;
            } else {
              this.removalOrderRemoved.push(bireUnmountOrderDTOId);
            }
          } else {
            super.throwUnboundLocalError('deleteRemovalOrder', 'removalOrder && this.applicableConfiguration');
          }
        });

        this.removalOrderTableDataSource.setData(
          this.removalOrderTableDataSource.dataSrc.filter((removalOrder) => {
            return !this.removalOrderTableDataSource.dataSelection.some((selectedRemoval) => {
              return DTOUtils.equalsBireUnmountOrderDTO(removalOrder, selectedRemoval);
            });
          })
        );
        this.removalOrderTableDataSource.update();
        this.removalOrderTableDataSource.dataSelection = [];
      }
    });
  }

  public onAddRemovalOrder(removalOrder: BireUnmountOrderDTO): void {
    if (!!removalOrder) {
      const isAdded = this.removalOrderTableDataSource.dataSrc.some((order) => {
        return DTOUtils.equalsBireUnmountOrderDTO(removalOrder, order);
      });
      if (isAdded) {
        this.messageService.showWarningMessage(this.getTranslateKey('warningOnRemovalOrderExists'));
      } else {
        this.removalOrderTableDataSource.addData([removalOrder]);
        this.removalOrderAdded.push(removalOrder);
      }
    }
    this.disassemblyGroupTableDataSource.dataSelection = [];
  }

  // TAB OEM PARTNER OPERATIONS
  public createOEMPartner() {
    this.currentOEMPartnerMax = undefined;
    this.currentOEMPartnerMin = undefined;
    if (
      this.applicableConfiguration.familyCode &&
      this.applicableConfiguration.variantCode &&
      this.applicableConfiguration.variantName
    ) {
      this.oemPartnerOpenMode = ComponentOpenMode.Create;
      this.showOEMPartnerDialog = true;
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  // ADD OEM
  public onAddOEMPartner(result: BirePartnerDTO): void {
    result.familyCode = this.applicableConfiguration.familyCode;
    result.structureType = this.applicableConfiguration.structureType;
    result.variantCode = this.applicableConfiguration.variantCode;

    this.oemPartnersList.forEach((ev) => {
      if (ev.value === result.partnerCode) {
        result.partnerCode = ev.label;
      }
    });

    this.getLabelValueForOEMPartner('label', result.partnerCode, (data) => {
      result.partnerCode = data;
    });

    if (this.oemPartnerOpenMode === ComponentOpenMode.Write) {
      for (let i = 0; i < this.oemPartnersTableDataSource.dataCount; i++) {
        if (
          DTOUtils.equalsBirePartnerDTO(
            this.oemPartnersTableDataSource.dataSrc[i],
            this.oemPartnersTableDataSource.dataSelection[0]
          )
        ) {
          this.oemPartnersTableDataSource.replaceData(this.oemPartnersTableDataSource.dataSelection[0], result);
        }
      }

      this.oemPartnersTableDataSource.setData(this.oemPartnersTableDataSource.dataSrc);
      this.oemPartnersUpdated.push(result);
    } else {
      this.oemPartnersAdded.push(result);
      this.oemPartnersTableDataSource.addData([result]);
    }
    this.oemPartnersTableDataSource.dataSelection = [];
    this.oemPartnersTableDataSource.update();
  }

  // Fetching label value from OEM Partner
  private getLabelValueForOEMPartner(oper, data, callback) {
    if (oper === 'label') {
      this.oemPartnersList.forEach((ev) => {
        if (ev.value === data) {
          callback(ev.label);
        }
      });
    } else {
      this.oemPartnersList.forEach((ev) => {
        if (ev.label === data) {
          callback(ev.value);
        }
      });
    }
  }

  // EDIT OEM
  public editSelectedOEMPartner(): void {
    this.generateOEMPartnerData();
    this.oemPartnerOpenMode = ComponentOpenMode.Write;
  }

  // VIEW OEM
  public openSelectedOEMPartner(): void {
    this.generateOEMPartnerData();
    this.oemPartnerOpenMode = ComponentOpenMode.Read;
  }

  public generateOEMPartnerData(): void {
    if (this.oemPartnersTableDataSource.dataSelectionCount > 1) {
      return;
    }

    const SUBJECT_CONST = 2;
    const SHEET_CONST = 3;
    const MARKS_CONST = 4;

    let partnerCode = '';
    this.getLabelValueForOEMPartner('value', this.oemPartnersTableDataSource.dataSelection[0].partnerCode, (data) => {
      partnerCode = data;
      const rangeMax = this.oemPartnersTableDataSource.dataSelection[0].itemRangeMax;
      const rangeMin = this.oemPartnersTableDataSource.dataSelection[0].itemRangeMin;
      if (!!rangeMax && !!rangeMin) {
        this.currentOEMPartnerMax = {
          familyCode: this.oemPartnersTableDataSource.dataSelection[0].familyCode,
          variantCode: this.oemPartnersTableDataSource.dataSelection[0].variantCode,
          chapter: rangeMax.split('-')[0],
          section: rangeMax.split('-')[1],
          subject: rangeMax.split('-')[SUBJECT_CONST],
          sheet: rangeMax.split('-')[SHEET_CONST],
          marks: rangeMax.split('-')[MARKS_CONST],
          structureType: partnerCode
        };

        this.currentOEMPartnerMin = {
          familyCode: this.oemPartnersTableDataSource.dataSelection[0].familyCode,
          variantCode: this.oemPartnersTableDataSource.dataSelection[0].variantCode,
          chapter: rangeMin.split('-')[0],
          section: rangeMin.split('-')[1],
          subject: rangeMin.split('-')[SUBJECT_CONST],
          sheet: rangeMin.split('-')[SHEET_CONST],
          marks: rangeMin.split('-')[MARKS_CONST],
          structureType: partnerCode
        };

        this.showOEMPartnerDialog = true;
      } else {
        super.throwUnboundLocalError('generateOEMPartnerData', 'rangeMax && rangeMin');
      }
    });
  }

  // DELETE OEM
  public deleteSelectedOEMPartner(): void {
    if (this.oemPartnersTableDataSource.dataSelectionCount > 0) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          this.oemPartnersTableDataSource.dataSelection.forEach((disassembly) => {
            if (
              !!this.applicableConfiguration.familyCode &&
              !!disassembly.itemRangeMin &&
              !!disassembly.partnerCode &&
              !!disassembly.structureType &&
              !!disassembly.variantCode
            ) {
              const birePartnerDTO: BirePartnerDTOId = {
                familyCode: this.applicableConfiguration.familyCode,
                itemRangeMin: disassembly.itemRangeMin,
                partnerCode: disassembly.partnerCode,
                structureType: disassembly.structureType,
                variantCode: disassembly.variantCode
              };

              const birePartnerAddedWithoutSelection = this.oemPartnersAdded.filter((disassemblyGroupAdded) => {
                return !DTOUtils.equalsBirePartnerDTO(disassembly, disassemblyGroupAdded);
              });
              if (this.oemPartnersAdded.length !== birePartnerAddedWithoutSelection.length) {
                this.oemPartnersAdded = birePartnerAddedWithoutSelection;
              } else {
                this.oemPartnersRemoved.push(birePartnerDTO);
              }
            } else {
              super.throwUnboundLocalError('deleteSelectedOEMPartner', 'disassembly && this.applicableConfiguration');
            }
          });

          this.oemPartnersTableDataSource.setData(
            this.oemPartnersTableDataSource.dataSrc.filter((removalPartner) => {
              return !this.oemPartnersTableDataSource.dataSelection.some((selectedRemoval) => {
                return DTOUtils.equalsBirePartnerDTO(removalPartner, selectedRemoval);
              });
            })
          );
          this.oemPartnersTableDataSource.update();
          this.oemPartnersTableDataSource.dataSelection = [];
        }
      });
    }
  }

  private loadCurrency(): void {
    this.applicableConfigurationFormService.getLocalCurrency().subscribe((result) => {
      this.currency = result;
    });
  }

  // Associated Qualification OPERATIONS
  public createAssociatedQual() {
    if (
      this.applicableConfiguration.familyCode &&
      this.applicableConfiguration.variantCode &&
      this.applicableConfiguration.variantName
    ) {
      this.associatedQualificationOpenMode = ComponentOpenMode.Create;
      this.showAssociatedQualificationDialog = true;
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  public onAddAssociatedQualification(results: BireQualifVariantDTO) {
    let isFound = false;
    const precision = 2;
    this.associatedQualificationTableDataSource.dataSrc.forEach((result) => {
      if (result.qualificationCode === results.qualificationCode) {
        isFound = true;
      }
    });

    if (!isFound) {
      results.familyCode = this.applicableConfiguration.familyCode;
      results.structureType = this.applicableConfiguration.structureType;
      results.variantCode = this.applicableConfiguration.variantCode;

      // tslint:disable-next-line:no-string-literal
      results['averageHourRate'] = results['averageHourRate']
        ? // tslint:disable-next-line:no-string-literal
          parseInt(results['averageHourRate'], 10).toFixed(precision) + ' ' + this.currency
        : // tslint:disable-next-line:no-string-literal
          results['averageHourRate'];
      this.associatedQualificationTableDataSource.setData(this.associatedQualificationTableDataSource.dataSrc);
      this.associatedQualificationTableDataSource.update();
      this.associatedQualificationTableDataSource.addData([results]);

      this.associatedQualificationAdded.push(results);
    }
  }

  // EDIT ASSOCIATED QUALIFICATION
  // public editAssociatedQual() {
  //   this.associatedQualificationOpenMode = ComponentOpenMode.Write;
  //   this.showAssociatedQualificationDialog = true;
  // }

  public deleteSelectedAssociatedQual() {
    if (this.associatedQualificationTableDataSource.dataSelectionCount > 0) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          this.associatedQualificationTableDataSource.dataSelection.forEach((disassembly) => {
            if (
              !!this.applicableConfiguration.familyCode &&
              !!this.applicableConfiguration.structureType &&
              !!this.applicableConfiguration.variantCode &&
              !!disassembly.qualificationCode
            ) {
              const bireQualifVariantDTOId: BireQualifVariantDTOId = {
                familyCode: this.applicableConfiguration.familyCode,
                structureType: this.applicableConfiguration.structureType,
                variantCode: this.applicableConfiguration.variantCode,
                qualificationCode: disassembly.qualificationCode
              };

              const assoQualificationAddedWithoutSelection = this.associatedQualificationAdded.filter(
                (assoQualGroupAdded) => {
                  return !DTOUtils.equalsBireQualificationDTO(disassembly, assoQualGroupAdded);
                }
              );
              if (this.associatedQualificationAdded.length !== assoQualificationAddedWithoutSelection.length) {
                this.associatedQualificationAdded = assoQualificationAddedWithoutSelection;
              } else {
                this.associatedQualificationRemoved.push(bireQualifVariantDTOId);
              }
            } else {
              super.throwUnboundLocalError(
                'deleteSelectedAssociationQual',
                'this.applicableConfiguration && disassembly'
              );
            }
          });

          this.associatedQualificationTableDataSource.setData(
            this.associatedQualificationTableDataSource.dataSrc.filter((removalOrder) => {
              return !this.associatedQualificationTableDataSource.dataSelection.some((selectedRemoval) => {
                return DTOUtils.equalsBireQualificationDTO(removalOrder, selectedRemoval);
              });
            })
          );
          this.associatedQualificationTableDataSource.update();
          this.associatedQualificationTableDataSource.dataSelection = [];
        }
      });
    }
  }

  // VIEW ASSOCIATED QUALIFICATION
  public openAssociatedQual() {
    this.associatedQualificationOpenMode = ComponentOpenMode.Read;
    this.showAssociatedQualificationDialog = true;
  }

  // Document Matching Operations
  public openDocumentMatchingModel(): void {
    if (
      this.applicableConfiguration.familyCode &&
      this.applicableConfiguration.variantCode &&
      this.applicableConfiguration.variantName
    ) {
      this.currentConfigurationDoc = undefined;
      this.documentMatchingDialogOpenMode = ComponentOpenMode.Create;
      this.showDocumentMatchingDialog = true;
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  // Add Config Doc
  public onAddDocumentParmas(event) {
    let isFound = false;

    this.configurationDocumentsTableDataSource.dataSrc.forEach((removalOrder, index) => {
      if (this.documentMatchingDialogOpenMode === ComponentOpenMode.Write) {
        if (
          DTOUtils.equalsConfigDocumentsTableDTO(
            removalOrder,
            this.configurationDocumentsTableDataSource.dataSelection[0]
          )
        ) {
          this.configurationDocumentsTableDataSource.replaceData(
            this.configurationDocumentsTableDataSource.dataSelection[0],
            event
          );
          this.configurationDocumentsUpdatedList.push(event);
        }
      } else if (this.documentMatchingDialogOpenMode === ComponentOpenMode.Create) {
        if (DTOUtils.equalsConfigDocumentsTableDTO(removalOrder, event)) {
          isFound = true;
        }
      }
    });

    if (this.documentMatchingDialogOpenMode === ComponentOpenMode.Create) {
      if (!isFound) {
        this.configurationDocumentsTableDataSource.dataSrc.push(event);
        this.configurationDocumentsAddedList.push(event);
      }
    }

    this.configurationDocumentsTableDataSource.dataSrc.forEach((row) => {
      row.approvalDateStr = this.dateService.dateWithHourToString(row.approvalDate);
    });
    this.configurationDocumentsTableDataSource.setData(this.configurationDocumentsTableDataSource.dataSrc);
    this.configurationDocumentsTableDataSource.update();
    this.configurationDocumentsTableDataSource.dataSelection = [];
  }

  // View Config Doc
  public openConfigurationDocuments() {
    this.currentConfigurationDoc = this.configurationDocumentsTableDataSource.dataSelection;
    this.documentMatchingDialogOpenMode = ComponentOpenMode.Read;
    this.showDocumentMatchingDialog = true;
  }

  // Delete Config Docs
  public deleteConfigurationDocuments() {
    this.confirmationService.confirmDelete({
      messageKey: 'global.deleteConfirmationMsg',
      accept: () => {
        this.configurationDocumentsTableDataSource.dataSelection.forEach((disassembly) => {
          const configurationDocumentDTO: ConfigurationDocumentsDTO = {
            familyCode: this.applicableConfiguration.familyCode,
            structureType: this.applicableConfiguration.structureType,
            approvalDate: disassembly.approvalDate,
            number: disassembly.number,
            revisionNumber: disassembly.revisionNumber,
            type: disassembly.type,
            variantCode: this.applicableConfiguration.variantCode,
            applicabilityCode: disassembly.applicabilityCode,
            documentType: disassembly.documentType
          };

          const configDocAddedWithoutSelection = this.configurationDocumentsAddedList.filter((assoQualGroupAdded) => {
            return !DTOUtils.equalsConfigDocumentsTableDTO(disassembly, assoQualGroupAdded);
          });
          if (this.configurationDocumentsAddedList.length !== configDocAddedWithoutSelection.length) {
            this.configurationDocumentsAddedList = configDocAddedWithoutSelection;
          } else {
            this.configurationDocumentsRemovedList.push(configurationDocumentDTO);
          }
        });

        this.configurationDocumentsTableDataSource.setData(
          this.configurationDocumentsTableDataSource.dataSrc.filter((removalOrder) => {
            return !this.configurationDocumentsTableDataSource.dataSelection.some((selectedRemoval) => {
              return DTOUtils.equalsConfigDocumentsTableDTO(removalOrder, selectedRemoval);
            });
          })
        );
        this.configurationDocumentsTableDataSource.update();
        this.configurationDocumentsTableDataSource.dataSelection = [];
      }
    });
  }

  // Edit Config Docs
  public editConfigurationDocument() {
    this.currentConfigurationDoc = this.configurationDocumentsTableDataSource.dataSelection;
    this.documentMatchingDialogOpenMode = ComponentOpenMode.Write;
    this.showDocumentMatchingDialog = true;
  }

  public cancelApplicableConfiguration(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadApplicableConfiguration();

    this.clearItemStructureGlobalFilter();
  }

  public editApplicableConfiguration(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadApplicableConfiguration(): void {
    this.oemPartnersTableDataSource.dataSelection = [];
    this.associatedQualificationTableDataSource.dataSelection = [];
    this.configurationDocumentsTableDataSource.dataSelection = [];
    this.evolutionInterdependencesTableDataSource.dataSelection = [];
    this.disassemblyGroupTableDataSource.dataSelection = [];
    this.removalOrderTableDataSource.dataSelection = [];

    this.loadApplicableConfiguration();
    this.loadApplicableForm();
    this.loadStructureTypes();
    this.loadOEMPartnerList();
    if (!!this.applicableConfiguration.statusState) {
      this.loadStatus(this.applicableConfiguration.statusState);
      this.loadUserWorkflow(this.applicableConfiguration.statusState);
    }
  }

  private validateForm() {
    if (
      !this.applicableConfiguration.variantCode ||
      !this.applicableConfiguration.variantName ||
      !this.applicableConfiguration.familyCode
    ) {
      return false;
    } else {
      return true;
    }
  }

  public saveApplicableConfiguration(): void {
    if (!this.validateForm()) {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');

      return;
    }

    this.bireVariantAttributeDTO = this.dynamicAttributesService.toBireVariantAttribute(
      this.applicableConfiguration.familyCode as string,
      this.applicableConfiguration.variantCode as string,
      this.applicableConfiguration.structureType as string,
      this.dynamicAttributesForAppConfig
    );

    const bireVariantVersion: BireVariantVersionDTO = {
      familyCode: this.applicableConfiguration.familyCode,
      statusDate: this.applicableConfiguration.statusDate,
      statusState: this.applicableConfiguration.statusState,
      statusUser: this.applicableConfiguration.statusUser,
      structureType: this.applicableConfiguration.structureType,
      variantCode: this.applicableConfiguration.variantCode,
      variantName: this.applicableConfiguration.variantName,
      variantRevisionDate: this.applicableConfiguration.variantRevisionDate,
      variantRevisionNumber: this.applicableConfiguration.variantRevisionNumber
    };

    const saveApplicationConfigurationDataInput: SaveApplicationConfigurationDataInput = {
      bireInterdependenceAddedList: this.interdependenceAddedList,
      bireInterdependenceDeletedList: this.interdepenedenceRemoved,
      bireInterdependenceUpdatedList: [],
      bireVariantVersionDTO: bireVariantVersion,
      birePartnerDTOAddedList: this.oemPartnersAdded,
      birePartnerDTOUpdatedList: this.oemPartnersUpdated,
      birePartnerDTODeletedList: this.oemPartnersRemoved,
      bireQualificationDTOAddedList: this.associatedQualificationAdded,
      bireQualifVariantDTODeletedList: this.associatedQualificationRemoved,
      bireUnmountAssemblyDTOAddedList: this.disassemblyGroupAdded.map((disassemblyGroup) =>
        this.fillDisassemblyGroup(disassemblyGroup, this.applicableConfiguration)
      ),
      bireUnmountAssemblyDTOIdDeletedList: this.disassemblyGroupRemoved,
      bireUnmountOrderDTOAddedList: this.removalOrderAdded.map((removalOrder) =>
        this.fillRemovalOrder(removalOrder, this.applicableConfiguration)
      ),
      bireUnmountOrderDeletedList: this.removalOrderRemoved,
      configurationDocumentsAddedList: this.configurationDocumentsAddedList,
      configurationDocumentsRemovedList: this.configurationDocumentsRemovedList,
      configurationDocumentsUpdatedList: this.configurationDocumentsUpdatedList,
      bireVariantAttribute: this.bireVariantAttributeDTO,
      bireRatingDTOAddedList: this.bireRatingDTOAddedList,
      bireRatingDTORemovedList: this.bireRatingDTORemovedList
    };

    this.showSaveSpinner = true;
    this.applicableConfigurationFormService
      .saveApplicationConfigurationData(saveApplicationConfigurationDataInput)
      .subscribe(
        (result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));

          const bireVariantDTO: BireVariantDTO = {
            familyCode: this.applicableConfiguration.familyCode,
            familyFunction: this.applicableConfiguration.familyFunction,
            familyName: this.applicableConfiguration.familyName,
            structureType: this.applicableConfiguration.structureType, // this.serializationService.deserialize(this.componentData.objectId).structureType,
            statusDate: new Date(),
            statusState: this.applicableConfiguration.statusState,
            statusUser: this.applicableConfiguration.statusUser,
            variantCode: this.applicableConfiguration.variantCode,
            variantName: this.applicableConfiguration.variantName,
            variantRevisionDate: this.applicableConfiguration.variantRevisionDate,
            variantRevisionNumber: this.applicableConfiguration.variantRevisionNumber
          };
          this.componentData.objectId = this.serializationService.serialize(bireVariantDTO);
          if (!!bireVariantVersion.variantRevisionNumber) {
            this.variantRevisionNumberClone = bireVariantVersion.variantRevisionNumber;
          }
          if (!!bireVariantVersion.variantRevisionDate) {
            this.variantRevisionDateClone = bireVariantVersion.variantRevisionDate;
          }
          this.clearDTOList();
          this.showSaveSpinner = false;
          this.updateOpenMode(ComponentOpenMode.Read);
          this.reloadApplicableConfiguration();
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnSave'));
          this.showSaveSpinner = false;
        }
      );

    if (
      bireVariantVersion.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY &&
      this.sessionService.isSpecificMHIAEL
    ) {
      this.applicableConfigurationFormMhiaelService.updateInMassIDPSubObjectStatus(bireVariantVersion).subscribe();
      this.applicableConfigurationFormMhiaelService.updateIPCCsv(bireVariantVersion).subscribe();
    }

    this.updateOpenMode(ComponentOpenMode.Write);
    this.componentDesignation = this.applicableConfiguration.familyCode
      ? `${this.applicableConfiguration.familyCode}-${this.applicableConfiguration.variantCode}-
        ${this.applicableConfiguration.variantName}`
      : 'tab.createMode';
    this.displayComponentContext(this.componentDesignation, this.isCreateOpenMode);
  }

  // Clearing DTO
  private clearDTOList() {
    this.oemPartnersAdded = [];
    this.oemPartnersUpdated = [];
    this.oemPartnersRemoved = [];
    this.associatedQualificationAdded = [];
    this.associatedQualificationRemoved = [];
    this.removalOrderRemoved = [];
    this.removalOrderAdded = [];
    this.disassemblyGroupAdded = [];
    this.disassemblyGroupRemoved = [];
    this.configurationDocumentsAddedList = [];
    this.configurationDocumentsRemovedList = [];
    this.configurationDocumentsUpdatedList = [];
    this.bireRatingDTOAddedList = [];
    this.bireRatingDTORemovedList = [];
  }

  private fillDisassemblyGroup(
    disassemblyGroup: BireUnmountAssemblyDTO,
    applicableConfiguration: BireVariantDTO
  ): BireUnmountAssemblyDTO {
    disassemblyGroup.familyCode = applicableConfiguration.familyCode;
    disassemblyGroup.structureType = applicableConfiguration.structureType;
    disassemblyGroup.variantCode = applicableConfiguration.variantCode;

    return disassemblyGroup;
  }

  private fillRemovalOrder(
    removalOrder: BireUnmountOrderDTO,
    applicableConfiguration: BireVariantDTO
  ): BireUnmountOrderDTO {
    removalOrder.familyCode = applicableConfiguration.familyCode;
    removalOrder.structureType = applicableConfiguration.structureType;
    removalOrder.variantCode = applicableConfiguration.variantCode;
    removalOrder.unmFamilyCode = applicableConfiguration.familyCode;
    removalOrder.unmStructureType = applicableConfiguration.structureType;
    removalOrder.unmVariantCode = applicableConfiguration.variantCode;

    return removalOrder;
  }

  private init(): void {
    this.flFunctions = [];
    this.applicableConfiguration = {};
    this.componentDesignation = '';
    this.controlIpcDataVisible = false;
    this.itemFamilyCodeList = [];
    this.itemStructureLoading = false;
    this.itemStructureNodeImageList = [];
    this.searchItemStructureGlobalFilter = '';
    this.showRatingDialog = false;
    this.ratingDialogOpenMode = ComponentOpenMode.Read;
    this.isLoadingRating = false;
    this.bireRatingDTOAddedList = [];
    this.bireRatingDTORemovedList = [];
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  public displayStatusForDisassemblyGroup(): void {
    if (
      !!this.disassemblyGroupTableDataSource.dataSelection &&
      this.disassemblyGroupTableDataSource.dataSelectionCount === 1
    ) {
      this.isStatusEditable = this.isReadOpenMode ? false : true;
      this.currentAsset = { ...this.disassemblyGroupTableDataSource.dataSelection[0] };
      this.currentAssetId = 'Asset ';
      this.currentAssetId += [
        this.currentAsset.familyCode,
        this.currentAsset.structureType,
        this.currentAsset.variantCode,
        this.currentAsset.unmountCode
      ].join('-');
      this.displayStatusPopup = true;
    }
  }

  public displayStatusForRemovalOrder(): void {
    if (!!this.removalOrderTableDataSource.dataSelection && this.removalOrderTableDataSource.dataSelectionCount === 1) {
      this.isStatusEditable = this.isReadOpenMode ? false : true;
      this.currentRemovalAsset = { ...this.removalOrderTableDataSource.dataSelection[0] };
      this.currentAssetId = 'Asset ';
      this.currentAssetId += [
        this.applicableConfiguration.familyCode,
        this.applicableConfiguration.structureType,
        this.applicableConfiguration.variantCode,
        this.currentRemovalAsset.unmountCode,
        this.applicableConfiguration.familyCode,
        this.applicableConfiguration.structureType,
        this.applicableConfiguration.variantCode,
        this.currentRemovalAsset.unmUnmountCode
      ].join('-');
      this.displayStatusRemovalPopup = true;
    }
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  private loadRatingTable(bireVariantVersionDTOId: BireVariantVersionDTOId): void {
    this.isLoadingRating = true;
    this.applicableConfigurationFormService.findBireRatingsByVariantPK(bireVariantVersionDTOId).subscribe(
      (result) => {
        this.ratingTableDataSource.setData(result);
        this.ratingTableDataSource.update();
        this.isDisplayRatingTable = !!this.ratingTableDataSource && this.ratingTableDataSource.dataCount > 0;
        this.isLoadingRating = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByEvolution'));
      }
    );
  }

  public createRating(): void {
    this.ratingDialogOpenMode = ComponentOpenMode.Write;
    this.bireRatingInput = {
      familyCode: this.applicableConfiguration.familyCode,
      structureType: this.applicableConfiguration.structureType
    };
    this.showRatingDialog = true;
  }

  public deleteSelectedRating(): void {
    // delete selected rating
    if (this.ratingTableDataSource.hasDataSelection) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          this.ratingTableDataSource.dataSelection.forEach((rating) => {
            const startIndex = this.ratingTableDataSource.dataSrc.findIndex(
              (code) => code.ratingCode === rating.ratingCode
            );
            this.ratingTableDataSource.dataSrc.splice(startIndex, 1);
            this.bireRatingDTORemovedList.push(rating);
          });
          this.ratingTableDataSource.setData(this.ratingTableDataSource.dataSrc);
          this.ratingTableDataSource.update();
          this.ratingTableDataSource.dataSelection = [];
          this.isDisplayRatingTable = !!this.ratingTableDataSource && this.ratingTableDataSource.dataCount > 0;
        }
      });
    }
  }

  public openRating(): void {
    this.ratingDialogOpenMode = ComponentOpenMode.Read;
    this.bireRatingInput = this.ratingTableDataSource.dataSelection[0] as BireRatingDTO;
    this.showRatingDialog = true;
  }

  public onAddRating(bireRatingDTO: BireRatingDTO) {
    if (!!bireRatingDTO) {
      // Add into table if does not exist
      const existingRating = this.ratingTableDataSource.dataSrc.some(
        (rating) => rating.ratingCode === bireRatingDTO.ratingCode
      );
      if (!existingRating) {
        this.ratingTableDataSource.addData([bireRatingDTO]);
        this.bireRatingDTOAddedList.push(bireRatingDTO);
      }

      this.isDisplayRatingTable = !!this.ratingTableDataSource && this.ratingTableDataSource.dataCount > 0;
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.applicableConfiguration.statusUser,
        currentDate: this.applicableConfiguration.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.applicableConfiguration.statusState, this.workflowStatus),
          value: this.applicableConfiguration.statusState
        },
        nextStatuses: this.workflowStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.applicableConfiguration.statusState = event.data;
          this.saveApplicableConfiguration();
        }
      }
    });
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.status,
      this.applicableConfiguration.statusState
    );
  }

  private loadStatus(statusState: string): void {
    this.propertiesService.getObjectStatusList(true, false, false, statusState, false).subscribe(
      (results) => {
        if (results) {
          results.forEach((element) => {
            if (this.status.filter((status) => status.value === element.value).length === 0) {
              this.status.push(element);
            }
          });
          this.status = [...this.status];
          this.updateWorkflowStatusList();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatusList'));
      }
    );
  }
}
