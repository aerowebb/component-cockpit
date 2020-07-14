import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UpdateHistoricApi } from '../../../shared/api/update-historic.api';
import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { DialogTableData } from '../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../shared/enums/table-selection-mode.enum';
import { FormatSelectOptionPipe } from '../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../shared/services/update-historic.service';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BireAttributeDTO } from '../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireConcernedAssetDTO } from '../../../shared/types/api-types/bire-concerned-asset-dto.interface';
import { BireDocSbDTOId } from '../../../shared/types/api-types/bire-doc-sb-dto-id.interface';
import { BireDocumentDTO } from '../../../shared/types/api-types/bire-document-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireEvolutionSbDTO } from '../../../shared/types/api-types/bire-evolution-sb-dto.interface';
import { BireMaintenancePlanDTOId } from '../../../shared/types/api-types/bire-maintenance-plan-dto-id.interface';
import { BireMaintenancePlanDTO } from '../../../shared/types/api-types/bire-maintenance-plan-dto.interface';
import { BireSbAttributeDTO } from '../../../shared/types/api-types/bire-sb-attribute-dto.interface';
import { BireSbCounterDTO } from '../../../shared/types/api-types/bire-sb-counter-dto.interface';
import { BireSbDTOId } from '../../../shared/types/api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../../shared/types/api-types/bire-sb-dto.interface';
import { BireSbVariantDTOId } from '../../../shared/types/api-types/bire-sb-variant-dto-id.interface';
import { BireSbVariantDTO } from '../../../shared/types/api-types/bire-sb-variant-dto.interface';
import { HBireSbDTO } from '../../../shared/types/api-types/h-bire-sb-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { DomUtils } from '../../../shared/utils/dom-utils';
import { FileUtils } from '../../../shared/utils/file-utils';
import { TabObjectIdUtils } from '../../../shared/utils/tab-object-id-utils';
import { UrlUtils } from '../../../shared/utils/url-utils';
import { WorkflowUtils } from '../../../shared/utils/workflow-utils';
import { ObjectStatusComponent } from '../../object-status/object-status.component';
import { OverlayService } from '../../overlay/overlay.service';

import { SbadFormMhiaelService } from './sbad-form-mhiael.service';
import { SbadFormService } from './sbad-form.service';

interface DocumentRow {
  docCode?: string;
  docExtension?: string;
  docName?: string;
  docPublicationDate?: string;
  docSize?: string;
  docSource?: string;
  _obj: BireDocumentDTO;
}

interface ApplicabilityRow {
  sbNumber?: string;
  sbRevisionNumber?: string;
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  sbApplicabilityDate: string;
  _obj: BireSbVariantDTO;
}

interface LimitAndPeriodicityRow {
  sbNumber?: string;
  sbRevisionNumber?: string;
  counterCode?: string;
  limitValue?: number;
  limitType?: string;
  limitReferenceDate?: string;
  periodicity?: string;
  comments?: string;
  _obj: BireSbCounterDTO;
}

