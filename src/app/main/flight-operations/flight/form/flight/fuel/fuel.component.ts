import { Component, ElementRef, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { AppConstants } from '../../../../../../shared/constants/app-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BidoFlightLoadDTO } from '../../../../../../shared/types/api-types/bido-flight-load-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { FlightDTO } from '../../../../../../shared/types/api-types/flight-dto.interface';
import { FlightFuelDTO } from '../../../../../../shared/types/api-types/flight-fuel-dto.interface';
import { FlightUnitOfMeasureDTO } from '../../../../../../shared/types/api-types/flight-unit-of-measure-dto.interface';
import { ChartType } from '../../../../../../shared/types/chart-type.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { FlightFormService } from '../flight-form.service';

interface FuelData {
  graphIndex: number;
  label: string;
  type: string;
  value: number;
  valueChanged: Subject<number>;
}

@Component({
  selector: 'aw-flight-fuel',
  styleUrls: ['./fuel.component.scss'],
  templateUrl: './fuel.component.html'
})
export class FuelComponent extends GenericComponent {
  private static readonly GRAPH_INPUT_DEBOUNCE_TIME: number = 500;

  public defaultVolumeUnit: string | undefined;
  public fuelDataList: FuelData[];
  public fuelLoadDesiredTotal: number;
  public fuelLoadFactual: number;
  public realisedFuelUsed: number;

  public chartData: ChartType;
  public chartOptions: unknown;
  public chartType: string;

  private defaultVolumeUnitCode: string | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  @Input()
  public showFuelTotal: boolean = true;

  // ****************************************************************************

  public constructor(
    private readonly flightFormService: FlightFormService,
    private readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'FuelComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.defaultVolumeUnit = undefined;
    this.defaultVolumeUnitCode = undefined;
    this.fuelDataList = [];
    this.fuelLoadDesiredTotal = 0;
    this.fuelLoadFactual = 0;
    this.realisedFuelUsed = 0;
  }

  public onLoad(
    missionEquipment: BidoMissionEquipmentDTO,
    flightLoadList: BidoFlightLoadDTO[],
    unitMeasure: BireUnitMeasureDTO
  ): void {
    this.defaultVolumeUnit = unitMeasure.unitName || unitMeasure.unitCode;
    this.defaultVolumeUnitCode = unitMeasure.unitCode;
    this.realisedFuelUsed = ObjectUtils.isDefined(missionEquipment.fuelUsed)
      ? (missionEquipment.fuelUsed as number)
      : 0;

    this.propertiesService.getValue(GenericPropertyConstants.FUEL_TYPE_MAP).subscribe((fuelTypeResults) => {
      this.fuelDataList = fuelTypeResults.map((fuelType, index) => {
        const selectedFlightLoad = flightLoadList.find((flightLoad) => flightLoad.floType === fuelType.value);

        return this.createFuelData(fuelType, selectedFlightLoad, index);
      });

      this.setChart();
    });
  }

  private onBeforeLoadOnce(): void {
    this.registerFuelUpdatedObservable();
  }

  // ****************************************************************************

  public fillFlight(flight: FlightDTO): void {
    flight.flightFuelList = this.fuelDataList.map((fuelData) => this.createFlightFuel(fuelData));
    flight.usedFuel = this.realisedFuelUsed;
  }

  private createFlightFuel(fuelData: FuelData): FlightFuelDTO {
    const flightUom: FlightUnitOfMeasureDTO = {
      id: this.defaultVolumeUnitCode,
      name: '',
      description: ''
    };
    const flightFuel: FlightFuelDTO = {
      id: '',
      type: fuelData.type,
      uom: flightUom,
      value: fuelData.value
    };

    return flightFuel;
  }

  private createFuelData(
    fuelType: LabelValue<string>,
    flightLoad: BidoFlightLoadDTO | undefined,
    graphIndex: number
  ): FuelData {
    const fuelData: FuelData = {
      graphIndex,
      label: fuelType.label,
      type: fuelType.value,
      value: flightLoad && flightLoad.floValue ? Number(flightLoad.floValue) : 0,
      valueChanged: this.setFuelDataValueChanged(graphIndex)
    };
    fuelData.valueChanged.next(fuelData.value);

    return fuelData;
  }

  private registerFuelUpdatedObservable(): void {
    this.flightFormService.fuelUpdated$.pipe(takeUntil(this.unsubscribe)).subscribe((newValue: number) => {
      this.fuelLoadFactual = newValue;
    });
  }

  private setFuelDataValueChanged(graphIndex: number): Subject<number> {
    const valueChanged = new Subject<number>();
    valueChanged
      .pipe(debounceTime(FuelComponent.GRAPH_INPUT_DEBOUNCE_TIME), distinctUntilChanged(), takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.updateChartValue(graphIndex, value);
        this.updateChart();

        this.fuelLoadDesiredTotal = this.chartData.datasets[0].data.reduce((acc, val) => acc + val, 0);
      });

    return valueChanged;
  }

  /**************************************************************************
   * Chart
   *************************************************************************/

  private setChart(): void {
    this.chartType = 'horizontalBar';
    this.chartData = {
      datasets: [
        {
          data: this.fuelDataList.map((fuelData) => fuelData.value),
          backgroundColor: [],
          hoverBackgroundColor: []
        }
      ],
      labels: []
    };

    this.setChartLabels();
    this.setChartOptions();
  }

  private setChartLabels(): void {
    const additionalReserveKey = this.getTranslateKey('additionalReserve');
    const clearanceReserveKey = this.getTranslateKey('clearanceReserve');
    const finalReserveKey = this.getTranslateKey('finalReserve');
    const roadReserveKey = this.getTranslateKey('roadReserve');
    const rollingKey = this.getTranslateKey('rolling');
    const stepConsumptionKey = this.getTranslateKey('stepConsumption');

    this.translateService
      .get([additionalReserveKey, clearanceReserveKey, finalReserveKey, roadReserveKey, rollingKey, stepConsumptionKey])
      .subscribe((results) => {
        const additionalReserveLabel = results ? results[additionalReserveKey] : 'Additional Reserve';
        const clearanceReserveLabel = results ? results[clearanceReserveKey] : 'Clearance Reserve';
        const finalReserveLabel = results ? results[finalReserveKey] : 'Final Reserve';
        const roadReserveLabel = results ? results[roadReserveKey] : 'Road Reserve';
        const rollingLabel = results ? results[rollingKey] : 'Rolling';
        const stepConsumptionLabel = results ? results[stepConsumptionKey] : 'Step Consumption';

        this.chartData.labels = [
          rollingLabel,
          stepConsumptionLabel,
          roadReserveLabel,
          clearanceReserveLabel,
          finalReserveLabel,
          additionalReserveLabel
        ];
      });
  }

  private setChartOptions(): void {
    this.chartOptions = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
              suggestedMax: 100
            }
          }
        ],
        yAxes: [
          {
            display: false
          }
        ]
      },
      tooltips: {
        bodyFontColor: AppConstants.COLOR_BACKGROUND_PRIMARY
      }
    };
  }

  private updateChart(): void {
    this.chartData = { ...this.chartData };
  }

  private updateChartValue(index: number, value: number): void {
    this.chartData.datasets[0].data[index] = value;
  }
}
