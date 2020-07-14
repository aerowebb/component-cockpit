import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
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
import { MissionEquipmentTableOutputDTO } from '../../../shared/types/api-output-types/fleet-management/bido-mission-flight-table-output-dto';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { CreateBidoMissionEquipmentFromExistingMissionInputDTO } from '../../../shared/types/api-types/bido-flights-dialog-dto.interface';
import { BidoMissionDTOId } from '../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../shared/types/api-types/bido-mission-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { SaveMissionScreenInput } from '../../../shared/types/api-types/save-mission-screen-input.interface';
import { FormPageComponent } from '../../../shared/types/form-page-component';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ListUtils } from '../../../shared/utils/list-utils';
import { NumberUtils } from '../../../shared/utils/number-utils';
import { SelectItemUtils } from '../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { FlightInputData } from '../flight/types/flight-input-data.interface';

import { FlightRowDTO } from './flight-row-dto.inerface';
import { MissionFormService } from './mission-form.service';

interface LabelValueTimeZone {
  label?: string;
  value?: string;
  actValue?: string;
}

@Component({
  selector: 'aw-mission-form',
  styleUrls: ['./mission-form.component.scss'],
  templateUrl: './mission-form.component.html'
})
export class MissionFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly MAIN_INFORMATION_ANCHOR_ID: string = 'mainInformationAnchor';
  public static readonly ADDITIONAL_ANCHOR_ID: string = 'additionalInformationAnchor';
  public static readonly SCHEDULE_ANCHOR_ID: string = 'scheduleAnchor';
  public static readonly FLIGHTS_ANCHOR_ID: string = 'flightsAnchor';

  // private static readonly TIMEZONE_VALUE_REGEX: RegExp = /([+-]\d\d):\d\d/;

  public readonly component: typeof MissionFormComponent;
  public readonly tabGeneralId: string;
  public readonly tabFlightsTaskId: string;
  public currentTabId: string;
  public itemsTableCols: TableColumn[];
  public partsTableCols: TableColumn[];
  public flightTabTableCols: TableColumn[];
  public flightSubTableCols: TableColumn[];
  public status: LabelValue<string>[];
  public isMenuOverlayVisible: boolean;
  public isNavigationOverlayVisible: boolean;
  public topMenuOffsetLeft: number;
  public topMenuOffsetTop: number;
  public flightTableData: FlightRowDTO[];
  public flightTableDataAddedList: MissionEquipmentTableOutputDTO[];
  public missionFieldData: BidoMissionDTO;
  public missionFieldFromDb: BidoMissionDTO;
  public missionTypeList: SelectItem[];
  public flightLocationList: SelectItem[];
  public periodicityList: SelectItem[];
  public flightCustomerList: SelectItem[];
  public timeZoneList: LabelValueTimeZone[];
  public operationalMissionList: SelectItem[];
  public isReadOnlyFlightDialog: boolean;
  public isReadOnlyFlightEditDialog: boolean;
  public showFlightDialog: boolean;
  public showFlightEditDialog: boolean;
  public numberOfFlights?: number;
  public operationCode: LabelValue<string>[];
  public selectedFlights: MissionEquipmentTableOutputDTO[];
  public editFlightSelect: MissionEquipmentTableOutputDTO;
  public addedFlights: CreateBidoMissionEquipmentFromExistingMissionInputDTO[];
  public updatedFlights: MissionEquipmentTableOutputDTO[];
  public deletedFlights: MissionEquipmentTableOutputDTO[];
  public selectedTimeZone: string | undefined;
  public updatedFilghtsAsset: MissionEquipmentTableOutputDTO;
  public isLoading: boolean;
  public remainingTable: FlightRowDTO[];
  public remainingTableCols: TableColumn[];
  public showStatusUpdatesPopup: boolean;

  private defaultTimeZone: string | undefined;
  private previousTimezone: string | undefined;

  // Table of content
  @ViewChild(MissionFormComponent.MAIN_INFORMATION_ANCHOR_ID)
  public mainInformationEltRef: ElementRef;

  @ViewChild(MissionFormComponent.ADDITIONAL_ANCHOR_ID)
  public additionalInformationEltRef: ElementRef;

  @ViewChild(MissionFormComponent.SCHEDULE_ANCHOR_ID)
  public scheduleEltRef: ElementRef;

  @ViewChild(MissionFormComponent.FLIGHTS_ANCHOR_ID)
  public flightsEltRef: ElementRef;

  public toc: PageTocEntry[];
  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    public translateService: TranslateService,
    tabService: TabService,
    public inputValidationService: InputValidationService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly missionFormService: MissionFormService,
    private readonly propertiesService: PropertiesService,
    private readonly dateService: DateService,
    pageTocService: PageTocService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    super.registerPageTocEntryObservable();
    this.tabGeneralId = 'general';
    this.tabFlightsTaskId = 'flights';
    this.missionTypeList = [];
    this.flightLocationList = [];
    this.periodicityList = [];
    this.selectedFlights = [];
    this.addedFlights = [];
    this.updatedFlights = [];
    this.deletedFlights = [];
    this.flightTableData = [];
    this.flightTableDataAddedList = [];
    this.numberOfFlights = undefined;
    this.flightCustomerList = [];
    this.selectedTimeZone = undefined;
    this.isLoading = false;
    this.updatedFilghtsAsset = {};
    this.openGeneralTab();
    this.setTableCols();
    this.setSubTableCols();
    this.loadFlightCustomerList();
    this.loadStatus();
    this.init();
    this.missionFieldData = {};
    this.missionFieldFromDb = {};
    this.isReadOnlyFlightDialog = true;
    this.isReadOnlyFlightEditDialog = true;
    this.showFlightDialog = false;
    this.showFlightEditDialog = false;
    this.timeZoneList = [];
    this.previousTimezone = undefined;
    this.component = MissionFormComponent;
  }

  public openGeneralTab(): void {
    this.currentTabId = this.tabGeneralId;
  }

  public openFlightsTaskTab(): void {
    this.currentTabId = this.tabFlightsTaskId;
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHTS_MISSION_FORM;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.setTableOfContent();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const context = this.isCreateOpenMode
        ? 'tab.createMode'
        : !!this.componentData.objectId &&
          this.serializationService.deserialize(this.componentData.objectId).missionCode;
      this.displayComponentContext(context, this.isCreateOpenMode);
      this.loadDropDowns();
    }
  }

  public cancelMissionFrom(): void {
    if (this.isWriteOpenMode) {
      this.updateOpenMode(ComponentOpenMode.Read);
    }
    this.reloadMissionFrom();
  }

  public editMissionFrom(): void {
    this.updateOpenMode(ComponentOpenMode.Write);
  }

  public reloadMissionFrom(): void {
    this.init();
    this.loadMission();
  }

  public saveMissionFrom(): void {
    if (this.missionFieldData.missionType) {
      // tslint:disable-next-line: no-any
      // const flightArray: any[] = [];
      let isUpdate: boolean;
      // let isAssetOverride = false;
      this.componentData.openMode === ComponentOpenMode.Create ? (isUpdate = false) : (isUpdate = true);
      this.missionFieldData.statusDate = undefined;
      this.missionFieldData.statusUser = '';
      this.missionFieldData.statusState = '';

      /* this.flightTableData.forEach((flight) => {
        if (!!flight.assetCodeText && !!flight.familyVariantCode) {
          const found = flightArray.some((asset): boolean => {
            return asset.familyVariantCode === flight.familyVariantCode && asset.assetCodeText === flight.assetCodeText;
          });
          if (!found) {
            flightArray.push({ familyVariantCode: flight.familyVariantCode, assetCodeText: flight.assetCodeText });
          } else {
            isAssetOverride = true;
          }
        }
      });

      if (isAssetOverride) {
        this.messageService.showErrorMessage(this.getTranslateKey('warningOnFlightExists'));

        return;
      } */

      const saveMissionId: SaveMissionScreenInput = {
        bidoMissionDTO: this.missionFieldData,
        isForUpdate: isUpdate,
        addedFlights: this.addedFlights,
        removedFlights: [],
        updatedFlights: this.updatedFlights,
        selectedTimeZone: this.getActTimeZone()
      };

      this.showSaveSpinner = true;
      this.missionFormService.saveBidoMission(saveMissionId).subscribe(
        (result) => {
          if (result && result !== {}) {
            // tslint:disable-next-line:no-string-literal
            const missionEquipmentTableOutputDTO = result['MissionEquipmentTableOutputDTO'];
            missionEquipmentTableOutputDTO.forEach((res) => {
              res.asset.forEach((asset) => {
                if (res.assetCodeText === asset.value) {
                  res.assetCodeText = asset.label;
                }
              });
            });
            // tslint:disable-next-line: no-unsafe-any
            this.flightTableData = missionEquipmentTableOutputDTO;
            // tslint:disable-next-line:no-string-literal
            this.missionFieldData = result['bidoMissionDTO'];
            this.missionFieldFromDb = { ...this.missionFieldData }; // keep backup of mission field dto
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveMission'));
            this.numberOfFlights = this.flightTableData.length;
            if (this.componentData.openMode === ComponentOpenMode.Create) {
              this.componentData.objectId = this.serializationService.serialize(this.missionFieldData);
              const context = this.serializationService.deserialize(this.componentData.objectId).missionCode;
              this.displayComponentContext(context, this.isCreateOpenMode);
            }
            this.addedFlights = [];
            this.deletedFlights = [];
            this.updatedFlights = [];
            this.selectedFlights = [];
            this.reloadMissionFrom();
            this.updateOpenMode(ComponentOpenMode.Read);
            this.componentData.openMode = ComponentOpenMode.Read;
          }
          this.showSaveSpinner = false;
        },
        (error) => {
          const subStringNumber = 16;
          if (error.error) {
            this.messageService.showErrorMessage(error.error.errorDetail.substring(subStringNumber));
          } else {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveMission'));
          }
          this.showSaveSpinner = false;
        }
      );
    } else {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    }
  }

  private getActTimeZone(): string | undefined {
    if (!!this.selectedTimeZone) {
      const selectedZone = this.timeZoneList.filter((res) => {
        return res.value === this.selectedTimeZone;
      });

      return !!selectedZone ? (selectedZone[0].actValue as string) : (this.selectedTimeZone as string);
    }
  }

  private setTableCols(): void {
    this.flightTabTableCols = [
      { field: 'familyVariantCode', alignment: 'left', width: '10%' },
      { field: 'assetCodeText', alignment: 'left', width: '21%' },
      { field: 'chronoNumber', alignment: 'left', width: '11%' },
      { field: 'flightStatus', alignment: 'left', width: '9%' },
      { field: 'startDate', alignment: 'left', width: '14%' },
      { field: 'endDate', alignment: 'left', width: '14%' },
      { field: 'duration', alignment: 'center', width: '7%' },
      { field: 'ifrDuration', alignment: 'center', width: '7%' },
      { field: 'cycleNumber', alignment: 'center', width: '7%' }
    ];
  }

  private setSubTableCols(): void {
    this.flightSubTableCols = [
      { field: 'engineStartDate', alignment: 'left', width: '12%' },
      { field: 'engineStopDate', alignment: 'left', width: '12%' },
      { field: 'fuelUsed', alignment: 'left', width: '10%' },
      { field: 'passengers', alignment: 'center', width: '12%' },
      { field: 'shipment', alignment: 'center', width: '10%' },
      { field: 'pilot', alignment: 'left', width: '12%' },
      { field: 'copilot', alignment: 'left', width: '12%' },
      { field: 'dayMission', alignment: 'left', width: '10%' },
      { field: 'nightMission', alignment: 'left', width: '10%' }
    ];
  }

  private init(): void {
    this.isMenuOverlayVisible = false;
    this.isNavigationOverlayVisible = false;
    this.topMenuOffsetTop = 0;
    this.topMenuOffsetLeft = 0;
  }
  private loadFlightCustomerList(): void {
    const criteria: BidoCustomerDTO = {
      isOperator: true
    };
    this.missionFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightCustomerList = ListUtils.orEmpty(results)
        .filter((result) => !StringUtils.isNullOrEmpty(result.customerCode))
        .map((result) => {
          const label = StringUtils.isNullOrEmpty(result.customerName)
            ? result.customerCode
            : `${result.customerName} (${result.customerCode})`;

          return {
            label,
            value: result.customerCode as string
          };
        });
    });
  }
  private loadStatus(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FUNC_OBJECT_STATUS_MAP).subscribe((results) => {
      this.status = results;
    });
  }

  public loadMission(): void {
    this.isLoading = true;
    const missionTemp: BidoMissionDTOId = {
      missionCode: this.componentData.objectId
        ? // tslint:disable-next-line: no-unsafe-any
          this.serializationService.deserialize(this.componentData.objectId).missionCode
        : ''
    };

    forkJoin([
      this.missionFormService.findBidoMissionsByMissionCode(missionTemp),
      this.missionFormService.findBidoMissionEquipments(missionTemp)
    ]).subscribe(([mission, flights]) => {
      if (!!mission) {
        this.missionFieldData = mission;
        this.missionFieldFromDb = { ...this.missionFieldData }; // keep backup to add flight
      }
      this.getFlightTableData(flights);
      this.updateMissionDates();
      this.isLoading = false;
    });
  }

  private getFlightTableData(results: MissionEquipmentTableOutputDTO[]): void {
    this.flightTableData = results.map((flight) => {
      const flightRow: FlightRowDTO = {
        familyVariantCode: flight.familyVariantCode,
        asset: flight.asset,
        chronoNumber: flight.chronoNumber,
        flightStatus: flight.flightStatus,
        startDate: this.dateService.dateWithHourToString(flight.startDate),
        endDate: this.dateService.dateWithHourToString(flight.endDate),
        ifrDuration: flight.ifrDuration,
        duration: flight.duration,
        cycleNumber: flight.cycleNumber,
        engineStartDate: flight.engineStartDate,
        engineStopDate: flight.engineStopDate,
        fuelUsed: flight.fuelUsed,
        passengers: flight.passengers,
        shipment: flight.shipment,
        pilot: flight.pilot,
        copilot: flight.copilot,
        dayMission: flight.dayMission,
        nightMission: flight.nightMission,
        assetCodeText: flight.assetCodeText,
        missionCode: flight.missionCode,
        equipmentCode: flight.equipmentCode,
        occurence: flight.occurence,
        dataKeyId: flight.dataKeyId
      };

      return flightRow;
    });
    this.flightTableData.forEach((res) => {
      res.dataKeyId = res.chronoNumber;
      if (res.asset) {
        res.asset.forEach((asset) => {
          if (res.assetCodeText === asset.value) {
            res.assetCodeText = asset.label;
          }
        });
      }
    });
    this.numberOfFlights = this.flightTableData.length;
  }

  public updateMissionDates(): void {
    const previousTimezoneValue = Number(this.previousTimezone);
    const currentTimeZoneValue = Number(this.selectedTimeZone);

    if (currentTimeZoneValue !== previousTimezoneValue) {
      const gap =
        Math.abs(previousTimezoneValue) >= 0 && Math.abs(currentTimeZoneValue)
          ? Math.abs(Math.abs(previousTimezoneValue) - Math.abs(currentTimeZoneValue))
          : Math.abs(previousTimezoneValue) + Math.abs(currentTimeZoneValue);
      const isGapPositive = currentTimeZoneValue >= previousTimezoneValue;

      if (!!this.missionFieldData) {
        if (!!this.missionFieldData.startDate) {
          let newDate = '';
          newDate = this.updateDate(
            gap,
            isGapPositive,
            this.sessionService.dateTimeFormatMomentJS,
            String(this.missionFieldData.startDate)
          );
          this.missionFieldData.startDate = new Date(newDate);
        }

        if (!!this.missionFieldData.endDate) {
          let newDate = '';
          newDate = this.updateDate(
            gap,
            isGapPositive,
            this.sessionService.dateTimeFormatMomentJS,
            String(this.missionFieldData.endDate)
          );
          this.missionFieldData.endDate = new Date(newDate);
        }

        if (!!this.missionFieldData.periodicityLimitDate) {
          let newDate = '';
          newDate = this.updateDate(
            gap,
            isGapPositive,
            this.sessionService.dateFormatMomentJS,
            String(this.missionFieldData.periodicityLimitDate)
          );
          this.missionFieldData.periodicityLimitDate = new Date(newDate);
        }
      }

      this.flightTableData.forEach((res) => {
        res.startDate = this.updateDate(
          gap,
          isGapPositive,
          this.sessionService.dateTimeFormatMomentJS,
          String(res.startDate)
        );
        res.endDate = this.updateDate(
          gap,
          isGapPositive,
          this.sessionService.dateTimeFormatMomentJS,
          String(res.endDate)
        );
      });

      this.previousTimezone = this.selectedTimeZone;
    }
  }

  private updateDate(gap: number, isGapPositive: boolean, dateFormat: string, date: string): string {
    if (StringUtils.isNullOrEmpty(date)) {
      return '';
    } else {
      const dateValue = new Date(date);
      const updatedDate = isGapPositive
        ? moment(dateValue).add(gap, 'hours')
        : moment(dateValue).subtract(gap, 'hours');

      return updatedDate.format(dateFormat);
    }
  }

  private loadDropDowns(): void {
    this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP).subscribe((results) => {
      this.missionTypeList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_BASE_MAP).subscribe((results) => {
      this.flightLocationList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.propertiesService.getValue(GenericPropertyConstants.MISSION_PERIODICITY_TYPE_MAP).subscribe((results) => {
      this.periodicityList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.missionFormService.findAllBidoOperations({}).subscribe((result) => {
      this.operationCode = result;
    });

    this.missionFormService.getOperationalMissionCodeMap().subscribe((results) => {
      this.operationalMissionList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.loadTimeZoneList();
  }

  private loadTimeZoneList(): void {
    this.propertiesService.getTimeZones().subscribe((results) => {
      this.timeZoneList = results
        .map((result) => {
          return {
            label: result.label as string,
            value: this.dateService.getTimeZoneValue(result.value) as string,
            actValue: result.value
          };
        })
        .filter((timezone) => !!timezone.value);

      this.propertiesService.getDefaultTimeZoneCode().subscribe((result) => {
        this.defaultTimeZone = this.dateService.getTimeZoneValue(result);
        // this.defaultTimeZone = result;

        this.resetTimezone();
      });

      this.loadMission();
    });
  }

  private resetTimezone(): void {
    this.selectedTimeZone = this.defaultTimeZone;
    this.previousTimezone = this.defaultTimeZone;
  }

  public createFlightData(): void {
    if (this.missionFieldData.startDate && this.missionFieldData.endDate) {
      this.isReadOnlyFlightDialog = false;
      this.showFlightDialog = true;
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnAddFlights'));
    }
  }
  public maxLengthCheck(event, percent) {
    const min = -99999999.99;
    const max = 99999999.99;
    if (percent < min || percent > max) {
      event.preventDefault();
    }
  }
  public editFlights(): void {
    this.isReadOnlyFlightEditDialog = false;
    this.showFlightEditDialog = true;
    this.editFlightSelect = { ...this.selectedFlights[0] };
  }

  public deleteFlights(): void {
    const partialMessageKey =
      this.selectedFlights.length > 1 ? 'confirmDeleteSelectedFlights' : 'confirmDeleteSelectedFlight';

    const flights: BidoMissionEquipmentDTOId[] = [];
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.selectedFlights.forEach((sel, index) => {
          this.flightTableData.forEach((res, index1) => {
            if (sel.dataKeyId === res.dataKeyId) {
              if (sel.chronoNumber) {
                this.deletedFlights.push(sel);
                this.updatedFlights = this.updatedFlights.filter(
                  (updatedFlight) => sel.chronoNumber !== updatedFlight.chronoNumber
                );
                this.flightTableData.splice(index1, 1);
              } else {
                this.flightTableData.splice(index1, 1);

                this.addedFlights.forEach((result, indexF) => {
                  if (sel.familyVariantCode === result.familyVariantCode) {
                    result.nbFlightsToCreate = result.nbFlightsToCreate && result.nbFlightsToCreate - 1;

                    if (result.nbFlightsToCreate === 0) {
                      this.addedFlights.splice(indexF, 1);
                    }
                  }
                });
              }
            }
          });
        });

        if (this.deletedFlights.length > 0) {
          this.deletedFlights.forEach((flight) => {
            if (flight) {
              const flightId: BidoMissionEquipmentDTOId = {
                missionCode: flight.missionCode ? flight.missionCode : '',
                equipmentCode: flight.equipmentCode ? flight.equipmentCode : '',
                occurrence: flight.occurence as number
              };
              flights.push(flightId);
            }
          });
          this.missionFormService.removeBidoMissionEquipment(flights).subscribe(
            (result) => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMission'));
              if (this.selectedFlights) {
                this.selectedFlights = [];
              }
              this.numberOfFlights = this.flightTableData.length;
            },
            (error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteMission'));
            }
          );
        }
      }
    });
  }

  public onAddOperation(event) {
    this.isLoading = true;
    const editMissionEquipmentFromExistingMissionDto: CreateBidoMissionEquipmentFromExistingMissionInputDTO = {
      nbFlightsToCreate: event.nbFlightsToCreate
    };
    this.addedFlights = [...this.addedFlights, editMissionEquipmentFromExistingMissionDto];
    const saveMissionId: SaveMissionScreenInput = {
      bidoMissionDTO: this.missionFieldData,
      addedFlights: this.addedFlights,
      isForUpdate: false
    };
    this.missionFormService.addBidoFlights(saveMissionId).subscribe(
      (result) => {
        this.addedFlights = [];
        if (result) {
          result.forEach((res) => {
            if (res.asset) {
              res.asset.forEach((asset) => {
                if (res.assetCodeText === asset.value) {
                  res.assetCodeText = asset.label;
                }
              });
            }
          });
          this.flightTableData = result.map((flight) => {
            const flightRow: FlightRowDTO = {
              familyVariantCode: flight.familyVariantCode,
              asset: flight.asset,
              chronoNumber: flight.chronoNumber,
              flightStatus: flight.flightStatus,
              startDate: !!this.missionFieldData.startDate
                ? this.dateService.dateWithHourToString(this.missionFieldData.startDate)
                : this.dateService.dateWithHourToString(flight.startDate),
              endDate: !!this.missionFieldData.endDate
                ? this.dateService.dateWithHourToString(this.missionFieldData.endDate)
                : this.dateService.dateWithHourToString(flight.endDate),
              ifrDuration: flight.ifrDuration,
              duration: flight.duration,
              cycleNumber: flight.cycleNumber,
              engineStartDate: flight.engineStartDate,
              engineStopDate: flight.engineStopDate,
              fuelUsed: flight.fuelUsed,
              passengers: flight.passengers,
              shipment: flight.shipment,
              pilot: flight.pilot,
              copilot: flight.copilot,
              dayMission: flight.dayMission,
              nightMission: flight.nightMission,
              assetCodeText: flight.assetCodeText,
              missionCode: flight.missionCode,
              equipmentCode: flight.equipmentCode,
              occurence: flight.occurence,
              dataKeyId: flight.dataKeyId
            };

            return flightRow;
          });
          this.flightTableData.forEach((res) => {
            res.dataKeyId = res.chronoNumber;
            if (res.asset) {
              res.asset.forEach((asset) => {
                if (res.assetCodeText === asset.value) {
                  res.assetCodeText = asset.label;
                }
              });
            }
          });
          this.numberOfFlights = this.flightTableData.length;
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnValidateFlights'));
      }
    );
  }

  public onEditOperation(event) {
    if (event.familyVariantCode) {
      event.asset.forEach((res) => {
        if (event.assetCodeText === res.value) {
          this.selectedFlights[0].assetCodeText = res.label;
        }
      });
      this.selectedFlights[0].familyVariantCode = event.familyVariantCode;
      this.selectedFlights[0].asset = event.asset;
      if (this.selectedFlights[0].chronoNumber !== '') {
        this.selectedFlights[0].startDate = this.missionFieldData.startDate;
        this.selectedFlights[0].endDate = this.missionFieldData.endDate;
        const selectedFlights = { ...this.selectedFlights[0] };
        this.updatedFilghtsAsset = selectedFlights;
        if (!!this.updatedFilghtsAsset.asset) {
          this.updatedFilghtsAsset.asset.forEach((res) => {
            if (event.assetCodeText === res.value) {
              this.updatedFilghtsAsset.assetCodeText = event.assetCodeText;
            }
          });
        }
        this.updatedFlights.forEach((res, index) => {
          if (res.chronoNumber === event.chronoNumber) {
            this.updatedFlights.splice(index, 1);
          }
        });
        this.updatedFlights.push(this.updatedFilghtsAsset);
      }
    }
  }
  public openFlightForm(rows: MissionEquipmentTableOutputDTO[]): void {
    rows.forEach((row) => {
      this.openFlightScreen(row, ComponentOpenMode.Read);
    });
  }

  public openFlightScreen(row: MissionEquipmentTableOutputDTO, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      openMode
    };

    if (!!row) {
      const missionEquipmentId: FlightInputData = {
        equipmentCode: row.equipmentCode as string,
        missionCode: row.missionCode as string,
        occurrence: Number(row.occurence),
        chronoNumber: row.chronoNumber as string
      };
      data.objectId = this.serializationService.serialize(missionEquipmentId);
    }

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public isFlightEditable(): boolean {
    return this.selectedFlights[0].chronoNumber !== '';
  }

  public toggleExpandCollapse(row: FlightRowDTO): void {
    row._expand = !row._expand;
  }

  private setTableOfContent(): void {
    const mainInfoKey = 'page.mainData';
    const additionalInfoKey = 'global.general';
    const scheduleKey = this.getTranslateKey('schedule');
    const flightsKey = this.getTranslateKey('flights');

    this.translateService
      .get([mainInfoKey, additionalInfoKey, scheduleKey, flightsKey])
      .subscribe((results: string[]) => {
        const mainInfoLabel = !!results ? results[mainInfoKey] : 'Main Information';
        const additionalInfoLabel = !!results ? results[additionalInfoKey] : 'Additional Information';
        const scheduleLabel = !!results ? results[scheduleKey] : 'Schedule';
        const flightsLabel = !!results ? results[flightsKey] : 'Flights';

        this.toc = [
          {
            id: 'mainInformationAnchor',
            anchor: this.mainInformationEltRef,
            label: mainInfoLabel
          },
          {
            id: 'additionalInformationAnchor',
            anchor: this.additionalInformationEltRef,
            label: additionalInfoLabel
          },
          {
            id: 'scheduleAnchor',
            anchor: this.scheduleEltRef,
            label: scheduleLabel
          },
          {
            id: 'flightsAnchor',
            anchor: this.flightsEltRef,
            label: flightsLabel
          }
        ];
        super.selectPageTocEntry(this.component.MAIN_INFORMATION_ANCHOR_ID);
      });
  }

  public openStatusUpdatesPopup() {
    this.showStatusUpdatesPopup = true;
  }

  public onSelectMissionDate(): void {
    if (this.isCreateOpenMode && !!this.missionFieldData.startDate && !!this.missionFieldData.endDate) {
      const diff = this.dateService.getDurationBetweenDatesInHour(
        this.missionFieldData.startDate,
        this.missionFieldData.endDate
      );
      this.missionFieldData.missionDuration = NumberUtils.toString(diff);
    }
  }
}
