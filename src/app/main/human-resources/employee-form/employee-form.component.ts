import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { FileUpload } from 'primeng/fileupload';
import { forkJoin } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DynamicAttributesService } from '../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../shared/constants/aw-properties-constants';
import { BidoNotificationTypeConstants } from '../../../shared/constants/bido-notification-type-constants';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { InputValidationService } from '../../../shared/services/input-validation.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { PageService } from '../../../shared/services/page.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindEmployeeWorksInput } from '../../../shared/types/api-input-types/bidt-employee/find-employee-works-input.interface';
import { FindWorksInformationByCriteriaInput } from '../../../shared/types/api-input-types/bidt-employee/find-works-information-by-criteria-input.interface';
import { SaveEmployeesInput } from '../../../shared/types/api-input-types/bidt-employee/save-employee-input.interface';
import { FindAcrsEventListByUserInput } from '../../../shared/types/api-input-types/fleet-management/find-acrs-event-list-by-user-input.interface';
import { CatalogPropertiesTableDTO } from '../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { BidtEvaluationsOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/bidt-evaluations-output.interface';
import { BidtHourlyCostsOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/bidt-hourly-costs-output-dto.interface';
import { EmployeeFlightOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-flight-output-dto.interface';
import { EmployeeHolidaysTableDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-holidays-table-dto.interface';
import { EmployeeWorkOutputDTO } from '../../../shared/types/api-output-types/bidt-employee/employee-work-output-dto.interface';
import { FindEmployeeQualificationDTO } from '../../../shared/types/api-output-types/bidt-qualif-employee/find-employee-qualification-dto.interface';
import { EmployeeWorksInformationOutputDTO } from '../../../shared/types/api-output-types/employee-works-information/employee-works-information-output-dto.interface';
import { BidmWorkOrderDTOId } from '../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidoEquipmentDTOId } from '../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoNotificationDTOId } from '../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../shared/types/api-types/bido-notification-dto.interface';
import { BidtAbsenceDTO } from '../../../shared/types/api-types/bidt-absence-dto.interface';
import { BidtCategoryDTO } from '../../../shared/types/api-types/bidt-category-dto.interface';
import { BidtContractDTO } from '../../../shared/types/api-types/bidt-contract-dto.interface';
import { BidtDocumentDTO } from '../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtEvaluationDTO } from '../../../shared/types/api-types/bidt-evaluation-dto.interface';
import { BidtExpenseDTO } from '../../../shared/types/api-types/bidt-expense-dto.interface';
import { BidtHourlyCostDTO } from '../../../shared/types/api-types/bidt-hourly-cost-dto.interface';
import { BidtLaborTemplateDTO } from '../../../shared/types/api-types/bidt-labor-template-dto.interface';
import { BidtLicenseDTO } from '../../../shared/types/api-types/bidt-license-dto.interface';
import { BidtMedicalVisitDTO } from '../../../shared/types/api-types/bidt-medical-visit-dto.interface';
import { BidtSalaryDTO } from '../../../shared/types/api-types/bidt-salary-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtTrainingDTO } from '../../../shared/types/api-types/bidt-training-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireEvolutionDTOId } from '../../../shared/types/api-types/bire-evolution-dto-id.interface';
import { BireItemDTO } from '../../../shared/types/api-types/bire-item-dto.interface';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { EmployeeLicenseCategoryTableDTO } from '../../../shared/types/api-types/employee-license-category-table-dto.interface';
import { FileContent } from '../../../shared/types/api-types/file-content.interface';
import { GetEmployeeFormDTO } from '../../../shared/types/api-types/get-employee-form-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../shared/utils/bido-equipment-utils';
import { FileUtils } from '../../../shared/utils/file-utils';
import { ListUtils } from '../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../shared/utils/object-utils';
import { StringUtils } from '../../../shared/utils/string-utils';

import { EmployeeFormService } from './employee-form.service';

interface TrainingRow {
  trainingName: string | undefined;
  trainingStartDate: string | undefined;
  trainingEndDate: string | undefined;
  trainingPerformed: boolean | undefined;
  trainingAskedBy: string | undefined;
  trainingInstructor: string | undefined;
  trainingCenter: string | undefined;
  trainingComment: string | undefined;
  _obj: BidtTrainingDTO;
}

interface EvaluationRow {
  evaluationDate: string | undefined;
  evaluationType: string | undefined;
  evaluator: string | undefined;
  evaluationComment: string | undefined;
  _obj: BidtEvaluationsOutputDTO;
}

interface AbsenceRow {
  absenceStartDate: string | undefined;
  absenceEndDate: string | undefined;
  absenceType: string | undefined;
  absenceDescription: string | undefined;
  _obj: BidtAbsenceDTO;
}

interface HolidayRow {
  holidayStartDate: string | undefined;
  holidayEndDate: string | undefined;
  holidayStatus: string | undefined;
  holidayValidator: string | undefined;
  _obj: EmployeeHolidaysTableDTO;
}

interface ExpenseRow {
  expenseDate: string | undefined;
  expenseType: string | undefined;
  expenseValue: string | undefined;
  expenseDescription: string | undefined;
  _obj: BidtExpenseDTO;
}

interface MedicalExaminationRow {
  visitDate: string | undefined;
  visitExpiration: string | undefined;
  visitComment: string | undefined;
  _obj: BidtMedicalVisitDTO;
}

interface DocumentRow {
  documentName: string | undefined;
  documentCategory: string | undefined;
  documentType: string | undefined;
  documentContent: string | undefined;
  documentPublicationDate: string | undefined;
  documentSource: string | undefined;
  _obj: BidtDocumentDTO;
}

interface QualificationRow {
  qualificationType: string | undefined;
  qualificationTitle: string | undefined;
  qualifEmployeeInstitution: string | undefined;
  qualifEmployeeStartDate: string | undefined;
  qualifEmployeeEndDate: string | undefined;
  qualifOngoing: boolean | undefined;
  _obj: FindEmployeeQualificationDTO;
}

interface WorkRow {
  isRelatedItemEnabled?: boolean;
  origin?: string;
  type?: string;
  description?: string;
  relatedItem?: string;
  openingDate?: string;
  closingDate?: string;
  jobCardText?: string;
  fromIcon?: string;
  relatedItemIcon?: string;
  treeNodeIcon?: string;
  workOrder?: string;
  treeNodeTooltip?: string;
  status?: string;
  originText?: string;
  statusText?: string;
  projectNumber?: string;
  projectAsset?: string;
  totalElapsed?: string;
  qualif?: string;
  _obj: EmployeeWorkOutputDTO;
  expand?: boolean;
  rowIndex: number;
}

interface WorkRowExport {
  projectNumber?: string;
  projectAsset?: string;
  workOrder?: string;
  originText?: string;
  type?: string;
  qualif?: string;
  description?: string;
  statusText?: string;
}

interface FlightRow {
  missionCode?: string;
  missionType?: string;
  duration?: string;
  cycleNumber?: string;
  startDateText?: string;
  endDateText?: string;
  pilot?: string;
  copilot?: string;
  dayMission?: boolean;
  engineStartDateText?: string;
  engineStopDateText?: string;
  fuelUsed?: string;
  ifrDuration?: string;
  nightMission?: boolean;
  passengerNumber?: string;
  shipmentNumber?: string;
  missionNumber?: string;
  missionDepartureLocation?: string;
  missionArrivalLocation?: string;
  equipmentCode?: string;
  occurrence?: number;
  assetText?: string;
  chronoNumber?: string;
  flightType?: string;
  flightStatus?: string;
  _obj: EmployeeFlightOutputDTO;
}

interface AcrsEventRow {
  asset: string;
  eventCode: string;
  eventDate: string;
  eventDescription: string;
  eventStatus: string;
  _obj: BidoNotificationDTO;
}

@Component({
  selector: 'aw-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly DATE_DIFF: number = 18;
  private static readonly DOCUMENT_CATEGORY_ID = 120;
  public workFiltersVisible: boolean;
  public flightFiltersVisible: boolean;
  public companies: LabelValue<string>[];
  public countries: LabelValue<string>[];
  public warehouses: LabelValue<number>[];
  public sites: LabelValue<number>[];
  public periods: LabelValue<string>[];
  public contractNames: LabelValue<string>[];
  public contractTypes: LabelValue<string>[];
  public salaryDevises: LabelValue<string>[];
  public workTemplateNames: LabelValue<string>[];
  private holidayStatusList: LabelValue<string>[];
  private absenceTypes: LabelValue<string>[];
  private evaluationTypes: LabelValue<string>[];
  private requestedByList: LabelValue<string>[];
  private expenseTypes: LabelValue<string>[];
  private categoryTypes: LabelValue<string>[];
  private categoryLevels: LabelValue<string>[];

  public siteDTO: BidtSiteDTO;
  public employeeFormData: BidtEmployeeDTO;
  public superiorFormData: BidtEmployeeDTO;
  public salaryFormData: BidtSalaryDTO;
  public contractFormData: BidtContractDTO;
  public siteFormData: BidtSiteDTO;
  public laborTemplateFormData: BidtLaborTemplateDTO;
  public licenseFormData: BidtLicenseDTO;
  public isFormValidated: boolean;
  public employeeName: string;
  public selectedContractEmployeeStartDate: Date | undefined;
  public selectedContractEmployeeEndDate: Date | undefined;
  public showSuperiorPopup: boolean;
  public selectedContractTypeName: string | undefined;
  public selectedSalaryCurrency: string;
  public selectedWorkTemplateName: string | undefined;
  public selectedLicenseIssueDate: Date;
  public selectedLicenseValidatingDate: Date;

  public currentTabId: string;
  public selectedCompany: string | undefined;
  public selectedContractName: string | undefined;

  private siteDTOList: BidtSiteDTO[];
  private contractNameDTOList: BidtContractDTO[];
  private workTemplateNameList: BidtLaborTemplateDTO[];
  private employeeDetails: GetEmployeeFormDTO;

  // Tab id
  public tabWorkTemplateId: string;
  public tabHourlyCostsId: string;
  public tabQualificationId: string;
  public tabLicenseId: string;
  public tabTrainingId: string;
  public tabEvaluationId: string;
  public tabAbsenceId: string;
  public tabHolidaysId: string;
  public tabExpenseId: string;
  public tabMedicalExaminationId: string;
  public tabDocumentsId: string;

  // Table column fields, align and width
  public workTemplatesTableCols: TableColumn[];
  public hourlyCostsTableCols: TableColumn[];
  public qualificationsTableCols: TableColumn[];
  public licensesTableCols: TableColumn[];
  public trainingsTableCols: TableColumn[];
  public evaluationsTableCols: TableColumn[];
  public absencesTableCols: TableColumn[];
  public holidaysTableCols: TableColumn[];
  public expensesTableCols: TableColumn[];
  public medicalExaminationsTableCols: TableColumn[];
  public documentsTableCols: TableColumn[];
  public worksTableCols: TableColumn[];
  public flightsTableCols: TableColumn[];
  public acrsEventTableColList: TableColumn[];

  // Selected objects in table
  public selectedWorkTemplates: BidtLaborTemplateDTO[];
  public selectedHourlyCosts: BidtHourlyCostsOutputDTO[];
  public selectedQualifications: QualificationRow[];
  public selectedLicenses: BidtLicenseDTO[];
  public selectedTrainings: TrainingRow[];
  public selectedEvaluations: EvaluationRow[];
  public selectedAbsences: AbsenceRow[];
  public selectedHolidays: HolidayRow[];
  public selectedExpenses: ExpenseRow[];
  public selectedMedicalExaminations: MedicalExaminationRow[];
  public selectedDocuments: DocumentRow[];
  public selectedWorks: WorkRow[];
  public selectedFlights: FlightRow[];
  public acrsEventTableSelectionList: AcrsEventRow[];

  // For work template visit tab
  public dataWorkTemplate: PopupEntry<BidtLaborTemplateDTO>;
  public isReadOnlyWorkTemplateDialog: boolean;
  public currentWorkTemplates: BidtLaborTemplateDTO;
  public currentWorkTemplateIndex: number;
  public isNewWorkTemplate: boolean;

  // For hourly cost tab
  public dataHourlyCost: PopupEntry<BidtHourlyCostsOutputDTO>;
  public isReadOnlyHourlyCostDialog: boolean;
  public currentHourlyCosts: BidtHourlyCostsOutputDTO;
  public currentHourlyCostIndex: number;
  public isNewHourlyCost: boolean;
  public showHourlyCostPopup: boolean;

  // For qualifications tab
  public dataQualification: PopupEntry<FindEmployeeQualificationDTO>;
  public isReadOnlyQualificationDialog: boolean;
  public currentQualifications: FindEmployeeQualificationDTO;
  public currentQualificationIndex: number;
  public isNewQualification: boolean;
  public showQualificationPopup: boolean;

  // For qualification renewal tab
  public dataQualificationRenewal: PopupEntry<EmployeeWorksInformationOutputDTO>;
  public qualificationRenewalTableDataSource: TableDataSource<EmployeeWorksInformationOutputDTO>;
  public qualificationRenewalStartDateFilter?: Date;
  public qualificationRenewalEndDateFilter?: Date;

  // For licenses tab
  public dataLicense: PopupEntry<BidtLicenseDTO>;
  public isReadOnlyLicenseDialog: boolean;
  public currentLicenses: BidtLicenseDTO;
  public currentLicenseIndex: number;
  public isNewLicense: boolean;
  public categoryLevelTableData: EmployeeLicenseCategoryTableDTO[];

  // For training tab
  public dataTraining: PopupEntry<BidtTrainingDTO>;
  public isReadOnlyTrainingDialog: boolean;
  public currentTrainings: BidtTrainingDTO;
  public currentTrainingIndex: number;
  public isNewTraining: boolean;
  public showTrainingPopup: boolean;

  // For evaluation tab
  public dataEvaluation: PopupEntry<BidtEvaluationsOutputDTO>;
  public isReadOnlyEvaluationDialog: boolean;
  public currentEvaluations: BidtEvaluationsOutputDTO;
  public currentEvaluationIndex: number;
  public isNewEvaluation: boolean;
  public showEvaluationPopup: boolean;

  // For absence tab
  public dataAbsence: PopupEntry<BidtAbsenceDTO>;
  public isReadOnlyAbsenceDialog: boolean;
  public currentAbsences: BidtAbsenceDTO;
  public currentAbsenceIndex: number;
  public isNewAbsence: boolean;
  public showAbsencePopup: boolean;

  // For holiday tab
  public dataHoliday: PopupEntry<EmployeeHolidaysTableDTO>;
  public isReadOnlyHolidayDialog: boolean;
  public currentHolidays: EmployeeHolidaysTableDTO;
  public currentHolidayIndex: number;
  public isNewHoliday: boolean;
  public showHolidayPopup: boolean;

  // For expense tab
  public dataExpense: PopupEntry<BidtExpenseDTO>;
  public isReadOnlyExpenseDialog: boolean;
  public currentExpenses: BidtExpenseDTO;
  public currentExpenseIndex: number;
  public isNewExpense: boolean;
  public showExpensePopup: boolean;

  // For medical visit tab
  public dataMedicalExamination: PopupEntry<BidtMedicalVisitDTO>;
  public isReadOnlyMedicalExaminationDialog: boolean;
  public currentMedicalExaminations: BidtMedicalVisitDTO;
  public currentMedicalExaminationIndex: number;
  public isNewMedicalExamination: boolean;
  public showMedicalExaminationPopup: boolean;

  // For document tab
  public showDocumentDialog: boolean;
  public showDocumentUrlDialog: boolean;
  public isReadOnlyDocumentDialog: boolean;
  public currentDocument: BidtDocumentDTO;
  public currentDocumentIndex: number;

  // DTO objects from database
  public bidtLaborTemplateDTO: BidtLaborTemplateDTO[];
  public bidtHourlyCostDTO: BidtHourlyCostDTO[];
  public bidtQualifEmployeeDTO: FindEmployeeQualificationDTO[];
  public bidtLicenseDTO: BidtLicenseDTO[];
  public bidtTrainingDTO: BidtTrainingDTO[];
  public bidtEvaluationDTO: BidtEvaluationDTO[];
  public bidtAbsenceDTO: BidtAbsenceDTO[];
  public bidtHolidayDTO: BidtAbsenceDTO[];
  public bidtExpenseDTO: BidtExpenseDTO[];
  public bidtMedicalExaminationDTO: BidtMedicalVisitDTO[];
  public bidtDocument: BidtDocumentDTO[];
  public works: EmployeeWorkOutputDTO[];
  public flights: EmployeeFlightOutputDTO[];
  public acrsEventTable: SearchResultsDTO<AcrsEventRow>;

  // DTO objects for display
  public bidtLaborTemplateDisplayed: BidtLaborTemplateDTO[];
  public bidtHourlyCostDisplayed: BidtHourlyCostsOutputDTO[];
  public bidtQualifEmployeeDisplayed: QualificationRow[];
  public bidtCategoryDisplayed: BidtCategoryDTO[];
  public bidtTrainingDisplayed: TrainingRow[];
  public bidtEvaluationDisplayed: EvaluationRow[];
  public bidtAbsenceDisplayed: AbsenceRow[];
  public bidtHolidayDisplayed: HolidayRow[];
  public bidtExpenseDisplayed: ExpenseRow[];
  public bidtMedicalExaminationDisplayed: MedicalExaminationRow[];
  public bidtDocumentDisplayed: DocumentRow[];
  public worksDisplayed: WorkRow[];
  public flightsDisplayed: FlightRow[];

  private readonly bidtDocumentAddedList: BidtDocumentDTO[];
  private readonly bidtDocumentUpdatedList: BidtDocumentDTO[];
  private bidtDocumentDeletedList: BidtDocumentDTO[];

  private empID: number;
  public selectedAnchor: string | undefined;
  public showSaveSpinner: boolean;

  public toc: PageTocEntry[];

  public searchCriteriaWork: FindEmployeeWorksInput;
  public searchCriteriaFlight: FindEmployeeWorksInput;

  public isLoadingFlightsTable: boolean;
  public isLoadingWorksTable: boolean;
  public isLoadingQualificationTable: boolean;
  public isLoadingCategoryTable: boolean;
  public isLoadingTrainingTable: boolean;
  public isLoadingHourlyCostTable: boolean;
  public isLoadingEvaluationTable: boolean;
  public isLoadingExpenseTable: boolean;
  public isLoadingAbsenceTable: boolean;
  public isLoadingHolidaysTable: boolean;
  public isLoadingMedicalExaminationTable: boolean;
  public isLoadingDocumentTable: boolean;
  public isLoadingAcrsEventTable: boolean;

  public showWorkTab: boolean;
  public showFlightTab: boolean;
  public showAcrsEventTab: boolean;

  private eventStatusList: LabelValue<string>[];

  private documentCategories: CatalogPropertiesTableDTO[];

  @ViewChild('mainDataAnchor')
  public mainDataAnchor: ElementRef;

  @ViewChild('generalDataAnchor')
  public generalDataAnchor: ElementRef;

  @ViewChild('qualificationDataAnchor')
  public qualificationDataAnchor: ElementRef;

  @ViewChild('qualificationRenewalAnchor')
  public qualificationRenewalAnchor: ElementRef;

  @ViewChild('licenseDataAnchor')
  public licenseDataAnchor: ElementRef;

  @ViewChild('trainingDataAnchor')
  public trainingDataAnchor: ElementRef;

  @ViewChild('workTemplateDataAnchor')
  public workTemplateDataAnchor: ElementRef;

  @ViewChild('hourlyCostDataAnchor')
  public hourlyCostDataAnchor: ElementRef;

  @ViewChild('evaluationDataAnchor')
  public evaluationDataAnchor: ElementRef;

  @ViewChild('expenseDataAnchor')
  public expenseDataAnchor: ElementRef;

  @ViewChild('absenceDataAnchor')
  public absenceDataAnchor: ElementRef;

  @ViewChild('holidayDataAnchor')
  public holidayDataAnchor: ElementRef;

  @ViewChild('medicalExaminationDataAnchor')
  public medicalExaminationDataAnchor: ElementRef;

  @ViewChild('documentDataAnchor')
  public documentDataAnchor: ElementRef;

  @ViewChild('workDataAnchor')
  public workDataAnchor: ElementRef;

  @ViewChild('flightDataAnchor')
  public flightDataAnchor: ElementRef;

  @ViewChild('acrsEventAnchor')
  public acrsEventAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public dynamicAttributesService: DynamicAttributesService,
    public inputValidationService: InputValidationService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly employeeFormService: EmployeeFormService,
    private readonly propertiesService: PropertiesService,
    private readonly pageService: PageService,
    public dateService: DateService,
    private readonly exportService: ExportService
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

    this.registerPageTocEntrySelectedObservable();
    this.searchCriteriaWork = {};
    this.searchCriteriaFlight = {};
    this.showMedicalExaminationPopup = false;
    this.selectedContractTypeName = '';
    this.selectedSalaryCurrency = '';
    this.selectedWorkTemplateName = undefined;
    this.companies = [];
    this.countries = [];
    this.warehouses = [];
    this.sites = [];
    this.periods = [];
    this.contractNames = [];
    this.contractTypes = [];
    this.salaryDevises = [];
    this.expenseTypes = [];
    this.workTemplatesTableCols = [];
    this.hourlyCostsTableCols = [];
    this.qualificationsTableCols = [];
    this.licensesTableCols = [];
    this.trainingsTableCols = [];
    this.evaluationsTableCols = [];
    this.absencesTableCols = [];
    this.holidaysTableCols = [];
    this.expensesTableCols = [];
    this.medicalExaminationsTableCols = [];
    this.documentsTableCols = [];
    this.categoryLevelTableData = [];
    this.siteDTO = {};
    this.employeeFormData = {};
    this.superiorFormData = {};
    this.siteFormData = {};
    this.contractFormData = {};
    this.salaryFormData = {};
    this.laborTemplateFormData = {};
    this.licenseFormData = {};
    this.isFormValidated = false;
    this.employeeName = '';
    this.employeeDetails = {};
    this.selectedWorkTemplates = [];
    this.selectedHourlyCosts = [];
    this.selectedQualifications = [];
    this.selectedLicenses = [];
    this.selectedTrainings = [];
    this.selectedEvaluations = [];
    this.selectedAbsences = [];
    this.selectedHolidays = [];
    this.selectedExpenses = [];
    this.selectedMedicalExaminations = [];
    this.selectedDocuments = [];
    this.bidtDocumentDisplayed = [];
    this.bidtDocumentAddedList = [];
    this.bidtDocumentUpdatedList = [];
    this.bidtDocumentDeletedList = [];
    this.bidtHourlyCostDisplayed = [];
    this.currentHourlyCosts = {};
    this.bidtQualifEmployeeDisplayed = [];
    this.bidtTrainingDisplayed = [];
    this.bidtEvaluationDisplayed = [];
    this.bidtAbsenceDisplayed = [];
    this.bidtHolidayDisplayed = [];
    this.bidtExpenseDisplayed = [];
    this.bidtMedicalExaminationDisplayed = [];
    this.documentCategories = [];
    this.worksDisplayed = [];
    this.flightsDisplayed = [];
    this.works = [];
    this.flights = [];
    this.categoryTypes = [];
    this.categoryLevels = [];
    this.holidayStatusList = [];
    this.absenceTypes = [];
    this.evaluationTypes = [];
    this.requestedByList = [];
    this.tabWorkTemplateId = 'work-template';
    this.tabHourlyCostsId = 'hoyrly-costs';
    this.tabQualificationId = 'qualification';
    this.tabLicenseId = 'license';
    this.tabTrainingId = 'training';
    this.tabEvaluationId = 'evaluation';
    this.tabAbsenceId = 'absence';
    this.tabHolidaysId = 'holidays';
    this.tabExpenseId = 'expense';
    this.tabMedicalExaminationId = 'medical-examination';
    this.tabDocumentsId = 'documents';
    this.currentTabId = this.tabWorkTemplateId;
    this.workFiltersVisible = false;
    this.flightFiltersVisible = false;
    this.acrsEventTable = { list: [], moreResults: false };
    this.acrsEventTableSelectionList = [];
    this.eventStatusList = [];
    this.loadCountries();
    this.loadContractNames();
    this.loadContractTypes();
    this.loadSalaryDevices();
    this.loadWorktemplateNames();
    this.loadExpenseType();
    this.loadHolidayStatus();
    this.loadAbsenceType();
    this.loadEvaluationType();
    this.loadRequestedbyList();
    this.loadEventStatus();
    // Fill table column information
    this.initTableColumnField();
    this.registerPageTocEntryObservable();
    this.initQualificationRenewalTableDataSource();
    this.initQualificationRenewalDates();
  }

  public getComponentName(): string {
    return ComponentConstants.HR_EMPLOYEE_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!this.isCreateOpenMode && this.componentData.objectId) {
        const employee = this.serializationService.deserialize(this.componentData.objectId);
        this.employeeName = `${employee.employeeFirstName} ${employee.employeeLastName}`;
      }
      const context = this.isCreateOpenMode ? 'tab.createMode' : this.employeeName;
      this.displayComponentContext(context, this.isCreateOpenMode);
      this.loadEmployee();
    }

    this.loadCategories();
  }

  private initQualificationRenewalTableDataSource(): void {
    this.qualificationRenewalTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      enableSelection: false,
      columns: [
        {
          field: 'qualification',
          translateKey: this.getTranslateKey('qualification')
        },
        {
          field: 'worksNumber',
          translateKey: this.getTranslateKey('worksNumber')
        },
        {
          field: 'workingHoursNumber',
          translateKey: this.getTranslateKey('workingHoursNumber')
        },
        {
          field: 'theoreticalHoursNumber',
          translateKey: this.getTranslateKey('theoreticalHoursNumber')
        }
      ],
      data: []
    });
  }

  private loadCategories(): void {
    this.employeeFormService
      .findDocumentCategories(EmployeeFormComponent.DOCUMENT_CATEGORY_ID)
      .subscribe((data: CatalogPropertiesTableDTO[]) => {
        this.documentCategories = data;
      });
  }

  private createContentTable(): void {
    const mainDataKey = 'page.mainData';
    const generalKey = 'global.general';
    const qualificationKey = this.getTranslateKey('qualification');
    const qualificationRenewalKey = this.getTranslateKey('qualificationRenewal');
    const licenseKey = this.getTranslateKey('license');
    const worksKey = this.getTranslateKey('works');
    const acrsKey = this.getTranslateKey('acrs');
    const flightsKey = this.getTranslateKey('flights');
    const trainingKey = this.getTranslateKey('training');
    const workTemplateKey = this.getTranslateKey('workTemplate');
    const hourlyCostsKey = this.getTranslateKey('hourlyCosts');
    const evaluationKey = this.getTranslateKey('evaluation');
    const expenseKey = this.getTranslateKey('expense');
    const absenceKey = this.getTranslateKey('absence');
    const holidaysKey = this.getTranslateKey('holidays');
    const medicalExaminationKey = this.getTranslateKey('medicalExamination');
    const documentsKey = this.getTranslateKey('documents');

    this.translateService
      .get([
        mainDataKey,
        generalKey,
        qualificationKey,
        qualificationRenewalKey,
        licenseKey,
        worksKey,
        acrsKey,
        flightsKey,
        trainingKey,
        workTemplateKey,
        hourlyCostsKey,
        evaluationKey,
        expenseKey,
        absenceKey,
        holidaysKey,
        medicalExaminationKey,
        documentsKey
      ])
      .subscribe((results: string[]) => {
        const mainDataLabel = !!results ? results[mainDataKey] : 'Main Information';
        const generalLabel = !!results ? results[generalKey] : 'Additional Information';
        const qualificationLabel = !!results ? results[qualificationKey] : 'Qualification';
        const qualificationRenewalLabel = !!results ? results[qualificationRenewalKey] : 'Qualification Renewal';
        const licenseLabel = !!results ? results[licenseKey] : 'License';
        const worksLabel = !!results ? results[worksKey] : 'Works';
        const acrsLabel = !!results ? results[acrsKey] : 'ACRS';
        const flightsLabel = !!results ? results[flightsKey] : 'Flights';
        const trainingLabel = !!results ? results[trainingKey] : 'Training';
        const workTemplateLabel = !!results ? results[workTemplateKey] : 'Work Template';
        const hourlyCostsLabel = !!results ? results[hourlyCostsKey] : 'Hourly Costs';
        const evaluationLabel = !!results ? results[evaluationKey] : 'Evaluation';
        const expenseLabel = !!results ? results[expenseKey] : 'Expense';
        const absenceLabel = !!results ? results[absenceKey] : 'Absence';
        const holidaysLabel = !!results ? results[holidaysKey] : 'Holidays';
        const medicalExaminationLabel = !!results ? results[medicalExaminationKey] : 'Medical Examination';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';

        this.toc = [
          {
            id: 'mainDataAnchor',
            anchor: this.mainDataAnchor,
            label: mainDataLabel
          },
          {
            id: 'generalDataAnchor',
            anchor: this.generalDataAnchor,
            label: generalLabel
          },
          {
            id: 'qualificationDataAnchor',
            anchor: this.qualificationDataAnchor,
            label: qualificationLabel
          },
          {
            id: 'qualificationRenewalAnchor',
            anchor: this.qualificationRenewalAnchor,
            label: qualificationRenewalLabel
          },
          {
            id: 'licenseDataAnchor',
            anchor: this.licenseDataAnchor,
            label: licenseLabel
          }
        ];

        if (this.showWorkTab) {
          this.toc.push({
            id: 'workDataAnchor',
            anchor: this.workDataAnchor,
            label: worksLabel
          });
        }

        if (this.showAcrsEventTab) {
          this.toc.push({
            id: 'acrsEventAnchor',
            anchor: this.acrsEventAnchor,
            label: acrsLabel
          });
        }

        if (this.showFlightTab) {
          this.toc.push({
            id: 'flightDataAnchor',
            anchor: this.flightDataAnchor,
            label: flightsLabel
          });
        }

        const tocTemp = [
          {
            id: 'trainingDataAnchor',
            anchor: this.trainingDataAnchor,
            label: trainingLabel
          },
          {
            id: 'workTemplateDataAnchor',
            anchor: this.workTemplateDataAnchor,
            label: workTemplateLabel
          },
          {
            id: 'hourlyCostDataAnchor',
            anchor: this.hourlyCostDataAnchor,
            label: hourlyCostsLabel
          },
          {
            id: 'evaluationDataAnchor',
            anchor: this.evaluationDataAnchor,
            label: evaluationLabel
          },
          {
            id: 'expenseDataAnchor',
            anchor: this.expenseDataAnchor,
            label: expenseLabel
          },
          {
            id: 'absenceDataAnchor',
            anchor: this.absenceDataAnchor,
            label: absenceLabel
          },
          {
            id: 'holidayDataAnchor',
            anchor: this.holidayDataAnchor,
            label: holidaysLabel
          },
          {
            id: 'medicalExaminationDataAnchor',
            anchor: this.medicalExaminationDataAnchor,
            label: medicalExaminationLabel
          },
          {
            id: 'documentDataAnchor',
            anchor: this.documentDataAnchor,
            label: documentsLabel
          }
        ];

        this.toc = this.toc.concat(tocTemp);

        setTimeout(() => {
          this.setSelectedAnchor('mainDataAnchor');
        });
      });
  }

  private registerPageTocEntrySelectedObservable(): void {
    this.pageTocService.pageTocEntrySelected$.pipe(takeUntil(this.unsubscribe)).subscribe((pageTocEntrySelected) => {
      this.selectedAnchor = pageTocEntrySelected;
    });
  }

  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.pageTocService.setAnchorSelected(anchorId);

    this.selectedAnchor = anchorId;
  }

  private loadExpenseType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_EXPENSE_TYPE_MAP).subscribe((results) => {
      this.expenseTypes = results;
    });
  }

  private loadHolidayStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_ABSENCE_STATUS_MAP).subscribe((results) => {
      this.holidayStatusList = results;
    });
  }

  public loadAbsenceType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_ABSENCE_TYPE_MAP).subscribe((results) => {
      this.absenceTypes = results;
    });
  }

  private loadEvaluationType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_EVALUATION_TYPE_MAP).subscribe((results) => {
      this.evaluationTypes = results;
    });
  }

  private loadRequestedbyList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_TRAINING_ASKED_BY_MAP).subscribe((results) => {
      this.requestedByList = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
    });
  }

  public getTypeName(): string {
    return ComponentConstants.HR_EMPLOYEE_FORM;
  }

  public showCategory(index: number): string {
    return this.categoryTypes[index] && this.categoryTypes[index].label;
  }

  public showHeaderText(col: string): string {
    const headerValue = col.replace('level', '');
    const headerTextObj =
      this.categoryLevels &&
      this.categoryLevels.filter((level) => {
        return level.value === headerValue;
      })[0];

    return headerTextObj && headerTextObj.label;
  }

  private initTableColumnField() {
    this.hourlyCostsTableCols = [
      { field: 'costType', alignment: 'left' },
      { field: 'costText', alignment: 'left' }
    ];

    this.qualificationsTableCols = [
      { field: 'qualificationType', alignment: 'left' },
      { field: 'qualificationTitle', alignment: 'left' },
      { field: 'qualifEmployeeInstitution', alignment: 'left' },
      { field: 'qualifEmployeeStartDate', alignment: 'left' },
      { field: 'qualifEmployeeEndDate', alignment: 'left' },
      { field: 'qualifOngoing', alignment: 'left' }
    ];

    const getCategoryTypeMap = this.propertiesService.getValue(GenericPropertyConstants.HR_CATEGORY_TYPE_MAP);
    const getCategorylevelMap = this.propertiesService.getValue(GenericPropertyConstants.HR_CATEGORY_LEVEL_MAP);

    forkJoin([getCategoryTypeMap, getCategorylevelMap]).subscribe((results) => {
      if (results[1] !== null && results[1] !== undefined) {
        results[1].forEach((level) => {
          this.licensesTableCols.push({ field: `level${level.value}`, alignment: 'center' });
        });
        this.categoryLevels = results[1];
      }

      // reset table checkboxes
      if (results[0] !== null && results[0] !== undefined) {
        this.categoryTypes = results[0];
        results[0].forEach((categoryType) => {
          const obj: EmployeeLicenseCategoryTableDTO = {};
          this.licensesTableCols.forEach((col) => {
            obj[col.field] = false;
          });
          obj.categoryType = categoryType.value;
          this.categoryLevelTableData.push(obj);
        });
      }
    });

    this.trainingsTableCols = [
      { field: 'trainingName', alignment: 'left' },
      { field: 'trainingStartDate', alignment: 'left' },
      { field: 'trainingEndDate', alignment: 'left' },
      { field: 'trainingPerformed', alignment: 'left' },
      { field: 'trainingAskedBy', alignment: 'left' },
      { field: 'trainingInstructor', alignment: 'left' },
      { field: 'trainingCenter', alignment: 'left' },
      { field: 'trainingComment', alignment: 'left' }
    ];

    this.evaluationsTableCols = [
      { field: 'evaluationDate', alignment: 'left' },
      { field: 'evaluationType', alignment: 'left' },
      { field: 'evaluator', alignment: 'left' },
      { field: 'evaluationComment', alignment: 'left' }
    ];

    this.absencesTableCols = [
      { field: 'absenceStartDate', alignment: 'left' },
      { field: 'absenceEndDate', alignment: 'left' },
      { field: 'absenceType', alignment: 'left' },
      { field: 'absenceDescription', alignment: 'left' }
    ];

    this.holidaysTableCols = [
      { field: 'holidayStartDate', alignment: 'left' },
      { field: 'holidayEndDate', alignment: 'left' },
      { field: 'holidayStatus', alignment: 'left' },
      { field: 'holidayValidator', alignment: 'left' }
    ];

    this.expensesTableCols = [
      { field: 'expenseDate', alignment: 'left' },
      { field: 'expenseType', alignment: 'left' },
      { field: 'expenseValue', alignment: 'left' },
      { field: 'expenseDescription', alignment: 'left' }
    ];

    this.medicalExaminationsTableCols = [
      { field: 'visitDate', alignment: 'left' },
      { field: 'visitExpiration', alignment: 'left' },
      { field: 'visitComment', alignment: 'left' }
    ];

    this.documentsTableCols = [
      { field: 'documentName', alignment: 'left' },
      { field: 'documentCategory', alignment: 'left' },
      { field: 'documentType', alignment: 'left' },
      { field: 'documentContent', alignment: 'left' },
      { field: 'documentPublicationDate', alignment: 'left' }
    ];

    this.worksTableCols = [
      { field: 'projectNumber', alignment: 'left', width: '10%' },
      { field: 'projectAsset', alignment: 'left', width: '22%' },
      { field: 'workOrder', alignment: 'left', width: '10%' },
      { field: 'originText', alignment: 'left', width: '17%' },
      { field: 'type', alignment: 'left', width: '10%' },
      { field: 'qualif', alignment: 'left', width: '7%' },
      { field: 'description', alignment: 'left', width: '25%' },
      { field: 'statusText', alignment: 'left', width: '6%' }
    ];

    this.flightsTableCols = [
      { field: 'assetText', alignment: 'left', width: '28%' },
      { field: 'chronoNumber', alignment: 'left', width: '12%' },
      { field: 'missionCode', alignment: 'left', width: '12%' },
      { field: 'flightType', alignment: 'left', width: '12%' },
      { field: 'startDateText', alignment: 'left', width: '12%' },
      { field: 'endDateText', alignment: 'left', width: '12%' },
      { field: 'flightStatus', alignment: 'left', width: '12%' }

      // { field: 'missionNumber', alignment: 'left' },
      // { field: 'missionDepartureLocation', alignment: 'left' },
      // { field: 'missionArrivalLocation', alignment: 'left' },
      // { field: 'duration', alignment: 'left' },
      // { field: 'ifrDuration', alignment: 'left' },
      // { field: 'cycleNumber', alignment: 'left' },
      // { field: 'engineStartDateText', alignment: 'left' },
      // { field: 'engineStopDateText', alignment: 'left' },
      // { field: 'pilot', alignment: 'left' },
      // { field: 'copilot', alignment: 'left' }
    ];

    this.acrsEventTableColList = [
      { field: 'eventCode', alignment: 'left', width: '15%' },
      { field: 'eventDate', alignment: 'left', width: '10%' },
      { field: 'asset', alignment: 'left', width: '25%' },
      { field: 'eventDescription', alignment: 'left', width: '40%' },
      { field: 'eventStatus', alignment: 'left', width: '10%' }
    ];
  }

  public checkValidation(): boolean {
    let isPageValid = false;
    if (
      !!this.employeeFormData.employeeFirstName &&
      !!this.employeeFormData.employeeLastName &&
      !!this.selectedCompany &&
      !!this.employeeFormData.bidtSiteId &&
      !!this.selectedContractEmployeeStartDate &&
      !!this.selectedContractName &&
      !!this.salaryFormData.salaryValue &&
      !!this.salaryFormData.salaryPayPeriod
    ) {
      isPageValid = true;
    }

    return isPageValid;
  }

  private loadCountries(): void {
    this.propertiesService.getCountries().subscribe((results) => {
      this.countries = results;
    });
  }

  private loadContractNames(): void {
    this.employeeFormService.findAllContractNames({}).subscribe((results) => {
      this.contractNameDTOList = results;
      this.contractNames = this.contractNameDTOList.map((element) => {
        let labelValue: LabelValue<string> = {
          label: '',
          value: ''
        };
        if (element.id !== null && element.id !== undefined) {
          labelValue = {
            label: element.contractName || '',
            value: element.id.toString() || ''
          };
        }

        return labelValue;
      });
    });
  }

  public loadContractTypes(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_CONTRACT_TYPE_MAP).subscribe((results) => {
      this.contractTypes = results;
    });
  }

  public loadContractTypesOnChange(): void {
    if (this.selectedContractName) {
      const selectedContractNameObj: BidtContractDTO = this.contractNameDTOList.filter((name) => {
        if (name.id !== null && name.id !== undefined) {
          return name.id.toString() === this.selectedContractName;
        }

        return false;
      })[0];

      const contractName =
        this.contractTypes &&
        this.contractTypes.filter((contractType) => {
          return contractType.value === (selectedContractNameObj && selectedContractNameObj.contractType);
        })[0];

      this.selectedContractTypeName = contractName && contractName.label;
    } else {
      this.selectedContractTypeName = '';
    }
  }

  private loadSalaryDevices(): void {
    const getCurrenciesObservable = this.propertiesService.getValue(GenericPropertyConstants.CURRENCY_MAP);
    const defaultCurrencyObservable = this.employeeFormService.getLocalCurrency();

    forkJoin([defaultCurrencyObservable, getCurrenciesObservable]).subscribe((results) => {
      this.salaryDevises = results[1];
      const selectedCurrency: LabelValue<string> =
        this.salaryDevises &&
        this.salaryDevises.filter((currency) => {
          return currency.label === results[0];
        })[0];
      this.salaryFormData.salaryDevise = selectedCurrency.value;
      this.selectedSalaryCurrency = selectedCurrency && selectedCurrency.label;
    });
  }

  private displaySalaryCurrency(salaryDeviseId?: string): void {
    if (salaryDeviseId !== null && salaryDeviseId !== undefined) {
      const selectedCurrency: LabelValue<string> =
        this.salaryDevises &&
        this.salaryDevises.filter((currency) => {
          return currency.value === salaryDeviseId;
        })[0];
      this.selectedSalaryCurrency = selectedCurrency && selectedCurrency.label;
    }
  }

  public loadSites(): void {
    this.sites = [];
    if (
      this.selectedCompany !== null &&
      this.selectedCompany !== undefined &&
      this.siteDTOList !== null &&
      this.siteDTOList !== undefined
    ) {
      this.siteDTOList.forEach((element) => {
        if (
          element.bidtCompanyId !== null &&
          element.bidtCompanyId !== undefined &&
          element.bidtCompanyId.toString() === this.selectedCompany
        ) {
          const labelValue: LabelValue<number> = {
            label: `${element.siteCode} - ${element.siteName}`,
            value: element.siteId as number
          };
          this.sites.push(labelValue);
        }
      });
    }
  }

  public loadWarehousesBysite(): void {
    if (this.employeeFormData.bidtSiteId) {
      this.warehouses = [];
      const siteId = this.employeeFormData.bidtSiteId.toString();
      this.employeeFormService.findWarehousesBySite(siteId).subscribe((results: BidtWarehouseDTO[]) => {
        if (!!results) {
          this.warehouses = results.map((bidtWarehouseDTO: BidtWarehouseDTO) => {
            return {
              label: bidtWarehouseDTO.whName as string,
              value: bidtWarehouseDTO.wareHouseId as number
            };
          });
        }
      });
    }
  }

  public loadEmployee(): void {
    const companiesObservable = this.employeeFormService.findBidtCompanyByCriteria({});
    const siteObservable = this.employeeFormService.findBidtSiteByCriteria({});
    const periodObservable = this.propertiesService.getValue(GenericPropertyConstants.HR_SALARY_PERIOD_MAP);

    forkJoin([companiesObservable, siteObservable, periodObservable]).subscribe((results) => {
      const periodIndex = 2;
      this.companies = results[0];
      this.siteDTOList = results[1];
      this.periods = results[periodIndex];

      this.employeeFormData.bidtSiteId = undefined;

      if (this.componentData.objectId || this.empID) {
        let employeeTemp: BidtEmployeeDTO = {};
        if (this.componentData.objectId) {
          employeeTemp = {
            id: this.serializationService.deserialize(this.componentData.objectId).id
          };
        } else if (this.empID) {
          employeeTemp = {
            id: this.empID
          };
        }

        if (employeeTemp.id) {
          this.employeeFormService.getEmployeeDetails(employeeTemp.id).subscribe(
            (result) => {
              this.employeeDetails = result[0];
              if (this.employeeDetails) {
                // make a copy of all tab and section data
                this.employeeFormData = { ...(this.employeeDetails.bidtEmployeeDTO || {}) };
                this.salaryFormData = { ...(this.employeeDetails.bidtSalaryDTO || {}) };
                this.contractFormData = { ...(this.employeeDetails.bidtContractDTO || {}) };
                this.laborTemplateFormData = { ...(this.employeeDetails.bidtLaborTemplateDTO || {}) };
                this.superiorFormData = { ...(this.employeeDetails.bidtSuperiorData || {}) };
                this.licenseFormData = { ...(this.employeeDetails.bidtLicenseDTO || {}) };

                // set selected site and company
                const selectedSite: BidtSiteDTO =
                  this.siteDTOList &&
                  this.siteDTOList.filter((siteObj) => {
                    return (
                      this.employeeDetails.bidtEmployeeDTO &&
                      siteObj.siteId === this.employeeDetails.bidtEmployeeDTO.bidtSiteId
                    );
                  })[0];

                this.selectedCompany =
                  selectedSite && selectedSite.bidtCompanyId !== undefined && selectedSite.bidtCompanyId !== null
                    ? selectedSite.bidtCompanyId.toString()
                    : undefined;

                // load sites for selected company
                this.loadSites();

                // load warehouses
                this.loadWarehousesBysite();

                if (this.employeeFormData.employeeBirthday) {
                  this.employeeFormData.employeeBirthday = new Date(this.employeeFormData.employeeBirthday);
                }
                if (this.employeeFormData.contractEmployeeStartDate) {
                  this.selectedContractEmployeeStartDate = new Date(this.employeeFormData.contractEmployeeStartDate);
                }
                if (this.employeeFormData.contractEmployeeEndDate) {
                  this.selectedContractEmployeeEndDate = new Date(this.employeeFormData.contractEmployeeEndDate);
                }
                if (this.licenseFormData.licenseIssueDate) {
                  this.selectedLicenseIssueDate = new Date(this.licenseFormData.licenseIssueDate);
                }
                if (this.licenseFormData.licenseValidatingDate) {
                  this.selectedLicenseValidatingDate = new Date(this.licenseFormData.licenseValidatingDate);
                }

                if (this.laborTemplateFormData.ltName) {
                  this.selectedWorkTemplateName = this.laborTemplateFormData.ltName;
                  this.calculateTemplateData();
                }
                const contractName: LabelValue<string> =
                  this.contractNames &&
                  this.contractNames.filter((contractObj) => {
                    return contractObj.label === this.contractFormData.contractName;
                  })[0];
                this.selectedContractName = contractName && contractName.value;
                this.initOnEmployeeLoad();
              }
            },
            () => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadEmployee'));
            }
          );
        }
      } else {
        // reset dropdowns and textboxes values when employee is being created
        this.employeeFormData = {};
        this.salaryFormData = {
          salaryInternalCost: '0',
          salaryValue: '0'
        };
        this.contractFormData = {};
        this.superiorFormData = {};
        this.selectedCompany = undefined;
        this.sites = [];
        this.warehouses = [];
        this.selectedContractEmployeeEndDate = undefined;
        this.selectedContractEmployeeStartDate = undefined;
        this.selectedContractName = undefined;
        this.selectedContractTypeName = undefined;
        if (this.periods.length > 0) {
          this.salaryFormData.salaryPayPeriod = this.periods[0].value;
        }
      }
    });
  }

  public initQualificationRenewalDates(): void {
    this.qualificationRenewalEndDateFilter = new Date();
    this.qualificationRenewalStartDateFilter = new Date();
    this.qualificationRenewalStartDateFilter.setFullYear(this.qualificationRenewalEndDateFilter.getFullYear() - 1);
  }

  public onExportWorks(): void {
    const dataToExport: WorkRowExport[] = [];
    this.worksDisplayed.forEach((elem: WorkRow) => {
      dataToExport.push({
        projectNumber: elem.projectNumber,
        projectAsset: elem.projectAsset,
        workOrder: elem.workOrder,
        originText: elem.originText,
        type: elem.type,
        qualif: elem.qualif,
        description: elem.description,
        statusText: elem.statusText
      });
    });
    const name = `${this.employeeFormData.employeeLastName}-${this.employeeFormData.employeeFirstName}-Works-List`;
    this.exportService.toExcel(dataToExport, name, this.componentData.componentId);
  }

  private initOnEmployeeLoad(): void {
    this.isLoadingAcrsEventTable = true;

    this.loadContractTypesOnChange();
    this.displaySalaryCurrency(this.salaryFormData.salaryDevise);
    this.salaryFormData.salaryInternalCost = this.salaryFormData.salaryInternalCost || '0';
    this.salaryFormData.salaryValue = this.salaryFormData.salaryValue || '0';

    if (this.employeeDetails.bidtEmployeeDTO && this.employeeDetails.bidtEmployeeDTO.id) {
      this.isLoadingHourlyCostTable = true;
      this.employeeFormService
        .findHourlyCostsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtHourlyCostDisplayed = results || [];
          this.isLoadingHourlyCostTable = false;
        });

      this.bidtQualifEmployeeDisplayed = [];
      this.isLoadingQualificationTable = true;
      this.employeeFormService
        .findQualificationsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtQualifEmployeeDisplayed = [];
          if (results !== null && results !== undefined) {
            results.forEach((obj) => {
              this.bidtQualifEmployeeDisplayed.push(this.convertToQualificationRowObj(obj));
            });
          }
          this.isLoadingQualificationTable = false;
        });
      const licenseId: BidtCategoryDTO = {
        bidtLicenseId: this.employeeDetails.bidtEmployeeDTO.bidtLicenseId
      };
      this.employeeFormService.findByLicenseId(licenseId).subscribe((results) => {
        this.bidtCategoryDisplayed = results || [];

        this.categoryLevelTableData.forEach((rowObj) => {
          this.bidtCategoryDisplayed.forEach((categoryObj) => {
            if (rowObj.categoryType === categoryObj.categoryType) {
              rowObj[`level${categoryObj.categoryLevel}`] = true;
            }
          });
        });
      });

      this.loadQualificationRenewal();

      this.bidtTrainingDisplayed = [];
      this.isLoadingTrainingTable = true;
      this.employeeFormService
        .findTrainingByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtTrainingDisplayed = [];
          if (results) {
            if (results !== null && results !== undefined) {
              results.forEach((obj) => {
                this.bidtTrainingDisplayed.push(this.convertToTrainingRowObj(obj));
              });
            }
          }
          this.isLoadingTrainingTable = false;
        });

      this.isLoadingEvaluationTable = true;
      this.bidtEvaluationDisplayed = [];
      this.employeeFormService
        .findEvaluationsByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtEvaluationDisplayed = [];
          if (results !== null && results !== undefined) {
            results.forEach((obj) => {
              this.bidtEvaluationDisplayed.push(this.convertToEvaluationRowObj(obj));
            });
          }
          this.isLoadingEvaluationTable = false;
        });

      this.isLoadingAbsenceTable = true;
      this.bidtAbsenceDisplayed = [];
      this.employeeFormService.findAbsenceByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id).subscribe((results) => {
        this.bidtAbsenceDisplayed = [];
        if (results !== null && results !== undefined) {
          results.forEach((obj) => {
            this.bidtAbsenceDisplayed.push(this.convertToAbsenceRowObj(obj));
          });
        }
        this.isLoadingAbsenceTable = false;
      });

      this.isLoadingHolidaysTable = true;
      this.bidtHolidayDisplayed = [];
      this.employeeFormService
        .findHolidaysByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtHolidayDisplayed = [];
          if (results !== null && results !== undefined) {
            results.forEach((obj) => {
              this.bidtHolidayDisplayed.push(this.convertToHolidayRowObj(obj));
            });
          }
          this.isLoadingHolidaysTable = false;
        });

      this.isLoadingExpenseTable = true;
      this.bidtExpenseDisplayed = [];
      this.employeeFormService.findExpenseByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id).subscribe((results) => {
        this.bidtExpenseDisplayed = [];
        if (results !== null && results !== undefined) {
          results.forEach((obj) => {
            this.bidtExpenseDisplayed.push(this.convertToExpenseRowObj(obj));
          });
        }
        this.isLoadingExpenseTable = false;
      });

      this.isLoadingMedicalExaminationTable = true;
      this.bidtMedicalExaminationDisplayed = [];
      this.employeeFormService
        .findByEmployeeIdMedicalEmployee(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtMedicalExaminationDisplayed = [];
          if (results !== null && results !== undefined) {
            results.forEach((obj) => {
              this.bidtMedicalExaminationDisplayed.push(this.convertToMedicalExaminationRowObj(obj));
            });
          }
          this.isLoadingMedicalExaminationTable = false;
        });

      this.isLoadingDocumentTable = true;
      this.bidtDocumentDisplayed = [];
      this.employeeFormService
        .findDocumentByEmployeeId(this.employeeDetails.bidtEmployeeDTO.id)
        .subscribe((results) => {
          this.bidtDocumentDisplayed = [];
          if (results !== null && results !== undefined) {
            results.forEach((obj) => {
              this.bidtDocumentDisplayed.push(this.convertToDocumentRowObj(obj));
            });
          }
          this.isLoadingDocumentTable = false;
        });

      this.resetWorkTableFilters();
      this.resetFlightTableFilters();
      this.isLoadingWorksTable = true;
      this.isLoadingFlightsTable = true;
      this.worksDisplayed = [];
      this.flightsDisplayed = [];

      const acrsEventListInput: FindAcrsEventListByUserInput = {
        status: AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY,
        typeCode: BidoNotificationTypeConstants.ACRS_TYPE_CODE,
        user: `${this.employeeFormData.employeeFirstName} ${this.employeeFormData.employeeLastName}`
      };

      forkJoin([
        this.employeeFormService.getWorksByEmployee(this.searchCriteriaWork),
        this.employeeFormService.getFlightsByEmployee(this.searchCriteriaFlight),
        this.employeeFormService.findAcrsEventListByUser(acrsEventListInput)
      ])
        .pipe(
          finalize(() => {
            this.isLoadingAcrsEventTable = true;
          })
        )
        .subscribe((results) => {
          this.worksDisplayed = [];
          this.flightsDisplayed = [];
          this.isLoadingWorksTable = false;
          this.isLoadingFlightsTable = false;

          if (results[0] !== null && results[0] !== undefined && results[0].length > 0) {
            results[0].forEach((obj, index) => {
              this.worksDisplayed.push(this.convertToWorkRowObj(obj, index));
            });
          }

          if (results[1] !== null && results[1] !== undefined && results[1].length > 0) {
            results[1].forEach((obj) => {
              this.flightsDisplayed.push(this.convertToFlightRowObj(obj));
            });
          }

          if (ObjectUtils.isDefined(results[2])) {
            this.acrsEventTable.moreResults = results[2].moreResults;
            this.acrsEventTable.list = ListUtils.orEmpty(results[2].list).map((notification) => {
              const matchingStatus = this.eventStatusList.find((elt) => elt.value === notification.status);

              const acrsEventRow: AcrsEventRow = {
                asset: '',
                eventCode: StringUtils.orEmpty(notification.notificationCode),
                eventDate: this.dateService.dateToString(notification.reportingDate),
                eventDescription: StringUtils.orEmpty(notification.notificationDescription),
                eventStatus: matchingStatus ? matchingStatus.label : StringUtils.orEmpty(notification.status),
                _obj: notification
              };

              this.employeeFormService
                .findBidoEquipment({ equipmentCode: notification.equipmentCode })
                .subscribe((equipment) => {
                  acrsEventRow.asset = BidoEquipmentUtils.toString(equipment);
                });

              return acrsEventRow;
            });
          }

          this.showWorkTab = !!results[0].length;
          this.showFlightTab = !!results[1].length;
          this.showAcrsEventTab = results[2].list.length > 0;
          this.createContentTable();
        });
    }
  }

  private loadQualificationRenewal() {
    const criteria: FindWorksInformationByCriteriaInput = {
      employeeId: this.employeeFormData.id,
      dateFrom: this.qualificationRenewalStartDateFilter,
      dateTo: this.qualificationRenewalEndDateFilter
    };
    this.employeeFormService.findWorksInformationByCriteria(criteria).subscribe((results) => {
      if (results !== null && results !== undefined) {
        this.qualificationRenewalTableDataSource.setData(results);
      }
    });
  }

  private loadWorks() {
    this.isLoadingWorksTable = true;
    this.worksDisplayed = [];
    this.employeeFormService.getWorksByEmployee(this.searchCriteriaWork).subscribe((results) => {
      results.forEach((obj, index) => {
        this.worksDisplayed.push(this.convertToWorkRowObj(obj, index));
      });
      this.isLoadingWorksTable = false;
    });
  }

  private loadFlights() {
    this.isLoadingFlightsTable = true;
    this.flightsDisplayed = [];
    this.employeeFormService.getFlightsByEmployee(this.searchCriteriaFlight).subscribe((results) => {
      results.forEach((obj) => {
        this.flightsDisplayed.push(this.convertToFlightRowObj(obj));
      });
      this.isLoadingFlightsTable = false;
    });
  }

  private loadWorktemplateNames(): void {
    this.workTemplateNames = [];
    this.employeeFormService.findAllWorkTemplateNames().subscribe((results) => {
      if (results !== null && results !== undefined && results.list !== null && results.list !== undefined) {
        results.list.forEach((element) => {
          if (element !== null && element !== undefined) {
            element.ltHourPerWeek = element.ltHourPerWeek && this.getHourWithSecond(element.ltHourPerWeek);
            element.ltNbHourWd = element.ltNbHourWd && this.getHourWithSecond(element.ltNbHourWd);
            element.ltNbHourWe = element.ltNbHourWe && this.getHourWithSecond(element.ltNbHourWe);
            const labelValue: LabelValue<string> = {
              label: element.ltName || '',
              value: element.ltName || ''
            };
            this.workTemplateNames.push(labelValue);
          }
        });
        this.workTemplateNameList = results.list || [];
      }
    });
  }

  public cancelEmployee(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.reloadEmployee();
    this.resetSelectedRow();
  }

  public editEmployee(): void {
    this.checkValidation();
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public editEmployeeCard(): void {
    this.employeeFormService.generateEmployeeCard(this.employeeFormData).subscribe(
      (result) => {
        const file: FileContent = result || {};
        if (!!file.fileContent && !!file.fileName) {
          const byteCharacters = atob(file.fileContent.toString());
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const fileURL = URL.createObjectURL(new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' }));
          window.open(fileURL);
        }
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveEmployee'));
      }
    );
  }

  public reloadEmployee(): void {
    this.loadEmployee();
  }

  public saveEmployee(): void {
    if (!this.checkValidation()) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');

      return;
    }
    // this.employeeFormData.employeeBirthday = new Date(this.employeeFormData.employeeBirthday);
    this.employeeFormData.contractEmployeeStartDate =
      this.selectedContractEmployeeStartDate && this.selectedContractEmployeeStartDate.toISOString();
    this.employeeFormData.contractEmployeeEndDate =
      this.selectedContractEmployeeEndDate && this.selectedContractEmployeeEndDate.toISOString();
    this.contractFormData =
      this.contractNameDTOList &&
      this.contractNameDTOList.filter((contract) => {
        return contract.id && contract.id.toString() === this.selectedContractName;
      })[0];

    this.licenseFormData.licenseValidatingDate =
      this.selectedLicenseValidatingDate && this.selectedLicenseValidatingDate.toISOString();

    this.licenseFormData.licenseIssueDate =
      this.selectedLicenseIssueDate && this.selectedLicenseIssueDate.toISOString();

    const saveEmployeeObj: SaveEmployeesInput = {
      bidtEmployeeDTO: this.employeeFormData,
      bidtSalaryDTO: this.salaryFormData,
      bidContractDTO: this.contractFormData,
      bidtLaborTemplateDTO: this.laborTemplateFormData,
      superiorId: this.superiorFormData.id,
      bidtLicenseDTO: this.licenseFormData,
      bidtCategoryDTO: [],
      bidtTrainingDTO: [],
      bidtEvaluationDTO: [],
      bidtMedicalVisitDTO: [],
      bidtAbsenceDTO: [],
      bidtHolidayDTO: [],
      bidtExpenseDTO: [],
      bidtHourlyCostDTO: [],
      bidtQualifEmployeeDTO: [],
      bidtDocumentDTO: []
    };

    if (this.bidtHourlyCostDisplayed.length > 0) {
      this.bidtHourlyCostDisplayed.forEach((hourlyCost) => {
        if (hourlyCost.bitHourlyCostDTO) {
          hourlyCost.bitHourlyCostDTO.bidtEmployeeId = this.employeeFormData.id;
          saveEmployeeObj.bidtHourlyCostDTO = saveEmployeeObj.bidtHourlyCostDTO || [];
          saveEmployeeObj.bidtHourlyCostDTO.push(hourlyCost.bitHourlyCostDTO);
        }
      });
    }

    if (this.bidtQualifEmployeeDisplayed.length > 0) {
      this.bidtQualifEmployeeDisplayed.forEach((qualif) => {
        if (qualif._obj.bidtQualifEmployeeDTO) {
          qualif._obj.bidtQualifEmployeeDTO.bidtEmployeeId = this.employeeFormData.id;
          saveEmployeeObj.bidtQualifEmployeeDTO = saveEmployeeObj.bidtQualifEmployeeDTO || [];
          saveEmployeeObj.bidtQualifEmployeeDTO.push(qualif._obj.bidtQualifEmployeeDTO);
        }
      });
    }

    if (this.bidtTrainingDisplayed.length > 0) {
      this.bidtTrainingDisplayed.forEach((training) => {
        training._obj.bidtEmployeeId = this.employeeFormData.id;
        const typeValue: LabelValue<string> =
          this.requestedByList &&
          this.requestedByList.filter((requestor) => {
            return requestor.label === training.trainingAskedBy;
          })[0];
        training._obj.trainingAskedBy = typeValue && typeValue.value;
        saveEmployeeObj.bidtTrainingDTO = saveEmployeeObj.bidtTrainingDTO || [];
        saveEmployeeObj.bidtTrainingDTO.push(training._obj);
      });
    }

    if (this.bidtMedicalExaminationDisplayed.length > 0) {
      this.bidtMedicalExaminationDisplayed.forEach((medicalExam) => {
        medicalExam._obj.bidtEmployeeId = this.employeeFormData.id;
        saveEmployeeObj.bidtMedicalVisitDTO = saveEmployeeObj.bidtMedicalVisitDTO || [];
        saveEmployeeObj.bidtMedicalVisitDTO.push(medicalExam._obj);
      });
    }

    if (this.bidtExpenseDisplayed.length > 0) {
      this.bidtExpenseDisplayed.forEach((expense) => {
        expense._obj.bidtEmployeeId = this.employeeFormData.id;
        const typeValue: LabelValue<string> =
          this.expenseTypes &&
          this.expenseTypes.filter((expenseType) => {
            return expenseType.label === expense.expenseType;
          })[0];
        expense._obj.expenseType = typeValue && typeValue.value;
        saveEmployeeObj.bidtExpenseDTO = saveEmployeeObj.bidtExpenseDTO || [];
        saveEmployeeObj.bidtExpenseDTO.push(expense._obj);
      });
    }

    if (this.bidtAbsenceDisplayed.length > 0) {
      this.bidtAbsenceDisplayed.forEach((absence) => {
        absence._obj.bidtEmployeeByBidtEmployeeId = this.employeeFormData.id;
        const typeValue: LabelValue<string> =
          this.absenceTypes &&
          this.absenceTypes.filter((type) => {
            return type.label === absence.absenceType;
          })[0];
        absence._obj.absenceType = typeValue && typeValue.value;
        saveEmployeeObj.bidtAbsenceDTO = saveEmployeeObj.bidtAbsenceDTO || [];
        saveEmployeeObj.bidtAbsenceDTO.push(absence._obj);
      });
    }

    if (this.bidtHolidayDisplayed.length > 0) {
      this.bidtHolidayDisplayed.forEach((holiday) => {
        const holidayStatusValue: LabelValue<string> =
          this.holidayStatusList &&
          this.holidayStatusList.filter((status) => {
            return status.label === holiday.holidayStatus;
          })[0];
        const holidayStatus = holidayStatusValue && holidayStatusValue.value;

        const absenceHoliday: BidtAbsenceDTO = {
          bidtEmployeeByBidtEmployeeId: this.employeeFormData.id,
          absenceStartDate: holiday._obj.holidayStartDate,
          absenceEndDate: holiday._obj.holidayEndDate,
          absenceStatus: holidayStatus,
          bidtEmployeeByBidtEmployeeId2Id: holiday._obj.bidtEmployeeByBidtEmployeeId2Id
        };
        saveEmployeeObj.bidtHolidayDTO = saveEmployeeObj.bidtHolidayDTO || [];
        saveEmployeeObj.bidtHolidayDTO.push(absenceHoliday);
      });
    }

    if (this.bidtEvaluationDisplayed.length > 0) {
      this.bidtEvaluationDisplayed.forEach((evaluation) => {
        if (evaluation._obj.bidtEvaluationDTO !== null && evaluation._obj.bidtEvaluationDTO !== undefined) {
          evaluation._obj.bidtEvaluationDTO.bidtEmployeeByBidtEmployeeId = this.employeeFormData.id;

          const evaluationTypeValue: LabelValue<string> =
            this.evaluationTypes &&
            this.evaluationTypes.filter((type) => {
              if (evaluation._obj.bidtEvaluationDTO) {
                return type.label === evaluation._obj.bidtEvaluationDTO.evaluationType;
              }

              return false;
            })[0];
          evaluation._obj.bidtEvaluationDTO.evaluationType = evaluationTypeValue && evaluationTypeValue.value;
          saveEmployeeObj.bidtEvaluationDTO = saveEmployeeObj.bidtEvaluationDTO || [];
          saveEmployeeObj.bidtEvaluationDTO.push(evaluation._obj.bidtEvaluationDTO);
        }
      });
    }

    if (this.bidtDocumentDisplayed.length > 0) {
      this.bidtDocumentDisplayed.forEach((doc) => {
        doc._obj.bidtEmployeeId = this.employeeFormData.id;
        saveEmployeeObj.bidtDocumentDTO = saveEmployeeObj.bidtDocumentDTO || [];
        saveEmployeeObj.bidtDocumentDTO.push(doc._obj);
      });
    }

    this.categoryLevelTableData.forEach((rowObj) => {
      this.licensesTableCols.forEach((colObj) => {
        if (rowObj[colObj.field] === true) {
          const bidtCategoryDTOObj: BidtCategoryDTO = {
            bidtLicenseId: this.employeeFormData.bidtLicenseId,
            categoryType: rowObj.categoryType,
            categoryLevel: colObj.field.replace('level', '')
          };
          saveEmployeeObj.bidtCategoryDTO = saveEmployeeObj.bidtCategoryDTO || [];
          saveEmployeeObj.bidtCategoryDTO.push(bidtCategoryDTOObj);
        }
      });
    });

    this.showSaveSpinner = true;
    this.employeeFormService
      .saveEmployees(saveEmployeeObj)
      .pipe(
        finalize(() => {
          this.showSaveSpinner = false;
        })
      )
      .subscribe((result) => {
        if (this.isCreateOpenMode) {
          this.empID = result;
          this.employeeFormData.id = result;
        }
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveEmployee'));
        this.loadEmployee();
        if (this.isCreateOpenMode) {
          // In order to show tabs
          this.componentData.objectId = this.serializationService.serialize(this.employeeFormData);
          this.employeeName = `${this.employeeFormData.employeeFirstName} ${this.employeeFormData.employeeLastName}`;
          this.displayComponentContext(this.employeeName, this.isCreateOpenMode);
          this.updateOpenMode(ComponentOpenMode.Read);
          this.createContentTable();
        }
      });

    this.resetSelectedRow();
  }

  public openSuperiorPopup(): void {
    this.showSuperiorPopup = !this.isReadOpenMode ? true : false;
  }

  public refreshSuperior(): void {
    this.superiorFormData = {};
  }

  public setSelectedSuperior(superior: Event): void {
    this.superiorFormData = superior as BidtEmployeeDTO;
  }

  public openWorkTemplateTab(): void {
    this.currentTabId = this.tabWorkTemplateId;
  }
  public openHourlyCostsTab(): void {
    this.currentTabId = this.tabHourlyCostsId;
  }
  public openQualificationTab(): void {
    this.currentTabId = this.tabQualificationId;
  }
  public openLicenseTab(): void {
    this.currentTabId = this.tabLicenseId;
  }
  public openTrainingTab(): void {
    this.currentTabId = this.tabTrainingId;
  }
  public openEvaluationTab(): void {
    this.currentTabId = this.tabEvaluationId;
  }
  public openAbsenceTab(): void {
    this.currentTabId = this.tabAbsenceId;
  }
  public openHolidaysTab(): void {
    this.currentTabId = this.tabHolidaysId;
  }
  public openExpenseTab(): void {
    this.currentTabId = this.tabExpenseId;
  }
  public openMedicalExaminationTab(): void {
    this.currentTabId = this.tabMedicalExaminationId;
  }

  /**
   * Convert template form data hours into second on load
   */
  private calculateTemplateData(): void {
    this.laborTemplateFormData.ltHourPerWeek =
      this.laborTemplateFormData.ltHourPerWeek && this.getHourWithSecond(this.laborTemplateFormData.ltHourPerWeek);
    this.laborTemplateFormData.ltNbHourWd =
      this.laborTemplateFormData.ltNbHourWd && this.getHourWithSecond(this.laborTemplateFormData.ltNbHourWd);
    this.laborTemplateFormData.ltNbHourWe =
      this.laborTemplateFormData.ltNbHourWe && this.getHourWithSecond(this.laborTemplateFormData.ltNbHourWe);
  }

  public setWorkTemplatedata(): void {
    if (this.selectedWorkTemplateName) {
      this.laborTemplateFormData =
        this.workTemplateNameList &&
        this.workTemplateNameList.filter((template) => {
          return template.ltName === this.selectedWorkTemplateName;
        })[0];
    } else {
      this.laborTemplateFormData = {};
    }
  }

  /****
   * Convert hour into second
   */
  private getHourWithSecond(valueInSecond: number): number {
    if (valueInSecond !== null && valueInSecond !== undefined) {
      const second = 3600;

      return valueInSecond / second;
    }

    return 0;
  }

  /***********************************************************************************
   * Documents Tab
   ***********************************************************************************/
  public openDocumentsTab(): void {
    this.currentTabId = this.tabDocumentsId;
  }

  /*
        Documents handler functions
    */
  private addNewDocument(newDocument: BidtDocumentDTO) {
    const searchInDisplayedList = this.bidtDocumentDisplayed.find(
      (value) => value.documentName === newDocument.documentName
    );
    if (!searchInDisplayedList) {
      this.bidtDocumentAddedList.push(newDocument);
      this.bidtDocumentDisplayed.push(this.convertToDocumentRowObj(newDocument));
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
    }
  }
  public deleteSelectedDocuments() {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedDocuments.forEach((element) => {
          const searchInAddedList = this.bidtDocumentAddedList.find(
            (value) => value.documentName === element.documentName
          );
          const searchInUpdatedList = this.bidtDocumentUpdatedList.find(
            (value) => value.documentName === element.documentName
          );
          if (searchInAddedList) {
            const indexInAddedList = this.bidtDocumentAddedList.indexOf(searchInAddedList);
            this.bidtDocumentAddedList.splice(indexInAddedList, 1);
          } else if (searchInUpdatedList) {
            const indexInUpdatedList = this.bidtDocumentUpdatedList.indexOf(searchInUpdatedList);
            this.bidtDocumentUpdatedList.splice(indexInUpdatedList, 1);
            this.bidtDocumentDeletedList.push(element._obj);
          } else {
            this.bidtDocumentDeletedList.push(element._obj);
          }
          const indexInDisplayedList = this.bidtDocumentDisplayed.indexOf(element);
          this.bidtDocumentDisplayed.splice(indexInDisplayedList, 1);
        });
        this.bidtDocumentDeletedList = [...this.bidtDocumentDeletedList];
        this.selectedDocuments = [];
      }
    });
  }
  public updateDocument(updatedDocument: BidtDocumentDTO) {
    const previousDocumentObject = this.bidtDocumentDisplayed[this.currentDocumentIndex];
    const searchInAddedList = this.bidtDocumentAddedList.find(
      (value) => value.documentName === previousDocumentObject.documentName
    );
    const searchInUpdatedList = this.bidtDocumentUpdatedList.find(
      (value) => value.documentCode === previousDocumentObject._obj.documentCode
    );
    if (searchInAddedList) {
      const indexInAddedList = this.bidtDocumentAddedList.indexOf(searchInAddedList);
      this.bidtDocumentAddedList[indexInAddedList] = updatedDocument;
    } else if (searchInUpdatedList) {
      const indexInUpdatedList = this.bidtDocumentUpdatedList.indexOf(searchInUpdatedList);
      this.bidtDocumentUpdatedList[indexInUpdatedList] = updatedDocument;
    } else {
      this.bidtDocumentUpdatedList.push(updatedDocument);
    }
    this.bidtDocumentDisplayed[this.currentDocumentIndex] = this.convertToDocumentRowObj(updatedDocument);
    this.selectedDocuments = [];
  }

  // File handler utilities
  public showDocExtension(document: BidtDocumentDTO): string {
    return FileUtils.getExtension(document.documentName).toUpperCase();
  }

  public showDocSize(document: BidtDocumentDTO): string {
    return document.documentContent ? FileUtils.getFormattedSize(document.documentContent.length) : '';
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (event.files) {
      const file: File = event.files[0];
      FileUtils.getFileContentAsBase64(file, (fileContent) => {
        if (fileContent) {
          const document: BidtDocumentDTO = {
            documentContent: fileContent,
            documentName: file.name,
            documentPublicationDate: new Date()
          };

          this.addNewDocument(document);
        }
      });

      fileUploader.clear();
    }
  }

  public editDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.bidtDocumentDisplayed.findIndex((document) => {
        return document === this.selectedDocuments[0];
      });

      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.isReadOnlyDocumentDialog = false;
      if (!this.currentDocument.documentSource) {
        this.showDocumentDialog = true;
      } else {
        this.showDocumentUrlDialog = true;
      }
    }
  }

  public openDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocument = this.selectedDocuments[0]._obj;
      this.isReadOnlyDocumentDialog = true;
      if (!this.currentDocument.documentSource) {
        this.showDocumentDialog = true;
      } else {
        this.showDocumentUrlDialog = true;
      }
    }
  }

  public downloadFiles(): void {
    this.selectedDocuments.forEach((document) => {
      if (!!document._obj.documentContent) {
        FileUtils.downloadFile(document._obj.documentContent, document.documentName);
      }
    });
  }

  /***********************************************************************************
   * Medical Examination Tab
   ***********************************************************************************/
  public openMedicalExamination(): void {
    this.isReadOnlyMedicalExaminationDialog = true;
    if (this.selectedMedicalExaminations.length === 1) {
      this.currentMedicalExaminations = { ...this.selectedMedicalExaminations[0]._obj };
      this.currentMedicalExaminationIndex = this.bidtMedicalExaminationDisplayed.indexOf(
        this.selectedMedicalExaminations[0]
      );
      this.showMedicalExaminationPopup = true;
      this.dataMedicalExamination = {
        componentId: 'MedicalExaminationPopupFormComponent',
        selectedRow: [],
        object: this.currentMedicalExaminations,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public createMedicalExamination(): void {
    this.currentMedicalExaminationIndex = -1;
    this.currentMedicalExaminations = {};
    this.showMedicalExaminationPopup = true;
    this.isNewMedicalExamination = true;
    this.isReadOnlyMedicalExaminationDialog = false;
    this.dataMedicalExamination = {
      componentId: 'MedicalExaminationPopupFormComponent',
      selectedRow: undefined,
      object: this.currentMedicalExaminations,
      openMode: ComponentOpenMode.Write
    };
  }
  public editMedicalExamination(): void {
    this.isNewMedicalExamination = false;
    this.isReadOnlyMedicalExaminationDialog = false;
    if (this.selectedMedicalExaminations.length === 1) {
      this.currentMedicalExaminations = { ...this.selectedMedicalExaminations[0]._obj };
      this.currentMedicalExaminationIndex = this.bidtMedicalExaminationDisplayed.indexOf(
        this.selectedMedicalExaminations[0]
      );
      this.showMedicalExaminationPopup = true;
      this.dataMedicalExamination = {
        componentId: 'MedicalExaminationPopupFormComponent',
        selectedRow: [],
        object: this.currentMedicalExaminations,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteMedicalExamination(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedMedicalExaminations.forEach((element) => {
          const indexInDisplayedList = this.bidtMedicalExaminationDisplayed.indexOf(element);
          this.bidtMedicalExaminationDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentMedicalExaminationIndex = -1;
        this.selectedMedicalExaminations = [];
      }
    });
  }

  public saveMedicalExamination(medicalExamObj: BidtMedicalVisitDTO): void {
    if (!!medicalExamObj) {
      if (this.currentMedicalExaminationIndex > -1) {
        this.bidtMedicalExaminationDisplayed[
          this.currentMedicalExaminationIndex
        ] = this.convertToMedicalExaminationRowObj(medicalExamObj);
      } else {
        this.bidtMedicalExaminationDisplayed = [
          ...this.bidtMedicalExaminationDisplayed,
          this.convertToMedicalExaminationRowObj(medicalExamObj)
        ];
      }
    }
    this.currentMedicalExaminationIndex = -1;
    this.selectedMedicalExaminations = [];
  }

  /***********************************************************************************
   * Absence Tab
   ***********************************************************************************/
  public openAbsence(): void {
    this.isNewAbsence = false;
    this.isReadOnlyAbsenceDialog = true;
    if (this.selectedAbsences.length === 1) {
      this.currentAbsences = { ...this.selectedAbsences[0]._obj };
      this.currentAbsenceIndex = this.bidtAbsenceDisplayed.indexOf(this.selectedAbsences[0]);
      this.showAbsencePopup = true;
      this.dataAbsence = {
        componentId: 'AbsencePopupFormComponent',
        selectedRow: [],
        object: this.currentAbsences,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createAbsence(): void {
    this.currentAbsenceIndex = -1;
    this.currentAbsences = {};
    this.showAbsencePopup = true;
    this.isNewAbsence = true;
    this.isReadOnlyAbsenceDialog = false;
    this.dataAbsence = {
      componentId: 'AbsencePopupFormComponent',
      selectedRow: undefined,
      object: this.currentAbsences,
      openMode: ComponentOpenMode.Write
    };
  }

  public editAbsence(): void {
    this.isNewAbsence = false;
    this.isReadOnlyAbsenceDialog = false;
    if (this.selectedAbsences.length === 1) {
      this.currentAbsences = { ...this.selectedAbsences[0]._obj };
      this.currentAbsenceIndex = this.bidtAbsenceDisplayed.indexOf(this.selectedAbsences[0]);
      this.showAbsencePopup = true;
      this.dataAbsence = {
        componentId: 'AbsencePopupFormComponent',
        selectedRow: [],
        object: this.currentAbsences,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteAbsence(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedAbsences.forEach((element) => {
          const indexInDisplayedList = this.bidtAbsenceDisplayed.indexOf(element);
          this.bidtAbsenceDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentAbsenceIndex = -1;
        this.selectedAbsences = [];
      }
    });
  }

  public saveAbsence(absenceObj: BidtAbsenceDTO): void {
    if (!!absenceObj) {
      if (this.currentAbsenceIndex > -1) {
        this.bidtAbsenceDisplayed[this.currentAbsenceIndex] = this.convertToAbsenceRowObj(absenceObj);
      } else {
        this.bidtAbsenceDisplayed = [...this.bidtAbsenceDisplayed, this.convertToAbsenceRowObj(absenceObj)];
      }
    }
    this.currentAbsenceIndex = -1;
    this.selectedAbsences = [];
  }

  /***********************************************************************************
   * Evaluation Tab
   ***********************************************************************************/
  public openEvaluation(): void {
    this.isNewEvaluation = false;
    this.isReadOnlyEvaluationDialog = true;
    if (this.selectedEvaluations.length === 1) {
      this.currentEvaluations = { ...this.selectedEvaluations[0]._obj };
      this.currentEvaluationIndex = this.bidtEvaluationDisplayed.indexOf(this.selectedEvaluations[0]);
      this.showEvaluationPopup = true;
      this.dataEvaluation = {
        componentId: 'EvaluationPopupFormComponent',
        selectedRow: this.selectedEvaluations,
        object: this.currentEvaluations,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createEvaluation(): void {
    this.currentEvaluationIndex = -1;
    this.currentEvaluations = {};
    this.showEvaluationPopup = true;
    this.isNewEvaluation = true;
    this.isReadOnlyEvaluationDialog = false;
    this.dataEvaluation = {
      componentId: 'EvaluationPopupFormComponent',
      selectedRow: undefined,
      object: this.currentEvaluations,
      openMode: ComponentOpenMode.Write
    };
  }

  public editEvaluation(): void {
    this.isNewEvaluation = false;
    this.isReadOnlyEvaluationDialog = false;
    if (this.selectedEvaluations.length === 1) {
      this.currentEvaluations = { ...this.selectedEvaluations[0]._obj };
      this.currentEvaluationIndex = this.bidtEvaluationDisplayed.indexOf(this.selectedEvaluations[0]);
      this.showEvaluationPopup = true;
      this.dataEvaluation = {
        componentId: 'EvaluationPopupFormComponent',
        selectedRow: this.selectedEvaluations,
        object: this.currentEvaluations,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteEvaluation(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedEvaluations.forEach((element) => {
          const indexInDisplayedList = this.bidtEvaluationDisplayed.indexOf(element);
          this.bidtEvaluationDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentEvaluationIndex = -1;
        this.selectedEvaluations = [];
      }
    });
  }

  public saveEvaluation(evaluationObj: BidtEvaluationsOutputDTO): void {
    if (!!evaluationObj) {
      if (this.currentEvaluationIndex > -1) {
        this.bidtEvaluationDisplayed[this.currentEvaluationIndex] = this.convertToEvaluationRowObj(evaluationObj);
      } else {
        this.bidtEvaluationDisplayed = [...this.bidtEvaluationDisplayed, this.convertToEvaluationRowObj(evaluationObj)];
      }
    }
    this.currentEvaluationIndex = -1;
    this.selectedEvaluations = [];
  }

  /***********************************************************************************
   * Expense Tab
   ***********************************************************************************/
  public openExpense(): void {
    this.isNewExpense = false;
    this.isReadOnlyExpenseDialog = true;
    if (this.selectedExpenses.length === 1) {
      this.currentExpenses = { ...this.selectedExpenses[0]._obj };
      this.currentExpenseIndex = this.bidtExpenseDisplayed.indexOf(this.selectedExpenses[0]);
      this.showExpensePopup = true;
      this.dataExpense = {
        componentId: 'ExpensePopupFormComponent',
        selectedRow: this.selectedExpenses,
        object: this.currentExpenses,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createExpense(): void {
    this.currentExpenseIndex = -1;
    this.currentExpenses = {};
    this.showExpensePopup = true;
    this.isNewExpense = true;
    this.isReadOnlyExpenseDialog = false;
    this.dataExpense = {
      componentId: 'ExpensePopupFormComponent',
      selectedRow: undefined,
      object: this.currentExpenses,
      openMode: ComponentOpenMode.Write
    };
  }

  public editExpense(): void {
    this.isNewExpense = false;
    this.isReadOnlyExpenseDialog = false;
    if (this.selectedExpenses.length === 1) {
      this.currentExpenses = { ...this.selectedExpenses[0]._obj };
      this.currentExpenseIndex = this.bidtExpenseDisplayed.indexOf(this.selectedExpenses[0]);
      this.showExpensePopup = true;
      this.dataExpense = {
        componentId: 'ExpensePopupFormComponent',
        selectedRow: this.selectedExpenses,
        object: this.currentExpenses,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteExpense(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedExpenses.forEach((element) => {
          const indexInDisplayedList = this.bidtExpenseDisplayed.indexOf(element);
          this.bidtExpenseDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentExpenseIndex = -1;
        this.selectedExpenses = [];
      }
    });
  }

  public saveExpense(expenseObj: BidtAbsenceDTO): void {
    if (!!expenseObj) {
      if (this.currentExpenseIndex > -1) {
        this.bidtExpenseDisplayed[this.currentExpenseIndex] = this.convertToExpenseRowObj(expenseObj);
      } else {
        this.bidtExpenseDisplayed = [...this.bidtExpenseDisplayed, this.convertToExpenseRowObj(expenseObj)];
      }
    }
    this.currentExpenseIndex = -1;
    this.selectedExpenses = [];
  }

  /***********************************************************************************
   * Holidays Tab
   ***********************************************************************************/
  public openHoliday(): void {
    this.isNewHoliday = false;
    this.isReadOnlyHolidayDialog = true;
    if (this.selectedHolidays.length === 1) {
      this.currentHolidays = { ...this.selectedHolidays[0]._obj };
      this.currentHolidayIndex = this.bidtHolidayDisplayed.indexOf(this.selectedHolidays[0]);
      this.showHolidayPopup = true;
      this.dataHoliday = {
        componentId: 'HolidaysPopupFormComponent',
        selectedRow: [],
        object: this.currentHolidays,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createHoliday(): void {
    this.currentHolidayIndex = -1;
    this.currentHolidays = {};
    this.showHolidayPopup = true;
    this.isNewHoliday = true;
    this.isReadOnlyHolidayDialog = false;
    this.dataHoliday = {
      componentId: 'HolidaysPopupFormComponent',
      selectedRow: undefined,
      object: this.currentHolidays,
      openMode: ComponentOpenMode.Write
    };
  }

  public editHoliday(): void {
    this.isNewHoliday = false;
    this.isReadOnlyHolidayDialog = false;
    if (this.selectedHolidays.length === 1) {
      this.currentHolidays = { ...this.selectedHolidays[0]._obj };
      this.currentHolidayIndex = this.bidtHolidayDisplayed.indexOf(this.selectedHolidays[0]);
      this.showHolidayPopup = true;
      this.dataHoliday = {
        componentId: 'HolidaysPopupFormComponent',
        selectedRow: [],
        object: this.currentHolidays,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteHoliday(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedHolidays.forEach((element) => {
          const indexInDisplayedList = this.bidtHolidayDisplayed.indexOf(element);
          this.bidtHolidayDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentHolidayIndex = -1;
        this.selectedHolidays = [];
      }
    });
  }

  public saveHoliday(holidayObj: EmployeeHolidaysTableDTO): void {
    if (!!holidayObj) {
      if (this.currentHolidayIndex > -1) {
        this.bidtHolidayDisplayed[this.currentHolidayIndex] = this.convertToHolidayRowObj(holidayObj);
      } else {
        this.bidtHolidayDisplayed = [...this.bidtHolidayDisplayed, this.convertToHolidayRowObj(holidayObj)];
      }
    }
    this.currentHolidayIndex = -1;
    this.selectedHolidays = [];
  }

  /***********************************************************************************
   * HourlyCosts Tab
   ***********************************************************************************/
  public openHourlyCost(): void {
    this.isNewHourlyCost = false;
    this.isReadOnlyHourlyCostDialog = true;
    if (this.selectedHourlyCosts.length === 1) {
      this.currentHourlyCosts = JSON.parse(JSON.stringify(this.selectedHourlyCosts[0]));
      this.currentHourlyCostIndex = this.bidtHourlyCostDisplayed.indexOf(this.selectedHourlyCosts[0]);
      this.showHourlyCostPopup = true;
      this.dataHourlyCost = {
        componentId: 'HourlyCostsPopupFormComponent',
        selectedRow: [],
        object: this.currentHourlyCosts,
        openMode: ComponentOpenMode.Read
      };
    }
  }

  public createHourlyCost(): void {
    this.currentHourlyCosts = {};
    this.showHourlyCostPopup = true;
    this.currentHourlyCostIndex = -1;
    this.isReadOnlyHourlyCostDialog = false;
    this.dataHourlyCost = {
      componentId: 'HourlyCostsPopupFormComponent',
      selectedRow: undefined,
      object: this.currentHourlyCosts,
      openMode: ComponentOpenMode.Write
    };
  }

  public editHourlyCost(): void {
    this.isNewHourlyCost = false;
    this.isReadOnlyHourlyCostDialog = false;
    if (this.selectedHourlyCosts.length === 1) {
      this.currentHourlyCosts = JSON.parse(JSON.stringify(this.selectedHourlyCosts[0]));
      this.currentHourlyCostIndex = this.bidtHourlyCostDisplayed.indexOf(this.selectedHourlyCosts[0]);
      this.showHourlyCostPopup = true;
      this.dataHourlyCost = {
        componentId: 'HourlyCostsPopupFormComponent',
        selectedRow: [],
        object: this.currentHourlyCosts,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteHourlyCost(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedHourlyCosts.forEach((element) => {
          const indexInDisplayedList = this.bidtHourlyCostDisplayed.indexOf(element);
          this.bidtHourlyCostDisplayed.splice(indexInDisplayedList, 1);
        });

        this.currentHourlyCostIndex = -1;
        this.selectedHourlyCosts = [];
      }
    });
  }

  public saveHourlyCost(hourlyCostObj: BidtHourlyCostsOutputDTO): void {
    if (!!hourlyCostObj) {
      if (this.currentHourlyCostIndex > -1) {
        this.bidtHourlyCostDisplayed[this.currentHourlyCostIndex] = hourlyCostObj;
      } else {
        this.bidtHourlyCostDisplayed = [...this.bidtHourlyCostDisplayed, hourlyCostObj];
      }
    }
    this.currentHourlyCostIndex = -1;
    this.selectedHourlyCosts = [];
  }
  /***********************************************************************************
   * Qualification Tab
   ***********************************************************************************/
  public openQualification(): void {
    this.isNewQualification = false;
    this.isReadOnlyQualificationDialog = true;
    if (this.selectedQualifications.length === 1) {
      this.currentQualifications = { ...this.selectedQualifications[0]._obj };
      this.currentQualificationIndex = this.bidtQualifEmployeeDisplayed.indexOf(this.selectedQualifications[0]);
      this.showQualificationPopup = true;
      this.dataQualification = {
        componentId: 'QualificationPopupFormComponent',
        selectedRow: [],
        object: this.currentQualifications,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createQualification(): void {
    this.currentQualificationIndex = -1;
    this.currentQualifications = {};
    this.showQualificationPopup = true;
    this.isNewQualification = true;
    this.isReadOnlyQualificationDialog = false;
    this.dataQualification = {
      componentId: 'QualificationPopupFormComponent',
      selectedRow: undefined,
      object: this.currentQualifications,
      openMode: ComponentOpenMode.Write
    };
  }

  public editQualification(): void {
    this.isNewQualification = false;
    this.isReadOnlyQualificationDialog = false;
    if (this.selectedQualifications.length === 1) {
      this.currentQualifications = { ...this.selectedQualifications[0]._obj };
      this.currentQualificationIndex = this.bidtQualifEmployeeDisplayed.indexOf(this.selectedQualifications[0]);
      this.showQualificationPopup = true;
      this.dataQualification = {
        componentId: 'QualificationPopupFormComponent',
        selectedRow: [],
        object: this.currentQualifications,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteQualification(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedQualifications.forEach((element) => {
          const indexInDisplayedList = this.bidtQualifEmployeeDisplayed.indexOf(element);
          this.bidtQualifEmployeeDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentQualificationIndex = -1;
        this.selectedQualifications = [];
      }
    });
  }

  public saveQualification(qualificationObj: FindEmployeeQualificationDTO): void {
    if (!!qualificationObj) {
      if (this.currentQualificationIndex > -1) {
        this.bidtQualifEmployeeDisplayed[this.currentQualificationIndex] = this.convertToQualificationRowObj(
          qualificationObj
        );
      } else {
        this.bidtQualifEmployeeDisplayed = [
          ...this.bidtQualifEmployeeDisplayed,
          this.convertToQualificationRowObj(qualificationObj)
        ];
      }
    }
    this.currentQualificationIndex = -1;
    this.selectedQualifications = [];
  }

  /***********************************************************************************
   * Qualification Renewal dates filter
   ***********************************************************************************/
  public filterQualificationRenewalDates(): void {
    if (this.qualificationRenewalStartDateFilter && this.qualificationRenewalEndDateFilter) {
      if (this.qualificationRenewalStartDateFilter < this.qualificationRenewalEndDateFilter) {
        this.loadQualificationRenewal();
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnDates'));
      }
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnMissingDates'));
    }
  }

  /***********************************************************************************
   * Training Tab
   ***********************************************************************************/
  public openTraining(): void {
    this.isNewTraining = false;
    this.isReadOnlyTrainingDialog = true;
    if (this.selectedTrainings.length === 1) {
      this.currentTrainings = { ...this.selectedTrainings[0]._obj };
      this.currentTrainingIndex = this.bidtTrainingDisplayed.indexOf(this.selectedTrainings[0]);
      this.showTrainingPopup = true;
      this.dataTraining = {
        componentId: 'TrainingPopupFormComponent',
        selectedRow: [],
        object: this.currentTrainings,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public createTraining(): void {
    this.currentTrainingIndex = -1;
    this.currentTrainings = {};
    this.showTrainingPopup = true;
    this.isNewTraining = true;
    this.isReadOnlyTrainingDialog = false;
    this.dataTraining = {
      componentId: 'TrainingPopupFormComponent',
      selectedRow: undefined,
      object: this.currentTrainings,
      openMode: ComponentOpenMode.Write
    };
  }

  public editTraining(): void {
    this.isNewTraining = false;
    this.isReadOnlyTrainingDialog = false;
    if (this.selectedTrainings.length === 1) {
      this.currentTrainings = { ...this.selectedTrainings[0]._obj };
      this.currentTrainingIndex = this.bidtTrainingDisplayed.indexOf(this.selectedTrainings[0]);
      this.showTrainingPopup = true;
      this.dataTraining = {
        componentId: 'TrainingPopupFormComponent',
        selectedRow: [],
        object: this.currentTrainings,
        openMode: ComponentOpenMode.Write
      };
    }
  }

  public deleteTraining(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedTrainings.forEach((element) => {
          const indexInDisplayedList = this.bidtTrainingDisplayed.indexOf(element);
          this.bidtTrainingDisplayed.splice(indexInDisplayedList, 1);
        });
        this.currentTrainingIndex = -1;
        this.selectedTrainings = [];
      }
    });
  }

  public saveTraining(trainingObj: BidtTrainingDTO): void {
    if (!!trainingObj) {
      if (this.currentTrainingIndex > -1) {
        this.bidtTrainingDisplayed[this.currentTrainingIndex] = this.convertToTrainingRowObj(trainingObj);
      } else {
        this.bidtTrainingDisplayed = [...this.bidtTrainingDisplayed, this.convertToTrainingRowObj(trainingObj)];
      }
    }
    this.currentTrainingIndex = -1;
    this.selectedTrainings = [];
  }

  private convertToTrainingRowObj(obj: BidtTrainingDTO): TrainingRow {
    return {
      trainingName: obj.trainingName,
      trainingAskedBy: obj.trainingAskedBy,
      trainingCenter: obj.trainingCenter,
      trainingComment: obj.trainingComment,
      trainingEndDate: obj.trainingEndDate && moment(obj.trainingEndDate).format('YYYY/MM/DD A'),
      trainingInstructor: obj.trainingInstructor,
      trainingPerformed: obj.trainingPerformed && obj.trainingPerformed === 1 ? true : false,
      trainingStartDate: obj.trainingStartDate && moment(obj.trainingStartDate).format('YYYY/MM/DD A'),
      _obj: obj
    };
  }

  private convertToQualificationRowObj(obj: FindEmployeeQualificationDTO): QualificationRow {
    return {
      qualifEmployeeEndDate:
        obj.bidtQualifEmployeeDTO &&
        obj.bidtQualifEmployeeDTO.qualifEmployeeEndDate &&
        this.dateService.dateToString(new Date(obj.bidtQualifEmployeeDTO.qualifEmployeeEndDate)),
      qualifEmployeeInstitution: obj.bidtQualifEmployeeDTO && obj.bidtQualifEmployeeDTO.qualifEmployeeInstitution,
      qualifEmployeeStartDate:
        obj.bidtQualifEmployeeDTO &&
        obj.bidtQualifEmployeeDTO.qualifEmployeeStartDate &&
        this.dateService.dateToString(new Date(obj.bidtQualifEmployeeDTO.qualifEmployeeStartDate)),
      qualificationTitle: obj.qualificationTitle,
      qualificationType: obj.qualificationType,
      qualifOngoing: obj.bidtQualifEmployeeDTO && obj.bidtQualifEmployeeDTO.qualifOngoing,
      _obj: obj
    };
  }

  private convertToAbsenceRowObj(obj: BidtAbsenceDTO): AbsenceRow {
    return {
      absenceDescription: obj.absenceDescription,
      absenceEndDate: obj.absenceEndDate && moment(obj.absenceEndDate).format('YYYY/MM/DD A'),
      absenceStartDate: obj.absenceStartDate && moment(obj.absenceStartDate).format('YYYY/MM/DD A'),
      absenceType: obj.absenceType,
      _obj: obj
    };
  }

  private convertToEvaluationRowObj(obj: BidtEvaluationsOutputDTO): EvaluationRow {
    return {
      evaluationComment: obj.bidtEvaluationDTO && obj.bidtEvaluationDTO.evaluationComment,
      evaluationDate:
        obj.bidtEvaluationDTO &&
        obj.bidtEvaluationDTO.evaluationDate &&
        this.dateService.dateToString(new Date(obj.bidtEvaluationDTO.evaluationDate)),
      evaluationType: obj.bidtEvaluationDTO && obj.bidtEvaluationDTO.evaluationType,
      evaluator: obj.evaluator,
      _obj: obj
    };
  }

  private convertToHolidayRowObj(obj: EmployeeHolidaysTableDTO): HolidayRow {
    return {
      holidayEndDate: obj.holidayEndDate && moment(obj.holidayEndDate).format('YYYY/MM/DD A'),
      holidayStartDate: obj.holidayStartDate && moment(obj.holidayStartDate).format('YYYY/MM/DD A'),
      holidayStatus: obj.holidayStatus,
      holidayValidator: obj.holidayValidator,
      _obj: obj
    };
  }

  private convertToDocumentRowObj(obj: BidtDocumentDTO): DocumentRow {
    return {
      documentContent: this.showDocSize(obj),
      documentName: obj.documentName,
      documentPublicationDate:
        obj.documentPublicationDate && this.dateService.dateToString(new Date(obj.documentPublicationDate)),
      documentType: this.showDocExtension(obj),
      documentCategory: this.getDocumentCategoryText(obj.documentCategory),
      documentSource: obj.documentSource,
      _obj: obj
    };
  }

  private getDocumentCategoryText(docCategory: string | undefined): string | undefined {
    let toReturn: string | undefined;
    if (!docCategory) {
      return toReturn;
    }
    this.documentCategories.forEach((elem: CatalogPropertiesTableDTO) => {
      if (elem.propertiesKey === docCategory) {
        toReturn = elem.enPropertiesValue;
      }
    });

    return toReturn;
  }

  private convertToMedicalExaminationRowObj(obj: BidtMedicalVisitDTO): MedicalExaminationRow {
    return {
      visitComment: obj.visitComment,
      visitDate: obj.visitDate && this.dateService.dateToString(new Date(obj.visitDate)),
      visitExpiration: obj.visitExpiration && this.dateService.dateToString(new Date(obj.visitExpiration)),
      _obj: obj
    };
  }

  private convertToExpenseRowObj(obj: BidtExpenseDTO): ExpenseRow {
    return {
      expenseDate: obj.expenseDate && this.dateService.dateToString(new Date(obj.expenseDate)),
      expenseDescription: obj.expenseDescription,
      expenseType: obj.expenseType,
      expenseValue: obj.expenseValue,
      _obj: obj
    };
  }

  private convertToWorkRowObj(obj: EmployeeWorkOutputDTO, index: number): WorkRow {
    return {
      origin: obj.origin,
      originText: obj.originText,
      type: obj.type,
      openingDate: obj.openingDate && this.dateService.dateWithHourMinSecToString(obj.openingDate),
      closingDate: obj.closingDate && this.dateService.dateWithHourMinSecToString(obj.closingDate),
      description: obj.description,
      projectNumber: obj.projectNumber,
      projectAsset: obj.projectAsset,
      statusText: obj.statusText,
      totalElapsed: obj.totalElapsed,
      qualif: obj.qualification,
      relatedItem: obj.relatedItem,
      workOrder: obj.treeNodeText,
      isRelatedItemEnabled: obj.isRelatedItemEnabled,
      _obj: obj,
      rowIndex: index
    };
  }

  private convertToFlightRowObj(obj: EmployeeFlightOutputDTO): FlightRow {
    return {
      missionCode: obj.missionCode,
      missionType: obj.missionType,
      missionNumber: obj.missionNumber,
      startDateText: obj.startDateText && this.dateService.dateToString(obj.startDateText),
      endDateText: obj.endDateText && this.dateService.dateToString(obj.endDateText),
      assetText: obj.assetText,
      pilot: obj.pilot,
      copilot: obj.copilot,
      dayMission: obj.dayMission,
      engineStartDateText: obj.engineStartDateText && this.dateService.dateToString(obj.engineStartDateText),
      engineStopDateText: obj.engineStopDateText && this.dateService.dateToString(obj.engineStopDateText),
      missionDepartureLocation: obj.missionDepartureLocation,
      missionArrivalLocation: obj.missionArrivalLocation,
      chronoNumber: obj.chronoNumber,
      duration: obj.duration,
      ifrDuration: obj.ifrDuration,
      cycleNumber: obj.cycleNumber,
      flightStatus: obj.flightStatus,
      flightType: obj.flightType,
      _obj: obj
    };
  }

  private resetSelectedRow(): void {
    this.selectedQualifications = [];
    this.selectedLicenses = [];
    this.selectedTrainings = [];
    this.selectedHourlyCosts = [];
    this.selectedEvaluations = [];
    this.selectedAbsences = [];
    this.selectedHolidays = [];
    this.selectedExpenses = [];
    this.selectedMedicalExaminations = [];
    this.selectedDocuments = [];
  }

  public filterWorkWithCriteria() {
    this.loadWorks();
  }

  public filterFlightWithCriteria() {
    this.loadFlights();
  }

  public resetWorkTableFilters() {
    const toDate = new Date();
    const fromDate = new Date(toDate);
    fromDate.setMonth(toDate.getMonth() - EmployeeFormComponent.DATE_DIFF);

    if (this.employeeDetails.bidtEmployeeDTO) {
      this.searchCriteriaWork = {
        employeeId: this.employeeDetails.bidtEmployeeDTO.id,
        fromEndTimeFilter: fromDate,
        fromStartTimeFilter: fromDate,
        toEndTimeFilter: toDate,
        toStartTimeTimeFilter: toDate
      };
    }
  }

  public resetFlightTableFilters() {
    const toDate = new Date();
    const fromDate = new Date(toDate);
    fromDate.setMonth(toDate.getMonth() - EmployeeFormComponent.DATE_DIFF);

    if (this.employeeDetails.bidtEmployeeDTO) {
      this.searchCriteriaFlight = {
        employeeId: this.employeeDetails.bidtEmployeeDTO.id,
        fromEndTimeFilter: fromDate,
        fromStartTimeFilter: fromDate,
        toEndTimeFilter: toDate,
        toStartTimeTimeFilter: toDate
      };
    }
  }

  public openOrigin(row: WorkRow) {
    const openMode: ComponentOpenMode = ComponentOpenMode.Read;
    if (row._obj && row.origin && row._obj.bidmWorkOrderData) {
      const bidmWorkOrderData = row._obj.bidmWorkOrderData;
      const arr = row.origin.split('#');
      if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_TASK === bidmWorkOrderData.woType) {
        const objectId: BireTaskDTOId = {
          taskCode: arr[0],
          taskVersion: arr[1]
        };
        const labelKey = 'transaction.TaskFormComponent';
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: 'TaskFormComponent',
          objectId: this.serializationService.serialize(objectId),
          openMode
        };
        this.tabService.open(this.tabService.create(data, labelKey, true));
      } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_EVOLUTION === bidmWorkOrderData.woType) {
        const objectId: BireEvolutionDTOId = {
          evolutionNumber: arr[1],
          evolutionRevisionNumber: `${arr[2]}`
        };
        const labelKey = 'transaction.EvolutionFormComponent';
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: 'EvolutionFormComponent',
          objectId: this.serializationService.serialize(objectId),
          openMode
        };

        this.tabService.open(this.tabService.create(data, labelKey, true));
      } else if (AWPropertiesConstants.AIRM_WORK_ORDER_TYPE_DEFECT === bidmWorkOrderData.woType) {
        const data: PageComponentData = {
          id: this.tabService.generateId(),
          componentId: ComponentConstants.FLE_DEFECT_FORM,
          openMode: ComponentOpenMode.Read
        };

        const defectId: BidoNotificationDTOId = {
          notificationCode: arr[0]
        };
        data.objectId = this.serializationService.serialize(defectId);

        const labelKey = 'transaction.' + data.componentId;
        this.tabService.open(this.tabService.create(data, labelKey, true));
      }
    }
  }

  public openRelatedItem(row: WorkRow) {
    const openMode: ComponentOpenMode = ComponentOpenMode.Read;
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_ITEM_FORM,
      openMode
    };
    if (!!row && row._obj.bidmWorkOrderData) {
      const itemFormId: BireItemDTO = {
        familyCode: row._obj.bidmWorkOrderData.bireItemFamilyCode,
        chapter: row._obj.bidmWorkOrderData.bireItemChapter,
        section: row._obj.bidmWorkOrderData.bireItemSection,
        sheet: row._obj.bidmWorkOrderData.bireItemSheet,
        marks: row._obj.bidmWorkOrderData.bireItemMarks,
        subject: row._obj.bidmWorkOrderData.bireItemSubject,
        structureType: AWPropertiesConstants.STRUCTURE_TYPE_IPC_KEY,
        variantCode: row._obj.bidmWorkOrderData.bireItemVariantCode
      };
      data.objectId = this.serializationService.serialize(itemFormId);
      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public toggleRowDetailsVisibility(row: WorkRow): void {
    row.expand = !row.expand;
  }

  private loadEventStatus(): void {
    this.employeeFormService.getEventStatusValues().subscribe((results) => {
      this.eventStatusList = ListUtils.orEmpty(results);
    });
  }

  public openEvent(acrsEventRow: AcrsEventRow): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId:
        acrsEventRow._obj.bidoNotificationTypeDTO &&
        acrsEventRow._obj.bidoNotificationTypeDTO.typeCategory === AWPropertiesConstants.EVENT_CATEGORY_DEFECT_KEY
          ? ComponentConstants.FLE_DEFECT_FORM
          : ComponentConstants.FLE_EVENT_CREATE,
      objectId: this.serializationService.serialize(acrsEventRow._obj),
      openMode: ComponentOpenMode.Read
    };

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEquipment(acrsEventRow: AcrsEventRow): void {
    const input: BidoEquipmentDTOId = {
      equipmentCode: acrsEventRow.asset
    };
    this.employeeFormService.findBidoEquipment(input).subscribe((result) => {
      this.pageService.openAsset(result.equipmentCode, result.equipmentFunction);
    });
  }

  public openWorkOrder(row: WorkRow): void {
    if (row._obj.bidmWorkOrderData) {
      const objectId: BidmWorkOrderDTOId = {
        projectId: row._obj.bidmWorkOrderData.projectId as string,
        woId: row._obj.bidmWorkOrderData.woId as string
      };
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_WORK_ORDER_FORM,
        openMode: ComponentOpenMode.Read,
        objectId: this.serializationService.serialize(objectId)
      };
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public linkUrl(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.bidtDocumentDisplayed.findIndex((document) => {
        return document === this.selectedDocuments[0];
      });

      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.isReadOnlyDocumentDialog = false;
      this.showDocumentUrlDialog = true;
    } else {
      this.currentDocumentIndex = -1;
      this.currentDocument = {};
      this.showDocumentUrlDialog = true;
    }
  }

  public updateDocumentUrl(doc: BidtDocumentDTO): void {
    if (this.currentDocumentIndex === -1) {
      this.addNewDocument(doc);
    } else {
      this.updateDocument(doc);
    }
  }

  public showDownloadDocButton(): boolean {
    let toReturn = true;
    if (this.selectedDocuments.length === 0) {
      toReturn = false;
    } else {
      this.selectedDocuments.forEach((doc: DocumentRow) => {
        if (!!doc.documentSource) {
          toReturn = false;
        }
      });
    }

    return toReturn;
  }

  public showGoToDocButton(): boolean {
    let toReturn = true;
    if (this.selectedDocuments.length === 0) {
      toReturn = false;
    } else {
      this.selectedDocuments.forEach((doc: DocumentRow) => {
        if (!doc.documentSource) {
          toReturn = false;
        }
      });
    }

    return toReturn;
  }

  public goToDoc(): void {
    this.selectedDocuments.forEach((doc: DocumentRow) => {
      window.open(doc.documentSource);
    });
  }
}
