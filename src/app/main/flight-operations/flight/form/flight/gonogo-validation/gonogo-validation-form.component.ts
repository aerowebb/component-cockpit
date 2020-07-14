import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { PageTocEntry } from '../../../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../../shared/services/date.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { FindCsnAndTsnValuesInput } from '../../../../../../shared/types/api-input-types/airworthiness-management/find-csn-and-tsn-values-input.interface';
import { GoNoGoValidationInput } from '../../../../../../shared/types/api-input-types/fleet-business/gonogo-validation-input.interface';
import { ValidateGoNoGoInput } from '../../../../../../shared/types/api-input-types/fleet-business/validate-gonogo-input.interface';
import { GoNoGoValidationDefectLWO } from '../../../../../../shared/types/api-output-types/fleet-business/gonogo-validation-defect-lwo.interface';
import { GoNoGoValidationReportElementDTO } from '../../../../../../shared/types/api-output-types/fleet-business/gonogo-validation-report-element-dto.interface';
import { BidoCustomerDTO } from '../../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoNotificationDTOId } from '../../../../../../shared/types/api-types/bido-notification-dto-id.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';

import { GonogoValidationFormService } from './gonogo-validation-form.service';

interface DefectRow {
  control: string;
  context: string;
  critical: boolean;
  date: string;
  description: string;
  eventCode: string;
  flightRestriction: string;
  lastAuthor: string;
  linkedEvent: string;
  location: string;
  logNumber: string;
  name: string;
  rootCause: string;
  title: string;
  _expand: boolean;
}

interface ReportElementRow {
  control: string;
  controlAlt: string;
  currentValue: string;
  description: string;
  expectedValue: string;
  id: string;
}

@Component({
  selector: 'aw-gonogo-validation-form',
  styleUrls: ['./gonogo-validation-form.component.scss'],
  templateUrl: './gonogo-validation-form.component.html'
})
export class GonogoValidationFormComponent extends GenericComponent implements OnInit {
  public static readonly ACRS_EVENT_ANCHOR_ID: string = 'acrsEventAnchor';
  public static readonly AIRCRAFT_ANCHOR_ID: string = 'aircraftAnchor';
  public static readonly DEFECTS_TO_PROCESS_ANCHOR_ID: string = 'defectsToProcessAnchor';
  public static readonly FLIGHT_ANCHOR_ID: string = 'flightAnchor';
  public static readonly GONOGO_VALIDATION_ANCHOR_ID: string = 'gonogoValidationAnchor';
  public static readonly MISSION_ABILITY_ANCHOR_ID: string = 'missionAbilityAnchor';
  public static readonly MISSION_AVAILABILITY_ANCHOR_ID: string = 'missionAvailabilityAnchor';

  public readonly component: typeof GonogoValidationFormComponent;
  public readonly controlConfigConstants: typeof ControlConfigConstants;

  public componentContext: string;

  public acrsAvailabilityTable: ReportElementRow[];
  public acrsAvailabilityTableColList: TableColumn[];
  public acrsAvailabilityTableLoading: boolean;
  public acrsEventAlert: string | undefined;
  public acrsEventComment: string;
  public acrsEventDate: string;
  public acrsEventStatus: string;
  public aircraftCsn: string;
  public aircraftTsn: string;
  public aircraftValuesLoading: boolean;
  public defectTable: DefectRow[];
  public defectTableColList: TableColumn[];
  public defectTableLoading: boolean;
  public equipment: BidoEquipmentDTO;
  public equipmentStatus: string;
  public gonogoValidationComment: string | undefined;
  public gonogoValidationCommentReadOnly: boolean;
  public labelCsn: string;
  public labelTsn: string;
  public missionAbilityTable: ReportElementRow[];
  public missionAbilityTableColList: TableColumn[];
  public missionAbilityTableLoading: boolean;
  public missionAvailabilityTable: ReportElementRow[];
  public missionAvailabilityTableColList: TableColumn[];
  public missionAvailabilityTableLoading: boolean;
  public missionEquipment: BidoMissionEquipmentDTO | undefined;
  public missionEquipmentCustomer: string;
  public missionEquipmentDuration: string;
  public missionEquipmentStartDate: string;
  public missionEquipmentStatus: string;
  public missionEquipmentType: string;

