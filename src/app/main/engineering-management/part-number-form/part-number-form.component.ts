import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable, forkJoin, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { TableDataSourceWithHistory } from '../../../modules/purchase-contract/utils/table-data-source-with-history';
import { UpdateHistoricApi } from '../../../shared/api/update-historic.api';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
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
import { SavePartNumberInput } from '../../../shared/types/api-input-types/product-structure-management/save-part-number-input.interface';
import { BireMaintenanceProgramPnTableDTO } from '../../../shared/types/api-input-types/task-management/bire-maintenance-program-pn-table.inteface';
import { BirePartUpdateGuidelineDTOId } from '../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto-id.interface';
import { BirePartUpdateGuidelineDTO } from '../../../shared/types/api-output-types/product-structure-management/bire-part-update-guideline-dto.interface';
import { BidoUserDTO } from '../../../shared/types/api-types/bido-user-dto.interface';
import { BidtProcurementRequestDTO } from '../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionDTO } from '../../../shared/types/api-types/bire-evolution-dto.interface';
import { BireFamilyDTO } from '../../../shared/types/api-types/bire-family-dto.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BirePnAttributeDTO } from '../../../shared/types/api-types/bire-pn-attribute-dto.interface';
import { BirePnDTOId } from '../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../shared/types/api-types/bire-pn-dto.interface';
import { BirePnMeasureDTOId } from '../../../shared/types/api-types/bire-pn-measure-dto-id.interface';
import { BirePnMeasureDTO } from '../../../shared/types/api-types/bire-pn-measure-dto.interface';
import { BirePnMeasureTmpDTO } from '../../../shared/types/api-types/bire-pn-measure-tmp-dto.interface';
import { BireUnitMeasureDTO } from '../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { FamilyVariantDTO } from '../../../shared/types/api-types/family-variant-dto.interface';
import { FindBireEvolutionPnsByPnCodeDTO } from '../../../shared/types/api-types/find-bire-evolution-pns-by-pn-code-dto.interface';
import { FindBireItemPnEvolutionsByPnCodeOrPnPnCodeDTO } from '../../../shared/types/api-types/find-bire-item-pn-evolutions-by-pn-code-or-pn-pn-code-dto.interface';
import { HistoricObjectPnDTO } from '../../../shared/types/api-types/historic-object-pn-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';

import { PartNumberFormService } from './part-number-form.service';
import { ReferenceMeasurementsPopupFormService } from './popups/ref-measurements-popup-form.service';

interface DocumentRow {
  docName?: string;
  docSource?: string;
  docExtension?: string;
  docSize?: string;
  docPublicationDate?: string;
  docDescription?: string;
  _obj?: BireDocumentDTO;
}

interface BirePartUpdateGuidelineRow {
  _obj: BirePartUpdateGuidelineDTO;
  reference?: string;
  requestType?: string;
  status?: string;
  creationDate?: string;
  controlTransmissionDate?: string;
  centralTransmissionDate?: string;
  closureDate?: string;
  isCreator?: boolean;
}

