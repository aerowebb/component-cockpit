import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { MenuItem, SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { Observable, forkJoin, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BireTaskDTOId } from '../../../../../../generated_files/id/bire-task-dto-id.interface';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { AWPropertiesConstants } from '../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../shared/constants/bido-attribute-constants';
import { BidoFunctionTypeConstants } from '../../../../shared/constants/bido-function-type-constants';
import { BidtStockMvtConstants } from '../../../../shared/constants/bidt-stock-mvt-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { LangConstants } from '../../../../shared/constants/lang-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../../../shared/enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../../../shared/enums/table-selection-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DavFieldService } from '../../../../shared/services/dassault/field.service';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindAllBidtStockMvtByCriteriaInput } from '../../../../shared/types/api-input-types/bidt-stock-mvt/find-all-bidt-stock-mvt-by-criteria-input.interface';
import { AssetAtDateInput } from '../../../../shared/types/api-input-types/fleet-business/asset-at-date-input.interface';
import { DefectContextOutput } from '../../../../shared/types/api-input-types/fleet-management/defect-context-output.interface';
import { SaveBidoEventExtensionCustomDTO } from '../../../../shared/types/api-input-types/fleet-management/save-bido-event-extension-custom-dto.interface';
import { SendEventNotificationToContactsDTO } from '../../../../shared/types/api-input-types/fleet-management/send-event-notification-to-contacts-dto.interface';
import { UpdateFieldsOfBidoDocumentationInput } from '../../../../shared/types/api-input-types/fleet-management/update-fields-of-bido-documentation-input.interface';
import { CreateOrUpdateDefectTargetWorkOrderInput } from '../../../../shared/types/api-input-types/maintenance-plan/create-or-update-defect-target-work-order-input.interface';
import { CreateWorkPackageFromEventInput } from '../../../../shared/types/api-input-types/maintenance-plan/create-work-package-from-event-input.interface';
import { FindDefectTargetWorkOrderInput } from '../../../../shared/types/api-input-types/maintenance-plan/find-defect-target-work-order-input.interface';
import { FindDefectTargetWorkPackageInput } from '../../../../shared/types/api-input-types/maintenance-plan/find-defect-target-work-package-input.interface';
import { PartsSearchInput } from '../../../../shared/types/api-input-types/task-management/parts-search-input.interface';
import { SaveEventInput } from '../../../../shared/types/api-input-types/task-management/save-event-input.interface';
import { BidoEquipmentLWO } from '../../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { BidoEventSymptomTableOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-event-symptom-table-output-dto.interface';
import { BidoNotificationOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-notification-output-dto.interface';
import { BidoParameterCustomTableDTO } from '../../../../shared/types/api-output-types/fleet-management/bido-parameter-custom-table-dto.interface';
import { DefectMELAlertObjectOutputDTO } from '../../../../shared/types/api-output-types/fleet-management/defect-mel-alert-object-output-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../../../shared/types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTOId } from '../../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidmWorkOrderDTO } from '../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoAttributeDTOId } from '../../../../shared/types/api-types/bido-attribute-dto-id.interface';
import { BidoAttributeDTO } from '../../../../shared/types/api-types/bido-attribute-dto.interface';
import { BidoAttributeValueDTO } from '../../../../shared/types/api-types/bido-attribute-value-dto.interface';
import { BidoContactDTO } from '../../../../shared/types/api-types/bido-contact-dto.interface';
import { BidoDocumentationDTOId } from '../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoEventExtensionDTO } from '../../../../shared/types/api-types/bido-event-extension-dto.interface';
import { BidoEventParameterDTO } from '../../../../shared/types/api-types/bido-event-parameter-dto.interface';
import { BidoFlDTO } from '../../../../shared/types/api-types/bido-fl-dto.interface';
import { BidoNotificationAttributeDTO } from '../../../../shared/types/api-types/bido-notification-attribute-dto.interface';
import { BidoNotificationContactDTO } from '../../../../shared/types/api-types/bido-notification-contact-dto.interface';
import { BidoNotificationDTOId } from '../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../shared/types/api-types/bido-notification-dto.interface';
import { BidoNotificationTypeDTO } from '../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { BidoParameterDTO } from '../../../../shared/types/api-types/bido-parameter-dto.interface';
import { BidoRootCauseDTO } from '../../../../shared/types/api-types/bido-root-cause-dto.interface';
import { BidtStockMvtDTO } from '../../../../shared/types/api-types/bidt-stock-mvt-dto.interface';
import { BireItemDTO } from '../../../../shared/types/api-types/bire-item-dto.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireTaskDTO } from '../../../../shared/types/api-types/bire-task-dto.interface';
import { EventCriteriaInputDTO } from '../../../../shared/types/api-types/event-criteria-input-dto.interface';
import { HBidoNotificationDTO } from '../../../../shared/types/api-types/h-bido-notification-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { BidoFamilyVariantUtils } from '../../../../shared/utils/bido-family-variant-utils';
import { BireAttributeValueUtils } from '../../../../shared/utils/bire-attribute-value-utils';
import { BireFamilyVariantUtil } from '../../../../shared/utils/bire-family-variant-utils';
import { DomUtils } from '../../../../shared/utils/dom-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';
import { WorkflowUtils } from '../../../../shared/utils/workflow-utils';
import { OverlayService } from '../../../overlay/overlay.service';
import { EventCreateService } from '../event-create/event-create.service';
import { EventService } from '../event.service';

import { DefectStatusComponent } from './status/status/defect-status.component';

interface ComponentRow {
  id?: number;
  birePnPnCode: string;
  decision: string;
  isRequestForPart: boolean;
  stockMvtQuantity: string;
  stockMvtSn: string;
}

interface ArisingEventTableColsCustom {
  notificationCode?: string;
  asset?: string;
  eventType?: string;
  typeCode?: string;
  notificationSubject?: string;
  reportingPeriodStartDate?: string;
  reportingPeriodEndDate?: string;
  closureDate?: string;
  reportingDate?: string;
  equipmentCode?: string;
  equipmentFunction?: string;
}
interface DocumentRow {
  docExtension: string;
  docName: string;
  docPublicationDate: string;
  docSize: string;
  docType: string;
  isChecked: boolean;
}

interface DataRow {
  id?: string;
  fileName?: string;
  fileDesc?: string;
  fileFormat?: string;
}

const TSN_COLOR = '#D3C632';
const CSN_COLOR = '#42A5F5';

interface ChartType {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

interface MeasureDataRow {
  counterCode?: string;
  cumulatedCounterValue?: string;
  counterUnit?: string;
  // ratingText?: string;
  // ratingCounterValue?: string;
  remainingValue?: string;
  referenceValue?: string;
  readingDate?: string;
  source?: string;
  dateLimit?: string;
  _obj: FindBidoCounterReferencesByEquipmentCodeOutput;
}

interface BidoNotificationContactCustomDTO {
  notificationCode?: string;
  contactName?: string;
  firstName?: string;
  lastName?: string;
  customerName?: string;
  customerCode?: string;
  email?: string;
}

interface SymptomRow {
  symptomName?: string;
  symptomComment?: string;
  symptomCode?: string;
  rowId?: number;
}
@Component({
  selector: 'aw-defect-form',
  styleUrls: ['./defect-form.component.scss'],
  templateUrl: './defect-form.component.html'
})
export class DefectFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly tabAttributesId: string;
  public readonly tabDefectId: string;
  public readonly tabDocumentsId: string;

  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;

  @ViewChild('defectAnchor')
  public defectAnchor: ElementRef;

  @ViewChild('correctiveActionAnchor')
  public correctiveActionAnchor: ElementRef;

  @ViewChild('deferralAnchor')
  public deferralAnchor: ElementRef;

  @ViewChild('documentAnchor')
  public documentAnchor: ElementRef;

  @ViewChild('attributeAnchor')
  public attributeAnchor: ElementRef;

  @ViewChild('assetAtDate')
  public assetAtDate: ElementRef;

  @ViewChild('arisingEvents')
  public arisingEvents: ElementRef;

  @ViewChild('diffusion')
  public diffusion: ElementRef;

  @ViewChild('cirumstances')
  public cirumstances: ElementRef;

  public componentSubtitle: string;
  public currentTabId: string;
  public customerOperatorName: string;
  public defect: BidoNotificationDTO;
  public dbDefect: BidoNotificationDTO;
  public masterEquipment: BidoEquipmentDTO;
  public notificationAsset: string;
  public pnTypeList: LabelValue<string>[];
  public statusList: LabelValue<string>[];
  public workflowStatus: LabelValue<string>[];
  public typeList: SelectItem[];

  private defectAttributeList: BidoNotificationAttributeDTO[];

  // Defect tab
  public author: string | undefined;
  public correctiveActionAuthor: string | undefined;
  public correctiveActionBlockVisibility: boolean;
  public correctiveActionComponentDecisionList: SelectItem[];
  public correctiveActionComponentTable: ComponentRow[];
  public correctiveActionComponentTableColList: TableColumn[];
  public correctiveActionLastAuthor: string | undefined;
  public correctiveActionDescription: string | undefined;
  public defectAtaCode: BireItemDTO;
  public defectAskForDeferralVisibility: boolean;
  public defectAuthor: string | undefined;
  public defectBlockVisibility: boolean;
  public defectCAWODescription: string | undefined;
  public defectCAWPDescription: string | undefined;
  public defectDetectionContext: string | undefined;
  public defectEquipmentAssetCode: string | undefined;
  public defectEquipmentName: string | undefined;
  public defectEquipmentPn: string | undefined;
  public defectEquipmentSn: string | undefined;
  public defectExtensionNumber: string | undefined;
  public defectIsCritical: boolean = true;
  public defectLastAuthor: string | undefined;
  public defectLocationList: SelectItem[];
  public defectLogNumber: string | undefined;
  public defectNameList: SelectItem[];
  public defectProposedTask: string | undefined;
  public defectTargetWorkOrder: BidmWorkOrderDTO | undefined;
  public defectTargetWorkPackage: BidmProjectDTO | undefined;
  public deferralAuthor: string | undefined;
  public deferralBlockVisibility: boolean;
  public deferralDelayAuthorizationNumber: string | undefined;
  public deferralDelayAuthorizedUnit: string | undefined;
  public deferralDelayAuthorizedValue: string | undefined;
  public deferralDelayCategory: string | undefined;
  public deferralFlightRestriction: string | undefined;
  public deferralLastAuthor: string | undefined;
  public deferralAcceptDeferralVisibility: boolean;
  public deferralRefuseDeferralVisibility: boolean;
  public delayAuthorizedUnitList: SelectItem[];
  public delayCategoryList: SelectItem[];
  public displayDefectAtaBlock: boolean;
  public displayDefectEquipmentBlock: boolean;
  public displayDefectFunctionalLocationBlock: boolean;
  public displayDefectPartBlock: boolean;
  public dynamicAttributes: DynamicAttributes[];
  public flCodeList: SelectItem[];
  public inspectionMeanList: SelectItem[];
  public faultCodeList: SelectItem[];
  public isDefectAtachecked: boolean;
  public isDefectEquipmentchecked: boolean;
  public isDefectFunctionalLocationchecked: boolean;
  public isDefectPartchecked: boolean;
  public lastAuthor: string | undefined;
  public rootCauseComment: string | undefined;
  public rootCauseDefectLocation: string | undefined;
  public rootCauseDefectName: string | undefined;
  public rootCauseFlCode: string | undefined;
  public rootCauseList: SelectItem[];
  public rootCausePn: string | undefined;
  public rootCauseQuantity: number | undefined;
  public selectedCorrectiveActionComponentList: ComponentRow[];
  public selectedInspectionMean: string | undefined;
  public selectedFaultCode: string | undefined;
  public defectSrmReference: string | undefined;
  public selectedRootCause: string | undefined;

  private correctiveActionComponentList: BidtStockMvtDTO[];
  private propertyOperationalStatus: LabelValue<string>[];

  // DB Params for checking status change
  public dbdefectAuthor: string | undefined;
  public dbDefectIsCritical: boolean = true;
  public dbDefectLogNumber: string | undefined;
  public dbRootCauseDefectName: string | undefined;
  public dbRootCauseDefectLocation: string | undefined;
  public dbSelectedInspectionMean: string | undefined;
  public dbSelectedFaultCode: string | undefined;
  public dbDefectSrmReference: string | undefined;
  public dbDefectDetectionContext: string | undefined;
  public dbRootCauseComment: string | undefined;

  // Documents tab
  public documentTable: DocumentRow[];
  public documentTableColList: TableColumn[];
  public documentTypeList: SelectItem[];
  public selectedDocumentList: DocumentRow[];

  private documentAddedList: BidoDocumentationDTO[];
  private documentList: BidoDocumentationDTO[];
  private documentRemovedList: BidoDocumentationDTO[];
  private documentUpdatedList: BidoDocumentationDTO[];

  // Corrective action component dialog
  public currentCorrectiveActionComponent: BidtStockMvtDTO | undefined;
  public correctiveActionComponentDialogOpenMode: ComponentOpenMode;
  public showCorrectiveActionComponentDialog: boolean;

  private currentCorrectiveActionComponentIndex: number;

  // Corrective action task dialog
  public showCorrectiveActionTaskDialog: boolean;

  // Corrective action work package dialog
  public showCorrectiveActionWorkPackageDialog: boolean;

  // Defect equipment asset code dialog
  public showDefectEquipmentAssetCodeDialog: boolean;

  // Defect part dialog
  public partSearchInput: PartsSearchInput;
  public showDefectPartDialog: boolean;

  // Document dialog
  public currentDocument: BidoDocumentationDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;

  private currentDocumentIndex: number;

  public selectedAnchor: string | undefined;
  public toc;

  // Attribute
  public bireNotificationAttributes: BidoNotificationAttributeDTO[];

  public bireTaskDTO: BireTaskDTO = {};
  private deletedCorrectiveActionComponent: number[] = [];
  public reportListToShowVisible: boolean;

  // Report
  public reportTableCols: TableColumn[];
  public reportTable: DataRow[];

  private isFromNewAWToAccessDefectMode: boolean = true; // TODO handle this case

  /** Status Update */
  public eventStatus: BidoNotificationDTO;
  public showStatusUpdatesPopup: boolean;
  public propertyStatus: LabelValue<string>[];
  public tableStatusUpdatesData: DialogTableData<HBidoNotificationDTO>;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  public isMELAlertVisible: boolean;
  public isMELAlertObject: string;
  public melAlertObject: DefectMELAlertObjectOutputDTO = {};

  public functionLocationStr: string;

  /** Chart */
  public measureVariationData: ChartType;
  // tslint:disable-next-line:no-any
  public measureChartOptions: any;
  public chartType: string;
  // tslint:disable-next-line:no-any
  public usageChartOptions: any;
  public usageGraphData: ChartType;
  public showMeasureChart: boolean;
  public tsn: string | undefined;
  public csn: string | undefined;
  private measureChartDataObj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[][];
  public startDate: Date;
  public endDate: Date;
  public csnLabel: string;
  public tsnLabel: string;
  public bidoMeasuresDisplayed: MeasureDataRow[];
  public selectedMeasure: MeasureDataRow[];
  public isLoadingMeasureTable: boolean;
  public isLoadingEventsTable: boolean;
  public measuresTableCols: TableColumn[];
  // public bidoMeasuresDisplayed: FindBidoCounterReferencesByEquipmentCodeOutput[];
  // public selectedMeasure: FindBidoCounterReferencesByEquipmentCodeOutput[];
  public measureTypes: SelectItem[];
  public selectedMeasureType: string | undefined;
  private hasPropertyByCode: boolean;
  public masterFamilyVariantCode: string | undefined;

  // Arising Event
  public arisingEventTableCols: TableColumn[];
  public arisingEventTableData: ArisingEventTableColsCustom[];
  public selectedArisingEvents: BidoNotificationOutputDTO[];
  public navigationLinkList: MenuItem[];

  // Diffusion
  public isLoadingDiffusionTable: boolean;
  public selectedDiffusion: BidoNotificationContactCustomDTO[];
  public diffusionTableData: BidoNotificationContactCustomDTO[];
  public diffusionTableCols: TableColumn[];

