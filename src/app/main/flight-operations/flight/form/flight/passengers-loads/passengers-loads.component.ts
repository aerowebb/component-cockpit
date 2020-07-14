import { Component, ElementRef, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BidoFlightLoadDTO } from '../../../../../../shared/types/api-types/bido-flight-load-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BireUnitMeasureDTO } from '../../../../../../shared/types/api-types/bire-unit-measure-dto.interface';
import { FlightDTO } from '../../../../../../shared/types/api-types/flight-dto.interface';
import { FlightFuelDTO } from '../../../../../../shared/types/api-types/flight-fuel-dto.interface';
import { FlightLoadCategoryDTO } from '../../../../../../shared/types/api-types/flight-load-category-dto.interface';
import { FlightLoadDTO } from '../../../../../../shared/types/api-types/flight-load-dto.interface';
import { FlightUnitOfMeasureDTO } from '../../../../../../shared/types/api-types/flight-unit-of-measure-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

import { LoadRow } from './types/load-row.interface';

@Component({
  selector: 'aw-flight-passengers-loads',
  templateUrl: './passengers-loads.component.html'
})
export class PassengersLoadsComponent extends GenericComponent {
  public defaultVolumeUnitCode: string | undefined;
  public loadTable: LoadRow[];
  public loadTableColList: TableColumn[];
  public loadTableSelection: LoadRow | undefined;
  public loadTableLoading: boolean;
  public passengers: number;
  public passengersDeplanned: number;
  public passengersPlanned: number;
  public remainingloadCategoryList: SelectItem[];
  public shipment: number;
  public uomList: SelectItem[];

  public dialogAddLoadVisible: boolean;
  public dialogEditLoadVisible: boolean;

  private loadCategoryList: LabelValue<string>[];
  private loadTableSelectionIndex: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public constructor(
    private readonly flightFormService: FlightFormService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'PassengersLoadsComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.defaultVolumeUnitCode = undefined;
    this.loadCategoryList = [];
    this.loadTable = [];
    this.loadTableSelection = undefined;
    this.loadTableSelectionIndex = undefined;
    this.loadTableLoading = false;
    this.passengers = 0;
    this.passengersDeplanned = 0;
    this.passengersPlanned = 0;
    this.remainingloadCategoryList = [];
    this.shipment = 0;
    this.uomList = [];

    this.dialogAddLoadVisible = false;
    this.dialogEditLoadVisible = false;
  }

