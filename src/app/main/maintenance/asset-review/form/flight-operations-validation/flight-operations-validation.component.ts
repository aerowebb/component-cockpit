import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

import { RecordAndSimulateOutput } from '../../../../..//shared/types/api-output-types/fleet-management/record-and-simulate-ouput-dto.interface';
import { PageTocService } from '../../../../../shared/components/component-sidebar/page-toc.service';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { RecordAndSimulateInput } from '../../../../../shared/types/api-input-types/fleet-management/record-and-simulate-input-dto.interface';
import { FlightOperationValidationOutput } from '../../../../../shared/types/api-output-types/fleet-management/flight-operation-validation-output-dto.interface';
import { MeasureToRecordTableOutput } from '../../../../../shared/types/api-output-types/fleet-management/measure-to-record-table-output-dto.interface';
import { BidoEquipmentDTOId } from '../../../../../shared/types/api-types/bido-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { FlightInputData } from '../../../../flight-operations/flight/types/flight-input-data.interface';

import { FlightOperationsValidationService } from './flight-operations-validation.service';

@Component({
  selector: 'aw-flight-operations-validation',
  templateUrl: './flight-operations-validation.component.html',
  styleUrls: ['./flight-operations-validation.component.scss']
})
export class FlightOperationsValidationComponent extends PageComponent<PageComponentData> implements OnInit {
  @ViewChild('flightAnchor')
  public flightAnchor: ElementRef;
  @ViewChild('aircraftAnchor')
  public aircraftAnchor: ElementRef;
  @ViewChild('tableAnchor')
  public tableAnchor: ElementRef;