  // Circumstances
  public locationMap: SelectItem[];
  public location: string | undefined;
  public eventLocationMap: SelectItem[];
  public contextMissionMap: LabelValue<string>[];
  public contextNameMap: LabelValue<string>[];
  public symptomNameMap: LabelValue<string>[];
  public symptomContextCols: TableColumn[];
  public contextTabData: BidoEventSymptomTableOutputDTO;
  public selectedSymptom: SymptomRow;
  public selectedContext: BidoParameterCustomTableDTO;
  public addedContextParam: BidoParameterCustomTableDTO[];
  public symptomRowCols: TableColumn[];
  public symptomRowData: SymptomRow[];
  public symptomAdded: SymptomRow[];
  public symptomTabData: BidoEventSymptomTableOutputDTO[];
  public symptomParameterTableData: BidoParameterCustomTableDTO[];
  public contextTableData: BidoParameterCustomTableDTO[];
  public showSymptomTableDialog: boolean;
  public dataSymptom: PopupEntry<SymptomRow>;
  public editedSymptomIndex: number;
  public showSymptomHeader: boolean;
  public showContextHeader: boolean;
  public showContextTableDialog: boolean;
  public dataContext: PopupEntry<string>;
  public selectedSymptomParam: BidoParameterCustomTableDTO;
  public addedSymptomParam: BidoParameterCustomTableDTO[];
  public showSymptomParamHeader: boolean;
  public showSymptomParamDialog: boolean;

  public isReportDataLoading: boolean = false;
  public showSaveSpinner: boolean;

  public defectContextWP: BidmProjectDTO | undefined;
  public defectContextWO: BidmWorkOrderDTO | undefined;
  public defectWPDescription: string | undefined;
  public defectWODescription: string | undefined;
  public defectContext: DefectContextOutput | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly dynamicAttributesService: DynamicAttributesService,
    private readonly eventService: EventService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService,
    private readonly davFieldService: DavFieldService,
    private readonly _overlayService: OverlayService,
    public eventCreateService: EventCreateService
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

    this.tabAttributesId = 'attributes';
    this.tabDefectId = 'defect';
    this.tabDocumentsId = 'documents';

    this.selectedAnchor = undefined;
    this.registerPageTocEntrySelectedObservable();

    this.openDefectTab();
    this.setConstants();
    this.setCorrectiveActionComponentsTableColList();
    this.setDocumentTableColList();

    this.showMeasureChart = false;
    this.initChart();
    this.initMeasureChart();
    this.loadMeasureTablesHeader();
    this.setNavigationLinkList();

    this.userWorkflowSubject.subscribe((userWorkflow) => {
      this.updateWorkflowStatusList();
    });

    this.init();
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_DEFECT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    if (!this.componentData.objectId) {
      this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
    }

    this.loadDefect();

    this.toc = [
      {
        id: 'mainAnchor',
        anchor: this.mainAnchor,
        label:
          this.translateService.currentLang === LangConstants.ENGLISH_CODE
            ? 'Main Information'
            : 'Informations principales'
      },
      {
        id: 'defectAnchor',
        anchor: this.defectAnchor,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Defect' : 'Défaut'
      },
      {
        id: 'circumstances',
        anchor: this.cirumstances,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Circumstances' : 'Circonstances'
      },
      {
        id: 'correctiveActionAnchor',
        anchor: this.correctiveActionAnchor,
        label:
          this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Corrective Action' : 'Action corrective'
      },
      {
        id: 'attributeAnchor',
        anchor: this.attributeAnchor,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Attributes' : 'Attributs'
      },
      {
        id: 'deferralAnchor',
        anchor: this.deferralAnchor,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Deferral' : 'Déferrement'
      },
      {
        id: 'assetAtDate',
        anchor: this.assetAtDate,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Asset At Date' : 'Individu à date'
      },
      {
        id: 'arisingEvents',
        anchor: this.arisingEvents,
        label:
          this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Arising Events' : 'Evènements induits'
      },
      {
        id: 'documentAnchor',
        anchor: this.documentAnchor,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Documents' : 'Documents'
      },
      {
        id: 'diffusion',
        anchor: this.diffusion,
        label: this.translateService.currentLang === LangConstants.ENGLISH_CODE ? 'Diffusion' : 'Diffusion'
      }
    ];