@Component({
  selector: 'aw-sbad-form',
  templateUrl: './sbad-form.component.html',
  styleUrls: ['./sbad-form.component.scss']
})
export class SbadFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public documentsTableFilteredRowsNb: number;
  public showStatusNotMatchedWarning: boolean;
  public statusNotMatchedWarning: string;

  // Table column fields, align and width
  public evolutionsTableCols: TableColumn[];
  public opeAttributesTableCols: TableColumn[];
  public documentsTableCols: TableColumn[];
  public applicabilitiesTableCols: TableColumn[];
  public assetsTableCols: TableColumn[];
  public limitsPeriodicitiesTableCols: TableColumn[];

  // Selected objects in table
  public selectedEvolutions: BireEvolutionSbDTO[];
  public selectedApplicabilities: ApplicabilityRow[];
  public selectedDocuments: DocumentRow[];
  public selectedAssets: BireConcernedAssetDTO[];
  public selectedLimitsAndPeriodicities: LimitAndPeriodicityRow[];

  public delRow: number;

  // For maintenance program
  public bireMaintenancePlanDTO: BireMaintenancePlanDTO; // TODO
  public showMaintenanceProgramDialog: boolean;

  // For evolution tab
  public currentEvolution: BireEvolutionSbDTO;
  public displayStatusPopup: boolean;
  public currentEvolutionId: string;

  // For document tab
  public showDocumentDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;
  public currentDocument: BireDocumentDTO;
  public currentDocumentIndex: number;

  // For asset tab
  public dataAssets: PopupEntry<BireConcernedAssetDTO>;
  public currentAsset: BireConcernedAssetDTO;
  public currentAssetIndex: number;
  public isNewAsset: boolean;

  // For applicabilities tab
  public dataApplicabilities: PopupEntry<BireSbVariantDTO>;
  public currentApplicabilities: BireSbVariantDTO;
  public currentApplicabilitiesIndex: number;
  public isNewApplicabilities: boolean;

  // For attributes tab
  public attributeIdValueMap: Map<string, string>;
  public bireAttributesForSb: BireAttributeDTO[];
  public bireSbAttributes: BireSbAttributeDTO[];
  public dynamicAttributesForSb: DynamicAttributes[];

  // For Limits and Periodicities tab
  public counterCodeList: LabelValue<string>[];
  public limitType: LabelValue<string>[];
  public limitRefernceType: LabelValue<string>[];
  public currentLimitAndPeriodicity: BireSbCounterDTO;
  public showLimitAndPeriodicityDialog: boolean;
  public isNewLimitAndPeriodicity: boolean;
  public currentLimitAndPeriodicityIndex: number;
  public dataLimitAndPeriodicity: PopupEntry<BireSbCounterDTO>;

  // DTO objects from database
  public bireSb: BireSbDTO;
  public bireEvolutionSbs: BireEvolutionSbDTO[];
  public bireDocument: BireDocumentDTO[];
  public bireConcernedAsset: BireConcernedAssetDTO[];
  public bireSbVariants: BireSbVariantDTO[];

  // DTO objects for display
  public bireSbDisplayed: BireSbDTO;
  public bireEvolutionSbsDisplayed: BireEvolutionSbDTO[];
  public bireDocumentDisplayed: DocumentRow[];
  public bireConcernedAssetDisplayed: BireConcernedAssetDTO[];
  public bireSbVariantsDisplayed: ApplicabilityRow[];
  public newAttributeDisplayed: string;
  public limitsAndApplicabilitiesDisplayed: LimitAndPeriodicityRow[];

  // DTO objects for database
  public bireSbId: BireSbDTOId;
  private bireSbVariantAddedList: BireSbVariantDTO[];
  private bireSbVariantUpdatedList: BireSbVariantDTO[];
  private bireSbVariantDeletedList: BireSbVariantDTOId[];
  private bireDocumentAddedList: BireDocumentDTO[];
  private bireDocumentUpdatedList: BireDocumentDTO[];
  private bireDocDeletedList: BireDocSbDTOId[];
  private bireConcernedAssetAddedList: BireConcernedAssetDTO[];
  private readonly familyCode: string;
  private readonly structureType: string;
  private readonly variantCode: string;

  // DropDown list of label
  public propertyType: LabelValue<string>[];
  public propertySubType: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public workflowStatus: LabelValue<string>[];
  public propertyClass: LabelValue<string>[];
  public propertyCompliance: LabelValue<string>[];
  public propertyActionType: LabelValue<string>[];

  // For tab context
  public subTitle: string;

  // For object status/updates popup
  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HBireSbDTO>;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public showApplicabilitiesDialog: boolean;
  public showAssetDialog: boolean;
  public isAD: boolean;
  public showGenerateCommentPopup: boolean;
  public comment: PopupEntry<string>;
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public inputValidationService: InputValidationService,
    public readonly sbadFormService: SbadFormService,
    private readonly sbadFormMhiaelService: SbadFormMhiaelService,
    public readonly propertiesService: PropertiesService,
    public translateService: TranslateService,
    public dynamicAttributesService: DynamicAttributesService,
    private readonly confirmationService: ConfirmationService,
    public sessionService: SessionService,
    public dateService: DateService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    pageTocService: PageTocService,
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
    this.isAD = false;
    this.showApplicabilitiesDialog = false;
    this.showAssetDialog = false;

    this.showMaintenanceProgramDialog = false;
    this.bireMaintenancePlanDTO = {};
    this.displayStatusPopup = false;

    // Init DTO objects
    this.bireSb = {};
    this.initSbDisplayed();

    // Init differents tables
    this.selectedEvolutions = [];
    this.selectedApplicabilities = [];
    this.selectedAssets = [];
    this.selectedLimitsAndPeriodicities = [];
    this.selectedDocuments = [];

    this.bireSbVariantAddedList = [];
    this.bireSbVariantUpdatedList = [];
    this.bireSbVariantDeletedList = [];

    this.bireDocumentAddedList = [];
    this.bireDocumentUpdatedList = [];
    this.bireDocDeletedList = [];

    this.bireConcernedAssetAddedList = [];
    this.bireConcernedAssetDisplayed = [];
    this.limitsAndApplicabilitiesDisplayed = [];

    this.bireDocumentDisplayed = [];
    this.bireEvolutionSbsDisplayed = [];
    this.bireSbVariantsDisplayed = [];

    // Attributes init
    this.attributeIdValueMap = new Map<string, string>();
    this.bireAttributesForSb = [];
    this.dynamicAttributesForSb = [];
    this.bireSbAttributes = [];
    this.getBireAttributesForSb();
    // Fill table column information
    this.initTableColumnField();

    this.documentsTableFilteredRowsNb = 0;
    this.delRow = 0;

    // Loading all DropDown list
    this.propertyStatus = [];
    this.loadStatus(AWPropertiesConstants.OBJECT_STATUS_LOADED_KEY);
    this.loadClassifications();
    this.loadTypes();
    this.loadSubTypes();
    this.loadCompliances();
    this.loadActionTypes();

    // Loading all needed DTO objects
    this.bireDocument = [];

    // For status/updates popup
    this.showStatusUpdatesPopup = false;
    this.deleteApi = this.updateHistoricApi.removeBireSbHistory;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    // Lang change events
    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      // Reset the right attribute name regarding the langage
      this.dynamicAttributesForSb = this.dynamicAttributesService.from(this.bireAttributesForSb);
      this.getBireSbAttributes();
    });

    this.userWorkflowSubject.pipe(takeUntil(this.unsubscribe)).subscribe((_userWorkflow) => {
      this.updateWorkflowStatusList();
    });
  }

  public showSubType(): boolean {
    return false;
  }

  public showContext(): boolean {
    return false;
  }

  public showGuideline(): boolean {
    return false;
  }

  private initSbDisplayed() {
    this.bireSbDisplayed = {
      statusState: AWPropertiesConstants.FUNC_OBJECT_STATUS_ONGOING
    };
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_SBAD_FORM;
  }

  private init(): void {
    // Init DTO objects
    this.bireSb = {};
    this.bireSbDisplayed = {};

    // Init differents tables
    this.selectedEvolutions = [];
    this.selectedApplicabilities = [];
    this.selectedAssets = [];
    this.selectedLimitsAndPeriodicities = [];
    this.selectedDocuments = [];

    this.bireSbVariantAddedList = [];
    this.bireSbVariantUpdatedList = [];
    this.bireSbVariantDeletedList = [];

    this.bireDocumentAddedList = [];
    this.bireDocumentUpdatedList = [];
    this.bireDocDeletedList = [];

    this.bireConcernedAssetAddedList = [];
    this.bireConcernedAssetDisplayed = [];
    this.limitsAndApplicabilitiesDisplayed = [];

    this.bireDocumentDisplayed = [];
    this.bireEvolutionSbsDisplayed = [];
    this.bireSbVariantsDisplayed = [];
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.bireSbDisplayed.sbType = undefined;
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      let context = '';
      if (this.componentData.objectId) {
        const tempContext = TabObjectIdUtils.bireSbDTOIdToString(
          this.serializationService.deserialize(this.componentData.objectId)
        ).split('|');
        tempContext.forEach((element) => {
          context += element + TabObjectIdUtils.CONTEXT_SEPARATOR;
        });
        context = context.substring(0, context.length - 1);
        this.subTitle = context;
        this.findBireSb();
      } else {
        this.loadUserWorkflow(this.bireSbDisplayed.statusState);
        context = 'tab.createMode';
        this.getLimitAndPeriodicityLists(undefined);
      }
      this.displayComponentContext(context, this.isCreateOpenMode);
    } else {
      // TODO
    }
  }

  private initTableColumnField() {
    this.evolutionsTableCols = [
      { field: 'evolutionNumber', alignment: 'left', width: '20%' },
      { field: 'evolutionRevisionNumber', alignment: 'left', width: '20%' },
      // { field: 'statusState', alignment: 'left' },
      { field: 'sbTitle', alignment: 'left', width: '50%' }
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

    this.applicabilitiesTableCols = [
      { field: 'familyCode', alignment: 'left' },
      { field: 'structureType', alignment: 'left' },
      { field: 'variantCode', alignment: 'left' },
      { field: 'sbApplicabilityDate', alignment: 'left' }
    ];

    this.assetsTableCols = [
      { field: 'assetPn', alignment: 'left' },
      { field: 'assetSn', alignment: 'left' },
      { field: 'assetActionType', alignment: 'left' }
    ];

    this.limitsPeriodicitiesTableCols = [
      { field: 'counterCode', alignment: 'left', width: '20%' },
      { field: 'limitValue', alignment: 'left', width: '15%' },
      { field: 'limitType', alignment: 'left', width: '15%' },
      { field: 'limitReferenceDate', alignment: 'left', width: '15%' },
      { field: 'periodicity', alignment: 'left', width: '15%' },
      { field: 'comments', alignment: 'left', width: '20%' }
    ];
  }

  public showMaintenanceProgram(event: MouseEvent): void {
    if (!DomUtils.isTargetDisabled(event.target)) {
      this.showMaintenanceProgramDialog = true;
    }
  }

  // tslint:disable-next-line:no-any
  public onFilterDocumentsTable(event: any): void {
    this.documentsTableFilteredRowsNb = event.filteredValue.length;
  }

  public cancel(): void {
    this.clearErrors();
    if (this.isCreateOpenMode) {
      this.init();
      this.initAttributeValue();
    } else {
      this.ngOnInit();
      this.updateOpenMode(ComponentOpenMode.Read);
    }
  }

  private initAttributeValue(): void {
    const leafs = this.dynamicAttributesService.getLeafs(this.dynamicAttributesForSb);

    leafs.forEach((attribute) => {
      attribute.value = undefined;
    });
  }

  public edit(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public refresh(): void {
    if (this.componentData.objectId) {
      this.findBireSb();
    } else {
      this.initSbDisplayed();
    }
  }

  public upgradeSb(): void {
    // Call backend to upgrade an SB/AD
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('sbConfirmUpgrade'),
      accept: () => {
        this.sbadFormService.checkSbAdRevisionNumber(this.bireSb).subscribe(
          (sbRevisionNumber) => {
            if (sbRevisionNumber !== null && sbRevisionNumber !== undefined) {
              this.sbadFormService.upgradeSbAd(this.bireSb, sbRevisionNumber).subscribe(
                (bireSb) => {
                  this.bireSb = { ...bireSb };
                  this.bireSbDisplayed = { ...bireSb };
                  setTimeout(() => {
                    const bireSbId: BireSbDTOId = {
                      sbNumber: this.bireSb.sbNumber || '',
                      sbRevisionNumber: this.bireSb.sbRevisionNumber || ''
                    };

                    this.componentData.objectId = this.serializationService.serialize(bireSbId);
                    this.refresh();
                  });
                  this.messageService.showSuccessMessage(this.getTranslateKey('sbUpgraded'));
                },
                () => {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnUpgraded'));
                }
              );
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('sbRevisionNumberNotCorrect'));
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnCheck'));
          }
        );
      }
    });
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '14rem', filterMode: TableColumnFilterMode.Input, isDate: true, alignment: 'left' },
      { field: 'statusUser', width: '13rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '6rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', width: '6rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbTitle', width: '32rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbType', width: '6rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      {
        field: 'sbPublicationDate',
        width: '13rem',
        filterMode: TableColumnFilterMode.Input,
        isDate: true,
        alignment: 'left'
      },
      {
        field: 'sbEffectiveDate',
        width: '13rem',
        filterMode: TableColumnFilterMode.Input,
        isDate: true,
        alignment: 'left'
      },
      { field: 'sbCompliance', width: '16rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbComplianceStatus', width: '16rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbComplianceInformation', width: '13rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbClass', width: '13rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'sbDocumentUrl', width: '24rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'hoursLimit', width: '6rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'cyclesLimit', width: '6rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      {
        field: 'limitComplianceDate',
        width: '13rem',
        filterMode: TableColumnFilterMode.Input,
        isDate: true,
        alignment: 'left'
      },
      { field: 'sbAssets', width: '16rem', filterMode: TableColumnFilterMode.Input, alignment: 'left' }
    ];
    this.updatesKeyMap.set('sbType', this.propertiesService.getValue('getSbTypeMap'));
    this.updatesKeyMap.set('sbCompliance', this.propertiesService.getValue('getComplianceMap'));
    this.updatesKeyMap.set('sbClass', this.propertiesService.getValue('getSbClassificationMap'));
    this.tableStatusUpdatesData = {
      componentId: 'SbadFormComponent.historicPopup',
      tableCols: columns,
      tableRows: this.updateHistoricService.findBireSbHistoric(this.bireSbId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  public setSelectedMaintenanceProgram(event: BireMaintenancePlanDTO): void {
    this.bireMaintenancePlanDTO = event;
  }

  /***********************************************************************************
   * Evolutions Tab
   ***********************************************************************************/

  public displayStatusForEvolution(): void {
    if (!!this.selectedEvolutions && this.selectedEvolutions.length === 1) {
      this.currentEvolution = { ...this.selectedEvolutions[0] };

      const statusObj = this.propertyStatus.filter(
        (status) => status.label === this.selectedEvolutions[0].statusState
      )[0];
      this.currentEvolution.statusState = statusObj && statusObj.value;

      this.currentEvolutionId =
        `Evolution ${this.currentEvolution.evolutionNumber}` + ` - ${this.currentEvolution.evolutionRevisionNumber}`;
      this.displayStatusPopup = true;
    }
  }

  public openStatusPopup(bireEvolutionSb: BireEvolutionSbDTO): void {
    this.currentEvolution = { ...bireEvolutionSb };

    const statusObj = this.propertyStatus.filter((status) => status.label === bireEvolutionSb.statusState)[0];
    this.currentEvolution.statusState = statusObj && statusObj.value;

    this.currentEvolutionId =
      `Evolution ${this.currentEvolution.evolutionNumber}` + ` - ${this.currentEvolution.evolutionRevisionNumber}`;
    this.displayStatusPopup = true;
  }

  /***********************************************************************************
   * Applicabilities Tab
   ***********************************************************************************/

  private getCustomApplicabilityRow(obj: BireSbVariantDTO): ApplicabilityRow {
    return {
      _obj: obj,
      sbNumber: obj.sbNumber,
      sbRevisionNumber: obj.sbRevisionNumber,
      familyCode: obj.familyCode,
      structureType: obj.structureType,
      variantCode: obj.variantCode,
      sbApplicabilityDate: this.dateService.dateToString(obj.sbApplicabilityDate)
    };
  }

  public createApplicabilities(): void {
    this.currentApplicabilities = {};
    this.showApplicabilitiesDialog = true;
    this.isNewApplicabilities = true;
    this.dataApplicabilities = {
      componentId: this.getComponentName(),
      selectedRow: undefined,
      object: this.currentApplicabilities,
      openMode: ComponentOpenMode.Write
    };
  }
  public editApplicabilities(): void {
    this.isNewApplicabilities = false;
    if (this.selectedApplicabilities.length === 1) {
      // Copy all the selectedApplicabilities[0] field into currentApplicabilities one by one
      this.currentApplicabilities = { ...this.selectedApplicabilities[0]._obj };

      this.currentApplicabilitiesIndex = this.bireSbVariantsDisplayed.indexOf(this.selectedApplicabilities[0]);
      this.showApplicabilitiesDialog = true;
      this.dataApplicabilities = {
        componentId: this.getComponentName(),
        selectedRow: [this.selectedApplicabilities[0]._obj],
        object: this.currentApplicabilities,
        openMode: ComponentOpenMode.Write
      };
    }
  }
  public openApplicabilities(): void {
    if (this.selectedApplicabilities.length === 1) {
      this.currentApplicabilities = { ...this.selectedApplicabilities[0]._obj };

      this.currentAssetIndex = this.bireConcernedAssetDisplayed.indexOf(this.selectedApplicabilities[0]);
      this.showApplicabilitiesDialog = true;
      this.dataApplicabilities = {
        componentId: this.getComponentName(),
        selectedRow: [this.selectedApplicabilities[0]._obj],
        object: this.currentApplicabilities,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  /*
        Sb variant handler functions
    */
  public addNewSbVariant(newSbVariant: BireSbVariantDTO) {
    const searchInDisplayedList = this.bireSbVariantsDisplayed.find(
      (value) =>
        value.sbNumber === newSbVariant.sbNumber &&
        value.sbRevisionNumber === newSbVariant.sbRevisionNumber &&
        value.variantCode === newSbVariant.variantCode &&
        value.familyCode === newSbVariant.familyCode &&
        value.familyCode === newSbVariant.familyCode
    );
    if (!searchInDisplayedList) {
      this.bireSbVariantAddedList.push(newSbVariant);
      this.bireSbVariantsDisplayed.push(this.getCustomApplicabilityRow(newSbVariant));
    } else {
      // TODO case: There is already a sbVariant with this value...
    }
  }
  public deleteSelectedSbVariants() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedSbVariants'),
      accept: () => {
        this.selectedApplicabilities.forEach((element) => {
          const sbVariantId: BireSbVariantDTOId = {
            sbNumber: element.sbNumber || '',
            sbRevisionNumber: element.sbRevisionNumber || '',
            variantCode: element.variantCode || '',
            familyCode: element.familyCode || '',
            structureType: element.structureType || ''
          };
          const searchInAddedList = this.bireSbVariantAddedList.find(
            (value) =>
              value.sbNumber === element.sbNumber &&
              value.sbRevisionNumber === element.sbRevisionNumber &&
              value.variantCode === element.variantCode &&
              value.familyCode === element.familyCode &&
              value.familyCode === element.familyCode
          );
          const searchInUpdatedList = this.bireSbVariantUpdatedList.find(
            (value) =>
              value.sbNumber === element.sbNumber &&
              value.sbRevisionNumber === element.sbRevisionNumber &&
              value.variantCode === element.variantCode &&
              value.familyCode === element.familyCode &&
              value.familyCode === element.familyCode
          );
          if (searchInAddedList) {
            const indexInAddedList = this.bireSbVariantAddedList.indexOf(searchInAddedList);
            this.bireSbVariantAddedList.splice(indexInAddedList, 1);
          } else if (searchInUpdatedList) {
            const indexInUpdatedList = this.bireSbVariantUpdatedList.indexOf(searchInUpdatedList);
            this.bireSbVariantUpdatedList.splice(indexInUpdatedList, 1);
            this.bireSbVariantDeletedList.push(sbVariantId);
          } else {
            this.bireSbVariantDeletedList.push(sbVariantId);
          }
          const indexInDisplayedList = this.bireSbVariantsDisplayed.indexOf(element);
          this.bireSbVariantsDisplayed.splice(indexInDisplayedList, 1);
        });
        this.bireSbVariantDeletedList = [...this.bireSbVariantDeletedList];
        this.selectedApplicabilities = [];
      }
    });
  }
  public updateSbVariant(udpatedSbVariant: BireSbVariantDTO) {
    const previousSbVariantObject = this.bireSbVariantsDisplayed[this.currentApplicabilitiesIndex];
    const searchInAddedList = this.bireSbVariantAddedList.find(
      (value) =>
        value.sbNumber === previousSbVariantObject.sbNumber &&
        value.sbRevisionNumber === previousSbVariantObject.sbRevisionNumber &&
        value.variantCode === previousSbVariantObject.variantCode &&
        value.familyCode === previousSbVariantObject.familyCode &&
        value.familyCode === previousSbVariantObject.familyCode
    );
    const searchInUpdatedList = this.bireSbVariantUpdatedList.find(
      (value) =>
        value.sbNumber === previousSbVariantObject.sbNumber &&
        value.sbRevisionNumber === previousSbVariantObject.sbRevisionNumber &&
        value.variantCode === previousSbVariantObject.variantCode &&
        value.familyCode === previousSbVariantObject.familyCode &&
        value.familyCode === previousSbVariantObject.familyCode
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bireSbVariantAddedList.indexOf(searchInAddedList);
      this.bireSbVariantAddedList[indexInAddedList] = udpatedSbVariant;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bireSbVariantUpdatedList.indexOf(searchInUpdatedList);
      this.bireSbVariantUpdatedList[indexInUpdatedList] = udpatedSbVariant;
    } else {
      this.bireSbVariantUpdatedList.push(udpatedSbVariant);
    }
    this.selectedApplicabilities = [];
    this.bireSbVariantsDisplayed[this.currentApplicabilitiesIndex] = this.getCustomApplicabilityRow(udpatedSbVariant);
  }

  /***********************************************************************************
   * Assets Tab
   ***********************************************************************************/
  public createAsset(): void {
    this.currentAsset = {};
    this.showAssetDialog = true;
    this.isNewAsset = true;
    this.dataAssets = {
      componentId: this.getComponentName(),
      selectedRow: undefined,
      object: this.currentAsset,
      openMode: ComponentOpenMode.Write
    };
  }
  public editAsset(): void {
    this.isNewAsset = false;
    if (this.selectedAssets.length === 1) {
      // Copy all the selectedAssets[0] field into currentAsset one by one
      this.currentAsset = { ...this.selectedAssets[0] };

      const filteredAction = this.propertyActionType.filter(
        (actionType) => actionType.label === this.currentAsset.assetActionType
      );

      if (filteredAction && filteredAction.length > 0 && filteredAction[0]) {
        this.currentAsset.assetActionType = filteredAction[0].value;
      }

      this.currentAssetIndex = this.bireConcernedAssetDisplayed.indexOf(this.selectedAssets[0]);
      this.showAssetDialog = true;
      this.dataAssets = {
        componentId: this.getComponentName(),
        selectedRow: this.selectedAssets,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Write
      };
    }
  }
  public openAsset(): void {
    if (this.selectedAssets.length === 1) {
      this.currentAsset = { ...this.selectedAssets[0] };
      const filteredAction = this.propertyActionType.filter(
        (actionType) => actionType.label === this.currentAsset.assetActionType
      );

      if (filteredAction && filteredAction.length > 0 && filteredAction[0]) {
        this.currentAsset.assetActionType = filteredAction[0].value;
      }
      this.currentAssetIndex = this.bireConcernedAssetDisplayed.indexOf(this.selectedAssets[0]);
      this.showAssetDialog = true;
      this.dataAssets = {
        componentId: this.getComponentName(),
        selectedRow: this.selectedAssets,
        object: this.currentAsset,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  /*
        Concerned asset handler functions
    */
  public deleteSelectedConcernedAssets() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedConcernedAssets'),
      accept: () => {
        this.selectedAssets.forEach((element) => {
          const indexInDisplayedList = this.bireConcernedAssetDisplayed.indexOf(element);
          this.bireConcernedAssetDisplayed.splice(indexInDisplayedList, 1);
        });
        this.bireConcernedAssetAddedList = this.bireConcernedAssetDisplayed;
        this.selectedAssets = [];
      }
    });
  }
  public addNewConcernedAsset(concernedAsset: BireConcernedAssetDTO) {
    if (concernedAsset.assetActionType) {
      concernedAsset.assetActionType = this.propertyActionType.filter(
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
      concernedAsset.assetActionType = this.propertyActionType.filter(
        (actionType) => actionType.value === concernedAsset.assetActionType
      )[0].label;
    }

    this.bireConcernedAssetDisplayed[this.currentAssetIndex] = concernedAsset;
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
            const bireDocSbId: BireDocSbDTOId = {
              sbNumber: this.bireSbId.sbNumber,
              sbRevisionNumber: this.bireSbId.sbRevisionNumber,
              docCode: element.docCode || ''
            };
            this.bireDocDeletedList.push(bireDocSbId);
          } else {
            const bireDocSbId: BireDocSbDTOId = {
              sbNumber: this.bireSbId.sbNumber,
              sbRevisionNumber: this.bireSbId.sbRevisionNumber,
              docCode: element.docCode || ''
            };
            this.bireDocDeletedList.push(bireDocSbId);
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

  /***********************************************************************************
   * Attributes Tab
   ***********************************************************************************/
  // Get differents attributes list for this object
  public getBireAttributesForSb(): void {
    const param: string[] = [
      AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY,
      AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_SB_KEY
    ];
    this.sbadFormService.findBireAttributesByCategoryList(param).subscribe(
      (results) => {
        this.bireAttributesForSb.push(...results);
        setTimeout(() => {
          this.dynamicAttributesForSb = this.dynamicAttributesService.from(this.bireAttributesForSb);
          this.getBireSbAttributes();
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
    /*this.sbadFormService.findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY).subscribe(
      (results) => {
        this.bireAttributesForSb.push(...results);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );
    this.sbadFormService.findBireAttributesByCategory(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_SB_KEY).subscribe(
      (results) => {
        this.bireAttributesForSb.push(...results);
        setTimeout(() => {
          this.dynamicAttributesForSb = this.dynamicAttributesService.from(this.bireAttributesForSb);
          this.getBireSbAttributes();
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByCategory'));
      }
    );*/
  }

  public getBireSbAttributes(): void {
    this.sbadFormService.findBireSbAttributesBySb(this.bireSb).subscribe(
      (results) => {
        this.bireSbAttributes = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributesForSb, this.bireSbAttributes);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesBySb'));
      }
    );
  }

  public initAttributeIdValueMap() {
    // Real code
    this.bireSbAttributes.forEach((element) => {
      if (!!element.attributeId) {
        this.attributeIdValueMap.set(element.attributeId, element.attributeValue || '');
      }
    });
  }

  /***********************************************************************************
   * BackEnd functions
   ***********************************************************************************/
  private loadStatus(statusState: string): void {
    this.propertiesService.getObjectStatusList(true, false, false, statusState, false).subscribe(
      (results) => {
        if (results) {
          results.forEach((element) => {
            if (this.propertyStatus.filter((status) => status.value === element.value).length === 0) {
              this.propertyStatus.push(element);
            }
          });
          this.propertyStatus = [...this.propertyStatus];
          this.updateWorkflowStatusList();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetStatusList'));
      }
    );
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.propertyStatus,
      this.bireSbDisplayed.statusState
    );
  }

  public loadTypes(): void {
    this.propertiesService.getValue('getSbTypeMap').subscribe(
      (results) => {
        if (results) {
          this.propertyType = results.filter(
            (type) =>
              type.value !== AWPropertiesConstants.SB_TYPE_AD_KEY &&
              type.value !== AWPropertiesConstants.SB_TYPE_AMG_KEY
          );
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }

  public loadSubTypes(): void {
    this.propertiesService.getValue('getAdditionalGuidelineSubTypeMap').subscribe(
      (results) => {
        if (results) {
          this.propertySubType = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSbTypeList'));
      }
    );
  }

  private loadCompliances(): void {
    this.propertiesService.getValue('getComplianceMap').subscribe(
      (results) => {
        if (results) {
          this.propertyCompliance = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnComplianceList'));
      }
    );
  }

  private loadClassifications(): void {
    this.propertiesService.getValue('getSbClassificationMap').subscribe(
      (results) => {
        if (results) {
          this.propertyClass = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnClassificationList'));
      }
    );
  }

  private loadActionTypes(): void {
    this.propertiesService.getValue('getAssetActionTypeMap').subscribe(
      (results) => {
        this.propertyActionType = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnActionTypeList'));
      }
    );
  }

  private findBireSb(): void {
    // ObjectId[0] -> sbNumber & ObjectId[1] -> sbRevisionNumber
    if (!!this.componentData.objectId) {
      this.bireSbId = this.serializationService.deserialize(this.componentData.objectId);
    }

    this.sbadFormService.findBireSb(this.bireSbId).subscribe(
      (result) => {
        this.bireSb = result;
        this.loadUserWorkflow(this.bireSb.statusState);
        if (this.bireSb.sbPublicationDate) {
          this.bireSb.sbPublicationDate = new Date(this.bireSb.sbPublicationDate.toString());
        }
        if (this.bireSb.statusDate) {
          this.bireSb.statusDate = new Date(this.bireSb.statusDate.toString());
        }
        if (this.bireSb.sbEffectiveDate) {
          this.bireSb.sbEffectiveDate = new Date(this.bireSb.sbEffectiveDate.toString());
        }
        if (this.bireSb.limitComplianceDate) {
          this.bireSb.limitComplianceDate = new Date(this.bireSb.limitComplianceDate.toString());
        }
        if (this.propertyStatus.filter((status) => status.value === this.bireSb.statusState).length === 0) {
          if (this.bireSb.statusState) {
            this.loadStatus(this.bireSb.statusState);
          }
        }

        this.bireSbDisplayed = { ...this.bireSb };
        if (this.bireSb) {
          this.findBireEvolutionsSbsBySb();
          this.findBireDocumentsBySb();
          this.findBireConcernedAssetsBySb();
          this.findBireSbVariantsBySbNumbers();
          this.getBireSbAttributes();
          this.findBireSbCountersBySb();
          this.findBireSbMaintenancePlan();
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireSb'));
      }
    );
  }

  private findBireSbMaintenancePlan() {
    if (this.bireSb) {
      const bireSbDTOId: BireSbDTOId = {
        sbNumber: this.bireSb.sbNumber || '',
        sbRevisionNumber: this.bireSb.sbRevisionNumber || ''
      };

      this.sbadFormService.findBireSbMaintenancePlanBySb(bireSbDTOId).subscribe((result) => {
        this.bireMaintenancePlanDTO = result || {};
      });
    }
  }

  private findBireEvolutionsSbsBySb(): void {
    this.showStatusNotMatchedWarning = false;
    this.statusNotMatchedWarning = '';
    this.sbadFormService.findBireEvolutionSbsBySb(this.bireSb).subscribe(
      (results) => {
        this.bireEvolutionSbs = results;
        this.bireEvolutionSbs.forEach((element) => {
          if (element.statusDate) {
            element.statusDate = new Date(element.statusDate.toString());
          }
        });
        this.bireEvolutionSbsDisplayed = [...this.bireEvolutionSbs];
        this.bireEvolutionSbsDisplayed.forEach((element) => {
          if (this.bireSb.statusState !== element.statusState) {
            this.showStatusNotMatchedWarning = true;
            const statusKey = this.getTranslateKey('statusNotMatchedMessage');
            this.translateService.get(statusKey).subscribe((result: string) => {
              this.statusNotMatchedWarning = result;
            });
          }
          const statusObj = this.propertyStatus.filter((status) => status.value === element.statusState)[0];
          element.statusState = statusObj && statusObj.label;
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireEvolutionSbsBySb'));
      }
    );
  }

  private findBireDocumentsBySb(): void {
    this.sbadFormService.findBireDocumentsBySb(this.bireSb).subscribe(
      (results) => {
        this.bireDocument = results;
        this.bireDocument.forEach((element) => {
          if (element && element.docPublicationDate) {
            element.docPublicationDate = new Date(element.docPublicationDate.toString());
          } else {
            // TODO: Investigation: I don't know why the last element of result table is undefined...
            this.bireDocument.pop();
          }
        });

        this.bireDocumentDisplayed = [];
        this.bireDocument.forEach((doc) => {
          this.bireDocumentDisplayed.push(this.getCustomDocumentRow(doc));
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireDocSbsBySb'));
      }
    );
  }

  private findBireConcernedAssetsBySb(): void {
    this.sbadFormService.findBireConcernedAssetsBySb(this.bireSb).subscribe(
      (results) => {
        this.bireConcernedAsset = results;
        results.forEach((element) => {
          if (element.assetActionType) {
            const actionObj = this.propertyActionType.filter(
              (actionType) => actionType.value === element.assetActionType
            )[0];
            element.assetActionType = actionObj && actionObj.label;
          }
        });
        this.bireConcernedAssetDisplayed = [...results];
        this.bireConcernedAssetAddedList = this.bireConcernedAssetDisplayed;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireConcernedAssetsBySb'));
      }
    );
  }

  private findBireSbVariantsBySbNumbers(): void {
    this.sbadFormService.findBireSbVariantsBySbNumbers(this.bireSb).subscribe(
      (results) => {
        this.bireSbVariants = results;
        this.bireSbVariants.forEach((element) => {
          if (element.sbApplicabilityDate) {
            element.sbApplicabilityDate = new Date(element.sbApplicabilityDate.toString());
          }
          if (element.statusDate) {
            element.statusDate = new Date(element.statusDate.toString());
          }
        });

        this.bireSbVariantsDisplayed = [];
        this.bireSbVariants.forEach((doc) => {
          this.bireSbVariantsDisplayed.push(this.getCustomApplicabilityRow(doc));
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindBireSbVariantsBySbNumber'));
      }
    );
  }

  private isOneRequiredFieldNull() {
    return !this.bireSbDisplayed.sbNumber || !this.bireSbDisplayed.sbRevisionNumber;
  }

  public openUrl(): void {
    UrlUtils.openUrl(this.bireSbDisplayed.sbDocumentUrl);
  }

  public saveSbAdData(): boolean {
    let saved = false;
    const missingFields = this.checkMandatoryFields({
      ...this.bireSbDisplayed,
      planCode: this.bireMaintenancePlanDTO.planCode,
      bireEvolutionSbsDisplayedTitle: this.bireEvolutionSbsDisplayed,
      bireSbVariantsDisplayedTitle: this.bireSbVariantsDisplayed,
      limitsAndApplicabilitiesDisplayedTitle: this.limitsAndApplicabilitiesDisplayed,
      bireConcernedAssetDisplayedTitle: this.bireConcernedAssetDisplayed,
      bireDocumentDisplayedTitle: this.bireDocumentDisplayed,
      dynamicAttributes: this.dynamicAttributesForSb
    });
    if ((this.isCreateOpenMode && this.isOneRequiredFieldNull()) || missingFields.length > 0) {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnRequiredField'));
    } else {
      if (!!this.bireSbDisplayed.sbDocumentUrl && !UrlUtils.validateUrl(this.bireSbDisplayed.sbDocumentUrl)) {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnInvalidUrl'));

        return saved;
      }
      this.bireSbId = {
        sbNumber: this.bireSbDisplayed.sbNumber || '',
        sbRevisionNumber: this.bireSbDisplayed.sbRevisionNumber || ''
      };
      // Add the link between the sbad and the bireConcernedAsset added elements
      this.bireConcernedAssetAddedList.forEach((element) => {
        element.sbNumber = this.bireSbDisplayed.sbNumber;
        element.sbRevisionNumber = this.bireSbDisplayed.sbRevisionNumber;
        if (element.assetActionType) {
          element.assetActionType = this.propertyActionType.filter(
            (action) => action.label === element.assetActionType
          )[0].value;
        }
      });

      // Add the link between the sbad and the sbVariant added elements
      this.bireSbVariantAddedList.forEach((element) => {
        element.sbNumber = this.bireSbDisplayed.sbNumber;
        element.sbRevisionNumber = this.bireSbDisplayed.sbRevisionNumber;
      });

      // Test attribute
      this.bireSbAttributes = this.dynamicAttributesService.toBireSbAttribute(
        this.bireSbDisplayed.sbNumber || '',
        this.bireSbDisplayed.sbRevisionNumber || '',
        this.dynamicAttributesForSb
      );

      let bireMaintenancePlanDTOId: BireMaintenancePlanDTOId | undefined;
      if (this.bireMaintenancePlanDTO && this.bireMaintenancePlanDTO.planCode) {
        bireMaintenancePlanDTOId = { planCode: this.bireMaintenancePlanDTO.planCode };
      }

      this.showSaveSpinner = true;
      this.sbadFormService
        .saveSbAdData(
          this.bireSbDisplayed,
          this.bireSbId,
          this.bireSbVariantAddedList,
          this.bireSbVariantUpdatedList,
          this.bireSbVariantDeletedList,
          this.bireDocumentAddedList,
          this.bireDocumentUpdatedList,
          this.bireDocDeletedList,
          this.bireConcernedAssetAddedList,
          this.familyCode,
          this.structureType,
          this.variantCode,
          this.bireSbAttributes,
          this.getAllSbLimitsAndPriodicities(),
          bireMaintenancePlanDTOId,
          !this.isCreateOpenMode
        )
        .subscribe(
          (result) => {
            // SUCCEED CASE
            this.initializeObjectsAfterSave();
            this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessSave'));
            this.showSaveSpinner = false;
            this.updateOpenMode(ComponentOpenMode.Read);
          },
          (error) => {
            if (error && error.error && error.error.errorDesc) {
              this.messageService.showErrorMessage(error.error.errorDesc);
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveSbAdData'));
            }
            this.showSaveSpinner = false;
          }
        );
      saved = true;

      if (
        this.bireSbDisplayed.statusState === AWPropertiesConstants.FUNC_OBJECT_STATUS_APPROVED_KEY &&
        this.sessionService.isSpecificMHIAEL
      ) {
        this.sbadFormMhiaelService.updateSBADCsv(this.bireSb).subscribe();
      }

      // Reset label instead of value
      this.bireConcernedAssetAddedList.forEach((element) => {
        element.assetActionType = this.propertyActionType.filter(
          (action) => action.value === element.assetActionType
        )[0].label;
      });
    }

    return saved;
  }

  private getAllSbLimitsAndPriodicities(): BireSbCounterDTO[] {
    const bireSbCounterDTO: BireSbCounterDTO[] = [];
    if (!!this.limitsAndApplicabilitiesDisplayed) {
      this.limitsAndApplicabilitiesDisplayed.forEach((element) => {
        element._obj.sbNumber = this.bireSbDisplayed.sbNumber;
        element._obj.sbRevisionNumber = this.bireSbDisplayed.sbRevisionNumber;
        bireSbCounterDTO.push(element._obj);
      });
    }

    return bireSbCounterDTO;
  }

  private initializeObjectsAfterSave() {
    // Clean the added lists
    this.bireDocumentAddedList = [];
    this.bireSbVariantAddedList = [];

    // Clean the udated lists
    this.bireDocumentUpdatedList = [];
    this.bireSbVariantUpdatedList = [];

    // Reset database object with displayed object
    this.bireSb = { ...this.bireSbDisplayed };

    this.bireSbId = {
      sbNumber: this.bireSbDisplayed.sbNumber || '',
      sbRevisionNumber: this.bireSbDisplayed.sbRevisionNumber || ''
    };
    this.bireDocument = [];
    this.bireDocumentDisplayed.forEach((obj) => {
      this.bireDocument.push({ ...obj._obj });
    });

    this.bireConcernedAsset = [...this.bireConcernedAssetDisplayed];
    const objBireSbVariants = [...this.bireSbVariantsDisplayed];
    this.bireSbVariants = [];
    objBireSbVariants.forEach((obj) => {
      this.bireSbVariants.push({ ...obj._obj });
    });

    // Set tabcontext and objectId
    this.componentData.objectId = this.serializationService.serialize(this.bireSbId);
    this.componentData.openMode = ComponentOpenMode.Write;
    this.ngOnInit();
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

  public openEvolution(row: BireEvolutionSbDTO) {
    const bireEvolutionDTOId: BireEvolutionDTOId = {
      evolutionNumber: row.evolutionNumber,
      evolutionRevisionNumber: row.evolutionRevisionNumber
    };

    const openMode: ComponentOpenMode = ComponentOpenMode.Read;

    const labelKey = 'transaction.EvolutionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EvolutionFormComponent',
      objectId: this.serializationService.serialize(bireEvolutionDTOId),
      openMode
    };
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public getLimitRefernceDateEndpointRef(): string {
    return GenericPropertyConstants.SB_EFFECTIVE_DATE;
  }

  public findBireSbCountersBySb(): void {
    this.getLimitAndPeriodicityLists(() => {
      this.sbadFormService.findBireSbCountersBySb(this.bireSbId).subscribe((results) => {
        this.limitsAndApplicabilitiesDisplayed = results.map((obj) => {
          return this.transformLimitRow(obj);
        });
      });
    });
  }

  public getLimitAndPeriodicityLists(callback: (() => void) | undefined): void {
    const counterCode$ = this.sbadFormService.findAllColunterCode();
    const limitType$ = this.propertiesService.getValue('getSbCounterLimitTypeMap');
    const limitRefernceDate$ = this.propertiesService.getValue(this.getLimitRefernceDateEndpointRef());

    forkJoin([counterCode$, limitType$, limitRefernceDate$]).subscribe(([counterCode, types, refernceType]) => {
      this.counterCodeList = counterCode;
      this.limitType = types;
      this.limitRefernceType = refernceType;
      if (callback) {
        callback();
      }
    });
  }

  protected transformLimitRow(obj: BireSbCounterDTO): LimitAndPeriodicityRow {
    const mapObj: LimitAndPeriodicityRow = {
      _obj: obj,
      sbNumber: obj.sbNumber,
      sbRevisionNumber: obj.sbRevisionNumber,
      comments: this.getDisplayComments(obj.comments || ''),
      counterCode: this.convertValueToLabel(obj, 'counterCode', this.counterCodeList),
      limitReferenceDate: this.convertValueToLabel(obj, 'limitReferenceDate', this.limitRefernceType),
      limitType: this.convertValueToLabel(obj, 'limitType', this.limitType),
      limitValue: obj.limitValue,
      periodicity: obj.periodicity
    };

    return mapObj;
  }

  private convertValueToLabel<T>(object: T, propertyName: string, propertyList: LabelValue<string>[]): string {
    if (!!object[propertyName]) {
      const labelValue = propertyList.find((property) => property.value === object[propertyName]);
      if (!!labelValue) {
        return labelValue.label;
      }
    }

    return '';
  }

  /***********************************************************************************
   * Limits And Periodicities Tab
   ***********************************************************************************/
  public createLimitAndPeriodicity(): void {
    this.currentLimitAndPeriodicity = {};
    this.showLimitAndPeriodicityDialog = true;
    this.isNewLimitAndPeriodicity = true;
    this.dataLimitAndPeriodicity = {
      componentId: this.getComponentName(),
      selectedRow: undefined,
      object: this.currentLimitAndPeriodicity,
      openMode: ComponentOpenMode.Write
    };
  }
  public editLimitAndPeriodicity(): void {
    this.isNewLimitAndPeriodicity = false;
    if (this.selectedLimitsAndPeriodicities.length === 1) {
      this.currentLimitAndPeriodicity = { ...this.selectedLimitsAndPeriodicities[0]._obj };

      this.currentLimitAndPeriodicityIndex = this.limitsAndApplicabilitiesDisplayed.indexOf(
        this.selectedLimitsAndPeriodicities[0]
      );
      this.showLimitAndPeriodicityDialog = true;
      this.dataLimitAndPeriodicity = {
        componentId: this.getComponentName(),
        selectedRow: this.selectedLimitsAndPeriodicities,
        object: this.currentLimitAndPeriodicity,
        openMode: ComponentOpenMode.Write
      };
    }
  }
  public openLimitAndPeriodicity(): void {
    if (this.selectedLimitsAndPeriodicities.length === 1) {
      this.currentLimitAndPeriodicity = { ...this.selectedLimitsAndPeriodicities[0]._obj };

      this.currentLimitAndPeriodicityIndex = this.limitsAndApplicabilitiesDisplayed.indexOf(
        this.selectedLimitsAndPeriodicities[0]
      );
      this.showLimitAndPeriodicityDialog = true;
      this.dataLimitAndPeriodicity = {
        componentId: this.getComponentName(),
        selectedRow: this.selectedLimitsAndPeriodicities,
        object: this.currentLimitAndPeriodicity,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  /*
    Concerned limit and periodicity handler functions
  */
  public deleteSelectedConcernedLimitAndPeriodicity() {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedLimitsAndPeriodicities.forEach((element) => {
          const indexInDisplayedList = this.limitsAndApplicabilitiesDisplayed.indexOf(element);
          this.limitsAndApplicabilitiesDisplayed.splice(indexInDisplayedList, 1);
        });

        this.selectedLimitsAndPeriodicities = [];
      }
    });
  }

  public addNewConcernedLimitAndPeriodicity(obj: BireSbCounterDTO) {
    const searchInDisplayedList = this.limitsAndApplicabilitiesDisplayed.find((value) =>
      this.isLimitAndPeriodicityTheSame(value, obj)
    );
    if (!searchInDisplayedList) {
      obj.sbNumber = this.bireSbDisplayed.sbNumber;
      obj.sbRevisionNumber = this.bireSbDisplayed.sbRevisionNumber;
      this.limitsAndApplicabilitiesDisplayed.push(this.transformLimitRow(obj));
    }
  }

  public updateLimitAndPeriodicity(obj: BireSbCounterDTO) {
    this.limitsAndApplicabilitiesDisplayed[this.currentLimitAndPeriodicityIndex] = this.transformLimitRow(obj);
    this.selectedLimitsAndPeriodicities = [];
  }

  private isLimitAndPeriodicityTheSame(
    concernedLimitAndPeriodicity1: BireSbCounterDTO,
    concernedLimitAndPeriodicity2: BireSbCounterDTO
  ): boolean {
    if (concernedLimitAndPeriodicity1.counterCode === concernedLimitAndPeriodicity2.counterCode) {
      return true;
    } else {
      return false;
    }
  }

  public generateTaskComment(): void {
    const taskRow: LimitAndPeriodicityRow = { ...this.selectedLimitsAndPeriodicities[0] };
    this.showGenerateCommentPopup = true;
    this.comment = {
      componentId: 'DialogGenerateCommentComponent',
      selectedRow: undefined,
      object: (taskRow._obj && taskRow._obj.comments) || '',
      openMode: ComponentOpenMode.Write
    };
  }

  public saveComments(comment: string) {
    const row: LimitAndPeriodicityRow = this.selectedLimitsAndPeriodicities[0];
    row.comments = this.getDisplayComments(comment);
    row._obj.comments = comment;
  }

  public getDisplayComments(comment: string): string {
    try {
      if (comment) {
        const commentObj = JSON.parse(comment);
        if (commentObj && commentObj.length === 1) {
          return commentObj[0].comment;
        } else if (commentObj && commentObj.length > 1) {
          return !!commentObj[0].comment ? commentObj[0].comment : comment;
        }
      }

      return '';
    } catch (e) {
      return comment;
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.bireSbDisplayed.statusUser,
        currentDate: this.bireSbDisplayed.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.bireSbDisplayed.statusState, this.workflowStatus),
          value: this.bireSbDisplayed.statusState
        },
        nextStatuses: this.workflowStatus
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          const currentState = this.bireSbDisplayed.statusState;
          this.bireSbDisplayed.statusState = event.data;
          const saved = this.saveSbAdData();
          if (!saved) {
            // Revert status change if save not launched
            this.bireSbDisplayed.statusState = currentState;
          }
        }
      }
    });
  }

  public showUpgrade(): boolean {
    return true;
  }
}
