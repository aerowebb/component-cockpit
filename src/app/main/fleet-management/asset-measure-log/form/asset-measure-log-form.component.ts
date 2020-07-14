import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { BidoMeasureConsants } from '../../../../shared/constants/dassaut/bido-measure-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { InputValidationService } from '../../../../shared/services/input-validation.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../../../shared/types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { BidoEquipmentCounterDTOId } from '../../../../shared/types/api-types/bido-equipment-counter-dto-id.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { AssetMeasureLogFormService } from './asset-measure-log-form.service';

interface MeasureRowDTO {
  equipmentRepresentation?: string;
  measureId?: string;
  equipmentCode?: string;
  familyCode?: string;
  ratingCode?: string;
  ratingText?: string;
  unitCode?: string;
  counterCode?: string;
  readingDate?: string;
  readingDateDate?: Date;
  source?: string;
  isDiff?: boolean;
  counterUnit?: string;
  value?: string;
  cumulatedCounterValue?: string;
  delta?: string;
  bidMeasureId?: number;
  status?: string;
  coefficient?: string;
  measureDescription?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: string;
  correctMeasureEnable?: boolean;
  propagateMeasureEnabled?: boolean;
  cancelMeasureEnabled?: boolean;
  valueInterRating?: number;
  _expand?: boolean;
}

