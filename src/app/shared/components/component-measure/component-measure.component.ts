import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Observable, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AppConstants } from '../../constants/app-constants';
import { ComponentConstants } from '../../constants/component-constants';
import { ControlConfigConstants } from '../../constants/control-config-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { DateService } from '../../services/date.service';
import { FavoriteService } from '../../services/favorite.service';
import { LoaderService } from '../../services/loader.service';
import { MessageService } from '../../services/message.service';
import { SerializationService } from '../../services/serialization.service';
import { TabService } from '../../services/tab.service';
import { AssetInputDto } from '../../types/api-input-types/fleet-management/asset-input-dto.interface';
import { AssetOutputDto } from '../../types/api-output-types/fleet-management/asset-output-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from '../../types/api-output-types/fleet-management/find-bido-counter-references-by-equipment-code-output';
import { FindBidoMeasuresByEquipmentAndCounterCodesOutput } from '../../types/api-output-types/fleet-management/find_bido-measures-by-equipment-and-counter-codes-output';
import { BidoEquipmentCounterDTOId } from '../../types/api-types/bido-equipment-counter-dto-id.interface';
import { BidoEquipmentDTO } from '../../types/api-types/bido-equipment-dto.interface';
import { BireMeasureReferenceDTO } from '../../types/api-types/bire-measure-reference-dto.interface';
import { PageComponent } from '../../types/page-component';
import { PageComponentData } from '../../types/page-component-data.interface';
import { PopupEntry } from '../../types/popup-entry.interface';
import { TableColumn } from '../../types/table-column.interface';

import { ComponentMeasureService } from './component-measure.service';

interface MeasureDataRow {
  counterCode?: string;
  cumulatedCounterValue?: string;
  counterUnit?: string;
  ratingText?: string;
  ratingCounterValue?: string;
  remainingValue?: string;
  referenceValue?: string;
  readingDate?: string;
  source?: string;
  dateLimit?: string;
  _obj: FindBidoCounterReferencesByEquipmentCodeOutput;
}

interface XYData {
  x: Date;
  y: number;
}

interface XYChartType {
  datasets: {
    data: XYData[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    fill: boolean;
  }[];
}

@Component({
  selector: 'aw-component-measure',
  templateUrl: './component-measure.component.html',
  styleUrls: ['./component-measure.component.scss']
})
export class ComponentMeasureComponent extends PageComponent<PageComponentData> implements OnInit {
  public static readonly COLOR_TSN: string = '#D3C632';
  public static readonly COLOR_CSN: string = '#42A5F5';

  public TABLE_PAGINATION_DEFAULT_ROWS: number = AppConstants.TABLE_PAGINATION_DEFAULT_ROWS;

  public equipmentCode: string;
  public bidoEquipmentDTO: BidoEquipmentDTO;
  public measuresTableCols: TableColumn[];
  public bidoMeasuresDisplayed: MeasureDataRow[];
  public selectedMeasure: MeasureDataRow[];
  public dataMeasure: PopupEntry<FindBidoCounterReferencesByEquipmentCodeOutput>;
  public measureTableFilteredRowsNb: number;
  public currentMeasure: FindBidoCounterReferencesByEquipmentCodeOutput;

  public csnLabel: string;
  public tsnLabel: string;

  public startDate: Date;
  public endDate: Date;
  public tsn: string | undefined;
  public csn: string | undefined;
  public measureVariationData: XYChartType;
  public measureChartOptions: unknown;
  public usageChartOptions: unknown;
  public measureTypes: SelectItem[];
  public selectedMeasureType: string | undefined;
  private measureChartDataObj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[][];
  public showMeasureChart: boolean;
  public isLoadingMeasureTable: boolean;
  private counterMap: Map<string, BireMeasureReferenceDTO>;
  private followedInRatingVisibility: boolean;
  public equipment: AssetOutputDto;

  public isAircraft: boolean;
  public isTool: boolean;
  public showLimitPopup: boolean;
  public showMeasurePopup: boolean;

  public showMeasureReportText: boolean;
  public measureReportText: string;
  public isReadOnlyMeasureUpdateDialog: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly dateService: DateService,
    private readonly componentMeasureService: ComponentMeasureService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public ngOnInit() {
    this.bidoEquipmentDTO = {};
    this.selectedMeasure = [];
    this.measureChartDataObj = [];
    this.equipment = {
      bidoEquipmentDTO: {},
      measureTableDtos: [],
      bidoDocumentationTableOutputDTOs: [],
      stockOutputDto: {},
      superiorAsset: {},
      usageCounterCalculationDTO: {},
      saveUsageEquipment: {
        updateBidoEquipmentUsageDTOList: []
      }
    };

    this.init();
  }

