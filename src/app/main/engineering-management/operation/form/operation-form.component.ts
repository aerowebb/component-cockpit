import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { UpdateHistoricApi } from '../../../../shared/api/update-historic.api';
import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { DialogTableData } from '../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { DynamicAttributesService } from '../../../../shared/components/dynamic-attributes/dynamic-attributes.service';
import { DynamicAttributes } from '../../../../shared/components/dynamic-attributes/types/dynamic-attributes.interface';
import { TableDataSource } from '../../../../shared/components/table/table-data-source';
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
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { UpdateHistoricService } from '../../../../shared/services/update-historic.service';
import { CalculateCostOfBireOperationInput } from '../../../../shared/types/api-input-types/task-management/calculate-cost-of-bire-operation-input.interface';
import { SaveBireOperationInput } from '../../../../shared/types/api-input-types/task-management/save-bire-operation-input.interface';
import { BidtWorkCenterDTO } from '../../../../shared/types/api-types/bidt-work-center-dto.interface';
import { BireAttributeDTO } from '../../../../shared/types/api-types/bire-attribute-dto.interface';
import { BireDocumentDTO } from '../../../../shared/types/api-types/bire-document-dto.interface';
import { BireOperationAttributeDTO } from '../../../../shared/types/api-types/bire-operation-attribute-dto.interface';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { BireOperationPnDTO } from '../../../../shared/types/api-types/bire-operation-pn-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { BireQualificationDTO } from '../../../../shared/types/api-types/bire-qualification-dto.interface';
import { BireRangeDTO } from '../../../../shared/types/api-types/bire-range-dto.interface';
import { BireTilDTO } from '../../../../shared/types/api-types/bire-til-dto.interface';
import { HBireOperationDTO } from '../../../../shared/types/api-types/h-bire-operation-dto.interface';
import { ObjectStatusDTO } from '../../../../shared/types/api-types/object-status-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { PopupEntry } from '../../../../shared/types/popup-entry.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { DTOUtils } from '../../../../shared/utils/dto-utils';
import { FileUtils } from '../../../../shared/utils/file-utils';
import { SettingsUtils } from '../../../../shared/utils/settings-utils';
import { ObjectStatusComponent } from '../../../object-status/object-status.component';
import { OverlayService } from '../../../overlay/overlay.service';
import { OperationPnElement } from '../types/operation-pn-element.interface';
import { OperationTabData } from '../types/operation-tab-data.interface';

import { OperationFormService } from './operation-form.service';

interface OperationComponentRow {
  pnCode: string;
  name: string;
  type: string;
  quantity: string;
  unit: string;
  componentType: string;
}

interface DocumentRow {
  docName?: string;
  docSource?: string;
  docExtension?: string;
  docSize?: string;
  docPublicationDate?: string;
  docDescription?: string;
  _obj?: BireDocumentDTO;
}

@Component({
  selector: 'aw-operation-form',
  templateUrl: './operation-form.component.html'
})
export class OperationFormComponent extends FormPageComponent<OperationTabData> implements OnInit {
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly ADD_INFORMATION_ANCHOR_ID: string = 'mainDataAnchor';
  public static readonly COMPONENTS_ANCHOR_ID: string = 'componentTableAnchor';
  public static readonly DOCUMENTS_ANCHOR_ID: string = 'documentTableAnchor';

  public readonly form: typeof OperationFormComponent;

  @Input()
  public componentData: OperationTabData;

  public currentTabId: string;

  public newOperation: BireOperationDTO;
  public operation: BireOperationDTO;
  public operations: BireOperationDTO[];
  public operationId: BireOperationDTOId;
  public selectedOperations: BireOperationDTO[];
  public rangeCodeTableData: DialogTableData<BireRangeDTO>;
  public displayRangeCodeDialog: boolean;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public subtitle: string;

  public pnTypes: LabelValue<string>[];
  public statusList: LabelValue<string>[];

  // Table of content

