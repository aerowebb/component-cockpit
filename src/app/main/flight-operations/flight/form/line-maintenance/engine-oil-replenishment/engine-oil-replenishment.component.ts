import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { BidoAttributeConstants } from '../../../../../../shared/constants/bido-attribute-constants';
import { BidoMissionEquipmentConstants } from '../../../../../../shared/constants/bido-mission-equipment-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput } from '../../../../../../shared/types/api-input-types/fleet-business/create-replenishment-by-flight-and-equipment-and-replenishment-type-input.interface';
import { FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-replenishment-by-mission-equipment-and-type-and-equipment-code-input.interface';
import { SaveReplenishmentMeasureListInput } from '../../../../../../shared/types/api-input-types/fleet-management/save-replenishment-measure-list-input.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoFlightAttributeDTO } from '../../../../../../shared/types/api-types/bido-flight-attribute-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoReplenishmentDTOId } from '../../../../../../shared/types/api-types/bido-replenishment-dto-id.interface';
import { BidoReplenishmentDTO } from '../../../../../../shared/types/api-types/bido-replenishment-dto.interface';
import { BidoReplenishmentMeasureDTO } from '../../../../../../shared/types/api-types/bido-replenishment-measure-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { LineMaintenanceFormService } from '../line-maintenance-form.service';

interface TableRow {
  coldReplenishmentDate: string;
  coldReplenishmentVolume: string;
  designation: string;
  hotReplenishmentDate: string;
  hotReplenishmentVolume: string;
  oilConsumption: string;
  resetDate: string;
  _replenishmentId: BidoReplenishmentDTOId;
  _coldReplenishmentMeasure: BidoReplenishmentMeasureDTO | undefined;
  _hotReplenishmentMeasure: BidoReplenishmentMeasureDTO | undefined;
}

@Component({
  selector: 'aw-line-maintenance-engine-oil-replenishment',
  templateUrl: './engine-oil-replenishment.component.html'
})
export class EngineOilReplenishmentComponent extends GenericComponent implements OnInit {
  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public missionEquipmentId: BidoMissionEquipmentDTOId;

  public dialogEngineOilReplenishmentMeasureVisible: boolean;
  public table: TableRow[];
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelectedList: TableRow[];

  private equipmentList: BidoEquipmentDTO[];
  private replenishmentLoadedNb: number;

  public constructor(
    private readonly dateService: DateService,
    private readonly lineMaintenanceFormService: LineMaintenanceFormService,
    private readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write);

    this.init();

