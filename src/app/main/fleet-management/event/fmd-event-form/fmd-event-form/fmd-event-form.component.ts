import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { forkJoin } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FormatSelectOptionPipe } from '../../../../../shared/pipes/format-select-option.pipe';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../shared/services/date.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { UpdateFieldsOfBidoDocumentationInput } from '../../../../../shared/types/api-input-types/fleet-management/update-fields-of-bido-documentation-input.interface';
import { BidoDocumentationFMDInput } from '../../../../../shared/types/api-output-types/fleet-management/bido-documentation-fmd-input.interface';
import { FMDReferenceOutputDTO } from '../../../../../shared/types/api-output-types/fleet-management/fmd-reference-output-dto.interface';
import { BidoDocumentationDTOId } from '../../../../../shared/types/api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../../../../shared/types/api-types/bido-documentation-dto.interface';
import { BidoFmdDTO } from '../../../../../shared/types/api-types/bido-fmd-dto.interface';
import { BidoNotificationDTOId } from '../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { BidoNotificationDTO } from '../../../../../shared/types/api-types/bido-notification-dto.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { FileUtils } from '../../../../../shared/utils/file-utils';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { ObjectStatusComponent } from '../../../../object-status/object-status.component';
import { OverlayService } from '../../../../overlay/overlay.service';
import { EventCreateService } from '../../event-create/event-create.service';

interface TableRowData {
  info: string;
  control: boolean | undefined;
  engineData: string | undefined;
  fmdData: string | undefined;
}

interface DocumentRow {
  docName: string;
  docType: string;
  docExtension: string;
  docSize: string;
  docPublicationDate: string;
  _obj: BidoDocumentationDTO;
}

