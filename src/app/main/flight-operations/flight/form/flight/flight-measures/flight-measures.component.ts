import { Component, ElementRef, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';

import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../../../shared/services/date.service';
import { ExportService } from '../../../../../../shared/services/export.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { FindAllBidoMeasureByFlightForFlightInput } from '../../../../../../shared/types/api-input-types/fleet-management/find-all-bido-measure-by-flight-for-flight-input.interface';
import { FindAllBidoMeasureByFlightForFlightOutput } from '../../../../../../shared/types/api-output-types/fleet-management/find-all-bido-measure-by-flight-for-flight-output.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoMeasureDTO } from '../../../../../../shared/types/api-types/bido-measure-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';
import { GenericComponent } from '../../../../../../shared/types/generic-component';
import { TableColumn } from '../../../../../../shared/types/table-column.interface';
import { BireItemUtils } from '../../../../../../shared/utils/bire-item-utils';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { FlightFormService } from '../flight-form.service';

interface FlightMeasureRow {
  author: string;
  code: string;
  coefficient: string;
  comment: string;
  delta: string;
  designation: string;
  item: string;
  pn: string;
  readingDate: string;
  sn: string;
  source: string;
  state: string;
  status: string;
  time: string;
  unit: string;
  value: string;
  formattedValue: string;
  _id: string;
  _deltaAlt: string | undefined;
  _equipment: BidoEquipmentDTO | undefined;
  _expand: boolean;
  _measure: BidoMeasureDTO;
}

@Component({
  selector: 'aw-flight-flight-measures',
  templateUrl: './flight-measures.component.html'
})
export class FlightMeasuresComponent extends GenericComponent {
  private static readonly EXPORT_TRANSLATE_KEY: string = 'FlightMeasuresComponentExport';

  public table: FlightMeasureRow[];
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public showMeasureCoefAndComment: boolean;

  // Inputs *********************************************************************

  @Input()
  public componentEltRef: ElementRef;

  @Input()
  public measureReferenceList: BireMeasureReferenceDTO[];

  @Input()
  public missionCode: string;

  // ****************************************************************************

  public constructor(
    public sessionService: SessionService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    private readonly flightFormService: FlightFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read);
    this.showMeasureCoefAndComment = true;

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  public getComponentName(): string {
    return 'FlightMeasuresComponent';
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.table = [];
    this.tableLoading = false;
  }

  public onLoad(equipmentCode: string, missionInstanceCode: string): void {
    this.tableLoading = true;

    const input: FindAllBidoMeasureByFlightForFlightInput = {
      equipmentCode,
      missionInstanceCode
    };
    this.flightFormService.findAllBidoMeasureByFlight(input).subscribe(
      (measureResults) => {
        if (ListUtils.isNullOrEmpty(measureResults)) {
          this.tableLoading = false;
        } else {
          this.flightFormService
            .findAllEquipmentInStructureByEquipmentCode(equipmentCode)
            .pipe(
              finalize(() => {
                this.tableLoading = false;
              })
            )
            .subscribe((equipmentResults) => {
              if (!ListUtils.isNullOrEmpty(equipmentResults)) {
                const equipmentMap = new Map<string, BidoEquipmentDTO>();
                equipmentResults
                  .filter((equipmentResult) => ObjectUtils.isDefined(equipmentResult))
                  .forEach((equipmentResult) => {
                    equipmentMap.set(equipmentResult.equipmentCode as string, equipmentResult);
                  });

                this.table = measureResults
                  .filter(
                    (measureResult) =>
                      ObjectUtils.isDefined(measureResult.bidoMeasureDTO) &&
                      ObjectUtils.isDefined((measureResult.bidoMeasureDTO as BidoMeasureDTO).measureId)
                  )
                  .map((measureResult) => this.createFlightMeasureRow(measureResult, equipmentMap));
              }
            });
        }
      },
      () => {
        this.tableLoading = false;
      }
    );
  }

  private onBeforeLoadOnce(): void {
    this.setTableColList();
  }

  // ****************************************************************************

  public exportTable(): void {
    const fileNamePrefixKey = super.getTranslateKey('fileNamePrefix', FlightMeasuresComponent.EXPORT_TRANSLATE_KEY);
    this.translateService.get(fileNamePrefixKey).subscribe((fileNamePrefix) => {
      const fileNameToExport =
        ((fileNamePrefix as string) || 'measure_list') +
        '-' +
        this.missionCode +
        '-' +
        this.dateService.dateWithHourToString(new Date());

      const exportOpts = {
        header: [
          'pn',
          'sn',
          'item',
          'designation',
          'code',
          'value',
          'delta',
          'unit',
          'readingDate',
          'source',
          'status',
          'statusDate',
          'statusState',
          'statusUser'
        ]
      };

      this.exportService.toExcel(
        this.table,
        fileNameToExport,
        FlightMeasuresComponent.EXPORT_TRANSLATE_KEY,
        exportOpts
      );
    });
  }

  public importPotential(): void {
    // TODO
  }

  public toggleTableRowDetailsVisibility(row: FlightMeasureRow): void {
    row._expand = !row._expand;
  }

  private createFlightMeasureRow(
    measureData: FindAllBidoMeasureByFlightForFlightOutput,
    equipmentMap: Map<string, BidoEquipmentDTO>
  ): FlightMeasureRow {
    const measure = measureData.bidoMeasureDTO as BidoMeasureDTO;
    const equipment = measure.equipmentCode ? equipmentMap.get(measure.equipmentCode) : undefined;
    const selectedUnit = this.measureReferenceList.find((elt) => elt.counterCode === measure.counterCode);
    const formattedValue =
      StringUtils.orEmpty(measure.value) +
      (!StringUtils.isNullOrEmpty(measure.value) && selectedUnit && !StringUtils.isNullOrEmpty(selectedUnit.unitCode)
        ? `(${selectedUnit.unitCode})`
        : '');

    let designation: string | undefined;
    let item: string | undefined;
    let pn: string | undefined;
    let sn: string | undefined;

    if (equipment) {
      designation = equipment.equipmentDesignation;
      item = BireItemUtils.createItemKey(equipment);
      pn = equipment.pnCode;
      sn = equipment.sn;
    }

    const flightMeasureRow: FlightMeasureRow = {
      formattedValue,
      author: StringUtils.orEmpty(measure.statusUser),
      code: StringUtils.orEmpty(measure.counterCode),
      coefficient: measure.coefficient || '1',
      comment: StringUtils.orEmpty(measure.measureDescription),
      delta: StringUtils.orEmpty(measureData.delta),
      designation: StringUtils.orEmpty(designation),
      item: StringUtils.orEmpty(item),
      pn: StringUtils.orEmpty(pn),
      readingDate: this.dateService.dateToString(measure.readingDate),
      sn: StringUtils.orEmpty(sn),
      source: StringUtils.orEmpty(measure.source),
      state: StringUtils.orEmpty(measureData.state),
      status: StringUtils.orEmpty(measure.status),
      time: this.dateService.dateWithHourToString(measure.statusDate),
      unit: selectedUnit ? StringUtils.orEmpty(selectedUnit.unitCode) : '',
      value: StringUtils.orEmpty(measure.value),
      _id: measure.measureId as string,
      _deltaAlt: measureData.deltaAlt,
      _equipment: equipment,
      _expand: false,
      _measure: measure
    };

    return flightMeasureRow;
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'pn', alignment: 'left', width: '12.5%' },
      { field: 'sn', alignment: 'left', width: '12.5%' },
      { field: 'item', alignment: 'left', width: '12.5%' },
      { field: 'designation', alignment: 'left', width: '25%' },
      { field: 'code', alignment: 'left', width: '12.5%' },
      { field: 'formattedValue', alignment: 'left', width: '12.5%' },
      { field: 'readingDate', alignment: 'left', width: '12.5%' }
    ];
    this.showMeasureCoefAndComment = !this.sessionService.isSpecificDassault;
  }
}