    setTimeout(() => {
      this.setSelectedAnchor('mainAnchor');
    });
  }

  private loadMeasureTablesHeader() {
    this.measuresTableCols = [
      { field: 'counterCode', alignment: 'left' },
      { field: 'cumulatedCounterValue', alignment: 'left' },
      { field: 'counterUnit', alignment: 'left' },
      // { field: 'ratingText', alignment: 'left' },
      // { field: 'ratingCounterValue', alignment: 'left' },
      { field: 'remainingValue', alignment: 'left' },
      { field: 'referenceValue', alignment: 'left' },
      { field: 'source', alignment: 'left' }
    ];

    this.arisingEventTableCols = [
      { field: 'notificationCode', alignment: 'left' },
      { field: 'asset', alignment: 'left' },
      { field: 'eventType', alignment: 'left' },
      { field: 'notificationSubject', alignment: 'left' },
      { field: 'reportingPeriodStartDate', alignment: 'left' },
      { field: 'reportingDate', alignment: 'left' },
      { field: 'reportingPeriodEndDate', alignment: 'left' }
    ];

    this.diffusionTableCols = [
      { field: 'customerCode', alignment: 'left' },
      { field: 'customerName', alignment: 'left' },
      { field: 'contactName', alignment: 'left' },
      { field: 'email', alignment: 'left' }
    ];

    this.symptomContextCols = [
      // { field: 'code', alignment: 'left' },
      { field: 'name', alignment: 'left' },
      { field: 'unit', alignment: 'left' },
      { field: 'value', alignment: 'left' }
    ];

    this.symptomRowCols = [
      { field: 'symptomName', alignment: 'left' },
      { field: 'symptomComment', alignment: 'left' }
    ];
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }

  public cancelDefect(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.clearErrors();

    this.reloadDefect();
  }

  public editDefect(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public openDefectTab(): void {
    this.currentTabId = this.tabDefectId;
  }

  public openDocumentsTab(): void {
    this.currentTabId = this.tabDocumentsId;
  }

  public reloadDefect(): void {
    this.init();
    this.loadDefect();
  }

  private isFromNewAWToAccessDefect() {
    // if (this.getIsNewAW()) {
    const isNew = true;
    if (isNew) {
      this.isFromNewAWToAccessDefectMode = true;
    }
  }

  public saveDefect(): boolean {
    const saved = this.validateWorkflowMissingFields();
    if (!saved) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');

      return saved;
    }

    if (!!this.sessionService.loggedUser) {
      this.defect.statusUser = this.sessionService.loggedUser.login;
    }

    const bidoNotification: BidoNotificationDTO = {
      notificationCode: this.defect.notificationCode,
      typeCode: this.defect.typeCode,
      reportingPeriodStartDate: this.defect.reportingPeriodStartDate,
      reportingPeriodEndDate: this.defect.reportingPeriodEndDate,
      operatorCode: this.defect.operatorCode,
      equipmentCode: this.masterEquipment.equipmentCode,
      status: this.defect.status,
      statusUser: this.defect.statusUser,
      notificationSubject: this.defect.notificationSubject,
      eventSequenceCode: this.defect.eventSequenceCode,
      bidoNotificationTypeDTO: {}
    };

    const docRemoved: BidoDocumentationDTOId[] = [];
    const docUpdated: UpdateFieldsOfBidoDocumentationInput[] = [];
    this.setDocumentTabData(docRemoved, docUpdated);

    // Attributes
    this.bireNotificationAttributes = this.dynamicAttributesService.toBireEventAttributeId(
      this.defect.notificationCode as string,
      this.dynamicAttributes
    );
    this.setAttributeArray();
    bidoNotification.bidoRootCauseDTO = this.setRootCauseTabData();

    // TODO: need to check the purpose of below code.
    // this.modifyStatus(bidoNotification);

    const saveEventInput: SaveEventInput = {
      bidoNotificationDTO: bidoNotification,
      bireNotificationAttributes: this.bireNotificationAttributes,
      bidoDocumentAddedList: this.documentAddedList,
      bidoDocumentRemovedList: docRemoved,
      bidoDocumentUpdatedList: docUpdated,
      deletedCorrectiveActionComponent: this.deletedCorrectiveActionComponent
    };

    const circumstancesDTO: SaveBidoEventExtensionCustomDTO = this.setCircumstanceTabData();
    if (Object.keys(circumstancesDTO).length > 0) {
      saveEventInput.saveBidoEventExtensionCustomDTO = circumstancesDTO;
    }

    this.isChangeInStatus(bidoNotification); // Check whether defect tab is changed

    this.showSaveSpinner = true;
    this.eventCreateService.saveEvent(saveEventInput).subscribe(
      (res) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateDefect'));
        this.calculateMELAlert();
        this.saveCorrectiveAction();
        this.deletedCorrectiveActionComponent = [];
        this.reloadDefect();
        this.updateOpenMode(ComponentOpenMode.Read);
        this.showSaveSpinner = false;
      },
      (error) => {
        this.showSaveSpinner = false;
      }
    );

    return saved;
  }

  private validateWorkflowMissingFields(): boolean {
    const missingFields = this.checkMandatoryFields({
      ...this.defect,
      contextTableDataTitle: this.contextTableData,
      ...this.contextTabData,
      defectDetectionContext: this.defectDetectionContext,
      defectIsCritical: this.defectIsCritical,
      defectAuthor: this.defectAuthor,
      defectLastAuthor: this.defectLastAuthor,
      ...this.masterEquipment,
      sn2: this.masterEquipment.sn,
      sn3: this.masterEquipment.sn,
      defectAtaCode: this.defectAtaCode.chapter,
      notificationCode: this.defect.notificationCode,
      deferralFlightRestriction: this.deferralFlightRestriction,
      bidoMeasuresDisplayedTitle: this.bidoMeasuresDisplayed,
      deferralDelayAuthorizedValue: this.deferralDelayAuthorizedValue,
      defectCAWPDescription: this.defectCAWPDescription,
      defectProposedTask: this.defectProposedTask,
      functionLocationStr: this.functionLocationStr,
      arisingEventTableDataTitle: this.arisingEventTableData,
      deferralDelayAuthorizationNumber: this.deferralDelayAuthorizationNumber,
      isMELAlertObject: this.isMELAlertObject,
      documentTableTitle: this.documentTable,
      deferralDelayAuthorizedUnit: this.deferralDelayAuthorizedUnit,
      selectedInspectionMean: this.selectedInspectionMean,
      defectLogNumber: this.defectLogNumber,
      defectExtensionNumber: this.defectExtensionNumber,
      defectEquipmentAssetCode: this.defectEquipmentAssetCode,
      rootCauseQuantity: this.rootCauseQuantity,
      diffusionTableDataTitle: this.diffusionTableData,
      deferralDelayCategory: this.deferralDelayCategory,
      defectEquipmentName: this.defectEquipmentName,
      selectedFaultCode: this.selectedFaultCode,
      rootCauseDefectLocation: this.rootCauseDefectLocation,
      reportTable: this.reportTable,
      symptomRowDataTitle: this.symptomRowData,
      symptomParameterTableDataTitle: this.symptomParameterTableData,
      correctiveActionComponentTableTitle: this.correctiveActionComponentTable,
      correctiveActionDescription: this.correctiveActionDescription,
      deferralLastAuthor: this.deferralLastAuthor,
      defectEquipmentPn: this.defectEquipmentPn,
      rootCausePn: this.rootCausePn,
      defectSrmReference: this.defectSrmReference,
      defectCAWODescription: this.defectCAWODescription,
      deferralAuthor: this.deferralAuthor,
      notificationAsset: this.notificationAsset,
      rootCauseDefectName: this.rootCauseDefectName,
      rootCauseComment: this.rootCauseComment,
      defectEquipmentSn: this.defectEquipmentSn,
      rootCauseFlCode: this.rootCauseFlCode,
      selectedRootCause: this.selectedRootCause,
      dynamicAttributes: this.dynamicAttributes
    });

    return missingFields.length === 0;
  }

  private calculateMELAlert() {
    if (!!this.defect.bidoRootCauseDTO) {
      this.eventCreateService.calculateMELAlert(this.defect.bidoRootCauseDTO).subscribe((res) => {
        if (!!res && !!res.message) {
          this.isMELAlertVisible = true;
          this.isMELAlertObject = res.message;
          this.melAlertObject = res;
        } else {
          this.isMELAlertVisible = false;
        }
      });
    }
  }

  // private modifyStatus(bidoNotificationDTO: BidoNotificationDTO) {
  //   if (
  //     !!this.defectAuthor ||
  //     !!this.defectLastAuthor ||
  //     !!this.defectIsCritical ||
  //     !!this.defectLogNumber ||
  //     !!this.defect.notificationSubject ||
  //     !!this.rootCauseDefectName ||
  //     !!this.rootCauseDefectLocation ||
  //     !!this.selectedInspectionMean ||
  //     !!this.defectSrmReference ||
  //     !!this.defectDetectionContext ||
  //     !!this.rootCauseComment ||
  //     !!this.defectEquipmentAssetCode ||
  //     !!this.rootCauseFlCode ||
  //     !!this.rootCausePn ||
  //     !!this.rootCauseQuantity
  //   ) {
  //     this.defect.status = AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
  //     bidoNotificationDTO.status = AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
  //   }
  // }

  private generateOrUpdateWorkOrder(bireTaskId: BireTaskDTOId) {
    if (this.defectContextWP && this.defectContextWO && this.defect.notificationCode && this.defectProposedTask) {
      const createOrUpdateDefectTargetWorkOrderInput: CreateOrUpdateDefectTargetWorkOrderInput = {
        bireTaskDTOId: bireTaskId,
        defectOriginWorkPackageData: this.defectContextWP,
        defectOriginWorkOrderData: this.defectContextWO,
        woSource: this.defect.notificationCode,
        correctiveActionDescription: this.correctiveActionDescription,
        defectProposedTask: this.defectProposedTask
      };
      this.eventService
        .createOrUpdateDefectTargetWorkOrder(createOrUpdateDefectTargetWorkOrderInput)
        .subscribe((defectTargetWorkOrder) => {
          if (defectTargetWorkOrder) {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateOrUpdate'));
          }
        });
    }
  }

  private saveCorrectiveAction() {
    if (this.bireTaskDTO.taskCode && this.bireTaskDTO.taskVersion) {
      const bireTaskDtoId: BireTaskDTOId = {
        taskCode: this.bireTaskDTO.taskCode,
        taskVersion: this.bireTaskDTO.taskVersion
      };
      this.generateOrUpdateWorkOrder(bireTaskDtoId);
    }

    const bidtStockMvtDTOList: BidtStockMvtDTO[] = [];
    this.correctiveActionComponentTable.forEach((row) => {
      let mvtWay;
      let status;

      // if (AWPropertiesConstants.DECISION_BBIS_INSTALL_KEY === row.decision) {
      if (row.decision === 'Install') {
        mvtWay = BidtStockMvtConstants.MVT_WAY_DEBIT;
        if (row.isRequestForPart) {
          if (!status) {
            status = AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY;
          }
        } else {
          status = undefined;
        }
      } else {
        mvtWay = BidtStockMvtConstants.MVT_WAY_CREDIT;
        if (!status) {
          status = AWPropertiesConstants.MM_MVT_STATUS_PLANNED_KEY;
        }
      }

      const dto: BidtStockMvtDTO = {
        birePnPnCode: row.birePnPnCode,
        stockMvtSn: row.stockMvtSn,
        stockMvtQuantity: row.stockMvtQuantity,
        mvtStatus: status,
        stockMvtWay: mvtWay,
        bidoNotificationNotificationCode: this.defect.notificationCode,
        bidmWorkOrderProjectId: !!this.defectTargetWorkOrder ? this.defectTargetWorkOrder.projectId : undefined,
        bidmWorkOrderWoId: !!this.defectTargetWorkOrder ? this.defectTargetWorkOrder.woId : undefined,
        id: row.id
      };

      bidtStockMvtDTOList.push(dto);
    });

    bidtStockMvtDTOList.forEach((dto) => {
      this.eventCreateService.addOrUpdate(dto).subscribe((res) => {
        // TODO
      });
    });
  }

  private setDocumentTabData(docRemoved: BidoDocumentationDTOId[], docUpdated: UpdateFieldsOfBidoDocumentationInput[]) {
    this.documentRemovedList.forEach((document) => {
      const doc: BidoDocumentationDTOId = {
        docCode: document.docCode as string
      };

      docRemoved.push(doc);
    });

    this.documentUpdatedList.forEach((document) => {
      if (!!document) {
        const doc: UpdateFieldsOfBidoDocumentationInput = {
          bidoDocumentationDTO: document,
          docCategory: document.docType as string,
          docDescription: document.docDescription as string,
          docLanguage: document.docLanguage as string,
          docName: document.docName as string,
          docVersion: document.docVersion as string,
          endOfValidityDate: document.docEndOfValidityDate as Date,
          publicationDate: document.docPublicationDate as Date
        };
        docUpdated.push(doc);
      }
    });

    this.documentAddedList.forEach((doc) => {
      doc.notificationCode = this.defect.notificationCode;
    });
  }

  private setRootCauseTabData(): BidoRootCauseDTO {
    // Setting asset block
    if (!!this.defectEquipmentAssetCode) {
      if (!this.defect.bidoRootCauseDTO) {
        this.defect.bidoRootCauseDTO = {};
        this.defect.bidoRootCauseDTO.rootCauseAssetCode = this.defectEquipmentAssetCode;
      } else {
        this.defect.bidoRootCauseDTO.rootCauseAssetCode = this.defectEquipmentAssetCode;
      }
    }

    if (!!this.rootCausePn) {
      if (!this.defect.bidoRootCauseDTO) {
        this.defect.bidoRootCauseDTO = {};
        this.defect.bidoRootCauseDTO.rootCausePn = this.rootCausePn;
      } else {
        this.defect.bidoRootCauseDTO.rootCausePn = this.rootCausePn;
      }
    }

    if (!!this.rootCauseQuantity) {
      if (!this.defect.bidoRootCauseDTO) {
        this.defect.bidoRootCauseDTO = {};
        this.defect.bidoRootCauseDTO.rootCauseQuantity = this.rootCauseQuantity;
      } else {
        this.defect.bidoRootCauseDTO.rootCauseQuantity = this.rootCauseQuantity;
      }
    }

    if (!!this.defectAtaCode) {
      if (!this.defect.bidoRootCauseDTO) {
        this.defect.bidoRootCauseDTO = {};
      }
      this.defect.bidoRootCauseDTO.rootCauseChapter = this.defectAtaCode.chapter;
      this.defect.bidoRootCauseDTO.rootCauseSection = this.defectAtaCode.section;
      this.defect.bidoRootCauseDTO.rootCauseSubject = this.defectAtaCode.subject;
      this.defect.bidoRootCauseDTO.rootCauseSheet = this.defectAtaCode.sheet;
      this.defect.bidoRootCauseDTO.rootCauseMark = this.defectAtaCode.marks;
    }

    if (!!this.rootCauseFlCode) {
      if (!this.defect.bidoRootCauseDTO) {
        this.defect.bidoRootCauseDTO = {};
        this.defect.bidoRootCauseDTO.rootCauseFlCode = this.rootCauseFlCode;
      } else {
        this.defect.bidoRootCauseDTO.rootCauseFlCode = this.rootCauseFlCode;
      }
    }

    // Setting defect block
    if (!!this.defect.bidoRootCauseDTO) {
      this.defect.bidoRootCauseDTO.defectLocation = this.rootCauseDefectLocation;
      this.defect.bidoRootCauseDTO.defectName = this.rootCauseDefectName;
      this.defect.bidoRootCauseDTO.rootCauseComment = this.rootCauseComment;
    }

    return this.defect.bidoRootCauseDTO || {};
  }

  public addATACode(ev: BireItemDTO) {
    this.defectAtaCode = ev;
  }

  private setAttributeArray() {
    const attribute1: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_AUTHOR.toString(),
      attributeValue: this.defectAuthor
    };

    const attribute2: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL.toString(),
      attributeValue: this.defectIsCritical.toString()
    };

    const attribute3: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER.toString(),
      attributeValue: this.defectLogNumber
    };

    const attribute4: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN.toString(),
      attributeValue: this.selectedInspectionMean
    };

    const attribute5: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_FAULT_CODE.toString(),
      attributeValue: this.selectedFaultCode
    };

    const defectContextVal =
      !!this.defectContext && !!this.defectContext.defectDetectionContext
        ? this.defectContext.defectDetectionContext
        : this.defectDetectionContext;
    const attribute6: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT.toString(),
      attributeValue: defectContextVal
    };

    const attribute7: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR.toString(),
      attributeValue: this.correctiveActionAuthor
    };

    const attribute8: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS.toString(),
      attributeValue: this.defectProposedTask
    };

    const attribute9: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION.toString(),
      attributeValue: this.correctiveActionDescription
    };

    const attribute10: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE.toString(),
      attributeValue: this.defectSrmReference
    };

    const attribute11: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY.toString(),
      attributeValue: this.deferralDelayCategory
    };

    const attribute12: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE.toString(),
      attributeValue: this.deferralDelayAuthorizedValue
    };

    const attribute13: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER.toString(),
      attributeValue: this.deferralDelayAuthorizationNumber
    };

    const attribute14: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_EXTENSION.toString(),
      attributeValue: this.defectExtensionNumber
    };

    const attribute15: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS.toString(),
      attributeValue: this.deferralFlightRestriction
    };

    const attribute16: BidoNotificationAttributeDTO = {
      notificationCode: this.defect.notificationCode,
      attributeId: BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT.toString(),
      attributeValue: this.deferralDelayAuthorizedUnit
    };

    this.bireNotificationAttributes.push(attribute1);
    this.bireNotificationAttributes.push(attribute2);
    this.bireNotificationAttributes.push(attribute3);
    this.bireNotificationAttributes.push(attribute4);
    this.bireNotificationAttributes.push(attribute5);
    this.bireNotificationAttributes.push(attribute6);
    this.bireNotificationAttributes.push(attribute7);
    this.bireNotificationAttributes.push(attribute8);
    this.bireNotificationAttributes.push(attribute9);
    this.bireNotificationAttributes.push(attribute10);
    this.bireNotificationAttributes.push(attribute11);
    this.bireNotificationAttributes.push(attribute12);
    this.bireNotificationAttributes.push(attribute13);
    this.bireNotificationAttributes.push(attribute14);
    this.bireNotificationAttributes.push(attribute15);
    this.bireNotificationAttributes.push(attribute16);
  }

  private createComponentRow(component: BidtStockMvtDTO): ComponentRow {
    let formattedDecision = '';
    let isRequestForPart = false;

    if (!!component.stockMvtWay) {
      let selectedDecision;
      if (component.stockMvtWay === BidtStockMvtConstants.MVT_WAY_DEBIT) {
        selectedDecision = this.correctiveActionComponentDecisionList.find(
          (decision) => decision.value === AWPropertiesConstants.DECISION_BBIS_INSTALL_KEY
        );

        isRequestForPart = !!component.mvtStatus;
      } else {
        selectedDecision = this.correctiveActionComponentDecisionList.find(
          (decision) => decision.value === AWPropertiesConstants.DECISION_BBTWS_REMOVE_KEY
        );
      }
      formattedDecision = !!selectedDecision ? StringUtils.orEmpty(selectedDecision.label) : '';
    }

    const componentRow: ComponentRow = {
      isRequestForPart,
      birePnPnCode: StringUtils.orEmpty(component.birePnPnCode),
      decision: formattedDecision,
      stockMvtQuantity: !!component.stockMvtQuantity ? StringUtils.orEmpty(component.stockMvtQuantity) : '1',
      stockMvtSn: StringUtils.orEmpty(component.stockMvtSn),
      id: component.id
    };

    return componentRow;
  }

  private createDocumentRow(document: BidoDocumentationDTO): DocumentRow {
    const selectedDocumentType = this.documentTypeList.find(
      (documentType) => !!document.docCategory && (documentType.value as string) === document.docCategory
    );

    const documentRow: DocumentRow = {
      docExtension: this.formatDocExtension(document),
      docName: document.docName as string,
      docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
      docSize: this.formatDocSize(document),
      docType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      isChecked: false
    };

    return documentRow;
  }

  private displayComponents(defectTargetWorkOrderData: BidmWorkOrderDTO | undefined): void {
    this.eventService
      .isBuildingBlockInstalled(BidoFunctionTypeConstants.MODULE_MM)
      .subscribe((isBuildingBlockInstalled) => {
        if (!!isBuildingBlockInstalled && isBuildingBlockInstalled) {
          const findAllBidtStockMvtByCriteriaInput: FindAllBidtStockMvtByCriteriaInput = {
            bidtStockMvtDTO: {}
          };
          if (
            !!defectTargetWorkOrderData &&
            !!defectTargetWorkOrderData.projectId &&
            !!defectTargetWorkOrderData.woId
          ) {
            const workOrderDTOId: BidmWorkOrderDTOId = {
              projectId: defectTargetWorkOrderData.projectId,
              woId: defectTargetWorkOrderData.woId
            };
            findAllBidtStockMvtByCriteriaInput.bidmWorkOrderDTOId = workOrderDTOId;
          } else if (!!this.defect && !!this.defect.notificationCode) {
            const notificationDTOId: BidoNotificationDTOId = {
              notificationCode: this.defect.notificationCode
            };
            findAllBidtStockMvtByCriteriaInput.bidoNotificationDTOId = notificationDTOId;
          }

          this.eventService
            .findAllDefectPartsByCriteria(findAllBidtStockMvtByCriteriaInput)
            .subscribe((bidtStockMvts) => {
              this.correctiveActionComponentList = !!bidtStockMvts ? bidtStockMvts : [];
              this.correctiveActionComponentTable = this.correctiveActionComponentList.map((component) =>
                this.createComponentRow(component)
              );
            });
        }
      });
  }

  private formatDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  private formatDocSize(document: BidoDocumentationDTO): string {
    return !!document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BidoAttributeDTO[]> {
    return this.eventService.findAllBidoAttributeByAttributeCategory(attributeCategory);
  }

  private init(): void {
    this.componentSubtitle = '';
    this.customerOperatorName = '';
    this.defect = {
      bidoNotificationTypeDTO: {}
    };

    this.dbDefect = {
      bidoNotificationTypeDTO: {}
    };
    this.defectAttributeList = [];
    this.notificationAsset = '';
    this.pnTypeList = [];
    this.statusList = [];
    this.typeList = [];

    this.correctiveActionAuthor = undefined;
    this.correctiveActionBlockVisibility = false;
    this.correctiveActionComponentTable = [];
    this.correctiveActionComponentList = [];
    this.correctiveActionLastAuthor = undefined;
    this.correctiveActionDescription = undefined;
    this.defectAtaCode = {};
    this.defectAskForDeferralVisibility = false;
    this.defectAuthor = undefined;
    this.defectBlockVisibility = false;
    this.defectCAWODescription = undefined;
    this.defectCAWPDescription = undefined;
    this.defectDetectionContext = undefined;
    this.defectEquipmentAssetCode = undefined;
    this.defectEquipmentName = undefined;
    this.defectEquipmentPn = undefined;
    this.defectEquipmentSn = undefined;
    this.defectExtensionNumber = undefined;
    this.defectIsCritical = true;
    this.defectLastAuthor = undefined;
    this.defectLocationList = [];
    this.defectLogNumber = undefined;
    this.defectNameList = [];
    this.defectProposedTask = undefined;
    this.defectTargetWorkOrder = undefined;
    this.defectTargetWorkPackage = undefined;
    this.deferralAuthor = undefined;
    this.defectBlockVisibility = false;
    this.deferralDelayAuthorizationNumber = undefined;
    this.deferralDelayAuthorizedUnit = undefined;
    this.deferralDelayAuthorizedValue = undefined;
    this.deferralDelayCategory = undefined;
    this.deferralFlightRestriction = undefined;
    this.deferralLastAuthor = undefined;
    this.deferralAcceptDeferralVisibility = false;
    this.deferralRefuseDeferralVisibility = false;
    this.delayAuthorizedUnitList = [];
    this.delayCategoryList = [];
    this.displayDefectAtaBlock = false;
    this.displayDefectEquipmentBlock = false;
    this.displayDefectFunctionalLocationBlock = false;
    this.displayDefectPartBlock = false;
    this.masterFamilyVariantCode = '';
    this.dynamicAttributes = [];
    this.flCodeList = [];
    this.inspectionMeanList = [];
    this.faultCodeList = [];
    this.isDefectAtachecked = false;
    this.isDefectEquipmentchecked = false;
    this.isDefectFunctionalLocationchecked = false;
    this.isDefectPartchecked = false;
    this.rootCauseComment = undefined;
    this.rootCauseDefectLocation = undefined;
    this.rootCauseDefectName = undefined;
    this.rootCauseFlCode = undefined;
    this.rootCausePn = undefined;
    this.rootCauseQuantity = undefined;
    this.selectedCorrectiveActionComponentList = [];
    this.selectedInspectionMean = undefined;
    this.selectedFaultCode = undefined;

    this.documentAddedList = [];
    this.propertyOperationalStatus = [];
    this.documentList = [];
    this.documentRemovedList = [];
    this.documentUpdatedList = [];
    this.documentTable = [];
    this.documentTypeList = [];
    this.selectedDocumentList = [];

    this.addedContextParam = [];
    this.addedContextParam = [];
    this.addedSymptomParam = [];

    this.currentCorrectiveActionComponent = undefined;
    this.currentCorrectiveActionComponentIndex = -1;
    this.correctiveActionComponentDialogOpenMode = ComponentOpenMode.Read;
    this.showCorrectiveActionComponentDialog = false;

    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    this.showCorrectiveActionTaskDialog = false;

    this.showCorrectiveActionWorkPackageDialog = false;

    this.showDefectEquipmentAssetCodeDialog = false;

    this.selectedDiffusion = [];
    this.diffusionTableData = [];

    this.partSearchInput = {};
    this.showDefectPartDialog = false;

    this.currentDocument = undefined;
    this.currentDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.showDocumentDialog = false;
    this.reportListToShowVisible = false;

    this.bireNotificationAttributes = [];

    this.bidoMeasuresDisplayed = [];
    this.selectedMeasure = [];

    this.reportTableCols = [
      { field: 'fileName', width: '60%', alignment: 'left' },
      // { field: 'fileDesc', width: '60%', alignment: 'left' },
      { field: 'fileFormat', width: '20%', alignment: 'left' },
      { field: 'action', width: '20%', alignment: 'center' }
    ];
    this.reportTable = [];

    this.arisingEventTableData = [];
    this.selectedArisingEvents = [];

    this.symptomRowData = [];
    this.selectedSymptom = {};
    this.contextTableData = [];
    this.selectedSymptomParam = {};
    this.selectedContext = {};
    this.contextTabData = {};

    this.loadCorrectiveActionComponentDecisionList();
    this.loadDocumentTypeList();
    this.loadPnTypeList();
    this.loadReportTable();
    this.loadCircumstancesDropdown();
  }

  private loadReportTable() {
    this.reportTable = [
      {
        fileName: 'Defect Card',
        fileDesc: 'Defect Card',
        fileFormat: 'PDF',
        id: 'defectCard'
      }
    ];
  }

  public generateReport(data) {
    if (data === 'defectCard') {
      this.isReportDataLoading = true;
      this.eventCreateService.generateDefectCard(this.defect).subscribe(
        (result) => {
          FileUtils.downloadFile(result.fileContent, result.fileName);
          this.isReportDataLoading = false;
        },
        (err) => {
          this.isReportDataLoading = false;
        }
      );
    }
  }

  private setSelectedDefect() {
    if (!!this.defect.bidoRootCauseDTO) {
      if (!!this.defect.bidoRootCauseDTO.rootCauseAssetCode) {
        this.selectedRootCause = 'defectEquipment';
      } else if (!!this.defect.bidoRootCauseDTO.rootCausePn) {
        this.selectedRootCause = 'defectPart';
      } else if (!!this.defect.bidoRootCauseDTO.rootCauseFlCode) {
        this.selectedRootCause = 'defectFunctionalLocation';
      } else if (!!this.defect.bidoRootCauseDTO.rootCauseChapter) {
        this.selectedRootCause = 'defectAta';
      } else {
        this.selectedRootCause = undefined;
      }
    }
  }

  public openLinkAssetEquipment(ev) {
    if (!!this.defect && !!this.defect.equipmentCode) {
      const bidoEquipmentDTOId: BidoEquipmentDTOId = {
        equipmentCode: this.defect.equipmentCode
      };
      this.eventCreateService.findBidoEquipment(bidoEquipmentDTOId).subscribe((res) => {
        this.openAssetUC(res.equipmentCode as string, ComponentOpenMode.Read, res.equipmentFunction as string);
      });

      ev.stopPropagation();
    }
  }

  private loadDefect(): void {
    this.loadDynamicAttributeList();
    if (!!this.componentData.objectId) {
      forkJoin({
        eventCategoryList: this.propertiesService.getValue(GenericPropertyConstants.EVENT_CATEGORY_MAP),
        eventStatusList: this.propertiesService.getValue(GenericPropertyConstants.EVENT_STATUS_MAP),
        operationalStatusList: this.eventCreateService.getOperationalStatusMap(),
        notification: this.eventService.findBidoNotification(
          this.serializationService.deserialize(this.componentData.objectId)
        )
      }).subscribe((result) => {
        if (!!result.notification) {
          this.defect = result.notification;
          this.dbDefect = _cloneDeep(this.defect);
          this.propertyOperationalStatus = result.operationalStatusList;
          this.setSelectedDefect();

          this.loadUserWorkflow(this.defect.status);

          if (!!this.defect.bidoRootCauseDTO) {
            if (
              !!this.defect.bidoRootCauseDTO.rootCauseSubject ||
              !!this.defect.bidoRootCauseDTO.rootCauseChapter ||
              !!this.defect.bidoRootCauseDTO.rootCauseSection ||
              !!this.defect.bidoRootCauseDTO.rootCauseMark ||
              !!this.defect.bidoRootCauseDTO.rootCauseSheet
            ) {
              this.defectAtaCode = {
                chapter: !!this.defect.bidoRootCauseDTO.rootCauseChapter
                  ? this.defect.bidoRootCauseDTO.rootCauseChapter
                  : '_',
                marks: !!this.defect.bidoRootCauseDTO.rootCauseMark ? this.defect.bidoRootCauseDTO.rootCauseMark : '_',
                section: !!this.defect.bidoRootCauseDTO.rootCauseSection
                  ? this.defect.bidoRootCauseDTO.rootCauseSection
                  : '_',
                sheet: !!this.defect.bidoRootCauseDTO.rootCauseSheet
                  ? this.defect.bidoRootCauseDTO.rootCauseSheet
                  : '_',
                subject: !!this.defect.bidoRootCauseDTO.rootCauseSubject
                  ? this.defect.bidoRootCauseDTO.rootCauseSubject
                  : '_'
              };
            }

            this.rootCauseComment = this.defect.bidoRootCauseDTO.rootCauseComment;
            this.dbRootCauseComment = this.rootCauseComment;
            this.rootCauseDefectLocation = this.defect.bidoRootCauseDTO.defectLocation;
            this.dbRootCauseDefectLocation = this.rootCauseDefectLocation;
            this.rootCauseDefectName = this.defect.bidoRootCauseDTO.defectName;
            this.dbRootCauseDefectName = this.rootCauseDefectName;
            this.rootCauseFlCode = this.defect.bidoRootCauseDTO.rootCauseFlCode;
            this.rootCausePn = this.defect.bidoRootCauseDTO.rootCausePn;
            this.rootCauseQuantity = this.defect.bidoRootCauseDTO.rootCauseQuantity;
            this.defectEquipmentAssetCode = this.defect.bidoRootCauseDTO.rootCauseAssetCode;

            if (!!this.defectEquipmentAssetCode) {
              const dto: BidoEquipmentDTOId = {
                equipmentCode: this.defectEquipmentAssetCode
              };
              this.eventService.findBidoEquipment(dto).subscribe((equipment) => {
                this.eventService.getEquipmentRepresentation(equipment).subscribe((equipmentRepresentationResult) => {
                  this.defectEquipmentName = StringUtils.orEmpty(equipmentRepresentationResult);
                });
                this.defectEquipmentPn = equipment.pnCode;
                this.defectEquipmentSn = equipment.sn;
              });
            }

            this.displayDefectAtaBlock =
              !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCauseChapter) ||
              !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCauseMark) ||
              !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCauseSection) ||
              !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCauseSheet) ||
              !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCauseSubject);

            this.displayDefectEquipmentBlock = !StringUtils.isNullOrEmpty(
              this.defect.bidoRootCauseDTO.rootCauseAssetCode
            );

            this.displayDefectFunctionalLocationBlock = !StringUtils.isNullOrEmpty(
              this.defect.bidoRootCauseDTO.rootCauseFlCode
            );

            this.displayDefectPartBlock = !StringUtils.isNullOrEmpty(this.defect.bidoRootCauseDTO.rootCausePn);

            this.calculateMELAlert();
          }
          forkJoin([
            this.loadAttributeListByNotificationCode(this.defect.notificationCode),
            this.loadTypeList(result.eventCategoryList)
          ]).subscribe(([attributeList, typeList]) => {
            this.setAttributeListByNotificationCode(attributeList);
            this.setTypeList(typeList);

            this.setComponentSubtitle();
          });
          this.loadAuthorAndLastAuthor(this.defect.notificationCode);
          this.loadAttributeList();

          if (!!this.defect.equipmentCode) {
            this.loadEquipmentObject(this.defect.equipmentCode);
          }

          if (!!this.defect.notificationCode) {
            this.loadDocumentList(this.defect.notificationCode);
          }

          if (!ListUtils.isNullOrEmpty(result.eventStatusList)) {
            this.statusList = result.eventStatusList;
          }

          // Check if defect is into a work package
          if (!!this.defect.equipmentCode && !!this.defect.notificationCode) {
            const findDefectTargetWorkPackageInput: FindDefectTargetWorkPackageInput = {
              notificationCode: this.defect.notificationCode
            };
            this.eventService.findDefectTargetWorkPackage(findDefectTargetWorkPackageInput).subscribe((workPackage) => {
              this.defectTargetWorkPackage = workPackage;
              if (!!this.defectTargetWorkPackage && !!this.defect.equipmentCode && !!this.defect.notificationCode) {
                const findDefectTargetWorkOrderInput: FindDefectTargetWorkOrderInput = {
                  equipmentCode: workPackage.assetCode,
                  notificationCode: this.defect.notificationCode,
                  defectTargetWorkPackageDTO: workPackage
                };
                this.eventService.findDefectTargetWorkOrder(findDefectTargetWorkOrderInput).subscribe((workOrder) => {
                  this.defectTargetWorkOrder = workOrder;
                  this.displayComponents(this.defectTargetWorkOrder);
                  this.setWorkPackageAndWorkOrderDescriptions(workPackage, workOrder);
                });
              } else {
                this.displayComponents({});
              }
            });

            this.eventCreateService
              .getDefectContextInfo(this.defect)
              .subscribe((defectContext: DefectContextOutput) => {
                this.defectContext = defectContext;
                this.defectContextWP = defectContext.defectOriginWorkPackageData;
                this.defectContextWO = defectContext.defectOriginWorkOrderData;
                if (!!this.defectContextWP) {
                  this.defectDetectionContext =
                    defectContext.defectDetectionContextVisibility && !!defectContext.defectDetectionContext
                      ? defectContext.defectDetectionContext
                      : undefined;
                }
                this.defectWPDescription =
                  defectContext.defectWPDescriptionVisibility && !!defectContext.defectWPDescription
                    ? defectContext.defectWPDescription
                    : undefined;

                this.defectWODescription =
                  defectContext.defectWODescriptionVisibility && !!defectContext.defectWODescription
                    ? defectContext.defectWODescription
                    : undefined;
              });
          }

          // Blocks & buttons visibility
          this.updateComponentsVisibility();
          this.isFromNewAWToAccessDefect();
        }
      });
    }
  }

  private updateWorkflowStatusList() {
    this.workflowStatus = WorkflowUtils.filterWorkflowStatusList(
      this.userWorkflow,
      this.statusList,
      this.defect ? this.defect.status : undefined
    );
  }

  private computeBidoAttributeLabel(attributeValue: BidoAttributeValueDTO): string {
    return this.translateService.currentLang === LangConstants.FRENCH_CODE
      ? attributeValue.textFr
      : attributeValue.textEn;
  }

  private loadDynamicAttributeList(): void {
    const observables: Observable<BidoAttributeDTO[]>[] = [
      // this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_ALL_KEY)
    ];

    // TODO: this condition needs to be checked
    if (this.isFromNewAWToAccessDefectMode) {
      observables.unshift(this.getDynamicAttributesObservable(AWPropertiesConstants.FM_ATTRIBUTE_CATEGORY_DEFECT_KEY));
    }

    forkJoin(observables).subscribe(([allAttribute, customerAttribute]) => {
      let attributes: BidoAttributeDTO[] = [];
      attributes = !!allAttribute ? [...attributes, ...allAttribute] : attributes;
      attributes = !!customerAttribute ? [...attributes, ...customerAttribute] : attributes;

      let dynamicAttributes: BidoAttributeDTO[] = [];
      attributes.forEach((attribute) => {
        const attributeId = attribute.attributeId;

        if (attributeId === BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN.toString()) {
          if (!!attribute.bidoAttributeValueDatas) {
            this.inspectionMeanList = attribute.bidoAttributeValueDatas.map((attributeValue) => {
              return {
                label: this.computeBidoAttributeLabel(attributeValue),
                value: this.computeBidoAttributeLabel(attributeValue)
              };
            });
          }
        } else if (attributeId === BidoAttributeConstants.EVENT_FAULT_CODE.toString()) {
          if (!!attribute.bidoAttributeValueDatas) {
            this.faultCodeList = attribute.bidoAttributeValueDatas.map((attributeValue) => {
              return {
                label: this.computeBidoAttributeLabel(attributeValue),
                value: this.computeBidoAttributeLabel(attributeValue)
              };
            });
            this.faultCodeList = this.faultCodeList.sort((a, b) =>
              StringUtils.orEmpty(a.label).localeCompare(StringUtils.orEmpty(b.label))
            );
          }
        } else if (attributeId === BidoAttributeConstants.EVENT_LOCATION.toString()) {
          // TODO
        } else if (attributeId === BidoAttributeConstants.EVENT_SYSTEM_SOURCE_ID.toString()) {
          // TODO
        } else if (attributeId === BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY.toString()) {
          // TODO
        } else if (attributeId === BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT.toString()) {
          // TODO
        } else if (
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_LAST_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_EXTENSION.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_LAST_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_IS_DEFERRED_DEFECT.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_SYSTEM_SOURCE_REFERENCE.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_AUTHORIZATION_NUMBER.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_DECISION_LAST_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_LIMIT_DATE.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_REFUSAL_REASON.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_WO_CONTEXT.toString() &&
          attributeId !== BidoAttributeConstants.FUNCTIONAL_LOCATION.toString() &&
          attributeId !== BidoAttributeConstants.IGNORE_INITIAL_DEADLINE_NEXT_OCCURRENCE_CALCULATION.toString() &&
          attributeId !== BidoAttributeConstants.MAINTENANCE_PLAN_ORIGINAL_DEADLINES.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_AUTHOR.toString() &&
          attributeId !== BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE.toString()
        ) {
          dynamicAttributes = [...dynamicAttributes, attribute];
        }
      });

      this.dynamicAttributes = this.dynamicAttributesService.from(dynamicAttributes);
    });
  }

  private loadAttributeList(): void {
    forkJoin({
      defectLocationList: this.propertiesService.getValue(GenericPropertyConstants.DEFECT_LOCATION_MAP),
      defectNameList: this.propertiesService.getValue(GenericPropertyConstants.DEFECT_NAME_MAP),
      delayAuthorizedUnitList: this.eventService.findAllDelayAuthorizedUnit(),
      delayCategoryList: this.eventService.findAllDelayCategory()
    }).subscribe(({ defectLocationList, defectNameList, delayAuthorizedUnitList, delayCategoryList }) => {
      this.defectLocationList = !!defectLocationList ? SelectItemUtils.fromLabelValues(defectLocationList) : [];

      this.defectNameList = !!defectNameList ? SelectItemUtils.fromLabelValues(defectNameList) : [];

      this.delayAuthorizedUnitList = !!delayAuthorizedUnitList
        ? SelectItemUtils.fromLabelValues(delayAuthorizedUnitList)
        : [];

      this.delayCategoryList = !!delayCategoryList ? SelectItemUtils.fromLabelValues(delayCategoryList) : [];
    });
  }

  public onChangeDelayCategory(): void {
    if (!this.delayAuthorizedUnitList || this.delayAuthorizedUnitList.length === 0) {
      return;
    }
    if (!!this.deferralDelayCategory) {
      if (this.deferralDelayCategory === BireAttributeValueUtils.DD_DELAY_CATEGORY_A) {
        this.deferralDelayAuthorizedUnit = this.translateService.instant(this.getTranslateKey('hours'));
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? undefined
          : this.deferralDelayAuthorizedValue;
      }
      if (this.deferralDelayCategory === BireAttributeValueUtils.DD_DELAY_CATEGORY_B) {
        this.deferralDelayAuthorizedUnit = this.translateService.instant(this.getTranslateKey('days'));
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? BireAttributeValueUtils.DD_DELAY_VALUE_IN_DAYS_FOR_CATEGORY_B
          : this.deferralDelayAuthorizedValue;
      }
      if (this.deferralDelayCategory === BireAttributeValueUtils.DD_DELAY_CATEGORY_C) {
        this.deferralDelayAuthorizedUnit = this.translateService.instant(this.getTranslateKey('days'));
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? BireAttributeValueUtils.DD_DELAY_VALUE_IN_DAYS_FOR_CATEGORY_C
          : this.deferralDelayAuthorizedValue;
      }
      if (this.deferralDelayCategory === BireAttributeValueUtils.DD_DELAY_CATEGORY_D) {
        this.deferralDelayAuthorizedUnit = this.translateService.instant(this.getTranslateKey('days'));
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? BireAttributeValueUtils.DD_DELAY_VALUE_IN_DAYS_FOR_CATEGORY_D
          : this.deferralDelayAuthorizedValue;
      }
    }
  }

  private loadAttributeListByNotificationCode(notificationCode?: string): Observable<BidoNotificationAttributeDTO[]> {
    return notificationCode
      ? this.eventService.findAllBidoNotificationAttributeByNotificationCode({ notificationCode })
      : of([]);
  }

  private setAttributeListByNotificationCode(attributeList: BidoNotificationAttributeDTO[]): void {
    this.defectAttributeList = ListUtils.orEmpty(attributeList);
    this.defectAttributeList.forEach((attribute) => {
      switch (attribute.attributeId) {
        // Corrective action author
        case BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_AUTHOR.toString():
          this.correctiveActionAuthor = attribute.attributeValue;
          break;

        // Corrective action last author
        case BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_LAST_AUTHOR.toString():
          this.correctiveActionLastAuthor = attribute.attributeValue;
          break;

        // Corrective action description
        case BidoAttributeConstants.EVENT_DEFECT_CORRECTIVE_ACTION_DESCRIPTION.toString():
          this.correctiveActionDescription = attribute.attributeValue;
          break;

        // Defect author
        case BidoAttributeConstants.EVENT_DEFECT_AUTHOR.toString():
          this.defectAuthor = attribute.attributeValue;
          this.dbdefectAuthor = this.defectAuthor;
          break;

        // Defect author
        case BidoAttributeConstants.EVENT_DEFECT_DETECTION_CONTEXT.toString():
          this.defectDetectionContext = attribute.attributeValue;
          this.dbDefectDetectionContext = this.defectDetectionContext;
          break;

        // Defect extension number
        case BidoAttributeConstants.EVENT_DEFECT_EXTENSION.toString():
          this.defectExtensionNumber = attribute.attributeValue;
          break;

        // Defect flight restriction
        case BidoAttributeConstants.EVENT_DEFECT_FLIGHT_RESTRICTIONS.toString():
          this.deferralFlightRestriction = attribute.attributeValue;
          break;

        // Defect inspection mean
        case BidoAttributeConstants.EVENT_DEFECT_INSPECTION_MEAN.toString():
          const selectedInspectionMean = this.inspectionMeanList.find(
            (inspectionMean) => inspectionMean.value === attribute.attributeValue
          );
          if (!!selectedInspectionMean) {
            this.selectedInspectionMean = selectedInspectionMean.label;
          }

          this.dbSelectedInspectionMean = this.selectedInspectionMean;
          break;

        // Fault code
        case BidoAttributeConstants.EVENT_FAULT_CODE.toString():
          const selectedFaultCode = this.faultCodeList.find(
            (faultCode) => faultCode.value === attribute.attributeValue
          );
          if (!!selectedFaultCode) {
            this.selectedFaultCode = selectedFaultCode.label;
          }

          this.dbSelectedFaultCode = this.selectedFaultCode;
          break;

        // Defect is critical
        case BidoAttributeConstants.EVENT_DEFECT_IS_CRITICAL.toString():
          this.defectIsCritical = !!attribute.attributeValue && attribute.attributeValue === 'true';
          this.dbDefectIsCritical = this.defectIsCritical;
          break;

        // Defect last author
        case BidoAttributeConstants.EVENT_DEFECT_LAST_AUTHOR.toString():
          this.defectLastAuthor = attribute.attributeValue;
          break;

        // Defect log number
        case BidoAttributeConstants.EVENT_DEFECT_LOG_NUMBER.toString():
          this.defectLogNumber = attribute.attributeValue;
          this.dbDefectLogNumber = this.defectLogNumber;
          break;

        // Defect proposed task
        case BidoAttributeConstants.EVENT_DD_TASK_PROPOSED_TO_PROCESS.toString():
          this.defectProposedTask = attribute.attributeValue;
          break;

        // Deferral author
        case BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_AUTHOR.toString():
          this.deferralAuthor = attribute.attributeValue;
          break;

        // Deferral delay authorization number
        case BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZATION_NUMBER.toString():
          this.deferralDelayAuthorizationNumber = attribute.attributeValue;
          break;

        // Deferral delay authorized unit
        case BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_UNIT.toString():
          this.deferralDelayAuthorizedUnit = attribute.attributeValue;
          break;

        // Deferral delay authorized value
        case BidoAttributeConstants.EVENT_DD_DELAY_AUTHORIZED_VALUE.toString():
          this.deferralDelayAuthorizedValue = attribute.attributeValue;
          break;

        // Deferral delay category
        case BidoAttributeConstants.EVENT_DD_DELAY_CATEGORY.toString():
          this.deferralDelayCategory = attribute.attributeValue;
          break;

        // Deferral flight restriction
        case BidoAttributeConstants.EVENT_WORK_POSTPONEMENT_REQUEST_FLIGHT_RESTRICTIONS.toString():
          this.deferralFlightRestriction = attribute.attributeValue;
          break;

        // Deferral last author
        case BidoAttributeConstants.EVENT_DEFECT_DEFERRAL_LAST_AUTHOR.toString():
          this.deferralLastAuthor = attribute.attributeValue;
          break;

        // SRM EVENT_DEFECT_SRM_REFERENCE
        case BidoAttributeConstants.EVENT_DEFECT_SRM_REFERENCE.toString():
          this.defectSrmReference = attribute.attributeValue;
          this.dbDefectSrmReference = this.defectSrmReference;
          break;

        case BidoAttributeConstants.EVENT_LOCATION.toString():
          this.location = attribute.attributeValue;
          break;

        default:
          break;
      }
    });
    this.dynamicAttributesService.setValues(this.dynamicAttributes, this.defectAttributeList);
  }

  private loadCorrectiveActionComponentDecisionList(): void {
    const installKey = this.getComponentName() + '.install';
    const removeKey = this.getComponentName() + '.remove';
    this.translateService.get([installKey, removeKey]).subscribe((results) => {
      if (!!results) {
        this.correctiveActionComponentDecisionList = [
          { label: results[installKey], value: AWPropertiesConstants.DECISION_BBIS_INSTALL_KEY },
          { label: results[removeKey], value: AWPropertiesConstants.DECISION_BBTWS_REMOVE_KEY }
        ];
      }
    });
  }

  private loadDocumentTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.DOC_EVENT_CATEGORY_MAP).subscribe((results) => {
      this.documentTypeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadDocumentList(notificationCode: string): void {
    this.eventService.findAllBidoDocumentationByNotificationCode(notificationCode).subscribe((results) => {
      this.documentList = ListUtils.orEmpty(results).filter((document) => !!document.docName);
      this.documentTable = this.documentList.map((document) => this.createDocumentRow(document));
    });
  }

  private loadEquipmentObject(equipmentCode: string): void {
    this.eventService.findBidoEquipment({ equipmentCode }).subscribe((equipment) => {
      if (!!equipment.operationalStatus) {
        equipment.operationalStatus = this.propertyOperationalStatus.filter(
          (resp) => resp.value === equipment.operationalStatus
        )[0].label;
      }
      this.masterEquipment = equipment;

      if (!!this.masterEquipment) {
        this.eventService
          .getEquipmentRepresentation(this.masterEquipment)
          .subscribe((equipmentRepresentationResult) => {
            this.notificationAsset = StringUtils.orEmpty(equipmentRepresentationResult);
          });

        if (!!this.masterEquipment.equipmentCode) {
          this.eventService
            .findAllFlInStructureByEquipmentCodeForDefect(this.masterEquipment.equipmentCode)
            .subscribe((results) => {
              this.flCodeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
            });
        }

        if (!!this.masterEquipment && !!this.masterEquipment.familyVariantCode) {
          this.masterFamilyVariantCode = this.masterEquipment.familyVariantCode;
          this.eventCreateService
            .haspropertyByFamilyCode(
              BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
                this.masterEquipment.familyVariantCode
              ) as string
            )
            .subscribe((resp: boolean) => {
              this.hasPropertyByCode = !!resp ? resp : false;
            });
        }

        this.isAircraft();
        this.fillAttibuteDropdown();
        this.loadCustomerOperatorOwnerName();
        // Measure Tab
        this.loadMeasureTableData();
        this.loadArisingEventData();
        this.loadDiffusionTableData();
        this.loadContextTable();
        this.loadSymptomTable();

        this.eventCreateService.getFunctionLocationLabel(this.defect).subscribe((res) => {
          this.functionLocationStr = res;
        });
      }
    });
  }

  private loadPnTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.PN_TYPE_MAP).subscribe((results) => {
      this.pnTypeList = ListUtils.orEmpty(results);
    });
  }

  private loadTypeList(categoryList?: LabelValue<string>[]): Observable<BidoNotificationTypeDTO[]> {
    if (ListUtils.isNullOrEmpty(categoryList)) {
      return of([]);
    } else {
      const selectedCategory = (categoryList as LabelValue<string>[]).find(
        (category) => category.value === AWPropertiesConstants.EVENT_CATEGORY_DEFECT_KEY
      );

      return selectedCategory
        ? this.eventService.findAllBidoNotificationTypeByTypeCategory(selectedCategory.value)
        : of([]);
    }
  }

  private setTypeList(typeList: BidoNotificationTypeDTO[]): void {
    this.typeList = typeList
      .filter((type) => !!type && !!type.typeCode && !!type.typeDescription)
      .map((type) => {
        return {
          label: type.typeDescription as string,
          value: type.typeCode as string
        };
      });
  }

  private setComponentSubtitle(): void {
    if (!StringUtils.isNullOrEmpty(this.defectLogNumber)) {
      this.componentSubtitle = this.defectLogNumber as string;
    } else if (!StringUtils.isNullOrEmpty(this.defect.notificationSubject)) {
      this.componentSubtitle = this.defect.notificationSubject as string;
    } else if (!StringUtils.isNullOrEmpty(this.defect.typeCode)) {
      const selectedType = this.typeList.find((type) => type.value === this.defect.typeCode);
      if (!!selectedType && !StringUtils.isNullOrEmpty(selectedType.label)) {
        this.componentSubtitle = selectedType.label as string;
      }
    }

    this.displayComponentContext(this.componentSubtitle, this.isCreateOpenMode);
  }

  private setConstants(): void {
    const defectAta = 'global.item';
    const defectEquipment = 'global.equipment';
    const defectFunctionalLocation = 'global.functionalLocation';
    const defectPart = 'global.part';
    this.translateService
      .get([defectAta, defectEquipment, defectFunctionalLocation, defectPart])
      .subscribe((results) => {
        if (!!results) {
          this.rootCauseList = [
            {
              label: results[defectAta],
              value: 'defectAta'
            },
            {
              label: results[defectEquipment],
              value: 'defectEquipment'
            },
            {
              label: results[defectFunctionalLocation],
              value: 'defectFunctionalLocation'
            },
            {
              label: results[defectPart],
              value: 'defectPart'
            }
          ];
        }
      });
  }

  private setCorrectiveActionComponentsTableColList(): void {
    this.correctiveActionComponentTableColList = [
      { field: 'birePnPnCode', alignment: 'left' },
      { field: 'stockMvtSn', alignment: 'left' },
      { field: 'stockMvtQuantity', alignment: 'right', width: '6rem' },
      { field: 'decision', alignment: 'left', width: '6rem' },
      { field: 'isRequestForPart', alignment: 'center', width: '9rem' }
    ];
  }

  private setDefectStatus(key: string): void {
    const selectedStatus = this.statusList.find((status) => status.value === key);
    if (!!selectedStatus) {
      this.defect.status = selectedStatus.value;

      this.updateComponentsVisibility();
    }
  }

  private setDocumentTableColList(): void {
    this.documentTableColList = [
      { field: 'docName', alignment: 'left', width: '30%' },
      { field: 'docType', alignment: 'left', width: '30%' },
      { field: 'docExtension', alignment: 'left', width: '12.5%' },
      { field: 'docSize', alignment: 'left', width: '12.5%' },
      { field: 'isChecked', alignment: 'center', width: '5%' },
      { field: 'docPublicationDate', alignment: 'left', width: '10%' }
    ];
  }

  private setWorkPackageAndWorkOrderDescriptions(
    workPackage: BidmProjectDTO | undefined,
    workOrder: BidmWorkOrderDTO | undefined
  ): void {
    if (!!workPackage && workPackage.projectNumber !== undefined && workPackage.projectNumber !== null) {
      let defectCAWPDescription = workPackage.projectNumber.toString();
      if (!StringUtils.isNullOrEmpty(workPackage.projectName)) {
        defectCAWPDescription += ` (${workPackage.projectName})`;
      }
      this.defectCAWPDescription = defectCAWPDescription;

      if (!!workOrder && !StringUtils.isNullOrEmpty(workOrder.woCode)) {
        let defectCAWODescription = workOrder.woCode;
        if (!StringUtils.isNullOrEmpty(workOrder.woDescription)) {
          defectCAWODescription += ` (${workOrder.woDescription})`;
        }
        this.defectCAWODescription = defectCAWODescription;
      }
    }
  }

  private updateComponentsVisibility(): void {
    this.setCorrectiveActionBlockVisibility();
    this.setDefectAskForDeferralVisibility();
    this.setDefectBlockVisibility();
    this.setDeferralBlockVisibility();
    this.setDeferralAcceptDeferralVisibility();
    this.setDeferralRefuseDeferralVisibility();
  }

  /**************************************************************************
   * Defect tab
   *************************************************************************/

  public acceptDeferral(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        if (!!this.defect.status && this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY) {
          const derogationAgreementExists = this.documentList.some((document) => {
            return (
              !!document.docCategory &&
              document.docCategory === AWPropertiesConstants.DOC_EVENT_CATEG_DEROGATION_AGREEMENT
            );
          });

          const authorizationNumberExists = !StringUtils.isNullOrEmpty(this.deferralDelayAuthorizationNumber);

          const selectedProperty = awConfiguration.find(
            (property) => property.value === AWPropertiesConstants.DEFECT_AGREEMENT_NEEDED_FOR_DEFERRAL
          );
          const noControlForDeferralNeeded =
            !!selectedProperty &&
            !StringUtils.isNullOrEmpty(selectedProperty.label) &&
            (selectedProperty.label.trim().toUpperCase() === 'X' ||
              selectedProperty.label === '1' ||
              selectedProperty.label.trim().toUpperCase() === 'TRUE');

          if (noControlForDeferralNeeded || derogationAgreementExists || authorizationNumberExists) {
            this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_DEFERRED_KEY);
          } else {
            this.messageService.showWarningMessage('');
          }
        }
        this.saveDefect();
      });
  }

  public askForDeferral(): void {
    if (this.isMELAlertVisible && this.selectedRootCause === 'defectFunctionalLocation') {
      this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY);
    } else {
      this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY);
    }
    this.saveDefect();
    const sendEventNotificationToContactsDTO: SendEventNotificationToContactsDTO = {
      bidoNotificationDTOId: {
        notificationCode: this.defect.notificationCode as string
      },
      isRootCauseNewOrDefect: true,
      documentList: [],
      sendGlobalMail: false
    };
    this.eventCreateService
      .sendEventNotificationToContactsAlternate(sendEventNotificationToContactsDTO)
      .subscribe((res) => {
        // this.messageService.showSuccessMessage(this.getTranslateKey('notificationSent'));
      });
  }

  public cancelDeferral(): void {
    this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_OPENED_KEY);
    this.saveDefect();
  }

  public createCorrectiveActionComponent(): void {
    this.currentCorrectiveActionComponent = undefined;
    this.correctiveActionComponentDialogOpenMode = ComponentOpenMode.Create;
    this.showCorrectiveActionComponentDialog = true;
  }

  public deleteCorrectiveActionComponent(): void {
    const partialMessageKey =
      this.selectedCorrectiveActionComponentList.length > 1
        ? 'confirmDeleteSelectedComponents'
        : 'confirmDeleteSelectedComponent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedCorrectiveActionComponentList.forEach((res) => {
          if (!!res.id) {
            this.deletedCorrectiveActionComponent.push(res.id);
          }
        });
        this.correctiveActionComponentList = this.correctiveActionComponentList.filter(
          (correctiveActionComponent) =>
            !this.selectedCorrectiveActionComponentList.some((selectedRow) => selectedRow === correctiveActionComponent)
        );

        this.correctiveActionComponentTable = this.correctiveActionComponentTable.filter(
          (correctiveActionComponent) =>
            !this.selectedCorrectiveActionComponentList.some((selectedRow) => selectedRow === correctiveActionComponent)
        );

        this.selectedCorrectiveActionComponentList = [];
      }
    });
  }

  public editCorrectiveActionComponent(): void {
    if (this.selectedCorrectiveActionComponentList.length === 1) {
      let rowIndex = -1;
      this.correctiveActionComponentList.filter((row, i) => {
        if (
          row.birePnPnCode === this.selectedCorrectiveActionComponentList[0].birePnPnCode &&
          // row.stockMvtSn === this.selectedCorrectiveActionComponentList[0].stockMvtSn &&
          row.stockMvtQuantity === this.selectedCorrectiveActionComponentList[0].stockMvtQuantity
        ) {
          rowIndex = i;
        }
      });
      this.currentCorrectiveActionComponent = { ...this.correctiveActionComponentList[rowIndex] };
      this.currentCorrectiveActionComponentIndex = rowIndex;
      this.correctiveActionComponentDialogOpenMode = ComponentOpenMode.Write;
      this.showCorrectiveActionComponentDialog = true;
    }
  }

  public onChangeDefectRootCause(newRootCause: string): void {
    this.displayDefectAtaBlock = newRootCause === 'defectAta';
    this.displayDefectEquipmentBlock = newRootCause === 'defectEquipment';
    this.displayDefectFunctionalLocationBlock = newRootCause === 'defectFunctionalLocation';
    this.displayDefectPartBlock = newRootCause === 'defectPart';

    this.resetRootCauseFields();
  }

  private resetRootCauseFields() {
    this.defectEquipmentAssetCode = undefined;
    this.defectEquipmentSn = undefined;
    this.defectEquipmentPn = undefined;
    this.defectEquipmentName = undefined;
    this.rootCausePn = undefined;
    this.rootCauseQuantity = undefined;
    this.defectAtaCode = {};
    this.rootCauseFlCode = undefined;

    this.defect.bidoRootCauseDTO = {};
  }

  public openCorrectiveActionComponent(): void {
    this.currentCorrectiveActionComponent = this.selectedCorrectiveActionComponentList[0];
    this.correctiveActionComponentDialogOpenMode = ComponentOpenMode.Read;
    this.showCorrectiveActionComponentDialog = true;
  }

  public openCorrectiveActionTask(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.showCorrectiveActionTaskDialog = true;
    }
  }

  public openCorrectiveActionWorkPackage(): void {
    if (!this.isReadOpenMode) {
      this.showCorrectiveActionWorkPackageDialog = true;
    }
  }

  public openDefectEquipmentAssetCode(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      this.showDefectEquipmentAssetCodeDialog = true;
    }
  }

  public openDefectPart(event: MouseEvent): void {
    if (!this.isReadOpenMode && !DomUtils.isTargetDisabled(event.target)) {
      let familyVariantSelected: string | undefined;
      if (!!this.masterEquipment) {
        const familyCode = BidoFamilyVariantUtils.getFamilyCodeFromFamilyVariantCode(
          this.masterEquipment.familyVariantCode
        );
        const variantCode = BidoFamilyVariantUtils.getVariantCodeFromFamilyVariantCode(
          this.masterEquipment.familyVariantCode
        );

        familyVariantSelected = BireFamilyVariantUtil.buildFamilyVariantCodeWithStructureType(
          familyCode,
          AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
          variantCode
        );
      }

      this.partSearchInput = {
        familyVariantSelected,
        type: AWPropertiesConstants.PN_TYPE_PART_KEY,
        toolSearch: false
      };

      this.showDefectPartDialog = true;
    }
  }

  public prepareWorkPackage(): void {
    this.openSelectedWorkPackages();
  }

  public openSelectedWorkPackages(): void {
    if (!!this.defectCAWPDescription) {
      if (!!this.defectTargetWorkPackage) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
          openMode: ComponentOpenMode.Write,
          objectId: this.serializationService.serialize({ wpId: this.defectTargetWorkPackage.projectId })
        };
        const labelKey = 'transaction.' + data.componentId;

        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public toggleDefectAta(): void {
    if (this.isDefectAtachecked) {
      this.isDefectEquipmentchecked = false;
      this.isDefectFunctionalLocationchecked = false;
      this.isDefectPartchecked = false;
    }
  }

  public toggleDefectEquipment(): void {
    if (this.isDefectEquipmentchecked) {
      this.isDefectAtachecked = false;
      this.isDefectFunctionalLocationchecked = false;
      this.isDefectPartchecked = false;
    }
  }

  public toggleDefectFunctionalLocation(): void {
    if (this.isDefectFunctionalLocationchecked) {
      this.isDefectAtachecked = false;
      this.isDefectEquipmentchecked = false;
      this.isDefectPartchecked = false;
    }
  }

  public toggleDefectPart(): void {
    if (this.isDefectPartchecked) {
      this.isDefectAtachecked = false;
      this.isDefectEquipmentchecked = false;
      this.isDefectFunctionalLocationchecked = false;
    }
  }

  private setCorrectiveActionBlockVisibility(): void {
    this.correctiveActionBlockVisibility = true;
  }

  private setDefectAskForDeferralVisibility(): void {
    this.defectAskForDeferralVisibility =
      !!this.defect.status && this.defect.status === AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
  }

  private setDefectBlockVisibility(): void {
    this.defectBlockVisibility = true;
  }

  private setDeferralBlockVisibility(): void {
    this.deferralBlockVisibility =
      !!this.defect.status &&
      (this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY ||
        this.defect.status === AWPropertiesConstants.EVENT_STATUS_DEFERRED_KEY ||
        this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY);
  }

  private setDeferralAcceptDeferralVisibility(): void {
    this.deferralAcceptDeferralVisibility =
      !!this.defect.status &&
      (this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY ||
        this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY);
  }

  private setDeferralRefuseDeferralVisibility(): void {
    this.deferralRefuseDeferralVisibility =
      !!this.defect.status &&
      (this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_ANALYSIS_KEY ||
        this.defect.status === AWPropertiesConstants.EVENT_STATUS_UNDER_INVESTIGATION_KEY);
  }

  /**************************************************************************
   * Documents tab
   *************************************************************************/

  public deleteSelectedDocumentList(): void {
    const partialMessageKey =
      this.selectedDocumentList.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: 'global.' + partialMessageKey,
      accept: () => {
        this.selectedDocumentList.forEach((selectedRow) => {
          const selectedDocument = this.findMatchingDocument(selectedRow);

          if (!!selectedDocument) {
            const documentsAddedWithoutSelection = this.documentAddedList.filter(
              (document) => !this.areSameDocument(document, selectedDocument)
            );
            // list of added objects contains the selection
            if (this.documentAddedList.length !== documentsAddedWithoutSelection.length) {
              // Remove selection from added objects
              this.documentAddedList = documentsAddedWithoutSelection;
            } else {
              const documentsUpdatedWithoutSelection = this.documentUpdatedList.filter(
                (document) => !this.areSameDocument(document, selectedDocument)
              );
              // list of updated objects contains the selection
              if (this.documentUpdatedList.length !== documentsUpdatedWithoutSelection.length) {
                // Remove selection from added objects
                this.documentUpdatedList = documentsUpdatedWithoutSelection;
              }

              this.documentRemovedList = [...this.documentRemovedList, selectedDocument];
            }

            let docIndex = -1;
            this.documentTable.filter((doc, index) => {
              if (doc.docName === selectedDocument.docName) {
                docIndex = index;
              }
            });

            this.documentTable.splice(docIndex, 1);
          }
        });

        this.documentList = this.documentList.filter((document) => {
          return !this.selectedDocumentList.some((selectedRow) =>
            this.areSameDocument(document, this.findMatchingDocument(selectedRow))
          );
        });

        // this.documentTable = this.documentTable.filter((documentRow) => {
        //   return !this.selectedDocumentList.some((selectedRow) => {
        //     return this.areSameDocument(this.findMatchingDocument(documentRow), this.findMatchingDocument(selectedRow));
        //   });
        // });

        this.selectedDocumentList = [];
      }
    });
  }

  public downloadFiles(): void {
    this.selectedDocumentList.forEach((documentRow) => {
      const document = this.findMatchingDocument(documentRow);
      if (!!document) {
        FileUtils.downloadFile(document.docFile, document.docName);
      }
    });
  }

  public editDocument(): void {
    if (this.selectedDocumentList.length === 1) {
      const selectedDocument = this.findMatchingDocument(this.selectedDocumentList[0]);

      if (!!selectedDocument) {
        this.currentDocumentIndex = this.documentList.findIndex((document) =>
          this.areSameDocument(document, selectedDocument)
        );

        selectedDocument.docType = selectedDocument.docCategory;
        this.currentDocument = { ...selectedDocument };
        this.documentDialogOpenMode = ComponentOpenMode.Write;
        this.showDocumentDialog = true;
      }
    }
  }

  public openDocument(): void {
    if (this.selectedDocumentList.length === 1) {
      const selectedDocument = this.findMatchingDocument(this.selectedDocumentList[0]);

      if (!!selectedDocument) {
        this.currentDocument = selectedDocument;
        this.currentDocumentIndex = -1;
        this.documentDialogOpenMode = ComponentOpenMode.Read;
        this.showDocumentDialog = true;
      }
    }
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentList.some((document) => document.docName === file.name);
      if (fileExists) {
        this.messageService.showWarningMessage('global.warningOnFileExists');
      } else {
        FileUtils.getFileContentAsBase64(file, (fileContent) => {
          if (!!fileContent) {
            const document: BidoDocumentationDTO = {
              docFile: fileContent,
              docName: file.name,
              docPublicationDate: new Date()
            };
            this.documentList = [...this.documentList, document];
            this.documentAddedList = [...this.documentAddedList, document];
            this.documentTable = [...this.documentTable, this.createDocumentRow(document)];
          }
        });
      }

      fileUploader.clear();
    }
  }

  private areSameDocument(obj1: BidoDocumentationDTO | undefined, obj2: BidoDocumentationDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
    }
  }

  private findMatchingDocument(row: DocumentRow | undefined): BidoDocumentationDTO | undefined {
    if (!!row) {
      return this.documentList.find((document) => {
        return !!document.docName && document.docName === row.docName;
      });
    } else {
      return undefined;
    }
  }

  /**************************************************************************
   * Corrective action component dialog
   *************************************************************************/

  public onAddCorrectiveActionComponent(component: BidtStockMvtDTO): void {
    if (this.selectedCorrectiveActionComponentList.length === 0) {
      this.currentCorrectiveActionComponentIndex = -1;
    }
    if (!!component) {
      if (this.currentCorrectiveActionComponentIndex !== -1) {
        this.correctiveActionComponentList[this.currentCorrectiveActionComponentIndex] = component;
        this.correctiveActionComponentTable[this.currentCorrectiveActionComponentIndex] = this.createComponentRow(
          component
        );
      } else {
        this.correctiveActionComponentList = [...this.correctiveActionComponentList, component];
        this.correctiveActionComponentTable = [
          ...this.correctiveActionComponentTable,
          this.createComponentRow(component)
        ];
      }
    }

    this.selectedCorrectiveActionComponentList = [];
  }

  /**************************************************************************
   * Corrective action work package dialog
   *************************************************************************/

  public onCreateWorkPackage(data: { workPackage: BidmProjectDTO; workcenter: string }): void {
    this.saveDefect();

    const input: CreateWorkPackageFromEventInput = {
      bidoEquipmentDTO: this.masterEquipment,
      bidoNotificationDTO: this.defect,
      bidmProjectDTO: data.workPackage,
      bidoNotificationAttributeDTOList: this.bireNotificationAttributes
    };
    this.eventService.createWorkPackageFromEvent(input).subscribe((result) => {
      this.defectTargetWorkPackage = result.defectTargetWorkPackageData;
      this.defectTargetWorkOrder = result.defectTargetWorkOrderData;

      this.displayComponents(result.defectTargetWorkOrderData);
      this.setWorkPackageAndWorkOrderDescriptions(result.defectTargetWorkPackageData, result.defectTargetWorkOrderData);
    });
  }

  /**************************************************************************
   * Corrective action task dialog
   *************************************************************************/

  public onAddCorrectiveActionTask(task: BireTaskDTO): void {
    this.defectProposedTask = StringUtils.orEmpty(task.taskCode).trim();
    this.bireTaskDTO = task;
    if (!!task.taskVersion && !StringUtils.isEmpty(task.taskVersion)) {
      this.defectProposedTask += '-' + task.taskVersion.trim();
      if (StringUtils.isNullOrEmpty(this.correctiveActionDescription)) {
        this.correctiveActionDescription = task.taskDesignation;
      }
    }
  }

  /**************************************************************************
   * Defect part dialog
   *************************************************************************/

  public onSelectDefectEquipmentAssetCode(equipment: BidoEquipmentLWO): void {
    this.defectEquipmentAssetCode = equipment.equipmentCode;
    this.fetchEquipmentName(equipment.equipmentCode, (name: string) => {
      this.defectEquipmentName = !!name ? name : undefined;
    });
    this.defectEquipmentPn = equipment.pnCode;
    this.defectEquipmentSn = equipment.sn;
  }

  private fetchEquipmentName(assetCode, callback) {
    const equipmentId: BidoEquipmentDTOId = {
      equipmentCode: assetCode
    };
    this.eventCreateService.getEquipmentName(equipmentId).subscribe((res) => {
      callback(res);
    });
  }

  /**************************************************************************
   * Defect part dialog
   *************************************************************************/

  public onSelectDefectPart(pn: BirePnDTO): void {
    this.rootCausePn = pn.pnCode;

    if (this.rootCauseQuantity === undefined || this.rootCauseQuantity === null) {
      this.rootCauseQuantity = 0;
    }
  }

  /**************************************************************************
   * Document dialog
   *************************************************************************/

  public onAddDocument(document: BidoDocumentationDTO): void {
    if (!!document) {
      if (this.currentDocumentIndex !== -1) {
        document.docCategory = document.docType;
        this.documentList[this.currentDocumentIndex] = document;
        this.documentTable[this.currentDocumentIndex] = this.createDocumentRow(document);

        const updatedDocumentIndex = this.documentUpdatedList.findIndex((documentUpdated) =>
          this.areSameDocument(documentUpdated, document)
        );

        if (!!this.documentList[this.currentDocumentIndex].docCode) {
          document.docCategory = document.docType;
          if (updatedDocumentIndex !== -1) {
            this.documentUpdatedList[updatedDocumentIndex] = document;
          } else {
            this.documentUpdatedList = [...this.documentUpdatedList, document];
          }
        } else {
          const addedIndex = this.documentAddedList.findIndex((documentAdded) =>
            this.areSameDocument(documentAdded, document)
          );
          document.docCategory = document.docType;
          this.documentAddedList[addedIndex] = document;
        }
      } else {
        const isAdded = this.documentAddedList.some((documentAdded) => this.areSameDocument(documentAdded, document));
        if (isAdded) {
          this.messageService.showWarningMessage('global.warningOnDocumentExists');
        } else {
          document.docCategory = document.docType;
          this.documentList = [...this.documentList, document];
          this.documentAddedList = [...this.documentAddedList, document];
          this.documentTable = [...this.documentTable, this.createDocumentRow(document)];
        }
      }
    }

    this.selectedDocumentList = [];
  }

  public openTaskCode() {
    if (!!this.bireTaskDTO) {
      this.openTask(this.bireTaskDTO, ComponentOpenMode.Read);
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

  public openWorkPackage(): void {
    if (!!this.defectTargetWorkPackage) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({ wpId: this.defectTargetWorkPackage.projectId })
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openWorkOrderUC(id: string) {
    // TODo
  }

  /*************************************************************************
   * Status Update History Popup Operations
   *************************************************************************/
  public openStatusUpdatesPopup() {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: this.defect.notificationCode as string
    };
    this.showStatusUpdatesPopup = true;
    this.eventStatus = { ...this.defect };
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true, alignment: 'left' },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input, alignment: 'left' },
      { field: 'type', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'subject', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'status', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'cause', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'priority', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'owner', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'operator', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input }
    ];
    this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
    this.tableStatusUpdatesData = {
      componentId: 'EventCreateComponent.historicPopup',
      tableCols: columns,
      tableRows: this.eventCreateService.findHBidoNotifications(bidoNotificationDTOId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  // tslint:disable-next-line:no-string-literal
  public openFunctionLocationUC() {
    if (
      !!this.melAlertObject &&
      !!this.melAlertObject.defectMELAlertObject &&
      // tslint:disable-next-line:no-string-literal
      !!this.melAlertObject.defectMELAlertObject['fl_CODE']
    ) {
      const objectId: BidoFlDTO = {
        // tslint:disable-next-line:no-string-literal
        flCode: this.melAlertObject.defectMELAlertObject['fl_CODE'],
        // tslint:disable-next-line:no-string-literal
        flDescription: this.melAlertObject.defectMELAlertObject['fl_DESCRIPTION']
      };
      const labelKey = 'transaction.FunctionalLocationFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FunctionalLocationFormComponent',
        objectId: objectId != undefined ? this.serializationService.serialize(objectId) : undefined,
        openMode: ComponentOpenMode.Read
      };

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  /*************************************************************************
   * Asset At Date Tab Operations
   *************************************************************************/
  public downloadACRSForm() {
    this.eventCreateService.generateAPRSCertificateForACRSEvent(this.defect).subscribe((result) => {
      FileUtils.downloadFile(result.fileContent, result.fileName);
    });
  }

  public downloadEASAForm() {
    this.eventCreateService.generateEASACertificateFromACRSEvent(this.defect).subscribe((result) => {
      FileUtils.downloadFile(result.fileContent, result.fileName);
    });
  }

  public updateACRS() {
    let partialMessageKey = this.getTranslateKey('closeACRSEvent');
    if (this.showForm1()) {
      partialMessageKey = this.getTranslateKey('closeForm1Event');
    }
    this.confirmationService.confirm({
      messageKey: partialMessageKey,
      accept: () => {
        this.eventCreateService.updateBidoNotificationACRS(this.defect).subscribe((res) => {
          // this.getBidoNotificationData();
          // this.disableStatus = true;
        });
      }
    });
  }

  public showForm1(): boolean {
    return (
      !!this.masterEquipment &&
      (this.masterEquipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_ENGINE_KEY ||
        this.masterEquipment.equipmentFunction === AWPropertiesConstants.ITEM_FAMILY_CODE_MAJOR_EQUIPMENT_KEY)
    );
  }

  /*************************************************************************
   * Measure Tab Operations
   *************************************************************************/
  private loadMeasureTableData() {
    this.isLoadingMeasureTable = true;
    const assetAtDateInput: AssetAtDateInput = {
      equipmentCode: this.masterEquipment.equipmentCode || '',
      fromDate: this.defect.reportingPeriodStartDate
    };
    this.eventCreateService
      .assetAtDateForMeasureTab(assetAtDateInput)
      .subscribe((res: FindBidoCounterReferencesByEquipmentCodeOutput[]) => {
        this.isLoadingMeasureTable = false;
        this.bidoMeasuresDisplayed = this.transformMeasures(res || []);
        this.loadMeasureChartData();
      });
  }

  private loadCustomerOperatorOwnerName(): void {
    if (!!this.masterEquipment) {
      if (!!this.masterEquipment.ownerCustomerCode) {
        this.eventService
          .findBidoCustomer({ customerCode: this.masterEquipment.ownerCustomerCode })
          .subscribe((customer) => {
            this.masterEquipment.ownerCustomerCode = `${this.masterEquipment.ownerCustomerCode} (${StringUtils.orEmpty(
              customer.customerName
            )})`;
          });
      }

      if (!!this.masterEquipment.operatorCustomerCode) {
        this.eventService
          .findBidoCustomer({ customerCode: this.masterEquipment.operatorCustomerCode })
          .subscribe((customer) => {
            this.masterEquipment.operatorCustomerCode = `${
              this.masterEquipment.operatorCustomerCode
            } (${StringUtils.orEmpty(customer.customerName)})`;
          });
      }
    }
  }

  public isAircraft(): boolean {
    if (
      !!this.masterEquipment &&
      this.masterEquipment.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY
    ) {
      return true;
    }

    return false;
  }

  public isEstimateCounterVisible() {
    if (!!this.defect && !!this.defect.bidoNotificationTypeDTO) {
      if (
        AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY === this.defect.bidoNotificationTypeDTO.typeCategory &&
        !this.hasPropertyByCode
      ) {
        return true;
      }
    }

    return false;
  }

  public estimateCounter() {
    this.eventCreateService.generateEstimatedMeasures(this.defect).subscribe((res) => {
      this.loadMeasureTableData();
    });
  }

  public updateMeasure() {
    this.openEquipment(this.masterEquipment.equipmentCode, ComponentOpenMode.Read);
  }

  private initMeasureChart(): void {
    this.measureVariationData = {
      datasets: [],
      labels: []
    };
    this.setMeasureChartOptions();
  }

  private initChart(): void {
    this.chartType = 'line';
    this.usageChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
    this.usageGraphData = {
      datasets: [
        {
          // tslint:disable-next-line:no-magic-numbers
          data: [], // To do
          label: 'Hours',
          borderColor: '#D3C632',
          backgroundColor: '#D3C632',
          hoverBackgroundColor: '#D3C632',
          fill: false
        },
        {
          // tslint:disable-next-line:no-magic-numbers
          data: [], // To do
          label: 'Cycle',
          borderColor: '#42A5F5',
          backgroundColor: '#42A5F5',
          hoverBackgroundColor: '#42A5F5',
          fill: false
        }
      ],
      labels: [] // To do
    };
  }

  private transformMeasures(listMeasures: FindBidoCounterReferencesByEquipmentCodeOutput[]) {
    return listMeasures.map((obj) => {
      const measureDataRow: MeasureDataRow = {
        _obj: obj,
        counterCode: obj.counterCode,
        counterUnit: obj.counterUnit,
        cumulatedCounterValue: obj.cumulatedCounterValue,
        // ratingCounterValue: obj.ratingCounterValue,
        // ratingText: obj.ratingText,
        readingDate: this.dateService.dateWithHourToString(obj.counterDate),
        referenceValue: obj.referenceValue,
        remainingValue: obj.remainingValue,
        dateLimit: this.dateService.dateToString(obj.dateLimit),
        source: obj.source
      };

      return measureDataRow;
    });
  }

  public loadMeasureChartData(): void {
    this.showMeasureChart = false;
    const observables: Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>[] = [];
    if (this.bidoMeasuresDisplayed.length !== 0) {
      const setUpCounters: string[] = [];
      this.bidoMeasuresDisplayed
        .filter((res) => {
          return res.counterCode === this.tsnLabel || res.counterCode === this.csnLabel;
        })
        .forEach((res) => {
          if (res && res._obj && res._obj.bidoEquipmentCounterDto) {
            const counterCode = res.counterCode || '';
            if (setUpCounters.indexOf(counterCode) < 0) {
              const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
                equipmentCode: res._obj.bidoEquipmentCounterDto.equipmentCode,
                counterCode: res._obj.bidoEquipmentCounterDto.counterCode,
                ratingCode: res._obj.bidoEquipmentCounterDto.ratingCode
                  ? res._obj.bidoEquipmentCounterDto.ratingCode
                  : '_',
                familyCode: res._obj.bidoEquipmentCounterDto.familyCode
              };

              if (counterCode === this.tsnLabel) {
                this.tsn = !!res.cumulatedCounterValue ? `${res.cumulatedCounterValue} ${res.counterUnit}` : '';
              }
              if (counterCode === this.csnLabel) {
                this.csn = !!res.cumulatedCounterValue ? `${res.cumulatedCounterValue} ${res.counterUnit}` : '';
              }
              observables.push(this.eventCreateService.getMeasureDetailTableData(bidoEquipmentCounterDTOId));
              setUpCounters.push(counterCode || '');
            }
          }
        });

      if (observables.length > 0) {
        forkJoin(observables).subscribe((results) => {
          this.showMeasureChart = true;
          this.measureChartDataObj = results;
          this.measureChartDataObj.forEach((element) => {
            this.initDateValues(element);
          });
          this.setMeasureChartData();
        });
      }
    }
  }

  private initDateValues(measures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) {
    const dateArray: Date[] = [];
    if (!!measures) {
      measures.forEach((st) => {
        if (st.readingDate !== null && st.readingDate !== undefined) {
          dateArray.push(st.readingDate);
        }
      });
    }
    this.startDate = dateArray[0];
    this.endDate = dateArray[0];

    // iterate over array values and update min & max
    dateArray.forEach((v) => {
      this.endDate = v > this.endDate ? v : this.endDate;
      this.startDate = v < this.startDate ? v : this.startDate;
    });
  }

  public setMeasureChartData() {
    if (
      this.measureChartDataObj !== null &&
      this.measureChartDataObj !== undefined &&
      this.measureChartDataObj.length > 0
    ) {
      this.measureVariationData.datasets = [];
      this.measureVariationData.labels = [];
      const dateLabels: Date[] = [];
      this.measureChartDataObj
        .filter((obj) => {
          if (this.selectedMeasureType && obj && obj.length > 0) {
            if (this.selectedMeasureType === 'ALL') {
              return true;
            }
            const getFirstElement = obj[0];

            return getFirstElement.counterCode === this.selectedMeasureType;
          }

          return true;
        })
        .forEach((element) => {
          const getFirstElement = element[0];
          if (getFirstElement) {
            const data: number[] = [];
            const datasetObj = {
              data,
              label: getFirstElement.counterCode === this.tsnLabel ? 'Hours' : 'Cycle',
              borderColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              backgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              hoverBackgroundColor: getFirstElement.counterCode === this.tsnLabel ? TSN_COLOR : CSN_COLOR,
              fill: false
            };
            this.measureVariationData.datasets.push(datasetObj);
            element.forEach((st) => {
              if (
                !!this.startDate &&
                !!this.endDate &&
                !!st.readingDate &&
                st.readingDate >= this.startDate &&
                st.readingDate <= this.endDate
              ) {
                if (st.cumulatedCounterValue !== null && st.cumulatedCounterValue !== undefined) {
                  dateLabels.push(st.readingDate);
                  datasetObj.data.push(parseInt(st.cumulatedCounterValue, 10));
                }
              }
            });
            datasetObj.data.reverse();
          }
        });

      dateLabels.sort((a, b) => {
        return b.getTime() - a.getTime();
      });
      dateLabels.reverse();
      dateLabels.forEach((label) => {
        if (this.measureVariationData.labels.indexOf(this.dateService.dateWithHourToStringWithoutHour(label)) < 0) {
          this.measureVariationData.labels.push(this.dateService.dateWithHourToStringWithoutHour(label));
        }
      });
      this.measureVariationData = { ...this.measureVariationData };
    }
  }

  private setMeasureChartOptions(): void {
    this.measureChartOptions = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  public getMonthGapToolTip(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.monthGapToolTip) {
      return row.aPotentialAlertData.monthGapToolTip;
    }

    return '';
  }

  public getAlertIcon(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (
      row &&
      row.aPotentialAlertData &&
      row.aPotentialAlertData.potentialAlertLevelInt !== null &&
      row.aPotentialAlertData.potentialAlertLevelInt !== undefined
    ) {
      return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevelInt);
    }

    return '';
  }

  public getColorByIconCode(iconCode: number): string {
    switch (iconCode.toString()) {
      case ControlConfigConstants.ICON_GREEN_LIGHT_CODE:
        return 'green';
      case ControlConfigConstants.ICON_YELLOW_LIGHT_CODE:
        return 'yellow';
      case ControlConfigConstants.ICON_RED_LIGHT_CODE:
        return 'red';
      case ControlConfigConstants.ICON_NONE_LIGHT_CODE:
        return '';
      case ControlConfigConstants.ICON_GREEN_LED_CODE:
        return 'green';
      case ControlConfigConstants.ICON_YELLOW_LED_CODE:
        return 'yellow';
      case ControlConfigConstants.ICON_RED_LED_CODE:
        return 'red';
      case ControlConfigConstants.ICON_NONE_LED_CODE:
        return '';
      default:
        return '';
    }
  }

  public getAlertIconTooltip(row: FindBidoCounterReferencesByEquipmentCodeOutput): string {
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.alertTooltip) {
      return row.aPotentialAlertData.alertTooltip;
    }

    return '';
  }

  public openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    if (!!this.masterEquipment) {
      let labelNm;
      let componentName;
      const functionNm = this.masterEquipment.equipmentFunction;

      if (!functionNm || functionNm === AWPropertiesConstants.FAMILY_FUNCTION_MAJOR_EQUIPMENT_KEY) {
        labelNm = 'transaction.EquipmentFormComponent';
        componentName = 'EquipmentFormComponent';
      } else {
        if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
          labelNm = 'transaction.EngineFormComponent';
          componentName = 'EngineFormComponent';
        } else if (functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
          labelNm = 'transaction.AircraftFormComponent';
          componentName = 'AircraftFormComponent';
        } else {
          labelNm = 'transaction.EquipmentFormComponent';
          componentName = 'EquipmentFormComponent';
        }
      }

      const labelKey = labelNm;
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
  }

  public isEngine(): boolean {
    if (
      !!this.masterEquipment &&
      this.masterEquipment.equipmentFunction === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY
    ) {
      return true;
    }

    return false;
  }

  /*************************************************************************
   * Arising Event Tab Operations
   *************************************************************************/
  private loadArisingEventData() {
    this.isLoadingEventsTable = true;
    const eventCriteriaInputDTO: EventCriteriaInputDTO = {
      notNotificationCode: this.defect.notificationCode
    };
    this.eventCreateService
      .findLinkingEventData(eventCriteriaInputDTO)
      .subscribe((res: SearchResultsDTO<BidoNotificationOutputDTO>) => {
        this.isLoadingEventsTable = false;
        this.arisingEventTableData = [];
        res.list.forEach((row) => {
          const tableArr: ArisingEventTableColsCustom = {
            notificationCode: row.notificationCode,
            typeCode: row.typeCode,
            asset: row.asset,
            closureDate: row.reportingDate,
            eventType: row.typeCode,
            notificationSubject: row.notificationSubject,
            reportingDate: row.reportingDate,
            reportingPeriodEndDate: row.reportingPeriodEndDate,
            reportingPeriodStartDate: row.reportingPeriodStartDate,
            equipmentCode: row.equipmentCode,
            equipmentFunction: row.equipmentFunction
          };

          this.arisingEventTableData.push(tableArr);
        });
      });
  }

  private setNavigationLinkList(): void {
    const operational = this.getTranslateKey('operational');
    const maintenance = this.getTranslateKey('maintenance');
    const configuration = this.getTranslateKey('configuration');
    this.translateService.get([operational, maintenance, configuration]).subscribe((results) => {
      const operationalLabel: string = results ? results[operational] : 'Asset Maintenance Plan';
      const maintenanceLabel: string = results ? results[maintenance] : 'Asset Review';
      const configurationLabel: string = results ? results[configuration] : 'Airworthiness Control';

      this.navigationLinkList = [
        {
          label: operationalLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_OPERATIONAL_KEY);
          }
        },
        {
          label: maintenanceLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_MAINTENANCE_KEY);
          }
        },
        {
          label: configurationLabel,
          command: () => {
            this.openCreateEvent(AWPropertiesConstants.EVENT_CATEGORY_CONFIGURATION_KEY);
          }
        }
      ];
    });
  }

  private openCreateEvent(code: string) {
    const bidoNotificationDTO: BidoNotificationDTO = {
      bidoNotificationTypeDTO: {
        typeCategory: code
      },
      equipmentCode: this.masterEquipment.equipmentCode,
      bidoEquipmentDTO: this.masterEquipment,
      notNotificationCode: this.defect.notificationCode
    };

    this.openLinkedCreateEventUC(bidoNotificationDTO, ComponentOpenMode.Create);
  }

  private openLinkedCreateEventUC(objectId: BidoNotificationDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };
    if (!!objectId) {
      data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public deleteEvents(): void {
    const confirmMessageKey =
      this.selectedArisingEvents.length > 1 ? 'confirmDeleteSelectedEvents' : 'confirmDeleteSelectedEvent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const eventIds: BidoNotificationDTOId[] = [];
        this.selectedArisingEvents.map((event) => {
          if (!!event && !!event.notificationCode) {
            const dto: BidoNotificationDTOId = {
              notificationCode: event.notificationCode
            };

            eventIds.push(dto);
          }
        });

        this.eventService.removeBidoNotification(eventIds).subscribe(() => {
          const successMessageKey =
            this.selectedArisingEvents.length > 1 ? 'successOnDeleteEvents' : 'successOnDeleteEvent';
          this.messageService.showSuccessMessage(this.getTranslateKey(successMessageKey));
          this.selectedArisingEvents = [];
        });
      }
    });
  }

  public openArisingEventAsset(row: BidoNotificationOutputDTO) {
    if (!!row) {
      this.openAssetUC(row.equipmentCode, ComponentOpenMode.Read, row.equipmentFunction || undefined);
    }
  }

  public openAssetUC(objectId: string | undefined, openMode: ComponentOpenMode, functionNm?: string): void {
    let labelNm;
    let componentName;
    if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_AIRCRAFT_KEY) {
      labelNm = 'transaction.AircraftFormComponent';
      componentName = 'AircraftFormComponent';
    } else if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_ENGINE_KEY) {
      labelNm = 'transaction.EngineFormComponent';
      componentName = 'EngineFormComponent';
    } else if (functionNm && functionNm === AWPropertiesConstants.FAMILY_FUNCTION_TOOL_KEY) {
      labelNm = 'transaction.ToolFormComponent';
      componentName = 'ToolFormComponent';
    } else {
      labelNm = 'transaction.EquipmentFormComponent';
      componentName = 'EquipmentFormComponent';
    }

    const labelKey: string = labelNm;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: componentName as string,
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

  public openEvent(rowData: BidoNotificationOutputDTO) {
    const bidoNotificationDTO: BidoNotificationDTO = {
      bidoNotificationTypeDTO: {
        typeCode: rowData.typeCode
      },
      notificationCode: rowData.notificationCode,
      typeCode: rowData.typeCode
    };
    this.openEventUC(bidoNotificationDTO, ComponentOpenMode.Read);
  }

  private openEventUC(objectId: BidoNotificationDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      openMode
    };
    if (!!objectId) {
      const eventId: BidoNotificationDTOId = {
        notificationCode: objectId.notificationCode as string
      };
      data.objectId = this.serializationService.serialize(eventId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*************************************************************************
   * Diffusion Tab Operations
   *************************************************************************/
  private loadDiffusionTableData() {
    if (!!this.defect.notificationCode) {
      this.isLoadingDiffusionTable = true;
      this.eventCreateService
        .findBidoNotificationContactsByNotificationCode(this.defect.notificationCode)
        .subscribe((res: BidoNotificationContactDTO[]) => {
          res.forEach((data: BidoNotificationContactDTO) => {
            if (!!data && !!data.bidoContactDTO) {
              this.diffusionTableData.push({
                customerCode: data.bidoContactDTO.customerCode,
                customerName: data.bidoContactDTO.customerName,
                contactName: data.bidoContactDTO.contactName,
                // tslint:disable-next-line:no-string-literal
                email: data.bidoContactDTO['email']
              });
            }
          });
          this.isLoadingDiffusionTable = false;
        });
    }
  }

  public sendDiffusionMail() {
    const contactsList: BidoContactDTO[] = [];
    this.selectedDiffusion.forEach((res) => {
      if (!!res && !!res.email) {
        contactsList.push({
          eMail: res.email,
          contactName: res.contactName,
          customerCode: res.customerCode,
          customerName: res.customerName,
          firstName: res.firstName,
          lastName: res.lastName
        });
      }
    });

    const sendEventNotificationToContactsDTO: SendEventNotificationToContactsDTO = {
      bidoNotificationDTOId: {
        notificationCode: this.defect.notificationCode as string
      },
      contactList: contactsList
    };
    this.eventCreateService.sendEventNotificationToContacts(sendEventNotificationToContactsDTO).subscribe((res) => {
      this.messageService.showSuccessMessage(this.getTranslateKey('notificationSent'));
    });
  }

  /*************************************************************************
   * Symptom and Context Operations
   *************************************************************************/
  public onChangeContext(dto?: BidoEventExtensionDTO) {
    this.showContextHeader = false;
    let bidoEventExtensionDTO: BidoEventExtensionDTO = {};
    if (!dto) {
      bidoEventExtensionDTO = {
        contextMissionType: this.contextTabData.missionType,
        extensionCode: this.contextTabData.symptomCode,
        notificationCode: this.defect.notificationCode
      };
    } else {
      bidoEventExtensionDTO = dto;
    }

    this.eventCreateService
      .getAddedSymptomParameterList(bidoEventExtensionDTO)
      .subscribe((result: BidoParameterDTO[]) => {
        if (!!result) {
          if (!dto) {
            this.contextTableData = [];
          } else {
            this.symptomParameterTableData = [];
          }
          result.forEach((res) => {
            if (!dto) {
              this.contextTableData.push({
                code: res.code,
                extensionCode: res.extensionCode,
                unit: res.unit,
                name: res.name
              });
            } else {
              this.symptomParameterTableData.push({
                code: res.code,
                extensionCode: res.extensionCode,
                name: res.name,
                unit: res.unit
              });
            }
          });
        }
      });

    if (!this.contextTabData.symptomCode) {
      this.contextTabData.missionType = undefined;
      this.contextTabData.symptomComment = undefined;
    }
  }

  public loadContextTable() {
    this.eventCreateService
      .findBidoEventExtensionsTypedContextByNotificationCode(this.defect.notificationCode as string)
      .subscribe((result: BidoEventSymptomTableOutputDTO) => {
        if (!!result) {
          this.contextTabData = result;
          this.contextTableData = !!result.bidoParameterCustomTableDTOList
            ? result.bidoParameterCustomTableDTOList
            : [];
        }
      });
  }

  public loadSymptomTable() {
    this.eventCreateService
      .findBidoEventExtensionsTypedSymptomByNotificationCode(this.defect.notificationCode as string)
      .subscribe((result: BidoEventSymptomTableOutputDTO[]) => {
        this.symptomRowData = [];
        this.symptomTabData = result;
        result.forEach((data) => {
          this.symptomRowData.push({
            symptomComment: data.symptomComment,
            symptomName: data.symptomName,
            symptomCode: data.symptomCode,
            rowId: Math.random()
          });
        });
      });
  }

  private hideSymptomParamheader() {
    this.selectedSymptomParam = {};
    this.showSymptomParamHeader = false;
  }

  public onSymptomRowSelect(event) {
    this.showSymptomHeader = true;
    this.hideSymptomParamheader();
    const data = event.data;
    this.symptomParameterTableData = [];
    let dtoArr: BidoEventSymptomTableOutputDTO[] = [];
    dtoArr = this.symptomTabData.filter((res) => {
      return res.symptomName === data.symptomName && res.symptomCode === data.symptomCode;
    });
    if (dtoArr.length > 0) {
      this.symptomParameterTableData = !!dtoArr[0].bidoParameterCustomTableDTOList
        ? dtoArr[0].bidoParameterCustomTableDTOList
        : [];
    } else {
      const bidoEventExtensionDTO: BidoEventExtensionDTO = {
        extensionCode: this.selectedSymptom.symptomCode,
        notificationCode: this.defect.notificationCode
      };
      this.onChangeContext(bidoEventExtensionDTO);
    }
  }

  private hideSymptomRowHeader() {
    this.showSymptomHeader = false;
  }

  public onSymptomRowUnselect() {
    this.hideSymptomParamheader();
    this.hideSymptomRowHeader();
    this.symptomParameterTableData = [];
    this.showSymptomParamHeader = false;
  }

  public onChangeMissionType() {
    this.showContextHeader = false;
  }

  public onContextRowSelect(event) {
    this.showContextHeader = true;
  }

  public onContextRowUnselect() {
    this.showContextHeader = false;
  }

  public onSymptomParamRowSelect(event) {
    this.showSymptomParamHeader = true;
  }

  public onSymptomParamRowUnselect() {
    this.showSymptomParamHeader = false;
  }

  public editSelectedContextParam() {
    this.dataContext = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Write,
      object: this.selectedContext.value as string,
      selectedRow: undefined
    };
    this.showContextTableDialog = true;
  }

  public onAddContextParam(event) {
    this.selectedContext.value = event;
    this.addedContextParam.push(this.selectedContext);
    this.selectedContext = {};
    this.showContextHeader = false;
  }

  public onAddSymptomParamParam(event) {
    this.selectedSymptomParam.value = event;
    this.addedSymptomParam.push(this.selectedSymptomParam);
    this.selectedSymptomParam = {};
    this.showSymptomParamHeader = false;
  }

  public editSelectedSymptomParam() {
    this.dataContext = {
      componentId: 'DialogAddParamValueComponent',
      openMode: ComponentOpenMode.Write,
      object: this.selectedSymptomParam.value as string,
      selectedRow: undefined
    };
    this.showSymptomParamDialog = true;
  }

  public editSymptom(): void {
    this.symptomRowData.filter((data, index) => {
      if (data.symptomCode === this.selectedSymptom.symptomCode) {
        this.editedSymptomIndex = index;
      }
    });
    this.dataSymptom = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Write,
      object: this.selectedSymptom,
      selectedRow: undefined
    };
    this.showSymptomTableDialog = true;
  }

  public addSymptom(): void {
    this.dataSymptom = {
      componentId: 'DialogAddSymptomComponent',
      openMode: ComponentOpenMode.Create,
      object: {},
      selectedRow: undefined
    };
    this.showSymptomTableDialog = true;
  }

  public deleteSelectedSymptom() {
    let index = -1;
    this.symptomRowData.filter((res, ind) => {
      if (this.selectedSymptom.rowId === res.rowId) {
        index = ind;
      }
    });
    this.symptomRowData.splice(index, 1);
    this.showSymptomHeader = false;
  }

  public onUpdateSymptom(event: SymptomRow) {
    this.symptomRowData[this.editedSymptomIndex] = {
      symptomCode: event.symptomCode,
      symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
      symptomComment: event.symptomComment,
      rowId: event.rowId
    };

    let addedIndex = -1;
    this.symptomAdded.forEach((data, index) => {
      if (data.rowId === event.rowId) {
        addedIndex = index;
      }
    });

    if (addedIndex !== -1) {
      this.symptomAdded[addedIndex] = this.symptomRowData[this.editedSymptomIndex];
    }

    this.selectedSymptom = {};
    this.showSymptomHeader = false;
    this.symptomParameterTableData = [];
  }

  public onAddSymptom(event: SymptomRow) {
    let isFound = false;
    this.symptomRowData.forEach((data) => {
      if (data.symptomCode === event.symptomCode) {
        isFound = true;
      }
    });

    if (!isFound) {
      const id = Math.random();
      this.symptomRowData.push({
        symptomCode: event.symptomCode,
        symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
        symptomComment: event.symptomComment,
        rowId: id
      });
      this.symptomAdded.push({
        symptomCode: event.symptomCode,
        symptomName: this.getLabel(event.symptomCode as string, this.symptomNameMap),
        symptomComment: event.symptomComment,
        rowId: id
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryAlreadyExist'));
    }
  }

  private getLabel(val: string, itemList: LabelValue<string>[]): string {
    let value: LabelValue<string>[];
    value = itemList.filter((res) => {
      return res.value === val;
    });

    return value.length > 0 ? value[0].label : val;
  }

  /*************************************************************************
   * Fetch Attribute data and operations related
   *************************************************************************/
  private fillAttibuteDropdown() {
    const attribute: BidoAttributeDTOId = {
      attributeId: BidoAttributeConstants.EVENT_LOCATION.toString()
    };
    this.eventService.findBidoAttribute(attribute).subscribe((res: BidoAttributeDTO) => {
      this.eventLocationMap = [];
      if (!!res && !!res.bidoAttributeValueDatas) {
        res.bidoAttributeValueDatas.forEach((resp) => {
          this.eventLocationMap.push({
            label: resp.textEn,
            value: resp.attributeValue
          });
        });
      }
    });
  }

  private setCircumstanceTabData(): SaveBidoEventExtensionCustomDTO {
    const symptomArr: BidoEventExtensionDTO[] = [];
    // if (this.addedSymptomParam.length > 0 && this.symptomAdded.length === 0) {
    this.symptomRowData.forEach((res) => {
      symptomArr.push({
        notificationCode: this.defect.notificationCode,
        extensionCode: res.symptomCode,
        extensionComment: res.symptomComment
      });
    });
    // } else {
    //   this.symptomAdded.forEach((res) => {
    //     symptomArr.push({
    //       notificationCode: this.bidoNotificationDTO.notificationCode,
    //       extensionCode: res.symptomCode,
    //       extensionComment: res.symptomComment
    //     });
    //   });
    // }

    let eventExtensionDTO: BidoEventExtensionDTO;

    if (!!this.contextTabData.symptomCode) {
      eventExtensionDTO = {
        contextMissionType: this.contextTabData.missionType,
        extensionCode: this.contextTabData.symptomCode,
        extensionComment: this.contextTabData.symptomComment,
        notificationCode: this.defect.notificationCode
      };
    } else {
      eventExtensionDTO = {};
    }

    const saveBidoEventExtensionCustomDTO: SaveBidoEventExtensionCustomDTO = {};

    if (!!eventExtensionDTO && Object.keys(eventExtensionDTO).length > 0) {
      if (this.addedContextParam.length > 0) {
        const paramDTO: BidoEventParameterDTO[] = [];
        this.addedContextParam.forEach((row: BidoParameterCustomTableDTO) => {
          paramDTO.push({
            extensionCode: this.contextTabData.symptomCode,
            notificationCode: this.defect.notificationCode,
            parameterCode: row.code,
            parameterValue: !!row.value ? row.value : undefined
          });
        });
        eventExtensionDTO.bidoEventParameterDTOList = paramDTO;
      }
      saveBidoEventExtensionCustomDTO.bidoEventExtensionDTO = eventExtensionDTO;
      saveBidoEventExtensionCustomDTO.notificationCode = this.defect.notificationCode;
    }

    if (symptomArr.length > 0) {
      // TODO to save symptom param
      this.addedSymptomParam.forEach((param) => {
        symptomArr.forEach((symptom) => {
          if (param.extensionCode === symptom.extensionCode) {
            let paramDTO: BidoEventParameterDTO = {};
            paramDTO = {
              extensionCode: symptom.extensionCode,
              notificationCode: this.defect.notificationCode,
              parameterCode: param.code,
              parameterValue: !!param.value ? param.value : undefined
            };
            if (!!symptom) {
              if (symptom.bidoEventParameterDTOList !== undefined) {
                symptom.bidoEventParameterDTOList.push(paramDTO);
              } else {
                symptom.bidoEventParameterDTOList = [];
                symptom.bidoEventParameterDTOList.push(paramDTO);
              }
            }
          }
        });
      });
      saveBidoEventExtensionCustomDTO.bidoEventExtensionDTOList = symptomArr;
      saveBidoEventExtensionCustomDTO.notificationCode = this.defect.notificationCode;
    }

    return saveBidoEventExtensionCustomDTO;
  }

  private loadCircumstancesDropdown() {
    // Load dropdowns
    const observables: Observable<LabelValue<string>[]>[] = [
      this.eventCreateService.findAllBidoExtensionList('C'),
      this.eventCreateService.findAllBidoExtensionList('S'),
      this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP)
    ];

    forkJoin(observables).subscribe(([contextMap, symptomMap, missionMap]) => {
      this.contextNameMap = contextMap;
      this.symptomNameMap = symptomMap;
      this.contextMissionMap = missionMap;
    });
  }

  public fillDelayAuthorizedWithUnit() {
    const DAYS = 'Days';
    const B_DELAY_VAL = '3';
    const C_DELAY_VAL = '10';
    const D_DELAY_VAL = '120';

    switch (this.deferralDelayCategory) {
      case 'A':
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? undefined
          : this.deferralDelayAuthorizedValue;
        this.deferralDelayAuthorizedUnit = DAYS;
        break;
      case 'B':
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? B_DELAY_VAL
          : this.deferralDelayAuthorizedValue;
        this.deferralDelayAuthorizedUnit = DAYS;
        break;
      case 'C':
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? C_DELAY_VAL
          : this.deferralDelayAuthorizedValue;
        this.deferralDelayAuthorizedUnit = DAYS;
        break;
      case 'D':
        this.deferralDelayAuthorizedValue = !this.deferralDelayAuthorizedValue
          ? D_DELAY_VAL
          : this.deferralDelayAuthorizedValue;
        this.deferralDelayAuthorizedUnit = DAYS;
        break;
      default:
        break;
    }
  }

  /**
   * In Case any field from defect tab is altered, status changes to OPEN
   */
  private isChangeInStatus(bidoNotification: BidoNotificationDTO) {
    const defectDetection =
      !!this.defectContext && !!this.defectContext.defectDetectionContext
        ? this.defectContext.defectDetectionContext
        : this.defectDetectionContext;

    if (
      this.dbDefect.notificationSubject !== this.defect.notificationSubject ||
      this.dbdefectAuthor !== this.defectAuthor ||
      this.dbDefectIsCritical !== this.defectIsCritical ||
      this.dbDefectLogNumber !== this.defectLogNumber ||
      this.dbSelectedInspectionMean !== this.selectedInspectionMean ||
      this.dbSelectedFaultCode !== this.selectedFaultCode ||
      this.dbDefectSrmReference !== this.defectSrmReference ||
      this.dbDefectDetectionContext !== defectDetection ||
      this.dbRootCauseDefectLocation !== this.rootCauseDefectLocation ||
      this.dbRootCauseDefectName !== this.rootCauseDefectName ||
      this.dbRootCauseComment !== this.rootCauseComment
    ) {
      bidoNotification.status = AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
      this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_OPENED_KEY);
    }

    if (!!this.defect.bidoRootCauseDTO) {
      if (!this.dbDefect.bidoRootCauseDTO) {
        this.dbDefect.bidoRootCauseDTO = {};
      }

      const dbVal = this.dbDefect.bidoRootCauseDTO;
      const currentVal = this.defect.bidoRootCauseDTO;

      if (
        dbVal.defectLocation !== currentVal.defectLocation ||
        dbVal.defectName !== currentVal.defectName ||
        dbVal.rootCauseAssetCode !== currentVal.rootCauseAssetCode ||
        ((!!dbVal.rootCauseChapter || !!currentVal.rootCauseChapter) &&
          dbVal.rootCauseChapter !== currentVal.rootCauseChapter) ||
        dbVal.rootCauseComment !== currentVal.rootCauseComment ||
        dbVal.rootCauseFlCode !== currentVal.rootCauseFlCode ||
        dbVal.rootCauseId !== currentVal.rootCauseId ||
        ((!!dbVal.rootCauseMark || !!currentVal.rootCauseMark) && dbVal.rootCauseMark !== currentVal.rootCauseMark) ||
        dbVal.rootCausePn !== currentVal.rootCausePn ||
        dbVal.rootCauseQuantity !== currentVal.rootCauseQuantity ||
        ((!!dbVal.rootCauseSection || !!currentVal.rootCauseSection) &&
          dbVal.rootCauseSection !== currentVal.rootCauseSection) ||
        ((!!dbVal.rootCauseSheet || !!currentVal.rootCauseSheet) &&
          dbVal.rootCauseSheet !== currentVal.rootCauseSubject) ||
        ((!!dbVal.rootCauseSubject || !!currentVal.rootCauseSubject) &&
          dbVal.rootCauseSubject !== currentVal.rootCauseSubject)
      ) {
        bidoNotification.status = AWPropertiesConstants.EVENT_STATUS_OPENED_KEY;
        this.setDefectStatus(AWPropertiesConstants.EVENT_STATUS_OPENED_KEY);
      }
    }
  }

  public showOpenField(): boolean {
    return this.sessionService.isSpecificDassault;
  }

  public openField(): void {
    if (!!this.defectSrmReference) {
      this.davFieldService
        .buildTaskFieldLink({
          taskDmc: this.defectSrmReference,
          familyVariantCode: this.masterFamilyVariantCode
        })
        .subscribe((data: string) => {
          window.open(data);
        });
    }
  }

  public openContextWP(): void {
    if (!!this.defectContextWP) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_PACKAGE_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize({ wpId: this.defectContextWP.projectId })
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openWO(bidmWorkOrderDTO: BidmWorkOrderDTO): void {
    if (!!bidmWorkOrderDTO) {
      const objectId: BidmWorkOrderDTOId = {
        projectId: bidmWorkOrderDTO.projectId as string,
        woId: bidmWorkOrderDTO.woId as string
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Write,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: DefectStatusComponent,
      data: this.defect
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          const currentState = this.defect.status;
          this.defect.status = event.data;
          const saved = this.saveDefect();
          if (!saved) {
            // Revert status change if save not launched
            this.defect.status = currentState;
          }
        }
      }
    });
  }

  public loadAuthorAndLastAuthor(defectNotificationCode?: string): void {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: defectNotificationCode as string
    };

    this.eventCreateService.findHBidoNotifications(bidoNotificationDTOId).subscribe((results) => {
      if (!!results.list[0].statusUser) {
        this.lastAuthor = results.list[0].statusUser;
      }
      if (!!results.list[results.list.length - 1].statusUser) {
        this.author = results.list[results.list.length - 1].statusUser;
      }
    });
  }
}
