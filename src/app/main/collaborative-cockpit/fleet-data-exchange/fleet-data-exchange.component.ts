import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { FileUpload } from 'primeng/fileupload';
import { finalize } from 'rxjs/operators';

import { BidoFunctionTypeConstants } from '../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { ExportAssetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-asset-data-input.interface';
import { ExportFleetDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/export-fleet-data-input.interface';
import { FindAssetListConfigurationEventDTO } from '../../../shared/types/api-input-types/fleet-data-exchange/find-asset-list-configuration-event-dto.interface';
import { FindDataListBySearchCriteriaInput } from '../../../shared/types/api-input-types/fleet-data-exchange/find-data-list-by-search-criteria-input.interface';
import { GetRefreshedArchivedReportDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/get-refreshed-archived-report-data-input.interface';
import { SaveExcelDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-excel-data-input.interface';
import { SaveXmlDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-xml-data-input.interface';
import { SaveZipDataInput } from '../../../shared/types/api-input-types/fleet-data-exchange/save-zip-data-input.interface';
import { FindFamilyVariantInput } from '../../../shared/types/api-input-types/product-structure-management/find-family-variant-input.interface';
import { GetFamilyVariantOutputDTO } from '../../../shared/types/api-output-types/engineering-data-exchange/get-family-variant-output-dto.interface';
import { BidoEquipmentOVSOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-ovs-output-dto';
import { BidoDocumentationDTO } from '../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoEquipmentTableDTO } from '../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { BireReportDTOId } from '../../../shared/types/api-types/bire-report-dto-id.interface';
import { BireReportDTO } from '../../../shared/types/api-types/bire-report-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { FileUtils } from '../../../shared/utils/file-utils';
import { ListUtils } from '../../../shared/utils/list-utils';

import { FleetDataExchangeService } from './fleet-data-exchange.service';

enum FileExtensions {
  txt = 'txt',
  xls = 'xls',
  xlsx = 'xlsx',
  xml = 'xml',
  zip = 'zip'
}

@Component({
  selector: 'aw-fleet-data-exchange',
  templateUrl: './fleet-data-exchange.component.html',
  styleUrls: ['./fleet-data-exchange.component.scss']
})
export class FleetDataExchangeComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly asset: string = 'Asset';
  public static readonly loading: string = 'Loading';
  public static readonly configEvents: string = 'Configuration and Events';
  public static readonly flights: string = 'Flights';
  public static readonly globalExport: string = 'Global Export';
  public static readonly globalImport: string = 'Global Import';
  public static readonly excel: string = 'Excel';
  public static readonly xml: string = 'Xml';
  public static readonly zip: string = 'Zip';
  public static readonly export: string = 'Export';
  public static readonly counterUpdates: string = 'Counter Updates';
  public static readonly usageModel: string = 'Usage Model';
  public static readonly fleet: string = 'Fleet';
  public static readonly dateFormat: string = 'dd-MM-yyyy_HH';
  public static readonly monthFormat: string = 'mm';

  public readonly component: typeof FleetDataExchangeComponent;

  public showImportComponents: boolean;
  public showExportComponents: boolean;

  public isFavoriteEntry: boolean;

  // Tab id
  public readonly tabFleetId: string;
  public readonly tabCounterId: string;
  public readonly tabExcelFlightsId: string;
  public readonly tabUsageId: string;
  public readonly tabImportConfigurationId: string;
  public readonly tabImportXmlFlightId: string;
  public readonly tabGlobalImportId: string;
  public readonly tabExportConfigurationId: string;
  public readonly tabExportXmlFlightId: string;
  public readonly tabGlobalExportId: string;
  public readonly tabImportReportId: string;
  public readonly tabExportReportId: string;

  public currentTabsId: string;

  // Dropdown
  public propertyDataList: LabelValue<string>[];
  public propertyFormatList: LabelValue<string>[];
  public propertyTypeList: LabelValue<string>[];
  public propertyFamilyList: LabelValue<string>[];
  public propertyVariantList: LabelValue<string>[];

  public getFamilyVariantOutputDTO: GetFamilyVariantOutputDTO[];

  public type: string;
  public format: string | undefined;
  public data: string | undefined;
  public family: string | undefined;
  public variant: string | undefined;

  public familyCode: string | undefined;
  public structureType: string | undefined;
  public variantCode: string | undefined;
  public familyName: string | undefined;
  public variantName: string | undefined;

  public showImportPanel: boolean;
  public showAssetSection: boolean;

  public file: BidoDocumentationDTO;
  public fileName: string | undefined;
  public showSearchCriteria: boolean;

  public reportTableCols: TableColumn[];

  // Tab id
  public readonly tabAssetSelectionId: string;
  public currentTabId: string;
  public assetSelectionTableCols: TableColumn[];
  public exportReportTableCols: TableColumn[];

  public showQuickSearchEquipmentDialog: boolean;
  public equipment: BidoEquipmentTableDTO | null;

  // Checkbox
  public assetDataExportCheckbox: string[];
  public lockAssetCheckbox: boolean;
  public oldEquipCheckbox: boolean;
  public simPropagationCheckbox: boolean;
  public exportEngineeringData: boolean;

  // Import Table Parmas
  public reports: BireReportDTO[];
  public selectedReports: BireReportDTO[];

  // Input Txt Params
  public assetCodeTxt: string;
  public pnCodeTxt: string;
  public snCodeTxt: string;
  public nameTxt: string;
  public designationTxt: string;

  public exportDataFrom: Date | undefined;

  public selectedExportReports: BireReportDTO[];
  public selectedAssetTask: FindAssetListConfigurationEventDTO[];

  public importReportMessage: string;
  public showImportReportMessage: boolean;

  public assetDataExport: ExportAssetDataInput;

  public showAssetsSelectionDialog: boolean;

  public superiorTable: FindAssetListConfigurationEventDTO[];

  public isReportLoading: boolean;
  public showSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly confirmationService: ConfirmationService,
    private readonly fleetDataExchangeService: FleetDataExchangeService,
    private readonly datepipe: DatePipe,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.component = FleetDataExchangeComponent;

    this.showExportComponents = false;
    this.showImportComponents = false;

    this.tabFleetId = 'fleet';
    this.tabImportReportId = 'importReports';
    this.tabCounterId = 'counterUpdates';
    this.tabExcelFlightsId = 'flights';
    this.tabUsageId = 'usageModel';
    this.tabImportConfigurationId = 'importConfiguration';
    this.tabImportXmlFlightId = 'importFlight';
    this.tabGlobalImportId = 'globalImport';
    this.tabExportConfigurationId = 'exportConfiguration';
    this.tabExportXmlFlightId = 'exportFlight';
    this.tabGlobalExportId = 'globalExport';
    this.tabExportReportId = 'exportReports';

    this.showSearchCriteria = false;
    this.getFamilyVariantOutputDTO = [];

    this.familyCode = '';
    this.structureType = '';
    this.variantCode = '';
    this.familyName = '';
    this.variantName = '';

    this.exportDataFrom = undefined;

    this.tabAssetSelectionId = 'assetSelection';
    this.tabExportReportId = 'exportReport';
    this.currentTabId = this.tabAssetSelectionId;

    this.propertyDataList = [];
    this.propertyTypeList = [];
    this.propertyFormatList = [
      { label: this.getTranslation('excel'), value: this.component.excel },
      { label: this.getTranslation('xml'), value: this.component.xml },
      { label: this.getTranslation('zip'), value: this.component.zip }
    ];

    this.propertyFamilyList = [];
    this.propertyVariantList = [];

    this.assetDataExportCheckbox = this.resetAssetExpChkBoxes();
    this.lockAssetCheckbox = false;
    this.exportEngineeringData = true;
    this.oldEquipCheckbox = false;
    this.simPropagationCheckbox = false;
    this.showSpinner = false;

    this.assetDataExport = {
      equipmentCriteria: {},
      familyVariantCodeSelected: true,
      codeSelected: true,
      pnSelected: true,
      snSelected: true,
      designationSelected: true,
      eisDateSelected: true,
      functionCodeSelected: true,
      functionSelected: true,
      lifeRestrictionSelected: true,
      operationalStatusSelected: true,
      registrationSelected: true,
      superiorAssetCodeSelected: true,
      operatorCodeSelected: true,
      ownerCodeSelected: true
    };

    this.importReportMessage = '';
    this.showImportReportMessage = false;

    this.showAssetsSelectionDialog = false;

    this.translateService.onLangChange.subscribe((_: LangChangeEvent) => {
      this.loadDropDownLists();
    });

    this.equipment = {
      bidoEquipmentDTO: {},
      type: ''
    };

    this.setTableCols();
    this.selectedReports = [];
    this.selectedExportReports = [];
    this.selectedAssetTask = [];

    this.superiorTable = [];

    this.isReportLoading = false;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.equipment = {
      bidoEquipmentDTO: {},
      type: ''
    };

    this.loadDropDownLists();
  }

  public getComponentName(): string {
    return 'FleetDataExchangeComponent';
  }

  // Load Dropdown with data at initial
  private loadDropDownLists(): void {
    this.fleetDataExchangeService.findTypeList().subscribe(
      (results) => {
        this.propertyTypeList = ListUtils.orEmpty(results).map((elt) => {
          // FIXME
          if (elt.value === 'Loading') {
            elt.label = this.translateService.instant('loading');
          } else if (elt.value === 'Export') {
            elt.label = this.translateService.instant('export');
          }

          return elt;
        });
        this.type = this.component.loading;
        this.initializePropertyDataList();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetTypeList'));
      }
    );
  }

  private loadFamilyVariantDropdowns(): void {
    const familyVariantInput: FindFamilyVariantInput = {
      useCase: BidoFunctionTypeConstants.UC_MCH_TASK,
      module: BidoFunctionTypeConstants.MODULE_FAMILY,
      familyCode: '',
      familyName: '',
      structureType: ''
    };

    this.fleetDataExchangeService.getBireFamilyVariant(familyVariantInput).subscribe(
      (results) => {
        const list = new Array<LabelValue<string>>();
        results.forEach((variantElement) => {
          list.push(variantElement.familyLabelValueDTO);
          this.getFamilyVariantOutputDTO = results;
        });
        this.propertyFamilyList = list;
        this.family = list[0].label;
        this.loadVariantsForSelectedFamily();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariantList'));
      }
    );
  }

  public getFamilyVariant(): string {
    this.getFamilyVariantComponents();

    return `${this.familyCode}-${this.variantCode}`;
  }

  private loadVariantsForSelectedFamily(): void {
    this.propertyVariantList = [];
    const list: LabelValue<string>[] = [];
    this.getFamilyVariantOutputDTO.forEach((result) => {
      if (result.familyLabelValueDTO.label === this.family) {
        result.variantLabelValueDTO.forEach((object) => {
          const element: LabelValue<string> = {
            label: `${object.variantCode}-${object.structureType}-${object.variantName}`,
            value: object.variantLabelValue.value
          };

          list.push(element);
        });
        this.propertyVariantList = list;
      }
    });
  }

  public familyAndVariantSelected(): string {
    this.getFamilyVariantComponents();

    return `${this.family}/${this.variantCode}-${this.variantName}/${this.structureType}`;
  }

  // Change event of Type and format
  public onTypeChange(event: LabelValue<string>): void {
    this.format = undefined;
    if (event.value === null) {
      this.data = undefined;
      this.resetScreen();
    } else if (event.value === this.component.loading) {
      this.propertyFormatList = [
        { label: this.getTranslation('excel'), value: this.component.excel },
        { label: this.getTranslation('xml'), value: this.component.xml },
        { label: this.getTranslation('zip'), value: this.component.zip }
      ];
      this.initializePropertyDataList();
      this.data = undefined;
    } else if (event.value === this.component.export) {
      this.propertyFormatList = [
        { label: this.getTranslation('excel'), value: this.component.excel },
        { label: this.getTranslation('xml'), value: this.component.xml },
        { label: this.getTranslation('zip'), value: this.component.zip }
      ];
      this.format = this.component.excel;

      // Pre-select 'Asset'
      this.propertyDataList = [{ label: this.getTranslation('equipmentText'), value: this.component.asset }];
      this.data = this.component.asset;

      this.onDataChangeInit();
    }
    if (this.data !== this.component.asset) {
      this.showSearchCriteria = false;
    }
    this.clearSearchProperties();
    this.selectImportOrExportComponents();
    this.reports = [];
    this.fileName = '';
    this.selectedReports = [];
    this.resetScreen();
  }

  public onFormatChange(): void {
    this.data = undefined;
    if (this.format === null) {
      this.propertyDataList = [];
    }
    this.showSearchCriteria = false;
    this.selectImportOrExportComponents();
    this.resetScreen();
    if (!!this.format) {
      if (this.type === this.component.loading) {
        if (this.format === this.component.excel) {
          this.initializePropertyDataList();
        } else if (this.format === this.component.xml) {
          this.propertyDataList = [{ label: this.getTranslation('configEvents'), value: this.component.configEvents }];
          this.data = this.component.configEvents;
          this.onDataChange();
        } else if (this.format === this.component.zip) {
          this.resetScreen();
          this.propertyDataList = [{ label: this.getTranslation('globalImport'), value: this.component.globalImport }];
          this.data = this.component.globalImport;
          this.showSearchCriteria = this.validSearchCombination() ? this.checkSearchCriteria() : false;
          this.alterImportTableCols();
          this.loadReportList();

          this.currentTabsId = this.tabGlobalImportId;
        } else {
          this.propertyDataList = [];
        }
      } else if (this.type === this.component.export) {
        if (this.format === this.component.excel) {
          this.propertyDataList = [{ label: this.getTranslation('equipmentText'), value: this.component.asset }];

          // Pre-select 'Asset'
          this.data = this.component.asset;
          this.onDataChangeInit();
        } else if (this.format === this.component.xml) {
          this.propertyDataList = [{ label: this.getTranslation('configEvents'), value: this.component.configEvents }];
          this.data = this.component.configEvents;
          this.onDataChange();
        } else if (this.format === this.component.zip) {
          this.propertyDataList = [{ label: this.getTranslation('globalExport'), value: this.component.globalExport }];
          this.data = this.component.globalExport;
          this.onDataChange();
        }
      }
    }
  }

  private initializePropertyDataList(): void {
    this.format = this.component.excel;
    this.propertyDataList = [
      { label: this.getTranslation('fleet'), value: this.component.fleet },
      { label: this.getTranslation('counterUpdates'), value: this.component.counterUpdates },
      { label: this.getTranslation('usageModel'), value: this.component.usageModel }
    ];
  }

  public validFamilyVariantCombination(): boolean {
    if (!!this.family && !!this.variant) {
      return true;
    } else {
      return false;
    }
  }

  public validSearchCombination(): boolean {
    if (!!this.type && !!this.format && !!this.data) {
      return true;
    } else {
      return false;
    }
  }

  public selectImportOrExportComponents(): void {
    if (this.validSearchCombination()) {
      if (this.type === this.component.loading) {
        this.showImportComponents = true;
        this.showExportComponents = false;
      } else if (this.type === this.component.export) {
        this.showExportComponents = true;
        this.showImportComponents = false;
      } else {
        this.showImportComponents = false;
        this.showExportComponents = false;
      }
    }
  }

  public showImportReports(): boolean {
    let returnValue = false;
    if (this.type === this.component.loading) {
      if (this.format === this.component.excel) {
        switch (this.data) {
          case this.component.fleet:
            if (!!this.family && !!this.variant) {
              returnValue = true;
            }
            break;
          case this.component.counterUpdates:
            returnValue = true;
            break;
          case this.component.flights:
            returnValue = true;
            break;
          case this.component.usageModel:
            returnValue = true;
            break;
          default:
            returnValue = false;
            break;
        }
      } else if (this.format === this.component.xml) {
        switch (this.data) {
          case this.component.configEvents:
            returnValue = true;
            break;
          case this.component.flights:
            returnValue = true;
            break;
          default:
            returnValue = false;
            break;
        }
      } else if (this.format === this.component.zip) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  public showExportReports(): boolean {
    let returnValue = false;
    if (this.type === this.component.export) {
      if (this.format === this.component.excel) {
        returnValue = false;
      } else if (this.format === this.component.xml) {
        switch (this.data) {
          case this.component.configEvents:
            returnValue = true;
            break;
          case this.component.flights:
            returnValue = true;
            break;
          default:
            return false;
        }
      } else if (this.format === this.component.zip && this.data === this.component.globalExport) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  public showTabs(): boolean {
    let returnValue = false;
    if (this.data === this.component.fleet || this.data === this.component.asset) {
      if (!!this.variant && this.variant !== '') {
        if (this.showImportReports() || this.showExportReports()) {
          returnValue = true;
        }
      }
    } else {
      if (this.showImportReports() || this.showExportReports()) {
        return true;
      }
    }

    return returnValue;
  }

  public loadTemplate(): string {
    let templateName = '';
    if (this.format === this.component.excel) {
      switch (this.data) {
        case this.component.fleet:
          {
            templateName = 'TEMPLATE_FLEET_DATA.xls';
          }
          break;
        case this.component.counterUpdates:
          {
            templateName = 'TEMPLATE_COUNTER.xls';
          }
          break;
        case this.component.flights:
          {
            templateName = 'Template_FLIGHTS_IMPORT.xls';
          }
          break;
        case this.component.usageModel:
          {
            templateName = 'TEMPLATE_USAGE_MODEL.xls';
          }
          break;
        default:
          break;
      }
    } else if (this.format === this.component.xml) {
      switch (this.data) {
        case this.component.configEvents:
          {
            templateName = 'CONF_EVENT.xsd';
          }
          break;
        case this.component.flights:
          {
            templateName = 'Template_FLIGHTS_IMPORT.xsd';
          }
          break;
        default:
          break;
      }
    }

    return templateName;
  }

  public openTemplate(templateName: string): void {
    if (!!this.type && !!this.data && !!this.format) {
      const getTemplateInput: FindDataListBySearchCriteriaInput = {
        type: this.type,
        data: this.data,
        format: this.format
      };

      this.fleetDataExchangeService.getTemplate(getTemplateInput).subscribe((result) => {
        this.downLoadFiles(result, templateName);
      });
    } else {
      super.throwUnboundLocalError('openTemplate', 'this.type && this.data && this.format');
    }
  }

  public downLoadFiles(docFile: Uint8Array, docName: string): void {
    FileUtils.downloadFile(docFile, docName);
  }

  private resetScreen(): void {
    this.clearSearchProperties();
    this.getFamilyVariantComponents();
    this.file = {};
    this.fileName = '';
    this.resetCheckboxes();
    this.superiorTable = [];
    this.reports = [];
    this.exportDataFrom = undefined;
    this.assetDataExport.equipmentCriteria = {};
  }

  private resetCheckboxes(): void {
    this.oldEquipCheckbox = false;
    this.simPropagationCheckbox = false;
    this.lockAssetCheckbox = false;
    this.exportEngineeringData = true;
    this.assetDataExport.familyVariantCodeSelected = true;
    this.assetDataExport.codeSelected = true;
    this.assetDataExport.pnSelected = true;
    this.assetDataExport.snSelected = true;
    this.assetDataExport.designationSelected = true;
    this.assetDataExport.eisDateSelected = true;
    this.assetDataExport.functionCodeSelected = true;
    this.assetDataExport.functionSelected = true;
    this.assetDataExport.lifeRestrictionSelected = true;
    this.assetDataExport.operationalStatusSelected = true;
    this.assetDataExport.registrationSelected = true;
    this.assetDataExport.superiorAssetCodeSelected = true;
    this.assetDataExport.operatorCodeSelected = true;
    this.assetDataExport.ownerCodeSelected = true;
  }

  private onDataChangeInit(): void {
    this.resetScreen();
    if (this.data === this.component.fleet || this.data === this.component.asset) {
      this.loadFamilyVariantDropdowns();
    }
    this.showSearchCriteria = this.validSearchCombination() ? this.checkSearchCriteria() : false;
    this.alterImportTableCols();

    this.loadReportList();
  }

  // Event to show search panel
  public onDataChange(): void {
    this.onDataChangeInit();

    if (this.type === this.component.loading) {
      if (this.format === this.component.excel) {
        switch (this.data) {
          case this.component.fleet:
            {
              if (this.validFamilyVariantCombination()) {
                this.currentTabsId = this.tabFleetId;
              }
            }
            break;
          case this.component.counterUpdates:
            this.currentTabsId = this.tabCounterId;
            break;
          case this.component.flights:
            this.currentTabsId = this.tabExcelFlightsId;
            break;
          case this.component.usageModel:
            this.currentTabsId = this.tabUsageId;
            break;
          default:
            break;
        }
      } else if (this.format === this.component.xml) {
        switch (this.data) {
          case this.component.configEvents:
            this.currentTabsId = this.tabImportConfigurationId;
            break;
          case this.component.flights:
            this.currentTabsId = this.tabImportXmlFlightId;
            break;
          default:
            break;
        }
      } else if (this.format === this.component.zip) {
        this.data = this.component.globalImport;
        this.currentTabsId = this.tabGlobalImportId;
      }
    } else if (this.type === this.component.export) {
      if (this.format === this.component.excel) {
        if (this.data === this.component.asset) {
          if (!!this.family && !!this.variant) {
            // show form for asset data export
          }
        }
      } else {
        switch (this.data) {
          case this.component.configEvents:
            this.currentTabsId = this.tabExportConfigurationId;
            break;
          case this.component.flights:
            this.currentTabsId = this.tabExportXmlFlightId;
            break;
          case this.component.globalExport:
            this.currentTabsId = this.tabGlobalExportId;
            break;
          default:
            break;
        }
      }
    }
  }

  private checkSearchCriteria(): boolean {
    let returnValue = false;
    if (this.type === this.component.loading) {
      if (this.format === this.component.excel) {
        if (this.data === this.component.fleet) {
          this.showImportPanel = false;

          returnValue = true;
        } else {
          this.showImportPanel = true;

          returnValue = false;
        }
      } else if (this.format === this.component.xml || this.format === this.component.zip) {
        this.showImportPanel = true;

        returnValue = false;
      }
    } else {
      this.showImportPanel = false;
      if (this.format === this.component.xml) {
        returnValue = false;
      } else if (this.format === this.component.excel) {
        if (this.data === this.component.asset) {
          returnValue = true;
        }
      } else {
        returnValue = false;
      }
    }

    return returnValue;
  }

  public showReportTables(): boolean {
    let returnValue = false;
    if (!(this.currentTabsId === this.tabImportReportId) && !(this.currentTabsId === this.tabExportReportId)) {
      returnValue = true;
    }

    return returnValue;
  }

  public showAssetPanel(): boolean {
    let returnValue = false;
    if (this.data === this.component.asset) {
      if (!!this.family && !!this.variant && this.variant !== '') {
        returnValue = true;
      }
    }

    return returnValue;
  }

  // Clearing search parmeters
  private clearSearchProperties() {
    this.family = undefined;
    this.variant = undefined;
    this.getFamilyVariantComponents();
  }

  // Change event of family dropdown
  public changeFamilyType() {
    this.variant = undefined;
    if (!this.family) {
      this.showImportPanel = false;
    } else {
      this.loadVariantsForSelectedFamily();
    }
  }

  // Change event of variant dropdown
  public changedVariantType() {
    if (this.variant !== '' && !!this.variant) {
      this.familyAndVariantSelected();
      this.showImportPanel = true;

      if (this.type === this.component.loading) {
        this.currentTabsId = this.tabFleetId;
      } else {
        if (this.data === this.component.asset) {
          this.showAssetPanel();
        }
      }
      this.loadReportList();
    } else {
      this.showImportPanel = false;
      this.showAssetPanel();
    }
  }

  // Modifying table columns depending on search criteria
  private alterImportTableCols() {
    this.reports = [];
    if (this.type === this.component.loading) {
      if (this.showSearchCriteria) {
        this.reportTableCols = [
          { field: 'familyVariantCode', alignment: 'center' },
          { field: 'reportCode', alignment: 'center' },
          { field: 'reportName', alignment: 'center', width: '25rem' },
          { field: 'statusUser', alignment: 'center' },
          { field: 'statusDate', alignment: 'center' }
        ];
      } else {
        this.reportTableCols = [
          { field: 'reportCode', alignment: 'center' },
          { field: 'reportName', alignment: 'center', width: '25rem' },
          { field: 'statusUser', alignment: 'center' },
          { field: 'statusDate', alignment: 'center' }
        ];
      }
    }
  }

  private getFamilyVariantComponents(): void {
    if (this.variant !== '' && !!this.variant) {
      this.propertyVariantList.forEach((variant) => {
        if (variant.value === this.variant) {
          this.getFamilyVariantOutputDTO.forEach((familyObject) => {
            if (familyObject.familyLabelValueDTO.label === this.family) {
              familyObject.variantLabelValueDTO.forEach((variantObject) => {
                if (variantObject.variantLabelValue.label === variant.value) {
                  this.familyCode = variantObject.familyCode;
                  this.structureType = variantObject.structureType;
                  this.variantCode = variantObject.variantCode;
                  this.familyName = variantObject.familyName;
                  this.variantName = variantObject.variantName;
                }
              });
            }
          });
        }
      });
    } else {
      this.familyCode = undefined;
      this.structureType = undefined;
      this.variantCode = undefined;
      this.familyName = undefined;
      this.variantName = undefined;
    }
  }

  // Event to delete report entry
  public deleteReports() {
    if (this.selectedReports !== []) {
      const partialMessageKey =
        this.selectedReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();

      this.selectedReports.forEach((report) => {
        if (report && report.reportId) {
          const reportId: BireReportDTOId = {
            reportId: report.reportId
          };
          reports.push(reportId);
        }
      });

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.fleetDataExchangeService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);

              this.selectedReports = [];
              this.loadReportList();
            },
            () => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('errorOnDeleteReports')
                  : this.getTranslateKey('errorOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);
            }
          );
        }
      });
    }
  }

  public deleteExportReports() {
    if (this.selectedExportReports !== []) {
      const partialMessageKey =
        this.selectedExportReports.length > 1 ? 'confirmDeleteSelectedReports' : 'confirmDeleteSelectedReport';

      const reports = new Array<BireReportDTOId>();

      this.selectedExportReports.forEach((report) => {
        if (report && report.reportId) {
          const reportId: BireReportDTOId = {
            reportId: report.reportId
          };
          reports.push(reportId);
        }
      });

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          this.fleetDataExchangeService.deleteReportEntry(reports).subscribe(
            (results) => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('successOnDeleteReports')
                  : this.getTranslateKey('successOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);

              this.selectedExportReports = [];
              this.loadReportList();
            },
            () => {
              const messageKey =
                partialMessageKey === 'confirmDeleteSelectedReports'
                  ? this.getTranslateKey('errorOnDeleteReports')
                  : this.getTranslateKey('errorOnDeleteReport');

              this.messageService.showSuccessMessage(messageKey);
            }
          );
        }
      });
    }
  }

  public deleteAssets() {
    if (this.selectedAssetTask !== []) {
      const partialMessageKey = 'global.deleteConfirmationMsg';

      this.confirmationService.confirmDelete({
        messageKey: partialMessageKey,
        accept: () => {
          this.superiorTable = this.superiorTable.filter((asset) => {
            return !this.selectedAssetTask.includes(asset);
          });
          this.selectedAssetTask = [];
        }
      });
    }
  }

  public openReportDetail(object: BireReportDTO): void {
    if (!!object && !!object.reportId) {
      const bireReportDTOId: BireReportDTOId = {
        reportId: object.reportId
      };
      this.fleetDataExchangeService.openImportReportContent(bireReportDTOId).subscribe((result) => {
        if (!!object && !!object.reportName) {
          if (
            object.reportName.includes(`.${FileExtensions.txt}`) ||
            object.reportName.includes(`.${FileExtensions.zip}`)
          ) {
            this.downLoadFiles(result, object.reportName);
          } else if (this.type === this.component.loading) {
            this.downLoadFiles(result, `${object.reportName}.${FileExtensions.txt}`);
          } else if (this.type === this.component.export) {
            this.downLoadFiles(result, `${object.reportName}.${FileExtensions.zip}`);
          }
        } else {
          super.throwUnboundLocalError('openReportDetail', 'object.reportName');
        }
      });
    } else {
      super.throwUnboundLocalError('openReportDetail', 'object.reportId');
    }
  }

  public enableImport(): boolean {
    if (!!this.format && !!this.data) {
      return false;
    } else {
      return true;
    }
  }

  public showDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName);
  }

  // function is called with parameter 1 if simulate button is clicked, else called with 0
  public import(simulate: boolean): void {
    if (this.fileName !== '') {
      const partialMessageKey = this.getTranslateKey('importData');
      this.confirmationService.confirm({
        interpolateParams: { 'importData.fileName': this.fileName },
        contextKeys: [this.getTranslateKey('importData.line1')],
        messageKey: partialMessageKey,
        delayCallback: true,
        accept: () => {
          // Importing Excel file
          this.showSpinner = true;
          const isExcel =
            this.showDocExtension(this.file) === FileExtensions.xlsx ||
            this.showDocExtension(this.file) === FileExtensions.xls;
          if (this.format === this.component.excel && isExcel) {
            const excelInput: SaveExcelDataInput = {
              fileName: this.fileName,
              excelSource: this.file.docFile,
              removingChoice: false,
              familyCodeSelected: undefined,
              variantCodeSelected: undefined,
              isSimulated: simulate,
              data: this.data
            };

            switch (this.data) {
              case this.component.fleet:
                {
                  if (this.validFamilyVariantCombination()) {
                    this.getFamilyVariantComponents();
                    excelInput.familyCodeSelected = this.familyCode;
                    excelInput.variantCodeSelected = this.variantCode;
                    excelInput.removingChoice = this.oldEquipCheckbox;
                  }
                }
                break;
              case this.component.counterUpdates:
                excelInput.isSimulated = this.simPropagationCheckbox;
                break;
              case this.component.flights:
              case this.component.usageModel:
              default:
                break;
            }

            this.fleetDataExchangeService.saveExcelFleetDataExchange(excelInput).subscribe(
              (result) => {
                this.fileName = '';
                const importReport = `${result}\n${this.getTranslation('importReportError')}`;
                this.importReportMessage = importReport;
                this.showImportReportMessage = true;
                this.loadReportList();
                this.showSpinner = false;
              },
              () => {
                if (simulate) {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnSimulate'));
                  this.showSpinner = false;
                } else {
                  this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
                  this.showSpinner = false;
                }
              }
            );
          } else if (this.format === this.component.excel && !isExcel) {
            this.fileName = '';
            this.messageService.showErrorMessage(this.getTranslateKey('notExcel'));
            this.showSpinner = false;
          }

          // Import Xml File
          if (this.format === this.component.xml || this.format === this.component.zip) {
            if (!!this.file && !!this.fileName && !!this.data && !!this.file.docFile) {
              const xmlInput: SaveXmlDataInput = {
                fileName: this.fileName,
                xmlSource: this.file.docFile,
                simulated: simulate,
                data: this.data
              };

              const zipInput: SaveZipDataInput = {
                fileName: this.fileName,
                zipSource: this.file.docFile,
                isSimulated: simulate
              };

              switch (this.data) {
                case this.component.configEvents:
                  if (this.showDocExtension(this.file) === this.component.xml.toLowerCase()) {
                    xmlInput.simulated = simulate ? true : false;
                    this.importXmlData(xmlInput);
                  } else {
                    this.messageService.showErrorMessage(this.getTranslateKey('notXml'));
                    this.showSpinner = false;
                  }
                  break;
                case this.component.flights:
                  if (this.showDocExtension(this.file) === this.component.xml.toLowerCase()) {
                    this.importXmlData(xmlInput);
                  } else {
                    this.messageService.showErrorMessage(this.getTranslateKey('notXml'));
                    this.showSpinner = false;
                  }
                  break;
                case this.component.globalImport:
                  if (this.showDocExtension(this.file) === this.component.zip.toLowerCase()) {
                    this.importZipData(zipInput);
                  } else {
                    this.messageService.showErrorMessage(this.getTranslateKey('notZip'));
                    this.showSpinner = false;
                  }
                  break;
                default:
                  {
                    this.showSpinner = false;
                  }
                  break;
              }
            } else {
              super.throwUnboundLocalError('import', 'this.fileName && this.file && this.data && this.file.docFile');
              this.showSpinner = false;
            }
          }
        }
      });
    }
  }

  public importXmlData(xmlInput: SaveXmlDataInput): void {
    this.fleetDataExchangeService.saveXmlFleetDataExchange(xmlInput).subscribe(
      (result) => {
        this.fileName = '';
        this.importReportMessage = result;
        this.showImportReportMessage = true;
        this.loadReportList();
        this.showSpinner = false;
        this.showSpinner = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
      }
    );
  }

  public importZipData(zipInput: SaveZipDataInput): void {
    this.fleetDataExchangeService.saveZipFleetDataExchange(zipInput).subscribe(
      (result) => {
        this.fileName = '';
        this.loadReportList();
        this.showSpinner = false;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnImport'));
      }
    );
  }

  public export(): void {
    this.showSpinner = true;
    const excelInput: ExportAssetDataInput = { ...this.assetDataExport };

    const xmlInput: ExportFleetDataInput = {
      equipmentCode: [],
      date: new Date(),
      lockAsset: false
    };

    this.superiorTable.forEach((row) => {
      xmlInput.equipmentCode.push(row.equipmentCode);
    });

    if (this.format === this.component.excel) {
      if (this.data === this.component.asset) {
        this.getFamilyVariantComponents();

        if (!!excelInput && !!excelInput.equipmentCriteria) {
          excelInput.equipmentCriteria.familyVariantCode = `${this.familyCode}-${this.variantCode}`;

          this.fleetDataExchangeService
            .exportAssetData(excelInput)
            .pipe(
              finalize(() => {
                this.showSpinner = false;
              })
            )
            .subscribe((bytes) => {
              this.fleetDataExchangeService.getServerDate().subscribe((result) => {
                const templateName = `${this.translateService.instant(
                  this.getTranslateKey('assetDataExportFileNamePrefix')
                )}_${this.familyName}_${this.variantCode}_${this.datepipe.transform(
                  result,
                  this.component.dateFormat
                )}h${this.datepipe.transform(result, this.component.monthFormat)}.${FileExtensions.xls}`;

                this.downLoadFiles(bytes, templateName);
              });
            });
        } else {
          this.showSpinner = false;
          super.throwUnboundLocalError('export', 'excelInput');
        }
      }
    } else if (this.format === this.component.xml || this.format === this.component.zip) {
      if (this.superiorTable.length !== 0) {
        xmlInput.date = this.exportDataFrom;
        switch (this.data) {
          case this.component.configEvents:
            {
              xmlInput.lockAsset = this.lockAssetCheckbox;

              this.fleetDataExchangeService
                .exportConfEventData(xmlInput)
                .pipe(
                  finalize(() => {
                    this.showSpinner = false;
                  })
                )
                .subscribe((bytes) => {
                  this.fleetDataExchangeService.getServerDate().subscribe((result) => {
                    const templateName = `${this.translateService.instant(
                      this.getTranslateKey('eventDataExportFileNamePrefix')
                    )}_${this.datepipe.transform(result, this.component.dateFormat)}h${this.datepipe.transform(
                      result,
                      this.component.monthFormat
                    )}.${FileExtensions.zip}`;

                    this.downLoadFiles(bytes, templateName);
                    this.loadReportList();
                  });
                });
            }
            break;
          case this.component.flights:
            {
              this.fleetDataExchangeService
                .exportFlightsData(xmlInput)
                .pipe(
                  finalize(() => {
                    this.showSpinner = false;
                  })
                )
                .subscribe((bytes) => {
                  this.fleetDataExchangeService.getServerDate().subscribe((result) => {
                    const templateName = `${this.translateService.instant(
                      this.getTranslateKey('flightsDataExportFileNamePrefix')
                    )}_${this.datepipe.transform(result, this.component.dateFormat)}h${this.datepipe.transform(
                      result,
                      this.component.monthFormat
                    )}.${FileExtensions.zip}`;

                    this.downLoadFiles(bytes, templateName);
                    this.loadReportList();
                  });
                });
            }
            break;
          case this.component.globalExport:
            {
              xmlInput.lockAsset = this.lockAssetCheckbox;
              xmlInput.exportEngineeringData = this.exportEngineeringData;

              this.fleetDataExchangeService
                .exportGlobalData(xmlInput)
                .pipe(
                  finalize(() => {
                    this.showSpinner = false;
                  })
                )
                .subscribe((bytes) => {
                  this.fleetDataExchangeService.getServerDate().subscribe((result) => {
                    const templateName = `${this.translateService.instant(
                      this.getTranslateKey('globalExportFileNamePrefix')
                    )}_${this.datepipe.transform(result, this.component.dateFormat)}h${this.datepipe.transform(
                      result,
                      this.component.monthFormat
                    )}.${FileExtensions.zip}`;
                    this.downLoadFiles(bytes, templateName);
                    this.loadReportList();
                  });
                });
            }
            break;
          default: {
            this.showSpinner = false;
            break;
          }
        }
      } else {
        this.showSpinner = false;
        this.messageService.showErrorMessage(this.getTranslateKey('addAssets'));
      }
    }
  }

  private loadReportList(): void {
    this.getFamilyVariantComponents();

    this.reports = [];
    if (!!this.data && !!this.format && !!this.type) {
      const input: GetRefreshedArchivedReportDataInput = {
        data: this.data,
        format: this.format,
        type: this.type,
        reportCode: ''
      };
      if (this.type === this.component.loading) {
        // 'Loading'
        if (this.format === this.component.excel) {
          // 'Excel'
          switch (this.data) {
            case this.component.fleet:
              {
                if (
                  !!this.familyCode &&
                  !!this.variantCode &&
                  !!this.structureType &&
                  this.validFamilyVariantCombination()
                ) {
                  input.bireVariantVersionId = {
                    familyCode: this.familyCode,
                    variantCode: this.variantCode,
                    structureType: this.structureType
                  };
                  input.reportCode = 'FLEET_IMPORT_REPORT';
                  this.hitFetchAPI(input);
                }
              }
              break;
            case this.component.counterUpdates:
              {
                input.reportCode = 'COUNTER_IMPORT_REPORT';
                this.hitFetchAPI(input);
              }
              break;
            case this.component.flights:
              {
                input.reportCode = 'XLS_MISSION_IMPORT_REPORT_CODE';
                this.hitFetchAPI(input);
              }
              break;
            case this.component.usageModel:
              {
                input.reportCode = 'USAGE_IMPORT_REPORT';
                this.hitFetchAPI(input);
              }
              break;
            default:
              break;
          }
        } else if (this.format === this.component.xml) {
          switch (this.data) {
            case this.component.configEvents:
              {
                input.reportCode = 'XML_CONF_EVENT_IMPORT_REPORT';
                this.hitFetchAPI(input);
              }
              break;
            case this.component.flights:
              {
                input.reportCode = 'XML_MISSION_IMPORT_REPORT_CODE';
                this.hitFetchAPI(input);
              }
              break;
            default:
              break;
          }
        } else if (this.format === this.component.zip) {
          input.reportCode = 'ZIP_GLOBAL_IMPORT_REPORT';
          this.hitFetchAPI(input);
        }
      } else if (this.type === this.component.export) {
        if (this.format === this.component.xml) {
          switch (this.data) {
            case this.component.configEvents:
              {
                input.reportCode = 'ZIP_CONF_EVENT_EXPORT_REPORT';
                this.hitFetchAPI(input);
              }
              break;
            case this.component.flights:
              {
                input.reportCode = 'ZIP_MISSION_EXPORT_REPORT';
                this.hitFetchAPI(input);
              }
              break;
            default:
              break;
          }
        } else if (this.format === this.component.zip && this.data === this.component.globalExport) {
          input.reportCode = 'ZIP_GLOBAL_EXPORT_REPORT';
          this.hitFetchAPI(input);
        }
      }
    }
  }

  private hitFetchAPI(input: GetRefreshedArchivedReportDataInput): void {
    // this.clearSearchProperties();
    this.isReportLoading = true;
    this.fleetDataExchangeService.fetchFleetDataExchangeReport(input).subscribe((result) => {
      this.reports = result;
      this.isReportLoading = false;
    });
  }

  // For Doc Import
  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    // if (!!event.files) {
    const file: File = event.files[0];
    {
      // if (!!this.file && !!this.file.docName) {
      FileUtils.getFileContentAsBase64(file, (fileContent) => {
        if (fileContent) {
          this.file = {
            docFile: fileContent,
            docName: file.name,
            docPublicationDate: new Date()
          };
          this.fileName = this.file.docName;
        }
      });
    }

    fileUploader.clear();
    // }
  }

  // Method to set table columns
  private setTableCols(): void {
    this.assetSelectionTableCols = [
      { field: 'equipmentText', width: '150px' },
      { field: 'equipmentFamilyVariantCode', width: '70px' },
      { field: 'equipmentRegistration', width: '70px' },
      { field: 'equipmentPn', width: '70px' },
      { field: 'equipmentDesignation', width: '80px' },
      { field: 'equipmentFunction', width: '60px' },
      { field: 'equipmentSn', width: '70px' },
      { field: 'equipmentSupAsset', width: '80px' },
      { field: 'equipmentOwner', width: '60px' },
      { field: 'equipmentOperator', width: '60px' },
      { field: 'equipmentLocation', width: '60px' }, // to be added in backend
      { field: 'equipmentOperationalStatus', width: '100px' },
      { field: 'equipmentCode', width: '100px' }
    ];

    this.exportReportTableCols = [
      { field: 'reportCode', alignment: 'center' },
      { field: 'reportName', alignment: 'center' },
      { field: 'statusUser', alignment: 'center' },
      { field: 'statusDate', alignment: 'center' }
    ];
  }

  // Tab Navigation
  public openAssetSelectionTab() {
    this.currentTabId = this.tabAssetSelectionId;
  }
  public openExportReportTab() {
    this.currentTabId = this.tabExportReportId;
  }

  public openAdvanceSearchDialog() {
    this.showQuickSearchEquipmentDialog = true;
  }

  public setSelectedAsset(event: BidoEquipmentOVSOutputDTO): void {
    if (!!this.assetDataExport && !!this.assetDataExport.equipmentCriteria) {
      this.assetDataExport.equipmentCriteria.equipmentCode = event.equipmentCode;
      this.assetDataExport.equipmentCriteria.pnCode = event.pnCode;
      this.assetDataExport.equipmentCriteria.sn = event.sn;
      this.assetDataExport.equipmentCriteria.equipmentDesignation = event.equipmentDesignation;
      this.assetDataExport.equipmentCriteria.familyVariantCode = event.familyVariantCode;
    } else {
      super.throwUnboundLocalError(
        'setSelectedAsset',
        'this.assetDataExport && this.assetDataExport.equipmentCriteria'
      );
    }
  }

  public setSelectedAssetsFromSelectionDilog(event: FindAssetListConfigurationEventDTO[]) {
    event.forEach((e) => {
      const inSuperiorTable = this.superiorTable.filter((asset) => asset.equipmentCode === e.equipmentCode);
      if (inSuperiorTable.length === 0) {
        this.superiorTable.push(e);
      }
    });
  }

  // Resetting chkboxes
  private resetAssetExpChkBoxes() {
    this.assetCodeTxt = '';
    this.pnCodeTxt = '';
    this.snCodeTxt = '';
    // this.nameTxt = ;     // TODO How to make name
    this.designationTxt = '';

    return [
      'Family Variant',
      'pn',
      'sn',
      'Asset Code',
      'Owner Code',
      'Operator Code',
      'Registration',
      'Designation',
      'Function',
      'Operational Status',
      'EIS Date',
      'Superior asset code',
      'Function code',
      'Life restriction'
    ];
  }

  private getTranslation(label: string): string {
    return this.translateService.instant(this.getTranslateKey(label)) as string;
  }

  /**********
   * Open Tabs
   **********/

  public openFleetTab(): void {
    this.currentTabsId = this.tabFleetId;
  }

  public openCounterTab(): void {
    this.currentTabsId = this.tabCounterId;
  }

  public openFlightsTab(): void {
    this.currentTabsId = this.tabExcelFlightsId;
  }

  public openUsageTab(): void {
    this.currentTabsId = this.tabUsageId;
  }

  public openImportConfigurationTab(): void {
    this.currentTabsId = this.tabImportConfigurationId;
  }

  public openImportFlightTab(): void {
    this.currentTabsId = this.tabImportXmlFlightId;
  }

  public openGlobalImportTab(): void {
    this.currentTabsId = this.tabGlobalImportId;
  }

  public openExportConfigurationTab(): void {
    this.currentTabsId = this.tabExportConfigurationId;
  }

  public openExportFlightTab(): void {
    this.currentTabsId = this.tabExportXmlFlightId;
  }

  public openGlobalExportTab(): void {
    this.currentTabsId = this.tabGlobalExportId;
  }

  public openImportReportsTab(): void {
    this.currentTabsId = this.tabImportReportId;
  }

  public openExportReportsTab(): void {
    this.currentTabsId = this.tabExportReportId;
  }

  /*************************
   * Asset(s) selection popup
   *************************/

  public openAssetsSelectionDialog(): void {
    this.showAssetsSelectionDialog = true;
  }
}