interface StructureRowDTO {
  equipmentRepresentation?: string;
  counterCode?: string;
  value?: string;
  unitCode?: string;
  formattedRemainingValue?: string;
  limit?: string;
  readingDate?: string;
  source?: string;
  status?: string;
  statusDate?: string;
  statusUser?: string;
  statusState?: string;
  alertIcon?: string;
  alertTooltipCode?: string;
  alertTooltipPercent?: string;
  _expand?: boolean;
}

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
@Component({
  selector: 'aw-asset-measure-log-form',
  templateUrl: './asset-measure-log-form.component.html',
  styleUrls: ['./asset-measure-log-form.component.scss']
})
export class AssetMeasureLogFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  private static readonly MEASURES_TABLE_EXPORT_NAME: string = 'measure-list';
  private static readonly STRUCTURE_TABLE_EXPORT_NAME: string = 'structure-list';
  public static readonly COLSPAN_CONSTANT_VALUE: number = 2;
  public readonly component: typeof AssetMeasureLogFormComponent;

  public measureEvolutionTableCols1: TableColumn[];
  public structureDetailsTableCols1: TableColumn[];
  public reportTableCols: TableColumn[];
  public measureEvolutionTable: MeasureRowDTO[];
  public editSelectedMeasure: MeasureRowDTO;
  public structureDetailsTable: StructureRowDTO[];
  public selectedMeasures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[];
  public displayMeasureEvolutionFullScreen: boolean;
  public displayStructureDetailsFullScreen: boolean;
  public familyVariant: string | undefined;
  public propertyOperationalStatus: LabelValue<string>[];
  public propertyFunction: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public showTooltip: boolean;
  public counterRemaningTooltipText: string;
  public tooltip: string;
  public showValueForm: boolean;
  public isReadOnlyValueDialog: boolean;
  public chartContentReady: boolean;
  public measureVariationData: ChartType;
  public headerValue: string;
  // tslint:disable-next-line:no-any
  public measureChartOptions: any;
  // tslint:disable-next-line:no-any
  public startDate: any;
  // tslint:disable-next-line:no-any
  public endDate: any;
  public code: string | undefined;
  // tslint:disable-next-line:no-any
  public toc: any;
  public selectedAnchor: string | undefined;
  public measureCounterCode: string | undefined;
  public isMeasureLoading: boolean;
  public isLoading: boolean;
  public measureLoading: boolean;

  @ViewChild('measureAnchor')
  public measureAnchor: ElementRef;

  @ViewChild('structureAnchor')
  public structureAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public inputValidationService: InputValidationService,
    public translateService: TranslateService,
    private readonly assetMeasureLogFormService: AssetMeasureLogFormService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    public sessionService: SessionService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);
    this.component = AssetMeasureLogFormComponent;
    this.setTableCols();
    this.init();
    this.initChart();
    this.getTooltipTranslation();
    this.selectedAnchor = undefined;
    this.measureCounterCode = '';
  }

  public getComponentName(): string {
    return ComponentConstants.FLE_ASSET_MEASURE_LOG_FORM;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      const objectId = this.componentData.objectId
        ? this.serializationService.deserialize(this.componentData.objectId)
        : {};

      if (objectId.bidoEquipmentCounterDto && objectId.bidoEquipmentCounterDto.counterCode) {
        this.headerValue = objectId.bidoEquipmentCounterDto.counterCode;
        this.measureCounterCode = this.headerValue;
      }
      if (objectId.bidoEquipmentCounterDto && objectId.bidoEquipmentCounterDto.equipmentCode) {
        this.assetMeasureLogFormService
          .getEquipmentName({ equipmentCode: objectId.bidoEquipmentCounterDto.equipmentCode })
          .subscribe((res) => {
            this.headerValue = this.headerValue + ` | ${res}`;
          });
      }
      const contextMode = this.isCreateOpenMode ? 'tab.createMode' : !!this.componentData.objectId && this.headerValue;

      if (!!contextMode) {
        this.displayComponentContext(contextMode, this.isCreateOpenMode);
      }
      this.loadMeasureTableData();
      this.loadStructureDetailTableData();
    }
    this.toc = [
      {
        id: 'measureAnchor',
        anchor: this.measureAnchor,
        label: 'Measure Evolution'
      },
      {
        id: 'structureAnchor',
        anchor: this.structureAnchor,
        label: 'Structure Detail'
      }
    ];
  }

  private init(): void {
    this.propertyStatus = [];
    this.propertyOperationalStatus = [];
    this.propertyFunction = [];
    this.familyVariant = undefined;
    this.measureEvolutionTable = [];
    this.structureDetailsTable = [];
    this.selectedMeasures = [];
    this.displayMeasureEvolutionFullScreen = false;
    this.displayStructureDetailsFullScreen = false;
    this.showTooltip = false;
    this.counterRemaningTooltipText = '';
    this.tooltip = '';
    this.showValueForm = false;
    this.isReadOnlyValueDialog = true;
    this.chartContentReady = true;
    this.code = '';
  }
  public isSelectedAnchor(anchorId: string): boolean {
    return anchorId === this.selectedAnchor;
  }

  public setSelectedAnchor(anchorId: string): void {
    this.selectedAnchor = anchorId;
  }
  private setTableCols(): void {
    this.reportTableCols = [
      { field: 'reportName', alignment: 'left' },
      { field: 'statusUser', alignment: 'left' },
      { field: 'statusDate', alignment: 'left' }
    ];
    this.structureDetailsTableCols1 = [
      { field: 'equipmentRepresentation', alignment: 'left' },
      { field: 'counterCode', alignment: 'left' },
      { field: 'value', alignment: 'left' },
      { field: 'unitCode', alignment: 'left' },
      { field: 'formattedRemainingValue', alignment: 'left' },
      { field: 'limit', alignment: 'left' },
      { field: 'readingDate', alignment: 'left' }
    ];

    this.measureEvolutionTableCols1 = [
      { field: 'counterCode', alignment: 'left', width: '8rem' },
      { field: 'cumulatedCounterValue', alignment: 'left', width: '8rem' },
      { field: 'isDiff', alignment: 'left', width: '5rem' },
      { field: 'delta', alignment: 'left', width: '8rem' },
      { field: 'unitCode', alignment: 'left', width: '5rem' },
      { field: 'readingDate', alignment: 'left', width: '10rem' },
      { field: 'measureDescription', alignment: 'left' },
      { field: 'coefficient', alignment: 'left', width: '5rem' }
    ];
  }

  public closeMeasureEvolutionDialog(): void {
    this.displayMeasureEvolutionFullScreen = false;
  }
  public closeStructureDetailsDialog(): void {
    this.displayStructureDetailsFullScreen = false;
  }

  public loadMeasureTableData(): void {
    if (!!this.componentData.objectId) {
      this.measureLoading = true;
      const measureCounter = this.serializationService.deserialize(this.componentData.objectId);
      const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
        equipmentCode: measureCounter.bidoEquipmentCounterDto.equipmentCode,
        counterCode: measureCounter.bidoEquipmentCounterDto.counterCode,
        ratingCode: measureCounter.bidoEquipmentCounterDto.ratingCode
          ? measureCounter.bidoEquipmentCounterDto.ratingCode
          : '_',
        familyCode: measureCounter.bidoEquipmentCounterDto.familyCode
      };
      if (!!bidoEquipmentCounterDTOId) {
        this.assetMeasureLogFormService.getMeasureDetailTableData(bidoEquipmentCounterDTOId).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              this.initDateValues(result);
              this.measureEvolutionTable = [];
              this.measureEvolutionTable = result.map((measure) => {
                const measureFRow: MeasureRowDTO = {
                  counterCode: measure.counterCode,
                  readingDate: this.dateService.dateWithHourToString(measure.readingDate),
                  readingDateDate: measure.readingDate,
                  source: measure.source,
                  unitCode: measureCounter.counterUnit,
                  isDiff: measure.isDiff,
                  cumulatedCounterValue: measure.cumulatedCounterValue,
                  delta: measure.delta,
                  status: measure.status,
                  coefficient: measure.coefficient ? measure.coefficient.toString() : '',
                  measureDescription: measure.measureDescription,
                  statusState: measure.statusState,
                  statusUser: measure.statusUser,
                  correctMeasureEnable: measure.correctMeasureEnable,
                  propagateMeasureEnabled: measure.propagateMeasureEnabled,
                  cancelMeasureEnabled: measure.cancelMeasureEnabled,
                  equipmentRepresentation: measure.equipmentRepresentation,
                  measureId: measure.measureId,
                  equipmentCode: measure.equipmentCode,
                  familyCode: measure.familyCode,
                  ratingCode: measure.ratingCode,
                  ratingText: measure.ratingText,
                  counterUnit: measure.counterUnit,
                  value: measure.value,
                  bidMeasureId: measure.bidMeasureId,
                  statusDate: this.dateService.dateWithHourToString(measure.statusDate),
                  valueInterRating: measure.valueInterRating
                };

                return measureFRow;
              });
              this.measureVariationData.datasets[0].data = [];
              this.measureVariationData.labels = [];
              this.setChartData();
              this.measureLoading = false;
            } else {
              this.measureLoading = false;
              super.throwUnboundLocalError('loadMeasureTableData', 'result');
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadMeasureEvolutionData'));
          }
        );
      }
    }
  }

  public loadStructureDetailTableData(): void {
    if (!!this.componentData.objectId) {
      const measureCounter = this.serializationService.deserialize(this.componentData.objectId);
      const bidoEquipmentCounterDTOId: BidoEquipmentCounterDTOId = {
        equipmentCode: measureCounter.bidoEquipmentCounterDto.equipmentCode,
        counterCode: measureCounter.bidoEquipmentCounterDto.counterCode,
        ratingCode: measureCounter.bidoEquipmentCounterDto.ratingCode
          ? measureCounter.bidoEquipmentCounterDto.ratingCode
          : '_',
        familyCode: measureCounter.bidoEquipmentCounterDto.familyCode
      };
      if (!!bidoEquipmentCounterDTOId) {
        this.isLoading = true;
        this.assetMeasureLogFormService.getStructureDetailTableData(bidoEquipmentCounterDTOId).subscribe(
          (result) => {
            if (result !== null && result !== undefined) {
              this.structureDetailsTable = [];
              this.structureDetailsTable = result.map((structure) => {
                const structureFRow: StructureRowDTO = {
                  equipmentRepresentation: structure.equipmentRepresentation,
                  counterCode: structure.counterCode,
                  value: structure.value,
                  unitCode: structure.unitCode,
                  formattedRemainingValue: structure.formattedRemainingValue,
                  limit: structure.limit,
                  readingDate: this.dateService.dateWithHourToString(structure.readingDate),
                  source: structure.source,
                  status: structure.status,
                  statusDate: structure.statusDate,
                  statusUser: structure.statusUser,
                  statusState: structure.statusState,
                  alertIcon: structure.alertIcon,
                  alertTooltipCode: structure.alertTooltipCode,
                  alertTooltipPercent: structure.alertTooltipPercent
                };
                if (!!structure.alertTooltipCode && !!structure.alertTooltipPercent) {
                  this.showTooltip = true;
                  this.tooltip = `${this.counterRemaningTooltipText} : ${structure.alertTooltipPercent}`;
                }

                return structureFRow;
              });
              this.isLoading = false;
            } else {
              this.isLoading = false;
              super.throwUnboundLocalError('loadStructureDetailTableData', 'result');
            }
          },
          () => {
            this.isLoading = false;
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadSructureDetailData'));
          }
        );
      }
    }
  }
  private getTooltipTranslation(): void {
    const tooltip = `${this.getComponentName()}.counterRemaining`;
    this.translateService.get([tooltip]).subscribe((results) => {
      this.counterRemaningTooltipText = results[tooltip];
    });
  }
  public exportMeasureTable(): void {
    if (!!this.componentData.objectId) {
      const measureExportData: (MeasureRowDTO | undefined)[] = this.measureEvolutionTable.map((measure) => {
        if (!!measure) {
          const measuresRowExport: MeasureRowDTO = {
            counterCode: measure.counterCode,
            readingDate: measure.readingDate,
            source: measure.source,
            unitCode: measure.unitCode,
            isDiff: measure.isDiff,
            cumulatedCounterValue: measure.cumulatedCounterValue,
            delta: measure.delta,
            status: measure.status,
            coefficient: measure.coefficient,
            measureDescription: measure.measureDescription,
            statusState: measure.statusState,
            statusUser: measure.statusUser,
            statusDate: measure.statusDate
          };

          return measuresRowExport;
        } else {
          super.throwUnboundLocalError('exportMeasureTable', 'measure');
        }
      });
      this.exportService.toExcel(
        measureExportData,
        AssetMeasureLogFormComponent.MEASURES_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportMeasureTable', 'this.componentData.objectId');
    }
  }
  public exportStructureTable(): void {
    const structureExportData: (StructureRowDTO | undefined)[] = this.structureDetailsTable.map((structure) => {
      if (!!structure) {
        const structureRowExport: StructureRowDTO = {
          equipmentRepresentation: structure.equipmentRepresentation,
          counterCode: structure.counterCode,
          value: structure.value,
          unitCode: structure.unitCode,
          formattedRemainingValue: structure.formattedRemainingValue,
          limit: structure.limit,
          readingDate: structure.readingDate,
          source: structure.source,
          status: structure.status,
          statusDate: structure.statusDate,
          statusUser: structure.statusUser,
          statusState: structure.statusState
        };

        return structureRowExport;
      } else {
        super.throwUnboundLocalError('exportStructureTable', 'structure');
      }
    });
    if (!!this.componentData) {
      this.exportService.toExcel(
        structureExportData,
        AssetMeasureLogFormComponent.STRUCTURE_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportStructureTable', 'this.componentData');
    }
  }

  public onClickCancel() {
    if (this.selectedMeasures !== []) {
      const partialMessageKey = 'confirmCancelSelectedMeasure';

      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          const measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput = {
            equipmentRepresentation: this.selectedMeasures[0].equipmentRepresentation,
            measureId: this.selectedMeasures[0].measureId,
            equipmentCode: this.selectedMeasures[0].equipmentCode,
            familyCode: this.selectedMeasures[0].familyCode,
            ratingCode: this.selectedMeasures[0].ratingCode,
            ratingText: this.selectedMeasures[0].ratingText,
            counterCode: this.selectedMeasures[0].counterCode,
            readingDate: this.selectedMeasures[0].readingDate
              ? new Date(this.selectedMeasures[0].readingDate)
              : undefined,
            source: this.selectedMeasures[0].source,
            isDiff: this.selectedMeasures[0].isDiff,
            counterUnit: this.selectedMeasures[0].counterUnit,
            value: this.selectedMeasures[0].value,
            cumulatedCounterValue: this.selectedMeasures[0].cumulatedCounterValue,
            delta: this.selectedMeasures[0].delta,
            // tslint:disable-next-line:radix
            bidMeasureId: parseInt(this.selectedMeasures[0].measureId as string),
            status: this.selectedMeasures[0].status,
            coefficient: this.selectedMeasures[0].coefficient,
            measureDescription: this.selectedMeasures[0].measureDescription,
            statusState: this.selectedMeasures[0].statusState,
            statusUser: this.selectedMeasures[0].statusUser,
            statusDate: this.selectedMeasures[0].statusDate ? new Date(this.selectedMeasures[0].statusDate) : undefined,
            valueInterRating: this.selectedMeasures[0].valueInterRating
          };
          this.assetMeasureLogFormService.cancelSelectedMeasure(measureId).subscribe(
            () => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnCancelMeasure'));
              this.selectedMeasures = [];
              this.loadMeasureTableData();
              this.loadStructureDetailTableData();
            },
            (error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnCancelMeasure'));
            }
          );
        }
      });
    }
  }

  public onClickPropogate() {
    if (this.selectedMeasures !== []) {
      const measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput = {
        equipmentRepresentation: this.selectedMeasures[0].equipmentRepresentation,
        measureId: this.selectedMeasures[0].measureId,
        equipmentCode: this.selectedMeasures[0].equipmentCode,
        familyCode: this.selectedMeasures[0].familyCode,
        ratingCode: this.selectedMeasures[0].ratingCode,
        ratingText: this.selectedMeasures[0].ratingText,
        counterCode: this.selectedMeasures[0].counterCode,
        readingDate: this.selectedMeasures[0].readingDate ? new Date(this.selectedMeasures[0].readingDate) : undefined,
        source: this.selectedMeasures[0].source,
        isDiff: this.selectedMeasures[0].isDiff,
        counterUnit: this.selectedMeasures[0].counterUnit,
        value: this.selectedMeasures[0].value,
        cumulatedCounterValue: this.selectedMeasures[0].cumulatedCounterValue,
        delta: this.selectedMeasures[0].delta,
        // tslint:disable-next-line:radix
        bidMeasureId: parseInt(this.selectedMeasures[0].measureId as string),
        status: this.selectedMeasures[0].status,
        coefficient: this.selectedMeasures[0].coefficient,
        measureDescription: this.selectedMeasures[0].measureDescription,
        statusState: this.selectedMeasures[0].statusState,
        statusUser: this.selectedMeasures[0].statusUser,
        statusDate: this.selectedMeasures[0].statusDate ? new Date(this.selectedMeasures[0].statusDate) : undefined,
        valueInterRating: this.selectedMeasures[0].valueInterRating
      };
      this.assetMeasureLogFormService.propogateSelectedMeasure(measureId).subscribe(
        (result) => {
          if (result === 'MSG_SUCCESS_MEASURE_PROPAGATE') {
            this.messageService.showSuccessMessage(this.getTranslateKey('measurePropagated'));
            this.selectedMeasures = [];
            this.loadMeasureTableData();
            this.loadStructureDetailTableData();
          }
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnPropagation'));
        }
      );
    }
  }
  public onClickCorrect(): void {
    this.showValueForm = true;
    this.isReadOnlyValueDialog = false;
    this.editSelectedMeasure = JSON.parse(JSON.stringify(this.selectedMeasures[0]));
  }
  public onAddOperation(event) {
    if (this.selectedMeasures !== []) {
      const measureId: FindBidoMeasuresByEquipmentAndCounterCodesOutput = {
        equipmentRepresentation: this.selectedMeasures[0].equipmentRepresentation,
        measureId: this.selectedMeasures[0].measureId,
        equipmentCode: this.selectedMeasures[0].equipmentCode,
        familyCode: this.selectedMeasures[0].familyCode,
        ratingCode: this.selectedMeasures[0].ratingCode,
        ratingText: this.selectedMeasures[0].ratingText,
        counterCode: this.selectedMeasures[0].counterCode,
        readingDate: this.selectedMeasures[0].readingDate ? new Date(this.selectedMeasures[0].readingDate) : undefined,
        source: this.selectedMeasures[0].source,
        isDiff: this.selectedMeasures[0].isDiff,
        counterUnit: this.selectedMeasures[0].counterUnit,
        value: event.value,
        cumulatedCounterValue: event.value,
        delta: this.selectedMeasures[0].delta,
        bidMeasureId: this.selectedMeasures[0].bidMeasureId,
        status: this.selectedMeasures[0].status,
        coefficient: this.selectedMeasures[0].coefficient,
        measureDescription: event.measureDescription
          ? event.measureDescription
          : this.selectedMeasures[0].measureDescription,
        statusState: this.selectedMeasures[0].statusState,
        statusUser: this.selectedMeasures[0].statusUser,
        statusDate: this.selectedMeasures[0].statusDate ? new Date(this.selectedMeasures[0].statusDate) : undefined,
        valueInterRating: event.valueInterRating
      };
      this.assetMeasureLogFormService.coorectSelectedMeasure(measureId).subscribe(
        (result) => {
          if (!!this.measureEvolutionTable) {
            if (!!result) {
              this.selectedMeasures[0].cumulatedCounterValue = result.value;
            }
          } else {
            super.throwUnboundLocalError('onAddOperation', 'this.measureEvolutionTable');
          }
          this.selectedMeasures = [];
          this.loadMeasureTableData();
          this.loadStructureDetailTableData();
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnCorrectMeasure'));
        },
        (error) => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnCorrect'));
        }
      );
    }
  }
  private initDateValues(measure: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) {
    const measures = measure;
    const dateArray: string[] = [];
    if (!!measures) {
      measures.forEach((st) => {
        dateArray.push(this.dateService.dateWithHourToString(st.readingDate));
      });
    }
    this.startDate = dateArray[0];
    this.endDate = dateArray[0];

    // iterate over array values and update min & max
    dateArray.forEach((v) => {
      this.endDate = new Date(v) > new Date(this.endDate) ? v : this.endDate;
      this.startDate = new Date(v) < new Date(this.startDate) ? v : this.startDate;
    });
    const codeValue = measure.find((res) => this.dateService.dateWithHourToString(res.readingDate) === this.endDate);
    if (this.componentData.objectId) {
      const measureCounter = this.serializationService.deserialize(this.componentData.objectId);
      this.code = !!codeValue ? `${codeValue.cumulatedCounterValue} ${measureCounter.counterUnit}` : '';
    }
  }

  public setChartData(startDate?: boolean, endDate?: boolean): void {
    if (startDate) {
      const startDateValue = this.startDate;
      this.startDate = this.dateService.dateWithHourToString(startDateValue);
      this.measureVariationData.datasets[0].data = [];
      this.measureVariationData.labels = [];
    }
    if (endDate) {
      const endDateValue = this.endDate;
      this.endDate = this.dateService.dateWithHourToString(endDateValue);
      this.measureVariationData.datasets[0].data = [];
      this.measureVariationData.labels = [];
    }
    if (this.measureEvolutionTable.length !== 0) {
      const filterTable = this.measureEvolutionTable.filter(
        (res) => res.cumulatedCounterValue !== null && res.cumulatedCounterValue !== undefined
      );
      filterTable.forEach((st) => {
        if (
          !!this.startDate &&
          !!this.endDate &&
          !!st.readingDate &&
          st.readingDate >= this.startDate &&
          st.readingDate <= this.endDate
        ) {
          this.measureVariationData.labels.push(this.dateService.dateWithHourToStringWithoutHour(st.readingDateDate));
          if (st.cumulatedCounterValue !== null && st.cumulatedCounterValue !== undefined) {
            this.measureVariationData.datasets[0].data.push(parseInt(st.cumulatedCounterValue, 10));
          }
        }
      });
      this.measureVariationData.labels.reverse();
      this.measureVariationData.datasets[0].data.reverse();
    }

    this.measureVariationData = { ...this.measureVariationData };
    this.chartContentReady = true;
  }
  private initChart(): void {
    this.measureVariationData = {
      datasets: [
        {
          data: [],
          label: 'Value',
          borderColor: '#D3C632',
          backgroundColor: '#D3C632',
          hoverBackgroundColor: '#D3C632',
          fill: false
        }
      ],
      labels: []
    };

    this.setMeasureChartOptions();
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
  public openEquipmentForm(objectId): void {
    this.openEquipment(objectId, ComponentOpenMode.Read);
  }

  private openEquipment(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.EquipmentFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EquipmentFormComponent',
      objectId,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public reload() {
    this.loadMeasureTableData();
    this.loadStructureDetailTableData();
  }

  public showButtonCorrectMeasure(aMeasure: MeasureRowDTO): boolean | undefined {
    if (this.selectedMeasures.length > 1 || !aMeasure) {
      return false;
    }
    if (this.sessionService.isSpecificDassault && BidoMeasureConsants.isFromExternalSources(aMeasure.source)) {
      return false;
    }

    return aMeasure.correctMeasureEnable;
  }

  public showButtonCancelMeasure(aMeasure: MeasureRowDTO): boolean | undefined {
    if (this.selectedMeasures.length > 1 || !aMeasure) {
      return false;
    }
    if (this.sessionService.isSpecificDassault && BidoMeasureConsants.isFromExternalSources(aMeasure.source)) {
      return false;
    }

    return aMeasure.cancelMeasureEnabled;
  }

  public showButtonPropagateMeasure(aMeasure: MeasureRowDTO): boolean | undefined {
    if (this.selectedMeasures.length > 1 || !aMeasure) {
      return false;
    }
    if (this.sessionService.isSpecificDassault && BidoMeasureConsants.isFromExternalSources(aMeasure.source)) {
      return false;
    }

    return aMeasure.propagateMeasureEnabled;
  }

  public toggleRowDetailsVisibilityVisit(rowData: MeasureRowDTO | StructureRowDTO) {
    rowData._expand = !rowData._expand;
  }
}