  @ViewChild(OperationFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationElRef: ElementRef;

  @ViewChild(OperationFormComponent.ADD_INFORMATION_ANCHOR_ID)
  public addInformationElRef: ElementRef;

  @ViewChild(OperationFormComponent.COMPONENTS_ANCHOR_ID)
  public componentsElRef: ElementRef;

  @ViewChild(OperationFormComponent.DOCUMENTS_ANCHOR_ID)
  public documentsElRef: ElementRef;
  public toc: PageTocEntry[];

  // Status Popup

  public showStatusUpdatesPopup: boolean;
  public tableStatusUpdatesData: DialogTableData<HBireOperationDTO>;
  public deleteApi: string;
  public updatesKeyMap: Map<string, Observable<LabelValue<string>[]>>;

  // Operation Fields Tab

  public readonly tabOperationFieldsId: string;
  public selectedOpeFields: BireOperationDTO[];
  public opeFieldsTable: BireOperationDTO[];
  public til: BireTilDTO | null;
  public technicalLevelsToDisplayList: LabelValue<number>[];
  public selectedTechnicalLevel: string;
  public qualificationToDisplay: string;
  public qualificationsToDisplayList: LabelValue<string>[];
  public workcentersToDisplayList: LabelValue<string>[];
  public qualif: BireQualificationDTO | undefined;
  public workcenter: BidtWorkCenterDTO | undefined;
  public qualifications: BireQualificationDTO[];
  public hasHourlyRateValue: boolean;
  public qualifAverageHourRate: string | undefined;
  public qualifRateCurrency: string | undefined;
  public cost: number | undefined;
  public isCostSettingEnabled: boolean;

  // Components Tab

  public readonly tabComponentsId: string;
  public component: BireOperationPnDTO;
  public components: BireOperationPnDTO[];
  public newComponent: BireOperationPnDTO;
  public componentsTableDataSource: TableDataSource<OperationPnElement>;
  public currentComponent: OperationPnElement;
  public currentComponentIndex: number | undefined;
  public isReadOnlyComponentDialog: boolean;
  public displayComponentDialog: boolean;
  public componentsFormTitle: string;
  public addedComponentsList: BireOperationPnDTO[];
  public removedComponentsList: BireOperationPnDTO[];
  public updatedComponentsList: BireOperationPnDTO[];
  public operationComponent: OperationPnElement | undefined;

  //  Documents

  public readonly tabDocumentsId: string;
  public documentsTableDataSource: TableDataSource<DocumentRow>;
  public currentDocument: DocumentRow | undefined;
  public currentDocumentIndex: number | undefined;
  public documentsAdded: DocumentRow[];
  public documentsRemoved: DocumentRow[];
  public isReadOnlyDocumentDialog: boolean;
  public displayDocumentDialog: boolean;
  public showAddDocumentDialog: boolean;

  // Attributes

  public tabAttributesId: string;
  public dynamicAttributes: DynamicAttributes[];
  public bireOperationAttributes: BireOperationAttributeDTO[];

  public opeAttributesTable: BireAttributeDTO[];
  public opeAttributesTableCols: TableColumn[];
  public filteredRowsNb: number;
  public delRow: number;
  public operationTableFilteredRowsNb: number;
  public displayDialogOpeFields: boolean;

  public uploadedFiles = {};

  public dataCompo: PopupEntry<BireOperationPnDTO>;
  public showSaveSpinner: boolean;

  public constructor(
    messageService: MessageService,
    tabService: TabService,
    loaderService: LoaderService,
    favoriteService: FavoriteService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    public inputValidationService: InputValidationService,
    private readonly confirmationService: ConfirmationService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly propertiesService: PropertiesService,
    private readonly updateHistoricApi: UpdateHistoricApi,
    private readonly dynamicAttributesService: DynamicAttributesService,
    public translateService: TranslateService,
    private readonly operationFormService: OperationFormService,
    private readonly dateService: DateService,
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

    this.form = OperationFormComponent;
    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.keyMap.set('pnType', this.operationFormService.getPnTypeMap());

    this.tabOperationFieldsId = 'operation-fields';

    this.tabComponentsId = 'components';
    this.initComponentsTableDataSource();
    this.initDocumentsTableDataSource();
    this.tabDocumentsId = 'documents';

    this.tabAttributesId = 'attributes';

    super.registerPageTocEntryObservable();

    this.init();

    this.loadPnTypes();
    this.initCostSettingDisplay();
    this.loadTechnicalLevelsList();
    this.loadQualificationsList();
    this.loadWorkCenterList();
    this.loadOperationStatus();
  }

  public getComponentName(): string {
    return 'OperationFormComponent';
  }

  private initComponentsTableDataSource(): void {
    this.componentsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'pnCode',
          translateKey: this.getTranslateKey('pnCode')
        },
        {
          field: 'name',
          translateKey: this.getTranslateKey('name')
        },
        {
          field: 'type',
          translateKey: this.getTranslateKey('type')
        },
        {
          field: 'quantity',
          translateKey: this.getTranslateKey('quantity')
        },
        {
          field: 'unit',
          translateKey: this.getTranslateKey('unit')
        }
      ],
      data: []
    });
  }

  private initDocumentsTableDataSource(): void {
    this.documentsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'docName',
          translateKey: this.getTranslateKey('docName')
        },
        {
          field: 'docSource',
          translateKey: this.getTranslateKey('docSource')
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
        }
      ],
      data: []
    });
  }
  private loadPnTypes(): void {
    this.operationFormService.getPnTypeMap().subscribe((results) => {
      this.pnTypes = results || [];
    });
  }

  private init(): void {
    this.currentTabId = this.tabOperationFieldsId;

    this.operation = {};
    this.operations = [];

    this.pnTypes = [];

    // Status popup

    this.showStatusUpdatesPopup = false;
    this.deleteApi = this.updateHistoricApi.removeBireOperationHistory;
    this.updatesKeyMap = new Map<string, Observable<LabelValue<string>[]>>();

    // Operation Fields Tab

    this.opeFieldsTable = [];
    this.selectedOpeFields = [];
    this.technicalLevelsToDisplayList = [];
    this.qualif = undefined;
    this.workcenter = undefined;
    this.qualificationsToDisplayList = [];
    this.workcentersToDisplayList = [];
    this.hasHourlyRateValue = false;
    this.qualifAverageHourRate = '';
    this.qualifRateCurrency = '';
    this.cost = undefined;

    // Components Tab

    this.components = [];
    this.addedComponentsList = [];
    this.removedComponentsList = [];
    this.updatedComponentsList = [];
    this.component = {};
    this.operationComponent = undefined;
    this.displayComponentDialog = false;
    this.currentComponent = {};
    this.currentComponentIndex = -1;
    this.isReadOnlyComponentDialog = true;

    // Documents Tab

    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.currentDocument = undefined;
    this.currentDocumentIndex = undefined;
    this.isReadOnlyDocumentDialog = true;
    this.displayDocumentDialog = false;
    this.showAddDocumentDialog = false;

    // Attributes Tab
    this.dynamicAttributes = [];

    this.selectedOperations = [];
    this.filteredRowsNb = 0;
    this.delRow = 0;
    this.operationTableFilteredRowsNb = 0;
    this.currentTabId = this.tabOperationFieldsId;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);

      const context = !!this.componentData.objectId
        ? `${this.serializationService.deserialize(this.componentData.objectId).opeCode}|${
            this.serializationService.deserialize(this.componentData.objectId).opeVersion
          }|${this.serializationService.deserialize(this.componentData.objectId).rangeCode}`
        : 'tab.createMode';

      this.subtitle = context;

      this.displayComponentContext(context, this.isCreateOpenMode);

      this.loadOperation();
      this.setTableOfContent();
    }
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
    const columns: TableColumn[] = [
      { field: 'timestamp', width: '200px', filterMode: TableColumnFilterMode.Input, isDate: true },
      { field: 'statusUser', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'action', width: '200px', filterMode: TableColumnFilterMode.Input },
      { field: 'statusState', width: '250px', filterMode: TableColumnFilterMode.Input },
      { field: 'opeSequenceNumber', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeDesignation', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeDescription', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeChapter', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeSection', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeSubject', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeSheet', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeMark', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeCost', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeDurationTime', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeWorkcenter', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeManHour', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'opeQualification', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input },
      { field: 'technicalLevel', alignment: 'left', width: '6.25rem', filterMode: TableColumnFilterMode.Input }
    ];
    this.updatesKeyMap.set('statusState', this.propertiesService.getValue('getFuncObjectStatusMap'));
    this.tableStatusUpdatesData = {
      componentId: 'OperationFormComponent.historicPopup',
      tableCols: columns,
      tableRows: this.updateHistoricService.findBireOperationHistoric(this.operationId),
      dataKey: undefined,
      selectionMode: TableSelectionMode.Multiple,
      globalFilter: false
    };
  }

  private setTableOfContent(): void {
    const mainInformationKey = this.getTranslateKey('mainData');
    const addInformationKey = this.getTranslateKey('addInformation');
    const componentsKey = this.getTranslateKey('components');
    const documentsKey = this.getTranslateKey('documents');
    this.translateService
      .get([mainInformationKey, addInformationKey, componentsKey, documentsKey])
      .subscribe((results: string[]) => {
        const mainInformationLabel = !!results ? results[mainInformationKey] : 'Main Information';
        const addInformationLabel = !!results ? results[addInformationKey] : 'Additional Information';
        const componentsLabel = !!results ? results[componentsKey] : 'Components';
        const documentsLabel = !!results ? results[documentsKey] : 'Documents';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationElRef,
            label: mainInformationLabel
          },
          {
            id: 'mainDataAnchor',
            anchor: this.addInformationElRef,
            label: addInformationLabel
          },
          {
            id: 'componentTableAnchor',
            anchor: this.componentsElRef,
            label: componentsLabel
          },
          {
            id: 'documentTableAnchor',
            anchor: this.documentsElRef,
            label: documentsLabel
          }
        ];
        super.selectPageTocEntry(OperationFormComponent.MAIN_INFORMATION_ANCHOR_ID);
      });
  }

  public updateObjectStatusFromStatusUpdatesHistory(event): void {
    const input: ObjectStatusDTO = {
      statusDate: event.statusDate,
      statusState: event.statusState,
      statusUser: event.statusUser
    };
    // tslint:disable-next-line:no-empty
    this.operationFormService.updateStaus(input).subscribe(() => {});
  }

  public edit() {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public loadOperation(): void {
    // Load dynamic attributes
    const observables: Observable<BireAttributeDTO[]>[] = [
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_ALL_KEY),
      this.getDynamicAttributesObservable(AWPropertiesConstants.MCH_ATTRIBUTE_CATEGORY_OPERATION_KEY)
    ];

    forkJoin(observables).subscribe((results: BireAttributeDTO[][]) => {
      if (results) {
        const flattenResults: BireAttributeDTO[] = results.reduce((acc, val) => acc.concat(val), []);
        this.dynamicAttributes = this.dynamicAttributesService.from(flattenResults);

        if (!!this.componentData.objectId && !this.isCreateOpenMode) {
          this.operationId = {
            opeCode: this.serializationService.deserialize(this.componentData.objectId).opeCode,
            opeVersion: this.serializationService.deserialize(this.componentData.objectId).opeVersion,
            rangeCode: this.serializationService.deserialize(this.componentData.objectId).rangeCode
          };

          this.operationFormService.findBireOperation(this.operationId).subscribe(
            (result) => {
              this.operation = result;
              if (this.operation && this.operation.opeCode && this.operation.opeVersion && this.operation.rangeCode) {
                this.loadComponents();
                this.loadDocuments(this.operationId);
                this.loadAttributes();

                this.setHasHourlyRateValue();
                if (this.operation.opeQualification) {
                  this.qualif = this.qualifications.find(
                    (qualification) => qualification.qualificationCode === this.operation.opeQualification
                  );
                  this.setQualifRateCurrencyLabelByValue();
                  if (!!this.qualif) {
                    this.qualifAverageHourRate = this.qualif.averageHourRate;
                  } else {
                    super.throwUnboundLocalError('loadOperation', 'this.qualif');
                  }
                }
              }
            },
            () => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetOperation'));
            }
          );
        } else {
          this.operation.statusState = AWPropertiesConstants.AIRM_OPERATION_STATUS_ONGOING;
        }
      }
    });
  }

  private loadOperationStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe(
      (results) => {
        this.statusList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetFamilyVariant'));
      }
    );
  }

  private getDynamicAttributesObservable(attributeCategory: string): Observable<BireAttributeDTO[]> {
    return this.operationFormService.findBireAttributesByCategory(attributeCategory);
  }

  public reloadOperation(): void {
    this.init();
    this.loadPnTypes();

    this.loadTechnicalLevelsList();
    this.loadQualificationsList();
    this.loadWorkCenterList();

    this.loadOperation();
  }

  public saveOperation(): void {
    if (
      this.operation.opeCode === null ||
      this.operation.opeCode === undefined ||
      this.operation.opeVersion === null ||
      this.operation.opeVersion === undefined ||
      this.operation.rangeCode === null ||
      this.operation.rangeCode === undefined
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      // Components
      let componentsUpdated = this.components.filter((component) => {
        return !this.addedComponentsList.some((addedComponents) => {
          return DTOUtils.equalsBireOperationPnDTO(component, addedComponents);
        });
      });
      this.addedComponentsList = this.addedComponentsList.map((component) => {
        return this.fillComponent(component, this.operation);
      });
      this.removedComponentsList = this.removedComponentsList.map((component) => {
        return this.fillComponent(component, this.operation);
      });
      componentsUpdated = componentsUpdated.map((component) => {
        return this.fillComponent(component, this.operation);
      });

      // Documents
      const documentsUpdated = this.documentsTableDataSource.dataSrc.filter((document) => {
        return !this.documentsAdded.some((documentAdded) => {
          return DTOUtils.equalsBireDocumentDTO(
            document._obj as BireDocumentDTO,
            documentAdded._obj as BireDocumentDTO
          );
        });
      });

      this.bireOperationAttributes = this.dynamicAttributesService.toBireOperationAttributeId(
        this.operation.opeCode,
        this.operation.rangeCode,
        this.operation.opeVersion,
        this.dynamicAttributes
      );

      const saveBireOperationInput: SaveBireOperationInput = {
        bireOperation: this.operation,
        bireOperationPnAddedList: this.addedComponentsList,
        bireOperationPnRemovedList: this.removedComponentsList,
        bireOperationPnUpdatedList: componentsUpdated,
        bireOperationAttributes: this.bireOperationAttributes
      };

      saveBireOperationInput.bireDocumentAddedList = [];
      saveBireOperationInput.bireDocumentRemovedList = [];
      saveBireOperationInput.bireDocumentUpdatedList = [];
      this.documentsAdded.forEach((addedDoc) => {
        if (!!saveBireOperationInput.bireDocumentAddedList && !!addedDoc._obj) {
          saveBireOperationInput.bireDocumentAddedList.push(addedDoc._obj);
        }
      });
      this.documentsRemoved.forEach((removedDoc) => {
        if (!!saveBireOperationInput.bireDocumentRemovedList && !!removedDoc._obj) {
          saveBireOperationInput.bireDocumentRemovedList.push(removedDoc._obj);
        }
      });
      documentsUpdated.forEach((updatedDoc) => {
        if (!!saveBireOperationInput.bireDocumentUpdatedList && !!updatedDoc._obj) {
          saveBireOperationInput.bireDocumentUpdatedList.push(updatedDoc._obj);
        }
      });

      // Operation Fields
      if (this.isCreateOpenMode) {
        this.createOperation(saveBireOperationInput);
      } else {
        this.updateOperation(saveBireOperationInput);
      }
    }
  }

  private createOperation(saveBireOperationInput: SaveBireOperationInput): void {
    if (!!this.componentData) {
      this.showSaveSpinner = true;
      this.operationFormService.createBireOperation(saveBireOperationInput).subscribe(
        () => {
          this.save();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateOperation'));
          this.showSaveSpinner = false;
        },
        (error) => {
          this.messageService.showErrorMessage(error.error.errorDesc);
          this.showSaveSpinner = false;
        }
      );
    } else {
      super.throwUnboundLocalError('createOperation', 'this.componentData');
    }
  }

  private updateOperation(saveBireOperationInput: SaveBireOperationInput): void {
    this.showSaveSpinner = true;
    this.operationFormService.updateBireOperation(saveBireOperationInput).subscribe(
      () => {
        this.save();
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateOperation'));
        this.showSaveSpinner = false;
      },
      (error) => {
        this.messageService.showErrorMessage(error.error.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  private save(): void {
    const context = `${this.operation.opeCode}|${this.operation.opeVersion}|${this.operation.rangeCode}`;
    this.subtitle = context;
    this.displayComponentContext(context, this.isCreateOpenMode);
    this.updateOpenMode(ComponentOpenMode.Write);
    this.componentData.openMode = 1;
    if (!!this.operation.opeCode && !!this.operation.opeVersion && !!this.operation.rangeCode) {
      const operationId: BireOperationDTOId = {
        opeCode: this.operation.opeCode,
        opeVersion: this.operation.opeVersion,
        rangeCode: this.operation.rangeCode
      };
      this.componentData.objectId = this.serializationService.serialize(operationId);
      this.init();

      this.loadPnTypes();
      this.loadTechnicalLevelsList();
      this.loadQualificationsList();
      this.loadWorkCenterList();

      this.loadOperation();
    }
  }

  public cancelOperation(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadOperation();
  }

  private fillComponent(component: BireOperationPnDTO, operation: BireOperationDTO): BireOperationPnDTO {
    component.opeCode = operation.opeCode;
    component.opeVersion = operation.opeVersion;
    component.rangeCode = operation.rangeCode;

    return component;
  }

  public searchRangeCode(): void {
    const rangeCodeTableCols: TableColumn[] = [
      { field: 'rangeCode', alignment: 'left', filterMode: TableColumnFilterMode.Input },
      { field: 'description', alignment: 'left', filterMode: TableColumnFilterMode.Input }
    ];

    try {
      this.rangeCodeTableData = {
        componentId: 'DialogRangeCode',
        tableCols: rangeCodeTableCols,
        tableRows: this.operationFormService.findAllBireRanges(undefined),
        dataKey: undefined,
        selectionMode: TableSelectionMode.Single,
        globalFilter: true
      };
      this.displayRangeCodeDialog = true;
    } catch {
      this.messageService.showErrorMessage('errorOnGetRangeCodes');
    }
  }

  // TODO when update functionality is implemented in StatusUpdatesHistoryComponent
  // public updateObjectStatusFromStatusUpdatesHistory(event: HBireOperationDTO): void {

  // }

  /**************************************************************************
   * Range Code Dialog
   *************************************************************************/

  public onSelectedRangeCode(operation: BireOperationDTO): void {
    if (operation) {
      this.operation.rangeCode = operation.rangeCode;
    }
  }

  /***********************************************************************************
   * Operation Fields Tab
   ***********************************************************************************/

  public openOperationFieldsTab(): void {
    this.currentTabId = this.tabOperationFieldsId;
  }

  public loadTechnicalLevelsList() {
    this.operationFormService.findAllBireTils(undefined).subscribe(
      (results) => {
        results.forEach((result) => {
          if (!!result && result.technicalLevel !== null && result.technicalLevel !== undefined && !!result.tilName) {
            const tempName: LabelValue<number> = {
              label: result.tilName,
              value: result.technicalLevel
            };
            this.technicalLevelsToDisplayList.push(tempName);
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadTechnicalLevels'));
      }
    );
  }

  public onTilSelected(event: LabelValue<string>) {
    if (!!this.til) {
      this.til.technicalLevel = parseInt(event.value, 10);
      this.operation.technicalLevel = this.til.technicalLevel;
      if (this.operation.technicalLevel !== undefined) {
        const til = this.technicalLevelsToDisplayList.filter((name) => name.value.toString() === event.value)[0];
        if (!!til) {
          this.til.tilName = til.label;
        }
      } else {
        super.throwUnboundLocalError('onTilSelected', 'this.til');
      }
    }
  }

  /**
   * loadQualificationsList : load all the qualifications to display in the qualification dropdown
   */
  public loadQualificationsList(): void {
    this.operationFormService.findAllBireQualificationDatas(undefined).subscribe(
      (results) => {
        this.qualifications = results;
        results.forEach((result) => {
          if (!!result.qualificationCode) {
            const tempName: LabelValue<string> = {
              value: result.qualificationCode,
              label: `${result.qualificationCode} - ${result.qualificationName}`
            };
            this.qualificationsToDisplayList.push(tempName);
          } else {
            super.throwUnboundLocalError('loadQualificationsList', 'result.qualificationCode');
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadQualification'));
      }
    );
  }

  /**
   * loadWorkCenterList : load all the work centers to display in the workcenter dropdown
   */
  private loadWorkCenterList(): void {
    this.operationFormService.findByCriteriaWorkshop().subscribe(
      (results) => {
        results.forEach((result) => {
          if (!!result.bidtWarehouseDTO.whCode) {
            const tempName: LabelValue<string> = {
              value: result.bidtWarehouseDTO.whCode,
              label: `${result.bidtWarehouseDTO.whCode} - ${result.bidtWarehouseDTO.whName}`
            };
            this.workcentersToDisplayList.push(tempName);
          } else {
            super.throwUnboundLocalError('loadWorkCentersList', 'result.workcenterCode');
          }
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadWorkCenter'));
      }
    );
  }

  /**
   * setHasHourlyRateValue : set the value of this.hasHourlyRateValue to true if the qualification
   *                         of the operation has an averageHourRate
   */
  public setHasHourlyRateValue(): void {
    this.hasHourlyRateValue = false;
    if (this.operation.opeQualification) {
      const selectedQualification = this.qualifications.find(
        (qualification) => qualification.qualificationCode === this.operation.opeQualification
      );
      if (selectedQualification && selectedQualification.averageHourRate) {
        this.hasHourlyRateValue = true;
      }
    }
  }

  /**
   * onChangeQualification : load the datas of the new selected qualification
   *                         in the dropdown + modify the operation (opeQualification)
   */
  public onChangeQualification(event): void {
    if (event.value !== undefined) {
      const qual = this.qualificationsToDisplayList.filter((name) => name.value === event.value)[0];
      this.qualif = {
        qualificationCode: qual && qual.value,
        qualificationName: qual && qual.label
      };

      this.operation.opeQualification = this.qualif && this.qualif.qualificationCode;

      if (this.operation.opeQualification) {
        this.qualif = this.qualifications.find(
          (qualification) => qualification.qualificationCode === this.operation.opeQualification
        );
        this.setQualifRateCurrencyLabelByValue(); // Assigne a value to this.qualifRateCurrency
        if (!!this.qualif) {
          this.qualifAverageHourRate = this.qualif.averageHourRate;
        } else {
          super.throwUnboundLocalError('onChangeQualification', 'this.qualif');
        }
      }
      this.setHasHourlyRateValue();
      this.calculateCost();
    }
  }

  private setQualifRateCurrencyLabelByValue(): void {
    this.operationFormService.getCurrencyMap().subscribe(
      (results) => {
        const index = results.findIndex(
          (element) => !!this.qualif && (+element - 1).toString() === this.qualif.rateCurrency
        );
        this.qualifRateCurrency = results[index] && results[index].label;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetCurrency'));
      }
    );
  }

  /**
   * calculateCost : update opeCost when the operation is modified
   */
  public calculateCost(): void {
    if (
      this.operation !== undefined &&
      this.operation.opeManHour !== undefined &&
      this.operation.opeQualification !== undefined &&
      this.operation.opeDurationTime !== undefined
    ) {
      const calculateCostOfBireOperationInput: CalculateCostOfBireOperationInput = {
        operationManHour: this.operation.opeManHour,
        qualificationCode: this.operation.opeQualification,
        duration: this.operation.opeDurationTime,
        operationDTO: this.operation
      };
      this.operationFormService
        .calculateCostOfBireOperation(calculateCostOfBireOperationInput)
        .subscribe((resultsCalculateCostOfBireOperation) => {
          let cost: number;
          cost = resultsCalculateCostOfBireOperation;
          if (cost !== undefined && cost !== 0) {
            this.operation.opeCost = cost;
          } else {
            if (
              !!this.operation &&
              !!this.operation.opeManHour &&
              !!this.operation.opeQualification &&
              !!this.operation.opeDurationTime
            ) {
              this.operationFormService
                .calculateCostOfBireOperationForAircraftMaintenance(
                  this.operation.opeManHour,
                  this.operation.opeQualification,
                  this.operation.opeDurationTime,
                  this.operation
                )
                .subscribe((resultsCalculateCostOfBireOperationForAircraftMaintenance) => {
                  this.operation.opeCost = resultsCalculateCostOfBireOperationForAircraftMaintenance;
                });
            } else {
              super.throwUnboundLocalError('calculateCost', 'this.operation');
            }
          }
        });
    }
  }

  /***********************************************************************************
   * Components Tab
   ***********************************************************************************/

  public openComponentsTab(): void {
    this.currentTabId = this.tabComponentsId;
  }

  public loadComponents() {
    this.componentsTableDataSource.setData([]);
    this.operationFormService.findBireOperationPnsByOperation(this.operationId).subscribe(
      (resultsFindBireOperationPnsByOperation) => {
        this.components = resultsFindBireOperationPnsByOperation || [];
        if (this.components) {
          for (const component of this.components) {
            try {
              this.buildOperationPnElementFromBireOperationPnDTO(component);
            } catch {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetComponents'));
            }
          }
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetComponents'));
      }
    );
  }

  public addComponent(): void {
    this.currentComponent = {};
    this.currentComponentIndex = -1;
    this.isReadOnlyComponentDialog = false;
    this.displayComponentDialog = true;
  }

  public editComponents(): void {
    if (this.componentsTableDataSource.dataSelectionCount === 1) {
      const selectedCompo: BireOperationPnDTO = this.buildBireOperationPnDTOFromOperationPnElement(
        this.componentsTableDataSource.dataSelection[0]
      );
      this.currentComponentIndex = this.components.findIndex((component) => {
        return DTOUtils.equalsBireOperationPnDTO(component, selectedCompo);
      });
      this.currentComponent = { ...this.componentsTableDataSource.dataSelection[0] };
      if (!!this.currentComponent && !!this.currentComponent.type) {
        const type = this.pnTypes.filter(
          (pnType) => !!this.currentComponent && pnType.label === this.currentComponent.type
        )[0];
        if (!!type) {
          this.currentComponent.type = type.label;
        }
      }
      this.isReadOnlyComponentDialog = false;
      this.displayComponentDialog = true;
    }
  }

  public openComponents(): void {
    if (this.componentsTableDataSource.dataSelectionCount === 1) {
      this.redirect(this.componentsTableDataSource.dataSelection[0]);
    }
  }

  public deleteComponents(): void {
    const partialMessageKey =
      this.componentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedComponents'
        : 'confirmDeleteSelectedComponent';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.componentsTableDataSource.dataSelection.forEach((selectedOperationPn) => {
          const selectedComponent = this.buildBireOperationPnDTOFromOperationPnElement(selectedOperationPn);
          const componentsAddedWithoutSelection = this.addedComponentsList.filter((componentAdded) => {
            return !DTOUtils.equalsBireOperationPnDTO(selectedComponent, componentAdded);
          });
          // list of added objects contains the selection
          if (this.addedComponentsList.length !== componentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.addedComponentsList = componentsAddedWithoutSelection;
          } else {
            const isRemoved = this.addedComponentsList.some((componentAdded) => {
              return DTOUtils.equalsBireOperationPnDTO(selectedComponent, componentAdded);
            });
            if (!isRemoved) {
              this.removedComponentsList = [...this.removedComponentsList, selectedComponent];
            }
          }
        });

        this.components = this.components.filter((component) => {
          return !this.componentsTableDataSource.dataSelection.some((selectedOperationPn) => {
            const selectedComponent = this.buildBireOperationPnDTOFromOperationPnElement(selectedOperationPn);

            return DTOUtils.equalsBireOperationPnDTO(component, selectedComponent);
          });
        });
        this.componentsTableDataSource.setData(
          this.componentsTableDataSource.dataSrc.filter((operationPn) => {
            return !this.componentsTableDataSource.dataSelection.some((selectedOperationPn) => {
              return DTOUtils.equalsBireOperationPnDTO(operationPn, selectedOperationPn);
            });
          })
        );

        this.componentsTableDataSource.dataSelection = [];
      }
    });
  }

  /**************************************************************************
   * Component Dialog
   *************************************************************************/

  public onValidateComponent(opeCompo: OperationPnElement): void {
    if (!!opeCompo) {
      if (opeCompo.type === AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY) {
        opeCompo.quantity = '1'; // Set the default quantity of subcontracting components
      }
      const opeCompoTyped: OperationPnElement = {
        pnCode: opeCompo.pnCode,
        name: opeCompo.name,
        type: undefined,
        quantity: opeCompo.quantity,
        unit: opeCompo.unit,
        componentType: opeCompo.componentType
      };
      const operationPn: BireOperationPnDTO = this.buildBireOperationPnDTOFromOperationPnElement(opeCompo);
      if (this.currentComponentIndex !== -1) {
        if (this.currentComponentIndex !== null && this.currentComponentIndex !== undefined) {
          if (!!opeCompo.type) {
            opeCompoTyped.type =
              this.pnTypes.filter((pnType) => pnType.value === opeCompo.type)[0] &&
              this.pnTypes.filter((pnType) => pnType.value === opeCompo.type)[0].label;
          }

          this.components[this.currentComponentIndex] = operationPn;
          this.componentsTableDataSource.replaceData(
            this.componentsTableDataSource.dataSelection[0],
            this.addComponentRow(opeCompoTyped)
          );

          const updatedOperationComponentIndex = this.updatedComponentsList.findIndex((updatedComponent) =>
            DTOUtils.equalsBireOperationPnDTO(updatedComponent, operationPn)
          );
          if (updatedOperationComponentIndex !== -1) {
            this.updatedComponentsList[updatedOperationComponentIndex] = operationPn;
          } else {
            this.updatedComponentsList = [...this.updatedComponentsList, operationPn];
          }
        } else {
          super.throwUnboundLocalError('onValidateComponent', 'this.currentComponentIndex');
        }
      } else {
        const rowWithPnCodeExists = this.componentsTableDataSource.dataSrc.some(
          (comp) => comp.pnCode === opeCompo.pnCode
        );
        if (!rowWithPnCodeExists) {
          const isAdded = this.addedComponentsList.some((newAddedOperationPn) => {
            return DTOUtils.equalsBireOperationPnDTO(operationPn, newAddedOperationPn);
          });
          if (isAdded) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnComponentExists'));
          } else {
            const component = this.buildBireOperationPnDTOFromOperationPnElement(opeCompo);
            this.components = [...this.components, component];
            this.addedComponentsList = [...this.addedComponentsList, component];
            if (opeCompo.type !== null) {
              opeCompoTyped.type =
                this.pnTypes.filter((pnType) => pnType.value === opeCompo.type)[0] &&
                this.pnTypes.filter((pnType) => pnType.value === opeCompo.type)[0].label;
            }
            this.componentsTableDataSource.addData([this.addComponentRow(opeCompoTyped)]);
          }
        }
      }
      this.componentsTableDataSource.dataSelection = [];
    }
  }

  private addComponentRow(operationCompo: OperationPnElement): OperationComponentRow {
    const operationComponentRow: OperationComponentRow = {
      pnCode: operationCompo.pnCode as string,
      name: operationCompo.name as string,
      type: operationCompo.type as string,
      quantity: operationCompo.quantity as string,
      unit: operationCompo.unit as string,
      componentType: operationCompo.componentType as string
    };

    return operationComponentRow;
  }

  private buildOperationPnElementFromBireOperationPnDTO(component: BireOperationPnDTO): void {
    if (!!component && !!component.pnCode) {
      const pnId: BirePnDTOId = { pnCode: component.pnCode };
      this.operationFormService.findBirePn(pnId).subscribe((resultsFindBirePn) => {
        const componentPnDTO = resultsFindBirePn;
        let componentPnDTOPnTypeLabel: string | undefined;
        if (componentPnDTO.pnType !== null && componentPnDTO.pnType !== undefined) {
          const type = this.pnTypes.filter((pnType) => pnType.value === componentPnDTO.pnType)[0];
          if (!!type) {
            componentPnDTOPnTypeLabel = type.label;
          }
        }
        this.operationComponent = {
          pnCode: component.pnCode,
          name: componentPnDTO.articleDesignation,
          type: componentPnDTO.pnType,
          quantity: component.quantity,
          unit: componentPnDTO.quantityUnit
        };
        const operationComponentTyped = {
          pnCode: component.pnCode,
          name: componentPnDTO.articleDesignation,
          type: componentPnDTOPnTypeLabel,
          quantity: component.quantity,
          unit: componentPnDTO.quantityUnit,
          componentType: ''
        };
        switch (componentPnDTO.pnType) {
          case AWPropertiesConstants.PN_TYPE_PART_KEY:
            operationComponentTyped.componentType = componentPnDTO.pnType;
            break;
          case AWPropertiesConstants.PN_TYPE_SUBCONTRACTING_KEY:
            operationComponentTyped.componentType = componentPnDTO.pnType;
            break;
          default:
            operationComponentTyped.componentType = AWPropertiesConstants.PN_TYPE_INGREDIENT_KEY;
            break;
        }
        this.componentsTableDataSource.addData([operationComponentTyped]);
      });
    }
  }

  private buildBireOperationPnDTOFromOperationPnElement(opeCompo: OperationPnElement): BireOperationPnDTO {
    const buildedComponent: BireOperationPnDTO = {
      opeCode: this.operation.opeCode,
      opeVersion: this.operation.opeVersion,
      rangeCode: this.operation.rangeCode,
      pnCode: opeCompo.pnCode,
      quantity: opeCompo.quantity,
      unit: opeCompo.unit
    };

    return buildedComponent;
  }

  public redirect(rowData: OperationPnElement): void {
    if (rowData.componentType === AWPropertiesConstants.PN_TYPE_PART_KEY) {
      this.goToPartNumber(rowData.pnCode, ComponentOpenMode.Read);
    } else {
      if (!!rowData.pnCode) {
        const pnId: BirePnDTOId = { pnCode: rowData.pnCode };
        this.operationFormService.findBirePn(pnId).subscribe((result) => {
          this.goToMaterial(result, ComponentOpenMode.Read);
        });
      }
    }
  }

  private goToPartNumber(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.PartNumberFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'PartNumberFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private goToMaterial(objectId: BirePnDTO | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MATERIAL_FORM,
      openMode
    };
    if (!!objectId) {
      const materialFormId: BirePnDTO = {
        pnCode: objectId.pnCode,
        pnType: objectId.pnType
      };
      data.objectId = this.serializationService.serialize(materialFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /***********************************************************************************
   * Documents Tab
   ***********************************************************************************/

  public openDocumentsTab(): void {
    this.currentTabId = this.tabDocumentsId;
  }

  private loadDocuments(operationId: BireOperationDTOId): void {
    this.documentsTableDataSource.setData([]);
    this.operationFormService.findBireDocumentByOperation(operationId).subscribe(
      (results) => {
        results.forEach((result) => {
          this.documentsTableDataSource.addData([this.convertToDocumentRow(result)]);
        });
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetDocuments'));
      }
    );
  }

  private convertToDocumentRow(document: BireDocumentDTO): DocumentRow {
    const documentRow: DocumentRow = {
      docName: document.docName,
      docSource: document.docSource,
      docExtension: this.formatDocExtension(document),
      docSize: this.formatDocSize(document),
      docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
      docDescription: document.docDescription,
      _obj: document
    };

    return documentRow;
  }

  private formatDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  private formatDocSize(document: BireDocumentDTO): string {
    return !!document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  public uploadDocument(event, fileUploader): void {
    if (event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documentsTableDataSource.dataSrc.some((document) => {
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

            this.documentsTableDataSource.addData([this.convertToDocumentRow(document)]);
            this.documentsAdded = [...this.documentsAdded, this.convertToDocumentRow(document)];
          }
        });
      }

      fileUploader.clear();
    }
  }

  public addDocument(): void {
    this.currentDocumentIndex = -1;
    this.currentDocument = undefined;
    this.isReadOnlyDocumentDialog = false;
    this.displayDocumentDialog = true;
  }

  public editDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocumentIndex = this.documentsTableDataSource.dataSrc.findIndex((document) => {
        return DTOUtils.equalsBireDocOperationDTO(
          document._obj as BireDocumentDTO,
          this.documentsTableDataSource.dataSelection[0]._obj as BireDocumentDTO
        );
      });

      this.currentDocument = { ...this.documentsTableDataSource.dataSelection[0] };
      this.isReadOnlyDocumentDialog = false;
      this.showAddDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.documentsTableDataSource.dataSelectionCount === 1) {
      this.currentDocument = this.documentsTableDataSource.dataSelection[0];
      this.currentDocumentIndex = undefined;
      this.isReadOnlyDocumentDialog = true;
      this.displayDocumentDialog = true;
    }
  }

  public downloadFile(document: DocumentRow): void {
    if (!!document._obj) {
      FileUtils.downloadFile(document._obj.docFile, document.docName);
    }
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.documentsTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedDocuments'
        : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.documentsTableDataSource.dataSelection.forEach((selectedDocument) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter((documentAdded) => {
            return !DTOUtils.equalsBireDocOperationDTO(
              selectedDocument._obj as BireDocumentDTO,
              documentAdded._obj as BireDocumentDTO
            );
          });
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const isRemoved = this.documentsAdded.some((documentAdded) => {
              return DTOUtils.equalsBireDocOperationDTO(
                selectedDocument._obj as BireDocumentDTO,
                documentAdded._obj as BireDocumentDTO
              );
            });
            if (!isRemoved) {
              this.documentsRemoved = [...this.documentsRemoved, selectedDocument];
            }
          }
        });

        this.documentsTableDataSource.setData(
          this.documentsTableDataSource.dataSrc.filter((document) => {
            return !this.documentsTableDataSource.dataSelection.some((selectedDocument) => {
              return DTOUtils.equalsBireDocOperationDTO(
                document._obj as BireDocumentDTO,
                selectedDocument._obj as BireDocumentDTO
              );
            });
          })
        );

        this.documentsTableDataSource.dataSelection = [];
      }
    });
  }

  public showDocExtension(document: BireDocumentDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  public showDocSize(document: BireDocumentDTO): string {
    return document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  /**************************************************************************
   * Document Dialog
   *************************************************************************/

  public addNewDocument(newDocument: BireDocumentDTO) {
    const searchInDisplayedList = this.documentsTableDataSource.dataSrc.find(
      (value) => value.docName === newDocument.docName
    );
    if (!searchInDisplayedList) {
      this.documentsAdded.push(this.convertToDocumentRow(newDocument));
      this.documentsTableDataSource.addData([this.convertToDocumentRow(newDocument)]);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorFileAlreadyExist'));
    }
  }

  public onAddDocument(document: DocumentRow): void {
    if (!!document._obj) {
      document._obj.docName = document.docName;
      document._obj.docSource = document.docSource;
      if (!!document.docPublicationDate) {
        document._obj.docPublicationDate = new Date(document.docPublicationDate);
      }
      document._obj.docDescription = document.docDescription;
    }
    if (document) {
      if (this.currentDocumentIndex !== undefined) {
        this.documentsTableDataSource.replaceData(this.documentsTableDataSource.dataSrc[0], document);
      } else {
        const isAdded = this.documentsAdded.some((documentAdded) => {
          return DTOUtils.equalsBireDocOperationDTO(
            document._obj as BireDocumentDTO,
            documentAdded._obj as BireDocumentDTO
          );
        });
        if (isAdded) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnDocumentExists'));
        } else {
          this.documentsTableDataSource.addData([document]);
          this.documentsAdded = [...this.documentsAdded, document];
        }
      }
    }

    this.documentsTableDataSource.dataSelection = [];
  }

  /***********************************************************************************
   * Attributes Tab
   ***********************************************************************************/

  public openAttributesTab(): void {
    this.currentTabId = this.tabAttributesId;
  }

  public loadAttributes(): void {
    this.operationFormService.findBireOperationAttributesByOperation(this.operation).subscribe(
      (results) => {
        this.bireOperationAttributes = results;
        this.dynamicAttributesService.setValues(this.dynamicAttributes, this.bireOperationAttributes);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnFindAttributesByOperation'));
      }
    );
  }

  public initCostSettingDisplay(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.AEROWEBB_CONFIGURATION_MAP)
      .subscribe((awConfiguration) => {
        this.isCostSettingEnabled = SettingsUtils.isPropertyEnabled(
          awConfiguration,
          AWPropertiesConstants.DISPLAY_COST
        );
      });
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.operation.statusUser,
        currentDate: this.operation.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.operation.statusState, this.statusList),
          value: this.operation.statusState
        },
        nextStatuses: this.statusList
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.operation.statusState = event.data;
          this.saveOperation();
        }
      }
    });
  }
}