@Component({
  selector: 'aw-fmd-event-form',
  styleUrls: ['./fmd-event-form.component.scss'],
  templateUrl: './fmd-event-form.component.html'
})
export class FmdEventFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly TIMEOUT_LIMIT: number = 400;

  @ViewChild('mainAnchor')
  public mainAnchor: ElementRef;

  @ViewChild('reportInfoAnchor')
  public reportInfoAnchor: ElementRef;

  @ViewChild('engineInfoAnchor')
  public engineInfoAnchor: ElementRef;

  @ViewChild('aircraftInfoAnchor')
  public aircraftInfoAnchor: ElementRef;

  @ViewChild('eventInfoAnchor')
  public eventInfoAnchor: ElementRef;

  @ViewChild('initialFindingsAnchor')
  public initialFindingsAnchor: ElementRef;

  @ViewChild('investigationFindingAnchor')
  public investigationFindingAnchor: ElementRef;

  @ViewChild('correctiveActionAnchor')
  public correctiveActionAnchor: ElementRef;

  @ViewChild('riskAnalysisAnchor')
  public riskAnalysisAnchor: ElementRef;

  @ViewChild('closeoutInformationAnchor')
  public closeoutInformationAnchor: ElementRef;

  @ViewChild('documentsAnchor')
  public documentsAnchor: ElementRef;

  private INITIAL_FINDINGS_TABLE_INFO_ARR: string[] = [];
  private CLOSEOUT_INFORMATION_TABLE_INFO_ARR: string[] = [];
  private AIRCRAFT_TABLE_INFO_ARR: string[] = [];
  private EVENT_TABLE_INFO_ARR: string[] = [];
  private ENGINE_TABLE_INFO_ARR: string[] = [];

  public selectedAnchor: string | undefined;
  public toc;
  public componentSubtitle: string;

  public bidoNotificationDTO: BidoNotificationDTO;
  public bidoFmdDTO: BidoFmdDTO;
  public databaseFmdDto: BidoFmdDTO;
  private bidoFmdsArr: BidoFmdDTO[];
  public eventFmdData: BidoFmdDTO;
  public notificationCode: string;
  public getFDMIsFDE: boolean;
  public tableCols: TableColumn[];
  public isStatusClosed: boolean;

  // Dropdowns
  public fmdStatusMap: LabelValue<string>[];
  public aeronauticalAuthorityMap: LabelValue<string>[];
  public productionCertMap: LabelValue<string>[];
  public doaNumberMap: LabelValue<string>[];
  public typeCertificateMap: LabelValue<string>[];
  public e5xHighestDamageMap: LabelValue<string>[];
  public e5xinjuryLevelMap: LabelValue<string>[];
  public closeoutReasonOptions: LabelValue<string>[];
  public clientMap: LabelValue<string>[];
  public operatorMap: LabelValue<string>[];
  public eventTypeMap: LabelValue<string>[];
  public editionNumberMap: LabelValue<number>[];

  // Table Data
  public engineInfoData: TableRowData[];
  public aircraftInfoData: TableRowData[];
  public eventInfoData: TableRowData[];
  public initialFindingsData: TableRowData[];
  public closeoutInformationData: TableRowData[];

  // Documents tab
  private documents: BidoDocumentationDTO[];
  public documentTable: DocumentRow[];
  public documentTableCols: TableColumn[];
  public documentTypes: SelectItem[];
  public selectedDocuments: DocumentRow[];

  public currentDocument: BidoDocumentationDTO | undefined;
  public documentDialogOpenMode: ComponentOpenMode;
  public showDocumentDialog: boolean;
  private currentDocumentIndex: number;

  private documentsAdded: BidoDocumentationDTO[];
  private documentsRemoved: BidoDocumentationDTO[];
  private documentsUpdated: BidoDocumentationDTO[];

  // Status State
  private prevState: string | undefined;

  // reference
  public reference: string | undefined;
  public referenceFMDYear: string | undefined;
  public referenceFDEYear: string | undefined;
  public referenceFMDNumber: string | undefined;
  public referenceFDENumber: string | undefined;
  public referenceFDELetter: string | undefined;
  public referenceSplitVisibility: boolean;
  public referenceSplitFDEVisibility: boolean;
  public referenceSplitFMDVisibility: boolean;
  public hasUpdateFMDRights: boolean;
  public updateFDERefDialogVisibility: boolean;
  public updateFDERefData: FMDReferenceOutputDTO;

  public showSaveSpinner: boolean;
  public showExportFMDE5xSpinner: boolean;
  public isDataLoading: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    pageTocService: PageTocService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly propertiesService: PropertiesService,
    public eventCreateService: EventCreateService,
    private readonly translateService: TranslateService,
    private readonly dateService: DateService,
    private readonly confirmationService: ConfirmationService,
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
    this.selectedAnchor = undefined;
    this.registerPageTocEntrySelectedObservable();

    this.getInfoColumnLabels();
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

  private getInfoColumnLabels(): void {
    // Initial Findings
    const eventNarrative = `${this.getComponentName()}.eventNarrative`;
    const initialFindings = `${this.getComponentName()}.initialFindingsAnchor`;

    // Closeout Information
    const partNumber = `${this.getComponentName()}.partNumber`;
    const pnDesignation = `${this.getComponentName()}.pnDesignation`;
    const investigationFindings = `${this.getComponentName()}.investigationFindings`;

    // Aircraft Information
    const operatorName = `${this.getComponentName()}.operatorName`;
    const aircraftModel = `${this.getComponentName()}.aircraftModel`;
    const aircraftSerialNumber = `${this.getComponentName()}.aircraftSerialNumber`;
    const aircraftTail = `${this.getComponentName()}.aircraftTail`;
    const enginePosition = `${this.getComponentName()}.enginePosition`;

    // Event Information
    const eventType = `${this.getComponentName()}.eventType`;
    const eventDate = `${this.getComponentName()}.eventDate`;
    const eventLocation = `${this.getComponentName()}.eventLocation`;
    const reportedOn = `${this.getComponentName()}.reportedOn`;
    const reportedBy = `${this.getComponentName()}.reportedBy`;
    const circumstances = `${this.getComponentName()}.circumstances`;
    const symptom = `${this.getComponentName()}.symptom`;

    // Engine Information
    const engineType = `${this.getComponentName()}.engineType`;
    const engineModel = `${this.getComponentName()}.engineModel`;
    const esn = `${this.getComponentName()}.esn`;
    const tsn = `${this.getComponentName()}.tsn`;
    const csn = `${this.getComponentName()}.csn`;
    const tssv = `${this.getComponentName()}.tssv`;
    const cssv = `${this.getComponentName()}.cssv`;
    const tsi = `${this.getComponentName()}.tsi`;
    const csi = `${this.getComponentName()}.csi`;

    this.translateService
      .get([
        eventNarrative,
        initialFindings,
        partNumber,
        pnDesignation,
        investigationFindings,
        operatorName,
        aircraftModel,
        aircraftSerialNumber,
        aircraftTail,
        enginePosition,
        eventType,
        eventDate,
        eventLocation,
        reportedOn,
        reportedBy,
        circumstances,
        symptom,
        engineType,
        engineModel,
        esn,
        tsn,
        csn,
        tssv,
        cssv,
        tsi,
        csi
      ])
      .subscribe((results) => {
        this.INITIAL_FINDINGS_TABLE_INFO_ARR = [results[eventNarrative], results[initialFindings]];

        this.CLOSEOUT_INFORMATION_TABLE_INFO_ARR = [
          results[partNumber],
          results[pnDesignation],
          results[investigationFindings]
        ];

        this.AIRCRAFT_TABLE_INFO_ARR = [
          results[operatorName],
          results[aircraftModel],
          results[aircraftSerialNumber],
          results[aircraftTail],
          results[enginePosition]
        ];

        this.EVENT_TABLE_INFO_ARR = [
          results[eventType],
          results[eventDate],
          results[eventLocation],
          results[reportedOn],
          results[reportedBy],
          results[circumstances],
          results[symptom]
        ];

        this.ENGINE_TABLE_INFO_ARR = [
          results[engineType],
          results[engineModel],
          results[esn],
          results[tsn],
          results[csn],
          results[tssv],
          results[cssv],
          results[tsi],
          results[csi]
        ];
      });
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_FDM_EVENT_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.updateOpenMode(this.componentData.openMode);

    const code =
      !!this.componentData.objectId &&
      !!(this.serializationService.deserialize(this.componentData.objectId) as BidoNotificationDTOId).notificationCode
        ? (this.serializationService.deserialize(this.componentData.objectId) as BidoNotificationDTOId).notificationCode
        : undefined;

    if (!!this.componentData.objectId && !code) {
      this.notificationCode = code as string;
      this.displayComponentContext('tab.createMode', this.isCreateOpenMode);
    } else if (!!this.componentData.objectId && !!code) {
      this.notificationCode = (this.serializationService.deserialize(
        this.componentData.objectId
      ) as BidoNotificationDTOId).notificationCode;

      this.componentSubtitle = code as string;
      this.displayComponentContext(this.notificationCode as string, this.isCreateOpenMode);
    }

    const mainInfoKey = 'page.mainData';
    const reportInfoKey = `${this.getComponentName()}.reportInfoAnchor`;
    const engineInfoKey = `${this.getComponentName()}.engineInfoAnchor`;
    const aircraftInfoKey = `${this.getComponentName()}.aircraftInfoAnchor`;
    const eventInfoKey = `${this.getComponentName()}.eventInfoAnchor`;
    const initialFindingsKey = `${this.getComponentName()}.initialFindingsAnchor`;
    const investigationFindingKey = `${this.getComponentName()}.investigationFinding`;
    const correctiveActionKey = `${this.getComponentName()}.correctiveAction`;
    const riskAnalysisKey = `${this.getComponentName()}.riskAnalysis`;
    const closeoutInformationKey = `${this.getComponentName()}.closeoutInformationAnchor`;
    const documentsKey = `global.documents`;

    this.translateService
      .get([
        mainInfoKey,
        reportInfoKey,
        engineInfoKey,
        aircraftInfoKey,
        eventInfoKey,
        initialFindingsKey,
        investigationFindingKey,
        correctiveActionKey,
        riskAnalysisKey,
        closeoutInformationKey,
        documentsKey
      ])
      .subscribe((results) => {
        this.toc = [
          {
            id: 'mainAnchor',
            anchor: this.mainAnchor,
            label: results[mainInfoKey]
          },
          {
            id: 'reportInfoAnchor',
            anchor: this.reportInfoAnchor,
            label: results[reportInfoKey]
          },
          {
            id: 'engineInfoAnchor',
            anchor: this.engineInfoAnchor,
            label: results[engineInfoKey]
          },
          {
            id: 'aircraftInfoAnchor',
            anchor: this.aircraftInfoAnchor,
            label: results[aircraftInfoKey]
          },
          {
            id: 'eventInfoAnchor',
            anchor: this.eventInfoAnchor,
            label: results[eventInfoKey]
          },
          {
            id: 'initialFindingsAnchor',
            anchor: this.initialFindingsAnchor,
            label: results[initialFindingsKey]
          },
          {
            id: 'investigationFindingAnchor',
            anchor: this.investigationFindingAnchor,
            label: results[investigationFindingKey]
          },
          {
            id: 'correctiveActionAnchor',
            anchor: this.correctiveActionAnchor,
            label: results[correctiveActionKey]
          },
          {
            id: 'riskAnalysisAnchor',
            anchor: this.riskAnalysisAnchor,
            label: results[riskAnalysisKey]
          },
          {
            id: 'closeoutInformationAnchor',
            anchor: this.closeoutInformationAnchor,
            label: results[closeoutInformationKey]
          },
          {
            id: 'documentsAnchor',
            anchor: this.documentsAnchor,
            label: results[documentsKey]
          }
        ];
      });

    this.tableCols = [
      { field: 'info', alignment: 'left', width: '15%' },
      { field: 'control', alignment: 'center', width: '10%' },
      { field: 'engineData', alignment: 'left' },
      { field: 'fmdData', alignment: 'left' }
    ];

    this.documentTableCols = [
      { field: 'docName', alignment: 'left' },
      { field: 'docType', alignment: 'left' },
      { field: 'docExtension', alignment: 'left' },
      { field: 'docSize', alignment: 'left' },
      { field: 'docPublicationDate', alignment: 'left' }
    ];

    this.init();
    this.loadBidoNotification();
    // this.loadDocuments();
  }

  /*******************************
   * TOP PANEL OPERATIONS
   *******************************/

  private init() {
    this.bidoNotificationDTO = {
      bidoNotificationTypeDTO: {}
    };
    this.bidoFmdDTO = {};
    this.databaseFmdDto = {};
    this.engineInfoData = [];
    this.initialFindingsData = [];
    this.closeoutInformationData = [];

    this.documentsAdded = [];
    this.documentsRemoved = [];
    this.documentsUpdated = [];
    this.documents = [];
    this.documentTable = [];
    this.documentTypes = [];
    this.selectedDocuments = [];
    this.editionNumberMap = [];
    this.bidoFmdsArr = [];
    this.doaNumberMap = [];

    this.updateFDERefData = {};

    this.currentDocument = undefined;
    this.currentDocumentIndex = -1;
    this.documentDialogOpenMode = ComponentOpenMode.Read;
    this.showDocumentDialog = false;

    this.isDataLoading = true;

    this.initDropdowns();
    this.getDocumentTypes();
  }

  public editFMDEvent(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public cancelFMDEvent(): void {
    this.updateOpenMode(ComponentOpenMode.Read);
    this.reloadFMDEvent();
  }

  public reloadFMDEvent() {
    this.init();
    this.loadBidoNotification();
  }

  /*******************************
   * LOAD DROPDOWN
   *******************************/
  public initDropdowns() {
    const statusMap = this.propertiesService.getValue('getFmdStatusMap');
    const aeronauticalMap = this.propertiesService.getValue('getFmdAuthoritiesMap');
    const prodCertMap = this.propertiesService.getValue('getFmdProdCertificateMap');
    const doaMap = this.propertiesService.getValue('getFmdDoaNumbersMap');
    const highestDamageMap = this.propertiesService.getValue('getFmdHighestDamageMap');
    const injuryLevelMap = this.propertiesService.getValue('getFmdInjuryLevelMap');
    const closeoutReasonMap = this.propertiesService.getValue('getFmdCloseoutReasonMap');

    const doaConst = 3;
    const highestDamageConst = 4;
    const injuryConst = 5;
    const closeoutConst = 6;

    forkJoin([
      statusMap,
      aeronauticalMap,
      prodCertMap,
      doaMap,
      highestDamageMap,
      injuryLevelMap,
      closeoutReasonMap
    ]).subscribe((results) => {
      this.fmdStatusMap = results[0];
      this.aeronauticalAuthorityMap = results[1];
      this.productionCertMap = results[2];
      this.doaNumberMap = results[doaConst];
      this.e5xHighestDamageMap = results[highestDamageConst];
      this.e5xinjuryLevelMap = results[injuryConst];
      this.closeoutReasonOptions = results[closeoutConst];
    });

    const codes = ['C', 'O'];
    codes.forEach((code) => {
      this.loadOwnerAndOperatorDropdown(code);
    });
  }

  private loadOwnerAndOperatorDropdown(code: string) {
    this.eventCreateService.findBidoCustomersBySearchCriteriaFMD(code).subscribe((result: LabelValue<string>[]) => {
      if (code === 'C') {
        this.clientMap = result;
      } else {
        this.operatorMap = result;
      }
    });
  }

  private loadE5XEventTypeDropdown(code: string) {
    this.eventCreateService.findE5XEventTypesByFmdEventType(code).subscribe((result: LabelValue<string>[]) => {
      this.eventTypeMap = result;
    });
  }

  private loadTypeCertificateMap(code: string, notificationCode: string) {
    this.eventCreateService.initializeTCMap(code).subscribe((result: LabelValue<string>[]) => {
      this.typeCertificateMap = result;
      this.findBidoFmdsByNotificationCode(notificationCode);
    });
  }

  /*******************************
   * LOAD SCREEN DATA
   *******************************/
  private loadBidoNotification() {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: this.notificationCode
    };

    this.eventCreateService
      .findBidoNotification(bidoNotificationDTOId)
      .pipe(
        finalize(() => {
          this.isDataLoading = false;
        })
      )
      .subscribe((bidoNotification: BidoNotificationDTO) => {
        this.bidoNotificationDTO = bidoNotification;
        if (!!bidoNotification && bidoNotification.familyVariantCode) {
          this.loadTypeCertificateMap(bidoNotification.familyVariantCode, bidoNotification.notificationCode as string);
          this.getFDMIsFDEVal();
          this.hasManageRights();
        }
      });
  }

  /*******************************
   * Filling DTO
   *******************************/
  private findBidoFmdsByNotificationCode(notificationCode: string) {
    this.eventCreateService
      .findBidoFmdsByNotificationCode(notificationCode)
      .pipe(
        finalize(() => {
          this.isDataLoading = false;
        })
      )
      .subscribe((result: BidoFmdDTO[]) => {
        this.bidoFmdsArr = result;
        if (result.length > 0 && !!result[0].reference) {
          this.fillEditionNumber(result);
          this.fillBidoFMDDTO(result[result.length - 1]);
          this.onChangeEditionNumber();
          this.generateFMD(true, notificationCode);
        } else {
          this.bidoFmdDTO = result[0];
          this.generateFMD(false, notificationCode);
        }

        if (!this.bidoFmdDTO.e5xHighestDamage) {
          // Setting default value NONE
          this.bidoFmdDTO.e5xHighestDamage = '98';
        }

        if (!this.bidoFmdDTO.e5xInjuryLevel) {
          // Setting default value NONE
          this.bidoFmdDTO.e5xInjuryLevel = '98';
        }
      });
  }

  /**
   *
   */
  private fillBidoFMDDTO(result: BidoFmdDTO) {
    this.bidoFmdDTO = { ...result };
    this.databaseFmdDto = { ...result };
    this.prevState = this.bidoFmdDTO.statusState;

    this.isStatusClosed = AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === this.prevState ? true : false;

    if (this.doaNumberMap.length > 0 && !this.bidoFmdDTO.doaNumber) {
      this.bidoFmdDTO.doaNumber = this.doaNumberMap[0].value;
    }
    this.initFMD();
  }

  /*******************************
   * Edition Number functionality
   *******************************/
  private fillEditionNumber(result: BidoFmdDTO[]) {
    result.forEach((res) => {
      if (res.editionNumber !== 0) {
        this.editionNumberMap.push({
          label: (res.editionNumber as number).toString(),
          value: res.editionNumber as number
        });
      }
    });
  }

  public onChangeEditionNumber() {
    this.bidoFmdsArr.forEach((res) => {
      if (res.editionNumber === this.bidoFmdDTO.editionNumber) {
        this.fillBidoFMDDTO(res);
      }
    });
  }

  private initFMD() {
    if (!!this.bidoFmdDTO.reference) {
      this.eventCreateService
        .setFMDReferenceDTO(this.bidoFmdDTO.reference)
        .pipe(
          finalize(() => {
            this.isDataLoading = false;
          })
        )
        .subscribe((result: FMDReferenceOutputDTO) => {
          if (this.getFDMIsFDE) {
            if (!!this.bidoFmdDTO.reference && !!result.reference && result.reference.split('-').length > 0) {
              this.reference = this.bidoFmdDTO.reference.substring(this.bidoFmdDTO.reference.indexOf('-') + 1);
            } else {
              this.reference = result.reference;
            }
            this.referenceFDELetter = result.referenceFDELetter;
            this.referenceFDEYear = result.referenceFDEYear;
            this.referenceFDENumber = result.referenceFDENumber;
          } else {
            this.reference = result.reference;
            this.referenceFMDNumber = result.referenceFMDNumber;
            this.referenceFMDYear = result.referenceFMDYear;
          }

          this.getReferenceSplitVisibility();
          this.isDataLoading = false;
        });
    }
  }

  private generateFMD(isAnExistingFMD: boolean, notificationCode: string) {
    this.eventCreateService
      .generateFmdByEventCode(notificationCode)
      .pipe(
        finalize(() => {
          this.isDataLoading = false;
        })
      )
      .subscribe((res: BidoFmdDTO) => {
        this.generateAndSetFMD(isAnExistingFMD, res);
        this.isDataLoading = false;
      });
  }

  private generateAndSetFMD(isAnExistingFMD: boolean, res: BidoFmdDTO) {
    if (!isAnExistingFMD) {
      if (!!res) {
        this.setBidoFmdData(res);
      }
    }
    this.eventFmdData = res;
    this.loadTabData();
    if (!!this.bidoFmdDTO.eventType) {
      this.loadE5XEventTypeDropdown(this.bidoFmdDTO.eventType);
    } else if (!!this.eventFmdData.eventType) {
      this.loadE5XEventTypeDropdown(this.eventFmdData.eventType);
    }
  }

  private setBidoFmdData(res: BidoFmdDTO) {
    // Setting Reporting Information
    this.bidoFmdDTO.reference = undefined;
    this.bidoFmdDTO.fmdSystemCreationDate = undefined;
    this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_DRAFT_KEY;
    this.bidoFmdDTO.fmdReporter = !!res.fmdAuthor ? res.fmdAuthor : this.bidoFmdDTO.fmdAuthor;
    this.bidoFmdDTO.fmdCreationDate = res.fmdCreationDate;
    this.bidoFmdDTO.tcHolderAddress = res.tcHolderAddress;
    this.bidoFmdDTO.tcHolderName = res.tcHolderName;
    this.bidoFmdDTO.doaNumber = '1';

    // Engine Information
    this.bidoFmdDTO.engineModel = res.engineModel;
    this.bidoFmdDTO.engineType = res.engineType;
    this.bidoFmdDTO.esn = res.esn;
    this.bidoFmdDTO.tsn = res.tsn;
    this.bidoFmdDTO.csn = res.csn;
    this.bidoFmdDTO.tssv = res.tssv;
    this.bidoFmdDTO.cssv = res.cssv;
    this.bidoFmdDTO.tsi = res.tsi;
    this.bidoFmdDTO.csi = res.csi;
    this.bidoFmdDTO.operatorName = res.operatorName;

    // Aircraft information
    this.bidoFmdDTO.aircraftModel = res.aircraftModel;
    this.bidoFmdDTO.aircraftSerialNumber = res.aircraftSerialNumber;
    this.bidoFmdDTO.aircraftSerialNumber = res.aircraftSerialNumber;
    this.bidoFmdDTO.aircraftTail = res.aircraftTail;
    this.bidoFmdDTO.enginePosition = res.enginePosition;
    this.bidoFmdDTO.aircraftSerialNumber = res.aircraftSerialNumber;

    // Event information
    this.bidoFmdDTO.eventType = res.eventType;
    this.bidoFmdDTO.eventDate = res.eventDate;
    this.bidoFmdDTO.eventLocation = res.eventLocation;
    this.bidoFmdDTO.reportDate = res.reportDate;
    this.bidoFmdDTO.reportedBy = res.reportedBy;
    this.bidoFmdDTO.eventSymptoms = res.eventSymptoms;

    // Initial Findings
    this.bidoFmdDTO.eventNarrative = res.eventNarrative;
    this.bidoFmdDTO.initialFinding = res.initialFinding;

    // Closeout Information
    this.bidoFmdDTO.pn = res.pn;
    this.bidoFmdDTO.pnDesignation = res.pnDesignation;
    this.bidoFmdDTO.investigationFindingLong = res.investigationFindingLong;
    this.bidoFmdDTO.refusalReason = res.refusalReason;
    this.bidoFmdDTO.closureDate = res.closureDate;
    this.bidoFmdDTO.correctiveAction = res.correctiveAction;
  }

  private loadTabData() {
    this.loadEngineInformationTab();
    this.loadAircraftInformationTab();
    this.loadEventInformationTab();
    this.loadInitialFindingsTab();
    this.loadCloseoutInformationTab();
    this.loadDocuments();
  }

  private getFDMIsFDEVal() {
    if (!!this.bidoNotificationDTO && !!this.bidoNotificationDTO.familyVariantCode) {
      this.eventCreateService.getFDMIsFDE(this.bidoNotificationDTO.familyVariantCode).subscribe((res: boolean) => {
        this.getFDMIsFDE = res;
      });
    }
  }

  /********************************
   * Create table structure
   ********************************/
  // tslint:disable-next-line:no-any
  private createTableStructure(rowInfoData: any[]) {
    // tslint:disable-next-line:no-any
    const tableArr: any[] = [];
    rowInfoData.forEach((row) => {
      tableArr.push({
        info: row,
        control: undefined,
        engineData: undefined,
        fmdData: undefined
      });
    });

    return tableArr;
  }

  /********************************
   * ENGINE INFORMATION TAB OPERATIONS
   ********************************/
  private loadEngineInformationTab() {
    this.engineInfoData = this.createTableStructure(this.ENGINE_TABLE_INFO_ARR);
    const ENGINT_TYPE = 0;
    const CONTROL = 1;
    const ESN = 2;
    const TSN = 3;
    const CSN = 4;
    const TSSV = 5;
    const CSSV = 6;
    const TSI = 7;
    const CSI = 8;

    this.engineInfoData.forEach((row) => {
      switch (row.info) {
        case this.ENGINE_TABLE_INFO_ARR[ENGINT_TYPE]: {
          row.engineData = this.eventFmdData.engineType;
          row.fmdData = this.bidoFmdDTO.engineType;
          row.control = this.getControlFieldData(this.eventFmdData.engineType, this.bidoFmdDTO.engineType);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[CONTROL]: {
          row.engineData = this.eventFmdData.engineModel;
          row.fmdData = this.bidoFmdDTO.engineModel;
          row.control = this.getControlFieldData(this.eventFmdData.engineModel, this.bidoFmdDTO.engineModel);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[ESN]: {
          row.engineData = this.eventFmdData.esn;
          row.fmdData = this.bidoFmdDTO.esn;
          row.control = this.getControlFieldData(this.eventFmdData.esn, this.bidoFmdDTO.esn);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[TSN]: {
          row.engineData = this.eventFmdData.tsn;
          row.fmdData = this.bidoFmdDTO.tsn;
          row.control = this.getControlFieldData(this.eventFmdData.tsn, this.bidoFmdDTO.tsn);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[CSN]: {
          row.engineData = this.eventFmdData.csn;
          row.fmdData = this.bidoFmdDTO.csn;
          row.control = this.getControlFieldData(this.eventFmdData.csn, this.bidoFmdDTO.csn);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[TSSV]: {
          row.engineData = this.eventFmdData.tssv;
          row.fmdData = this.bidoFmdDTO.tssv;
          row.control = this.getControlFieldData(this.eventFmdData.tssv, this.bidoFmdDTO.tssv);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[CSSV]: {
          row.engineData = this.eventFmdData.cssv;
          row.fmdData = this.bidoFmdDTO.cssv;
          row.control = this.getControlFieldData(this.eventFmdData.cssv, this.bidoFmdDTO.cssv);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[TSI]: {
          row.engineData = this.eventFmdData.tsi;
          row.fmdData = this.bidoFmdDTO.tsi;
          row.control = this.getControlFieldData(this.eventFmdData.tsi, this.bidoFmdDTO.tsi);
          break;
        }
        case this.ENGINE_TABLE_INFO_ARR[CSI]: {
          row.engineData = this.eventFmdData.csi;
          row.fmdData = this.bidoFmdDTO.csi;
          row.control = this.getControlFieldData(this.eventFmdData.csi, this.bidoFmdDTO.csi);
          break;
        }
        default: {
          // TODO
          break;
        }
      }
    });

    this.engineInfoData = _cloneDeep(this.engineInfoData);
  }

  /********************************
   * AIRCRAFT INFORMATION TAB OPERATIONS
   ********************************/
  private loadAircraftInformationTab() {
    this.aircraftInfoData = this.createTableStructure(this.AIRCRAFT_TABLE_INFO_ARR);
    const OPERATOR_NAME = 0;
    const AIRCRAFT_MODEL = 1;
    const AIRCRAFT_SERIAL = 2;
    const AIRCRAFT_TAIL = 3;
    const ENGINE_POSITION = 4;

    const fmdData = { ...this.bidoFmdDTO };

    this.aircraftInfoData.forEach((row) => {
      switch (row.info) {
        case this.AIRCRAFT_TABLE_INFO_ARR[OPERATOR_NAME]: {
          row.engineData = this.eventFmdData.operatorName;
          row.fmdData = fmdData.operatorName;
          row.control = this.getControlFieldData(this.eventFmdData.operatorName, fmdData.operatorName);
          break;
        }
        case this.AIRCRAFT_TABLE_INFO_ARR[AIRCRAFT_MODEL]: {
          row.engineData = this.eventFmdData.aircraftModel;
          row.fmdData = fmdData.aircraftModel;
          row.control = this.getControlFieldData(this.eventFmdData.aircraftModel, fmdData.aircraftModel);
          break;
        }
        case this.AIRCRAFT_TABLE_INFO_ARR[AIRCRAFT_SERIAL]: {
          row.engineData = this.eventFmdData.aircraftSerialNumber;
          row.fmdData = fmdData.aircraftSerialNumber;
          row.control = this.getControlFieldData(this.eventFmdData.aircraftSerialNumber, fmdData.aircraftSerialNumber);
          break;
        }
        case this.AIRCRAFT_TABLE_INFO_ARR[AIRCRAFT_TAIL]: {
          row.engineData = this.eventFmdData.aircraftTail;
          row.fmdData = fmdData.aircraftTail;
          row.control = this.getControlFieldData(this.eventFmdData.aircraftTail, fmdData.aircraftTail);
          break;
        }
        case this.AIRCRAFT_TABLE_INFO_ARR[ENGINE_POSITION]: {
          row.engineData = this.eventFmdData.enginePosition;
          row.fmdData = fmdData.enginePosition;
          row.control = this.getControlFieldData(this.eventFmdData.enginePosition, fmdData.enginePosition);
          break;
        }
        default: {
          break;
        }
      }
    });

    this.aircraftInfoData = _cloneDeep(this.aircraftInfoData);
  }

  /********************************
   * GETTING CONTROL FIELD DATA
   ********************************/
  private getControlFieldData(eventData, fmdData): boolean {
    let control = false;

    if (!!eventData) {
      if (!!fmdData) {
        if (eventData !== fmdData) {
          control = true;
        } else {
          control = false;
        }
      } else {
        control = false;
      }
    } else {
      if (!!fmdData) {
        control = true;
      } else {
        control = false;
      }
    }

    return control;
  }

  /********************************
   * EVENT INFORMATION TAB OPERATIONS
   ********************************/
  private loadEventInformationTab() {
    this.eventInfoData = this.createTableStructure(this.EVENT_TABLE_INFO_ARR);
    const EVENT_TYPE = 0;
    const DATE = 1;
    const EVENT_LOCATION = 2;
    const REPORTED_DATE = 3;
    const REPORTED_BY = 4;
    const CIRCUMSTANCES = 5;
    const SYMPTOM = 6;

    this.eventInfoData.forEach((row) => {
      switch (row.info) {
        case this.EVENT_TABLE_INFO_ARR[EVENT_TYPE]: {
          row.engineData = this.eventFmdData.eventType;
          row.fmdData = this.bidoFmdDTO.eventType;
          row.control = this.getControlFieldData(this.eventFmdData.eventType, this.bidoFmdDTO.eventType);
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[DATE]: {
          row.engineData = this.dateService.dateToString(this.eventFmdData.eventDate);
          row.fmdData = this.dateService.dateToString(this.bidoFmdDTO.eventDate);
          row.control = this.getControlFieldData(
            this.dateService.dateToString(this.eventFmdData.eventDate),
            this.dateService.dateToString(this.bidoFmdDTO.eventDate)
          );
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[EVENT_LOCATION]: {
          row.engineData = this.eventFmdData.eventLocation;
          row.fmdData = this.bidoFmdDTO.eventLocation;
          row.control = this.getControlFieldData(this.eventFmdData.eventLocation, this.bidoFmdDTO.eventLocation);
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[REPORTED_DATE]: {
          row.engineData = this.dateService.dateToString(this.eventFmdData.reportDate);
          row.fmdData = this.dateService.dateToString(this.bidoFmdDTO.reportDate);
          row.control = this.getControlFieldData(
            this.dateService.dateToString(this.eventFmdData.reportDate),
            this.dateService.dateToString(this.bidoFmdDTO.reportDate)
          );
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[REPORTED_BY]: {
          row.engineData = this.eventFmdData.reportedBy;
          row.fmdData = this.bidoFmdDTO.reportedBy;
          row.control = this.getControlFieldData(this.eventFmdData.reportedBy, this.bidoFmdDTO.reportedBy);
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[CIRCUMSTANCES]: {
          row.engineData = this.eventFmdData.eventCirconstancies;
          row.fmdData = this.bidoFmdDTO.eventCirconstancies;
          row.control = this.getControlFieldData(
            this.eventFmdData.eventCirconstancies,
            this.bidoFmdDTO.eventCirconstancies
          );
          break;
        }
        case this.EVENT_TABLE_INFO_ARR[SYMPTOM]: {
          row.engineData = this.eventFmdData.eventSymptoms;
          row.fmdData = this.bidoFmdDTO.eventSymptoms;
          row.control = this.getControlFieldData(this.eventFmdData.eventSymptoms, this.bidoFmdDTO.eventSymptoms);
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  /********************************
   * ACTION ON EVENT STATUS CHANGE
   ********************************/
  public onActionSelectFmdStatus() {
    const previousStatus = this.prevState;
    const currentStatus = this.bidoFmdDTO.statusState;

    if (
      AWPropertiesConstants.FMD_STATUS_DRAFT_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY !== currentStatus
    ) {
      // The drop-down list is automatically repositioned to the DRAFT value
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));
      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_DRAFT_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return false;
    }

    // Conditions on the transition from DRAFT status -> DRAFT +
    if (
      AWPropertiesConstants.FMD_STATUS_DRAFT_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === currentStatus
    ) {
      // The current status becomes the precedent for the next selection
      this.prevState = this.bidoFmdDTO.statusState;
    }

    if (
      (AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === currentStatus ||
        AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === currentStatus) &&
      !this.bidoFmdDTO.reference
    ) {
      // The drop-down list is automatically repositioned to the OPEN value
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_FMD_HAS_TO_BE_SAVED'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_OPEN_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    if (
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_DRAFT_KEY !== currentStatus &&
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY !== currentStatus
    ) {
      // The drop-down list is automatically repositioned to the DRAFT + value
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    // DRAFT + -> DRAFT or DRAFT + -> OPEN Status Requirements
    if (
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === previousStatus &&
      (AWPropertiesConstants.FMD_STATUS_DRAFT_KEY === currentStatus ||
        AWPropertiesConstants.FMD_STATUS_OPEN_KEY === currentStatus)
    ) {
      // The current status becomes the precedent for the next selection
      this.prevState = this.bidoFmdDTO.statusState;
    }

    if (
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_REFUSED_KEY !== currentStatus &&
      AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY !== currentStatus
    ) {
      // The drop-down list is automatically repositioned to the OPEN value
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_OPEN_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    // Conditions on the transition from the status of OPEN -> REFUSED or OPEN -> RECOMMENDED CLOSED
    if (
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY === previousStatus &&
      (AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === currentStatus ||
        AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === currentStatus)
    ) {
      // Initialization of the Reason field each time one goes to the "Refused" status
      if (AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === currentStatus) {
        this.bidoFmdDTO.refusalReason = undefined;
      }
      // The current status becomes the precedent for the next selection
      this.prevState = this.bidoFmdDTO.statusState;
    }

    // Different evolution of REFUSED -> DRAFT +
    if (
      AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY !== currentStatus
    ) {
      // The drop-down list is automatically repositioned to the value REFUSED
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_REFUSED_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    // Conditions on changing the status of REFUSED -> DRAFT +
    if (
      AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === currentStatus
    ) {
      // The current status becomes the precedent for the next selection
      this.prevState = this.bidoFmdDTO.statusState;
    }

    // Different Evolution of RECOMMENDED CLOSED -> CLOSED or RECOMMENDED CLOSED -> OPEN
    if (
      AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_CLOSED_KEY !== currentStatus &&
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY !== currentStatus
    ) {
      // The drop-down list is automatically repositioned to the value RECOMMENDED CLOSED
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    // Evolution de RECOMMENDED CLOSED -> CLOSED
    if (
      AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === currentStatus
    ) {
      // for rights
      if (!this.hasUpdateFMDRights) {
        this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION_RIGHT'));

        setTimeout(() => {
          this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY;
        }, FmdEventFormComponent.TIMEOUT_LIMIT);

        return;
      } else {
        let invFindings;
        if (!!this.bidoFmdDTO.investigationFindings) {
          invFindings = this.bidoFmdDTO.investigationFindings;
        } else if (!!this.eventFmdData.investigationFindings) {
          invFindings = this.eventFmdData.investigationFindings;
        }
        if (
          !this.bidoFmdDTO.closeoutReason ||
          !this.bidoFmdDTO.closureDate ||
          !this.bidoFmdDTO.correctiveAction ||
          !invFindings
        ) {
          this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_FMD_CLOSEOUT_MANDATORY_FIELDS'));
          setTimeout(() => {
            this.bidoFmdDTO.statusState = this.prevState;
          }, FmdEventFormComponent.TIMEOUT_LIMIT);

          return;
        } else if (!!this.bidoFmdDTO.closureDate && this.endAfterStart(this.bidoFmdDTO.closureDate, new Date())) {
          this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_FMD_CLOSURE_DATE_IN_THE_FUTURE'));
          setTimeout(() => {
            this.bidoFmdDTO.statusState = this.prevState;
          }, FmdEventFormComponent.TIMEOUT_LIMIT);

          return;
        } else {
          this.prevState = this.bidoFmdDTO.statusState;
        }
      }
    }
    if (
      AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY === currentStatus
    ) {
      // Le statut actuel devient le précédent pour la prochaine sélection
      this.prevState = this.bidoFmdDTO.statusState;
    }

    if (
      AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY !== currentStatus
    ) {
      // La liste déroulante est automatiquement repositionnée sur la valeur CLOSED
      this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION'));

      setTimeout(() => {
        this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_CLOSED_KEY;
      }, FmdEventFormComponent.TIMEOUT_LIMIT);

      return;
    }

    if (
      AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === previousStatus &&
      AWPropertiesConstants.FMD_STATUS_OPEN_KEY === currentStatus
    ) {
      if (!this.hasUpdateFMDRights) {
        this.messageService.showWarningMessage(this.getTranslateKey('MSG_WARNING_STATUS_EVOLUTION_RIGHT'));

        setTimeout(() => {
          this.bidoFmdDTO.statusState = AWPropertiesConstants.FMD_STATUS_CLOSED_KEY;
        }, FmdEventFormComponent.TIMEOUT_LIMIT);

        return;
      } else {
        this.prevState = this.bidoFmdDTO.statusState;
      }
    }

    this.isStatusClosed = AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === currentStatus ? true : false;
  }

  private endAfterStart(start: Date, end: Date): boolean {
    return start.getTime() >= end.getTime();
  }

  /********************************
   * SAVE OPERATIONS
   ********************************/
  public saveFMDEvent() {
    if (
      this.bidoFmdDTO.statusState === AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY ||
      this.bidoFmdDTO.statusState === AWPropertiesConstants.FMD_STATUS_OPEN_KEY
    ) {
      this.setReferenceNumberWithInputField();
    }
    this.bidoFmdDTO.notificationCode = this.bidoNotificationDTO.notificationCode;

    // update bidoFmdDTO in case fmd data columns have been edited
    if (this.getFDMIsFDE) {
      this.bidoFmdDTO.operatorName = this.aircraftInfoData[0].fmdData;
      this.bidoFmdDTO.aircraftSerialNumber = this.aircraftInfoData[2].fmdData;
    }

    if (!this.isInitialFindingsFmdReadOnly()) {
      this.bidoFmdDTO.eventNarrative = this.initialFindingsData[0].fmdData;
      this.bidoFmdDTO.initialFinding = this.initialFindingsData[1].fmdData;
      this.bidoFmdDTO.investigationFindings = this.closeoutInformationData[2].fmdData;
    }

    // generate input for saving documents
    const saveDocsInput: UpdateFieldsOfBidoDocumentationInput[] = [];

    this.documentsAdded.forEach((doc) => {
      const document: UpdateFieldsOfBidoDocumentationInput = {
        docName: StringUtils.orEmpty(doc.docName),
        docDescription: StringUtils.orEmpty(doc.docDescription),
        publicationDate: doc.docPublicationDate,
        docCategory: doc.docCategory,
        bidoDocumentationDTO: doc
      };

      document.bidoDocumentationDTO.notificationCode = this.bidoNotificationDTO.notificationCode;
      document.bidoDocumentationDTO.fmdId = this.bidoFmdDTO.fmdId;
      document.bidoDocumentationDTO.bidNotificationCode = this.bidoNotificationDTO.notificationCode;
      document.isUpdate = false;

      saveDocsInput.push(document);
    });

    this.documentsUpdated.forEach((doc) => {
      const document: UpdateFieldsOfBidoDocumentationInput = {
        docName: StringUtils.orEmpty(doc.docName),
        docDescription: StringUtils.orEmpty(doc.docDescription),
        publicationDate: doc.docPublicationDate,
        docCategory: doc.docCategory,
        bidoDocumentationDTO: doc
      };

      document.bidoDocumentationDTO.notificationCode = this.bidoNotificationDTO.notificationCode;
      document.bidoDocumentationDTO.fmdId = this.bidoFmdDTO.fmdId;
      document.bidoDocumentationDTO.bidNotificationCode = this.bidoNotificationDTO.notificationCode;
      document.isUpdate = true;

      saveDocsInput.push(document);
    });

    // generate input for deleting documents
    const deleteDocsInput: BidoDocumentationDTOId[] = [];
    this.documentsRemoved.forEach((doc) => {
      deleteDocsInput.push({ docCode: StringUtils.orEmpty(doc.docCode) });
    });

    this.bidoFmdDTO.editionNumber = !!this.bidoFmdDTO.editionNumber ? this.bidoFmdDTO.editionNumber : 0;

    // observables for saving the whole screen
    const saveFMDData = this.eventCreateService.saveFMDEvent(this.bidoFmdDTO);
    const saveDocumentTable = this.eventCreateService.updateFieldsOfBidoDocumentationFMD(saveDocsInput);
    const deleteDocuments = this.eventCreateService.removeBidoDocumentationFMD(deleteDocsInput);

    this.showSaveSpinner = true;
    forkJoin([saveFMDData, saveDocumentTable, deleteDocuments]).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveEvent'));
        this.updateOpenMode(ComponentOpenMode.Write);
        this.reloadFMDEvent();
        this.showSaveSpinner = false;
      },
      (error) => {
        this.messageService.showErrorMessage(error.error.errorDesc);
        this.showSaveSpinner = false;
      }
    );
  }

  /**********************
   * INITIAL FINDINGS TAB
   *********************/
  public loadInitialFindingsTab(): void {
    this.initialFindingsData = this.createTableStructure(this.INITIAL_FINDINGS_TABLE_INFO_ARR);

    this.initialFindingsData.forEach((row) => {
      switch (row.info) {
        case this.INITIAL_FINDINGS_TABLE_INFO_ARR[0]:
          {
            row.engineData = this.eventFmdData.eventNarrative;
            row.fmdData = this.bidoFmdDTO.eventNarrative;
            row.control = this.getControlFieldData(this.eventFmdData.eventNarrative, this.bidoFmdDTO.eventNarrative);
          }
          break;
        case this.INITIAL_FINDINGS_TABLE_INFO_ARR[1]:
          {
            row.engineData = this.eventFmdData.initialFinding;
            row.fmdData = this.bidoFmdDTO.initialFinding;
            row.control = this.getControlFieldData(this.eventFmdData.initialFinding, this.bidoFmdDTO.initialFinding);
          }
          break;
        default:
          break;
      }
    });
  }

  public isInitialFindingsFmdReadOnly(): boolean {
    if (!!this.bidoFmdDTO.statusState) {
      if (!!this.bidoFmdDTO.editionNumber && this.bidoFmdDTO.editionNumber !== 1) {
        return true;
      }
      if (this.bidoFmdDTO.statusState === AWPropertiesConstants.FMD_STATUS_CLOSED_KEY) {
        return true;
      }
    }

    return !this.hasUpdateFMDRights;
  }

  /**************************
   * IS Refusal reason Visible
   *************************/
  public getIsRefusalReasonReadOnly(): boolean {
    if (!!this.bidoFmdDTO.statusState) {
      if (!!this.bidoFmdDTO.editionNumber && this.editionNumberMap.length > 0) {
        if (this.bidoFmdDTO.editionNumber !== this.editionNumberMap.length) {
          return true;
        }
      }
      if (
        AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY === this.bidoFmdDTO.statusState ||
        AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === this.bidoFmdDTO.statusState
      ) {
        return true;
      } else if (
        AWPropertiesConstants.FMD_STATUS_DRAFT_KEY === this.bidoFmdDTO.statusState ||
        AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === this.bidoFmdDTO.statusState ||
        AWPropertiesConstants.FMD_STATUS_OPEN_KEY === this.bidoFmdDTO.statusState ||
        AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === this.bidoFmdDTO.statusState
      ) {
        return this.getIsFieldReadOnly();
      }
    }

    return !this.hasUpdateFMDRights;
  }

  public getRefusalReasonVisibility(): boolean {
    if (!!this.bidoFmdDTO.statusState) {
      if (AWPropertiesConstants.FMD_STATUS_REFUSED_KEY === this.bidoFmdDTO.statusState) {
        return true;
      }
    }

    return false;
  }

  /**************************
   * Is field readonly
   *************************/
  public getIsFieldReadOnly(): boolean {
    const currentStatus = this.bidoFmdDTO.statusState;

    return (
      !this.hasUpdateFMDRights ||
      (AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === this.prevState &&
        AWPropertiesConstants.FMD_STATUS_OPEN_KEY !== currentStatus)
    );
  }

  /**************************
   * Is Closure date readonly
   *************************/
  public getIsClosureDateReadOnly() {
    if (!!this.bidoFmdDTO.statusState) {
      if (!!this.bidoFmdDTO.editionNumber && this.editionNumberMap.length > 0) {
        if (this.bidoFmdDTO.editionNumber !== this.editionNumberMap.length) {
          return true;
        }
      }
      if (AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === this.bidoFmdDTO.statusState) {
        return true;
      }
    }

    return !this.hasUpdateFMDRights;
  }

  /**************************
   * Is FMD status readonly
   *************************/
  public getIsFmdStatusReadOnly(): boolean {
    if (!!this.bidoFmdDTO.statusState) {
      if (!!this.bidoFmdDTO.editionNumber && this.editionNumberMap.length > 0) {
        if (this.bidoFmdDTO.editionNumber !== this.editionNumberMap.length) {
          return true;
        }
      }
    }

    return !this.hasUpdateFMDRights;
  }

  /**************************
   * Update form visiblity
   *************************/
  public getUpdateFormVisibility(): boolean {
    if (this.getIsFMDFieldReadOnly()) {
      return false;
    }

    return true;
  }

  /**************************
   * CLOSEOUT INFORMATION TAB
   *************************/
  public loadCloseoutInformationTab(): void {
    this.closeoutInformationData = this.createTableStructure(this.CLOSEOUT_INFORMATION_TABLE_INFO_ARR);

    this.closeoutInformationData.forEach((row) => {
      switch (row.info) {
        case this.CLOSEOUT_INFORMATION_TABLE_INFO_ARR[0]:
          {
            row.engineData = this.eventFmdData.pn;
            row.fmdData = this.bidoFmdDTO.pn;
            row.control = this.getControlFieldData(this.eventFmdData.pn, this.bidoFmdDTO.pn);
          }
          break;
        case this.CLOSEOUT_INFORMATION_TABLE_INFO_ARR[1]:
          {
            row.engineData = this.eventFmdData.pnDesignation;
            row.fmdData = this.bidoFmdDTO.pnDesignation;
            row.control = this.getControlFieldData(this.eventFmdData.pnDesignation, this.bidoFmdDTO.pnDesignation);
          }
          break;
        case this.CLOSEOUT_INFORMATION_TABLE_INFO_ARR[2]:
          {
            row.engineData = this.eventFmdData.investigationFindings;
            row.fmdData = this.bidoFmdDTO.investigationFindings;
            row.control = this.getControlFieldData(
              this.eventFmdData.investigationFindings,
              this.bidoFmdDTO.investigationFindings
            );
          }
          break;
        default:
          break;
      }
    });
  }

  /***************
   * DOCUMENTS TAB
   **************/
  private loadDocuments(): void {
    const input: BidoDocumentationFMDInput = {
      notificationCode: this.bidoNotificationDTO.notificationCode,
      fmdId: this.bidoFmdDTO.fmdId
    };
    this.eventCreateService.findBidoDocumentationsByMandantAndNotificationCodeAndFmdId(input).subscribe((results) => {
      this.documents = [];
      this.documents = ListUtils.orEmpty(results).filter((document) => !!document.docName);

      this.documentTable = this.documents.map((document) => this.createDocumentRow(document));
    });
  }

  public downloadFiles(): void {
    this.selectedDocuments.forEach((documentRow) => {
      FileUtils.downloadFile(documentRow._obj.docFile, documentRow._obj.docName);
    });
  }

  public deleteDocuments(): void {
    const partialMessageKey =
      this.selectedDocuments.length > 1 ? 'confirmDeleteSelectedDocuments' : 'confirmDeleteSelectedDocument';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedDocuments.forEach((selectedDocumentRow) => {
          const documentsAddedWithoutSelection = this.documentsAdded.filter(
            (document) => document.docName !== selectedDocumentRow._obj.docName
          );
          // list of added objects contains the selection
          if (this.documentsAdded.length !== documentsAddedWithoutSelection.length) {
            // Remove selection from added objects
            this.documentsAdded = documentsAddedWithoutSelection;
          } else {
            const documentsUpdatedWithoutSelection = this.documentsUpdated.filter(
              (document) => document.docName !== selectedDocumentRow._obj.docName
            );
            // list of updated objects contains the selection
            if (this.documentsUpdated.length !== documentsUpdatedWithoutSelection.length) {
              // Remove selection from added objects
              this.documentsUpdated = documentsUpdatedWithoutSelection;
            }

            this.documentsRemoved = [...this.documentsRemoved, selectedDocumentRow._obj];
          }
        });

        this.documents = this.documents.filter((document) => {
          return !this.selectedDocuments.some((selectedDocumentRow) =>
            this.areSameDocument(document, selectedDocumentRow._obj)
          );
        });

        this.documentTable = this.documentTable.filter((documentRow) => {
          return !this.selectedDocuments.some((selectedDocumentRow) => {
            return this.areSameDocument(documentRow._obj, selectedDocumentRow._obj);
          });
        });

        this.selectedDocuments = [];
      }
    });
  }

  public editDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocumentIndex = this.documents.findIndex((document) =>
        this.areSameDocument(document, this.selectedDocuments[0]._obj)
      );

      this.currentDocument = { ...this.selectedDocuments[0]._obj };
      this.documentDialogOpenMode = ComponentOpenMode.Write;
      this.showDocumentDialog = true;
    }
  }

  public openDocument(): void {
    if (this.selectedDocuments.length === 1) {
      this.currentDocument = this.selectedDocuments[0]._obj;
      this.currentDocumentIndex = -1;
      this.documentDialogOpenMode = ComponentOpenMode.Read;
      this.showDocumentDialog = true;
    }
  }

  public openDocumentsTab(): void {
    // this.currentTabId = this.tabDocumentsId;
  }

  public uploadDocument(event: { files: File[] }, fileUploader: FileUpload): void {
    if (!!event.files) {
      const file: File = event.files[0];

      // Check if the file already exists
      const fileExists = this.documents.some((document) => document.docName === file.name);
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

            this.documents = [...this.documents, document];
            this.documentsAdded = [...this.documentsAdded, document];
            this.documentTable = [...this.documentTable, this.createDocumentRow(document)];
          }
        });
      }

      fileUploader.clear();
    }
  }

  public onAddDocument(document: BidoDocumentationDTO): void {
    if (!!document) {
      if (this.currentDocumentIndex !== -1) {
        // edit case
        this.documents[this.currentDocumentIndex] = document;
        this.documentTable[this.currentDocumentIndex] = this.createDocumentRow(document);

        const editedRowInAddedList = this.documentsAdded.some((doc) => this.areSameDocument(doc, document));
        const editedRowInUpdatedList = this.documentsUpdated.some((doc) => this.areSameDocument(doc, document));

        if (editedRowInAddedList) {
          const indexInAddedList = this.documentsAdded.findIndex((doc) => this.areSameDocument(doc, document));
          this.documentsAdded[indexInAddedList] = document;
        } else if (editedRowInUpdatedList) {
          const indexInUpdatedList = this.documentsUpdated.findIndex((doc) => this.areSameDocument(doc, document));
          this.documentsUpdated[indexInUpdatedList] = document;
        } else {
          this.documentsUpdated.push(document);
        }
      }
    }

    this.selectedDocuments = [];
  }

  private areSameDocument(obj1: BidoDocumentationDTO | undefined, obj2: BidoDocumentationDTO | undefined): boolean {
    if (!obj1 || !obj2) {
      return false;
    } else {
      return !!obj1.docName && !!obj2.docName && obj1.docName === obj2.docName;
    }
  }

  private createDocumentRow(document: BidoDocumentationDTO): DocumentRow {
    const selectedDocumentType = this.documentTypes.find(
      (documentType) => !!document.docCategory && (documentType.value as string) === document.docCategory
    );

    const documentRow: DocumentRow = {
      docExtension: this.formatDocExtension(document),
      docName: document.docName as string,
      docPublicationDate: this.dateService.dateToString(document.docPublicationDate),
      docSize: this.formatDocSize(document),
      docType: !!selectedDocumentType ? StringUtils.orEmpty(selectedDocumentType.label) : '',
      _obj: document
    };

    return documentRow;
  }

  private formatDocExtension(document: BidoDocumentationDTO): string {
    return FileUtils.getExtension(document.docName).toUpperCase();
  }

  private formatDocSize(document: BidoDocumentationDTO): string {
    return !!document.docFile ? FileUtils.getFormattedSize(document.docFile.length) : '';
  }

  /*****************
   * Edit XLS Format
   ****************/

  public editXlsFormat(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('downloadFMDReport'),
      accept: () => {
        if (!!this.bidoNotificationDTO.notificationCode) {
          this.eventCreateService.getFmdReport(this.bidoNotificationDTO.notificationCode).subscribe(
            (result) => {
              const date: Date = new Date();
              if (this.getFDMIsFDE) {
                FileUtils.downloadFile(
                  result,
                  `FMD_FDE_${this.bidoNotificationDTO.familyVariantCode}_${date.getMilliseconds()}.xls`
                );
              } else {
                FileUtils.downloadFile(
                  result,
                  `FMD_${this.bidoNotificationDTO.familyVariantCode}_${date.getMilliseconds()}.xls`
                );
              }
            },
            (error) => {
              this.messageService.showRawErrorMessage(error.error.errorDesc);
            }
          );
        }
      }
    });
  }

  /****************
   * Export FMD E5X
   ***************/
  private hasManageRights() {
    this.eventCreateService.hasManageRights().subscribe((result) => {
      this.hasUpdateFMDRights = result;
    });
  }

  public exportFmdE5X(): void {
    const input: BidoDocumentationFMDInput = {
      fmdId: this.bidoFmdDTO.fmdId,
      notificationCode: this.bidoFmdDTO.notificationCode
    };
    this.showExportFMDE5xSpinner = true;
    this.eventCreateService
      .generateE5XFileFromFMD(input)
      .pipe(
        finalize(() => {
          this.showExportFMDE5xSpinner = false;
        })
      )
      .subscribe((result) => {
        FileUtils.downloadFile(result.fileContent, result.fileName);
      });
  }

  public exportFmdE5XEnabled(): boolean {
    let response: boolean;
    response =
      !!this.databaseFmdDto &&
      (this.databaseFmdDto.statusState === AWPropertiesConstants.FMD_STATUS_OPEN_KEY ||
        this.databaseFmdDto.statusState === AWPropertiesConstants.FMD_STATUS_RECOMMENDED_KEY ||
        this.databaseFmdDto.statusState === AWPropertiesConstants.FMD_STATUS_CLOSED_KEY)
        ? true
        : false;

    return response;
  }

  /****************
   * Reference
   ****************/
  private getReferenceSplitVisibility() {
    if (
      AWPropertiesConstants.FMD_STATUS_DRAFT_KEY !== this.bidoFmdDTO.statusState &&
      (!!this.referenceFMDYear || !!this.referenceFDEYear || !!this.referenceFMDNumber || !!this.referenceFDENumber)
    ) {
      // wdContext.currentContextElement().setReferenceSplitState(WDState.REQUIRED);
      const editionNumber = !!this.bidoFmdDTO.editionNumber ? this.bidoFmdDTO.editionNumber : 1;

      if (
        AWPropertiesConstants.FMD_STATUS_DRAFT_PLUS_KEY === this.bidoFmdDTO.statusState ||
        (AWPropertiesConstants.FMD_STATUS_OPEN_KEY === this.bidoFmdDTO.statusState && editionNumber === 1)
      ) {
        this.referenceSplitVisibility = this.getIsFMDFieldReadOnly();
      } else {
        this.referenceSplitVisibility = true;
      }
      this.referenceSplitFDEVisibility = this.getFDM_FDEVisibility();
      this.referenceSplitFMDVisibility = this.getFDM_FMDVisibility();

      return true;
    } else {
      this.referenceSplitVisibility = true;
      this.referenceSplitFDEVisibility = false;
      this.referenceSplitFMDVisibility = false;

      return false;
    }
  }

  public getFDM_FDEVisibility(): boolean {
    if (this.getFDMIsFDE) {
      return true;
    }

    return false;
  }

  public getFDM_FMDVisibility(): boolean {
    if (this.getFDMIsFDE) {
      return false;
    }

    return true;
  }

  public getIsFMDFieldReadOnly() {
    if (!!this.bidoFmdDTO.statusState) {
      if (this.editionNumberMap.length > 0 && !!this.bidoFmdDTO.editionNumber) {
        if (this.bidoFmdDTO.editionNumber !== this.editionNumberMap.length) {
          return true;
        }
      }
      if (AWPropertiesConstants.FMD_STATUS_CLOSED_KEY === this.bidoFmdDTO.statusState) {
        return true;
      }
    }

    return !this.hasUpdateFMDRights;
  }

  public getUpdateFDEReferenceVisibility() {
    if (this.getFDMIsFDE) {
      if (!this.getIsFMDFieldReadOnly() && this.getReferenceSplitVisibility() && this.referenceSplitVisibility) {
        return true;
      }
    }

    return false;
  }

  public updateFDEReferenceVisibility() {
    const fMDReferenceOutputDTO: FMDReferenceOutputDTO = {
      reference: this.reference,
      referenceFDELetter: this.referenceFDELetter,
      referenceFDENumber: this.referenceFDENumber,
      referenceFDEYear: this.referenceFDEYear
    };

    this.updateFDERefData = fMDReferenceOutputDTO;

    this.updateFDERefDialogVisibility = true;
  }

  public onUpdateFDERef(ev: FMDReferenceOutputDTO) {
    this.referenceFDELetter = ev.referenceFDELetter;
    this.referenceFDENumber = ev.referenceFDENumber;
    this.referenceFDEYear = ev.referenceFDEYear;
  }

  // Helper method
  public getTranslatedText(key: string): string {
    let response = '';
    this.translateService.get(`${this.getComponentName()}.${key}`).subscribe((result) => {
      response = result as string;
    });

    return response;
  }

  private getDocumentTypes(): void {
    this.propertiesService.getValue('getDocEventCategoryMap').subscribe((results) => {
      results.forEach((res) => {
        const selectItem: SelectItem = {
          label: res.label,
          value: res.value
        };
        this.documentTypes.push(selectItem);
      });
    });
  }
  // Open Event UC
  public openEventAsset(code: string) {
    const bidoNotificationDTOId: BidoNotificationDTOId = {
      notificationCode: code
    };
    this.eventCreateService.findBidoNotification(bidoNotificationDTOId).subscribe((res: BidoNotificationDTO) => {
      if (!!res) {
        const bidoNotificationDTO: BidoNotificationDTO = {
          bidoNotificationTypeDTO: {
            typeCode: res.typeCode
          },
          notificationCode: res.notificationCode,
          typeCode: res.typeCode
        };
        if (!!res.bidoNotificationTypeDTO && res.bidoNotificationTypeDTO.typeCategory === '5-def') {
          this.openDefect(bidoNotificationDTO.notificationCode);
        } else {
          this.openEventUC(bidoNotificationDTO, ComponentOpenMode.Read);
        }
      }
    });
  }

  public openDefect(objectId: string | undefined): void {
    if (!!objectId) {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.FLE_DEFECT_FORM,
        openMode: ComponentOpenMode.Read
      };

      const defectId: BidoNotificationDTOId = {
        notificationCode: objectId
      };
      data.objectId = this.serializationService.serialize(defectId);

      const labelKey = 'transaction.' + data.componentId;
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
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
      // data.objectId = this.serializationService.serialize(objectId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setReferenceNumberWithInputField(): void {
    if (!!this.bidoFmdDTO.reference) {
      if (this.referenceSplitFMDVisibility) {
        if (!!this.referenceFMDNumber) {
          const referenceWithoutNumber = this.bidoFmdDTO.reference.substr(
            0,
            this.bidoFmdDTO.reference.lastIndexOf('-') + 1
          );
          this.bidoFmdDTO.reference = referenceWithoutNumber + this.referenceFMDNumber;
        }
      } else {
        if (!!this.referenceFDENumber) {
          const referenceWithoutNumber = this.bidoFmdDTO.reference.substr(
            0,
            this.bidoFmdDTO.reference.lastIndexOf('-') + 1
          );
          this.bidoFmdDTO.reference = referenceWithoutNumber + this.referenceFDENumber;
        }
      }
    }
  }

  public showStatus(): void {
    const overlayRef = this._overlayService.openWithPositionCenter<string | undefined>({
      content: ObjectStatusComponent,
      data: {
        currentAuthor: this.bidoFmdDTO.statusUser,
        currentDate: this.bidoFmdDTO.statusDate,
        currentStatus: {
          label: this._formatSelectOption.transform(this.bidoFmdDTO.statusState, this.fmdStatusMap),
          value: this.bidoFmdDTO.statusState
        },
        nextStatuses: this.fmdStatusMap
      }
    });

    overlayRef.afterClosed$.subscribe({
      next: (event) => {
        if (event.data) {
          this.bidoFmdDTO.statusState = event.data;
          this.saveFMDEvent();
        }
      }
    });
  }
}