  public onLoad(
    missionEquipment: BidoMissionEquipmentDTO,
    flightLoad: BidoFlightLoadDTO[],
    unitMeasure: BireUnitMeasureDTO
  ): void {
    this.loadTableLoading = true;

    this.defaultVolumeUnitCode = unitMeasure.unitCode;

    this.passengers = ObjectUtils.isDefined(missionEquipment.passengerNumber)
      ? (missionEquipment.passengerNumber as number)
      : 0;
    this.passengersDeplanned = ObjectUtils.isDefined(missionEquipment.deplannedPassengerNumber)
      ? (missionEquipment.deplannedPassengerNumber as number)
      : 0;
    this.passengersPlanned = ObjectUtils.isDefined(missionEquipment.plannedPassengerNumber)
      ? (missionEquipment.plannedPassengerNumber as number)
      : 0;
    this.shipment = ObjectUtils.isDefined(missionEquipment.shipmentNumber)
      ? (missionEquipment.shipmentNumber as number)
      : 0;

    forkJoin([
      this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_LOAD_CATEGORY_MAP),
      this.flightFormService.findAllBireUnitMeasure()
    ])
      .pipe(
        finalize(() => {
          this.loadTableLoading = false;
        })
      )
      .subscribe(([loadCategoryResults, unitMeasureResults]) => {
        this.loadCategoryList = ListUtils.orEmpty(loadCategoryResults);
        this.uomList = ListUtils.orEmpty(unitMeasureResults)
          .filter((uom) => !StringUtils.isNullOrEmpty(uom.unitCode))
          .map((uom) => {
            return {
              label: StringUtils.isNullOrEmpty(uom.unitName) ? uom.unitCode : uom.unitName,
              value: uom.unitCode
            };
          });

        this.loadCategoryList.forEach((result) => {
          const selectedLoad = flightLoad.find(
            (load) => load.floCategory === result.value && !ObjectUtils.isDefined(load.floType)
          );
          if (selectedLoad && selectedLoad.floCategory && selectedLoad.floUnitCode && selectedLoad.floValue) {
            this.loadTable = [
              ...this.loadTable,
              this.createLoadRow(selectedLoad.floCategory, selectedLoad.floUnitCode, selectedLoad.floValue)
            ];
          }
        });

        // Send fuel load factual value if it exists
        const fuelRow = this.loadTable.find(
          (row) => row._categoryCode === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY
        );
        if (fuelRow) {
          this.flightFormService.updateFuelValue(Number(fuelRow.value));
        }

        this.calculateRemainingLoadCategoryList();
      });
  }

  private onBeforeLoadOnce(): void {
    this.setTableColList();
  }

  // ****************************************************************************

  public addLoad(): void {
    this.dialogAddLoadVisible = true;
  }

  public deleteLoad(): void {
    const categoryToDelete = (this.loadTableSelection as LoadRow)._categoryCode;
    if (categoryToDelete === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY) {
      this.flightFormService.updateFuelValue(0);
    }

    this.loadTable = this.loadTable.filter((_, index) => index !== this.loadTableSelectionIndex);
    this.loadTableSelection = undefined;
    this.loadTableSelectionIndex = undefined;

    this.calculateRemainingLoadCategoryList();
  }

  public editLoad(): void {
    this.dialogEditLoadVisible = true;
  }

  public fillFlight(flight: FlightDTO): void {
    flight.aboardPax = this.passengers;
    flight.deplannedPax = this.passengersDeplanned;
    flight.plannedPax = this.passengersPlanned;
    flight.shipmentNumber = this.shipment;

    const flightFuelList: FlightFuelDTO[] = [];
    const flightLoadList: FlightLoadDTO[] = [];
    this.loadTable
      .filter((load) => !StringUtils.isEmpty(load.value) && Number(load.value) !== 0)
      .forEach((load) => {
        if (load._categoryCode === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY) {
          flightFuelList.push(this.createFlightFuel(load));
        } else {
          flightLoadList.push(this.createFlightLoad(load));
        }
      });
    flight.flightFuelLoadedList = flightFuelList;
    flight.flightLoadList = flightLoadList;
  }

  public onAddedLoad(data: { category: string; value: string; uom: string }): void {
    if (data.category === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY) {
      this.flightFormService.updateFuelValue(Number(data.value));
    }

    this.loadTable = [...this.loadTable, this.createLoadRow(data.category, data.uom, data.value)];

    this.calculateRemainingLoadCategoryList();
  }

  public onEditedLoad(data: { value: string; uom: string }): void {
    const editedCategory = (this.loadTableSelection as LoadRow)._categoryCode;
    if (editedCategory === AWPropertiesConstants.FLIGHT_LOAD_CATEGORY_FUEL_KEY) {
      this.flightFormService.updateFuelValue(Number(data.value));
    }

    this.loadTable[this.loadTableSelectionIndex as number] = this.createLoadRow(editedCategory, data.uom, data.value);
    this.loadTable = [...this.loadTable];
    this.loadTableSelection = undefined;
    this.loadTableSelectionIndex = undefined;

    this.calculateRemainingLoadCategoryList();
  }

  public onSelectLoadTableRow(rowIndex: number): void {
    this.loadTableSelectionIndex = rowIndex;
  }

  public onUnselectLoadTableRow(): void {
    this.loadTableSelectionIndex = undefined;
  }

  private calculateRemainingLoadCategoryList(): void {
    this.remainingloadCategoryList = this.loadCategoryList.filter(
      (loadCategory) => !this.loadTable.some((loadRow) => loadRow.category === loadCategory.label)
    );
  }

  private createFlightFuel(load: LoadRow): FlightFuelDTO {
    const flightUom: FlightUnitOfMeasureDTO = {
      id: this.defaultVolumeUnitCode,
      name: '',
      description: ''
    };
    const flightFuel: FlightFuelDTO = {
      id: '',
      type: undefined,
      uom: flightUom,
      value: Number(load.value)
    };

    return flightFuel;
  }

  private createFlightLoad(load: LoadRow): FlightLoadDTO {
    const flightLoadCategory: FlightLoadCategoryDTO = {
      id: load._categoryCode,
      name: load.category
    };
    const flightUom: FlightUnitOfMeasureDTO = {
      id: load._uomCode,
      name: '',
      description: ''
    };
    const flightLoad: FlightLoadDTO = {
      id: '',
      loadCategory: flightLoadCategory,
      uom: flightUom,
      value: Number(load.value)
    };

    return flightLoad;
  }

  private createLoadRow(categoryCode: string, unitCode: string, value: string): LoadRow {
    const selectedCategory = this.loadCategoryList.find((loadCategory) => loadCategory.value === categoryCode);
    const selectedUom = this.uomList.find((uom) => uom.value === unitCode);
    const loadRow: LoadRow = {
      value,
      category: selectedCategory ? selectedCategory.label : StringUtils.orEmpty(categoryCode),
      uom: selectedUom ? (selectedUom.label as string) : StringUtils.orEmpty(unitCode),
      _categoryCode: categoryCode,
      _uomCode: unitCode
    };

    return loadRow;
  }

  private setTableColList(): void {
    this.loadTableColList = [
      { field: 'category', alignment: 'left' },
      { field: 'value', alignment: 'right' },
      { field: 'uom', alignment: 'left' }
    ];
  }
}