    this.setTableColList();
  }

  public getComponentName(): string {
    return 'EngineOilReplenishmentComponent';
  }

  public ngOnInit(): void {
    this.load();
  }

  public editReplenishmentMeasure(): void {
    this.dialogEngineOilReplenishmentMeasureVisible = true;
  }

  public reload(): void {
    this.equipmentList = [];
    this.replenishmentLoadedNb = 0;
    this.table = [];
    this.tableLoading = false;
    this.tableSelectedList = [];

    this.load();
  }

  public resetOilConsumption(): void {
    const replenishmentId = this.tableSelectedList[0]._replenishmentId;
    if (replenishmentId) {
      this.lineMaintenanceFormService.resetReplenishmentEngineOilConsumption(replenishmentId).subscribe((_) => {
        this.reload();
      });
    }
  }

  public saveNewReplenishmentMeasure(measure: {
    coldReplenishmentDate?: Date;
    coldReplenishmentVolume?: string;
    hotReplenishmentDate?: Date;
    hotReplenishmentVolume?: string;
  }): void {
    let checkForEngineOilCalculation = false;
    let engineOilReplenishmentMeasureList: BidoReplenishmentMeasureDTO[] = [];

    if (ObjectUtils.isDefined(measure.hotReplenishmentDate)) {
      const hotReplenishment: BidoReplenishmentMeasureDTO = {
        engineOilReplenishmentType: AWPropertiesConstants.RM_ENGINE_OIL_TYPE_HOT,
        equipmentCode: this.tableSelectedList[0]._replenishmentId.equipmentCode,
        replenishmentId: this.tableSelectedList[0]._replenishmentId.replenishmentId,
        rmDate: measure.hotReplenishmentDate ? new Date(measure.hotReplenishmentDate) : undefined,
        rmId: this.tableSelectedList[0]._hotReplenishmentMeasure
          ? this.tableSelectedList[0]._hotReplenishmentMeasure.rmId
          : undefined,
        rmVolume: measure.hotReplenishmentVolume
      };
      engineOilReplenishmentMeasureList = [...engineOilReplenishmentMeasureList, hotReplenishment];

      checkForEngineOilCalculation = true;
    }

    if (ObjectUtils.isDefined(measure.coldReplenishmentDate)) {
      const coldReplenishment: BidoReplenishmentMeasureDTO = {
        engineOilReplenishmentType: AWPropertiesConstants.RM_ENGINE_OIL_TYPE_COLD,
        equipmentCode: this.tableSelectedList[0]._replenishmentId.equipmentCode,
        replenishmentId: this.tableSelectedList[0]._replenishmentId.replenishmentId,
        rmDate: measure.coldReplenishmentDate ? new Date(measure.coldReplenishmentDate) : undefined,
        rmId: this.tableSelectedList[0]._coldReplenishmentMeasure
          ? this.tableSelectedList[0]._coldReplenishmentMeasure.rmId
          : undefined,
        rmVolume: measure.coldReplenishmentVolume
      };
      engineOilReplenishmentMeasureList = [...engineOilReplenishmentMeasureList, coldReplenishment];
    }

    if (!ListUtils.isEmpty(engineOilReplenishmentMeasureList)) {
      const input: SaveReplenishmentMeasureListInput = {
        replenishmentMeasureList: engineOilReplenishmentMeasureList
      };
      this.lineMaintenanceFormService.saveReplenishmentMeasureList(input).subscribe((_) => {
        if (checkForEngineOilCalculation) {
          this.checkAndCalculateEngineOilConsumption(this.tableSelectedList[0]).subscribe({
            complete: () => {
              this.reload();
            }
          });
        } else {
          this.reload();
        }
      });
    } else {
      this.tableSelectedList = [];
    }
  }

  private areManualFlightEntries(missionEquipment: BidoMissionEquipmentDTO): boolean {
    let areManualFlightEntries = false;

    if (ObjectUtils.isDefined(missionEquipment) && ObjectUtils.isDefined(missionEquipment.bidoFlightAttributeDTOList)) {
      for (const flightAttribute of missionEquipment.bidoFlightAttributeDTOList as BidoFlightAttributeDTO[]) {
        areManualFlightEntries =
          flightAttribute.attributeId === BidoAttributeConstants.DAV_MANUAL_FLIGHT_ENTRIES.toString();
      }
    }

    return areManualFlightEntries;
  }

  private getHumsStatusValue(missionEquipment: BidoMissionEquipmentDTO): string | undefined {
    let humsStatusValue: string | undefined;

    if (ObjectUtils.isDefined(missionEquipment) && ObjectUtils.isDefined(missionEquipment.bidoFlightAttributeDTOList)) {
      for (const flightAttribute of missionEquipment.bidoFlightAttributeDTOList as BidoFlightAttributeDTO[]) {
        if (flightAttribute.attributeId === BidoAttributeConstants.DAV_HUMS_STATUS.toString()) {
          humsStatusValue = flightAttribute.attributeValue;
        }
      }
    }

    return humsStatusValue;
  }

  private checkAndCalculateEngineOilConsumption(row: TableRow): Observable<BidoReplenishmentDTO | undefined> {
    let launchEngineOilCalculation = false;
    if (this.sessionService.isSpecificDassault) {
      // Only if FSC_Done
      if (
        this.areManualFlightEntries(this.missionEquipment) ||
        this.getHumsStatusValue(this.missionEquipment) === BidoMissionEquipmentConstants.DAV_HUMS_STATUS_FSC_DONE
      ) {
        launchEngineOilCalculation = true;
      }
    } else {
      // Only if validated
      if (this.missionEquipment.statusState === AWPropertiesConstants.FLIGHT_STATUS_VALIDATED) {
        launchEngineOilCalculation = true;
      }
    }

    return launchEngineOilCalculation
      ? this.lineMaintenanceFormService.calculateReplenishmentEngineOilConsumption(row._replenishmentId)
      : of();
  }

  private createAndAddDefaultReplenishmentRow(
    equipment: BidoEquipmentDTO,
    replenishmentId: BidoReplenishmentDTOId
  ): void {
    this.lineMaintenanceFormService
      .getEquipmentRepresentation(this.getEquipmentToFormat(equipment))
      .subscribe((equipmentRepresentation) => {
        const replenishmentMeasure: BidoReplenishmentMeasureDTO = {
          equipmentCode: replenishmentId.equipmentCode,
          replenishmentId: replenishmentId.replenishmentId
        };
        const tableRow: TableRow = {
          coldReplenishmentDate: '',
          coldReplenishmentVolume: '',
          hotReplenishmentDate: '',
          hotReplenishmentVolume: '',
          designation: equipmentRepresentation,
          oilConsumption: this.getReplenishmentEngineOilConsumption(replenishmentId),
          resetDate: this.getReplenishmentEngineResetDate(replenishmentId),
          _replenishmentId: replenishmentId,
          _coldReplenishmentMeasure: replenishmentMeasure,
          _hotReplenishmentMeasure: replenishmentMeasure
        };

        this.table = [...this.table, tableRow];
        this.sortTable();

        this.tableLoading = ++this.replenishmentLoadedNb < this.equipmentList.length;
      });
  }

  private createReplenishment(equipment: BidoEquipmentDTO): void {
    const input: CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput = {
      bidoMissionEquipmentDTOId: this.missionEquipmentId,
      replenishmentType: AWPropertiesConstants.REPLENISHMENT_TYPE_ENGINE_OIL,
      equipmentCode: equipment.equipmentCode as string
    };
    this.lineMaintenanceFormService
      .createReplenishmentByFlightAndEquipmentAndReplenishmentType(input)
      .subscribe((result) => {
        this.createAndAddDefaultReplenishmentRow(equipment, result);
      });
  }

  private getEquipmentToFormat(equipment: BidoEquipmentDTO): BidoEquipmentDTO {
    return {
      equipmentCode: equipment.equipmentCode,
      equipmentFunction: equipment.equipmentFunction,
      familyVariantCode: equipment.familyVariantCode,
      pnCode: equipment.pnCode,
      registration: equipment.registration,
      sn: equipment.sn
    };
  }

  private getReplenishmentEngineOilConsumption(replenishment: BidoReplenishmentDTO): string {
    let oilConsumption = StringUtils.orEmpty(replenishment.oilConsumptionCalculatedQty);
    if (!StringUtils.isEmpty(oilConsumption)) {
      oilConsumption += ` ${StringUtils.orEmpty(replenishment.quantityUnit)}`;
    }

    return oilConsumption;
  }

  private getReplenishmentEngineResetDate(replenishment: BidoReplenishmentDTO): string {
    return this.dateService.timestampWithHourToString(replenishment.oilConsumptionReinitDate);
  }

  private init(): void {
    this.dialogEngineOilReplenishmentMeasureVisible = false;
    this.equipmentList = [];
    this.replenishmentLoadedNb = 0;
    this.table = [];
    this.tableLoading = false;
    this.tableSelectedList = [];
  }

  private load(): void {
    this.replenishmentLoadedNb = 0;
    this.tableLoading = true;

    this.lineMaintenanceFormService
      .findEquipmentEngineListByEquipmentCode(this.missionEquipmentId.equipmentCode as string)
      .subscribe((equipmentList) => {
        this.equipmentList = ListUtils.orEmpty(equipmentList).filter((elt) => ObjectUtils.isDefined(elt.equipmentCode));

        this.tableLoading = this.equipmentList.length > 0;

        this.equipmentList.forEach((equipment) => {
          const input: FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput = {
            bidoMissionEquipmentDTOId: this.missionEquipmentId,
            replenishmentType: AWPropertiesConstants.REPLENISHMENT_TYPE_ENGINE_OIL,
            engineCode: equipment.equipmentCode
          };
          this.lineMaintenanceFormService
            .findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode(input)
            .subscribe((result) => {
              if (ObjectUtils.isDefined(result)) {
                this.loadReplenishmentMeasureList(equipment, result);
              } else {
                this.createReplenishment(equipment);
              }
            });
        });
      });
  }

  private loadReplenishmentMeasureList(equipment: BidoEquipmentDTO, replenishment: BidoReplenishmentDTO): void {
    const replenishmentId: BidoReplenishmentDTOId = {
      equipmentCode: replenishment.equipmentCode,
      replenishmentId: replenishment.replenishmentId
    };
    this.lineMaintenanceFormService
      .findReplenishmentMeasureListByReplenishmentId(replenishmentId)
      .subscribe((results) => {
        if (ListUtils.isEmpty(results)) {
          this.createAndAddDefaultReplenishmentRow(equipment, replenishmentId);
        } else {
          this.lineMaintenanceFormService
            .getEquipmentRepresentation(this.getEquipmentToFormat(equipment))
            .subscribe((equipmentRepresentation) => {
              const engineOilColdTypeData: BidoReplenishmentMeasureDTO | undefined = results.find(
                (elt) => elt.engineOilReplenishmentType === AWPropertiesConstants.RM_ENGINE_OIL_TYPE_COLD
              );
              const engineOilHotTypeData: BidoReplenishmentMeasureDTO | undefined = results.find(
                (elt) => elt.engineOilReplenishmentType === AWPropertiesConstants.RM_ENGINE_OIL_TYPE_HOT
              );

              const coldReplenishmentDate = ObjectUtils.isDefined(engineOilColdTypeData)
                ? this.dateService.dateWithHourToString((engineOilColdTypeData as BidoReplenishmentMeasureDTO).rmDate)
                : '';
              const coldReplenishmentVolume = ObjectUtils.isDefined(engineOilColdTypeData)
                ? NumberUtils.roundNumber(
                    Number((engineOilColdTypeData as BidoReplenishmentMeasureDTO).rmVolume),
                    0
                  ).toString()
                : '';
              const hotReplenishmentDate = ObjectUtils.isDefined(engineOilHotTypeData)
                ? this.dateService.dateWithHourToString((engineOilHotTypeData as BidoReplenishmentMeasureDTO).rmDate)
                : '';
              const hotReplenishmentVolume = ObjectUtils.isDefined(engineOilHotTypeData)
                ? NumberUtils.roundNumber(
                    Number((engineOilHotTypeData as BidoReplenishmentMeasureDTO).rmVolume),
                    0
                  ).toString()
                : '';

              const tableRow: TableRow = {
                coldReplenishmentDate,
                coldReplenishmentVolume,
                hotReplenishmentDate,
                hotReplenishmentVolume,
                designation: equipmentRepresentation,
                oilConsumption: this.getReplenishmentEngineOilConsumption(replenishment),
                resetDate: this.getReplenishmentEngineResetDate(replenishment),
                _replenishmentId: replenishmentId,
                _coldReplenishmentMeasure: engineOilColdTypeData,
                _hotReplenishmentMeasure: engineOilHotTypeData
              };

              this.table = [...this.table, tableRow];
            });
        }

        this.tableLoading = ++this.replenishmentLoadedNb < this.equipmentList.length;
        this.sortTable();
      });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'designation', alignment: 'left', width: '25%' },
      { field: 'oilConsumption', alignment: 'left', width: '12.5%' },
      { field: 'resetDate', alignment: 'left', width: '12.5%' },
      { field: 'hotReplenishmentVolume', alignment: 'right', width: '12.5%' },
      { field: 'hotReplenishmentDate', alignment: 'left', width: '12.5%' },
      { field: 'coldReplenishmentVolume', alignment: 'right', width: '12.5%' },
      { field: 'coldReplenishmentDate', alignment: 'left', width: '12.5%' }
    ];
  }

  private sortTable(): void {
    this.table = this.table.sort((e1, e2) => {
      return e1.designation.localeCompare(e2.designation);
    });
  }
}
