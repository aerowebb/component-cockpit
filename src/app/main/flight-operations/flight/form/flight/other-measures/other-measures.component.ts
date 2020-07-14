import { Component, ElementRef, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { FindBidoFlightMeasuresByFlightInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-bido-flight-measures-by-flight-input.interface';
import { BidoFlightMeasureDTO } from '../../../../../../shared/types/api-types/bido-flight-measure-dto.interface';
import { BireMeasureReferenceDTOId } from '../../../../../../shared/types/api-types/bire-measure-reference-dto-id.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { FlightCounterDTO } from '../../../../../../shared/types/api-types/flight-counter-dto.interface';
import { FlightDTO } from '../../../../../../shared/types/api-types/flight-dto.interface';
import { FlightMeasureDTO } from '../../../../../../shared/types/api-types/flight-measure-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

import { MeasureRow } from './types/measure-row.interface';

@Component({
  selector: 'aw-flight-other-measures',
  templateUrl: './other-measures.component.html'
})
export class OtherMeasuresComponent extends GenericComponent {
  public remainingMeasureReferenceList: SelectItem[];
  public table: MeasureRow[];
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: MeasureRow | undefined;

  public dialogMeasureVisible: boolean;

  private tableSelectionIndex: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public measureReferenceList: BireMeasureReferenceDTO[];

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public constructor(private readonly flightFormService: FlightFormService) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'OtherMeasuresComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.remainingMeasureReferenceList = [];
    this.table = [];
    this.tableLoading = false;
    this.tableSelection = undefined;
    this.tableSelectionIndex = undefined;

    this.dialogMeasureVisible = false;
  }

  public onLoad(equipmentCode: string, missionCode: string, occurrence: number | undefined): void {
    this.tableLoading = true;

    const allFlightMeasureInput: FindBidoFlightMeasuresByFlightInput = {
      equipmentCode,
      missionCode,
      occurrence: ObjectUtils.isDefined(occurrence) ? (occurrence as number) : 0
    };
    this.flightFormService.findAllBidoFlightMeasureByFlight(allFlightMeasureInput).subscribe((allFlightMeasure) => {
      const observables = ListUtils.orEmpty(allFlightMeasure)
        .filter((result) => ObjectUtils.isDefined(result.meaCode))
        .map((result) => {
          const measureReferenceInput: BireMeasureReferenceDTOId = {
            counterCode: result.meaCode as string
          };

          return this.flightFormService.findBireMeasureReference(measureReferenceInput);
        });

      forkJoin(observables)
        .pipe(
          finalize(() => {
            this.tableLoading = false;
            this.calculateRemainingMeasureReferenceList();
          })
        )
        .subscribe((allMeasureReference) => {
          this.table = ListUtils.orEmpty(allMeasureReference).map((measureReference, index) =>
            this.createMeasureRow(allFlightMeasure[index], measureReference)
          );

        });
    });
  }

  private onBeforeLoadOnce(): void {
    this.setTableColList();
  }

  // ****************************************************************************

  public addMeasure(): void {
    this.dialogMeasureVisible = true;
  }

  public deleteMeasure(): void {
    this.table = this.table.filter((_, index) => index !== this.tableSelectionIndex);
    this.tableSelection = undefined;
    this.tableSelectionIndex = undefined;

    this.calculateRemainingMeasureReferenceList();
  }

  public fillFlight(flight: FlightDTO): void {
    const flightMeasureList = this.table
      .filter((row) => !StringUtils.isEmpty(row.value) && Number(row.value) !== 0 && !StringUtils.isEmpty(row.code))
      .map((row) => {
        const flightCounter: FlightCounterDTO = {
          code: row.code,
          name: row.description,
          unitOfMeasure: row.uom
        };
        const flightMeasure: FlightMeasureDTO = {
          id: '',
          counter: flightCounter,
          value: Number(row.value)
        };

        return flightMeasure;
      });

    flight.flightMeasuresList = flightMeasureList;
  }

  public onAddedMeasure(data: { code: string; value: number }): void {
    const selectedMeasureReference = this.measureReferenceList.find((elt) => elt.counterCode === data.code);
    const newMeasure: MeasureRow = {
      code: data.code,
      description: selectedMeasureReference ? StringUtils.orEmpty(selectedMeasureReference.counterRemarks) : '',
      value: data.value.toString(),
      uom: selectedMeasureReference ? StringUtils.orEmpty(selectedMeasureReference.unitCode) : '',
      _flightMeasure: undefined,
      _measureReference: undefined
    };

    this.table = [...this.table, newMeasure];

    this.calculateRemainingMeasureReferenceList();
  }

  public onSelectTableRow(rowIndex: number): void {
    this.tableSelectionIndex = rowIndex;
  }

  public onUnselectTableRow(): void {
    this.tableSelectionIndex = undefined;
  }

  private calculateRemainingMeasureReferenceList(): void {
    this.remainingMeasureReferenceList = this.measureReferenceList
      .filter((measureReference) => !this.table.some((row) => row.code === measureReference.counterCode))
      .map((measureReference) => {
        const code = measureReference.counterCode as string;

        return {
          label: code,
          value: code
        };
      });
  }

  private createMeasureRow(flightMeasure: BidoFlightMeasureDTO, measureReference: BireMeasureReferenceDTO): MeasureRow {
    const measureRow: MeasureRow = {
      code: StringUtils.orEmpty(measureReference.counterCode),
      description: StringUtils.orEmpty(measureReference.counterRemarks),
      value: flightMeasure.meaValue || '0',
      uom: StringUtils.orEmpty(measureReference.unitCode),
      _flightMeasure: flightMeasure,
      _measureReference: measureReference
    };

    return measureRow;
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'code', alignment: 'left', width: '12.5%' },
      { field: 'description', alignment: 'left', width: '55%' },
      { field: 'value', alignment: 'right', width: '20%' },
      { field: 'uom', alignment: 'left', width: '12.5%' }
    ];
  }
}
