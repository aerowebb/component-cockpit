import { Component, ElementRef, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { FlightDTO } from '../../../../../../shared/types/api-types/flight-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../../../shared/utils/bido-equipment-utils';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

import { EngineRow } from './types/engine-row.interface';

@Component({
  selector: 'aw-flight-engines',
  templateUrl: './engines.component.html'
})
export class EnginesComponent extends GenericComponent {
  public engineTable: EngineRow[];
  public engineTableLoading: boolean;
  public engineTableSelection: EngineRow | undefined;
  public engineTableSelectionIndex: number | undefined;
  public engineTableColList: TableColumn[];
  public dialogEngineVisible: boolean;
  public dialogEngineDatesVisible: boolean;

  private engineStartDate: number | undefined;
  private engineStopDate: number | undefined;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public set openMode(value: ComponentOpenMode) {
    if (ObjectUtils.isDefined(value)) {
      super.updateOpenMode(value);
    }
  }

  // ****************************************************************************

  public constructor(private readonly dateService: DateService, private readonly flightFormService: FlightFormService) {
    super(ComponentOpenMode.Read);

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'EnginesComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.engineStartDate = undefined;
    this.engineStopDate = undefined;
    this.engineTable = [];
    this.engineTableLoading = false;
    this.engineTableSelection = undefined;
    this.engineTableSelectionIndex = undefined;
    this.dialogEngineVisible = false;
    this.dialogEngineDatesVisible = false;
  }

  public onLoad(equipmentCode: string, missionEquipment: BidoMissionEquipmentDTO): void {
    this.engineStartDate = missionEquipment.engineStartDate;
    this.engineStopDate = missionEquipment.engineStopDate;
    this.engineTableLoading = true;

    this.flightFormService
      .findAllBidoEquipmentEngineByEquipmentCode(equipmentCode)
      .pipe(
        finalize(() => {
          this.engineTableLoading = false;
        })
      )
      .subscribe((results) => {
        let engine1Set = false;
        let engine2Set = false;
        let engine3Set = false;
        let engine4Set = false;
        ListUtils.orEmpty(results).forEach((result) => {
          if (result.equipmentCode === missionEquipment.engine1AssetCode) {
            engine1Set = true;
            this.addEngineRow(result, missionEquipment.engine1CycleNumber, missionEquipment.engine1HourNumber);
          } else if (result.equipmentCode === missionEquipment.engine2AssetCode) {
            engine2Set = true;
            this.addEngineRow(result, missionEquipment.engine2CycleNumber, missionEquipment.engine2HourNumber);
          } else if (result.equipmentCode === missionEquipment.engine3AssetCode) {
            engine3Set = true;
            this.addEngineRow(result, missionEquipment.engine3CycleNumber, missionEquipment.engine3HourNumber);
          } else if (result.equipmentCode === missionEquipment.engine4AssetCode) {
            engine4Set = true;
            this.addEngineRow(result, missionEquipment.engine4CycleNumber, missionEquipment.engine4HourNumber);
          } else if (!engine1Set) {
            engine1Set = true;
            this.addEngineRow(result, missionEquipment.engine1CycleNumber, missionEquipment.engine1HourNumber);
          } else if (!engine2Set) {
            engine2Set = true;
            this.addEngineRow(result, missionEquipment.engine2CycleNumber, missionEquipment.engine2HourNumber);
          } else if (!engine3Set) {
            engine3Set = true;
            this.addEngineRow(result, missionEquipment.engine3CycleNumber, missionEquipment.engine3HourNumber);
          } else if (!engine4Set) {
            engine4Set = true;
            this.addEngineRow(result, missionEquipment.engine4CycleNumber, missionEquipment.engine4HourNumber);
          }
        });
      });
  }

  private onBeforeLoadOnce(): void {
    this.setEngineTableColList();
  }

  // ****************************************************************************

  public areEngineListCompleted(): boolean {
    return this.engineTable.every((row) => !StringUtils.isEmpty(row.cycles));
  }

  public editDatesForAllEngineList(): void {
    this.dialogEngineDatesVisible = true;
  }

  public editEngine(): void {
    this.dialogEngineVisible = true;
  }

  public fillFlight(flight: FlightDTO, missionEquipment: BidoMissionEquipmentDTO): void {
    if (this.engineTable.length > 0) {
      flight.engineStartDate = new Date(this.engineTable[0].startDate);
      flight.engineStopDate = new Date(this.engineTable[0].endDate);

      this.engineTable.forEach((engine) => {
        if (engine._assetCode === missionEquipment.engine1AssetCode) {
          flight.engine1AssetCode = engine._assetCode;
          flight.engine1AssetText = engine._assetText;
          flight.engine1CycleNumber = engine.cycles;
          flight.engine1HourNumber = engine.hours;
        } else if (engine._assetCode === missionEquipment.engine2AssetCode) {
          flight.engine2AssetCode = engine._assetCode;
          flight.engine2AssetText = engine._assetText;
          flight.engine2CycleNumber = engine.cycles;
          flight.engine2HourNumber = engine.hours;
        } else if (engine._assetCode === missionEquipment.engine3AssetCode) {
          flight.engine3AssetCode = engine._assetCode;
          flight.engine3AssetText = engine._assetText;
          flight.engine3CycleNumber = engine.cycles;
          flight.engine3HourNumber = engine.hours;
        } else if (engine._assetCode === missionEquipment.engine4AssetCode) {
          flight.engine4AssetCode = engine._assetCode;
          flight.engine4AssetText = engine._assetText;
          flight.engine4CycleNumber = engine.cycles;
          flight.engine4HourNumber = engine.hours;
        } else if (!flight.engine1AssetCode) {
          flight.engine1AssetCode = engine._assetCode;
          flight.engine1AssetText = engine._assetText;
          flight.engine1CycleNumber = engine.cycles;
          flight.engine1HourNumber = engine.hours;
        } else if (!flight.engine2AssetCode) {
          flight.engine2AssetCode = engine._assetCode;
          flight.engine2AssetText = engine._assetText;
          flight.engine2CycleNumber = engine.cycles;
          flight.engine2HourNumber = engine.hours;
        } else if (!flight.engine3AssetCode) {
          flight.engine3AssetCode = engine._assetCode;
          flight.engine3AssetText = engine._assetText;
          flight.engine3CycleNumber = engine.cycles;
          flight.engine3HourNumber = engine.hours;
        } else if (!flight.engine4AssetCode) {
          flight.engine4AssetCode = engine._assetCode;
          flight.engine4AssetText = engine._assetText;
          flight.engine4CycleNumber = engine.cycles;
          flight.engine4HourNumber = engine.hours;
        }
      });
    }
  }

  public onEditedDatesForAllEngineList(input: { startDate: number | undefined; endDate: number | undefined }): void {
    this.engineStartDate = input.startDate;
    this.engineStopDate = input.endDate;

    this.engineTable.forEach((row) => {
      row.startDate = this.dateService.timestampWithHourToString(this.engineStartDate);
      row.endDate = this.dateService.timestampWithHourToString(this.engineStopDate);
    });

    this.engineTable = [...this.engineTable];
    this.engineTableSelection = undefined;
  }

  public onEditedEngine(newEngine: EngineRow): void {
    this.engineTable[this.engineTableSelectionIndex as number].cycles = newEngine.cycles;
    this.engineTable[this.engineTableSelectionIndex as number].hours = newEngine.hours;

    this.engineTable = [...this.engineTable];
    this.engineTableSelection = undefined;
    this.engineTableSelectionIndex = undefined;
  }

  public onSelectEngineTableRow(rowIndex: number): void {
    this.engineTableSelectionIndex = rowIndex;
  }

  public onUnselectEngineTableRow(): void {
    this.engineTableSelectionIndex = undefined;
  }

  private addEngineRow(equipment: BidoEquipmentDTO, cycles: string | undefined, hours: string | undefined): void {
    const endDate = this.dateService.timestampWithHourToString(this.engineStopDate);
    const engine = BidoEquipmentUtils.createAssetName(equipment);
    const startDate = this.dateService.timestampWithHourToString(this.engineStartDate);

    const engineRow: EngineRow = {
      endDate,
      engine,
      startDate,
      cycles: StringUtils.orEmpty(cycles),
      hours: StringUtils.orEmpty(hours),
      _assetCode: equipment.equipmentCode as string,
      _assetText: engine
    };

    this.engineTable.push(engineRow);
  }

  private setEngineTableColList(): void {
    this.engineTableColList = [
      { field: 'engine', alignment: 'left', width: '40%' },
      { field: 'startDate', alignment: 'left', width: '12.5%' },
      { field: 'endDate', alignment: 'left', width: '12.5%' },
      { field: 'hours', alignment: 'right', width: '17.5%' },
      { field: 'cycles', alignment: 'right', width: '17.5%' }
    ];
  }
}