  @Input()
  public missionCode: string;
  @Input()
  public occurrence: number;
  @Input()
  public equipmentCode: string;
  @Input()
  public openModeGoNoGo: ComponentOpenMode;
  @Output()
  public onValidate: EventEmitter<void> = new EventEmitter();

  private flightCustomerList: BidoCustomerDTO[];
  private flightStatusList: LabelValue<string>[];
  private flightTypeList: LabelValue<string>[];
  private operationalStatusList: LabelValue<string>[];

  // Table of content ***********************************************************

  @ViewChild(GonogoValidationFormComponent.ACRS_EVENT_ANCHOR_ID)
  public acrsEventEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.AIRCRAFT_ANCHOR_ID)
  public aircraftEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.DEFECTS_TO_PROCESS_ANCHOR_ID)
  public defectsToProcessEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.FLIGHT_ANCHOR_ID)
  public flightEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.GONOGO_VALIDATION_ANCHOR_ID)
  public gonogoValidationEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.MISSION_ABILITY_ANCHOR_ID)
  public missionAbilityEltRef: ElementRef;

  @ViewChild(GonogoValidationFormComponent.MISSION_AVAILABILITY_ANCHOR_ID)
  public missionAvailabilityCheckEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public constructor(
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    private readonly gonogoValidationFormService: GonogoValidationFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write);

    this.component = GonogoValidationFormComponent;
    this.controlConfigConstants = ControlConfigConstants;

    this.onBeforeLoadOnce();
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_GONOGO_VALIDATION_FORM;
  }

  // ****************************************************************************

  public ngOnInit(): void {
    super.updateOpenMode(this.openModeGoNoGo);

    this.setTableOfContent();

    this.onBeforeLoad();

    this.componentContext = this.missionCode;

    this.onLoad();
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.acrsAvailabilityTable = [];
    this.acrsAvailabilityTableLoading = false;
    this.acrsEventAlert = undefined;
    this.acrsEventComment = '';
    this.acrsEventDate = '';
    this.acrsEventStatus = '';
    this.aircraftCsn = '';
    this.aircraftTsn = '';
    this.aircraftValuesLoading = false;
    this.defectTable = [];
    this.defectTableLoading = false;
    this.equipment = {};
    this.equipmentStatus = '';
    this.gonogoValidationComment = undefined;
    this.gonogoValidationCommentReadOnly = false;
    this.missionAbilityTable = [];
    this.missionAbilityTableLoading = false;
    this.missionAvailabilityTable = [];
    this.missionAvailabilityTableLoading = false;
    this.missionEquipment = {};
    this.missionEquipmentCustomer = '';
    this.missionEquipmentDuration = '';
    this.missionEquipmentStartDate = '';
    this.missionEquipmentStatus = '';
    this.missionEquipmentType = '';
  }

  public onLoad(): void {
    this.acrsAvailabilityTableLoading = true;
    this.aircraftValuesLoading = true;
    this.defectTableLoading = true;
    this.missionAbilityTableLoading = true;
    this.missionAvailabilityTableLoading = true;

    forkJoin([
      this.loadFlightCustomerList(),
      this.loadFlightStatusList(),
      this.loadFlightTypeList(),
      this.loadOperationalStatusList()
    ]).subscribe(([flightCustomerList, flightStatusList, flightTypeList, operationalStatusList]) => {
      this.flightCustomerList = ListUtils.orEmpty(flightCustomerList);
      this.flightStatusList = ListUtils.orEmpty(flightStatusList);
      this.flightTypeList = ListUtils.orEmpty(flightTypeList);
      this.operationalStatusList = ListUtils.orEmpty(operationalStatusList);

      this.loadEquipmentAndMissionEquipment();
    });
  }

  private onBeforeLoadOnce(): void {
    this.loadLabelCsn();
    this.loadLabelTsn();

    this.setAcrsAvailabilityTableColList();
    this.setDefectTableColList();
    this.setMissionAbilityTableColList();
    this.setMissionAvailabilityTableColList();
  }

  // ****************************************************************************

  public openAssetReview(): void {
    const objectId = {
      equipmentCodeList: [this.equipmentCode]
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_ASSET_REVIEW_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openDefect(eventCode: string): void {
    const objectId: BidoNotificationDTOId = {
      notificationCode: eventCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_DEFECT_FORM,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openEvent(eventCode: string): void {
    const objectId: BidoNotificationDTOId = {
      notificationCode: eventCode
    };
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLE_EVENT_CREATE,
      objectId: this.serializationService.serialize(objectId),
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public toggleDefectTableRowDetailsVisibility(row: DefectRow): void {
    row._expand = !row._expand;
  }

  public validateGonogo(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('warningOnCountersUpdate'),
      accept: () => {
        const input: ValidateGoNoGoInput = {
          relatedEquipment: this.equipment,
          missionCode: this.missionCode,
          missionOccurence: this.occurrence,
          comment: this.gonogoValidationComment as string
        };
        this.gonogoValidationFormService.validateGoNoGo(input).subscribe(() => {
          this.gonogoValidationCommentReadOnly = true;

          const flightStatus = this.flightStatusList.find(
            (elt) => elt.value === AWPropertiesConstants.FLIGHT_STATUS_GO_VALIDATED
          );
          this.missionEquipmentStatus = flightStatus ? flightStatus.label : '';
          this.onValidate.emit();
        });
      }
    });
  }

  private createDefectRow(defect: GoNoGoValidationDefectLWO): DefectRow {
    const defectRow: DefectRow = {
      control: StringUtils.orEmpty(defect.control),
      context: StringUtils.orEmpty(defect.context),
      critical: ObjectUtils.isDefined(defect.critical) ? (defect.critical as boolean) : false,
      date: this.dateService.dateToString(defect.date),
      description: StringUtils.orEmpty(defect.description),
      eventCode: StringUtils.orEmpty(defect.eventCode),
      flightRestriction: StringUtils.orEmpty(defect.flightRestriction),
      lastAuthor: StringUtils.orEmpty(defect.lastAuthor),
      linkedEvent: StringUtils.orEmpty(defect.linkedEvent),
      location: StringUtils.orEmpty(defect.location),
      logNumber: StringUtils.orEmpty(defect.logNumber),
      name: StringUtils.orEmpty(defect.name),
      rootCause: StringUtils.orEmpty(defect.rootCause),
      title: StringUtils.orEmpty(defect.title),
      _expand: false
    };

    return defectRow;
  }

  private createReportElementRow(reportElement: GoNoGoValidationReportElementDTO): ReportElementRow {
    const reportElementRow: ReportElementRow = {
      control: StringUtils.orEmpty(reportElement.controlResult),
      controlAlt: StringUtils.orEmpty(reportElement.controlResultAlt),
      currentValue: StringUtils.orEmpty(reportElement.propertyValue),
      description: StringUtils.orEmpty(reportElement.propertyDescription),
      expectedValue: StringUtils.orEmpty(reportElement.propertyExpectedValue),
      id: StringUtils.orEmpty(reportElement.propertyId)
    };

    return reportElementRow;
  }

  private loadCsnAndTsnValues(): void {
    const input: FindCsnAndTsnValuesInput = {
      equipmentCode: this.equipmentCode
    };
    this.gonogoValidationFormService
      .findCsnAndTsnValues(input)
      .pipe(
        finalize(() => {
          this.aircraftValuesLoading = false;
        })
      )
      .subscribe((result) => {
        if (result) {
          this.aircraftCsn = StringUtils.orEmpty(result.csn);
          this.aircraftTsn = StringUtils.orEmpty(result.tsn);
        }
      });
  }

  private loadEquipmentAndMissionEquipment(): void {
    const equipmentInput: BidoEquipmentDTOId = {
      equipmentCode: this.equipmentCode
    };
    const missionEquipmentInput: BidoMissionEquipmentDTOId = {
      equipmentCode: this.equipmentCode,
      missionCode: this.missionCode,
      occurrence: this.occurrence
    };
    const observables: Observable<BidoEquipmentDTO | BidoMissionEquipmentDTOId>[] = [
      this.gonogoValidationFormService.findEquipment(equipmentInput),
      this.gonogoValidationFormService.findMissionEquipment(missionEquipmentInput)
    ];
    forkJoin(observables).subscribe(([equipment, missionEquipment]) => {
      // Equipment
      this.equipment = equipment;
      if (this.equipment) {
        const operationalStatus = this.operationalStatusList.find(
          (elt) => elt.value === this.equipment.operationalStatus
        );

        this.equipmentStatus = operationalStatus ? operationalStatus.label : '';
      }

      // Mission Equipment
      this.missionEquipment = missionEquipment;
      if (this.missionEquipment) {
        const flightCustomer = this.flightCustomerList.find(
          (elt) => elt.customerCode === (this.missionEquipment as BidoMissionEquipmentDTO).customerCode
        );
        const flightStatus = this.flightStatusList.find(
          (elt) => elt.value === (this.missionEquipment as BidoMissionEquipmentDTO).statusState
        );
        const flightType = this.flightTypeList.find(
          (elt) => elt.value === (this.missionEquipment as BidoMissionEquipmentDTO).flightType
        );

        this.missionEquipmentCustomer = flightCustomer ? StringUtils.orEmpty(flightCustomer.customerName) : '';
        this.missionEquipmentDuration = StringUtils.isNullOrEmpty(this.missionEquipment.missionDuration)
          ? ''
          : NumberUtils.roundNumber(Number(this.missionEquipment.missionDuration), 0).toString();
        this.missionEquipmentStartDate = this.dateService.timestampToString(this.missionEquipment.startDate);
        this.missionEquipmentStatus = flightStatus ? flightStatus.label : '';
        this.missionEquipmentType = flightType ? flightType.label : '';
      }

      this.loadCsnAndTsnValues();
      this.loadGoNoGoValidation();
    });
  }

  private loadFlightCustomerList(): Observable<BidoCustomerDTO[]> {
    const input: BidoCustomerDTO = {
      customerType: AWPropertiesConstants.CUSTOMER_TYPE_CUS_KEY
    };

    return this.gonogoValidationFormService.findAllBidoCustomerByCriteria(input);
  }

  private loadFlightStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_STATUS_MAP);
  }

  private loadFlightTypeList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP);
  }

  private loadGoNoGoValidation(): void {
    const input: GoNoGoValidationInput = {
      missionCode: this.missionCode,
      occurrence: this.occurrence,
      bidoEquipment: this.equipment,
      bidoMissionEquipment: this.missionEquipment
    };
    this.gonogoValidationFormService
      .goNoGoValidation(input)
      .pipe(
        finalize(() => {
          this.acrsAvailabilityTableLoading = false;
          this.defectTableLoading = false;
          this.missionAbilityTableLoading = false;
          this.missionAvailabilityTableLoading = false;
        })
      )
      .subscribe((reportResult) => {
        if (reportResult) {
          if (reportResult.gonogoValidation) {
            this.gonogoValidationComment = StringUtils.orEmpty(reportResult.gonogoValidation.attributeValue);
            this.gonogoValidationCommentReadOnly = true;
          }

          // ACRS
          if (reportResult.acrsEventStatus) {
            this.acrsEventDate = this.dateService.dateToString(reportResult.acrsEventStatus.reportingPeriodStartDate);

            if (!StringUtils.isNullOrEmpty(reportResult.acrsEventStatus.status)) {
              this.propertiesService
                .getEventStatusValue(reportResult.acrsEventStatus.status as string)
                .subscribe((eventStatusResult) => {
                  this.acrsEventStatus = eventStatusResult;
                });
            }
          } else {
            this.translateService.get(super.getTranslateKey('errorOnNoAcrsEvent')).subscribe((messageResult) => {
              this.acrsEventAlert = messageResult || 'No ACRS Event for this Flight';
            });
          }

          // ACRS availability
          this.acrsAvailabilityTable = ListUtils.orEmpty(reportResult.acrsAvailabilityList).map((elt) =>
            this.createReportElementRow(elt)
          );

          // Defect
          this.defectTable = ListUtils.orEmpty(reportResult.defectlist)
            .filter((elt) => elt.status !== AWPropertiesConstants.EVENT_STATUS_CLOSED_KEY)
            .map((elt) => this.createDefectRow(elt));

          // Mission ability
          this.missionAbilityTable = ListUtils.orEmpty(reportResult.missionAbilityList).map((elt) =>
            this.createReportElementRow(elt)
          );

          // Mission availability
          this.missionAvailabilityTable = ListUtils.orEmpty(reportResult.missionAvailabilityList).map((elt) =>
            this.createReportElementRow(elt)
          );
        }
      });
  }

  private loadLabelCsn(): void {
    this.gonogoValidationFormService.getStandardCycleCounterLabel().subscribe((result) => {
      this.labelCsn = StringUtils.orEmpty(result);
    });
  }

  private loadLabelTsn(): void {
    this.gonogoValidationFormService.getStandardTimeCounterLabel().subscribe((result) => {
      this.labelTsn = StringUtils.orEmpty(result);
    });
  }

  private loadOperationalStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
  }

  private setAcrsAvailabilityTableColList(): void {
    this.acrsAvailabilityTableColList = [
      { field: 'control', alignment: 'center', width: '14.5%' },
      { field: 'id', alignment: 'left', width: '20%' },
      { field: 'description', alignment: 'left', width: '35.5%' },
      { field: 'expectedValue', alignment: 'left', width: '15%' },
      { field: 'currentValue', alignment: 'left', width: '15%' }
    ];
  }

  private setDefectTableColList(): void {
    this.defectTableColList = [
      { field: 'control', alignment: 'center', width: '7%' },
      { field: 'eventCode', alignment: 'left', width: '9%' },
      { field: 'date', alignment: 'left', width: '6.5%' },
      { field: 'linkedEvent', alignment: 'left', width: '9%' },
      { field: 'critical', alignment: 'center', width: '6.5%' },
      { field: 'flightRestriction', alignment: 'left', width: '16.5%' },
      { field: 'title', alignment: 'left', width: '16.5%' },
      { field: 'context', alignment: 'left', width: '16.5%' }
    ];
  }

  private setMissionAbilityTableColList(): void {
    this.missionAbilityTableColList = [
      { field: 'control', alignment: 'center', width: '7%' },
      { field: 'id', alignment: 'left', width: '15%' },
      { field: 'description', alignment: 'left', width: '48%' },
      { field: 'expectedValue', alignment: 'left', width: '15%' },
      { field: 'currentValue', alignment: 'left', width: '15%' }
    ];
  }

  private setMissionAvailabilityTableColList(): void {
    this.missionAvailabilityTableColList = [
      { field: 'control', alignment: 'center', width: '7%' },
      { field: 'id', alignment: 'left', width: '15%' },
      { field: 'description', alignment: 'left', width: '48%' },
      { field: 'expectedValue', alignment: 'left', width: '15%' },
      { field: 'currentValue', alignment: 'left', width: '15%' }
    ];
  }

  private setTableOfContent(): void {
    const acrsEventKey = this.getTranslateKey('acrsEvent');
    const aircraftKey = this.getTranslateKey('aircraft');
    const defectsToProcessKey = this.getTranslateKey('defectsToProcess');
    const flightKey = this.getTranslateKey('flight');
    const gonogoValidationKey = this.getTranslateKey('gonogoValidation');
    const missionAbilityKey = this.getTranslateKey('missionAbility');
    const missionAvailabilityKey = this.getTranslateKey('missionAvailability');

    this.translateService
      .get([
        acrsEventKey,
        aircraftKey,
        defectsToProcessKey,
        flightKey,
        gonogoValidationKey,
        missionAbilityKey,
        missionAvailabilityKey
      ])
      .subscribe((results) => {
        const acrsEventLabel = !!results ? results[acrsEventKey] : 'ACRS Event';
        const aircraftLabel = !!results ? results[aircraftKey] : 'Aircraft';
        const defectsToProcessLabel = !!results ? results[defectsToProcessKey] : 'Defects To Process';
        const flightLabel = !!results ? results[flightKey] : 'Flight';
        const gonogoValidationLabel = !!results ? results[gonogoValidationKey] : 'GoNoGo Validation';
        const missionAbilityLabel = !!results ? results[missionAbilityKey] : 'Mission Ability';
        const missionAvailabilityLabel = !!results ? results[missionAvailabilityKey] : 'Mission Availability';

        this.toc = [
          {
            id: 'gonogoValidationAnchor',
            anchor: this.gonogoValidationEltRef,
            label: gonogoValidationLabel
          },
          {
            id: 'flightAnchor',
            anchor: this.flightEltRef,
            label: flightLabel
          },
          {
            id: 'aircraftAnchor',
            anchor: this.aircraftEltRef,
            label: aircraftLabel
          },
          {
            id: 'acrsAnchor',
            anchor: this.acrsEventEltRef,
            label: acrsEventLabel
          },
          {
            id: 'defectsToProcessAnchor',
            anchor: this.defectsToProcessEltRef,
            label: defectsToProcessLabel
          },
          {
            id: 'missionAvailabilityAnchor',
            anchor: this.missionAvailabilityCheckEltRef,
            label: missionAvailabilityLabel
          },
          {
            id: 'missionAbilityAnchor',
            anchor: this.missionAbilityEltRef,
            label: missionAbilityLabel
          }
        ];
      });
  }
}