  private init() {
    this.bidoEquipmentDTO = !!this.componentData.objectId
      ? this.serializationService.deserialize(this.componentData.objectId)
      : undefined;

    const context = !!this.bidoEquipmentDTO.sn
      ? `P/N ${this.bidoEquipmentDTO.pnCode} | S/N ${this.bidoEquipmentDTO.sn}`
      : `P/N ${this.bidoEquipmentDTO.pnCode}`;
    this.displayComponentContext(context, this.isCreateOpenMode);

    this.componentMeasureService.findFirstBidoEquipmentsByPnAndSnCodes(this.bidoEquipmentDTO).subscribe((res) => {
      if (!!res) {
        this.equipmentCode = res.equipmentCode as string;
      }
      this.setMeasureChartOptions();
      this.getBidoEquipment();
    });
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_MEASURE_COMPONENT;
  }

  public refresh() {
    this.init();
  }

  private getBidoEquipment() {
    const assetId: AssetInputDto = {
      bidoEquipmentDTOId: {
        equipmentCode: this.equipmentCode as string
      },
      assetfunction: ' '
    };
    this.componentMeasureService.findBidoEquipmentAlternative(assetId).subscribe((result) => {
      if (result) {
        this.equipment = { ...result };
        this.getMeasureTabData();
      }
    });
  }

  private getMeasureTabData(): void {
    this.equipment.measureTableDtos = [];
    this.componentMeasureService.getMeasureTabData(this.equipment.bidoEquipmentDTO).subscribe((result) => {
      if (result) {
        this.equipment.measureTableDtos = result;
        this.loadMeasureChartData();
      }
    });
  }

  private transformMeasures(listMeasures: FindBidoCounterReferencesByEquipmentCodeOutput[]) {
    return listMeasures.map((obj) => {
      const measureDataRow: MeasureDataRow = {
        _obj: obj,
        counterCode: obj.counterCode,
        counterUnit: obj.counterUnit,
        cumulatedCounterValue: obj.cumulatedCounterValue,
        ratingCounterValue: obj.ratingCounterValue,
        ratingText: obj.ratingText,
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
    this.isLoadingMeasureTable = true;
    this.counterMap = new Map<string, BireMeasureReferenceDTO>();
    this.componentMeasureService
      .findAllBireMeasureReferences()
      .pipe(finalize(() => (this.isLoadingMeasureTable = false)))
      .subscribe((list) => {
        list.forEach((element) => {
          if (element.counterCode) {
            this.counterMap.set(element.counterCode, element);
          }
        });
        this.setTableDynamicHeaders();
        // Load measure table here with dynamic columns
        this.bidoMeasuresDisplayed = this.transformMeasures(this.equipment.measureTableDtos || []);
        this.showMeasureChart = false;

        if (this.bidoMeasuresDisplayed.length > 0) {
          const observables: Observable<FindBidoMeasuresByEquipmentAndCounterCodesOutput[]>[] = [];
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
                  observables.push(this.componentMeasureService.getMeasureDetailTableData(bidoEquipmentCounterDTOId));
                  setUpCounters.push(counterCode || '');
                }
              }
            });

          if (observables.length > 0) {
            forkJoin(observables).subscribe((results) => {
              this.showMeasureChart = true;
              this.measureChartDataObj = results;
              let allMeasures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[] = [];
              this.measureChartDataObj.forEach((element) => {
                allMeasures = [...allMeasures, ...element];
              });
              this.initDateValues(allMeasures);
              this.setMeasureChartData();
              this.isLoadingMeasureTable = false;
            });
          }
        } else {
          this.isLoadingMeasureTable = false;
        }
      });
  }

