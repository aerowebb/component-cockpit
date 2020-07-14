import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../shared/constants/aw-properties-constants';
import { ControlConfigConstants } from '../../../../../../shared/constants/control-config-constants';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../../shared/services/date.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput } from '../../../../../../shared/types/api-input-types/fleet-business/create-replenishment-by-flight-and-equipment-and-replenishment-type-input.interface';
import { FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-replenishment-by-mission-equipment-and-type-and-equipment-code-input.interface';
import { RemoveReplenishmentMeasureListInput } from '../../../../../../shared/types/api-input-types/fleet-management/remove-replenishment-measure-list-input.interface';
import { SaveReplenishmentMeasureListInput } from '../../../../../../shared/types/api-input-types/fleet-management/save-replenishment-measure-list-input.interface';
import { UpdateReplenishmentAfterFlightQuantityFromAircraftInput } from '../../../../../../shared/types/api-input-types/fleet-management/update-replenishment-after-flight-quantity-from-aircraft-input.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMissionEquipmentDTOId } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto-id.interface';
import { BidoMissionEquipmentDTO } from '../../../../../../shared/types/api-types/bido-mission-equipment-dto.interface';
import { BidoReplenishmentDTOId } from '../../../../../../shared/types/api-types/bido-replenishment-dto-id.interface';
import { BidoReplenishmentMeasureDTO } from '../../../../../../shared/types/api-types/bido-replenishment-measure-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { NumberUtils } from '../../../../../../shared/utils/number-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { SelectItemUtils } from '../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { ReplenishmentMeasure } from '../../../types/replenishment-measure.interface';
import { FlightFormService } from '../../flight/flight-form.service';
import { LineMaintenanceFormService } from '../line-maintenance-form.service';

interface ReplenishmentMeasureRow {
  date: string;
  density: string;
  measureSource: string;
  occurrence: string;
  origin: string;
  quantity: string;
  volume: string;
  rmBatchNumber: string;
  _equipmentCode: string | undefined;
  _replenishmentId: string | undefined;
  _rmId: string | undefined;
  _rmNumber: number | undefined;
}

@Component({
  selector: 'aw-line-maintenance-replenishments',
  styleUrls: ['./replenishments.component.scss'],
  templateUrl: './replenishments.component.html'
})
export class ReplenishmentsComponent extends GenericComponent implements OnInit {
  @Input()
  public missionEquipmentId: BidoMissionEquipmentDTOId;

  @Input()
  public missionEquipment: BidoMissionEquipmentDTO;

  @Input()
  public equipment: BidoEquipmentDTO;

  public controlConfigConstants: typeof ControlConfigConstants;

  public dialogAfterFlightQuantityVisible: boolean;
  public dialogReplenishmentMeasureVisible: boolean;
  public replenishmentAfterFlightQuantity: string;
  public replenishmentAfterFlightQuantityFromAC: string;
  public replenishmentBeforeFlightQuantity: string;
  public replenishmentEndStatusQuantity: string;
  public replenishmentInitialStatusQuantity: string;
  public replenishmentQuantityUnit: string;
  public replenishmentValidationStatus: ControlConfigConstants | undefined;
  public replenishmentMeasureTable: ReplenishmentMeasureRow[];
  public replenishmentMeasureTableColList: TableColumn[];
  public replenishmentMeasureTableLoading: boolean;
  public replenishmentMeasureTableSelectedList: ReplenishmentMeasureRow[];
  public replenishmentTypeList: SelectItem[];
  public replenishmentTypeSelected: string | undefined;

  private maxNumberReplenishment: number;
  private replenishmentMap: Map<string, BidoReplenishmentDTOId>;
  private replenishmentOccurrenceList: LabelValue<string>[];
  private replenishmentOriginList: LabelValue<string>[];
  private replenishmentSourceList: LabelValue<string>[];

  public constructor(
    private readonly dateService: DateService,
    private readonly lineMaintenanceFormService: LineMaintenanceFormService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly flightFormService: FlightFormService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write);

    this.init();
    this.loadReplenishmentOccurrenceList();
    this.loadReplenishmentOriginList();
    this.loadReplenishmentSourceList();

    this.setReplenishmentTableColList();
  }

  public getComponentName(): string {
    return 'ReplenishmentsComponent';
  }

  public ngOnInit(): void {
    this.loadReplenishmentTypeList();
    this.calculateReplenishmentValidationStatus();
  }

  public addReplenishmentMeasure(data: {
    deltaValue: ReplenishmentMeasure;
    meteredSource: ReplenishmentMeasure;
  }): void {
    this.maxNumberReplenishment++;
    const replenishmentId = this.replenishmentMap.get(
      this.replenishmentTypeSelected as string
    ) as BidoReplenishmentDTOId;

    let replenishmentMeasureList: BidoReplenishmentMeasureDTO[] = [];
    if (ObjectUtils.isDefined(data.deltaValue.quantity)) {
      replenishmentMeasureList = [
        ...replenishmentMeasureList,
        this.createReplenishmentMeasure(data.deltaValue, AWPropertiesConstants.RM_SOURCE_DELTA_VALUE, replenishmentId)
      ];
    }
    if (ObjectUtils.isDefined(data.meteredSource.quantity)) {
      replenishmentMeasureList = [
        ...replenishmentMeasureList,
        this.createReplenishmentMeasure(
          data.meteredSource,
          AWPropertiesConstants.RM_SOURCE_METERED_SOURCE,
          replenishmentId
        )
      ];
    }

    const input: SaveReplenishmentMeasureListInput = {
      replenishmentMeasureList
    };
    this.lineMaintenanceFormService.saveReplenishmentMeasureList(input).subscribe((_) => {
      this.loadReplenishmentMeasureList(replenishmentId);
      this.refreshReplenishmentQuantityList(replenishmentId);
    });
  }

  public openAfterFlightQuantityFromAircraftDialog(): void {
    this.dialogAfterFlightQuantityVisible = true;
  }

  public openReplenishmentMeasureDialog(): void {
    this.dialogReplenishmentMeasureVisible = true;
  }

  public reload(): void {
    this.replenishmentTypeSelected = undefined;
  }

  public removeSelectedReplenishmentMeasureList(): void {
    const replenishmentMeasureList = this.replenishmentMeasureTableSelectedList.map((elt) => {
      return {
        equipmentCode: elt._equipmentCode,
        replenishmentId: elt._replenishmentId,
        rmId: elt._rmId
      };
    });
    const input: RemoveReplenishmentMeasureListInput = {
      replenishmentMeasureList
    };
    this.lineMaintenanceFormService.removeReplenishmentMeasureList(input).subscribe((_) => {
      const replenishmentId = this.replenishmentMap.get(
        this.replenishmentTypeSelected as string
      ) as BidoReplenishmentDTOId;
      this.loadReplenishmentMeasureList(replenishmentId);
      this.refreshReplenishmentQuantityList(replenishmentId);

      this.replenishmentMeasureTableSelectedList = [];
    });
  }

  public selectReplenishmentType(replenishmentType: string | undefined): void {
    this.maxNumberReplenishment = 0;
    this.replenishmentMeasureTable = [];
    this.replenishmentMeasureTableSelectedList = [];

    if (ObjectUtils.isDefined(replenishmentType)) {
      this.replenishmentMeasureTableLoading = true;

      const input: FindReplenishmentByMissionEquipmentAndTypeAndEquipmentCodeInput = {
        bidoMissionEquipmentDTOId: this.missionEquipmentId,
        replenishmentType: replenishmentType as string
      };
      this.lineMaintenanceFormService
        .findReplenishmentByMissionEquipmentAndTypeAndEquipmentCode(input)
        .subscribe((result) => {
          if (ObjectUtils.isDefined(result)) {
            this.replenishmentMap.set(this.replenishmentTypeSelected as string, result);

            this.getHighestReplenishmentMeasureNumber(result);
            this.refreshReplenishmentQuantityList(result);

            const replenishmentId: BidoReplenishmentDTOId = {
              equipmentCode: result.equipmentCode,
              replenishmentId: result.replenishmentId
            };
            this.loadReplenishmentMeasureList(replenishmentId);
          } else {
            this.createReplenishment();

            this.replenishmentMeasureTableLoading = false;
          }
        });
    }
  }

  public updateAfterFlightQuantity(quantity: number): void {
    const input: UpdateReplenishmentAfterFlightQuantityFromAircraftInput = {
      replenishmentAfterFlightQuantityFromAircraft: quantity.toString(),
      replenishmentDTOId: this.replenishmentMap.get(this.replenishmentTypeSelected as string) as BidoReplenishmentDTOId
    };
    this.lineMaintenanceFormService.updateReplenishmentAfterFlightQuantityFromAircraft(input).subscribe((_) => {
      this.replenishmentAfterFlightQuantityFromAC = NumberUtils.roundNumber(quantity, 0).toString();

      this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateAfterFlightQuantityFromAircraft'));
    });
  }

  private createReplenishment(): void {
    const input: CreateReplenishmentByFlightAndEquipmentAndReplenishmentTypeInput = {
      bidoMissionEquipmentDTOId: this.missionEquipmentId,
      replenishmentType: this.replenishmentTypeSelected as string,
      equipmentCode: this.missionEquipmentId.equipmentCode as string
    };
    this.lineMaintenanceFormService
      .createReplenishmentByFlightAndEquipmentAndReplenishmentType(input)
      .subscribe((result) => {
        this.replenishmentMap.set(this.replenishmentTypeSelected as string, result);

        this.refreshReplenishmentQuantityList(result);
      });
  }

  private createReplenishmentMeasure(
    measure: ReplenishmentMeasure,
    measureSource: string,
    replenishmentId: BidoReplenishmentDTOId
  ): BidoReplenishmentMeasureDTO {
    const bidoReplenishmentMeasure: BidoReplenishmentMeasureDTO = {
      equipmentCode: replenishmentId.equipmentCode,
      replenishmentId: replenishmentId.replenishmentId,
      rmDate: measure.date as Date,
      rmDensity: ObjectUtils.isDefined(measure.density) ? (measure.density as number).toString() : undefined,
      rmNumber: this.maxNumberReplenishment,
      rmOccurrence: measure.occurrence,
      rmOrigin: measure.origin,
      rmSource: measureSource,
      rmVolume: ObjectUtils.isDefined(measure.volume) ? (measure.volume as number).toString() : undefined,
      rmWeight: (measure.quantity as number).toString(),
      rmBatchNumber: measure.batchNumber
    };

    return bidoReplenishmentMeasure;
  }

  private createReplenishmentRow(replenishmentMeasure: BidoReplenishmentMeasureDTO): ReplenishmentMeasureRow {
    const occurrence = this.replenishmentOccurrenceList.find((elt) => elt.value === replenishmentMeasure.rmOccurrence);
    const origin = this.replenishmentOriginList.find((elt) => elt.value === replenishmentMeasure.rmOrigin);
    const source = this.replenishmentSourceList.find((elt) => elt.value === replenishmentMeasure.rmSource);

    const density = ObjectUtils.isDefined(replenishmentMeasure.rmDensity)
      ? NumberUtils.roundNumber(Number(replenishmentMeasure.rmDensity), 2).toString()
      : '';
    const quantity = ObjectUtils.isDefined(replenishmentMeasure.rmWeight)
      ? NumberUtils.roundNumber(Number(replenishmentMeasure.rmWeight), 0).toString()
      : '';
    const volume = ObjectUtils.isDefined(replenishmentMeasure.rmVolume)
      ? NumberUtils.roundNumber(Number(replenishmentMeasure.rmVolume), 0).toString()
      : '';

    const replenishmentMeasureRow: ReplenishmentMeasureRow = {
      rmBatchNumber: replenishmentMeasure.rmBatchNumber ? replenishmentMeasure.rmBatchNumber : '',
      density,
      quantity,
      volume,
      date: this.dateService.dateWithHourToString(replenishmentMeasure.rmDate),
      measureSource: source ? source.label : '',
      occurrence: occurrence ? occurrence.label : '',
      origin: origin ? origin.label : '',
      _equipmentCode: replenishmentMeasure.equipmentCode,
      _replenishmentId: replenishmentMeasure.replenishmentId,
      _rmId: replenishmentMeasure.rmId,
      _rmNumber: replenishmentMeasure.rmNumber
    };

    return replenishmentMeasureRow;
  }

  private getHighestReplenishmentMeasureNumber(replenishmentId: BidoReplenishmentDTOId): void {
    this.lineMaintenanceFormService
      .getHighestReplenishmentMeasureNumberByReplenishmentId(replenishmentId)
      .subscribe((result) => {
        this.maxNumberReplenishment = result || 0;
      });
  }

  private init(): void {
    this.dialogAfterFlightQuantityVisible = false;
    this.dialogReplenishmentMeasureVisible = false;
    this.maxNumberReplenishment = 0;
    this.replenishmentAfterFlightQuantity = '';
    this.replenishmentAfterFlightQuantityFromAC = '';
    this.replenishmentBeforeFlightQuantity = '';
    this.replenishmentEndStatusQuantity = '';
    this.replenishmentInitialStatusQuantity = '';
    this.replenishmentMap = new Map<string, BidoReplenishmentDTOId>();
    this.replenishmentOccurrenceList = [];
    this.replenishmentOriginList = [];
    this.replenishmentQuantityUnit = '';
    this.replenishmentMeasureTable = [];
    this.replenishmentMeasureTableLoading = false;
    this.replenishmentMeasureTableSelectedList = [];
    this.replenishmentSourceList = [];
    this.replenishmentTypeList = [];
    this.replenishmentTypeSelected = undefined;

    this.controlConfigConstants = ControlConfigConstants;
    this.replenishmentValidationStatus = undefined;
  }

  private loadReplenishmentMeasureList(replenishmentId: BidoReplenishmentDTOId): void {
    this.lineMaintenanceFormService
      .findReplenishmentMeasureListByReplenishmentId(replenishmentId)
      .subscribe((results) => {
        this.replenishmentMeasureTable = ListUtils.orEmpty(results).map((elt) => this.createReplenishmentRow(elt));

        this.replenishmentMeasureTableLoading = false;
      });
  }

  private loadReplenishmentOccurrenceList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RM_OCCURRENCE_MAP).subscribe((results) => {
      this.replenishmentOccurrenceList = results || [];
    });
  }

  private loadReplenishmentOriginList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RM_ORIGIN_MAP).subscribe((results) => {
      this.replenishmentOriginList = results || [];
    });
  }

  private loadReplenishmentSourceList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.RM_SOURCE_MAP).subscribe((results) => {
      this.replenishmentSourceList = results || [];
    });
  }

  private loadReplenishmentTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.REPLENISHMENT_TYPE_MAP).subscribe((results) => {
      this.replenishmentTypeList = results ? SelectItemUtils.fromLabelValues(results) : [];
      // Remove engine oil replenishment type from list
      const engineOilReplenishmentType = this.replenishmentTypeList.find(
        (elt) => elt.value === AWPropertiesConstants.REPLENISHMENT_TYPE_ENGINE_OIL
      );
      this.replenishmentTypeList = this.replenishmentTypeList.filter(
        (replenishmentType) => replenishmentType !== engineOilReplenishmentType
      );

      if (!ListUtils.isNullOrEmpty(this.replenishmentTypeList)) {
        const defaultReplenishmentType = this.replenishmentTypeList.find(
          (elt) => elt.value === AWPropertiesConstants.REPLENISHMENT_TYPE_FUEL
        );
        if (defaultReplenishmentType && !StringUtils.isNullOrEmpty(defaultReplenishmentType.value as string)) {
          this.replenishmentTypeSelected = defaultReplenishmentType.value as string;
          this.selectReplenishmentType(this.replenishmentTypeSelected);
        }
      }
    });
  }

  private refreshReplenishmentQuantityList(replenishmentId: BidoReplenishmentDTOId): void {
    this.lineMaintenanceFormService.calculateReplenishmentQuantityList(replenishmentId).subscribe((result) => {
      this.replenishmentAfterFlightQuantity = StringUtils.orEmpty(result.afterFlightQty);
      this.replenishmentBeforeFlightQuantity = StringUtils.orEmpty(result.beforeFlightQty);
      this.replenishmentEndStatusQuantity = StringUtils.orEmpty(result.endStatusQty);
      this.replenishmentInitialStatusQuantity = StringUtils.orEmpty(result.initialStatusQty);
      this.replenishmentQuantityUnit = StringUtils.orEmpty(result.quantityUnit);

      this.replenishmentAfterFlightQuantityFromAC = ObjectUtils.isDefined(result.afterFlightQtyFromAc)
        ? NumberUtils.roundNumber(Number(result.afterFlightQtyFromAc), 0).toString()
        : '';
    });
  }

  private setReplenishmentTableColList(): void {
    this.replenishmentMeasureTableColList = [
      { field: 'measureSource', alignment: 'left', width: '12.5%' },
      { field: 'quantity', alignment: 'right', width: '12.5%' },
      { field: 'volume', alignment: 'right', width: '12.5%' },
      { field: 'density', alignment: 'right', width: '12.5%' },
      { field: 'occurrence', alignment: 'left', width: '12.5%' },
      { field: 'date', alignment: 'left', width: '12.5%' },
      { field: 'origin', alignment: 'left', width: '12.5%' },
      { field: 'rmBatchNumber', alignment: 'left', width: '12.5%' }
    ];
  }

  public cancel(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmInvalidation'),
      accept: () => {
        const input: BidoMissionEquipmentDTOId = {
          equipmentCode: this.equipment.equipmentCode,
          missionCode: this.missionEquipmentId.missionCode,
          occurrence: this.missionEquipmentId.occurrence
        };
        this.flightFormService.cancelFlightReplenishmentValidation(input).subscribe(
          (result) => {
            if (ObjectUtils.isDefined(result)) {
              this.missionEquipment.repleValidationDate = undefined;
              this.missionEquipment.repleValidationUser = undefined;
              this.replenishmentValidationStatus = ControlConfigConstants.ICON_RED;

              this.messageService.showSuccessMessage(this.getTranslateKey('successOnInvalidation'));
            }
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnInvalidation'));
          }
        );
      }
    });
  }

  public validate(): void {
    this.confirmationService.confirm({
      messageKey: this.getTranslateKey('confirmValidation'),
      accept: () => {
        const input: BidoMissionEquipmentDTOId = {
          equipmentCode: this.equipment.equipmentCode,
          missionCode: this.missionEquipmentId.missionCode,
          occurrence: this.missionEquipmentId.occurrence
        };
        this.flightFormService.validateFlightReplenishment(input).subscribe(
          (result) => {
            if (ObjectUtils.isDefined(result)) {
              this.missionEquipment.repleValidationDate = result.repleValidationDate;
              this.missionEquipment.repleValidationUser = result.repleValidationUser;
              this.replenishmentValidationStatus = ControlConfigConstants.ICON_GREEN;

              this.messageService.showSuccessMessage(this.getTranslateKey('successOnValidation'));
            }
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnValidation'));
          }
        );
      }
    });
  }

  private calculateReplenishmentValidationStatus(): void {
    this.replenishmentValidationStatus = ObjectUtils.isDefined(this.missionEquipment.repleValidationDate)
      ? ControlConfigConstants.ICON_GREEN
      : ControlConfigConstants.ICON_RED;
  }

  public showValidateReplenishmentButton(): boolean {
    return (
      this.replenishmentValidationStatus === this.controlConfigConstants.ICON_RED && !!this.replenishmentTypeSelected
    );
  }

  public showCancelReplenishmentButton(): boolean {
    return this.replenishmentValidationStatus === this.controlConfigConstants.ICON_GREEN;
  }
}