  public resultsTable: MeasureToRecordTableOutput[] | undefined;
  public resultsTableCols: TableColumn[];
  public bidoMissionEquipmentDTO: BidoMissionEquipmentDTO;
  public flightOperationValidationOutput: FlightOperationValidationOutput;
  public aircraftLoading: boolean;
  public flightLoading: boolean;
  public isLoadingTable: boolean;
  public isLoadingReport: boolean;
  public showPopup: boolean;
  public isSimulate: boolean;
  public isRecord: boolean;
  public recordAndSimulateInput: RecordAndSimulateInput;
  public reportData: RecordAndSimulateOutput;
  public showReport: boolean;
  public showReportPopup: boolean;
  public toc;
  public selectedAnchor: string | undefined;
  public fligthOperationsCsnLabel: string;
  public fligthOperationsTsnLabel: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public sessionService: SessionService,
    public readonly flightOperationsValidationService: FlightOperationsValidationService,
    private readonly translateService: TranslateService
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
    this.resultsTable = [];
    this.resultsTableCols = [
      { field: 'measureText', alignment: 'left' },
      { field: 'measureUnit', alignment: 'left' },
      { field: 'measureValue', alignment: 'left' },
      { field: 'measureValueCoeff', alignment: 'left' },
      { field: 'measureComments', alignment: 'left' },
      { field: 'propagate', alignment: 'left' }
    ];
    this.flightOperationValidationOutput = {};
    this.bidoMissionEquipmentDTO = {};
    this.aircraftLoading = false;
    this.flightLoading = false;
    this.isLoadingTable = false;
    this.isLoadingReport = false;
    this.showPopup = false;
    this.isSimulate = false;
    this.isRecord = false;
    this.showReport = false;
    this.showReportPopup = false;
    this.recordAndSimulateInput = {};
    this.reportData = {};
    this.selectedAnchor = undefined;
    this.registerPageTocEntrySelectedObservable();
  }

  public ngOnInit() {
    super.ngOnInit();
    this.updateOpenMode(this.componentData.openMode);
    this.toc = [
      {
        id: 'flightAnchor',
        anchor: this.flightAnchor,
        label: this.translateService.instant(this.getTranslateKey('flight'))
      },
      {
        id: 'aircraftAnchor',
        anchor: this.aircraftAnchor,
        label: this.translateService.instant(this.getTranslateKey('aircraft'))
      },
      {
        id: 'tableAnchor',
        anchor: this.tableAnchor,
        label: this.translateService.instant(this.getTranslateKey('tableTilte'))
      }
    ];
    this.aircraftLoading = false;
    this.flightLoading = false;
    this.isLoadingTable = false;
    if (!this.componentData.objectId) {
      this.messageService.showErrorMessage('global.errorOnNavigate');
    } else {
      this.bidoMissionEquipmentDTO = this.serializationService.deserialize(this.componentData.objectId);
      this.loadFlightValidation();

      this.loadDynamicLabelList();
    }
  }

  private loadFlightValidation(): void {
    const bidoMissionEquipment: BidoMissionEquipmentDTO = {
      missionCode: this.bidoMissionEquipmentDTO.missionCode,
      occurrence: this.bidoMissionEquipmentDTO.occurrence,
      equipmentCode: this.bidoMissionEquipmentDTO.equipmentCode
    };
    this.flightOperationsValidationService.flightValidation(bidoMissionEquipment).subscribe((results) => {
      this.flightOperationValidationOutput = results;
      this.flightOperationValidationOutput.date = ObjectUtils.isDefined(this.flightOperationValidationOutput.date)
        ? this.flightOperationValidationOutput.date
        : undefined;
      if (!!this.flightOperationValidationOutput && !!this.flightOperationValidationOutput.chronoNumber) {
        this.aircraftLoading = false;
        this.flightLoading = false;
        this.isLoadingTable = false;
        this.displayComponentContext(this.flightOperationValidationOutput.chronoNumber, this.isCreateOpenMode);
        this.resultsTable = this.flightOperationValidationOutput.measureToRecordTableOutput;
      }
    });
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

  public getComponentName(): string {
    return ComponentConstants.MAI_FLIGHT_OPERATIONS;
  }

  public simulate() {
    this.showPopup = true;
    this.isRecord = false;
    this.isSimulate = true;
  }

  public recordMeasures() {
    this.showPopup = true;
    this.isRecord = true;
    this.isSimulate = false;
  }

  public generateRport() {
    this.showReportPopup = true;
  }

  public onValidatingPopup(data: RecordAndSimulateInput) {
    this.reportData = {};
    this.showReport = false;
    this.recordAndSimulateInput = {
      measureToRecordList: this.resultsTable,
      bidoMissionEquipmentDTO: this.bidoMissionEquipmentDTO,
      allowMeasureInsertionBeforeExistingValue: data.allowMeasureInsertionBeforeExistingValue,
      allowMeasureReadingEqualsOrSmallerThanPrevious: data.allowMeasureReadingEqualsOrSmallerThanPrevious,
      allowMeasureReadingGreaterThanPreviousMonth: data.allowMeasureReadingGreaterThanPreviousMonth,
      forceReading: data.forceReading,
      readingDate: data.readingDate
    };
    this.isLoadingReport = true;
    if (this.isSimulate) {
      this.flightOperationsValidationService
        .simulateRecord(this.recordAndSimulateInput)
        .pipe(
          finalize(() => {
            this.isLoadingReport = false;
          })
        )
        .subscribe((results) => {
          if (!!results) {
            this.reportData = results;
            this.showReport = true;
          }
        });
    }
    if (this.isRecord) {
      this.flightOperationsValidationService
        .recordMeasure(this.recordAndSimulateInput)
        .pipe(
          finalize(() => {
            this.isLoadingReport = false;
          })
        )
        .subscribe((results) => {
          if (!!results) {
            this.reportData = results;
            this.showReport = true;
            this.loadFlightValidation();
          } else {
            this.messageService.showErrorMessage(this.componentData.componentId + '.errorOnRetrievingDatas');
          }
        });
    }
  }

  public showSimulateAndRecord(): boolean {
    return this.flightOperationValidationOutput.status !== 'Validated';
  }

  public openAsset() {
    this.openAircraft(this.bidoMissionEquipmentDTO.equipmentCode, ComponentOpenMode.Read);
  }

  public openAircraft(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.AircraftFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'AircraftFormComponent',
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

  public openFlightForm(): void {
    this.openFlight(this.bidoMissionEquipmentDTO, ComponentOpenMode.Read);
  }

  public openFlight(row: BidoMissionEquipmentDTO, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.FLI_FLIGHT_FORM,
      openMode
    };

    if (!!row) {
      const missionEquipmentId: FlightInputData = {
        equipmentCode: row.equipmentCode as string,
        missionCode: row.missionCode as string,
        occurrence: Number(this.flightOperationValidationOutput.occurence),
        chronoNumber: this.flightOperationValidationOutput.chronoNumber as string
      };
      data.objectId = this.serializationService.serialize(missionEquipmentId);
    }

    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadDynamicLabelList(): void {
    const observables: Observable<string>[] = [
      this.flightOperationsValidationService.getTsnLabelForFlightOperations(),
      this.flightOperationsValidationService.getCsnLabelForFlightOperations()
    ];

    forkJoin(observables).subscribe(([timeBireMeasureReferenceLabel, cycleBireMeasureReferenceLabel]) => {
      this.fligthOperationsTsnLabel = timeBireMeasureReferenceLabel;
      this.fligthOperationsCsnLabel = cycleBireMeasureReferenceLabel;
    });
  }
}