  public setMeasureChartData() {
    const ALL = 'ALL';

    if (
      this.measureChartDataObj !== null &&
      this.measureChartDataObj !== undefined &&
      this.measureChartDataObj.length > 0
    ) {
      this.measureVariationData.datasets = [];
      this.measureChartDataObj
        .filter((obj: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) => {
          if (obj && obj.length > 0 && this.selectedMeasureType && this.selectedMeasureType !== ALL) {
            return obj[0].counterCode === this.selectedMeasureType;
          }

          return true;
        })
        .forEach((element: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) => {
          const getFirstElement = element[0];
          if (getFirstElement) {
            const data: XYData[] = [];
            const datasetObj = {
              data,
              label:
                getFirstElement.counterCode === this.tsnLabel
                  ? this.translateService.instant('hours')
                  : this.translateService.instant('cycle'),
              borderColor:
                getFirstElement.counterCode === this.tsnLabel
                  ? ComponentMeasureComponent.COLOR_TSN
                  : ComponentMeasureComponent.COLOR_CSN,
              backgroundColor:
                getFirstElement.counterCode === this.tsnLabel
                  ? ComponentMeasureComponent.COLOR_TSN
                  : ComponentMeasureComponent.COLOR_CSN,
              hoverBackgroundColor:
                getFirstElement.counterCode === this.tsnLabel
                  ? ComponentMeasureComponent.COLOR_TSN
                  : ComponentMeasureComponent.COLOR_CSN,
              fill: false,
              cubicInterpolationMode: 'monotone'
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
                  datasetObj.data.push({
                    x: new Date(st.readingDate),
                    y: parseInt(st.cumulatedCounterValue, 10)
                  });
                }
              }
            });
          }
        });

      this.measureVariationData = { ...this.measureVariationData };
    }
  }

  public setTableDynamicHeaders() {
    this.followedInRatingVisibility = false;
    if (
      !this.isAircraft &&
      !this.isTool &&
      this.equipment &&
      this.equipment.bidoEquipmentDTO &&
      this.equipment.bidoEquipmentDTO.familyVariantCode
    ) {
      this.componentMeasureService.isFollowedInRating(this.equipment.bidoEquipmentDTO.familyVariantCode).subscribe(
        (results) => {
          this.followedInRatingVisibility = results;

          const checkRatingExists = this.bidoMeasuresDisplayed.filter((obj) => {
            return !!obj.counterCode ? this.getRatingDataVisibility(this.counterMap.get(obj.counterCode)) : false;
          })[0];
          const checkLimitDateExists = this.bidoMeasuresDisplayed.filter((obj) => {
            return !!obj.dateLimit;
          })[0];

          this.loadMeasureTableHeader(!!checkRatingExists, !!checkLimitDateExists);
        },
        (err) => {
          this.messageService.showErrorMessage(err.error.errorDetail);
          this.loadMeasureTableHeader(false, false);
        }
      );
    } else {
      this.loadMeasureTableHeader(false, false);
    }
  }

  private getRatingDataVisibility(selectedBireMeasureReferenceDTO: BireMeasureReferenceDTO | undefined): boolean {
    if (selectedBireMeasureReferenceDTO) {
      if (!selectedBireMeasureReferenceDTO.isCounter) {
        return false;
      }
    }

    return this.followedInRatingVisibility;
  }

  private loadMeasureTableHeader(showRating: boolean, showDateLimit: boolean): void {
    this.measuresTableCols = [
      { field: 'counterCode', alignment: 'left' },
      { field: 'cumulatedCounterValue', alignment: 'left' },
      { field: 'counterUnit', alignment: 'left' }
    ];
    if (showRating) {
      this.measuresTableCols.push({ field: 'ratingText', alignment: 'left' });
      this.measuresTableCols.push({ field: 'ratingCounterValue', alignment: 'left' });
    }

    this.measuresTableCols.push({ field: 'remainingValue', alignment: 'center' });
    this.measuresTableCols.push({ field: 'referenceValue', alignment: 'left' });

    if (showDateLimit) {
      this.measuresTableCols.push({ field: 'dateLimit', alignment: 'left' });
    }

    this.measuresTableCols.push({ field: 'readingDate', alignment: 'left' });
    this.measuresTableCols.push({ field: 'source', alignment: 'left' });
  }

  private setMeasureChartOptions(): void {
    this.measureChartOptions = {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                month: AppConstants.MOMENTJS_DATE
              }
            }
          }
        ],
        yAxes: [{}]
      },
      legend: {
        display: false
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private initDateValues(measures: FindBidoMeasuresByEquipmentAndCounterCodesOutput[]) {
    const dateArray: Date[] = [];
    if (!!measures && measures.length > 0) {
      measures.forEach((st) => {
        if (st.readingDate !== null && st.readingDate !== undefined) {
          dateArray.push(st.readingDate);
        }
      });

      const lastYear: Date = new Date();
      lastYear.setFullYear(lastYear.getFullYear() - 1);
      this.startDate = lastYear;
      this.endDate = new Date();
    }
  }

  public getAlertIcon(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (
      row &&
      row.aPotentialAlertData &&
      row.aPotentialAlertData.potentialAlertLevel !== null &&
      row.aPotentialAlertData.potentialAlertLevel !== undefined
    ) {
      return this.getColorByIconCode(row.aPotentialAlertData.potentialAlertLevel);
    }

    return '';
  }

  public getAlertIconTooltip(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.alertTooltip) {
      return row.aPotentialAlertData.alertTooltip;
    }

    return '';
  }

  public getMonthGapToolTip(obj: MeasureDataRow): string {
    const row: FindBidoCounterReferencesByEquipmentCodeOutput = obj._obj;
    if (row && row.aPotentialAlertData && row.aPotentialAlertData.monthGapToolTip) {
      return row.aPotentialAlertData.monthGapToolTip;
    }

    return '';
  }

  public getColorByIconCode(iconCode: string): string {
    switch (iconCode) {
      case ControlConfigConstants.ICON_GREEN_LIGHT_CODE:
        return AppConstants.COLOR_GREEN;
      case ControlConfigConstants.ICON_YELLOW_LIGHT_CODE:
        return AppConstants.COLOR_YELLOW;
      case ControlConfigConstants.ICON_RED_LIGHT_CODE:
        return AppConstants.COLOR_RED;
      case ControlConfigConstants.ICON_NONE_LIGHT_CODE:
        return '';
      case ControlConfigConstants.ICON_GREEN_LED_CODE:
        return AppConstants.COLOR_GREEN;
      case ControlConfigConstants.ICON_YELLOW_LED_CODE:
        return AppConstants.COLOR_YELLOW;
      case ControlConfigConstants.ICON_RED_LED_CODE:
        return AppConstants.COLOR_RED;
      case ControlConfigConstants.ICON_NONE_LED_CODE:
        return '';
      default:
        return '';
    }
  }
}