@Component({
  selector: 'aw-part-number-form',
  templateUrl: './part-number-form.component.html',
  styleUrls: ['./part-number-form.component.scss']
})
export class PartNumberFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_ANCHOR_ID: string = 'mainAnchor';
  public static readonly GENERAL_ANCHOR_ID: string = 'generalAnchor';
  public static readonly NATO_ANCHOR_ID: string = 'natoAnchor';
  public static readonly ATTRIBUTES_ANCHOR_ID: string = 'attributesAnchor';
  public static readonly REFERENCE_ANCHOR_ID: string = 'referenceAnchor';
  public static readonly ITEMS_ANCHOR_ID: string = 'itemsAnchor';
  public static readonly EVOLUTIONS_ANCHOR_ID: string = 'evolutionsAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentsAnchor';

  public readonly component: typeof PartNumberFormComponent;

  public refMeasurementDialogOpenMode: ComponentOpenMode;
  public showMeasurementPopup: boolean;

  public pn: BirePnDTO;
  public pnStatus: BirePnDTO;
  public pnId: BirePnDTOId;
  public subtitle: string;
  public displayStatusPopup: boolean;
  public actionTypeA: LabelValue<string>[];
  public actionTypeB: LabelValue<string>[];
  public isCreatorAndIsFirstAdd: boolean;

  public dynamicAttributes: DynamicAttributes[];

  public interventionOption: string;
  public valueResettable: boolean;

  public itemsTableDataSource: TableDataSource<BireItemDTO>;
  public evolutionsTableDataSource: TableDataSource<FindBireItemPnEvolutionsByPnCodeOrPnPnCodeDTO>;
  public evolutionImpactsTableDataSource: TableDataSource<FindBireEvolutionPnsByPnCodeDTO>;
  public referenceMeasurementsTableDataSource: TableDataSource<BirePnMeasureTmpDTO>;
  public guidelineTableDataSource: TableDataSource<BirePartUpdateGuidelineRow>;

  public isForUpdate: boolean;
  public sparePartClassOptions: LabelValue<string>[];
  public mtbfAndMtburUnit: string;
  public measurementsUnit: string;
  public weightUnit: string;

  /*DYNAMIC Attributes*/
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForPn: BireAttributeDTO[];
  public birePnAttributes: BirePnAttributeDTO[];

  /* Tab Management */
  public currentTabId: string;
  public tabReferenceMeasurementsId: string;
  public tabItemsId: string;
  public tabGeneralId: string;
  public tabEvolutionId: string;
  public tabAttributesId: string;
  public tabDEADIAId: string;

  public selectedTraceability: string;
  public selectedUnit: string;
  public familyVariant: BireFamilyDTO;

  /* DropDown Lists */
  public propertyVariant: LabelValue<string>[];
  public partNumberStatus: LabelValue<string>[];
  public workflowStatus: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyObjectStatus: LabelValue<string>[];
  public propertyActionType: LabelValue<string>[];
  public propertyMeasure: LabelValue<string>[];
  public propertyUnit: BireUnitMeasureDTO[];

  public familyVariantMap: Map<LabelValue<string>, FamilyVariantDTO>;
  public propertyTraceability: LabelValue<string>[];
  public propertyStructureType: LabelValue<string>[];
  public pnTypes: LabelValue<string>[];

  public quantityUnit: LabelValue<string>[];

  /** Popup Reference Measurements */
  public newRefMeasurements: BirePnMeasureDTO;
  public selectedMaintenancePrograms: BireMaintenancePlanDTO[];
  public refMeasurementsTableFilteredRowsNb: number;
  public dataRefMeasurements: PopupEntry<BirePnMeasureDTO>;
  private bireRefMeasurementsAddedList: BirePnMeasureDTO[];
  private bireRefMeasurementsUpdatedList: BirePnMeasureDTO[];
  private bireRefMeasurementsDeletedList: BirePnMeasureDTOId[];
  public currentRefMeasurements: BirePnMeasureDTO;
  public isNewRef: boolean;
  public bireRefMeasurements: BirePnMeasureDTO;
  public bireRefMeasurementsId: string;
  public displayStatusPopupRefMeasurements: boolean;
  public familyCode: string;
  public structureType: string;

  public bireProgramsDisplayed: BireMaintenanceProgramPnTableDTO[];

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HistoricObjectPnDTO>;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;
  public deleteApi: string;

  public navigationLinkList: MenuItem[];
  public showSaveSpinner: boolean;

  public flocTypeMap: LabelValue<string>[];

  // Documents variables
  public documentsTableDataSource: TableDataSourceWithHistory<DocumentRow>;
  public showAddDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;
  // Table of content

  @ViewChild(PartNumberFormComponent.MAIN_ANCHOR_ID)
  public mainEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.GENERAL_ANCHOR_ID)
  public generalEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.NATO_ANCHOR_ID)
  public natoEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.ATTRIBUTES_ANCHOR_ID)
  public attributesEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.REFERENCE_ANCHOR_ID)
  public referenceEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.ITEMS_ANCHOR_ID)
  public itemsEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.EVOLUTIONS_ANCHOR_ID)
  public evolutionsEltRef: ElementRef;

  @ViewChild(PartNumberFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentsEltRef: ElementRef;

  public toc: PageTocEntry[];
  public workflowToc: PageTocEntry[];
  private partGuidelineTypes: LabelValue<string>[];
  private partGuidelineStatus: LabelValue<string>[];
  private user: BidoUserDTO;
  public isController: boolean;
  public enableAddButton: boolean;

  public createProcurementDialogVisible: boolean;
  public birePartUpdateGuidelineDTO: BirePartUpdateGuidelineDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    private readonly pnFormService: PartNumberFormService,
    private readonly confirmationService: ConfirmationService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly propertiesService: PropertiesService,
    public popupServiceRefMeasurements: ReferenceMeasurementsPopupFormService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly dateService: DateService,
    private readonly _overlayService: OverlayService,
    private readonly _formatSelectOption: FormatSelectOptionPipe,
    private readonly sessionService: SessionService
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

    this.component = PartNumberFormComponent;

    this.refMeasurementDialogOpenMode = ComponentOpenMode.Create;
    this.showMeasurementPopup = false;

    this.tabReferenceMeasurementsId = 'referenceMeasurements';
    this.tabItemsId = 'items';
    this.tabAttributesId = 'attributes';
    this.tabEvolutionId = 'evolution';
    this.tabDEADIAId = 'DEA/DIA';
    this.familyCode = '';
    this.structureType = '';
    this.isForUpdate = true;
    this.isCreatorAndIsFirstAdd = true;

    this.mtbfAndMtburUnit = '(H)';
    this.measurementsUnit = '(Cm)';
    this.weightUnit = '(Kg)';

    this.attributeIdValueMap = new Map<string, string>();
    this.bireAttributesForPn = [];
    this.birePnAttributes = [];
    this.actionTypeA = [];
    this.actionTypeB = [];

    // this.getBireAttributesForEvolution();

    this.bireRefMeasurementsAddedList = [];
    this.bireRefMeasurementsDeletedList = [];
    this.bireRefMeasurementsUpdatedList = [];
    this.bireProgramsDisplayed = [];
    this.selectedMaintenancePrograms = [];
    this.pn = {};
    this.pn.pnType = AWPropertiesConstants.PN_TYPE_PART_KEY;
    this.currentTabId = this.tabGeneralId;
    this.familyVariantMap = new Map<LabelValue<string>, FamilyVariantDTO>();
    this.setNavigationLinkList();
    this.initLists();

    this.registerPageTocEntryObservable();

    this.propertyActionType = [];
    this.propertyStructureType = [];

    // For status/updates popup
    this.showStatusUpdatesPopup = false;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.deleteApi = this.updateHistoricApi.removeBireSbHistory;
    this.loadTablesHeader();
    this.fillDropDown();

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Change the DropDownList content regarding the langage
      this.fillDropDown();
    });

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
      this.updateWorkflowToc();
    });

    // Documents
    this.initDocumentsTableDataSource();

    this.loadPartGuidelineTypes();
    this.loadPartGuidelineStatus();
    this.loadUser();
    this.loadIsController();
  }

  public getComponentName(): string {
    return 'PartNumberFormComponent';
  }

  public initLists() {
    this.bireRefMeasurementsAddedList = [];
    this.bireRefMeasurementsDeletedList = [];
    this.bireRefMeasurementsUpdatedList = [];

    this.sparePartClassOptions = [];

    this.propertiesService.getValue('getFlocTypeMap').subscribe((result) => {
      this.flocTypeMap = result;
    });

    this.loadSparePartClassDropdown();
    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributes = this.dynamicAttributesService.from(this.bireAttributesForPn);
    });
  }

  public ngOnInit() {
    super.ngOnInit();
    if (!!this.componentData) {
      this.setTableOfContent();
      this.updateOpenMode(this.componentData.openMode);
      if (this.componentData.objectId && this.componentData.objectId.length > 0) {
        this.isForUpdate = true;
        this.displayComponentContext(this.componentData.objectId, this.isCreateOpenMode);
        this.subtitle = this.componentData.objectId;
      } else {
        const context = !!this.componentData.objectId
          ? this.serializationService.deserialize(this.componentData.objectId)
          : 'tab.createMode';
        this.displayComponentContext(context, this.isCreateOpenMode);
      }
    }
    if (this.isCreateOpenMode) {
      this.pn.statusState = AWPropertiesConstants.FUNC_OBJECT_STATUS_ONGOING;
    }

    this.loadPN();
  }

  public cancel(): void {
    this.clearErrors();
    if (this.isCreateOpenMode) {
      this.initOnCreate();
    } else {
      this.reloadPN();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributes);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public initOnCreate(): void {
    this.pn = {};
    this.actionTypeA = [];
    this.actionTypeB = [];

    // this.getBireAttributesForEvolution();
    this.bireRefMeasurementsAddedList = [];
    this.bireRefMeasurementsDeletedList = [];
    this.bireRefMeasurementsUpdatedList = [];
    this.bireProgramsDisplayed = [];
    this.selectedMaintenancePrograms = [];

    this.initAttributeValue();
  }

  public refresh(): void {
    this.ngOnInit();
    this.loadSparePartClassDropdown();
    this.fillDropDown();
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadPN(): void {
    this.init();
    this.loadPN();
  }

  private init(): void {
    this.pn = {};

    this.loadTablesHeader();
    this.fillDropDown();
  }

  public loadPN(): void {
    // Load dynamic attributes
    const observables: Observable<BireAttributeDTO[]>[] = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_PART_KEY)
    ];

    forkJoin(observables).subscribe(
      (results: BireAttributeDTO[][]) => {
        if (results) {
          const flattenResults: BireAttributeDTO[] = results.reduce((acc, val) => acc.concat(val), []);
          this.dynamicAttributes = this.dynamicAttributesService.from(flattenResults);

          this.bireAttributesForPn = flattenResults;

          if (this.isCreateOpenMode) {
            this.loadUserWorkflow(undefined);
          } else {
            // Load pn object
            if (!!this.componentData && !!this.componentData.objectId) {
              const pnId: BirePnDTOId = {
                pnCode: this.componentData.objectId
              };

              this.pnFormService.findBirePn(pnId).subscribe((result) => {
                if (result) {
                  this.pn = result;
                  if (this.pn && this.pn.pnCode) {
                    this.loadTablesAssociated();
                    let status = this.pn.statusState;
                    if (
                      !!status &&
                      this.propertyStatus.length > 0 &&
                      !this.getLabelValueByValue(this.propertyStatus, status)
                    ) {
                      // Non functional status ignored
                      status = undefined;
                    }
                    this.loadUserWorkflow(status);

                    this.pnFormService.findBireVersionPnsByPnCode(this.pn.pnCode).subscribe(
                      (pnResults) => {
                        if (pnResults.length > 0) {
                          const famCode = pnResults[0].familyCode;
                          if (!!famCode) {
                            this.familyCode = famCode;
                          }
                          const strType = pnResults[0].structureType;
                          if (!!strType) {
                            this.structureType = strType;
                          }
                        }
                      },
                      () => {
                        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyCode'));
                      }
                    );
                  }
                }
              });

              if (!!this.componentData.objectId) {
                this.pnFormService
                  .findBirePnAttributesByPn(this.componentData.objectId)
                  .subscribe((attributesResults) => {
                    this.dynamicAttributes.forEach((element) => {
                      element.attributes.forEach((attribute) => {
                        const attributeInResults = attributesResults.filter((res) => res.attributeId === attribute.id);
                        if (attributeInResults.length === 1) {
                          attribute.value = attributeInResults[0].attributeValue;
                        }
                      });
                    });
                  });
              }

              this.loadPnDocuments(pnId);
            }
          }
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetPn'));
      }
    );
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BireAttributeDTO[]> {
    return this.pnFormService.findBireAttributesByCategory(attributeCategory);
  }

  /*********************
   * TABS MANAGEMENT
   *********************/

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openEvolutionTab(): void {
    this.currentTabId = this.tabEvolutionId;
  }

  public openDEADIATab(): void {
    this.currentTabId = this.tabDEADIAId;
  }

  public openItemsTab(): void {
    this.currentTabId = this.tabItemsId;
  }

  public openRefMeasurementsTab(): void {
    this.currentTabId = this.tabReferenceMeasurementsId;
  }

  /***********************
   * TABLES MANAGEMENT
   ***********************/

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetForm(): void {
    this.pn = {};
  }

  /*********************************
   * LOADING TABLES AND DROPDOWN
   *********************************/

  public loadTablesHeader(): void {
    this.initReferenceMeasurementsTableDataSource();
    this.initItemsTableDataSource();
    this.initEvolutionsTableDataSource();
    this.initEvolutionImpactsTableDataSource();
    this.initGuidelineTableDataSource();
  }

  private initReferenceMeasurementsTableDataSource(): void {
    this.referenceMeasurementsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'counterCode', width: '10%', translateKey: this.getTranslateKey('counterCode') },
        { field: 'familyCode', width: '10%', translateKey: this.getTranslateKey('familyCode') },
        { field: 'ratingCode', width: '7%', translateKey: this.getTranslateKey('ratingCode') },
        { field: 'tolerance', width: '7%', translateKey: this.getTranslateKey('tolerance') },
        {
          field: 'pnPotentialReferenceValue',
          width: '6%',
          translateKey: this.getTranslateKey('pnPotentialReferenceValue')
        },
        { field: 'pnPotentialLimitDate', width: '8%', translateKey: this.getTranslateKey('pnPotentialLimitDate') },
        { field: 'limitIsUpdatable', width: '12%', translateKey: this.getTranslateKey('limitIsUpdatable') },
        { field: 'limitDescription', width: '10%', translateKey: this.getTranslateKey('limitDescription') },
        { field: 'interventionOptions', width: '10%', translateKey: this.getTranslateKey('interventionOptions') },
        { field: 'valueResettable', width: '10%', translateKey: this.getTranslateKey('valueResettable') },
        { field: 'sb', width: '10%', translateKey: this.getTranslateKey('serviceBulletin') }
      ],
      data: []
    });
  }

  private initItemsTableDataSource(): void {
    this.itemsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'familyCode', translateKey: this.getTranslateKey('familyCode') },
        { field: 'ataCode', translateKey: this.getTranslateKey('ataCode') },
        { field: 'unmStructureType', translateKey: this.getTranslateKey('unmStructureType') },
        { field: 'variantCode', translateKey: this.getTranslateKey('variantCode') },
        { field: 'name', translateKey: this.getTranslateKey('name') },
        { field: 'itemNumber', translateKey: this.getTranslateKey('itemNumber') },
        { field: 'functionCode', translateKey: this.getTranslateKey('functionCode') },
        { field: 'ippeNodeType', translateKey: this.getTranslateKey('ippeNodeType') }
      ],
      data: []
    });
  }

  private initEvolutionsTableDataSource(): void {
    this.evolutionsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'evolutionNumber', translateKey: this.getTranslateKey('evolutionNumber') },
        { field: 'item', translateKey: this.getTranslateKey('item') },
        { field: 'mod', translateKey: this.getTranslateKey('mod') },
        { field: 'sb', translateKey: this.getTranslateKey('sb') },
        { field: 'ad', translateKey: this.getTranslateKey('ad') },
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') },
        { field: 'pnPnCode', translateKey: this.getTranslateKey('pnPnCode') },
        { field: 'actionTypeCode', translateKey: this.getTranslateKey('actionTypeCode') },
        { field: 'quantityBefore', translateKey: this.getTranslateKey('quantityBefore') },
        { field: 'quantityAfter', translateKey: this.getTranslateKey('quantityAfter') }
      ],
      data: []
    });
  }

  private initGuidelineTableDataSource(): void {
    this.guidelineTableDataSource = new TableDataSource({
      enableSelection: true,
      columns: [
        { field: 'reference', width: '8%', translateKey: this.getTranslateKey('reference') },
        { field: 'requestType', width: '14%', translateKey: this.getTranslateKey('requestType') },
        { field: 'status', width: '12%', translateKey: this.getTranslateKey('status') },
        { field: 'creationDate', width: '12%', translateKey: this.getTranslateKey('creationDate') },
        {
          field: 'controlTransmissionDate',
          width: '21%',
          translateKey: this.getTranslateKey('controlTransmissionDate')
        },
        {
          field: 'centralTransmissionDate',
          width: '21%',
          translateKey: this.getTranslateKey('centralTransmissionDate')
        },
        { field: 'closureDate', width: '12%', translateKey: this.getTranslateKey('closureDate') }
      ],
      data: []
    });
  }

  private initEvolutionImpactsTableDataSource(): void {
    this.evolutionImpactsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'evolutionNumber', translateKey: this.getTranslateKey('evolutionNumber') },
        { field: 'item', translateKey: this.getTranslateKey('item') },
        { field: 'mod', translateKey: this.getTranslateKey('mod') },
        { field: 'sb', translateKey: this.getTranslateKey('sb') },
        { field: 'ad', translateKey: this.getTranslateKey('ad') },
        { field: 'actionTypeCode', translateKey: this.getTranslateKey('actionTypeCode') },
        { field: 'pnCode', translateKey: this.getTranslateKey('pnCode') }
      ],
      data: []
    });
  }

  public loadTablesAssociated(): void {
    this.referenceMeasurementsTableDataSource.setData([]);
    if (!!this.pn.pnCode) {
      this.pnFormService.findBireItemsBySearchCriteria(this.pn.pnCode).subscribe(
        (results) => {
          results.forEach((element) => {
            if (
              element.structureType &&
              this.propertyStructureType.filter((type) => type.value === element.structureType)
            ) {
              element.unmStructureType = this.propertyStructureType.filter(
                (type) => type.value === element.structureType
              )[0].label;
            }

            if (!!element.ippeNodeType) {
              element.ippeNodeType = this.getFlocTypeLabelVal(element.ippeNodeType, 0);
            }
          });

          this.itemsTableDataSource.setData(results);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetItemList'));
        }
      );

      this.pnId = {
        pnCode: this.pn.pnCode
      };
      this.pnFormService.findBirePnMeasuresByPnCode(this.pnId).subscribe(
        (results) => {
          const referenceMeasurements = results.map((element) => {
            const options = !!element.interventionOptions ? element.interventionOptions.split(';') : undefined;
            const newTab: BirePnMeasureTmpDTO = {
              counterCode: element.counterCode,
              familyCode: element.familyCode,
              pnPotentialLimitDate: element.pnPotentialLimitDate,
              pnCode: element.pnCode,
              tolerance: element.tolerance,
              sb: element.sb,
              ratingCode: element.ratingCode,
              pnPotentialReferenceValue: element.pnPotentialReferenceValue,
              limitDescription: element.limitDescription,
              valueResettable:
                options !== undefined && options.length > 1 ? (options[1] === 'true' ? true : false) : false,
              interventionOptions: options !== undefined && options.length > 0 ? options[0] : '',
              limitIsUpdatable: element.limitIsUpdatable,
              structureType: element.structureType
            };

            return newTab;
          });
          this.referenceMeasurementsTableDataSource.setData(referenceMeasurements);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetRefMeasurements'));
        }
      );
      this.pnFormService.findBireEvolutionPnsByPnCode(this.pnId).subscribe(
        (results) => {
          if (results) {
            results.forEach((element) => {
              if (element.actionTypeCode) {
                element.actionTypeCode = this.actionTypeA.filter(
                  (actionType) => actionType.value === element.actionTypeCode
                )[0].label;
              }
            });
            this.evolutionImpactsTableDataSource.setData(results);
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetImpactsOnPnEvolutionResults'));
        }
      );
      this.pnFormService.findBireItemPnEvolutionsByPnCodeOrPnPnCode(this.pnId).subscribe(
        (results) => {
          if (results) {
            results.forEach((element) => {
              if (element.actionTypeCode) {
                element.actionTypeCode = this.actionTypeB.filter(
                  (actionType) => actionType.value === element.actionTypeCode
                )[0].label;
              }
            });
            this.evolutionsTableDataSource.setData(results);
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetEvolutionResults'));
        }
      );
      this.pnFormService.findBireMaintenancePlansByPn(this.pnId).subscribe(
        (results) => {
          if (results) {
            this.bireProgramsDisplayed = results;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetProgramsResults'));
        }
      );
      this.pnFormService.findBirePartUpdateGuideline(this.pnId).subscribe(
        (results: BirePartUpdateGuidelineDTO[]) => {
          if (results) {
            this.birePartUpdateGuidelineDTO = results;
            const rows: BirePartUpdateGuidelineRow[] = results.map((el) => this.createBirePartUpdateGuidelineRow(el));
            this.guidelineTableDataSource.setData(rows);
            this.loadEnableAddButton();
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetGuidelinesResults'));
        }
      );

      // Adding object status if necessary
      if (!!this.pn.statusState && !this.getLabelValueByValue(this.propertyStatus, this.pn.statusState)) {
        const currentState = this.getLabelValueByValue(this.propertyObjectStatus, this.pn.statusState);
        if (currentState) {
          this.partNumberStatus.unshift(currentState);
          this.updateWorkflowStatusList();
        }
      }
    }
  }

  private createBirePartUpdateGuidelineRow(guideline: BirePartUpdateGuidelineDTO): BirePartUpdateGuidelineRow {
    const type = !!guideline.pugType
      ? this.getLabelValueByValue(this.partGuidelineTypes, guideline.pugType)
      : undefined;
    const status = !!guideline.pugStatus
      ? this.getLabelValueByValue(this.partGuidelineStatus, guideline.pugStatus)
      : undefined;
    const birePartUpdateGuidelineRow: BirePartUpdateGuidelineRow = {
      reference: guideline.pugCode,
      requestType: !!type ? type.label : '',
      status: !!status ? status.label : '',
      creationDate: !!guideline.creationDate
        ? moment(guideline.creationDate).format(this._sessionService.dateTimeFormatMomentJS)
        : '',
      controlTransmissionDate: !!guideline.controlTransmissionDate
        ? moment(guideline.controlTransmissionDate).format(this._sessionService.dateTimeFormatMomentJS)
        : '',
      centralTransmissionDate: guideline.centralTransmissionDate
        ? moment(guideline.centralTransmissionDate).format(this._sessionService.dateTimeFormatMomentJS)
        : '',
      closureDate: !!guideline.closureDate
        ? moment(guideline.closureDate).format(this._sessionService.dateTimeFormatMomentJS)
        : '',
      isCreator: this.isCreator(guideline),
      _obj: guideline
    };

    return birePartUpdateGuidelineRow;
  }

  private getLabelValueByValue<T>(references: LabelValue<T>[], value: T): LabelValue<T> | undefined {
    if (!!references) {
      return references.find((lv) => lv.value === value);
    }
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.partNumberStatus,
      this.pn.statusState
    );
  }

  public fillDropDown() {
    this.pnFormService.getFuncObjectStatusMap().subscribe(
      (results) => {
        this.propertyStatus = results;
        this.partNumberStatus = [...results];
        this.updateWorkflowStatusList();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );
    this.pnFormService.getObjectStatusMap().subscribe(
      (results) => {
        this.propertyObjectStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetObjectStatus'));
      }
    );
    this.pnFormService.findBireActionTypesByActionTypeCodeA().subscribe(
      (results) => {
        this.actionTypeA = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInstructions'));
      }
    );
    this.pnFormService.findBireActionTypesByActionTypeCodeB().subscribe(
      (results) => {
        this.actionTypeB = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetInstructions'));
      }
    );
    this.pnFormService.getStructureTypeMap().subscribe(
      (results) => {
        this.propertyStructureType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStructureType'));
      }
    );
    this.pnFormService.findQuantityUnitMap().subscribe((res) => {
      this.quantityUnit = res;
    });
    this.pnFormService.getPnTraceabilityMap().subscribe(
      (results) => {
        this.propertyTraceability = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTraceability'));
      }
    );
    this.pnFormService.getRefMeasureCategoryMap().subscribe(
      (results) => {
        this.propertyMeasure = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetRefMeasureCategory'));
      }
    );
    this.pnFormService.findAllBireVariantVersions().subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((element) => {
          if (!!element.labelValueDTO) {
            list.push(element.labelValueDTO);
            this.familyVariantMap.set(element.labelValueDTO, element);
          }
        });
        this.propertyVariant = list;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
    this.pnFormService.findAllBireUnitMeasures().subscribe(
      (results) => {
        this.propertyUnit = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
    this.propertiesService.getValue(GenericPropertyConstants.ENGINEERING_PN_TYPES_MAP).subscribe(
      (results) => {
        this.pnTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  public confirmDeleteReferenceMeasurements(): void {
    const partialMessageKey = 'deleteConfirmationReferenceMeasurements';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.deleteSelectedReferenceMeasurements();
      }
    });
  }

  public createReferenceMeasurements(): void {
    this.showMeasurementPopup = true;
    this.isNewRef = true;
    if (this.pn.pnCode) {
      this.pnFormService.findBireVersionPnsByPnCode(this.pn.pnCode).subscribe(
        (results) => {
          const famCode = results[0] && results[0].familyCode;
          const strType = results[0] && results[0].structureType;
          if (!!famCode) {
            this.familyCode = famCode;
          }
          if (!!strType) {
            this.structureType = strType;
          }
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyCode'));
        }
      );
    }
    this.currentRefMeasurements = {
      pnCode: this.pn.pnCode,
      familyCode: this.familyCode,
      structureType: this.structureType
    };
    this.dataRefMeasurements = {
      componentId: 'ReferenceMeasurementsPopupDialog',
      selectedRow: [],
      object: this.currentRefMeasurements,
      openMode: ComponentOpenMode.Read
    };
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Create;
  }

  public editReferenceMeasurements(): void {
    this.isNewRef = false;
    if (this.referenceMeasurementsTableDataSource.dataSelectionCount === 1) {
      this.currentRefMeasurements = { ...this.referenceMeasurementsTableDataSource.dataSelection[0] };
      this.currentRefMeasurements.pnCode = this.pn.pnCode;

      this.showMeasurementPopup = true;
      this.dataRefMeasurements = {
        componentId: 'ReferenceMeasurementsPopupDialog',
        selectedRow: this.referenceMeasurementsTableDataSource.dataSelection,
        object: this.currentRefMeasurements,
        openMode: ComponentOpenMode.Read
      };
    }
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Write;
  }

  public openReferenceMeasurements(): void {
    if (this.referenceMeasurementsTableDataSource.dataSelectionCount === 1) {
      this.currentRefMeasurements = { ...this.referenceMeasurementsTableDataSource.dataSelection[0] };
      this.currentRefMeasurements.pnCode = this.pn.pnCode;

      this.showMeasurementPopup = true;
      this.dataRefMeasurements = {
        componentId: 'ReferenceMeasurementsPopupDialog',
        selectedRow: this.referenceMeasurementsTableDataSource.dataSelection,
        object: this.currentRefMeasurements,
        openMode: ComponentOpenMode.Read
      };
    }
    this.refMeasurementDialogOpenMode = ComponentOpenMode.Read;
  }

  public addNewReferenceMeasurements(newRefMeasurements: BirePnMeasureDTO) {
    if (!!newRefMeasurements && newRefMeasurements.interventionOptions) {
      const options = newRefMeasurements.interventionOptions.split(';');
      if (options.length > 0) {
        this.interventionOption = options[0] === null ? '' : options[0];
        this.valueResettable = options[1] === 'true';
      }
    }
    const newTab: BirePnMeasureTmpDTO = {
      counterCode: newRefMeasurements.counterCode,
      familyCode: newRefMeasurements.familyCode,
      pnPotentialLimitDate: newRefMeasurements.pnPotentialLimitDate,
      pnCode: newRefMeasurements.pnCode,
      ratingCode: newRefMeasurements.ratingCode,
      pnPotentialReferenceValue: newRefMeasurements.pnPotentialReferenceValue,
      limitDescription: newRefMeasurements.limitDescription,
      valueResettable: this.valueResettable,
      interventionOptions: this.interventionOption,
      limitIsUpdatable: newRefMeasurements.limitIsUpdatable,
      structureType: newRefMeasurements.structureType,
      tolerance: newRefMeasurements.tolerance,
      sb: newRefMeasurements.sb
    };
    const searchInDisplayedList = this.referenceMeasurementsTableDataSource.dataSrc.find(
      (value) =>
        !!newRefMeasurements &&
        value.pnCode === newRefMeasurements.pnCode &&
        value.familyCode === newRefMeasurements.familyCode &&
        value.counterCode === newRefMeasurements.counterCode &&
        value.ratingCode === newRefMeasurements.ratingCode &&
        value.structureType === newRefMeasurements.structureType
    );
    if (!searchInDisplayedList) {
      this.bireRefMeasurementsAddedList.push(newRefMeasurements);
      this.referenceMeasurementsTableDataSource.addData([newTab]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('RefMeasurementsAlreadyExists'));
    }
  }

  private deleteSelectedReferenceMeasurements() {
    this.referenceMeasurementsTableDataSource.dataSelection.forEach((element) => {
      const searchInAddedList = this.bireRefMeasurementsAddedList.find(
        (value) =>
          value.pnCode === element.pnCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.ratingCode === element.ratingCode &&
          value.counterCode === element.counterCode
      );
      const searchInUpdatedList = this.bireRefMeasurementsAddedList.find(
        (value) =>
          value.pnCode === element.pnCode &&
          value.ratingCode === element.ratingCode &&
          value.familyCode === element.familyCode &&
          value.structureType === element.structureType &&
          value.counterCode === element.counterCode
      );
      if (searchInAddedList) {
        const indexInAddedList = this.bireRefMeasurementsAddedList.indexOf(searchInAddedList);
        this.bireRefMeasurementsAddedList.splice(indexInAddedList, 1);
      } else {
        if (
          !!element.pnCode &&
          !!element.counterCode &&
          !!element.familyCode &&
          !!element.structureType &&
          !!element.ratingCode
        ) {
          const interdepId: BirePnMeasureDTOId = {
            pnCode: element.pnCode,
            counterCode: element.counterCode,
            familyCode: element.familyCode,
            structureType: element.structureType,
            ratingCode: element.ratingCode
          };
          if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireRefMeasurementsUpdatedList.indexOf(searchInUpdatedList);
            this.bireRefMeasurementsUpdatedList.splice(indexInUpdatedList, 1);
            this.bireRefMeasurementsDeletedList.push(interdepId);
          } else {
            this.bireRefMeasurementsDeletedList.push(interdepId);
          }
        }
      }
    });

    this.referenceMeasurementsTableDataSource.deleteDataSelection();
    this.referenceMeasurementsTableDataSource.dataSelection = [];
  }

  public updateReferenceMeasurements(udpatedRefMeasurements: BirePnMeasureDTO) {
    if (udpatedRefMeasurements.interventionOptions) {
      const options = udpatedRefMeasurements.interventionOptions.split(';');
      if (options.length > 0) {
        this.interventionOption = options[0] === null ? '' : options[0];
        this.valueResettable = options[1] === 'true';
      }
    }
    const updateTab: BirePnMeasureTmpDTO = {
      counterCode: udpatedRefMeasurements.counterCode,
      familyCode: udpatedRefMeasurements.familyCode,
      tolerance: udpatedRefMeasurements.tolerance,
      sb: udpatedRefMeasurements.sb,
      pnPotentialLimitDate: udpatedRefMeasurements.pnPotentialLimitDate,
      pnCode: udpatedRefMeasurements.pnCode,
      ratingCode: udpatedRefMeasurements.ratingCode,
      pnPotentialReferenceValue: udpatedRefMeasurements.pnPotentialReferenceValue,
      limitDescription: udpatedRefMeasurements.limitDescription,
      valueResettable: this.valueResettable,
      interventionOptions: this.interventionOption,
      limitIsUpdatable: udpatedRefMeasurements.limitIsUpdatable,
      structureType: udpatedRefMeasurements.structureType
    };

    if (!this.hasDuplicateRow(udpatedRefMeasurements)) {
      this.bireRefMeasurementsUpdatedList.push(udpatedRefMeasurements);
      this.referenceMeasurementsTableDataSource.replaceData(
        this.referenceMeasurementsTableDataSource.dataSelection[0],
        updateTab
      );
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('RefMeasurementsAlreadyExists'));
    }
    this.referenceMeasurementsTableDataSource.dataSelection = [];
  }

  private hasDuplicateRow(rowData: BirePnMeasureDTO): boolean {
    let refMeasurementList = [...this.referenceMeasurementsTableDataSource.dataSrc];
    if (this.referenceMeasurementsTableDataSource.hasDataSelection) {
      const selectedRow = this.referenceMeasurementsTableDataSource.dataSelection[0];

      // Return all the rows except selected rows
      refMeasurementList = this.referenceMeasurementsTableDataSource.dataSrc.filter((mprow) => {
        return (
          selectedRow.pnCode !== mprow.pnCode ||
          selectedRow.ratingCode !== mprow.ratingCode ||
          selectedRow.familyCode !== mprow.familyCode ||
          selectedRow.structureType !== mprow.structureType ||
          selectedRow.counterCode !== mprow.counterCode
        );
      });
    }

    // check whether any other rows have same values of row data or not
    const hasAnyDuplicateRow = refMeasurementList.some((row) => {
      return (
        row.pnCode === rowData.pnCode &&
        row.ratingCode === rowData.ratingCode &&
        row.familyCode === rowData.familyCode &&
        row.structureType === rowData.structureType &&
        row.counterCode === rowData.counterCode
      );
    });

    return hasAnyDuplicateRow;
  }

  private updateListsAttributes() {
    this.bireRefMeasurementsAddedList.forEach((element) => {
      element.pnCode = this.pn.pnCode;
    });
    this.bireRefMeasurementsUpdatedList.forEach((element) => {
      element.pnCode = this.pn.pnCode;
    });
    this.bireRefMeasurementsDeletedList.forEach((element) => {
      if (!!this.pn.pnCode) {
        element.pnCode = this.pn.pnCode;
      }
    });
    this.birePnAttributes.forEach((element) => {
      element.pnCode = this.pn.pnCode;
    });
  }

  public savePnData(): boolean {
    let saved = false;
    const missingFields = this.checkMandatoryFields({
      ...this.pn,
      bireRefMeasurementsTableTitle: this.referenceMeasurementsTableDataSource.dataSrc,
      itemsTableTitle: this.itemsTableDataSource.dataSrc,
      evolutionAssociatedTableTitle: this.evolutionsTableDataSource.dataSrc,
      evolutionImpactTableTitle: this.evolutionImpactsTableDataSource.dataSrc,
      dynamicAttributes: this.dynamicAttributes
    });
    if (this.pn.pnCode && missingFields.length === 0) {
      this.updateListsAttributes();
      this.birePnAttributes = this.dynamicAttributesService.toBirePnAttribute(this.pn.pnCode, this.dynamicAttributes);
      const savePartNumberInput: SavePartNumberInput = {
        birePnDTO: this.pn,
        birePnMeasureDTOAddedList: this.bireRefMeasurementsAddedList,
        birePnMeasureDTOUpdatedList: this.bireRefMeasurementsUpdatedList,
        birePnMeasureDTOIdRemovedList: this.bireRefMeasurementsDeletedList,
        birePnAttributeDTOAddedList: [],
        birePnAttributeDTOUpdatedList: this.birePnAttributes,
        birePnAttributeDTOIdRemovedList: [],
        isForUpdate: !this.isCreateOpenMode,
        bireDocumentAddedList: this.documentsTableDataSource.getAddedList().map(this.toDocumentDto),
        bireDocumentUpdatedList: this.documentsTableDataSource.getUpdatedList().map(this.toDocumentDto),
        bireDocumentRemovedList: this.documentsTableDataSource.getDeletedList().map(this.toDocumentDto)
      };

      this.showSaveSpinner = true;
      this.pnFormService
        .savePnData(savePartNumberInput)
        .pipe(
          finalize(() => {
            this.showSaveSpinner = false;
          })
        )
        .subscribe((result) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnSavedPn'));
          this.initLists();
          this.updateOpenMode(ComponentOpenMode.Read);
          if (!this.componentData.objectId) {
            this.pn.pnCode = result.split(':')[0];
            this.componentData.objectId = result.split(':')[0];
            this.componentData.openMode = ComponentOpenMode.Read;
            this.displayComponentContext(this.componentData.objectId, this.isCreateOpenMode);
            this.subtitle = this.componentData.objectId;
          }
          this.documentsTableDataSource.clearHistory();
          this.refresh();
        });
      saved = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('missingFields'));
    }

    return saved;
  }

  public openStatusUpdatesPopup() {
    // Test of the popup (not the real history)
    this.pnStatus = { ...this.pn };

    this.showStatusUpdatesPopup = true;
    const columns: TableColumn[] = [
      { field: 'date', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'author', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'action', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'status', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerNatoCode', alignment: 'center', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'otanPnReference', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'fromReparationSolution', alignment: 'center', width: '180px', filterMode: TableColumnFilterMode.Input },
      { field: 'traceability', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'isPma', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'quantityUnit', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'articleDesignation', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode1', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode2', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode3', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode4', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode5', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'pnCode6', alignment: 'center', width: '150px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode1', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode2', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode3', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode4', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode5', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'manufacturerOtanCode6', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'sparePartClass', alignment: 'center', width: '200px', filterMode: TableColumnFilterMode.Input }
    ];
    this.updatesKeyMap.set('status', of(this.partNumberStatus));
    if (!!this.pn.sparePartClassCode) {
      this.updatesKeyMap.set('sparePartClass', of(this.sparePartClassOptions));
    }
    this.tableStatusUpdatesData = {
      componentId: 'PartNumberFormComponent.historicPopup',
      tableCols: columns,
      tableRows: this.updateHistoricService.findBirePnHistoric(this.pnId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  // TODO when update functionality is implemented in StatusUpdatesHistoryComponent
  // public updateObjectStatusFromStatusUpdatesHistory(event: HistoricObjectPnDTO): void {

  // }

  public openLogisticView(openMode: ComponentOpenMode = ComponentOpenMode.Read): void {
    const labelKey = 'transaction.MaterialFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MaterialFormComponent',
      openMode
    };
    const materialFormId: BirePnDTOId = {
      pnCode: this.pn.pnCode ? this.pn.pnCode : ''
    };
    data.objectId = this.serializationService.serialize(materialFormId);

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openPartNumberScreen(objectId: BireItemDTO): void {
    if (StringUtils.isNullOrEmpty(objectId.familyCode)) {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCode'));
    } else {
      this.openItemForm(objectId, ComponentOpenMode.Read);
    }
  }

  public openEvolution(objectId: BireEvolutionDTO): void {
    if (objectId && objectId.evolutionNumber && objectId.evolutionRevisionNumber) {
      const bireEvolutionId: BireEvolutionDTOId = {
        evolutionNumber: objectId.evolutionNumber,
        evolutionRevisionNumber: objectId.evolutionRevisionNumber
      };
      this.openEvolutionForm(bireEvolutionId, ComponentOpenMode.Read);
    }
  }

  private openItemForm(objectId: BireItemDTO | undefined, openMode: ComponentOpenMode): void {
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

  private openEvolutionForm(objectId: BireEvolutionDTOId | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_EVOLUTION_FORM,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;
    data.objectId = this.serializationService.serialize(objectId);
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setNavigationLinkList(): void {
    const logisticLabelKey = this.getTranslateKey('logisticView');

    this.translateService.get([logisticLabelKey]).subscribe((results: string[]) => {
      const calibrationLabel = results ? results[logisticLabelKey] : 'Logistic View';

      this.navigationLinkList = [
        {
          label: calibrationLabel,
          command: () => {
            this.openLogisticView(ComponentOpenMode.Read);
          }
        }
      ];
    });
  }

  private setTableOfContent(): void {
    const mainKey = this.getTranslateKey('main');
    const generalKey = this.getTranslateKey('tabGeneral');
    const natoKey = this.getTranslateKey('tabNatoCodes');
    const attributesKey = this.getTranslateKey('tabAttributes');
    const referenceKey = this.getTranslateKey('tabReferenceMeasurements');
    const itemsKey = this.getTranslateKey('tabItems');
    const evolutionsKey = this.getTranslateKey('tabEvolution');
    const documentsKey = this.getTranslateKey('tabDocuments');

    this.translateService
      .get([mainKey, generalKey, natoKey, attributesKey, referenceKey, itemsKey, evolutionsKey, documentsKey])
      .subscribe((results) => {
        const mainLabel = !!results ? results[mainKey] : 'Main Information';
        const generalLabel = !!results ? results[generalKey] : 'General';
        const natoLabel = !!results ? results[natoKey] : 'NATO Codes';
        const attributesLabel = !!results ? results[attributesKey] : 'Attributes';
        const referenceLabel = !!results ? results[referenceKey] : 'Reference Measurements';
        const itemLabel = !!results ? results[itemsKey] : 'Items';
        const evolutionsLabel = !!results ? results[evolutionsKey] : 'Upcoming Events';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';

        this.toc = [
          {
            id: 'mainAnchor',
            anchor: this.mainEltRef,
            label: mainLabel
          },
          {
            id: 'generalAnchor',
            anchor: this.generalEltRef,
            label: generalLabel
          },
          {
            id: 'natoAnchor',
            anchor: this.natoEltRef,
            label: natoLabel
          },
          {
            id: 'attributesAnchor',
            anchor: this.attributesEltRef,
            label: attributesLabel
          },
          {
            id: 'referenceAnchor',
            anchor: this.referenceEltRef,
            label: referenceLabel
          },
          {
            id: 'itemsAnchor',
            anchor: this.itemsEltRef,
            label: itemLabel
          },
          {
            id: 'evolutionsAnchor',
            anchor: this.evolutionsEltRef,
            label: evolutionsLabel
          },
          {
            id: 'documentsAnchor',
            anchor: this.documentsEltRef,
            label: documentsLabel
          }
        ];

        super.selectPageTocEntry(this.component.MAIN_ANCHOR_ID);

        this.updateWorkflowToc();
      });
  }

  private updateWorkflowToc() {
    this.workflowToc = this.applyWorkflowOnPageToc(this.toc);
  }

  private getFlocTypeLabelVal(key: string, ope: number) {
    let str;
    if (ope === 0) {
      str = this.flocTypeMap.filter((res) => res.value === key)[0].label;
    } else if (ope === 1) {
      str = this.flocTypeMap.filter((res) => res.label === key)[0].value;
    }

    return !!str ? str : key;
  }

  private loadPnDocuments(birePnDtoId: BirePnDTOId): void {
    this.pnFormService
      .findBirePnDocs(birePnDtoId)
      .subscribe((bireDocumentDtoArray) =>
        this.documentsTableDataSource.setData(
          bireDocumentDtoArray.map((bireDocumentDto) => this.toDocumentRow(bireDocumentDto))
        )
      );
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSourceWithHistory({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docSource',
          translateKey: this.getTranslateKey('docExternal')
        },
        {
          field: 'docExtension',
          translateKey: this.getTranslateKey('docExtension')
        },
        {
          field: 'docSize',
          translateKey: this.getTranslateKey('docSize')
        },
        {
          field: 'docPublicationDate',
          translateKey: this.getTranslateKey('docPublicationDate')
        },
        {
          field: 'docDescription',
          translateKey: this.getTranslateKey('docDescription')
        }
      ],
      data: []
    });
    this.isReadOnlyDocumentDialog = true;
    this.showAddDocumentDialog = false;
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentsTableDataSource.deleteDataSelection();
      }
    });
  }

  public addDocument(): void {
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public onAddDocument(documentDTO: BireDocumentDTO): void {
    const editedOrAddedDocumentRow = this.toDocumentRow(documentDTO);
    // We are editing an existing document
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.documentsTableDataSource.replaceData(
        this.documentsTableDataSource.dataSelection[0],
        editedOrAddedDocumentRow
      );
    } else {
      // We have just uploaded a new document
      this.documentsTableDataSource.addData([editedOrAddedDocumentRow]);
    }
  }

  public editDocument(): void {
    this.isReadOnlyDocumentDialog = false;
    this.showAddDocumentDialog = true;
  }

  public openDocument(): void {
    this.isReadOnlyDocumentDialog = true;
    this.showAddDocumentDialog = true;
  }

  private toDocumentRow(documentDTO: BireDocumentDTO): DocumentRow {
    return {
      docName: documentDTO.docName,
      docSource: documentDTO.docSource,
      docExtension: FileUtils.getExtension(documentDTO.docName).toUpperCase(),
      docSize: !!documentDTO.docFile ? FileUtils.getFormattedSize(documentDTO.docFile.length) : '',
      docPublicationDate: this.dateService.dateToString(documentDTO.docPublicationDate),
      docDescription: documentDTO.docDescription,
      _obj: documentDTO
    };
  }

  private toDocumentDto(documentRow: DocumentRow): BireDocumentDTO {
    return (!!documentRow._obj && documentRow._obj) || {};
  }

  public downloadFile(document: DocumentRow): void {
    if (!!document._obj) {
      FileUtils.downloadFile(document._obj.docFile, document.docName);
    }
  }

  public showStatus(): void {
    if (!this.isCreateOpenMode) {
      const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
        content: ObjectStatusComponent,
        data: {
          currentAuthor: this.pn.statusUser,
          currentDate: this.pn.statusDate,
          currentStatus: {
            label: this._formatSelectOption.transform(this.pn.statusState, this.workflowStatus),
            value: this.pn.statusState
          },
          nextStatuses: this.workflowStatus
        }
      });

      overlayRef.afterClosed$.subscribe({
        next: (event) => {
          if (event.data) {
            const currentState = this.pn.statusState;
            this.pn.statusState = event.data;
            const saved = this.savePnData();
            if (!saved) {
              // Revert status change if save not launched
              this.pn.statusState = currentState;
            }
          }
        }
      });
    }
  }

  public showCreateProcurementDialog(): void {
    this.createProcurementDialogVisible = true;
  }

  public onCreateProcurementRequest(procurementRequest: BidtProcurementRequestDTO): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PROCUREMENT_REQUEST_FORM,
      objectId: this.serializationService.serialize({ id: procurementRequest.id }),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openGuidelines(rowData: BirePartUpdateGuidelineRow, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.DeaDiaFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_DEA_DIA_FORM,
      objectId: !!rowData ? this.serializationService.serialize(rowData._obj) : undefined,
      openMode
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public addGuidelines() {
    this.isCreatorAndIsFirstAdd = false;
    const birePartUpdateGuidelineRow: BirePartUpdateGuidelineRow = {
      _obj: {
        pnCode: this.pn.pnCode,
        pugStatus: AWPropertiesConstants.DEA_DIA_STATUS_DRAFT
      }
    };
    this.openGuidelines(birePartUpdateGuidelineRow, ComponentOpenMode.Create);
  }

  public deleteGuideline() {
    const partialMessageKey = 'confirmDeleteSelectedGuideline';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.guidelineTableDataSource.dataSelection.forEach((guideline) => {
          if (!!guideline._obj) {
            const guidelineToDelete: BirePartUpdateGuidelineDTOId = {
              mandant: guideline._obj.mandant,
              pugId: guideline._obj.pugId
            };
            this.pnFormService.removeBirePartUpdateGuideline(guidelineToDelete).subscribe(() => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.guidelineTableDataSource.deleteDataSelection();
              this.loadTablesAssociated();
            });
          }
        });
      }
    });
  }

  public editGuidelines(rowData: BirePartUpdateGuidelineRow): void {
    this.openGuidelines(rowData, ComponentOpenMode.Read);
  }

  public isCreator(guideline: BirePartUpdateGuidelineDTO): boolean {
    let isCreator = false;
    if (!!this.user && !!guideline) {
      if (this.user.userId === guideline.requesterId) {
        isCreator = true;
      }
    }

    return isCreator;
  }

  public loadEnableAddButton(): void {
    this.enableAddButton = true;
    if (!!this.birePartUpdateGuidelineDTO) {
      const guidelineWrongStatusToEnableAdd = this.birePartUpdateGuidelineDTO.filter(
        (elt) =>
          (elt.pugStatus as string) !== AWPropertiesConstants.DEA_DIA_STATUS_CLOSED &&
          (elt.pugStatus as string) !== AWPropertiesConstants.DEA_DIA_STATUS_REFUSED
      );
      if (!!guidelineWrongStatusToEnableAdd && guidelineWrongStatusToEnableAdd.length !== 0) {
        this.enableAddButton = false;
      }
    }
  }

  public get enableDeleteButton(): boolean {
    let enableDeleteButton = false;
    if (this.guidelineTableDataSource.dataSelectionCount === 1) {
      if (
        (this.guidelineTableDataSource.dataSelection[0]._obj.pugStatus as string) ===
        AWPropertiesConstants.DEA_DIA_STATUS_DRAFT
      ) {
        enableDeleteButton = true;
      }
    } else {
      enableDeleteButton = false;
    }

    return enableDeleteButton;
  }

  private loadPartGuidelineTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PART_GUIDELINE_TYPE_MAP).subscribe((results) => {
      this.partGuidelineTypes = results;
    });
  }

  private loadPartGuidelineStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.GUIDELINE_STATUS_MAP).subscribe((results) => {
      this.partGuidelineStatus = results;
    });
  }

  private loadUser(): void {
    if (!!this.sessionService.loggedUser) {
      const login = this.sessionService.loggedUser.login;
      this.pnFormService.findBidoUserByLogin(login).subscribe((user) => {
        this.user = user;
      });
    }
  }

  private loadIsController(): void {
    this.isController = this.sessionService.hasUserRightByUseCase(
      BidoFunctionTypeConstants.UC_DEA_DIA_CONTROLLER,
      BidoFunctionTypeConstants.DEGREE_UPDATE
    );
  }

  private loadSparePartClassDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.SPARE_PART_CLASS_CODE).subscribe((results) => {
      this.sparePartClassOptions = results;
    });
  }
}
